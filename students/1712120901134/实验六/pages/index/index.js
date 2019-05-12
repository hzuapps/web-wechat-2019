//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    "imgUrls":[
      "../../images/swiper1.jpg",
      "../../images/swiper2.jpg",
      "../../images/swiper3.jpg"
    ],
    "courses":[
      {
        num:"1",
        title:"后山植树志愿活动",
        images:"../../images/course.jpg"
      },
      {
        num:"2",
        title:"大学生读书分享会",
        images:"../../images/course1.jpg"
      },
      {
        num:"3",
        title:"互联网+创新创业大赛",
        images:"../../images/course2.jpg"
      }
    ]
  },
  onLoad: function () {
    var that = this
  }
})
