// pages/dongman/dongman.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fanju: [{
      "pub_time": "22:00",
      "resour": "bilibili",
      "title": "多罗罗",
      "url": "http://i1.hdslb.com/bfs/archive/ca30e18e224dc6249f5fcdf3da2db10dd43ab606.jpg"
    },
    {
      "pub_time": "22:00",
      "resour": "bilibili",
      "title": "盾之勇者成名录",
      "url": "http://i0.hdslb.com/bfs/archive/eb8bdc22defd70466d3ae0977fa40887951d5885.jpg"
    },
    {
      "pub_time": "23:30",
      "resour": "bilibili",
      "title": "贤者之孙",
      "url": "http://i1.hdslb.com/bfs/archive/8ffa3425026ae4059dc3e242a8c987d0652f12a8.jpg"
    },
    {
      "pub_time": "23:30",
      "resour": "bilibili",
      "title": "异世界四重奏",
      "url": "http://i1.hdslb.com/bfs/archive/56f277136b9db857e7d65ca1889e11816eb443df.jpg"
    },
    {
      "pub_time": "18:25",
      "resour": "bilibili",
      "title": "黑色四叶草",
      "url": "http://i2.hdslb.com/bfs/archive/591aab5bc34a6b4ca6e4698e04eda4743e7e294c.jpg"
    },
    {
      "pub_time": "23:30",
      "resour": "bilibili",
      "title": "RobiHachi",
      "url": "http://i1.hdslb.com/bfs/archive/7649d17c62ebc9666a4768da8c28e0ad040b2888.jpg"
    },
    {
      "pub_time": "15:07",
      "resour": "bilibili",
      "title": "Fairy gone",
      "url": "http://i2.hdslb.com/bfs/archive/619f562f550d17f8ce9726a0d9bc8b16970f33d7.jpg"
    },
    {
      "pub_time": "21:53",
      "resour": "bilibili",
      "title": "偶像大师灰姑娘剧场（TV版）",
      "url": "http://i0.hdslb.com/bfs/archive/4e97ea58bb5ce03cd372b66137900cacb3c2b08f.jpg"
    },
    {
      "pub_time": "10:00",
      "resour": "bilibili",
      "title": "钻石王牌 actII",
      "url": "http://i2.hdslb.com/bfs/archive/25ad23c42686f5adf6a24eea2a3bc8888515206e.jpg"
    },
    {
      "pub_time": "11:27",
      "resour": "bilibili",
      "title": "精灵宝可梦 日月",
      "url": "http://i2.hdslb.com/bfs/archive/37100902e54d9e4a12df2ec0ca3b1458976c4333.jpg"
    },
    {
      "pub_time": "10:00",
      "resour": "bilibili",
      "title": "欢迎来到实力至上主义的教室",
      "url": "http://i0.hdslb.com/bfs/archive/29f079929a322fd8b1529244fee030e1d97a5771.jpg"
    },
    {
      "pub_time": "17:00",
      "resour": "bilibili",
      "title": "辉夜大小姐想让我告白~天才们的恋爱头脑战",
      "url": "http://i1.hdslb.com/bfs/archive/ea58469797e6493cbc7921d644600099bab43eb8.jpg"
    },
    {
      "pub_time": "10:00",
      "resour": "bilibili",
      "title": "我的青春恋爱物语果然有问题",
      "url": "http://i2.hdslb.com/bfs/archive/0305bbfb4deba1e0c0a11080e98892f003a951db.jpg"
    },
    {
      "pub_time": "18:00",
      "resour": "bilibili",
      "title": "樱子小姐的脚下埋着尸体",
      "url": "http://i0.hdslb.com/bfs/archive/1d1486ab390ca6ca213525f2fb8281fd9b44362c.jpg"
    },
    {
      "pub_time": "20:00",
      "resour": "bilibili",
      "title": "K",
      "url": "http://i1.hdslb.com/bfs/archive/fbc54458f1f86b02d2dbe607523e9d02b38b1b5b.jpg"
    }
    ],
    mes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.apiopen.top/todayVideo',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.callback(res.data)
      }
    })
  },

  callback: function (res) {
    //console.log(res);
    var shipin = [];
    for (var idx in res.result) {
      //console.log(idx)
      var subject = res.result[idx];
      //console.log(subject)
      if (subject.type != "textCard") {
        //console.log(subject.data.content.data.title)
        var temp = {
          title: subject.data.content.data.title,
          playUrl: subject.data.content.data.playUrl,
          imges: subject.data.content.data.cover.feed,
          category: subject.data.content.category
        }
        shipin.push(temp);
      }

    }
    console.log(shipin)
    this.setData({ mes: shipin })

    //console.log(mes);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var _index = e.currentTarget.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(this.data._index)
    videoContextPrev.stop();




    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index)
      videoContext.play();
    }, 500)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})