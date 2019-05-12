Page({
  data: {
  },
  x:function(){
    wx.showToast({
      title: '魔界人滚啊',
      image: '/img/19.jpg',
      duration: 3500
    })
  }
  ,
   c: function () {
    wx.showToast({
      title: '建议立即删除',
      image: '/img/10.jpg',
      duration: 3500
    })
  },
  v: function () {
    wx.showToast({
      title: '滚啊，打车滚啊',
      image: '/img/11.jpg',
      duration: 3500
    })
  } , b: function () {
    wx.showToast({
      title: '哪来的逗萝？',
      image: '/img/17.jpg',
      duration: 3500
    })
  }
  })