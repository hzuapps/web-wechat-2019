//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputValue: '',
    addTel: '',
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  ontouch1: function () {
    wx.redirectTo({
      url: '../index/index',
    })

    if (this.data.inputValue) {
      wx.setStorage({
        key: "addTel",
        data: this.data.inputValue,
      })
    } else {
      wx.showModal({
        title: '姓名',
        content: '请输入您的名字',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确认')
          }
        }
      })
    }
    
  },

  onShow: function () {
    var that = this;
   
    wx.getStorage({
      key: 'addTel',
      success: function (res) {
        console.log(res.data)
        that.setData({
          addTel: res.data
          
        })     
      }
    })
   
  },
  
  ontouch2: function (e) {
    wx.downloadFile({
      url: "http://a.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg",
      success: function (res) {
        console.log(res);
        var rr = res.tempFilePath;
        wx.saveImageToPhotosAlbum({

          filePath: rr,
          success(res) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  },

  ontouch3:function(e){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
})
