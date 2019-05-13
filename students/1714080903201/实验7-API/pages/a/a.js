//a.js
//获取应用实例
var file = '../logs/logs'
Page({
  data: {
    text: "Page navigation"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  /**
   * 设置NavigationTitle
   */
  setNavigationBarTitle: function () {
    wx.setNavigationBarTitle({
      title: 'NavigationBarTitle'
    })
  },

  /**
   * 设置加载状态
   */
  showNavigationBarLoading: function () {
    wx.showNavigationBarLoading()
  },

  /**
   * 隐藏加载状态
   */
  hiddenNavigationBarLoading: function () {
    wx.hideNavigationBarLoading()
  },

  /**
   * 保留当前Page跳转
   */
  navigateTo: function () {
    wx.navigateTo({
      //传递参数方式向get请求拼接参数一样
      url: file + '?phone=18939571&password=1992',
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }

    })
  },
  /**
   * 关闭当前页面进行跳转当前页面会销毁
   */
  redirectTo: function () {
    wx.redirectTo({
      //传递参数方式向get请求拼接参数一样
      url: file + '?phone=189395719&password=1992'
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})