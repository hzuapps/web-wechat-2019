// pages/first/first.js
var app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
   lists:[
     {
       content:"hello",
       time:Date.now(),
       id:1
     }
   ]
  },
  onLoad(){
    initData(this)
  },
  add(){
    wx.navigateTo({
      url: '../edit/edit',
    })
  },
  edit(e){
    var id=e.target.dataset.id;
    wx.navigateTo({
      url: '../edit/edit?id='+id,
    })
  },
})
function initData(page){
  var arr=wx.getStorageSync('txt');
  if(arr.length){
    arr.forEach((item,i)=>{
      // var t=new Date(Number(item.time));
      // item.time=time.formatTime(t);

      var newTime = new Date();
      var y = newTime.getDate();
      console.log(y);
      item.time = y;
    })
    page.setData({
      lists:arr
    })
  }
}
