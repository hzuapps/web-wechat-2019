//logs.js
var base64 = require("../index/images/base64");
Page({
  onLoad: function () {
    this.setData({
      icon: base64.icon20
    });
  }
});
