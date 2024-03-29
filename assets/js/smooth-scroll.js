! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueSmoothScroll = t() : e.VueSmoothScroll = t()
}(window, function () {
    return function (e) {
        var t = {};

        function o(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        return o.m = e, o.c = t, o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function (e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function (t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0)
    }([function (e, t, o) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        o.r(t);
        var r = {
            install: function (e, t) {
                e.directive("smooth-scroll", {
                    inserted: function (e, o) {
                        if ("object" === ("undefined" == typeof window ? "undefined" : n(window)) && void 0 !== window.pageYOffset) {
                            var r = {
                                duration: 500,
                                offset: 0,
                                container: window,
                                updateHistory: !0
                            };
                            t && Object.assign(r, t);
                            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
                                    window.setTimeout(e, 16)
                                },
                                u = o.value || {},
                                f = u.duration,
                                a = u.offset,
                                d = u.container,
                                c = u.updateHistory;
                            f = f || r.duration, a = a || r.offset, c = void 0 !== c ? c : r.updateHistory, "string" == typeof (d = d || r.container) && (d = document.querySelector(d)), e.addEventListener("click", function (e) {
                                e.preventDefault();
                                var t = document.getElementById(this.hash.substring(1));
                                if (t) {
                                    c && window.history.pushState && location.hash !== this.hash && window.history.pushState("", "", this.hash);
                                    var o, n, r = d.scrollTop || window.pageYOffset,
                                        u = (n = r, "HTML" === (o = t).nodeName ? -n : o.getBoundingClientRect().top + n);
                                    u += a;
                                    var l = Date.now();
                                    ! function e() {
                                        var o, n = Date.now() - l,
                                            a = u;
                                        n < f ? (a = r + (u - r) * ((o = n / f) < .5 ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1), i(e)) : c && location.replace("#" + t.id), d === window ? d.scrollTo(0, a) : d.scrollTop = a
                                    }()
                                }
                            })
                        }
                    }
                })
            }
        };
        t.default = r, "undefined" != typeof window && window.Vue && window.Vue.use(r)
    }])
});