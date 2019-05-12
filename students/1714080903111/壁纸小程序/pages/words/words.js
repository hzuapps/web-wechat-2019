var Bmob = require('../../utils/bmob.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  formSubmit:function(e){
    if (e.detail.value.words == "") {
      wx.showModal({
        title: '提示',
        content: "请输入内容再提交"
      })
    }
    var words=e.detail.value.words;

    var Diary = Bmob.Object.extend("words");
    var diary = new Diary();
    diary.set("content", words);
    //添加数据，第一个入口参数是null
    diary.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("日记创建成功, objectId:" + result.id);
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 3000,
        })
        
      },
      error: function (result, error) {
        // 添加失败
        console.log('创建日记失败');
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 3000,
        })
      }
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})