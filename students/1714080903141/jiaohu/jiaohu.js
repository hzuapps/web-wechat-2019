// pages/jiaohu/jiaohu.js
Page({
  // 消息提示框
  oneTap: function (event) {
    wx.showToast({
      title: "成功",
      icon: 'success',
      duration: 20000,
      mask: false,
    })
  },
  // 隐藏消息提示框
  twoTap: function (event) {
    wx.hideToast()
  }

})