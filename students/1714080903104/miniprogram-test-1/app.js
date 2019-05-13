//app.js
App({
  onLaunch: function () {
    //调用应用实例的方法获取全局数据
    var that = this
    //调用登录接口
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            //请求登录
            that.httpService(
              'user/login',
              {
                openid: res.userInfo.nickName
              },
              function (response) {
                //成功回调，本地缓存accessToken
                var accessToken = wx.getStorageSync('logs') || '';
                accessToken = response.data.accessToken;
                wx.setStorageSync('accessToken', accessToken);
              }
            );
          }
        })
      }
    })
  },    
  globalData: {
    NOWTITLE: 0,
  }
})