var that;
var count = 0;
Page({
  /**
  * 页面的初始数据
  */
  data: {
    value: [],
    alter: 'ture',
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.createtable(),
      this.setData({
        alter: true
      })
    that = this;
    //获取存储信息
    wx.getStorage({
      key: 'storage',
      success: function (res) {
        // success
        that.setData({
          storage: res.data
        })
      }
    })
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

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

  },
  getInput: function (e) {
    this.setData({
      storage: e.detail.value
    })
  },
  createtable: function () {
    var value = [];
    try {
      value = wx.getStorageSync('course')
    } catch (e) {
    }
    if (value == "") {
      value = [];
      let t = {
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        date6: "",
        date7: "",
      };
      for (var i = 0; i < 5; i++) {
        value.push(t);
      }
    }
    this.setData({
      value: value,
    })
  },
  onclick: function () {

    // this.alter='false';
    let alter = this.data.alter;
    alter = false;
    this.setData({
      alter: alter,
    })
  },
  ab: function (e) {
    var text = e.detail.value + "";
    var name = e.currentTarget.id;
    var index = parseInt(e.currentTarget.dataset.index);
    var str = "" + "value[" + index + "].date" + name + "";
    this.setData({
      [str]: text
    })
    console.log(str);
    console.log(text);
    console.log(name);
    console.log(index);
  },
  save: function (e) {
    console.log(this.data.value);
    this.setData({
      alter: true,
    })
   
    wx.setStorageSync('course', this.data.value);
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    }) 
  }
})