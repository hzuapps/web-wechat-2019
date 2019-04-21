//index.js
//获取应用实例

Page({
  open: function () {
    wx.showActionSheet({
      itemList: ['创建班级', '加入班级'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    });
  }
});