//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    lists:[
      {
        imagesUrl:"../../images/course.jpg",
        title:"后山植树志愿者活动",
        price:"00.00",
        data:"2016-12-16",
        person:"15",
        teacher:"秦静",
        teacherNum:"0",
        content:"早春三月，草长莺飞，冬天的寒意还未褪尽，春天带着绿色的气息向我们走来，春风吹绿了枝头上的嫩芽，吹绿了地上的小草，也吹动了同学们为春天增添一抹绿色的热情。3月12日是我国一年一度的植树节，为响应系里面在3月12日开展“种一棵小树，绿一方净土”的活动号召，同时也为使同学们积极参与到美化校园环境的“对话”，亲身体验劳动的乐趣，感受美化环境的意义，达到激发同学们对大学生活的热烈情感，让我们植志愿之林，当绿色先锋。"
      },
      {
        imagesUrl:"../../images/course1.jpg",
        title:"大学生读书分享会",
        price:"5.00",
        data:"2016-12-16",
        person:"100",
        teacher:"于景晨",
        teacherNum:"1",
        content:"读书已经成了我的一种生活方式。我们两周一次的读书分享会就充分地调动了大家阅读性+阅读可以改变一个人的气质+读书可以改变一个人的人生观、价值观为了完成对当代大学生的嘱托。“读书分享大会”使读书成为习惯，思想引领成长。"
      },
      {
        imagesUrl:"../../images/course2.jpg",
        title:"互联网+创新创业大赛",
        price:"20.00",
        data:"2016-12-16",
        person:"100",
        teacher:"薄胜",
        teacherNum:"2",
        content:"创业路上总布满各种各样的坑，布满荆棘。前路漫漫，成功好像海市蜃楼，那么近又那么远？怎么破？问题出在哪里？如今的创业市场虽然商机无限，但对资金、能力、经验都有限的大学生创业者来说，并非'弯腰就能拾到地上的财富'。人人都可以创业，但是，却不是人人都可以创业成功的，那为什么不来实践一下？这里就是你的舞台."
      }
    ]
  },
  onLoad: function (num) {
    const listsShow = this.data.lists[num.num - 1];
    this.setData({lists:[listsShow]})
  },
  btnClick: function() {
    wx.showModal({
      title: '提示',
      content: '确定报名该课程吗？',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  }
})

