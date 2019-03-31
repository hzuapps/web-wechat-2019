//app.js
App({
  //1、系统事件部分
  onLaunch:function(){//小程序初始化执行
    var that=this;
    that.curid=wx.getStorageSync('curid')||that.curid;//API:获取本地缓存，做不存在设置为全局属性
    that.setlocal('curid',that.curid);//调用全局方法
  },
  setlocal:function(){
    wx.getStorageSync(id,val);//API：设置本地缓存
  },
  curid:"CN101010100",
  Version:"1.0"
})