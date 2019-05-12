// pages/item/item.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    title: '',
    cate: '+',
    account: '',
    modalHidden: true,
    alertHidden: true,
    date: '',
  },
  bindTitleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
    // console.log(e.detail.value)
  },
  //   金额radio
  radioChange: function (e) {
    this.setData({
      cate: e.detail.value
    })
    console.log(e.detail.value)
  },
  bindAccountInput: function (e) {
    this.setData({
      account: e.detail.value
    })
    // console.log(e.detail.value)
  },
  /**
 * 生命周期函数--监听页面加载
 */
  save: function () {
    var that = this
    if (this.data.title == '') {
      // 提示框
      that.setData({
        alertHidden: false,
        alertTitle: '标题不能为空'
      });
      return
    }
    var re = /^[0-9]+.?[0-9]*$/;
    if (!re.test(this.data.account)) {
      // 提示框
      that.setData({
        alertHidden: false,
        alertTitle: '金额只能是数字'
      });
      return
    }


    // 访问网络
    var app = getApp();
    wx.getStorage({
      key: 'list',
      success: function (res) {
        var d = res.data.substring('1').split(",")
        console.log(d)
        console.log(that.data.title)
        var is_add = true
        for (var i = 0; i < d.length; i++) {
          console.log(d[i])
          if (d[i] == that.data.title) {
            is_add = false
            break
          }
        }
        if (is_add == true) {
          // 本条数据打包成json
          var record = {
            title: that.data.title,
            cate: that.data.cate,
            account: that.data.account,
            date: that.data.date
          }
          wx.setStorage({
            key: that.data.title,
            data: record,
          })
          wx.getStorage({
            key: 'list',
            success: function (res) {
              console.log(res)
              wx.setStorage({
                key: 'list',
                data: res.data + "," + that.data.title,
              })
              that.setData({
                modalTitle: '添加成功',
                modalHidden: false
              });
            },
          })
        } else {
          that.setData({
            modalTitle: '已经添加过title为' + '\"' + that.data.title + '\"的数据啦！',
            modalHidden: false
          });
        }
      },
    })
  },
  update: function () {
    var that = this;
    // 本条数据打包成json
    var record = {
      title: this.data.title,
      cate: this.data.cate,
      account: this.data.account,
      date: this.data.date,
      id: this.data.id
    }
    // accessToken放在record传入也可以，但为了更多的复用，我将它放在httpService时统一注入
    // 访问网络
    var app = getApp();
    if (this.data.title == app.globalData.NOWTITLE) {
      wx.setStorage({
        key: app.globalData.NOWTITLE,
        data: record,
      })
      that.setData({
        modalTitle: '修改成功',
        modalHidden: false
      });
    } else {
      wx.getStorage({
        key: that.data.title,
        success: function (res) {
          that.setData({
            modalTitle: 'title为' + '\"' + that.data.title + '\"的数据已经存在！',
            modalHidden: false
          });
        },
        fail: function (res) {
          wx.setStorage({
            key: that.data.title,
            data: record,
          })
          wx.removeStorage({
            key: app.globalData.NOWTITLE,
            success: function (res) { },
          })
          wx.getStorage({
            key: 'list',
            success: function (res) {
              var d = res.data.substring('1').split(",")
              for (var i = 0; i < d.length; i++) {
                if (d[i] == app.globalData.NOWTITLE) {
                  app.globalData.NOWTITLE = d[i] = that.data.title
                  break
                }
              }
              var s = ""
              for (var j = 0; j < d.length; j++) {
                s += "," + d[j]
              }
              wx.setStorage({
                key: 'list',
                data: s,
              })
            }
          })
          that.setData({
            modalTitle: '修改成功',
            modalHidden: false
          });

        }
      })
    }


  },
  delete: function () {
    var that = this;
    // 访问网络，删除账目
    var app = getApp();
    wx.getStorage({
      key: 'list',
      success: function (res) {
        var d = res.data.substring('1').split(",")
        for (var i = 0; i < d.length; i++) {
          if (d[i] == app.globalData.NOWTITLE) {
            d.splice(i, 1)
            var s = ""
            for (var j = 0; j < d.length; j++) {
              s += "," + d[j]
            }
            wx.setStorage({
              key: 'list',
              data: s,
            })
            wx.removeStorage({
              key: app.globalData.NOWTITLE,
              success: function (res) {
                that.setData({
                  modalTitle: '删除成功',
                  modalHidden: false
                });
              },
            })
            break
          }
        }

      },
    })


  },
  onLoad: function (options) {
    // 接收id值
    this.setData({
      id: options.id,
    })
    var that = this;
    if (options.id) {
      // 访问网络，读取账目
      var app = getApp();
      var d = wx.getStorage({
        key: app.globalData.NOWTITLE,
        success: function (res) {
          console.log(res)
          that.setData({
            title: res.data.title,
            cate: res.data.cate,
            account: res.data.account,
            date: res.data.date
          })
        },
      })

    }
    // 初始化日期
    //    获取当前日期
    var date = new Date();
    //    格式化日期为"YYYY-mm-dd"
    var dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    //    存回data，以渲染到页面
    this.setData({
      date: dateStr
    })
  },

  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    if (this.data.id) {
      wx.setNavigationBarTitle({
        title: '修改账目'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '添加账目'
      })
    }
  },
  hideModal: function () {
    this.setData({
      'modalHidden': true
    })
    // 返回上一页
    wx.navigateBack()
  },
  // 关闭表单验证对话框
  hideAlertView: function () {
    this.setData({
      'alertHidden': true
    })
  },
  //  点击日期组件确定事件
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

})