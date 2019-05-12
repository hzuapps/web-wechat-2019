var _app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      { text: '账号信息', icon: '../../images/center.png', tips: '' },
      { text: '参与活动', url: '../borrowbook/borrowbook?status=N', icon: '../../images/usermenu/order.png', tips: '' },
      { text: '历史活动', url: '../borrowbook/borrowbook?status=F', icon: '../../images/usermenu/history.png', tips: '' },
      { text: '关于我们', url: '../borrowbook/borrowbook?status=Y', icon: '../../images/usermenu/huan.png', tips: '' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    _app.getUserInfo(function (userinfo) {
      console.log(userinfo)
      console.log(getApp().globalData.userSign)
      that.setData({
        userinfo: userinfo,
        userSign: getApp().globalData.userSign,
      })
    })
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
    let that = this
    _app.getUserInfo(function (userinfo) {
      console.log(userinfo)
      console.log(getApp().globalData.userSign)
      that.setData({
        userinfo: userinfo,
        userSign: getApp().globalData.userSign,
      })
    })
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
