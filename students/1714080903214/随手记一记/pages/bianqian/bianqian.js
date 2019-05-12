const app = getApp()
Page({
  data: {
    inputVal: '',
    msgData: []
  },
  changeInputVal(ev) {
    this.setData({
      inputVal: ev.detail.value
    });
  },
  delMsg(ev) {
    var n = ev.target.dataset.index;
    console.log(n);
    var list = this.data.msgData;
    list.splice(n, 1);
    this.setData({
      msgData: list
    });
  },
  addMsg() {
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    this.setData({
      msgData: list,
      inputVal: ''
    })
  }

})
