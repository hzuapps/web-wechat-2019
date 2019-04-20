var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, a = e.getDate(), s = e.getHours(), o = e.getMinutes(), u = e.getSeconds();
        return [ n, r, a ].map(t).join("/") + " " + [ s, o, u ].map(t).join(":");
    },
    formatSeconds: function(t) {
        var e = parseInt(t), n = 0, r = 0;
        e > 60 && (n = parseInt(e / 60), e = parseInt(e % 60), n > 60 && (r = parseInt(n / 60), 
        n = parseInt(n % 60)));
        var a = "" + (e = parseInt(e));
        return e < 10 && (a = "0" + e), (n = parseInt(parseInt(n))) > 9 ? a = n + ":" + a : n > 0 ? a = "0" + n + ":" + a : (a = "00:" + a, 
        n = 0), (r = parseInt(r)) > 9 ? a = r + ":" + a : r > 0 ? a = "0" + r + ":" + a : (a = "00:" + a, 
        r = 0), {
            text: a,
            hour: r,
            minute: n,
            seconds: e || 0
        };
    },
    clone: function(t) {
        var e = JSON.stringify(t);
        return JSON.parse(e);
    }
};