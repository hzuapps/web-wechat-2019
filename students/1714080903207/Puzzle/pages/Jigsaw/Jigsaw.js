// pages/newJigsaw/newJigsaw.js
let app = getApp();
const device = app.globalData.device;
const width = device.windowWidth;
const screanHeight = device.windowHeight;

const util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '', // 本地图片路径
    imgPath: '', // 服务器图片路径
    iwidth: 0, // 图片显示宽度
    left: 0, // 图片距左边距离

    col: 3,
    row: 3,

    blank: 8, //空白格
    total: 0, // 格子总数
    mwidth: 0, // 单个格子宽度
    mheight: 0, // 单个格子高度

    isShare: false, // 是否已经分享
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    // console.log('00000000000',e);
    let img = e.img;
    let iwidth = parseInt(width * 0.7);
    let left = (width - iwidth) / 2;

    this.setData({
      iwidth: iwidth,
      imgUrl: img,
      left: left,
    });
    this.createGridding();

  },


  // 创建相应数量的网格
  createGridding: function () {
    let col = this.data.col, // 列数
      row = this.data.row; // 行数
    let total = col * row;
    let iwidth = this.data.iwidth;
    let mwidth = iwidth / col,
      mheight = iwidth / row;
    // console.log('11111111', total, mwidth, mheight);
    this.setData({
      total: total,
      mwidth: mwidth,
      mheight: mheight
    })
  },


  // 返回首页
  goIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  // 取消
  cancel: function () {
    
      wx.navigateBack({
        delta: 1
      })
  },

  changeBlank: function (e) {
    this.data.blank = e.currentTarget.id;
    console.log('87684', this.data.blank);
  },
  begin: function (e) {
    let obj = {};
    obj.img = this.data.imgUrl;
    obj.col = this.data.col;
    obj.rowNum = this.data.row;
    obj.blank = this.data.blank;
    wx.navigateTo({
      url: '/pages/play/play?task=' + JSON.stringify(obj),
    })
  }

})