// pages/finance/finance.js
var util = require('../../utils/util.js');
Page({
  data: {
    sum:0,
    dayspend:0,
    everspend:[0,0,0,0],
    text:"",
    item1:[],
    mbb:"",
  },
  onLoad: function () {
    var item1=[];
    var dayspend=0;
    var sum=0;
    try{
      item1 = wx.getStorageSync('item1');
       dayspend = wx.getStorageSync('dayspend');
       sum = wx.getStorageSync('sum');
    }
    catch(e){}
    if(!item1&&!dayspend&&!sum)
    {
      item1 = [];
      dayspend = 0;
      sum = 0;

    }
    this.setData({
      item1:item1,
      dayspend:dayspend,
      sum:sum
    })
  },
  put:function(e){
    var value =parseFloat(e.detail.value);
    var index = parseInt(e.currentTarget.dataset.index);
    var str=""+"everspend["+index+"]"
    this.setData({
      [str]: value,
    })
    console.log(this.data.everspend)
  },
  click:function(){
    var dayspend=0;
    var everspend=[0, 0, 0, 0];
    for(var i=0;i<4;i++)
    {
      dayspend = dayspend+parseFloat(this.data.everspend[i]);
    }
    this.setData({
      dayspend: dayspend,
    })
    var item=this.data.item1;
    var DATE = util.formatDate(new Date());
    var t={
      text:this.data.text,
      sum1:dayspend,
      date:DATE
    }
    item.push(t);
    var sum=this.data.sum+dayspend
    this.setData({
      item1:item,
      sum:sum,
      mbb:'',
      everspend:everspend
    })
    wx.setStorageSync('item1',this.data.item1);
    wx.setStorageSync('dayspend',this.data.dayspend);
    wx.setStorageSync('sum',this.data.sum);
  },
  onInputRemarks:function(e){
    var value = e.detail.value;
    this.setData({
      text:value,
    })
  },
})