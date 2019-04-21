//index.js
//获取应用实例
const app = getApp()
const date = new Date()
const years = []
const months = []
const days = []
const initData = '1.网页设计实验六实验报告\n2.数据库需求分析报告'
const extraLine = []
for (let i = date.getFullYear(); i <= 2025; i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    date: '2019-04-02',
    getInput:'',
    value: [0, 3, 0],
    text: initData,
    iconType: ['warn'],
    array: [{
      mode: 'aspectFill',
      text: ''
    }],
    src: '../img/hmbb.jpg'
  },
  imageError(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  getInput: function (e) {
        this.setData({
            getInput: e.detail.value
        })
    },
  add(e) {
    let x = this.data.getInput;
    if (x == '' || x == ' ') {
      wx: wx.showToast({
        title: '请输入内容'
      })
       return false
    }
    else {
      extraLine.push(extraLine.length + 3 + '.' + x),
        this.setData({
          text: initData + '\n' + extraLine.join('\n'),
          getInput: ''
        })
      wx.showToast({
        title: '添加成功',
      })
    } 
  },
  remove(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
      wx.showToast({
        title: '删除成功',
      })
    }
  }
})
/*
inputValue: '',
years,
    year: date.getFullYear(),
    months,
    month: 4,
    days,
    day: 1,*/
  /*
   bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
*/
/*,
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  }*/
/*
  */
//
  /* motto: '记得写作业',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),*/
 /*
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
*/