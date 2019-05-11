//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInputName: '',
    pixelRatio:'',
    indexHeadBgSrc:'',
    indexHeadBgSrc2:'../../images/constellation@2x.png',
    indexHeadBgSrc3: '../../images/constellation@3x.png',
    indexHeadInputBgSrc:'',
    indexHeadInputBgSrc2: '../../images/inputbg@2x.png',
    indexHeadInputBgSrc3: '../../images/inputbg@3x.png',
    fortuneArr: [
      { title: '越人歌', desc: '山有木兮木有枝，心悦君兮君不知。' },
      { title: '离思五首', desc: '曾经沧海难为水，除却巫山不是云。' },
      { title: '木兰花', desc: '人生若只如初见，何事秋风悲画扇。' },
      { title: '白头吟', desc: '愿得一心人，白头不相离。' },
      { title: '秋风词', desc: '相思相见知何日？此时此夜难为情！ ' },
      { title: '题都城南庄', desc: '去年今日此门中，人面桃花相映红。' },
      { title: '画菊', desc: '宁可枝头抱香死，何曾吹落北风中。' },
      { title: '桃夭', desc: '桃之夭夭，灼灼其华。' },
      { title: '春宵', desc: '春宵一刻值千金，花有清香月有阴。' },
      { title: '水调歌头', desc: '明月几时有？把酒问青天。' },
      { title: '水调歌头', desc: '但愿人长久，千里共婵娟。' },
      { title: '水调歌头', desc: '人有悲欢离合，月有阴晴圆缺，' },
      { title: '己亥杂诗', desc: '落红不是无情物，化作春泥更护花。' },
      { title: '从军行', desc: '黄沙百战穿金甲，不破楼兰终不还。' },
      { title: '过零丁洋', desc: '人生自古谁无死？留取丹心照汗青。' },
      { title: '渡易水歌', desc: '风萧萧兮易水寒，壮士一去兮不复还。' },
      { title: '贾生', desc: '可怜夜半虚前席，不问苍生问鬼神。' },
      { title: '一丛花令', desc: '伤高怀远几时穷？无物似情浓。' },
      { title: '无题', desc: '相见时难别亦难，东风无力百花残。' },
      { title: '简卢陟', desc: '我有一瓢酒，可以慰风尘。' },
      { title: '寒梦', desc: '醒来吟落灯花，灯暗纸窗月斜。' },
      { title: '锦瑟', desc: '此情可待成追忆，只是当时已惘然。' },
      { title: '锦瑟', desc: '锦瑟无端五十弦，一弦一柱思华年。' },
      { title: '访戴天山道士不遇', desc: '树深时见鹿，溪午不闻钟。' },
      { title: '月下独酌', desc: '举杯邀明月，对影成三人。' },
      { title: '月下独酌', desc: '永结无情游，相期邈云汉。' },
      { title: '相思', desc: '红豆生南国，春来发几枝。' },
      { title: '相思', desc: '愿君多采撷，此物最相思。' },
      { title: '蝶恋花', desc: '独上高楼，望尽天涯路。' },
      { title: '蝶恋花', desc: '欲寄彩笺兼尺素，山长水阔知何处？' },
      { title: '蝶恋花', desc: '衣带渐宽终不悔，为伊消得人憔悴。' },
      { title: '蝶恋花', desc: '泪眼问花花不语，乱红飞过秋千去。' },
      { title: '蝶恋花', desc: '一往情深深几许？深山夕照深秋雨。' },
      { title: '虞美人', desc: '春花秋月何时了？往事知多少。' },
      { title: '虞美人', desc: '问君能有几多愁？恰似一江春水向东流。' },
      { title: '舟夜书所见', desc: '月黑见渔灯，孤光一点萤。' },
      { title: '舟夜书所见', desc: '微微风簇浪，散作满河星。' },
      { title: '鹊桥仙', desc: '金风玉露一相逢，便胜却人间无数。' },
      { title: '鹊桥仙', desc: '两情若是久长时，又岂在朝朝暮暮。' },
      { title: '早春呈水部张十八员外', desc: '天街小雨润如酥，草色遥看近却无。' },
      { title: '青玉案', desc: '试问闲情都几许？一川烟草，满城风絮，梅子黄时雨。' },
      { title: '青玉案', desc: '月桥花院，琐窗朱户，只有春知处。' },
      { title: '青玉案', desc: '飞云冉冉蘅皋暮，彩笔新题断肠句。' }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    // 保留当前页跳转
    wx.navigateTo({
      url: '../logs/logs'
    })
    // 关闭跳转
    //wx.redirectTo({
    //  url: '../logs/logs'
    //})
  },
    // 用户输入的名字事件
  bindNameInput: function(e) {
    this.setData({
      userInputName: e.detail.value
    })
  },
  // 开始分析事件
  getUserFortune: function () {
    if (this.data.userInputName) {
      let currentFortuneData = this.getUserIsFortune(this.data.userInputName);
      // 词已经查过
      if (currentFortuneData && currentFortuneData.name) {
        wx.setStorageSync('currentFortuneData', currentFortuneData);
      } else {
        let max = this.data.fortuneArr.length;
        let min = 0;
        let ranNumber = parseInt(Math.random() * (max - min) + min, 10);
        let obj ={'title':this.data.fortuneArr[ranNumber].title,'desc':this.data.fortuneArr[ranNumber].desc,'name':this.data.userInputName};
        this.addUserFortune(obj);
        wx.setStorageSync('currentFortuneData', obj);
      }
      // 关闭跳转
      wx.redirectTo({
        url: '../fortune-result/fortune-result'
      })
    } else {
      wx.showToast({
        title: '请输入字',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 判断字是否查过
  getUserIsFortune: function(name){
    let returnVal = {};
    let arr = wx.getStorageSync('fortuneData') || [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].name == name) {
        returnVal = arr[i];
        break;
      }
    }
    return returnVal;
  },
  addUserFortune: function(obj) {
    let arr = wx.getStorageSync('fortuneData') || [];
    arr.push(obj);
    wx.setStorageSync('fortuneData',arr);
  },
  onLoad: function (options) {
    let pixelRatio = this.getPixelRatio();
    if (pixelRatio == 2){
      this.setData({
        indexHeadBgSrc: this.data.indexHeadBgSrc2,
        indexHeadInputBgSrc: this.data.indexHeadInputBgSrc2,
      });
    }else{
      this.setData({
        indexHeadBgSrc: this.data.indexHeadBgSrc3,
        indexHeadInputBgSrc: this.data.indexHeadInputBgSrc3,
      });
    }
    this.setData({
      pixelRatio: pixelRatio
    });
  },
  //获取设备像素比
  getPixelRatio: function() {
    let pixelRatio = 0
    wx.getSystemInfo({
      success: function (res) {
        pixelRatio = res.pixelRatio
      },
      fail: function () {
        pixelRatio = 0
      }
    })
    return pixelRatio
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
