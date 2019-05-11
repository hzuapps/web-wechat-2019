// cc/cc.js
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
      url: 'https://api.apiopen.top/musicRankings',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data);
        that.callback(res.data)
      }
    })
  },
  callback: function (res) {
    //console.log(res);
    var shipin = [];
    for (var idx in res.result) {
      //console.log(idx)
      var subject = res.result[idx];
      //console.log(subject)
      for (var i = 0; i < 4; i++) {
        //console.log(subject.content[i].title)
        var temp = {
          title: subject.content[i].title,
          author: subject.content[i].author,
          imges: subject.content[i].pic_small,
        }
        shipin.push(temp);
      }
    }
    console.log(shipin);
    this.setData({ gequ: shipin })

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