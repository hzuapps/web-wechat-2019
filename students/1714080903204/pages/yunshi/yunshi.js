// pages/yunshi/yunshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    grade_name: '--请选择--',
    grades: [
      '晴天',
      '雨天',
      '阴天',
    ]
  },/**
 * 点击下拉框
 */
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  /**
   * 已选下拉框
   */
  mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      grade_name: name,
      select: false
    })
  }
})