//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputValue: '',
    addTel: '',
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,

  },
  ontouch1: function () {
    wx.redirectTo({
      url: '../index/index',
    })

    if (this.data.inputValue) {
      wx.setStorage({
        key: "addTel",
        data: this.data.inputValue,
      })
    } else {
      wx.showModal({
        title: '手机号为空',
        content: '请输入手机号码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确认')
          }
        }
      })
    }
    
  },

  onShow: function () {
    var that = this;
   
    wx.getStorage({
      key: 'addTel',
      success: function (res) {
        console.log(res.data)
        that.setData({
          addTel: res.data
          
        })     
      }
    })
   
  },
  
  ontouch2: function (e) {
    wx.downloadFile({
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=116203147,1152996080&fm=26&gp=0.jpg",
      success: function (res) {
        console.log(res);
        var rr = res.tempFilePath;
        wx.saveImageToPhotosAlbum({

          filePath: rr,
          success(res) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  },

  ontouch3:function(e){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  onShareAppMessage: function () {

    return {

      title: '自定义分享标题',

      desc: '自定义分享描述',

      path: '/page/index?id=123'

    }

  }
  
})
