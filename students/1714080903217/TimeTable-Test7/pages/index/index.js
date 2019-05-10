//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 1, "skcd": 3, "kcmc": "离散数学@旭日-301" },
      { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "网页设计@旭日-302" },
      { "xqj": 2, "skjc": 1, "skcd": 2,"kcmc":"网页设计@旭日-303"},
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等代数@旭日-304" },
      { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "模电@旭日-305" },
      { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "物理@旭日-306" },
      { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "英语@旭日-307" },
      { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "天文@旭日-308" },
      { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "日文@旭日-309" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "体育@旭日-310" },
      { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高数@旭日-311" },
      { "xqj":1, "skjc": 4, "skcd":1, "kcmc": "高数@旭日-311" },
      { "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "美术@旭日-312" },
      { "xqj": 6, "skjc":1, "skcd": 2, "kcmc": "高数@旭日-311" },
      { "xqj": 5, "skjc": 5, "skcd":3, "kcmc": "高数@旭日-311" },
      { "xqj": 4, "skjc":5, "skcd": 1, "kcmc": "高数@旭日-311" },
      { "xqj": 2, "skjc": 5, "skcd":3, "kcmc": "高数@旭日-311" },
       { "xqj": 4, "skjc": 8, "skcd":3, "kcmc": "高数@旭日-311" },
      { "xqj": 2, "skjc": 3, "skcd": 1, "kcmc": "高数@旭日-311" },
      { "xqj": 2, "skjc": 3, "skcd": 1, "kcmc": "高数@旭日-311" },
      



     
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
