//index.js
//获取应用实例

var Bmob = require('../../utils/bmob.js');
var app = getApp();
Page({
  data: {
    animationData: {},
    cardInfoList: [
      {
        p_type: 'b_fengjing',
        cardUrl: 'http://bmob-cdn-20513.b0.upaiyun.com/2018/09/05/3228daca4047cd79808f0ea3082e5555.jpg',
        cardInfo: {
          cardTitle: '风景',
          cardInfoMes: ['好风光似幻似虚', '谁明人生乐趣', '我会说为情为爱仍然是对'],
        }
      },{
      p_type: 'b_dongman',
      cardUrl: 'http://bmob-cdn-20513.b0.upaiyun.com/2018/09/05/9ab955f5406360ed80886c4bfeed1854.jpg',
      cardInfo: {
        cardTitle: '动漫',
        cardInfoMes: ['桥上的恋人入对出双', '桥下的红药叹夜太漫长，人也摇晃', '月也摇晃，乌篷里传来了一曲离殇'],
      
      }
    },{
        p_type: 'b_renwu',
        cardUrl: 'http://bmob-cdn-20513.b0.upaiyun.com/2018/09/05/287ea4b040a76ed180ad41a5907d2003.jpg',
        cardInfo: {
          cardTitle: '人物',
          cardInfoMes: ['来日纵使千千阙歌', '飘于远方我路上', '来日纵使千千晚星亮过今晚月亮'],
       
      }
    }]
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation = animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(62).translateX(25).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function () {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      });
    }, 350);
  },
  buythis: function (e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({
      url: '../log/log'
    });
  }
})
