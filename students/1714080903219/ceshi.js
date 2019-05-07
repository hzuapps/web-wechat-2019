Page({
  formSubmit: function (e) {

    var that = this;

    var formData = e.detail.value; //获取表单所有input的值

    wx.request({

      url: 'https://raw.githubusercontent.com/l960014198/web-wechat-2019/master/students/1714080903219/ceshi.json',

      data: formData,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },

      success: function (res) {

        console.log(res.data)

      }

    })

  }
});