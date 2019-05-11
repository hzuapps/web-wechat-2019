//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

const app = getApp()

Page({
  data: {
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    "welcome": "Hello WeChat Mini Program",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: 'http://img4.imgtn.bdimg.com/it/u=466214409,2328384175&fm=200&gp=0.jpg' },
      { url: 'http://y1.ifengimg.com/news_spider/dci_2013/11/7bc7ded4426fb46714838ed9ae27d43e.jpg' },
      { url: 'http://img2.imgtn.bdimg.com/it/u=1723817164,953308204&fm=26&gp=0.jpg' },
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 3000,  //间隔时间
    duration: 3000, //滑动时间
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://raw.githubusercontent.com/shinubi1/web-wechat-2019/master/students/1714080903242/index.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data,
        })
      }
    })
  }
  ,
  a: function (options) {
    wx.switchTab({
      url: '../logs/logs',
    })
  },

  setLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  } 
})
