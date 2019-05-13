App({
  onLaunch: function () {
    wx.showToast({
      title: 'dalao您来啦',
      image: '/img/2.gif',
      duration: 3000
    }) }
})

Page({
  data:{
    focus: false,
    I:0,
    Y:0,
    J:5280,
    K:480,
    x:1
  },
 SHURU: function (e) {
    this.setData({
      I: e.detail.value
    })
  },
  SHURU1: function (e) {
    this.setData({
      Y: e.detail.value
    })
  },
  a:function(){
    this.setData({
      x:1
    })
    wx.showToast({
      title: '计算泰伯尔斯',
      image: '/img/18.jpg',
      duration: 3000
  })},
  b:function(){
    this.setData({
      x:0
    })
    wx.showToast({
      title: '计算超界升级',
      image: '/img/22.jpg',
      duration: 3000
    })
  } 
  })