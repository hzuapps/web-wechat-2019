function e(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}

var t = getApp(), s = require("../../components/index.js"), p = s.extend, a = s.Stepper, i = require("../../utils/util.js");

Page(p({}, a, {
    data: {
        isSync: !0,
        rule: 1,
        isPlay: !0,
        bstep_hour: {
            title: "时",
            stepper: 1,
            min: 0,
            max: 99,
            name: "step_hour"
        },
        bstep_minutes: {
            title: "分",
            stepper: 1,
            min: 0,
            max: 59,
            name: "step_minutes"
        },
        bstep_seconds: {
            title: "秒",
            stepper: 1,
            min: 0,
            max: 59,
            name: "step_seconds"
        },
        bstep_readTime: {
            title: "秒",
            stepper: 1,
            min: 0,
            max: 600,
            name: "step_readTime"
        },
        bstep_readLimit: {
            title: "次",
            stepper: 1,
            min: 0,
            max: 100,
            name: "step_readLimit"
        },
        wstep_hour: {
            title: "时",
            stepper: 1,
            min: 0,
            max: 99,
            name: "step_hour"
        },
        wstep_minutes: {
            title: "分",
            stepper: 1,
            min: 0,
            max: 59,
            name: "step_minutes"
        },
        wstep_seconds: {
            title: "秒",
            stepper: 1,
            min: 0,
            max: 59,
            name: "step_seconds"
        },
        wstep_readTime: {
            title: "秒",
            stepper: 1,
            min: 0,
            max: 600,
            name: "step_readTime"
        },
        wstep_readLimit: {
            title: "次",
            stepper: 1,
            min: 0,
            max: 100,
            name: "step_readLimit"
        },
        bstep_repairTime: {
            title: "秒",
            stepper: 30,
            min: 0,
            max: 59,
            name: "step_repairTime"
        },
        wstep_repairTime: {
            title: "秒",
            stepper: 30,
            min: 0,
            max: 59,
            name: "step_repairTime"
        }
    },
    onLoad: function() {
        var s, p = t.globalData, a = p.blackRule, r = p.whiteRule, n = i.formatSeconds(a.baseTime), m = i.formatSeconds(r.baseTime);
        this.setData((s = {
            isPlay: p.isPlay,
            rule: p.ruleType
        }, e(s, "bstep_hour.stepper", n.hour), e(s, "bstep_minutes.stepper", n.minute), 
        e(s, "bstep_seconds.stepper", n.seconds), e(s, "bstep_readTime.stepper", a.readTime), 
        e(s, "bstep_readLimit.stepper", a.readLimit), e(s, "wstep_readLimit.stepper", r.readLimit), 
        e(s, "wstep_hour.stepper", m.hour), e(s, "wstep_minutes.stepper", m.minute), e(s, "wstep_seconds.stepper", m.seconds), 
        e(s, "wstep_readTime.stepper", r.readTime), e(s, "wstep_readLimit.stepper", r.readLimit), 
        e(s, "bstep_repairTime.stepper", a.repairTime), e(s, "wstep_repairTime.stepper", r.repairTime), 
        s));
    },
    handleZanStepperChange: function(t) {
        var s = t.componentId, p = t.stepper, a = t.name, i = {};
        if (this.data.isSync) if ("repairTime" != a) {
            var r;
            e(r = {}, "b" + a + ".stepper", p), e(r, "w" + a + ".stepper", p), i = r;
        } else i = e({}, s + ".stepper", p); else i = e({}, s + ".stepper", p);
        this.setData(i), this.resetGlobaldata();
    },
    radioChange: function(e) {
        this.setData({
            rule: e.detail.value
        }), wx.setStorageSync("rule_type", e.detail.value), t.globalData.ruleType = e.detail.value;
    },
    checkboxChange: function(e) {
        this.setData({
            isSync: e.detail.value.length > 0
        });
    },
    changeSound: function(e) {
        t.globalData.isPlay = e.detail.value.length > 0, this.setData({
            isPlay: e.detail.value.length > 0
        }), wx.setStorageSync("is_play", e.detail.value > 0);
    },
    resetGlobaldata: function() {
        var e = this.data, s = {
            baseTime: 60 * parseInt(e.bstep_hour.stepper) * 60 + 60 * parseInt(e.bstep_minutes.stepper) + parseInt(e.bstep_seconds.stepper),
            readTime: e.bstep_readTime.stepper,
            readLimit: e.bstep_readLimit.stepper,
            repairTime: e.bstep_repairTime.stepper
        }, p = {
            baseTime: 60 * parseInt(e.wstep_hour.stepper) * 60 + 60 * parseInt(e.wstep_minutes.stepper) + parseInt(e.bstep_seconds.stepper),
            readTime: e.wstep_readTime.stepper,
            readLimit: e.wstep_readLimit.stepper,
            repairTime: e.wstep_repairTime.stepper
        };
        t.globalData.blackRule = s, t.globalData.whiteRule = p, wx.setStorageSync("black_rule", s), 
        wx.setStorageSync("white_rule", p);
    }
}));