//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "welcome": "Hello WeChat Mini Program",
  },
  openToast: function () {
    wx.showToast({
      title: '啥也没有！！！',
      icon: 'success',
      duration: 3000
    });
  },
  openLoading: function () {
    wx.showToast({
      title: '点击另一个试试',
      icon: 'loading',
      duration: 3000
    });
  }
  //事件处理函数

})
