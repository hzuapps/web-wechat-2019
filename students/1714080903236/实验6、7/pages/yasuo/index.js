Page({
    data: {
        icon: {
            normal: "//img.yzcdn.cn/icon-normal.png",
            active: "//img.yzcdn.cn/icon-active.png"
        },
        files: [],
        imgs: []
    },

    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onChange: function(e) {
        this.setData({
            checked: e.detail
        });
    },
    chooseImage: function(e) {
        var o = this;
  
        o.data.files.length >= 3 ? wx.showModal({
            title: "提示",
            content: "最多3张图片",
            showCancel: !1,
            success: function(e) {
                e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
            }
        }) : wx.chooseImage({
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                o.data.files.length + e.tempFilePaths.length > 3 ? wx.showModal({
                    title: "提示",
                    content: "最多3张图片",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
                    }
                }) : (console.log("文件:", e), e.tempFiles.forEach(function(e) {
                    e.size > 1048576 ? e.size = (e.size / 1024 / 1024).toFixed(2) + "M" : e.size >= 1024 && e.size < 1048576 ? e.size = (e.size / 1024).toFixed(2) + "kb" : e.size = e.size + "b";
                }), o.setData({
                    files: o.data.files.concat(e.tempFiles)
                }));
            }
        });
    },
    previewImage: function(e) {
        for (var o = [], n = 0; n < this.data.files.length; n++) console.log(this.data.files[n].path), 
        o.push(this.data.files[n].path);
        wx.previewImage({
            current: this.data.files[e.currentTarget.id].path,
            urls: o
        });
    },
    savePic: function() {
        for (var e = 0; e < this.data.files.length; e++) wx.saveImageToPhotosAlbum({
            filePath: this.data.files[e].path,
            success: function(e) {
                wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(e) {
                wx.showModal({
                    title: "提示",
                    content: "保存失败",
                    showCancel: !1
                });
            }
        });
    }
});