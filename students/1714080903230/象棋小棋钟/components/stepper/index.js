function e(e, a) {
    var t = e.currentTarget.dataset, l = t.componentId, r = t.disabled, i = +t.stepper, p = t.name || null;
    i += +a;
    var s = +t.max, u = +t.min;
    if (i > s ? i = u : i < u && (i = s), r) return null;
    n.call(this, l, i, p);
}

function n(e, n, a) {
    var t = {
        componentId: e,
        stepper: n = +n,
        name: a
    };
    this.handleZanStepperChange ? this.handleZanStepperChange(t) : console.warn("页面缺少 handleZanStepperChange 回调函数");
}

var a = {
    _handleZanStepperMinus: function(n) {
        e.call(this, n, -1);
    },
    _handleZanStepperPlus: function(n) {
        e.call(this, n, 1);
    },
    _handleZanStepperBlur: function(e) {
        var a = this, t = e.currentTarget.dataset, l = t.componentId, r = +t.max, i = +t.min, p = e.detail.value, s = +t.name || null;
        return p ? ((p = +p) > r ? p = i : p < i && (p = r), n.call(this, l, p, s), "" + p) : (setTimeout(function() {
            n.call(a, l, i);
        }, 16), n.call(this, l, p), "" + p);
    }
};

module.exports = a;