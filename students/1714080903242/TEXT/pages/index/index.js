//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "welcome": "Hello WeChat Mini Program",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

    return {

      title: '自定义分享标题',

      desc: '自定义分享描述',

      path: '/page/index?id=123'

    }

  },
  data: {
    imgUrls: [
      'http://img4.imgtn.bdimg.com/it/u=466214409,2328384175&fm=200&gp=0.jpg',
      'http://y1.ifengimg.com/news_spider/dci_2013/11/7bc7ded4426fb46714838ed9ae27d43e.jpg',
      'http://img2.imgtn.bdimg.com/it/u=1723817164,953308204&fm=26&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    height :0
  }
})
