Page({
  data: {
    TodayList: [],
    Today: "",
    input: ""
  },save: function () {
    wx.setStorageSync('TodayList', this.data.TodayList);
  },
  loadData: function () {
    var todo = wx.getStorageSync('TodayList');
    if (todo) {
      this.setData({
        TodayList: todo
      }); }},
  AddInput: function (e) {
    this.setData({
      input: e.detail.value});},
  toggleTodoHandle: function (e) {
    var todo = this.data.TodayList;
    //获取e传输的id
    var index = e.currentTarget.id;
    //改变complete状态
    todo[index].completed = !todo[index].completed;
    //更改数据
    this.setData({
      TodayList: todo});
    this.save();},
  AddConfirm: function (e) {
    var that = this;
    var todo = this.data.TodayList;
    todo.push({ description: this.data.input, completed: false })
    //更新数据
    that.setData({ TodayList: todo, input: '' });
    //输出日志信息
    console.log(this.data.TodayList)
    //保存记录到本地
    this.save();
  },
  removeTodoHandle: function (e) {
    var todo = this.data.TodayList;
    var index = e.currentTarget.id;
    todo.splice(index, 1);
    console.log(todo);
    this.setData({
      TodayList: todo
    });
    this.save();},
  onLoad: function (options) {
    var that = this;
    var date1 = new Date;
    var date2 = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var Today;
    Today = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() + '   ' + (date2[date1.getDay()]);
    var TodayStorage = wx.getStorageSync("Today");
    if (TodayStorage != Today) {
      wx.setStorageSync("Today", Today);
    }
    that.setData({
      Today: Today});
    this.loadData();},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}})