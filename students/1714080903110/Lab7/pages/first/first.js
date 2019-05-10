// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    f:false,
    dataList:[],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 获取缓存,并判断缓存是否为空
     */
    var that = this;
    wx.getStorage({
      key: 'VaccineItem',
      success: function(res) {
        if(res.data != ''){
          that.setData({
            dataList: res.data,
            f:false
          })
        }else{
          that.setData({
            f:true
          })
        }
      }
    })

    console.log(this.data.id)
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
    if (this.data.dataList == '') {
      this.setData({
        f: true
      })
    } else {
      this.setData({
        f: false
      })
    }
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
  
  btnAdd: function(){
    /**
     * 按钮点击事件
     */
    wx.navigateTo({
      url: "../addItem/addtem"
    })
  },

  cancelBtn:function(e){
    var index = e.target.dataset.id
    var tempArray = this.data.dataList
    for(let item of tempArray){
      if(item.id == e.currentTarget.dataset.id){
        tempArray = tempArray.filter(function(val){
          return val.id != item.id
        })
      }
    }
    
    wx.setStorage({
      key: 'VaccineItem',
      data: tempArray,
    })

    // tempArray.splice(index,1)
    this.setData({
      dataList:tempArray
    })

    if (this.data.dataList == '') {
      this.setData({
        f: true
      })
    } else {
      this.setData({
        f: false
      })
    }
    console.log(e)
  },
  sth:function(e){
    console.log(e)
    if(e.detail.value){
      wx.showModal({
        content: '打开提醒',
        showCancel: false,
      })
    }else{
      wx.showModal({
        content: '关闭提醒',
        showCancel:false

      })
    }
  }
})