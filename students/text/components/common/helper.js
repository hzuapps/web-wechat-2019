var n = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll" ], r = function(n, r) {
    for (var o = arguments.length, e = Array(o > 2 ? o - 2 : 0), t = 2; t < o; t++) e[t - 2] = arguments[t];
    return e.forEach(function(o) {
        o && Object.keys(o).forEach(function(e) {
            var t = o[e];
            if (n.indexOf(e) >= 0 && "function" == typeof t) {
                var a = "__$" + e;
                r[a] ? r[a].push(t) : (r[a] = [ t ], r[e] = function() {
                    for (var n = this, o = arguments.length, e = Array(o), t = 0; t < o; t++) e[t] = arguments[t];
                    r[a].forEach(function(r) {
                        return r.apply(n, e);
                    });
                });
            } else r[e] = t;
        });
    }), r;
};

module.exports = {
    extractComponentId: function() {
        return ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).currentTarget || {}).dataset.componentId;
    },
    extend: function(o) {
        for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) t[a - 1] = arguments[a];
        if (Array.isArray(o)) {
            var f = o.filter(function(r) {
                return n.indexOf(r) >= 0;
            });
            return r.bind(null, f);
        }
        return r.apply(void 0, [ n, o ].concat(t));
    }
};