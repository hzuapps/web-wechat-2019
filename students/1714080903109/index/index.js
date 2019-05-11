Page({
  data: {
    "imgUrls": [
      "http://wx2.sinaimg.cn/large/0060lm7Tly1g2139sfvcyj30u00da3yv.jpg",
      "http://wx1.sinaimg.cn/large/0060lm7Tly1g213ad5sg8j30ty0dajrn.jpg",
      "http://wx1.sinaimg.cn/large/0060lm7Tly1g213albo88j30u00dc74u.jpg"
    ],
    inputVal: "",
    inputShowed: false
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  }
})