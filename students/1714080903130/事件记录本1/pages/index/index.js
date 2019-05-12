//index.js
//获取应用实例
const app = getApp()
var num;
Page({


 
  changeBg() {
    num=Math.random();
    num=Math.ceil(num*10);




    
     if (num == 1) {
      this.setData({
        viewBg: 'green'
      })
    } else if(num==2){
      this.setData({
        viewBg: 'BlanchedAlmond'
      })
      }else if (num == 3) {
       this.setData({
         viewBg: 'BlueViolet'
       })
     } else if (num == 4){
       this.setData({
         viewBg: 'Brown'
       })
     } else if (num == 5) {
       this.setData({
         viewBg: 'Chartreuse'
       })
     } else if (num == 6) {
       this.setData({
         viewBg: 'Coral'
       })
     } else if (num == 7) {
       this.setData({
         viewBg: 'DarkGoldenRod'
       })
     } else if (num == 8) {
       this.setData({
         viewBg: 'DeepPink'
       })
     } else {
       this.setData({
         viewBg: 'FireBrick'
       })

    }
    console.log(num)
  //  console.log(result)
  },





   onShareAppMessage: function () {

    return {

      title: '记录本',

      desc: '管理自己的时间',

      path: '/page/index?id=123'

    }

  },
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, 
      urls: previewUrls, 
    })
  },

  onLoad: function () {
    var that = this
    var picList = []
    picList.push("")
    picList.push("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg")
    picList.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=f3712ddf9ca5b37bf81f2cea4ae40c54&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140808%2F0042040230406581_b.jpg")
    that.setData({
      picList: picList,
    })
  }
})
