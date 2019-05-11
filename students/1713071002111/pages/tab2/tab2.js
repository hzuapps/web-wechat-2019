// pages/tab2/tab2.js
var valHandle;  //定时器
const ctx = wx.createCanvasContext("bgCanvas")
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    ctx.setLineWidth(16)
    ctx.arc(100, 100, 92, 0, 2 * Math.PI)
    ctx.setStrokeStyle('white')
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineCap('round')
    ctx.setLineWidth(10)
    ctx.arc(100, 100, 92, 1.5 * Math.PI, -0.5 * Math.PI, true)
    ctx.setStrokeStyle('green')
    ctx.stroke()
    ctx.draw()
  },

  //点击开始倒计时按钮
  clickStartBtn: function () {
    console.log("倒计时动画开始")
    var that = this
    that.data.stepText = 60 //重新设置一遍初始值，防止初始值被改变
    var step = that.data.stepText;  //定义倒计时
    var num = -0.5;
    var decNum = 2 / step / 10
    clearInterval(valHandle)

    function drawArc(endAngle) {
      ctx.setLineWidth(16)
      ctx.arc(100, 100, 92, 0, 2 * Math.PI)
      ctx.setStrokeStyle('white')
      ctx.stroke()

      ctx.beginPath()
      ctx.setLineCap('round')
      ctx.setLineWidth(10)
      ctx.arc(100, 100, 92, 1.5 * Math.PI, endAngle, true)
      ctx.setStrokeStyle('green')
      ctx.stroke()
      ctx.draw()
    }

    valHandle = setInterval(function () {

      that.setData({
        stepText: parseInt(step)
      })
      step = (step - 0.1).toFixed(1)

      num += decNum
      drawArc(num * Math.PI)

      if (step <= 0) {
        clearInterval(valHandle)  //销毁定时器

      }

    }, 100)
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


