// pages/information/information.js
const app = getApp()
const timer1 = app.globalData.timer1
const countDownNum1 = app.globalData.countDownNum1
const obj1 = app.globalData.obj1
Page({

  /**
   * 页面的初始数据
   */
  data: {
      obj: obj1
  },
  // /***增加组件 */
  Add: function (e) {
    var temp = this.data.obj;
    temp.push(this.data.obj.length);
    this.setData({
      obj: temp
    })
  },
  /***** 删除最后一个组件*/
  // onTapDel: function (e) {
  //   var temp = this.data.obj;
  //   temp.pop(this.data.obj.length);
  //   this.setData({
  //     obj: temp
  //   })
  // },
  /*全删 */
  onTapDel: function (e) {
    var temp = this.data.obj;
    for (var i = this.data.obj.length; i > 0; i--) {
      temp.pop(this.data.obj.length);
      this.setData({
        obj: temp
      })
    }
  },












  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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