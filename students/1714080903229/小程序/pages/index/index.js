//index.js
//获取应用实例
const app = getApp()
var initData = ''
var extraLine = []
Page({
  data: {
    text: initData,
    flag:"none",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '记事本'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3197ed',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    
  },
  openConfirm: function () {

    wx.showModal({

      title: '请输入内容',

      content: getval,

      confirmText: "主操作",

      cancelText: "辅助操作",

      success: function (res) {

        console.log(res);

        if (res.confirm) {

          console.log('用户点击主操作')

        } else {

          console.log('用户点击辅助操作')

        }

      }

    });

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showmask:function(){
    this.setData({
      flag:"block"
    })
  },
  add:function(){
    extraLine.push(initData)
    this.setData({
      text: extraLine.join('\n')
    })
  },
  del:function(){
    if (extraLine.length > 0){
      extraLine.pop()
      this.setData({
        text: extraLine.join('\n')
      })
    }
  },
  getinput:function(e){
    initData = e.detail.value
  },
  mask:function(){
    this.setData({
      flag:"none"
    })
  },
  prevent:function(){
    
  }
})


