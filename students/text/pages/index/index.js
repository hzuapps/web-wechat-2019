var e = getApp(), i = require("../../utils/util.js");

Page({
    data: {
        black: {},
        white: {},
        curColor: 0,
        ruleType: 0,
        rule: {
            baseTime: 0,
            isRead: !1,
            readTime: 10,
            readLimit: 1,
            repairTime: 30
        },
        status: {
            isPause: !1
        }
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: "象棋小棋钟",
            path: "/pages/index/index",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    onLoad: function() {
        this.readTime();
    },
    onShow: function() {
        0 == this.data.curColor && this.initRule(), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    onHide: function() {
        this.stopRead(), wx.setKeepScreenOn({
            keepScreenOn: !1
        });
    },
    initRule: function() {
        var a = i.clone(e.globalData.blackRule), t = i.clone(e.globalData.whiteRule);
        0 == a.baseTime ? (a.isRead = !0, a.baseTime = a.readTime) : a.isRead = !1, a.turn = 0, 
        0 == t.baseTime ? (t.isRead = !0, t.baseTime = t.readTime) : t.isRead = !1, 2 == e.globalData.ruleType && (a.readTime = 0, 
        a.readLimit = 0, a.isRead = !1, t.readTime = 0, t.readLimit = 0, t.isRead = !1), 
        t.turn = 0, this.setData({
            ruleType: e.globalData.ruleType,
            black: a,
            white: t,
            curColor: 0,
            status: {
                isPause: !1
            }
        }), this.showTime();
    },
    readTime: function() {
        this.Timer = setInterval(function() {
            this.calcTime();
        }.bind(this), 1e3);
    },
    calcTime: function() {
        var e = this.data.curColor, i = this.data.status;
        if (0 != e && 3 != e && !i.isPause) {
            if (1 == e) {
                var a = this.data.black;
                a.baseTime = a.baseTime - 1, a.baseTime <= 0 && a.readLimit > 0 && (a.isRead ? (a.baseTime = a.readTime, 
                a.readLimit = a.readLimit - 1, 0 == a.readLimit ? a.baseTime = 0 : this.playSound("read" + a.readLimit)) : (this.playSound("startread"), 
                a.isRead = !0, a.baseTime = a.readTime)), a.baseTime <= 0 && a.readLimit <= 0 ? (e = 3, 
                a.baseTime = 0, i.isEnd = !0, i.isPause = !0, this.Timer && clearInterval(this.Timer)) : a.baseTime <= 10 && this.playSound(a.baseTime), 
                this.setData({
                    curColor: e,
                    black: a,
                    status: i
                });
            } else if (-1 == e) {
                var t = this.data.white;
                t.baseTime = t.baseTime - 1, t.baseTime <= 0 && t.readLimit > 0 && (t.isRead ? (t.baseTime = t.readTime, 
                t.readLimit = t.readLimit - 1, 0 == t.readLimit ? t.baseTime = 0 : this.playSound("read" + t.readLimit)) : (this.playSound("startread"), 
                t.isRead = !0, t.baseTime = t.readTime)), t.baseTime <= 0 && t.readLimit <= 0 ? (e = 3, 
                t.baseTime = 0, i.isEnd = !0, i.isPause = !0, this.Timer && clearInterval(this.Timer)) : t.baseTime <= 10 && this.playSound(t.baseTime), 
                this.setData({
                    curColor: e,
                    white: t,
                    status: i
                });
            }
            this.showTime();
        }
    },
    showTime: function() {
        var e = this.data.black, a = this.data.white;
        e.timeDesc = i.formatSeconds(e.baseTime).text, a.timeDesc = i.formatSeconds(a.baseTime).text, 
        this.setData({
            black: e,
            white: a
        });
    },
    chess: function(e) {
        var i = e.currentTarget.dataset.id;
        this.Timer && clearInterval(this.Timer);
        var a = this.data.curColor, t = this.data.black, s = this.data.white, r = this.data.ruleType;
        1 == a ? (1 == r ? t.isRead && (t.baseTime = t.readTime) : t.baseTime = t.baseTime + t.repairTime, 
        t.turn++) : -1 == a && (1 == r ? s.isRead && (s.baseTime = s.readTime) : s.baseTime = s.baseTime + s.repairTime, 
        s.turn++), 0 == a ? (a = i, this.playSound("start")) : (this.playSound("move"), 
        a = 0 - a), this.setData({
            curColor: a,
            black: t,
            white: s
        }), this.showTime(), this.readTime();
    },
    startRead: function() {
        3 == this.data.curColor ? this.initRule() : this.setData({
            status: {
                isPause: !1
            }
        });
    },
    stopRead: function() {
        0 != this.data.curColor && this.setData({
            status: {
                isPause: !0
            }
        });
    },
    resetRead: function() {
        this.initRule();
    },
    toSetting: function() {
        wx.navigateTo({
            url: "/pages/settting/setting"
        });
    },
    playSound: function(i) {
        
    }
});