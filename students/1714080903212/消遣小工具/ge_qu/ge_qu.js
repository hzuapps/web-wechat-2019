// ge_qu/ge_qu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gequ: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/ccgcgh/web-wechat-2019/master/students/1714080903212/yinyue.json',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data);
        that.callback(res.data)
      }
    })
  },
  callback: function (res) {
    //console.log(res);
    var mes = [];
    for (var idx in res.message) {
      //console.log(idx)
      var subject = res.message[idx];
      var temp = {
        poster: subject.poster,
        name: subject.name,
        author: subject.author,
        src: subject.src
      }
      mes.push(temp);
    }
    this.setData({ gequ: mes })

    //console.log(mes);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
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