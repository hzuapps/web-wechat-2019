// pages/logs/index.js
Page({

  data :{

   bian:true

  },

onLoad: function () {

  app.AppMusic.src = 'https://www.kugou.com/song/#hash=166CCC460414603CC50A4418E5CE4363&album_id=587087'

  },
   audioPlay: function () {
    app.AppMusic.play();
    app.AppMusic.onPlay(() => {
      this.setData({
        bian: true
      })
    })


  },
  audioPause: function () {
    app.AppMusic.pause();
    app.AppMusic.onPause(() => {
      this.setData({
        bian: false
      })
    })
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
