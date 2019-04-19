// pages/Timer/Timer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Timer: '',   //计时器名称
    lock: false, //flag锁，防止重复执行
    record: [],  //记录的数组

   //时间
    minute: '00',
    second: '00',
    ten_mesc: '0',

    //状态，用以动态设置样式
    isTimerStart: false,  //是否开始计时，
    isTimerJiCi: false,  //是否处于计次状态

    //变化时间
    transTime: '0.2s',

    scrollTop: 800,

    //边框变化
    Bsize: '4rpx',
    Bx: 'solid',
    Bcolor: 'white',
  },

  /**
   *  开始计时函数
   *     (不受样式改变的影响)
   */
  Start: function(){
    let that = this;
    let ten_mesc = that.data.ten_mesc;
    let second = that.data.second;
    let minute = that.data.minute;

    var reg = /^0/;   //判断是否已经以0开头的规则

    if (!this.data.lock){
      this.data.lock = !this.data.lock; //上锁
      that.setData({  //这层setData是为了实时获取Timer
        Timer: setInterval(function () {

      //设置边框变化
      if(!that.data.isTimerJiCi){
        if (that.data.second%2 == 0) {
          that.setData({
            Bsize: '24rpx',
            Bx: 'solid',
            Bcolor: 'black',
          })
        } else
          that.setData({
            Bsize: '4rpx',
            Bx: 'solid',
            Bcolor: 'white'
          })
      } else
        that.setData({
          Bsize: '',
          Bx: '',
          Bcolor: '',
        })
       

          //时间增加逻辑
          ten_mesc++;
          if (ten_mesc == 10) {
            second++;
            ten_mesc = 0;
          }
          if (second == 60) {
            minute++;
            second = '00';
            ten_mesc = 0;
          }
          //设置时间
          // if (ten_mesc < 10) {
          //   that.setData({ ten_mesc: '0' + ten_mesc })
          //} else 
          that.setData({ ten_mesc: ten_mesc });

          if (second < 10) {
            if (second > 0 && !reg.test(second))
               that.setData({ second: '0' + second })
            else that.setData({ second: second })
          }
          else
            that.setData({ second: second })

          if (minute < 10 && minute != 0 && !reg.test(minute)) {
            that.setData({ minute: '0' + minute })
          } else that.setData({ minute: minute });
        }, 100),
        isTimerStart: true
      })

   

    }
  },

/**
 * 暂停函数
 */
Stop: function () {
  let lock = this.data.lock;
  clearInterval(this.data.Timer);
  this.setData({
    lock: false,
    isTimerStart:false
  });
},

/**
 * 重置计时
 */
Reset: function(){
  this.setData({
    lock:false,
    isTimerStart:false,
    isTimerJiCi:false,
    minute: '00',
    second: '00',
    ten_mesc: '0',
  //重置边框
    Bsize: '4rpx',
    Bx: 'solid',
    Bcolor: 'white'
    // record: []  //清空列表
  })
  //延迟清空，保留动画效果
  let that = this;
  setTimeout(function(){
    that.setData({
      record: []  //清空列表
      })
  },600)

},

/**
 * 计次函数
 */

JiCi: function(e){
  var temp = this.data.record;

  temp.push(this.data.minute + ":" + 
            this.data.second + "." + 
            this.data.ten_mesc);
 
  this.setData({
    isTimerJiCi:true,
    record :temp,
    scrollTop: this.data.scrollTop + 30, //设置滚动条位置
  });

  // console.log(this.data.scrollTop);
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