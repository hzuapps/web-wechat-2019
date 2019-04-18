//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  openConfirm: function () {

    wx.showModal({

      title: '请输入内容',

      content: getval,

      confirmText: "主操作",

      cancelText: "辅助操作",

      success: function (res) {

        console.log(res);

        if (res.confirm) {

          console.log('用户点击主操作')

        } else {

          console.log('用户点击辅助操作')

        }

      }

    });

  }
})
