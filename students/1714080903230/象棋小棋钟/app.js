App({
    onLaunch: function() {
        var e = {
            baseTime: 600,
            readTime: 10,
            readLimit: 3,
            repairTime: 0
        }, a = wx.getStorageSync("black_rule") || e, l = wx.getStorageSync("white_rule") || e, e = wx.getStorageSync("rule_type") || 1, t = wx.getStorageSync("is_play") || !0;
        this.globalData = {
            blackRule: a,
            whiteRule: l,
            ruleType: e,
            isPlay: t
        };
    },
    globalData: {
        blackRule: null,
        whiteRule: null
    }
});