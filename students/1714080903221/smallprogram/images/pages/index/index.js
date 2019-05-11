 //index.js
var app = getApp()
Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 3, "skcd": 2, "kcmc": "线性代数@1-505" },
      { "xqj": 1, "skjc": 5, "skcd": 2, "kcmc": "计算机组成原理@11-406" },
      { "xqj": 1, "skjc": 7, "skcd": 2, "kcmc": "计算机网络工程@11-107" },

      { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "毛泽东思想和中国特色社会主义理论体系概论@2-607" },
      { "xqj": 2, "skjc": 3, "skcd": 2, "kcmc": "数据库系统概论@2-101" },
      { "xqj": 2, "skjc": 5, "skcd": 2, "kcmc": "高级编程技术与应用@5-502" },
      { "xqj": 2, "skjc": 7, "skcd": 2, "kcmc": "电路与模拟电子技术@5-305" },

      { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": "汇编语言@5-307" },
      { "xqj": 3, "skjc": 3, "skcd": 2, "kcmc": "概率统计@5-301" },
      { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "高级编程技术与应用@5-403" },

      { "xqj": 4, "skjc": 1, "skcd": 2, "kcmc": "毛泽东思想和中国特色社会主义理论体系概论@11-105" },
      { "xqj": 4, "skjc": 3, "skcd": 2, "kcmc": "数据库系统概论@2-101" },

      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "实用翻译@11-206" },
      { "xqj": 5, "skjc": 5, "skcd": 2, "kcmc": "汇编语言@5-409" },
      { "xqj": 5, "skjc": 7, "skcd": 2, "kcmc": "公共体育4" },

      { "xqj": 7, "skjc": 1, "skcd": 3, "kcmc": "高级网页设计@5-509" },





    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
