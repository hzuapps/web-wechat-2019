var adds = {}; 
var app = getApp();
Page({
  focus: false,
  inputValue: '',
  
  /**
   * 页面的初始数据
   */
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput(e) {
    const value = e.detail.value
    let pos = e.detail.cursor
    if (pos != -1) {
      // 光标在中间
      const left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },

  data: {
    msg: '',
    imgArr: [],
    formdata: ''
  },
 
  
  showToast() {
    var self = this;
    wx.showToast({
      title: '成功',
      icon: 'success',
      success: function (res) {
        self.setData({ msg: '' });
      }
    })
  },
 
 
  

  //添加图片
  addImg: function () {
    var that = this;
    var imgArr = this.data.imgArr;
    wx.chooseImage({
      count: 9 - imgArr.length, //最多可以选择的图片张数,默认9
      success: function (res) {
        var imgsrc = res.tempFilePaths;
        imgArr = imgArr.concat(imgsrc);
        that.setData({
          imgArr: imgArr
        })
        that.uploadimg();
      }
    })
  },
  //上传图片
  uploadimg: function () {
    var that = this, imgArr = this.data.imgArr;
    this.uploading({
      url: '',
      path: imgArr,
      //imgpic:[]
    })
  },
  uploading: function (data) {
    var that = this,
      i = data.i ? data.i : 0,
      success = data.success ? data.succcess : 0,
      fail = data.fail ? data.fail : 0;
    var imgpic = data.imgpic;
    wx.uploadFile({
      url: data.url,
      filePath: data.path[i],
      name: 'file',
      formData: {},
      success: (resp) => {
        success++;    //图片上传成功的变量+1
        console.log(i);
        //var s=JSON.parse(resp.data);
        //imgpic.push(s.data.infopath);
        //that.setData({
        //    imgpic:imgpic
        //})
        //这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
      },
      fail: (res) => {
        fail++;    //上传失败
        console.log('fail:' + i + "fail:" + fail)
      },
      complete: () => {
        i++;
        if (i == data.path.length) {    //图片上传完成，停止调用
          console.log('执行完毕');
          console.log('成功：' + success + " 失败：" + fail);
        } else { //图片没有传完
          data.i = i;
          data.success = success;
          data.fail = fail;
          //data.imgpic = imgpic;
          that.uploading(data)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */






  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})