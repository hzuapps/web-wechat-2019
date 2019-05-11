// pages/fortune-result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pixelRatio: 0,
    windowWidth: 0,
    windowHeight: 0,
    showBgImagePath:'',
    showBgImagePath2: '../../images/showtextbg@2x.png',
    showBgImagePath3: '../../images/showtextbg@3x.png',
    dogBgImagePath:'',
    qrBgImagePath: '../../images/qr@2x.jpg',
    name: '',
    title: '',
    desc: ''
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
    return {
      title: '随机诗句',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '转发失败',
          icon: 'loading',
          duration: 2000
        })
      }
    }
  }
})