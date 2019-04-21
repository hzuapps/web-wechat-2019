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
  bindViewTap: function () {
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
  getUserInfo: function (e) {
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
      'http://img.hb.aicdn.com/940ec95e5fea67131cbb39e9ef755a1b9888ee3396ca-VKBoZV_fw658',
      'http://d00.paixin.com/thumbs/1007989/46208083/staff_1024.jpg?watermark/1/image/aHR0cDovL2QwMC5wYWl4aW4uY29tL3dtX2RwXzM2MF9iaWdnZXIucG5n/dissolve/100/gravity/SouthWest/dx/0/dy/0',
      'http://baby.k618.cn/yesj/36s/201702/W020170220693861708919.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    height: 0
  }
})