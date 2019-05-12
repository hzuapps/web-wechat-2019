// pages/search_rusult/search_result.js
const app = getApp()
var t
Page({

  /**
   * 页面的初始数据
   */
  data: {
    st:[]
  },
  click:function(e){
    var id = parseInt(e.currentTarget.id.substring(3))
    console.log(e)
    console.log(id);
    console.log(t)
    app.globalData.CLASS = t[id]
    wx.navigateTo({
      url: '../T/t',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.JXL)
    console.log(app.globalData.WEEK)
    console.log(app.globalData.DAY)
    console.log(app.globalData.JIE)
    var that = this
    wx.request({
      url: 'https://raw.githubusercontent.com/xianpeijie/web-wechat-2019/master/students/1714080903120/EmptyClass/EmptyKS/' + app.globalData.JXL + '/' + app.globalData.WEEK + '-' + app.globalData.DAY + '.json', 
      method: 'GET',
      header: {
        'content-type': 'application/json;' // 默认值
      },
      success(res) {
        //console.log(res.data)
        t = res.data
        //console.log(t)
        t = t['jie' + app.globalData.JIE]
        console.log(t.split(','))
        t = t.split(',')
        that.setData({
          st: t
        })
      }
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