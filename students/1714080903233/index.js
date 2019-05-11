//index.js
//获取应用实例
Page({
  data: {
    showModal:false,
    date:'2019-05-07',
    input: '',
    works: [],
    leftCount: 0,
    logs: []
  },
  save: function () {
    wx.setStorageSync('work_list', this.data.works)
    wx.setStorageSync('work_logs', this.data.logs)
  },
  load: function () {
    var works = wx.getStorageSync('work_list')
    if (works) {
      var leftCount = works.filter(function (item) {
        return !item.completed
      }).length
      this.setData({ works: works, leftCount: leftCount })
    }
    var logs = wx.getStorageSync('work_logs')
    if (logs) {
      this.setData({ logs: logs })
    }
  },
  onLoad: function () {
    this.load()
  },
  inputChangeHandle: function (e) {
    this.setData({ input: e.detail.value })
  },
  addTodoHandle: function (e) {
    if (!this.data.input || !this.data.input.trim()) return false
    var works = this.data.works
    works.push({ name: this.data.input, time:this.data.date, completed: false })
    var logs = this.data.logs
    logs.push({ timestamp: new Date(), action: '添加', name: this.data.input })
    this.setData({
      input: '',
      works: works,
      leftCount: this.data.leftCount + 1,
      logs: logs
    })
    this.save()
    return true
  },
  toggleTodoHandle: function (e) {
    var index = e.currentTarget.dataset.index
    var works = this.data.works
    works[index].completed = !works[index].completed
    var logs = this.data.logs
    logs.push({
      timestamp: new Date(),
      action: works[index].completed ? '完成' : '未完成',
      name: works[index].name
    })
    this.setData({
      works: works,
      leftCount: this.data.leftCount + (works[index].completed ? -1 : 1),
      logs: logs
    })
    this.save()
  }, 
  removeTodoHandle: function (e) {
    var index = e.currentTarget.dataset.index
    var works = this.data.works
    var remove = works.splice(index, 1)[0]
    var logs = this.data.logs
    logs.push({ timestamp: new Date(), action: '删除', name: remove.name })
    this.setData({
      works: works,
      leftCount: this.data.leftCount - (remove.completed ? 0 : 1),
      logs: logs
    })
    this.save()
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  onCancel: function () {
    this.hideModal();
  },
  onConfirm: function () {
    if(this.addTodoHandle()){
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1000,
        mask: true
      })
    }
    else{
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
    this.hideModal();
  }
})

