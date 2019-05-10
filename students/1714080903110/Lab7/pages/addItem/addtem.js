// pages/addItem/addtem.js
var newID = -1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    desc:'',
    date: "2016-01-01",
    newList: []
  },

  showTopTips: function () {
    let pages = getCurrentPages();
    let currPage = null; //当前页面
    let prevPage = null; //上一个页面
    newID = newID + 1
    console.log(newID)
    if (pages.length >= 2) {
      currPage = pages[pages.length - 1]; //当前页面
      prevPage = pages[pages.length - 2]; //上一个页面
    }
    if (prevPage) {
      var len = prevPage.data.dataList
      this.setData({
        newList:prevPage.data.dataList,
      })
      this.data.newList.push({id:newID, name: this.data.name, time: this.data.date, desc: this.data.desc })
      prevPage.setData({
        dataList:this.data.newList
      });
      wx.setStorage({
        key: 'VaccineItem',
        data: this.data.newList
      })
    }
  
    wx.navigateBack({
      delta : 1
    })
  },

  getName: function(e){
    this.setData({
      name:e.detail.value
    })
  },

  getDesc: function(e){
    this.setData({
      desc:e.detail.value
    })
  },
  
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
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