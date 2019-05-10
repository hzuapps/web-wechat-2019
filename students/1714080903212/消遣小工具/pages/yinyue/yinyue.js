Page({
  data: {
    files: ['新歌榜', '热歌榜', '摇滚榜', '爵士', '流行', '欧美金曲榜', '经典老歌榜', '情歌对唱榜', '影视金曲榜', '网络歌曲榜']
  },
  onLoad: function () {
    wx: wx.navigateTo({
      url: '../../ge_qu/ge_qu',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
});