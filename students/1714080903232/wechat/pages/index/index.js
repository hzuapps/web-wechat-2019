

var app = getApp();
// pages/logs/index.js
Page({

  data :{

    on: true 

  },


  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  onLoad: function () {

  },
  audioPlay: function () {
    app.AppMusic.play();
    app.AppMusic.onPlay(() => {
      this.setData({
        on: true
      })
    })


  },
  audioPause: function () {
    app.AppMusic.pause();
    app.AppMusic.onPause(() => {
      this.setData({
        on: false
      })
    })


  },

   
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取BackgroundAudioManager 实例
    this.back = wx.getBackgroundAudioManager()

    // 对实例进行设置
    this.back.src = "http://fs.w.kugou.com/201904212238/aab1e6086640824b16b38dd35eefb4f8/G141/M04/16/14/zQ0DAFvISSKAHUP_ADnuB2mBdUA803.mp3"
    this.back.title = 'luv letter'   // 标题为必选项
    this.back.play()               // 开始播放
 
  },
  
  stop() {           // 点击音乐图标后出发的操作
    this.setData({
      on: !this.data.on
    })
    if (this.data.on) {
      // 这里有点不明白，如果不重新加链接，音乐不会播放；  希望知道的人能分享告诉我
      this.back.src = "http://fs.w.kugou.com/201904212238/aab1e6086640824b16b38dd35eefb4f8/G141/M04/16/14/zQ0DAFvISSKAHUP_ADnuB2mBdUA803.mp3"
      this.back.title = 'luv letter'
      this.back.play()
    } else {
      this.back.stop()
    }
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
