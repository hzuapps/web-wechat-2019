// pages/T/t.js
const app = getApp()
var t
Page({

  /**
   * 页面的初始数据
   */

  data: {


    infeed: ['', "周一", "周二", "周三", "周四", "周五", "周六", "周日" ],

    endwise1: "一",
    tb: ['', '', '', '', '', '', ''],

    endwise2: "二",
    tc: ['', '', '', '', '', '', ''],

    endwise3: "三",
    td: ['', '', '', '', '', '', ''],

    endwise4: "四",
    te: ['', '', '', '', '', '', ''],

    endwise5: "五",
    tf: ['', '', '', '', '', '', ''],

    endwise6: "六",
    tg: ['', '', '', '', '', '', ''],
  },
  getdetail:function(e){
    console.log(e);
    var s = e.currentTarget.id
    var x = s[0]
    var y = s.substring(4, )
    console.log(x + "," + y)      //网格坐标
    console.log(t['week' + (parseInt(y) + 1)]['jie' + (parseInt(x) + 1)])
    app.globalData.NOWDETAIL = t['week' + (parseInt(y) + 1)]['jie' + (parseInt(x) + 1)]
    wx.navigateTo({
      url: '../T/detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var res = wx.getSystemInfoSync();
    this.setData({
      appHeight: res.windowHeight
    });
    
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
    var that = this
    wx.request({
      url: 'https://raw.githubusercontent.com/xianpeijie/web-wechat-2019/master/students/1714080903120/EmptyClass/JSKB/' + app.globalData.JXL + '/' + app.globalData.JXL + '-'+ app.globalData.CLASS + '.json',  
      method: 'GET',
      header: {
        'content-type': 'application/json;' // 默认值
      },
      success(res) {
        console.log(app.globalData.CLASS)
        t = res.data
        
        that.setData({
          Class: app.globalData.CLASS,
          tb: [t['week1']['jie1']['name'], t['week2']['jie1']['name'], t['week3']['jie1']['name'], t['week4']['jie1']['name'], t['week5']['jie1']['name'], t['week6']['jie1']['name'], t['week7']['jie1']['name']],

          tc: [t['week1']['jie2']['name'], t['week2']['jie2']['name'], t['week3']['jie2']['name'], t['week4']['jie2']['name'], t['week5']['jie2']['name'], t['week6']['jie2']['name'], t['week7']['jie2']['name']],

          td: [t['week1']['jie3']['name'], t['week2']['jie3']['name'], t['week3']['jie3']['name'], t['week4']['jie3']['name'], t['week5']['jie3']['name'], t['week6']['jie3']['name'], t['week7']['jie3']['name']],

          te: [t['week1']['jie4']['name'], t['week2']['jie4']['name'], t['week3']['jie4']['name'], t['week4']['jie4']['name'], t['week5']['jie4']['name'], t['week6']['jie4']['name'], t['week7']['jie4']['name']],

          tf: [t['week1']['jie5']['name'], t['week2']['jie5']['name'], t['week3']['jie5']['name'], t['week4']['jie5']['name'], t['week5']['jie5']['name'], t['week6']['jie5']['name'], t['week7']['jie5']['name']],

          tg: [t['week1']['jie6']['name'], t['week2']['jie6']['name'], t['week3']['jie6']['name'], t['week4']['jie6']['name'], t['week5']['jie6']['name'], t['week6']['jie6']['name'], t['week7']['jie6']['name']],
        })

      }
    })
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