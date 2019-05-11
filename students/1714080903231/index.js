//index.js
let timer;
let numAi = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnState: false,
    winNum:0,
    imageAiSrc: '',
    imageUserSrc: '/pages/image/wenhao.png',
    gameResult: '',
    srcs:[
      '/pages/image/shitou.png',
      '/pages/image/jiandao.png',
      '/pages/image/bu.png'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let oldwinNum=wx.getStorageSync('winNum');
    if(oldwinNum!=null&& oldwinNum!=''){
      this.setData({winNum:oldwinNum})
    }
  this.timerGo();  
  },
  changeForChoose (e){
console.log(e);
    this.setData({ imageUserSrc: this.data.srcs[e.currentTarget.id] })
    clearInterval(timer);
    let user = this.data.imageUserSrc;
    let ai = this.data.imageAiSrc;
    let num = this.data.winNum;
    let src = ' 你输了';
    if (user == '/pages/image/shitou.png' && ai == '/pages/image/jiandao.png'){
      num++;
      src = '你赢了';
      wx.setStorageSync( 'winNum',num);
    }
  if(user == '/pages/image/jiandao.png' && ai == '/pages/image/bu.png') {
    num++;
    src = '你赢了';
    wx.setStorageSync('winNum', num);
  }
  if (user == '/pages/image/bu.png' && ai == '/pages/image/shitou.png') {
    num++;
    src = '你赢了';
    wx.setStorageSync('winNum', num);
  }
  if (user == ai ) {
    src = '平局';
  }
  this.setData({
winNum:num,
gameResult:src,
    btnState: true,
  })
  },
  timerGo(){
  
timer=setInterval(this.move,500);
  },
move(){
if(numAi>=3){
numAi=0;}
numAi=parseInt(Math.floor(Math.random()*3))
this.setData({ imageAiSrc:this.data.srcs[numAi]})
  numAi++;

},
again(){
  if (this.data.btnState==false){
    return;
  }
  this.timerGo();
this.setData({
  btnState: false,
  gameResult: '',
  imageUserSrc: '/pages/image/wenhao.png',

})
}

})