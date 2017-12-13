var $jscomp = {
    scope: {},
    findInternal: function(l, h, f) {
        l instanceof String && (l = String(l));
        for (var m = l.length, e = 0; e < m; e++) {
            var b = l[e];
            if (h.call(f, b, e, l)) return {
                i: e,
                v: b
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(l, h, f) {
        if (f.get || f.set) throw new TypeError("ES3 does not support getters and setters.");
        l != Array.prototype && l != Object.prototype && (l[h] = f.value)
    };
$jscomp.getGlobal = function(l) {
    return "undefined" != typeof window && window === l ? l : "undefined" != typeof global && null != global ? global : l
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(l, h, f, m) {
    if (h) {
        f = $jscomp.global;
        l = l.split(".");
        for (m = 0; m < l.length - 1; m++) {
            var e = l[m];
            e in f || (f[e] = {});
            f = f[e]
        }
        l = l[l.length - 1];
        m = f[l];
        h = h(m);
        h != m && null != h && $jscomp.defineProperty(f, l, {
            configurable: !0,
            writable: !0,
            value: h
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(l) {
    return l ? l : function(h, f) {
            return $jscomp.findInternal(this, h, f).v
        }
}, "es6-impl", "es3");
(function() {
    function l(c) {
        var a;
        c = new RegExp("(?:; )?" + c + "=([^;]*);?", "i");
        document.cookie && (a = document.cookie.match(c, "$1"));
        return null !== a && 1 < a.length ? decodeURIComponent(a[1]) : ""
    }
    function h() {
        f() && setTimeout(function() {
            k.isSend || (m(), k.isSend = !0)
        }, 100)
    }
    function f() {
        var a = navigator.userAgent.toLowerCase();
        if ((new RegExp(k.filterRegular, "i")).test(a) || void 0 === g && JSON && JSON.stringify) return !1;
        c = window.__DH_PAGE_TIMING__;
        if (!c) return !1;
        var a = /^[\d]+$/.test(c.rate) ? c.rate : k.rate,
            b = l("vid");
        !b || 5 > b.length ? a = !1 : (b = b.slice(-5, -4), a = isNaN(1 * a) || 0 >= a || 100 < a ? !1 : 0 < a && 10 >= a && /^[a-g]$/.test(b) ? !0 : 10 < a && 20 >= a && /^[a-m]$/.test(b) ? !0 : 20 < a && 30 >= a && /^[a-t]$/.test(b) ? !0 : 30 < a && 40 >= a && /^[a-z]$/.test(b) ? !0 : 40 < a && 50 >= a && /^[a-zA-G]$/.test(b) ? !0 : 50 < a && 60 >= a && /^[a-zA-M]$/.test(b) ? !0 : 60 < a && 70 >= a && /^[a-zA-T]$/.test(b) ? !0 : 70 < a && 80 >= a && /^[a-zA-Z]$/.test(b) ? !0 : 80 < a && 90 >= a && /^[a-zA-Z0-6]$/.test(b) ? !0 : 90 < a && 100 >= a && /^[a-zA-Z0-9=+/]$/.test(b) ? !0 : !1);
        return a ? !0 : !1
    }
    function m() {
        var c = {
            userInfo: e(),
            pageInfo: b(),
            pageTimingInfo: a()
        };
        try {
            var g = encodeURIComponent(JSON.stringify(c)),
                f = document.createElement("div"),
                h = document.createElement("img");
            f.style.display = "none";
            h.setAttribute("width", "1px");
            h.setAttribute("height", "1px");
            h.style.borderStyle = "none";
            h.src = k.receiverUrl + "?v=" + g;
            h.onload = function() {
                return !1
            };
            f.appendChild(h);
            document.getElementsByTagName("body")[0].appendChild(f)
        } catch (q) {}
    }
    function e() {
        var a = {},
            c = l("b2b_ip_country") || "",
            g;
        g = l("b2b_buyerid") ? !1 : !0;
        a.countryId = c;
        a.isNewBuyer = g;
        return a
    }
    function b() {
        var a = {},
            g = c.pageType || "",
            b = window.location.href,
            k = window.document.referrer,
            e = window.navigator.userAgent,
            f = (new Date).getTime();
        a.pageType = g;
        a.url = b;
        a.referrerUrl = k;
        a.userAgent = e;
        a.localTime = f;
        return a
    }
    function a() {
        var a = {},
            b = g.timing;
        if (b) {
            var a = b.navigationStart,
                k = b.unloadEventStart,
                e = b.unloadEventEnd,
                f = b.redirectStart,
                h = b.redirectEnd,
                m = b.fetchStart,
                l = b.domainLookupStart,
                C = b.domainLookupEnd,
                d = b.connectStart,
                p = b.connectEnd,
                B = b.secureConnectionStart || 0,
                v = b.requestStart,
                y = b.responseStart,
                z = b.responseEnd,
                w = b.domLoading,
                E = b.domInteractive,
                J = b.domContentLoadedEventStart,
                L = b.domContentLoadedEventEnd,
                K = b.domComplete,
                H = b.loadEventStart,
                b = b.loadEventEnd,
                G;
            G = g.timing;
            var I = c.startRender;
            G = G.msFirstPaint && 0 < G.msFirstPaint ? G.msFirstPaint : window && window.chrome && "function" === typeof window.chrome.loadTimes && 0 < window.chrome.loadTimes().firstPaintTime ? Math.ceil(1E3 * window.chrome.loadTimes().firstPaintTime) : 0 < I ? I : 0;
            I = c.firstScreen;
            a = {
                ns: a,
                ules: k,
                ulee: e,
                rs: f,
                re: h,
                fs: m,
                dls: l,
                dle: C,
                cs: d,
                ce: p,
                scs: B,
                resqs: v,
                resps: y,
                respe: z,
                dl: w,
                di: E,
                dcles: J,
                dclee: L,
                domc: K,
                les: H,
                lee: b,
                srt: G,
                fst: 0 < I ? I : 0
            }
        }
        return a
    }
    var c = null,
        g = window.performance || window.webkitPerformance || window.mozPerformance,
        k = {
            rate: 10,
            isSend: !1,
            filterRegular: "googlebot|adsbot|mediapartners|bingbot|yandexbot|java|jakarta|sogou|digext|yahoo|sogou|gomezagent|spider|baidu|unknown",
            receiverUrl: "https://realstats.dhgate.com/dams-feedback/biz-FeedBack-log.do"
        };
    (function() {
        document.addEventListener ? window.addEventListener("load", function() {
                h()
            }, !1) : document.attachEvent && window.attachEvent("onload", function() {
                h()
            })
    })()
})();
"function" === typeof define && define.amd && define("tools/pageTiming", [], function() {});
(function() {
    function l(a, g) {
        function c(a, c) {
            return function() {
                return a.apply(c, arguments)
            }
        }
        var b;
        g = g || {};
        this.trackingClick = !1;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
        this.touchBoundary = g.touchBoundary || 10;
        this.layer = a;
        this.tapDelay = g.tapDelay || 200;
        this.tapTimeout = g.tapTimeout || 700;
        if (!l.notNeeded(a)) {
            for (var e = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), h = 0, m = e.length; h < m; h++) this[e[h]] = c(this[e[h]], this);
            f && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0));
            a.addEventListener("click", this.onClick, !0);
            a.addEventListener("touchstart", this.onTouchStart, !1);
            a.addEventListener("touchmove", this.onTouchMove, !1);
            a.addEventListener("touchend", this.onTouchEnd, !1);
            a.addEventListener("touchcancel", this.onTouchCancel, !1);
            Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(c, g, b) {
                var k = Node.prototype.removeEventListener;
                "click" === c ? k.call(a, c, g.hijacked || g, b) : k.call(a, c, g, b)
            }, a.addEventListener = function(c, g, b) {
                var k = Node.prototype.addEventListener;
                "click" === c ? k.call(a, c, g.hijacked || (g.hijacked = function(a) {
                            a.propagationStopped || g(a)
                        }), b) : k.call(a, c, g, b)
            });
            "function" === typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
                b(a)
            }, !1), a.onclick = null)
        }
    }
    var h = 0 <= navigator.userAgent.indexOf("Windows Phone"),
        f = 0 < navigator.userAgent.indexOf("Android") && !h,
        m = /iP(ad|hone|od)/.test(navigator.userAgent) && !h,
        e = m && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        b = m && /OS [6-7]_\d/.test(navigator.userAgent),
        a = 0 < navigator.userAgent.indexOf("BB10");
    l.prototype.needsClick = function(a) {
        switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled) return !0;
                break;
            case "input":
                if (m && "file" === a.type || a.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    };
    l.prototype.needsFocus = function(a) {
        switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !f;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    };
    l.prototype.sendClick = function(a, g) {
        var c, b;
        document.activeElement && document.activeElement !== a && document.activeElement.blur();
        b = g.changedTouches[0];
        c = document.createEvent("MouseEvents");
        c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
        c.forwardedTouchEvent = !0;
        a.dispatchEvent(c)
    };
    l.prototype.determineEventType = function(a) {
        return f && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    };
    l.prototype.focus = function(a) {
        var c;
        m && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (c = a.value.length, a.setSelectionRange(c, c)) : a.focus()
    };
    l.prototype.updateScrollParent = function(a) {
        var c, b;
        c = a.fastClickScrollParent;
        if (!c || !c.contains(a)) {
            b = a;
            do {
                if (b.scrollHeight > b.offsetHeight) {
                    c = b;
                    a.fastClickScrollParent = b;
                    break
                }
                b = b.parentElement
            } while (b)
        }
        c && (c.fastClickLastScrollTop = c.scrollTop)
    };
    l.prototype.getTargetElementFromEventTarget = function(a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    };
    l.prototype.onTouchStart = function(a) {
        var c, b, n;
        if (1 < a.targetTouches.length) return !0;
        c = this.getTargetElementFromEventTarget(a.target);
        b = a.targetTouches[0];
        if (m) {
            n = window.getSelection();
            if (n.rangeCount && !n.isCollapsed) return !0;
            if (!e) {
                if (b.identifier && b.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = b.identifier;
                this.updateScrollParent(c)
            }
        }
        this.trackingClick = !0;
        this.trackingClickStart = a.timeStamp;
        this.targetElement = c;
        this.touchStartX = b.pageX;
        this.touchStartY = b.pageY;
        a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault();
        return !0
    };
    l.prototype.touchHasMoved = function(a) {
        a = a.changedTouches[0];
        var c = this.touchBoundary;
        return Math.abs(a.pageX - this.touchStartX) > c || Math.abs(a.pageY - this.touchStartY) > c ? !0 : !1
    };
    l.prototype.onTouchMove = function(a) {
        if (!this.trackingClick) return !0;
        if (this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) this.trackingClick = !1, this.targetElement = null;
        return !0
    };
    l.prototype.findControl = function(a) {
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    };
    l.prototype.onTouchEnd = function(a) {
        var c, k, n = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
        if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        this.cancelNextClick = !1;
        this.lastClickTime = a.timeStamp;
        c = this.trackingClickStart;
        this.trackingClick = !1;
        this.trackingClickStart = 0;
        b && (k = a.changedTouches[0], n = document.elementFromPoint(k.pageX - window.pageXOffset, k.pageY - window.pageYOffset) || n, n.fastClickScrollParent = this.targetElement.fastClickScrollParent);
        k = n.tagName.toLowerCase();
        if ("label" === k) {
            if (c = this.findControl(n)) {
                this.focus(n);
                if (f) return !1;
                n = c
            }
        } else if (this.needsFocus(n)) {
            if (100 < a.timeStamp - c || m && window.top !== window && "input" === k) return this.targetElement = null, !1;
            this.focus(n);
            this.sendClick(n, a);
            m && "select" === k || (this.targetElement = null, a.preventDefault());
            return !1
        }
        if (m && !e && (c = n.fastClickScrollParent) && c.fastClickLastScrollTop !== c.scrollTop) return !0;
        this.needsClick(n) || (a.preventDefault(), this.sendClick(n, a));
        return !1
    };
    l.prototype.onTouchCancel = function() {
        this.trackingClick = !1;
        this.targetElement = null
    };
    l.prototype.onMouse = function(a) {
        return this.targetElement && !a.forwardedTouchEvent && a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
    };
    l.prototype.onClick = function(a) {
        if (this.trackingClick) return this.targetElement = null, this.trackingClick = !1, !0;
        if ("submit" === a.target.type && 0 === a.detail) return !0;
        a = this.onMouse(a);
        a || (this.targetElement = null);
        return a
    };
    l.prototype.destroy = function() {
        var a = this.layer;
        f && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0));
        a.removeEventListener("click", this.onClick, !0);
        a.removeEventListener("touchstart", this.onTouchStart, !1);
        a.removeEventListener("touchmove", this.onTouchMove, !1);
        a.removeEventListener("touchend", this.onTouchEnd, !1);
        a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    };
    l.notNeeded = function(c) {
        var g, b;
        if ("undefined" === typeof window.ontouchstart) return !0;
        if (b = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) if (f) {
            if ((g = document.querySelector("meta[name=viewport]")) && (-1 !== g.content.indexOf("user-scalable=no") || 31 < b && document.documentElement.scrollWidth <= window.outerWidth)) return !0
        } else return !0;
        return a && (g = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= g[1] && 3 <= g[2] && (g = document.querySelector("meta[name=viewport]")) && (-1 !== g.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === c.style.msTouchAction || "manipulation" === c.style.touchAction || 27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (g = document.querySelector("meta[name=viewport]")) && (-1 !== g.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth) ? !0 : "none" === c.style.touchAction || "manipulation" === c.style.touchAction ? !0 : !1
    };
    l.attach = function(a, g) {
        return new l(a, g)
    };
    "function" === typeof define && "object" === typeof define.amd && define.amd ? define("tools/fastclick", [], function() {
            return l
        }) : "undefined" !== typeof module && module.exports ? (module.exports = l.attach, module.exports.FastClick = l) : window.FastClick = l
})();
(function(l) {
    "function" === typeof define && define.amd ? define("tools/jquery.cookie", ["lib/jquery"], l) : "object" === typeof exports ? l(require("jquery")) : l(jQuery)
})(function(l) {
    function h(b) {
        b = e.json ? JSON.stringify(b) : String(b);
        return e.raw ? b : encodeURIComponent(b)
    }
    function f(b, a) {
        var c;
        if (e.raw) c = b;
        else a: {
            var g = b;
            0 === g.indexOf('"') && (g = g.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                g = decodeURIComponent(g.replace(m, " "));
                c = e.json ? JSON.parse(g) : g;
                break a
            } catch (k) {}
            c = void 0
        }
        return l.isFunction(a) ? a(c) : c
    }
    var m = /\+/g,
        e = l.cookie = function(b, a, c) {
            if (void 0 !== a && !l.isFunction(a)) {
                c = l.extend({}, e.defaults, c);
                if ("number" === typeof c.expires) {
                    var g = c.expires,
                        k = c.expires = new Date;
                    k.setTime(+k + 864E5 * g)
                }
                return document.cookie = [e.raw ? b : encodeURIComponent(b), "=", h(a), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
            }
            c = b ? void 0 : {};
            for (var g = document.cookie ? document.cookie.split("; ") : [], k = 0, n = g.length; k < n; k++) {
                var m = g[k].split("="),
                    r;
                r = m.shift();
                r = e.raw ? r : decodeURIComponent(r);
                m = m.join("=");
                if (b && b === r) {
                    c = f(m, a);
                    break
                }
                b || void 0 === (m = f(m)) || (c[r] = m)
            }
            return c
        };
    e.defaults = {};
    l.removeCookie = function(b, a) {
        if (void 0 === l.cookie(b)) return !1;
        l.cookie(b, "", l.extend({}, a, {
            expires: -1
        }));
        return !l.cookie(b)
    }
});
(function(l, h) {
    "function" === typeof define && define.amd ? define("tools/deeplink", [], h(l)) : "object" === typeof exports ? module.exports = h(l) : l.deeplink = h(l)
})(window || this, function(l) {
    if (l.document && l.navigator) {
        var h, f = {},
            m = {
                iOS: {},
                android: {},
                androidDisabled: !1,
                fallback: !0,
                delay: 1E3,
                delta: 500
            },
            e = function() {
                return navigator.userAgent.match("Android")
            },
            b = function() {
                return navigator.userAgent.match("iPad") || navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPod")
            },
            a = function() {
                return navigator.userAgent.match(/(Android)\s+([\d.]+)/)[2]
            },
            c = function(a) {
                return function() {
                    var c;
                    if (!(c = f.iOS.storeUrl)) {
                        c = f.iOS.appName;
                        var g = f.iOS.appId;
                        c = g && c ? "itms-apps://itunes.apple.com/app/" + c + "/id" + g + "?mt=8" : null
                    }(g = f.android.storeUrl) || (g = (g = f.android.appId) ? "market://details?id=" + g : null);
                    c = {
                        ios: c,
                        android: g
                    }[f.platform];
                    g = f.delay + f.delta;
                    "string" === typeof c && Date.now() - a < g && (window.location.href = c)
                }
            };
        return {
            setup: function(a) {
                var c = {},
                    g;
                for (g in m) c[g] = m[g];
                for (g in a) c[g] = a[g];
                f = c;
                e() && (f.platform = "android");
                b() && (f.platform = "ios")
            },
            open: function(g) {
                if (!e() && !b()) return !1;
                if (!e() || !f.androidDisabled) {
                    if (!navigator.userAgent.match(/XiaoMi/) && e() && !navigator.userAgent.match(/Firefox/)) {
                        var k = g.match(/([^:]+):\/\/(.+)$/i);
                        g = "intent://" + k[2] + "#Intent;scheme=" + k[1];
                        g += ";package=" + f.android.appId + ";end"
                    }
                    "iPad" == b() && (window.location.href = g);
                    b() && 9 <= parseInt(navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/)[2].replace(/_/g, ".")) && (window.location.href = g);
                    f.fallback && (h = setTimeout(c(Date.now()), f.delay));
                    e() && "6.0.1" === a() && (window.location.href = g);
                    var n = document.createElement("iframe");
                    n.onload = function() {
                        clearTimeout(h);
                        n.parentNode.removeChild(n);
                        b() && (window.location.href = g);
                        if ("4.4.2" === a() || "5.0.1" === a()) window.location.href = g
                    };
                    n.src = g;
                    n.setAttribute("style", "display:none;");
                    document.body.appendChild(n);
                    return !0
                }
            },
            isAndroid: e,
            isIOS: b
        }
    }
});
(function() {
    function l(b) {
        b.fn.swiper = function(a) {
            var c;
            b(this).each(function() {
                var g = new h(this, a);
                c || (c = g)
            });
            return c
        }
    }
    var h = function(b, a) {
        function c() {
            return "horizontal" === d.params.direction
        }
        function g() {
            d.autoplayTimeoutId = setTimeout(function() {
                d.params.loop ? (d.fixLoop(), d._slideNext()) : d.isEnd ? a.autoplayStopOnLast ? d.stopAutoplay() : d._slideTo(0) : d._slideNext()
            }, d.params.autoplay)
        }
        function k(a, d) {
            var c = p(a.target);
            if (!c.is(d)) if ("string" === typeof d) c = c.parents(d);
            else if (d.nodeType) {
                var g;
                c.parents().each(function(a, c) {
                    c === d && (g = d)
                });
                if (g) return d;
                return
            }
            if (0 !== c.length) return c[0]
        }
        function n(a, c) {
            c = c || {};
            var g = new(window.MutationObserver || window.WebkitMutationObserver)(function(a) {
                a.forEach(function(a) {
                    d.onResize(!0);
                    d.emit("onObserverUpdate", d, a)
                })
            });
            g.observe(a, {
                attributes: "undefined" === typeof c.attributes ? !0 : c.attributes,
                childList: "undefined" === typeof c.childList ? !0 : c.childList,
                characterData: "undefined" === typeof c.characterData ? !0 : c.characterData
            });
            d.observers.push(g)
        }
        function e(a) {
            a.originalEvent && (a = a.originalEvent);
            var g = a.keyCode || a.charCode;
            if (!d.params.allowSwipeToNext && (c() && 39 === g || !c() && 40 === g) || !d.params.allowSwipeToPrev && (c() && 37 === g || !c() && 38 === g)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === g || 39 === g || 38 === g || 40 === g) {
                    var b = !1;
                    if (0 < d.container.parents(".swiper-slide").length && 0 === d.container.parents(".swiper-slide-active").length) return;
                    var k = window.pageXOffset,
                        n = window.pageYOffset,
                        e = window.innerWidth,
                        f = window.innerHeight,
                        F = d.container.offset();
                    d.rtl && (F.left -= d.container[0].scrollLeft);
                    for (var F = [
                        [F.left, F.top],
                        [F.left + d.width, F.top],
                        [F.left, F.top + d.height],
                        [F.left + d.width, F.top + d.height]
                    ], h = 0; h < F.length; h++) {
                        var m = F[h];
                        m[0] >= k && m[0] <= k + e && m[1] >= n && m[1] <= n + f && (b = !0)
                    }
                    if (!b) return
                }
                if (c()) {
                    if (37 === g || 39 === g) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    (39 === g && !d.rtl || 37 === g && d.rtl) && d.slideNext();
                    (37 === g && !d.rtl || 39 === g && d.rtl) && d.slidePrev()
                } else {
                    if (38 === g || 40 === g) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    40 === g && d.slideNext();
                    38 === g && d.slidePrev()
                }
            }
        }
        function m(a) {
            a.originalEvent && (a = a.originalEvent);
            var g = d.mousewheel.event,
                b = 0;
            if (a.detail) b = -a.detail;
            else if ("mousewheel" === g) if (d.params.mousewheelForceToAxis) if (c()) if (Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY)) b = a.wheelDeltaX;
            else return;
            else if (Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX)) b = a.wheelDeltaY;
            else return;
            else b = a.wheelDelta;
            else if ("DOMMouseScroll" === g) b = -a.detail;
            else if ("wheel" === g) if (d.params.mousewheelForceToAxis) if (c()) if (Math.abs(a.deltaX) > Math.abs(a.deltaY)) b = -a.deltaX;
            else return;
            else if (Math.abs(a.deltaY) > Math.abs(a.deltaX)) b = -a.deltaY;
            else return;
            else b = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
            d.params.mousewheelInvert && (b = -b);
            if (d.params.freeMode) {
                if (g = d.getWrapperTranslate() + b, 0 < g && (g = 0), g < d.maxTranslate() && (g = d.maxTranslate()), d.setWrapperTransition(0), d.setWrapperTranslate(g), d.updateProgress(), d.updateActiveIndex(), d.params.freeModeSticky && (clearTimeout(d.mousewheel.timeout), d.mousewheel.timeout = setTimeout(function() {
                        d.slideReset()
                    }, 300)), 0 === g || g === d.maxTranslate()) return
            } else {
                if (60 < (new window.Date).getTime() - d.mousewheel.lastScrollTime) if (0 > b) if (!d.isEnd) d.slideNext();
                else {
                    if (d.params.mousewheelReleaseOnEdges) return !0
                } else if (!d.isBeginning) d.slidePrev();
                else if (d.params.mousewheelReleaseOnEdges) return !0;
                d.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            d.params.autoplay && d.stopAutoplay();
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            return !1
        }
        function l(a, d) {
            a = p(a);
            var g, b, k;
            g = a.attr("data-swiper-parallax") || "0";
            b = a.attr("data-swiper-parallax-x");
            k = a.attr("data-swiper-parallax-y");
            b || k ? (b = b || "0", k = k || "0") : c() ? (b = g, k = "0") : (k = g, b = "0");
            b = 0 <= b.indexOf("%") ? parseInt(b, 10) * d + "%" : b * d + "px";
            k = 0 <= k.indexOf("%") ? parseInt(k, 10) * d + "%" : k * d + "px";
            a.transform("translate3d(" + b + ", " + k + ",0px)")
        }
        function q(a) {
            0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a);
            return a
        }
        if (!(this instanceof h)) return new h(b, a);
        var u = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                hashnav: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                pagination: null,
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationHiddenClass: "swiper-pagination-hidden",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                runCallbacksOnInit: !0
            },
            D = a && a.virtualTranslate;
        a = a || {};
        for (var A in u) if ("undefined" === typeof a[A]) a[A] = u[A];
        else if ("object" === typeof a[A]) for (var C in u[A])"undefined" === typeof a[A][C] && (a[A][C] = u[A][C]);
        var d = this;
        d.version = "3.0.8";
        d.params = a;
        d.classNames = [];
        var p;
        if (p = "undefined" === typeof f ? window.Dom7 || window.Zepto || window.jQuery : f) if (d.$ = p, d.container = p(b), 0 !== d.container.length) if (1 < d.container.length) d.container.each(function() {
            new h(this, a)
        });
        else {
            d.container[0].swiper = d;
            d.container.data("swiper", d);
            d.classNames.push("swiper-container-" + d.params.direction);
            d.params.freeMode && d.classNames.push("swiper-container-free-mode");
            d.support.flexbox || (d.classNames.push("swiper-container-no-flexbox"), d.params.slidesPerColumn = 1);
            if (d.params.parallax || d.params.watchSlidesVisibility) d.params.watchSlidesProgress = !0;
            0 <= ["cube", "coverflow"].indexOf(d.params.effect) && (d.support.transforms3d ? (d.params.watchSlidesProgress = !0, d.classNames.push("swiper-container-3d")) : d.params.effect = "slide");
            "slide" !== d.params.effect && d.classNames.push("swiper-container-" + d.params.effect);
            "cube" === d.params.effect && (d.params.resistanceRatio = 0, d.params.slidesPerView = 1, d.params.slidesPerColumn = 1, d.params.slidesPerGroup = 1, d.params.centeredSlides = !1, d.params.spaceBetween = 0, d.params.virtualTranslate = !0, d.params.setWrapperSize = !1);
            "fade" === d.params.effect && (d.params.slidesPerView = 1, d.params.slidesPerColumn = 1, d.params.slidesPerGroup = 1, d.params.watchSlidesProgress = !0, d.params.spaceBetween = 0, "undefined" === typeof D && (d.params.virtualTranslate = !0));
            d.params.grabCursor && d.support.touch && (d.params.grabCursor = !1);
            d.wrapper = d.container.children("." + d.params.wrapperClass);
            d.params.pagination && (d.paginationContainer = p(d.params.pagination), d.params.paginationClickable && d.paginationContainer.addClass("swiper-pagination-clickable"));
            d.rtl = c() && ("rtl" === d.container[0].dir.toLowerCase() || "rtl" === d.container.css("direction"));
            d.rtl && d.classNames.push("swiper-container-rtl");
            d.rtl && (d.wrongRTL = "-webkit-box" === d.wrapper.css("display"));
            1 < d.params.slidesPerColumn && d.classNames.push("swiper-container-multirow");
            d.device.android && d.classNames.push("swiper-container-android");
            d.container.addClass(d.classNames.join(" "));
            d.translate = 0;
            d.progress = 0;
            d.velocity = 0;
            d.lockSwipeToNext = function() {
                d.params.allowSwipeToNext = !1
            };
            d.lockSwipeToPrev = function() {
                d.params.allowSwipeToPrev = !1
            };
            d.lockSwipes = function() {
                d.params.allowSwipeToNext = d.params.allowSwipeToPrev = !1
            };
            d.unlockSwipeToNext = function() {
                d.params.allowSwipeToNext = !0
            };
            d.unlockSwipeToPrev = function() {
                d.params.allowSwipeToPrev = !0
            };
            d.unlockSwipes = function() {
                d.params.allowSwipeToNext = d.params.allowSwipeToPrev = !0
            };
            d.params.grabCursor && (d.container[0].style.cursor = "move", d.container[0].style.cursor = "-webkit-grab", d.container[0].style.cursor = "-moz-grab", d.container[0].style.cursor = "grab");
            d.imagesToLoad = [];
            d.imagesLoaded = 0;
            d.loadImage = function(a, d, c, g) {
                function b() {
                    g && g()
                }
                a.complete && c ? b() : d ? (a = new window.Image, a.onload = b, a.onerror = b, a.src = d) : b()
            };
            d.preloadImages = function() {
                function a() {
                    "undefined" !== typeof d && null !== d && (void 0 !== d.imagesLoaded && d.imagesLoaded++, d.imagesLoaded === d.imagesToLoad.length && (d.params.updateOnImagesReady && d.update(), d.emit("onImagesReady", d)))
                }
                d.imagesToLoad = d.container.find("img");
                for (var c = 0; c < d.imagesToLoad.length; c++) d.loadImage(d.imagesToLoad[c], d.imagesToLoad[c].currentSrc || d.imagesToLoad[c].getAttribute("src"), !0, a)
            };
            d.autoplayTimeoutId = void 0;
            d.autoplaying = !1;
            d.autoplayPaused = !1;
            d.startAutoplay = function() {
                if ("undefined" !== typeof d.autoplayTimeoutId || !d.params.autoplay || d.autoplaying) return !1;
                d.autoplaying = !0;
                d.emit("onAutoplayStart", d);
                g()
            };
            d.stopAutoplay = function(a) {
                d.autoplayTimeoutId && (d.autoplayTimeoutId && clearTimeout(d.autoplayTimeoutId), d.autoplaying = !1, d.autoplayTimeoutId = void 0, d.emit("onAutoplayStop", d))
            };
            d.pauseAutoplay = function(a) {
                d.autoplayPaused || (d.autoplayTimeoutId && clearTimeout(d.autoplayTimeoutId), d.autoplayPaused = !0, 0 === a ? (d.autoplayPaused = !1, g()) : d.wrapper.transitionEnd(function() {
                        d && (d.autoplayPaused = !1, d.autoplaying ? g() : d.stopAutoplay())
                    }))
            };
            d.minTranslate = function() {
                return -d.snapGrid[0]
            };
            d.maxTranslate = function() {
                return -d.snapGrid[d.snapGrid.length - 1]
            };
            d.updateContainerSize = function() {
                var a, g;
                a = "undefined" !== typeof d.params.width ? d.params.width : d.container[0].clientWidth;
                g = "undefined" !== typeof d.params.height ? d.params.height : d.container[0].clientHeight;
                0 === a && c() || 0 === g && !c() || (d.width = a, d.height = g, d.size = c() ? d.width : d.height)
            };
            d.updateSlidesSize = function() {
                d.slides = d.wrapper.children("." + d.params.slideClass);
                d.snapGrid = [];
                d.slidesGrid = [];
                d.slidesSizesGrid = [];
                var a = d.params.spaceBetween,
                    g = 0,
                    b, k = 0,
                    n = 0;
                "string" === typeof a && 0 <= a.indexOf("%") && (a = parseFloat(a.replace("%", "")) / 100 * d.size);
                d.virtualSize = -a;
                d.rtl ? d.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : d.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                var e;
                1 < d.params.slidesPerColumn && (e = Math.floor(d.slides.length / d.params.slidesPerColumn) === d.slides.length / d.params.slidesPerColumn ? d.slides.length : Math.ceil(d.slides.length / d.params.slidesPerColumn) * d.params.slidesPerColumn);
                var f, h = d.params.slidesPerColumn,
                    m = e / h,
                    l = m - (d.params.slidesPerColumn * m - d.slides.length);
                for (b = 0; b < d.slides.length; b++) {
                    f = 0;
                    var q = d.slides.eq(b);
                    if (1 < d.params.slidesPerColumn) {
                        var r, t, u;
                        "column" === d.params.slidesPerColumnFill ? (t = Math.floor(b / h), u = b - t * h, (t > l || t === l && u === h - 1) && ++u >= h && (u = 0, t++), r = t + u * e / h, q.css({
                                "-webkit-box-ordinal-group": r,
                                "-moz-box-ordinal-group": r,
                                "-ms-flex-order": r,
                                "-webkit-order": r,
                                order: r
                            })) : (u = Math.floor(b / m), t = b - u * m);
                        q.css({
                            "margin-top": 0 !== u && d.params.spaceBetween && d.params.spaceBetween + "px"
                        }).attr("data-swiper-column", t).attr("data-swiper-row", u)
                    }
                    "none" !== q.css("display") && ("auto" === d.params.slidesPerView ? f = c() ? q.outerWidth(!0) : q.outerHeight(!0) : (f = (d.size - (d.params.slidesPerView - 1) * a) / d.params.slidesPerView, c() ? d.slides[b].style.width = f + "px" : d.slides[b].style.height = f + "px"), d.slides[b].swiperSlideSize = f, d.slidesSizesGrid.push(f), d.params.centeredSlides ? (g = g + f / 2 + k / 2 + a, 0 === b && (g = g - d.size / 2 - a), .001 > Math.abs(g) && (g = 0), 0 === n % d.params.slidesPerGroup && d.snapGrid.push(g), d.slidesGrid.push(g)) : (0 === n % d.params.slidesPerGroup && d.snapGrid.push(g), d.slidesGrid.push(g), g = g + f + a), d.virtualSize += f + a, k = f, n++)
                }
                d.virtualSize = Math.max(d.virtualSize, d.size);
                d.rtl && d.wrongRTL && ("slide" === d.params.effect || "coverflow" === d.params.effect) && d.wrapper.css({
                    width: d.virtualSize + d.params.spaceBetween + "px"
                });
                if (!d.support.flexbox || d.params.setWrapperSize) c() ? d.wrapper.css({
                        width: d.virtualSize + d.params.spaceBetween + "px"
                    }) : d.wrapper.css({
                        height: d.virtualSize + d.params.spaceBetween + "px"
                    });
                if (1 < d.params.slidesPerColumn && (d.virtualSize = (f + d.params.spaceBetween) * e, d.virtualSize = Math.ceil(d.virtualSize / d.params.slidesPerColumn) - d.params.spaceBetween, d.wrapper.css({
                        width: d.virtualSize + d.params.spaceBetween + "px"
                    }), d.params.centeredSlides)) {
                    g = [];
                    for (b = 0; b < d.snapGrid.length; b++) d.snapGrid[b] < d.virtualSize + d.snapGrid[0] && g.push(d.snapGrid[b]);
                    d.snapGrid = g
                }
                if (!d.params.centeredSlides) {
                    g = [];
                    for (b = 0; b < d.snapGrid.length; b++) d.snapGrid[b] <= d.virtualSize - d.size && g.push(d.snapGrid[b]);
                    d.snapGrid = g;
                    Math.floor(d.virtualSize - d.size) > Math.floor(d.snapGrid[d.snapGrid.length - 1]) && d.snapGrid.push(d.virtualSize - d.size)
                }
                0 === d.snapGrid.length && (d.snapGrid = [0]);
                0 !== d.params.spaceBetween && (c() ? d.rtl ? d.slides.css({
                            marginLeft: a + "px"
                        }) : d.slides.css({
                            marginRight: a + "px"
                        }) : d.slides.css({
                        marginBottom: a + "px"
                    }));
                d.params.watchSlidesProgress && d.updateSlidesOffset()
            };
            d.updateSlidesOffset = function() {
                for (var a = 0; a < d.slides.length; a++) d.slides[a].swiperSlideOffset = c() ? d.slides[a].offsetLeft : d.slides[a].offsetTop
            };
            d.updateSlidesProgress = function(a) {
                "undefined" === typeof a && (a = d.translate || 0);
                if (0 !== d.slides.length) {
                    "undefined" === typeof d.slides[0].swiperSlideOffset && d.updateSlidesOffset();
                    var g = d.params.centeredSlides ? -a + d.size / 2 : -a;
                    d.rtl && (g = d.params.centeredSlides ? a - d.size / 2 : a);
                    d.container[0].getBoundingClientRect();
                    c();
                    c();
                    d.slides.removeClass(d.params.slideVisibleClass);
                    for (a = 0; a < d.slides.length; a++) {
                        var b = d.slides[a],
                            k = !0 === d.params.centeredSlides ? b.swiperSlideSize / 2 : 0,
                            n = (g - b.swiperSlideOffset - k) / (b.swiperSlideSize + d.params.spaceBetween);
                        if (d.params.watchSlidesVisibility) {
                            var k = -(g - b.swiperSlideOffset - k),
                                e = k + d.slidesSizesGrid[a];
                            (0 <= k && k < d.size || 0 < e && e <= d.size || 0 >= k && e >= d.size) && d.slides.eq(a).addClass(d.params.slideVisibleClass)
                        }
                        b.progress = d.rtl ? -n : n
                    }
                }
            };
            d.updateProgress = function(a) {
                "undefined" === typeof a && (a = d.translate || 0);
                var c = d.maxTranslate() - d.minTranslate();
                0 === c ? (d.progress = 0, d.isBeginning = d.isEnd = !0) : (d.progress = (a - d.minTranslate()) / c, d.isBeginning = 0 >= d.progress, d.isEnd = 1 <= d.progress);
                d.isBeginning && d.emit("onReachBeginning", d);
                d.isEnd && d.emit("onReachEnd", d);
                d.params.watchSlidesProgress && d.updateSlidesProgress(a);
                d.emit("onProgress", d, d.progress)
            };
            d.updateActiveIndex = function() {
                var a = d.rtl ? d.translate : -d.translate,
                    c, g;
                for (g = 0; g < d.slidesGrid.length; g++)"undefined" !== typeof d.slidesGrid[g + 1] ? a >= d.slidesGrid[g] && a < d.slidesGrid[g + 1] - (d.slidesGrid[g + 1] - d.slidesGrid[g]) / 2 ? c = g : a >= d.slidesGrid[g] && a < d.slidesGrid[g + 1] && (c = g + 1) : a >= d.slidesGrid[g] && (c = g);
                if (0 > c || "undefined" === typeof c) c = 0;
                a = Math.floor(c / d.params.slidesPerGroup);
                a >= d.snapGrid.length && (a = d.snapGrid.length - 1);
                c !== d.activeIndex && (d.snapIndex = a, d.previousIndex = d.activeIndex, d.activeIndex = c, d.updateClasses())
            };
            d.updateClasses = function() {
                d.slides.removeClass(d.params.slideActiveClass + " " + d.params.slideNextClass + " " + d.params.slidePrevClass);
                var a = d.slides.eq(d.activeIndex);
                a.addClass(d.params.slideActiveClass);
                a.next("." + d.params.slideClass).addClass(d.params.slideNextClass);
                a.prev("." + d.params.slideClass).addClass(d.params.slidePrevClass);
                if (d.bullets && 0 < d.bullets.length) {
                    d.bullets.removeClass(d.params.bulletActiveClass);
                    var c;
                    d.params.loop ? (c = Math.ceil(d.activeIndex - d.loopedSlides) / d.params.slidesPerGroup, c > d.slides.length - 1 - 2 * d.loopedSlides && (c -= d.slides.length - 2 * d.loopedSlides), c > d.bullets.length - 1 && (c -= d.bullets.length)) : c = "undefined" !== typeof d.snapIndex ? d.snapIndex : d.activeIndex || 0;
                    1 < d.paginationContainer.length ? d.bullets.each(function() {
                            p(this).index() === c && p(this).addClass(d.params.bulletActiveClass)
                        }) : d.bullets.eq(c).addClass(d.params.bulletActiveClass)
                }
                d.params.loop || (d.params.prevButton && (d.isBeginning ? (p(d.params.prevButton).addClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.disable(p(d.params.prevButton))) : (p(d.params.prevButton).removeClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.enable(p(d.params.prevButton)))), d.params.nextButton && (d.isEnd ? (p(d.params.nextButton).addClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.disable(p(d.params.nextButton))) : (p(d.params.nextButton).removeClass(d.params.buttonDisabledClass), d.params.a11y && d.a11y && d.a11y.enable(p(d.params.nextButton)))))
            };
            d.updatePagination = function() {
                if (d.params.pagination && d.paginationContainer && 0 < d.paginationContainer.length) {
                    for (var a = "", c = d.params.loop ? Math.ceil((d.slides.length - 2 * d.loopedSlides) / d.params.slidesPerGroup) : d.snapGrid.length, g = 0; g < c; g++) a = d.params.paginationBulletRender ? a + d.params.paginationBulletRender(g, d.params.bulletClass) : a + ('<span class="' + d.params.bulletClass + '"></span>');
                    d.paginationContainer.html(a);
                    d.bullets = d.paginationContainer.find("." + d.params.bulletClass)
                }
            };
            d.update = function(a) {
                function c() {
                    g = Math.min(Math.max(d.translate, d.maxTranslate()), d.minTranslate());
                    d.setWrapperTranslate(g);
                    d.updateActiveIndex();
                    d.updateClasses()
                }
                d.updateContainerSize();
                d.updateSlidesSize();
                d.updateProgress();
                d.updatePagination();
                d.updateClasses();
                d.params.scrollbar && d.scrollbar && d.scrollbar.set();
                if (a) {
                    var g;
                    d.params.freeMode ? c() : (a = "auto" === d.params.slidesPerView && d.isEnd && !d.params.centeredSlides ? d.slideTo(d.slides.length - 1, 0, !1, !0) : d.slideTo(d.activeIndex, 0, !1, !0)) || c()
                }
            };
            d.onResize = function(a) {
                d.updateContainerSize();
                d.updateSlidesSize();
                d.updateProgress();
                ("auto" === d.params.slidesPerView || d.params.freeMode || a) && d.updatePagination();
                d.params.scrollbar && d.scrollbar && d.scrollbar.set();
                d.params.freeMode ? (a = Math.min(Math.max(d.translate, d.maxTranslate()), d.minTranslate()), d.setWrapperTranslate(a), d.updateActiveIndex(), d.updateClasses()) : (d.updateClasses(), "auto" === d.params.slidesPerView && d.isEnd && !d.params.centeredSlides ? d.slideTo(d.slides.length - 1, 0, !1, !0) : d.slideTo(d.activeIndex, 0, !1, !0))
            };
            u = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? u = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]);
            d.touchEvents = {
                start: d.support.touch || !d.params.simulateTouch ? "touchstart" : u[0],
                move: d.support.touch || !d.params.simulateTouch ? "touchmove" : u[1],
                end: d.support.touch || !d.params.simulateTouch ? "touchend" : u[2]
            };
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === d.params.touchEventsTarget ? d.container : d.wrapper).addClass("swiper-wp8-" + d.params.direction);
            d.initEvents = function(c) {
                var g = c ? "off" : "on";
                c = c ? "removeEventListener" : "addEventListener";
                var b = "container" === d.params.touchEventsTarget ? d.container[0] : d.wrapper[0],
                    k = d.support.touch ? b : document,
                    n = d.params.nested ? !0 : !1;
                d.browser.ie ? (b[c](d.touchEvents.start, d.onTouchStart, !1), k[c](d.touchEvents.move, d.onTouchMove, n), k[c](d.touchEvents.end, d.onTouchEnd, !1)) : (d.support.touch && (b[c](d.touchEvents.start, d.onTouchStart, !1), b[c](d.touchEvents.move, d.onTouchMove, n), b[c](d.touchEvents.end, d.onTouchEnd, !1)), !a.simulateTouch || d.device.ios || d.device.android || (b[c]("mousedown", d.onTouchStart, !1), document[c]("mousemove", d.onTouchMove, n), document[c]("mouseup", d.onTouchEnd, !1)));
                window[c]("resize", d.onResize);
                if (d.params.nextButton && (p(d.params.nextButton)[g]("click", d.onClickNext), d.params.a11y && d.a11y)) p(d.params.nextButton)[g]("keydown", d.a11y.onEnterKey);
                if (d.params.prevButton && (p(d.params.prevButton)[g]("click", d.onClickPrev), d.params.a11y && d.a11y)) p(d.params.prevButton)[g]("keydown", d.a11y.onEnterKey);
                if (d.params.pagination && d.params.paginationClickable) p(d.paginationContainer)[g]("click", "." + d.params.bulletClass, d.onClickIndex);
                if (d.params.preventClicks || d.params.preventClicksPropagation) b[c]("click", d.preventClicks, !0)
            };
            d.attachEvents = function(a) {
                d.initEvents()
            };
            d.detachEvents = function() {
                d.initEvents(!0)
            };
            d.allowClick = !0;
            d.preventClicks = function(a) {
                d.allowClick || (d.params.preventClicks && a.preventDefault(), d.params.preventClicksPropagation && d.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            };
            d.onClickNext = function(a) {
                a.preventDefault();
                d.slideNext()
            };
            d.onClickPrev = function(a) {
                a.preventDefault();
                d.slidePrev()
            };
            d.onClickIndex = function(a) {
                a.preventDefault();
                a = p(this).index() * d.params.slidesPerGroup;
                d.params.loop && (a += d.loopedSlides);
                d.slideTo(a)
            };
            d.updateClickedSlide = function(a) {
                a = k(a, "." + d.params.slideClass);
                var c = !1;
                if (a) for (var g = 0; g < d.slides.length; g++) d.slides[g] === a && (c = !0);
                if (a && c) {
                    if (d.clickedSlide = a, d.clickedIndex = p(a).index(), d.params.slideToClickedSlide && void 0 !== d.clickedIndex && d.clickedIndex !== d.activeIndex) {
                        var b = d.clickedIndex;
                        d.params.loop ? (a = p(d.clickedSlide).attr("data-swiper-slide-index"), b > d.slides.length - d.params.slidesPerView ? (d.fixLoop(), b = d.wrapper.children("." + d.params.slideClass + '[data-swiper-slide-index="' + a + '"]').eq(0).index(), setTimeout(function() {
                                    d.slideTo(b)
                                }, 0)) : b < d.params.slidesPerView - 1 ? (d.fixLoop(), a = d.wrapper.children("." + d.params.slideClass + '[data-swiper-slide-index="' + a + '"]'), b = a.eq(a.length - 1).index(), setTimeout(function() {
                                        d.slideTo(b)
                                    }, 0)) : d.slideTo(b)) : d.slideTo(b)
                    }
                } else d.clickedSlide = void 0, d.clickedIndex = void 0
            };
            var B, v, y, z, w, E, J, L = Date.now(),
                K, H = [],
                G;
            d.animating = !1;
            d.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var I, M;
            d.onTouchStart = function(a) {
                a.originalEvent && (a = a.originalEvent);
                if ((I = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) if (d.params.noSwiping && k(a, "." + d.params.noSwipingClass)) d.allowClick = !0;
                else if (!d.params.swipeHandler || k(a, d.params.swipeHandler)) {
                    B = !0;
                    v = !1;
                    M = z = void 0;
                    d.touches.startX = d.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX;
                    d.touches.startY = d.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                    y = Date.now();
                    d.allowClick = !0;
                    d.updateContainerSize();
                    d.swipeDirection = void 0;
                    0 < d.params.threshold && (J = !1);
                    if ("touchstart" !== a.type) {
                        var c = !0;
                        p(a.target).is("input, select, textarea, button") && (c = !1);
                        document.activeElement && p(document.activeElement).is("input, select, textarea, button") && document.activeElement.blur();
                        c && a.preventDefault()
                    }
                    d.emit("onTouchStart", d, a)
                }
            };
            d.onTouchMove = function(g) {
                g.originalEvent && (g = g.originalEvent);
                if (!(I && "mousemove" === g.type || g.preventedByNestedSwiper)) if (d.params.onlyExternal) v = !0, d.allowClick = !1;
                else if (I && document.activeElement && g.target === document.activeElement && p(g.target).is("input, select, textarea, button")) v = !0, d.allowClick = !1;
                else if (d.emit("onTouchMove", d, g), !(g.targetTouches && 1 < g.targetTouches.length)) {
                    d.touches.currentX = "touchmove" === g.type ? g.targetTouches[0].pageX : g.pageX;
                    d.touches.currentY = "touchmove" === g.type ? g.targetTouches[0].pageY : g.pageY;
                    if ("undefined" === typeof z) {
                        var b = 180 * Math.atan2(Math.abs(d.touches.currentY - d.touches.startY), Math.abs(d.touches.currentX - d.touches.startX)) / Math.PI;
                        z = c() ? b > d.params.touchAngle : 90 - b > d.params.touchAngle
                    }
                    z && d.emit("onTouchMoveOpposite", d, g);
                    "undefined" !== typeof M || !d.browser.ieTouch || d.touches.currentX === d.touches.startX && d.touches.currentY === d.touches.startY || (M = !0);
                    if (B) if (z) B = !1;
                    else if (M || !d.browser.ieTouch) {
                        d.allowClick = !1;
                        d.emit("onSliderMove", d, g);
                        g.preventDefault();
                        d.params.touchMoveStopPropagation && !d.params.nested && g.stopPropagation();
                        v || (a.loop && d.fixLoop(), E = d.getWrapperTranslate(), d.setWrapperTransition(0), d.animating && d.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), d.params.autoplay && d.autoplaying && (d.params.autoplayDisableOnInteraction ? d.stopAutoplay() : d.pauseAutoplay()), G = !1, d.params.grabCursor && (d.container[0].style.cursor = "move", d.container[0].style.cursor = "-webkit-grabbing", d.container[0].style.cursor = "-moz-grabbin", d.container[0].style.cursor = "grabbing"));
                        v = !0;
                        b = d.touches.diff = c() ? d.touches.currentX - d.touches.startX : d.touches.currentY - d.touches.startY;
                        b *= d.params.touchRatio;
                        d.rtl && (b = -b);
                        d.swipeDirection = 0 < b ? "prev" : "next";
                        w = b + E;
                        var k = !0;
                        0 < b && w > d.minTranslate() ? (k = !1, d.params.resistance && (w = d.minTranslate() - 1 + Math.pow(-d.minTranslate() + E + b, d.params.resistanceRatio))) : 0 > b && w < d.maxTranslate() && (k = !1, d.params.resistance && (w = d.maxTranslate() + 1 - Math.pow(d.maxTranslate() - E - b, d.params.resistanceRatio)));
                        k && (g.preventedByNestedSwiper = !0);
                        !d.params.allowSwipeToNext && "next" === d.swipeDirection && w < E && (w = E);
                        !d.params.allowSwipeToPrev && "prev" === d.swipeDirection && w > E && (w = E);
                        if (d.params.followFinger) {
                            if (0 < d.params.threshold) if (Math.abs(b) > d.params.threshold || J) {
                                if (!J) {
                                    J = !0;
                                    d.touches.startX = d.touches.currentX;
                                    d.touches.startY = d.touches.currentY;
                                    w = E;
                                    d.touches.diff = c() ? d.touches.currentX - d.touches.startX : d.touches.currentY - d.touches.startY;
                                    return
                                }
                            } else {
                                w = E;
                                return
                            }(d.params.freeMode || d.params.watchSlidesProgress) && d.updateActiveIndex();
                            d.params.freeMode && (0 === H.length && H.push({
                                position: d.touches[c() ? "startX" : "startY"],
                                time: y
                            }), H.push({
                                position: d.touches[c() ? "currentX" : "currentY"],
                                time: (new window.Date).getTime()
                            }));
                            d.updateProgress(w);
                            d.setWrapperTranslate(w)
                        }
                    }
                }
            };
            d.onTouchEnd = function(a) {
                a.originalEvent && (a = a.originalEvent);
                d.emit("onTouchEnd", d, a);
                if (B) {
                    d.params.grabCursor && v && B && (d.container[0].style.cursor = "move", d.container[0].style.cursor = "-webkit-grab", d.container[0].style.cursor = "-moz-grab", d.container[0].style.cursor = "grab");
                    var c = Date.now(),
                        g = c - y;
                    d.allowClick && (d.updateClickedSlide(a), d.emit("onTap", d, a), 300 > g && 300 < c - L && (K && clearTimeout(K), K = setTimeout(function() {
                        d && (d.params.paginationHide && 0 < d.paginationContainer.length && !p(a.target).hasClass(d.params.bulletClass) && d.paginationContainer.toggleClass(d.params.paginationHiddenClass), d.emit("onClick", d, a))
                    }, 300)), 300 > g && 300 > c - L && (K && clearTimeout(K), d.emit("onDoubleTap", d, a)));
                    L = Date.now();
                    setTimeout(function() {
                        d && (d.allowClick = !0)
                    }, 0);
                    if (B && v && d.swipeDirection && 0 !== d.touches.diff && w !== E) if (B = v = !1, c = d.params.followFinger ? d.rtl ? d.translate : -d.translate : -w, d.params.freeMode) if (c < -d.minTranslate()) d.slideTo(d.activeIndex);
                    else if (c > -d.maxTranslate()) d.slides.length < d.snapGrid.length ? d.slideTo(d.snapGrid.length - 1) : d.slideTo(d.slides.length - 1);
                    else {
                        if (d.params.freeModeMomentum) {
                            if (1 < H.length) {
                                var c = H.pop(),
                                    b = H.pop(),
                                    k = c.time - b.time;
                                d.velocity = (c.position - b.position) / k;
                                d.velocity /= 2;.02 > Math.abs(d.velocity) && (d.velocity = 0);
                                if (150 < k || 300 < (new window.Date).getTime() - c.time) d.velocity = 0
                            } else d.velocity = 0;
                            H.length = 0;
                            c = 1E3 * d.params.freeModeMomentumRatio;
                            b = d.translate + d.velocity * c;
                            d.rtl && (b = -b);
                            var k = !1,
                                n, e = 20 * Math.abs(d.velocity) * d.params.freeModeMomentumBounceRatio;
                            if (b < d.maxTranslate()) d.params.freeModeMomentumBounce ? (b + d.maxTranslate() < -e && (b = d.maxTranslate() - e), n = d.maxTranslate(), G = k = !0) : b = d.maxTranslate();
                            else if (b > d.minTranslate()) d.params.freeModeMomentumBounce ? (b - d.minTranslate() > e && (b = d.minTranslate() + e), n = d.minTranslate(), G = k = !0) : b = d.minTranslate();
                            else if (d.params.freeModeSticky) {
                                for (var e = 0, f, e = 0; e < d.snapGrid.length; e += 1) if (d.snapGrid[e] > -b) {
                                    f = e;
                                    break
                                }
                                b = Math.abs(d.snapGrid[f] - b) < Math.abs(d.snapGrid[f - 1] - b) || "next" === d.swipeDirection ? d.snapGrid[f] : d.snapGrid[f - 1];
                                d.rtl || (b = -b)
                            }
                            if (0 !== d.velocity) c = d.rtl ? Math.abs((-b - d.translate) / d.velocity) : Math.abs((b - d.translate) / d.velocity);
                            else if (d.params.freeModeSticky) {
                                d.slideReset();
                                return
                            }
                            d.params.freeModeMomentumBounce && k ? (d.updateProgress(n), d.setWrapperTransition(c), d.setWrapperTranslate(b), d.onTransitionStart(), d.animating = !0, d.wrapper.transitionEnd(function() {
                                    d && G && (d.emit("onMomentumBounce", d), d.setWrapperTransition(d.params.speed), d.setWrapperTranslate(n), d.wrapper.transitionEnd(function() {
                                        if (d) d.onTransitionEnd()
                                    }))
                                })) : d.velocity ? (d.updateProgress(b), d.setWrapperTransition(c), d.setWrapperTranslate(b), d.onTransitionStart(), d.animating || (d.animating = !0, d.wrapper.transitionEnd(function() {
                                        if (d) d.onTransitionEnd()
                                    }))) : d.updateProgress(b);
                            d.updateActiveIndex()
                        }
                        if (!d.params.freeModeMomentum || g >= d.params.longSwipesMs) d.updateProgress(), d.updateActiveIndex()
                    } else {
                        f = 0;
                        k = d.slidesSizesGrid[0];
                        for (b = 0; b < d.slidesGrid.length; b += d.params.slidesPerGroup)"undefined" !== typeof d.slidesGrid[b + d.params.slidesPerGroup] ? c >= d.slidesGrid[b] && c < d.slidesGrid[b + d.params.slidesPerGroup] && (f = b, k = d.slidesGrid[b + d.params.slidesPerGroup] - d.slidesGrid[b]) : c >= d.slidesGrid[b] && (f = b, k = d.slidesGrid[d.slidesGrid.length - 1] - d.slidesGrid[d.slidesGrid.length - 2]);
                        c = (c - d.slidesGrid[f]) / k;
                        g > d.params.longSwipesMs ? d.params.longSwipes ? ("next" === d.swipeDirection && (c >= d.params.longSwipesRatio ? d.slideTo(f + d.params.slidesPerGroup) : d.slideTo(f)), "prev" === d.swipeDirection && (c > 1 - d.params.longSwipesRatio ? d.slideTo(f + d.params.slidesPerGroup) : d.slideTo(f))) : d.slideTo(d.activeIndex) : d.params.shortSwipes ? ("next" === d.swipeDirection && d.slideTo(f + d.params.slidesPerGroup), "prev" === d.swipeDirection && d.slideTo(f)) : d.slideTo(d.activeIndex)
                    } else B = v = !1
                }
            };
            d._slideTo = function(a, c) {
                return d.slideTo(a, c, !0, !0)
            };
            d.slideTo = function(a, g, b, k) {
                "undefined" === typeof b && (b = !0);
                "undefined" === typeof a && (a = 0);
                0 > a && (a = 0);
                d.snapIndex = Math.floor(a / d.params.slidesPerGroup);
                d.snapIndex >= d.snapGrid.length && (d.snapIndex = d.snapGrid.length - 1);
                var e = -d.snapGrid[d.snapIndex];
                if (!d.params.allowSwipeToNext && e < d.translate && e < d.minTranslate() || !d.params.allowSwipeToPrev && e > d.translate && e > d.maxTranslate()) return !1;
                d.params.autoplay && d.autoplaying && (k || !d.params.autoplayDisableOnInteraction ? d.pauseAutoplay(g) : d.stopAutoplay());
                d.updateProgress(e);
                for (k = 0; k < d.slidesGrid.length; k++) - e >= d.slidesGrid[k] && (a = k);
                "undefined" === typeof g && (g = d.params.speed);
                d.previousIndex = d.activeIndex || 0;
                d.activeIndex = a;
                if (e === d.translate) return d.updateClasses(), !1;
                d.updateClasses();
                d.onTransitionStart(b);
                c();
                c();
                0 === g ? (d.setWrapperTransition(0), d.setWrapperTranslate(e), d.onTransitionEnd(b)) : (d.setWrapperTransition(g), d.setWrapperTranslate(e), d.animating || (d.animating = !0, d.wrapper.transitionEnd(function() {
                        if (d) d.onTransitionEnd(b)
                    })));
                return !0
            };
            d.onTransitionStart = function(a) {
                "undefined" === typeof a && (a = !0);
                if (d.lazy) d.lazy.onTransitionStart();
                a && (d.emit("onTransitionStart", d), d.activeIndex !== d.previousIndex && d.emit("onSlideChangeStart", d))
            };
            d.onTransitionEnd = function(a) {
                d.animating = !1;
                d.setWrapperTransition(0);
                "undefined" === typeof a && (a = !0);
                if (d.lazy) d.lazy.onTransitionEnd();
                a && (d.emit("onTransitionEnd", d), d.activeIndex !== d.previousIndex && d.emit("onSlideChangeEnd", d));
                d.params.hashnav && d.hashnav && d.hashnav.setHash()
            };
            d.slideNext = function(a, c, g) {
                if (d.params.loop) {
                    if (d.animating) return !1;
                    d.fixLoop()
                }
                return d.slideTo(d.activeIndex + d.params.slidesPerGroup, c, a, g)
            };
            d._slideNext = function(a) {
                return d.slideNext(!0, a, !0)
            };
            d.slidePrev = function(a, c, g) {
                if (d.params.loop) {
                    if (d.animating) return !1;
                    d.fixLoop()
                }
                return d.slideTo(d.activeIndex - 1, c, a, g)
            };
            d._slidePrev = function(a) {
                return d.slidePrev(!0, a, !0)
            };
            d.slideReset = function(a, c, g) {
                return d.slideTo(d.activeIndex, c, a)
            };
            d.setWrapperTransition = function(a, c) {
                d.wrapper.transition(a);
                "slide" !== d.params.effect && d.effects[d.params.effect] && d.effects[d.params.effect].setTransition(a);
                d.params.parallax && d.parallax && d.parallax.setTransition(a);
                d.params.scrollbar && d.scrollbar && d.scrollbar.setTransition(a);
                d.params.control && d.controller && d.controller.setTransition(a, c);
                d.emit("onSetTransition", d, a)
            };
            d.setWrapperTranslate = function(a, g, b) {
                var k = 0,
                    e = 0;
                c() ? k = d.rtl ? -a : a : e = a;
                d.params.virtualTranslate || (d.support.transforms3d ? d.wrapper.transform("translate3d(" + k + "px, " + e + "px, 0px)") : d.wrapper.transform("translate(" + k + "px, " + e + "px)"));
                d.translate = c() ? k : e;
                g && d.updateActiveIndex();
                "slide" !== d.params.effect && d.effects[d.params.effect] && d.effects[d.params.effect].setTranslate(d.translate);
                d.params.parallax && d.parallax && d.parallax.setTranslate(d.translate);
                d.params.scrollbar && d.scrollbar && d.scrollbar.setTranslate(d.translate);
                d.params.control && d.controller && d.controller.setTranslate(d.translate, b);
                d.emit("onSetTranslate", d, d.translate)
            };
            d.getTranslate = function(a, c) {
                var g, b, k;
                "undefined" === typeof c && (c = "x");
                if (d.params.virtualTranslate) return d.rtl ? -d.translate : d.translate;
                k = window.getComputedStyle(a, null);
                window.WebKitCSSMatrix ? k = new window.WebKitCSSMatrix("none" === k.webkitTransform ? "" : k.webkitTransform) : (k = k.MozTransform || k.OTransform || k.MsTransform || k.msTransform || k.transform || k.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), g = k.toString().split(","));
                "x" === c && (b = window.WebKitCSSMatrix ? k.m41 : 16 === g.length ? parseFloat(g[12]) : parseFloat(g[4]));
                "y" === c && (b = window.WebKitCSSMatrix ? k.m42 : 16 === g.length ? parseFloat(g[13]) : parseFloat(g[5]));
                d.rtl && b && (b = -b);
                return b || 0
            };
            d.getWrapperTranslate = function(a) {
                "undefined" === typeof a && (a = c() ? "x" : "y");
                return d.getTranslate(d.wrapper[0], a)
            };
            d.observers = [];
            d.initObservers = function() {
                if (d.params.observeParents) for (var a = d.container.parents(), c = 0; c < a.length; c++) n(a[c]);
                n(d.container[0], {
                    childList: !1
                });
                n(d.wrapper[0], {
                    attributes: !1
                })
            };
            d.disconnectObservers = function() {
                for (var a = 0; a < d.observers.length; a++) d.observers[a].disconnect();
                d.observers = []
            };
            d.createLoop = function() {
                d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass).remove();
                var a = d.wrapper.children("." + d.params.slideClass);
                d.loopedSlides = parseInt(d.params.loopedSlides || d.params.slidesPerView, 10);
                d.loopedSlides += d.params.loopAdditionalSlides;
                d.loopedSlides > a.length && (d.loopedSlides = a.length);
                var c = [],
                    g = [],
                    b;
                a.each(function(b, k) {
                    var e = p(this);
                    b < d.loopedSlides && g.push(k);
                    b < a.length && b >= a.length - d.loopedSlides && c.push(k);
                    e.attr("data-swiper-slide-index", b)
                });
                for (b = 0; b < g.length; b++) d.wrapper.append(p(g[b].cloneNode(!0)).addClass(d.params.slideDuplicateClass));
                for (b = c.length - 1; 0 <= b; b--) d.wrapper.prepend(p(c[b].cloneNode(!0)).addClass(d.params.slideDuplicateClass))
            };
            d.destroyLoop = function() {
                d.wrapper.children("." + d.params.slideClass + "." + d.params.slideDuplicateClass).remove();
                d.slides.removeAttr("data-swiper-slide-index")
            };
            d.fixLoop = function() {
                var a;
                if (d.activeIndex < d.loopedSlides) a = d.slides.length - 3 * d.loopedSlides + d.activeIndex, a += d.loopedSlides, d.slideTo(a, 0, !1, !0);
                else if ("auto" === d.params.slidesPerView && d.activeIndex >= 2 * d.loopedSlides || d.activeIndex > d.slides.length - 2 * d.params.slidesPerView) a = -d.slides.length + d.activeIndex + d.loopedSlides, a += d.loopedSlides, d.slideTo(a, 0, !1, !0)
            };
            d.appendSlide = function(a) {
                d.params.loop && d.destroyLoop();
                if ("object" === typeof a && a.length) for (var c = 0; c < a.length; c++) a[c] && d.wrapper.append(a[c]);
                else d.wrapper.append(a);
                d.params.loop && d.createLoop();
                d.params.observer && d.support.observer || d.update(!0)
            };
            d.prependSlide = function(a) {
                d.params.loop && d.destroyLoop();
                var c = d.activeIndex + 1;
                if ("object" === typeof a && a.length) {
                    for (c = 0; c < a.length; c++) a[c] && d.wrapper.prepend(a[c]);
                    c = d.activeIndex + a.length
                } else d.wrapper.prepend(a);
                d.params.loop && d.createLoop();
                d.params.observer && d.support.observer || d.update(!0);
                d.slideTo(c, 0, !1)
            };
            d.removeSlide = function(a) {
                d.params.loop && (d.destroyLoop(), d.slides = d.wrapper.children("." + d.params.slideClass));
                var c = d.activeIndex,
                    g;
                if ("object" === typeof a && a.length) for (var b = 0; b < a.length; b++) g = a[b], d.slides[g] && d.slides.eq(g).remove(), g < c && c--;
                else g = a, d.slides[g] && d.slides.eq(g).remove(), g < c && c--;
                c = Math.max(c, 0);
                d.params.loop && d.createLoop();
                d.params.observer && d.support.observer || d.update(!0);
                d.params.loop ? d.slideTo(c + d.loopedSlides, 0, !1) : d.slideTo(c, 0, !1)
            };
            d.removeAllSlides = function() {
                for (var a = [], c = 0; c < d.slides.length; c++) a.push(c);
                d.removeSlide(a)
            };
            d.effects = {
                fade: {
                    setTranslate: function() {
                        for (var a = 0; a < d.slides.length; a++) {
                            var g = d.slides.eq(a),
                                b = -g[0].swiperSlideOffset;
                            d.params.virtualTranslate || (b -= d.translate);
                            var k = 0;
                            c() || (k = b, b = 0);
                            g.css({
                                opacity: d.params.fade.crossFade ? Math.max(1 - Math.abs(g[0].progress), 0) : 1 + Math.min(Math.max(g[0].progress, -1), 0)
                            }).transform("translate3d(" + b + "px, " + k + "px, 0px)")
                        }
                    },
                    setTransition: function(a) {
                        d.slides.transition(a);
                        if (d.params.virtualTranslate && 0 !== a) {
                            var c = !1;
                            d.slides.transitionEnd(function() {
                                if (!c && d) {
                                    c = !0;
                                    d.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], g = 0; g < a.length; g++) d.wrapper.trigger(a[g])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var a = 0,
                            g;
                        d.params.cube.shadow && (c() ? (g = d.wrapper.find(".swiper-cube-shadow"), 0 === g.length && (g = p('<div class="swiper-cube-shadow"></div>'), d.wrapper.append(g)), g.css({
                                height: d.width + "px"
                            })) : (g = d.container.find(".swiper-cube-shadow"), 0 === g.length && (g = p('<div class="swiper-cube-shadow"></div>'), d.container.append(g))));
                        for (var b = 0; b < d.slides.length; b++) {
                            var k = d.slides.eq(b),
                                e = 90 * b,
                                n = Math.floor(e / 360);
                            d.rtl && (e = -e, n = Math.floor(-e / 360));
                            var f = Math.max(Math.min(k[0].progress, 1), -1),
                                h = 0,
                                m = 0,
                                l = 0;
                            0 === b % 4 ? (h = 4 * -n * d.size, l = 0) : 0 === (b - 1) % 4 ? (h = 0, l = 4 * -n * d.size) : 0 === (b - 2) % 4 ? (h = d.size + 4 * n * d.size, l = d.size) : 0 === (b - 3) % 4 && (h = -d.size, l = 3 * d.size + 4 * d.size * n);
                            d.rtl && (h = -h);
                            c() || (m = h, h = 0);
                            e = "rotateX(" + (c() ? 0 : -e) + "deg) rotateY(" + (c() ? e : 0) + "deg) translate3d(" + h + "px, " + m + "px, " + l + "px)";
                            1 >= f && -1 < f && (a = 90 * b + 90 * f, d.rtl && (a = 90 * -b - 90 * f));
                            k.transform(e);
                            d.params.cube.slideShadows && (f = c() ? k.find(".swiper-slide-shadow-left") : k.find(".swiper-slide-shadow-top"), e = c() ? k.find(".swiper-slide-shadow-right") : k.find(".swiper-slide-shadow-bottom"), 0 === f.length && (f = p('<div class="swiper-slide-shadow-' + (c() ? "left" : "top") + '"></div>'), k.append(f)), 0 === e.length && (e = p('<div class="swiper-slide-shadow-' + (c() ? "right" : "bottom") + '"></div>'), k.append(e)), f.length && (f[0].style.opacity = -k[0].progress), e.length && (e[0].style.opacity = k[0].progress))
                        }
                        d.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + d.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + d.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + d.size / 2 + "px",
                            "transform-origin": "50% 50% -" + d.size / 2 + "px"
                        });
                        d.params.cube.shadow && (c() ? g.transform("translate3d(0px, " + (d.width / 2 + d.params.cube.shadowOffset) + "px, " + -d.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.params.cube.shadowScale + ")") : (b = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90), b = d.params.cube.shadowScale / (1.5 - (Math.sin(2 * b * Math.PI / 360) / 2 + Math.cos(2 * b * Math.PI / 360) / 2)), g.transform("scale3d(" + d.params.cube.shadowScale + ", 1, " + b + ") translate3d(0px, " + (d.height / 2 + d.params.cube.shadowOffset) + "px, " + -d.height / 2 / b + "px) rotateX(-90deg)")));
                        d.wrapper.transform("translate3d(0px,0," + (d.isSafari || d.isUiWebView ? -d.size / 2 : 0) + "px) rotateX(" + (c() ? 0 : a) + "deg) rotateY(" + (c() ? -a : 0) + "deg)")
                    },
                    setTransition: function(a) {
                        d.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a);
                        d.params.cube.shadow && !c() && d.container.find(".swiper-cube-shadow").transition(a)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var a = d.translate, a = c() ? -a + d.width / 2 : -a + d.height / 2, g = c() ? d.params.coverflow.rotate : -d.params.coverflow.rotate, b = d.params.coverflow.depth, k = 0, e = d.slides.length; k < e; k++) {
                            var n = d.slides.eq(k),
                                f = d.slidesSizesGrid[k],
                                f = (a - n[0].swiperSlideOffset - f / 2) / f * d.params.coverflow.modifier,
                                h = c() ? g * f : 0,
                                m = c() ? 0 : g * f,
                                l = -b * Math.abs(f),
                                q = c() ? 0 : d.params.coverflow.stretch * f,
                                r = c() ? d.params.coverflow.stretch * f : 0;.001 > Math.abs(r) && (r = 0);.001 > Math.abs(q) && (q = 0);.001 > Math.abs(l) && (l = 0);.001 > Math.abs(h) && (h = 0);.001 > Math.abs(m) && (m = 0);
                            n.transform("translate3d(" + r + "px," + q + "px," + l + "px)  rotateX(" + m + "deg) rotateY(" + h + "deg)");
                            n[0].style.zIndex = -Math.abs(Math.round(f)) + 1;
                            d.params.coverflow.slideShadows && (h = c() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), m = c() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"), 0 === h.length && (h = p('<div class="swiper-slide-shadow-' + (c() ? "left" : "top") + '"></div>'), n.append(h)), 0 === m.length && (m = p('<div class="swiper-slide-shadow-' + (c() ? "right" : "bottom") + '"></div>'), n.append(m)), h.length && (h[0].style.opacity = 0 < f ? f : 0), m.length && (m[0].style.opacity = 0 < -f ? -f : 0))
                        }
                        d.browser.ie && (d.wrapper[0].style.perspectiveOrigin = a + "px 50%")
                    },
                    setTransition: function(a) {
                        d.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
                    }
                }
            };
            d.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(a, c) {
                    if ("undefined" !== typeof a && ("undefined" === typeof c && (c = !0), 0 !== d.slides.length)) {
                        var g = d.slides.eq(a),
                            b = g.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                        !g.hasClass("swiper-lazy") || g.hasClass("swiper-lazy-loaded") || g.hasClass("swiper-lazy-loading") || b.add(g[0]);
                        0 !== b.length && b.each(function() {
                            var a = p(this);
                            a.addClass("swiper-lazy-loading");
                            var b = a.attr("data-background"),
                                k = a.attr("data-src");
                            d.loadImage(a[0], k || b, !1, function() {
                                b ? (a.css("background-image", "url(" + b + ")"), a.removeAttr("data-background")) : (a.attr("src", k), a.removeAttr("data-src"));
                                a.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading");
                                g.find(".swiper-lazy-preloader, .preloader").remove();
                                if (d.params.loop && c) {
                                    var e = g.attr("data-swiper-slide-index"),
                                        e = g.hasClass(d.params.slideDuplicateClass) ? d.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")") : d.wrapper.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadImageInSlide(e.index(), !1)
                                }
                                d.emit("onLazyImageReady", d, g[0], a[0])
                            });
                            d.emit("onLazyImageLoad", d, g[0], a[0])
                        })
                    }
                },
                load: function() {
                    var a;
                    if (d.params.watchSlidesVisibility) d.wrapper.children("." + d.params.slideVisibleClass).each(function() {
                        d.lazy.loadImageInSlide(p(this).index())
                    });
                    else if (1 < d.params.slidesPerView) for (a = d.activeIndex; a < d.activeIndex + d.params.slidesPerView; a++) d.slides[a] && d.lazy.loadImageInSlide(a);
                    else d.lazy.loadImageInSlide(d.activeIndex);
                    if (d.params.lazyLoadingInPrevNext) if (1 < d.params.slidesPerView) {
                        for (a = d.activeIndex + d.params.slidesPerView; a < d.activeIndex + d.params.slidesPerView + d.params.slidesPerView; a++) d.slides[a] && d.lazy.loadImageInSlide(a);
                        for (a = d.activeIndex - d.params.slidesPerView; a < d.activeIndex; a++) d.slides[a] && d.lazy.loadImageInSlide(a)
                    } else a = d.wrapper.children("." + d.params.slideNextClass), 0 < a.length && d.lazy.loadImageInSlide(a.index()), a = d.wrapper.children("." + d.params.slidePrevClass), 0 < a.length && d.lazy.loadImageInSlide(a.index())
                },
                onTransitionStart: function() {
                    d.params.lazyLoading && (d.params.lazyLoadingOnTransitionStart || !d.params.lazyLoadingOnTransitionStart && !d.lazy.initialImageLoaded) && d.lazy.load()
                },
                onTransitionEnd: function() {
                    d.params.lazyLoading && !d.params.lazyLoadingOnTransitionStart && d.lazy.load()
                }
            };
            d.scrollbar = {
                set: function() {
                    if (d.params.scrollbar) {
                        var a = d.scrollbar;
                        a.track = p(d.params.scrollbar);
                        a.drag = a.track.find(".swiper-scrollbar-drag");
                        0 === a.drag.length && (a.drag = p('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag));
                        a.drag[0].style.width = "";
                        a.drag[0].style.height = "";
                        a.trackSize = c() ? a.track[0].offsetWidth : a.track[0].offsetHeight;
                        a.divider = d.size / d.virtualSize;
                        a.moveDivider = a.trackSize / d.size * a.divider;
                        a.dragSize = a.trackSize * a.divider;
                        c() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px";
                        a.track[0].style.display = 1 <= a.divider ? "none" : "";
                        d.params.scrollbarHide && (a.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (d.params.scrollbar) {
                        var a = d.scrollbar,
                            g, b = a.dragSize;
                        g = (a.trackSize - a.dragSize) * d.progress;
                        d.rtl && c() ? (g = -g, 0 < g ? (b = a.dragSize - g, g = 0) : -g + a.dragSize > a.trackSize && (b = a.trackSize + g)) : 0 > g ? (b = a.dragSize + g, g = 0) : g + a.dragSize > a.trackSize && (b = a.trackSize - g);
                        c() ? (d.support.transforms3d ? a.drag.transform("translate3d(" + g + "px, 0, 0)") : a.drag.transform("translateX(" + g + "px)"), a.drag[0].style.width = b + "px") : (d.support.transforms3d ? a.drag.transform("translate3d(0px, " + g + "px, 0)") : a.drag.transform("translateY(" + g + "px)"), a.drag[0].style.height = b + "px");
                        d.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0;
                            a.track.transition(400)
                        }, 1E3))
                    }
                },
                setTransition: function(a) {
                    d.params.scrollbar && d.scrollbar.drag.transition(a)
                }
            };
            d.controller = {
                setTranslate: function(a, c) {
                    function g(c) {
                        a = c.rtl && "horizontal" === c.params.direction ? -d.translate : d.translate;
                        k = (c.maxTranslate() - c.minTranslate()) / (d.maxTranslate() - d.minTranslate());
                        e = (a - d.minTranslate()) * k + c.minTranslate();
                        d.params.controlInverse && (e = c.maxTranslate() - e);
                        c.updateProgress(e);
                        c.setWrapperTranslate(e, !1, d);
                        c.updateActiveIndex()
                    }
                    var b = d.params.control,
                        k, e;
                    if (d.isArray(b)) for (var n = 0; n < b.length; n++) b[n] !== c && b[n] instanceof h && g(b[n]);
                    else b instanceof h && c !== b && g(b)
                },
                setTransition: function(a, c) {
                    function g(c) {
                        c.setWrapperTransition(a, d);
                        0 !== a && (c.onTransitionStart(), c.wrapper.transitionEnd(function() {
                            if (b) c.onTransitionEnd()
                        }))
                    }
                    var b = d.params.control,
                        k;
                    if (d.isArray(b)) for (k = 0; k < b.length; k++) b[k] !== c && b[k] instanceof h && g(b[k]);
                    else b instanceof h && c !== b && g(b)
                }
            };
            d.hashnav = {
                init: function() {
                    if (d.params.hashnav) {
                        d.hashnav.initialized = !0;
                        var a = document.location.hash.replace("#", "");
                        if (a) for (var c = 0, g = d.slides.length; c < g; c++) {
                            var b = d.slides.eq(c);
                            b.attr("data-hash") !== a || b.hasClass(d.params.slideDuplicateClass) || (b = b.index(), d.slideTo(b, 0, d.params.runCallbacksOnInit, !0))
                        }
                    }
                },
                setHash: function() {
                    d.hashnav.initialized && d.params.hashnav && (document.location.hash = d.slides.eq(d.activeIndex).attr("data-hash") || "")
                }
            };
            d.disableKeyboardControl = function() {
                p(document).off("keydown", e)
            };
            d.enableKeyboardControl = function() {
                p(document).on("keydown", e)
            };
            d.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            };
            if (d.params.mousewheelControl) {
                void 0 !== document.onmousewheel && (d.mousewheel.event = "mousewheel");
                if (!d.mousewheel.event) try {
                    new window.WheelEvent("wheel"), d.mousewheel.event = "wheel"
                } catch (F) {}
                d.mousewheel.event || (d.mousewheel.event = "DOMMouseScroll")
            }
            d.disableMousewheelControl = function() {
                if (!d.mousewheel.event) return !1;
                d.container.off(d.mousewheel.event, m);
                return !0
            };
            d.enableMousewheelControl = function() {
                if (!d.mousewheel.event) return !1;
                d.container.on(d.mousewheel.event, m);
                return !0
            };
            d.parallax = {
                setTranslate: function() {
                    d.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        l(this, d.progress)
                    });
                    d.slides.each(function() {
                        var a = p(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            l(this, Math.min(Math.max(a[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(a) {
                    "undefined" === typeof a && (a = d.params.speed);
                    d.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var d = p(this),
                            c = parseInt(d.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (c = 0);
                        d.transition(c)
                    })
                }
            };
            d._plugins = [];
            for (var O in d.plugins)(u = d.plugins[O](d, d.params[O])) && d._plugins.push(u);
            d.callPlugins = function(a, c, g, b, k, e) {
                for (var n = 0; n < d._plugins.length; n++) if (a in d._plugins[n]) d._plugins[n][a](c, g, b, k, e)
            };
            d.emitterEventListeners = {};
            d.emit = function(a, c, g, b, k, e) {
                if (d.params[a]) d.params[a](c, g, b, k, e);
                var n;
                if (d.emitterEventListeners[a]) for (n = 0; n < d.emitterEventListeners[a].length; n++) d.emitterEventListeners[a][n](c, g, b, k, e);
                d.callPlugins && d.callPlugins(a, c, g, b, k, e)
            };
            d.on = function(a, c) {
                a = q(a);
                d.emitterEventListeners[a] || (d.emitterEventListeners[a] = []);
                d.emitterEventListeners[a].push(c);
                return d
            };
            d.off = function(a, c) {
                var g;
                a = q(a);
                if ("undefined" === typeof c) return d.emitterEventListeners[a] = [], d;
                if (d.emitterEventListeners[a] && 0 !== d.emitterEventListeners[a].length) {
                    for (g = 0; g < d.emitterEventListeners[a].length; g++) d.emitterEventListeners[a][g] === c && d.emitterEventListeners[a].splice(g, 1);
                    return d
                }
            };
            d.once = function(a, c) {
                a = q(a);
                var g = function(b, k, e, n, f) {
                    c(b, k, e, n, f);
                    d.off(a, g)
                };
                d.on(a, g);
                return d
            };
            d.a11y = {
                makeFocusable: function(a) {
                    a[0].tabIndex = "0";
                    return a
                },
                addRole: function(a, d) {
                    a.attr("role", d);
                    return a
                },
                addLabel: function(a, d) {
                    a.attr("aria-label", d);
                    return a
                },
                disable: function(a) {
                    a.attr("aria-disabled", !0);
                    return a
                },
                enable: function(a) {
                    a.attr("aria-disabled", !1);
                    return a
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (p(a.target).is(d.params.nextButton) ? (d.onClickNext(a), d.isEnd ? d.a11y.notify(d.params.lastSlideMsg) : d.a11y.notify(d.params.nextSlideMsg)) : p(a.target).is(d.params.prevButton) && (d.onClickPrev(a), d.isBeginning ? d.a11y.notify(d.params.firstSlideMsg) : d.a11y.notify(d.params.prevSlideMsg)))
                },
                liveRegion: p('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(a) {
                    var c = d.a11y.liveRegion;
                    0 !== c.length && (c.html(""), c.html(a))
                },
                init: function() {
                    if (d.params.nextButton) {
                        var a = p(d.params.nextButton);
                        d.a11y.makeFocusable(a);
                        d.a11y.addRole(a, "button");
                        d.a11y.addLabel(a, d.params.nextSlideMsg)
                    }
                    d.params.prevButton && (a = p(d.params.prevButton), d.a11y.makeFocusable(a), d.a11y.addRole(a, "button"), d.a11y.addLabel(a, d.params.prevSlideMsg));
                    p(d.container).append(d.a11y.liveRegion)
                },
                destroy: function() {
                    d.a11y.liveRegion && 0 < d.a11y.liveRegion.length && d.a11y.liveRegion.remove()
                }
            };
            d.init = function() {
                d.params.loop && d.createLoop();
                d.updateContainerSize();
                d.updateSlidesSize();
                d.updatePagination();
                d.params.scrollbar && d.scrollbar && d.scrollbar.set();
                "slide" !== d.params.effect && d.effects[d.params.effect] && (d.params.loop || d.updateProgress(), d.effects[d.params.effect].setTranslate());
                d.params.loop ? d.slideTo(d.params.initialSlide + d.loopedSlides, 0, d.params.runCallbacksOnInit) : (d.slideTo(d.params.initialSlide, 0, d.params.runCallbacksOnInit), 0 === d.params.initialSlide && (d.parallax && d.params.parallax && d.parallax.setTranslate(), d.lazy && d.params.lazyLoading && (d.lazy.load(), d.lazy.initialImageLoaded = !0)));
                d.attachEvents();
                d.params.observer && d.support.observer && d.initObservers();
                d.params.preloadImages && !d.params.lazyLoading && d.preloadImages();
                d.params.autoplay && d.startAutoplay();
                d.params.keyboardControl && d.enableKeyboardControl && d.enableKeyboardControl();
                d.params.mousewheelControl && d.enableMousewheelControl && d.enableMousewheelControl();
                d.params.hashnav && d.hashnav && d.hashnav.init();
                d.params.a11y && d.a11y && d.a11y.init();
                d.emit("onInit", d)
            };
            d.cleanupStyles = function() {
                d.container.removeClass(d.classNames.join(" ")).removeAttr("style");
                d.wrapper.removeAttr("style");
                d.slides && d.slides.length && d.slides.removeClass([d.params.slideVisibleClass, d.params.slideActiveClass, d.params.slideNextClass, d.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
                d.paginationContainer && d.paginationContainer.length && d.paginationContainer.removeClass(d.params.paginationHiddenClass);
                d.bullets && d.bullets.length && d.bullets.removeClass(d.params.bulletActiveClass);
                d.params.prevButton && p(d.params.prevButton).removeClass(d.params.buttonDisabledClass);
                d.params.nextButton && p(d.params.nextButton).removeClass(d.params.buttonDisabledClass);
                d.params.scrollbar && d.scrollbar && (d.scrollbar.track && d.scrollbar.track.length && d.scrollbar.track.removeAttr("style"), d.scrollbar.drag && d.scrollbar.drag.length && d.scrollbar.drag.removeAttr("style"))
            };
            d.destroy = function(a, c) {
                d.detachEvents();
                d.stopAutoplay();
                d.params.loop && d.destroyLoop();
                c && d.cleanupStyles();
                d.disconnectObservers();
                d.params.keyboardControl && d.disableKeyboardControl && d.disableKeyboardControl();
                d.params.mousewheelControl && d.disableMousewheelControl && d.disableMousewheelControl();
                d.params.a11y && d.a11y && d.a11y.destroy();
                d.emit("onDestroy");
                !1 !== a && (d = null)
            };
            d.init();
            return d
        }
    };
    h.prototype = {
        isSafari: function() {
            var b = navigator.userAgent.toLowerCase();
            return 0 <= b.indexOf("safari") && 0 > b.indexOf("chrome") && 0 > b.indexOf("android")
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(b) {
            return "[object Array]" === Object.prototype.toString.apply(b)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints
        },
        device: function() {
            var b = navigator.userAgent,
                a = b.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = b.match(/(iPad).*OS\s([\d_]+)/);
            b.match(/(iPod)(.*OS\s([\d_]+))?/);
            b = !c && b.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: c || b || c,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d ||
            function() {
                var b = document.createElement("div").style;
                return "webkitPerspective" in b || "MozPerspective" in b || "OPerspective" in b || "MsPerspective" in b || "perspective" in b
            }(),
            flexbox: function() {
                for (var b = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < a.length; c++) if (a[c] in b) return !0
            }(),
            observer: "MutationObserver" in window || "WebkitMutationObserver" in window
        },
        plugins: {}
    };
    var f = function() {
            var b = function(a) {
                    var c;
                    for (c = 0; c < a.length; c++) this[c] = a[c];
                    this.length = a.length;
                    return this
                },
                a = function(a, g) {
                    var c = [],
                        e;
                    if (a && !g && a instanceof b) return a;
                    if (a) if ("string" === typeof a) {
                        var f;
                        e = a.trim();
                        if (0 <= e.indexOf("<") && 0 <= e.indexOf(">")) {
                            f = "div";
                            0 === e.indexOf("<li") && (f = "ul");
                            0 === e.indexOf("<tr") && (f = "tbody");
                            if (0 === e.indexOf("<td") || 0 === e.indexOf("<th")) f = "tr";
                            0 === e.indexOf("<tbody") && (f = "table");
                            0 === e.indexOf("<option") && (f = "select");
                            f = document.createElement(f);
                            f.innerHTML = a;
                            for (e = 0; e < f.childNodes.length; e++) c.push(f.childNodes[e])
                        } else for (f = g || "#" !== a[0] || a.match(/[ .<>:~]/) ? (g || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], e = 0; e < f.length; e++) f[e] && c.push(f[e])
                    } else if (a.nodeType || a === window || a === document) c.push(a);
                    else if (0 < a.length && a[0].nodeType) for (e = 0; e < a.length; e++) c.push(a[e]);
                    return new b(c)
                };
            b.prototype = {
                addClass: function(a) {
                    if ("undefined" === typeof a) return this;
                    a = a.split(" ");
                    for (var c = 0; c < a.length; c++) for (var b = 0; b < this.length; b++) this[b].classList.add(a[c]);
                    return this
                },
                removeClass: function(a) {
                    a = a.split(" ");
                    for (var c = 0; c < a.length; c++) for (var b = 0; b < this.length; b++) this[b].classList.remove(a[c]);
                    return this
                },
                hasClass: function(a) {
                    return this[0] ? this[0].classList.contains(a) : !1
                },
                toggleClass: function(a) {
                    a = a.split(" ");
                    for (var c = 0; c < a.length; c++) for (var b = 0; b < this.length; b++) this[b].classList.toggle(a[c]);
                    return this
                },
                attr: function(a, g) {
                    if (1 === arguments.length && "string" === typeof a) {
                        if (this[0]) return this[0].getAttribute(a)
                    } else {
                        for (var c = 0; c < this.length; c++) if (2 === arguments.length) this[c].setAttribute(a, g);
                        else for (var b in a) this[c][b] = a[b], this[c].setAttribute(b, a[b]);
                        return this
                    }
                },
                removeAttr: function(a) {
                    for (var c = 0; c < this.length; c++) this[c].removeAttribute(a);
                    return this
                },
                data: function(a, g) {
                    if ("undefined" === typeof g) {
                        if (this[0]) {
                            var c = this[0].getAttribute("data-" + a);
                            if (c) return c;
                            if (this[0].dom7ElementDataStorage && a in this[0].dom7ElementDataStorage) return this[0].dom7ElementDataStorage[a]
                        }
                    } else {
                        for (c = 0; c < this.length; c++) {
                            var b = this[c];
                            b.dom7ElementDataStorage || (b.dom7ElementDataStorage = {});
                            b.dom7ElementDataStorage[a] = g
                        }
                        return this
                    }
                },
                transform: function(a) {
                    for (var c = 0; c < this.length; c++) {
                        var b = this[c].style;
                        b.webkitTransform = b.MsTransform = b.msTransform = b.MozTransform = b.OTransform = b.transform = a
                    }
                    return this
                },
                transition: function(a) {
                    "string" !== typeof a && (a += "ms");
                    for (var c = 0; c < this.length; c++) {
                        var b = this[c].style;
                        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a
                    }
                    return this
                },
                on: function(c, g, b, e) {
                    function k(c) {
                        var k = c.target;
                        if (a(k).is(g)) b.call(k, c);
                        else for (var k = a(k).parents(), e = 0; e < k.length; e++) a(k[e]).is(g) && b.call(k[e], c)
                    }
                    c = c.split(" ");
                    var n, f;
                    for (n = 0; n < this.length; n++) if ("function" === typeof g || !1 === g) for ("function" === typeof g && (e = (b = g) || !1), f = 0; f < c.length; f++) this[n].addEventListener(c[f], b, e);
                    else for (f = 0; f < c.length; f++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
                            listener: b,
                            liveListener: k
                        }), this[n].addEventListener(c[f], k, e);
                    return this
                },
                off: function(a, g, b, e) {
                    a = a.split(" ");
                    for (var c = 0; c < a.length; c++) for (var k = 0; k < this.length; k++) if ("function" === typeof g || !1 === g)"function" === typeof g && (e = (b = g) || !1), this[k].removeEventListener(a[c], b, e);
                    else if (this[k].dom7LiveListeners) for (var n = 0; n < this[k].dom7LiveListeners.length; n++) this[k].dom7LiveListeners[n].listener === b && this[k].removeEventListener(a[c], this[k].dom7LiveListeners[n].liveListener, e);
                    return this
                },
                once: function(a, g, b, e) {
                    function c(n) {
                        b(n);
                        k.off(a, g, c, e)
                    }
                    var k = this;
                    "function" === typeof g && (e = b = g = !1);
                    k.on(a, g, c, e)
                },
                trigger: function(a, g) {
                    for (var c = 0; c < this.length; c++) {
                        var b;
                        try {
                            b = new window.CustomEvent(a, {
                                detail: g,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            b = document.createEvent("Event"), b.initEvent(a, !0, !0), b.detail = g
                        }
                        this[c].dispatchEvent(b)
                    }
                    return this
                },
                transitionEnd: function(a) {
                    function c(g) {
                        if (g.target === this) for (a.call(this, g), e = 0; e < b.length; e++) f.off(b[e], c)
                    }
                    var b = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        e, f = this;
                    if (a) for (e = 0; e < b.length; e++) f.on(b[e], c);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(a) {
                    return 0 < this.length ? a ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(a) {
                    return 0 < this.length ? a ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (0 < this.length) {
                        var a = this[0],
                            b = a.getBoundingClientRect(),
                            k = document.body;
                        return {
                            top: b.top + (window.pageYOffset || a.scrollTop) - (a.clientTop || k.clientTop || 0),
                            left: b.left + (window.pageXOffset || a.scrollLeft) - (a.clientLeft || k.clientLeft || 0)
                        }
                    }
                    return null
                },
                css: function(a, b) {
                    var c;
                    if (1 === arguments.length) if ("string" === typeof a) {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(a)
                    } else {
                        for (c = 0; c < this.length; c++) for (var g in a) this[c].style[g] = a[g];
                        return this
                    }
                    if (2 === arguments.length && "string" === typeof a) for (c = 0; c < this.length; c++) this[c].style[a] = b;
                    return this
                },
                each: function(a) {
                    for (var c = 0; c < this.length; c++) a.call(this[c], c, this[c]);
                    return this
                },
                html: function(a) {
                    if ("undefined" === typeof a) return this[0] ? this[0].innerHTML : void 0;
                    for (var c = 0; c < this.length; c++) this[c].innerHTML = a;
                    return this
                },
                is: function(c) {
                    if (!this[0]) return !1;
                    var g;
                    if ("string" === typeof c) {
                        g = this[0];
                        if (g === document) return c === document;
                        if (g === window) return c === window;
                        if (g.matches) return g.matches(c);
                        if (g.webkitMatchesSelector) return g.webkitMatchesSelector(c);
                        if (g.mozMatchesSelector) return g.mozMatchesSelector(c);
                        if (g.msMatchesSelector) return g.msMatchesSelector(c);
                        c = a(c);
                        for (g = 0; g < c.length; g++) if (c[g] === this[0]) return !0;
                        return !1
                    }
                    if (c === document) return this[0] === document;
                    if (c === window) return this[0] === window;
                    if (c.nodeType || c instanceof b) for (c = c.nodeType ? [c] : c, g = 0; g < c.length; g++) if (c[g] === this[0]) return !0;
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var a = this[0], b = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && b++;
                        return b
                    }
                },
                eq: function(a) {
                    if ("undefined" === typeof a) return this;
                    var c = this.length;
                    return a > c - 1 ? new b([]) : 0 > a ? (a = c + a, 0 > a ? new b([]) : new b([this[a]])) : new b([this[a]])
                },
                append: function(a) {
                    var c, k;
                    for (c = 0; c < this.length; c++) if ("string" === typeof a) for (k = document.createElement("div"), k.innerHTML = a; k.firstChild;) this[c].appendChild(k.firstChild);
                    else if (a instanceof b) for (k = 0; k < a.length; k++) this[c].appendChild(a[k]);
                    else this[c].appendChild(a);
                    return this
                },
                prepend: function(a) {
                    var c, k;
                    for (c = 0; c < this.length; c++) if ("string" === typeof a) {
                        var e = document.createElement("div");
                        e.innerHTML = a;
                        for (k = e.childNodes.length - 1; 0 <= k; k--) this[c].insertBefore(e.childNodes[k], this[c].childNodes[0])
                    } else if (a instanceof b) for (k = 0; k < a.length; k++) this[c].insertBefore(a[k], this[c].childNodes[0]);
                    else this[c].insertBefore(a, this[c].childNodes[0]);
                    return this
                },
                insertBefore: function(c) {
                    c = a(c);
                    for (var b = 0; b < this.length; b++) if (1 === c.length) c[0].parentNode.insertBefore(this[b], c[0]);
                    else if (1 < c.length) for (var k = 0; k < c.length; k++) c[k].parentNode.insertBefore(this[b].cloneNode(!0), c[k])
                },
                insertAfter: function(c) {
                    c = a(c);
                    for (var b = 0; b < this.length; b++) if (1 === c.length) c[0].parentNode.insertBefore(this[b], c[0].nextSibling);
                    else if (1 < c.length) for (var k = 0; k < c.length; k++) c[k].parentNode.insertBefore(this[b].cloneNode(!0), c[k].nextSibling)
                },
                next: function(c) {
                    return 0 < this.length ? c ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(c) ? new b([this[0].nextElementSibling]) : new b([]) : this[0].nextElementSibling ? new b([this[0].nextElementSibling]) : new b([]) : new b([])
                },
                nextAll: function(c) {
                    var g = [],
                        k = this[0];
                    if (!k) return new b([]);
                    for (; k.nextElementSibling;) k = k.nextElementSibling, c ? a(k).is(c) && g.push(k) : g.push(k);
                    return new b(g)
                },
                prev: function(c) {
                    return 0 < this.length ? c ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(c) ? new b([this[0].previousElementSibling]) : new b([]) : this[0].previousElementSibling ? new b([this[0].previousElementSibling]) : new b([]) : new b([])
                },
                prevAll: function(c) {
                    var g = [],
                        k = this[0];
                    if (!k) return new b([]);
                    for (; k.previousElementSibling;) k = k.previousElementSibling, c ? a(k).is(c) && g.push(k) : g.push(k);
                    return new b(g)
                },
                parent: function(c) {
                    for (var b = [], k = 0; k < this.length; k++) c ? a(this[k].parentNode).is(c) && b.push(this[k].parentNode) : b.push(this[k].parentNode);
                    return a(a.unique(b))
                },
                parents: function(c) {
                    for (var b = [], k = 0; k < this.length; k++) for (var e = this[k].parentNode; e;) c ? a(e).is(c) && b.push(e) : b.push(e), e = e.parentNode;
                    return a(a.unique(b))
                },
                find: function(a) {
                    for (var c = [], k = 0; k < this.length; k++) for (var e = this[k].querySelectorAll(a), f = 0; f < e.length; f++) c.push(e[f]);
                    return new b(c)
                },
                children: function(c) {
                    for (var g = [], k = 0; k < this.length; k++) for (var e = this[k].childNodes, f = 0; f < e.length; f++) c ? 1 === e[f].nodeType && a(e[f]).is(c) && g.push(e[f]) : 1 === e[f].nodeType && g.push(e[f]);
                    return new b(a.unique(g))
                },
                remove: function() {
                    for (var a = 0; a < this.length; a++) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                    return this
                },
                add: function() {
                    var c, b;
                    for (c = 0; c < arguments.length; c++) {
                        var k = a(arguments[c]);
                        for (b = 0; b < k.length; b++) this[this.length] = k[b], this.length++
                    }
                    return this
                }
            };
            a.fn = b.prototype;
            a.unique = function(a) {
                for (var c = [], b = 0; b < a.length; b++) - 1 === c.indexOf(a[b]) && c.push(a[b]);
                return c
            };
            return a
        }(),
        m = ["jQuery", "Zepto", "Dom7"],
        e = 0;
    for (; e < m.length; e++) window[m[e]] && l(window[m[e]]);
    if (m = "undefined" === typeof f ? window.Dom7 || window.Zepto || window.jQuery : f)"transitionEnd" in m.fn || (m.fn.transitionEnd = function(b) {
        function a(e) {
            if (e.target === this) for (b.call(this, e), g = 0; g < c.length; g++) k.off(c[g], a)
        }
        var c = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            g, k = this;
        if (b) for (g = 0; g < c.length; g++) k.on(c[g], a);
        return this
    }), "transform" in m.fn || (m.fn.transform = function(b) {
        for (var a = 0; a < this.length; a++) {
            var c = this[a].style;
            c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
        }
        return this
    }), "transition" in m.fn || (m.fn.transition = function(b) {
        "string" !== typeof b && (b += "ms");
        for (var a = 0; a < this.length; a++) {
            var c = this[a].style;
            c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b
        }
        return this
    });
    window.Swiper = h
})();
"undefined" !== typeof module ? module.exports = window.Swiper : "function" === typeof define && define.amd && define("tools/swiper", [], function() {
        return window.Swiper
    });
define("tools/getSpecifyUrlParam", ["common/config"], function(l) {
    return function(h) {
        var f = h.params || l.wwwSEARCH;
        if (!f) return "";
        h = f.match(h.reg || new RegExp(".+" + h.name + "=([^&#]*).*", "i"));
        return null !== h ? h[1] : ""
    }
});
define("ui/ripple", ["common/config"], function(l) {
    return {
        init: function(h) {
            this.setOptions(h);
            this.el = this.options.el;
            this.speed = this.options.speed;
            this.timer = null;
            this.initElement();
            this.initEvent();
            return this
        },
        setOptions: function(h) {
            this.options = {
                el: "body",
                speed: 400
            };
            $.extend(!0, this.options, h || {})
        },
        initElement: function() {
            this.$el = this.$el || $(this.options.el)
        },
        initEvent: function() {
            this.$el.on("click", ".com-ripple-btn, .com-ripple-href", $.proxy(this.ripple, this));
            this.initEvent = $.noop
        },
        ripple: function(h) {
            var f = $(h.currentTarget),
                m = f.offset().left,
                e = f.offset().top,
                b = f.outerWidth(),
                a = f.outerHeight();
            f.find(".com-ripple").remove();
            f.prepend("<i class='com-ripple'></i>");
            b >= a ? a = b : b = a;
            m = h.pageX - m - b / 2;
            h = h.pageY - e - a / 2;
            $(".com-ripple").css({
                width: b,
                height: a,
                top: h + "px",
                left: m + "px"
            }).addClass("com-ripple-effect");
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                $(".com-ripple").remove()
            }, this.speed);
            if (f.hasClass("com-ripple-href")) return setTimeout(function() {
                window.location.href = f.find("a").attr("href")
            }, 200), !1
        }
    }.init()
});
(function(l) {
    "function" === typeof define && define.amd ? define("ui/lazyload", ["lib/jquery"], l) : l(window.jQuery || window.Zepto)
})(function(l, h) {
    function f() {}
    function m(a, c) {
        return (c._$container == t ? ("innerHeight" in n ? n.innerHeight : t.height()) + t.scrollTop() : c._$container.offset().top + c._$container.height()) <= a.offset().top - c.threshold
    }
    function e(a, c) {
        return (c._$container == t ? t.width() + (l.fn.scrollLeft ? t.scrollLeft() : n.pageXOffset) : c._$container.offset().left + c._$container.width()) <= a.offset().left - c.threshold
    }

    function b(a, c) {
        return (c._$container == t ? t.scrollTop() : c._$container.offset().top) >= a.offset().top + c.threshold + a.height()
    }
    function a(a, c) {
        return (c._$container == t ? l.fn.scrollLeft ? t.scrollLeft() : n.pageXOffset : c._$container.offset().left) >= a.offset().left + c.threshold + a.width()
    }
    function c(c, g) {
        var k = 0;
        c.each(function(f, n) {
            function d() {
                h.trigger("_lazyload_appear");
                k = 0
            }
            var h = c.eq(f);
            if (!(0 >= h.width() && 0 >= h.height() || "none" === h.css("display"))) if (g.vertical_only) {
                if (!b(h, g)) if (!m(h, g)) d();
                else if (++k > g.failure_limit) return !1
            } else if (!b(h, g) && !a(h, g)) if (!m(h, g) && !e(h, g)) d();
            else if (++k > g.failure_limit) return !1
        })
    }
    function g(a) {
        return a.filter(function(c, b) {
            return !a.eq(c)._lazyload_loadStarted
        })
    }
    function k(a, c) {
        function b() {
            e = 0;
            f = +new Date;
            d = a.apply(g, k);
            k = g = null
        }
        var g, k, d, e, f = 0;
        return function() {
            g = this;
            k = arguments;
            var a = new Date - f;
            e || (a >= c ? b() : e = setTimeout(b, c - a));
            return d
        }
    }
    var n = window,
        t = l(n),
        r = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            effect_params: null,
            container: n,
            data_attribute: "original",
            data_srcset_attribute: "original-srcset",
            skip_invisible: !0,
            appear: f,
            load: f,
            vertical_only: !1,
            check_appear_throttle_time: 300,
            url_rewriter_fn: f,
            no_fake_img_loader: !1,
            placeholder_data_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
            placeholder_real_img: "//css.dhresource.com/mobile/home/image/grey.png"
        },
        x;
    x = function() {
        var a = Object.prototype.toString;
        return function(c) {
            return a.call(c).replace("[object ", "").replace("]", "")
        }
    }();
    l.fn.hasOwnProperty("lazyload") || (l.fn.lazyload = function(a) {
        var b = this,
            e, h, m;
        l.isPlainObject(a) || (a = {});
        l.each(r, function(d, c) {
            -1 != l.inArray(d, ["threshold", "failure_limit", "check_appear_throttle_time"]) ? "String" == x(a[d]) ? a[d] = parseInt(a[d], 10) : a[d] = c : "container" == d ? (a.hasOwnProperty(d) ? a._$container = a[d] == n || a[d] == document ? t : l(a[d]) : a._$container = t, delete a.container) : !r.hasOwnProperty(d) || a.hasOwnProperty(d) && x(a[d]) == x(r[d]) || (a[d] = c)
        });
        e = "scroll" == a.event;
        m = 0 == a.check_appear_throttle_time ? c : k(c, a.check_appear_throttle_time);
        h = e || "scrollstart" == a.event || "scrollstop" == a.event;
        b.each(function(d, c) {
            var k = this,
                e = b.eq(d),
                n = e.attr("src"),
                m = e.attr("data-" + a.data_attribute),
                r = a.url_rewriter_fn == f ? m : a.url_rewriter_fn.call(k, e, m),
                t = e.attr("data-" + a.data_srcset_attribute),
                q = e.is("img");
            if (1 == e._lazyload_loadStarted || n == r) e._lazyload_loadStarted = !0, b = g(b);
            else if (e._lazyload_loadStarted = !1, q && !n && e.one("error", function() {
                    e.attr("src", a.placeholder_real_img)
                }).attr("src", a.placeholder_data_img), e.one("_lazyload_appear", function() {
                    function d() {
                        n && e.hide();
                        q ? (t && e.attr("srcset", t), r && e.attr("src", r)) : e.css("background-image", 'url("' + r + '")');
                        n && e[a.effect].apply(e, c ? a.effect_params : []);
                        b = g(b)
                    }
                    var c = l.isArray(a.effect_params),
                        n;
                    if (!e._lazyload_loadStarted) if (n = "show" != a.effect && l.fn[a.effect] && (!a.effect_params || c && 0 == a.effect_params.length), a.appear != f && a.appear.call(k, e, b.length, a), e._lazyload_loadStarted = !0, a.no_fake_img_loader || t) {
                        if (a.load != f) e.one("load", function() {
                            a.load.call(k, e, b.length, a)
                        });
                        d()
                    } else l("<img />").one("load", function() {
                        d();
                        a.load != f && a.load.call(k, b.length, a)
                    }).attr("src", r)
                }), !h) e.on(a.event, function() {
                e._lazyload_loadStarted || e.trigger("_lazyload_appear")
            })
        });
        if (h) a._$container.on(a.event, function() {
            m(b, a)
        });
        t.on("resize load", function() {
            m(b, a)
        });
        l(function() {
            m(b, a)
        });
        return this
    })
});
define("tpl/appSpreadTpl", [], function() {
    return '<div class="top-download">,<a rel="nofollow" href="javascript:;" class="downClose j-closeApp"></a>,<a rel="nofollow" href="javascript:;" class="downCentent j-openApp com-ripple-btn" data-entrance="WAP-Top">,<span class="down-logo activityLogo j-activityLogo"></span>,<p class="down-text"><%=$.lang["COMMON_Price_onapp"]%></p>,</a>,<span class="down-but">APP</span>,</div>'.split(",")
});
define("tpl/header/hotKeyWordTpl", [], function() {
    return ['<div class="search-clear"><%=$.lang["hot_search"]%></div>', "<ul>", "<% var data = obj.list; %>", "<% for (var i = 0, len = data.length; i < len; i++) { %>", "<% if (i < 3) { %>", '<li class="com-ripple-btn" data-key="<%=data[i]%>"><key class="j-searchKey"><%=data[i]%></key><span><%=i+1%></span></li>', "<% } else { %>", '<li class="com-ripple-btn" data-key="<%=data[i]%>"><key class="j-searchKey"><%=data[i]%></key></li>', "<% } %>", "<% } %>", "</ul>"]
});
define("tpl/header/recentKeyWordTpl", [], function() {
    return ["<% var data = obj.list; %>", '<div class="search-clear"><a class="j-historyClose" href="javascript:;"><%=$.lang["clear_history"]%></a></div>', "<ul>", "<% for (var i = 0, len = data.length; i < len; i ++) { %>", '<li class="com-ripple-btn" data-key="<%=data[i]%>"><key class="j-searchKey"><%=data[i]%></key></li>', "<% } %>", "</ul>"]
});
define("tpl/header/suggestTpl", [], function() {
    return ["<% var data = obj.list; %>", "<% if (data.length!==0) {  %>", '<div class="search-clear"><a class="j-searchlistClose" href="javascript:;"><%=$.lang["close"]%></a></div>', '<ul class="suggestcon">', "<% for (var i = 0, len = data.length; i < len; i++) {%>", "<% if (data[i].cid||data[i].cid===0){%>", "<% if (data[i].cid===0){%>", '<li class="key-cate j-keycate com-ripple-btn" data-key="<%=data[i].key%>"><key class="j-searchKey searchkey"><%=data[i].key%></key>', '<% if (data[i].cateName!==""){%>', ' in <attr class="cateName j-cateName" data-cid = ""><%=data[i].cateName%></attr></li>', "<% } %>", "<% }else{ %>", '<li class="key-cate j-keycate com-ripple-btn" data-key="<%=data[i].key%>"><key class="j-searchKey searchkey"><%=data[i].key%></key>', '<% if (data[i].cateName!==""){%>', ' in <attr class="cateName j-cateName" data-cid = "<%=data[i].cid%>"><%=data[i].cateName%></attr></li>', "<% } %>", "<% } %>", "<% }else{ %>", '<li class="key-cate key-label clearfix com-ripple-btn" data-key="<%=data[i].key%>"><key class="j-searchKey searchkey"><%=data[i].key%></key>', "<% if (data[i].labelList) {%>", '<div class="attrcon">', "<% for (var j = 0, len2 = data[i].labelList.length; j < len2; j++) {%>", '<attr class="attrName j-suggetAttrList" data-attrName = "<%=data[i].labelList[j].suggestTag%>"><%=data[i].labelList[j].suggestTag%></attr>', "<% } %>", "</div>", "<% } %>", "</li>", "<% } %>", "<% } %>", "</ul>", "<% } %>"]
});
define("tpl/header/topMenuInitTpl", [], function() {
    return {
        warp: '<div class="category-layer">;<div class="category-menu">;<span class="user-profile"></span>;<div class="j-header-login">;{{notLogin}};{{isLogin}};</div>;</div>;<div class="category-layer-scroll j-menuInitScroll">;{{entranceOne}};{{entranceTwo}};{{entranceThree}};</div>;</div>'.split(";"),
        fixedShadow: ['<div class="j-fixedShadow dhm-hide" style="position:fixed;width:100%;height:100%;bottom:0;z-index:777;background:#000;opacity:0.3;cursor:pointer;"></div>'],
        notLogin: '<% var data = obj.list; %>,<% if (!data.nickName) { %>,<div class="category-sign">,<a href="/login.do" rel="nofollow" class="j-header-signin"><%=$.lang["Head_signIn"]%></a> <%=$.lang["Head_or"]%> <a href="/register.do" rel="nofollow" class="j-header-register"><%=$.lang["Head_joinFree"]%></a>,</div>,<% } %>'.split(","),
        isLogin: ["<% var data = obj.list; %>", "<% if (data.nickName) { %>", '<div class="category-out"><span><%=$.lang["Head_not"]%> <%=data.nickName%>? </span><a class="j-header-signout" rel="nofollow" href="/signout.do" onClick="javascript:ga(\'send\', \'event\', \'MHP\', \'Menu\', \'Sign out\')"><%=$.lang["sign_out"]%></a></div>', "<% } %>"],
        entranceOne: '<% var data = obj.list; %>,<div class="category-shop">,<ul>,<li class="com-ripple-href"><b class="s-home"><span></span></b><a rel="nofollow" href="/index.html"><%=$.lang["Head_home"]%></a></li>,<li class="shop-category com-ripple-href"><b class="s-category"><span></span></b><a rel="nofollow" href="/allcategories.html"><%=$.lang["l_all_cas"]%></a></li>,</ul>,</div>,<% if (/^(?:en|fr|es)$/i.test(data.site)) { %>,<% } %>'.split(","),
        entranceTwo: '<% var data = obj.list; %>,<div class="category-list2">,<ul>,<li class="com-ripple-href"><b class="s-cart"><span></span></b><a rel="nofollow" href="/viewcart.do"><%=$.lang["Head_shoppingCart"]%><span class="number j-cartnum"><%=data.cartSum%></span></a></li>,<li class="com-ripple-href"><a rel="nofollow" href="/vieworder.do"><%=$.lang["Head_myDHgate"]%></a></li>,<li class="com-ripple-href"><a rel="nofollow" href="/mydhgate/order/orderlist.html?rft=1"><%=$.lang["Head_myOrders"]%></a></li>,<li class="com-ripple-href"><a rel="nofollow" href="/myinbox.do"><%=$.lang["Head_myMessage"]%><span class="number j-messagenum"><%=data.messageSum%></span></a></li>,<li class="com-ripple-href"><a rel="nofollow" href="/mydhgate/coupon/mycoupons.html"><%=$.lang["Head_myCoupons"]%></a></li>,<li class="com-ripple-href"><a rel="nofollow" href="/myFavorites.html"><%=$.lang["Head_myFavorites"]%></a></li>,<% if (data.site === "en") { %>,<li class="confirmEmail j-confirmEmail com-ripple-btn dhm-hide"><b class="s-confirmEmailIcon"><span></span></b><a rel="nofollow" href="javascript:;"><%=$.lang["Head_confirmEmail"]%><var class="couponIcon"></var></a></li>,<% } %>,<% if (data.site === "en") { %>,<li class="com-ripple-href"><a rel="nofollow" href="/oneclickorder/oneclickorder.html"><%=$.lang["Head_oneStepBuy"]%></a></li>,<% } %>,</ul>,</div>'.split(","),
        entranceThree: ["<% var data = obj.list; %>", '<div class="category-language">', "<ul>", '<li class="com-ripple-btn" id="J_language" onClick="javascript:ga(\'send\', \'event\', \'MHP\', \'Menu\', \'Select language\')"><b class="s-language"><span></span></b><a rel="nofollow" href="javascript:;"><%=$.lang["Head_selectLanguage"]%><span class="English"><%=data.lang%></span></a></li>', '<li class="com-ripple-btn"><a rel="nofollow" class="j-openApp" data-entrance="Maindirect" href="javascript:;" onClick="javascript:ga(\'send\', \'event\', \'MHP\', \'Menu\', \'Download App\')"><b class="s-app"><span></span></b><%=$.lang["Head_downloadApp"]%></a></li>', "</ul>", "</div>", '<div class="category-socialshops">', "<ul>", '<% if (data.site === "en") { %>', '<li class="com-ripple-btn"><a rel="nofollow" href="https://www.socialshops.com?F=SS|MKT|WAP|event1|s027001|&channelId=s027001" target="_blank"><b class="s-socialshops"><span></span></b>Selling on Socialshops</a></li>', "<% } %>", "</ul>", "</div>", '<div class="category-feedback">', "<ul>", '<li class="com-ripple-href"><a rel="nofollow" href="http://dg.dhgate.com/contact/contactUs.do" onclick="javascript:ga(\'send\', \'event\', \'MHP\', \'Menu\', \'Customer Service\')"><b class="s-service"><span></span></b><%=$.lang["Head_customerService"]%></a></li>', "<li class=\"com-ripple-href\"><a rel=\"nofollow\" href=\"http://survey.dhgate.com/index.php?sid=92928&lang=en\" onClick=\"javascript:ga('send', 'event', 'MHP', 'Menu', 'Feed back')\"><%=$.lang[\"Head_feedback\"]%></a></li>", "</ul>", "</div>"],
        needEDMEmailConfirmTips: '<% var data = obj %>;<% if (data.result === "1") { %>;We\u2019ve email you a confirmation link.Please confirm your account within 48 hours for a chance to get a free coupon!;<% }else{%>;Your email address has been confirmed already.;<% } %>'.split(";")
    }
});
define("tpl/header/turnToLanguagesWebsiteTpl", [], function() {
    return {
        warp: '<div class="language-laye">,<div id="J_languageCont" class="language-box">,{{list}},<p class="laye-Cancel j-languageCancel com-ripple-btn"><a rel="nofollow" href="javascript:;"><%=$.lang["cancel"]%></a></p>,</div>,</div>'.split(","),
        list: '<ul>;<li class="com-ripple-href"><a href="https://m.dhgate.com" rel="nofollow">English (EN)</a></li>;<li class="com-ripple-href"><a href="https://m.es.dhgate.com" rel="nofollow">Espa\u00f1ol (ES)</a></li>;<li class="com-ripple-href"><a href="https://m.pt.dhgate.com" rel="nofollow">Portugu\u00eas (PT)</a></li>;<li class="com-ripple-href"><a href="https://m.ru.dhgate.com" rel="nofollow">\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (RU)</a></li>;<li class="com-ripple-href"><a href="https://m.fr.dhgate.com" rel="nofollow">Fran\u00e7ais (FR)</a></li>;<li class="com-ripple-href"><a href="https://m.de.dhgate.com" rel="nofollow">Deutsch (DE)</a></li>;<li class="com-ripple-href"><a href="https://m.it.dhgate.com" rel="nofollow">Italiano (IT)</a></li>;<li class="com-ripple-href"><a href="https://m.tr.dhgate.com" rel="nofollow">T\u00fcrk (TR)</a></li>;</ul>'.split(";"),
        shadow: ['<div id="J_shadow" class="language-shadow dhm-hide"></div>']
    }
});
define("tpl/login/signinPopupTpl", [], function() {
    return {
        main: '<div class="j-popup-loginWarp dhm-hide close-login-layer">;<section class="login-head">;{{loginCloseBtn}};{{loginTab}};</section>;<section class="login-box j-popup-login-tabContent">;<div class="login-con" data-type="con">;{{websiteSignin}};</div>;<div class="login-con dhm-hide j-popup-register-content" data-type="con"></div>;{{thirdSignin}};</section>;</div>'.split(";"),
        loginTab: '<div class="login-signin">;<ul class="j-popup-login-tab">;<li class="current com-ripple-btn"><%=$.lang["Head_signIn"]%></li>;<li class="com-ripple-btn"><%=$.lang["LOGIN_register"]%></li>;</ul>;</div>'.split(";"),
        main1: '<div class="j-page-loginWarp">;<section class="login-head">;{{loginTab1}};</section>;<section class="login-box j-page-login-tabContent">;<div class="login-con" data-type="con">;{{websiteSignin}};</div>;<div class="login-con dhm-hide j-page-register-content" data-type="con"></div>;{{thirdSignin}};</section>;</div>'.split(";"),
        loginTab1: '<div class="login-signin">;<ul class="j-page-login-tab">;<li class="current com-ripple-btn"><%=$.lang["Head_signIn"]%></li>;<li class="com-ripple-btn"><%=$.lang["LOGIN_register"]%></li>;</ul>;</div>'.split(";"),
        loginCloseBtn: ['<div class="login-close"><a href="javascript:;" class="login-close-close com-ripple-btn j-popup-login-close"><span></span></a></div>'],
        websiteSignin: '<div class="mdl-textfield">,<input id="signinUsername" class="mdl-textfield__input j-login-item" type="text" data-validate="email1" autocorrect="off" autocapitalize="off" value="" />,<label class="mdl-textfield__label" for="signinUsername"><%=$.lang["LOGIN_email"]%></label>,<span class="mdl-textfield__error"></span>,</div>,<div class="mdl-textfield">,<input id="signinPassword" class="mdl-textfield__input j-login-item" type="password" data-validate="pwd1" autocorrect="off" autocapitalize="off" value="" />,<label class="mdl-textfield__label" for="signinPassword"><%=$.lang["LOGIN_password"]%></label>,<span class="mdl-textfield__error"></span>,</div>,<div class="j-signin-code mdl-textfield dhm-hide"></div>,<p class="login-password"><a href="https://secure.dhgate.com/usr/forgotpwd.do" target="_blank"><%=$.lang["LOGIN_forgetPassword"]%></a></p>,<div class="login-submit j-popup-signin-btn com-ripple-btn" data-type="signin"><a href="javascript:;"><%=$.lang["Head_signIn"]%></a></div>'.split(","),
        signinCode: ["<% var data = obj; %>", '<input id="signinVerificationCode" class="mdl-textfield__input j-login-item" type="text" data-validate="verifyCode" value="" />', '<label class="mdl-textfield__label" for="signinVerificationCode"><%=$.lang["LOGIN_enterVerificationcode"]%></label>', '<span class="mdl-textfield__error"></span>', '<span class="lgoin-Verify-picture j-signin-code-image com-ripple-btn" data-type="1"><img src="<%=data.imageBase64Str%>" alt="<%=$.lang["LOGIN_verifyCode"]%>" /></span>'],
        thirdSignin: '<div class="login-share">,<p class="login-share-text"><%=$.lang["LOGIN_orJoinwith"]%></p>,<ul>,<li class="login-guest j-login-guest com-ripple-btn dhm-hide"><span class="login-icon"></span><a href="javascript:;"><%=$.lang["LOGIN_proceedGuest"]%></a></li>,<li class="login-facbook j-login-facebook com-ripple-btn"><span class="login-icon"></span><a href="javascript:;"><%=$.lang["LOGIN_signFacebook"]%></a></li>,<li class="login-google j-login-google com-ripple-btn"><span class="login-icon"></span><a href="javascript:;"><%=$.lang["LOGIN_signGoogle"]%></a></li>,<li class="login-visa-checkout j-visa-chekcout dhm-hide" role="button"><span class="visa-icon com-ripple-btn"></span><img class ="v-button visa-checkoutButton" src="http://css.dhresource.com/mobile/home/image/grey.png"/><a href="javascript:;"><span class="visa-check com-ripple-btn"></span></a></li>,</ul>,</div>'.split(",")
    }
});
define("tpl/login/registerPopupTpl", [], function() {
    return {
        websiteRegister: ["{{part1}}", "{{pwd}}", "{{part2}}", "{{part3}}"],
        part1: ['<div class="mdl-textfield">', '<input id="registerEmail" class="mdl-textfield__input j-login-item" type="text" data-validate="email2" value="" />', '<label class="mdl-textfield__label" for="registerEmail"><%=$.lang["LOGIN_emailConfirm"]%></label>', '<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>', "</div>"],
        pwd: '<div class="mdl-textfield">;<input id="registerPassword" class="mdl-textfield__input j-login-item" type="password" data-validate="pwd1" value="" />;<label class="mdl-textfield__label" for="registerPassword"><%=$.lang["LOGIN_password"]%></label>;<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>;</div>;<div class="mdl-textfield">;<input id="registerConfirmPassword" class="mdl-textfield__input j-login-item" type="password" data-validate="pwd2" value="" />;<label class="mdl-textfield__label" for="registerConfirmPassword"><%=$.lang["LOGIN_confirmPassword"]%></label>;<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>;</div>'.split(";"),
        part2: '<div class="mdl-textfield j-register-usertype-warp">;<input id="registerType" class="mdl-textfield__input j-login-item j-register-usertype-item" type="text" data-validate="userType" value="" readonly="readonly" />;<label class="mdl-textfield__label" for="registerType"><%=$.lang["LOGIN_selectBusiness"]%></label>;<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>;<span class="lgoin-Verify-scale"></span>;<div class="login-layer j-register-usertype-list">;<ul>;<li data-type="Reseller" class="com-ripple-btn"><%=$.lang["LOGIN_reseller"]%></li>;<li data-type="Company Purchaser" class="com-ripple-btn"><%=$.lang["LOGIN_companyPurchaser"]%></li>;<li data-type="Consumer" class="com-ripple-btn"><%=$.lang["LOGIN_consumer"]%></li>;</ul>;</div>;</div>;<div class="mdl-textfield">;<input id="registerVerificationCode" class="mdl-textfield__input j-login-item" type="text" data-validate="verifyCode" value="" />;<label class="mdl-textfield__label" for="registerVerificationCode"><%=$.lang["LOGIN_enterVerificationcode"]%></label>;<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>;<span class="lgoin-Verify-picture j-register-code-image com-ripple-btn" data-type="0"><img src="" alt="<%=$.lang["LOGIN_verifyCode"]%>" /></span>;</div>'.split(";"),
        part3: ['<div class="login-tips"><a href="https://m.dhgate.com/login/login-Agreement.html"><%=$.lang["LOGIN_byCreatingAccount"]%></a></div>', '<div class="login-submit j-popup-register-btn com-ripple-btn" data-type="register"><a href="javascript:;"><%=$.lang["LOGIN_createAccount"]%></a></div>'],
        websiteRegister1: ["{{part1}}", "{{pwd1}}", "{{part2}}", "{{part3}}"],
        pwd1: '<div class="mdl-textfield">;<input id="pageRegisterPassword" class="mdl-textfield__input j-login-item" type="password" data-validate="pwd1" value="" />;<label class="mdl-textfield__label" for="pageRegisterPassword"><%=$.lang["LOGIN_password"]%></label>;<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>;</div>;<div class="mdl-textfield">;<input id="registerConfirmPassword" class="mdl-textfield__input j-login-item" type="password" data-validate="pwd3" value="" />;<label class="mdl-textfield__label" for="registerConfirmPassword"><%=$.lang["LOGIN_confirmPassword"]%></label>;<span class="mdl-textfield__error"><%=$.lang["LOGIN_inputNotNum"]%></span>;</div>'.split(";")
    }
});
define("tpl/coupon/getStoreCouponListTpl", [], function() {
    return {
        main: '{{title}};<div class="store-coupon-list j-store-coupon-list">;<div class="store-coupon-list-inne">;{{products}};</div>;</div>'.split(";"),
        title: ["<% var data = obj; %>", '<h2 class="store-coupon-tit j-store-coupon-tit com-ripple-btn"><a href="javascript:void(0);"><%=$.lang["DETAIL_storeCoupons"]%> (<%=data.couponList.length%>)<span class="public-arrow"></span></a></h2>'],
        products: ["<% var data = obj; %>", "<% var dataCouponList = data.couponList; %>", "<% for (var i = 0, len = dataCouponList.length; i < len; i++) { %>", "<% if(dataCouponList[i].totalNumber - dataCouponList[i].usedNumber === 0) { %>", '<dl class="store-coupon-sold">', "<dt>", '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_appOnly"]%></span>', "<% } %>", '<% if(dataCouponList[i].couponType === "11") { %>', '<span class="sAppCoupon">Bonus</span>', "<% } %>", '<span class="sCoupon-value"><b><%=data.currencyText%><%=dataCouponList[i].couponAmount%></b> <%=$.lang["off"]%> <%=data.currencyText%><%=dataCouponList[i].minOrderAmount%>+</span>', "</dt>", '<dd><%=$.lang["DETAIL_outOfCoupons"]%></dd>', "</dl>", "<% } else { %>", "<% if(dataCouponList[i].ifBuyerBind === false) { %>", '<% if(dataCouponList[i].couponType === "11") { %>', '<dl class="store-coupon-sell j-sCoupon-btn com-ripple-btn" data-couponType="Bonus" data-couponcode="<%=dataCouponList[i].couponCode%>">', "<% } else { %>", '<dl class="store-coupon-sell j-sCoupon-btn com-ripple-btn" data-couponcode="<%=dataCouponList[i].couponCode%>">', "<% } %>", "<dt>", '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_appOnly"]%></span>', '<% } else if(dataCouponList[i].couponType === "11") { %>', '<span class="sAppCoupon">Bonus</span>', "<% } %>", '<span class="sCoupon-value"><b><%=data.currencyText%><%=dataCouponList[i].couponAmount%></b> <%=$.lang["off"]%> <%=data.currencyText%><%=dataCouponList[i].minOrderAmount%>+</span>', "</dt>", '<dd class="j-getNow"><%=$.lang["DETAIL_getNow"]%></dd>', "</dl>", "<% } else if(dataCouponList[i].ifBuyerBind === true) { %>", '<dl class="store-coupon-sold">', "<dt>", '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_appOnly"]%></span>', '<% } else if(dataCouponList[i].couponType === "11") {%>', '<span class="sAppCoupon">Bonus</span>', "<% } %>", '<span class="sCoupon-value"><b><%=data.currencyText%><%=dataCouponList[i].couponAmount%></b> <%=$.lang["off"]%> <%=data.currencyText%><%=dataCouponList[i].minOrderAmount%>+</span>', "</dt>", '<% if(dataCouponList[i].couponType === "11") { %>', '<dd><a href="/search.do?pageType=crossStore&amp;pageParam=<%=dataCouponList[i].couponCode%>">Use Now</a></dd>', "<% } else { %>", '<dd><%=$.lang["DETAIL_received"]%></dd>', "<% } %>", "</dl>", "<% } %>", "<% } %>", "<% } %>"],
        storeCouponMain: '<% var data = obj; %>,<% if (data.couponList.length > 0) { %>,<div class="datailLayer-store-coupon j-storeCouponLayer close-layer1 dhm-hide">,<div class="product-title-top j-product-storeTitle-top com-ripple-btn"><span class="title-top-icon"></span><%=$.lang["DETAIL_storeCoupons"]%></div>,<div class="datail-coupon-box datail-coupon-boxScroll j-datail-coupon-boxScroll">,{{storeCouponList}},</div>,<p class="store-coupon-note j-store-coupon-note"><%=$.lang["DETAIL_note"]%></p>,</div>,<% } %>'.split(","),
        storeCouponList: ["<% var data = obj; %>", "<% var dataCouponList = obj.couponList;%>", "<% for (var i = 0, len = dataCouponList.length; i < len; i++) { %>", "<% if(dataCouponList[i].totalNumber - dataCouponList[i].usedNumber === 0) { %>", '<% if(dataCouponList[i].couponType === "11") { %>', '<dl class="store-coupon-sold" data-couponType="Bonus" data-couponcode="<%=dataCouponList[i].couponCode%>"%>', "<% } else { %>", '<dl class="store-coupon-sold" data-couponcode="<%=dataCouponList[i].couponCode%>"%>', "<% } %>", "<dd>", '<% if(dataCouponList[i].couponType === "8") { %>', '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_1stInAppOrder"]%></span>', '<% }else if(dataCouponList[i].platform === "0") { %>', '<span class="sAppCoupon">1st Order</span>', "<% } %>", '<% } else if(dataCouponList[i].couponType === "11") { %>', '<span class="sAppCoupon">Bonus</span>', "<% }else{ %>", '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_appOnly"]%></span>', "<% } %>", "<% } %>", '<p class="coupon-1"><span><b><%=data.currencyText%><%=dataCouponList[i].couponAmount%></b></span> <%=$.lang["oFF"]%> <%=data.currencyText%><%=dataCouponList[i].minOrderAmount%>+</p>', '<p><%=$.lang["DETAIL_couponExpires"]%>: <%=dataCouponList[i].expiresTime%></p>', '<p class="coupon-2"><%=$.lang["DETAIL_issuedTotal"]%>: <span><%=dataCouponList[i].usedNumber%></span>/<%=dataCouponList[i].totalNumber%></p>', "</dd>", '<dt><%=$.lang["DETAIL_outOfCoupons"]%></dt>', "</dl>", "<% } else { %>", "<% if(dataCouponList[i].ifBuyerBind === false) { %>", '<% if(dataCouponList[i].couponType === "11") { %>', '<dl class="store-coupon-sell j-sCoupon-btn com-ripple-btn" data-couponType="Bonus" data-couponcode="<%=dataCouponList[i].couponCode%>">', "<% } else { %>", '<dl class="store-coupon-sell j-sCoupon-btn com-ripple-btn" data-couponcode="<%=dataCouponList[i].couponCode%>">', "<% } %>", "<dd>", '<% if(dataCouponList[i].couponType === "8") { %>', '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_1stInAppOrder"]%></span>', '<% }else if(dataCouponList[i].platform === "0") { %>', '<span class="sAppCoupon">1st Order</span>', "<% } %>", '<% } else if(dataCouponList[i].couponType === "11") { %>', '<span class="sAppCoupon">Bonus</span>', "<% }else{ %>", '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_appOnly"]%></span>', "<% } %>", "<% } %>", '<p class="coupon-1"><span><b><%=data.currencyText%><%=dataCouponList[i].couponAmount%></b></span> <%=$.lang["oFF"]%> <%=data.currencyText%><%=dataCouponList[i].minOrderAmount%>+</p>', '<p><%=$.lang["DETAIL_couponExpires"]%>: <%=dataCouponList[i].expiresTime%></p>', '<p class="coupon-2"><%=$.lang["DETAIL_issuedTotal"]%>: <span><%=dataCouponList[i].usedNumber%></span>/<%=dataCouponList[i].totalNumber%></p>', "</dd>", '<dt class="j-popGetNow"><%=$.lang["DETAIL_getNow"]%></dt>', "</dl>", "<% } else if(dataCouponList[i].ifBuyerBind === true) { %>", '<dl class="store-coupon-received" data-couponcode="<%=dataCouponList[i].couponCode%>">', "<dd>", '<% if(dataCouponList[i].couponType === "8") { %>', '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_1stInAppOrder"]%></span>', '<% }else if(dataCouponList[i].platform === "0") { %>', '<span class="sAppCoupon">1st Order</span>', "<% } %>", '<% } else if(dataCouponList[i].couponType === "11") { %>', '<span class="sAppCoupon">Bonus</span>', "<% }else{ %>", '<% if(dataCouponList[i].platform === "3") { %>', '<span class="sAppCoupon"><%=$.lang["DETAIL_appOnly"]%></span>', "<% } %>", "<% } %>", '<p class="coupon-1"><span><b><%=data.currencyText%><%=dataCouponList[i].couponAmount%></b></span> <%=$.lang["oFF"]%> <%=data.currencyText%><%=dataCouponList[i].minOrderAmount%>+</p>', '<p><%=$.lang["DETAIL_couponExpires"]%>: <%=dataCouponList[i].expiresTime%></p>', '<p class="coupon-2"><%=$.lang["DETAIL_issuedTotal"]%>: <span><%=dataCouponList[i].usedNumber%></span>/<%=dataCouponList[i].totalNumber%></p>', "</dd>", '<% if(dataCouponList[i].couponType === "11") { %>', '<dt class="j-popGetNow"><span class="useNow com-ripple-btn"><a href="/search.do?pageType=crossStore&amp;pageParam=<%=dataCouponList[i].couponCode%>">Use Now</a></span></dt>', "<% } else { %>", "<dt></dt>", "<% } %>", "</dl>", "<% } %>", "<% } %>", "<% } %>"]
    }
});
define("tpl/detail/getFavoriteTpl", [], function() {
    return ["<% var data = obj.data,isFavState = obj.data.favorite;%>", '<% if (isFavState==="1") {  %>', '<span class="slider-collection j-favBtn com-ripple-btn"><span class="slider-icon slider-icon2 j-favStyle"></span><span class="j-num"><%=data.count%></span></span>', "<% }else{ %>", '<span class="slider-collection j-favBtn com-ripple-btn"><span class="slider-icon j-favStyle"></span><span class="j-num"><%=data.count%></span></span>', "<% } %>"]
});
define("tpl/detail/getDefaultShipCostAndWayTpl", [], function() {
    return {
        main: '<% var data = obj; %>,<div class="datail-product-free-layer close-layer1 dhm-hide j-shipCostLayerWarp">,<div class="product-title-top j-shipCostLayerClose com-ripple-btn">,<a href="javascript:;">,<span class="title-top-icon"></span>,<%=$.lang["DETAIL_shipping"]%>,</a>,</div>,<% if (data.isOnekey !== "y") { %>,<div class="j-curShipCostInfoWarp">,{{curShipCostInfo}},</div>,<div class="j-whitherCountryWarp">,{{curWhitherCountry}},</div>,<% } else { %>,<div class="j-shippingAddressWarp">,{{curShippingAddressInfo}},</div>,<% } %>,<div class="datail-product-free-layer j-expressTypeListWarp"></div>,</div>'.split(","),
        curShipCostInfo: ["<% var data = obj; %>", "<% if (data.shipcost >= 0) { %>", '<div class="datail-free-address">', "<% if (data.shipcost > 0) { %>", '<p class="free-address-piece">', '<b>$<%=data.shipcost%></b> <%=$.lang["DETAIL_shipping"]%>', "</p>", "<% } else if (data.shipcost === 0) { %>", '<p class="free-address-shipp">', '<b><%=$.lang["free_shipping"]%></b>', "</p>", "<% } %>", '<p class="free-address-address">', '<%=$.lang.replaceTplVar("DETAIL_fromTo", {fromPlace: data.stockCountryName,toPlace: data.whitherCountryName,expressType: data.expressType})%>', "<% if (data.leadingTime > 1) { %>", '<span><%=$.lang.replaceTplVar("DETAIL_shipsWithins", {leadingTime: data.leadingTime,lowerDate: data.lowerDate,upperDate: data.upperDate})%></span>', "<% } else { %>", '<span><%=$.lang.replaceTplVar("DETAIL_shipsWithin", {leadingTime: data.leadingTime,lowerDate: data.lowerDate,upperDate: data.upperDate})%></span>', "<% } %>", "</p>", "</div>", "<% } %>"],
        curWhitherCountry: '<% var data = obj; %>,<div class="datail-ships-to j-whitherCountryBtn com-ripple-btn">,<span class="ships-to-name"><%=$.lang["DETAIL_shipsto"]%></span>,<% if (data.shipcost >= 0) { %>,<span class="ships-to-states"><%=data.whitherCountryName%></span>,<% } else { %>,<span class="ships-to-states ships-to-red"><%=data.whitherCountryName%></span>,<% } %>,<span class="public-arrow"></span>,</div>'.split(","),
        curShippingAddressInfo: ["<% var data = obj; %>", '<div class="adress-shipping-box j-shippingAddressBtn com-ripple-btn">', "<dl>", '<dt><%=$.lang["DETAIL_address"]%>:</dt>', "<dd><%=data.firstname%> <%=data.lastname%></dd>", "<dd><%=data.addressline1%>. <%=data.addressline2%></dd>", "<dd><%=data.city%>, <%=data.state%> <%=data.postalcode%></dd>", "<% if (data.shipcost!==-1) { %>", "<dd><%=data.countryname%></dd>", "<% } else { %>", '<dd class="adress-prompt"><%=data.countryname%></dd>', "<% } %>", "<dd><%=data.tel%></dd>", '<% if (data.vatnum !== "") { %>', "<dd><%=data.vatnum%></dd>", "<% } %>", "</dl>", '<span class="public-arrow"></span>', "</div>"],
        pageShipCostInfo: ["<% var data = obj; %>", '<a href="javascript:;">', "<% if (data.shipcost >= 0) { %>", '<% if (data.isOnekey === "y") { %>', '<p class="datail-address"><%=$.lang["DETAIL_address"]%>: <%=data.firstname%> <%=data.lastname%>-<%=data.city%></p>', "<% } %>", '<p class="datail-shippingcost"><%=$.lang["DETAIL_shippingCost"]%>: <strong>', "<% if (data.shipcost > 0) { %>", "$<%=data.shipcost%>", "<% } else if (data.shipcost === 0) { %>", '<%=$.lang["free_shipping"]%>', "<% } %>", "</strong></p>", '<p class="datail-address-tip"><%=$.lang.replaceTplVar("DETAIL_toshipVia", {toPlace: data.whitherCountryName,expressType: data.expressType,lowerDate: data.lowerDate,upperDate: data.upperDate})%></p>', "<% } else { %>", '<p class="free-shipping-text">', '<%=$.lang["DETAIL_notShipTo"]%> <%=data.whitherCountryName%>', '<span><%=$.lang["DETAIL_contactSeller"]%></span>', "</p>", "<% } %>", '<span class="public-arrow"></span>', "</a>"]
    }
});
define("tpl/detail/getShipCostAndWayListTpl", [], function() {
    return {
        main: "<% var data = obj; %>,<% if (data.list.length===1 && data.list[0].shipcost===-1) { %>,{{noArrive}},<% } else { %>,{{shipCostlist}},<% } %>".split(","),
        shipCostlist: ["<% var data = obj; %>", '<div class="layer-tit"><%=$.lang["DETAIL_chooseShippingMethod"]%></div>', '<div class="datail-free-route j-expressTypeListContent">', "<% for (var i = 0, len = data.list.length; i < len; i++) { %>", "<% if (data.selectExpressType && data.selectExpressType===data.list[i].expressType) { %>", '<div data-type="<%=data.list[i].expressType%>" class="free-route-text free-current-frame com-ripple-btn">', '<span class="activate-address-radio"></span>', '<div class="free-route-text-inne">', "<% } else { %>", '<div data-type="<%=data.list[i].expressType%>" class="free-route-text com-ripple-btn">', '<span class="activate-address-radio"></span>', '<div class="free-route-text-inne">', "<% } %>", "<% if (data.list[i].shipcost === 0) { %>", '<p><strong><%=$.lang["free_shipping"]%></strong> <%=data.list[i].expressType%></p>', "<% } else { %>", "<p><strong>$<%=data.list[i].shipcost%></strong> <%=data.list[i].expressType%></p>", "<% } %>", '<p><%=$.lang.replaceTplVar("DETAIL_deliveryTime", {deliveryTime: data.list[i].deliveryTime})%></p>', "</div></div>", "<% } %>", "</div>"],
        noArrive: ["<% var data = obj; %>", '<p class="datail-free-noroute"><span><%=$.lang["DETAIL_notShipTo"]%> <%=data.whitherCountryName%>.</span> <%=$.lang["DETAIL_contactSeller"]%>.</p>']
    }
});
define("tpl/detail/getShiptoCountryListTpl", [], function() {
    return {
        main: '<% var data = obj; %>,<div class="datail-country-layer close-layer2 dhm-hide j-shiptoCountryWarp">,<div class="product-title-top j-shiptoCountryClose com-ripple-btn"><a href="javascript:;"><span class="title-top-icon"></span><%=$.lang["DETAIL_country"]%></a></div>,<div class="country-content j-shiptoCountryContent">,{{countryList}},</div>,</div>'.split(","),
        countryList: ["<% var data = obj; %>", '<div class="layer-tit country-tit"><%=$.lang["DETAIL_popular"]%></div>', "<% $.each(data.popular, function(index, country){ %>", '<ul class="country-list">', "<% if (data.currentWhitherCountryId !== country.whitherCountryId) { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%></li>', "<% } else { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%><span></span></li>', "<% } %>", "</ul>", "<% }); %>", "<% $.each(data.all, function(letter, items){ %>", '<div class="layer-tit country-tit"><%=letter%></div>', '<ul class="country-list">', "<% $.each(items, function(index, country){ %>", "<% if (data.currentWhitherCountryId !== country.whitherCountryId) { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%></li>', "<% } else { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%><span></span></li>', "<% } %>", "<% }) %>", "</ul>", "<% }) %>"]
    }
});
define("tpl/detail/getShippingAddressListTpl", [], function() {
    return {
        main: '<% var data = obj; %>,<div class="datail-shipaddress-layer close-layer2 dhm-hide j-shippingAddressListWarp">,<div class="product-title-top j-shippingAddressClose com-ripple-btn"><a href="javascript:;"><span class="top-icon-warp"><span class="title-top-icon"></span></span><%=$.lang["DETAIL_shippingAddress"]%></a></div>,<div class="shippingAddress-content j-shippingAddressContent">,{{shippingAddressList}},</div>,</div>'.split(","),
        shippingAddressList: ["<% var data = obj; %>", '<ul class="shipaddress-list">', "<% for (var i = 0, len = obj.list.length; i < len; i++) { %>", '<li class="com-ripple-btn" data-whithercountryid="<%=obj.list[i].countryId%>" data-whitherCountryName="<%=obj.list[i].country%>" data-addressId="<%=obj.list[i].shippingInfoId%>">', "<p><%=obj.list[i].firstName%> <%=obj.list[i].lastName%></p>", "<p><%=obj.list[i].addressOne%> <%=obj.list[i].addressTwo%></p>", "<p><%=obj.list[i].city%>, <%=obj.list[i].state%> <%=obj.list[i].zipCode%></p>", "<p><%=obj.list[i].country%></p>", "<p><%=obj.list[i].telephone%></p>", '<% if (obj.list[i].vatnum !== "") { %>', "<p><%=obj.list[i].vatnum%></p>", "<% } %>", '<% if (obj.list[i].defaultAddress === "1") { %>', "<span></span>", "<% } %>", "</li>", "<% } %>", "</ul>"]
    }
});
define("tpl/detail/productAttrPopupTpl", [], function() {
    return {
        main: '<div class="datail-product-attributes j-datail-product-attributes close-layer1 dhm-hide">;<div class="product-title-top j-product-title-top com-ripple-btn">{{title}}</div>;<div class="product-img j-product-img">;<dl>;<dt class="j-productPicture">{{productPicture}}</dt>;<dd class="j-priceRange"></dd>;</dl>;</div>;<div class="selectOption-scroll j-selectOption-scroll">;<div class="j-selectSkuAttrOption"></div>;<div class="j-priceRangeWarp"></div>;</div>;<section class="datail-btn2 j-confirm">{{confirm}}</section>;</div>'.split(";"),
        title: ['<a href="javascript:;" rel="nofollow"><span class="title-top-icon"></span><%=$.lang["DETAIL_selectOptions"]%></a>'],
        productPicture: ["<% var data = obj; %>", '<img src="<%=data.thumbListFirst%>"/>'],
        confirm: '<% var data = obj; %>,<% if (data.promoTypeId === 2 || data.promoTypeId === 3) { %>,<% var inventory = data.maxPurchaseQuantity;%>,<% } else { %>,<% var inventory = data.inventoryQuantity;%>,<% } %>,<% if (btnType === "select") { %>,<% if (data.istate === false || inventory === 0 || data.isShipto === false) { %>,<% if (data.isOneKey !== "y") { %>,<div class="butnow butnow-sold"><a href="javascript:;" rel="nofollow" class="sold"><%=$.lang["DETAIL_buyitNow"]%></a></div>,<div class="addtocart addtocart-sold"><a href="javascript:;" rel="nofollow" class="sold"><%=$.lang["DETAIL_addtoCart"]%></a></div>,<% } else { %>,<a href="javascript:;" rel="nofollow" class="sold"><%=$.lang["DETAIL_continue"]%></a>,<% } %>,<% } else { %>,<% if (data.isOneKey !== "y") { %>,<div class="butnow j-buyItNow com-ripple-btn"><a href="javascript:;" rel="nofollow"><%=$.lang["DETAIL_buyitNow"]%></a></div>,<div class="addtocart j-addToCart com-ripple-btn"><a href="javascript:;" rel="nofollow"><%=$.lang["DETAIL_addtoCart"]%></a></div>,<% } else { %>,<a href="javascript:;" rel="nofollow" class="j-onekeyContinue com-ripple-btn"><%=$.lang["DETAIL_continue"]%></a>,<% } %>,<% } %>,<% } else if (btnType === "buy") { %>,<% if (data.istate === false || inventory === 0 || data.isShipto === false) { %>,<a href="javascript:;" rel="nofollow" class="sold"><%=$.lang["DETAIL_confirm"]%></a>,<% } else { %>,<a href="javascript:;" rel="nofollow" class="j-buyItNow com-ripple-btn"><%=$.lang["DETAIL_confirm"]%></a>,<% } %>,<% } else if (btnType === "cart") { %>,<% if (data.istate === false || inventory === 0 || data.isShipto === false) { %>,<a href="javascript:;" rel="nofollow" class="sold"><%=$.lang["DETAIL_confirm"]%></a>,<% } else { %>,<a href="javascript:;" rel="nofollow" class="j-addToCart com-ripple-btn"><%=$.lang["DETAIL_confirm"]%></a>,<% } %>,<% } else if (btnType === "onekey") { %>,<% if (data.istate === false || inventory === 0 || data.isShipto === false) { %>,<a href="javascript:;" rel="nofollow" class="sold"><%=$.lang["DETAIL_continue"]%></a>,<% } else { %>,<a href="javascript:;" rel="nofollow" class="j-onekeyContinue com-ripple-btn"><%=$.lang["DETAIL_continue"]%></a>,<% } %>,<% } %>'.split(","),
        buyCart: '<% var data = obj;%>,<% if (data.promoTypeId === 2 || data.promoTypeId === 3) { %>,<% var inventory = data.maxPurchaseQuantity;%>,<% } else { %>,<% var inventory = data.inventoryQuantity;%>,<% } %>,<% if (data.istate === false || inventory === 0 || data.isShipto === false) { %>,<% if (data.isOneKey !== "y") { %>,<div class="butnow butnow-sold"><a href="javascript:;" rel="nofollow"><%=$.lang["DETAIL_buyitNow"]%></a></div>,<% } else { %>,<div class="butnow butnow-sold"><a href="javascript:;"><%=data.onekeyText%></a></div>,<% } %>,<div class="addtocart addtocart-sold"><a href="javascript:;" rel="nofollow"><%=$.lang["DETAIL_addtoCart"]%></a></div>,<% } else { %>,<% if (data.isOneKey !== "y") { %>,<div class="butnow j-buySelectSkuAttr com-ripple-btn" data-skupop="buy"><a href="javascript:;" rel="nofollow"><%=$.lang["DETAIL_buyitNow"]%></a></div>,<% } else { %>,<div class="butnow j-onekeySelectSkuAttr com-ripple-btn" data-skuPop="onekey"><a href="javascript:;"><%=data.onekeyText%></a></div>,<% } %>,<div class="addtocart j-cartSelectSkuAttr com-ripple-btn" data-skupop="cart"><a href="javascript:;" rel="nofollow"><%=$.lang["DETAIL_addtoCart"]%></a></div>,<% } %>'.split(","),
        bottomScrollBar: '<% var data = obj; %>,<% if (data.promoTypeId === 2 || data.promoTypeId === 3) { %>,<% var inventory = data.maxPurchaseQuantity;%>,<% } else { %>,<% var inventory = data.inventoryQuantity;%>,<% } %>,<% if (data.istate === false || inventory === 0 || data.isShipto === false) { %>,<% if (data.isOneKey !== "y") { %>,<a href="javascript:;" rel="nofollow" class="layer-bottom-but layer-bottom-notbuy"><%=$.lang["DETAIL_buyitNow"]%></a>,<% } else { %>,<a href="javascript:;" class="layer-bottom-but layer-bottom-notbuy"><%=data.onekeyText%></a>,<% } %>,<a href="javascript:;" rel="nofollow" class="layer-bottom-add layer-bottom-notbuy"><%=$.lang["DETAIL_addtoCart"]%></a>,<% } else { %>,<% if (data.isOneKey !== "y") { %>,<a href="javascript:;" rel="nofollow" class="layer-bottom-but j-buySelectSkuAttr com-ripple-btn" data-skupop="buy"><%=$.lang["DETAIL_buyitNow"]%></a>,<% } else { %>,<a href="javascript:;" class="layer-bottom-but j-onekeySelectSkuAttr com-ripple-btn" data-skupop="onekey"><%=data.onekeyText%></a>,<% } %>,<a href="javascript:;" rel="nofollow" class="layer-bottom-add j-cartSelectSkuAttr com-ripple-btn" data-skupop="cart"><%=$.lang["DETAIL_addtoCart"]%></a>,<% } %>'.split(",")
    }
});
define("tpl/detail/priceRangeTpl", [], function() {
    return {
        main: '<% var data = obj;%>,<div class="layer-tit"><%=$.lang["DETAIL_quantity"]%>:</div>,<div class="pro-number">,{{quantity}},<div class="j-quantityUnit clearfix">,{{quantityUnit}},</div>,<% if (data.isLimitPromo === true) { %>,{{limitPromoContent}},<% } %>,<div class="pro-table">,<div class="pro-table-tit"><%=$.lang["DETAIL_cheaperQuantity"]%></div>,{{arrtPriceRanges}},</div>,</div>,<% if (data.userType ==="C") { %>,<% if (data.priceRanges.length >3) { %>,<div class="options-less j-showMorePriceRang com-ripple-btn"><a href="javascript:;"><%=$.lang["DETAIL_tapForLowerPrice"]%><span></span></a></div>,<% } %>,<% } %>'.split(","),
        productPrice: '<% var data = obj;%>,<p class="pro-piece">,<b>US $<%=data.displayPrice%></b> / ,<% if (data.isLot === true) { %>, <%=$.lang["DETAIL_lot"]%> ,<span>(<%=data.lot%> <%=data.plural%> / <%=$.lang["DETAIL_lot"]%>)</span>,<% } else { %>,<%=data.measureName%>,<% } %>,</p>,<% if (data.isDeletePrice===true) { %>,<p class="pro-piece2">,<b">US $<%=data.deletePrice%></b> / ,<% if (data.isLot === true) { %>, <%=$.lang["DETAIL_lot"]%> ,<% } else { %>,<%=data.measureName%>,<% } %>,</p>,<% } %>,<p><%=data.inventoryQuantity%> <%=$.lang["DETAIL_inStock"]%></p>'.split(","),
        arrtPriceRanges: ["<% var data = obj, measureName; %>", "<% var userType = data.userType; %>", "<% if (data.isLot === true) { %>", '<% measureName = "Lot" %>', "<% } else { %>", "<% measureName = data.measureName %>", "<% } %>", "<% var discountPrice = data.priceRanges[0].discountPrice %>", "<% if (discountPrice > 0) { %>", '<table border="0" cellspacing="0" cellpadding="0">', "<% } else { %>", '<table border="0" cellspacing="0" cellpadding="0" class="pro-table-two">', "<% } %>", "<thead>", '<tr class="table-tit">', '<td class="tr1"><span><%=$.lang["DETAIL_qty"]%></span></td>', "<% if (discountPrice > 0) { %>", '<td class="tr2" colspan="2">', "<% if (data.isVip === true) { %>", '<%=$.lang["DETAIL_primePrice"]%> /<%=measureName%>', "<% } else { %>", '<%=$.lang["price"]%> /<%=measureName%>', "<% } %>", "</td>", "<% } else { %>", '<td class="tr2" colspan="2"><%=$.lang["price"]%> /<%=measureName%></td>', "<% } %>", "</tr>", "</thead>", "<tbody>", "<% for (var i = 0; i < data.priceRanges.length; i++) { %>", "<% if (i === 0) { %>", '<tr class="tr-current">', "<% } else { %>", '<% if (userType === "C") { %>', "<% if (i >=3) { %>", '<tr class="dhm-hide">', "<% } else { %>", "<tr>", "<% } %>", "<% } else { %>", "<tr>", "<% } %>", "<% } %>", "<td><%=data.priceRanges[i].numLowerLimit%>+</td>", "<% if (discountPrice <= 0) { %>", '<td class="td2 noLineThrough">US $<%=data.priceRanges[i].originalPrice.toFixed(2)%></td>', "<% } else { %>", '<td class="td2">US $<%=data.priceRanges[i].discountPrice.toFixed(2)%></td>', '<td class="td3">US $<%=data.priceRanges[i].originalPrice.toFixed(2)%></span></td>', "<% } %>", "</tr>", "<% } %>", "</tbody>", "</table>"],
        quantity: '<% var data = obj;%>,<% if (data.isLimitPromo === true) { %>,<% var inventory = data.maxPurchaseQuantity;%>,<% } else { %>,<% var inventory = data.inventoryQuantity;%>,<% } %>,<% if (data.istate === false || inventory === 0) { %>,<span class="pro-reduce pro-number-sold">-</span>,<input name="" type="text" class="pro-num pro-number-sold" maxlength="10" value="<%=data.minOrder%>" disabled="disabled">,<span class="pro-plus pro-number-sold">+</span>,<% } else { %>,<span class="pro-reduce j-pro-reduce pro-number-sold">-</span>,<input name="" type="number" class="pro-num j-pro-num" autocomplete="off" value="<%=data.minOrder%>">,<span class="pro-plus j-pro-plus com-ripple-btn">+</span>,<% } %>'.split(","),
        quantityUnit: '<span class="pro-text">,<% var data = obj;%>,<% if (data.isLot === true) { %>,<% if (data.minOrder > 1 || data.quantity > 1) { %>,<p> <%=$.lang["DETAIL_lots"]%> </p>,<% } else { %>,<p> <%=$.lang["DETAIL_lot"]%> </p>,<% } %>,(<%=$.lang["l_minOrder"]%>: ,<% if (data.minOrder > 1) { %>,<%=data.minOrder%> <%=$.lang["DETAIL_lots"]%>),<% } else { %>,<%=data.minOrder%> <%=$.lang["DETAIL_lot"]%>)</span>,<% } %>,<% } else { %>,<% if (data.minOrder > 1 || data.quantity > 1) { %>,<p><%=data.plural%></p>,<% } else { %>,<p><%=data.measureName%></p>,<% } %>,(<%=$.lang["l_minOrder"]%>: ,<% if (data.minOrder > 1) { %>,<%=data.minOrder%> <%=data.plural%>),<% } else { %>,<%=data.minOrder%> <%=data.measureName%>),<% } %>,<% } %>,</span>'.split(","),
        limitPromoContent: ["<% var data = obj;%>", '<p class="pro-prompt">', "<% if (data.isLot === true) { %>", "<% if (data.maxPurchaseQuantity > 1) { %>", '<%=$.lang.replaceTplVar("DETAIL_limitPromoContentLots", {maxPurchaseQuantity: data.maxPurchaseQuantity})%>', "<% } else { %>", '<%=$.lang.replaceTplVar("DETAIL_limitPromoContentLot", {maxPurchaseQuantity: data.maxPurchaseQuantity})%>', "<% } %>", "<% } else { %>", "<% if (data.maxPurchaseQuantity > 1) { %>", '<%=$.lang.replaceTplVar("DETAIL_limitPromoContentMeasures", {maxPurchaseQuantity: data.maxPurchaseQuantity,plural:data.plural})%>', "<% } else { %>", '<%=$.lang.replaceTplVar("DETAIL_limitPromoContentMeasure", {maxPurchaseQuantity: data.maxPurchaseQuantity,measureName:data.measureName})%>', "<% } %>", "<% } %>", "</p>"]
    }
});
define("tpl/detail/selectSkuAttrTpl", [], function() {
    return {
        selectSkuAttr: ["<% var data = obj;%>", "<% var dataAttrGroups = data.attrGroups%>", "<% for (var i = 0, len = dataAttrGroups.length; i < len; i++) { %>", '<div class="layer-tit"><%=dataAttrGroups[i].name%>:</div>', '<div class="options-list j-options-list" data-name="<%=encodeURIComponent(dataAttrGroups[i].name)%>">', "<ul>", "<% var dataAttr = dataAttrGroups[i].attrs%>", "<% for (var j = 0; j < dataAttr.length; j++) { %>", "<% var customSize = dataAttr[j].customSize%>", "<% if (dataAttr[j].imgUrl === undefined) { %>", '<li attr_id ="<%=dataAttr[j].id%>" class="j-skuAttr j-skuClick com-ripple-btn"><span><%=dataAttr[j].name%></span></li>', '<% } else if(customSize === "1") { %>', '<li class="options-custom current0 j-custom j-skuAttr j-skuClick com-ripple-btn" data-type="custom" attr_id ="<%=dataAttr[j].id %>" custom-img="<%=dataAttr[j].imgUrl%>" alt="Custom Made"><span class="j-customMade"><%=$.lang["DETAIL_customMade"]%></span> <span class="public-arrow"></span></li>', "<% } else { %>", '<li attr_id ="<%=dataAttr[j].id %>" class="j-skuAttr j-skuClick options-img com-ripple-btn"><span><img src="<%=dataAttr[j].imgUrl%>" alt="<%=dataAttr[j].name%>" /></span></li>', "<% } %>", "<% } %>", "</ul>", "</div>", "<% } %>"]
    }
});
define("tpl/detail/addtoCartTipTpl", [], function() {
    return {
        main: '<div class="elastic-box-Warp-new dhm-hide j-addtoCartTipWarp">,<div class="elastic-box-new">,<div class="elastic-text"><%=$.lang["DETAIL_addedToCart"]%>!</div>,<div class="elastic-close-new">,<a href="javascript:;" class="elastic-ok com-ripple-btn j-addtoCartTipClose"><%=$.lang["DETAIL_OK"]%></a>,<span class="elastic-tocart com-ripple-href j-addtoCartTipHref"><a href="/viewcart.do#mhp1601_cart"><%=$.lang["DETAIL_goTOCART"]%></a></span>,</div>,</div>,</div>,<div class="elastic-layer dhm-hide j-addtoCartTipMask"></div>'.split(",")
    }
});
define("tpl/detail/sample/sampleTpl", [], function() {
    return {
        main: ["<% var data = obj;%>", '<div class="datail-product-nayang j-sampleWarp close-layer1 dhm-hide">', '<div class="product-title-top j-sampleClose com-ripple-btn"><span class="top-icon-warp"><span class="title-top-icon"></span></span><%=$.lang["DETAIL_freeSample"]%></a></div>', '<div class="product-nayang">', '<div class="product-nayang-img"><img src="<%=data.imageSrc%>" /></div>', '<div class="product-nayang-list">', "<ul>", '<li class="nayang-piece"><%=$.lang["DETAIL_samplePrices"]%>: <%=data.samplePrice%> / <span><%=data.sampleMeasureName%></span></li>', "<% for (var i = 0, len = data.attrs.length; i < len; i++) { %>", "<% if (data.attrs[i].isImg !== true) { %>", "<li><%=data.attrs[i].attrGourpName%>: <span>[<%=data.attrs[i].attrValue%>]</span></li>", "<% } else { %>", '<li class="nayang-img"><%=data.attrs[i].attrGourpName%>: <span><img src="<%=data.attrs[i].attrValue%>" /></span></li>', "<% } %>", "<% } %>", "</ul>", "</div>", "</div>", '<div class="split-line"></div>', '<div class="datail-address-shipping j-sampleShipInfo com-ripple-btn">', "{{shipInfo}}", "</div>", '<div class="split-line"></div>', '<div class="datail-address-shipping j-sampleRuleBtn com-ripple-btn">', '<a href="javascript:;">', '<p class="datail-shippingcost"><%=$.lang["DETAIL_sampleRules"]%></p>', '<p class="datail-address-tip"><%=$.lang.replaceTplVar("DETAIL_orderConfirmation", {minPurchaseAmount: data.minPurchaseAmount,samplePrice:data.samplePrice})%>.', '<span class="public-arrow"></span>', "</a>", "</div>", '<div class="j-confirmWarp">{{confirmBtn}}</div>', "</div>"],
        shipInfo: ["<% var data = obj;%>", '<a href="javascript:;">', "<% if (data.shipcost >= 0) { %>", '<p class="datail-shippingcost"><%=$.lang["DETAIL_sampleShippingCost"]%>: <strong>', "<% if (data.shipcost > 0) { %>", "$<%=data.shipcost%>", "<% } else if (data.shipcost === 0) { %>", '<%=$.lang["free_shipping"]%>', "<% } %>", "</strong></p>", '<p class="datail-address-tip"><%=$.lang.replaceTplVar("DETAIL_toshipVia", {toPlace: data.whitherCountryName,expressType: data.expressType,lowerDate: data.lowerDate,upperDate: data.upperDate})%></p>', "<% } else { %>", '<p class="free-shipping-text">', '<%=$.lang["DETAIL_notShipTo"]%> <%=data.whitherCountryName%>', '<span><%=$.lang["DETAIL_contactSeller"]%></span>', "</p>", "<% } %>", '<span class="public-arrow"></span>', "</a>"],
        confirmBtn: '<% var data = obj;%>,<% if (data.shipcost >= 0) { %>,<section class="datail-btn j-sampleSubmit">,<div class="butnow com-ripple-btn"><a href="javascript:;"><%=$.lang["DETAIL_continue"]%></a></div>,</section>,<% } else { %>,<section class="datail-btn">,<div class="butnow addtocart-sold"><a href="javascript:;"><%=$.lang["DETAIL_continue"]%></a></div>,</section>,<% } %>'.split(",")
    }
});
define("tpl/detail/sample/sampleShipcostListTpl", [], function() {
    return {
        main: '<% var data = obj; %>,<div class="datail-product-free-layer close-layer3 dhm-hide j-sampleShipCostLayerWarp">,<div class="product-title-top j-sampleShipCostLayerClose com-ripple-btn">,<a href="javascript:;">,<span class="title-top-icon"></span>,<%=$.lang["DETAIL_shipping"]%>,</a>,</div>,<div class="j-sampleCurShipCostInfoWarp">,{{curShipCostInfo}},</div>,<div class="j-sampleWhitherCountryWarp">,{{curWhitherCountry}},</div>,<div class="datail-product-free-layer j-sampleExpressTypeListWarp">,{{shipCostlist}},</div>,</div>'.split(","),
        curShipCostInfo: ["<% var data = obj; %>", "<% if (data.shipcost >= 0) { %>", '<div class="datail-free-address">', "<% if (data.shipcost > 0) { %>", '<p class="free-address-piece">', '<b>$<%=data.shipcost%></b> <%=$.lang["DETAIL_shipping"]%>', "</p>", "<% } else if (data.shipcost === 0) { %>", '<p class="free-address-shipp">', '<b><%=$.lang["free_shipping"]%></b>', "</p>", "<% } %>", '<p class="free-address-address">', '<%=$.lang.replaceTplVar("DETAIL_fromTo", {fromPlace: data.stockCountryName,toPlace: data.whitherCountryName,expressType: data.expressType})%>', "<% if (data.leadingTime > 1) { %>", '<span><%=$.lang.replaceTplVar("DETAIL_shipsWithins", {leadingTime: data.leadingTime,lowerDate: data.lowerDate,upperDate: data.upperDate})%></span>', "<% } else { %>", '<span><%=$.lang.replaceTplVar("DETAIL_shipsWithin", {leadingTime: data.leadingTime,lowerDate: data.lowerDate,upperDate: data.upperDate})%></span>', "<% } %>", "</p>", "</div>", "<% } %>"],
        curWhitherCountry: '<% var data = obj; %>,<div class="datail-ships-to j-sampleWhitherCountryBtn com-ripple-btn">,<span class="ships-to-name"><%=$.lang["DETAIL_shipsto"]%></span>,<% if (data.shipcost >= 0) { %>,<span class="ships-to-states"><%=data.whitherCountryName%></span>,<% } else { %>,<span class="ships-to-states ships-to-red"><%=data.whitherCountryName%></span>,<% } %>,<span class="public-arrow"></span>,</div>'.split(","),
        shipCostlist: ["<% var data = obj; %>", "<% if (data.shipcost < 0) { %>", '<p class="datail-free-noroute"><span><%=$.lang["DETAIL_notShipTo"]%> <%=data.whitherCountryName%>.</span> <%=$.lang["DETAIL_contactSeller"]%>.</p>', "<% } else { %>", '<div class="layer-tit"><%=$.lang["DETAIL_chooseShippingMethod"]%></div>', '<div class="datail-free-route j-sampleExpressTypeListContent">', "<% for (var i = 0, len = data.list.length; i < len; i++) { %>", "<% if (data.selectExpressType && data.selectExpressType===data.list[i].expressType) { %>", '<div data-type="<%=data.list[i].expressType%>" class="free-route-text free-current-frame com-ripple-btn">', '<span class="activate-address-radio"></span>', '<div class="free-route-text-inne">', "<% } else { %>", '<div data-type="<%=data.list[i].expressType%>" class="free-route-text com-ripple-btn">', '<span class="activate-address-radio"></span>', '<div class="free-route-text-inne">', "<% } %>", "<% if (data.list[i].shipcost === 0) { %>", '<p><strong><%=$.lang["free_shipping"]%></strong> <%=data.list[i].expressType%></p>', "<% } else { %>", "<p><strong>$<%=data.list[i].shipcost%></strong> <%=data.list[i].expressType%></p>", "<% } %>", '<p><%=$.lang.replaceTplVar("DETAIL_deliveryTime", {deliveryTime: data.list[i].deliveryTime})%></p>', "</div></div>", "<% } %>", "</div>", "<% } %>"]
    }
});
define("tpl/detail/sample/sampleShiptoCountryListTpl", [], function() {
    return {
        main: '<% var data = obj; %>,<div class="datail-country-layer close-layer3 dhm-hide j-sampleShiptoCountryWarp">,<div class="product-title-top j-sampleShiptoCountryClose com-ripple-btn"><a href="javascript:;"><span class="title-top-icon"></span><%=$.lang["DETAIL_country"]%></a></div>,<div class="country-content j-sampleShiptoCountryContent">,{{countryList}},</div>,</div>'.split(","),
        countryList: ["<% var data = obj; %>", '<div class="layer-tit country-tit">Popular</div>', "<% $.each(data.popular, function(index, country){ %>", '<ul class="country-list">', "<% if (data.currentWhitherCountryId !== country.whitherCountryId) { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%></li>', "<% } else { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%><span></span></li>', "<% } %>", "</ul>", "<% }); %>", "<% $.each(data.all, function(letter, items){ %>", '<div class="layer-tit country-tit"><%=letter%></div>', '<ul class="country-list">', "<% $.each(items, function(index, country){ %>", "<% if (data.currentWhitherCountryId !== country.whitherCountryId) { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%></li>', "<% } else { %>", '<li class="com-ripple-btn" data-whitherCountryId="<%=country.whitherCountryId%>" data-whitherCountryName="<%=country.whitherCountryName%>"><%=country.whitherCountryName%><span></span></li>', "<% } %>", "<% }) %>", "</ul>", "<% }) %>"]
    }
});
define("tpl/detail/sample/sampleRulesTpl", [], function() {
    return {
        main: '<div class="datail-product-nayang close-layer3 dhm-hide j-sampleRulesWarp">;<div class="product-title-top j-sampleRulesClose com-ripple-btn"><span class="top-icon-warp"><span class="title-top-icon"></span></span><%=$.lang["DETAIL_sampleRules"]%></a></div>;<div class="product-nayang-text">;<p><%=$.lang["DETAIL_permitOneSamples"]%></p>;<p><%=$.lang["DETAIL_sampleFee"]%></p>;<p><%=$.lang["DETAIL_purchasedOnce"]%></p>;<p><%=$.lang["DETAIL_productSample"]%></p>;<p><%=$.lang["DETAIL_disputeSample"]%></p>;</div>;</div>'.split(";")
    }
});
define("tpl/detail/recommendedTpl", [], function() {
    return {
        main: ["<% var data = obj; %>", "{{title}}", '<div class="datail-pro-list">', "{{products}}", "</div>"],
        title: ['<h2 class="country-tit"><%=$.lang["Recommended_products"]%></h2>'],
        products: ["<% var data = obj; %>", "<% for (var i = 0, len = data.list.length, groupIndex = 0; i < len; i++) { %>", "<% if ((i+1)%2===1) { %>", "<% groupIndex += 1; %>", "<% if (groupIndex <= 4) { %>", "<ul>", "<% } else { %>", "<ul>", "<% } %>", "<% } %>", '<li class="com-ripple-href">', '<a rel="nofollow" href="<%=data.list[i].url%>">', '<div class="datail-pro-img">', '<img class="fade-in lazy" src="//css.dhresource.com/mobile/home/image/grey.png" data-original="<%=data.list[i].imageUrl%>" />', "</div>", '<% if (data.list[i].promoType === "1") { %>', '<p class="datail-pro-off"><%=$.lang.replaceTplVar("COMMON_Discount_0", {val: data.list[i].discount})%></p>', '<% } else if (data.list[i].promoType === "2") { %>', '<p class="datail-pro-off"><%=$.lang.replaceTplVar("COMMON_Discount_1", {val: data.list[i].discount})%></p>', "<% } %>", '<div class="datail-pro-name">', '<p class="datail-pro-piece"><%=data.list[i].curreny%><%=data.list[i].price%></p>', "</div>", "</a>", "</li>", "<% if ((i+1)%2!==1 || (i+1)===len) { %>", "</ul>", "<% } %>", "<% } %>"],
        recommendedMore: ["<% var data = obj; %>", "<% if (data.list.length > 8) { %>", '<div class="j-recommended-more"><a href="javascript:;" class="recommended-more com-ripple-btn" rel="nofollow"><%=$.lang["Show_more"]%></a></div>', "<% } %>"]
    }
});
define("tpl/detail/selectCouponTpl", [], function() {
    return {
        main: '<% var data = obj; %>,<div class="datail-selectcoupons-layer close-layer1 dhm-hide j-onekeySelectCouponWarp">,<div class="product-title-top j-onekeySelectCouponClose com-ripple-btn"><a href="javascript:;"><span class="top-icon-warp"><span class="title-top-icon"></span></span>Select Coupons</a></div>,<div class="onekeySelectCoupon-content j-onekeySelectCouponContent">,{{storeCouponList}},{{dhCouponList}},</div>,<div class="selectcoupons-button j-onekeySelectCouponApply com-ripple-btn"><a href="javascript:;">OK</a></div>,</div>'.split(","),
        storeCouponList: ["<% var data = obj; %>", "<% if (data.storeCouponList.length > 0) { %>", '<div class="datail-store-coupon-box">', '<div class="store-coupon-tit">Store coupons</div>', '<ul class="store-coupon-list">', "<% for (var i = 0, len = data.storeCouponList.length; i < len; i++) { %>", "<% if (data.storeCouponList[i].canUse === true) { %>", "<% if (data.storeCouponList[i].selected === true) { %>", '<li data-type="seller" class="current com-ripple-btn" data-couponcode="<%=data.storeCouponList[i].couponcode%>" data-orderAmo="<%=data.storeCouponList[i].orderAmo%>" data-amount="<%=data.storeCouponList[i].amount%>">', '<span data-type="y"></span>', "<% } else { %>", '<li class="com-ripple-btn" data-type="seller" data-couponcode="<%=data.storeCouponList[i].couponcode%>" data-orderAmo="<%=data.storeCouponList[i].orderAmo%>" data-amount="<%=data.storeCouponList[i].amount%>">', "<% } %>", "<% } else { %>", '<li data-type="seller" class="one-not-click" data-couponcode="<%=data.storeCouponList[i].couponcode%>" data-orderAmo="<%=data.storeCouponList[i].orderAmo%>" data-amount="<%=data.storeCouponList[i].amount%>">', "<% } %>", '<% if(data.storeCouponList[i].couponType === "8") { %>', '<% if(data.storeCouponList[i].plateForm === "0") { %>', '<var class="sAppCoupon">1st Order</var>', "<% } %>", "<% } %>", '<p class="coupon-US"><b>US $<%=data.storeCouponList[i].amount%> OFF</b>Orders over $<%=data.storeCouponList[i].orderAmo%></p>', '<p class="coupon-period">Validity Period: <%=obj.storeCouponList[i].startDate%> to <%=obj.storeCouponList[i].endDate%></p>', "</li>", "<% } %>", "<% if (data.isSellerApply === false) { %>", '<li class="current com-ripple-btn" data-type="seller" class="store-don" data-couponcode="-1" data-orderAmo="0" data-amount="0"><span data-type="y"></span>Don\'t apply store coupon.</li>', "<% } else { %>", '<li data-type="seller" class="store-don com-ripple-btn" data-couponcode="-1" data-orderAmo="0" data-amount="0">Don\'t apply store coupon.</li>', "<% } %>", "</ul>", "</div>", "<% } %>"],
        dhCouponList: ["<% var data = obj; %>", "<% if (data.dhCouponList.length > 0) { %>", '<div class="datail-store-coupon-box">', '<div class="store-coupon-tit">DH coupons</div>', '<ul class="store-coupon-list">', "<% for (var i = 0, len = data.dhCouponList.length; i < len; i++) { %>", "<% if (data.dhCouponList[i].canUse === true) { %>", "<% if (data.dhCouponList[i].selected === true) { %>", '<li class="current com-ripple-btn" data-type="dh" data-couponcode="<%=data.dhCouponList[i].couponcode%>" data-orderAmo="<%=data.dhCouponList[i].orderAmo%>" data-amount="<%=data.dhCouponList[i].amount%>">', '<span data-type="y"></span>', "<% } else { %>", '<li class="com-ripple-btn" data-type="dh" data-couponcode="<%=data.dhCouponList[i].couponcode%>" data-orderAmo="<%=data.dhCouponList[i].orderAmo%>" data-amount="<%=data.dhCouponList[i].amount%>">', "<% } %>", "<% } else { %>", '<li data-type="dh" class="one-not-click" data-couponcode="<%=data.dhCouponList[i].couponcode%>" data-orderAmo="<%=data.dhCouponList[i].orderAmo%>" data-amount="<%=data.dhCouponList[i].amount%>">', "<% } %>", '<p class="coupon-US"><b>US $<%=data.dhCouponList[i].amount%> OFF</b>Orders over $<%=data.dhCouponList[i].orderAmo%></p>', '<p class="coupon-period">Validity Period: <%=obj.dhCouponList[i].startDate%> to <%=obj.dhCouponList[i].endDate%></p>', '<% if(data.dhCouponList[i].type === "6") { %>', '<p class="coupon-period">Scope: Valid on specified products.</p>', "<% }else{ %>", "<% if(data.dhCouponList[i].allcategory === 1) { %>", '<p class="coupon-period">Scope: Valid on All Categories.</p>', "<% }else{ %>", '<p class="coupon-period">Scope: Valid on specified Categories.</p>', "<% } %>", "<% } %>", "</li>", "<% } %>", "<% if (data.isDhApply === false) { %>", '<li class="current com-ripple-btn" data-type="dh" class="store-don" data-couponcode="-1" data-orderAmo="0" data-amount="0"><span data-type="y"></span>Don\'t apply DH coupon.</li>', "<% } else { %>", '<li data-type="dh" class="store-don com-ripple-btn" data-couponcode="-1" data-orderAmo="0" data-amount="0">Don\'t apply DH coupon.</li>', "<% } %>", "</ul>", "</div>", "<% } %>"],
        pageCouponInfo: '<% var data = obj; %>,<a href="javascript:;">,<% if (data.sellerCouponInfo<=0 && data.dhCouponInfo<=0) { %>,<p class="use-coupon-text">Select Coupon</p>,<% } else { %>,<% if (data.sellerCouponInfo > 0) { %>,<p class="use-coupon-text2">Store Coupon: <strong>US $<%=data.sellerCouponInfo%></strong></p>,<% } else if (data.hasSellerCoupon === true) { %>,<p class="use-coupon-text2">Store Coupon: <strong>US $0</strong></p>,<% } %>,<% if (data.dhCouponInfo > 0) { %>,<p class="use-coupon-text2">DH Coupon: <strong>US $<%=data.dhCouponInfo%></strong></p>,<% } else if (data.hasDhCoupon === true) { %>,<p class="use-coupon-text2">DH Coupon: <strong>US $0</strong></p>,<% } %>,<% } %>,<span class="public-arrow"></span>,</a>'.split(",")
    }
});
define("tpl/detail/getTotalPriceTpl", [], function() {
    return {
        main: '<div class="elastic-box-Warp dhm-hide j-orderTotalWarp">;<div class="elastic-box">;<div class="elastic-title"><%=$.lang["DETAIL_totalCost"]%></div>;<div class="elastic-orderTotal j-orderTotalContent">;{{orderTotalInfo}};</div>;<span class="elastic-close j-orderTotalClose com-ripple-btn"><span class="elastic-close-inner com-ripple-btn"></span></span>;</div>;</div>;{{mask}}'.split(";"),
        pageOrderTotal: '<% var data = obj; %>,<p><%=$.lang["DETAIL_totalCost"]%>:</p>,<% if (obj.localTprice === "") { %>,<b><%=data.totalPrice%><span class="cost-icon"></span></b>,<% } else { %>,<b><%=data.localTprice%> (<%=data.totalPrice%>)<span class="cost-icon"></span></b>,<% } %>'.split(","),
        orderTotalInfo: '<% var data = obj; %>,<dl class="margin-bot">,<dt><%=$.lang["DETAIL_subtotal"]%>:</dt><dd><%=data.itemsSubtotal%></dd>,<% if (data.hasStoreDis === true) { %>,<dt>Store Discount:</dt><dd>-<%=data.orderSave%></dd>,<% } %>,<% if (data.hasCrossStoreDis === true) { %>,<dt>Multi-Tiered Discounts:</dt><dd>-<%=data.orderSave%></dd>,<% } %>,<% if (data.hasSellerCoupon === true) { %>,<dt>Store Coupon:</dt><dd>-<%=data.sellerCouponAmount%></dd>,<% } %>,<% if (data.hasDhCoupon === true) { %>,<dt>DH Coupon:</dt><dd>-<%=data.dhCouponAmount%></dd>,<% } %>,<dt><%=$.lang["DETAIL_shippingCost"]%>:</dt><dd><%=data.shippingCost%></dd>,</dl>,<dl><dt><%=$.lang["DETAIL_orderTotal"]%>:</dt><dd><b><%=data.totalPrice%></b></dd></dl>'.split(","),
        mask: ['<div class="elastic-layer dhm-hide j-orderTotalMask"></div>']
    }
});
define("tpl/detail/onekeyPayTpl", [], function() {
    return {
        main: '<div class="elastic-box-Warp dhm-hide j-onekeyPayWarp">;<div class="elastic-box">;<div class="elastic-title">CVV Information</div>;<div class="elastic-cvv">;<ul class="j-onekeyPayContent">{{cvvInfo}}</ul>;</div>;<span class="elastic-close j-onekeyPayClose"><span class="elastic-close-inner com-ripple-btn"></span></span>;</div>;</div>;{{mask}}'.split(";"),
        cvvInfo: ["<% var data = obj, __cardNo; %>", '<% __cardNo = data.cardNo.replace(/^\\d+(.*)/, "$1"); %>', '<li class="cvv-num"><p class="cvv-tip cvv-input-current dhm-hide j-cvvTip"></p><%=data.cardType%> <span><%=__cardNo%></span></li>', "<% if (data.expireDate) { %>", '<li class="cvv-num2">Expires <span><%=data.expireDate%></span></li>', "<% } %>", '<li class="cvv-input j-cvvInputWarp"><input class="j-cvvInput" name="payment.selGate.securityCode" type="number" value="" placeholder="CVV" /></li>', '<li class="cvv-button j-cvvConfirm com-ripple-btn"><a href="javascript:;">Confirm</a></li>'],
        mask: ['<div class="elastic-layer j-onekeyPayCvvMask"></div>']
    }
});
define("tpl/detail/customTpl", [], function() {
    return {
        customSizeMain: '<div class="datail-custom-product j-datail-custom-product close-layer3 dhm-hide">;<div class="product-title-top j-customProduct-title-top com-ripple-btn"><span class="top-icon-warp"><span class="title-top-icon"></span></span><%=$.lang["DETAIL_customMade"]%></div>;<div class="datail-custom-infoWarp j-datail-custom-infoWarp">;<div class="datail-custom-img">{{customAttribute}}</div>;<div class="datail-custom-info j-datail-custom-info">{{customInfo}}</div>;</div>;</div>'.split(";"),
        customAttribute: '<% var data = obj;%>,<div class="custom-product-textWarp">,<div class="custom-product-text">,<div class="custom-product-textinne">,<% if (data.directionList.length > 0) { %>,<% for (var i = 0; i < data.directionList.length; i++) { %>,<p><span></span><%=data.directionList[i]%></p>,<% } %>,<% } %>,</div>,</div>,</div>,<div class="custom-product-img j-custom-product-img"><img src="" alt="" /></div>'.split(","),
        customInfo: '<% var data = obj;%>,<div class="select-custom clearfix">,<span class="inch-select"><%=$.lang["DETAIL_Select"]%></span>,<ul class="inch-cm j-inch-cm">,<li class="current com-ripple-btn" data-type="Inch">Inch</li>,<li class="com-ripple-btn" data-type="CM">CM</li>,</ul>,<a href="javascript:;" class="j-history com-ripple-btn" data-type="noClosedHistory">{{customHistoryTit}}</a>,<div class="history-custom-Warp j-history-custom-Warp dhm-hide">,<div class="history-custom j-history-custom" data-type="noClosedHistory">,<ul>{{customHistory}}</ul>,</div>,<div class="history-sj"></div>,</div>,</div>,<div class="info-list-custom j-info-list-custom" data-type="Inch">,<div class="tips-custion j-tips-custion dhm-hide"><%=$.lang["DETAIL_enterNumbers"]%></div>,<ul>,<% for (var i = 0; i < data.list.length; i++) { %>,<li class="customInput j-customInput">,<input name="" type="number" placeholder="<%=data.list[i].stringSorrtVal%>-<%=data.list[i].attrvalCustomName%>" data-customName="<%=data.list[i].attrvalCustomName%>" data-attrvalCustomId ="<%=data.list[i].attrvalCustomId%>" class="j-input j-inputInch">,<span class="infto-text j-infto-text"><%=data.list[i].stringSorrtVal%>-<%=data.list[i].attrvalCustomName%></span>,<span class="infto-inch j-infto-inch">Inch</span>,</li>,<% } %>,<li class="list-custom-li4">,<textarea maxlength="150" rows="3" placeholder="<%=$.lang["DETAIL_leaveRemarks"]%>" class="j-customRemark j-customInchRemark"></textarea>,</li>,</ul>,<p class="errorRemark"></p>,<section class="datail-btn">{{inSubmit}}</section>,</div>,<div class="info-list-custom j-info-list-custom dhm-hide" data-type="CM">,<div class="tips-custion j-tips-custion dhm-hide"><%=$.lang["DETAIL_enterNumbers"]%></div>,<ul>,<% for (var i = 0; i < data.list.length; i++) { %>,<li class="customInput j-customInput">,<input name="" type="number" placeholder="<%=data.list[i].stringSorrtVal%>-<%=data.list[i].attrvalCustomName%>" data-customName="<%=data.list[i].attrvalCustomName%>" data-attrvalCustomId ="<%=data.list[i].attrvalCustomId%>" class="j-input j-inputCm">,<span class="infto-text j-infto-text"><%=data.list[i].stringSorrtVal%>-<%=data.list[i].attrvalCustomName%></span>,<span class="infto-inch j-infto-inch">CM</span>,</li>,<% } %>,<li class="list-custom-li4">,<textarea maxlength="150" rows="3" placeholder="<%=$.lang["DETAIL_leaveRemarks"]%>" class="j-customRemark  j-customCmRemark"></textarea>,</li>,</ul>,<p class="errorRemark"></p>,<section class="datail-btn">{{cmSubmit}}</section>,</div>'.split(","),
        customHistoryTit: ["<% var data = obj;%>", "<% if (data.historyList.length > 0) { %>", '<%=$.lang["DETAIL_autoFillFromHistory"]%>', "<% } %>"],
        customHistory: ["<% var data = obj;%>", "<% for (var i = 0; i < data.historyList.length; i++) { %>", '<li class="j-select-history com-ripple-btn" data-info="<%=encodeURIComponent(JSON.stringify({dataOid:data.historyList[i].oid,dataAttrCm:data.historyList[i].attrCm,dataUnit:data.historyList[i].unit}))%>" data-type="<%=data.historyList[i].unit%>"><%=data.historyList[i].attrDisp%><span></span></li>', "<% } %>"],
        inSubmit: ['<div class="butnow j-customSubmit com-ripple-btn" data-type="Inch"><a href="javascript:;"><%=$.lang["DETAIL_submit"]%></a></div>'],
        cmSubmit: ['<div class="butnow j-customSubmit com-ripple-btn" data-type="CM"><a href="javascript:;"><%=$.lang["DETAIL_submit"]%></a></div>']
    }
});
define("tpl/recommend/youMyLikeTpl", [], function() {
    return {
        main: '<div class="viewed1">;{{title}};<div class="pro-box">;<ul>;{{products}};</ul>;</div>;</div>'.split(";"),
        title: ["<% var data = obj; %>", '<div class="pro-tit"><%=data.blockTit%><span class="see-all com-ripple-href"><a rel="nofollow" href="/youmylike.html#mhp1601_youmylike-all"><%=$.lang["Home_seeAll"]%><span></span></a></span></div>'],
        products: ["<% var data = obj; %>", "<% for (var i = 0, len = data.list.length; i < len; i++) { %>", '<li class="com-ripple-href">', '<a rel="nofollow" href="<%=data.list[i].url%>">', '<div class="pro-img">', "<% if (/^1$|^6$/.test(data.list[i].promoType)) { %>", '<span class="off-ico2"><%=$.lang.replaceTplVar("COMMON_Discount_0", {val: data.list[i].discount})%></span>', "<% } else if (/^2$|^7$/.test(data.list[i].promoType)) { %>", '<span class="off-ico2"><%=$.lang.replaceTplVar("COMMON_Discount_1", {val: data.list[i].discount})%></span>', "<% } else if (/^4$|^8$/.test(data.list[i].promoType)) { %>", '<span class="off-ico2"><%=$.lang.replaceTplVar("COMMON_Discount_2", {val: data.list[i].discount})%></span>', "<% } else if (/^5$|^9$/.test(data.list[i].promoType)) { %>", '<span class="off-ico2"><%=$.lang.replaceTplVar("COMMON_Discount_3", {val: data.list[i].discount})%></span>', "<% } else if (/^3$|^11$/.test(data.list[i].promoType)) { %>", '<span class="off-ico2"><%=$.lang["COMMON_Discount_4"]%></span>', "<% } %>", '<img class="fade-in lazy" src="//css.dhresource.com/mobile/home/image/grey.png" data-original="<%=data.list[i].imageUrl%>" />', "</div>", '<div class="pro-text">', '<p class="pro-piece">', "<% if (/^6$|^7$|^8$|^9$|^10$|^11$/.test(data.list[i].promoType)) { %>", '<b class="mobile-deals"></b>', "<% } %>", "<%=data.list[i].curreny%><%=data.list[i].price%></p>", "</div>", "</a>", "</li>", "<% } %>"]
    }
});
define("tpl/recommend/youViewedTpl", [], function() {
    return {
        main: '<div class="viewed1 viewed-common">;{{title}};<div class="pro-box">;<ul>;{{products}};</ul>;</div>;</div>'.split(";"),
        title: ["<% var data = obj; %>", '<div class="pro-tit"><%=data.blockTit%></div>'],
        products: ["<% var data = obj; %>", "<% for (var i = 0, len = data.list.length; i < len; i++) { %>", '<li class="com-ripple-href">', '<a rel="nofollow" href="<%=data.list[i].url%><%=data.trackingPrefix%><%=i+1%>-9|null:01:<%=data.list[i].uuid%>">', '<div class="pro-img">', '<img class="fade-in lazy" src="//css.dhresource.com/mobile/home/image/grey.png" data-original="<%=data.list[i].imageUrl%>" />', "</div>", "</a>", "</li>", "<% } %>"]
    }
});
define("tpl/goTopTpl", [], function() {
    return ['<a class="the-top dhm-hide j-goTop" href="javascript:;"><span></span></a>']
});
define("common/config", ["tools/jquery.cookie"], function(l) {
    var h = (!1 === /https/i.test(location.protocol) ? "http://" : "https://") + location.hostname,
        f = function() {
            var b = h.match(/.+\.(es|pt|ru|fr|de|it|tr|mx|cl|pe|co)\..+/i) || "en";
            return $.isArray(b) ? b[1].replace(/mx|cl|pe|co/, "es") : b
        }(),
        m = /(A|a)ndroid/i.test(navigator.userAgent),
        e = function() {
            var b = navigator.userAgent;
            return /\d\.\d\.\d/.test(b) && null !== b.match(/\/(\d\.\d\.\d)/) && "4.0.2" < b.match(/\/(\d\.\d\.\d)/)[1] ? !0 : /version=\d\.\d\.\d/.test(b) && null !== b.match(/\/(version=(\d\.\d\.\d))/) && "4.0.2" < b.match(/\/(version=(\d\.\d\.\d))/)[2] ? !0 : !1
        };
    (function() {
        var b = {
            "access-html": /^https:\/\/m\.dhgate\.com\/(?:viewcart\.do|placeorder\/.+\.html|payment\/pay\.html).*/i
        };
        "en" === f.toLowerCase() && "app" !== $("body").attr("data-pageType") ? window.$.DH__ISCANTPWA__ = !0 : window.$.DH__ISCANTPWA__ = !1;
        if (!0 === window.$.DH__ISCANTPWA__ && "https:" === location.protocol && "serviceWorker" in navigator) {
            var a;
            b["access-html"].test(window.location.href) || (void 0 === $.cookie("__dh_pwa_a2hs_access__") ? a = 1 : (a = 1 * $.cookie("__dh_pwa_a2hs_access__"), isNaN(a) || a++), 3 <= a && (a = 3), $.cookie("__dh_pwa_a2hs_access__", a, {
                expires: 30,
                path: "/"
            }));
            location.search && /from=homescreen/i.test(location.search) && $.cookie("__dh_pwa_a2hs__", "y", {
                path: "/"
            });
            (function() {
                var a = $("body"),
                    c = $(".j-a2hs-warp");
                c[0] || (a.append('<div class="add-mainscreen j-a2hs-warp"><div class="add-box"><dl><dt></dt><dd>Top Discounts on Top Products!<br />Do you like follow us?<span>DHgate.com</span></dd></dl><span class="j-a2hs-no add-close com-ripple-btn"></span><div class="add-submit"><a href="javascript:;" class="j-a2hs-yes com-ripple-btn">YES, I LIKE IT</a></div></div></div>'), c = $(".j-a2hs-warp"));
                !b["access-html"].test(window.location.href) && "y" !== $.cookie("__dh_pwa_a2hs__") && void 0 === $.cookie("__dh_pwa_a2hs_will__") && "y" !== $.cookie("__dh_pwa_a2hs_install__") && void 0 !== $.cookie("__dh_pwa_a2hs_access__") && 3 <= 1 * $.cookie("__dh_pwa_a2hs_access__") && setTimeout(function() {
                    c.addClass("com-snackbar-active_1")
                }, 500);
                a.on("click", ".j-a2hs-no", function() {
                    (new Date).getTime();
                    var a = new Date;
                    a.setTime(a.getTime() + 3E5);
                    c.removeClass("com-snackbar-active_1");
                    $.cookie("__dh_pwa_a2hs_will__", "n", {
                        expires: a,
                        path: "/"
                    })
                });
                a.on("click", ".j-a2hs-yes", function() {
                    var b = {
                        message: "A2HS_will_yes",
                        url: {
                            u1: window.location.href,
                            u2: document.referrer,
                            u3: ""
                        },
                        localTime: (new Date).getTime()
                    };
                    c.removeClass("com-snackbar-active_1");
                    $.cookie("__dh_pwa_a2hs_will__", "y", {
                        expires: 7,
                        path: "/"
                    });
                    a.append('<div style="display:none;"><img src="' + h + "/mobileApiWeb/biz-FeedBack-log.do?client=wap&v=" + encodeURIComponent(JSON.stringify($.extend(!0, {}, b, {
                            custom: {
                                info: "YES, I LIKE IT."
                            }
                        }))) + '" style="width:1px; height:1px; border-style:none;" /></div>')
                })
            })();
            navigator.serviceWorker.register("/service-worker.js").then(function(a) {
                console.log("ServiceWorker registration successful with scope: ", a.scope);
                $.cookie("ref_d", "pwa-en", {
                    path: "/"
                });
                $("body").append('<div style="display:none;"><img src="https://secure.dhgate.com/track/clicklognew.jsp?t=1&v=1&pt=main&optype=Click_U0001&visitorid=' + $.cookie("vid") + "&userid=" + $.cookie("b2b_buyerid") + "&ref=" + encodeURIComponent(document.referrer) + "&u=" + encodeURIComponent(window.location.href) + "&site=wap&lang=en&loc=pwa-en&pos=succ&localtime=" + (new Date).getTime() + '" style="width:1px; height:1px; border-style:none;" /></div>');
                a.onupdatefound = function() {
                    var c = a.installing;
                    c.onstatechange = function() {
                        switch (c.state) {
                            case "installed":
                                navigator.serviceWorker.controller ? console.log("New or updated content is available.") : console.log("Content is now available offline!");
                                break;
                            case "redundant":
                                console.error("The installing service worker became redundant.")
                        }
                    }
                }
            })["catch"](function(a) {
                console.error("Error during service worker registration:", a);
                $("body").append('<div style="display:none;"><img src="https://secure.dhgate.com/track/clicklognew.jsp?t=1&v=1&pt=main&optype=Click_U0001&visitorid=' + $.cookie("vid") + "&userid=" + $.cookie("b2b_buyerid") + "&ref=" + encodeURIComponent(document.referrer) + "&u=" + encodeURIComponent(window.location.href) + "&site=wap&lang=en&loc=pwa-en&pos=fail&localtime=" + (new Date).getTime() + '" style="width:1px; height:1px; border-style:none;" /></div>')
            });
            var c = {
                message: "A2HS",
                url: {
                    u1: window.location.href,
                    u2: document.referrer,
                    u3: ""
                },
                localTime: (new Date).getTime()
            };
            window.addEventListener("beforeinstallprompt", function(a) {
                if (b["access-html"].test(window.location.href) || "y" !== $.cookie("__dh_pwa_a2hs_will__")) return a.preventDefault(), !1;
                a.userChoice.then(function(a) {
                    "dismissed" == a.outcome ? ($.cookie("__dh_pwa_a2hs_install__", "y", {
                            expires: 30,
                            path: "/"
                        }), window.ga && window.ga("send", "event", "MHP", "deny2desk"), $("body").append('<div style="display:none;"><img src="' + h + "/mobileApiWeb/biz-FeedBack-log.do?client=wap&v=" + encodeURIComponent(JSON.stringify($.extend(!0, {}, c, {
                                custom: {
                                    info: "User cancelled home screen install",
                                    __dh_pwa_a2hs_will__: $.cookie("__dh_pwa_a2hs_will__") || "undefined"
                                }
                            }))) + '" style="width:1px; height:1px; border-style:none;" /></div>')) : ($.cookie("__dh_pwa_a2hs_install__", "y", {
                            expires: 30,
                            path: "/"
                        }), window.ga && window.ga("send", "event", "MHP", "add2desk"), $("body").append('<div style="display:none;"><img src="' + h + "/mobileApiWeb/biz-FeedBack-log.do?client=wap&v=" + encodeURIComponent(JSON.stringify($.extend(!0, {}, c, {
                                custom: {
                                    info: "User added to home screen",
                                    __dh_pwa_a2hs_will__: $.cookie("__dh_pwa_a2hs_will__") || "undefined"
                                }
                            }))) + '" style="width:1px; height:1px; border-style:none;" /></div>'))
                })
            })
        }
        a = function() {
            var a = $("body"),
                c = $(".j-com-snackbar");
            "app" !== a.attr("data-pageType") && (c[0] || (a.append('<div class="j-com-snackbar com-snackbar com-snackbar-active" data-status="offline"><div class="com-snackbar-text">You are currently offline.</div></div>'), c = $(".j-com-snackbar")), navigator.onLine ? c.removeClass("com-snackbar-active") : c.addClass("com-snackbar-active"))
        };
        window.addEventListener("online", a, !1);
        window.addEventListener("offline", a, !1)
    })();
    (function() {
        var b = $.isArray(f) ? f[1] : f;
        $("body").on("click", "div.th13", function() {
            try {
                _dhq.push(["setVar", "pt", "main"]), _dhq.push(["setVar", "loc", "hammenu"]), _dhq.push(["setVar", "pos", "promport1710"]), _dhq.push(["setVar", "attach", ""]), _dhq.push(["setVar", "site", "wap"]), _dhq.push(["setVar", "lang", b]), _dhq.push(["event", "Click_U0001"])
            } catch (a) {}
        })
    })();
    return {
        isAndroid: m,
        preventClick: function() {
            var b = this.preventClick.$preventclick;
            m && (b ? b.show() : ($("body").append('<div id="preventclick" style="position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;"></div>'), this.preventClick.$preventclick = b = $("#preventclick")), setTimeout(function() {
                b.hide()
            }, 300))
        },
        isLocalStorageNameSupported: function() {
            try {
                if ("localStorage" in window && window.localStorage) return localStorage.setItem("__DH_LOCALSTORAGETEST__", 1), !0
            } catch (b) {
                return !1
            }
        },
        wwwURL: h,
        wwwPATHNAME: location.pathname,
        wwwHASH: location.hash,
        wwwSEARCH: location.search,
        countrys: {
            en: "English (EN)",
            es: "Espa\u00f1ol (ES)",
            pt: "Portugu\u00eas (PT)",
            ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (RU)",
            fr: "Fran\u00e7ais (FR)",
            de: "Deutsch (DE)",
            it: "Italiano (IT)",
            tr: "T\u00fcrk (TR)"
        },
        countryCur: f,
        version: "1511507410050",
        b2b_nick_n: $.cookie("b2b_nick_n"),
        b2b_buyer_lv: $.cookie("b2b_buyer_lv"),
        vid: $.cookie("vid"),
        b2b_cart_sid: $.cookie("b2b_cart_sid"),
        b2b_buyerid: $.cookie("b2b_buyerid"),
        isNewestApp: function() {
            var b = navigator.userAgent;
            return /i(P|p)hone(N|n)ative/i.test(b) && e() ? !0 : /(A|a)ndroid(N|n)ative/i.test(b) && e() ? !0 : !1
        }(),
        buyerType: function() {
            var b = $.cookie("bc"),
                a = "";
            "b|r" === b ? a = "Reseller" : "b|p" === b ? a = "Purchase for company" : "c|e" === b && (a = "End consumer");
            return a
        }()
    }
});
define("common/langLoader", ["common/config"], function(l) {
    $.langLoader = function() {};
    $.extend($.langLoader, {
        $el: $("body"),
        init: function() {
            window.dh_langLoader_instance || (window.$.langLoader.instance = new $.langLoader);
            return window.$.langLoader.instance
        },
        cache: null,
        flag: !1
    });
    $.extend($.langLoader.prototype, {
        add: function(h) {
            $.langLoader.$el.queue("langLoader", $.proxy(h, window))
        },
        run: function(h) {
            var f = $.langLoader.$el;
            if (!f.queue(h).length) return !1;
            f.dequeue(h);
            this.run(h)
        },
        get: function(h) {
            null !== $.langLoader.cache ? h() : this.add(h);
            $.langLoader.flag || $.ajax({
                type: "GET",
                url: "//js.dhresource.com/mobile_v2/common/lang/common_msg_" + l.countryCur + ".js?v=" + l.version,
                context: this,
                async: !0,
                cache: !0,
                dataType: "script",
                success: function(f) {
                    $.langLoader.cache = "y";
                    this.run("langLoader")
                }
            });
            $.langLoader.flag = !0
        }
    });
    return $.langLoader.init()
});
define("common/goBack", ["common/config"], function(l) {
    var h = function(f) {
        this.setOptions(f);
        this.$el = $("body");
        this.customReturnToUrl = this.options.customReturnToUrl;
        this.mPathnameSearchUrlReg = new RegExp(l.wwwPATHNAME + l.wwwSEARCH, "i");
        this.initEvent()
    };
    $.extend(h, {
        init: function(f) {
            window.dh_GoBack_instance || (window.dh_GoBack_instance = new h(f));
            f && f.customReturnToUrl && (window.dh_GoBack_instance.customReturnToUrl = f.customReturnToUrl);
            return window.dh_GoBack_instance
        }
    });
    $.extend(h.prototype, {
        setOptions: function(f) {
            this.options = {
                customReturnToUrl: null
            };
            $.extend(this.options, f || {})
        },
        initEvent: function() {
            this.$el.on("click", ".j-common-back", $.proxy(this.returnToUrl, this))
        },
        returnToUrl: function() {
            var f = document.referrer,
                h = null;
            setTimeout($.proxy(function() {
                f && /dhgate\.com/i.test(f) ? (/\/viewcart\.do/i.test(l.wwwPATHNAME) ? h = this.cartBack(f) : /\/placeorder\/placeOrder\.html/i.test(l.wwwPATHNAME) && (h = this.placeOrderBack(f)), _.isFunction(this.customReturnToUrl) ? this.customReturnToUrl() : _.isNumber(h) ? -1 === h ? window.history.back() : window.history.go(h) : _.isString(h) ? window.location.href = h : window.location.href = l.wwwURL) : window.location.href = l.wwwURL
            }, this), 200)
        },
        cartBack: function(f) {
            return this.mPathnameSearchUrlReg.test(f) && !/returnURL=/i.test(f) ? l.wwwURL : /\/login\.do|\/register\.do/i.test(f) ? -3 : -1
        },
        placeOrderBack: function(f) {
            return this.mPathnameSearchUrlReg.test(f) && !/returnURL=/i.test(f) ? l.wwwURL : /\/login\.do|\/register\.do/i.test(f) ? -2 : -1
        }
    });
    return h
});
define("common/serverTime", ["common/config"], function(l) {
    return {
        get: function(h) {
            $.ajax({
                type: "GET",
                url: "https://m.dhgate.com/buyertime.do",
                async: !0,
                cache: !1,
                dataType: "jsonp",
                success: h
            })
        }
    }
});
define("common/appopen", ["common/config", "tools/deeplink", "tools/jquery.cookie"], function(l, h, f) {
    return {
        init: function(f) {
            this.setOptions(f);
            this.dRoot = this.options.dRoot;
            this.cOpenBtn = this.options.cOpenBtn;
            this.Deeplink = this.options.Deeplink;
            this.set_timer = this.options.set_timer;
            this.iOS = this.options.iOS;
            this.android = this.options.android;
            this.downloadUrl = this.options.downloadUrl;
            this.schemeUrl = this.options.schemeUrl;
            this.entrance = this.options.entrance;
            this.config = {};
            this.paramsObj = {};
            this.initElement();
            this.initEvent()
        },
        setOptions: function(f) {
            this.options = {
                dRoot: "body",
                cOpenBtn: ".j-openApp",
                entrance: null,
                set_timer: null,
                iOS: {
                    appId: "905869418",
                    appName: "DHgate",
                    storeUrl: "https://app.appsflyer.com/id905869418?pid=WAP-top"
                },
                android: {
                    appId: "com.dhgate.buyermob",
                    appName: "DHgate",
                    storeUrl: "https://m.dhgate.com/common/download.html"
                },
                downloadUrl: "https://m.dhgate.com/common/download.html",
                schemeUrl: "DHgate.Buyer://virtual",
                Deeplink: h
            };
            $.extend(!0, this.options, f || {})
        },
        initElement: function() {
            this.$dRoot = this.$dRoot || $(this.dRoot);
            this.$cOpenBtn = $(this.cOpenBtn)
        },
        initEvent: function() {
            this.setSchemeUrl();
            this.entrance && (this.downloadUrl = this.downloadUrl + "?entrance=" + this.entrance, this.android.storeUrl = this.android.storeUrl + "?entrance=" + this.entrance);
            "Maindirect" === this.entrance && (this.iOS.storeUrl = "https://app.appsflyer.com/id905869418?pid=WAP&c=Hbmenu");
            this.openAppMethod()
        },
        getThirdPartyCookie: function() {
            var f = $.cookie("ref_f");
            f && (this.paramsObj.d1code = f + "_wap")
        },
        setSchemeUrl: function() {
            -1 != this.schemeUrl.indexOf("params") ? (this.paramsObj = JSON.parse(this.schemeUrl.split("=")[1]), this.schemeUrl = this.schemeUrl.split("=")[0].split("?")[0]) : this.paramsObj.des = "home";
            "itemDetail" === this.$dRoot.attr("data-pagetype") && (this.des = this.$dRoot.attr("data-pagetype"), this.itemcode = window.location.pathname.match(/(\d+).html/)[1], this.paramsObj = {
                des: this.des,
                itemcode: this.itemcode
            });
            this.getThirdPartyCookie();
            $.isEmptyObject(this.paramsObj) || (this.params = JSON.stringify(this.paramsObj), this.schemeUrl = this.schemeUrl + "?params=" + this.params)
        },
        configParam: function() {
            if (this.Deeplink.isIOS()) return this.config = {
                iOS: this.iOS
            };
            if (this.Deeplink.isAndroid()) return this.config = {
                android: this.android,
                fallback: !0
            }
        },
        directDowload: function() {
            var f = this;
            this.Deeplink.isAndroid() && (this.set_timer = setTimeout(function() {
                var e = Date.now();
                if (!f.startTime || 1700 > e - f.startTime) window.location = f.downloadUrl
            }, 1500), window.onblur = function() {
                clearTimeout(f.set_timer);
                self.set_timer = null
            })
        },
        openAppMethod: function() {
            this.startTime = Date.now();
            this.configParam();
            this.Deeplink.setup(this.config);
            this.directDowload();
            this.Deeplink.open(this.schemeUrl);
            return !1
        }
    }
});
define("common/appSpread", "common/config tools/jquery.cookie tpl/appSpreadTpl tools/fastclick common/appopen lib/underscore".split(" "), function(l, h, f, m, e, b) {
    return {
        init: function(a) {
            this.setOptions(a);
            this.dRoot = this.options.dRoot;
            this.cHeaderWarp = this.options.cHeaderWarp;
            this.cDhApp = this.options.cDhApp;
            this.androidStore = this.options.androidStore;
            this.iosStore = this.options.iosStore;
            this.cHide = this.options.cHide;
            this.cOpenBtn = this.options.cOpenBtn;
            this.cCloseBtn = this.options.cCloseBtn;
            this.tpl = this.options.tpl;
            this.cookieName = this.options.cookieName;
            this.localName = this.options.localName;
            this.FastClick = this.options.FastClick;
            this.Appopen = this.options.Appopen;
            this.gaCallback = this.options.gaCallback;
            this.renderCallback = this.options.renderCallback;
            this.closeCallback = this.options.closeCallback;
            this.activityLogo = this.options.activityLogo;
            this.initElement();
            this.initEvent();
            this.render()
        },
        setOptions: function(a) {
            this.options = {
                dRoot: "#J_appBanner",
                cHeaderWarp: ".j-headerWarp",
                androidStore: "http://download.dhgate.com/mobile/dhgate_buyer.apk",
                iosStore: "https://itunes.apple.com/us/app/dhgate-shop-smart-shop-direct/id905869418?l=zh&ls=1&mt=8",
                cHide: "dhm-hide",
                cOpenBtn: ".j-openApp",
                cCloseBtn: ".j-closeApp",
                tpl: b.template(f.join(""))({}),
                cookieName: "DHMAppSpreadBanner",
                localName: "DHMAppBannerNew",
                activityLogo: ".j-activityLogo",
                FastClick: m,
                Appopen: e,
                gaCallback: $.noop,
                renderCallback: $.noop,
                closeCallback: $.noop
            };
            $.extend(this.options, a || {})
        },
        initElement: function() {
            this.$dRoot = $(this.dRoot);
            this.$cHeaderWarp = $(this.cHeaderWarp);
            this.$cCloseBtn = $(this.cCloseBtn);
            this.$cOpenBtn = $(this.cOpenBtn);
            this.$body = this.$body || $("body");
            this.$activityLogo = $(this.activityLogo)
        },
        initEvent: function() {
            this.$body.on("click", this.cOpenBtn, $.proxy(this.openApp, this));
            this.$body.on("click", this.cCloseBtn, $.proxy(this.closeTip, this))
        },
        isIphoneOrAndroid: function() {
            var a = navigator.userAgent;
            return /(A|a)ndroid/i.test(a) ? "android" : /i(P|p)hone/i.test(a) ? "iphone" : /i(P|p)ad/i.test(a) ? "ipad" : !1
        },
        setCookie: function(a) {
            $.cookie(this.cookieName, a, {
                path: "/"
            })
        },
        getCookie: function() {
            return $.cookie(this.cookieName)
        },
        setItem: function(a) {
            l.isLocalStorageNameSupported() && localStorage.setItem(this.localName, a)
        },
        getItem: function() {
            if (l.isLocalStorageNameSupported()) return localStorage.getItem(this.localName)
        },
        openApp: function(a) {
            this.isIphoneOrAndroid();
            a = $(a.currentTarget).attr("data-entrance") || "";
            this.Appopen.init({
                entrance: a
            });
            this.gaCallback()
        },
        closeTip: function() {
            this.$dRoot.addClass(this.cHide);
            this.closeCallback && this.closeCallback();
            this.setItem(1);
            l.preventClick()
        },
        jump: function(a) {
            window.location = a
        },
        getAccessTimes: function() {
            var a = this.getItem();
            a || (a = 4, this.setItem("4"));
            this.getCookie() || (this.setItem(3 > a ? ++a : 4), this.setCookie("1"));
            return a
        },
        render: function() {
            "y" !== $.cookie("__dh_pwa_a2hs__") && (this.$cHeaderWarp[0] && !this.$dRoot[0] && (this.$body.prepend('<div id="J_appBanner"></div>'), this.initElement()), !this.isIphoneOrAndroid() || 4 > this.getAccessTimes() || (this.$dRoot.html(this.tpl).removeClass(this.cHide), this.renderCallback && this.renderCallback(), this.initElement(), "en" !== l.countryCur && this.$activityLogo.removeClass("activityLogo"), this.$cOpenBtn[0] && this.FastClick.attach(this.$cOpenBtn[0]), this.$cCloseBtn[0] && this.FastClick.attach(this.$cCloseBtn[0])))
        }
    }
});
define("common/header/EDMConfirmEmail", ["common/config", "lib/backbone", "checkoutflow/popupTip", "tpl/header/topMenuInitTpl"], function(l, h, f, m) {
    var e = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                data: ""
            }
        },
        initialize: function(b, a) {
            this.setOptions(a);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(b) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/home-Common-sendConfirmEDMEmail.do",
                    type: "GET",
                    data: {
                        version: 1,
                        client: "wap"
                    },
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, b || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(b, a, c) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, c || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, c))
        },
        parse: function(b) {
            var a = {};
            a.code = "0x0000" === b.state ? 200 : -1; - 1 !== a.code && (a.result = b.data);
            return a
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-confirmEmail a": "sendConfirmEDMEmail"
        },
        initialize: function(b) {
            this.setOptions(b);
            this.cAutoLayer = this.options.cAutoLayer;
            this.cHide = this.options.cHide;
            this.model = this.options.model;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.initEvent();
            this.initElement()
        },
        setOptions: function(b) {
            this.options = {
                cAutoLayer: ".j-auto-layer",
                cHide: "dhm-hide",
                model: new e,
                template: _.template,
                tpl: m
            };
            $.extend(!0, this.options, b || {})
        },
        initEvent: function() {
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        initElement: function() {
            this.$body = this.$body || $("body");
            this.$cAutoLayer = $(this.cAutoLayer)
        },
        success: function(b, a, c) {
            if (200 === b.get("code")) this.render(b.attributes);
            else try {
                throw "success(): data is wrong";
            } catch (g) {}
        },
        error: function() {
            try {
                throw "error(): request is wrong";
            } catch (b) {}
        },
        messageTips: function() {
            var b = this;
            f.events.trigger("popupTip:autoTip", {
                callback: function() {
                    b.$cAutoLayer.removeClass(b.cHide).animate({
                        opacity: 1
                    }, 1200);
                    setTimeout(function() {
                        b.$cAutoLayer.animate({
                            opacity: 0
                        }, 1200, function() {
                            b.$cAutoLayer.addClass(b.cHide)
                        })
                    }, 3E3)
                }
            })
        },
        render: function(b) {
            b = this.template(this.tpl.needEDMEmailConfirmTips.join(""))(b);
            this.$cAutoLayer[0] ? this.$cAutoLayer.html(b) : this.$body.append('<div class="autoLayer j-auto-layer dhm-hide">' + b + "</div>");
            this.initElement();
            this.setAutoLayerStyle();
            this.messageTips()
        },
        setAutoLayerStyle: function() {
            this.$cAutoLayer.css({
                "margin-top": -parseInt(1 * this.$cAutoLayer.outerHeight() / 2)
            })
        },
        sendConfirmEDMEmail: function() {
            this.model.fetch()
        }
    })
});
define("common/header/buyerUserInfo", ["common/config", "tools/jquery.cookie", "lib/underscore"], function(l, h, f) {
    h = function(f) {
        this.setOptions(f);
        this.url = l.wwwURL + this.options.api.url;
        this.param = this.options.api.param;
        this.successAfter = this.options.successAfter;
        this.fetch()
    };
    $.extend(h.prototype, {
        setOptions: function(f) {
            this.options = {
                api: {
                    url: "/logodata.do",
                    param: {}
                },
                successAfter: $.noop
            };
            $.extend(!0, this.options, f || {})
        },
        fetch: function() {
            $.ajax({
                type: "GET",
                url: this.url,
                async: !0,
                cache: !1,
                dataType: "json",
                data: this.param,
                context: this,
                success: function(f) {
                    if ("object" === typeof f) this.setUserName(l.b2b_nick_n), this.setHearCategoryBtnState(f.cartnum, f.msgnum), this.setCartSum(f.cartnum), this.setMessageSum(f.msgnum), this.setConfirmEmail(f.needEDMEmailConfirm);
                    else try {
                        throw "success(): data is wrong";
                    } catch (e) {}
                },
                error: function() {
                    try {
                        throw "error(): request is wrong";
                    } catch (m) {}
                }
            })
        },
        setCartSum: function(h) {
            var e = $("#cartnum"),
                b = $(".j-cartnum");
            f.isNumber(1 * h) && !isNaN(1 * h) && (0 < 1 * h && e.find(".j-cartnum").html(h).show(), b[0] && b.html(h))
        },
        setMessageSum: function(h) {
            var e = $(".j-messagenum");
            f.isNumber(1 * h) && !isNaN(1 * h) && e[0] && e.html(h)
        },
        setUserName: function(f) {
            var e = "",
                b = $("#J_logined");
            f && "string" === typeof f && (e += "<p>" + $.lang.Head_not + " " + f + "? <a class=\"j-header-signout\" href=\"/signout.do\" onclick=\"javascript:ga('send', 'event', 'MHP', 'Sign out-bottom')\">" + $.lang.sign_out + "</a></p>", b[0] && b.html(e))
        },
        setConfirmEmail: function(f) {
            var e = $(".j-confirmEmail");
            f && e[0] && e.removeClass("dhm-hide")
        },
        setHearCategoryBtnState: function(h, e) {
            var b = $(".j-headCategoryBtn");
            if (!f.isNumber(1 * h) || isNaN(1 * h)) h = 0;
            if (!f.isNumber(1 * e) || isNaN(1 * e)) e = 0;
            (0 < h || 0 < e) && b.append("<span></span>")
        }
    });
    return h
});
define("common/header/hotKeyWord", ["common/config", "lib/backbone", "tpl/header/hotKeyWordTpl", "checkoutflow/dataErrorLog"], function(l, h, f, m) {
    var e = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: []
            }
        },
        initialize: function(b, a) {
            this.setOptions(a);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(b) {
            this.options = {
                ajaxOptions: {
                    url: "/getrelatedsearchwords.do",
                    type: "GET",
                    async: !0,
                    cache: !1,
                    dataType: "json",
                    processData: !0
                }
            };
            $.extend(!0, this.options, b || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(b, a, c) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, c || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, c))
        },
        parse: function(b) {
            return {
                code: "10001" === b.code ? 200 : -1,
                list: b.data
            }
        }
    });
    return h.View.extend({
        el: "#J_searchList",
        initialize: function(b) {
            this.setOptions(b);
            this.template = this.options.template;
            this.model = this.options.model;
            this.cActive = this.options.cActive;
            this.cHide = this.options.cHide;
            this.dataErrorLog = this.options.dataErrorLog;
            this.cache = null;
            this.initEvent()
        },
        initEvent: function() {
            this.on("render", this.load, this);
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        setOptions: function(b) {
            this.options = {
                cActive: "search-hot",
                cHide: "dhm-hide",
                template: _.template(f.join("")),
                model: new e,
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, b || {})
        },
        load: function() {
            this.cache ? this.render() : this.model.fetch()
        },
        success: function(b, a, c) {
            if (200 === b.get("code")) this.render(this.tplRender());
            else try {
                throw "success(): data is wrong";
            } catch (g) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: g,
                    url: this.model.__params.url,
                    params: this.model.__params.data,
                    result: a
                })
            }
        },
        error: function(b, a, c) {
            try {
                throw "error(): request is wrong";
            } catch (g) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: g,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        tplRender: function() {
            return this.cache = this.template(this.model.attributes)
        },
        render: function(b) {
            this.$el.html(b || this.cache).addClass(this.cActive).removeClass(this.cHide)
        }
    })
});
define("common/header/recentKeyWord", ["common/config", "lib/underscore", "tpl/header/recentKeyWordTpl", "tools/fastclick"], function(l, h, f, m) {
    var e = function(b) {
        this.setOptions(b);
        this.dRoot = this.options.dRoot;
        this.cHide = this.options.cHide;
        this.cCloseBtn = this.options.cCloseBtn;
        this.FastClick = this.options.FastClick;
        this.localName = this.options.localName;
        this.localValue = this.getItem(this.localName);
        this.events = $({});
        this.template = this.options.template;
        this.init()
    };
    $.extend(e.prototype, {
        setOptions: function(b) {
            this.options = {
                localName: "DHMSearchData",
                dRoot: "#J_searchList",
                cHide: "dhm-hide",
                cCloseBtn: ".j-historyClose",
                template: h.template(f.join("")),
                FastClick: m
            };
            $.extend(!0, this.options, b || {})
        },
        init: function(b) {
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$dRoot = this.$dRoot || $(this.dRoot);
            this.$cCloseBtn = $(this.cCloseBtn)
        },
        initEvent: function() {
            this.$dRoot.on("click", this.cCloseBtn, {
                name: this.localName
            }, $.proxy(this.clearItem, this));
            this.events.on("render", $.proxy(this.render, this));
            this.events.on("addItem", $.proxy(this.addItem, this))
        },
        parse: function() {
            var b = this.toArray(this.getItem(this.localName));
            return {
                code: 0 < b.length ? 200 : -1,
                list: 7 < b.length ? b.splice(7) : b
            }
        },
        toArray: function(b) {
            return "string" === typeof b ? h.uniq(b.match(/[^-]+/g) || []) : []
        },
        getItem: function(b) {
            if (l.isLocalStorageNameSupported()) return localStorage.getItem(b)
        },
        addItem: function(b, a) {
            var c = this.localName,
                g = this.toArray(this.getItem(c)),
                k = $.inArray(a, g);
            g.splice(k, -1 < k ? 1 : 0);
            g.unshift(a);
            7 < g.length && g.splice(7);
            a = g.join("-");
            if (l.isLocalStorageNameSupported()) return localStorage.setItem(c, a)
        },
        clearItem: function(b) {
            delete this.localValue;
            localStorage.removeItem(b.data.name);
            this.close()
        },
        render: function() {
            var b = this.parse();
            200 === b.code ? this.$dRoot.html(this.template(b)).removeClass(this.cHide) : this.close();
            this.initElement();
            this.FastClick.attach(this.$cCloseBtn[0])
        },
        close: function() {
            this.$dRoot.addClass(this.cHide).html("")
        }
    });
    return e
});
define("common/header/suggest", ["common/config", "lib/backbone", "tpl/header/suggestTpl", "tools/fastclick", "checkoutflow/dataErrorLog"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: [{
                    key: "",
                    cid: "",
                    cateName: "",
                    labelList: [{
                        labelName: "",
                        labelValue: ""
                    }]
                }]
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/search-Search-suggest.do",
                    type: "GET",
                    dataType: "Json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {};
            c.code = "0x0000" === a.state ? 200 : -1;
            c.list = []; - 1 !== c.code && a.data && a.data.resultList && $.each(a.data.resultList, function(a, b) {
                var g = {};
                g.key = b.key;
                g.cid = b.cid;
                g.cateName = b.cateName;
                g.labelList = b.labelList;
                c.list.push(g)
            });
            return c
        }
    });
    return h.View.extend({
        el: "#J_searchList",
        events: {
            "click .j-searchlistClose": "close"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cCloseBtn = this.options.cCloseBtn;
            this.cHide = this.options.cHide;
            this.cHot = this.options.cHot;
            this.dSearchInput = this.options.dSearchInput;
            this.template = this.options.template;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.FastClick = this.options.FastClick;
            this.cache = {};
            this.initEvent();
            this.initElement();
            this.setKey()
        },
        initEvent: function() {
            this.on("render", this.load, this);
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        initElement: function() {
            this.$body = this.body || $("body");
            this.$cCloseBtn = $(this.cCloseBtn);
            this.$dSearchInput = $(this.dSearchInput)
        },
        setOptions: function(a) {
            this.options = {
                cCloseBtn: ".j-searchlistClose",
                cHide: "dhm-hide",
                cHot: "search-hot",
                dSearchInput: "#J_searchInput",
                template: _.template(f.join("")),
                model: new b,
                FastClick: m,
                dataErrorLog: new e({
                    flag: !1,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, a || {})
        },
        getParam: function(a) {
            return $.param(a.data || a)
        },
        load: function(a) {
            void 0 === this.cache[this.getParam(a)] ? this.model.fetch(a) : this.render(null, this.getParam(a))
        },
        success: function(a, c, b) {
            if (200 === a.get("code")) this.render(this.tplRender(this.getParam(b.data)), null);
            else try {
                throw "success(): data is wrong";
            } catch (k) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: k,
                    url: this.model.__params.url,
                    params: this.model.__params.data,
                    result: c
                })
            }
        },
        error: function(a, c, b) {
            try {
                throw "error(): request is wrong";
            } catch (k) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: k,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        tplRender: function(a) {
            return this.cache[a] = this.template(this.model.attributes)
        },
        render: function(a, c) {
            var b = c ? this.cache[c] : "";
            a || b ? this.$el.html(a || b).removeClass(this.cHide).removeClass(this.cHot) : this.close();
            this.initElement();
            this.$cCloseBtn[0] && this.FastClick.attach(this.$cCloseBtn[0])
        },
        close: function() {
            this.$el.addClass(this.cHide).html("")
        },
        getUrlParam: function(a) {
            for (var c = location.href, c = c.substring(c.indexOf("?") + 1, c.length).split("&"), b = {}, k = 0, e; e = c[k]; k++) b[e.substring(0, e.indexOf("=")).toLowerCase()] = e.substring(e.indexOf("=") + 1, e.length);
            a = b[a.toLowerCase()];
            return "undefined" == typeof a ? "" : a.replace(/(.+)#.*/, "$1").replace(/\+/g, " ")
        },
        setKey: function() {
            this.getUrlParam("key");
            var a = this.$body.attr("data-keyword") || "";
            "" !== a ? (this.$dSearchInput.addClass("inputtext"), this.$dSearchInput.val(decodeURIComponent(a))) : this.$dSearchInput.removeClass("inputtext")
        }
    })
});
define("common/header/topSearch", ["common/config", "common/header/recentKeyWord", "common/header/hotKeyWord", "common/header/suggest", "tools/fastclick"], function(l, h, f, m, e) {
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-topSearchBtn": "jumpSearch",
            "click #J_searchList ul li": "selectKeyWord",
            "focus #J_searchInput": "defaultSuggest",
            "click #J_searchBtn": "showSearchLayyer",
            "keyup #J_searchInput": "querySuggest",
            "click #J_searchList .j-suggetAttrList": "selectAttr",
            "click #J_searchCl": "close",
            "click #J_searchDel": "deleteText"
        },
        initialize: function(b) {
            this.setOptions(b);
            this.recentKeyWord = this.options.recentKeyWord;
            this.hotKeyWord = this.options.hotKeyWord;
            this.suggest = this.options.suggest;
            this.cHtml = this.options.cHtml;
            this.cSearch = this.options.cSearch;
            this.cSectionActive = this.options.cSectionActive;
            this.cSearchWarp = this.options.cSearchWarp;
            this.dSearchInput = this.options.dSearchInput;
            this.cNormal = this.options.cNormal;
            this.cActive = this.options.cActive;
            this.cInputText = this.options.cInputText;
            this.dSearchList = this.options.dSearchList;
            this.cHide = this.options.cHide;
            this.cSearchfixedShadow = this.options.cSearchfixedShadow;
            this.cSearchKey = this.options.cSearchKey;
            this.dCloseBtn = this.options.dCloseBtn;
            this.dDeleteBtn = this.options.dDeleteBtn;
            this.dSearchBtn = this.options.dSearchBtn;
            this.cCateId = this.options.cCateId;
            this.cTagName = this.options.cTagName;
            this.cSchtypeId = this.options.cSchtypeId;
            this.FastClick = this.options.FastClick;
            this.timer = null;
            this.initElement();
            this.initEvent()
        },
        setOptions: function(b) {
            this.options = {
                recentKeyWord: new h,
                hotKeyWord: new f,
                suggest: new m,
                cHtml: "dhm-htmlOverflow",
                cSearch: "#J_search",
                cSectionActive: "section-active",
                cSearchWarp: ".j-search-box",
                dSearchInput: "#J_searchInput",
                cNormal: "search-mar0",
                cActive: "search-mar",
                cInputText: "inputtext",
                dSearchList: "#J_searchList",
                cHide: "dhm-hide",
                dCloseBtn: "#J_searchCl",
                dDeleteBtn: "#J_searchDel",
                dSearchBtn: "#J_searchBtn",
                cTagName: "#tagId",
                cSearchfixedShadow: ".j-searchfixedShadow",
                cCateId: "#cateId",
                cSearchKey: ".j-searchKey",
                cSchtypeId: "#schtypeId",
                FastClick: e
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$html = $("html");
            this.$window = $(window);
            this.$body = this.body || $("body");
            this.$cSearch = $(this.cSearch);
            this.$cSearchWarp = $(this.cSearchWarp);
            this.$cSearchfixedShadow = $(this.cSearchfixedShadow);
            this.$dSearchInput = $(this.dSearchInput);
            this.$dSearchList = $(this.dSearchList);
            this.$dCloseBtn = $(this.dCloseBtn);
            this.$dDeleteBtn = $(this.dDeleteBtn);
            this.$dSearchBtn = $(this.dSearchBtn);
            this.$cCateId = $(this.cCateId);
            this.$cTagName = $(this.cTagName);
            this.$cSchtypeId = $(this.cSchtypeId)
        },
        initEvent: function() {
            var b = this,
                a = this.timer;
            this.$dCloseBtn[0] && this.FastClick.attach(this.$dCloseBtn[0]);
            this.$dDeleteBtn[0] && this.FastClick.attach(this.$dDeleteBtn[0]);
            this.$dSearchBtn[0] && this.FastClick.attach(this.$dSearchBtn[0]);
            this.$window.on("orientationchange", function() {
                a && clearTimeout(a);
                a = setTimeout(function() {
                    b.setSearchItemListStyle()
                }, 500)
            });
            this.setPlacehoder()
        },
        setPlacehoder: function() {
            this.$dSearchInput.attr("placeholder", $.lang.Head_shoppingFor)
        },
        jumpSearch: function() {
            this.recentKeyWord.events.trigger("addItem", [$.trim(this.$dSearchInput.val())]);
            setTimeout($.proxy(function() {
                this.$cSearch.find("form").submit()
            }, this), 200)
        },
        selectKeyWord: function(b) {
            var a = $(b.currentTarget);
            b = a.attr("data-key").replace(/<\/?[^>]*>/g, "");
            a = a.find(".j-cateName");
            submitUrl = this.$cSearch.find("form").attr("action");
            a.length ? (this.$cCateId.val(a.attr("data-cid")), this.$cSchtypeId.val("ss2")) : this.$cSchtypeId.val("ss1");
            this.$dSearchInput.val(b);
            this.jumpSearch()
        },
        selectAttr: function(b) {
            var a = $(b.currentTarget),
                c = a.attr("data-attrName"),
                a = a.closest("li").attr("data-key").replace(/<\/?[^>]*>/g, "");
            this.$cTagName.val(c);
            this.$cSchtypeId.val("ss3");
            this.$dSearchInput.val(a + " " + c);
            b.stopPropagation();
            this.jumpSearch()
        },
        setSearchStyle: function(b) {
            b ? (this.$html.addClass(this.cHtml), this.$cSearch.addClass(this.cSectionActive), this.$dCloseBtn.removeClass("dhm-hide"), this.$cSearchWarp.removeClass(this.cNormal).addClass(this.cActive), this.$dSearchInput.addClass(this.cInputText)) : (this.resetSearchList(), this.$dCloseBtn.addClass("dhm-hide"), this.$cSearchWarp.removeClass(this.cActive).addClass(this.cNormal), this.$html.removeClass(this.cHtml), this.$cSearch.removeClass(this.cSectionActive), "" === $.trim(this.$dSearchInput.val()) ? this.$dSearchInput.removeClass(this.cInputText) : !1, this.$dSearchInput[0].blur())
        },
        setDeleteStyle: function(b) {
            b ? this.$dDeleteBtn.removeClass(this.cHide) : this.$dDeleteBtn.addClass(this.cHide)
        },
        setSearchItemListStyle: function() {
            var b = this.$dSearchList.find("ul"),
                a, c = 1 * this.$window.height(),
                g = 0;
            b[0] && (a = b.siblings(), $.each(a, function(a, c) {
                g += 1 * $(c).outerHeight()
            }), a = b.parent().siblings(), $.each(a, function(a, c) {
                g += 1 * $(c).outerHeight()
            }), b.css({
                height: c - g
            }))
        },
        resetSearchList: function() {
            this.$dSearchList.addClass(this.cHide).html("")
        },
        defaultSuggest: function(b) {
            var a = this.recentKeyWord,
                c = this.hotKeyWord,
                g = this.suggest;
            b = $(b.target);
            this.setSearchStyle(!0);
            this.addMaskLayyer();
            this.$cSearchfixedShadow.removeClass("dhm-hide");
            "" === $.trim(b.val()) ? a.localValue ? a.events.trigger("render") : c.trigger("render") : g.trigger("render", this.getParam(b))
        },
        addMaskLayyer: function() {
            this.$cSearchfixedShadow[0] || (this.$body.append('<div class="j-searchfixedShadow dhm-hide" style="position:fixed;width:100%;height:100%;bottom:0;z-index:92;background:transparent;"></div>'), this.$cSearchfixedShadow = $(".j-searchfixedShadow"))
        },
        showSearchLayyer: function() {
            setTimeout($.proxy(function() {
                this.$cSearch.removeClass("dhm-hide").addClass("fadeIn");
                this.$dSearchInput.trigger("focus");
                l.preventClick()
            }, this), 200)
        },
        querySuggest: function(b) {
            b = $(b.target);
            "" !== b.val() ? this.setDeleteStyle(!0) : this.setDeleteStyle(!1);
            this.suggest.trigger("render", this.getParam(b))
        },
        getParam: function(b) {
            return {
                data: {
                    key: $.trim(b.val()),
                    cid: "",
                    client: "wap"
                }
            }
        },
        close: function(b) {
            setTimeout($.proxy(function() {
                this.$cSearchfixedShadow.addClass("dhm-hide");
                this.setSearchStyle(!1);
                this.$dSearchBtn[0] && this.$cSearch.addClass("dhm-hide").removeClass("fadeIn");
                l.preventClick()
            }, this), 200)
        },
        deleteText: function() {
            this.$dSearchInput.val("");
            this.setDeleteStyle(!1);
            this.resetSearchList()
        }
    })
});
define("common/header/topMenuInit", ["common/config", "lib/backbone", "tpl/header/topMenuInitTpl", "tools/fastclick"], function(l, h, f, m) {
    var e = h.Model.extend({
        defaults: function() {
            return {
                code: 200,
                list: {
                    cartSum: 0,
                    messageSum: 0,
                    needEDMEmailConfirm: !1,
                    nickName: l.b2b_nick_n,
                    lang: l.countrys[l.countryCur].replace(/([^ ]+).*/, "$1")
                }
            }
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-headCategoryBtn": "show",
            "click .j-fixedShadow": "hide",
            "touchmove .j-fixedShadow": "hide"
        },
        initialize: function(b) {
            this.setOptions(b);
            this.cHtml = this.options.cHtml;
            this.cCategoryWarp = this.options.cCategoryWarp;
            this.cMenuInitScroll = this.options.cMenuInitScroll;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.cMenuOpenBtn = this.options.cMenuOpenBtn;
            this.cLanguageBtn = this.options.cLanguageBtn;
            this.cCategoryOneOpen = this.options.cCategoryOneOpen;
            this.cfixedShadow = this.options.cfixedShadow;
            this.model = this.options.model;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.FastClick = this.options.FastClick;
            this.timer = null;
            this.initElement();
            this.initEvent();
            this.render()
        },
        setOptions: function(b) {
            this.options = {
                cHtml: "dhm-htmlOverflow",
                cCategoryWarp: ".j-categoryWarp",
                cMenuInitScroll: ".j-menuInitScroll",
                cHide: "dhm-hide",
                cAnimateHide: "categoryWarp-close",
                cAnimateShow: "categoryWarp-open",
                cMenuOpenBtn: ".j-headCategoryBtn",
                cLanguageBtn: "#J_language",
                cCategoryOneOpen: ".j-categoryOneOpen",
                cfixedShadow: ".j-fixedShadow",
                model: new e,
                template: _.template,
                tpl: f,
                FastClick: m
            };
            $.extend(this.options, b || {})
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cCategoryWarp = this.$cCategoryWarp || $(this.cCategoryWarp);
            this.$cMenuOpenBtn = this.$cMenuOpenBtn || $(this.cMenuOpenBtn);
            this.$cMenuInitScroll = $(this.cMenuInitScroll);
            this.$cLanguageBtn = $(this.cLanguageBtn);
            this.$cCategoryOneOpen = $(this.cCategoryOneOpen);
            this.$cfixedShadow = $(this.cfixedShadow)
        },
        initEvent: function() {
            var b = this,
                a = this.timer;
            this.listenTo(this.model, "change", this.render);
            this.$cMenuOpenBtn[0] && this.FastClick.attach(this.$cMenuOpenBtn[0]);
            this.$window.on("orientationchange", function() {
                a && clearTimeout(a);
                a = setTimeout(function() {
                    b.setMenuInitStyle()
                }, 500)
            })
        },
        setMenuInitStyle: function() {
            var b = this.$cMenuInitScroll,
                a, c = 1 * this.$window.height(),
                g = 0;
            b[0] && (a = b.siblings(), $.each(a, function(a, c) {
                g += 1 * $(c).outerHeight()
            }), b.css({
                height: c - g
            }))
        },
        render: function() {
            var b = this.tpl,
                a = $.extend(!0, {}, this.model.attributes, {
                    list: {
                        site: l.countryCur
                    }
                }),
                c = b.warp.join(""),
                g = this.template(b.notLogin.join(""))(a),
                k = this.template(b.isLogin.join(""))(a),
                e = this.template(b.entranceOne.join(""))(a),
                f = this.template(b.entranceTwo.join(""))(a),
                a = this.template(b.entranceThree.join(""))(a),
                b = b.fixedShadow.join(""),
                c = c.replace(/\{\{notLogin\}\}/, g).replace(/\{\{isLogin\}\}/, k).replace(/\{\{entranceOne\}\}/, e).replace(/\{\{entranceTwo\}\}/, f).replace(/\{\{entranceThree\}\}/, a);
            this.$cCategoryWarp.html(c);
            this.$body.append(b);
            this.initElement();
            this.$cLanguageBtn[0] && this.FastClick.attach(this.$cLanguageBtn[0]);
            this.$cCategoryOneOpen[0] && this.FastClick.attach(this.$cCategoryOneOpen[0])
        },
        show: function() {
            var b = this.$cCategoryWarp,
                a = this.cHide,
                c = this.cAnimateHide,
                g = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.$html.addClass(this.cHtml);
                b.removeClass(a);
                this.$cfixedShadow.removeClass(a);
                setTimeout(function() {
                    b.removeClass(c).addClass(g)
                }, 10);
                this.setMenuInitStyle()
            }, this), 200);
            try {
                _dhq.push(["setVar", "pt", "main"]), _dhq.push(["setVar", "loc", "hammenu"]), _dhq.push(["setVar", "pos", "menu"]), _dhq.push(["setVar", "attach", ""]), _dhq.push(["setVar", "site", "wap"]), _dhq.push(["setVar", "lang", l.countryCur]), _dhq.push(["event", "Click_U0001"])
            } catch (k) {}
        },
        hide: function() {
            var b = this.$cCategoryWarp,
                a = this.cHide,
                c = this.cAnimateHide,
                g = this.cAnimateShow;
            this.$html.removeClass(this.cHtml);
            this.$cfixedShadow.addClass(a);
            b.removeClass(g).addClass(c);
            setTimeout(function() {
                b.addClass(a)
            }, 260);
            l.preventClick()
        }
    })
});
define("common/header/turnToLanguagesWebsite", ["common/config", "lib/underscore", "tpl/header/turnToLanguagesWebsiteTpl", "tools/fastclick"], function(l, h, f, m) {
    return {
        init: function(e) {
            this.setOptions(e);
            this.wwwURL = this.options.wwwURL;
            this.wwwPATHNAME = this.options.wwwPATHNAME;
            this.wwwHASH = this.options.wwwHASH;
            this.wwwSEARCH = this.options.wwwSEARCH;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.dRoot = this.options.dRoot;
            this.cLanguageWarp = this.options.cLanguageWarp;
            this.cLanguages = this.options.cLanguages;
            this.cLanguageBtn = this.options.cLanguageBtn;
            this.cLanguageCancel = this.options.cLanguageCancel;
            this.cLanguageShadow = this.options.cLanguageShadow;
            this.FastClick = this.options.FastClick;
            this.initElement();
            this.initEvent();
            this.render()
        },
        setOptions: function(e) {
            this.options = {
                wwwURL: l.wwwURL,
                wwwPATHNAME: l.wwwPATHNAME,
                wwwHASH: l.wwwHASH,
                wwwSEARCH: l.wwwSEARCH,
                template: h.template,
                tpl: f,
                dRoot: "body",
                cHide: "dhm-hide",
                cAnimateHide: "languageWarp-close",
                cAnimateShow: "languageWarp-open",
                cLanguageWarp: ".j-languageWarp",
                cLanguages: "#J_languageCont ul li",
                cLanguageBtn: "#J_language",
                cLanguageCancel: ".j-languageCancel",
                cLanguageShadow: "#J_shadow",
                FastClick: m
            };
            $.extend(this.options, e || {})
        },
        initElement: function() {
            this.$body = this.body || $("body");
            this.$dRoot = this.$dRoot || $(this.dRoot);
            this.$cLanguageWarp = this.$cLanguageWarp || $(this.cLanguageWarp);
            this.$cLanguageShadow = $(this.cLanguageShadow);
            this.$cLanguageCancel = $(this.cLanguageCancel)
        },
        initEvent: function() {
            this.$dRoot.on("click", this.cLanguageBtn, $.proxy(this.show, this));
            this.$dRoot.on("click", this.cLanguageCancel, $.proxy(this.hide, this));
            this.$dRoot.on("click", this.cLanguages, $.proxy(this.setSelected, this));
            this.$body.on("click", this.cLanguageShadow, $.proxy(this.hide, this))
        },
        setDefaultItem: function(e) {
            var b = new RegExp('<li><a href="' + this.wwwURL, "i");
            return e = b.test(e) ? e.replace(b, '<li data-flag="y"><span></span><a href="') : e.replace(/<li><a href="[^"]+/, '<li data-flag="y"><span></span><a href="')
        },
        setUrl: function(e) {
            var b = this.wwwPATHNAME,
                a = this.wwwSEARCH,
                c = this.wwwHASH;
            return e = e.replace(/href="(?:http|https)([^"]+)/gi, function(g) {
                return g + b + a + c
            })
        },
        render: function() {
            var e = this.tpl,
                b = this.template(e.warp.join(""))({}),
                a = this.setUrl(this.setDefaultItem(e.list.join(""))),
                e = e.shadow.join(""),
                b = b.replace(/\{\{list\}\}/, a);
            this.$cLanguageWarp.html(b);
            this.$body.append(e);
            this.initElement();
            this.$cLanguageCancel[0] && this.FastClick.attach(this.$cLanguageCancel[0]);
            this.$cLanguageShadow[0] && this.FastClick.attach(this.$cLanguageShadow[0])
        },
        show: function(e) {
            var b = this.$cLanguageWarp,
                a = this.cHide,
                c = this.cAnimateHide,
                g = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.$cLanguageShadow.removeClass(a);
                b.removeClass(a);
                setTimeout(function() {
                    b.removeClass(c).addClass(g)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        hide: function() {
            var e = this.$cLanguageWarp,
                b = this.cHide,
                a = this.cAnimateHide,
                c = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.$cLanguageShadow.addClass(b);
                e.removeClass(c).addClass(a);
                setTimeout(function() {
                    e.addClass(b)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        setSelected: function(e) {
            e = $(e.currentTarget);
            e.siblings('[data-flag="y"]').find("span").remove();
            e.attr("data-flag", "y").append("<span></span>");
            this.jump(e.find("a").attr("href"))
        },
        jump: function(e) {
            location.href = e
        }
    }
});
define("common/login/loginValidate", ["common/config", "common/login/loginThirdParty"], function(l, h) {
    var f, m, e, b, a, c, g, k, n = /^\s+$/,
        t = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/,
        r = /^([a-zA-Z0-9_\-])+(\.([a-zA-Z0-9_\-])+)*@((\[(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5])))\.(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5])))\.(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5])))\.(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5]))\]))|((([a-zA-Z0-9])+(([\-])+([a-zA-Z0-9])+)*\.)+([a-zA-Z])+(([\-])+([a-zA-Z0-9])+)*))$/,
        x = /^\S{6,30}$/,
        q = /^(Reseller|Company Purchaser|Consumer)$/;
    return {
        init: function(n) {
            this.setOptions(n);
            g = $.lang.LOGIN_emailRequired;
            k = $.lang.LOGIN_IncorrectEmailAddress;
            b = $.lang.LOGIN_passwordRequired;
            a = $.lang.LOGIN_6_30_characters;
            c = $.lang.LOGIN_passwordNotmatch;
            m = $.lang.LOGIN_chooseOption;
            e = $.lang.LOGIN_businessError;
            f = $.lang.LOGIN_verifyCodeError;
            this.$el = $(this.options.el);
            this.formItemWarp = this.options.formItemWarp;
            this.formItem = this.options.formItem;
            this.registerPwd = this.options.registerPwd;
            this.pageRegisterPwd = this.options.pageRegisterPwd;
            this.usertypeItem = this.options.usertypeItem;
            this.usertypeList = this.options.usertypeList;
            this.initEvent();
            return this
        },
        setOptions: function(a) {
            this.options = {
                el: "body",
                formItemWarp: ".mdl-textfield",
                formItem: ".j-login-item",
                usertypeItem: ".j-register-usertype-item",
                usertypeList: ".j-register-usertype-list",
                registerPwd: "#registerPassword",
                pageRegisterPwd: "#pageRegisterPassword"
            };
            $.extend(!0, this.options, a || {})
        },
        initEvent: function() {
            this.$el.on("focus", ".j-login-item", $.proxy(this.isFocus, this));
            this.$el.on("blur", ".j-login-item", $.proxy(this.isBlur, this));
            this.$el.on("keyup change", ".j-login-item", $.proxy(this.isKeyup, this));
            this.$el.on("click", ".j-register-usertype-warp", $.proxy(this.openUserType, this));
            this.$el.on("click", ".j-popup-loginWarp", $.proxy(this.closeUserType, this));
            this.$el.on("click", ".j-register-usertype-list", $.proxy(this.selectUserType, this))
        },
        isFocus: function(a) {
            $(a.currentTarget).closest(this.formItemWarp).addClass("is-focused")
        },
        isBlur: function(e) {
            var h = $(e.currentTarget);
            e = h.closest(this.formItemWarp);
            e.removeClass("is-focused");
            var m = h.attr("data-validate"),
                h = $.trim(h.val()),
                l = e.find(".mdl-textfield__error"),
                d = !1;
            "email1" === m ? "" === h || n.test(h) ? d = l.html(g) : t.test(h) || (d = l.html(k)) : "email2" === m ? "" === h || n.test(h) ? d = l.html(g) : r.test(h) || (d = l.html(k)) : "pwd1" === m ? "" === h || n.test(h) ? d = l.html(b) : x.test(h) || (d = l.html(a)) : "pwd2" === m ? "" === h || n.test(h) ? d = l.html(b) : x.test(h) ? h !== $.trim((this.$registerPwd = this.$registerPwd || $(this.registerPwd)).val()) && (d = l.html(c)) : d = l.html(a) : "pwd3" === m ? "" === h || n.test(h) ? d = l.html(b) : x.test(h) ? h !== $.trim((this.$pageRegisterPwd = this.$pageRegisterPwd || $(this.pageRegisterPwd)).val()) && (d = l.html(c)) : d = l.html(a) : "verifyCode" !== m || "" !== h && !n.test(h) || (d = l.html(f));
            d ? e.addClass("is-invalid") : e.removeClass("is-invalid")
        },
        isKeyup: function(a) {
            a = $(a.currentTarget);
            var c = a.closest(this.formItemWarp);
            0 < a.val().length ? c.addClass("is-dirty") : c.removeClass("is-dirty")
        },
        openUserType: function(a) {
            (this.__$usertypeList = (this.__$usertypeWarp = $(a.currentTarget)).find(this.usertypeList)).addClass("login-layer-show");
            a.stopPropagation()
        },
        closeUserType: function(a) {
            a = this.__$usertypeWarp;
            var c = this.__$usertypeList;
            if (this.__$usertypeWarp) {
                var b = c.siblings(this.usertypeItem);
                $tip = a.find(".mdl-textfield__error");
                value = b.val();
                isTip = !1;
                c.removeClass("login-layer-show");
                "" === value || n.test(value) ? isTip = $tip.html(m) : q.test(value) || (isTip = $tip.html(e));
                isTip ? a.addClass("is-invalid") : a.removeClass("is-invalid");
                delete this.__$usertypeWarp;
                delete this.__$usertypeList
            }
        },
        selectUserType: function(a) {
            var c = $(a.currentTarget),
                b = c.siblings(this.usertypeItem),
                g = b.closest(this.formItemWarp),
                d = g.find(".mdl-textfield__error"),
                k = $(a.target).attr("data-type"),
                f = !1;
            setTimeout(function() {
                c.removeClass("login-layer-show")
            }, 200);
            0 < k.length ? g.addClass("is-dirty") : g.removeClass("is-dirty");
            b.val(k);
            "" === k || n.test(k) ? f = d.html(m) : q.test(k) || (f = d.html(e));
            f ? g.addClass("is-invalid") : g.removeClass("is-invalid");
            delete this.__$usertypeWarp;
            delete this.__$usertypeList;
            a.stopPropagation()
        },
        globalValidate: function(l) {
            for (var u = {}, A = l.$target, C = A.siblings(this.formItemWarp).find(this.formItem), d = !1, p = 0; p < C.length; p++) {
                var B = $(C[p]),
                    v = $.trim(B.val()),
                    y = B.attr("data-validate"),
                    B = B.closest(this.formItemWarp),
                    z = B.find(".mdl-textfield__error"),
                    w = !1;
                "email1" === y ? "" === v || n.test(v) ? w = z.html(g) : t.test(v) ? u.email1 = v.toLowerCase() : w = z.html(k) : "email2" === y ? "" === v || n.test(v) ? w = z.html(g) : r.test(v) ? u.email2 = v.toLowerCase() : w = z.html(k) : "pwd1" === y ? "" === v || n.test(v) ? w = z.html(b) : x.test(v) ? u.pwd1 = v : w = z.html(a) : "pwd2" === y ? "" === v || n.test(v) ? w = z.html(b) : x.test(v) ? v !== $.trim((this.$registerPwd = this.$registerPwd || $(this.registerPwd)).val()) ? w = z.html(c) : u.pwd2 = v : w = z.html(a) : "pwd3" === y ? "" === v || n.test(v) ? w = z.html(b) : x.test(v) ? v !== $.trim((this.$pageRegisterPwd = this.$pageRegisterPwd || $(this.pageRegisterPwd)).val()) ? w = z.html(c) : u.pwd2 = v : w = z.html(a) : "verifyCode" === y ? "" === v || n.test(v) ? w = z.html(f) : u.verifyCode = v : "userType" === y && ("" === v || n.test(v) ? w = z.html(m) : q.test(v) ? "Reseller" === v ? u.userType = "Reseller" : "Company Purchaser" === v ? u.userType = "Purchase for company" : "Consumer" === v && (u.userType = "End Consumer") : w = z.html(e));
                w ? (B.addClass("is-invalid"), d = !0) : B.removeClass("is-invalid")
            }!0 === d && (/^signin$/i.test(A.attr("data-type")) ? h.gaWebSiteSignin("loginfail") : /^register$/i.test(A.attr("data-type")) && h.gaWebSiteRegister("regfail"));
            !d && l.successCallback && l.successCallback(u)
        }
    }
});
define("common/login/signinPopup", "common/config checkoutflow/popupTip tpl/login/signinPopupTpl common/login/registerPopup common/login/loginValidate common/login/verifyCode common/login/loginSubmit common/login/signout common/login/loginThirdParty common/login/google common/login/facebook common/login/visaCheckout".split(" "), function(l, h, f, m, e, b, a, c, g, k, n, t) {
    var r = function(a) {
        window.$.DH_signin_popup = this;
        this.setOptions(a);
        this.cPageLoginWarp = this.options.cPageLoginWarp;
        this.cPageLoginTab = this.options.cPageLoginTab;
        this.cPageLoginTabContent = this.options.cPageLoginTabContent;
        this.cLoginWarp = this.options.cLoginWarp;
        this.cLoginTab = this.options.cLoginTab;
        this.cLoginTabContent = this.options.cLoginTabContent;
        this.cLoginGuest = this.options.cLoginGuest;
        this.cVisaChekcout = this.options.cVisaChekcout;
        this.cSigninCodeWarp = this.options.cSigninCodeWarp;
        this.cLoginGoogleWarp = this.options.cLoginGoogleWarp;
        this.cHtml = this.options.cHtml;
        this.cHide = this.options.cHide;
        this.cAnimateHide = this.options.cAnimateHide;
        this.cAnimateShow = this.options.cAnimateShow;
        this.template = this.options.template;
        this.tpl = this.options.tpl;
        this.saCollection = {};
        this.timer = null;
        this.registerPopupInstance = this.options.registerPopupInstance;
        this.loginValidate = e.init();
        k.loadApi(this);
        n.loadApi();
        this.initElement();
        this.initEvent();
        r = function() {
            return window.$.DH_signin_popup
        }
    };
    $.extend(r, {
        init: function(a) {
            return window.$.DH_signin_popup ? window.$.DH_signin_popup : new r(a)
        }
    });
    $.extend(r.prototype, {
        setOptions: function(a) {
            this.options = {
                cPageLoginWarp: ".j-page-loginWarp",
                cPageLoginTab: ".j-page-login-tab",
                cPageLoginTabContent: ".j-page-login-tabContent",
                cLoginWarp: ".j-popup-loginWarp",
                cLoginTab: ".j-popup-login-tab",
                cLoginTabContent: ".j-popup-login-tabContent",
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cAnimateHide: "close-login-layer",
                cAnimateShow: "open-login-layer",
                cLoginGuest: ".j-login-guest",
                cVisaChekcout: ".j-visa-chekcout",
                cSigninCodeWarp: ".j-signin-code",
                cLoginGoogleWarp: ".j-login-google",
                template: _.template,
                tpl: f,
                registerPopupInstance: m.init()
            };
            $.extend(!0, this.options, a || {})
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cPageLoginWarp = this.$cPageLoginWarp || $(this.cPageLoginWarp);
            this.$cPageLoginTab = $(this.cPageLoginTab);
            this.$cPageLoginTabContent = $(this.cPageLoginTabContent);
            this.$cLoginWarp = $(this.cLoginWarp);
            this.$cLoginTab = $(this.cLoginTab);
            this.$cLoginTabContent = $(this.cLoginTabContent);
            this.$cLoginGuest = $(this.cLoginGuest);
            this.$cVisaChekcout = $(this.cVisaChekcout);
            this.$cSigninCodeWarp = $(this.cSigninCodeWarp);
            this.$cLoginGoogleWarp = $(this.cLoginGoogleWarp)
        },
        initEvent: function() {
            var a = this,
                b = this.timer,
                g;
            g = this.$cPageLoginWarp[0] ? "reload" : "partial";
            this.$body.on("click", ".j-header-signin", {
                type: "signin",
                loginSuccessCallback: g
            }, $.proxy(this.render, this));
            this.$body.on("click", ".j-header-register", {
                type: "register",
                loginSuccessCallback: g
            }, $.proxy(this.render, this));
            this.$body.on("click", ".j-footer-signin", {
                type: "signin",
                isSetPageStyle: !0,
                loginSuccessCallback: g
            }, $.proxy(this.render, this));
            this.$body.on("click", ".j-footer-register", {
                type: "register",
                isSetPageStyle: !0,
                loginSuccessCallback: g
            }, $.proxy(this.render, this));
            this.$body.on("click", ".j-popup-login-close", $.proxy(this.hideLoginLayer, this));
            this.$body.on("click", ".j-popup-login-tab li", $.proxy(this.tabSwitch, this));
            this.$body.on("click", ".j-page-login-tab li", $.proxy(this.pageTabSwitch, this));
            this.$body.on("click", ".j-popup-signin-btn", $.proxy(this.websiteSignin, this));
            this.$body.on("click", ".j-popup-register-btn", $.proxy(this.websiteRegister, this));
            this.$body.on("click", ".j-login-guest", $.proxy(this.websiteGuest, this));
            this.$body.on("click", ".j-login-google", $.proxy(this.googleSignin, this));
            this.$body.on("click", ".j-login-facebook", $.proxy(this.facebookSignin, this));
            this.$body.on("click", ".j-signin-code-image, .j-register-code-image", $.proxy(this.updateSigninCode, this));
            this.$body.on("click", ".j-header-signout", function() {
                c.init();
                return !1
            });
            this.$window.on("orientationchange, resize", function() {
                b && clearTimeout(b);
                b = setTimeout(function() {
                    a.setLoginStyle()
                }, 500)
            })
        },
        setLoginStyle: function() {
            var a = $(this.cLoginTabContent),
                c, b = 1 * this.$window.height(),
                g = 1 * (a.outerHeight() - a.height()),
                k = 0;
            a[0] && (c = a.siblings(), $.each(c, function(a, c) {
                k += 1 * $(c).outerHeight()
            }), a.css({
                height: b - k - g
            }))
        },
        setPageStyle: function(a) {
            var c = this.$html,
                b = this.$body,
                g = this.cHtml;
            this.isSetPageStyle && (!0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), c.addClass(g), b.css({
                    "margin-top": -this.__scrollY
                })) : (c.removeClass(g), b.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY)))
        },
        showLoginLayer: function() {
            var a = this.$cLoginWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                g = this.cAnimateShow;
            this.setPageStyle(!0);
            a.removeClass(c);
            this.setLoginStyle();
            setTimeout(function() {
                a.removeClass(b).addClass(g)
            }, 10);
            l.preventClick()
        },
        hideLoginLayer: function() {
            var a = this.$cLoginWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                g = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!1);
                a.removeClass(g).addClass(b);
                setTimeout(function() {
                    a.addClass(c)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        tabSwitch: function(a) {
            var c, b;
            a.currentTarget ? c = $(a.currentTarget) : (b = this.$cLoginTab.find("li"), c = "signin" === a ? $(b[0]) : $(b[1]));
            c.siblings().removeClass("current");
            c.addClass("current");
            b = this.$cLoginTabContent.find('div[data-type="con"]');
            c = c.parent().find("li").index(c);
            $(b[c]).removeClass(this.cHide).siblings('div[data-type="con"]').addClass(this.cHide);
            this.controlVisaCheckout(a)
        },
        pageTabSwitch: function(a) {
            var c;
            a.currentTarget ? c = $(a.currentTarget) : (c = this.$cPageLoginTab.find("li"), c = "signin" === a ? $(c[0]) : $(c[1]));
            c.siblings().removeClass("current");
            c.addClass("current");
            a = this.$cPageLoginTabContent.find('div[data-type="con"]');
            c = c.parent().find("li").index(c);
            $(a[c]).removeClass(this.cHide).siblings('div[data-type="con"]').addClass(this.cHide)
        },
        controlVisaCheckout: function(a) {
            var c = $(a.currentTarget).text();
            !0 === this.isVisaCheckout && ("signin" === a || "Sign in" === c ? this.$cVisaChekcout[0] && this.$cVisaChekcout.addClass(this.cHide) : this.$cVisaChekcout[0] && this.$cVisaChekcout.removeClass(this.cHide))
        },
        controlGuestLogin: function() {
            !0 === this.canVisitorSignin ? this.$cLoginGuest[0] && this.$cLoginGuest.removeClass(this.cHide) : this.$cLoginGuest[0] && this.$cLoginGuest.addClass(this.cHide)
        },
        render: function(a) {
            h.events.trigger("popupTip:loading", !1);
            a.target && a.data && (a = a.data);
            this.isSetPageStyle = a.isSetPageStyle;
            this.canVisitorSignin = a.canVisitorSignin;
            this.isVisaCheckout = a.isVisaCheckout;
            this.guestReturnUrl = a.guestReturnUrl;
            this.loginSuccessCallback = a.loginSuccessCallback;
            this.isBuyItNow = a.isBuyItNow;
            if (!this.$cLoginWarp[0]) {
                var c = this.template,
                    b = this.tpl,
                    k = c(b.main.join(""))(),
                    e = c(b.loginTab.join(""))(),
                    f = c(b.loginCloseBtn.join(""))(),
                    d = c(b.websiteSignin.join(""))(),
                    c = c(b.thirdSignin.join(""))(),
                    k = k.replace(/\{\{loginTab\}\}/, e).replace(/\{\{loginCloseBtn\}\}/, f).replace(/\{\{websiteSignin\}\}/, d).replace(/\{\{thirdSignin\}\}/, c);
                this.$body.append(k);
                this.registerPopupInstance.$event.trigger("registerPopup:render");
                this.renderSigninCode();
                this.initElement();
                this.googleInitBindSigin();
                !0 === this.isVisaCheckout && t.init()
            }
            this.showLoginLayer();
            this.controlGuestLogin();
            this.tabSwitch(a.type || "signin");
            g.d1();
            g.ga();
            return !1
        },
        nonePopupRender: function(a) {
            h.events.trigger("popupTip:loading", !1);
            this.canVisitorSignin = a.canVisitorSignin;
            this.guestReturnUrl = a.guestReturnUrl;
            this.loginSuccessCallback = a.loginSuccessCallback;
            this.isBuyItNow = a.isBuyItNow;
            var c = this.template,
                b = this.tpl,
                k = c(b.main1.join(""))(),
                e = c(b.loginTab1.join(""))(),
                f = c(b.websiteSignin.join(""))(),
                c = c(b.thirdSignin.join(""))(),
                k = k.replace(/\{\{loginTab1\}\}/, e).replace(/\{\{websiteSignin\}\}/, f).replace(/\{\{thirdSignin\}\}/, c);
            this.$cPageLoginWarp.html(k);
            this.registerPopupInstance.$event.trigger("registerPopup:nonePopupRender");
            this.renderSigninCode();
            this.initElement();
            this.googleInitBindSigin();
            this.controlGuestLogin();
            this.pageTabSwitch(a.type || "signin");
            g.d1();
            g.ga()
        },
        renderSigninCode: function(a, c) {
            !0 === a ? this.$cSigninCodeWarp.removeClass("is-dirty").html(this.template(this.tpl.signinCode.join(""))({
                    imageBase64Str: c
                })).removeClass(this.cHide) : b.signinInitFetch({
                    params: {
                        init: 1
                    },
                    successCallback: $.proxy(function(a) {
                        a && this.$cSigninCodeWarp.removeClass("is-dirty").html(this.template(this.tpl.signinCode.join(""))({
                            imageBase64Str: a
                        })).removeClass(this.cHide)
                    }, this)
                })
        },
        updateSigninCode: function(a) {
            var c = $(a.currentTarget);
            h.events.trigger("popupTip:loading", !0);
            b.update({
                params: {
                    reqVerify: c.attr("data-type"),
                    width: 100,
                    height: 30
                },
                successCallback: $.proxy(function(a) {
                    c.html('<img src="' + a + '" alt="verify code" />')
                })
            })
        },
        websiteSignin: function(c) {
            c = $(c.currentTarget);
            c.closest(this.cPageLoginWarp)[0] && (this.loginSuccessCallback = "reload");
            this.loginValidate.globalValidate({
                $target: c,
                successCallback: $.proxy(function(c) {
                    h.events.trigger("popupTip:loading", !0);
                    a.signinSubmitFetch({
                        params: {
                            username: c.email1,
                            password: c.pwd1,
                            verifyCode: c.verifyCode,
                            isBuyItNow: this.isBuyItNow || !1
                        },
                        signinInstance: this,
                        loginSuccessCallback: this.loginSuccessCallback
                    })
                }, this)
            })
        },
        websiteRegister: function(c) {
            c = $(c.currentTarget);
            c.closest(this.cPageLoginWarp)[0] && (this.loginSuccessCallback = "reload");
            this.loginValidate.globalValidate({
                $target: c,
                successCallback: $.proxy(function(c) {
                    h.events.trigger("popupTip:loading", !0);
                    a.registerSubmitFetch({
                        params: {
                            username: c.email2,
                            password: c.pwd1,
                            repassword: c.pwd2,
                            userType: c.userType,
                            verifyCode: c.verifyCode,
                            isBuyItNow: this.isBuyItNow || !1
                        },
                        signinInstance: this,
                        loginSuccessCallback: this.loginSuccessCallback
                    })
                }, this)
            })
        },
        websiteGuest: function() {
            var c;
            this.guestReturnUrl || (c = l.wwwURL.replace(/^http:\/\//i, "https://") + "/placeorder/placeOrder.html");
            a.signinGuestFetch({
                guestReturnUrl: c
            })
        },
        googleInitBindSigin: function() {
            for (var a = this.$cLoginGoogleWarp, c = 0, b = a.length; c < b; c++) {
                var g = $(a[c]);
                if ("y" !== g.attr("data-init")) {
                    if (!window.gapi) break;
                    g.attr({
                        "data-init": "y"
                    });
                    k.googleSignin(g[0])
                }
            }
        },
        googleSignin: function(a) {
            var c = $(a.currentTarget);
            c.closest(this.cPageLoginWarp)[0] && (this.loginSuccessCallback = "reload");
            window.gapi && (k.init({
                signinInstance: this,
                loginSuccessCallback: this.loginSuccessCallback,
                isBuyItNow: this.isBuyItNow || !1
            }), "y" !== c.attr("data-init") ? (c.attr({
                    "data-init": "y"
                }), k.googleSignin(a.currentTarget)) : h.events.trigger("popupTip:loading", !0))
        },
        facebookSignin: function(a) {
            $(a.currentTarget).closest(this.cPageLoginWarp)[0] && (this.loginSuccessCallback = "reload");
            window.FB && (h.events.trigger("popupTip:loading", !0), n.init({
                signinInstance: this,
                loginSuccessCallback: this.loginSuccessCallback,
                isBuyItNow: this.isBuyItNow || !1
            }))
        }
    });
    return r
});
define("common/login/registerPopup", ["common/config", "tpl/login/registerPopupTpl", "common/login/verifyCode"], function(l, h, f) {
    var m = function(e) {
        this.setOptions(e);
        this.cPageRegisterContent = this.options.cPageRegisterContent;
        this.cRegisterContent = this.options.cRegisterContent;
        this.cRegisterCode = this.options.cRegisterCode;
        this.template = this.options.template;
        this.$event = $({});
        this.tpl = this.options.tpl;
        this.initEvent()
    };
    $.extend(m, {
        init: function(e) {
            return new m(e)
        }
    });
    $.extend(m.prototype, {
        setOptions: function(e) {
            this.options = {
                cPageRegisterContent: ".j-page-register-content",
                cRegisterContent: ".j-popup-register-content",
                cRegisterCode: ".j-register-code-image",
                template: _.template,
                tpl: h
            };
            $.extend(!0, this.options, e || {})
        },
        initElement: function() {
            this.$cPageRegisterContent = $(this.cPageRegisterContent);
            this.$cRegisterContent = $(this.cRegisterContent);
            this.$cRegisterCode = $(this.cRegisterCode)
        },
        initEvent: function() {
            this.$event.on("registerPopup:render", $.proxy(this.initElement, this));
            this.$event.on("registerPopup:render", $.proxy(this.render, this));
            this.$event.on("registerPopup:render", $.proxy(this.renderRegisterCode, this));
            this.$event.on("registerPopup:nonePopupRender", $.proxy(this.initElement, this));
            this.$event.on("registerPopup:nonePopupRender", $.proxy(this.nonePopupRender, this));
            this.$event.on("registerPopup:nonePopupRender", $.proxy(this.renderRegisterCode, this))
        },
        render: function() {
            var e = this.template,
                b = this.tpl,
                a = e(b.websiteRegister.join(""))(),
                c = e(b.part1.join(""))(),
                g = e(b.pwd.join(""))(),
                k = e(b.part2.join(""))(),
                e = e(b.part3.join(""))(),
                a = a.replace(/\{\{part1\}\}/, c).replace(/\{\{pwd\}\}/, g).replace(/\{\{part2\}\}/, k).replace(/\{\{part3\}\}/, e);
            this.$cRegisterContent.html(a);
            this.initElement()
        },
        nonePopupRender: function() {
            var e = this.template,
                b = this.tpl,
                a = e(b.websiteRegister1.join(""))(),
                c = e(b.part1.join(""))(),
                g = e(b.pwd1.join(""))(),
                k = e(b.part2.join(""))(),
                e = e(b.part3.join(""))(),
                a = a.replace(/\{\{part1\}\}/, c).replace(/\{\{pwd1\}\}/, g).replace(/\{\{part2\}\}/, k).replace(/\{\{part3\}\}/, e);
            this.$cPageRegisterContent.html(a);
            this.initElement()
        },
        renderRegisterCode: function(e, b) {
            !0 === e ? this.$cRegisterCode.html('<img src="' + b + '" alt="verify code" />') : f.registerInitFetch({
                    params: {
                        init: 1
                    },
                    successCallback: $.proxy(function(a) {
                        this.$cRegisterCode.html('<img src="' + a + '" alt="verify code" />')
                    }, this)
                })
        }
    });
    return m
});
define("common/login/verifyCode", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "common/login/loginThirdParty"], function(l, h, f, m) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var e = l.wwwURL.replace(/^http:\/\//i, "https://") + "/mobileApiWeb/user-User-ajaxLogin.do",
        b = l.wwwURL.replace(/^http:\/\//i, "https://") + "/mobileApiWeb/user-User-ajaxRegist.do",
        a = l.wwwURL.replace(/^http:\/\//i, "https://") + "/mobileApiWeb/user-User-verifyCode.do",
        c = {
            client: "wap",
            version: "0.1"
        };
    return {
        signinInitFetch: function(a) {
            a = a || {};
            var b = $.extend(!0, {}, c, a.params || {});
            $.ajax({
                type: "POST",
                url: e,
                data: b,
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(c) {
                    if ("0x0000" === c.state) c.data && c.data.imgData && a.successCallback && a.successCallback("data:image/jpg;base64," + c.data.imgData);
                    else try {
                        throw "success(): data is wrong";
                    } catch (t) {
                        f.events.trigger("save:dataErrorLog", {
                            message: t,
                            url: e,
                            params: b,
                            result: $.extend(!0, {}, c, {
                                data: {
                                    imgData: "verifyCode"
                                }
                            }),
                            custom: {
                                verifyCode: "verifyCode"
                            }
                        })
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    try {
                        throw "error(): request is wrong";
                    } catch (n) {
                        f.events.trigger("save:dataErrorLog", {
                            message: n,
                            url: e,
                            params: b,
                            custom: {
                                verifyCode: "verifyCode"
                            }
                        })
                    }
                }
            })
        },
        registerInitFetch: function(a) {
            a = a || {};
            var g = $.extend(!0, {}, c, a.params || {});
            $.ajax({
                type: "POST",
                url: b,
                data: g,
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(c) {
                    if ("0x0000" === c.state) c.data && "y" === c.data.login_risk_control && m.loginRisk(c.data && (c.data.tokenId || "")), c.data && c.data.imgData && a.successCallback && a.successCallback("data:image/jpg;base64," + c.data.imgData);
                    else try {
                        throw "success(): data is wrong";
                    } catch (t) {
                        f.events.trigger("save:dataErrorLog", {
                            message: t,
                            url: b,
                            params: g,
                            result: $.extend(!0, {}, c, {
                                data: {
                                    imgData: "verifyCode"
                                }
                            }),
                            custom: {
                                verifyCode: "verifyCode"
                            }
                        })
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    try {
                        throw "error(): request is wrong";
                    } catch (n) {
                        f.events.trigger("save:dataErrorLog", {
                            message: n,
                            url: b,
                            params: g,
                            custom: {
                                verifyCode: "verifyCode"
                            }
                        })
                    }
                }
            })
        },
        update: function(b) {
            b = b || {};
            var g = $.extend(!0, {}, c, b.params || {});
            $.ajax({
                type: "POST",
                url: a,
                data: g,
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(c) {
                    if ("0x0000" === c.state) b.successCallback && b.successCallback("data:image/jpg;base64," + c.data);
                    else {
                        h.events.trigger("popupTip:autoTip", {
                            message: c.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (t) {
                            f.events.trigger("save:dataErrorLog", {
                                message: t,
                                url: a,
                                params: g,
                                result: $.extend(!0, {}, c, {
                                    data: "verifyCode"
                                }),
                                custom: {
                                    verifyCode: "verifyCode"
                                }
                            })
                        }
                    }
                    h.events.trigger("popupTip:loading", !1)
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:autoTip", {
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (n) {
                        f.events.trigger("save:dataErrorLog", {
                            message: n,
                            url: a,
                            params: g,
                            custom: {
                                verifyCode: "verifyCode"
                            }
                        })
                    }
                }
            })
        }
    }
});
define("common/login/loginSubmit", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "tpl/header/topMenuInitTpl", "common/login/loginThirdParty"], function(l, h, f, m, e) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var b = l.wwwURL.replace(/^http:\/\//i, "https://") + "/mobileApiWeb/user-User-ajaxLogin.do",
        a = l.wwwURL.replace(/^http:\/\//i, "https://") + "/mobileApiWeb/user-User-ajaxRegist.do",
        c = l.wwwURL.replace(/^http:\/\//i, "https://") + "/mobileApiWeb/user-Visitor-enter.do?client=wap&returnURL=",
        g = {
            client: "wap",
            version: "0.1"
        },
        k = window.location.href;
    return {
        signinGuestFetch: function(a) {
            a = a || {};
            a = a.guestReturnUrl || "";
            e.gResponse({
                type: "guest",
                setCustomUrl: "https://dhgate.com/event/actions1/register-en-wap-tourist"
            });
            window.location.href = c + a
        },
        signinSubmitFetch: function(a) {
            a = a || {};
            var c = $.extend(!0, {}, g, a.params || {}),
                k = a.signinInstance,
                n = a.loginSuccessCallback || $.noop;
            $.ajax({
                type: "POST",
                url: b,
                data: c,
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(a) {
                    this.successJump({
                        __params__: c,
                        __url: b,
                        type: "signin",
                        res: a,
                        signinInstance: k,
                        loginSuccessCallback: n
                    })
                },
                error: function() {
                    e.gaWebSiteSignin("loginfail");
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:autoTip", {
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (q) {
                        f.events.trigger("save:dataErrorLog", {
                            message: q,
                            url: b,
                            params: $.extend(!0, {}, c, {
                                password: "********"
                            })
                        })
                    }
                }
            })
        },
        registerSubmitFetch: function(c) {
            c = c || {};
            var b = $.extend(!0, {}, g, c.params || {}),
                k = c.signinInstance,
                n = c.loginSuccessCallback || $.noop;
            $.ajax({
                type: "POST",
                url: a,
                data: b,
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(c) {
                    this.successJump({
                        __params__: b,
                        __url: a,
                        type: "register",
                        res: c,
                        signinInstance: k,
                        loginSuccessCallback: n
                    })
                },
                error: function() {
                    e.gaWebSiteRegister("regfail");
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:autoTip", {
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (q) {
                        f.events.trigger("save:dataErrorLog", {
                            message: q,
                            url: a,
                            params: $.extend(!0, {}, b, {
                                password: "********",
                                repassword: "********"
                            })
                        })
                    }
                }
            })
        },
        successJump: function(a) {
            var c = a.__params__,
                b = a.__url,
                g = a.res,
                n = a.signinInstance,
                u = a.loginSuccessCallback,
                D = $.cookie("b2b_nick_n");
            if ("0x0000" !== g.state) {
                "signin" === a.type ? e.gaWebSiteSignin("loginfail") : "register" === a.type && e.gaWebSiteRegister("regfail");
                "signin" === a.type && g.data && g.data.imgData ? n.renderSigninCode(!0, "data:image/jpg;base64," + g.data.imgData) : "register" === a.type && g.data && g.data.imgData && n.registerPopupInstance.renderRegisterCode(!0, "data:image/jpg;base64," + g.data.imgData);
                h.events.trigger("popupTip:loading", !1);
                h.events.trigger("popupTip:autoTip", {
                    message: g.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (A) {
                    f.events.trigger("save:dataErrorLog", {
                        message: A,
                        url: b,
                        params: $.extend(!0, {}, c, {
                            password: "********",
                            repassword: "********"
                        }),
                        result: $.extend(!0, {}, g, {
                            data: {
                                imgData: "verifyCode"
                            }
                        })
                    })
                }
            } else "signin" === a.type ? e.gaWebSiteSignin("loginsuc") : "register" === a.type && (e.gaWebSiteRegister("regsuc"), e.gResponse({
                    type: "register",
                    setCustomUrl: "https://dhgate.com/event/actions1/register-" + l.countryCur + "-wap"
                })), "register" === a.type && e.remarketingFacebook(), g.data && g.data.cartnum && 0 < 1 * g.data.cartnum && $(".j-cartnum").html(g.data.cartnum).show(), g.data && g.data.msgnum && $(".j-messagenum").html(g.data.msgnum), g.data && g.data.needEDMEmailConfirm && $(".j-confirmEmail").removeClass("dhm-hide"), D && ($(".j-header-login").html(_.template(m.isLogin.join(""))({
                list: {
                    nickName: D
                }
            })), $("#J_logined").html("<p>" + $.lang.Head_not + " " + D + "? <a class=\"j-header-signout\" href=\"/signout.do\" onclick=\"javascript:ga('send', 'event', 'MHP', 'Sign out-bottom')\">" + $.lang.sign_out + "</a></p>")), "partial" === u ? (n.hideLoginLayer(), h.events.trigger("popupTip:loading", !1)) : "reload" === u ? (h.events.trigger("popupTip:loading", !1), window.location.replace(k)) : (n.hideLoginLayer(), _.isFunction(u) ? u() : h.events.trigger("popupTip:loading", !1))
        }
    }
});
define("common/login/signout", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var m = l.wwwURL + "/mobileApiWeb/user-User-logout.do",
        e = {};
    return {
        init: function(b) {
            this.fetch(b)
        },
        getParams: function(b) {
            b = {
                client: "wap",
                version: "0.1"
            };
            $.extend(e, b);
            return b
        },
        fetch: function(b) {
            $.ajax({
                type: "POST",
                url: m,
                data: this.getParams(b),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(a) {
                    if ("0x0000" === a.state) this.jump();
                    else {
                        h.events.trigger("popupTip:loading", !1);
                        h.events.trigger("popupTip:autoTip", {
                            message: a.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (c) {
                            f.events.trigger("save:dataErrorLog", {
                                message: c,
                                url: m,
                                params: e,
                                result: a
                            })
                        }
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:autoTip", {
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (a) {
                        f.events.trigger("save:dataErrorLog", {
                            message: a,
                            url: m,
                            params: e
                        })
                    }
                }
            })
        },
        jump: function() {
            window.location.href = l.wwwURL
        }
    }
});
define("common/login/loginThirdParty", ["common/config"], function(l) {
    return {
        loginRisk: function(h) {
            window._fmOpt = {
                partner: "dhgate",
                appName: "dh_web_seller",
                token: h
            };
            var f = new Image(1, 1);
            f.onload = function() {
                _fmOpt.imgLoaded = !0
            };
            f.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=dhgate&appName=dh_web_seller&tokenId=" + h;
            h = document.createElement("script");
            h.type = "text/javascript";
            h.async = !0;
            h.src = ("https:" == document.location.protocol ? "https://" : "http://") + "static.fraudmetrix.cn/fm.js?ver=0.1&t=" + ((new Date).getTime() / 36E5).toFixed(0);
            f = document.getElementsByTagName("script")[0];
            f.parentNode.insertBefore(h, f)
        },
        remarketingFacebook: function() {
            try {
                window.fbq && window.fbq("track", "CompleteRegistration")
            } catch (h) {}
        },
        d1: function() {
            try {
                var h = location.host.match(/.+\.(es|pt|ru|fr|de|it|tr)\..+/i) || "en";
                _dhq.push(["setVar", "pt", "join"]);
                _dhq.push(["setVar", "site", "wap"]);
                _dhq.push(["setVar", "lang", "en" !== h ? h[1] : h]);
                _dhq.push(["event", "Public_S0003"])
            } catch (f) {}
        },
        ga: function() {
            try {
                window.ga && window.ga("send", "pageview", location.pathname + location.search + escape(location.hash))
            } catch (h) {}
        },
        gaWebSiteSignin: function(h) {
            if ("loginsuc" === h) try {
                window.ga && window.ga("send", "event", "MHP", "loginsuc")
            } catch (f) {} else if ("loginfail" === h) try {
                window.ga && window.ga("send", "event", "MHP", "loginfail")
            } catch (f) {}
        },
        gaWebSiteRegister: function(h) {
            if ("regsuc" === h) try {
                window.ga && window.ga("send", "event", "MHP", "regsuc")
            } catch (f) {} else if ("regfail" === h) try {
                window.ga && window.ga("send", "event", "MHP", "regfail")
            } catch (f) {}
        },
        gaFBSignin: function(h) {
            if ("fblogsuc" === h) try {
                window.ga && window.ga("send", "event", "MHP", "fblogsuc")
            } catch (f) {} else if ("fblogfail" === h) try {
                window.ga && window.ga("send", "event", "MHP", "fblogfail")
            } catch (f) {}
        },
        gaGoogleSignin: function(h) {
            if ("gglogsuc" === h) try {
                window.ga && window.ga("send", "event", "MHP", "gglogsuc")
            } catch (f) {} else if ("gglogfail" === h) try {
                window.ga && window.ga("send", "event", "MHP", "gglogfail")
            } catch (f) {}
        },
        gResponse: function(h) {
            if ("facebook" !== h.type && "google" !== h.type && "guest" !== h.type || "en" === l.countryCur) void 0 !== window._paq && void 0 !== window._paqEventPush ? window._paqEventPush(h.setCustomUrl) : this.gResponseLoadJs({
                    setCustomUrl: h.setCustomUrl
                })
        },
        gResponseLoadJs: function(h) {
            $.getScript("//www.directmail.dhgate.com/script/ga.js?grid=uBFoHVCpY&v=" + l.version, function() {
                window._paqEventPush = function(f) {
                    window._paq.push(["setCustomUrl", f]);
                    window._paq.push(["trackPageView"])
                };
                window._paqEventPush(h.setCustomUrl || "")
            })
        }
    }
});
define("common/login/facebook", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "tpl/header/topMenuInitTpl", "common/login/loginThirdParty"], function(l, h, f, m, e) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var b = {
            client: "wap",
            version: "0.1"
        },
        a = window.location.href;
    window.fbAsyncInit = function() {
        FB.init({
            appId: "619487934836296",
            status: !0,
            oauth: !0,
            cookie: !0,
            xfbml: !0,
            version: "v2.2"
        })
    };
    return {
        init: function(a) {
            this.setOptions(a);
            this.signinInstance = this.options.signinInstance;
            this.loginSuccessCallback = this.options.loginSuccessCallback;
            this.isBuyItNow = this.options.isBuyItNow;
            this.facebookSignin()
        },
        setOptions: function(a) {
            this.options = {};
            $.extend(!0, this.options, a || {})
        },
        loadApi: function() {
            var a, b = document.getElementsByTagName("script")[0];
            document.getElementById("facebook-jssdk") || (a = document.createElement("script"), a.id = "facebook-jssdk", a.src = "//connect.facebook.net/en_US/sdk.js", b.parentNode.insertBefore(a, b))
        },
        facebookSignin: function() {
            FB.login($.proxy(function(a) {
                this.statusChangeCallback(a)
            }, this), {
                scope: "public_profile,email"
            })
        },
        statusChangeCallback: function(a) {
            var c = {
                thirdType: 0
            };
            c.accessToken = a.authResponse && a.authResponse.accessToken || "0";
            c.login_auth_token = $.cookie("login_auth_token") || "";
            c.ref_d = $.cookie("ref_d") || "";
            c.ref_f = $.cookie("ref_f") || "";
            "connected" === a.status ? FB.api("/me", $.proxy(function(a) {
                    c.thirdUid = a.id || "";
                    c.userName = a.email || "";
                    c.nickName = a.first_name ? encodeURIComponent(a.first_name) : a.name ? encodeURIComponent(a.name) : a.email && a.email.replace(/(.+)\@.+/i, "$1");
                    c.thirdImg = "";
                    f.events.trigger("save:dataErrorLog", {
                        message: "facebook login time.",
                        url: window.location.href,
                        params: b,
                        custom: {
                            time: this.__time__ = (new Date).getTime()
                        }
                    });
                    this.signinSubmitFetch({
                        params: c,
                        signinInstance: this.signinInstance,
                        loginSuccessCallback: this.loginSuccessCallback || $.noop
                    })
                }, this)) : (e.gaFBSignin("fblogfail"), h.events.trigger("popupTip:loading", !1), h.events.trigger("popupTip:autoTip", {
                    message: "Login with your Facebook account failed. Please try again."
                }), f.events.trigger("save:dataErrorLog", {
                    message: "facebook signin is error",
                    url: window.location.href,
                    params: b,
                    custom: {
                        type: "facebook"
                    }
                }))
        },
        signinSubmitFetch: function(a) {
            a = a || {};
            var c = $.extend(!0, {}, b, {
                    isBuyItNow: this.isBuyItNow
                }, a.params || {}),
                k = a.signinInstance,
                n = a.loginSuccessCallback || $.noop;
            $.ajax({
                type: "GET",
                url: "https://m.dhgate.com/ajaxThirdLogin.do",
                data: c,
                async: !0,
                cache: !1,
                dataType: "jsonp",
                context: this,
                success: function(a) {
                    f.events.trigger("save:dataErrorLog", {
                        message: "facebook login time.",
                        url: window.location.href,
                        params: b,
                        result: a,
                        custom: {
                            time: this.__time__
                        }
                    });
                    this.successJump({
                        __params__: c,
                        __url: "https://m.dhgate.com/ajaxThirdLogin.do",
                        res: a,
                        signinInstance: k,
                        loginSuccessCallback: n
                    })
                },
                error: function() {
                    e.gaFBSignin("fblogfail");
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:autoTip", {
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (t) {
                        f.events.trigger("save:dataErrorLog", {
                            message: t,
                            url: "https://m.dhgate.com/ajaxThirdLogin.do",
                            params: c
                        })
                    }
                }
            })
        },
        successJump: function(c) {
            var b = c.__params__,
                k = c.__url,
                n = c.res,
                l = c.signinInstance;
            c = c.loginSuccessCallback;
            var r = $.cookie("b2b_nick_n");
            if ("0x0000" !== n.state) {
                e.gaFBSignin("fblogfail");
                h.events.trigger("popupTip:loading", !1);
                h.events.trigger("popupTip:autoTip", {
                    message: n.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (x) {
                    f.events.trigger("save:dataErrorLog", {
                        message: x,
                        url: k,
                        params: b,
                        result: n
                    })
                }
            } else e.gaFBSignin("fblogsuc"), n.data && "y" === n.data.isRegister && (e.remarketingFacebook(), e.gResponse({
                type: "facebook",
                setCustomUrl: "https://dhgate.com/event/actions1/register-en-wap-fb"
            })), n.data && n.data.cartnum && 0 < 1 * n.data.cartnum && $(".j-cartnum").html(n.data.cartnum).show(), n.data && n.data.msgnum && $(".j-messagenum").html(n.data.msgnum), n.data && n.data.needEDMEmailConfirm && $(".j-confirmEmail").removeClass("dhm-hide"), r && ($(".j-header-login").html(_.template(m.isLogin.join(""))({
                list: {
                    nickName: r
                }
            })), $("#J_logined").html("<p>" + $.lang.Head_not + " " + r + "? <a class=\"j-header-signout\" href=\"/signout.do\" onclick=\"javascript:ga('send', 'event', 'MHP', 'Sign out-bottom')\">" + $.lang.sign_out + "</a></p>")), "partial" === c ? (l.hideLoginLayer(), h.events.trigger("popupTip:loading", !1)) : "reload" === c ? (h.events.trigger("popupTip:loading", !1), window.location.replace(a)) : (l.hideLoginLayer(), _.isFunction(c) ? c() : h.events.trigger("popupTip:loading", !1))
        }
    }
});
define("common/login/google", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "tpl/header/topMenuInitTpl", "common/login/loginThirdParty"], function(l, h, f, m, e) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var b = {
            client: "wap",
            version: "0.1"
        },
        a = window.location.href;
    return {
        init: function(a) {
            this.setOptions(a);
            this.signinInstance = this.options.signinInstance;
            this.loginSuccessCallback = this.options.loginSuccessCallback;
            this.isBuyItNow = this.options.isBuyItNow
        },
        setOptions: function(a) {
            this.options = {};
            $.extend(!0, this.options, a || {})
        },
        loadApi: function(a) {
            $.getScript("https://apis.google.com/js/api:client.js", function() {
                a.googleInitBindSigin()
            })
        },
        googleSignin: function(a) {
            window.gapi.load("auth2", $.proxy(function() {
                this.auth2 = window.gapi.auth2.init({
                    client_id: "908751507097-qr3gvtf8pdfq7643lvh74b4h5scgov4j.apps.googleusercontent.com",
                    cookiepolicy: "single_host_origin"
                });
                this.attachSignin(a)
            }, this))
        },
        attachSignin: function(a) {
            this.auth2.attachClickHandler(a, {}, $.proxy(this.onsuccess, this), $.proxy(this.onfailure, this))
        },
        onsuccess: function(a) {
            var c = a.getBasicProfile(),
                k = c.getId(),
                e = c.getName(),
                h = c.getGivenName(),
                m = c.getFamilyName(),
                l = c.getImageUrl(),
                c = c.getEmail();
            a = a.getAuthResponse().access_token;
            var q = {
                thirdType: 1
            };
            q.userName = c || "";
            q.nickName = h ? encodeURIComponent(h) : e && m ? encodeURIComponent(e + " " + m) : c.replace(/(.+)\@.+/i, "$1");
            q.thirdUid = k || "";
            q.accessToken = a || "0";
            q.thirdImg = l || "";
            q.login_auth_token = $.cookie("login_auth_token") || "";
            q.ref_d = $.cookie("ref_d") || "";
            q.ref_f = $.cookie("ref_f") || "";
            f.events.trigger("save:dataErrorLog", {
                message: "google login time.",
                url: window.location.href,
                params: b,
                custom: {
                    time: this.__time__ = (new Date).getTime()
                }
            });
            this.signinSubmitFetch({
                params: q,
                signinInstance: this.signinInstance,
                loginSuccessCallback: this.loginSuccessCallback || $.noop
            })
        },
        onfailure: function(a) {
            e.gaGoogleSignin("gglogfail");
            h.events.trigger("popupTip:loading", !1);
            h.events.trigger("popupTip:autoTip", {
                message: "Login with your Google account failed. Please try again."
            });
            f.events.trigger("save:dataErrorLog", {
                message: JSON.stringify(a, void 0, 2),
                url: window.location.href,
                params: b,
                custom: {
                    type: "google"
                }
            })
        },
        signinSubmitFetch: function(a) {
            a = a || {};
            var c = $.extend(!0, {}, b, {
                    isBuyItNow: this.isBuyItNow
                }, a.params || {}),
                k = a.signinInstance,
                n = a.loginSuccessCallback || $.noop;
            $.ajax({
                type: "GET",
                url: "https://m.dhgate.com/ajaxThirdLogin.do",
                data: c,
                async: !0,
                cache: !1,
                dataType: "jsonp",
                context: this,
                success: function(a) {
                    f.events.trigger("save:dataErrorLog", {
                        message: "google login time.",
                        url: window.location.href,
                        params: b,
                        result: a,
                        custom: {
                            time: this.__time__
                        }
                    });
                    this.successJump({
                        __params__: c,
                        __url: "https://m.dhgate.com/ajaxThirdLogin.do",
                        res: a,
                        signinInstance: k,
                        loginSuccessCallback: n
                    })
                },
                error: function() {
                    e.gaGoogleSignin("gglogfail");
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:autoTip", {
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (t) {
                        f.events.trigger("save:dataErrorLog", {
                            message: t,
                            url: "https://m.dhgate.com/ajaxThirdLogin.do",
                            params: c
                        })
                    }
                }
            })
        },
        successJump: function(c) {
            var b = c.__params__,
                k = c.__url,
                n = c.res,
                l = c.signinInstance;
            c = c.loginSuccessCallback;
            var r = $.cookie("b2b_nick_n");
            if ("0x0000" !== n.state) {
                e.gaGoogleSignin("gglogfail");
                h.events.trigger("popupTip:loading", !1);
                h.events.trigger("popupTip:autoTip", {
                    message: n.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (x) {
                    f.events.trigger("save:dataErrorLog", {
                        message: x,
                        url: k,
                        params: b,
                        result: n
                    })
                }
            } else e.gaGoogleSignin("gglogsuc"), n.data && "y" === n.data.isRegister && e.gResponse({
                type: "google",
                setCustomUrl: "https://dhgate.com/event/actions1/register-en-wap-google"
            }), n.data && n.data.cartnum && 0 < 1 * n.data.cartnum && $(".j-cartnum").html(n.data.cartnum).show(), n.data && n.data.msgnum && $(".j-messagenum").html(n.data.msgnum), n.data && n.data.needEDMEmailConfirm && $(".j-confirmEmail").removeClass("dhm-hide"), r && ($(".j-header-login").html(_.template(m.isLogin.join(""))({
                list: {
                    nickName: r
                }
            })), $("#J_logined").html("<p>" + $.lang.Head_not + " " + r + "? <a class=\"j-header-signout\" href=\"/signout.do\" onclick=\"javascript:ga('send', 'event', 'MHP', 'Sign out-bottom')\">" + $.lang.sign_out + "</a></p>")), "partial" === c ? (l.hideLoginLayer(), h.events.trigger("popupTip:loading", !1)) : "reload" === c ? (h.events.trigger("popupTip:loading", !1), window.location.replace(a)) : (l.hideLoginLayer(), _.isFunction(c) ? c() : h.events.trigger("popupTip:loading", !1))
        }
    }
});
define("common/login/visaCheckout", "common/config common/login/visaCheckoutRegister checkoutflow/popupTip checkoutflow/dataErrorLog tpl/header/topMenuInitTpl common/login/loginThirdParty".split(" "), function(l, h, f, m, e, b) {
    m = new m({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    l.wwwURL.replace(/^http:\/\//i, "https://");
    return {
        init: function(a) {
            this.setOptions(a);
            this.signinInstance = this.options.signinInstance;
            this.loginSuccessCallback = this.options.loginSuccessCallback;
            this.loadApi()
        },
        setOptions: function(a) {
            this.options = {};
            $.extend(!0, this.options, a || {})
        },
        initEvent: function() {
            V.on("payment.success", $.proxy(this.onSuccess, this));
            V.on("payment.error", $.proxy(this.onErrors, this))
        },
        loadApi: function() {
            var a = this;
            $.getScript("https://assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js", function() {
                a.onVisaCheckoutReady();
                a.initEvent()
            })
        },
        onVisaCheckoutReady: function() {
            window.V.init({
                apikey: "TVTWN5N066L1UUUI3NRJ14p8NzD7fWGjCae4Hp_benIt4pluM",
                settings: {
                    displayName: "DHgate",
                    review: {
                        buttonAction: "Pay"
                    }
                }
            })
        },
        onSuccess: function(a) {
            f.events.trigger("popupTip:loading", !0);
            h.init({
                vcoId: a.callid
            })
        },
        onErrors: function(a, c) {
            f.events.trigger("popupTip:autoTip", {
                message: "Failure to obtain visa information.",
                timer: 1E3
            })
        }
    }
});
define("common/login/visaCheckoutRegister", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var m = l.wwwURL + "/mobileApiWeb/user-VisaCheckoutUser-register.do",
        e = {};
    return {
        init: function(b) {
            this.vcoId = b.vcoId;
            this.save()
        },
        getParams: function() {
            var b = {
                client: "wap",
                version: "0.1"
            };
            b.vcoId = this.vcoId;
            $.extend(e, b);
            return b
        },
        save: function() {
            $.ajax({
                type: "POST",
                url: m,
                data: this.getParams(this.vcoId),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(b) {
                    if ("0x0000" === b.state) this.parse(b);
                    else {
                        h.events.trigger("popupTip:loading", !1);
                        h.events.trigger("popupTip:dataErrorTip", {
                            action: "close",
                            message: b.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (a) {
                            f.events.trigger("save:dataErrorLog", {
                                message: a,
                                url: m,
                                params: e,
                                result: b
                            })
                        }
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (b) {
                        f.events.trigger("save:dataErrorLog", {
                            message: b,
                            url: m,
                            params: e
                        })
                    }
                }
            })
        },
        parse: function(b) {
            h.events.trigger("popupTip:loading", !1);
            window.location.href = "/placeorder/placeOrder.html?isvisaCheckout=1&vcoId=" + this.vcoId + ""
        }
    }
});
define("common/sharesns", ["common/config"], function(l) {
    function h(h) {
        var e = $(h.target).attr("data-type");
        h = f;
        var b = window.location.href,
            a = $("#canonicalUrl").attr("href");
        void 0 == a ? 0 < b.indexOf("#") && (b = b.substring(0, b.indexOf("#"))) : b = a;
        var c = "";
        "pinterest" == e && (c = $("#firstBImage >span >img").attr("src"));
        "" != c && void 0 != c && (c = encodeURIComponent(c));
        a = encodeURIComponent(b);
        f = encodeURIComponent(h || f);
        var g = encodeURIComponent(""),
            k, n = !0;
        if ("email" == e) k = document.createElement("a"), k.setAttribute("href", "mailto:?subject=Your friend recommends this product (via DHgate.com)&body=" + h.replace(/\&+|\@+|\'+|"+/g, "") + a), k.setAttribute("style", "display:none;"), k.innerHTML = "email", document.body.appendChild(k), k.click();
        else {
            switch (e) {
                case "del.icio.us":
                    k = "https://delicious.com/post?title=" + f + "&url=" + a;
                    break;
                case "digg":
                    k = "http://digg.com/submit?phase=2&url=" + a + "&title=" + f + "&bodytext=" + g + "&topic=tech_deals";
                    break;
                case "reddit":
                    k = "http://reddit.com/submit?url=" + a + "&title=" + f;
                    break;
                case "furl":
                    k = "http://www.furl.net/savedialog.jsp?t=" + f + "&u=" + a;
                    break;
                case "rawsugar":
                    k = "http://www.rawsugar.com/home/extensiontagit/?turl=" + a + "&tttl=" + f;
                    break;
                case "stumbleupon":
                    k = "http://www.stumbleupon.com/submit?url=" + a + "&title=" + f;
                    break;
                case "facebook":
                    k = "http://www.facebook.com/share.php?src=bm&v=4&u=" + a + "&t=" + f;
                    break;
                case "technorati":
                    k = "http://technorati.com/faves?sub=favthis&add=" + a;
                    break;
                case "spurl":
                    k = "http://www.spurl.net/spurl.php?v=3&title=" + f + "&url=" + a;
                    break;
                case "simpy":
                    k = "http://www.simpy.com/simpy/LinkAdd.do?title=" + f + "&href=" + a;
                    break;
                case "google":
                    k = "http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + a + "&title=" + f;
                    break;
                case "netscape":
                    k = "http://www.netscape.com/submit/?U=" + a + "&T=" + f + "&C=" + g;
                    break;
                case "slashdot":
                    k = "http://slashdot.org/bookmark.pl?url=" + b + "&title=" + f;
                    break;
                case "backflip":
                    k = "http://www.backflip.com/add_page_pop.ihtml?title=" + f + "&url=" + a;
                    break;
                case "bluedot":
                    k = "http://bluedot.us/Authoring.aspx?u=" + a + "&t=" + f;
                    break;
                case "kaboodle":
                    k = "http://www.kaboodle.com/za/selectpage?p_pop=false&pa=url&u=" + a;
                    break;
                case "squidoo":
                    k = "http://www.squidoo.com/lensmaster/bookmark?" + a;
                    break;
                case "twitter":
                    k = "https://twitter.com/intent/tweet?status=" + f + ":+" + a;
                    break;
                case "pinterest":
                    k = "http://pinterest.com/pin/create/button/?url=" + a + "&media=" + c + "&description=" + f;
                    break;
                case "vk":
                    k = "http://vk.com/share.php?url=" + b;
                    break;
                case "bluedot":
                    k = "http://blinkbits.com/bookmarklets/save.php?v=1&source_url=" + a + "&title=" + f;
                    break;
                case "blinkList":
                    k = "http://blinkbits.com/bookmarklets/save.php?v=1&source_url=" + a + "&title=" + f;
                    break;
                case "linkedin":
                    k = "http://www.linkedin.com/cws/share?url=" + a + "&title=" + f;
                    break;
                case "googleplus":
                    k = "https://plus.google.com/share?url=" + a;
                    break;
                case "browser":
                    bookmarksite(h, b), n = !1
            }
            1 == n && window.open(k, "bookmarkWindow")
        }
    }
    var f = window.document.title;
    $(".j-foot-share")[0] && $(".j-foot-share li").on("click", h)
});
define("common/recommend/lastOneAndLastSecond", ["common/config", "tpl/recommend/lastOneAndLastSecondTpl", "lib/underscore", "ui/lazyload"], function(l, h, f, m) {
    var e = function(b) {
        this.setOptions(b);
        this.el = this.options.el;
        this.title = this.options.title;
        this.trackingPrefix = this.options.trackingPrefix;
        this.url = this.options.api.url;
        this.param = this.options.api.param;
        this.template = this.options.template;
        this.tpl = this.options.tpl;
        this.cHide = this.options.cHide;
        this.initElement();
        this.fetch()
    };
    $.extend(e, {
        init: function(b) {
            return new e(b)
        }
    });
    $.extend(e.prototype, {
        setOptions: function(b) {
            this.options = {
                el: ".j-recommend-view1",
                title: "",
                trackingPrefix: "",
                api: {
                    url: l.wwwURL + "/mobileApiWeb/search-Recommend-getRecomByVisit.do",
                    param: {
                        client: "wap",
                        version: "3.3",
                        pageNum: 1,
                        pageSize: 16,
                        itemID: "",
                        category: "",
                        imploc: "",
                        pageType: ""
                    }
                },
                template: f.template,
                tpl: h,
                cHide: "dhm-hide"
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$el = $(this.el)
        },
        fetch: function() {
            $.ajax({
                type: "GET",
                url: this.url,
                async: !0,
                cache: !1,
                dataType: "json",
                data: this.param,
                context: this,
                success: function(b) {
                    b = this.parse(b);
                    if (-1 !== b.code) this.render(b);
                    else try {
                        throw "success(): data is wrong";
                    } catch (a) {}
                },
                error: function() {
                    try {
                        throw "error(): request is wrong";
                    } catch (b) {}
                }
            })
        },
        getPromoType: function(b) {
            var a = "-1";
            "0" === b ? a = "1" : "10" === b ? a = "2" : "20" === b ? a = "3" : "30" === b ? a = "4" : "40" === b ? a = "5" : "50" === b ? a = "6" : "60" === b ? a = "7" : "70" === b ? a = "8" : "80" === b ? a = "9" : "90" === b ? a = "10" : "100" === b && (a = "11");
            return a
        },
        parse: function(b) {
            var a = {},
                c = this;
            a.code = "0x0000" === b.state ? 200 : -1;
            a.blockTit = this.title;
            a.trackingPrefix = this.trackingPrefix;
            a.list = []; - 1 !== a.code && $.each(b.data.resultList, function(g, k) {
                var e = {};
                e.title = k.title;
                e.price = k.discountPrice || k.originalPrice;
                e.imageUrl = k.imgUrl;
                e.url = l.wwwURL + "/product/" + k.seoName + "/" + k.itemCode + ".html" + ("#" + k.D1Tag || "");
                e.promoType = c.getPromoType(k.promoType);
                e.discount = k.discountRate || 0;
                e.measure = k.measure;
                e.curreny = b.data.currencyText;
                a.list.push(e)
            });
            return a
        },
        render: function(b) {
            var a = this.template,
                c = this.tpl,
                g = a(c.main.join(""))(b),
                k = a(c.title.join(""))(b);
            b = a(c.products.join(""))(b);
            g = g.replace(/\{\{title\}\}/, k).replace(/\{\{products\}\}/, b);
            this.$el[0] && this.$el.html(g).removeClass(this.cHide);
            $(this.el + " .lazy").lazyload({
                threshold: "100",
                load: function() {
                    $(this).addClass("show");
                    $(this).closest(".pro-img").css({
                        background: "none"
                    })
                },
                container: this.$el.find("ul")
            })
        }
    });
    return e
});
define("common/recommend/youMyLike", ["common/config", "tpl/recommend/youMyLikeTpl", "lib/underscore", "ui/lazyload"], function(l, h, f, m) {
    var e = function(b) {
        this.setOptions(b);
        this.el = this.options.el;
        this.title = this.options.title;
        this.trackingPrefix = this.options.trackingPrefix;
        this.url = this.options.api.url;
        this.param = this.options.api.param;
        this.template = this.options.template;
        this.tpl = this.options.tpl;
        this.cHide = this.options.cHide;
        this.initElement();
        this.fetch()
    };
    $.extend(e, {
        init: function(b) {
            return new e(b)
        }
    });
    $.extend(e.prototype, {
        setOptions: function(b) {
            this.options = {
                el: ".j-recommend-view1",
                title: "",
                trackingPrefix: "",
                api: {
                    url: l.wwwURL + "/mobileApiWeb/search-Recommend-getRecomByLike.do",
                    param: {
                        client: "wap",
                        version: "3.3",
                        pageNum: 1,
                        pageSize: 16,
                        itemID: "",
                        category: "",
                        keyword: "",
                        pageType: ""
                    }
                },
                template: f.template,
                tpl: h,
                cHide: "dhm-hide"
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$el = $(this.el)
        },
        fetch: function() {
            $.ajax({
                type: "GET",
                url: this.url,
                async: !0,
                cache: !1,
                dataType: "json",
                data: this.param,
                context: this,
                success: function(b) {
                    b = this.parse(b);
                    if (-1 !== b.code) this.render(b);
                    else try {
                        throw "success(): data is wrong";
                    } catch (a) {}
                },
                error: function() {
                    try {
                        throw "error(): request is wrong";
                    } catch (b) {}
                }
            })
        },
        getPromoType: function(b) {
            var a = "-1";
            "0" === b ? a = "1" : "10" === b ? a = "2" : "20" === b ? a = "3" : "30" === b ? a = "4" : "40" === b ? a = "5" : "50" === b ? a = "6" : "60" === b ? a = "7" : "70" === b ? a = "8" : "80" === b ? a = "9" : "90" === b ? a = "10" : "100" === b && (a = "11");
            return a
        },
        parse: function(b) {
            var a = {},
                c = this;
            a.code = "0x0000" === b.state && b.data ? 200 : -1;
            a.blockTit = this.title;
            a.trackingPrefix = this.trackingPrefix;
            a.list = []; - 1 !== a.code && $.each(b.data.resultList, function(g, k) {
                var e = {};
                e.title = k.title;
                e.price = k.discountPrice || k.originalPrice;
                e.imageUrl = k.imgUrl;
                e.url = l.wwwURL + "/product/" + k.seoName + "/" + k.itemCode + ".html" + ("#" + k.D1Tag || "");
                e.promoType = c.getPromoType(k.promoType);
                e.discount = k.discountRate || 0;
                e.measure = k.measure;
                e.curreny = b.data.currencyText;
                a.list.push(e)
            });
            return a
        },
        render: function(b) {
            var a = this.template,
                c = this.tpl,
                g = a(c.main.join(""))(b),
                k = a(c.title.join(""))(b);
            b = a(c.products.join(""))(b);
            g = g.replace(/\{\{title\}\}/, k).replace(/\{\{products\}\}/, b);
            this.$el[0] && this.$el.html(g).removeClass(this.cHide);
            $(this.el + " .lazy").lazyload({
                threshold: "100",
                load: function() {
                    $(this).addClass("show");
                    $(this).closest(".pro-img").css({
                        background: "none"
                    })
                },
                container: this.$el.find("ul")
            })
        }
    });
    return e
});
define("common/recommend/youViewed", ["common/config", "tpl/recommend/youViewedTpl", "lib/underscore", "ui/lazyload"], function(l, h, f, m) {
    var e = function(b) {
        this.setOptions(b);
        this.el = this.options.el;
        this.title = this.options.title;
        this.trackingPrefix = this.options.trackingPrefix;
        this.url = this.options.api.url;
        this.param = this.options.api.param;
        this.template = this.options.template;
        this.tpl = this.options.tpl;
        this.cHide = this.options.cHide;
        this.initElement();
        this.fetch()
    };
    $.extend(e, {
        init: function(b) {
            return new e(b)
        }
    });
    $.extend(e.prototype, {
        setOptions: function(b) {
            this.options = {
                el: ".j-recommend-view1",
                title: "",
                trackingPrefix: "",
                api: {
                    url: l.wwwURL + "/mobileApiWeb/search-Recommend-getRecomByViewed.do",
                    param: {
                        client: "wap",
                        version: "3.3",
                        pageNum: 1,
                        pageSize: 20
                    }
                },
                template: f.template,
                tpl: h,
                cHide: "dhm-hide"
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$el = $(this.el)
        },
        fetch: function() {
            $.ajax({
                type: "GET",
                url: this.url,
                async: !0,
                cache: !1,
                dataType: "json",
                data: this.param,
                context: this,
                success: function(b) {
                    b = this.parse(b);
                    if (-1 !== b.code) this.render(b);
                    else try {
                        throw "success(): data is wrong";
                    } catch (a) {}
                },
                error: function() {
                    try {
                        throw "error(): request is wrong";
                    } catch (b) {}
                }
            })
        },
        getPromoType: function(b) {
            var a = "-1";
            "0" === b ? a = "1" : "10" === b ? a = "2" : "20" === b ? a = "3" : "30" === b ? a = "4" : "40" === b ? a = "5" : "50" === b ? a = "6" : "60" === b ? a = "7" : "70" === b ? a = "8" : "80" === b ? a = "9" : "90" === b ? a = "10" : "100" === b && (a = "11");
            return a
        },
        parse: function(b) {
            var a = {},
                c = this;
            a.code = "0x0000" === b.state && b.data ? 200 : -1;
            a.blockTit = this.title;
            a.trackingPrefix = this.trackingPrefix;
            a.list = []; - 1 !== a.code && $.each(b.data.resultList || [], function(g, k) {
                var e = {};
                e.uuid = k.uuid || "";
                e.title = k.title;
                e.price = k.discountPrice || k.originalPrice;
                e.imageUrl = k.imgUrl;
                e.url = l.wwwURL + "/product/" + k.seoName + "/" + k.itemCode + ".html";
                e.promoType = c.getPromoType(k.promoType);
                e.discount = k.discountRate || 0;
                e.measure = k.measure;
                e.curreny = b.data.currencyText;
                a.list.push(e)
            });
            return a
        },
        render: function(b) {
            var a = this.template,
                c = this.tpl,
                g = a(c.main.join(""))(b),
                k = a(c.title.join(""))(b);
            b = a(c.products.join(""))(b);
            g = g.replace(/\{\{title\}\}/, k).replace(/\{\{products\}\}/, b);
            this.$el[0] && this.$el.html(g).removeClass(this.cHide);
            $(this.el + " .lazy").lazyload({
                threshold: "100",
                load: function() {
                    $(this).addClass("show");
                    $(this).closest(".pro-img").css({
                        background: "none"
                    })
                },
                container: this.$el.find("ul")
            })
        }
    });
    return e
});
define("checkoutflow/dataErrorLog", ["common/config"], function(l) {
    l = function(h) {
        this.setOptions(h);
        this.setOptions(h);
        this.el = this.options.el;
        this.div = this.options.div;
        this.img = this.options.img;
        this.flag = this.options.flag;
        this.url = this.options.url;
        this.events = $({});
        this.init()
    };
    $.extend(l.prototype, {
        init: function() {
            this.initElement();
            this.initEvent()
        },
        setOptions: function(h) {
            this.options = {
                el: "body",
                div: "<div>",
                img: "<img>",
                flag: !1,
                url: ""
            };
            $.extend(this.options, h || {})
        },
        initElement: function() {
            this.$el = this.$el || $(this.options.el);
            this.$div = $(this.div);
            this.$img = $(this.img)
        },
        initEvent: function() {
            this.events.on("save:dataErrorLog", $.proxy(this.save, this))
        },
        getReferrerUrl: function() {
            return document.referrer
        },
        getUrl: function() {
            return location.href
        },
        getLocalTime: function() {
            return (new Date).getTime()
        },
        getParams: function(h) {
            var f = {};
            f.message = h.message;
            f.url = {};
            f.url.u1 = this.getUrl();
            f.url.u2 = this.getReferrerUrl() || "";
            f.url.u3 = h.url;
            f.params = h.params && $.extend(!0, {}, h.params) || {};
            f.result = h.result && $.extend(!0, {}, h.result) || {};
            f.localTime = this.getLocalTime();
            f.custom = h.custom && $.extend(!0, {}, h.custom) || {};
            return f
        },
        save: function(h, f) {
            this.flag && "" !== this.url && (this.$div.css({
                display: "none"
            }), this.$img.css({
                width: 1,
                height: 1,
                borderStyle: "none"
            }).attr({
                src: this.url + "?client=wap&v=" + encodeURIComponent(JSON.stringify(this.getParams(f)))
            }), this.$el.append(this.$div.append(this.$img)), this.initElement())
        }
    });
    return l
});
define("checkoutflow/popupTip", ["common/config"], function(l) {
    var h = function() {
        var f = this;
        this.setOptions();
        this.el = this.options.el;
        this.loadingWarp = this.options.loadingWarp;
        this.dataErrorTipWarp = this.options.dataErrorTipWarp;
        this.dataErrorTipLayerWarp = this.options.dataErrorTipLayerWarp;
        this.dataErrorTip = this.options.dataErrorTip;
        this.cOrderInfoWarp = this.options.cOrderInfoWarp;
        this.dataErrorSureBtn = this.options.dataErrorSureBtn;
        this.mask = this.options.mask;
        this.autoLayerWarp = this.options.autoLayerWarp;
        this.cHide = this.options.cHide;
        this.events = $({});
        this.init();
        h = function() {
            return f
        }
    };
    $.extend(h.prototype, {
        init: function() {
            this.initElement();
            this.initEvent()
        },
        setOptions: function() {
            this.options = {
                el: document,
                loadingWarp: ".j-loading-warp",
                dataErrorTipWarp: ".j-popup-warp",
                dataErrorTipLayerWarp: ".j-popup-layer-warp",
                dataErrorTip: ".j-errorText",
                dataErrorSureBtn: "#errorSure",
                mask: ".j-mask",
                autoLayerWarp: ".j-auto-layer",
                cHide: "dhm-hide"
            }
        },
        initElement: function() {
            this.$el = $(this.el);
            this.$loadingWarp = $(this.loadingWarp);
            this.$dataErrorTipWarp = $(this.dataErrorTipWarp);
            this.$dataErrorTipLayerWarp = $(this.dataErrorTipLayerWarp);
            this.$dataErrorTip = $(this.dataErrorTip);
            this.$autoLayerWarp = $(this.autoLayerWarp)
        },
        initEvent: function() {
            this.events.on("popupTip:loading", $.proxy(this.controlLoadingLayer, this));
            this.events.on("popupTip:dataErrorTip", $.proxy(this.setDataErrorTip, this));
            this.events.on("popupTip:autoTip", $.proxy(this.setAutoTip, this));
            this.$el.on("click", this.dataErrorSureBtn, $.proxy(this.hiddenDataErrorTip, this))
        },
        setMaskStyle: function() {
            this.$loadingWarp.find(this.mask).css({
                width: this.$el.width(),
                height: this.$el.height()
            });
            this.$dataErrorTipWarp.find(this.mask).css({
                width: this.$el.width(),
                height: this.$el.height()
            })
        },
        controlLoadingLayer: function(f, h) {
            !0 === h ? (this.setMaskStyle(), this.$loadingWarp.removeClass(this.cHide)) : this.$loadingWarp.addClass(this.cHide)
        },
        controlDataErrorTipLayer: function(f) {
            !0 === f ? (this.setMaskStyle(), this.$dataErrorTipWarp.removeClass(this.cHide)) : this.$dataErrorTipWarp.addClass(this.cHide)
        },
        setDataErrorStyle: function() {
            this.$dataErrorTipLayerWarp.css({
                "margin-top": -parseInt(1 * this.$dataErrorTipLayerWarp.outerHeight() / 2)
            })
        },
        setDataErrorTip: function(f, h) {
            this.$dataErrorTip.attr({
                action: h.action
            }).find("span").html(h.message);
            this.controlDataErrorTipLayer(!0);
            this.setDataErrorStyle()
        },
        hiddenDataErrorTip: function() {
            var f = this.$dataErrorTip.attr("action"),
                h = this.$dataErrorTip.attr("customUrl");
            "close" === f ? this.controlDataErrorTipLayer(!1) : "refresh" === f ? location.reload() : "gohome" === f ? location.href = l.wwwURL : "custom" === f && (location.href = h || "/")
        },
        controlAutoTipLayer: function(f) {
            var h = f.timer;
            f = f.callback;
            var e = this.$autoLayerWarp,
                b = this.cHide;
            f ? f() : (e.removeClass(b).animate({
                    opacity: 1
                }, 500), setTimeout(function() {
                    e.animate({
                        opacity: 0
                    }, 500, function() {
                        e.addClass(b)
                    })
                }, h))
        },
        setAutoLayerStyle: function() {
            this.$autoLayerWarp.css({
                "margin-top": -parseInt(1 * this.$autoLayerWarp.outerHeight() / 2)
            })
        },
        setAutoTip: function(f, h) {
            this.$autoLayerWarp.html(h.message);
            this.controlAutoTipLayer({
                timer: h.timer || 3E3,
                callback: h.callback
            });
            this.setAutoLayerStyle()
        }
    });
    return new h
});
define("checkoutflow/regexpConfig", [], function() {
    var l = function() {
        var h;
        h = " !\"#$%&'()*+,-./0123456789:;<=>?@";
        h += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        h += "[\\]^_`";
        h += "abcdefghijklmnopqrstuvwxyz";
        h += "{|}~";
        return {
            toHex: function(f, l) {
                var e = "",
                    b, a, c;
                for (b = 0; b < f.length; b++) a = f.charAt(b), c = h.indexOf(a) + 32, a = c % 16, c = (c - a) / 16, "" != e && l && (e += l), e += "0123456789abcdef".charAt(c), e += "0123456789abcdef".charAt(a);
                return e
            }
        }
    }();
    return {
        hasNumber: /\d/,
        isNumber: /^\d+$/,
        isNull: /^\s+$/,
        isIllegalChar: /[!@$*+<>&'\"%\\]/,
        firstName: /^.{1,30}$/,
        lastName: /^.{1,20}$/,
        addressOne: /^.{1,512}$/,
        addressTwo: /^.{0,512}$/,
        city: /^.{1,60}$/,
        zipCodeChar: /^[A-Za-z0-9\-_()+ ]+$/,
        zipCode: /^.{4,10}$/,
        usZipCode: /^\d{5}$|^\d{9}$|^\d{5}\s\d{4}$/,
        telephone: /^[\d \-()]+$/,
        telephone1: /^.{10}$/,
        telephone2: /^.{7,11}$/,
        telephone3: /^.{9,10}$/,
        email: /^([a-zA-Z0-9_\-])+(\.([a-zA-Z0-9_\-])+)*@((\[(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5])))\.(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5])))\.(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5])))\.(((([0-1])?([0-9])?[0-9])|(2[0-4][0-9])|(2[0-5][0-5]))\]))|((([a-zA-Z0-9])+(([\-])+([a-zA-Z0-9])+)*\.)+([a-zA-Z])+(([\-])+([a-zA-Z0-9])+)*))$/i,
        visaCardNo: /^(4\d{12}(?:\d{3})?)$/,
        visaCardNo1: /^4/,
        masterCardNo: /^((5[1-5]|2[2-7])\d{2})[\s\-]?(\d{4})[\s\-]?(\d{4})[\s\-]?(\d{4})$/,
        masterCardNo1: /^5[1-5]|^2[2-7]/,
        amexCardNo: /^((?:34|37)\d{13})$/,
        amexCardNo1: /^34|^37/,
        luhuCheck: function(h) {
            for (var f = 0, l = 0, e = !0, b = h.length - 1; 0 <= b; b--) {
                var a = parseInt(h.charAt(b));
                e ? f += a : (a *= 2, 9 < a && (a = eval(a.toString().split("").join("+"))), l += a);
                e = !e
            }
            return 0 == (l + f) % 10
        },
        year: /^\d{2}$/,
        month: /^\d{2}$/,
        csc1: /^\d{3}$/,
        csc2: /^\d{4}$/,
        password: /^.{6,30}$/,
        country_state_name: /^\-\-.+\-\-$/,
        chkHexStr: function(h) {
            var f = !1;
            h = l.toHex(h, ":").split(":");
            var m;
            for (m = 0; m < h.length; m++)"1f" == h[m] && (f = !0);
            return f
        }
    }
});
define("common/tc", ["common/config", "checkoutflow/dataErrorLog"], function(l, h) {
    h = new h({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var f = function(f) {
        this.setOptions(f);
        this.url = this.options.url;
        this.params = this.options.params;
        this.loadDataUrl = this.options.loadDataUrl;
        this.loadDataSuccess = this.options.loadDataSuccess;
        this.parse = this.options.parse;
        this.loadScriptUrl = this.options.loadScriptUrl;
        this.loadScriptSuccess = this.options.loadScriptSuccess;
        this.isScriptCache = this.options.isScriptCache;
        this.__params = {
            url: l.wwwURL + this.url,
            data: {}
        };
        this.url && this.loadData($.proxy(this.loadDataSuccess, this))
    };
    $.extend(f, {
        $el: $("body"),
        init: function(h) {
            return new f(h)
        },
        cache: null,
        flag: !1
    });
    $.extend(f.prototype, {
        setOptions: function(f) {
            this.options = {
                url: "",
                params: {},
                loadDataUrl: "",
                loadDataSuccess: $.noop,
                parse: $.noop,
                loadScriptUrl: "",
                isScriptCache: !0,
                loadScriptSuccess: $.noop
            };
            $.extend(!0, this.options, f || {})
        },
        add: function(h) {
            f.$el.queue("tc", h)
        },
        run: function(h) {
            var e = f.$el;
            if (!e.queue(h).length) return !1;
            e.dequeue(h);
            this.run(h)
        },
        setCache: function(h) {
            f.cache = h
        },
        getCache: function() {
            return $.extend(!0, {}, f.cache || {}).data
        },
        getParams: function() {
            var f = {
                client: "wap",
                version: "0.1"
            };
            $.extend(this.__params.data, f, this.params);
            return $.extend(f, this.params)
        },
        loadData: function(l) {
            null !== f.cache ? l() : this.add(l);
            f.flag || $.ajax({
                type: "POST",
                url: this.__params.url,
                data: this.getParams(),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(e) {
                    if ("0x0000" === e.state) this.setCache(e), this.run("tc");
                    else try {
                        throw "success(): data is wrong";
                    } catch (b) {
                        h.events.trigger("save:dataErrorLog", {
                            message: b,
                            url: this.__params.url,
                            params: this.__params.data,
                            result: e
                        })
                    }
                },
                error: function() {
                    try {
                        throw "error(): request is wrong";
                    } catch (e) {
                        h.events.trigger("save:dataErrorLog", {
                            message: e,
                            url: this.__params.url,
                            params: this.__params.data
                        })
                    }
                }
            });
            f.flag = !0
        },
        getLoadScriptUrl: function() {
            var f = this.loadScriptUrl;
            return this.isScriptCache ? /\?/.test(f) ? f + "&v=" + l.version : f + "?v=" + l.version : /\?/.test(f) ? f + "&v=" + (new Date).getTime() : f + "?v=" + (new Date).getTime()
        },
        loadScript: function() {
            $.ajax({
                type: "GET",
                url: this.getLoadScriptUrl(),
                context: this,
                async: !0,
                cache: !0,
                dataType: "script",
                success: this.loadScriptSuccess
            })
        }
    });
    return f
});
define("common/getUserInfo", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var m = l.wwwURL + "/mobileApiWeb/user-User-auth.do",
        e = {
            client: "wap",
            version: "0.1"
        },
        b = window.location.href;
    return {
        init: function(a) {
            this.isAsync = void 0 === a.isAsync ? !0 : !1;
            this.supportVisitors = a.supportVisitors || !1;
            this.isTip = void 0 === a.isTip ? !0 : !1;
            this.fixedURL = a.fixedURL || b;
            this.type = a.type || "signin";
            this.successCallback = a.successCallback;
            this.appLoginParam = a.appLoginParam || "";
            this.noSkipLogin = a.noSkipLogin || "1";
            this.canVisitorSignin = a.canVisitorSignin;
            this.guestReturnUrl = a.guestReturnUrl;
            this.isSetPageStyle = a.isSetPageStyle;
            this.isBuyItNow = a.isBuyItNow;
            this.loginSuccessCallback = a.loginSuccessCallback;
            this.fetch()
        },
        appLogin: function(a) {
            try {
                this.noRefreshLogin()
            } catch (c) {
                this.needRefreshLogin()
            }
            window.DH_OnSale_GetSession = a
        },
        noRefreshLogin: function() {
            try {
                toLoginJsRefresh()
            } catch (a) {
                window.order && window.order.toLoginJsRefresh && window.order.toLoginJsRefresh()
            }
        },
        needRefreshLogin: function() {
            try {
                toLogin("")
            } catch (a) {
                window.order && window.order.toLogin && window.order.toLogin("")
            }
        },
        fetch: function() {
            $.ajax({
                type: "GET",
                url: m,
                data: e,
                async: this.isAsync,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(a) {
                    if ("0x0000" === a.state) this.parse(a);
                    else {
                        !0 === this.isTip && (h.events.trigger("popupTip:loading", !1), h.events.trigger("popupTip:dataErrorTip", {
                            action: "custom",
                            customUrl: "/login.do?returnURL=" + b,
                            message: a.message
                        }));
                        try {
                            throw "success(): data is wrong";
                        } catch (c) {
                            f.events.trigger("save:dataErrorLog", {
                                message: c,
                                url: m,
                                params: e,
                                result: a
                            })
                        }
                    }
                },
                error: function() {
                    !0 === this.isTip && (h.events.trigger("popupTip:loading", !1), h.events.trigger("popupTip:dataErrorTip", {
                        action: "refresh",
                        message: "Network anomaly."
                    }));
                    try {
                        throw "error(): request is wrong";
                    } catch (a) {
                        f.events.trigger("save:dataErrorLog", {
                            message: a,
                            url: m,
                            params: e
                        })
                    }
                }
            })
        },
        parse: function(a) {
            var c = {},
                b = a.data.user;
            c.code = !1 === this.supportVisitors && void 0 !== b ? 200 : !0 !== this.supportVisitors || !0 !== a.data.isVisitor && void 0 === b ? -1 : 200;
            if (-1 === c.code && "1" === this.noSkipLogin) try {
                toLogin(this.appLoginParam)
            } catch (k) {
                if (window.order && window.order.toLogin) window.order.toLogin(this.appLoginParam);
                else {
                    h.events.trigger("popupTip:loading", !1);
                    if (window.$.DH_signin_popup) {
                        if ("integrate_page" === this.fixedURL) {
                            window.$.DH_signin_popup.nonePopupRender({
                                type: "signin",
                                canVisitorSignin: this.canVisitorSignin,
                                guestReturnUrl: this.guestReturnUrl,
                                isBuyItNow: this.isBuyItNow
                            });
                            return
                        }
                        if ("integrate_popup" === this.fixedURL) {
                            window.$.DH_signin_popup.render({
                                type: this.type,
                                isSetPageStyle: this.isSetPageStyle,
                                canVisitorSignin: this.canVisitorSignin,
                                guestReturnUrl: this.guestReturnUrl,
                                isBuyItNow: this.isBuyItNow,
                                loginSuccessCallback: this.loginSuccessCallback || $.noop
                            });
                            return
                        }
                    }
                    location.href = "/login.do?returnURL=" + this.fixedURL
                }
            } else c.isVisitor = a.data.isVisitor, c.buyer = b && b.buyer || "", c.buyerid = b && b.buyerid || "", c.domainname = b && b.domainname || "", c.email = b && b.email || "", c.emailisvalid = b && b.emailisvalid || "", c.nickname = b && b.nickname || "", c.systemuserid = b && b.systemuserid || "", c.usertype = b && 1 * b.usertype || "", !this.loginSuccessCallback || "integrate_page" !== this.fixedURL && "integrate_popup" !== this.fixedURL ? this.successCallback && this.successCallback(c) : this.loginSuccessCallback(c)
        }
    }
});
define("common/countdown", ["common/config", "common/serverTime", "lib/underscore"], function(l, h, f) {
    var m = function(e) {
        this.setOptions(e);
        this.serverTime = 1 * this.options.serverTime;
        this.endTime = f.isFunction(this.options.endTime) ? 1 * this.options.endTime() : 1 * (new Date(this.options.endTime)).getTime();
        this.timeLeft = 1 * this.options.timeLeft;
        this.runCallback = this.options.runCallback;
        this.timer = null;
        0 <= this.timeLeft && (this.__timeLeftFlag = !0);
        0 < this.serverTime || !0 === this.__timeLeftFlag ? this.countDown() : h.get($.proxy(function(b) {
                this.serverTime = 1 * b.time;
                this.countDown()
            }, this))
    };
    $.extend(m, {
        init: function(e) {
            return new m(e)
        }
    });
    $.extend(m.prototype, {
        setOptions: function(e) {
            this.options = {
                serverTime: "",
                endTime: "",
                timeLeft: -1,
                runCallback: $.noop
            };
            $.extend(this.options, e || {})
        },
        remainingTime: function() {
            var e = this.serverTime,
                b = this.endTime,
                a = this.timeLeft,
                c = this.__timeLeftFlag,
                g = !0 !== c ? b - e : a,
                k = parseInt(g / 864E5),
                f = parseInt(g / 36E5 % 24),
                h = parseInt(g / 6E4 % 60),
                g = parseInt(g / 1E3 % 60),
                l = {};
            if (!0 !== c && 0 > b - e || !0 === c && 0 > a) return -1;
            l.day = 10 > k ? "0" + k : "" + k;
            l.hour = 10 > f ? "0" + f : "" + f;
            l.minute = 10 > h ? "0" + h : "" + h;
            l.second = 10 > g ? "0" + g : "" + g;
            return l
        },
        countDown: function() {
            var e = this.remainingTime();
            this.runCallback(e);
            if (0 > e) return -1;
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout($.proxy(this.countDown, this), 1E3);
            !0 !== this.__timeLeftFlag ? this.serverTime += 1E3 : this.timeLeft -= 1E3
        }
    });
    return m
});
define("common/ntalker", ["common/config", "common/getUserInfo", "checkoutflow/popupTip"], function(l, h, f) {
    var m = function(e) {
        this.events = $({});
        this.init(e);
        this.initEvent()
    };
    $.extend(m.prototype, {
        init: function(e, b) {
            this.setOptions(e && e.target ? b : e);
            this.type = this.options.type;
            this.url = (this.options.url || "//www.dhresource.com/dhs/thirdparty/ntalker/ntkfstat_") + ("en" === l.countryCur ? "en_us" : l.countryCur) + ".js?v=" + l.version;
            this.siteid = "dh_1000";
            this.sellerid = "dh_" + this.options.sid;
            this.settingid = "dh_" + this.options.sid + "_9999";
            this.uid = "dh_" + this.options.uid;
            this.uname = l.b2b_nick_n;
            this.userlevel = l.b2b_buyer_lv || "0";
            this.productId = this.options.productId || "";
            this.productName = this.options.productName || "";
            this.bid_sid_pid = l.b2b_buyerid + "-DH-" + this.options.supplierId + "-DH-" + this.productId
        },
        setOptions: function(e) {
            this.options = {
                type: "dh",
                url: "",
                uid: "",
                supplierId: "",
                sid: "",
                productId: "",
                productName: ""
            };
            $.extend(!0, this.options, e || {})
        },
        initEvent: function() {
            this.events.on("Ntalker:open", $.proxy(this.init, this));
            this.events.on("Ntalker:open", $.proxy(this.openNtalker, this))
        },
        openNtalker: function() {
            h.init({
                isAsync: !1,
                fixedURL: "integrate_popup",
                isSetPageStyle: !0,
                loginSuccessCallback: $.proxy(function() {
                    var e = [];
                    f.events.trigger("popupTip:loading", !1);
                    if ("dh" === this.type) {
                        e.push("https://dht-downt.nt.dhgate.com/t2d/chat.php?");
                        e.push("siteid=" + this.siteid + "&settingid=" + this.settingid);
                        e.push("&sellerid=" + this.sellerid);
                        e.push("&uid=" + this.uid + "&uname=" + this.uname + "&itemid=" + this.productId);
                        e.push("&ref=" + encodeURIComponent(document.location));
                        e.push("&tit=Wholesale" + encodeURIComponent("-" + this.productName));
                        e.push("&itemparam=" + this.bid_sid_pid);
                        e.push("&baseuri=https%3A%2F%2Fwww.dhresource.com%2Fdhs%2Fthirdparty%2Fntalker%2F");
                        e.push("&mobile=1&lan=" + ("en" === l.countryCur ? "en_us" : l.countryCur));
                        e.push("&iframechat=0&header=1");
                        try {
                            window.open(e.join(""), "chat", "height=540,width=320,directories=no,location=no,menubar=no,resizable=yes, status=no,toolbar=no,top=100,left=200")
                        } catch (b) {}
                    }
                }, this)
            })
        }
    });
    return new m
});
define("common/goTop", ["common/config", "tpl/goTopTpl"], function(l, h) {
    var f = function(f) {
        this.setOptions(f);
        this.cHide = this.options.cHide;
        this.cGoTop = this.options.cGoTop;
        this.speed = this.options.speed;
        this.timer1 = this.timer = null;
        this.initElement();
        this.initEvent();
        this.render()
    };
    $.extend(f, {
        init: function(h) {
            return new f(h)
        }
    });
    $.extend(f.prototype, {
        setOptions: function(f) {
            this.options = {
                cHide: "dhm-hide",
                cGoTop: ".j-goTop",
                speed: 5
            };
            $.extend(this.options, f || {})
        },
        initElement: function() {
            this.$body = this.$body || $("body");
            this.$window = this.$window || $(window);
            this.$cGoTop = $(this.cGoTop)
        },
        initEvent: function() {
            this.$window.on("scroll", $.proxy(this.scroll, this));
            this.$body.on("click", this.cGoTop, $.proxy(this.goTop, this))
        },
        render: function() {
            this.$body.append(_.template(h.join("")));
            this.initElement();
            this.scroll()
        },
        scroll: function() {
            var f = this.$window,
                e = f.height(),
                b = f.scrollTop(),
                a = this.cHide,
                c = this.$cGoTop;
            this.timer1 && clearTimeout(this.timer1);
            this.timer1 = setTimeout(function() {
                b > e ? c.removeClass(a) : c.addClass(a)
            }, 50)
        },
        goTop: function() {
            this.timer = setInterval($.proxy(function() {
                var f = this.$window,
                    e = f.scrollTop();
                f.scrollTop(e - e / 5);
                0 >= e && clearInterval(this.timer)
            }, this), this.speed)
        }
    });
    return f
});
define("common/coupon/getStoreCouponList", ["common/config", "tpl/coupon/getStoreCouponListTpl", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f, m) {
    var e = Backbone.Model.extend({
        defaults: function() {
            return {
                code: -1,
                currencyText: "",
                couponList: [{
                    couponCode: "",
                    couponAmount: -1,
                    minOrderAmount: -1,
                    startDate: -1,
                    endDate: -1,
                    totalNumber: -1,
                    usedNumber: -1,
                    ifBuyerBind: !1,
                    validday: -1,
                    valid: -1,
                    couponType: ""
                }]
            }
        },
        initialize: function(b, a) {
            this.setOptions(a);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(b) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/coupon-Coupon-getSellerCoupon.do",
                    data: {
                        version: "3.3",
                        client: "wap"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, b || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(b, a, c) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, c || {});
            return Backbone.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, c))
        },
        parse: function(b) {
            var a = {},
                c = this;
            a.code = "0x0000" === b.state ? 200 : -1;
            a.currencyText = "";
            a.couponList = []; - 1 !== a.code && (a.currencyText = b.data.currencyText.charAt(b.data.currencyText.length - 1), $.each(b.data.resultList || [], function(b, k) {
                var g = {};
                g.couponCode = k.couponCode;
                g.couponAmount = k.couponAmount;
                g.minOrderAmount = k.minOrderAmount;
                g.startDate = k.startDate;
                g.endDate = k.endDate;
                g.totalNumber = k.totalNumber;
                g.usedNumber = k.usedNumber;
                g.platform = k.platform;
                g.ifBuyerBind = k.ifBuyerBind;
                g.validday = k.validday;
                g.couponType = k.couponType || "";
                g.expiresTime = c.expiresTime(k.endDate);
                a.couponList.push(g)
            }));
            0 === a.couponList.length && this.trigger("storeCouponView:noCouponList");
            return a
        },
        expiresTime: function(b) {
            var a = (new Date(b)).getFullYear(),
                c = (new Date(b)).getMonth();
            b = (new Date(b)).getDate();
            return "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[c] + "  " + b + ", " + a
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-store-coupon-tit, .j-datail-storecoupon": "loadDefaultShipcostData",
            "click .j-product-storeTitle-top": "closedStoreCouponLayer"
        },
        initialize: function(b) {
            this.setOptions(b);
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cJDatailStoreCoupon = this.options.cJDatailStoreCoupon;
            this.cJDatailCouponBoxScroll = this.options.cJDatailCouponBoxScroll;
            this.cJStoreCouponLayer = this.options.cJStoreCouponLayer;
            this.cOpenLayer = this.options.cOpenLayer;
            this.cClosedLayer = this.options.cClosedLayer;
            this.itemCode = this.options.itemCode;
            this.supplierid = this.options.supplierid;
            this.trackSyncData = this.options.trackSyncData;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.bindStoreCouponInstance = this.options.bindStoreCouponInstance;
            this.initElement();
            this.initEvent();
            this.model.fetch({
                data: {
                    itemID: this.itemCode,
                    supplierid: this.supplierid,
                    language: l.countryCur
                }
            });
            this.isDefault = !0
        },
        setOptions: function(b) {
            this.options = {
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cJDatailStoreCoupon: ".j-datail-store-coupon",
                cJDatailCouponBoxScroll: ".j-datail-coupon-boxScroll",
                cJStoreCouponLayer: ".j-storeCouponLayer",
                cOpenLayer: "open-layer1",
                cClosedLayer: "close-layer1",
                itemCode: -1,
                supplierid: "",
                trackSyncData: null,
                template: _.template,
                tpl: h,
                model: new e(b),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                bindStoreCouponInstance: null
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cJDatailStoreCoupon = this.$cJDatailStoreCoupon || $(this.cJDatailStoreCoupon);
            this.$cJDatailCouponBoxScroll = $(this.cJDatailCouponBoxScroll);
            this.$cJStoreCouponLayer = $(this.cJStoreCouponLayer)
        },
        initEvent: function() {
            var b = this,
                a = this.timer;
            this.model.on("storeCouponView:noCouponList", this.noCouponList, this);
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                a && clearTimeout(a);
                a = setTimeout(function() {
                    b.setStoreCouponStyle()
                }, 500)
            })
        },
        loadDefaultShipcostData: function() {
            this.isDefault = !1; - 1 === this.model.get("code") ? (f.events.trigger("popupTip:loading", !0), this.model.fetch({
                    data: {
                        itemID: this.itemCode,
                        supplierid: this.supplierid,
                        language: l.countryCur
                    }
                })) : this.openStoreCouponLayer()
        },
        success: function(b, a, c) {
            if (200 === b.get("code")) 0 < b.get("couponList").length && this.render(b.attributes), this.bindStoreCouponInstance.trigger("bindCouponView:autoBindCoupon"), !1 === this.isDefault && (f.events.trigger("popupTip:loading", !1), this.openStoreCouponLayer());
            else {
                !1 === this.isDefault && (f.events.trigger("popupTip:loading", !1), f.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: a.message
                }));
                try {
                    throw "success(): data is wrong";
                } catch (g) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: g,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: a,
                        custom: {
                            isDefault: this.isDefault,
                            trackSyncData: this.trackSyncData
                        }
                    })
                }
            }
        },
        error: function() {
            !1 === this.isDefault && (f.events.trigger("popupTip:loading", !1), f.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            }));
            try {
                throw "error(): request is wrong";
            } catch (b) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: b,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        noCouponList: function() {
            var b = $(".j-datail-storecoupon");
            b[0] && b.parent(".datail-coupon-one").remove()
        },
        render: function(b) {
            if (-1 !== b.code) {
                var a = this.template,
                    c = this.tpl,
                    g = a(c.main.join(""))(b),
                    k = a(c.title.join(""))(b),
                    e = a(c.products.join(""))(b),
                    f = a(c.storeCouponMain.join(""))(b);
                b = a(c.storeCouponList.join(""))(b);
                g = g.replace(/\{\{title\}\}/, k).replace(/\{\{products\}\}/, e);
                f = f.replace(/\{\{storeCouponList\}\}/, b);
                this.$cJStoreCouponLayer[0] || (this.$cJDatailStoreCoupon.html(g).removeClass(this.cHide), this.$body.append(f), this.initElement())
            }
        },
        setStoreCouponPageStyle: function(b) {
            var a = this.$html,
                c = this.$body,
                g = this.cHtml;
            !0 === b ? (this.__scrollY = parseInt(this.$window.scrollTop()), a.addClass(g), c.css({
                    "margin-top": -this.__scrollY
                })) : (a.removeClass(g), c.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        setStoreCouponStyle: function() {
            var b = $(this.cJDatailCouponBoxScroll),
                a, c = 1 * this.$window.height(),
                g = 1 * (b.outerHeight() - b.height()),
                k = 0;
            a = b.siblings();
            $.each(a, function(a, c) {
                k += 1 * $(c).outerHeight()
            });
            b.css({
                height: c - k - g - 10
            })
        },
        openStoreCouponLayer: function() {
            var b = this.$cJStoreCouponLayer,
                a = this.cOpenLayer,
                c = this.cClosedLayer,
                g = this.cHide;
            setTimeout($.proxy(function() {
                this.setStoreCouponPageStyle(!0);
                b.removeClass(g);
                this.setStoreCouponStyle();
                setTimeout(function() {
                    b.removeClass(c).addClass(a)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        closedStoreCouponLayer: function() {
            var b = this.$cJStoreCouponLayer,
                a = this.cOpenLayer,
                c = this.cClosedLayer,
                g = this.cHide;
            setTimeout($.proxy(function() {
                this.setStoreCouponPageStyle(!1);
                b.removeClass(a).addClass(c);
                setTimeout(function() {
                    b.addClass(g)
                }, 260);
                l.preventClick()
            }, this), 200)
        }
    })
});
define("common/coupon/bindStoreCoupon", "common/config lib/backbone common/getUserInfo tpl/coupon/getStoreCouponListTpl checkoutflow/popupTip checkoutflow/dataErrorLog tools/getSpecifyUrlParam".split(" "), function(l, h, f, m, e, b, a) {
    var c = h.Model.extend({
        defaults: function() {
            return {
                code: 200
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/coupon-Coupon-bindCouponToBuyer.do",
                    data: {
                        version: 3.3,
                        client: "wap"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {};
            c.code = "0x0000" === a.state ? 200 : "0x0511" === a.state ? 201 : "0x0505" === a.state ? 202 : -1;
            return c
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-sCoupon-btn": "bindCoupon"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cStoreCouponSold = this.options.cStoreCouponSold;
            this.cJGetNowCJpopGetNow = this.options.cJGetNowCJpopGetNow;
            this.cJGetNow = this.options.cJGetNow;
            this.cJPopGetNow = this.options.cJPopGetNow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.couponListInstace = this.options.couponListInstace;
            this.initElement();
            this.initEvent()
        },
        setOptions: function(a) {
            this.options = {
                cStoreCouponSold: "store-coupon-sold",
                cJGetNowCJpopGetNow: ".j-getNow,.j-popGetNow",
                cJGetNow: ".j-getNow",
                cJPopGetNow: ".j-popGetNow",
                template: _.template,
                tpl: m,
                model: new c,
                dataErrorLog: new b({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                couponListInstace: null
            };
            $.extend(!0, this.options, a || {})
        },
        success: function(a, c, b) {
            e.events.trigger("popupTip:loading", !1);
            if (200 === a.get("code")) this.successCallback("Congratrulations! You got this seller'scoupon!");
            else if (201 === a.get("code")) this.doneCallback("Sorry, we're currently out of coupons.");
            else if (202 === a.get("code")) this.successCallback("You already got this coupon.");
            else {
                e.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: c.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (t) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: t,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (g) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: g,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        initElement: function() {
            this.$cJGetNow = $(this.cJGetNow);
            this.$cJPopGetNow = $(this.cJPopGetNow)
        },
        initEvent: function() {
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.on("bindCouponView:autoBindCoupon", this.autoBindCoupon, this);
            this.on("bindCouponView:cartAutoBindCoupon", this.cartAutoBindCoupon, this)
        },
        autoBindCoupon: function() {
            var c = a({
                    name: "couponCode"
                }),
                b = $("dl[data-couponcode='" + c + "']");
            "" !== c && 0 < b.length && this.bindCoupon(b)
        },
        cartAutoBindCoupon: function() {
            var c = this.urlCouponCode = a({
                    name: "couponCode"
                }),
                b = $("dl[data-couponcode='" + c + "']");
            "" !== c && this.bindCoupon(b, c)
        },
        bindCoupon: function(a, c) {
            var b = this.currentTarget = a.currentTarget ? $(a.currentTarget) : a,
                g = 0 === b.length ? c : b.attr("data-couponcode");
            "cart" === $("body").attr("data-type") ? this.couponSource = "WAP_Cart" : this.couponSource = "WAP_ItemPage";
            "y" !== b.attr("data-status") && (e.events.trigger("popupTip:loading", !0), f.init({
                fixedURL: "integrate_popup",
                isSetPageStyle: !1,
                loginSuccessCallback: $.proxy(function() {
                    this.model.fetch({
                        data: {
                            couponCode: g,
                            couponSource: this.couponSource
                        }
                    })
                }, this)
            }))
        },
        successCallback: function(a) {
            var c = this.currentTarget.attr("data-couponcode"),
                b = this.currentTarget.attr("data-couponType"),
                g = $("dl[data-couponcode='" + c + "']"),
                f = this.cJGetNow,
                h = this.cJPopGetNow,
                l = this.couponListInstace && this.couponListInstace.model.get("couponList");
            g.attr("data-status", "y");
            $.each(g, function(a, g) {
                var k = $(g);
                k.addClass("store-coupon-received").removeClass("store-coupon-sell com-ripple-btn");
                "Bonus" === b ? (k.find(f).html('<a href="/search.do?pageType=crossStore&amp;pageParam=' + c + '">Use Now</a>'), k.find(h).html('<span class="useNow com-ripple-btn"><a href="/search.do?pageType=crossStore&amp;pageParam=' + c + '">Use now</a></span>')) : (k.find(f).html("Received"), k.find(h).html(""))
            });
            e.events.trigger("popupTip:autoTip", {
                message: a,
                timer: 1E3
            });
            this.couponListInstace && this.couponListInstace.model.trigger("couponListModel:updeatCouponState", c || this.urlCouponCode, l)
        },
        doneCallback: function(a) {
            var c = this.currentTarget.attr("data-couponcode"),
                b = $("dl[data-couponcode='" + c + "']"),
                g = this.cStoreCouponSold,
                f = this.cJGetNowCJpopGetNow,
                h = this.couponListInstace && this.couponListInstace.model.get("couponList");
            b.attr("data-status", "y");
            $.each(b, function(a, c) {
                var b = $(c);
                b.find(f).html("Out of Coupons");
                b.addClass(g).removeClass("com-ripple-btn")
            });
            e.events.trigger("popupTip:autoTip", {
                message: a,
                timer: 1E3
            });
            this.couponListInstace && this.couponListInstace.model.trigger("couponListModel:updeatCouponState", c || this.urlCouponCode, h)
        }
    })
});
define("common/detail/getFavoriteState", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    return {
        get: function(m, e) {
            $.ajax({
                type: "GET",
                url: l.wwwURL + m.url,
                data: m.data,
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(b) {
                    h.events.trigger("popupTip:loading", !1);
                    if ("0x0000" === b.state) e && e();
                    else {
                        h.events.trigger("popupTip:dataErrorTip", {
                            action: "close",
                            message: b.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (a) {
                            f.events.trigger("save:dataErrorLog", {
                                message: a,
                                url: m.url,
                                params: m.data,
                                result: b
                            })
                        }
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (b) {
                        f.events.trigger("save:dataErrorLog", {
                            message: b,
                            url: m.url,
                            params: m.data
                        })
                    }
                }
            })
        }
    }
});
define("common/detail/favorite", "common/config lib/backbone tpl/detail/getFavoriteTpl common/detail/getFavoriteState checkoutflow/popupTip checkoutflow/dataErrorLog".split(" "), function(l, h, f, m, e, b) {
    var a = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                data: {
                    count: "",
                    favorite: ""
                }
            }
        },
        initialize: function(a, b) {
            this.setOptions(b);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/favorite-Favorite-exists.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, b, k) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, k || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, k))
        },
        parse: function(a) {
            var c = {};
            c.code = "0x0000" === a.state ? 200 : -1;
            c.data = {}; - 1 !== c.code && (c.data.count = a.data.count, c.data.favorite = a.data.favorite);
            return c
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-favBtn": "changeFavState"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cDetailSilder = this.options.cDetailSilder;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.FastClick = this.options.FastClick;
            this.dataErrorLog = this.options.dataErrorLog;
            this.itemCode = this.options.itemCode;
            this.productId = this.options.productId;
            this.addToFavParam = this.options.addToFavParam;
            this.addToFavParam.data.itemCode = this.itemCode;
            this.cancelToFavParam = this.options.cancelToFavParam;
            this.cancelToFavParam.data.itemCodes = this.itemCode;
            this.cFavNum = this.options.cFavNum;
            this.cFavStyle = this.options.cFavStyle;
            this.cBtoFav = this.options.cBtoFav;
            this.active = this.options.active;
            this.cBtoActive = this.options.cBtoActive;
            this.initElement();
            this.initEvent();
            this.model.fetch({
                data: {
                    productId: this.productId
                }
            })
        },
        initElement: function() {
            this.$cDetailSilder = $(this.options.cDetailSilder);
            this.$cFavNum = $(this.cFavNum);
            this.$cFavStyle = $(this.cFavStyle);
            this.$cBtoFav = $(this.cBtoFav)
        },
        initEvent: function() {
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        setOptions: function(c) {
            this.options = {
                cDetailSilder: ".j-detail-silder",
                cHide: "dhm-hide",
                active: "slider-icon2",
                cFavNum: ".j-num",
                cFavStyle: ".j-favStyle",
                cBtoFav: ".j-bto-fav",
                cBtoActive: "layer-bottom-collection-hover",
                template: _.template,
                tpl: f,
                model: new a,
                dataErrorLog: new b({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                addToFavParam: {
                    data: {
                        pageType: "1",
                        itemCode: this.itemCode,
                        client: "wap",
                        version: "0.1"
                    },
                    url: "/mobileApiWeb/favorite-Favorite-favorite.do"
                },
                cancelToFavParam: {
                    data: {
                        itemCodes: this.itemCode,
                        client: "wap",
                        version: "0.1"
                    },
                    url: "/mobileApiWeb/favorite-Favorite-unFavorite.do"
                }
            };
            $.extend(!0, this.options, c || {})
        },
        success: function(a, b, k) {
            this.render(a.attributes);
            if (-1 === a.get("code")) try {
                throw "success(): data is wrong";
            } catch (n) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: n,
                    url: this.model.__params.url,
                    params: this.model.__params.data,
                    result: b
                })
            }
        },
        error: function(a, b, k) {
            try {
                throw "error(): request is wrong";
            } catch (n) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: n,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template(this.tpl.join(""))(a);
            this.$cDetailSilder.append(c);
            this.initElement();
            "1" === a.data.favorite ? this.$cBtoFav.addClass(this.cBtoActive) : this.$cBtoFav.removeClass(this.cBtoActive)
        },
        changeFavState: function(a) {
            a = $(a.currentTarget);
            e.events.trigger("popupTip:loading", !0);
            !this.$cFavStyle.hasClass(this.active) || this.$cBtoFav[0] && !this.$cBtoFav.hasClass(this.cBtoActive) ? m.get(this.addToFavParam, this.addToFav(a)) : m.get(this.cancelToFavParam, this.cancelToFav(a))
        },
        addToFav: function(a) {
            var c = parseInt(this.$cFavNum.html());
            "botFav" !== a.attr("data-style") ? this.calNum(a, "+") : this.$cFavNum.html(c + 1);
            this.$cFavStyle.addClass(this.active);
            this.$cBtoFav.addClass(this.cBtoActive)
        },
        cancelToFav: function(a) {
            var c = parseInt(this.$cFavNum.html());
            "botFav" !== a.attr("data-style") ? this.calNum(a, "-") : this.$cFavNum.html(c - 1);
            this.$cFavStyle.removeClass(this.active);
            this.$cBtoFav.removeClass(this.cBtoActive)
        },
        calNum: function(a, b) {
            var c = this,
                g = $("#J_changeNum");
            g.remove();
            g.length || a.append('<div id="J_changeNum" class="changeNum"><b>' + b + "1</b></div>");
            g = $("#J_changeNum");
            g.animate({
                top: -30
            }, {
                duration: "slow",
                complete: function() {
                    g.remove();
                    var a = c.$cFavNum.text();
                    "" === a && (a = "0");
                    a = parseInt(a);
                    "+" === b ? a++ : a--;
                    0 >= a ? c.$cFavNum.text("") : c.$cFavNum.text(a)
                }
            })
        }
    })
});
define("common/detail/getPopularCountryList", ["common/config"], function(l) {
    return {
        get: function() {
            return [{
                whitherCountryId: "US",
                whitherCountryName: $.lang.unitedStates
            }, {
                whitherCountryId: "RU",
                whitherCountryName: $.lang.russia
            }, {
                whitherCountryId: "BR",
                whitherCountryName: $.lang.brazil
            }, {
                whitherCountryId: "AU",
                whitherCountryName: $.lang.australia
            }, {
                whitherCountryId: "UK",
                whitherCountryName: $.lang.unitedKingdom
            }, {
                whitherCountryId: "ES",
                whitherCountryName: $.lang.spain
            }, {
                whitherCountryId: "FR",
                whitherCountryName: $.lang.france
            }, {
                whitherCountryId: "CA",
                whitherCountryName: $.lang.canada
            }, {
                whitherCountryId: "PL",
                whitherCountryName: $.lang.poland
            }, {
                whitherCountryId: "TR",
                whitherCountryName: $.lang.turkey
            }, {
                whitherCountryId: "SE",
                whitherCountryName: $.lang.sweden
            }, {
                whitherCountryId: "IL",
                whitherCountryName: $.lang.israel
            }, {
                whitherCountryId: "IT",
                whitherCountryName: $.lang.italy
            }, {
                whitherCountryId: "NZ",
                whitherCountryName: $.lang.newZealand
            }, {
                whitherCountryId: "DE",
                whitherCountryName: $.lang.germany
            }]
        }
    }
});
define("common/detail/getDefaultShipCostAndWay", ["common/config", "lib/backbone", "tpl/detail/getDefaultShipCostAndWayTpl", "checkoutflow/dataErrorLog", "checkoutflow/popupTip"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                isOnekey: "",
                shippingInfoId: "",
                addressline1: "",
                addressline2: "",
                firstname: "",
                lastname: "",
                city: "",
                country: "",
                countryname: "",
                state: "",
                postalcode: "",
                tel: "",
                vatnum: "",
                whitherCountryId: "",
                whitherCountryName: "",
                stockCountryId: "",
                stockCountryName: "",
                expressType: "",
                leadingTime: -1,
                lowerDate: "",
                upperDate: "",
                shipcost: -1
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.initEvent()
        },
        initEvent: function() {
            this.on("GetDefaultShipCostAndWayModel:updateExpress", this.updateExpress, this);
            this.on("GetDefaultShipCostAndWayModel:updateShippingAddress", this.updateShippingAddress, this);
            this.on("GetDefaultShipCostAndWayModel:updateAll", this.updateAll, this)
        },
        setOptions: function(a) {
            this.options = {};
            $.extend(!0, this.options, a || {})
        },
        updateExpress: function(a) {
            this.set({
                stockCountryId: a.stockCountryId,
                stockCountryName: a.stockCountryName,
                expressType: a.expressType,
                leadingTime: a.leadingTime,
                lowerDate: a.lowerDate,
                upperDate: a.upperDate,
                shipcost: a.shipcost
            })
        },
        updateShippingAddress: function(a) {
            this.set({
                shippingInfoId: a.shippingInfoId,
                addressline1: a.addressOne,
                addressline2: a.addressTwo,
                firstname: a.firstName,
                lastname: a.lastName,
                city: a.city,
                country: a.countryId,
                countryname: a.country,
                state: a.state,
                postalcode: a.zipCode,
                tel: a.telephone,
                vatnum: a.vatnum
            })
        },
        updateAll: function(a) {
            this.set({
                whitherCountryId: a.whitherCountryId,
                whitherCountryName: a.whitherCountryName,
                stockCountryId: a.stockCountryId,
                stockCountryName: a.stockCountryName,
                expressType: a.expressType,
                leadingTime: a.leadingTime,
                lowerDate: a.lowerDate,
                upperDate: a.upperDate,
                shipcost: a.shipcost
            })
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-shipcostBtn": "loadDefaultShipcostData",
            "click .j-shipCostLayerClose": "hideShipCostLayer"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cShipCostPageWarp = this.options.cShipCostPageWarp;
            this.cShipCostLayerWarp = this.options.cShipCostLayerWarp;
            this.cCurShipCostInfoWarp = this.options.cCurShipCostInfoWarp;
            this.cWhitherCountryWarp = this.options.cWhitherCountryWarp;
            this.cCurShippingAddressInfo = this.options.cCurShippingAddressInfo;
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.callback = this.options.callback;
            this.getTotalPrice = this.options.getTotalPrice;
            this.selectCoupon = this.options.selectCoupon;
            this.timer = null;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cShipCostPageWarp = this.$cShipCostPageWarp || $(this.cShipCostPageWarp);
            this.$cShipCostLayerWarp = $(this.cShipCostLayerWarp);
            this.$cCurShipCostInfoWarp = $(this.cCurShipCostInfoWarp);
            this.$cWhitherCountryWarp = $(this.cWhitherCountryWarp);
            this.$cCurShippingAddressInfo = $(this.cCurShippingAddressInfo)
        },
        initEvent: function() {
            this.on("GetDefaultShipCostAndWayView:showShipCostLayer", this.loadDefaultShipcostData, this);
            this.on("GetDefaultShipCostAndWayView:upadteShipCostInfo", this.upadteShipCostInfo, this);
            this.listenTo(this.model, "change:shippingInfoId", this.renderPageShipCostInfo);
            this.listenTo(this.model, "change:shippingInfoId", this.renderCurShippingAddressInfo);
            this.listenTo(this.model, "change:shippingInfoId", function() {
                this.productAttrPopupInstance && this.productAttrPopupInstance.model.trigger("productAttrPopupModel:setShippingInfoId", {
                    shippingInfoId: this.model.get("shippingInfoId")
                })
            });
            this.listenTo(this.model, "change:shipcost", this.renderPageShipCostInfo);
            this.listenTo(this.model, "change:shipcost", this.renderCurShipCostInfo);
            this.listenTo(this.model, "change:shipcost", this.renderCurShippingAddressInfo);
            this.listenTo(this.model, "change:shipcost", function() {
                var a;
                this.productAttrPopupInstance && (a = this.productAttrPopupInstance.model, a.trigger("productAttrPopupModel:getShipCost", this.model.get("shipcost")), "y" !== a.get("isOneKey") || void 0 === a.get("submitData").skuMd5 && void 0 === a.get("submitData").skuid || !1 !== a.isSkuToShipcost || (this.timer && clearTimeout(this.timer), this.timer = setTimeout($.proxy(function() {
                    0 <= this.model.get("shipcost") ? this.getTotalPrice.trigger("GetTotalPriceView:load", {
                            params: $.extend({
                                itemcode: a.get("submitData").itemCode,
                                skuId: a.get("submitData").skuid,
                                skuMd5: a.get("submitData").skuMd5,
                                quantity: a.get("submitData").quantity,
                                shiptype: a.get("submitData").shipTypeId,
                                shipAddrId: a.get("submitData").shipAddrId,
                                stockCountry: a.get("submitData").stockIn
                            }, this.selectCoupon.model.getCouponCodeGroup())
                        }) : (this.getTotalPrice.trigger("GetTotalPriceView:hide"), this.selectCoupon.trigger("SelectCouponView:hide"))
                }, this), 30)))
            });
            this.listenTo(this.model, "change:expressType", this.renderPageShipCostInfo);
            this.listenTo(this.model, "change:expressType", this.renderCurShipCostInfo);
            this.listenTo(this.model, "change:expressType", function() {
                this.productAttrPopupInstance && this.productAttrPopupInstance.model.trigger("productAttrPopupModel:shipToCountryShipTypeId", {
                    shipTypeId: this.model.get("expressType")
                })
            });
            this.listenTo(this.model, "change:whitherCountryId", this.renderPageShipCostInfo);
            this.listenTo(this.model, "change:whitherCountryId", this.renderCurShipCostInfo);
            this.listenTo(this.model, "change:whitherCountryId", this.renderCurWhitherCountry);
            this.listenTo(this.model, "change:whitherCountryId", function() {
                var a;
                this.productAttrPopupInstance && (a = this.productAttrPopupInstance.model, a.trigger("productAttrPopupModel:shipToCountryShipTypeId", {
                    shipToCountry: this.model.get("whitherCountryId")
                }), "y" !== a.get("isOneKey") || void 0 === a.get("submitData").skuMd5 && void 0 === a.get("submitData").skuid || (this.timer && clearTimeout(this.timer), this.timer = setTimeout($.proxy(function() {
                    0 <= this.model.get("shipcost") ? this.getTotalPrice.trigger("GetTotalPriceView:load", {
                            params: $.extend({
                                itemcode: a.get("submitData").itemCode,
                                skuId: a.get("submitData").skuid,
                                skuMd5: a.get("submitData").skuMd5,
                                quantity: a.get("submitData").quantity,
                                shiptype: a.get("submitData").shipTypeId,
                                shipAddrId: a.get("submitData").shipAddrId,
                                stockCountry: a.get("submitData").stockIn
                            }, this.selectCoupon.model.getCouponCodeGroup()),
                            successCallback: $.proxy(function() {
                                var a = this.getTotalPrice.model;
                                if (!0 === a.get("hasSellerCoupon") || !0 === a.get("hasDhCoupon")) this.selectCoupon.trigger("SelectCouponView:renderPageCouponInfo", {
                                    hasDhCoupon: a.get("hasDhCoupon"),
                                    hasSellerCoupon: a.get("hasSellerCoupon"),
                                    sellerCouponInfo: a.get("sellerCouponInfo"),
                                    dhCouponInfo: a.get("dhCouponInfo")
                                }), this.selectCoupon.model.trigger("SelectCouponModel:setStaticPro", {
                                    type: "system",
                                    sellerCouponCode: a.get("sellerCouponCode"),
                                    dhCouponCode: a.get("dhCouponCode"),
                                    itemsSubtotal: 1 * a.get("itemsSubtotal").replace(/^\D*(\d+)/, "$1"),
                                    orderSave: 1 * a.get("orderSave").replace(/^\D*(\d+)/, "$1")
                                }), this.selectCoupon.params = $.extend({}, {
                                    itemCode: this.productAttrPopupInstance.model.get("submitData").itemCode,
                                    supplierId: this.productAttrPopupInstance.originalSyncData.supplierid,
                                    cateDispId: this.productAttrPopupInstance.originalSyncData.cateDispId,
                                    amount: 1 * a.get("itemsSubtotal").replace(/^\D*(\d+)/, "$1"),
                                    skuId: this.productAttrPopupInstance.model.get("submitData").skuid,
                                    skuMd5: this.productAttrPopupInstance.model.get("submitData").skuMd5,
                                    quantity: this.productAttrPopupInstance.model.get("submitData").quantity,
                                    shiptype: this.productAttrPopupInstance.model.get("submitData").shipTypeId,
                                    shipAddrId: this.productAttrPopupInstance.model.get("submitData").shipAddrId,
                                    stockCountry: this.productAttrPopupInstance.model.get("submitData").stockIn
                                })
                            }, this)
                        }) : (this.getTotalPrice.trigger("GetTotalPriceView:hide"), this.selectCoupon.trigger("SelectCouponView:hide"))
                }, this), 30)))
            })
        },
        setOptions: function(a) {
            this.options = {
                cShipCostPageWarp: ".j-shipcostBtn",
                cShipCostLayerWarp: ".j-shipCostLayerWarp",
                cCurShipCostInfoWarp: ".j-curShipCostInfoWarp",
                cWhitherCountryWarp: ".j-whitherCountryWarp",
                cCurShippingAddressInfo: ".j-shippingAddressWarp",
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer1",
                cAnimateShow: "open-layer1",
                template: _.template,
                tpl: f,
                model: new b(a.defaultShipCost || {}),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                callback: $.noop
            };
            $.extend(!0, this.options, a || {})
        },
        firstAccess: function() {
            this.render(this.model.attributes);
            this.initElement();
            this.callback(this.model)
        },
        loadDefaultShipcostData: function() {
            this.flag = "EVENT_0";
            this.getShipCostAndWayListInstance && -1 !== this.getShipCostAndWayListInstance.model.get("code") ? (this.showShipCostLayer(), this.getShipCostAndWayListInstance.trigger("GetShipCostAndWayListView:setShipCostStyle")) : (e.events.trigger("popupTip:loading", !0), this.firstAccess())
        },
        upadteShipCostInfo: function(a) {
            this.flag = "EVENT_1";
            !1 === _.isObject(a) && (a = {});
            this.quantity = a.quantity || this.options.quantity;
            this.skuId = a.skuId || "";
            this.skuMd5 = a.skuMd5 || "";
            this.stockCountryId = a.stockCountryId || "";
            this.updateCallback = a.updateCallback || $.noop;
            this.getShipCostAndWayListInstance && -1 !== this.getShipCostAndWayListInstance.model.get("code") ? this.getShipCostAndWayListInstance.trigger("GetShipCostAndWayListView:loadShipcostListData", {
                    quantity: this.quantity,
                    skuId: this.skuId,
                    skuMd5: this.skuMd5,
                    stockCountryId: this.stockCountryId || this.model.get("stockCountryId"),
                    updateCallback: a.updateCallback || $.noop
                }) : this.firstAccess()
        },
        isModelInstance: function(a) {
            return _.has(a, "attributes")
        },
        getData: function(a) {
            return this.isModelInstance(a) ? a.attributes : a
        },
        render: function(a) {
            var c = this.template,
                c = c(this.tpl.main.join(""))(a),
                b = "y" !== this.model.get("isOnekey") ? this.renderCurShipCostInfo(a) : "",
                k = "y" !== this.model.get("isOnekey") ? this.renderCurWhitherCountry(a) : "";
            a = "y" === this.model.get("isOnekey") ? this.renderCurShippingAddressInfo(a) : "";
            c = c.replace(/\{\{main\}\}/, c).replace(/\{\{curShipCostInfo\}\}/, b).replace(/\{\{curWhitherCountry\}\}/, k).replace(/\{\{curShippingAddressInfo\}\}/, a);
            this.$body.append(c)
        },
        renderCurShipCostInfo: function(a) {
            var c = this.$cCurShipCostInfoWarp,
                b = this.template,
                b = b(this.tpl.curShipCostInfo.join(""))(this.getData(a)),
                b = b.replace(/\{\{curShipCostInfo\}\}/, b);
            if (this.isModelInstance(a) && "y" !== this.model.get("isOnekey")) c[0] && c.html(b);
            else return b
        },
        renderCurWhitherCountry: function(a) {
            var c = this.$cWhitherCountryWarp,
                b = this.template,
                b = b(this.tpl.curWhitherCountry.join(""))(this.getData(a)),
                b = b.replace(/\{\{curWhitherCountry\}\}/, b);
            if (this.isModelInstance(a) && "y" !== this.model.get("isOnekey")) c[0] && c.html(b);
            else return b
        },
        renderCurShippingAddressInfo: function(a) {
            var c = this.$cCurShippingAddressInfo,
                b = this.template,
                b = b(this.tpl.curShippingAddressInfo.join(""))(this.getData(a)),
                b = b.replace(/\{\{curShippingAddressInfo\}\}/, b);
            if (this.isModelInstance(a) && "y" === this.model.get("isOnekey")) c[0] && c.html(b);
            else return b
        },
        renderPageShipCostInfo: function(a) {
            var c = this.$cShipCostPageWarp,
                b = this.template;
            a = b(this.tpl.pageShipCostInfo.join(""))(this.getData(a));
            a = a.replace(/\{\{pageShipCostInfo\}\}/, a);
            c[0] && c.html(a)
        },
        setPageStyle: function(a) {
            var c = this.$html,
                b = this.$body,
                k = this.cHtml;
            !0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), c.addClass(k), b.css({
                    "margin-top": -this.__scrollY
                })) : (c.removeClass(k), b.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        showShipCostLayer: function() {
            var a = this.$cShipCostLayerWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                k = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!0);
                a.removeClass(c);
                setTimeout(function() {
                    a.removeClass(b).addClass(k)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        hideShipCostLayer: function() {
            var a = this.$cShipCostLayerWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                k = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!1);
                a.removeClass(k).addClass(b);
                setTimeout(function() {
                    a.addClass(c)
                }, 260);
                l.preventClick()
            }, this), 200)
        }
    })
});
define("common/detail/getShipCostAndWayList", ["common/config", "lib/backbone", "tpl/detail/getShipCostAndWayListTpl", "checkoutflow/dataErrorLog", "checkoutflow/popupTip"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: [{
                    stockCountryId: "",
                    stockCountryName: "",
                    expressType: "",
                    leadingTime: -1,
                    deliveryTime: "",
                    lowerDate: "",
                    upperDate: "",
                    shipcost: -1
                }]
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions;
            this.getDefaultShipCostAndWayInstance = this.options.getDefaultShipCostAndWayInstance;
            this.initEvent()
        },
        initEvent: function() {
            this.on("GetShipCostAndWayListModel:findSelectedExpress", this.findSelectedExpress, this)
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-shipCostAndWay.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                },
                getDefaultShipCostAndWayInstance: {}
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {};
            c.code = "0x0000" === a.state ? 200 : -1;
            c.list = []; - 1 !== c.code && ($.each(a.data || [], function(a, b) {
                var g = {};
                g.stockCountryId = b.stockCountryId;
                g.stockCountryName = b.stockCountryName;
                g.expressType = b.expressType;
                g.leadingTime = b.leadingTime;
                g.deliveryTime = b.deliveryTime;
                g.lowerDate = b.lowerDate;
                g.upperDate = b.upperDate;
                g.shipcost = b.shipcost;
                c.list.push(g)
            }), 1 > c.list.length && c.list.push({
                stockCountryId: "",
                stockCountryName: "",
                expressType: "",
                leadingTime: -1,
                deliveryTime: "",
                lowerDate: "",
                upperDate: "",
                shipcost: -1
            }));
            return c
        },
        findSelectedExpress: function(a) {
            this.getDefaultShipCostAndWayInstance.model.trigger("GetDefaultShipCostAndWayModel:updateExpress", this.get("list")[a])
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-expressTypeListContent .free-route-text": "selectedExpress"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cExpressTypeListWarp = this.options.cExpressTypeListWarp;
            this.cExpressTypeListContent = this.options.cExpressTypeListContent;
            this.cSelectExpress = this.options.cSelectExpress;
            this.itemcode = this.options.itemcode;
            this.quantity = this.options.quantity;
            this.skuId = this.options.skuId;
            this.skuMd5 = this.options.skuMd5;
            this.whitherCountryId = this.options.whitherCountryId;
            this.whitherCountryName = this.options.whitherCountryName;
            this.stockCountryId = this.options.stockCountryId;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.updateCallback = this.options.updateCallback;
            this.getDefaultShipCostAndWayInstance = this.options.getDefaultShipCostAndWayInstance;
            this.timer = null;
            this.initElement();
            this.initEvent();
            this.loadShipcostListData()
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$cExpressTypeListWarp = this.$cExpressTypeListWarp || $(this.cExpressTypeListWarp)
        },
        initEvent: function() {
            var a = this,
                c = this.timer;
            this.on("GetShipCostAndWayListView:loadShipcostListData", this.loadShipcostListData, this);
            this.on("GetShipCostAndWayListView:selectedExpress", this.selectedExpress, this);
            this.on("GetShipCostAndWayListView:setShipCostStyle", this.setShipCostStyle, this);
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                c && clearTimeout(c);
                c = setTimeout(function() {
                    a.setShipCostStyle()
                }, 500)
            })
        },
        setOptions: function(a) {
            this.options = {
                cExpressTypeListWarp: ".j-expressTypeListWarp",
                cExpressTypeListContent: ".j-expressTypeListContent",
                cSelectExpress: "free-current-frame",
                itemcode: -1,
                quantity: -1,
                skuId: "",
                skuMd5: "",
                whitherCountryId: "",
                whitherCountryName: "",
                stockCountryId: "",
                template: _.template,
                tpl: f,
                model: new b(null, {
                    getDefaultShipCostAndWayInstance: a.getDefaultShipCostAndWayInstance
                }),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                updateCallback: $.noop,
                getDefaultShipCostAndWayInstance: null
            };
            $.extend(!0, this.options, a || {})
        },
        getParam: function(a) {
            var c = {};
            !1 === _.isObject(a) && (a = {});
            c.itemcode = this.itemcode;
            c.quantity = a.quantity ? this.quantity = a.quantity : this.quantity;
            c.country = a.whitherCountryId ? this.whitherCountryId = a.whitherCountryId : this.whitherCountryId;
            c.stockCountry = a.stockCountryId ? this.stockCountryId = a.stockCountryId : this.stockCountryId;
            c.skuId = a.skuId ? this.skuId = a.skuId : this.skuId;
            c.skuMd5 = a.skuMd5 ? this.skuMd5 = a.skuMd5 : this.skuMd5;
            if ("" === c.skuId || "" === c.skuMd5) delete c.skuId, delete c.skuMd5;
            return c
        },
        loadShipcostListData: function(a) {
            a && a.updateCallback && (this.updateCallback = a.updateCallback);
            a && a.whitherCountryName && (this.whitherCountryName = a.whitherCountryName);
            this.model.fetch({
                data: this.getParam(a)
            })
        },
        success: function(a, c, b) {
            b = this.getDefaultShipCostAndWayInstance;
            if (200 === a.get("code")) this.render(a.attributes), "EVENT_0" === b.flag ? (e.events.trigger("popupTip:loading", !1), b.trigger("GetDefaultShipCostAndWayView:showShipCostLayer")) : "EVENT_1" === b.flag && (c = $(this.cExpressTypeListContent).find("div[data-type='" + b.model.get("expressType") + "']").index(), 0 > c && (this.selectedExpress(0), c = 0), a.trigger("GetShipCostAndWayListModel:findSelectedExpress", c), this.updateCallback && this.updateCallback({
                    model1: b.model,
                    model2: a,
                    defaultExpressIndex: c
                })), this.setShipCostStyle();
            else {
                b.productAttrPopupInstance.model.isSkuToShipcost = !1;
                e.events.trigger("popupTip:loading", !1);
                e.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: c.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (k) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: k,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            this.getDefaultShipCostAndWayInstance.productAttrPopupInstance.model.isSkuToShipcost = !1;
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (a) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: a,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                k = this.getDefaultShipCostAndWayInstance,
                e = c(b.main.join(""))(a),
                k = c(b.shipCostlist.join(""))($.extend({}, a, {
                    selectExpressType: k.model.get("expressType")
                }));
            a = c(b.noArrive.join(""))($.extend({}, a, {
                whitherCountryName: this.whitherCountryName
            }));
            e = e.replace(/\{\{main\}\}/, e).replace(/\{\{shipCostlist\}\}/, k).replace(/\{\{noArrive\}\}/, a);
            this.$cExpressTypeListWarp.html(e)
        },
        selectedExpress: function(a) {
            var c, b, e = this.cSelectExpress;
            b = this.model;
            if (a.currentTarget) b = $(a.currentTarget), b.hasClass(e) || (b.siblings().removeClass(e), b.addClass(e), this.model.trigger("GetShipCostAndWayListModel:findSelectedExpress", b.index()));
            else if (1 !== b.get("list").length || -1 !== b.get("list")[0].shipcost) c = $(this.cExpressTypeListContent), b = c.find("." + e), c = c.find("div[data-type]"), b.removeClass(e), $(c[a]).addClass(e)
        },
        setShipCostStyle: function() {
            setTimeout($.proxy(function() {
                var a = $(this.cExpressTypeListContent),
                    c, b = 1 * this.$window.height(),
                    e = 1 * (a.outerHeight() - a.height()),
                    f = 0;
                a[0] && (c = a.siblings(), $.each(c, function(a, c) {
                    f += 1 * $(c).outerHeight()
                }), c = a.parent().siblings(), $.each(c, function(a, c) {
                    f += 1 * $(c).outerHeight()
                }), a.css({
                    height: b - f - e
                }))
            }, this), 200)
        }
    })
});
define("common/detail/getShiptoCountryList", "common/config lib/backbone tpl/detail/getShiptoCountryListTpl checkoutflow/dataErrorLog checkoutflow/popupTip common/detail/getPopularCountryList".split(" "), function(l, h, f, m, e, b) {
    var a = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                popular: [{
                    whitherCountryId: "",
                    whitherCountryName: ""
                }],
                all: {
                    A: [{
                        whitherCountryId: "",
                        whitherCountryName: ""
                    }]
                },
                currentWhitherCountryId: ""
            }
        },
        initialize: function(a, b) {
            this.setOptions(b);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-whitherCountry.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, b, e) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, e || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, e))
        },
        parse: function(a) {
            var c = {},
                e;
            c.code = "0x0000" === a.state ? 200 : -1;
            c.popular = b.get();
            e = this.getPopularWhitherCountryIdStr(c.popular);
            c.all = {}; - 1 !== c.code && $.each(a.data, function(a, b) {
                c.all[a] = [];
                $.each(b, function(b, g) {
                    var k = {};
                    (new RegExp("\\b" + g.countryId + "\\b")).test(e) || (k.whitherCountryId = g.countryId, k.whitherCountryName = g.countryName, c.all[a].push(k))
                })
            });
            return c
        },
        getPopularWhitherCountryIdStr: function(a) {
            var c = [];
            $.each(a, function(a, b) {
                c.push(b.whitherCountryId)
            });
            return c.join(";")
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-whitherCountryBtn": "loadCountryData",
            "click .j-shiptoCountryClose": "hideShipToLayerLayer",
            "click .j-shiptoCountryWarp li[data-whithercountryid]": "selectShipToCountry"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cShiptoCountryWarp = this.options.cShiptoCountryWarp;
            this.cShiptoCountryContent = this.options.cShiptoCountryContent;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.getDefaultShipCostAndWayInstance = this.options.getDefaultShipCostAndWayInstance;
            this.getShipCostAndWayListInstance = this.options.getShipCostAndWayListInstance;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cShiptoCountryWarp = $(this.cShiptoCountryWarp);
            this.$cShiptoCountryContent = $(this.cShiptoCountryContent)
        },
        initEvent: function() {
            var a = this,
                b = this.timer;
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                b && clearTimeout(b);
                b = setTimeout(function() {
                    a.setCountryStyle()
                }, 500)
            })
        },
        setOptions: function(c) {
            this.options = {
                cShiptoCountryWarp: ".j-shiptoCountryWarp",
                cShiptoCountryContent: ".j-shiptoCountryContent",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer2",
                cAnimateShow: "open-layer2",
                template: _.template,
                tpl: f,
                model: new a({
                    currentWhitherCountryId: c.currentWhitherCountryId
                }),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                getDefaultShipCostAndWayInstance: null,
                getShipCostAndWayListInstance: null
            };
            $.extend(!0, this.options, c || {})
        },
        loadCountryData: function() {
            -1 === this.model.get("code") ? (e.events.trigger("popupTip:loading", !0), this.model.fetch()) : this.showShipToLayer()
        },
        success: function(a, b, k) {
            if (200 === a.get("code")) this.render(a.attributes), this.initElement(), e.events.trigger("popupTip:loading", !1), this.showShipToLayer();
            else {
                e.events.trigger("popupTip:loading", !1);
                e.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: b.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (n) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: n,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: b
                    })
                }
            }
        },
        error: function() {
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (c) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: c,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                e = c(b.main.join(""))(a);
            a = c(b.countryList.join(""))(a);
            e = e.replace(/\{\{main\}\}/, e).replace(/\{\{countryList\}\}/, a);
            this.$body.append(e)
        },
        showShipToLayer: function() {
            var a = this.$cShiptoCountryWarp,
                b = this.cHide,
                e = this.cAnimateHide,
                f = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(b);
                setTimeout(function() {
                    a.removeClass(e).addClass(f)
                }, 10);
                this.setCountryStyle();
                l.preventClick()
            }, this), 200)
        },
        hideShipToLayerLayer: function() {
            var a = this.$cShiptoCountryWarp,
                b = this.cHide,
                e = this.cAnimateHide,
                f = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(f).addClass(e);
                setTimeout(function() {
                    a.addClass(b)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        setCountryStyle: function() {
            var a = this.$cShiptoCountryContent,
                b, e = 1 * this.$window.height(),
                f = 0;
            a[0] && (b = a.siblings(), $.each(b, function(a, c) {
                f += 1 * $(c).outerHeight()
            }), a.css({
                height: e - f
            }))
        },
        selectShipToCountry: function(a) {
            var c = $(a.currentTarget),
                b = this.$cShiptoCountryWarp.find("li[data-whithercountryid]");
            a = this.getDefaultShipCostAndWayInstance;
            var f = this.getShipCostAndWayListInstance;
            c.find("span")[0] ? this.hideShipToLayerLayer() : (e.events.trigger("popupTip:loading", !0), a.flag = "EVENT_1", f.trigger("GetShipCostAndWayListView:loadShipcostListData", {
                    whitherCountryId: c.attr("data-whitherCountryId") || "",
                    whitherCountryName: c.attr("data-whitherCountryName") || "",
                    updateCallback: $.proxy(function(a) {
                        this.getDefaultShipCostAndWayInstance.model.trigger("GetDefaultShipCostAndWayModel:updateAll", $.extend({}, a.model2.get("list")[a.defaultExpressIndex], {
                            whitherCountryId: c.attr("data-whitherCountryId"),
                            whitherCountryName: c.attr("data-whitherCountryName")
                        }));
                        b.find("span").remove();
                        c.append("<span>");
                        e.events.trigger("popupTip:loading", !1);
                        this.hideShipToLayerLayer()
                    }, this)
                }))
        }
    })
});
define("common/detail/getShippingAddressList", ["common/config", "lib/backbone", "tpl/detail/getShippingAddressListTpl", "checkoutflow/dataErrorLog", "checkoutflow/popupTip"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: [{
                    defaultAddress: "",
                    shippingInfoId: "",
                    firstName: "",
                    lastName: "",
                    addressOne: "",
                    addressTwo: "",
                    city: "",
                    country: "",
                    countryId: "",
                    state: "",
                    zipCode: "",
                    telephone: "",
                    vatnum: ""
                }],
                __selectCountryId: ""
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions;
            this.getDefaultShipCostAndWayInstance = this.options.getDefaultShipCostAndWayInstance
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/user-Shipping-getShippingAddressList.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                },
                getDefaultShipCostAndWayInstance: null
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {},
                b = this.getDefaultShipCostAndWayInstance.model.get("shippingInfoId");
            "0x0000" === a.state ? (c.code = 200, void 0 !== a.data && _.isArray(a.data) && 0 !== a.data.length || (c.code = -2)) : c.code = -1;
            c.list = [];
            0 < c.code && $.each(a.data, function(a, g) {
                var e = {},
                    k = [];
                b === g.shippingInfoId ? (e.defaultAddress = "1", c.__selectCountryId = g.country) : e.defaultAddress = "0";
                e.shippingInfoId = g.shippingInfoId;
                e.firstName = g.firstname;
                e.lastName = g.lastname;
                e.addressOne = g.addressline1;
                e.addressTwo = g.addressline2;
                e.city = g.city;
                e.country = g.countryname;
                e.countryId = g.country;
                e.state = g.state;
                e.zipCode = g.postalcode;
                e.vatnum = g.vatnum || "";
                "" !== g.callingcode && k.push(g.callingcode);
                k.push(g.tel.replace(/^\d[\d ]*\-(.*)/, "$1"));
                e.telephone = k.join("-");
                c.list.push(e)
            });
            return c
        },
        getCurrentShippingAddress: function(a) {
            for (var c = this.get("list"), b = 0, e = c.length; b < e; b++) if (c[b].shippingInfoId === a) return c[b]
        },
        setSelectCountryId: function(a) {
            this.set({
                __selectCountryId: a
            })
        },
        getSelectCountryId: function() {
            return this.get("__selectCountryId")
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-shippingAddressBtn": "loadShippingAddressData",
            "click .j-shippingAddressClose": "hideShippingAddressLayer",
            "click .j-shippingAddressListWarp li[data-addressId]": "selectShippingAddress"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cShippingAddressListWarp = this.options.cShippingAddressListWarp;
            this.cShippingAddressContent = this.options.cShippingAddressContent;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.getDefaultShipCostAndWayInstance = this.options.getDefaultShipCostAndWayInstance;
            this.getShipCostAndWayListInstance = this.options.getShipCostAndWayListInstance;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cShippingAddressListWarp = $(this.cShippingAddressListWarp);
            this.$cShippingAddressContent = $(this.cShippingAddressContent)
        },
        initEvent: function() {
            var a = this,
                c = this.timer;
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                c && clearTimeout(c);
                c = setTimeout(function() {
                    a.setShippingAddressStyle()
                }, 500)
            })
        },
        setOptions: function(a) {
            this.options = {
                cShippingAddressListWarp: ".j-shippingAddressListWarp",
                cShippingAddressContent: ".j-shippingAddressContent",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer2",
                cAnimateShow: "open-layer2",
                template: _.template,
                tpl: f,
                model: new b(null, {
                    getDefaultShipCostAndWayInstance: a.getDefaultShipCostAndWayInstance
                }),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                getDefaultShipCostAndWayInstance: null,
                getShipCostAndWayListInstance: null
            };
            $.extend(!0, this.options, a || {})
        },
        loadShippingAddressData: function() {
            -1 === this.model.get("code") ? (e.events.trigger("popupTip:loading", !0), this.model.fetch()) : this.showShippingAddressLayer()
        },
        success: function(a, c, b) {
            if (200 === a.get("code")) this.render(a.attributes), this.initElement(), e.events.trigger("popupTip:loading", !1), this.showShippingAddressLayer();
            else {
                e.events.trigger("popupTip:loading", !1); - 1 === a.get("code") ? e.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: c.message
                    }) : -2 === a.get("code") && e.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Service exception."
                    });
                try {
                    throw "success(): data is wrong";
                } catch (k) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: k,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (a) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: a,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                e = c(b.main.join(""))(a);
            a = c(b.shippingAddressList.join(""))(a);
            e = e.replace(/\{\{shippingAddressList\}\}/, a);
            this.$body.append(e)
        },
        showShippingAddressLayer: function() {
            var a = this.$cShippingAddressListWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(c);
                setTimeout(function() {
                    a.removeClass(b).addClass(e)
                }, 10);
                this.setShippingAddressStyle();
                l.preventClick()
            }, this), 200)
        },
        hideShippingAddressLayer: function() {
            var a = this.$cShippingAddressListWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(e).addClass(b);
                setTimeout(function() {
                    a.addClass(c)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        setShippingAddressStyle: function() {
            var a = this.$cShippingAddressContent,
                c, b = 1 * this.$window.height(),
                e = 0;
            a[0] && (c = a.siblings(), $.each(c, function(a, c) {
                e += 1 * $(c).outerHeight()
            }), a.css({
                height: b - e
            }))
        },
        selectShippingAddress: function(a) {
            var c = $(a.currentTarget),
                b = this.$cShippingAddressListWarp.find("li[data-addressId]");
            a = this.getDefaultShipCostAndWayInstance;
            var k = this.getShipCostAndWayListInstance;
            c.find("span")[0] ? this.hideShippingAddressLayer() : (this.getDefaultShipCostAndWayInstance.model.trigger("GetDefaultShipCostAndWayModel:updateShippingAddress", $.extend({}, this.model.getCurrentShippingAddress(c.attr("data-addressId")))), c.attr("data-whitherCountryId") === this.model.getSelectCountryId() ? (b.find("span").remove(), c.append("<span>"), this.hideShippingAddressLayer()) : (this.model.setSelectCountryId(c.attr("data-whitherCountryId")), e.events.trigger("popupTip:loading", !0), a.flag = "EVENT_1", k.trigger("GetShipCostAndWayListView:loadShipcostListData", {
                        whitherCountryId: c.attr("data-whitherCountryId") || "",
                        whitherCountryName: c.attr("data-whitherCountryName") || "",
                        updateCallback: $.proxy(function(a) {
                            this.getDefaultShipCostAndWayInstance.model.trigger("GetDefaultShipCostAndWayModel:updateAll", $.extend({}, a.model2.get("list")[a.defaultExpressIndex], {
                                whitherCountryId: c.attr("data-whitherCountryId"),
                                whitherCountryName: c.attr("data-whitherCountryName")
                            }));
                            b.find("span").remove();
                            c.append("<span>");
                            e.events.trigger("popupTip:loading", !1);
                            this.hideShippingAddressLayer()
                        }, this)
                    })))
        }
    })
});
define("common/detail/findSkuAttr", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var m = l.wwwURL + "/mobileApiWeb/item-Item-getDetailItemDto.do",
        e = {},
        b = {},
        a = {},
        c = {};
    return {
        init: function(a) {
            this.fetch(a)
        },
        getParams: function(a) {
            a = {
                client: "wap",
                version: "0.1",
                itemcode: a.itemcode
            };
            $.extend(e, a);
            return a
        },
        fetch: function(g) {
            $.ajax({
                type: "GET",
                url: m,
                data: this.getParams(g),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(k) {
                    if ("0x0000" === k.state) {
                        this.parse(k);
                        $.extend(!0, a, b.skus);
                        var l, t, r = a;
                        if (r !== Object(r)) {
                            h.events.trigger("popupTip:loading", !1);
                            h.events.trigger("popupTip:dataErrorTip", {
                                action: "refresh",
                                message: "Product is not for sale."
                            });
                            try {
                                throw "error(): Invalid object.";
                            } catch (w) {
                                f.events.trigger("save:dataErrorLog", {
                                    message: w,
                                    url: m,
                                    params: e,
                                    result: {
                                        skuData: r
                                    }
                                })
                            }
                        }
                        k = [];
                        for (l in r) Object.prototype.hasOwnProperty.call(r, l) && (k[k.length] = l);
                        for (l = 0; l < k.length; l++) {
                            var r = k[l],
                                x = a[r],
                                q;
                            if ((t = r.split("_")) && t.length) {
                                q = t.length;
                                for (var u = [], D = 1; D < q; D++) {
                                    var A;
                                    var C, d, p;
                                    A = q;
                                    var B = D;
                                    if (!B || 1 > B) A = [];
                                    else {
                                        var v = [],
                                            y = [],
                                            z = !1;
                                        for (p = 0; p < A; p++) y[p] = p < B ? 1 : 0;
                                        for (v.push(y.concat()); !z;) for (p = C = 0; p < A - 1; p++) {
                                            if (1 == y[p] && 0 == y[p + 1]) {
                                                for (d = 0; d < p; d++) y[d] = d < C ? 1 : 0;
                                                y[p] = 0;
                                                y[p + 1] = 1;
                                                C = y.concat();
                                                v.push(C); - 1 == C.slice(-B).join("").indexOf("0") && (z = !0);
                                                break
                                            }
                                            1 == y[p] && C++
                                        }
                                        A = v
                                    }
                                    for (; A.length;) {
                                        B = A.shift();
                                        v = [];
                                        for (y = 0; y < q; y++) B[y] && v.push(t[y]);
                                        u.push(v)
                                    }
                                }
                                q = u
                            } else q = [];
                            for (t = 0; t < q.length; t++) u = q[t].join("_"), c[u] = "N";
                            c[r] = $.extend({}, x)
                        }
                        b.skus = c;
                        c = a = null;
                        g.successCallback && g.successCallback(b)
                    } else {
                        h.events.trigger("popupTip:loading", !1);
                        h.events.trigger("popupTip:dataErrorTip", {
                            action: "close",
                            message: k.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (w) {
                            f.events.trigger("save:dataErrorLog", {
                                message: w,
                                url: m,
                                params: e,
                                result: k
                            })
                        }
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (k) {
                        f.events.trigger("save:dataErrorLog", {
                            message: k,
                            url: m,
                            params: e
                        })
                    }
                }
            })
        },
        skuAttrValsSort: function(a) {
            a = a.split("_");
            a.sort(function(a, c) {
                return parseInt(a) - parseInt(c)
            });
            return a.join("_")
        },
        parse: function(a) {
            var c = {},
                g = this,
                l = [],
                r = [];
            if ("" === a.data) {
                h.events.trigger("popupTip:loading", !1);
                h.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: "Product is not for sale."
                });
                try {
                    throw "error(): Service exception.";
                } catch (x) {
                    f.events.trigger("save:dataErrorLog", {
                        message: x,
                        url: m,
                        params: e,
                        result: a
                    })
                }
            }
            c.code = "0x0000" === a.state ? 200 : -1; - 1 !== c.code && (c.itemcode = a.data.itemcode, c.attrGroups = [], $.each(a.data.itemAttrList || [], function(a, b) {
                var g = {};
                g.id = b.attrId;
                g.name = b.attrName;
                g.attrs = [];
                $.each(b.itemAttrvalList, function(a, c) {
                    var b = {};
                    b.name = c.attrValName;
                    b.id = c.attrValueId;
                    b.customSize = c.customSize;
                    c.picUrl && (b.imgUrl = c.picUrl);
                    g.attrs.push(b)
                });
                c.attrGroups.push(g)
            }), c.skus = {}, $.each(a.data.itemSkuRelAttr || [], function(a, b) {
                var e = {};
                e.id = b.skuId;
                e.Md5 = b.skuMd5;
                e.inventoryCountryId = b.inventoryLocation;
                b.promoLimitNum && 0 < b.promoLimitNum ? (e.inventoryQuantity = Math.min(b.inventoryNum, b.promoLimitNum), e.maxPurchaseQuantity = b.minPurchaseNum) : e.inventoryQuantity = b.inventoryNum;
                e.priceRanges = [];
                $.each(b.wholesaleQtyRangeList || [], function(a, c) {
                    var b = {};
                    b.numLowerLimit = c.startQty;
                    b.numUpperLimit = c.endQty;
                    b.originalPrice = c.originalPrice;
                    b.discountPrice = c.vipPrice && 0 < c.vipPrice ? c.vipPrice : c.promDiscountPrice;
                    e.priceRanges.push(b)
                });
                !c.defaultPriceRanges && (c.defaultPriceRanges = $.extend(!0, [], e.priceRanges));
                0 !== b.skuSaleStatus && (l.push(e.maxPurchaseQuantity || 0), r.push(e.inventoryQuantity), 0 < c.attrGroups.length && void 0 !== b.skuAttrVals ? c.skus[g.skuAttrValsSort(b.skuAttrVals)] = e : c.skus["9999"] = e)
            }), c.defaultMaxPurchaseQuantity = 0 < l.length ? Math.min.apply(Math, l) : 0, c.defaultInventoryQuantity = 0 < r.length ? Math.max.apply(Math, r) : 0);
            b = c
        }
    }
});
define("common/detail/productAttrPopup", "common/config common/detail/findSkuAttr common/detail/PriceRange common/detail/selectSkuAttr common/detail/addToCart common/detail/buyItNow tpl/detail/productAttrPopupTpl checkoutflow/popupTip common/detail/onekeyPay common/detail/custom common/detail/customSubmit".split(" "), function(l, h, f, m, e, b, a, c, g, k, n) {
    var t = Backbone.Model.extend({
        defaults: function() {
            return {
                code: -1,
                isOneKey: "",
                onekeyText: "",
                thumbListFirst: "",
                istate: !0,
                minOrder: -1,
                promoTypeId: -1,
                inventoryQuantity: -1,
                maxPurchaseQuantity: -1,
                isShipto: !0,
                submitData: {
                    itemCode: -1,
                    supplierid: "",
                    productId: "",
                    unit: "",
                    quantity: 1,
                    skuMd5: "",
                    skuid: "",
                    shipToCountry: "",
                    shipTypeId: "",
                    stockIn: "",
                    shipAddrId: "",
                    impressionInfo: "",
                    remark: "",
                    attrCm: ""
                },
                __skuMd5: "",
                __quantity: -1,
                __selectAttrsName: [],
                __attributeName: [],
                __customRecord: ""
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.initEvent()
        },
        initEvent: function() {
            this.on("productAttrPopupModel:setPriceRangeModelData", this.setPriceRangeModelData, this);
            this.on("productAttrPopupModel:getSelectSkuAttrModelData", this.getSelectSkuAttrModelData, this);
            this.on("productAttrPopupModel:updateQuantity", this.updateQuantity, this);
            this.on("productAttrPopupModel:shipToCountryShipTypeId", this.shipToCountryShipTypeId, this);
            this.on("productAttrPopupModel:setShippingInfoId", this.setShippingInfoId, this);
            this.on("productAttrPopupModel:getShipCost", this.getShipCost, this);
            this.on("productAttrPopupModel:selectAttrsName", this.selectAttrsName, this);
            this.on("productAttrPopupModel:setAttributeName", this.setAttributeName, this);
            this.on("productAttrPopupModel:setCustomInfo", this.setCustomInfo, this)
        },
        setOptions: function(a) {
            this.options = {};
            $.extend(!0, this.options, a || {})
        },
        setPriceRangeModelData: function(a) {
            this.set({
                inventoryQuantity: a.inventoryQuantity,
                maxPurchaseQuantity: a.maxPurchaseQuantity
            })
        },
        getSelectSkuAttrModelData: function(a) {
            this.set({
                submitData: $.extend(!0, {}, this.get("submitData"), {
                    skuMd5: a.Md5,
                    skuid: a.id,
                    unit: a.unit,
                    remark: a.remark,
                    attrCm: a.attrCm
                }),
                __skuMd5: a.Md5
            });
            this.setPriceRangeModelData({
                inventoryQuantity: a.inventoryQuantity,
                maxPurchaseQuantity: a.maxPurchaseQuantity
            });
            this.setStockIn(a.inventoryCountryId)
        },
        selectAttrsName: function(a) {
            this.set({
                __selectAttrsName: a
            })
        },
        setAttributeName: function(a) {
            this.set({
                __attributeName: a
            })
        },
        updateQuantity: function(a) {
            this.set({
                submitData: $.extend(!0, {}, this.get("submitData"), {
                    quantity: a
                }),
                __quantity: a
            })
        },
        shipToCountryShipTypeId: function(a) {
            this.set({
                submitData: $.extend(!0, {}, this.get("submitData"), {
                    shipToCountry: a.shipToCountry,
                    shipTypeId: a.shipTypeId
                })
            })
        },
        setShippingInfoId: function(a) {
            this.set({
                submitData: $.extend(!0, {}, this.get("submitData"), {
                    shipAddrId: a.shippingInfoId
                })
            })
        },
        setStockIn: function(a) {
            this.set({
                submitData: $.extend(!0, {}, this.get("submitData"), {
                    stockIn: a
                })
            })
        },
        getShipCost: function(a) {
            var c = !0; - 1 === a && (c = !1);
            this.set({
                isShipto: c
            })
        },
        setCustomInfo: function(a) {
            this.set({
                submitData: $.extend(!0, {}, this.get("submitData"), {
                    unit: a.unit,
                    remark: a.remark,
                    attrCm: a.attrCm
                })
            })
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-selectSkuAttr,.j-cartSelectSkuAttr,.j-buySelectSkuAttr,.j-onekeySelectSkuAttr": "isSkuData",
            "click .j-addToCart": "toCart",
            "click .j-buyItNow": "toBuy",
            "click .j-onekeyContinue": "toOneKey",
            "click .j-product-title-top": "closedCouponLayer"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cJSelectSkuAttr = this.options.cJSelectSkuAttr;
            this.cJAttributeName = this.options.cJAttributeName;
            this.cJQuantityVal = this.options.cJQuantityVal;
            this.cJDatailBtn = this.options.cJDatailBtn;
            this.cJDatailProductAttributes = this.options.cJDatailProductAttributes;
            this.cJProductImg = this.options.cJProductImg;
            this.cJSelectOptionScroll = this.options.cJSelectOptionScroll;
            this.cJQuantityVal = this.options.cJQuantityVal;
            this.cJConfirm = this.options.cJConfirm;
            this.cJLayerBottomBox = this.options.cJLayerBottomBox;
            this.cCurrent = this.options.cCurrent;
            this.cOpenLayer = this.options.cOpenLayer;
            this.cClosedLayer = this.options.cClosedLayer;
            this.originalSyncData = this.options.originalSyncData;
            this.getDefaultShipCostAndWay = this.options.getDefaultShipCostAndWay;
            this.getTotalPrice = this.options.getTotalPrice;
            this.selectCoupon = this.options.selectCoupon;
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cDhmHtmlOverflow = this.options.cDhmHtmlOverflow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.skuCache = {};
            this.initElement();
            this.initEvent()
        },
        setOptions: function(c) {
            this.options = {
                cJSelectSkuAttr: ".j-selectSkuAttr",
                cJAttributeName: ".j-attribute-name",
                cJQuantityVal: ".j-quantityVal",
                cJDatailBtn: ".j-datail-btn",
                cJDatailProductAttributes: ".j-datail-product-attributes",
                cJProductImg: ".j-product-img",
                cJSelectOptionScroll: ".j-selectOption-scroll",
                cJConfirm: ".j-confirm",
                cJLayerBottomBox: ".j-layer-bottom-box",
                cCurrent: "current",
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cDhmHtmlOverflow: "dhm-htmlOverflow",
                cOpenLayer: "open-layer1",
                cClosedLayer: "close-layer1",
                template: _.template,
                tpl: a,
                model: new t(c.syncData)
            };
            $.extend(!0, this.options, c || {})
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cJSelectSkuAttr = this.$cJSelectSkuAttr || $(this.cJSelectSkuAttr);
            this.$cJAttributeName = this.$cJAttributeName || $(this.cJAttributeName);
            this.$cJQuantityVal = this.$cJQuantityVal || $(this.cJQuantityVal);
            this.$cJDatailBtn = this.$cJDatailBtn || $(this.cJDatailBtn);
            this.$cJLayerBottomBox = this.$cJLayerBottomBox || $(this.cJLayerBottomBox);
            this.$cJDatailProductAttributes = $(this.cJDatailProductAttributes);
            this.$cJProductImg = $(this.cJProductImg);
            this.$cJSelectOptionScroll = $(this.cJSelectOptionScroll);
            this.$cJConfirm = $(this.cJConfirm)
        },
        initEvent: function() {
            var a = this,
                c = this.timer;
            this.listenTo(this.model, "change:isShipto", this.renderbuyCart);
            this.listenTo(this.model, "change:isShipto", this.renderBottomScrollBar);
            this.listenTo(this.model, "change:__skuMd5", this.renderSetSkuConfirm);
            this.listenTo(this.model, "change:__skuMd5", this.renderbuyCart);
            this.listenTo(this.model, "change:__skuMd5", this.renderBottomScrollBar);
            this.listenTo(this.model, "change:__quantity", this.updateAttributeNameQuantity);
            this.listenTo(this.model, "change:__selectAttrsName", this.updateAttributeNameQuantity);
            this.listenTo(this.model, "change:__customRecord", this.updateAttributeNameQuantity);
            this.$window.on("orientationchange, resize", function() {
                c && clearTimeout(c);
                c = setTimeout(function() {
                    a.setSkuStyle()
                }, 500)
            })
        },
        fetch: function() {
            c.events.trigger("popupTip:loading", !0);
            h.init({
                itemcode: this.originalSyncData.itemCode,
                successCallback: $.proxy(function(a) {
                    var b, g, e;
                    this.model.trigger("productAttrPopupModel:setPriceRangeModelData", {
                        inventoryQuantity: a.defaultInventoryQuantity,
                        maxPurchaseQuantity: a.defaultMaxPurchaseQuantity
                    });
                    this.render(this.model.attributes);
                    b = new f({
                        localRate: this.originalSyncData.localRate,
                        rate: this.originalSyncData.rate,
                        syncData: {
                            isVip: this.originalSyncData.isVip,
                            displayPrice: this.originalSyncData.displayPrice,
                            deletePrice: this.originalSyncData.deletePrice,
                            lot: this.originalSyncData.lot,
                            measureName: this.originalSyncData.measureName,
                            plural: this.originalSyncData.plural,
                            minOrder: this.originalSyncData.minOrder,
                            promoTypeId: this.originalSyncData.promoTypeId,
                            istate: this.originalSyncData.istate,
                            priceRanges: a.defaultPriceRanges,
                            inventoryQuantity: a.defaultInventoryQuantity,
                            maxPurchaseQuantity: a.defaultMaxPurchaseQuantity,
                            quantity: this.originalSyncData.minOrder,
                            userType: this.originalSyncData.userType
                        },
                        productAttrPopuInstance: this
                    });
                    g = new k({
                        syncData: {
                            attrValId: a.attrGroups,
                            catePubId: this.originalSyncData.catepubid
                        },
                        renderCallback: $.proxy(function() {
                            new n({
                                syncData: {
                                    catePubId: this.originalSyncData.catepubid
                                },
                                customSubmitInstance: g,
                                productAttrPopuInstance: this,
                                selectSkuAttrInstance: e
                            })
                        }, this)
                    });
                    a.skus["9999"] ? this.model.trigger("productAttrPopupModel:getSelectSkuAttrModelData", a.skus["9999"]) : (e = new m({
                            skuData: {
                                attrGroups: a.attrGroups,
                                skus: a.skus,
                                unit: this.originalSyncData.measureName
                            },
                            priceRangeInstance: b,
                            productAttrPopuInstance: this
                        }), this.setCache([this.model.get("submitData").skuMd5 || "", this.model.get("submitData").skuid || "", this.model.get("submitData").quantity].join("_")));
                    this.model.set({
                        code: 200
                    });
                    this.openCouponLayer();
                    c.events.trigger("popupTip:loading", !1)
                }, this)
            })
        },
        isSkuData: function(a) {
            this.$skupopBtn = $(a.currentTarget); - 1 === this.model.get("code") ? this.fetch() : this.model.get("__skuMd5") ? "buy" === this.$skupopBtn.attr("data-skupop") ? this.toBuy() : "cart" === this.$skupopBtn.attr("data-skupop") ? this.toCart() : "onekey" === this.$skupopBtn.attr("data-skupop") ? this.toOneKey("toPay") : (this.renderSetSkuConfirm(this.model.attributes), this.openCouponLayer()) : (this.renderSetSkuConfirm(this.model.attributes), this.openCouponLayer())
        },
        isModelInstance: function(a) {
            return _.has(a, "attributes")
        },
        getData: function(a) {
            return this.isModelInstance(a) ? a.attributes : a
        },
        render: function(a, c) {
            var b = this.$skupopBtn.attr("data-skupop"),
                g = this.template,
                e = this.tpl,
                k = g(e.main.join(""))(a),
                f = g(e.title.join(""))(a),
                d = g(e.productPicture.join(""))(a),
                b = g(e.confirm.join(""))($.extend({}, this.getData(a), {
                    btnType: b
                })),
                k = k.replace(/\{\{main\}\}/, k).replace(/\{\{title\}\}/, f).replace(/\{\{productPicture\}\}/, d).replace(/\{\{confirm\}\}/, b);
            this.$body.append(k);
            this.initElement()
        },
        renderSetSkuConfirm: function(a) {
            var c = this.$cJConfirm,
                b = this.$skupopBtn.attr("data-skupop"),
                g = this.template;
            a = g(this.tpl.confirm.join(""))($.extend({}, this.getData(a), {
                btnType: b
            }));
            c.html(a)
        },
        renderbuyCart: function(a) {
            var c = this.$cJDatailBtn,
                b = this.template;
            a = b(this.tpl.buyCart.join(""))(this.getData(a));
            !0 === this.model.get("istate") && c.html(a)
        },
        renderBottomScrollBar: function(a) {
            var c = this.$cJLayerBottomBox,
                b = this.template;
            a = b(this.tpl.bottomScrollBar.join(""))(this.getData(a));
            !0 === this.model.get("istate") && c.html(a)
        },
        updateAttributeNameQuantity: function() {
            for (var a = this.$cJAttributeName, c = this.$cJQuantityVal, b = this.model.get("__selectAttrsName"), g = this.model.get("submitData").quantity, e = [], k = b.length, f = 0; f < k; f++) e.push("[" + b[f] + "]");
            0 < k && a.html("Selection: " + e.join(", "));
            c.html(g)
        },
        setCache: function(a) {
            this.deleteCache();
            this.skuCache[a] = "Y"
        },
        getCache: function(a) {
            var c = !1;
            "Y" === this.skuCache[a] && (c = !0);
            return c
        },
        deleteCache: function() {
            this.skuCache = {}
        },
        toBuy: function() {
            var a = this.model.attributes,
                g = this.model.get("submitData").skuMd5,
                e = this.model.get("submitData").skuid,
                k = this.model.get("submitData").quantity,
                f = [g, e, k].join("_");
            void 0 === g || void 0 === e ? c.events.trigger("popupTip:autoTip", {
                    message: $.lang.DETAIL_PleaseSelect + " " + this.model.get("__attributeName"),
                    timer: 1E3
                }) : (c.events.trigger("popupTip:loading", !0), this.getCache(f) ? b.fetch(a) : (this.getDefaultShipCostAndWay.trigger("GetDefaultShipCostAndWayView:upadteShipCostInfo", {
                        quantity: k,
                        skuId: e,
                        skuMd5: g,
                        stockCountryId: this.model.get("submitData").stockIn,
                        updateCallback: $.proxy(function(c) {
                            this.model.trigger("productAttrPopupModel:shipToCountryShipTypeId", {
                                shipToCountry: c.model1.get("whitherCountryId"),
                                shipTypeId: c.model1.get("expressType")
                            });
                            b.fetch(a)
                        }, this)
                    }), this.setCache(f)))
        },
        toCart: function() {
            var a = this.model.attributes,
                b = this.model.get("submitData").skuMd5,
                g = this.model.get("submitData").skuid,
                k = this.model.get("submitData").quantity,
                f = [b, g, k].join("_");
            void 0 === b || void 0 === g ? c.events.trigger("popupTip:autoTip", {
                    message: $.lang.DETAIL_PleaseSelect + " " + this.model.get("__attributeName"),
                    timer: 1E3
                }) : (c.events.trigger("popupTip:loading", !0), this.getCache(f) ? e.fetch(a) : (this.getDefaultShipCostAndWay.trigger("GetDefaultShipCostAndWayView:upadteShipCostInfo", {
                        quantity: k,
                        skuId: g,
                        skuMd5: b,
                        stockCountryId: this.model.get("submitData").stockIn,
                        updateCallback: $.proxy(function(c) {
                            this.model.trigger("productAttrPopupModel:shipToCountryShipTypeId", {
                                shipToCountry: c.model1.get("whitherCountryId"),
                                shipTypeId: c.model1.get("expressType")
                            });
                            e.fetch(a)
                        }, this)
                    }), this.setCache(f)))
        },
        goOneKeyBtnArea: function() {
            var a = this;
            this.timer1 = setInterval(function() {
                var c = a.$window,
                    b = a.$cJDatailBtn,
                    g = c.scrollTop(),
                    e = c.height(),
                    k = b.offset().top,
                    b = b.outerHeight(!0),
                    e = k + b - e,
                    k = g - g / 20;
                k > e ? c.scrollTop(k) : c.scrollTop(e);
                g <= e && clearInterval(a.timer1)
            }, 5)
        },
        toOneKey: function(a) {
            var b = this.model.get("submitData").skuMd5,
                e = this.model.get("submitData").skuid,
                k = this.model.get("submitData").quantity,
                f = [b, e, k].join("_");
            void 0 === b || void 0 === e ? c.events.trigger("popupTip:autoTip", {
                    message: $.lang.DETAIL_PleaseSelect + " " + this.model.get("__attributeName"),
                    timer: 1E3
                }) : this.getCache(f) ? "toPay" !== a ? (this.closedCouponLayer(), this.goOneKeyBtnArea()) : this.getTotalPrice.trigger("GetTotalPriceView:load", {
                            isCloseLoading: !1,
                            params: $.extend({
                                itemcode: this.model.get("submitData").itemCode,
                                skuId: this.model.get("submitData").skuid,
                                skuMd5: this.model.get("submitData").skuMd5,
                                quantity: this.model.get("submitData").quantity,
                                shiptype: this.model.get("submitData").shipTypeId,
                                shipAddrId: this.model.get("submitData").shipAddrId,
                                stockCountry: this.model.get("submitData").stockIn
                            }, this.selectCoupon.model.getCouponCodeGroup()),
                            successCallback: $.proxy(function() {
                                g.init({
                                    params: {
                                        itemcode: this.model.get("submitData").itemCode,
                                        productId: this.model.get("submitData").productId,
                                        supplierId: this.model.get("submitData").supplierid,
                                        skuid: this.model.get("submitData").skuid,
                                        skuMd5: this.model.get("submitData").skuMd5,
                                        quantity: this.model.get("submitData").quantity,
                                        unit: this.model.get("submitData").unit,
                                        stockIn: this.model.get("submitData").stockIn,
                                        shipTypeId: this.model.get("submitData").shipTypeId,
                                        shippingInfoId: this.model.get("submitData").shipAddrId,
                                        couponCode: this.getTotalPrice.model.get("dhCouponCode"),
                                        sellerCouponCode: this.getTotalPrice.model.get("sellerCouponCode"),
                                        totalPrice: this.getTotalPrice.model.get("totalPrice"),
                                        currency: this.getTotalPrice.model.get("loaclMark"),
                                        remark: this.model.get("submitData").remark,
                                        attrCm: this.model.get("submitData").attrCm
                                    }
                                })
                            }, this)
                        }) : (this.model.isSkuToShipcost = !0, this.getDefaultShipCostAndWay.trigger("GetDefaultShipCostAndWayView:upadteShipCostInfo", {
                        quantity: k,
                        skuId: e,
                        skuMd5: b,
                        stockCountryId: this.model.get("submitData").stockIn,
                        updateCallback: $.proxy(function(a) {
                            this.model.trigger("productAttrPopupModel:shipToCountryShipTypeId", {
                                shipToCountry: a.model1.get("whitherCountryId"),
                                shipTypeId: a.model1.get("expressType")
                            });
                            this.model.trigger("productAttrPopupModel:setShippingInfoId", {
                                shippingInfoId: a.model1.get("shippingInfoId")
                            });
                            !0 === this.model.get("isShipto") ? this.getTotalPrice.trigger("GetTotalPriceView:load", {
                                    params: {
                                        itemcode: this.model.get("submitData").itemCode,
                                        skuId: this.model.get("submitData").skuid,
                                        skuMd5: this.model.get("submitData").skuMd5,
                                        quantity: this.model.get("submitData").quantity,
                                        shiptype: this.model.get("submitData").shipTypeId,
                                        shipAddrId: this.model.get("submitData").shipAddrId,
                                        stockCountry: this.model.get("submitData").stockIn
                                    },
                                    successCallback: $.proxy(function() {
                                        var a = this.getTotalPrice.model;
                                        if (!0 === a.get("hasSellerCoupon") || !0 === a.get("hasDhCoupon")) this.selectCoupon.trigger("SelectCouponView:renderPageCouponInfo", {
                                            hasDhCoupon: a.get("hasDhCoupon"),
                                            hasSellerCoupon: a.get("hasSellerCoupon"),
                                            sellerCouponInfo: a.get("sellerCouponInfo"),
                                            dhCouponInfo: a.get("dhCouponInfo")
                                        }), this.selectCoupon.model.trigger("SelectCouponModel:setStaticPro", {
                                            type: "system",
                                            sellerCouponCode: a.get("sellerCouponCode"),
                                            dhCouponCode: a.get("dhCouponCode"),
                                            itemsSubtotal: 1 * a.get("itemsSubtotal").replace(/^\D*(\d+)/, "$1"),
                                            orderSave: 1 * a.get("orderSave").replace(/^\D*(\d+)/, "$1")
                                        }), this.selectCoupon.params = $.extend({}, {
                                            itemCode: this.model.get("submitData").itemCode,
                                            supplierId: this.originalSyncData.supplierid,
                                            cateDispId: this.originalSyncData.cateDispId,
                                            amount: 1 * a.get("itemsSubtotal").replace(/^\D*(\d+)/, "$1"),
                                            skuId: this.model.get("submitData").skuid,
                                            skuMd5: this.model.get("submitData").skuMd5,
                                            quantity: this.model.get("submitData").quantity,
                                            shiptype: this.model.get("submitData").shipTypeId,
                                            shipAddrId: this.model.get("submitData").shipAddrId,
                                            stockCountry: this.model.get("submitData").stockIn
                                        });
                                        this.goOneKeyBtnArea()
                                    }, this)
                                }) : (this.getTotalPrice.trigger("GetTotalPriceView:hide"), this.selectCoupon.trigger("SelectCouponView:hide"));
                            this.model.isSkuToShipcost = !1;
                            this.closedCouponLayer()
                        }, this)
                    }), this.setCache(f))
        },
        refreshShipCostAndWay: function() {
            var a = this.model.get("submitData").skuMd5,
                c = this.model.get("submitData").skuid,
                b = this.model.get("submitData").quantity,
                g = [a, c, b].join("_");
            this.getCache(g) || (this.model.isSkuToShipcost = !0, this.getDefaultShipCostAndWay.trigger("GetDefaultShipCostAndWayView:upadteShipCostInfo", {
                quantity: b,
                skuId: c,
                skuMd5: a,
                stockCountryId: this.model.get("submitData").stockIn,
                updateCallback: $.proxy(function(b) {
                    this.model.trigger("productAttrPopupModel:shipToCountryShipTypeId", {
                        shipToCountry: b.model1.get("whitherCountryId"),
                        shipTypeId: b.model1.get("expressType")
                    });
                    "y" !== this.model.get("isOneKey") || void 0 === a && void 0 === c || (this.model.trigger("productAttrPopupModel:setShippingInfoId", {
                        shippingInfoId: b.model1.get("shippingInfoId")
                    }), !0 === this.model.get("isShipto") ? this.getTotalPrice.trigger("GetTotalPriceView:load", {
                            params: {
                                itemcode: this.model.get("submitData").itemCode,
                                skuId: this.model.get("submitData").skuid,
                                skuMd5: this.model.get("submitData").skuMd5,
                                quantity: this.model.get("submitData").quantity,
                                shiptype: this.model.get("submitData").shipTypeId,
                                shipAddrId: this.model.get("submitData").shipAddrId,
                                stockCountry: this.model.get("submitData").stockIn
                            },
                            successCallback: $.proxy(function() {
                                var a = this.getTotalPrice.model;
                                if (!0 === a.get("hasSellerCoupon") || !0 === a.get("hasDhCoupon")) this.selectCoupon.trigger("SelectCouponView:renderPageCouponInfo", {
                                    hasDhCoupon: a.get("hasDhCoupon"),
                                    hasSellerCoupon: a.get("hasSellerCoupon"),
                                    sellerCouponInfo: a.get("sellerCouponInfo"),
                                    dhCouponInfo: a.get("dhCouponInfo")
                                }), this.selectCoupon.model.trigger("SelectCouponModel:setStaticPro", {
                                    type: "system",
                                    sellerCouponCode: a.get("sellerCouponCode"),
                                    dhCouponCode: a.get("dhCouponCode"),
                                    itemsSubtotal: 1 * a.get("itemsSubtotal").replace(/^\D*(\d+)/, "$1"),
                                    orderSave: 1 * a.get("orderSave").replace(/^\D*(\d+)/, "$1")
                                }), this.selectCoupon.params = $.extend({}, {
                                    itemCode: this.model.get("submitData").itemCode,
                                    supplierId: this.originalSyncData.supplierid,
                                    cateDispId: this.originalSyncData.cateDispId,
                                    amount: 1 * a.get("itemsSubtotal").replace(/^\D*(\d+)/, "$1"),
                                    skuId: this.model.get("submitData").skuid,
                                    skuMd5: this.model.get("submitData").skuMd5,
                                    quantity: this.model.get("submitData").quantity,
                                    shiptype: this.model.get("submitData").shipTypeId,
                                    shipAddrId: this.model.get("submitData").shipAddrId,
                                    stockCountry: this.model.get("submitData").stockIn
                                })
                            }, this)
                        }) : (this.getTotalPrice.trigger("GetTotalPriceView:hide"), this.selectCoupon.trigger("SelectCouponView:hide")), this.model.isSkuToShipcost = !1)
                }, this)
            }), this.setCache(g))
        },
        setPageStyle: function(a) {
            var c = this.$html,
                b = this.$body,
                g = this.cHtml;
            !0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), c.addClass(g), b.css({
                    "margin-top": -this.__scrollY
                })) : (c.removeClass(g), b.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        setSkuStyle: function() {
            var a = $(this.cJSelectOptionScroll),
                c = 1 * this.$window.height(),
                b = 0,
                g;
            g = a.siblings();
            $.each(g, function(a, c) {
                b += 1 * $(c).outerHeight()
            });
            a.css({
                height: c - b
            })
        },
        openCouponLayer: function() {
            var a = this.$cJDatailProductAttributes,
                c = this.cOpenLayer,
                b = this.cClosedLayer,
                g = this.cHide;
            setTimeout($.proxy(function() {
                this.setPageStyle(!0);
                a.removeClass(g);
                this.setSkuStyle();
                setTimeout(function() {
                    a.removeClass(b).addClass(c)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        closedCouponLayer: function() {
            var a = this.$cJDatailProductAttributes,
                c = this.cOpenLayer,
                b = this.cClosedLayer,
                g = this.cHide;
            a.hasClass(g) || setTimeout($.proxy(function() {
                this.setPageStyle(!1);
                a.removeClass(c).addClass(b);
                setTimeout(function() {
                    a.addClass(g)
                }, 510);
                l.preventClick();
                this.refreshShipCostAndWay()
            }, this), 200)
        }
    })
});
define("common/detail/selectSkuAttr", ["common/config", "common/detail/findSkuAttr", "tpl/detail/selectSkuAttrTpl"], function(l, h, f) {
    var m = Backbone.Model.extend({
        defaults: function() {
            return {
                attrGroups: [{
                    id: -1,
                    name: "",
                    attrs: [{
                        id: -1,
                        name: "",
                        imgUrl: ""
                    }]
                }],
                skus: {
                    "1001_1002": {
                        id: "",
                        Md5: "",
                        inventoryCountryId: "",
                        inventoryQuantity: "",
                        maxPurchaseQuantity: "",
                        priceRanges: [{
                            numLowerLimit: -1,
                            numUpperLimit: -1,
                            originalPrice: -1,
                            discountPrice: -1
                        }]
                    }
                },
                __customRecord: ""
            }
        },
        initialize: function(e, b) {
            this.setOptions(b);
            this.initEvent()
        },
        initEvent: function() {
            this.on("selectSkuAttrModel:setCustomRecord", this.setCustomRecord, this)
        },
        setOptions: function(e) {
            this.options = {};
            $.extend(!0, this.options, e || {})
        },
        setCustomRecord: function(e) {
            this.set({
                __customRecord: e.customRecord,
                unit: e.unit,
                remark: e.remark,
                attrCm: e.attrCm
            })
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-skuClick": "selectSku"
        },
        initialize: function(e) {
            this.setOptions(e);
            this.unit = this.options.skuData.unit;
            this.cJSelectSkuAttrOption = this.options.cJSelectSkuAttrOption;
            this.cJSkuAttr = this.options.cJSkuAttr;
            this.cJSkuClick = this.options.cJSkuClick;
            this.cCurrent = this.options.cCurrent;
            this.cDisabled = this.options.cDisabled;
            this.cJCustomMade = this.options.cJCustomMade;
            this.cJOptionsListLiJCustom = this.options.cJOptionsListLiJCustom;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.productAttrPopuInstance = this.options.productAttrPopuInstance;
            this.priceRangeInstance = this.options.priceRangeInstance;
            this.initElement();
            this.initEvent();
            this.render(this.model.attributes)
        },
        setOptions: function(e) {
            this.options = {
                cJSelectSkuAttrOption: ".j-selectSkuAttrOption",
                cJSkuAttr: ".j-skuAttr",
                cJSkuClick: "j-skuClick",
                cCurrent: "current",
                cDisabled: "disabled",
                cJCustomMade: ".j-customMade",
                cJOptionsListLiJCustom: ".j-options-list li.j-custom",
                template: _.template,
                tpl: f,
                model: new m(e.skuData),
                productAttrPopuInstance: null,
                priceRangeInstance: null
            };
            $.extend(!0, this.options, e || {})
        },
        initElement: function() {
            this.$cJSelectSkuAttrOption = this.$cJSelectSkuAttrOption || $(this.cJSelectSkuAttrOption);
            this.$cJSkuAttr = $(this.cJSkuAttr);
            this.$cJCustomMade = $(this.cJCustomMade);
            this.$cJOptionsListLiJCustom = $(this.cJOptionsListLiJCustom)
        },
        initEvent: function() {
            this.listenTo(this.model, "change:__customRecord", this.renderCustom);
            this.on("selectSkuAttrView:selectSku", this.selectSku, this)
        },
        render: function(e) {
            this.renderSelectSkuAttr(e);
            this.initElement();
            this.initOptionalState(e);
            this.productAttrPopuInstance.model.trigger("productAttrPopupModel:setAttributeName", this.getAttributeName())
        },
        renderSelectSkuAttr: function(e) {
            var b = this.template;
            e = b(this.tpl.selectSkuAttr.join(""))(e);
            this.$cJSelectSkuAttrOption.html(e)
        },
        renderCustom: function() {
            var e = this.model.attributes.__customRecord,
                b = this.$cJCustomMade,
                a = this.recordUnit = this.model.attributes.unit;
            b.attr("data-unit", a);
            b.html(e)
        },
        initOptionalState: function(e) {
            var b = e.skus,
                a = this.cJSkuClick;
            this.$cJSkuAttr.each(function(c, g) {
                var e = $(g),
                    f = e.attr("attr_id");
                b[f] || e.removeClass(a).addClass("disabled")
            })
        },
        skuAttrValsSort: function(e) {
            e.sort(function(b, a) {
                return parseInt(b) - parseInt(a)
            })
        },
        selectSku: function(e) {
            var b = this.$cJSelectSkuAttrOption,
                a = $(e.currentTarget),
                c = this.$cJSkuAttr,
                g = this.cJSkuClick,
                k = this.cCurrent,
                f = this.cDisabled,
                h = this.model.get("skus"),
                l = [];
            a.hasClass(k) || ("custom" === a.attr("data-type") && "" === this.model.get("__customRecord") ? this.currentCustomAttrEle = e : (a.addClass(k), a.siblings().removeClass(k), e = b.find("." + k), e.each(function() {
                    l.push($(this).attr("attr_id"))
                }), this.skuAttrValsSort(l), c.not(e).each($.proxy(function(a, c) {
                    var b = $(c),
                        e = [],
                        n;
                    n = b.siblings("." + k).attr("attr_id");
                    a = 0;
                    for (var m = l.length; a < m; a++) l[a] !== n && e.push(l[a]);
                    e = e.concat(b.attr("attr_id"));
                    this.skuAttrValsSort(e);
                    h[e.join("_")] ? b.addClass(g + " com-ripple-btn").removeClass(f) : b.removeClass(g + " com-ripple-btn").addClass(f)
                }, this)), this.productAttrPopuInstance.model.trigger("productAttrPopupModel:selectAttrsName", this.getSelectAttrsName(e)), c = h[l.join("_")], this.productAttrPopuInstance.model.trigger("productAttrPopupModel:setAttributeName", this.getAttributeName()), _.isObject(c) && (this.productAttrPopuInstance.model.trigger("productAttrPopupModel:getSelectSkuAttrModelData", {
                    Md5: c.Md5,
                    id: c.id,
                    inventoryQuantity: c.inventoryQuantity,
                    maxPurchaseQuantity: c.maxPurchaseQuantity,
                    inventoryCountryId: c.inventoryCountryId,
                    unit: this.isCustom(),
                    remark: this.isRemark(),
                    attrCm: this.isAttrCm()
                }), this.priceRangeInstance.model.trigger("PriceRangeModel:setSelectSkuAttrModelData", {
                    priceRanges: c.priceRanges,
                    inventoryQuantity: c.inventoryQuantity,
                    maxPurchaseQuantity: c.maxPurchaseQuantity,
                    Md5: c.Md5
                }), this.priceRangeInstance.model.trigger("PriceRangeModel:setQuantity", this.priceRangeInstance.model.get("minOrder"), "noValidate"))))
        },
        getSelectAttrsName: function(e) {
            var b = [];
            e.each(function(a, c) {
                var g = $(c);
                0 < g.find("img").length ? b.push(g.find("img").attr("alt")) : "custom" === g.attr("data-type") ? b.push(g.attr("alt")) : b.push(g.text())
            });
            return b
        },
        getAttributeName: function() {
            var e = [],
                b = this.$cJSkuAttr.closest("div[data-name]"),
                a = this.cCurrent;
            $.each(b, function(c, b) {
                var g = $(b);
                !1 === g.find("li").hasClass(a) && e.push(decodeURIComponent(g.attr("data-name")))
            });
            return e.join(", ")
        },
        isCustom: function() {
            var e = this.$cJCustomMade;
            return !0 === (this.flag = this.$cJOptionsListLiJCustom.hasClass(this.cCurrent)) ? e.attr("data-unit") : this.unit
        },
        isRemark: function() {
            return !0 === this.flag ? this.model.get("remark") : ""
        },
        isAttrCm: function() {
            return !0 === this.flag ? this.model.get("attrCm") : ""
        }
    })
});
define("common/detail/PriceRange", ["common/config", "tpl/detail/priceRangeTpl", "checkoutflow/popupTip"], function(l, h, f) {
    var m = Backbone.Model.extend({
        defaults: function() {
            return {
                isVip: !1,
                displayPrice: "",
                deletePrice: "",
                isLot: !1,
                lot: -1,
                plural: "",
                measureName: "",
                isLimitPromo: !1,
                isDeletePrice: !1,
                istate: !0,
                minOrder: -1,
                priceRanges: [],
                quantity: -1,
                inventoryQuantity: -1,
                maxPurchaseQuantity: -1,
                __skuMd5: ""
            }
        },
        initialize: function(e, b) {
            this.setOptions(b);
            this.productAttrPopuInstance = this.options.productAttrPopuInstance;
            this.getDefaultShipCostAndWayInstance = this.options.getDefaultShipCostAndWayInstance;
            this.initEvent()
        },
        initEvent: function() {
            this.on("PriceRangeModel:setSelectSkuAttrModelData", this.setSelectSkuAttrModelData, this);
            this.on("PriceRangeModel:setQuantity", this.setQuantity, this)
        },
        setOptions: function(e) {
            this.options = {
                productAttrPopuInstance: null,
                getDefaultShipCostAndWayInstance: null
            };
            $.extend(!0, this.options, e || {})
        },
        setSelectSkuAttrModelData: function(e) {
            this.setPrices({
                discountPrice: e.priceRanges[0].discountPrice,
                originalPrice: e.priceRanges[0].originalPrice
            });
            this.set({
                inventoryQuantity: e.inventoryQuantity,
                priceRanges: e.priceRanges,
                maxPurchaseQuantity: e.maxPurchaseQuantity,
                __skuMd5: e.Md5
            })
        },
        setPrices: function(e) {
            var b = {};
            0 < e.discountPrice ? (b.deletePrice = e.originalPrice, b.displayPrice = e.discountPrice) : (b.deletePrice = -1, b.displayPrice = e.originalPrice);
            this.set(b);
            this.trigger("PriceRangeView:updataPriceRange", b)
        },
        getSelectedPriceRangeIndex: function() {
            var e = -1,
                b = this.get("quantity");
            $.each(this.get("priceRanges"), function(a, c) {
                var g = c.numLowerLimit,
                    k = c.numUpperLimit; - 1 < e || b >= g && b <= k && (e = a)
            });
            this.trigger("PriceRangeView:setSelectPriceRangeStatus", e);
            this.setPrices({
                discountPrice: this.get("priceRanges")[e].discountPrice,
                originalPrice: this.get("priceRanges")[e].originalPrice
            })
        },
        setQuantity: function(e, b) {
            this.set({
                quantity: e
            }, {
                validate: b ? !1 : !0,
                type: "quantity"
            })
        },
        validate: function(e, b) {
            if ("quantity" === b.type) {
                var a = this.validateQuantity(e);
                if ("string" === typeof a) return a
            }
        },
        validateQuantity: function(e) {
            e = e.quantity;
            var b = this.get("isLimitPromo"),
                a = this.get("minOrder"),
                b = !0 === b ? this.get("maxPurchaseQuantity") : this.get("inventoryQuantity");
            if (e > b) return "isMax";
            if (e < a) return "isMin";
            if (isNaN(e) || /\D/.test(e)) return "isValidate";
            e === a ? this.trigger("PriceRangeView:setQuantityStatus", 1) : e === b ? this.trigger("PriceRangeView:setQuantityStatus", 2) : this.trigger("PriceRangeView:setQuantityStatus")
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-pro-plus": "increaseNum",
            "click .j-pro-reduce": "reduceNum",
            "click .j-showMorePriceRang": "showMorePriceRang",
            "blur .j-pro-num": "setQuantity"
        },
        initialize: function(e) {
            this.setOptions(e);
            this.cJPriceRange = this.options.cJPriceRange;
            this.cJpriceRangeWarp = this.options.cJpriceRangeWarp;
            this.cJProNum = this.options.cJProNum;
            this.cTrCurrent = this.options.cTrCurrent;
            this.cJProPlus = this.options.cJProPlus;
            this.cJProReduce = this.options.cJProReduce;
            this.cProNumberSold = this.options.cProNumberSold;
            this.cJOriginalPrice = this.options.cJOriginalPrice;
            this.cJDiscountPrice = this.options.cJDiscountPrice;
            this.cJMulticurrencyPrice = this.options.cJMulticurrencyPrice;
            this.cMulticurrencyRatePrice = this.options.cMulticurrencyRatePrice;
            this.cJQuantityUnit = this.options.cJQuantityUnit;
            this.rate = this.options.rate;
            this.cHide = this.options.cHide;
            this.cLessDown = this.options.cLessDown;
            this.cProNumberTrGt = this.options.cProNumberTrGt;
            this.localRate = this.options.localRate;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.initElement();
            this.initEvent();
            this.render(this.model.attributes);
            this.renderProductPrice(this.model.attributes)
        },
        setOptions: function(e) {
            var b = _.template,
                a = e.syncData,
                c = {};
            c.isVip = a.isVip;
            c.isLimitPromo = 2 === a.promoTypeId || 3 === a.promoTypeId ? !0 : !1;
            c.isDeletePrice = 0 < a.priceRanges[0].discountPrice ? !0 : !1;
            c.lot = a.lot;
            c.isLot = 1 < a.lot ? !0 : !1;
            c.displayPrice = !0 === a.displayPrice.isEqual ? a.displayPrice.minPrice : a.displayPrice.minPrice + " - " + a.displayPrice.maxPrice;
            "" !== a.deletePrice && (c.deletePrice = !0 === a.deletePrice.isEqual ? a.deletePrice.minPrice : a.deletePrice.minPrice + " - " + a.deletePrice.maxPrice);
            c.plural = a.plural;
            c.measureName = a.measureName;
            c.inventoryQuantity = a.inventoryQuantity;
            c.maxPurchaseQuantity = a.maxPurchaseQuantity;
            c.minOrder = a.minOrder;
            c.quantity = a.quantity;
            c.priceRanges = a.priceRanges;
            c.userType = a.userType;
            this.options = {
                cJPriceRange: ".j-priceRange",
                cJpriceRangeWarp: ".j-priceRangeWarp",
                cJProNum: ".j-pro-num",
                cTrCurrent: "tr-current",
                cJProPlus: ".j-pro-plus",
                cJProReduce: ".j-pro-reduce",
                cProNumberSold: "pro-number-sold",
                cJOriginalPrice: ".j-originalPrice",
                cJDiscountPrice: ".j-discountPrice",
                cJMulticurrencyPrice: ".j-multicurrencyPrice",
                cMulticurrencyRatePrice: ".j-multicurrency-ratePrice",
                rate: -1,
                cJQuantityUnit: ".j-quantityUnit",
                cHide: "dhm-hide",
                cLessDown: "less-down",
                cProNumberTrGt: ".pro-number tr:gt(3)",
                localRate: -1,
                template: b,
                tpl: h,
                model: new m(c, {
                    productAttrPopuInstance: e.productAttrPopuInstance,
                    getDefaultShipCostAndWayInstance: e.getDefaultShipCostAndWayInstance
                })
            };
            $.extend(!0, this.options, e || {})
        },
        initEvent: function() {
            this.listenTo(this.model, "change:quantity", $.proxy(function() {
                this.getSelectedPriceRangeIndex()
            }, this.model));
            this.listenTo(this.model, "change:quantity", this.renderProductPrice);
            this.listenTo(this.model, "change:quantity", this.renderQuantityUnit);
            this.listenTo(this.model, "change:quantity", $.proxy(function() {
                this.productAttrPopuInstance.model.trigger("productAttrPopupModel:updateQuantity", this.get("quantity"))
            }, this.model));
            this.listenTo(this.model, "invalid", this.matchErrorTip);
            this.listenTo(this.model, "change:__skuMd5", this.render);
            this.listenTo(this.model, "change:__skuMd5", this.renderProductPrice);
            this.model.on("PriceRangeView:setSelectPriceRangeStatus", this.setSelectPriceRangeStatus, this);
            this.model.on("PriceRangeView:updataPriceRange", this.updataPriceRange, this);
            this.model.on("PriceRangeView:setQuantityStatus", this.setQuantityStatus, this)
        },
        initElement: function() {
            this.$cJPriceRange = this.$cJPriceRange || $(this.cJPriceRange);
            this.$cJpriceRangeWarp = this.$cJpriceRangeWarp || $(this.cJpriceRangeWarp);
            this.$cJProNum = $(this.cJProNum);
            this.$cJProPlus = $(this.cJProPlus);
            this.$cJProReduce = $(this.cJProReduce);
            this.$cJOriginalPrice = $(this.cJOriginalPrice);
            this.$cJDiscountPrice = $(this.cJDiscountPrice);
            this.$cJMulticurrencyPrice = $(this.cJMulticurrencyPrice);
            this.$cJQuantityUnit = $(this.cJQuantityUnit);
            this.$cProNumberTrGt = $(this.cProNumberTrGt);
            this.$cMulticurrencyRatePrice = $(this.cMulticurrencyRatePrice)
        },
        isModelInstance: function(e) {
            return _.has(e, "attributes")
        },
        getData: function(e) {
            return this.isModelInstance(e) ? e.attributes : e
        },
        render: function(e) {
            var b = this.$cJpriceRangeWarp,
                a = this.template,
                c = this.tpl,
                g = a(c.main.join(""))(this.getData(e)),
                k = a(c.arrtPriceRanges.join(""))(this.getData(e)),
                f = a(c.quantity.join(""))(this.getData(e)),
                h = this.renderQuantityUnit(e, "initRender");
            e = a(c.limitPromoContent.join(""))(this.getData(e));
            g = g.replace(/\{\{main\}\}/, g).replace(/\{\{arrtPriceRanges\}\}/, k).replace(/\{\{quantity\}\}/, f).replace(/\{\{quantityUnit\}\}/, h).replace(/\{\{limitPromoContent\}\}/, e);
            b.html(g);
            this.initElement()
        },
        renderProductPrice: function(e) {
            var b = this.template;
            e = b(this.tpl.productPrice.join(""))(this.getData(e));
            this.$cJPriceRange.html(e)
        },
        renderQuantityUnit: function(e, b) {
            var a = this.$cJQuantityUnit,
                c = this.template,
                c = c(this.tpl.quantityUnit.join(""))(this.getData(e));
            if (this.isModelInstance(e) && "initRender" !== b) a[0] && a.html(c);
            else return c
        },
        setSelectPriceRangeStatus: function(e) {
            var b = this.cTrCurrent,
                a = this.$cJpriceRangeWarp.find("tbody tr");
            $(a[e]).addClass(b).siblings().removeClass(b)
        },
        setQuantity: function(e) {
            e.target && (e = this.$cJProNum.val());
            this.model.trigger("PriceRangeModel:setQuantity", parseInt($.trim(e)))
        },
        setQuantityMin: function() {
            var e = this.model.get("minOrder");
            this.$cJProNum.val(e);
            this.setQuantity(e)
        },
        setQuantityMax: function() {
            var e;
            e = !0 === this.model.get("isLimitPromo") ? this.model.get("maxPurchaseQuantity") : this.model.get("inventoryQuantity");
            this.$cJProNum.val(e);
            this.setQuantity(e)
        },
        matchErrorTip: function(e, b, a) {
            "quantity" === a.type && this.setQuantityErrorTip(b)
        },
        setQuantityErrorTip: function(e) {
            "isMax" === e ? (!0 === this.model.get("isLimitPromo") ? f.events.trigger("popupTip:autoTip", {
                        message: this.model.get("maxPurchaseQuantity") + " at most per customer",
                        timer: 1E3
                    }) : f.events.trigger("popupTip:autoTip", {
                        message: "Max Stock: " + this.model.get("inventoryQuantity"),
                        timer: 1E3
                    }), this.setQuantityMax(), this.setQuantityStatus(2)) : "isMin" === e ? (f.events.trigger("popupTip:autoTip", {
                        message: "Min.Order: " + this.model.get("minOrder"),
                        timer: 1E3
                    }), this.setQuantityMin(), this.setQuantityStatus(1)) : "isValidate" === e && (f.events.trigger("popupTip:autoTip", {
                        message: "Min.Order: " + this.model.get("minOrder"),
                        timer: 1E3
                    }), this.setQuantityMin(), this.setQuantityStatus(1))
        },
        setQuantityStatus: function(e) {
            var b = this.$cJProReduce,
                a = this.$cJProPlus,
                c = this.cProNumberSold;
            1 === e ? (a.removeClass(c).addClass("com-ripple-btn"), b.addClass(c).removeClass("com-ripple-btn")) : (2 === e ? a.addClass(c).removeClass("com-ripple-btn") : a.removeClass(c).addClass("com-ripple-btn"), b.removeClass(c).addClass("com-ripple-btn"))
        },
        increaseNum: function(e) {
            var b = parseInt($.trim(this.$cJProNum.val())) + 1;
            $(e.currentTarget).hasClass(this.cProNumberSold) || (this.$cJProNum.val(b), this.setQuantity(b))
        },
        reduceNum: function(e) {
            var b = parseInt($.trim(this.$cJProNum.val())) - 1;
            $(e.currentTarget).hasClass(this.cProNumberSold) || (this.$cJProNum.val(b), this.setQuantity(b))
        },
        updataPriceRange: function(e) {
            this.$cJDiscountPrice.html("US $" + e.displayPrice);
            this.$cJOriginalPrice[0] && this.$cJOriginalPrice.html("US $" + e.deletePrice);
            if (this.$cMulticurrencyRatePrice[0]) {
                var b = this.$cMulticurrencyRatePrice.html().match(/^([^\d]+)\d.+|^[\d.]+(?:\s*\-\s*)?[\d.]*(\D+)$/);
                "ru" === l.countryCur || "tr" === l.countryCur ? this.$cMulticurrencyRatePrice.html((e.displayPrice * this.rate).toFixed(2) + (b[2] || b[1])) : this.$cMulticurrencyRatePrice.html((b[2] || b[1]) + (e.displayPrice * this.rate).toFixed(2))
            }
            0 < this.localRate && this.$cJMulticurrencyPrice[0] && this.$cJMulticurrencyPrice.html(this.$cJMulticurrencyPrice.html().replace(/^([^\d]+)\d.+/, "$1") + (e.displayPrice * this.localRate).toFixed(2))
        },
        showMorePriceRang: function(e) {
            e = $(e.currentTarget);
            var b = this.$cProNumberTrGt,
                a = this.cHide,
                c = this.cLessDown;
            !0 === e.find("span").hasClass(c) ? (b.addClass(a), e.find("a").html($.lang.DETAIL_tapForLowerPrice + ' <span class=""></span>')) : (b.removeClass(a), e.find("a").html($.lang.DETAIL_Less + ' <span class="less-down"></span>'))
        }
    })
});
define("common/detail/addtoCartTip", ["common/config", "tpl/detail/addtoCartTipTpl"], function(l, h) {
    return window.$.DH_addtoCartTip = {
        init: function(f) {
            this.setOptions(f);
            this.cCloseWarp = this.options.cCloseWarp;
            this.cMask = this.options.cMask;
            this.template = this.options.template;
            this.productAttrPopupInstance = this.options.productAttrPopupInstance;
            this.initElement();
            this.initEvent();
            this.render()
        },
        setOptions: function(f) {
            this.options = {
                cCloseWarp: ".j-addtoCartTipWarp",
                cMask: ".j-addtoCartTipMask",
                template: _.template,
                productAttrPopupInstance: null
            };
            $.extend(!0, this.options, f || {})
        },
        initElement: function() {
            this.$body = this.$body || $("body");
            this.$event = this.$event || $({});
            this.$cCloseWarp = $(this.cCloseWarp);
            this.$cMask = $(this.cMask)
        },
        initEvent: function() {
            this.$body.on("click", ".j-addtoCartTipClose, .j-addtoCartTipHref", $.proxy(this.tipClose, this));
            this.$event.on("addtoCartTip:tipOpen", $.proxy(this.tipOpen, this))
        },
        tipOpen: function() {
            var f = this.productAttrPopupInstance;
            this.$cMask.removeClass("dhm-hide");
            this.$cCloseWarp.removeClass("dhm-hide").addClass("fadeIn");
            f && f.closedCouponLayer && f.closedCouponLayer()
        },
        tipClose: function() {
            setTimeout($.proxy(function() {
                this.$cMask.addClass("dhm-hide");
                this.$cCloseWarp.addClass("dhm-hide").removeClass("fadeIn")
            }, this), 200)
        },
        render: function() {
            this.$body.append(this.template(h.main.join(""))({}));
            this.initElement()
        }
    }
});
define("common/detail/sample/sample", "common/config lib/backbone tpl/detail/sample/sampleTpl checkoutflow/dataErrorLog checkoutflow/popupTip common/detail/sample/sampleRules common/detail/buyItNow".split(" "), function(l, h, f, m, e, b, a) {
    var c = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                imageSrc: "",
                attrs: [{
                    attrGourpName: "",
                    attrValue: "",
                    isImg: !1,
                    islinkImg: -1
                }],
                samplePrice: "",
                minPurchaseAmount: "",
                sampleMeasureName: "",
                whitherCountryId: "",
                whitherCountryName: "",
                stockCountryId: "",
                stockCountryName: "",
                expressType: "",
                leadingTime: -1,
                lowerDate: "",
                upperDate: "",
                shipcost: -1
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions;
            this.sampleInfo = this.options.sampleInfo;
            this.imageSrc = this.options.imageSrc;
            this.initEvent()
        },
        initEvent: function() {
            this.on("SampleModel:updateExpress", this.updateExpress, this)
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-getShipCostAndWay.do",
                    data: {
                        client: "wap",
                        version: "0.1",
                        isSample: "1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                },
                sampleInfo: null,
                imageSrc: ""
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {},
                b = a.data || {},
                g = this.sampleInfo,
                e = this.imageSrc;
            c.code = "0x0000" === a.state ? 200 : -1;
            if (0 < c.code) {
                c.attrs = [];
                a = 0;
                for (var f = g.attrs.length; a < f; a++) {
                    var h = {};
                    h.attrGourpName = g.attrs[a].attrGourpName;
                    h.attrValue = g.attrs[a].attrValue;
                    /dhresource\.com|dhgate\.com/i.test(h.attrValue) && (h.isImg = !0);
                    !c.imageSrc && 0 < g.attrs[a].islinkImg && h.isImg && (c.imageSrc = g.attrs[a].attrValue);
                    c.attrs.push(h)
                }
                c.imageSrc || (c.imageSrc = e);
                c.samplePrice = g.samplePrice;
                c.minPurchaseAmount = g.minPurchaseAmount;
                c.sampleMeasureName = g.sampleMeasureName;
                c.whitherCountryId = b.countryId || "";
                c.whitherCountryName = b.countryName || "";
                c.stockCountryId = b.stockCountryId || "";
                c.stockCountryName = b.stockCountryName || "";
                c.expressType = b.expressType || "";
                c.leadingTime = _.isNumber(b.leadingTime) ? b.leadingTime : -1;
                c.lowerDate = b.lowerDate || "";
                c.upperDate = b.upperDate || "";
                c.shipcost = c.expressType && _.isNumber(b.shipcost) ? b.shipcost : -1
            }
            return c
        },
        updateExpress: function(a) {
            var c = {};
            c.whitherCountryId = a.whitherCountryId || "";
            c.whitherCountryName = a.whitherCountryName || "";
            c.stockCountryId = a.stockCountryId || "";
            c.stockCountryName = a.stockCountryName || "";
            c.expressType = a.expressType || "";
            c.leadingTime = _.isNumber(a.leadingTime) ? a.leadingTime : -1;
            c.lowerDate = a.lowerDate || "";
            c.upperDat = a.upperDate || "";
            c.shipcost = _.isNumber(a.shipcost) ? a.shipcost : -1;
            this.set($.extend(!0, {}, this.attributes, c))
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-sampleBtn": "loadDefaultShipcostData",
            "click .j-sampleClose": "hideShipCostLayer",
            "click .j-sampleShipInfo": "loadSampleShipcostList",
            "click .j-sampleSubmit": "toBuy"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cSampleWarp = this.options.cSampleWarp;
            this.cSampleShipInfo = this.options.cSampleShipInfo;
            this.cConfirmWarp = this.options.cConfirmWarp;
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.whitherCountryId = this.options.whitherCountryId;
            this.supplierId = this.options.supplierId;
            this.productId = this.options.productId;
            this.itemCode = this.options.itemCode;
            this.sampleInfo = this.options.sampleInfo;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.callback = this.options.callback;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cSampleWarp = $(this.cSampleWarp);
            this.$cSampleShipInfo = $(this.cSampleShipInfo);
            this.$cConfirmWarp = $(this.cConfirmWarp)
        },
        initEvent: function() {
            this.listenTo(this.model, "change:expressType", this.renderShipInfo);
            this.listenTo(this.model, "change:whitherCountryId", this.renderShipInfo);
            this.listenTo(this.model, "change:whitherCountryId", this.renderConfirmBtn);
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        setOptions: function(a) {
            this.options = {
                cSampleWarp: ".j-sampleWarp",
                cSampleShipInfo: ".j-sampleShipInfo",
                cConfirmWarp: ".j-confirmWarp",
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer1",
                cAnimateShow: "open-layer1",
                template: _.template,
                tpl: f,
                whitherCountryId: "",
                supplierId: "",
                productId: "",
                itemCode: "",
                sampleInfo: null,
                model: new c(null, $.extend(!0, {
                    sampleInfo: a.sampleInfo
                }, {
                    imageSrc: a.oriImgList[0]
                })),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                callback: $.noop
            };
            $.extend(!0, this.options, a || {})
        },
        loadDefaultShipcostData: function() {
            -1 === this.model.get("code") ? (e.events.trigger("popupTip:loading", !0), this.model.fetch({
                    data: {
                        itemcode: this.itemCode,
                        quantity: this.sampleInfo.quantity || 1,
                        skuId: this.sampleInfo.skuId,
                        skuMd5: this.sampleInfo.skuMd5,
                        stockCountry: this.sampleInfo.stockCountryId,
                        country: this.whitherCountryId
                    }
                })) : this.showShipCostLayer()
        },
        success: function(a, c, f) {
            e.events.trigger("popupTip:loading", !1);
            if (0 < a.get("code")) this.render(a.attributes), this.initElement(), this.showShipCostLayer(), this.callback(this.model), b.init();
            else {
                e.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: c.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (t) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: t,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (g) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: g,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                g = c(b.main.join(""))(a),
                e = c(b.shipInfo.join(""))(a);
            a = c(b.confirmBtn.join(""))(a);
            g = g.replace(/\{\{main\}\}/, g).replace(/\{\{shipInfo\}\}/, e).replace(/\{\{confirmBtn\}\}/, a);
            this.$body.append(g)
        },
        renderShipInfo: function() {
            var a = this.template,
                a = a(this.tpl.shipInfo.join(""))(this.model.attributes);
            this.$cSampleShipInfo[0] && this.$cSampleShipInfo.html(a)
        },
        renderConfirmBtn: function() {
            var a = this.template,
                a = a(this.tpl.confirmBtn.join(""))(this.model.attributes);
            this.$cConfirmWarp[0] && this.$cConfirmWarp.html(a)
        },
        setPageStyle: function(a) {
            var c = this.$html,
                b = this.$body,
                g = this.cHtml;
            !0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), c.addClass(g), b.css({
                    "margin-top": -this.__scrollY
                })) : (c.removeClass(g), b.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        showShipCostLayer: function() {
            var a = this.$cSampleWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!0);
                a.removeClass(c);
                setTimeout(function() {
                    a.removeClass(b).addClass(e)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        hideShipCostLayer: function() {
            var a = this.$cSampleWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!1);
                a.removeClass(e).addClass(b);
                setTimeout(function() {
                    a.addClass(c)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        loadSampleShipcostList: function() {
            var a = this.sampleShipcostListInstance;
            a && (200 !== a.model.get("code") ? (e.events.trigger("popupTip:loading", !0), a.trigger("SampleShipcostListView:loadShipcostListData")) : a.trigger("SampleShipcostListView:showShipCostLayer"))
        },
        toBuy: function() {
            var c = {
                submitData: {
                    itemCode: this.itemCode,
                    productId: this.productId,
                    supplierid: this.supplierId,
                    unit: this.model.get("sampleMeasureName"),
                    skuMd5: this.sampleInfo.skuMd5,
                    skuid: this.sampleInfo.skuId,
                    stockIn: this.model.get("stockCountryId"),
                    shipToCountry: this.model.get("whitherCountryId"),
                    shipTypeId: this.model.get("expressType"),
                    quantity: this.sampleInfo.quantity || 1,
                    isSample: "1"
                }
            };
            e.events.trigger("popupTip:loading", !0);
            a.fetch(c)
        }
    })
});
define("common/detail/sample/sampleShipcostList", ["common/config", "lib/backbone", "tpl/detail/sample/sampleShipcostListTpl", "checkoutflow/dataErrorLog", "checkoutflow/popupTip"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: [{
                    stockCountryId: "",
                    stockCountryName: "",
                    expressType: "",
                    leadingTime: -1,
                    deliveryTime: "",
                    lowerDate: "",
                    upperDate: "",
                    shipcost: -1
                }]
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions;
            this.sampleInstance = this.options.sampleInstance;
            this.initEvent()
        },
        initEvent: function() {
            this.on("GetShipCostAndWayListModel:findSelectedExpress", this.findSelectedExpress, this)
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-shipCostAndWay.do",
                    data: {
                        client: "wap",
                        version: "0.1",
                        isSample: "1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                },
                sampleInstance: {}
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {};
            c.code = "0x0000" === a.state ? 200 : -1;
            c.list = []; - 1 !== c.code && ($.each(a.data || [], function(a, b) {
                var g = {};
                g.stockCountryId = b.stockCountryId;
                g.stockCountryName = b.stockCountryName;
                g.expressType = b.expressType;
                g.leadingTime = b.leadingTime;
                g.deliveryTime = b.deliveryTime;
                g.lowerDate = b.lowerDate;
                g.upperDate = b.upperDate;
                g.shipcost = b.shipcost;
                c.list.push(g)
            }), 1 > c.list.length && c.list.push({
                stockCountryId: "",
                stockCountryName: "",
                expressType: "",
                leadingTime: -1,
                deliveryTime: "",
                lowerDate: "",
                upperDate: "",
                shipcost: -1
            }));
            return c
        },
        findExpressIndex: function(a) {
            for (var c = -1, b = this.get("list"), e = 0, f = b.length; e < f; e++) if (0 <= b[e].shipcost && a === b[e].expressType) {
                c = e;
                break
            }
            return c
        },
        findSelectedExpress: function(a) {
            this.sampleInstance.model.trigger("SampleModel:updateExpress", this.get("list")[a])
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-sampleShipCostLayerClose": "hideShipCostLayer",
            "click .j-sampleExpressTypeListContent .free-route-text": "selectedExpress"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cShipCostLayerWarp = this.options.cShipCostLayerWarp;
            this.cCurShipCostInfoWarp = this.options.cCurShipCostInfoWarp;
            this.cWhitherCountryWarp = this.options.cWhitherCountryWarp;
            this.cExpressTypeListWarp = this.options.cExpressTypeListWarp;
            this.cExpressTypeListContent = this.options.cExpressTypeListContent;
            this.cSelectExpress = this.options.cSelectExpress;
            this.itemcode = this.options.itemcode;
            this.quantity = this.options.quantity;
            this.skuId = this.options.skuId;
            this.skuMd5 = this.options.skuMd5;
            this.whitherCountryId = this.options.whitherCountryId;
            this.whitherCountryName = this.options.whitherCountryName;
            this.stockCountryId = this.options.stockCountryId;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.sampleInstance = this.options.sampleInstance;
            this.timer = null;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$body = this.$body || $("body");
            this.$cShipCostLayerWarp = $(this.cShipCostLayerWarp);
            this.$cCurShipCostInfoWarp = $(this.cCurShipCostInfoWarp);
            this.$cWhitherCountryWarp = $(this.cWhitherCountryWarp);
            this.$cExpressTypeListWarp = $(this.cExpressTypeListWarp)
        },
        initEvent: function() {
            var a = this,
                c = this.timer;
            this.on("SampleShipcostListView:loadShipcostListData", this.loadShipcostListData, this);
            this.on("SampleShipcostListView:showShipCostLayer", this.showShipCostLayer, this);
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                c && clearTimeout(c);
                c = setTimeout(function() {
                    a.setShipCostStyle()
                }, 500)
            })
        },
        setOptions: function(a) {
            this.options = {
                cShipCostLayerWarp: ".j-sampleShipCostLayerWarp",
                cCurShipCostInfoWarp: ".j-sampleCurShipCostInfoWarp",
                cWhitherCountryWarp: ".j-sampleWhitherCountryWarp",
                cExpressTypeListWarp: ".j-sampleExpressTypeListWarp",
                cExpressTypeListContent: ".j-sampleExpressTypeListContent",
                cSelectExpress: "free-current-frame",
                itemcode: -1,
                quantity: -1,
                skuId: "",
                skuMd5: "",
                whitherCountryId: "",
                whitherCountryName: "",
                stockCountryId: "",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer3",
                cAnimateShow: "open-layer3",
                template: _.template,
                tpl: f,
                model: new b(null, {
                    sampleInstance: a.sampleInstance
                }),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                sampleInstance: null
            };
            $.extend(!0, this.options, a || {})
        },
        getParam: function(a) {
            var c = {};
            !1 === _.isObject(a) && (a = {});
            c.quantity = a.quantity ? this.quantity = a.quantity : this.quantity;
            c.itemcode = this.itemcode;
            c.country = a.whitherCountryId ? this.whitherCountryId = a.whitherCountryId : this.whitherCountryId;
            c.stockCountry = a.stockCountryId ? this.stockCountryId = a.stockCountryId : this.stockCountryId;
            c.skuId = a.skuId ? this.skuId = a.skuId : this.skuId;
            c.skuMd5 = a.skuMd5 ? this.skuMd5 = a.skuMd5 : this.skuMd5;
            return c
        },
        loadShipcostListData: function(a) {
            a && a.updateCallback && (this.updateCallback = a.updateCallback);
            a && a.whitherCountryName && (this.whitherCountryName = a.whitherCountryName);
            this.model.fetch({
                data: this.getParam(a)
            })
        },
        success: function(a, c, b) {
            !this.updateCallback && e.events.trigger("popupTip:loading", !1);
            if (0 < a.get("code")) this.updateCallback && (c = a.findExpressIndex(this.sampleInstance.model.get("expressType")), 0 > c && (c = 0), this.updateCallback(c)), this.render(a.attributes), this.setShipCostStyle(), delete this.updateCallback;
            else {
                e.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: c.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (k) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: k,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (a) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: a,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                e = $.extend({}, this.sampleInstance.model.attributes),
                f = c(b.main.join(""))($.extend({}, e)),
                h = c(b.curShipCostInfo.join(""))(e),
                l = c(b.curWhitherCountry.join(""))(e);
            a = c(b.shipCostlist.join(""))($.extend({}, a, {
                selectExpressType: e.expressType,
                whitherCountryName: e.whitherCountryName,
                shipcost: e.shipcost
            }));
            f = f.replace(/\{\{main\}\}/, f).replace(/\{\{curShipCostInfo\}\}/, h).replace(/\{\{curWhitherCountry\}\}/, l).replace(/\{\{shipCostlist\}\}/, a);
            this.$cShipCostLayerWarp[0] ? (this.renderCurShipCostInfo(), this.renderCurWhitherCountry(), this.renderShipCostlist()) : (this.$body.append(f), this.initElement(), this.showShipCostLayer())
        },
        renderCurShipCostInfo: function() {
            var a = this.template,
                c = this.tpl,
                b = $.extend({}, this.sampleInstance.model.attributes),
                a = a(c.curShipCostInfo.join(""))(b);
            this.$cCurShipCostInfoWarp[0] && this.$cCurShipCostInfoWarp.html(a)
        },
        renderCurWhitherCountry: function() {
            var a = this.template,
                c = this.tpl,
                b = $.extend({}, this.sampleInstance.model.attributes),
                a = a(c.curWhitherCountry.join(""))(b);
            this.$cWhitherCountryWarp[0] && this.$cWhitherCountryWarp.html(a)
        },
        renderShipCostlist: function() {
            var a = this.template,
                c = this.tpl,
                b = $.extend({}, this.sampleInstance.model.attributes),
                a = a(c.shipCostlist.join(""))($.extend({}, this.model.attributes, {
                    selectExpressType: b.expressType,
                    whitherCountryName: b.whitherCountryName,
                    shipcost: b.shipcost
                }));
            this.$cExpressTypeListWarp[0] && this.$cExpressTypeListWarp.html(a)
        },
        selectedExpress: function(a) {
            a = $(a.currentTarget);
            var c = this.cSelectExpress;
            a.hasClass(c) || (a.siblings().removeClass(c), a.addClass(c), this.model.trigger("GetShipCostAndWayListModel:findSelectedExpress", a.index()), this.renderCurShipCostInfo())
        },
        setShipCostStyle: function() {
            var a = $(this.cExpressTypeListContent),
                c, b = 1 * this.$window.height(),
                e = 1 * (a.outerHeight() - a.height()),
                f = 0;
            a[0] && (c = a.siblings(), $.each(c, function(a, c) {
                f += 1 * $(c).outerHeight()
            }), c = a.parent().siblings(), $.each(c, function(a, c) {
                f += 1 * $(c).outerHeight()
            }), a.css({
                height: b - f - e
            }))
        },
        showShipCostLayer: function() {
            var a = this.$cShipCostLayerWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(c);
                this.setShipCostStyle();
                setTimeout(function() {
                    a.removeClass(b).addClass(e)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        hideShipCostLayer: function() {
            var a = this.$cShipCostLayerWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(e).addClass(b);
                setTimeout(function() {
                    a.addClass(c)
                }, 260);
                l.preventClick()
            }, this), 200)
        }
    })
});
define("common/detail/sample/sampleShiptoCountryList", "common/config lib/backbone tpl/detail/sample/sampleShiptoCountryListTpl checkoutflow/dataErrorLog checkoutflow/popupTip common/detail/getPopularCountryList".split(" "), function(l, h, f, m, e, b) {
    var a = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                popular: [{
                    whitherCountryId: "",
                    whitherCountryName: ""
                }],
                all: {
                    A: [{
                        whitherCountryId: "",
                        whitherCountryName: ""
                    }]
                },
                currentWhitherCountryId: ""
            }
        },
        initialize: function(a, b) {
            this.setOptions(b);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-whitherCountry.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, b, e) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, e || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, e))
        },
        parse: function(a) {
            var c = {},
                e;
            c.code = "0x0000" === a.state ? 200 : -1;
            c.popular = b.get();
            e = this.getPopularWhitherCountryIdStr(c.popular);
            c.all = {}; - 1 !== c.code && $.each(a.data, function(a, b) {
                c.all[a] = [];
                $.each(b, function(b, g) {
                    var f = {};
                    (new RegExp("\\b" + g.countryId + "\\b")).test(e) || (f.whitherCountryId = g.countryId, f.whitherCountryName = g.countryName, c.all[a].push(f))
                })
            });
            return c
        },
        getPopularWhitherCountryIdStr: function(a) {
            var c = [];
            $.each(a, function(a, b) {
                c.push(b.whitherCountryId)
            });
            return c.join(";")
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-sampleWhitherCountryBtn": "loadCountryData",
            "click .j-sampleShiptoCountryClose": "hideShipToLayerLayer",
            "click .j-sampleShiptoCountryWarp li[data-whithercountryid]": "selectShipToCountry"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cShiptoCountryWarp = this.options.cShiptoCountryWarp;
            this.cShiptoCountryContent = this.options.cShiptoCountryContent;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.sampleInstance = this.options.sampleInstance;
            this.sampleShipcostListInstance = this.options.sampleShipcostListInstance;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cShiptoCountryWarp = $(this.cShiptoCountryWarp);
            this.$cShiptoCountryContent = $(this.cShiptoCountryContent)
        },
        initEvent: function() {
            var a = this,
                b = this.timer;
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                b && clearTimeout(b);
                b = setTimeout(function() {
                    a.setCountryStyle()
                }, 500)
            })
        },
        setOptions: function(c) {
            this.options = {
                cShiptoCountryWarp: ".j-sampleShiptoCountryWarp",
                cShiptoCountryContent: ".j-sampleShiptoCountryContent",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer3",
                cAnimateShow: "open-layer3",
                template: _.template,
                tpl: f,
                model: new a({
                    currentWhitherCountryId: c.currentWhitherCountryId
                }),
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                }),
                sampleInstance: null,
                sampleShipcostListInstance: null
            };
            $.extend(!0, this.options, c || {})
        },
        loadCountryData: function() {
            -1 === this.model.get("code") ? (e.events.trigger("popupTip:loading", !0), this.model.fetch()) : this.showShipToLayer()
        },
        success: function(a, b, f) {
            if (200 === a.get("code")) this.render(a.attributes), this.initElement(), e.events.trigger("popupTip:loading", !1), this.showShipToLayer();
            else {
                e.events.trigger("popupTip:loading", !1);
                e.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: b.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (n) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: n,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: b
                    })
                }
            }
        },
        error: function() {
            e.events.trigger("popupTip:loading", !1);
            e.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (c) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: c,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                e = c(b.main.join(""))(a);
            a = c(b.countryList.join(""))(a);
            e = e.replace(/\{\{main\}\}/, e).replace(/\{\{countryList\}\}/, a);
            this.$body.append(e)
        },
        showShipToLayer: function() {
            var a = this.$cShiptoCountryWarp,
                b = this.cHide,
                e = this.cAnimateHide,
                f = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(b);
                setTimeout(function() {
                    a.removeClass(e).addClass(f)
                }, 10);
                this.setCountryStyle();
                l.preventClick()
            }, this), 200)
        },
        hideShipToLayerLayer: function() {
            var a = this.$cShiptoCountryWarp,
                b = this.cHide,
                e = this.cAnimateHide,
                f = this.cAnimateShow;
            setTimeout($.proxy(function() {
                a.removeClass(f).addClass(e);
                setTimeout(function() {
                    a.addClass(b)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        setCountryStyle: function() {
            var a = this.$cShiptoCountryContent,
                b, e = 1 * this.$window.height(),
                f = 0;
            a[0] && (b = a.siblings(), $.each(b, function(a, c) {
                f += 1 * $(c).outerHeight()
            }), a.css({
                height: e - f
            }))
        },
        selectShipToCountry: function(a) {
            var c = $(a.currentTarget),
                b = this.$cShiptoCountryWarp.find("li[data-whithercountryid]"),
                f = this.sampleInstance,
                h = this.sampleShipcostListInstance;
            c.find("span")[0] ? this.hideShipToLayerLayer() : (e.events.trigger("popupTip:loading", !0), h.trigger("SampleShipcostListView:loadShipcostListData", {
                    whitherCountryId: c.attr("data-whitherCountryId") || "",
                    whitherCountryName: c.attr("data-whitherCountryName") || "",
                    updateCallback: $.proxy(function(a) {
                        f.model.trigger("SampleModel:updateExpress", $.extend({}, h.model.get("list")[a], {
                            whitherCountryId: c.attr("data-whitherCountryId"),
                            whitherCountryName: c.attr("data-whitherCountryName")
                        }));
                        b.find("span").remove();
                        c.append("<span>");
                        e.events.trigger("popupTip:loading", !1);
                        this.hideShipToLayerLayer()
                    }, this)
                }))
        }
    })
});
define("common/detail/sample/sampleRules", ["common/config", "tpl/detail/sample/sampleRulesTpl"], function(l, h) {
    return {
        init: function(f) {
            this.setOptions(f);
            this.cSampleRulesWarp = this.options.cSampleRulesWarp;
            this.data = this.options.data;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.initElement();
            this.initEvent();
            this.render(this.data)
        },
        setOptions: function(f) {
            this.options = {
                cSampleRulesWarp: ".j-sampleRulesWarp",
                data: {},
                cHide: "dhm-hide",
                cAnimateHide: "close-layer3",
                cAnimateShow: "open-layer3",
                template: _.template,
                tpl: h
            };
            $.extend(!0, this.options, f || {})
        },
        initElement: function() {
            this.$body = this.body || $("body");
            this.$cSampleRulesWarp = $(this.cSampleRulesWarp)
        },
        initEvent: function() {
            this.$body.on("click", ".j-sampleRuleBtn", $.proxy(this.showShipCostLayer, this));
            this.$body.on("click", ".j-sampleRulesClose", $.proxy(this.hideShipCostLayer, this))
        },
        render: function(f) {
            var h = this.template;
            f = h(this.tpl.main.join(""))(f);
            this.$body.append(f);
            this.initElement()
        },
        showShipCostLayer: function() {
            var f = this.$cSampleRulesWarp,
                h = this.cHide,
                e = this.cAnimateHide,
                b = this.cAnimateShow;
            setTimeout($.proxy(function() {
                f.removeClass(h);
                setTimeout(function() {
                    f.removeClass(e).addClass(b)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        hideShipCostLayer: function() {
            var f = this.$cSampleRulesWarp,
                h = this.cHide,
                e = this.cAnimateHide,
                b = this.cAnimateShow;
            setTimeout($.proxy(function() {
                f.removeClass(b).addClass(e);
                setTimeout(function() {
                    f.addClass(h)
                }, 260);
                l.preventClick()
            }, this), 200)
        }
    }
});
define("common/detail/addToCart", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var m = l.wwwURL + "/mobileApiWeb/cart-Cart-addToCart.do",
        e = {};
    return {
        getParams: function(b) {
            b = {
                client: "wap",
                version: "3.0",
                itemcode: b.submitData.itemCode,
                productId: b.submitData.productId,
                supplierId: b.submitData.supplierid,
                unit: b.submitData.unit,
                skuMd5: b.submitData.skuMd5,
                skuid: b.submitData.skuid,
                stockIn: b.submitData.stockIn || "",
                shipToCountry: b.submitData.shipToCountry,
                shipTypeId: b.submitData.shipTypeId,
                quantity: b.submitData.quantity,
                impressionInfo: b.submitData.impressionInfo,
                remark: b.submitData.remark,
                attrCm: b.submitData.attrCm
            };
            $.extend(e, b);
            return b
        },
        fetch: function(b) {
            void 0 !== window._paq && void 0 !== window._paqEventPush && window._paqEventPush("https://dhgate.com/event/actions3/addcart/" + l.countryCur + "-wap");
            $.ajax({
                type: "post",
                url: m,
                data: this.getParams(b),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(a) {
                    if ("0x0000" === a.state) this.parse(a);
                    else {
                        h.events.trigger("popupTip:loading", !1);
                        h.events.trigger("popupTip:dataErrorTip", {
                            action: "close",
                            message: a.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (c) {
                            f.events.trigger("save:dataErrorLog", {
                                message: c,
                                url: m,
                                params: e,
                                result: a
                            })
                        }
                    }
                },
                error: function() {
                    h.events.trigger("popupTip:loading", !1);
                    h.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (a) {
                        f.events.trigger("save:dataErrorLog", {
                            message: a,
                            url: m,
                            params: e
                        })
                    }
                }
            })
        },
        parse: function(b) {
            h.events.trigger("popupTip:loading", !1);
            window.$.DH_addtoCartTip && window.$.DH_addtoCartTip.$event.trigger("addtoCartTip:tipOpen");
            this.updateCartNum(b.data && b.data.cartItemCount)
        },
        updateCartNum: function(b) {
            0 < 1 * b && $(".j-cartnum").html(b).show()
        }
    }
});
define("common/detail/buyItNow", ["common/config", "common/getUserInfo", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f, m) {
    m = new m({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var e = l.wwwURL + "/mobileApiWeb/order-Order2-buyItNow.do",
        b = {};
    return {
        getParams: function(a) {
            a = {
                client: "wap",
                version: "3.0",
                itemcode: a.submitData.itemCode,
                productId: a.submitData.productId,
                supplierId: a.submitData.supplierid,
                unit: a.submitData.unit,
                skuMd5: a.submitData.skuMd5,
                skuid: a.submitData.skuid,
                stockIn: a.submitData.stockIn || "",
                shipToCountry: a.submitData.shipToCountry,
                shipTypeId: a.submitData.shipTypeId,
                quantity: a.submitData.quantity,
                impressionInfo: a.submitData.impressionInfo,
                remark: a.submitData.remark,
                attrCm: a.submitData.attrCm,
                isSample: a.submitData.isSample
            };
            $.extend(b, a);
            return a
        },
        fetch: function(a) {
            void 0 !== window._paq && void 0 !== window._paqEventPush && window._paqEventPush("https://dhgate.com/event/actions4/buynow-" + l.countryCur + "-wap");
            $.ajax({
                type: "post",
                url: e,
                data: this.getParams(a),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(c) {
                    if ("0x0000" === c.state || "0x0002" === c.state)"0x0002" === c.state && (this.__sampleOptions = a), this.parse(c);
                    else {
                        f.events.trigger("popupTip:loading", !1);
                        f.events.trigger("popupTip:dataErrorTip", {
                            action: "close",
                            message: c.message
                        });
                        try {
                            throw "success(): data is wrong";
                        } catch (g) {
                            m.events.trigger("save:dataErrorLog", {
                                message: g,
                                url: e,
                                params: b,
                                result: c
                            })
                        }
                    }
                },
                error: function() {
                    f.events.trigger("popupTip:loading", !1);
                    f.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (c) {
                        m.events.trigger("save:dataErrorLog", {
                            message: c,
                            url: e,
                            params: b
                        })
                    }
                }
            })
        },
        parse: function(a, c) {
            f.events.trigger("popupTip:loading", !1);
            var b;
            b = $("html").hasClass("dhm-htmlOverflow") ? !1 : !0;
            "0x0002" === a.state ? h.init({
                    fixedURL: "integrate_popup",
                    isSetPageStyle: b,
                    canVisitorSignin: !0,
                    isBuyItNow: !0,
                    loginSuccessCallback: $.proxy(function() {
                        f.events.trigger("popupTip:loading", !0);
                        this.fetch(this.__sampleOptions)
                    }, this)
                }) : h.init({
                    fixedURL: "integrate_popup",
                    isSetPageStyle: b,
                    canVisitorSignin: !0,
                    isBuyItNow: !0,
                    loginSuccessCallback: function() {
                        f.events.trigger("popupTip:loading", !1);
                        window.location.href = l.wwwURL.replace(/http:/i, "https:") + "/placeorder/placeOrder.html"
                    }
                })
        }
    }
});
define("common/detail/recommended", ["common/config", "tpl/detail/recommendedTpl", "checkoutflow/dataErrorLog"], function(l, h, f) {
    var m = Backbone.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: [{
                    url: "",
                    imageUrl: "",
                    promoType: "",
                    discount: "",
                    price: -1,
                    curreny: ""
                }]
            }
        },
        initialize: function(e, b) {
            this.setOptions(b);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(e) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/search-Recommend-getItems.do",
                    data: {
                        version: "3.3",
                        client: "wap",
                        pageNum: 1,
                        pageSize: 16,
                        type: 2,
                        source: 1
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, e || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(e, b, a) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, a || {});
            return Backbone.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, a))
        },
        getPromoType: function(e) {
            var b = "-1";
            "0" === e ? b = "1" : "10" === e && (b = "2");
            return b
        },
        parse: function(e) {
            var b = {},
                a = this;
            b.code = "0x0000" === e.state ? 200 : -1;
            b.list = []; - 1 !== b.code && $.each(e.data.resultList || [], function(c, g) {
                var f = {};
                f.url = l.wwwURL + "/product/" + g.seoName + "/" + g.itemCode + ".html#" + g.D1Tag;
                f.imageUrl = g.imgUrl;
                f.promoType = a.getPromoType(g.promoType);
                f.discount = g.discountRate || -1;
                f.price = "-1" !== f.promoType ? g.discountPrice : g.maxPrice;
                f.curreny = e.data.currencyText;
                b.list.push(f)
            });
            return b
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-recommended-more": "showMore"
        },
        initialize: function(e) {
            this.setOptions(e);
            this.cRecommendedProducts = this.options.cRecommendedProducts;
            this.cJRecommendedMore = this.options.cJRecommendedMore;
            this.cHide = this.options.cHide;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.initElement();
            this.initEvent();
            this.model.fetch({
                data: {
                    pageType: this.options.pageType,
                    itemID: this.options.itemCode,
                    category: this.options.cateDispId
                }
            })
        },
        setOptions: function(e) {
            this.options = {
                cRecommendedProducts: ".j-recommended-products",
                cJRecommendedMore: ".j-recommended-more",
                pageType: "",
                itemCode: -1,
                cateDispId: "",
                cHide: "dhm-hide",
                template: _.template,
                tpl: h,
                model: new m,
                dataErrorLog: new f({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, e || {})
        },
        initElement: function() {
            this.$cRecommendedProducts = $(this.cRecommendedProducts);
            this.$cJRecommendedMore = $(this.cJRecommendedMore)
        },
        initEvent: function() {
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        success: function(e, b, a) {
            if (200 === e.get("code")) 0 < e.get("list").length && this.render(e.attributes);
            else try {
                throw "success(): data is wrong";
            } catch (c) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: c,
                    url: this.model.__params.url,
                    params: this.model.__params.data,
                    result: b
                })
            }
        },
        error: function() {
            try {
                throw "error(): request is wrong";
            } catch (e) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: e,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(e) {
            var b = this.template,
                a = this.tpl,
                c = b(a.main.join(""))(e),
                g = b(a.title.join(""))(e),
                f = b(a.products.join(""))(e);
            e = b(a.recommendedMore.join(""))(e);
            c = c.replace(/\{\{title\}\}/, g).replace(/\{\{products\}\}/, f).replace(/\{\{recommendedMore\}\}/, e);
            this.$cRecommendedProducts.html(c).removeClass(this.cHide);
            $(".j-recommended-products .lazy").lazyload({
                threshold: "300",
                load: function() {
                    $(this).addClass("show");
                    $(this).closest(".datail-pro-img").css({
                        background: "none"
                    })
                }
            })
        },
        showMore: function(e) {
            var b = $(e.currentTarget),
                a = this.cHide,
                c = this.$cRecommendedProducts.find('ul[class="' + this.cHide + '"]');
            setTimeout($.proxy(function() {
                b.remove();
                this.loadImg(c);
                c.removeClass(a)
            }, this), 200)
        },
        loadImg: function(e) {
            $.each(e, function(b, a) {
                $.each($(a).find("div[data-original]"), function(a, b) {
                    var c = $(b);
                    $(b).html('<img src="' + c.attr("data-original") + '" />').removeAttr("data-original")
                })
            })
        }
    })
});
define("common/detail/selectCoupon", ["common/config", "lib/backbone", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "tpl/detail/selectCouponTpl"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                dhCouponList: [{
                    allcategory: -1,
                    couponcode: "",
                    amount: 0,
                    orderAmo: "",
                    endDate: 0,
                    startDate: 0,
                    selected: !1,
                    canUse: !0,
                    type: 0
                }],
                isSellerApply: !0,
                storeCouponList: [{
                    couponcode: "",
                    couponType: "",
                    plateForm: "",
                    amount: 0,
                    orderAmo: "",
                    endDate: 0,
                    startDate: 0,
                    selected: !1,
                    canUse: !0
                }],
                isDhApply: !0
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions;
            this.systemSlectCouponcode = {};
            this.userSelectCouponcode = {};
            this.initEvent()
        },
        initEvent: function() {
            this.on("SelectCouponModel:setStaticPro", function(a) {
                "system" === a.type ? this.setSystemSlectCouponcode(a) : this.setUserSelectCouponcode(a);
                this.setItemsSubtotal(a);
                this.setOrderSave(a)
            }, this)
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/order-Order2-getCouponList4Item.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = this,
                b = {},
                e = 0;
            "0x0000" === a.state ? (b.code = 200, void 0 !== a.data && _.isObject(a.data) && _.isArray(a.data.couponList) && _.isArray(a.data.sellerCouponList) || (b.code = -2)) : b.code = -1;
            0 < b.code && (b.storeCouponList = [], b.isSellerApply = !1, $.each(a.data.sellerCouponList, function(a, g) {
                var f = {};
                f.couponcode = g.couponcode;
                f.couponType = g.couponType;
                f.plateForm = g.plateForm;
                f.amount = g.amount;
                f.orderAmo = g.orderAmo;
                f.startDate = c.startTime(g.startDate);
                f.endDate = c.expiresTime(g.endDate);
                c.systemSlectCouponcode.store === g.couponcode || c.userSelectCouponcode.store === g.couponcode ? (f.selected = !0, f.canUse = !0, b.isSellerApply = !0, e = g.amount) : (f.selected = !1, f.canUse = g.orderAmo <= c.itemsSubtotal - c.orderSave ? !0 : !1);
                b.storeCouponList.push(f)
            }), b.dhCouponList = [], b.isDhApply = !1, $.each(a.data.couponList, function(a, g) {
                var f = {};
                f.allcategory = g.allcategory;
                f.type = g.type;
                f.couponcode = g.couponcode;
                f.amount = g.amount;
                f.orderAmo = g.orderAmo;
                f.startDate = c.startTime(g.startDate);
                f.endDate = c.expiresTime(g.endDate);
                c.systemSlectCouponcode.dh !== g.couponcode && c.userSelectCouponcode.dh !== g.couponcode || !1 !== b.isDhApply ? (f.selected = !1, f.canUse = g.orderAmo <= c.itemsSubtotal - c.orderSave - e ? !0 : !1) : (f.selected = !0, f.canUse = !0, b.isDhApply = !0);
                b.dhCouponList.push(f)
            }));
            return b
        },
        expiresTime: function(a) {
            var c = (new Date(a)).getFullYear(),
                b = (new Date(a)).getMonth();
            a = (new Date(a)).getDate();
            return "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[b] + "  " + a + ", " + c
        },
        startTime: function(a) {
            var c = (new Date(a)).getFullYear(),
                b = (new Date(a)).getMonth();
            a = (new Date(a)).getDate();
            return "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[b] + "  " + a + ", " + c
        },
        setItemsSubtotal: function(a) {
            this.itemsSubtotal = a.itemsSubtotal
        },
        setOrderSave: function(a) {
            this.orderSave = a.orderSave
        },
        setSystemSlectCouponcode: function(a) {
            this.systemSlectCouponcode.store = a.sellerCouponCode;
            this.systemSlectCouponcode.dh = a.dhCouponCode;
            this.deleteUserSelectCouponcode()
        },
        deleteSystemSlectCouponcode: function() {
            delete this.systemSlectCouponcode.store;
            delete this.systemSlectCouponcode.dh
        },
        setUserSelectCouponcode: function(a) {
            this.userSelectCouponcode.store = a.sellerCouponCode;
            this.userSelectCouponcode.dh = a.dhCouponCode;
            this.deleteSystemSlectCouponcode()
        },
        deleteUserSelectCouponcode: function() {
            delete this.userSelectCouponcode.store;
            delete this.userSelectCouponcode.dh
        },
        getCouponCodeGroup: function() {
            var a = {};
            this.systemSlectCouponcode.store || this.systemSlectCouponcode.dh ? (a.sellerCouponCode = this.systemSlectCouponcode.store, a.dhCouponCode = this.systemSlectCouponcode.dh) : (a.sellerCouponCode = this.userSelectCouponcode.store, a.dhCouponCode = this.userSelectCouponcode.dh);
            return a
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-bindCouponBtn": "load",
            "click .j-onekeySelectCouponClose": "hideCouponLayer",
            "click .j-onekeySelectCouponWarp li[data-couponcode]": "choose",
            "click .j-onekeySelectCouponApply": "applyCoupon"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cBindCouponBtn = this.options.cBindCouponBtn;
            this.cOnekeySelectCouponWarp = this.options.cOnekeySelectCouponWarp;
            this.cOnekeySelectCouponContent = this.options.cOnekeySelectCouponContent;
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.getTotalPrice = this.options.getTotalPrice;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cBindCouponBtn = this.$cBindCouponBtn || $(this.cBindCouponBtn);
            this.$cOnekeySelectCouponWarp = $(this.cOnekeySelectCouponWarp);
            this.$cOnekeySelectCouponContent = $(this.cOnekeySelectCouponContent)
        },
        initEvent: function() {
            var a = this,
                c = this.timer;
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.on("SelectCouponView:renderPageCouponInfo", this.renderPageCouponInfo, this);
            this.on("SelectCouponView:hide", this.hide, this);
            this.$window.on("orientationchange, resize", function() {
                c && clearTimeout(c);
                c = setTimeout(function() {
                    a.setCouponStyle()
                }, 500)
            })
        },
        setOptions: function(a) {
            this.options = {
                cBindCouponBtn: ".j-bindCouponBtn",
                cOnekeySelectCouponWarp: ".j-onekeySelectCouponWarp",
                cOnekeySelectCouponContent: ".j-onekeySelectCouponContent",
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer1",
                cAnimateShow: "open-layer1",
                template: _.template,
                tpl: e,
                model: new b,
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, a || {})
        },
        getParams: function(a) {
            var c = {};
            c.itemCode = a.itemCode;
            c.supplierId = a.supplierId;
            c.cateDispId = a.cateDispId;
            c.amount = a.amount;
            return c
        },
        load: function(a) {
            f.events.trigger("popupTip:loading", !0);
            this.model.fetch({
                data: this.getParams(this.params)
            })
        },
        success: function(a, c, b) {
            if (200 === a.get("code")) this.render(a.attributes), f.events.trigger("popupTip:loading", !1), this.showCouponLayer();
            else {
                f.events.trigger("popupTip:loading", !1); - 1 === a.get("code") ? f.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: c.message
                    }) : -2 === a.get("code") && f.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Service exception."
                    });
                try {
                    throw "success(): data is wrong";
                } catch (k) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: k,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            f.events.trigger("popupTip:loading", !1);
            f.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (a) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: a,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                e = c(b.main.join(""))(a),
                f = c(b.storeCouponList.join(""))(a);
            a = c(b.dhCouponList.join(""))(a);
            e = e.replace(/\{\{storeCouponList\}\}/, f).replace(/\{\{dhCouponList\}\}/, a);
            this.$cOnekeySelectCouponContent[0] ? this.$cOnekeySelectCouponContent.html(f + a) : (this.$el.append(e), this.initElement())
        },
        renderPageCouponInfo: function(a) {
            var c = this.template;
            a = c(this.tpl.pageCouponInfo.join(""))(a);
            this.$cBindCouponBtn.removeClass("dhm-hide").html(a)
        },
        hide: function() {
            this.$cBindCouponBtn.addClass("dhm-hide")
        },
        setPageStyle: function(a) {
            var c = this.$html,
                b = this.$body,
                e = this.cHtml;
            !0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), c.addClass(e), b.css({
                    "margin-top": -this.__scrollY
                })) : (c.removeClass(e), b.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        setCouponStyle: function() {
            var a = this.$cOnekeySelectCouponContent,
                c, b = 1 * this.$window.height(),
                e = 0;
            a[0] && (c = a.siblings(), $.each(c, function(a, c) {
                e += 1 * $(c).outerHeight()
            }), a.css({
                height: b - e
            }))
        },
        showCouponLayer: function() {
            var a = this.$cOnekeySelectCouponWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!0);
                a.removeClass(c);
                setTimeout(function() {
                    a.removeClass(b).addClass(e)
                }, 10);
                this.setCouponStyle();
                l.preventClick()
            }, this), 200)
        },
        hideCouponLayer: function() {
            var a = this.$cOnekeySelectCouponWarp,
                c = this.cHide,
                b = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!1);
                a.removeClass(e).addClass(b);
                setTimeout(function() {
                    a.addClass(c)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        choose: function(a) {
            a = $(a.currentTarget);
            var c = this,
                b = this.$cOnekeySelectCouponWarp.find("li[data-type=dh]"),
                e = b.filter(".current"),
                f = b.last(),
                h = 0,
                l = this.$cOnekeySelectCouponWarp.find("li[data-type=seller]"),
                m = l.filter(".current"),
                q = l.last(),
                u = 0;
            a.hasClass("one-not-click") || a.hasClass("current") || (a.siblings("li[data-couponcode]").removeClass("current").remove("span[data-type]"), a.addClass("current").append('<span data-type="y"></span>'), "seller" === a.attr("data-type") ? (u = 1 * a.attr("data-amount"), $.each(b, function(a, b) {
                    var g = $(b),
                        d = 1 * g.attr("data-orderAmo");
                    0 !== d && (f.hasClass("current") && d <= c.model.itemsSubtotal - c.model.orderSave - u ? g.removeClass("one-not-click").addClass("com-ripple-btn") : !f.hasClass("current") && (d <= c.model.itemsSubtotal - c.model.orderSave - u || e[0] === g[0]) ? g.removeClass("one-not-click").addClass("com-ripple-btn") : g.removeClass("current com-ripple-btn").remove("span[data-type]").addClass("one-not-click"))
                }), f[0] && 1 > f.siblings('li[class*="current"]').length && f.addClass("current").append('<span data-type="y"></span>')) : (h = 1 * a.attr("data-amount"), $.each(l, function(a, b) {
                    var g = $(b),
                        d = 1 * g.attr("data-orderAmo");
                    0 !== d && (q.hasClass("current") && d <= c.model.itemsSubtotal - c.model.orderSave - h ? g.removeClass("one-not-click").addClass("com-ripple-btn") : !q.hasClass("current") && (d <= c.model.itemsSubtotal - c.model.orderSave - h || m[0] === g[0]) ? g.removeClass("one-not-click").addClass("com-ripple-btn") : g.removeClass("current com-ripple-btn").remove("span[data-type]").addClass("one-not-click"))
                }), q[0] && 1 > q.siblings('li[class*="current"]').length && q.addClass("current").append('<span data-type="y"></span>')))
        },
        applyCoupon: function() {
            for (var a = this.getTotalPrice.model, c = this.$cOnekeySelectCouponWarp.find("li[data-type=seller]"), b = this.$cOnekeySelectCouponWarp.find("li[data-type=dh]"), e, f, h = 0, l = c.length; h < l; h++) if ($(c[h]).hasClass("current")) {
                e = $(c[h]).attr("data-couponcode");
                break
            }
            c = 0;
            for (h = b.length; c < h; c++) if ($(b[c]).hasClass("current")) {
                f = $(b[c]).attr("data-couponcode");
                break
            }
            this.getTotalPrice.trigger("GetTotalPriceView:load", {
                params: {
                    itemcode: this.params.itemCode,
                    skuId: this.params.skuId,
                    skuMd5: this.params.skuMd5,
                    quantity: this.params.quantity,
                    shiptype: this.params.shiptype,
                    shipAddrId: this.params.shipAddrId,
                    stockCountry: this.params.stockCountry,
                    sellerCouponCode: e,
                    dhCouponCode: f
                },
                successCallback: $.proxy(function() {
                    this.model.trigger("SelectCouponModel:setStaticPro", {
                        type: "user",
                        sellerCouponCode: e,
                        dhCouponCode: f,
                        itemsSubtotal: this.model.itemsSubtotal,
                        orderSave: this.model.orderSave
                    });
                    this.renderPageCouponInfo({
                        hasDhCoupon: a.get("hasDhCoupon"),
                        hasSellerCoupon: a.get("hasSellerCoupon"),
                        sellerCouponInfo: a.get("sellerCouponInfo"),
                        dhCouponInfo: a.get("dhCouponInfo")
                    });
                    this.hideCouponLayer()
                }, this)
            })
        }
    })
});
define("common/detail/getTotalPrice", ["common/config", "lib/backbone", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "tpl/detail/getTotalPriceTpl"], function(l, h, f, m, e) {
    var b = h.Model.extend({
        defaults: function() {
            return {
                code: -1,
                itemsSubtotal: "",
                shippingCost: "",
                hasStoreDis: !1,
                hasCrossStoreDis: !1,
                orderSave: "",
                hasDhCoupon: !1,
                dhCouponAmount: "",
                hasSellerCoupon: !1,
                sellerCouponAmount: "",
                totalPrice: "",
                loaclMark: "",
                localTprice: "",
                sellerCouponInfo: 0,
                dhCouponInfo: 0,
                sellerCouponCode: "",
                dhCouponCode: ""
            }
        },
        initialize: function(a, c) {
            this.setOptions(c);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-getBuySummaryByCoupons.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, c, b) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, b || {});
            return h.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, b))
        },
        parse: function(a) {
            var c = {};
            "0x0000" === a.state ? (c.code = 200, void 0 !== a.data && _.isObject(a.data) || (c.code = -2)) : (c.code = -1, !a.data || 1 === a.data.status && "2" === a.data.oneStepSwitch || (c.code = -3));
            0 < c.code && (c.itemsSubtotal = a.data.itemsSubtotal, c.shippingCost = a.data.shippingCost, c.hasStoreDis = a.data.hasStoreDis, c.hasCrossStoreDis = a.data.hasCrossStoreDis, c.orderSave = a.data.orderSave || "US $0.00", c.hasDhCoupon = a.data.hasDhCoupon, c.dhCouponAmount = a.data.dhCouponAmount, c.hasSellerCoupon = a.data.hasSellerCoupon, c.sellerCouponAmount = a.data.sellerCouponAmount, c.totalPrice = a.data.totalPrice, c.loaclMark = a.data.loaclMark || "", c.localTprice = a.data.localTprice || "", c.sellerCouponInfo = a.data.sellerCouponInfo ? 1 * a.data.sellerCouponInfo.replace(/^\D*(\d+)$/, "$1") : -1, c.dhCouponInfo = a.data.dhCouponInfo ? 1 * a.data.dhCouponInfo.replace(/^\D*(\d+)$/, "$1") : -1, c.sellerCouponCode = a.data.sellerCouponCode || "-1", c.dhCouponCode = a.data.dhCouponCode || "-1");
            return c
        }
    });
    return h.View.extend({
        el: "body",
        events: {
            "click .j-totalCostBtn": "showLayer",
            "click .j-orderTotalClose": "hideLayer"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cTotalCostBtn = this.options.cTotalCostBtn;
            this.cOrderTotalWarp = this.options.cOrderTotalWarp;
            this.cOrderTotalContent = this.options.cOrderTotalContent;
            this.cOrderTotalMask = this.options.cOrderTotalMask;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$cTotalCostBtn = this.$cTotalCostBtn || $(this.cTotalCostBtn);
            this.$cOrderTotalWarp = $(this.cOrderTotalWarp);
            this.$cOrderTotalContent = $(this.cOrderTotalContent);
            this.$cOrderTotalMask = $(this.cOrderTotalMask)
        },
        initEvent: function() {
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.on("GetTotalPriceView:load", this.load, this);
            this.on("GetTotalPriceView:hide", this.hide, this)
        },
        setOptions: function(a) {
            this.options = {
                cTotalCostBtn: ".j-totalCostBtn",
                cOrderTotalWarp: ".j-orderTotalWarp",
                cOrderTotalContent: ".j-orderTotalContent",
                cOrderTotalMask: ".j-orderTotalMask",
                template: _.template,
                tpl: e,
                model: new b,
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, a || {})
        },
        getParams: function(a) {
            var c = {};
            c.itemcode = a.itemcode;
            c.skuId = a.skuId;
            c.skuMd5 = a.skuMd5;
            c.quantity = a.quantity;
            c.sellerCouponCode = a.sellerCouponCode || "";
            c.dhCouponCode = a.dhCouponCode || "";
            c.shiptype = a.shiptype;
            c.shipAddrId = a.shipAddrId;
            c.stockCountry = a.stockCountry || "";
            return c
        },
        load: function(a) {
            f.events.trigger("popupTip:loading", !0);
            this.isCloseLoading = void 0 === a.isCloseLoading || !0 === a.isCloseLoading ? !0 : !1;
            this.successCallback = a.successCallback || $.noop;
            this.model.fetch({
                data: this.getParams(a.params)
            })
        },
        success: function(a, c, b) {
            if (200 === a.get("code")) this.render(a.attributes), this.renderPageOrderTotal(a.attributes), !0 === this.isCloseLoading && f.events.trigger("popupTip:loading", !1), this.successCallback();
            else {
                f.events.trigger("popupTip:loading", !1); - 1 === a.get("code") ? f.events.trigger("popupTip:dataErrorTip", {
                        action: "refresh",
                        message: c.message
                    }) : -2 === a.get("code") ? f.events.trigger("popupTip:dataErrorTip", {
                            action: "refresh",
                            message: "Service exception."
                        }) : -3 === a.get("code") && f.events.trigger("popupTip:dataErrorTip", {
                            action: "refresh",
                            message: "Error.<br />Please try again."
                        });
                try {
                    throw "success(): data is wrong";
                } catch (k) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: k,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: c
                    })
                }
            }
        },
        error: function() {
            f.events.trigger("popupTip:loading", !1);
            f.events.trigger("popupTip:dataErrorTip", {
                action: "refresh",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (a) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: a,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var c = this.template,
                b = this.tpl,
                e = c(b.main.join(""))(a),
                f = c(b.orderTotalInfo.join(""))(a);
            a = c(b.mask.join(""))(a);
            e = e.replace(/\{\{orderTotalInfo\}\}/, f).replace(/\{\{mask\}\}/, a);
            this.$cOrderTotalContent[0] ? this.$cOrderTotalContent.html(f) : (this.$el.append(e), this.initElement())
        },
        renderPageOrderTotal: function(a) {
            var b = this.template;
            a = b(this.tpl.pageOrderTotal.join(""))(a);
            this.$cTotalCostBtn.removeClass("dhm-hide").html(a)
        },
        hide: function() {
            this.$cTotalCostBtn.addClass("dhm-hide")
        },
        showLayer: function() {
            setTimeout($.proxy(function() {
                this.$cOrderTotalWarp.removeClass("dhm-hide");
                this.$cOrderTotalMask.removeClass("dhm-hide")
            }, this), 200)
        },
        hideLayer: function() {
            setTimeout($.proxy(function() {
                this.$cOrderTotalWarp.addClass("dhm-hide");
                this.$cOrderTotalMask.addClass("dhm-hide");
                l.preventClick()
            }, this), 200)
        }
    })
});
define("common/detail/onekeyPay", "common/config lib/backbone checkoutflow/popupTip checkoutflow/dataErrorLog tpl/detail/onekeyPayTpl checkoutflow/regexpConfig".split(" "), function(l, h, f, m, e, b) {
    m = new m({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var a = l.wwwURL + "/mobileApiWeb/pay-OneStepBuy-oneStepBuy2.do",
        c = {};
    return {
        init: function(a) {
            this.setOptions(a);
            this.el = this.options.el;
            this.cOnekeyPayWarp = this.options.cOnekeyPayWarp;
            this.cOnekeyPayContent = this.options.cOnekeyPayContent;
            this.cOnekeyPayCvvMask = this.options.cOnekeyPayCvvMask;
            this.cCvvTip = this.options.cCvvTip;
            this.cCvvInputWarp = this.options.cCvvInputWarp;
            this.cCvvInput = this.options.cCvvInput;
            this.params = this.options.params;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.initElement();
            this.initEvent();
            this.fetch()
        },
        setOptions: function(a) {
            this.options = {
                el: "body",
                cOnekeyPayWarp: ".j-onekeyPayWarp",
                cOnekeyPayContent: ".j-onekeyPayContent",
                cOnekeyPayCvvMask: ".j-onekeyPayCvvMask",
                cCvvTip: ".j-cvvTip",
                cCvvInputWarp: ".j-cvvInputWarp",
                cCvvInput: ".j-cvvInput",
                params: {},
                template: _.template,
                tpl: e
            };
            $.extend(!0, this.options, a || {})
        },
        initElement: function() {
            this.$el = this.$el || $("body");
            this.$cOnekeyPayWarp = $(this.cOnekeyPayWarp);
            this.$cOnekeyPayContent = $(this.cOnekeyPayContent);
            this.$cOnekeyPayCvvMask = $(this.cOnekeyPayCvvMask);
            this.$cCvvTip = $(this.cCvvTip);
            this.$cCvvInputWarp = $(this.cCvvInputWarp);
            this.$cCvvInput = $(this.cCvvInput)
        },
        initEvent: function() {
            this.$el.on("blur", ".j-cvvInput", $.proxy(this.blurCsc, this));
            this.$el.on("click", ".j-cvvConfirm", $.proxy(this.cvvConfirm, this));
            this.$el.on("click", ".j-onekeyPayClose", $.proxy(this.hide, this));
            this.initEvent = $.noop
        },
        getParams: function(a) {
            a = $.extend(!0, {}, {
                client: "wap",
                version: "0.1",
                itemcode: a.itemcode,
                productId: a.productId,
                supplierId: a.supplierId,
                skuid: a.skuid,
                skuMd5: a.skuMd5,
                quantity: a.quantity || 1,
                unit: a.unit || "",
                stockIn: a.stockIn || "",
                remark: a.remark,
                shipTypeId: a.shipTypeId,
                shippingInfoId: a.shippingInfoId,
                couponCode: a.couponCode || "",
                sellerCouponCode: a.sellerCouponCode || "",
                totalPrice: a.totalPrice.replace(/^\D+([\d\.]+)/, "$1"),
                currency: a.currency || "USD",
                cvv: a.cvv || "",
                attrCm: a.attrCm
            });
            $.extend(c, a);
            return a
        },
        fetch: function() {
            $.ajax({
                type: "POST",
                url: a,
                data: this.getParams(this.params),
                async: !0,
                cache: !1,
                dataType: "json",
                context: this,
                success: function(b) {
                    f.events.trigger("popupTip:loading", !1);
                    "0x0000" === b.state ? this.jumpPaySuccess(this.parse(b)) : "0x0201" === b.state ? this.jumpPay(this.parse(b)) : "0x0605" === b.state ? (this.render(this.parse(b)), this.show()) : /0x0002|0x0601|0x0602|0x0604|0x0611|0x0302/i.test(b.state) ? f.events.trigger("popupTip:dataErrorTip", {
                                        action: "refresh",
                                        message: b.message
                                    }) : (/0x0606|0x0001|0x0404/i.test(b.state), f.events.trigger("popupTip:dataErrorTip", {
                                        action: "close",
                                        message: b.message
                                    }));
                    if ("0x0000" !== b.state) try {
                        throw "success(): data is wrong";
                    } catch (k) {
                        m.events.trigger("save:dataErrorLog", {
                            message: k,
                            url: a,
                            params: c,
                            result: b
                        })
                    }
                },
                error: function() {
                    f.events.trigger("popupTip:loading", !1);
                    f.events.trigger("popupTip:dataErrorTip", {
                        action: "close",
                        message: "Network anomaly."
                    });
                    try {
                        throw "error(): request is wrong";
                    } catch (g) {
                        m.events.trigger("save:dataErrorLog", {
                            message: g,
                            url: a,
                            params: c
                        })
                    }
                }
            })
        },
        parse: function(a) {
            var b = {};
            "0x0000" === a.state ? (b.orderNo = [], $.each(a.data.orders, function(a, c) {
                    b.orderNo.push(c.orderNo)
                }), b["3d"] = a.data["3D"], b.url = a.data.url) : "0x0201" === a.state ? (b.orderIds = a.data.orderIds, b.message = a.message, b.serverTime = a.serverTime, b.state = a.state) : (this.cardNo = b.cardNo = a.data.cardNo, b.cardType = a.data.cardType, a.data.expireMonth && a.data.expireYear && (b.expireDate = a.data.expireMonth + "/" + a.data.expireYear));
            return b
        },
        render: function(a) {
            var b = this.template,
                c = this.tpl,
                e = b(c.main.join(""))(a),
                g = b(c.cvvInfo.join(""))(a);
            a = b(c.mask.join(""))(a);
            e = e.replace(/\{\{cvvInfo\}\}/, g).replace(/\{\{mask\}\}/, a);
            this.$cOnekeyPayContent[0] ? this.$cOnekeyPayContent.html(g) : this.$el.append(e);
            this.initElement()
        },
        jumpPaySuccess: function(a) {
            location.href = a.url ? a.url : l.wwwURL.replace(/^http:/i, "https:") + "/payment/paySucc.html?orderNo=" + a.orderNo.join(",")
        },
        jumpPay: function(a) {
            var b = {
                data: {
                    type: "onekeyFail"
                }
            };
            b.message = a.message;
            b.serverTime = a.serverTime;
            b.state = a.state;
            location.href = l.wwwURL.replace(/^http:/i, "https:") + "/payment/pay.html?orderNo=" + a.orderIds + "&v=" + encodeURIComponent(JSON.stringify(b))
        },
        show: function() {
            setTimeout($.proxy(function() {
                this.$cOnekeyPayWarp.removeClass("dhm-hide");
                this.$cOnekeyPayCvvMask.removeClass("dhm-hide")
            }, this), 200)
        },
        hide: function() {
            setTimeout($.proxy(function() {
                this.$cOnekeyPayWarp.addClass("dhm-hide");
                this.$cOnekeyPayCvvMask.addClass("dhm-hide");
                l.preventClick()
            }, this), 200)
        },
        errorTip: function(a) {
            var b = this.$cCvvInputWarp;
            "isCsc3" === a ? (f.events.trigger("popupTip:autoTip", {
                    message: "The length of VISA or MasterCard Card Verification Number must be 3 digits."
                }), b.addClass("cvv-input-current")) : "isCsc3or4" === a ? (f.events.trigger("popupTip:autoTip", {
                        message: "The length of AMEX Card Verification Number must be 4 digits."
                    }), b.addClass("cvv-input-current")) : "isSupport" === a ? (f.events.trigger("popupTip:autoTip", {
                            message: "Please enter a valid Card Verification."
                        }), b.addClass("cvv-input-current")) : b.removeClass("cvv-input-current")
        },
        blurCsc: function() {
            var a = this.validateCsc(),
                b;
            b = "" !== a ? !1 : !0;
            this.errorTip(a);
            return b
        },
        validateCsc: function() {
            var a = $.trim(this.$cCvvInput.val()),
                c = this.cardNo,
                e = "";
            !b.visaCardNo1.test(c) && !b.masterCardNo1.test(c) || b.csc1.test(a) ? b.amexCardNo1.test(c) && !b.csc2.test(a) ? e = "isCsc3or4" : b.visaCardNo1.test(c) || b.masterCardNo1.test(c) || b.amexCardNo1.test(c) || (e = "isSupport") : e = "isCsc3";
            return e
        },
        cvvConfirm: function() {
            this.blurCsc() && (this.hide(), f.events.trigger("popupTip:loading", !0), this.fetch($.extend(!0, this.params, {
                cvv: $.trim(this.$cCvvInput.val())
            })))
        }
    }
});
define("common/detail/custom", ["common/config", "tpl/detail/customTpl", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f, m) {
    var e = Backbone.Model.extend({
        defaults: function() {
            return {
                code: -1,
                historyList: [{
                    oid: "",
                    buyerId: "",
                    attrCm: "",
                    attrDisp: "",
                    unit: ""
                }],
                list: [{
                    attrvalCustomId: -1,
                    attrvalCustomName: "",
                    attrvalCustomNameCn: "",
                    catePubAttrvalCustomId: -1,
                    catePubAttrvalId: -1,
                    catePubId: "",
                    catePubProdlineId: -1,
                    sortval: -1,
                    stringSorrtVal: ""
                }],
                direction: [],
                __customRecord: ""
            }
        },
        initialize: function(b, a) {
            this.setOptions(a);
            this.ajaxOptions = this.options.ajaxOptions;
            this.initEvent()
        },
        initEvent: function() {
            this.on("customModel:setCustomRecord", this.setCustomRecord, this)
        },
        setOptions: function(b) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-getCustomInfo.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, b || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(b, a, c) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, c || {});
            return Backbone.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, c))
        },
        parse: function(b) {
            var a = {};
            a.code = "0x0000" === b.state ? 200 : -1;
            a.historyList = [];
            a.list = [];
            a.directionList = []; - 1 !== a.code && ($.each(b.data.templateList || [], function(b, e) {
                var c = {};
                c.stringSorrtVal = e.stringSorrtVal;
                c.attrvalCustomName = e.attrvalCustomName;
                c.attrvalCustomId = e.attrvalCustomId;
                a.list.push(c)
            }), $.each(b.data.records || [], function(b, e) {
                var c = {};
                c.oid = e.oid;
                c.attrCm = e.attrCm;
                c.attrDisp = e.attrDisp;
                c.unit = e.unit;
                a.historyList.push(c)
            }), $.each(b.data.direction || [], function(b, e) {
                a.directionList.push(e)
            }));
            return a
        },
        setCustomRecord: function(b) {
            this.set({
                __customRecord: b.customRecord
            })
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-custom": "isCustomData",
            "click .j-datail-custom-product": "closedHistory",
            "click .j-customProduct-title-top": "customClosedCouponLayer",
            "click .j-inch-cm li": "customTab",
            "click .j-history": "history",
            "click .j-select-history": "currentSelectHistory",
            "keyup .j-input,.j-inputCm": "customKeyupInput",
            "blur .j-input,.j-inputCm": "customBlurInput",
            "blur .j-customRemark": "addCustomRemark"
        },
        initialize: function(b) {
            this.setOptions(b);
            this.catePubId = this.options.syncData.catePubId;
            this.cJDatailCustomInfoWarp = this.options.cJDatailCustomInfoWarp;
            this.cJDatailCustomProduct = this.options.cJDatailCustomProduct;
            this.cJInchTab = this.options.cJInchTab;
            this.cJInfoListCustom = this.options.cJInfoListCustom;
            this.cTabCurrent = this.options.cTabCurrent;
            this.cJCustom = this.options.cJCustom;
            this.cJCustomProductImg = this.options.cJCustomProductImg;
            this.cTyped = this.options.cTyped;
            this.cJInput = this.options.cJInput;
            this.cJInputInch = this.options.cJInputInch;
            this.cJInputCm = this.options.cJInputCm;
            this.cJTipsCustion = this.options.cJTipsCustion;
            this.customError = this.options.customError;
            this.cJHistoryCustomWarp = this.options.cJHistoryCustomWarp;
            this.cJHistoryCustomUl = this.options.cJHistoryCustomUl;
            this.cJHistory = this.options.cJHistory;
            this.cOpenLayer = this.options.cOpenLayer;
            this.cClosedLayer = this.options.cClosedLayer;
            this.cHide = this.options.cHide;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.renderCallback = this.options.renderCallback;
            this.initElement();
            this.initEvent()
        },
        setOptions: function(b) {
            this.options = {
                cJDatailCustomInfoWarp: ".j-datail-custom-infoWarp",
                cJDatailCustomProduct: ".j-datail-custom-product",
                cJInchTab: ".j-inch-cm li[data-type]",
                cJInfoListCustom: ".j-info-list-custom",
                cTabCurrent: "current",
                cJCustom: ".j-custom",
                cJCustomProductImg: ".j-custom-product-img",
                cTyped: "typed",
                cJInput: ".j-input",
                cJInputInch: ".j-inputInch",
                cJInputCm: ".j-inputCm",
                cJTipsCustion: ".j-tips-custion",
                customError: "customError",
                cJHistoryCustomWarp: ".j-history-custom-Warp",
                cJHistoryCustomUl: ".j-history-custom ul",
                cJHistory: ".j-history",
                cHide: "dhm-hide",
                cOpenLayer: "open-layer3",
                cClosedLayer: "close-layer3",
                template: _.template,
                tpl: h,
                model: new e(b.syncData),
                renderCallback: $.noop,
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$body = this.$body || $("body");
            this.$cJDatailCustomInfoWarp = $(this.cJDatailCustomInfoWarp);
            this.$cJDatailCustomProduct = $(this.cJDatailCustomProduct);
            this.$cJInfoListCustom = $(this.cJInfoListCustom);
            this.$cJInchTab = $(this.cJInchTab);
            this.$cJCustom = $(this.cJCustom);
            this.$cJCustomProductImg = $(this.cJCustomProductImg);
            this.$cJInput = $(this.cJInput);
            this.$cJInputInch = $(this.cJInputInch);
            this.$cJInputCm = $(this.cJInputCm);
            this.$cJTipsCustion = $(this.cJTipsCustion);
            this.$cTabContentList = $(this.cTabContentList);
            this.$cJHistoryCustomWarp = $(this.cJHistoryCustomWarp);
            this.$cJHistoryCustomUl = $(this.cJHistoryCustomUl);
            this.$cJHistory = $(this.cJHistory)
        },
        initEvent: function() {
            var b = this,
                a = this.timer;
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.on("customView:customClosedCouponLayer", this.customClosedCouponLayer, this);
            this.$window.on("orientationchange, resize", function() {
                a && clearTimeout(a);
                a = setTimeout(function() {
                    b.setCustomStyle()
                }, 500)
            })
        },
        success: function(b, a, c) {
            if (200 === b.get("code")) this.render(b.attributes), f.events.trigger("popupTip:loading", !1), this.customOpenCouponLayer();
            else {
                f.events.trigger("popupTip:loading", !1);
                f.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: a.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (g) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: g,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: a
                    })
                }
            }
        },
        error: function() {
            f.events.trigger("popupTip:loading", !1);
            f.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (b) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: b,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(b, a) {
            var c = this.template,
                e = this.tpl,
                f = c(e.customSizeMain.join(""))(b),
                h = c(e.customAttribute.join(""))(b),
                l = c(e.customInfo.join(""))(b),
                m = c(e.customHistoryTit.join(""))(b),
                x = c(e.customHistory.join(""))(b),
                q = c(e.inSubmit.join(""))(b),
                c = c(e.cmSubmit.join(""))(b),
                f = f.replace(/\{\{main\}\}/, f).replace(/\{\{customAttribute\}\}/, h).replace(/\{\{customInfo\}\}/, l).replace(/\{\{customHistoryTit\}\}/, m).replace(/\{\{customHistory\}\}/, x).replace(/\{\{inSubmit\}\}/, q).replace(/\{\{cmSubmit\}\}/, c);
            this.$cJDatailCustomProduct[0] ? (this.$cJHistoryCustomUl.html(x), this.$cJHistory.html(m)) : (this.$body.append(f), this.initElement(), this.customImg(), this.renderCallback())
        },
        customImg: function() {
            var b = this.$cJCustom.attr("custom-img");
            this.$cJCustomProductImg.html('<img src="' + b + '" alt="" />')
        },
        getParam: function(b) {
            var a = {};
            a.catePubId = this.catePubId;
            a.attrValId = $(b.e.currentTarget).attr("attr_id");
            return a
        },
        isCustomData: function(b) {
            !0 !== $(b.currentTarget).hasClass("disabled") && (-1 === this.model.get("code") ? (f.events.trigger("popupTip:loading", !0), this.model.fetch({
                    data: this.getParam({
                        e: b
                    })
                })) : "" !== this.model.get("__customRecord") ? (f.events.trigger("popupTip:loading", !0), this.model.fetch({
                        data: this.getParam({
                            e: b
                        })
                    })) : this.customOpenCouponLayer())
        },
        setCustomStyle: function() {
            var b = this.$cJDatailCustomInfoWarp,
                a = 1 * this.$window.height(),
                c = 0,
                e;
            e = b.siblings();
            $.each(e, function(a, b) {
                c += 1 * $(b).outerHeight()
            });
            b.css({
                height: a - c
            })
        },
        customOpenCouponLayer: function(b) {
            var a = this.$cJDatailCustomProduct,
                c = this.cOpenLayer,
                e = this.cClosedLayer,
                f = this.cHide;
            setTimeout($.proxy(function() {
                a.removeClass(f);
                setTimeout(function() {
                    a.removeClass(e).addClass(c)
                }, 10);
                setTimeout($.proxy(function() {
                    this.setCustomStyle()
                }, this), 250);
                l.preventClick()
            }, this), 200)
        },
        customClosedCouponLayer: function() {
            var b = this.$cJDatailCustomProduct,
                a = this.cOpenLayer,
                c = this.cClosedLayer,
                e = this.cHide;
            setTimeout($.proxy(function() {
                b.removeClass(a).addClass(c);
                setTimeout(function() {
                    b.addClass(e)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        customTab: function(b) {
            var a = this.$cJInchTab,
                c = this.$cJInfoListCustom;
            b = ($(b.currentTarget).attr("data-type") || b.attr("data-type")).toLowerCase();
            var e = this.cTabCurrent,
                f = this.cHide,
                h;
            a.removeClass(e);
            for (var l = 0, m = a.length; l < m; l++) h = $(a[l]), h.attr("data-type").toLowerCase() === b.toLowerCase() && h.addClass(e);
            c.addClass(f);
            l = 0;
            for (m = c.length; l < m; l++) a = $(c[l]), a.attr("data-type").toLowerCase() === b && a.removeClass(f)
        },
        customBlurInput: function(b) {
            b = $(b.currentTarget);
            var a = this.cHide,
                c = $.trim(b.val().toString()),
                e = this.cJInfoListCustom,
                f = this.cJTipsCustion,
                h = this.customError,
                l = this.cTyped,
                m = new RegExp(/^\d+(\.\d)?$/),
                c = c.replace(/^(.*)\.$/, "$1").replace(/^(0\.|0+|\.)(.*)/, "$2").replace(/^([\d]*(?:\.(?:\d)?)?)(?:.*)/, function(a, b) {
                    return void 0 === b ? "" : b.substring(0, 5)
                });
            b.val(c);
            m.test(c) ? (b.parent().removeClass(h), b.closest(e).find(f).addClass(a)) : (b.parent().addClass(h), b.closest(e).find(f).removeClass(a));
            "" !== c ? b.parent().addClass(l) : b.parent().removeClass(l)
        },
        customKeyupInput: function(b) {
            b = $(b.currentTarget);
            $.trim(b.val().toString());
            var a = this.cTyped;
            b.parent().addClass(a)
        },
        addCustomRemark: function(b) {
            var a = $(b.currentTarget);
            b = $.trim(a.val());
            150 < b.length && (a.closest("ul").siblings("p").text("Limit 150").show(), a.val(b.substring(0, 150)), setTimeout(function() {
                a.closest("ul").siblings("p").hide()
            }, 2E3))
        },
        history: function(b) {
            this.$cJHistoryCustomWarp.removeClass(this.cHide)
        },
        currentSelectHistory: function(b) {
            b = this.target = $(b.currentTarget);
            var a = this.cHide,
                c = this.cTabCurrent,
                e = this.$cJHistoryCustomWarp;
            b.addClass(c).siblings().removeClass(c);
            setTimeout($.proxy(function() {
                e.addClass(a);
                this.setCustomVal(this.target)
            }, this), 200)
        },
        setCustomVal: function(b) {
            for (var a = $(b), c = this.cHide, e = this.customError, f = this.cJInfoListCustom, h = this.cJTipsCustion, l = this.cTyped, m = this.$cJInputInch, x = this.$cJInputCm, q = this.$cJHistoryCustomWarp.find("li.current").text().match(/\d+(\.\d)?/g), a = a.attr("data-type").toLowerCase(), u = 0; u < q.length; u++)"inch" === a ? m.each(function(a, b) {
                    var g = $(b);
                    g.val(q[a]);
                    g.parent().addClass(l);
                    g.parent().removeClass(e);
                    $(b).parents(f).find(h).addClass(c)
                }) : "cm" === a && x.each(function(a, b) {
                    var g = $(b);
                    g.val(q[a]);
                    g.parent().addClass(l);
                    g.parent().removeClass(e);
                    $(b).parents(f).find(h).addClass(c)
                });
            this.customTab(b)
        },
        closedHistory: function(b) {
            b = $(b.target);
            var a = this.cHide,
                c = this.$cJHistoryCustomWarp;
            "noClosedHistory" !== b.attr("data-type") && "noClosedHistory" !== b.closest('[data-type="noClosedHistory"]').attr("data-type") && c.addClass(a)
        }
    })
});
define("common/detail/customSubmit", ["common/config", "common/detail/customSubmit", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f, m) {
    var e = Backbone.Model.extend({
        defaults: function() {
            return {
                code: -1
            }
        },
        initialize: function(b, a) {
            this.setOptions(a);
            this.productAttrPopuInstance = this.options.productAttrPopuInstance;
            this.selectSkuAttrInstance = this.options.selectSkuAttrInstance;
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(b) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/item-Item-saveCustomInfo.do",
                    data: {
                        client: "wap",
                        version: "0.1"
                    },
                    type: "post",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, b || {})
        },
        urlRoot: function() {
            return this.ajaxOptions.url
        },
        sync: function(b, a, c) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, c || {});
            return Backbone.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, c))
        },
        parse: function(b) {
            var a = {};
            a.code = "0x0000" === b.state ? 200 : -1;
            return a
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-customSubmit": "customSubmit"
        },
        initialize: function(b) {
            this.setOptions(b);
            this.catePubId = b.syncData.catePubId;
            this.customSubmitInstance = b.customSubmitInstance;
            this.cJCustom = this.options.cJCustom;
            this.cJInfoListCustom = this.options.cJInfoListCustom;
            this.cJInchCmLiCurrent = this.options.cJInchCmLiCurrent;
            this.customError = this.options.customError;
            this.cJTipsCustion = this.options.cJTipsCustion;
            this.cJCustomInchRemark = this.options.cJCustomInchRemark;
            this.cJCustomCmRemark = this.options.cJCustomCmRemark;
            this.cJInputInch = this.options.cJInputInch;
            this.cJInputCm = this.options.cJInputCm;
            this.cJInftoInch = this.options.cJInftoInch;
            this.cJCustomInput = this.options.cJCustomInput;
            this.cHide = this.options.cHide;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.productAttrPopuInstance = this.options.productAttrPopuInstance;
            this.selectSkuAttrInstance = this.options.selectSkuAttrInstance;
            this.dataErrorLog = this.options.dataErrorLog;
            this.initElement();
            this.initEvent()
        },
        setOptions: function(b) {
            this.options = {
                cJCustom: ".j-custom",
                cJInfoListCustom: ".j-info-list-custom",
                cJInchCmLiCurrent: ".j-inch-cm li.current",
                customError: "customError",
                cJTipsCustion: ".j-tips-custion",
                cHide: "dhm-hide",
                cJCustomInchRemark: ".j-customInchRemark",
                cJCustomCmRemark: ".j-customCmRemark",
                cJInputInch: ".j-inputInch",
                cJInputCm: ".j-inputCm",
                cJInftoInch: ".j-infto-inch",
                cJCustomInput: ".j-customInput",
                model: new e(b),
                customSubmitInstance: null,
                productAttrPopuInstance: null,
                selectSkuAttrInstance: null,
                dataErrorLog: new m({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, b || {})
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cJCustom = $(this.cJCustom);
            this.$cJInfoListCustom = $(this.cJInfoListCustom);
            this.$cJInchCmLiCurrent = $(this.cJInchCmLiCurrent);
            this.$cJCustomInchRemark = $(this.cJCustomInchRemark);
            this.$cJCustomCmRemark = $(this.cJCustomCmRemark);
            this.$cJInputInch = $(this.cJInputInch);
            this.$cJCustomInput = $(this.cJCustomInput);
            this.$cJInputCm = $(this.cJInputCm)
        },
        initEvent: function() {
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error)
        },
        success: function(b, a, c) {
            if (200 === b.get("code")) this.productAttrPopuInstance.model.trigger("productAttrPopupModel:setCustomInfo", {
                unit: this.unit,
                remark: this.remark,
                attrCm: this.attrCm
            }), this.selectSkuAttrInstance.model.trigger("selectSkuAttrModel:setCustomRecord", {
                customRecord: this.selectSkuattrCmArry.join(","),
                unit: this.unit,
                remark: this.remark,
                attrCm: this.attrCm
            }), this.customSubmitInstance.model.trigger("customModel:setCustomRecord", {
                customRecord: this.selectSkuattrCmArry.join(",")
            }), this.selectSkuAttrInstance.trigger("selectSkuAttrView:selectSku", this.selectSkuAttrInstance.currentCustomAttrEle), f.events.trigger("popupTip:loading", !1), this.customSubmitInstance.trigger("customView:customClosedCouponLayer");
            else {
                f.events.trigger("popupTip:loading", !1);
                f.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: a.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (g) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: g,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: a
                    })
                }
            }
        },
        error: function() {
            f.events.trigger("popupTip:loading", !1);
            f.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (b) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: b,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        getAttrCm: function(b) {
            b = $(b.currentTarget).attr("data-type").toLowerCase();
            for (var a = this.cJInftoInch, c = this.cJCustomInput, e = this.$cJInfoListCustom, f, h = this.attrCmArry = [], l = this.selectSkuattrCmArry = [], m = 0, x = e.length; m < x; m++) f = $(e[m]), f.attr("data-type").toLowerCase() === b && $(f).find(c).each(function(b, c) {
                var e = $(c),
                    g = e.find("input").val(),
                    f = e.find("input").attr("data-attrvalCustomId"),
                    d = e.find("input").attr("data-customname"),
                    e = e.find(a).text(),
                    f = f + "_" + g;
                l.push(d + ":" + g + " " + e);
                h.push(f)
            });
            return h.join("-")
        },
        getParam: function(b) {
            var a = {};
            a.catePubId = this.catePubId;
            a.unit = $(this.cJInchCmLiCurrent).attr("data-type");
            a.attrCm = this.getAttrCm(b);
            a.id = this.getOid();
            return a
        },
        getOidAttrCm: function(b) {
            b = b.parents().find(".j-history-custom li");
            var a = this.attrCmDataInfoArry = [];
            $(b).each(function(b, e) {
                var c = $(e),
                    c = this.attrCmDataInfo = JSON.parse(decodeURIComponent(c.attr("data-info")));
                a.push(c)
            });
            return a
        },
        customSubmit: function(b) {
            var a = $(b.currentTarget),
                c = this.cHide,
                e = this.customError,
                f = this.cJInfoListCustom,
                h = this.cJTipsCustion,
                l = this.$cJInputInch,
                m = this.$cJInputCm,
                x = this.$cJCustomInchRemark,
                q = this.$cJCustomCmRemark,
                u = this.$cJCustom,
                D, A = this.unit = a.attr("data-type"),
                u = this.attrId = u.attr("attr_id"),
                C = [];
            this.getOidAttrCm(a);
            "inch" === A.toLowerCase() ? (l.each(function(a, b) {
                    var d = $(b),
                        g = $.trim(d.val()),
                        k = parseFloat(g).toString(),
                        l = new RegExp(/^\d+(\.\d)?$/);
                    "" === g ? (d.parent().addClass(e), $(b).parents(f).find(h).removeClass(c)) : l.test(k) ? (D = $(b).attr("data-attrvalCustomId"), C.push(D + "_" + g)) : d.parent().addClass(e)
                }), this.remark = $.trim(x.val()), this.attrCm = u + "," + C.join("-"), this.attrCmInfo = C.join("-"), a = l.parent().hasClass(e), !1 === a && this.fetchData(b)) : "cm" === A.toLowerCase() && (m.each(function(a, b) {
                    var d = $(b),
                        g = $.trim(d.val()),
                        k = parseFloat(g).toString(),
                        l = new RegExp(/^\d+(\.\d)?$/);
                    "" === g ? (d.parent().addClass(e), $(b).parents(f).find(h).removeClass(c)) : l.test(k) ? (D = $(b).attr("data-attrvalCustomId"), C.push(D + "_" + g)) : d.parent().addClass(e)
                }), this.remark = $.trim(q.val()), this.attrCm = u + "," + C.join("-"), this.attrCmInfo = C.join("-"), a = m.parent().hasClass(e), !1 === a && this.fetchData(b))
        },
        getOid: function() {
            var b = "",
                a;
            for (a in this.attrCmDataInfoArry) this.attrCmDataInfoArry[a].dataAttrCm === this.attrCmInfo && this.attrCmDataInfoArry[a].dataUnit === this.unit && (b = this.attrCmDataInfoArry[a].dataOid);
            return b
        },
        fetchData: function(b) {
            f.events.trigger("popupTip:loading", !0);
            this.model.fetch({
                data: this.getParam(b)
            })
        }
    })
});
define("common/invitefriends/recordShareInfo", ["common/config"], function(l) {
    return {
        init: function(h) {
            $.ajax({
                type: "GET",
                url: l.wwwURL + "/mobileApiWeb/user-InviteFriends-recordShareInfo.do",
                data: {
                    invitorid: h,
                    client: "wap",
                    version: 1
                },
                async: !0,
                cache: !1,
                dataType: "json",
                success: function(f) {
                    if ("0x0000" !== f.state) try {
                        throw "success(): data is wrong";
                    } catch (m) {}
                },
                error: function() {
                    try {
                        throw "error(): request is wrong";
                    } catch (f) {}
                }
            })
        }
    }
});
define("common/invitefriends/invitingFriendsTips", ["common/config", "common/invitefriends/recordShareInfo", "tools/getSpecifyUrlParam", "tools/jquery.cookie"], function(l, h, f, m) {
    return {
        init: function(e) {
            this.setOptions(e);
            this.el = this.options.el;
            this.cHide = this.options.cHide;
            this.cInvitefriend = this.options.cInvitefriend;
            this.cookieName = this.options.cookieName;
            this.invitorid = f({
                name: "invitorid"
            });
            this.initElement();
            this.initEvent()
        },
        setOptions: function(e) {
            this.options = {
                el: "body",
                cInvitefriend: ".j-invitefriend",
                cHide: "dhm-hide"
            };
            $.extend(!0, this.options, e || {})
        },
        initElement: function() {
            this.$el = this.$el || $(this.el);
            this.$cInvitefriend = $(this.cInvitefriend)
        },
        initEvent: function() {
            this.invitorid && (this.open(), h.init(this.invitorid), this.$el.on("click", ".j-invitefriend-close", $.proxy(this.close, this)), this.$el.on("click", ".j-openNow", $.proxy(this.skipToPage, this)))
        },
        open: function() {
            this.$cInvitefriend.removeClass(this.cHide)
        },
        close: function() {
            this.$cInvitefriend.addClass(this.cHide)
        },
        skipToPage: function() {
            window.location.href = "https://m.dhgate.com/ii/" + this.invitorid
        }
    }
});
define("appTpl/getViewImgTpl", [], function() {
    return ["<% var data = obj;%>", '<div class="product-picture-top j-viewImgBack"><span class="reviews-comment-close"><i class="ic-md ic-close-md"></i></span></div>', '<div class="swiper-container datail-slider detail-slider-big j-imgViewCont">', '<div class="loding-layer_1"><div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active is-upgraded" data-upgraded=",MaterialSpinner"><div class="mdl-spinner__layer mdl-spinner__layer-1"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div><div class="mdl-spinner__layer mdl-spinner__layer-2"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div><div class="mdl-spinner__layer mdl-spinner__layer-3"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div><div class="mdl-spinner__layer mdl-spinner__layer-4"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div></div></div>', '<ul class="swiper-wrapper">', "<% for (var i = 0, len = data.length; i < len;i++){ %>", '<li class="swiper-slide">', '<div class="pinch-zoom-container">', '<div class="pinch-zoom j-pinch-zoom">', '<div class="zoomImgOtrDv">', '<div class="zoomImgDv"><img class="fade-in lazy" data-original="<%=data[i]%>" /></div>', "</div>", "</div>", "</div>", "</li>", "<% } %>", "</ul>", '<div class="swiper-pagination swiper-pagination-white j-imgView-pagination"></div>', "</div>"]
});
define("appTpl/promotionCountDownTpl", [], function() {
    return ["<% var data = obj,day = parseInt(obj.day);%>", "<% if(day>=1){%>", '<span><var><%=$.lang["DETAIL_endIn"]%> <%=data.day%>', '<% if(day>1){%><%=$.lang["DETAIL_day"]%><%}else {%><%=$.lang["DETAIL_days"]%><%}%></var>', "<% if(parseInt(obj.hour)>=1){%>", "<var><%=data.hour%>", '<% if(hour>1){%><%=$.lang["DETAIL_hour"]%><%}else {%><%=$.lang["DETAIL_hours"]%><%}%></var>', "<%}%>", ' <%=$.lang["DETAIL_left"]%></span>', "<%}else {%>", '<span><var><%=$.lang.replaceTplVar("DETAIL_hms", {hour: data.hour,minute: data.minute,second: data.second})%></var></span>', "<%}%>"]
});
define("appTpl/getDhCouponListTpl", [], function() {
    return {
        main: '<div class="datailLayer-store-coupon j-dhCouponLayer close-layer1 dhm-hide">;{{title}};<div class="datail-coupon-box j-datail-dhCoupon-boxScroll">;{{dhCouponList}};</div>;<p class="store-coupon-note j-store-coupon-note"><%=$.lang["DETAIL_note"]%></p>;</div>'.split(";"),
        title: ['<div class="product-title-top j-product-dhTitle-top com-ripple-btn"><span class="title-top-icon"></span>My DHcoupons</div>'],
        dhCouponList: ["<% var data = obj;%>", "<% for (var i = 0, len = data.list.length; i < len;i++){ %>", '<dl class="dh-coupon">', '<dd><span>$<%=data.list[i].amount%> <%=$.lang["oFF"]%></span> $<%=data.list[i].orderAmo%>+</dd>', "<dt>CouponExpires <%=data.list[i].endDateFormat%></dt>", "</dl>", "<% } %>"]
    }
});
define("appTpl/getReviewsViewImgTpl", [], function() {
    return ["<% var data = obj;%>", '<div class="product-picture-top j-reviewViewImgBack"><span class="reviews-comment-close"><i class="ic-md ic-close-md"></i></span></div>', '<div class="swiper-container datail-slider j-reviewViewImg detail-slider-big">', '<div class="loding-layer_1"><div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active is-upgraded" data-upgraded=",MaterialSpinner"><div class="mdl-spinner__layer mdl-spinner__layer-1"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div><div class="mdl-spinner__layer mdl-spinner__layer-2"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div><div class="mdl-spinner__layer mdl-spinner__layer-3"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div><div class="mdl-spinner__layer mdl-spinner__layer-4"><div class="mdl-spinner__circle-clipper mdl-spinner__left"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__gap-patch"><div class="mdl-spinner__circle"></div></div><div class="mdl-spinner__circle-clipper mdl-spinner__right"><div class="mdl-spinner__circle"></div></div></div></div></div>', '<ul class="swiper-wrapper">', "<% for (var i = 0, len = data.length; i < len;i++){ %>", '<li class="swiper-slide dot-symbol">', '<div class="pinch-zoom-container">', '<div class="pinch-zoom j-review-pinch-zoom">', '<div class="zoomImgOtrDv">', '<div class="zoomImgDv"><img class="fade-in lazy" data-original="<%=data[i]%>" /></div>', "</div>", "</div>", "</div>", "</li>", "<% } %>", "</ul>", '<div class="swiper-pagination swiper-pagination-white j-review-pagination"></div>', "</div>"]
});
define("app/recordItemCode", ["common/config"], function(l) {
    return {
        set: function(h) {
            var f, l = {},
                e = [];
            "m.dhgate.com" === location.hostname && $.cookie("item_recentvisit", h, {
                path: "/",
                expires: -1,
                domain: ".m.dhgate.com"
            });
            f = $.cookie("item_recentvisit");
            if (void 0 === f) $.cookie("item_recentvisit", h, {
                path: "/",
                expires: 7,
                domain: ".dhgate.com"
            });
            else {
                f = f.replace(/"/g, "");
                f = f.split(",");
                f.unshift(h);
                for (h = 0; h < f.length; h++) l[f[h]] || (e.push(f[h]), l[f[h]] = !0);
                5 < e.length && e.pop();
                $.cookie("item_recentvisit", e.join(","), {
                    path: "/",
                    expires: 7,
                    domain: ".dhgate.com"
                })
            }
        }
    }
});
define("app/preprocessingSyncData", ["common/config", "checkoutflow/popupTip", "checkoutflow/dataErrorLog", "tools/fastclick"], function(l, h, f, m) {
    f = new f({
        flag: !0,
        url: "/mobileApiWeb/biz-FeedBack-log.do"
    });
    var e = window.location.href,
        b = {};
    return {
        init: function(a) {
            m.attach($("body")[0]);
            this.successCallback = a.successCallback;
            this.fetch()
        },
        fetch: function() {
            var a = window.DHDETAIL || {};
            if (!(a.data && a.data.productId && a.data.supplierid && a.data.itemCode && a.data.measureName && a.data.shipCostDto)) {
                h.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: "Service exception."
                });
                try {
                    throw "error(): Service exception.";
                } catch (c) {
                    f.events.trigger("save:dataErrorLog", {
                        message: c,
                        url: e,
                        params: b,
                        result: a
                    })
                }
            }
            if ("0x0000" !== a.state) try {
                throw "success(): data is wrong";
            } catch (c) {
                f.events.trigger("save:dataErrorLog", {
                    message: c,
                    url: e,
                    params: b,
                    result: a
                })
            }
            this.parse(a.data)
        },
        setDisplayPrice: function(a, b) {
            var c = {};
            !1 !== b || a.promoDto ? !0 === b && a.vipDto ? (c.minPrice = a.vipDto.minVipPrice, c.maxPrice = a.vipDto.maxVipPrice) : !1 === b && a.promoDto && (c.minPrice = a.promoDto.promoMinPrice, c.maxPrice = a.promoDto.promoMaxPrice) : (c.minPrice = a.minPrice, c.maxPrice = a.maxPrice);
            c.isEqual = c.minPrice === c.maxPrice ? !0 : !1;
            return c
        },
        setDeletePrice: function(a, b) {
            var c = {};
            !1 !== b || a.promoDto ? !0 === b && !a.promoDto || !1 === b && a.promoDto ? (c.minPrice = a.minPrice, c.maxPrice = a.maxPrice) : !0 === b && a.promoDto && (c.minPrice = a.promoDto.promoMinPrice, c.maxPrice = a.promoDto.promoMaxPrice) : c = "";
            c.isEqual = c.minPrice === c.maxPrice ? !0 : !1;
            return c
        },
        setShipCost: function(a) {
            var b = {},
                e = a.shipCostDto || {},
                f = e.shipCostAndWay || {},
                h = [];
            b.code = 200;
            "2" === a.useOneStepBuy && (b.isOnekey = "y", b.shippingInfoId = e.shippingAddress.shippingInfoId, b.addressline1 = e.shippingAddress.addressline1, b.addressline2 = e.shippingAddress.addressline2 || "", b.firstname = e.shippingAddress.firstname, b.lastname = e.shippingAddress.lastname, b.city = e.shippingAddress.city, b.country = e.shippingAddress.country, b.countryname = e.shippingAddress.countryname, b.state = e.shippingAddress.state, b.postalcode = e.shippingAddress.postalcode, "" !== e.shippingAddress.callingcode && h.push(e.shippingAddress.callingcode), h.push(e.shippingAddress.tel.replace(/^\d[\d ]*\-(.*)/, "$1")), b.tel = h.join("-"), b.vatnum = e.shippingAddress.vatnum || "");
            b.whitherCountryId = e.whitherCountry || "";
            b.whitherCountryName = e.whitherCountryName || "";
            b.stockCountryId = f.stockCountryId || "";
            b.stockCountryName = f.stockCountryName || "";
            b.expressType = f.expressType || "";
            b.leadingTime = _.isNumber(f.leadingTime) ? f.leadingTime : -1;
            b.lowerDate = f.lowerDate || "";
            b.upperDate = f.upperDate || "";
            b.shipcost = _.isNumber(f.shipcost) && !0 === a.isShipto ? f.shipcost : -1;
            return b
        },
        setSampleInfo: function(a) {
            var b = {};
            a = a.sampleInfo;
            if (!a) return null;
            var e = a.itemAttrList || [];
            b.attrs = [];
            for (var f = 0, h = e.length; f < h; f++) {
                var l = {};
                l.attrGourpName = e[f].attrName;
                l.attrValue = e[f].picUrl || e[f].attrValName;
                l.islinkImg = e[f].islinkImg || 0;
                b.attrs.push(l)
            }
            b.skuId = a.skuId;
            b.skuMd5 = a.skuMd5;
            b.stockCountryId = a.stockCountryId;
            b.samplePrice = a.samplePrice;
            b.minPurchaseAmount = a.minPurchaseAmount;
            b.sampleMeasureName = a.sampleMeasureName;
            return b
        },
        parse: function(a) {
            var b = {};
            b.isVip = "1" === l.b2b_buyer_lv && a.vipDto ? !0 : !1;
            b.buyerId = a.buyerId || l.b2b_buyerid;
            b.uid = a.uid || "";
            b.supplierid = a.supplierid;
            b.sid = a.sid || "";
            b.cateDispId = a.cateDispId || "";
            b.productId = a.productId;
            b.productName = a.productName;
            b.itemCode = a.itemCode;
            b.istate = a.istate;
            b.isShipto = a.isShipto;
            b.isDhCoupon = a.isDhCoupon;
            b.isSellerCoupon = a.isSellerCoupon;
            b.displayPrice = this.setDisplayPrice(a, b.isVip);
            b.deletePrice = this.setDeletePrice(a, b.isVip);
            b.minOrder = a.minOrder;
            b.lot = a.lot;
            b.measureName = a.measureName;
            b.plural = a.plural;
            b.promoTypeId = a.promoDto ? a.promoDto.typeId : -1;
            b.promEndDate = a.promoDto ? a.promoDto.promEndDate : -1;
            b.defaultShipCost = this.setShipCost(a);
            b.thumbList = a.thumbList || [];
            b.sampleInfo = this.setSampleInfo(a);
            b.oriImgList = a.oriImgList || [];
            b.catepubid = a.thirdParty && (a.thirdParty.catepubid || "");
            b.firstCateName = a.thirdParty && (a.thirdParty.firstCateName || "");
            b.secondCateName = a.thirdParty && (a.thirdParty.secondCateName || "");
            b.thirdCateName = a.thirdParty && (a.thirdParty.thirdCateName || "");
            b.cateDispPath = a.thirdParty && (a.thirdParty.cateDispPath || []);
            b.shortDescription = a.thirdParty && (a.thirdParty.shortDescription || "");
            b.userType = a.userType;
            b.localRate = a.localRate || -1;
            b.rate = a.rate || -1;
            delete window.DHDETAIL;
            this.successCallback && this.successCallback(b)
        }
    }
});
(function() {
    var l = function(h) {
        var f = function(b, a) {
                this.el = h(b);
                this.lastScale = this.zoomFactor = 1;
                this.offset = {
                    x: 0,
                    y: 0
                };
                this.options = h.extend({}, this.defaults, a);
                this.setupMarkup();
                this.bindEvents();
                this.update();
                this.enable()
            },
            l = function(b, a) {
                return b + a
            };
        f.prototype = {
            defaults: {
                tapZoomFactor: 2,
                zoomOutFactor: 1.3,
                animationDuration: 300,
                maxZoom: 4,
                minZoom: .5,
                lockDragAxis: !1,
                use2d: !0,
                zoomStartEventName: "pz_zoomstart",
                zoomEndEventName: "pz_zoomend",
                dragStartEventName: "pz_dragstart",
                dragEndEventName: "pz_dragend",
                doubleTapEventName: "pz_doubletap"
            },
            handleDragStart: function(b) {
                this.el.trigger(this.options.dragStartEventName);
                this.stopAnimation();
                this.lastDragPosition = !1;
                this.hasInteraction = !0;
                this.handleDrag(b)
            },
            handleDrag: function(b) {
                1 < this.zoomFactor && (b = this.getTouches(b)[0], this.drag(b, this.lastDragPosition), this.offset = this.sanitizeOffset(this.offset), this.lastDragPosition = b)
            },
            handleDragEnd: function() {
                this.el.trigger(this.options.dragEndEventName);
                this.end()
            },
            handleZoomStart: function(b) {
                this.el.trigger(this.options.zoomStartEventName);
                this.stopAnimation();
                this.lastScale = 1;
                this.nthZoom = 0;
                this.lastZoomCenter = !1;
                this.hasInteraction = !0
            },
            handleZoom: function(b, a) {
                var c = this.getTouchCenter(this.getTouches(b)),
                    e = a / this.lastScale;
                this.lastScale = a;
                this.nthZoom += 1;
                3 < this.nthZoom && (this.scale(e, c), this.drag(c, this.lastZoomCenter));
                this.lastZoomCenter = c
            },
            handleZoomEnd: function() {
                this.el.trigger(this.options.zoomEndEventName);
                this.end()
            },
            handleDoubleTap: function(b) {
                var a = this.getTouches(b)[0],
                    c = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor,
                    e = this.zoomFactor;
                b = function(b) {
                    this.scaleTo(e + b * (c - e), a)
                }.bind(this);
                this.hasInteraction || (e > c && (a = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, b, this.swing), this.el.trigger(this.options.doubleTapEventName))
            },
            sanitizeOffset: function(b) {
                var a = (this.zoomFactor - 1) * this.getContainerX(),
                    c = (this.zoomFactor - 1) * this.getContainerY();
                return {
                    x: Math.min(Math.max(b.x, Math.min(a, 0)), Math.max(a, 0)),
                    y: Math.min(Math.max(b.y, Math.min(c, 0)), Math.max(c, 0))
                }
            },
            scaleTo: function(b, a) {
                this.scale(b / this.zoomFactor, a)
            },
            scale: function(b, a) {
                b = this.scaleZoomFactor(b);
                this.addOffset({
                    x: (b - 1) * (a.x + this.offset.x),
                    y: (b - 1) * (a.y + this.offset.y)
                })
            },
            scaleZoomFactor: function(b) {
                var a = this.zoomFactor;
                this.zoomFactor *= b;
                this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom));
                return this.zoomFactor / a
            },
            drag: function(b, a) {
                a && (this.options.lockDragAxis ? Math.abs(b.x - a.x) > Math.abs(b.y - a.y) ? this.addOffset({
                            x: -(b.x - a.x),
                            y: 0
                        }) : this.addOffset({
                            y: -(b.y - a.y),
                            x: 0
                        }) : this.addOffset({
                        y: -(b.y - a.y),
                        x: -(b.x - a.x)
                    }))
            },
            getTouchCenter: function(b) {
                return this.getVectorAvg(b)
            },
            getVectorAvg: function(b) {
                return {
                    x: b.map(function(a) {
                        return a.x
                    }).reduce(l) / b.length,
                    y: b.map(function(a) {
                        return a.y
                    }).reduce(l) / b.length
                }
            },
            addOffset: function(b) {
                this.offset = {
                    x: this.offset.x + b.x,
                    y: this.offset.y + b.y
                }
            },
            sanitize: function() {
                this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
            },
            isInsaneOffset: function(b) {
                var a = this.sanitizeOffset(b);
                return a.x !== b.x || a.y !== b.y
            },
            sanitizeOffsetAnimation: function() {
                var b = this.sanitizeOffset(this.offset),
                    a = this.offset.x,
                    c = this.offset.y,
                    e = function(e) {
                        this.offset.x = a + e * (b.x - a);
                        this.offset.y = c + e * (b.y - c);
                        this.update()
                    }.bind(this);
                this.animate(this.options.animationDuration, e, this.swing)
            },
            zoomOutAnimation: function() {
                var b = this.zoomFactor,
                    a = this.getCurrentZoomCenter(),
                    c = function(c) {
                        this.scaleTo(b + c * (1 - b), a)
                    }.bind(this);
                this.animate(this.options.animationDuration, c, this.swing)
            },
            updateAspectRatio: function() {
                this.setContainerY(this.getContainerX() / this.getAspectRatio())
            },
            getInitialZoomFactor: function() {
                return this.container[0].offsetWidth / this.el[0].offsetWidth
            },
            getAspectRatio: function() {
                return this.el[0].offsetWidth / this.el[0].offsetHeight
            },
            getCurrentZoomCenter: function() {
                var b = this.offset.x,
                    a = this.container[0].offsetWidth * this.zoomFactor - b - this.container[0].offsetWidth,
                    b = b / a,
                    b = b * this.container[0].offsetWidth / (b + 1),
                    c = this.offset.y,
                    e = this.container[0].offsetHeight * this.zoomFactor - c - this.container[0].offsetHeight,
                    c = c / e,
                    c = c * this.container[0].offsetHeight / (c + 1);
                0 === a && (b = this.container[0].offsetWidth);
                0 === e && (c = this.container[0].offsetHeight);
                return {
                    x: b,
                    y: c
                }
            },
            canDrag: function() {
                var b = this.zoomFactor;
                return !(.99 < b && 1.01 > b)
            },
            getTouches: function(b) {
                var a = this.container.offset();
                return Array.prototype.slice.call(b.touches).map(function(b) {
                    return {
                        x: b.pageX - a.left,
                        y: b.pageY - a.top
                    }
                })
            },
            animate: function(b, a, c, e) {
                var g = (new Date).getTime(),
                    f = function() {
                        if (this.inAnimation) {
                            var h = (new Date).getTime() - g,
                                k = h / b;
                            h >= b ? (a(1), e && e(), this.update(), this.stopAnimation(), this.update()) : (c && (k = c(k)), a(k), this.update(), requestAnimationFrame(f))
                        }
                    }.bind(this);
                this.inAnimation = !0;
                requestAnimationFrame(f)
            },
            stopAnimation: function() {
                this.inAnimation = !1
            },
            swing: function(b) {
                return -Math.cos(b * Math.PI) / 2 + .5
            },
            getContainerX: function() {
                return this.container[0].offsetWidth
            },
            getContainerY: function() {
                return this.container[0].offsetHeight
            },
            setContainerY: function(b) {
                return this.container.height(b)
            },
            setupMarkup: function() {
                this.container = h('<div class="pinch-zoom-container"></div>');
                this.el.before(this.container);
                this.container.append(this.el);
                this.container.css({
                    overflow: "hidden",
                    position: "relative"
                });
                this.el.css({
                    "-webkit-transform-origin": "0% 0%",
                    "-moz-transform-origin": "0% 0%",
                    "-ms-transform-origin": "0% 0%",
                    "-o-transform-origin": "0% 0%",
                    "transform-origin": "0% 0%",
                    position: "absolute"
                })
            },
            end: function() {
                this.hasInteraction = !1;
                this.sanitize();
                this.update()
            },
            bindEvents: function() {
                e(this.container.get(0), this);
                h(window).on("resize", this.update.bind(this));
                h(this.el).find("img").on("load", this.update.bind(this))
            },
            update: function() {
                this.updatePlaned || (this.updatePlaned = !0, setTimeout(function() {
                    this.updatePlaned = !1;
                    this.updateAspectRatio();
                    var b = this.getInitialZoomFactor() * this.zoomFactor,
                        a = -this.offset.x / b,
                        c = -this.offset.y / b,
                        e = "scale3d(" + b + ", " + b + ",1) translate3d(" + a + "px," + c + "px,0px)",
                        b = "scale(" + b + ", " + b + ") translate(" + a + "px," + c + "px)",
                        a = function() {
                            this.clone && (this.clone.remove(), delete this.clone)
                        }.bind(this);
                    !this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, a(), this.el.css({
                            "-webkit-transform": e,
                            "-o-transform": b,
                            "-ms-transform": b,
                            "-moz-transform": b,
                            transform: e
                        })) : (this.is3d && (this.clone = this.el.clone(), this.clone.css("pointer-events", "none"), this.clone.appendTo(this.container), setTimeout(a, 200)), this.el.css({
                            "-webkit-transform": b,
                            "-o-transform": b,
                            "-ms-transform": b,
                            "-moz-transform": b,
                            transform: b
                        }), this.is3d = !1)
                }.bind(this), 0))
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            }
        };
        var e = function(b, a) {
            var c = null,
                e = 0,
                f = null,
                h = null,
                l = function(b, e) {
                    if (c !== b) {
                        if (c && !b) switch (c) {
                            case "zoom":
                                a.handleZoomEnd(e);
                                break;
                            case "drag":
                                a.handleDragEnd(e)
                        }
                        switch (b) {
                            case "zoom":
                                a.handleZoomStart(e);
                                break;
                            case "drag":
                                a.handleDragStart(e)
                        }
                    }
                    c = b
                },
                m = function(b) {
                    2 === e ? l("zoom") : 1 === e && a.canDrag() ? l("drag", b) : l(null, b)
                },
                x = function(a) {
                    return Array.prototype.slice.call(a).map(function(a) {
                        return {
                            x: a.pageX,
                            y: a.pageY
                        }
                    })
                },
                q = function(a, b) {
                    var c, e;
                    c = a.x - b.x;
                    e = a.y - b.y;
                    return Math.sqrt(c * c + e * e)
                },
                u = function(a, b) {
                    var c = q(a[0], a[1]);
                    return q(b[0], b[1]) / c
                },
                D = !0;
            b.addEventListener("touchstart", function(b) {
                if (a.enabled) {
                    D = !0;
                    e = b.touches.length;
                    var g = (new Date).getTime();
                    1 < e && (f = null);
                    if (300 > g - f) switch (b.stopPropagation(), b.preventDefault(), a.handleDoubleTap(b), c) {
                        case "zoom":
                            a.handleZoomEnd(b);
                            break;
                        case "drag":
                            a.handleDragEnd(b)
                    }
                    1 === e && (f = g)
                }
            });
            b.addEventListener("touchmove", function(b) {
                if (a.enabled) {
                    if (D) m(b), c && (b.stopPropagation(), b.preventDefault()), h = x(b.touches);
                    else {
                        switch (c) {
                            case "zoom":
                                a.handleZoom(b, u(h, x(b.touches)));
                                break;
                            case "drag":
                                a.handleDrag(b)
                        }
                        c && (b.stopPropagation(), b.preventDefault(), a.update())
                    }
                    D = !1
                }
            });
            b.addEventListener("touchend", function(b) {
                a.enabled && (e = b.touches.length, m(b))
            })
        };
        return f
    };
    "undefined" !== typeof define && define.amd ? define("app/pinchzoom", ["lib/jquery"], function(h) {
            return l(h)
        }) : (window.RTP = window.RTP || {}, window.RTP.PinchZoom = l(window.$))
}).call(this);
define("app/imageSlider", "common/config lib/backbone app/imgView tools/swiper appTpl/getViewImgTpl lib/underscore".split(" "), function(l, h, f, m, e, b) {
    return {
        init: function(a) {
            this.setOptions(a);
            this.cHtml = this.options.cHtml;
            this.cDetailSilder = this.options.cDetailSilder;
            this.cThumbnailPagination = this.options.cThumbnailPagination;
            this.cImgViewMainCont = this.options.cImgViewMainCont;
            this.cHide = this.options.cHide;
            this.imgViewActive = this.options.imgViewActive;
            this.cOriginalImgData = this.options.cOriginalImgData;
            this.template = this.options.template;
            this.timer = null;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$html = this.$html || $("html");
            this.$body = this.$body || $("body");
            this.$cDetailSilder = $(this.cDetailSilder);
            this.$cImgViewMainCont = $(this.cImgViewMainCont)
        },
        initEvent: function() {
            var a = this,
                b = this.timer;
            this.thumbnail();
            this.$body.on("click", ".j-detail-silder li", $.proxy(this.showImgView, this));
            this.$body.on("click", ".j-viewImgBack", $.proxy(this.hideImgView, this));
            this.$window.on("orientationchange", function() {
                b && clearTimeout(b);
                b = setTimeout(function() {
                    a.setEleStyle();
                    f.setEleStyle()
                }, 500)
            })
        },
        setOptions: function(a) {
            this.options = {
                cHtml: "dhm-htmlOverflow",
                cDetailSilder: ".j-detail-silder",
                cHide: "dhm-hide",
                cThumbnailPagination: ".j-thumbnail-pagination",
                cImgViewMainCont: ".j-imgViewMainCont",
                imgViewActive: ".swiper-slide-active",
                cOriginalImgData: [],
                template: b.template
            };
            $.extend(!0, this.options, a || {})
        },
        setEleStyle: function() {},
        thumbnail: function() {
            var a = this.$cDetailSilder.find("li").length,
                b = this;
            this.thumbnail.swiperInstance = new m(this.cDetailSilder, {
                pagination: this.cThumbnailPagination,
                paginationClickable: !0,
                preloadImages: !1,
                lazyLoading: !0,
                lazyLoadingInPrevNext: !0,
                lazyLoadingInPrevNextAmount: 2,
                updateOnImagesReady: !0,
                onLazyImageReady: function(c, e) {
                    var f = $(e).index();
                    b.$cDetailSilder.find("li").eq(f - 1).removeClass("dot-symbol");
                    f + 1 === a && b.$cDetailSilder.find("li").eq(f).removeClass("dot-symbol")
                }
            })
        },
        renderViewImg: function() {
            var a = this.template(e.join(""))(this.cOriginalImgData);
            this.$cImgViewMainCont.html(a);
            this.$cImgViewMainCont.removeClass(this.cHide).addClass("fadeIn");
            this.$html.addClass(this.cHtml)
        },
        showImgView: function(a) {
            var b = $(a.currentTarget);
            a = b.closest("ul");
            b = b.index();
            this.creat ? (f.sileToCurrentIndex(b), this.$cImgViewMainCont.removeClass(this.cHide).addClass("fadeIn"), this.$html.addClass(this.cHtml)) : (this.renderViewImg(), f.init({
                    currentIndex: b,
                    currentInstanceDom: a
                }), this.creat = "1");
            $(".imgViewMainCont .lazy").lazyload({
                load: function() {
                    $(this).addClass("show")
                }
            })
        },
        hideImgView: function() {
            var a = this.$cImgViewMainCont.find("li.swiper-slide-active").index();
            this.$cImgViewMainCont.addClass(this.cHide).removeClass("fadeIn");
            this.$html.removeClass(this.cHtml);
            this.thumbnail.swiperInstance.slideTo(a, 0, !1)
        }
    }
});
define("app/imgView", ["common/config", "tools/swiper", "app/pinchzoom"], function(l, h, f) {
    return {
        init: function(f) {
            this.setOptions(f);
            this.cImgViewCont = this.options.cImgViewCont;
            this.cImgViewContPagination = this.options.cImgViewContPagination;
            this.cPinchZoom = this.options.cPinchZoom;
            this.currentIndex = this.options.currentIndex;
            this.currentInstanceDom = this.options.currentInstanceDom;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$cImgViewCont = $(this.cImgViewCont);
            this.$cPinchZoom = $(this.cPinchZoom)
        },
        initEvent: function() {
            this.imgView()
        },
        setOptions: function(f) {
            this.options = {
                cImgViewCont: ".j-imgViewCont",
                cImgViewContPagination: ".j-imgView-pagination",
                cPinchZoom: ".j-pinch-zoom",
                currentInstanceDom: null,
                currentIndex: -1
            };
            $.extend(!0, this.options, f || {})
        },
        setEleStyle: function() {
            var f = 1 * this.$window.height(),
                e = this.$cImgViewCont.find("li");
            $.each(e, function(b, a) {
                $(this).css("height", f + "px");
                $(this).find("img").css("maxHeight", f + "px")
            })
        },
        imgView: function() {
            var l = 1 * this.$window.height();
            this.$cImgViewCont.find("li");
            this.setEleStyle();
            this.currentInstanceDom.swiperInstance = new h(this.cImgViewCont, {
                pagination: this.cImgViewContPagination,
                paginationClickable: !0,
                preloadImages: !1,
                onSlideChangeEnd: function() {
                    $(".imgViewMainCont .lazy").lazyload({
                        load: function() {
                            $(this).addClass("show")
                        }
                    })
                }
            });
            this.currentInstanceDom.swiperInstance.slideTo(this.currentIndex, 0, !1);
            this.$cPinchZoom.each(function() {
                new f($(this), {});
                $(this).parent().css("height", l + "px")
            })
        },
        sileToCurrentIndex: function(f) {
            this.currentInstanceDom.swiperInstance.slideTo(f, 0, !1)
        }
    }
});
define("app/promotionCountDown", ["common/config", "lib/backbone", "appTpl/promotionCountDownTpl"], function(l, h, f) {
    return {
        init: function(f) {
            this.setOptions(f);
            this.cTimeleftWrap = this.options.cTimeleftWrap;
            this.remainingTime = this.options.remainingTime;
            this.template = this.options.template;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$cTimeleftWrap = $(this.cTimeleftWrap)
        },
        initEvent: function() {
            this.render(this.remainingTime)
        },
        setOptions: function(f) {
            this.options = {
                cTimeleftWrap: ".j-timeLeft",
                template: _.template,
                remainingTime: -1
            };
            $.extend(!0, this.options, f || {})
        },
        render: function(h) {
            h.second || this.$cTimeleftWrap.hide();
            h = this.template(f.join(""))(h);
            this.$cTimeleftWrap.html(h)
        }
    }
});
define("app/getDhCouponList", ["common/config", "common/getUserInfo", "appTpl/getDhCouponListTpl", "checkoutflow/popupTip", "checkoutflow/dataErrorLog"], function(l, h, f, m, e) {
    var b = Backbone.Model.extend({
        defaults: function() {
            return {
                code: -1,
                list: [{
                    endDateFormat: "",
                    amount: -1,
                    orderAmo: -1
                }]
            }
        },
        initialize: function(a, b) {
            this.setOptions(b);
            this.ajaxOptions = this.options.ajaxOptions
        },
        setOptions: function(a) {
            this.options = {
                ajaxOptions: {
                    url: "/mobileApiWeb/coupon-Coupon-getAvailableDHCouponList.do",
                    data: {
                        version: "3.3",
                        client: "wap"
                    },
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    cache: !1,
                    processData: !0
                }
            };
            $.extend(!0, this.options, a || {})
        },
        urlRoot: function() {
            return l.wwwURL + this.ajaxOptions.url
        },
        sync: function(a, b, e) {
            this.__params = $.extend(!0, {}, this.ajaxOptions, e || {});
            return Backbone.sync.call(this, null, this, $.extend(!0, {}, this.ajaxOptions, {
                url: this.url()
            }, e))
        },
        parse: function(a) {
            var b = {};
            b.code = "0x0000" === a.state ? 200 : -1;
            b.list = []; - 1 !== b.code && $.each(a.data, function(a, c) {
                var e = {};
                e.amount = c.amount;
                e.endDateFormat = c.endDateFormat;
                e.orderAmo = c.orderAmo;
                b.list.push(e)
            });
            return b
        }
    });
    return Backbone.View.extend({
        el: "body",
        events: {
            "click .j-datail-dhcoupon": "loadDefaultShipcostData",
            "click .j-product-dhTitle-top": "closedDhCouponLayer"
        },
        initialize: function(a) {
            this.setOptions(a);
            this.cateDispId = this.options.syncData.cateDispId;
            this.itemCode = this.options.syncData.itemCode;
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cDhmHtmlOverflow = this.options.cDhmHtmlOverflow;
            this.cJDhCouponLayer = this.options.cJDhCouponLayer;
            this.cOpenLayer = this.options.cOpenLayer;
            this.cClosedLayer = this.options.cClosedLayer;
            this.cJDatailDhCouponBoxScroll = this.options.cJDatailDhCouponBoxScroll;
            this.template = this.options.template;
            this.tpl = this.options.tpl;
            this.model = this.options.model;
            this.dataErrorLog = this.options.dataErrorLog;
            this.initElement();
            this.initEvent()
        },
        setOptions: function(a) {
            this.options = {
                cateDispId: -1,
                itemCode: -1,
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cDhmHtmlOverflow: "dhm-htmlOverflow",
                cJDhCouponLayer: ".j-dhCouponLayer",
                cOpenLayer: "open-layer1",
                cClosedLayer: "close-layer1",
                cJDatailDhCouponBoxScroll: ".j-datail-dhCoupon-boxScroll",
                template: _.template,
                tpl: f,
                model: new b,
                dataErrorLog: new e({
                    flag: !0,
                    url: "/mobileApiWeb/biz-FeedBack-log.do"
                })
            };
            $.extend(!0, this.options, a || {})
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cJDhCouponLayer = $(this.cJDhCouponLayer);
            this.$cJDatailDhCouponBoxScroll = $(this.cJDatailDhCouponBoxScroll)
        },
        initEvent: function() {
            var a = this,
                b = this.timer;
            this.listenTo(this.model, "sync", this.success);
            this.listenTo(this.model, "error", this.error);
            this.$window.on("orientationchange, resize", function() {
                b && clearTimeout(b);
                b = setTimeout(function() {
                    a.setdhCouponStyle()
                }, 500)
            })
        },
        loadDefaultShipcostData: function() {
            -1 === this.model.get("code") ? (m.events.trigger("popupTip:loading", !0), h.init({
                    successCallback: $.proxy(function() {
                        this.model.fetch({
                            data: {
                                cateDispId: this.cateDispId,
                                itemID: this.itemCode,
                                language: l.countryCur
                            }
                        })
                    }, this)
                })) : this.openDhCouponLayer()
        },
        success: function(a, b, e) {
            if (200 === a.get("code")) this.render(a.attributes), m.events.trigger("popupTip:loading", !1), this.openDhCouponLayer();
            else {
                m.events.trigger("popupTip:loading", !1);
                m.events.trigger("popupTip:dataErrorTip", {
                    action: "close",
                    message: b.message
                });
                try {
                    throw "success(): data is wrong";
                } catch (k) {
                    this.dataErrorLog.events.trigger("save:dataErrorLog", {
                        message: k,
                        url: this.model.__params.url,
                        params: this.model.__params.data,
                        result: b
                    })
                }
            }
        },
        error: function() {
            m.events.trigger("popupTip:loading", !1);
            m.events.trigger("popupTip:dataErrorTip", {
                action: "close",
                message: "Network anomaly."
            });
            try {
                throw "error(): request is wrong";
            } catch (a) {
                this.dataErrorLog.events.trigger("save:dataErrorLog", {
                    message: a,
                    url: this.model.__params.url,
                    params: this.model.__params.data
                })
            }
        },
        render: function(a) {
            var b = this.template,
                e = this.tpl,
                f = b(e.main.join(""))(a),
                h = b(e.title.join(""))(a);
            a = b(e.dhCouponList.join(""))(a);
            f = f.replace(/\{\{title\}\}/, h).replace(/\{\{dhCouponList\}\}/, a);
            this.$body.append(f);
            this.initElement()
        },
        setDhCouponPageStyle: function(a) {
            var b = this.$html,
                e = this.$body,
                f = this.cHtml;
            !0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), b.addClass(f), e.css({
                    "margin-top": -this.__scrollY
                })) : (b.removeClass(f), e.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        setdhCouponStyle: function() {
            var a = $(this.cJDatailDhCouponBoxScroll),
                b, e = 1 * this.$window.height(),
                f = 1 * (a.outerHeight() - a.height()),
                h = 0;
            b = a.siblings();
            $.each(b, function(a, b) {
                h += 1 * $(b).outerHeight()
            });
            a.css({
                height: e - h - f - 10
            })
        },
        openDhCouponLayer: function() {
            var a = this.$cJDhCouponLayer,
                b = this.cOpenLayer,
                e = this.cClosedLayer,
                f = this.cHide;
            setTimeout($.proxy(function() {
                this.setDhCouponPageStyle(!0);
                a.removeClass(f);
                this.setdhCouponStyle();
                setTimeout(function() {
                    a.removeClass(e).addClass(b)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        closedDhCouponLayer: function() {
            var a = this.$cJDhCouponLayer,
                b = this.cOpenLayer,
                e = this.cClosedLayer,
                f = this.cHide;
            setTimeout($.proxy(function() {
                this.setDhCouponPageStyle(!1);
                a.removeClass(b).addClass(e);
                setTimeout(function() {
                    a.addClass(f)
                }, 260);
                l.preventClick()
            }, this), 200)
        }
    })
});
define("app/proTab", ["common/config"], function(l) {
    return {
        init: function(h) {
            this.setOptions(h);
            this.cTabShowBtn = this.options.cTabShowBtn;
            this.cTabCloseBtn = this.options.cTabCloseBtn;
            this.cTabLayerWarp = this.options.cTabLayerWarp;
            this.cTabBtnList = this.options.cTabBtnList;
            this.cTabContentList = this.options.cTabContentList;
            this.cTabCurrent = this.options.cTabCurrent;
            this.cHtml = this.options.cHtml;
            this.cHide = this.options.cHide;
            this.cAnimateHide = this.options.cAnimateHide;
            this.cAnimateShow = this.options.cAnimateShow;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$html = this.$html || $("html");
            this.$body = this.body || $("body");
            this.$window = this.$window || $(window);
            this.$cTabShowBtn = this.$cTabShowBtn || $(this.cTabShowBtn);
            this.$cTabCloseBtn = this.$cTabCloseBtn || $(this.cTabCloseBtn);
            this.$cTabLayerWarp = this.$cTabLayerWarp || $(this.cTabLayerWarp);
            this.$cTabBtnList = this.$cTabBtnList || $(this.cTabBtnList);
            this.$cTabContentList = this.$cTabContentList || $(this.cTabContentList)
        },
        initEvent: function() {
            var h = this,
                f = this.timer;
            this.$body.on("click", ".j-tabShowBtn", $.proxy(this.showLayer, this));
            this.$body.on("click", ".j-tabCloseBtn", $.proxy(this.hideLayer, this));
            this.$body.on("click", ".j-tabBtnWarp li[data-type]", $.proxy(this.showTabContent, this));
            this.$window.on("orientationchange, resize", function() {
                f && clearTimeout(f);
                f = setTimeout(function() {
                    h.setTabContentStyle()
                }, 500)
            })
        },
        setOptions: function(h) {
            this.options = {
                el: "body",
                cTabShowBtn: ".j-tabShowBtn",
                cTabCloseBtn: ".j-tabCloseBtn",
                cTabLayerWarp: ".j-tabLayerWarp",
                cTabBtnList: ".j-tabBtnWarp li[data-type]",
                cTabContentList: ".j-tabContent",
                cTabCurrent: "current",
                cHtml: "dhm-htmlOverflow",
                cHide: "dhm-hide",
                cAnimateHide: "close-layer1",
                cAnimateShow: "open-layer1"
            };
            $.extend(!0, this.options, h || {})
        },
        setPageStyle: function(h) {
            var f = this.$html,
                l = this.$body,
                e = this.cHtml;
            !0 === h ? (this.__scrollY = parseInt(this.$window.scrollTop()), f.addClass(e), l.css({
                    "margin-top": -this.__scrollY
                })) : (f.removeClass(e), l.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        },
        setTabContentStyle: function() {
            var h = this.cTabContentList,
                f = this.$cTabContentList,
                l = 1 * this.$window.height();
            $.each(f, function(e, b) {
                var a = $(b),
                    c = 1 * (a.outerHeight() - a.height()),
                    f = 0;
                $.each(a.siblings().not(h), function(a, b) {
                    f += 1 * $(b).outerHeight()
                });
                a.css({
                    height: l - f - c
                })
            })
        },
        showLayer: function(h) {
            var f = this.$cTabLayerWarp,
                m = this.cHide,
                e = this.cAnimateHide,
                b = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.showTabContent(h);
                this.setPageStyle(!0);
                f.removeClass(m);
                this.setTabContentStyle();
                setTimeout(function() {
                    f.removeClass(e).addClass(b)
                }, 10);
                l.preventClick()
            }, this), 200)
        },
        hideLayer: function() {
            var h = this.$cTabLayerWarp,
                f = this.cHide,
                m = this.cAnimateHide,
                e = this.cAnimateShow;
            setTimeout($.proxy(function() {
                this.setPageStyle(!1);
                h.removeClass(e).addClass(m);
                setTimeout(function() {
                    h.addClass(f)
                }, 260);
                l.preventClick()
            }, this), 200)
        },
        showTabContent: function(h) {
            var f = this.$cTabBtnList,
                l = this.$cTabContentList;
            h = $(h.currentTarget).attr("data-type");
            var e = this.cTabCurrent,
                b = this.cHide,
                a;
            f.removeClass(e);
            for (var c = 0, g = f.length; c < g; c++) if (a = $(f[c]), a.attr("data-type") === h) {
                a.addClass(e);
                break
            }
            l.addClass(b);
            c = 0;
            for (g = l.length; c < g; c++) if (a = $(l[c]), a.attr("data-type") === h) {
                a.removeClass(b);
                break
            }
        }
    }
});
define("app/reviewImgView", "common/config lib/backbone app/imgView tools/swiper appTpl/getReviewsViewImgTpl lib/underscore".split(" "), function(l, h, f, m, e, b) {
    return {
        init: function(a) {
            this.setOptions(a);
            this.cDetailSilder = this.options.cDetailSilder;
            this.cReviewPagination = this.options.cReviewPagination;
            this.cImgViewMainCont = this.options.cImgViewMainCont;
            this.cHide = this.options.cHide;
            this.cHtml = this.options.cHtml;
            this.imgViewActive = this.options.imgViewActive;
            this.template = this.options.template;
            this.timer = null;
            this.initElement();
            this.initEvent()
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$html = this.$html || $("html");
            this.$body = this.$body || $("body");
            this.$cDetailSilder = $(this.cDetailSilder);
            this.$cImgViewMainCont = $(this.cImgViewMainCont)
        },
        initEvent: function() {
            var a = this.timer;
            this.imgArrData = [];
            this.$body.on("click", ".j-reviewImgBtn li img", $.proxy(this.showImgView, this));
            this.$body.on("click", ".j-reviewViewImgBack", $.proxy(this.hideImgView, this));
            this.$window.on("orientationchange", function() {
                a && clearTimeout(a);
                a = setTimeout(function() {
                    f.setEleStyle()
                }, 500)
            })
        },
        setOptions: function(a) {
            this.options = {
                cHide: "dhm-hide",
                cHtml: "dhm-htmlOverflow",
                cReviewPagination: ".j-review-pagination",
                cImgViewMainCont: ".j-reviewViewImgCont",
                imgViewActive: ".swiper-slide-active",
                template: b.template
            };
            $.extend(!0, this.options, a || {})
        },
        renderViewImg: function(a) {
            a = this.template(e.join(""))(a);
            this.$cImgViewMainCont.html(a);
            this.setPageStyle(!0);
            this.$cImgViewMainCont.removeClass(this.cHide).addClass("fadeIn")
        },
        showImgView: function(a) {
            a = $(a.currentTarget).closest("li");
            var b = a.closest("ul"),
                e = b.find("img"),
                h = this,
                b = b.find("li").index(a);
            a.attr("isClick") ? (this.$prevClickDom.swiperInstance.slideTo(b), this.setPageStyle(!0)) : (this.$prevClickDom && (this.imgArrData = [], this.$prevClickDom.attr("isClick", ""), this.$prevClickDom.swiperInstance.destroy()), $.each(e, function() {
                    var a = $(this).attr("data-original");
                    h.imgArrData.push(a)
                }), a.attr({
                    isClick: !0
                }), this.renderViewImg(this.imgArrData), f.init({
                    currentInstanceDom: a,
                    cImgViewCont: ".j-reviewViewImg",
                    cImgViewContPagination: this.cReviewPagination,
                    currentIndex: b,
                    cPinchZoom: ".j-review-pinch-zoom"
                }), this.$prevClickDom = a, this.$prevClickDom.swiperInstance.slideTo(b));
            this.$cImgViewMainCont.removeClass(this.cHide).addClass("fadeIn");
            $(".imgViewMainCont .lazy").lazyload({
                load: function() {
                    $(this).addClass("show")
                }
            })
        },
        hideImgView: function() {
            this.$cImgViewMainCont.addClass(this.cHide).removeClass("fadeIn");
            this.setPageStyle(!1)
        },
        setPageStyle: function(a) {
            var b = this.$html,
                e = this.$body,
                f = this.cHtml;
            !0 === a ? (this.__scrollY = parseInt(this.$window.scrollTop()), b.addClass(f), e.css({
                    "margin-top": -this.__scrollY
                })) : (b.removeClass(f), e.attr({
                    style: ""
                }), window.scroll(0, this.__scrollY))
        }
    }
});
define("app/contactSellerToNtalker", ["common/config", "common/ntalker"], function(l, h) {
    return {
        init: function(f) {
            this.setOptions(f);
            this.el = this.options.el;
            this.uid = this.options.uid;
            this.sid = this.options.sid;
            this.supplierId = this.options.supplierId;
            this.productId = this.options.productId;
            this.productName = this.options.productName;
            this.initElement();
            this.initEvent()
        },
        setOptions: function(f) {
            this.options = {
                el: "body",
                uid: "",
                sid: "",
                supplierId: "",
                productId: "",
                productName: ""
            };
            $.extend(!0, this.options, f || {})
        },
        initElement: function() {
            this.$el = this.$el || $(this.el)
        },
        initEvent: function() {
            this.$el.on("click", ".j-ntalker", $.proxy(this.open, this))
        },
        open: function() {
            setTimeout($.proxy(function() {
                h.events.trigger("Ntalker:open", {
                    uid: this.uid,
                    sid: this.sid,
                    supplierId: this.supplierId,
                    productId: this.productId,
                    productName: this.productName
                })
            }, this), 200)
        }
    }
});
define("app/share", ["common/config"], function(l) {
    var h = encodeURIComponent(document.title),
        f = window.location.href;
    0 < f.indexOf("#") && (f = f.substring(0, f.indexOf("#")));
    f = encodeURIComponent(f);
    return {
        init: function(l) {
            "undefined" === typeof l && (l = {});
            this.$el = l.$el || $("body");
            this.thirdPartyUrl = l.thirdPartyUrl || {
                    facebook: ["http://m.facebook.com/sharer.php?&u=", f, "&t=", h].join(""),
                    twitter: ["https://mobile.twitter.com/home?status=", h, "+-+", f].join(""),
                    google: ["http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=", f, "&title=", h].join(""),
                    pinterest: ["http://pinterest.com/pin/create/button/?url=", f, "&media=&description=", h].join(""),
                    vk: ["http://vk.com/share.php?url=", f].join(""),
                    linkedin: ["http://www.linkedin.com/cws/share?url=", f, "&title=", h].join(""),
                    mail: ["mailto:?subject=Check out what I found on DHgate!&body=Hi! I found this on DHgate and thought you might like it! Check it out now:", f].join("")
                };
            this.initEvent()
        },
        initEvent: function() {
            this.$el.on("click", ".j-detailShare a", $.proxy(this.jump, this))
        },
        jump: function(f) {
            var e = $(f.currentTarget).attr("data-name");
            setTimeout($.proxy(function() {
                window.open(this.thirdPartyUrl[e], "bookmarkWindow")
            }, this), 200)
        }
    }
});
define("app/bottomScrollBar", ["common/config"], function(l) {
    var h = function(f) {
        this.setOptions(f);
        this.cDatailBtn = this.options.cDatailBtn;
        this.cLayerBottomWarp = this.options.cLayerBottomWarp;
        this.cHide = this.options.cHide;
        this.timer = null;
        this.initElement();
        this.initEvent();
        this.setStyle()
    };
    $.extend(h, {
        init: function(f) {
            return new h(f)
        }
    });
    $.extend(h.prototype, {
        setOptions: function(f) {
            this.options = {
                cDatailBtn: ".j-datail-btn",
                cLayerBottomWarp: ".j-layer-bottom-cartWarp",
                cHide: "dhm-hide"
            };
            $.extend(this.options, f || {})
        },
        initElement: function() {
            this.$window = this.$window || $(window);
            this.$cDatailBtn = this.$cDatailBtn || $(this.cDatailBtn);
            this.$cLayerBottomWarp = this.$cLayerBottomWarp || $(this.cLayerBottomWarp)
        },
        initEvent: function() {
            this.$window.on("scroll", $.proxy(this.setStyle, this))
        },
        setStyle: function() {
            var f = this.$cDatailBtn,
                h = this.$cLayerBottomWarp,
                e = this.$window,
                b = this.cHide,
                a, c;
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                a = f.offset().top + f.outerHeight();
                c = e.scrollTop();
                c >= a ? h.removeClass(b) : h.addClass(b)
            }, 50)
        }
    });
    return h
});
requirejs.config({
    baseUrl: "//js.dhresource.com/mobile_v2/src/",
    paths: {
        lib: "common/base",
        tools: "common/tools",
        ui: "common/ui",
        tpl: "common/tpl",
        checkoutflow: "common/checkoutflow",
        app: "detail/v1",
        appTpl: "detail/tpl"
    },
    shim: {
        "lib/backbone": {
            deps: ["lib/underscore", "lib/jquery"],
            exports: "Backbone"
        },
        "lib/underscore": {
            exports: "_"
        },
        "lib/jquery": {
            exports: "$"
        },
        "ui/iscroll": {
            exports: "Iscroll"
        },
        "tools/jquery.cookie": {
            deps: ["lib/jquery"],
            exports: "$cookie"
        },
        "tools/fastclick": {
            exports: "FastClick"
        }
    }
});
requirejs(["app/main"]);
define("app/main", "tools/pageTiming common/config common/getUserInfo common/langLoader common/appSpread common/header/EDMConfirmEmail common/appopen ui/ripple ui/lazyload common/header/buyerUserInfo common/goBack common/header/topMenuInit common/header/turnToLanguagesWebsite common/header/topSearch common/login/signinPopup common/sharesns common/countdown common/recommend/youMyLike common/recommend/youViewed common/detail/recommended common/detail/productAttrPopup common/detail/PriceRange common/detail/selectSkuAttr common/coupon/getStoreCouponList common/coupon/bindStoreCoupon common/detail/getDefaultShipCostAndWay common/detail/getShipCostAndWayList common/detail/getShiptoCountryList common/detail/getShippingAddressList common/detail/addToCart common/detail/addtoCartTip common/detail/favorite common/detail/getTotalPrice common/detail/selectCoupon common/detail/custom common/detail/customSubmit common/detail/sample/sample common/detail/sample/sampleShipcostList common/detail/sample/sampleShiptoCountryList common/invitefriends/invitingFriendsTips common/goTop common/tc app/recordItemCode app/preprocessingSyncData app/getDhCouponList app/proTab app/bottomScrollBar app/contactSellerToNtalker app/share app/promotionCountDown app/imageSlider app/reviewImgView".split(" "), function(l, h, f, m, e, b, a, c, g, k, n, t, r, x, q, u, D, A, C, d, p, B, v, y, z, w, E, J, L, K, H, G, I, M, O, F, P, Q, R, S, T, N, U, W, X, Y, Z, aa, ba, ca, da, ea) {
    m.get(function() {
        $("#errorSure").html("OK");
        q.init();
        e.init({
            gaCallback: function() {
                window.ga && window.ga("send", "event", "Checkout-product", "TDCode", "dload")
            },
            renderCallback: function() {
                $(".j-headerWarp").addClass("detail-header-top")
            },
            closeCallback: function() {
                $(".j-headerWarp").removeClass("detail-header-top")
            }
        });
        new t;
        r.init();
        new k;
        n.init({
            customReturnToUrl: function() {
                var a = document.referrer;
                (new RegExp(h.wwwPATHNAME + h.wwwSEARCH, "i")).test(a) && !/returnURL=/i.test(a) ? window.location.href = h.wwwURL : /\/login\.do|\/register\.do/i.test(a) || /\/mydhgate\/downloadApp\.html/i.test(a) ? window.history.go(-2) : window.history.back()
            }
        });
        new x;
        S.init({
            cookieName: "invitoridDetail"
        });
        new b;
        W.init({
            successCallback: function(b) {
                var c, e, f, g;
                "y" === b.defaultShipCost.isOnekey && (window.innerWidth ? c = window.innerWidth : document.body && document.body.clientWidth && (c = document.body.clientWidth), 320 < c ? ($.extend(b, {
                        onekeyText: "Buy now with 1-Step"
                    }), $.each($(".j-onekeySelectSkuAttr"), function(a, b) {
                        "DIV" === b.nodeName.toUpperCase() ? $(b).find("a").text("Buy now with 1-Step") : $(b).text("Buy now with 1-Step")
                    })) : $.extend(b, {
                        onekeyText: "Buy with 1-Step"
                    }), f = new I, g = new M({
                    getTotalPrice: f
                }));
                U.set(b.itemCode);
                da.init({
                    cOriginalImgData: b.oriImgList
                });
                (function() {
                    $("body").on("click", ".j-swiper-soldout", function() {
                        setTimeout(function() {
                            $(".j-swiper-soldout-warp").remove()
                        }, 200)
                    })
                })();
                $("body").on("click", ".j-priceOnApp", function() {
                    window.ga && window.ga("send", "event", "Checkout-product", "TDCode", "priceonapp");
                    a.init({
                        entrance: "appexclusive",
                        iOS: {
                            storeUrl: "https://app.appsflyer.com/id905869418?pid=WAP-pricetag"
                        }
                    })
                });
                if (-1 !== b.promEndDate) if (9 !== b.promoTypeId) D.init({
                    endTime: b.promEndDate,
                    runCallback: function(a) {
                        ca.init({
                            remainingTime: a
                        })
                    }
                });
                else {
                    var k = $(".j-flashDealsCountdown");
                    D.init({
                        endTime: b.promEndDate,
                        runCallback: function(a) {
                            k.html(['<span class="time-nub">' + a.hour.toString() + "</span>", '<span class="time-colon"><b>:</b></span>', '<span class="time-nub">' + a.minute.toString() + "</span>", '<span class="time-colon"><b>:</b></span>', '<span class="time-nub">' + a.second.toString() + "</span>"].join(""))
                        }
                    })
                }
                new G({
                    itemCode: b.itemCode,
                    productId: b.productId
                });
                !0 === b.isDhCoupon && new X({
                    syncData: {
                        cateDispId: b.cateDispId,
                        itemCode: b.itemCode
                    }
                });
                !0 === b.isSellerCoupon ? new y({
                        trackSyncData: b,
                        itemCode: b.itemCode,
                        supplierid: b.supplierid,
                        bindStoreCouponInstance: new z
                    }) : $(".j-datail-storecoupon").hide();
                c = new w({
                    defaultShipCost: b.defaultShipCost,
                    callback: function(a) {
                        this.productAttrPopupInstance = e;
                        this.getShipCostAndWayListInstance = new E({
                            itemcode: b.itemCode,
                            quantity: this.quantity || b.minOrder,
                            skuId: this.skuId || "",
                            skuMd5: this.skuMd5 || "",
                            whitherCountryId: a.get("whitherCountryId"),
                            whitherCountryName: a.get("whitherCountryName"),
                            stockCountryId: this.stockCountryId || a.get("stockCountryId"),
                            updateCallback: this.updateCallback,
                            getDefaultShipCostAndWayInstance: this
                        });
                        "y" !== b.defaultShipCost.isOnekey ? new J({
                                currentWhitherCountryId: a.get("whitherCountryId"),
                                getDefaultShipCostAndWayInstance: this,
                                getShipCostAndWayListInstance: this.getShipCostAndWayListInstance
                            }) : new L({
                                getDefaultShipCostAndWayInstance: this,
                                getShipCostAndWayListInstance: this.getShipCostAndWayListInstance
                            })
                    },
                    getTotalPrice: f,
                    selectCoupon: g
                });
                e = new p({
                    syncData: {
                        isOneKey: b.defaultShipCost.isOnekey,
                        onekeyText: b.onekeyText,
                        thumbListFirst: b.thumbList[0],
                        istate: b.istate,
                        minOrder: b.minOrder,
                        promoTypeId: b.promoTypeId,
                        isShipto: b.isShipto,
                        submitData: {
                            itemCode: b.itemCode,
                            productId: b.productId,
                            supplierid: b.supplierid,
                            unit: b.measureName,
                            quantity: b.minOrder,
                            impressionInfo: void 0 !== h.wwwHASH.split("#")[1] ? h.wwwHASH.split("#")[1] : ""
                        }
                    },
                    originalSyncData: b,
                    getDefaultShipCostAndWay: c,
                    getTotalPrice: f,
                    selectCoupon: g
                });
                H.init({
                    productAttrPopupInstance: e
                });
                null !== b.sampleInfo && new P({
                    whitherCountryId: b.defaultShipCost.whitherCountryId,
                    supplierId: b.supplierid,
                    productId: b.productId,
                    oriImgList: b.oriImgList,
                    itemCode: b.itemCode,
                    sampleInfo: b.sampleInfo,
                    callback: function(a) {
                        this.sampleShipcostListInstance = new Q({
                            itemcode: b.itemCode,
                            quantity: b.sampleInfo.quantity || 1,
                            skuId: b.sampleInfo.skuId,
                            skuMd5: b.sampleInfo.skuMd5,
                            whitherCountryId: a.get("whitherCountryId"),
                            whitherCountryName: a.get("whitherCountryName"),
                            stockCountryId: a.get("stockCountryId"),
                            sampleInstance: this
                        });
                        new R({
                            currentWhitherCountryId: a.get("whitherCountryId"),
                            sampleInstance: this,
                            sampleShipcostListInstance: this.sampleShipcostListInstance
                        })
                    }
                });
                Y.init();
                $(".j-detail-reviews .lazy").lazyload({
                    threshold: "300",
                    load: function() {
                        $(this).addClass("show")
                    }
                });
                ea.init();
                aa.init({
                    uid: b.uid,
                    sid: b.sid,
                    supplierId: b.supplierid,
                    productId: b.productId,
                    productName: b.productName
                });
                ba.init();
                T.init();
                !0 === b.istate && Z.init();
                (function() {
                    var a = $(".j-seoCon-bto"),
                        b = $(".j-seocontent");
                    a[0] && a.html(b.html())
                })();
                (function() {
                    function a(a, b, c) {
                        b.hasClass(c) ? (b.removeClass(c), a.html("- " + $.lang.fewer)) : (b.addClass(c), a.html("+ " + $.lang.more))
                    }
                    var b = $("body"),
                        c = $(".j-seoWordCon");
                    c[0] && c.each(function(a) {
                        37 > $(this).outerHeight(!0) ? $(this).next(".j-seoWordConBtn").hide() : ($(this).next(".j-seoWordConBtn").show(), $(this).addClass("seo-keyword"))
                    });
                    b.on("click", ".j-moreLink", function(b) {
                        b = $(b.currentTarget);
                        var c = b.siblings(".j-moreRelated");
                        a(b, c, "dhm-hide")
                    });
                    b.on("click", ".j-seoWordConBtn", function(b) {
                        b = $(b.currentTarget);
                        var c = b.siblings(".j-seoWordCon");
                        a(b, c, "seo-keyword")
                    })
                })();
                (function() {
                    var a = $.cookie("item_recentvisit"),
                        a = a ? a.match(/[^,]+/g) : "";
                    new d({
                        pageType: "Item",
                        itemCode: b.itemCode,
                        cateDispId: b.cateDispId
                    });
                    A.init({
                        el: ".j-recommend-ymlike",
                        title: $.lang.Youmaylike,
                        trackingPrefix: "#mymlpd-",
                        api: {
                            param: {
                                category: b.cateDispId,
                                itemID: b.itemCode,
                                pageType: "Item"
                            }
                        }
                    });
                    "" !== a && C.init({
                        el: ".j-recommend-yviewed",
                        title: $.lang.YouViewed,
                        trackingPrefix: "#mvdpd-"
                    })
                })();
                (function(a, b) {
                    (function() {
                        try {
                            (function(a, b, c, d, e, f, g) {
                                a.GoogleAnalyticsObject = e;
                                a[e] = a[e] ||
                                    function() {
                                        (a[e].q = a[e].q || []).push(arguments)
                                    };
                                a[e].l = 1 * new Date;
                                f = b.createElement(c);
                                g = b.getElementsByTagName(c)[0];
                                f.async = 1;
                                f.src = d;
                                g.parentNode.insertBefore(f, g)
                            })(a, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-425001-12", "auto"), ga("send", "pageview", location.pathname + location.search + escape(location.hash))
                        } catch (fa) {}
                        var c = $("body");
                        c.on("click", ".head-cart, .cart-num", function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "cart", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", "#J_swiperWrap", function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "Photo", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", ".j-favBtn", function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "Favorite", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", ".j-sCoupon-btn", function() {
                            a.ga && a.ga("send", "event", "MPU", "SellerCoupon", "click")
                        });
                        c.on("click", '.j-tabShowBtn[data-type="specification"], .j-tabBtnWarp li[data-type="specification"]', function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "Specification", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", '.j-tabShowBtn[data-type="description"], .j-tabBtnWarp li[data-type="description"]', function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "Description", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", ".j-selectSkuAttr", function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "SelectOptions", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", '.j-buySelectSkuAttr[data-skupop="buy"]', function(c) {
                            0 === $(c.currentTarget).find("a").length ? a.ga && a.ga("send", "event", "Checkout-product", "Buy it now", "float", b.cateDispId + "-" + b.itemCode) : a.ga && a.ga("send", "event", "Checkout-product", "Buy it now", "inside", b.cateDispId + "-" + b.itemCode);
                            goog_report_conversion && goog_report_conversion();
                            fbq && fbq("track", "AddToCart", {
                                content_ids: [b.itemCode.toString()],
                                content_type: "product"
                            })
                        });
                        c.on("click", ".j-buyItNow", function(c) {
                            0 === $(c.currentTarget).find("a").length ? a.ga && a.ga("send", "event", "Checkout-product", "Buy it now-confirm", b.cateDispId + "-" + b.itemCode) : a.ga && a.ga("send", "event", "Checkout-product", "Buy it now", "layer", b.cateDispId + "-" + b.itemCode);
                            goog_report_conversion && goog_report_conversion();
                            fbq && fbq("track", "AddToCart", {
                                content_ids: [b.itemCode.toString()],
                                content_type: "product"
                            })
                        });
                        c.on("click", '.j-cartSelectSkuAttr[data-skupop="cart"]', function(c) {
                            0 === $(c.currentTarget).find("a").length ? a.ga && a.ga("send", "event", "Checkout-product", "Add to Cart", "float", b.cateDispId + "-" + b.itemCode) : a.ga && a.ga("send", "event", "Checkout-product", "Add to Cart", "inside", b.cateDispId + "-" + b.itemCode);
                            goog_report_conversion && goog_report_conversion();
                            fbq && fbq("track", "AddToCart", {
                                content_ids: [b.itemCode.toString()],
                                content_type: "product"
                            })
                        });
                        c.on("click", ".j-addToCart", function(c) {
                            0 === $(c.currentTarget).find("a").length ? a.ga && a.ga("send", "event", "Checkout-product", "Add to Cart-confirm", b.cateDispId + "-" + b.itemCode) : a.ga && a.ga("send", "event", "Checkout-product", "Add to Cart", "layer", b.cateDispId + "-" + b.itemCode);
                            goog_report_conversion && goog_report_conversion();
                            fbq && fbq("track", "AddToCart", {
                                content_ids: [b.itemCode.toString()],
                                content_type: "product"
                            })
                        });
                        c.on("click", '.j-onekeySelectSkuAttr[data-skupop="onekey"]', function(b) {
                            0 === $(b.currentTarget).find("a").length ? a.ga && a.ga("send", "event", "Checkout-product", "1stepbuy-bottom") : a.ga && a.ga("send", "event", "Checkout-product", "1stepbuy")
                        });
                        c.on("click", ".j-sampleBtn", function() {
                            a.ga && a.ga("send", "event", "MPU", "inssamp")
                        });
                        c.on("click", ".j-sampleSubmit", function() {
                            a.ga && a.ga("send", "event", "MPU", "sampconti")
                        });
                        c.on("click", ".j-ntalker", function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "Chat", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", ".contact-seller", function(c) {
                            c = $($(c.currentTarger).find("a")[0]);
                            /j\-ntalker/i.test(c.attr("class")) || a.ga && a.ga("send", "event", "Checkout-product", "Message", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", ".j-goTop", function() {
                            a.ga && a.ga("send", "event", "Checkout-product", "Top", b.cateDispId + "-" + b.itemCode)
                        });
                        c.on("click", ".j-detail-reviews .reviews-picture a", function() {
                            a.ga && a.ga("send", "event", "MPU", "raterevtop")
                        });
                        c.on("click", ".j-reviewImgBtn img", function() {
                            a.ga && a.ga("send", "event", "MPU", "revphoto")
                        });
                        c.on("click", ".j-detail-reviews .reviews-star a", function() {
                            a.ga && a.ga("send", "event", "MPU", "allrevtop")
                        });
                        c.on("click", ".j-detail-reviews .allreviews", function() {
                            a.ga && a.ga("send", "event", "MPU", "allrevtop")
                        })
                    })();
                    N.init({
                        loadScriptUrl: "//www.dhresource.com/dhs/fob/js/common/track/dhta.js",
                        loadScriptSuccess: function() {
                            try {
                                var a = location.hash,
                                    c = "",
                                    d = "",
                                    e = "",
                                    f;
                                "" != a && null != a && (a = a.substr(1), f = a.split("-"), c = f[0], d = f[1], e = f[2]);
                                _dhq.push(["setVar", "pic", b.itemCode]);
                                _dhq.push(["setVar", "clkloc", c]);
                                _dhq.push(["setVar", "pos", d]);
                                _dhq.push(["setVar", "type", e]);
                                _dhq.push(["setVar", "cid", b.cateDispId]);
                                _dhq.push(["setVar", "supplierid", b.supplierid]);
                                _dhq.push(["setVar", "catepubid", b.catepubid]);
                                _dhq.push(["setVar", "pt", "prodet"]);
                                _dhq.push(["setVar", "site", "wap"]);
                                _dhq.push(["setVar", "lang", h.countryCur]);
                                _dhq.push(["event", "Item_U0001"])
                            } catch (ja) {}
                        }
                    }).loadScript();
                    (function() {
                        try {
                            var a = document.createElement("div"),
                                c = document.createElement("img"),
                                d = {
                                    ET: "Item",
                                    BuyerPro: h.buyerType,
                                    PageType: "product",
                                    ProdID: b.itemCode,
                                    Pname1: b.firstCateName,
                                    Pname: b.secondCateName,
                                    Pname2: b.thirdCateName
                                },
                                e = "&random=" + (new Date).getTime(),
                                f = "",
                                g;
                            for (g in d) f += g + "=" + d[g] + ";";
                            f = f.replace(/\;*$/g, "");
                            a.style.display = "inline";
                            c.setAttribute("width", "1px");
                            c.setAttribute("height", "1px");
                            c.style.borderStyle = "none";
                            c.src = "//googleads.g.doubleclick.net/pagead/viewthroughconversion/972936895/?value=1.000000&label=3Q1ACNGm3gIQv633zwM&guid=ON&script=0&hl=en&bg=666666&fmt=3&url=" + encodeURIComponent(location.href) + "&data=" + encodeURIComponent(f) + e;
                            c.onload = function() {
                                return !1
                            };
                            a.appendChild(c);
                            document.getElementsByTagName("body")[0].appendChild(a)
                        } catch (ka) {}
                    })();
                    (function() {
                        try {
                            a._caq = a._caq || [];
                            var b = document.createElement("script");
                            b.type = "text/javascript";
                            b.async = !0;
                            b.id = "_casrc";
                            b.src = "//t.channeladvisor.com/v2/12016266.js";
                            var c = document.getElementsByTagName("script")[0];
                            c.parentNode.insertBefore(b, c)
                        } catch (ha) {}
                    })();
                    (function() {
                        try {
                            !
                                function(a, b, c, d, e, f, g) {
                                    a.fbq || (e = a.fbq = function() {
                                        e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments)
                                    }, a._fbq || (a._fbq = e), e.push = e, e.loaded = !0, e.version = "2.0", e.queue = [], f = b.createElement(c), f.async = !0, f.src = d, g = b.getElementsByTagName(c)[0], g.parentNode.insertBefore(f, g))
                                }(a, document, "script", "//connect.facebook.net/en_US/fbevents.js");
                            var c;
                            "" !== b.displayPrice && (c = !0 !== b.displayPrice.isEqual ? b.displayPrice.minPrice + " - " + b.displayPrice.maxPrice : b.displayPrice.minPrice);
                            fbq("init", "900687856656318");
                            fbq("track", "ViewContent", {
                                content_name: function(a) {
                                    var b = {
                                        lt: "<",
                                        gt: ">",
                                        nbsp: " ",
                                        amp: "&",
                                        quot: '"',
                                        apos: "'"
                                    };
                                    return a.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(a, c) {
                                        return b[c]
                                    })
                                }(b.productName),
                                content_category: b.cateDispPath && b.cateDispPath.join(" > "),
                                content_ids: [b.itemCode.toString()],
                                content_type: "product",
                                value: c,
                                currency: "USD"
                            })
                        } catch (fa) {}
                    })();
                    (function() {
                        var c, d, e;
                        "" !== b.displayPrice && (c = !0 !== b.displayPrice.isEqual ? b.displayPrice.minPrice + " - " + b.displayPrice.maxPrice : b.displayPrice.minPrice);
                        "" !== b.deletePrice && (d = !0 !== b.deletePrice.isEqual ? b.deletePrice.minPrice + " - " + b.deletePrice.maxPrice : b.deletePrice.minPrice);
                        e = !1 === b.istate || !1 === b.isShipto ? parseInt((new Date).getTime() / 1E3) : "0";
                        a.product = {
                            identifier: b.itemCode.toString(),
                            category: b.cateDispPath,
                            fn: b.productName,
                            description: b.shortDescription,
                            brand: "",
                            price: c,
                            amount: d,
                            currency: "USD",
                            url: h.wwwURL + h.wwwPATHNAME + h.wwwSEARCH,
                            photo: b.thumbList[0],
                            valid: e
                        };
                        c = document.createElement("script");
                        d = document.getElementsByTagName("script")[0];
                        c.type = "text/javascript";
                        c.async = !0;
                        c.src = ("https:" == document.location.protocol ? "https://" : "http://") + "us-sonar.sociomantic.com/js/2010-07-01/adpan/dhgate-us-m";
                        d.parentNode.insertBefore(c, d)
                    })();
                    (function() {
                        a.goog_snippet_vars = function() {
                            a.google_conversion_id = 976524527;
                            a.google_conversion_label = "gGsMCM7h4GgQ76nS0QM";
                            a.google_remarketing_only = !1
                        };
                        a.goog_report_conversion = function(b) {
                            a.goog_snippet_vars();
                            a.google_conversion_format = "3";
                            var c = {
                                    onload_callback: function() {
                                        "undefined" != typeof b && (a.location = b)
                                    }
                                },
                                d = a.google_trackConversion;
                            "function" == typeof d && d(c)
                        };
                        (function() {
                            var a = document.createElement("script"),
                                b = document.getElementsByTagName("script")[0];
                            a.type = "text/javascript";
                            a.async = !0;
                            a.src = "//www.googleadservices.com/pagead/conversion_async.js";
                            b.parentNode.insertBefore(a, b)
                        })()
                    })();
                    (function() {
                        var c;
                        c = !1 === b.istate || !1 === b.isShipto ? "0" : "1";
                        try {
                            a.rtgsettings = {
                                pdt_id: b.itemCode.toString(),
                                pdt_sku: "$pdt_sku$",
                                pdt_name: b.productName,
                                pdt_price: b.displayPrice.minPrice,
                                pdt_amount: b.deletePrice.minPrice || "",
                                pdt_currency: "USD",
                                pdt_url: a.location.href,
                                pdt_photo: b.oriImgList.length && b.oriImgList[0],
                                pdt_instock: c,
                                pdt_expdate: "$pdt_expdate$",
                                pdt_category_list: b.cateDispId,
                                pdt_smalldescription: b.shortDescription,
                                pagetype: "product",
                                key: "DIR",
                                token: "dhglobal_glb",
                                layer: "iframe"
                            };
                            c = document;
                            var d = c.createElement("script");
                            d.async = !0;
                            d.id = "madv2014rtg";
                            d.type = "text/javascript";
                            d.src = ("https:" == c.location.protocol ? "https:" : "http:") + "//www.mainadv.com/Visibility/Rtgdir2-min.js";
                            var e = c.getElementsByTagName("script")[0];
                            e.parentNode.insertBefore(d, e)
                        } catch (ia) {}
                    })();
                    (function() {
                        N.init({
                            loadScriptUrl: "//www.directmail.dhgate.com/script/ga.js?grid=uBFoHVCpY",
                            loadScriptSuccess: function() {
                                a.gaSetUserId && a.gaSetUserId("");
                                a._paqEventPush = function(b) {
                                    a._paq.push(["setCustomUrl", b]);
                                    a._paq.push(["trackPageView"])
                                };
                                a._paqEventPush("https://dhgate.com/page/products/" + h.countryCur + "-wap")
                            }
                        }).loadScript()
                    })();
                    "y" !== $.cookie("__dh_pwa_a2hs__") && "en" === h.countryCur &&
                    function(a) {
                        var b = document,
                            c, d = b.createElement("script"),
                            b = b.head || b.getElementsByTagName("head")[0],
                            e = {
                                src: "//gateway.answerscloud.com/dhgate/production/gateway.min.js",
                                type: "text/javascript",
                                async: "true",
                                "data-vendor": "acs",
                                "data-role": "gateway"
                            },
                            f;
                        for (f in e) d.setAttribute(f, e[f]);
                        b.appendChild(d);
                        a.acsReady = function() {
                            var b = Array.prototype.slice.call(arguments, 0),
                                d = setInterval(function() {
                                    if ("function" === typeof a.__acsReady__) for (clearInterval(d), c = 0; c < b.length; c++) a.__acsReady__.call(a, function(a) {
                                        return function() {
                                            setTimeout(a, 1)
                                        }
                                    }(b[c]))
                                }, 50)
                        }
                    }(a);
                    (function() {
                        N.init({
                            loadScriptUrl: "//static.criteo.net/js/ld/ld.js",
                            loadScriptSuccess: function() {
                                var c, d = $.cookie("b2b_ip_country");
                                c = 21841;
                                $.each([{
                                    country: "US",
                                    partnerId: "21841"
                                }, {
                                    country: "UK",
                                    partnerId: "21843"
                                }, {
                                    country: "SE",
                                    partnerId: "21844"
                                }, {
                                    country: "RU",
                                    partnerId: "21873"
                                }, {
                                    country: "NZ",
                                    partnerId: "21874"
                                }, {
                                    country: "NO",
                                    partnerId: "21875"
                                }, {
                                    country: "NL",
                                    partnerId: "21876"
                                }, {
                                    country: "IT",
                                    partnerId: "44275"
                                }, {
                                    country: "FR",
                                    partnerId: "44273"
                                }, {
                                    country: "FI",
                                    partnerId: "21879"
                                }, {
                                    country: "ES",
                                    partnerId: "44272"
                                }, {
                                    country: "DK",
                                    partnerId: "21881"
                                }, {
                                    country: "DE",
                                    partnerId: "44274"
                                }, {
                                    country: "CL",
                                    partnerId: "21883"
                                }, {
                                    country: "CA",
                                    partnerId: "21884"
                                }, {
                                    country: "BR",
                                    partnerId: "21885"
                                }, {
                                    country: "AU",
                                    partnerId: "21887"
                                }, {
                                    country: "AR",
                                    partnerId: "21888"
                                }, {
                                    country: "PT",
                                    partnerId: "44195"
                                }], function(a, b) {
                                    d && d.toUpperCase() === b.country && (c = b.partnerId)
                                });
                                try {
                                    a.criteo_q = a.criteo_q || [], a.criteo_q.push({
                                        event: "setAccount",
                                        account: c
                                    }, {
                                        event: "setHashedEmail",
                                        email: ""
                                    }, {
                                        event: "setSiteType",
                                        type: "m"
                                    }, {
                                        event: "viewItem",
                                        item: b.itemCode.toString()
                                    })
                                } catch (ha) {}
                            }
                        }).loadScript()
                    })()
                })(window, b)
            }
        })
    })
});