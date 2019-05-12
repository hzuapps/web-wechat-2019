//logs.js
Page({
  data:{
    logs: []
  },
  onShow: function () {
    var logs = wx.getStorageSync('要做_记录')
    if (logs) {
      this.setData({ logs: logs.reverse() })
    }
  },
})
