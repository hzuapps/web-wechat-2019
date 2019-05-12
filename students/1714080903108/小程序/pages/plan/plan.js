//index.js
var util = require("../../utils/util.js");

//更改数组 第三个参数是对象
function editArr(arr, i, editCnt) {
  let newArr = arr, editingObj = newArr[i];
  for (var x in editCnt) {
    editingObj[x] = editCnt[x];
  }
  return newArr;
}

//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    curIpt: '',
    showAll: true,
    lists: [],
    curRange: [],
    curBegin: 0,
    curFinish: 1,
    remind: []
  },
  onLoad: function () {
    var that = this;
    //获取之前保留在缓存里的数据
    wx.getStorage({
      key: 'todolist',
      success: function (res) {
        if (res.data) {
          that.setData({
            lists: res.data
          })
        }
      }
    })
  },
  iptChange(e) {
    let timeArr = util.setTimeHalf();
    this.setData({
      curIpt: e.detail.value,
      curRange: timeArr
    })
  },
  formReset() {
    this.setData({
      curIpt: '',
      curRange: []
    })
  },
  formSubmit() {
    let cnt = this.data.curIpt, newLists = this.data.lists, i = newLists.length, begin = this.data.curRange[this.data.curBegin], finish = this.data.curRange[this.data.curFinish];
    if (cnt) {
      newLists.push({ id: i, content: cnt, done: false, beginTime: begin, finishTime: finish, editing: false });
      this.setData({
        lists: newLists,
        curIpt: ''
      })
    }
  },
  beginChange(e) {
    this.setData({
      curBegin: e.detail.value,
      curFinish: Number(e.detail.value) + 1
    })
  },
  finishChange(e) {
    this.setData({
      curFinish: e.detail.value
    })
  },
  //修改备忘录
  toChange(e) {
    let i = e.target.dataset.id;
    this.setData({
      lists: editArr(this.data.lists, i, { editing: true })
    })
  },
  iptEdit(e) {
    let i = e.target.dataset.id;
    this.setData({
      lists: editArr(this.data.lists, i, { curVal: e.detail.value })
    })
  },
  saveEdit(e) {
    let i = e.target.dataset.id;
    this.setData({
      lists: editArr(this.data.lists, i, { content: this.data.lists[i].curVal, editing: false })
    })
  },
  setDone(e) {
    let i = e.target.dataset.id, originalDone = this.data.lists[i].done;
    this.setData({
      lists: editArr(this.data.lists, i, { done: !originalDone })
    })
  },
  toDelete(e) {
    let i = e.target.dataset.id, newLists = this.data.lists;
    newLists.map(function (l, index) {
      if (l.id == i) {
        newLists.splice(index, 1);
      }
    })
    this.setData({
      lists: newLists
    })
  },
  doneAll() {
    let newLists = this.data.lists;
    newLists.map(function (l) {
      l.done = true;
    })
    this.setData({
      lists: newLists
    })
  },
  deleteAll() {
    this.setData({
      lists: [],
      remind: []
    })
  },
  showUnfinished() {
    this.setData({
      showAll: false
    })
  },
  showAll() {
    //显示全部事项
    this.setData({
      showAll: true
    })
  },
  saveData() {
    let listsArr = this.data.lists;
    wx.setStorage({
      key: 'todolist',
      data: listsArr
    })
  }

})
