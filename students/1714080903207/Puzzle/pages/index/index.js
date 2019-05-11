//index.js
//获取应用实例
const app = getApp();
const util = require('../../utils/util');

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    files: [
      { id: 1, src: '/images/1.jpg' },
      { id: 2, src: '/images/2.jpg' },
      { id: 3, src: '/images/3.jpg' },
      { id: 4, src: '/images/4.jpg' },
      { id: 5, src: '/images/5.jpg' },
      { id: 6, src: '/images/6.jpg' },
    ],
    isUploadShow: true,
    backgroundImg: '/images/background.jpg',
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  downloadFile:function(){
    wx.downloadFile({
      url: 'http://localhost:8088/img/1.jpg',
      success: function (res) {
        if (success) {
          success(res.tempFilePath)
        }
      }
    })
  },
  getUserInfo: function (e) {
    // console.log('111111', e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 直接开始
  random: function () {
    let that=this;
    let num = Math.floor(Math.random() * Math.floor(6))+1;
    wx.navigateTo({
      url: '/pages/gameSetout/gameSetout?img=' + that.data.files[num],
    })
  },

  // 创建拼图
  create: function () {
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      count: 1,
      success: function (res) {
        console.log('图片信息', res);
        app.globalData.img = res.tempFilePaths;

        wx.navigateTo({
          url: '/pages/gameSetout/gameSetout?img=' + res.tempFilePaths,
        })
      }
    })
  },

  onShow: function () {
    let back = '/images/background.jpg';
    this.setData({
      backgroundImg: back
    })
  }
})
