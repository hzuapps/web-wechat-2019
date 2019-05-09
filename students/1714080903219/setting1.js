//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  },
  formSubmit: function (e) {
    //console.log(e.detail.value);
    if (e.detail.value.xing.length == 0 ) {
      wx.showToast({
        title: '姓名不能为空!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.xue.length == 0) {
      wx.showToast({
        title: '学号不能为空!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.you.length == 0) {
      wx.showToast({
        title: '邮箱不能为空!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else {
      wx.request({
        url: 'https://raw.githubusercontent.com/l960014198/web-wechat-2019/master/students/1714080903219/setting1.json',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: { xing: e.detail.value.xing, xue: e.detail.value.xue, you: e.detail.value.you },


        success: function (res) {
          console.log(res.data);
          if (res.data.status == 0) {
            wx.showToast({
              title: '提交失败！！！',
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '提交成功！！！',//这里打印出登录成功
              icon: 'success',
              duration: 1000
            })
          }  
          }
        
  
      })
    }
  }
})