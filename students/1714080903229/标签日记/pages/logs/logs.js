//logs.js

Page({
  data: {
    diary:[],
    num:1000,
    keywords:"",
  },
  onLoad:function(){
    if (wx.getStorageSync('title').length == 0){
      this.setData({
        diary:[],
      })
    }
    else if (wx.getStorageSync('title').length != this.data.diary.length){
      for (var i = 0; i < wx.getStorageSync('title').length; i++) {
        var obj = { title: wx.getStorageSync('title')[i], content: wx.getStorageSync('content')[i], time: wx.getStorageSync('time')[i], id:wx.getStorageSync('id')[i],flag:"none",isshow:"block"}
        this.data.diary.push(obj)
      }
      this.setData({
        diary: this.data.diary
      })
      console.log(this.data.diary)
      console.log(wx.getStorageSync('title').length)
    }
  },
  onShow:function(){
    if (wx.getStorageSync('title').length != this.data.diary.length && wx.getStorageSync('title').length<=1){
      for (var i = 0; i < wx.getStorageSync('title').length; i++) {
        var obj = { title: wx.getStorageSync('title')[i], content: wx.getStorageSync('content')[i], time: wx.getStorageSync('time')[i], id: wx.getStorageSync('id')[i], flag: "none", isshow: "block"}
        this.data.diary.push(obj)
      }
      this.setData({
        diary: this.data.diary
      })
    }
    else if (wx.getStorageSync('title').length != this.data.diary.length && wx.getStorageSync('title').length > 1){
      var last = wx.getStorageSync('title').length-1
      var obj = { title: wx.getStorageSync('title')[last], content: wx.getStorageSync('content')[last], time: wx.getStorageSync('time')[last], id: wx.getStorageSync('id')[last], flag: "none", isshow: "block"}
        this.data.diary.push(obj)
      this.setData({
        diary: this.data.diary
      })
      console.log(this.data.diary)
      console.log(wx.getStorageSync('title').length)
    }
  },
  cl:function(){
    wx.clearStorage()
    this.onLoad()
  },
  show:function(e){
    let arr = this.data.diary
    for(let item of arr){
      if (item.id == e.currentTarget.dataset.id){
          arr[item.id].flag = "block"
      }
    }
    this.setData({
      diary:arr
    })
  },
  hide:function(e){
    let arr = this.data.diary
    for (let item of arr) {
      if (item.id == e.currentTarget.dataset.id) {
        arr[item.id].flag = "none"
      }
    }
    this.setData({
      diary: arr
    })
  },
  del:function(e){
    let arr = this.data.diary
    var id = []
    var title = []
    var content = []
    var time = []
    for(let item of arr){
      if(item.id == e.currentTarget.dataset.id){
        arr = arr.filter(function(val){
          return val.id != item.id
        })
      }

    }
    console.log(arr)
    if(arr.length == 0){
      wx.clearStorage()
    }
    else{
      for (let i = 0; i < arr.length; i++) {
        title.push(arr[i].title)
        content.push(arr[i].content)
        time.push(arr[i].time)
        id.push(i)
      }
      for (let item of arr) {
        wx.setStorageSync('title', title)
        wx.setStorageSync('content', content)
        wx.setStorageSync('time', time)
        wx.setStorageSync('id', id)
      }
    }
    this.setData({
      diary: arr
    })
  },
  keyword:function(e){
    this.setData({
      keywords: e.detail.value
    })
    let arr = this.data.diary
    console.log(arr)
    for (let i in arr) {
      arr[i].isshow = "block"
      if (arr[i].title.indexOf(this.data.keywords) == -1) {
        arr[i].isshow = "none"
      }
    }
    console.log(arr)
    this.setData({
      diary: arr
    })
  }
})
