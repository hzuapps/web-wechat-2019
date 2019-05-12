//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    teacherList: [
      {
        pic:"../../images/teacher2.jpg",
        name:"志愿之星-井凯",
        info: "井凯同学系西安建筑科技大学材料科学与工程学院材料物理专业2002级学生，现任西安建筑科技大学勤工助学会副主任，是西安建筑科技大学勤工助学会“爱心家教”的主要发起人和组织者之一，此项荣誉的获得是对其在“爱心家教”中的出色表现和无私奉献的充分肯定。“爱心家教”活动是在学生处的指导和支持下，由西安建筑科技大学勤工助学会学生发起、实施，旨在为贫困家庭子女提供义务家教的大型公益性活动"
      },
      {
        pic:"../../images/teacher1.jpg",
        name:"女神学霸-黄雨桐",
        info:"托福考试，她考了110分（总分120分）；SATI2360分（总分2400分），SATII单项考试数学、物理和化学全是满分（SAT，指美国学术能力评估测试，包括I和II两部分）；4门AP（美国大学预修课程）考试，微积分、化学、电磁学、力学全部满分"},
      {
        pic:"../../images/teacher3.jpg",
        name:"薄胜",
        info:"全国首个工商注册众创空间创始人，工信部虚拟运营商研究中心研究员，2010年-2014年联合开发“娲皇宫”、“中国好声音官方报名APP”等应用"
      },
      {
        pic: "../../images/teacher4.jpg",
        name: "简晶",
        info: "简晶老师是中国最早成名的一批程序员之一，是国内最早的综合网络、休闲、娱乐、服务商联众游戏的创始人，互联网知名创业极客。拨号精灵的创始人"
      }
    ]
  },
  onLoad: function (num) {
    if (num.num) {
      const listsShow = this.data.teacherList[num.num];
      this.setData({teacherList:[listsShow]})
    }
  }
})
