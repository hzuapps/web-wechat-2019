//logs.js
var util = require('../../utils/util.js')
var touchDot = 0;//触摸时的原点 
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = "";// 记录/清理时间记录 
Page({
  data: {
    // logs: []
    scroll_top: 0,
    Text:"当了一段时间飘来荡去的孤魂野鬼，少年实在找不到挣钱的营生，靠着那点微薄积蓄，少年勉强填饱肚子，前几天听说几条街外的骑龙巷，来了个姓阮的外乡老铁匠，对外宣称要收七八个打铁的学徒，不给工钱，但管饭，陈平安就赶紧跑去碰运气，不曾想老人只是斜瞥了他一眼，就把他拒之门外，当时陈平安就纳闷，难道打铁这门活计，不是看臂力大小，而是看面相好坏？要知道陈平安虽然看着孱弱，但力气不容小觑，这是少年那些年烧瓷拉坯锻炼出来的身体底子，除此之外，陈平安还跟着姓姚的老人，跑遍了小镇方圆百里的山山水水，尝遍了四周各种土壤的滋味，任劳任怨，什么脏活累活都愿意做，毫不拖泥带水。可惜老姚始终不喜欢陈平安，嫌弃少年没有悟性，是榆木疙瘩不开窍，远远不如大徒弟刘羡阳，这也怪不得老人偏心，师父领进门，修行在个人，例如同样是枯燥乏味的拉坯，刘羡阳短短半年的功力，就抵得上陈平安辛苦三年的水准。",
    initFontSize:'14',
    colorArr: [{
      value: '#f7eee5',
      name: '米白',
      font: ''
    }, {
      value: '#e9dfc7',
      name: '纸张',
      font: '',
      id: "font_normal"
    }, {
      value: '#a4a4a4',
      name: '浅灰',
      font: ''
    }, {
      value: '#cdefce',
      name: '护眼',
      font: ''
    }, {
      value: '#283548',
      name: '灰蓝',
      font: '#7685a2',
      bottomcolor: '#fff'
    }, {
      value: '#0f1410',
      name: '夜间',
      font: '#4e534f',
      bottomcolor: 'rgba(255,255,255,0.7)',
      id: "font_night"
    }],
    nav:'none',
    ziti:'none',
    _num:1,
    bodyColor:'#e9dfc7',
    daynight:false,
    zj:'none'

  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(function (log) {
    //     return util.formatTime(new Date(log))
    //   })
    // })
    // 本地提取字号大小
    var that = this;
    wx.getStorage({
      key: 'initFontSize',
      success: function (res) {
        // console.log(res.data)
        that.setData({
          initFontSize: res.data
        })
      }
    })
    //存储背景色
    wx.getStorage({
      key: 'bodyColor',
      success: function (res) {
        // console.log(res.data)
        that.setData({
          bodyColor: res.data
        })
      }
    })
    wx.getStorage({
      key: '_num',
      success: function (res) {
        // console.log(res.data)
        that.setData({
          _num: res.data
        })
      }
    })
    wx.getStorage({
      key: 'daynight',
      success: function (res) {
        // console.log(res.data)
        that.setData({
          daynight: res.data
        })
      }
    })
    //数据接口
    wx.request({
      url: 'http://book.baiwancangshu.com/Books/bookRead', //仅为示例，并非真实的接口地址
      data: {
          "bookId": "86",
          "chapterId": "2",
          "isDel": 1, 
          "token": "",
          "os": 3,
          "channel": "", 
          "netname": "m" 
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
   //事件处理函数
   //字体变大
  bindBig: function () {
    var that=this;
    if (that.data.initFontSize>20){
      return;
    }
    var FontSize=parseInt(that.data.initFontSize)
    that.setData({
      initFontSize: FontSize +=1
    })
    // console.log(that.data.initFontSize)
    wx.setStorage({
      key: "initFontSize",
      data: that.data.initFontSize
    })
  },
  //字体变小
  bindSmall: function () {
    var that = this;
    if (that.data.initFontSize <12) {
      return;
    }
    var FontSize = parseInt(that.data.initFontSize)
    that.setData({
      initFontSize: FontSize -= 1
    })
    // console.log(that.data.initFontSize)
    wx.setStorage({
      key: "initFontSize",
      data: that.data.initFontSize
    })
  },
  //点击中间区域显示底部导航
  midaction:function(){
    if (this.data.nav=='none'){
      this.setData({
        nav:'block'
      })
    }else{
      this.setData({
        nav: 'none',
        ziti: 'none'
      })

    }
  },
  //点击字体出现窗口
  zitiaction:function(){
    if (this.data.ziti == 'none') {
      this.setData({
        ziti: 'block'
      })
    } else {
      this.setData({
        ziti: 'none'
      })
    }
  },
  //选择背景色
  bgChange:function(e){
    // console.log(e.target.dataset.num)
    // console.log(e)
    this.setData({
      _num: e.target.dataset.num,
      bodyColor: this.data.colorArr[e.target.dataset.num].value
    })
    wx.setStorage({
      key: "bodyColor",
      data: this.data.colorArr[e.target.dataset.num].value
    })
    wx.setStorage({
      key: "_num",
      data: e.target.dataset.num
    })
  },
  //切换白天夜晚
  dayNight:function(){
      if(this.data.daynight==true){
       this.setData({
         daynight:false,
         bodyColor:'#e9dfc7',
         _num:1
       })
       wx.setStorage({
         key: "bodyColor",
         data: '#e9dfc7'
       })
       wx.setStorage({
         key: "_num",
         data:1
       })

      }else{
        this.setData({
          daynight: true,
          bodyColor: '#000',
          _num:5
        })
        wx.setStorage({
          key: "bodyColor",
          data: '#000'
        })
        wx.setStorage({
          key: "_num",
          data:5
        })
      }
      wx.setStorage({
        key: "daynight",
        data: this.data.daynight
      })
  },
  //滚动隐藏窗口
  scrollContain:function(){
    this.setData({
      nav: 'none',
      ziti: 'none',
      zj:'none'
    })
  },
  //滚动到底部
  bindscrolltolower:function(){
    this.setData({
      zj: 'block',
    })
  },
  //上一页下一页
  lastPage:function(){
    this.setData({
      Text: '和婚礼相比，顾千城更秦云楚见顾国公久久不给准话，再次威胁道：“顾公国，新娘换不换？本世子还等着新娘上花轿，至于顾千城这残疾，你们爱嫁给谁就嫁让她嫁给谁，总之本世子不要。”关心自己受伤的脚，她现在只希望这场闹剧早点结束，不然她的脚撑不住。顾千城冷眼扫过观礼的客人，这些人纷纷别过脸，一脸尴尬。一伙看看秦云楚、一伙看看顾千城，无人开口。喜堂安静得吓人，似乎连针落地的声道都能听清这个时候，全福夫人收到示意，上前一步打破寂静：“顾国公，这身有残疾的女子确实不能嫁入皇家，顾家执意要大小姐嫁过去，只怕亲家结不成，反倒结成仇家了。”“荒唐，这哪里荒唐了，难道要本世子吃这个哑巴亏，把一个残废娶回家？”秦云楚一脸骄横，残疾二字越说越顺口，看顾千城的眼神，也是一脸嫌恶。',
      scroll_top: 0
    })
  },
  nextPage:function(){
    this.setData({
      Text: '这一对翁婿，直接越过顾千城，也不管顾千城的意愿，三言两语就同意了换新娘达成所愿，秦云楚满意的停下脚步，笑容满面的转身：“国公爷早同意不就没事，至于我父王和母妃那边，国公爷不必担心，本世子自会解释。”一事。和婚礼相比，顾千城更秦云楚见顾国公久久不给准话，再次威胁道：“顾公国，新娘换不换？本世子还等着新娘上花轿，至于顾千城这残疾，你们爱嫁给谁就嫁让她嫁给谁，总之本世子不要。”关心自己受伤的脚，她现在只希望这场闹剧早点结束，不然她的脚撑不住。顾千城冷眼扫过观礼的客人，这些人纷纷别过脸，一脸尴尬。一伙看看秦云楚、一伙看看顾千城，无人开口。喜堂安静得吓人，似乎连针落地的声道都能听清这个时候，全福夫人收到示意，上前一步打破寂静：“顾国公，这身有残疾的女子确实不能嫁入皇家，顾家执意要大小姐嫁过去，只怕亲家结不成，反倒结成仇家了。”“荒唐，这哪里荒唐了，难道要本世子吃这个哑巴亏，把一个残废娶回家？”秦云楚一脸骄横，残疾二字越说越顺口，看顾千城的眼神，也是一脸嫌恶。',
      scroll_top: 0
    })
  },
  // 触摸开始事件 
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点 
    // 使用js计时器记录时间  
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件 
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    // console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向左滑动  
    if (touchMove - touchDot <= -40 && time < 10) {
      // wx.switchTab({
      //   url: '../左滑页面/左滑页面'
      // });
      // console.log("left")
      this.setData({
        Text: '和婚礼相比，顾千城更秦云楚见顾国公久久不给准话，再次威胁道：“顾公国，新娘换不换？本世子还等着新娘上花轿，至于顾千城这残疾，你们爱嫁给谁就嫁让她嫁给谁，总之本世子不要。”关心自己受伤的脚，她现在只希望这场闹剧早点结束，不然她的脚撑不住。顾千城冷眼扫过观礼的客人，这些人纷纷别过脸，一脸尴尬。一伙看看秦云楚、一伙看看顾千城，无人开口。喜堂安静得吓人，似乎连针落地的声道都能听清这个时候，全福夫人收到示意，上前一步打破寂静：“顾国公，这身有残疾的女子确实不能嫁入皇家，顾家执意要大小姐嫁过去，只怕亲家结不成，反倒结成仇家了。”“荒唐，这哪里荒唐了，难道要本世子吃这个哑巴亏，把一个残废娶回家？”秦云楚一脸骄横，残疾二字越说越顺口，看顾千城的眼神，也是一脸嫌恶。',
        scroll_top: 0
      })
    }
    // 向右滑动 
    if (touchMove - touchDot >= 40 && time < 10) {
      // console.log('right');
      // wx.switchTab({
      //   url: '../右滑页面/右滑页面'
      // });
      this.setData({
        Text: '这一对翁婿，直接越过顾千城，也不管顾千城的意愿，三言两语就同意了换新娘达成所愿，秦云楚满意的停下脚步，笑容满面的转身：“国公爷早同意不就没事，至于我父王和母妃那边，国公爷不必担心，本世子自会解释。”一事。和婚礼相比，顾千城更秦云楚见顾国公久久不给准话，再次威胁道：“顾公国，新娘换不换？本世子还等着新娘上花轿，至于顾千城这残疾，你们爱嫁给谁就嫁让她嫁给谁，总之本世子不要。”关心自己受伤的脚，她现在只希望这场闹剧早点结束，不然她的脚撑不住。顾千城冷眼扫过观礼的客人，这些人纷纷别过脸，一脸尴尬。一伙看看秦云楚、一伙看看顾千城，无人开口。喜堂安静得吓人，似乎连针落地的声道都能听清这个时候，全福夫人收到示意，上前一步打破寂静：“顾国公，这身有残疾的女子确实不能嫁入皇家，顾家执意要大小姐嫁过去，只怕亲家结不成，反倒结成仇家了。”“荒唐，这哪里荒唐了，难道要本世子吃这个哑巴亏，把一个残废娶回家？”秦云楚一脸骄横，残疾二字越说越顺口，看顾千城的眼神，也是一脸嫌恶。',
        scroll_top: 0
      })
    }
  },
  // 触摸结束事件 
  touchEnd: function (e) {
    clearInterval(interval); // 清除setInterval 
    time = 0;
  }
})
