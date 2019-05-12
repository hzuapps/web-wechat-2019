// pages/picture/picture.js
Page({
  data: {
    addblur: 0,
    oldEffect: 0,
    addretro: 0,
    addBeati: 0,
    addcontrast: 0,
    addinvert: 0,
    addsaturate: 0,
    picArray: [],
  },

//上传本地图片
  choosePhoto: function () {
    var self = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        self.setData({
          picArray: res.tempFilePaths
        });
        console.log(res);
      }
    })
  },

/* 模糊 */
  addblur: function () {
    var self = this;
    self.setData({
      addblur: 1
    });
  },

  originpic: function () {
    var self = this;
    self.setData({
      addblur: 0,
      oldEffect: 0,
      addretro: 0,
      addBeati: 0,
      addcontrast: 0,
      addinvert: 0,
      addsaturate: 0,
    });
  },

/* 怀旧 */
  addOld: function () {
    var self = this;
    self.setData({
      oldEffect: 1
    });
  },

/* 复古 */
  addretro: function () {
    var self = this;
    self.setData({
      addretro: 1
    });
  },

/* 美白 */
  addBeati: function () {
    var self = this;
    self.setData({
      addBeati: 1
    });
  },

/* 蒙版 */
  addcontrast: function () {
    var self = this;
    self.setData({
      addcontrast: 1
    });
  },

/* 反相 */
  addinvert: function () {
    var self = this;
    self.setData({
      addinvert: 1
    });
  },

/* 无饱和 */
  addsaturate: function () {
    var self = this;
    self.setData({
      addsaturate: 1
    });
  },

})