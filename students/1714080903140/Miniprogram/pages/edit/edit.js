// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function(e){
    var id=e.id;
    if(id){
      getData(id,this);
    }else{
      tihs.setData({
        id:Data.now()
      })
    }
  },
  change(e){
    var val=e.datail.vlaue;
    this.setData({
      content:val
    })
  },
  cancel() {
    wx.navigateBack()
  },
  sure() {
    var re = /^\s*$/g;
    //判断输入框的值不能为空或者空字符；
    if (!this.data.content || re.test(this.data.content)) {
      return;
    }
    //点解确定之前更新时间
    this.setData({
      time: Date.now()
    })
    //把信息取到，放入storage中
    setValue(this);
    //返回前面的页面
    wx.navigateBack()
  }

})

//设置储存信息
function getData(id,page){
  var arr=wx.getStorageSync('txt');
  arr.forEach((item) => {
    if (item.id == id) {  //确定是否编辑当前信息
      page.setData({
        id: item.id,
        content: item.content
      })
    }
  })
}

function setValue(page){
  var arr=wx.getStorageSync('txt');
  var data=[],flag=true;//设置一个空数组，不管是再次编辑还是新增加，都放在数组里
  //判断是新增内容还是再次编辑? 取到信息放到stroage中，
  if (arr.length) {
    arr.forEach((item) => {
      if (item.id == page.data.id) {
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item)
    })
  }
  //新增加内容
  if (flag) {
    data.push(page.data)
  }
  wx.setStorageSync('txt', data)
}