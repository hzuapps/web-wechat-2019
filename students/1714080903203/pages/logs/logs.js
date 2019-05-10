//logs.js
const util = require('../../utils/util.js')

Page({
  send: function () {
    wx.request({
      url: 'https://easy-mock.com/mock/5cd429e122349709d819f5c3/example/hai',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
