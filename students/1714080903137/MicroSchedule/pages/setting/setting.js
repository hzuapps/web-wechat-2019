Page({
  onShow: function() {
    wx.setNavigationBarTitle({
      title: 'Set'
    })
    this.setData({
    	workTime: wx.getStorageSync('workTime'),
    	restTime: wx.getStorageSync('restTime')
    })
  },
  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  }
})
