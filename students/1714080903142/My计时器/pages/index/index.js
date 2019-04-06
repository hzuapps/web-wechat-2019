//index.js
//获取应用实例
const app = getApp()
const timer1 = app.globalData.timer1
const countDownNum1 = app.globalData.countDownNum1

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // timer: '',//定时器名字
    // countDownNum: '0',//计时初始值
    timer: timer1,  //定时器名字，从全局获取
    countDownNum: countDownNum1,  //计时初始值，从全局获取
    block: 'true', //防止重复调用的flag锁
    mySize: '80rpx',
    myPos: '-200rpx auto 170rpx',
    myBorder: '10rpx solid #ffffff',
    myFont:' 100rpx'
  },
  /**
   * 生命周期函数
   */
  onShow: function () {
   
  },

  countDown: function () {

    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum++;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
      }, 1000)
    })
  },

  setting: function() {
    this.stop();
    this.setData({
      countDownNum: '0',
    })

  },

  start: function(){
    let countDownNum = this.data.countDownNum;//获取倒计时初始值
    let block = this.data.block;  //获取锁
    if(countDownNum>=0 && block=='true'){
      //什么时候触发倒计时，就在什么地方调用这个函数
      this.countDown();
      this.setData({ block: 'false' })  //触发后上锁，防止重复触发
    }
    this.setData({
      mySize: '280rpx',
      myPos: '100rpx auto 170rpx',
      myBorder: '10rpx solid #1296db',
      myFont: '100rpx'
    })
  },

  getTime: function() {
    app.onTapAdd();
  },

  stop: function(){
    clearInterval(this.data.timer);
    this.setData({
      block: 'true', //解锁
      mySize: '160rpx',
      myPos: '100rpx auto 170rpx',
      myBorder: '6rpx solid #efefef',
      myFont: ' 50rpx'
    }) 
  }
 
})
