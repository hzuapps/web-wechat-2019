// pages/weather/weather.js
var app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cur_id:app.curid,basic:"",now:""
  },
  bindViewTap:function(){wx.switchTab({
    url: '../city/city'})}
})