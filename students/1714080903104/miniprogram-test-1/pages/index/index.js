// pages/index/index.js
const app = getApp()
wx.setStorage({
  key: 'list',
  data: "",
})
Page({
  data: {
    //    motto: 'Hello World',
    items: []
  },
  addItem: function () {
    wx.navigateTo({
      url: '../item/item'
    })
  },
  // 使用onShow而不使用onLoad，使得添加返回后自刷新
  onShow: function () {
    this.setData({
      loadingHidden: false
    });
    var that = this
    // 获取首页列表，本地storage中取出accessToken作为参数，不必带上uid；
    wx.getStorage({
      key: 'list',
      success: function (res) {
        console.log(res)
        var d = res.data.substring('1').split(",")
        if (d[0] == "") d.splice(0, 1)
        that.setData({
          items: d
        })
        console.log(that.data.items)
      },
    })
  },
  onload: function () {

  },
  itemTap: function (e) {
    //var id = parseInt(e.currentTarget.dataset.id);
    console.log(e)
    var id = parseInt(e.currentTarget.dataset.id.substring(4))
    app.globalData.NOWTITLE = this.data.items[id];
    console.log(app.globalData.NOWTITLE)
    wx.navigateTo({
      url: '../item/item?id=' + id
    })
  }
})
