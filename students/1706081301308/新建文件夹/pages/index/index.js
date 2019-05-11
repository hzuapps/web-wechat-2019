//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    foodList: 0,
    result: '',
    count: null
  },

  onLoad: function() {
   
  },
  //提交菜品数量
  submitCount(e) {
    //获取表单的数量
    var count = e.detail.value.count
    //定义数组
    var foodList = []
    //按照数量初始化数组
    for (var i = 0; i < count; i++) {
      console.log(i)
      foodList.push({
        index: i,
        name: ''
      })
    }
    //设置数据
    this.setData({
      foodList,
      count
    })
  },
  //提交随机
  random(e) {
    //获取表单内容
    var data = e.detail.value
    //获取数量
    var count = this.data.count
    // console.log(data)
    //获取随机结果
    var res = Math.floor(Math.random() * count)
    //定义数组索引,用来和随机数判断
    var flag = 0
    for (var item in data) {
      if (flag === res) {
        //如果随机数和索引一直,就进行数据设置
        this.setData({
          result: data[item]
        })
        return
      }
      flag++
    }
  },
  //重置数据
  reset() {
    this.setData({
      foodList: 0,
      result: '',
      count: null
    })
  }
})