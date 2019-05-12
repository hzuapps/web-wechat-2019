//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    jxls: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    jlxsIndex:0,

    week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    weekIndex:0,

    day:["1", "2", "3", "4", "5", "6", "7"],
    dayIndex:0,

    jie:["1", "2", "3", "4", "5", "6"],
    jieIndex:0,
  },
  bindCountryChange1:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jlxsIndex: e.detail.value,
    })
    app.globalData.JXL = parseInt(e.detail.value)+1
  },
  bindCountryChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      weekIndex: e.detail.value,
     
    })
    app.globalData.WEEK = parseInt(e.detail.value)+1
  },

  bindCountryChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dayIndex: e.detail.value,
    })
    app.globalData.DAY = parseInt(e.detail.value)+1
  },
  bindCountryChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jieIndex: e.detail.value,
    })
    app.globalData.JIE = parseInt(e.detail.value)+1
  },
  search:function(){
    console.log("查找中~~~")

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  search:function(){
    console.log("111");
    wx.navigateTo({
      url: '../search_rusult/search_result',
    })
  },
  onLoad: function () {
  
  },
  getUserInfo: function(e) {

  }
})
