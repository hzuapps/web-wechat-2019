// pages/play/play.js
let app = getApp();
const device = app.globalData.device;
const width = device.windowWidth;

const util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: 0,
    src: '', // 图片链接
    col: 0, // 拼图列数
    row: 0, // 拼图行数

    total: 0, // 拼图块数量
    mwidth: '', // 拼图块宽度
    mheight: '', // 拼图块高度

    back: [], // 拼图各个块的位置和背景图片位置信息
    blank: 0,
    displayNo: 0,

    disabled: false,
    success: false, // 拼图成功
    animationData: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    let task = e.task;
    let that = this;
    console.log('0000000000', task);
    if (task) {
      let left = (width - 300) / 2;

      task = JSON.parse(task);
      let total = task.col * task.rowNum;
      let mwidth = 300 / task.col,
        mheight = 300 / task.rowNum;

      this.setData({
        left: left,
        src: task.img,
        col: task.col,
        row: task.rowNum,
        total: total,
        mwidth: mwidth,
        mheight: mheight,
        blank: task.blank
      });
      this.insertBack(task);
      setTimeout(() => {
        // 开始打乱顺序
        console.log('开始打乱顺序动画');
        let arr = this.data.back;
        arr = this.createArr(arr);
        this.setData({
          back: arr
        })

      }, 1000);

    }
  },

  // 设置每个网格的背景图位置
  insertBack: function (obj) {
    let total = obj.col * obj.rowNum,
      col = obj.col,
      row = obj.rowNum;
    let w = 300 / col,
      h = 300 / row;
    let arr = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        let obj = {};
        obj.hover = '';
        obj.order = i * col + j;
        obj.top = -(i * h);
        obj.left = -(j * w);
        obj.mtop = i * h;
        obj.mleft = j * w;

        obj.animation = {};
        if (obj.order != this.data.blank)
          obj.isShow = true;
        else {
          obj.isShow = false;
          this.data.displayNo = i * 3 + j;
        }
        arr.push(obj)
      }
    }
    console.log('初始化拼图分割', arr);
    this.setData({
      back: arr
    })
    // console.log("486ds4", this.data.back);
  },

  // 生成无序数组
  createArr: function (back) {
    let len = this.data.total;
    let that = this;
    let arr = Array.from(Array(len), (v, k) => k);
    let i;
    do {
      len=9;
      while (len) {
        i = (Math.random() * len--) >>> 0;
        [arr[len], arr[i]] = [arr[i], arr[len]];
      }
    } while (!that.unSolve(arr))//直到生成有解数组
    console.log("test", arr);

    let res = [];
    let col = this.data.col,
      row = this.data.row;
    for (let ind in arr) {
      let obj = back[arr[ind]];
      let mcol = ind % col,
        mrow = parseInt(ind / col);
      // console.log('222222',ind,mcol,mrow);
      // obj.order = arr[ind];
      obj.mtop = mrow * (300 / row);
      obj.mleft = mcol * (300 / col);
      if (obj.isShow == false)
        this.data.displayNo = ind;
      res.push(obj);
      // if(ind==this.data.blank)
      //   isShow=false;
    }
    console.log('打乱顺序', res);
    console.log('7789', this.data);
    return res
  },



  move: function (e) {
    let index = e.currentTarget.dataset.id;
    let that = this;
    let displayNo = this.data.displayNo;
    let arr = this.data.back;
    if (that.canSwop(displayNo, index)) {
      this.backSwop(arr, index, displayNo);

      this.data.displayNo = index;

      this.setData({
        back: arr
      })

      // 设置动画
      //  let animation = wx.createAnimation({
      //    duration: 1000,
      //    timingFunction: "ease",
      //    transformOrigin: "50% 0%",
      //  });

      //  animation.translate(-30, -50).step();
      //  this.setData({
      //    animationData:animation
      //  })

      setTimeout(() => {
        // 判断是否拼完整了
        let success = this.judgeSuccess(arr);
        this.setData({
          success: success
        });
      }, 500)

    }
  },

  canSwop: function (displayNo, index) {
    let arr = [];
    if (displayNo == 0) arr = [1, 3];
    else if (displayNo == 1) arr = [0, 2, 4];
    else if (displayNo == 2) arr = [1, 5];
    else if (displayNo == 3) arr = [0, 4, 6];
    else if (displayNo == 4) arr = [1, 3, 5, 7];
    else if (displayNo == 5) arr = [2, 4, 8];
    else if (displayNo == 6) arr = [3, 7];
    else if (displayNo == 7) arr = [4, 6, 8];
    else if (displayNo == 8) arr = [5, 7];
    for (let i in arr) {
      if (arr[i] == index) return true;
    }
    return false;
  },

  backSwop: function (arr, index, displayNo) {
    let firstObj = arr[index],
      secondObj = arr[displayNo];
    let firstOrder = firstObj.order,
      firstTop = firstObj.mtop,
      firstLeft = firstObj.mleft;

    firstObj.order = secondObj.order;
    firstObj.mtop = secondObj.mtop;
    firstObj.mleft = secondObj.mleft;
    secondObj.order = firstOrder;
    secondObj.mtop = firstTop;
    secondObj.mleft = firstLeft;

    firstObj.hover = "";
    secondObj.hover = "";

    arr[displayNo] = firstObj;
    arr[index] = secondObj;


  },

  judgeSuccess: function (arr) {
    let res = false;
    let num = 0;
    for (let obj of arr) {
      let y = obj.top + obj.mtop,
        x = obj.left + obj.mleft;
      if (y === 0 && x === 0) {
        num++
      }
    }
    if (num == arr.length) {
      res = true;
      this.setDisabled(this.data.disabled);
      wx.showToast({
        title: '拼图成功',
        icon: 'success',
        duration: 1000
      })
    }
    return res
  },



  setDisabled: function (e) {//按钮有效性切换
    this.setData({
      disabled: !e
    })
  },

  //是否有解
  unSolve:function(arr) {
    if(null == arr && undefined == arr) {
      return false;
    }
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          counter = counter + 1;
        }
      }
    }
    if (counter % 2 === 0) 
      return true;
    else 
      return false;
  },

  preView: function () {
    let path = this.data.src;
    wx.previewImage({
      urls: [path],
    })
  },

  replay:function(){
    let arr=this.data.back;
    arr=this.createArr(arr);
    this.setData({
      back:arr
    })
  },

  goBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  goIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

})