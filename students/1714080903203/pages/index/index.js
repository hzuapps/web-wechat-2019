Page({
  data: {
    inputShowed: false,
    inputVal: "",
    msgData: [],//所有留言数据
    msgData1: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  liu(ev) {
    this.setData({
      inputVal: ev.detail.value//将留言框的数据存储到inputVal中，方便添加留言时获取
    });
  },
  tijiao() {
    //console.log(this.data.inputVal);
    var list = this.data.msgData;//获取所有留言
    list.push({//向list中添加当前添加的留言
      msg: this.data.inputVal
    });
    this.setData({//将所有留言更新到msgData中。
      msgData: list,
      inputVal: ""//清空留言框内的内容
    });
  },
  /*tijiao: function () {
    wx.showModal({
      content: '发布成功',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('确定')
        }
      }
    });
  },*/
deleMsg(ev) {
  var list = this.data.msgData;
  var n = ev.target.dataset.index;//获取当前留言的index
  list.splice(n, 1);//删除索引号为n的数据
  this.setData({//将所有留言更新到msgData中
    msgData: list
  });
}
});