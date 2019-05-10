//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    saveing:null,
    savedate:wx.getStorageSync('save'),
    inputShowed: false,
    inputVal: "",
    msgData: [],//所有发布数据
    msgData1: "",
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }, 
  bindViewTap: function () {
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
    } else if (this.data.canIUse) {
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
            avatarUrl: res.userInfo.avatarUrl,
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      avatarUrl: e.detail.userInfo.avatarUrl,
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },
  clearInput: function () {
  },
  inputTyping: function (e) {
    this.setData({
      saveing: e.detail.value,
      inputVal: e.detail.value
    });
  },
  
  tijiao: function () {
    wx.showModal({
      content: '发布成功',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('确定')
        }
      }
    });
  },
  fabu: function(e) {
    this.setData({
      saveing: e.detail.value,
      inputVal: e.detail.value//将发布框的数据存储到inputVal中，方便添加发布信息时获取
    });
  },
  tijiao: function(e) {
    //console.log(this.data.inputVal);
    var list = this.data.msgData;//获取所有发布信息
    list.push({
      //向list中添加当前添加的发布信息
      msg: this.data.inputVal
    });
    if (this.data.saveing == null) { this.data.saveing = wx.getStorageSync("save"); }
    var a1 = this.data.saveing;
    wx.setStorageSync('save', a1);
    this.setData({//将所有发布信息更新到msgData中。
      msgData: list
    });

  },
deleMsg(e) {
  var list = this.data.msgData;
  var n = e.target.dataset.index;//获取当前发布信息的index
  list.splice(n, 1);//删除索引号为n的数据
  this.setData({//将所有发布信息更新到msgData中
    msgData: list
  });
  },/**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
});