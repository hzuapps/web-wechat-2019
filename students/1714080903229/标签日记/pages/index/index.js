//index.js
//获取应用实例
const app = getApp()
var tiplist= []
Page({
  data: {
    list: [{
      tag: "开心",
      content: "今天遇到了什么开心的事情:"
    }, {
      tag: "学习",
      content: "今天去哪学习，学了什么:"
    }, {
      tag: "游戏",
      content: "今天战绩如何:"
    }, {
      tag: "宅家",
      content: "今天的你为什么宅在家里呢:"
    }, {
      tag: "睡觉",
      content: "今天睡了多久:"
    }, {
      tag: "无聊",
      content: "分享出你的无聊:"
    }, {
      tag: "外出",
      content: "今天出去哪了:"
    }, {
      tag: '失落',
      content: "今天遇到了什么伤心的事:"
    }, {
      tag: "愤怒",
      content: "今天遇到了什么愤怒的事:"
    },{
      tag: "美食",
      content:"今天吃了什么好吃的东西:"
    },{
      tag: "看剧",
      content: "今天看了什么剧:"
    },{
      tag: "自定义",
      content: "请自定义今天的日记"
    }],
    title: "请输入标题",
    content: '',
    taglist: [],
    id:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '标签日记'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3197ed',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  title:function(e){
    this.setData({
      title:e.detail.value
    })

  },
  content:function(e){
    this.setData({
      content:e.detail.value,
    })
  },
  addtag:function(e){
    var obj = {tip: this.data.list[e.currentTarget.id].content}
    var i;
    if(this.data.taglist.length<1){
      this.data.taglist.push(obj)
      this.setData({
        taglist: this.data.taglist
      })
    }
    else{
      this.data.taglist = []
      this.data.taglist.push(obj)
      this.setData({
        taglist: this.data.taglist
      })
    }
  },
  shuaxin:function(){
    wx.showModal({

      content: '数据不足，该功能正在开发',

      showCancel: false,

      success: function (res) {

        if (res.confirm) {


        }

      }

    });
  },
  openAlert: function () {
    if (this.data.title == "请输入标题" || this.data.title == "" || this.data.content == "") {
      wx.showModal({

        content: '标题或内容不能为空',

        showCancel: false,

        success: function (res) {

          if (res.confirm) {

          }
        }
      });
      return 0
    }
    else{
      wx.showModal({

        content: '提交成功',

        showCancel: false,

        success: function (res) {

          if (res.confirm) {

            wx.switchTab({
              url: '../logs/logs',
            })

          }

        },
        fail: function (res) {
          console.log(res)
        }

      });
    }

    var id = wx.getStorageSync('id') || []
    var title = wx.getStorageSync('title') || []
    var content = wx.getStorageSync('content') || []
    var time = wx.getStorageSync('time') || []
    var date = new Date
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    id.push(wx.getStorageSync('id').length)
    time.push(year + '/' + month + '/' + day)
    title.push(this.data.title)
    content.push(this.data.content)
    wx.setStorage({
      key: 'title',
      data: title
    }),
      wx.setStorage({
        key: 'content',
        data: content
      }),
      wx.setStorage({
        key: 'time',
        data: time
      }),
      wx.setStorage({
        key: 'id',
        data: id,
      })
      this.setData({
        taglist:[],
        content:'',
        title:''
      })
    
  }
})
