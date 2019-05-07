//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数
   */
  data: {
    plain: true,//按钮边框
   
  },

  /**
   * 首页页面跳转
   */
  jumpPage1: function () {
    wx.redirectTo({
      url: '../chaju/chaju',
    })
  },
  jumpPage2: function () {
    wx.navigateTo({
      url: '../chami/chami',
    })
  },
  jumpPage3: function () {
    wx.navigateTo({
      url: '../chongcha/chongcha',
    })
  },
  jumpPage4: function () {
    wx.navigateTo({
      url: '../lishi/lishi',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(){},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function(){},

  

})
