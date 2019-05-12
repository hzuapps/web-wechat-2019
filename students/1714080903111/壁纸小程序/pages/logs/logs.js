var Bmob = require('../../utils/bmob.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    p_type:null,
    urllist:[],
    p_type:'',
    page:1,
    pageSize:6,
    results:[],
    contentItems: ['', '', '', ''],
    listItems: ['', '', '']
  },


  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var pageSize=this.data.pageSize;
    var flag=true;
   

    var that = this;
    that.setData({
      p_type: options.p_type
    })
    console.log("p_type的值是：", options.p_type)
    var Diary = Bmob.Object.extend(options.p_type);
    var query = new Bmob.Query(Diary);
    query.descending("createdAt");
    query.limit(pageSize);
  

    // 查询所有数据
    query.find({
      success: function (results) {
     
        flag=false;
        console.log("共查询到 " + results.length + " 条记录");
        that.setData({
         
          results: results
        })
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id + ' - ' + object.get('url'));
          that.data.urllist[i] = object.get('url');
          console.log(that.data.urllist[i])
        }
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
    if(flag==true){
      wx.showToast({
        title: '正在加载',
        icon: 'loading',
      })
    }
  },

  lower: function () {
    console.log("到达底部");
    var resultsOld=this.data.results;
    var urllistOld=this.data.urllist;
    var that = this;
    var urllistNew=[];
    var flag=true;
    var flag1=true;
    var pageSize = this.data.pageSize;
    var page = this.data.page;

    var Diary = Bmob.Object.extend(this.data.p_type);
    var query = new Bmob.Query(Diary);
    query.descending("createdAt");
    query.limit(pageSize);
    query.skip(pageSize*page);
    
    // 查询所有数据
    query.find({
      success: function (results) {
        // flag=false;
        page++;
        if (results.length==0){
          wx.showToast({
            title: '已经没有了!',
            icon: 'none',
          })
          // console.log("最终当前列表",that.data.urllist)
        }
        // console.log("共查询到 " + results.length + " 条记录");
        that.setData({
          page:page,
          results: resultsOld.concat(results)
        })
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          // console.log(object.id + ' - ' + object.get('url'));
          urllistNew[i] = object.get('url');
          // console.log(that.data.urllist[i])
        }
        that.setData({
          urllist: urllistOld.concat(urllistNew)
        })
        flag = false;
        // console.log("当前列表", that.data.urllist)
      },
      error: function (error) {
        // console.log("查询失败: " + error.code + " " + error.message);
      }
    });
    
   if(flag == true) {
      wx.showToast({
        title: '正在加载',
        icon: 'loading',
      })
    }
  },

  bindPicture: function (res) {
    console.log(res.target.dataset.imgsrc)
    var current = res.target.dataset.imgsrc;
    wx.previewImage({
      current: current,
       urls: this.data.urllist // 需要预览的图片http链接列表
    })
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
  },
 
})