/*!
 * Valine v1.4.16
 * (c) 2017-2021 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2021-10-19 6:07:44 ├F10: PM┤
 * Modify by HCLonely
 */
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t();
}(this, function () {
  return n = [function (e, t, n) {
    "use strict";

    var d = SyntaxError,
      r = Function,
      f = TypeError,
      o = function (e) {
        try {
          return r('"use strict"; return (' + e + ").constructor;")();
        } catch (e) {}
      },
      h = Object.getOwnPropertyDescriptor;
    if (h) try {
      h({}, "");
    } catch (e) {
      h = null;
    }
    function i() {
      throw new f();
    }
    function g(e) {
      var t, n;
      return "%AsyncFunction%" === e ? t = o("async function () {}") : "%GeneratorFunction%" === e ? t = o("function* () {}") : "%AsyncGeneratorFunction%" === e ? t = o("async function* () {}") : "%AsyncGenerator%" === e ? (n = g("%AsyncGeneratorFunction%")) && (t = n.prototype) : "%AsyncIteratorPrototype%" === e && (n = g("%AsyncGenerator%")) && (t = l(n.prototype)), m[e] = t;
    }
    var a = h ? function () {
        try {
          return i;
        } catch (e) {
          try {
            return h(arguments, "callee").get;
          } catch (e) {
            return i;
          }
        }
      }() : i,
      s = n(22)(),
      l = Object.getPrototypeOf || function (e) {
        return e.__proto__;
      },
      v = {},
      c = "undefined" == typeof Uint8Array ? void 0 : l(Uint8Array),
      m = {
        "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "%ArrayIteratorPrototype%": s ? l([][Symbol.iterator]()) : void 0,
        "%AsyncFromSyncIteratorPrototype%": void 0,
        "%AsyncFunction%": v,
        "%AsyncGenerator%": v,
        "%AsyncGeneratorFunction%": v,
        "%AsyncIteratorPrototype%": v,
        "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
        "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
        "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
        "%Function%": r,
        "%GeneratorFunction%": v,
        "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": s ? l(l([][Symbol.iterator]())) : void 0,
        "%JSON%": "object" == typeof JSON ? JSON : void 0,
        "%Map%": "undefined" == typeof Map ? void 0 : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && s ? l(new Map()[Symbol.iterator]()) : void 0,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
        "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" == typeof Set ? void 0 : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && s ? l(new Set()[Symbol.iterator]()) : void 0,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": s ? l(""[Symbol.iterator]()) : void 0,
        "%Symbol%": s ? Symbol : void 0,
        "%SyntaxError%": d,
        "%ThrowTypeError%": a,
        "%TypedArray%": c,
        "%TypeError%": f,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
        "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
        "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
      },
      y = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      },
      s = n(9),
      b = n(25),
      w = s.call(Function.call, Array.prototype.concat),
      x = s.call(Function.apply, Array.prototype.splice),
      k = s.call(Function.call, String.prototype.replace),
      S = s.call(Function.call, String.prototype.slice),
      _ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      A = /\\(\\)?/g;
    e.exports = function (e, t) {
      if ("string" != typeof e || 0 === e.length) throw new f("intrinsic name must be a non-empty string");
      if (1 < arguments.length && "boolean" != typeof t) throw new f('"allowMissing" argument must be a boolean');
      var n = function (e) {
          var t = S(e, 0, 1),
            n = S(e, -1);
          if ("%" === t && "%" !== n) throw new d("invalid intrinsic syntax, expected closing `%`");
          if ("%" === n && "%" !== t) throw new d("invalid intrinsic syntax, expected opening `%`");
          var o = [];
          return k(e, _, function (e, t, n, r) {
            o[o.length] = n ? k(r, A, "$1") : t || e;
          }), o;
        }(e),
        r = 0 < n.length ? n[0] : "",
        o = function (e, t) {
          var n,
            r = e;
          if (b(y, r) && (r = "%" + (n = y[r])[0] + "%"), b(m, r)) {
            var o = m[r];
            if (void 0 !== (o = o === v ? g(r) : o) || t) return {
              alias: n,
              name: r,
              value: o
            };
            throw new f("intrinsic " + e + " exists, but is not available. Please file an issue!");
          }
          throw new d("intrinsic " + e + " does not exist!");
        }("%" + r + "%", t),
        i = (o.name, o.value),
        a = !1,
        o = o.alias;
      o && (r = o[0], x(n, w([0, 1], o)));
      for (var s = 1, l = !0; s < n.length; s += 1) {
        var c = n[s],
          u = S(c, 0, 1),
          p = S(c, -1);
        if (('"' === u || "'" === u || "`" === u || '"' === p || "'" === p || "`" === p) && u !== p) throw new d("property names with quotes must have matching quotes");
        if ("constructor" !== c && l || (a = !0), b(m, u = "%" + (r += "." + c) + "%")) i = m[u];else if (null != i) {
          if (!(c in i)) {
            if (t) return;
            throw new f("base intrinsic for " + e + " exists, but the property is not available.");
          }
          i = h && s + 1 >= n.length ? (l = !!(p = h(i, c))) && "get" in p && !("originalValue" in p.get) ? p.get : i[c] : (l = b(i, c), i[c]), l && !a && (m[u] = i);
        }
      }
      return i;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
      o = n(4),
      i = o(r("String.prototype.indexOf"));
    e.exports = function (e, t) {
      t = r(e, !!t);
      return "function" == typeof t && -1 < i(e, ".prototype.") ? o(t) : t;
    };
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = 2 < arguments.length ? arguments[2] : {},
        r = c(t);
      u && (r = p.call(r, Object.getOwnPropertySymbols(t)));
      for (var o, i, a, s, l = 0; l < r.length; l += 1) o = e, i = r[l], a = t[r[l]], s = n[r[l]], i in o && (!f(s) || !s()) || (h ? d(o, i, {
        configurable: !0,
        enumerable: !1,
        value: a,
        writable: !0
      }) : o[i] = a);
    }
    var c = n(99),
      u = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
      o = Object.prototype.toString,
      p = Array.prototype.concat,
      d = Object.defineProperty,
      f = function (e) {
        return "function" == typeof e && "[object Function]" === o.call(e);
      },
      h = d && function () {
        var e = {};
        try {
          for (var t in d(e, "x", {
            enumerable: !1,
            value: e
          }), e) return !1;
          return e.x === e;
        } catch (e) {
          return !1;
        }
      }();
    r.supportsDescriptors = !!h, e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    t.__esModule = !0;
    var o,
      i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
      a = r(n(96)),
      s = r(n(56)),
      l = r(n(52)),
      c = r(n(55)),
      n = r(n(51)),
      u = document,
      p = navigator,
      d = /[&<>"'`\\]/g,
      f = RegExp(d.source),
      h = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
      g = RegExp(h.source),
      v = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#x60;",
        "\\": "&#x5c;"
      },
      m = {};
    for (o in v) m[v[o]] = o;
    var y = null;
    Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
      var n, r;
      if (null == this) throw new TypeError(" this is null or not defined");
      var o,
        i = Object(this),
        a = i.length >>> 0;
      if ("function" != typeof e) throw new TypeError(e + " is not a function");
      for (1 < arguments.length && (n = t), r = 0; r < a;) r in i && (o = i[r], e.call(n, o, r, i)), r++;
    }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), String.prototype.trim || (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }), (0, a.default)(s.default.fn, {
      prepend: function (t) {
        return t instanceof HTMLElement || (t = t[0]), this.forEach(function (e) {
          e.insertAdjacentElement("afterBegin", t);
        }), this;
      },
      append: function (t) {
        return t instanceof HTMLElement || (t = t[0]), this.forEach(function (e) {
          e.insertAdjacentElement("beforeEnd", t);
        }), this;
      },
      remove: function () {
        return this.forEach(function (e) {
          try {
            e.parentNode.removeChild(e);
          } catch (e) {}
        }), this;
      },
      find: function (e) {
        return (0, s.default)(e, this);
      },
      show: function () {
        return this.forEach(function (e) {
          e.style.display = "block";
        }), this;
      },
      hide: function () {
        return this.forEach(function (e) {
          e.style.display = "none";
        }), this;
      },
      on: function (e, n, r) {
        return s.default.fn.off(e, n, r), this.forEach(function (t) {
          e.split(" ").forEach(function (e) {
            t.addEventListener ? t.addEventListener(e, n, r || !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
          });
        }), this;
      },
      off: function (e, n, r) {
        return this.forEach(function (t) {
          e.split(" ").forEach(function (e) {
            t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
          });
        }), this;
      },
      html: function (t) {
        return void 0 !== t ? (this.forEach(function (e) {
          e.innerHTML = t;
        }), this) : this[0].innerHTML;
      },
      text: function (t) {
        return void 0 !== t ? (this.forEach(function (e) {
          e.innerText = t;
        }), this) : this[0].innerText;
      },
      empty: function (e) {
        return e = e || 0, this.forEach(function (t) {
          setTimeout(function (e) {
            t.innerText = "";
          }, e);
        }), this;
      },
      val: function (t) {
        return void 0 !== t ? (this.forEach(function (e) {
          e.value = t;
        }), this) : this[0].value || "";
      },
      attr: function () {
        var n,
          e,
          t = arguments;
        return "object" == i(arguments[0]) ? (n = arguments[0], e = this, Object.keys(n).forEach(function (t) {
          e.forEach(function (e) {
            e.setAttribute(t, n[t]);
          });
        }), this) : "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) || "" : (this.forEach(function (e) {
          e.setAttribute(t[0], t[1]);
        }), this);
      },
      removeAttr: function (o) {
        return this.forEach(function (e) {
          var t,
            n = 0,
            r = o && o.match(/[^\x20\t\r\n\f\*\/\\]+/g);
          if (r && 1 === e.nodeType) for (; t = r[n++];) e.removeAttribute(t);
        }), this;
      },
      hasClass: function (e) {
        return !!this[0] && new RegExp("(\\s|^)" + e + "(\\s|$)").test(this[0].getAttribute("class"));
      },
      addClass: function (n) {
        return this.forEach(function (e) {
          var e = (0, s.default)(e),
            t = e.attr("class");
          e.hasClass(n) || e.attr("class", t += " " + n);
        }), this;
      },
      removeClass: function (r) {
        return this.forEach(function (e) {
          var t,
            e = (0, s.default)(e),
            n = e.attr("class");
          e.hasClass(r) && (t = new RegExp("(\\s|^)" + r + "(\\s|$)"), e.attr("class", n.replace(t, "")));
        }), this;
      }
    }), (0, a.default)(s.default, {
      extend: a.default,
      noop: function () {},
      navi: p,
      ua: p.userAgent,
      lang: p.language || p.languages[0],
      detect: l.default,
      store: c.default,
      escape: function (e) {
        return e && f.test(e) ? e.replace(d, function (e) {
          return v[e];
        }) : e;
      },
      unescape: function (e) {
        return e && g.test(e) ? e.replace(h, function (e) {
          return m[e];
        }) : e;
      },
      dynamicLoadSource: function (e, t) {
        var n;
        (0, s.default)('script[src="' + e + '"]').length ? t && t() : ((n = u.createElement("script")).onload = n.onreadystatechange = function () {
          this.onload = this.onreadystatechange = null, t && t(), (0, s.default)(n).remove();
        }, n.async = !0, n.setAttribute("referrerPolicy", "no-referrer"), (0, s.default)("head")[0].appendChild(n), n.src = e);
      },
      sdkLoader: function (e, t, n) {
        t in window && window[t] ? (y && clearTimeout(y), n && n()) : s.default.dynamicLoadSource(e, function () {
          y = setTimeout(s.default.sdkLoader(e, t, n), 100);
        });
      },
      deleteInWin: function (t, e) {
        function n(e) {
          if (t in window) try {
            delete window[t];
          } catch (e) {
            window[t] = null;
          }
        }
        0 === e ? n() : setTimeout(n, e || 500);
      },
      ajax: n.default
    }), t.default = s.default;
  }, function (e, t, n) {
    "use strict";

    var r = n(9),
      n = n(0),
      o = n("%Function.prototype.apply%"),
      i = n("%Function.prototype.call%"),
      a = n("%Reflect.apply%", !0) || r.call(i, o),
      s = n("%Object.getOwnPropertyDescriptor%", !0),
      l = n("%Object.defineProperty%", !0),
      c = n("%Math.max%");
    if (l) try {
      l({}, "a", {
        value: 1
      });
    } catch (e) {
      l = null;
    }
    e.exports = function (e) {
      var t = a(r, i, arguments);
      return s && l && s(t, "length").configurable && l(t, "length", {
        value: 1 + c(0, e.length - (arguments.length - 1))
      }), t;
    };
    function u() {
      return a(r, o, arguments);
    }
    l ? l(e.exports, "apply", {
      value: u
    }) : e.exports.apply = u;
  }, function (e, t, n) {
    "use strict";

    e.exports = n(69);
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0, t.DEFAULT_EMOJI_CDN = "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/", t.DB_NAME = "Comment", t.CONFIG = {
      lang: "zh-CN",
      langMode: null,
      appId: "",
      appKey: "",
      clazzName: "Comment",
      master: [],
      friends: [],
      tagMeta: ["\u535a\u4e3b", "\u5c0f\u4f19\u4f34", "\u8bbf\u5ba2"],
      metaPlaceholder: {
        nick: "\u6635\u79f0/QQ\u53f7(\u5fc5\u586b)",
        mail: "\u90ae\u7bb1(\u5fc5\u586b)",
        link: "\u7f51\u5740(https://)"
      },
      meta: ["nick", "mail", "link"],
      path: location.pathname,
      placeholder: "Just Go Go",
      pageSize: 10,
      recordIP: !0,
      serverURLs: "",
      visitor: !1,
      mathJax: !1,
      emojiCDN: "",
      emojiMaps: void 0,
      enableQQ: !1,
      requiredFields: []
    }, t.defaultMeta = ["nick", "mail", "link"], t.QQCacheKey = "_v_Cache_Q", t.MetaCacheKey = "_v_Cache_Meta", t.RandomStr = function (e) {
      return (Date.now() + Math.round(1e3 * Math.random())).toString(32);
    }, t.VERSION = "1.4.16";
  }, function (e, t, n) {
    var r,
      o = n(16),
      i = n(57);
    for (r in (t = e.exports = function (e, t) {
      return new i(t).process(e);
    }).FilterCSS = i, o) t[r] = o[r];
    "undefined" != typeof window && (window.filterCSS = e.exports);
  }, function (e, t, n) {
    "use strict";

    var r = n(73);
    e.exports = function (e) {
      return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : r(e);
    };
  }, function (e, t, n) {
    "use strict";

    n = n(85);
    e.exports = Function.prototype.bind || n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return s[e];
    }
    function o(e) {
      return l[e];
    }
    function i(e) {
      return null == e ? "" : String(e).replace(u, r);
    }
    function a(e) {
      return null == e ? "" : String(e).replace(c, o);
    }
    var s = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      },
      l = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      },
      c = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
      u = /[&<>"']/g;
    i.options = a.options = {}, e.exports = {
      encode: i,
      escape: i,
      decode: a,
      unescape: a,
      version: "1.0.0-browser"
    };
  }, function (e, t, n) {
    "use strict";

    var r,
      o,
      i = Function.prototype.toString,
      a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
    if ("function" == typeof a && "function" == typeof Object.defineProperty) try {
      r = Object.defineProperty({}, "length", {
        get: function () {
          throw o;
        }
      }), o = {}, a(function () {
        throw 42;
      }, null, r);
    } catch (e) {
      e !== o && (a = null);
    } else a = null;
    function s(e) {
      try {
        var t = i.call(e);
        return l.test(t);
      } catch (e) {
        return;
      }
    }
    var l = /^\s*class\b/,
      c = Object.prototype.toString,
      u = "function" == typeof Symbol && !!Symbol.toStringTag,
      p = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
    e.exports = a ? function (e) {
      if (e === p) return !0;
      if (!e) return !1;
      if ("function" != typeof e && "object" != typeof e) return !1;
      if ("function" == typeof e && !e.prototype) return !0;
      try {
        a(e, null, r);
      } catch (e) {
        if (e !== o) return !1;
      }
      return !s(e);
    } : function (e) {
      if (e === p) return !0;
      if (!e) return !1;
      if ("function" != typeof e && "object" != typeof e) return !1;
      if ("function" == typeof e && !e.prototype) return !0;
      if (!u) {
        if (s(e)) return !1;
        var t = c.call(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t;
      }
      var n = e;
      try {
        return !s(n) && (i.call(n), !0);
      } catch (n) {
        return !1;
      }
    };
  }, function (e, t) {
    e.exports = {
      indexOf: function (e, t) {
        var n, r;
        if (Array.prototype.indexOf) return e.indexOf(t);
        for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      forEach: function (e, t, n) {
        var r, o;
        if (Array.prototype.forEach) return e.forEach(t, n);
        for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
      },
      trim: function (e) {
        return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
      },
      spaceIndex: function (e) {
        e = /\s|\n|\t/.exec(e);
        return e ? e.index : -1;
      }
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var o = {
      cdn: n(6).DEFAULT_EMOJI_CDN,
      maps: n(108),
      parse: function (e, n) {
        return String(e).replace(new RegExp(":(" + Object.keys(o.maps).join("|") + "):", "ig"), function (e, t) {
          return o.maps[t] ? o.build(t, n) : e;
        });
      },
      build: function (e, t) {
        var n = /^(https?:)?\/\//i,
          r = o.maps[e],
          r = n.test(r) ? r : o.cdn + r,
          e = ' <img alt="' + e + '" referrerpolicy="no-referrer" class="vemoji" src="' + r + '" />';
        return n.test(r) ? e : "";
      }
    };
    t.default = o;
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
      o = n(1),
      s = r("%TypeError%"),
      l = n(59),
      c = n(18),
      u = n(60),
      p = n(62),
      d = n(63),
      f = n(67),
      h = n(20),
      g = n(92),
      v = o("String.prototype.split"),
      r = Object("a"),
      m = "a" !== r[0] || !(0 in r);
    e.exports = function (e) {
      var t,
        n = f(this),
        r = m && g(this) ? v(this, "") : n,
        o = d(r);
      if (!p(e)) throw new s("Array.prototype.forEach callback must be a function");
      1 < arguments.length && (t = arguments[1]);
      for (var i = 0; i < o;) {
        var a = h(i);
        u(r, a) && (a = c(r, a), l(e, t, [a, i, r])), i += 1;
      }
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(82),
      o = n(14);
    e.exports = function () {
      var e = Array.prototype.forEach;
      return r(e) ? e : o;
    };
  }, function (e, t) {
    function n() {
      var e = {
        "align-content": !1,
        "align-items": !1,
        "align-self": !1,
        "alignment-adjust": !1,
        "alignment-baseline": !1,
        all: !1,
        "anchor-point": !1,
        animation: !1,
        "animation-delay": !1,
        "animation-direction": !1,
        "animation-duration": !1,
        "animation-fill-mode": !1,
        "animation-iteration-count": !1,
        "animation-name": !1,
        "animation-play-state": !1,
        "animation-timing-function": !1,
        azimuth: !1,
        "backface-visibility": !1,
        background: !0,
        "background-attachment": !0,
        "background-clip": !0,
        "background-color": !0,
        "background-image": !0,
        "background-origin": !0,
        "background-position": !0,
        "background-repeat": !0,
        "background-size": !0,
        "baseline-shift": !1,
        binding: !1,
        bleed: !1,
        "bookmark-label": !1,
        "bookmark-level": !1,
        "bookmark-state": !1,
        border: !0,
        "border-bottom": !0,
        "border-bottom-color": !0,
        "border-bottom-left-radius": !0,
        "border-bottom-right-radius": !0,
        "border-bottom-style": !0,
        "border-bottom-width": !0,
        "border-collapse": !0,
        "border-color": !0,
        "border-image": !0,
        "border-image-outset": !0,
        "border-image-repeat": !0,
        "border-image-slice": !0,
        "border-image-source": !0,
        "border-image-width": !0,
        "border-left": !0,
        "border-left-color": !0,
        "border-left-style": !0,
        "border-left-width": !0,
        "border-radius": !0,
        "border-right": !0,
        "border-right-color": !0,
        "border-right-style": !0,
        "border-right-width": !0,
        "border-spacing": !0,
        "border-style": !0,
        "border-top": !0,
        "border-top-color": !0,
        "border-top-left-radius": !0,
        "border-top-right-radius": !0,
        "border-top-style": !0,
        "border-top-width": !0,
        "border-width": !0,
        bottom: !1,
        "box-decoration-break": !0,
        "box-shadow": !0,
        "box-sizing": !0,
        "box-snap": !0,
        "box-suppress": !0,
        "break-after": !0,
        "break-before": !0,
        "break-inside": !0,
        "caption-side": !1,
        chains: !1,
        clear: !0,
        clip: !1,
        "clip-path": !1,
        "clip-rule": !1,
        color: !0,
        "color-interpolation-filters": !0,
        "column-count": !1,
        "column-fill": !1,
        "column-gap": !1,
        "column-rule": !1,
        "column-rule-color": !1,
        "column-rule-style": !1,
        "column-rule-width": !1,
        "column-span": !1,
        "column-width": !1,
        columns: !1,
        contain: !1,
        content: !1,
        "counter-increment": !1,
        "counter-reset": !1,
        "counter-set": !1,
        crop: !1,
        cue: !1,
        "cue-after": !1,
        "cue-before": !1,
        cursor: !1,
        direction: !1,
        display: !0,
        "display-inside": !0,
        "display-list": !0,
        "display-outside": !0,
        "dominant-baseline": !1,
        elevation: !1,
        "empty-cells": !1,
        filter: !1,
        flex: !1,
        "flex-basis": !1,
        "flex-direction": !1,
        "flex-flow": !1,
        "flex-grow": !1,
        "flex-shrink": !1,
        "flex-wrap": !1,
        float: !1,
        "float-offset": !1,
        "flood-color": !1,
        "flood-opacity": !1,
        "flow-from": !1,
        "flow-into": !1,
        font: !0,
        "font-family": !0,
        "font-feature-settings": !0,
        "font-kerning": !0,
        "font-language-override": !0,
        "font-size": !0,
        "font-size-adjust": !0,
        "font-stretch": !0,
        "font-style": !0,
        "font-synthesis": !0,
        "font-variant": !0,
        "font-variant-alternates": !0,
        "font-variant-caps": !0,
        "font-variant-east-asian": !0,
        "font-variant-ligatures": !0,
        "font-variant-numeric": !0,
        "font-variant-position": !0,
        "font-weight": !0,
        grid: !1,
        "grid-area": !1,
        "grid-auto-columns": !1,
        "grid-auto-flow": !1,
        "grid-auto-rows": !1,
        "grid-column": !1,
        "grid-column-end": !1,
        "grid-column-start": !1,
        "grid-row": !1,
        "grid-row-end": !1,
        "grid-row-start": !1,
        "grid-template": !1,
        "grid-template-areas": !1,
        "grid-template-columns": !1,
        "grid-template-rows": !1,
        "hanging-punctuation": !1,
        height: !0,
        hyphens: !1,
        icon: !1,
        "image-orientation": !1,
        "image-resolution": !1,
        "ime-mode": !1,
        "initial-letters": !1,
        "inline-box-align": !1,
        "justify-content": !1,
        "justify-items": !1,
        "justify-self": !1,
        left: !1,
        "letter-spacing": !0,
        "lighting-color": !0,
        "line-box-contain": !1,
        "line-break": !1,
        "line-grid": !1,
        "line-height": !1,
        "line-snap": !1,
        "line-stacking": !1,
        "line-stacking-ruby": !1,
        "line-stacking-shift": !1,
        "line-stacking-strategy": !1,
        "list-style": !0,
        "list-style-image": !0,
        "list-style-position": !0,
        "list-style-type": !0,
        margin: !0,
        "margin-bottom": !0,
        "margin-left": !0,
        "margin-right": !0,
        "margin-top": !0,
        "marker-offset": !1,
        "marker-side": !1,
        marks: !1,
        mask: !1,
        "mask-box": !1,
        "mask-box-outset": !1,
        "mask-box-repeat": !1,
        "mask-box-slice": !1,
        "mask-box-source": !1,
        "mask-box-width": !1,
        "mask-clip": !1,
        "mask-image": !1,
        "mask-origin": !1,
        "mask-position": !1,
        "mask-repeat": !1,
        "mask-size": !1,
        "mask-source-type": !1,
        "mask-type": !1,
        "max-height": !0,
        "max-lines": !1,
        "max-width": !0,
        "min-height": !0,
        "min-width": !0,
        "move-to": !1,
        "nav-down": !1,
        "nav-index": !1,
        "nav-left": !1,
        "nav-right": !1,
        "nav-up": !1,
        "object-fit": !1,
        "object-position": !1,
        opacity: !1,
        order: !1,
        orphans: !1,
        outline: !1,
        "outline-color": !1,
        "outline-offset": !1,
        "outline-style": !1,
        "outline-width": !1,
        overflow: !1,
        "overflow-wrap": !1,
        "overflow-x": !1,
        "overflow-y": !1,
        padding: !0,
        "padding-bottom": !0,
        "padding-left": !0,
        "padding-right": !0,
        "padding-top": !0,
        page: !1,
        "page-break-after": !1,
        "page-break-before": !1,
        "page-break-inside": !1,
        "page-policy": !1,
        pause: !1,
        "pause-after": !1,
        "pause-before": !1,
        perspective: !1,
        "perspective-origin": !1,
        pitch: !1,
        "pitch-range": !1,
        "play-during": !1,
        position: !1,
        "presentation-level": !1,
        quotes: !1,
        "region-fragment": !1,
        resize: !1,
        rest: !1,
        "rest-after": !1,
        "rest-before": !1,
        richness: !1,
        right: !1,
        rotation: !1,
        "rotation-point": !1,
        "ruby-align": !1,
        "ruby-merge": !1,
        "ruby-position": !1,
        "shape-image-threshold": !1,
        "shape-outside": !1,
        "shape-margin": !1,
        size: !1,
        speak: !1,
        "speak-as": !1,
        "speak-header": !1,
        "speak-numeral": !1,
        "speak-punctuation": !1,
        "speech-rate": !1,
        stress: !1,
        "string-set": !1,
        "tab-size": !1,
        "table-layout": !1,
        "text-align": !0,
        "text-align-last": !0,
        "text-combine-upright": !0,
        "text-decoration": !0,
        "text-decoration-color": !0,
        "text-decoration-line": !0,
        "text-decoration-skip": !0,
        "text-decoration-style": !0,
        "text-emphasis": !0,
        "text-emphasis-color": !0,
        "text-emphasis-position": !0,
        "text-emphasis-style": !0,
        "text-height": !0,
        "text-indent": !0,
        "text-justify": !0,
        "text-orientation": !0,
        "text-overflow": !0,
        "text-shadow": !0,
        "text-space-collapse": !0,
        "text-transform": !0,
        "text-underline-position": !0,
        "text-wrap": !0,
        top: !1,
        transform: !1,
        "transform-origin": !1,
        "transform-style": !1,
        transition: !1,
        "transition-delay": !1,
        "transition-duration": !1,
        "transition-property": !1,
        "transition-timing-function": !1,
        "unicode-bidi": !1,
        "vertical-align": !1,
        visibility: !1,
        "voice-balance": !1,
        "voice-duration": !1,
        "voice-family": !1,
        "voice-pitch": !1,
        "voice-range": !1,
        "voice-rate": !1,
        "voice-stress": !1,
        "voice-volume": !1,
        volume: !1,
        "white-space": !1,
        widows: !1,
        width: !0,
        "will-change": !1,
        "word-break": !0,
        "word-spacing": !0,
        "word-wrap": !0,
        "wrap-flow": !1,
        "wrap-through": !1,
        "writing-mode": !1,
        "z-index": !1
      };
      return e;
    }
    var r = /javascript\s*\:/gim;
    t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = function (e, t, n) {}, t.onIgnoreAttr = function (e, t, n) {}, t.safeAttrValue = function (e, t) {
      return r.test(t) ? "" : t;
    };
  }, function (e, t) {
    e.exports = {
      indexOf: function (e, t) {
        var n, r;
        if (Array.prototype.indexOf) return e.indexOf(t);
        for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      forEach: function (e, t, n) {
        var r, o;
        if (Array.prototype.forEach) return e.forEach(t, n);
        for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
      },
      trim: function (e) {
        return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
      },
      trimRight: function (e) {
        return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
      }
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%TypeError%"),
      o = n(97),
      i = n(19),
      a = n(8);
    e.exports = function (e, t) {
      if ("Object" !== a(e)) throw new r("Assertion failed: Type(O) is not Object");
      if (i(t)) return e[t];
      throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + o(t));
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      return "string" == typeof e || "symbol" == typeof e;
    };
  }, function (e, t, n) {
    "use strict";

    var n = n(0),
      r = n("%String%"),
      o = n("%TypeError%");
    e.exports = function (e) {
      if ("symbol" == typeof e) throw new o("Cannot convert a Symbol value to a string");
      return r(e);
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      return null === e || "function" != typeof e && "object" != typeof e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = "undefined" != typeof Symbol && Symbol,
      o = n(23);
    e.exports = function () {
      return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && o();
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function () {
      if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
      if ("symbol" == typeof Symbol.iterator) return !0;
      var e = {},
        t = Symbol("test"),
        n = Object(t);
      if ("string" == typeof t) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
      for (t in e[t] = 42, e) return !1;
      if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
      if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
      n = Object.getOwnPropertySymbols(e);
      if (1 !== n.length || n[0] !== t) return !1;
      if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
      if ("function" == typeof Object.getOwnPropertyDescriptor) {
        n = Object.getOwnPropertyDescriptor(e, t);
        if (42 !== n.value || !0 !== n.enumerable) return !1;
      }
      return !0;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(23);
    e.exports = function () {
      return r() && !!Symbol.toStringTag;
    };
  }, function (e, t, n) {
    "use strict";

    n = n(9);
    e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
  }, function (e, t, n) {
    "use strict";

    n = n(29);
    e.exports = {
      uris: n(["background", "base", "cite", "href", "longdesc", "src", "usemap"])
    };
  }, function (e, t, n) {
    "use strict";

    n = n(29);
    e.exports = {
      voids: n(["area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta"])
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      return "string" == typeof e ? e.toLowerCase() : e;
    };
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      return e[t] = !0, e;
    }
    e.exports = function (e) {
      return e.reduce(r, {});
    };
  }, function (e, t, n) {
    "use strict";

    var r = Object.prototype.toString;
    e.exports = function (e) {
      var t = r.call(e);
      return "[object Arguments]" === t || "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Function]" === r.call(e.callee);
    };
  }, function (e, t, n) {
    "use strict";

    var o = n(5),
      n = n(1),
      i = n("Object.prototype.propertyIsEnumerable"),
      a = n("Array.prototype.push");
    e.exports = function (e) {
      var t,
        n = o(e),
        r = [];
      for (t in n) i(n, t) && a(r, [t, n[t]]);
      return r;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(31);
    e.exports = function () {
      return "function" == typeof Object.entries ? Object.entries : r;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(5),
      o = n(20),
      i = n(1)("String.prototype.replace"),
      a = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
      s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
    e.exports = function () {
      var e = o(r(this));
      return i(i(e, a, ""), s, "");
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(33);
    e.exports = function () {
      return String.prototype.trim && "\u200b" === "\u200b".trim() ? String.prototype.trim : r;
    };
  }, function (e, t, n) {
    function r() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
      };
    }
    function o(e) {
      return e.replace(v, "&lt;").replace(m, "&gt;");
    }
    function i(e) {
      return e.replace(y, "&quot;");
    }
    function a(e) {
      return e.replace(b, '"');
    }
    function s(e) {
      return e.replace(w, function (e, t) {
        return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10));
      });
    }
    function l(e) {
      return e.replace(x, ":").replace(k, " ");
    }
    function c(e) {
      for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
      return h.trim(t);
    }
    function u(e) {
      return c(e = l(e = s(e = a(e))));
    }
    function p(e) {
      return o(e = i(e));
    }
    var d = n(7).FilterCSS,
      f = n(7).getDefaultWhiteList,
      h = n(12),
      g = new d(),
      v = /</g,
      m = />/g,
      y = /"/g,
      b = /&quot;/g,
      w = /&#([a-zA-Z0-9]*);?/gim,
      x = /&colon;?/gim,
      k = /&newline;?/gim,
      S = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
      _ = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
      A = /u\s*r\s*l\s*\(.*/gi;
    t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = function (e, t, n) {}, t.onIgnoreTag = function (e, t, n) {}, t.onTagAttr = function (e, t, n) {}, t.onIgnoreTagAttr = function (e, t, n) {}, t.safeAttrValue = function (e, t, n, r) {
      if (n = u(n), "href" === t || "src" === t) {
        if ("#" === (n = h.trim(n))) return "#";
        if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "data:image/" !== n.substr(0, 11) && "ftp://" !== n.substr(0, 6) && "./" !== n.substr(0, 2) && "../" !== n.substr(0, 3) && "#" !== n[0] && "/" !== n[0]) return "";
      } else if ("background" === t) {
        if (S.lastIndex = 0, S.test(n)) return "";
      } else if ("style" === t) {
        if (_.lastIndex = 0, _.test(n)) return "";
        if (A.lastIndex = 0, A.test(n) && (S.lastIndex = 0, S.test(n))) return "";
        !1 !== r && (n = (r = r || g).process(n));
      }
      return p(n);
    }, t.escapeHtml = o, t.escapeQuote = i, t.unescapeQuote = a, t.escapeHtmlEntities = s, t.escapeDangerHtml5Entities = l, t.clearNonPrintableCharacter = c, t.friendlyAttrValue = u, t.escapeAttrValue = p, t.onIgnoreTagStripAll = function () {
      return "";
    }, t.StripTagBody = function (i, a) {
      "function" != typeof a && (a = function () {});
      var s = !Array.isArray(i),
        l = [],
        c = !1;
      return {
        onIgnoreTag: function (e, t, n) {
          var r, o;
          return o = e, s || -1 !== h.indexOf(i, o) ? n.isClosing ? (r = n.position + (o = "[/removed]").length, l.push([!1 !== c ? c : n.position, r]), c = !1, o) : (c = c || n.position, "[removed]") : a(e, t, n);
        },
        remove: function (t) {
          var n = "",
            r = 0;
          return h.forEach(l, function (e) {
            n += t.slice(r, e[0]), r = e[1];
          }), n += t.slice(r);
        }
      };
    }, t.stripCommentTag = function (e) {
      for (var t = "", n = 0; n < e.length;) {
        var r = e.indexOf("\x3c!--", n);
        if (-1 === r) {
          t += e.slice(n);
          break;
        }
        t += e.slice(n, r);
        r = e.indexOf("--\x3e", r);
        if (-1 === r) break;
        n = r + 3;
      }
      return t;
    }, t.stripBlankChar = function (e) {
      return e.split("").filter(function (e) {
        e = e.charCodeAt(0);
        return !(127 === e || e <= 31 && 10 !== e && 13 !== e);
      }).join("");
    }, t.cssFilter = g, t.getDefaultCSSWhiteList = f;
  }, function (e, t, n) {
    function u(e) {
      return '"' === (t = e)[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1] ? e.substr(1, e.length - 2) : e;
      var t;
    }
    var v = n(12),
      p = /[^a-zA-Z0-9_:\.\-]/gim;
    t.parseTag = function (e, t, n) {
      "use strict";

      var r,
        o,
        i,
        a = "",
        s = 0,
        l = !1,
        c = !1,
        u = 0,
        p = e.length,
        d = "";
      e: for (u = 0; u < p; u++) {
        var f = e.charAt(u);
        if (!1 === l) "<" === f && (l = u);else if (!1 === c) {
          if ("<" === f) a += n(e.slice(s, u)), s = l = u;else if (">" === f) a += n(e.slice(s, l)), r = e.slice(l, u + 1), o = r, i = void 0, i = v.spaceIndex(o), o = -1 === i ? o.slice(1, -1) : o.slice(1, i + 1), d = o = "/" === (o = "/" === (o = v.trim(o).toLowerCase()).slice(0, 1) ? o.slice(1) : o).slice(-1) ? o.slice(0, -1) : o, a += t(l, a.length, d, r, "</" === r.slice(0, 2)), s = u + 1, l = !1;else if ('"' === f || "'" === f) for (var h = 1, g = e.charAt(u - h); "" === g.trim() || "=" === g;) {
            if ("=" === g) {
              c = f;
              continue e;
            }
            g = e.charAt(u - ++h);
          }
        } else if (f === c) {
          c = !1;
          continue;
        }
      }
      return s < e.length && (a += n(e.substr(s))), a;
    }, t.parseAttr = function (e, n) {
      "use strict";

      function t(e, t) {
        (e = (e = v.trim(e)).replace(p, "").toLowerCase()).length < 1 || (e = n(e, t || "")) && o.push(e);
      }
      for (var r = 0, o = [], i = !1, a = e.length, s = 0; s < a; s++) {
        var l,
          c = e.charAt(s);
        if (!1 !== i || "=" !== c) {
          if (!1 === i || s !== r || '"' !== c && "'" !== c || "=" !== e.charAt(s - 1)) /\s|\n|\t/.test(c) && (e = e.replace(/\s|\n|\t/g, " "), !1 === i ? -1 === (l = function (e, t) {
            for (; t < e.length; t++) {
              var n = e[t];
              if (" " !== n) return "=" === n ? t : -1;
            }
          }(e, s)) ? (t(v.trim(e.slice(r, s))), i = !1, r = s + 1) : s = l - 1 : -1 === (l = function (e, t) {
            for (; 0 < t; t--) {
              var n = e[t];
              if (" " !== n) return "=" === n ? t : -1;
            }
          }(e, s - 1)) && (t(i, u(v.trim(e.slice(r, s)))), i = !1, r = s + 1));else {
            if (-1 === (l = e.indexOf(c, s + 1))) break;
            t(i, v.trim(e.slice(r + 1, l))), i = !1, r = (s = l) + 1;
          }
        } else i = e.slice(r, s), r = s + 1;
      }
      return r < e.length && (!1 === i ? t(e.slice(r)) : t(i, u(v.trim(e.slice(r))))), v.trim(o.join(" "));
    };
  }, function (e, t, n) {
    var r;
    /*!
    	autosize 4.0.4
    	license: MIT
    	http://www.jacklmoore.com/autosize
    */
    void 0 !== (t = "function" == typeof (r = function (e, t) {
      "use strict";

      function n(o) {
        function i(e) {
          var t = o.style.width;
          o.style.width = "0px", o.offsetWidth, o.style.width = t, o.style.overflowY = e;
        }
        function n(e) {
          for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
            node: e.parentNode,
            scrollTop: e.parentNode.scrollTop
          }), e = e.parentNode;
          return t;
        }
        function a() {
          if (0 !== o.scrollHeight) {
            var e = n(o),
              t = document.documentElement && document.documentElement.scrollTop;
            o.style.height = "", o.style.height = o.scrollHeight + s + "px", l = o.clientWidth, e.forEach(function (e) {
              e.node.scrollTop = e.scrollTop;
            }), t && (document.documentElement.scrollTop = t);
          }
        }
        function r() {
          a();
          var e = Math.round(parseFloat(o.style.height)),
            t = window.getComputedStyle(o, null),
            n = "content-box" === t.boxSizing ? Math.round(parseFloat(t.height)) : o.offsetHeight;
          if (n < e ? "hidden" === t.overflowY && (i("scroll"), a(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(o, null).height)) : o.offsetHeight) : "hidden" !== t.overflowY && (i("hidden"), a(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(o, null).height)) : o.offsetHeight), c !== n) {
            c = n;
            var r = d("autosize:resized");
            try {
              o.dispatchEvent(r);
            } catch (e) {}
          }
        }
        if (o && o.nodeName && "TEXTAREA" === o.nodeName && !p.has(o)) {
          var s = null,
            l = null,
            c = null,
            e = function () {
              o.clientWidth !== l && r();
            },
            u = function (t) {
              window.removeEventListener("resize", e, !1), o.removeEventListener("input", r, !1), o.removeEventListener("keyup", r, !1), o.removeEventListener("autosize:destroy", u, !1), o.removeEventListener("autosize:update", r, !1), Object.keys(t).forEach(function (e) {
                o.style[e] = t[e];
              }), p.delete(o);
            }.bind(o, {
              height: o.style.height,
              resize: o.style.resize,
              overflowY: o.style.overflowY,
              overflowX: o.style.overflowX,
              wordWrap: o.style.wordWrap
            });
          o.addEventListener("autosize:destroy", u, !1), "onpropertychange" in o && "oninput" in o && o.addEventListener("keyup", r, !1), window.addEventListener("resize", e, !1), o.addEventListener("input", r, !1), o.addEventListener("autosize:update", r, !1), o.style.overflowX = "hidden", o.style.wordWrap = "break-word", p.set(o, {
            destroy: u,
            update: r
          }), function () {
            var e = window.getComputedStyle(o, null);
            "vertical" === e.resize ? o.style.resize = "none" : "both" === e.resize && (o.style.resize = "horizontal"), s = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(s) && (s = 0), r();
          }();
        }
      }
      function r(e) {
        var t = p.get(e);
        t && t.destroy();
      }
      function o(e) {
        var t = p.get(e);
        t && t.update();
      }
      var p = "function" == typeof Map ? new Map() : function () {
          var n = [],
            r = [];
          return {
            has: function (e) {
              return n.indexOf(e) > -1;
            },
            get: function (e) {
              return r[n.indexOf(e)];
            },
            set: function (e, t) {
              -1 === n.indexOf(e) && (n.push(e), r.push(t));
            },
            delete: function (e) {
              var t = n.indexOf(e);
              t > -1 && (n.splice(t, 1), r.splice(t, 1));
            }
          };
        }(),
        d = function (e) {
          return new Event(e, {
            bubbles: !0
          });
        };
      try {
        new Event("test");
      } catch (e) {
        d = function (e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !1), t;
        };
      }
      var i = null;
      "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((i = function (e) {
        return e;
      }).destroy = function (e) {
        return e;
      }, i.update = function (e) {
        return e;
      }) : ((i = function (e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
          return n(e);
        }), e;
      }).destroy = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], r), e;
      }, i.update = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], o), e;
      }), t.default = i, e.exports = t.default;
    }) ? r.apply(t, [e, t]) : r) && (e.exports = t);
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function o(e) {
      return e && this.init(e), this;
    }
    function i(e) {
      return new o(e);
    }
    function c(e, t) {
      var e = new e(),
        n = new AV.ACL();
      n.setPublicReadAccess(!0), n.setPublicWriteAccess(!0), e.setACL(n), e.set("url", t.url), e.set("xid", t.xid), e.set("title", t.title), e.set("time", 1), e.save().then(function (e) {
        (0, N.default)(t.el).find(".leancloud-visitors-count").text(1);
      }).catch(function (e) {});
    }
    var I = r(n(47)),
      C = r(n(37)),
      a = r(n(41)),
      P = r(n(13)),
      R = n(6),
      M = r(n(45)),
      b = r(n(40)),
      F = n(44),
      L = r(n(42)),
      N = r(n(3)),
      U = r(n(43)),
      B = r(n(46)),
      D = (r(n(39)), {
        comment: "",
        nick: "",
        mail: "",
        link: "",
        ua: N.default.ua,
        url: "",
        QQAvatar: ""
      }),
      q = "",
      Q = {
        cdn: "https://gravatar.loli.net/avatar/",
        ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
        params: "",
        hide: !1
      },
      w = (o.prototype.init = function (e) {
        if ("undefined" == typeof document) throw new Error("Sorry, Valine does not support Server-side rendering.");
        return e && (e = N.default.extend(R.CONFIG, e), this.i18n = (0, a.default)(e.lang || N.default.lang, e.langMode), this.cfg = e, P.default.maps = !!e.emojiMaps && e.emojiMaps || P.default.maps, P.default.cdn = !!e.emojiCDN && e.emojiCDN || P.default.cdn, this._init()), this;
      }, o.prototype._init = function () {
        var i = this;
        try {
          var e,
            t,
            n,
            r,
            o,
            a = i.cfg,
            s = a.avatar,
            l = a.avatarForce,
            c = a.avatar_cdn,
            u = a.visitor,
            p = a.path,
            d = void 0 === p ? location.pathname : p,
            f = a.pageSize,
            h = a.recordIP,
            g = (i.cfg.path = d.replace(/index\.html?$/, ""), Q.ds),
            v = l ? "&q=" + R.RandomStr : "",
            m = (Q.params = "?d=" + (-1 < g.indexOf(s) ? s : "mp") + "&v=" + R.VERSION + v, Q.hide = "hide" === s, Q.cdn = /^https?\:\/\//.test(c) ? c : Q.cdn, i.cfg.pageSize = isNaN(f) || f < 1 ? 10 : f, h && (0, F.recordIPFn)(function (e) {
              return D.ip = e;
            }), i.cfg.el || null),
            y = (0, N.default)(m);
          (m = m instanceof HTMLElement ? m : y[y.length - 1] || null) && (i.$el = (0, N.default)(m), i.$el.addClass("v").attr("data-class", "v"), Q.hide && i.$el.addClass("hide-avatar"), i.cfg.meta = (i.cfg.guest_info || i.cfg.meta || R.defaultMeta).filter(function (e) {
            return -1 < R.defaultMeta.indexOf(e);
          }), i.cfg.requiredFields = i.cfg.requiredFields.filter(function (e) {
            return -1 < R.defaultMeta.indexOf(e);
          }), e = (0 == i.cfg.meta.length ? R.defaultMeta : i.cfg.meta).map(function (e) {
            var t = "mail" == e ? "email" : "text";
            return -1 < R.defaultMeta.indexOf(e) ? '<input name="' + e + '" placeholder="' + (i.cfg.metaPlaceholder[e] || i.i18n.t(e)) + '" class="v' + e + ' vinput" type="' + t + '">' : "";
          }), t = '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' + i.i18n.t("cancelReply") + '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' + e.length + '">' + e.join("") + '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + i.cfg.placeholder + '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' + i.i18n.t("emoji") + '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' + i.i18n.t("preview") + '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + i.i18n.t("submit") + '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' + i.i18n.t("comments") + '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' + i.i18n.t("more") + '</button></div><div class="vpower txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' + R.VERSION + "</div>", i.$el.html(t), i.$el.find(".cancel-reply").on("click", function (e) {
            i.reset();
          }), n = i.$el.find(".vempty"), i.$nodata = {
            show: function (e) {
              return n.html(e || i.i18n.t("sofa")).show(), i;
            },
            hide: function () {
              return n.hide(), i;
            }
          }, r = i.$el.find(".vload-bottom"), o = i.$el.find(".vload-top"), i.$loading = {
            show: function (e) {
              return e && o.show() || r.show(), i.$nodata.hide(), i;
            },
            hide: function () {
              return o.hide(), r.hide(), 0 === i.$el.find(".vcard").length && i.$nodata.show(), i;
            }
          }), (0, b.default)(i.cfg, function (e) {
            var t = (0, N.default)(".valine-comment-count"),
              o = 0;
            !function t(n) {
              var e,
                r = n[o++];
              r && (e = (0, N.default)(r).attr("data-xid")) && i.Q(e).count().then(function (e) {
                r.innerText = e, t(n);
              }).catch(function (e) {
                r.innerText = 0;
              });
            }(t), u && w.add(AV.Object.extend("Counter"), i.cfg.path), i.$el && i.bind();
          });
        } catch (a) {
          (0, L.default)(i, a, "init");
        }
      }, {
        add: function (t, e) {
          var n,
            r,
            o,
            i,
            a,
            s = this,
            l = (0, N.default)(".leancloud_visitors,.leancloud-visitors");
          1 === l.length ? (n = l[0], r = decodeURI((0, N.default)(n).attr("id")), o = (0, N.default)(n).attr("data-flag-title"), a = encodeURI(r), i = {
            el: n,
            url: r,
            xid: a,
            title: o
          }, decodeURI(r) === decodeURI(e) ? ((a = new AV.Query(t)).equalTo("url", r), a.find().then(function (e) {
            0 < e.length ? ((e = e[0]).increment("time"), e.save().then(function (e) {
              (0, N.default)(n).find(".leancloud-visitors-count").text(e.get("time"));
            }).catch(function (e) {})) : c(t, i);
          }).catch(function (e) {
            101 == e.code ? c(t, i) : (0, L.default)(s, e);
          })) : w.show(t, l)) : w.show(t, l);
        },
        show: function (e, t) {
          var n = [];
          t.forEach(function (e) {
            var t = (0, N.default)(e).find(".leancloud-visitors-count");
            t && t.text("0"), n.push(/\%/.test((0, N.default)(e).attr("id")) ? decodeURI((0, N.default)(e).attr("id")) : (0, N.default)(e).attr("id"));
          }), n.length && ((e = new AV.Query(e)).containedIn("url", n), e.find().then(function (e) {
            0 < e.length && t.forEach(function (o) {
              e.forEach(function (e) {
                var t = e.get("xid") || encodeURI(e.get("url")),
                  e = e.get("time"),
                  n = (0, N.default)(o),
                  r = n.attr("id");
                (/\%/.test(r) ? r : encodeURI(r)) == t && (r = n.find(".leancloud-visitors-count")) && r.text(e);
              });
            });
          }).catch(function (e) {}));
        }
      });
    o.prototype.Q = function (e) {
      var t,
        n = this.cfg.clazzName;
      if (1 == arguments.length) return (t = new AV.Query(n)).doesNotExist("rid"), (r = new AV.Query(n)).equalTo("rid", ""), t = AV.Query.or(t, r), "*" === e ? t.exists("url") : t.equalTo("url", decodeURI(e)), t.addDescending("createdAt"), t.addDescending("insertedAt"), t;
      var r = JSON.stringify(arguments[1]).replace(/(\[|\])/g, "");
      return AV.Query.doCloudQuery("select * from " + n + " where rid in (" + r + ") order by -createdAt,-createdAt");
    }, o.prototype.installLocale = function (e, t) {
      return this.i18n(e, t), this;
    }, o.prototype.setPath = function (e) {
      return this.config.path = e, this;
    }, o.prototype.bind = function () {
      var e,
        l = this,
        n = l.$el.find(".vemojis"),
        r = l.$el.find(".vpreview"),
        o = l.$el.find(".vemoji-btn"),
        i = l.$el.find(".vpreview-btn"),
        s = l.$el.find(".veditor"),
        a = P.default.maps,
        c = !1,
        u = (l.$emoji = {
          show: function () {
            if (!c) {
              var e,
                t = [];
              for (e in a) a.hasOwnProperty(e) && P.default.build(e) && t.push('<i title="' + e + '" >' + P.default.build(e) + "</i>");
              n.html(t.join("")), c = !0, n.find("i").on("click", function (e) {
                e.preventDefault(), f(s[0], " :" + (0, N.default)(this).attr("title") + ":");
              });
            }
            return l.$preview.hide(), n.show(), o.addClass("actived"), l.$emoji;
          },
          hide: function () {
            return o.removeClass("actived"), n.hide(), l.$emoji;
          }
        }, l.$preview = {
          show: function () {
            return q ? (l.$emoji.hide(), i.addClass("actived"), r.html(q).show(), w()) : l.$preview.hide(), l.$preview;
          },
          hide: function () {
            return i.removeClass("actived"), r.hide().html(""), l.$preview;
          }
        }, function (e) {
          var t = (0, U.default)(e.val() || "");
          t || l.$preview.hide(), q != t && (q = t, -1 < i.hasClass("actived") && q != r.html() && r.html(q), (0, C.default)(e[0]), w());
        }),
        t = (o.on("click", function (e) {
          o.hasClass("actived") ? l.$emoji.hide() : l.$emoji.show();
        }), i.on("click", function (e) {
          i.hasClass("actived") ? l.$preview.hide() : l.$preview.show();
        }), l.cfg.meta),
        p = {},
        d = {
          veditor: "comment"
        };
      for (e in t.forEach(function (e) {
        d["v" + e] = e;
      }), d) d.hasOwnProperty(e) && function () {
        var t = d[e],
          r = l.$el.find("." + e);
        (p[t] = r).on("input change blur propertychange", function (e) {
          l.cfg.enableQQ && "blur" === e.type && "nick" === t && (isNaN(r.val()) ? N.default.store.get(R.QQCacheKey) && N.default.store.get(R.QQCacheKey).nick != r.val() && (N.default.store.remove(R.QQCacheKey), D.nick = r.val(), D.mail = "", D.QQAvatar = "") : (0, F.fetchQQFn)(r.val(), function (e) {
            var t = e.nick || r.val(),
              n = e.qq + "@qq.com";
            (0, N.default)(".vnick").val(t), (0, N.default)(".vmail").val(n), D.nick = t, D.mail = n, D.QQAvatar = e.pic;
          })), "comment" === t ? u(r) : D[t] = N.default.escape(r.val().replace(/(^\s*)|(\s*$)/g, "")).substring(0, 40);
        });
      }();
      var f = function (t, e) {
          var n, r, o;
          document.selection ? (t.focus(), document.selection.createRange().text = e, t.focus()) : t.selectionStart || "0" == t.selectionStart ? (n = t.selectionStart, r = t.selectionEnd, o = t.scrollTop, t.value = t.value.substring(0, n) + e + t.value.substring(r, t.value.length), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = o) : (t.focus(), t.value += e), setTimeout(function (e) {
            u((0, N.default)(t));
          }, 100);
        },
        h = {
          no: 1,
          size: l.cfg.pageSize,
          skip: l.cfg.pageSize
        },
        g = l.$el.find(".vpage"),
        v = (g.on("click", function (e) {
          g.hide(), h.no++, v();
        }), function () {
          var n = h.size,
            r = h.no,
            o = Number(l.$el.find(".vnum").text()),
            e = (l.$loading.show(), l.Q(l.cfg.path));
          e.limit(n), e.skip((r - 1) * n), e.find().then(function (e) {
            var t;
            h.skip = h.size, e && e.length ? (t = [], e.forEach(function (e) {
              t.push(e.id), m(e, l.$el.find(".vcards"), !0);
            }), l.Q(l.cfg.path, t).then(function (e) {
              (e && e.results || []).forEach(function (e) {
                m(e, (0, N.default)('.vquote[data-self-id="' + e.get("rid") + '"]'));
              });
            }).catch(function (e) {}), n * r < o ? g.show() : g.hide(), w()) : l.$nodata.show(), l.$loading.hide();
          }).catch(function (e) {
            l.$loading.hide(), (0, L.default)(l, e, "query");
          });
        }),
        m = (l.Q(l.cfg.path).count().then(function (e) {
          0 < e ? (l.$el.find(".vcount").show().find(".vnum").text(e), v()) : l.$loading.hide();
        }).catch(function (e) {
          (0, L.default)(l, e, "count");
        }), function (e, t, n) {
          var r = (0, N.default)('<div class="vcard" id="' + e.id + '"></div>'),
            o = e.get("ua"),
            i = "",
            o = (o && !/ja/.test(l.cfg.lang) && (i = (o = N.default.detect(o)).os ? '<span class="vsys"><i class="browser-icon fab fa-' + (["xiaomi"].includes(o.browser.toLowerCase()) ? "mobile-alt fas" : o.browser.toLowerCase()) + '"></i>' + o.browser + " " + o.version + '</span> <span class="vsys"><i class="os-icon fab fa-' + (["mac os", "ios"].includes(o.os.toLowerCase()) ? "apple" : o.os.toLowerCase()) + '"></i>' + o.os + " " + o.osVersion + "</span>" : ""), "*" === l.cfg.path && (i = '<a href="' + e.get("url") + '" class="vsys">' + e.get("url") + "</a>"), l.cfg.master.includes((0, I.default)(e.get("mail")))),
            a = l.cfg.friends.includes((0, I.default)(e.get("mail").toLowerCase())),
            o = o ? '<span class="vtag vmaster">' + l.cfg.tagMeta[0] + "</span>" : a ? '<span class="vtag vfriend">' + l.cfg.tagMeta[1] + "</span>" : '<span class="vtag vvisitor">' + l.cfg.tagMeta[2] + "</span>",
            a = e.get("link") ? /^https?\:\/\//.test(e.get("link")) ? e.get("link") : "http://" + e.get("link") : "",
            s = N.default.escape(e.get("nick")),
            a = a ? '<a class="vnick" rel="nofollow" href="' + N.default.escape(a) + '" target="_blank" >' + s + "</a>" + o : '<span class="vnick">' + s + "</span>" + o,
            s = (Q.hide ? "" : l.cfg.enableQQ && e.get("QQAvatar") ? '<img class="vimg" src="' + e.get("QQAvatar") + '" referrerPolicy="no-referrer"/>' : '<img class="vimg" src="' + (Q.cdn + (0, I.default)(e.get("mail")) + Q.params) + '">') + '<div class="vh"><div class="vhead">' + a + " " + i + '</div><div class="vmeta"><span class="vtime" >' + (0, M.default)(e.get("insertedAt"), l.i18n) + '</span><span class="vat" data-vm-id="' + (e.get("rid") || e.id) + '" data-self-id="' + e.id + '">' + l.i18n.t("reply") + '</span></div><div class="vcontent" data-expand="' + l.i18n.t("expand") + '">' + (0, B.default)(e.get("comment")) + '</div><div class="vreply-wrapper" data-self-id="' + e.id + '"></div><div class="vquote" data-self-id="' + e.id + '"></div></div>',
            o = (r.html(s), r.find(".vat")),
            a = (r.find("a:not(.at)").forEach(function (e) {
              (0, N.default)(e).attr({
                target: "_blank",
                rel: "noopener"
              });
            }), n ? t.append(r) : t.prepend(r), r.find(".vcontent"));
          a && x(a), o && b(o, e);
        }),
        y = {},
        b = function (i, a) {
          i.on("click", function (e) {
            var t = i.attr("data-vm-id"),
              n = i.attr("data-self-id"),
              r = l.$el.find(".vwrap"),
              o = "@" + N.default.escape(a.get("nick"));
            (0, N.default)('.vreply-wrapper[data-self-id="' + n + '"]').append(r).find(".cancel-reply").show(), y = {
              at: N.default.escape(o) + " ",
              rid: t,
              pid: n,
              rmail: a.get("mail")
            }, p.comment.attr({
              placeholder: o
            })[0].focus();
          });
        },
        w = function () {
          setTimeout(function () {
            try {
              l.cfg.mathjax && "MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() || MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.querySelector(".v")])), "renderMathInElement" in window && renderMathInElement((0, N.default)(".v")[0], {
                delimiters: [{
                  left: "$$",
                  right: "$$",
                  display: !0
                }, {
                  left: "$",
                  right: "$",
                  display: !1
                }]
              });
            } catch (e) {}
          }, 100);
        },
        x = function (t) {
          setTimeout(function () {
            200 < t[0].offsetHeight && (t.addClass("expand"), t.on("click", function (e) {
              t.removeClass("expand");
            }));
          });
        },
        k = void 0;
      if (k = N.default.store.get(R.MetaCacheKey) || k) for (var S in t) t.hasOwnProperty(S) && (S = t[S], l.$el.find(".v" + S).val(N.default.unescape(k[S])), D[S] = k[S]);
      function _(e) {
        return -1 < l.cfg.requiredFields.indexOf("nick") && D.nick.length < 3 ? (p.nick[0].focus(), void l.$el.find(".status-bar").text("" + l.i18n.t("nickFail")).empty(3e3)) : -1 < l.cfg.requiredFields.indexOf("mail") && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(D.mail) ? (p.mail[0].focus(), void l.$el.find(".status-bar").text("" + l.i18n.t("mailFail")).empty(3e3)) : void ("" == q ? p.comment[0].focus() : (D.comment = q, D.nick = D.nick || "Anonymous", (t = N.default.store.get("vlx")) && Date.now() / 1e3 - t / 1e3 < 20 ? l.$el.find(".status-bar").text(l.i18n.t("busy")).empty(3e3) : $()));
        var t;
      }
      var A = N.default.store.get(R.QQCacheKey),
        O = (D.QQAvatar = l.cfg.enableQQ && !!A && A.pic || "", l.reset = function () {
          D.comment = "", p.comment.val(""), u(p.comment), p.comment.attr("placeholder", l.cfg.placeholder), y = {}, l.$preview.hide(), l.$el.find(".vpanel").append(l.$el.find(".vwrap")), l.$el.find(".cancel-reply").hide(), q = "";
        }, l.$el.find(".vsubmit")),
        j = function () {
          var e = new AV.ACL();
          return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e;
        },
        $ = function () {
          N.default.store.set("vlx", Date.now()), O.attr({
            disabled: !0
          }), l.$loading.show(!0);
          var e,
            t,
            n,
            r = new (AV.Object.extend(l.cfg.clazzName || "Comment"))();
          for (t in D.url = decodeURI(l.cfg.path), D.insertedAt = new Date(), y.rid && (e = y.pid || y.rid, r.set("rid", y.rid), r.set("pid", e), D.comment = q.replace("<p>", '<p><a class="at" href="#' + e + '">' + y.at + "</a> , ")), D) D.hasOwnProperty(t) && (n = D[t], r.set(t, n));
          r.setACL(j()), r.save().then(function (e) {
            "Anonymous" != D.nick && N.default.store.set(R.MetaCacheKey, {
              nick: D.nick,
              link: D.link,
              mail: D.mail
            });
            var t = l.$el.find(".vnum");
            try {
              y.rid ? m(e, (0, N.default)('.vquote[data-self-id="' + y.rid + '"]'), !0) : ((Number(t.text()) ? t : l.$el.find(".vcount").show().find(".vnum")).text(Number(t.text()) + 1), m(e, l.$el.find(".vcards")), h.skip++), O.removeAttr("disabled"), l.$loading.hide(), l.reset();
            } catch (e) {
              (0, L.default)(l, e, "save");
            }
          }).catch(function (e) {
            (0, L.default)(l, e, "commitEvt");
          });
        },
        E = (O.on("click", _), (0, N.default)(document).on("keydown", function (e) {
          var t = (e = event || e).keyCode || e.which || e.charCode;
          (e.ctrlKey || e.metaKey) && 13 === t && _(), 9 === t && "veditor" == (document.activeElement.id || "") && (e.preventDefault(), f(s[0], "    "));
        }).on("paste", function (e) {
          e = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData;
          e && E(e.items, !0);
        }), s.on("dragenter dragleave dragover drop", function (e) {
          e.stopPropagation(), e.preventDefault(), "drop" === e.type && E(e.dataTransfer.items);
        }), function (e, t) {
          for (var n = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            if ("string" === i.kind && i.type.match("^text/html")) t || i.getAsString(function (e) {
              e && f(s[0], e.replace(/<[^>]+>/g, ""));
            });else if (-1 !== i.type.indexOf("image")) {
              n.push(i.getAsFile());
              continue;
            }
          }
          T(n);
        }),
        T = function t(n, r) {
          r = r || 0;
          var o,
            i,
            a = n.length;
          0 < a && (o = n[r], O.attr({
            disabled: !0
          }), i = "![Uploading " + o.name + "...]()", f(s[0], i), z(o, function (e) {
            500 != e.code ? (s.val(s.val().replace(i, "![" + o.name + "](" + e.data.url + ")\r\n")), (0, C.default)(s[0]), ++r < a ? t(n, r) : O.removeAttr("disabled")) : (s.val(s.val().replace(i, "")), (0, C.default)(s[0]), l.$el.find(".status-bar").text(e.msg).empty(3e3), O.removeAttr("disabled"));
          }));
        },
        z = function (e, t) {
          var n = new FormData();
          n.append("image", e), N.default.ajax({
            url: "https://pic.alexhchu.com/api/upload",
            method: "post",
            body: n
          }).then(function (e) {
            e.json().then(t);
          });
        };
    }, e.exports = i, e.exports.default = i;
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var n = n(3),
      r = n && n.__esModule ? n : {
        default: n
      };
    t.default = {
      getApi: function (e, t) {
        r.default.ajax({
          url: "https://app-router.com/2/route",
          body: {
            appId: e
          }
        }).then(function (e) {
          e.json().then(function (e) {
            return t && t("//" + e.api_server);
          });
        });
      }
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var n = n(3),
      r = n && n.__esModule ? n : {
        default: n
      },
      s = !1;
    t.default = function (i, a) {
      var e;
      "AV" in window && (e = window.AV.version || window.AV.VERSION, 2 < parseInt(e.split(".")[0]) ? s = !!AV.applicationId && !!AV.applicationKey : r.default.deleteInWin("AV", 0)), s ? a && a() : r.default.sdkLoader("//unpkg.com/leancloud-storage@3/dist/av-min.js", "AV", function (e) {
        var t,
          n = "https://",
          r = i.app_id || i.appId,
          o = i.app_key || i.appKey;
        if (!i.serverURLs) switch (r.slice(-9)) {
          case "-9Nh9j0Va":
            n += "tab.";
            break;
          case "-MdYXbMMI":
            n += "us.";
        }
        t = i.serverURLs || n + "leancloud.cn", AV.init({
          appId: r,
          appKey: o,
          serverURLs: t
        }), s = !0, a && a();
      });
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    t.__esModule = !0;
    var o = r(n(95)),
      i = r(n(111)),
      a = r(n(112)),
      s = r(n(109)),
      n = r(n(110)),
      l = {
        zh: i.default,
        "zh-cn": i.default,
        "zh-CN": i.default,
        "zh-TW": a.default,
        en: s.default,
        "en-US": s.default,
        ja: n.default,
        "ja-JP": n.default
      };
    t.default = function (e, t) {
      return !l[e] && e && t && (l[e] = t), new o.default({
        phrases: l[e || "zh"],
        locale: e
      });
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0, t.default = function (e, t) {
      var n, r;
      e.$el && e.$loading.hide().$nodata.hide(), "[object Error]" === {}.toString.call(t) ? (n = t.code || t.message || t.error || "", isNaN(n) ? e.$el && e.$nodata.show('<pre style="text-align:left;"> ' + JSON.stringify(t) + "</pre>") : (r = ((r = e.i18n.t("code-" + n)) == "code-" + n ? void 0 : r) || t.message || t.error || "", 101 == n || -1 == n ? e.$nodata.show() : e.$el && e.$nodata.show('<pre style="text-align:left;">Code ' + n + ": " + r + "</pre>"))) : e.$el && e.$nodata.show('<pre style="text-align:left;">' + JSON.stringify(t) + "</pre>");
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    t.__esModule = !0;
    var o = r(n(94)),
      i = r(n(54)),
      a = r(n(86)),
      s = r(n(3)),
      l = r(n(13)),
      n = new o.default.Renderer();
    n.code = function (e, t) {
      return '<pre><code class="hljs language-' + t + '">' + (t && hljs.getLanguage(t) ? hljs.highlight(t, e).value : s.default.escape(e)) + "</code></pre>";
    }, o.default.setOptions({
      renderer: "hljs" in window ? n : new o.default.Renderer(),
      highlight: function (e, t) {
        return "hljs" in window ? t && hljs.getLanguage(t) && hljs.highlight(t, e, !0).value || hljs.highlightAuto(e).value : (0, a.default)(e);
      },
      gfm: !0,
      tables: !0,
      breaks: !0,
      pedantic: !1,
      sanitize: !0,
      sanitizer: i.default,
      smartLists: !0,
      smartypants: !0,
      headerPrefi: "v-"
    }), t.default = function (e) {
      return (0, o.default)(l.default.parse(e, !0));
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0, t.recordIPFn = t.fetchQQFn = void 0;
    var r = n(3),
      o = r && r.__esModule ? r : {
        default: r
      },
      i = n(6);
    t.fetchQQFn = function (e, t) {
      var n = o.default.store.get(i.QQCacheKey);
      n && n.qq == e ? t && t(n) : o.default.ajax({
        url: "//valine.api.ioliu.cn/getqqinfo",
        method: "POST",
        body: {
          qq: e
        }
      }).then(function (e) {
        e.json().then(function (e) {
          e.errmsg || (o.default.store.set(i.QQCacheKey, e), t && t(e));
        });
      });
    }, t.recordIPFn = function (t) {
      o.default.ajax({
        url: "//api.ip.sb/jsonip",
        method: "jsonp"
      }).then(function (e) {
        t(e.ip);
      });
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0, t.default = function (e, t) {
      if (!e) return "";
      try {
        var n,
          r,
          o,
          i,
          a,
          s = p(e).getTime(),
          l = new Date().getTime() - s,
          c = Math.floor(l / 864e5);
        return 0 === c ? (n = l % 864e5, 0 === (r = Math.floor(n / 36e5)) ? (o = n % 36e5, 0 === (i = Math.floor(o / 6e4)) ? (a = o % 6e4, Math.round(a / 1e3) + " " + t.t("seconds")) : i + " " + t.t("minutes")) : r + " " + t.t("hours")) : c < 0 ? t.t("now") : c < 8 ? c + " " + t.t("days") : u(e);
      } catch (e) {}
    };
    var u = function (e) {
        var t = r(e.getDate(), 2),
          n = r(e.getMonth() + 1, 2);
        return r(e.getFullYear(), 2) + "-" + n + "-" + t;
      },
      p = function e(t) {
        return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : /GMT/.test(t || "") ? e(new Date(t).getTime()) : (t = (t || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(t));
      },
      r = function (e, t) {
        for (var n = e.toString(); n.length < t;) n = "0" + n;
        return n;
      };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var n = n(106),
      i = n && n.__esModule ? n : {
        default: n
      },
      o = (t.default = function (e) {
        return (0, i.default)(e, {
          onTagAttr: function (e, t, n, r) {
            return o(e, t, n, r);
          },
          onIgnoreTagAttr: function (e, t, n, r) {
            return o(e, t, n, r);
          }
        }).replace(/\<\/?div\>/gi, "");
      }, function (e, t, n, r) {
        if (/code|pre|span/i.test(e)) {
          var o;
          if ("style" == t) return (o = n.match(/color:([#a-z0-9]{3,7}|\s+[#a-z0-9]{3,8})/gi)) && o.length ? 'style="' + o[0] + '"' : "";
          if ("class" == t) return t + "='" + i.default.escapeAttrValue(n) + "'";
        }
        return "a" === e && "class" == t && "at" === n ? t + "='" + i.default.escapeAttrValue(n) + "'" : "img" === e && /src|class/i.test(t) ? t + "='" + i.default.escapeAttrValue(n) + "' referrerPolicy='no-referrer'" : void 0;
      });
  }, function (t, n, v) {
    var m;
    !function () {
      "use strict";

      function p(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
      }
      function s(e, t, n, r, o, i) {
        return p((t = p(p(t, e), p(r, i))) << o | t >>> 32 - o, n);
      }
      function d(e, t, n, r, o, i, a) {
        return s(t & n | ~t & r, e, t, o, i, a);
      }
      function f(e, t, n, r, o, i, a) {
        return s(t & r | n & ~r, e, t, o, i, a);
      }
      function h(e, t, n, r, o, i, a) {
        return s(t ^ n ^ r, e, t, o, i, a);
      }
      function g(e, t, n, r, o, i, a) {
        return s(n ^ (t | ~r), e, t, o, i, a);
      }
      function a(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n, r, o, i, a = 1732584193, s = -271733879, l = -1732584194, c = 271733878, u = 0; u < e.length; u += 16) a = d(n = a, r = s, o = l, i = c, e[u], 7, -680876936), c = d(c, a, s, l, e[u + 1], 12, -389564586), l = d(l, c, a, s, e[u + 2], 17, 606105819), s = d(s, l, c, a, e[u + 3], 22, -1044525330), a = d(a, s, l, c, e[u + 4], 7, -176418897), c = d(c, a, s, l, e[u + 5], 12, 1200080426), l = d(l, c, a, s, e[u + 6], 17, -1473231341), s = d(s, l, c, a, e[u + 7], 22, -45705983), a = d(a, s, l, c, e[u + 8], 7, 1770035416), c = d(c, a, s, l, e[u + 9], 12, -1958414417), l = d(l, c, a, s, e[u + 10], 17, -42063), s = d(s, l, c, a, e[u + 11], 22, -1990404162), a = d(a, s, l, c, e[u + 12], 7, 1804603682), c = d(c, a, s, l, e[u + 13], 12, -40341101), l = d(l, c, a, s, e[u + 14], 17, -1502002290), a = f(a, s = d(s, l, c, a, e[u + 15], 22, 1236535329), l, c, e[u + 1], 5, -165796510), c = f(c, a, s, l, e[u + 6], 9, -1069501632), l = f(l, c, a, s, e[u + 11], 14, 643717713), s = f(s, l, c, a, e[u], 20, -373897302), a = f(a, s, l, c, e[u + 5], 5, -701558691), c = f(c, a, s, l, e[u + 10], 9, 38016083), l = f(l, c, a, s, e[u + 15], 14, -660478335), s = f(s, l, c, a, e[u + 4], 20, -405537848), a = f(a, s, l, c, e[u + 9], 5, 568446438), c = f(c, a, s, l, e[u + 14], 9, -1019803690), l = f(l, c, a, s, e[u + 3], 14, -187363961), s = f(s, l, c, a, e[u + 8], 20, 1163531501), a = f(a, s, l, c, e[u + 13], 5, -1444681467), c = f(c, a, s, l, e[u + 2], 9, -51403784), l = f(l, c, a, s, e[u + 7], 14, 1735328473), a = h(a, s = f(s, l, c, a, e[u + 12], 20, -1926607734), l, c, e[u + 5], 4, -378558), c = h(c, a, s, l, e[u + 8], 11, -2022574463), l = h(l, c, a, s, e[u + 11], 16, 1839030562), s = h(s, l, c, a, e[u + 14], 23, -35309556), a = h(a, s, l, c, e[u + 1], 4, -1530992060), c = h(c, a, s, l, e[u + 4], 11, 1272893353), l = h(l, c, a, s, e[u + 7], 16, -155497632), s = h(s, l, c, a, e[u + 10], 23, -1094730640), a = h(a, s, l, c, e[u + 13], 4, 681279174), c = h(c, a, s, l, e[u], 11, -358537222), l = h(l, c, a, s, e[u + 3], 16, -722521979), s = h(s, l, c, a, e[u + 6], 23, 76029189), a = h(a, s, l, c, e[u + 9], 4, -640364487), c = h(c, a, s, l, e[u + 12], 11, -421815835), l = h(l, c, a, s, e[u + 15], 16, 530742520), a = g(a, s = h(s, l, c, a, e[u + 2], 23, -995338651), l, c, e[u], 6, -198630844), c = g(c, a, s, l, e[u + 7], 10, 1126891415), l = g(l, c, a, s, e[u + 14], 15, -1416354905), s = g(s, l, c, a, e[u + 5], 21, -57434055), a = g(a, s, l, c, e[u + 12], 6, 1700485571), c = g(c, a, s, l, e[u + 3], 10, -1894986606), l = g(l, c, a, s, e[u + 10], 15, -1051523), s = g(s, l, c, a, e[u + 1], 21, -2054922799), a = g(a, s, l, c, e[u + 8], 6, 1873313359), c = g(c, a, s, l, e[u + 15], 10, -30611744), l = g(l, c, a, s, e[u + 6], 15, -1560198380), s = g(s, l, c, a, e[u + 13], 21, 1309151649), a = g(a, s, l, c, e[u + 4], 6, -145523070), c = g(c, a, s, l, e[u + 11], 10, -1120210379), l = g(l, c, a, s, e[u + 2], 15, 718787259), s = g(s, l, c, a, e[u + 9], 21, -343485551), a = p(a, n), s = p(s, r), l = p(l, o), c = p(c, i);
        return [a, s, l, c];
      }
      function l(e) {
        for (var t = "", n = 32 * e.length, r = 0; r < n; r += 8) t += String.fromCharCode(e[r >> 5] >>> r % 32 & 255);
        return t;
      }
      function c(e) {
        var t = [];
        for (t[(e.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
        for (var n = 8 * e.length, r = 0; r < n; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
        return t;
      }
      function r(e) {
        for (var t, n = "0123456789abcdef", r = "", o = 0; o < e.length; o += 1) t = e.charCodeAt(o), r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
        return r;
      }
      function u(e) {
        return unescape(encodeURIComponent(e));
      }
      function o(e) {
        return l(a(c(e = u(e)), 8 * e.length));
      }
      function i(e, t) {
        var n,
          e = u(e),
          t = u(t),
          r = c(e),
          o = [],
          i = [];
        for (o[15] = i[15] = void 0, 16 < r.length && (r = a(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], i[n] = 1549556828 ^ r[n];
        return e = a(o.concat(c(t)), 512 + 8 * t.length), l(a(i.concat(e), 640));
      }
      function e(e, t, n) {
        return t ? n ? i(t, e) : r(i(t, e)) : n ? o(e) : r(o(e));
      }
      void 0 !== (m = function () {
        return e;
      }.call(n, v, n, t)) && (t.exports = m);
    }();
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      return s(e), d(e, p(arguments, 1));
    }
    var o = n(2),
      i = n(4),
      a = n(1),
      s = n(5),
      l = n(14),
      c = n(15),
      u = c(),
      n = n(49),
      p = a("Array.prototype.slice"),
      d = i.apply(u);
    o(r, {
      getPolyfill: c,
      implementation: l,
      shim: n
    }), e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(2),
      o = n(15);
    e.exports = function () {
      var e = o();
      return r(Array.prototype, {
        forEach: e
      }, {
        forEach: function () {
          return Array.prototype.forEach !== e;
        }
      }), e;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function e(t) {
      for (var n, r, o = Array.prototype.slice.call(arguments, 1); o.length;) for (r in n = o.shift()) n.hasOwnProperty(r) && ("[object Object]" === Object.prototype.toString.call(t[r]) ? t[r] = e(t[r], n[r]) : t[r] = n[r]);
      return t;
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var n = n(53),
      r = n && n.__esModule ? n : {
        default: n
      },
      o = (t.default = function (d) {
        return d = (0, r.default)({
          url: "",
          method: "get",
          body: {}
        }, d), new Promise(function (t, e) {
          var n, r, o, i;
          if ("jsonp" == d.method) return n = "cb_" + (Date.now() + Math.round(1e3 * Math.random())).toString(32), r = document, o = r.body, i = r.createElement("script"), d.body.callback = n, d.body.t = Date.now(), i.src = d.url + "?" + f(d.body), window[n] = function (e) {
            window[n] = null, o.removeChild(i), t(e);
          }, void o.appendChild(i);
          function a() {
            return {
              ok: 2 == (l.status / 100 | 0),
              statusText: l.statusText,
              status: l.status,
              url: l.responseURL,
              text: function () {
                return Promise.resolve(l.responseText);
              },
              json: function () {
                return Promise.resolve(l.responseText).then(JSON.parse);
              },
              blob: function () {
                return Promise.resolve(new Blob([l.response]));
              },
              clone: a,
              headers: {
                keys: function () {
                  return c;
                },
                entries: function () {
                  return u;
                },
                get: function (e) {
                  return p[e.toLowerCase()];
                },
                has: function (e) {
                  return e.toLowerCase() in p;
                }
              }
            };
          }
          var s,
            l = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
            c = [],
            u = [],
            p = {};
          for (s in d.url = d.url + "?" + ("get" == d.method ? f(d.body) : ""), l.open(d.method || "get", d.url, !0), l.onload = function () {
            l.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
              c.push(t = t.toLowerCase()), u.push([t, n]), p[t] = p[t] ? p[t] + "," + n : n;
            }), t(a());
          }, l.onerror = e, l.withCredentials = "include" == d.credentials, d.headers) l.setRequestHeader(s, d.headers[s]);
          l.send("post" == d.method ? d.body : "get" == d.method ? null : f(d.body));
        });
      }, encodeURIComponent),
      f = function (e) {
        var t,
          n = [];
        for (t in e) e.hasOwnProperty(t) && n.push(o(t) + "=" + o(e[t]));
        return n.join("&").replace(/%20/g, "+") || null;
      };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    t.default = function (t) {
      var e,
        n = {},
        r = {
          Trident: -1 < (t = t || navigator.userAgent).indexOf("Trident") || -1 < t.indexOf("NET CLR"),
          Presto: -1 < t.indexOf("Presto"),
          WebKit: -1 < t.indexOf("AppleWebKit"),
          Gecko: -1 < t.indexOf("Gecko/"),
          Safari: -1 < t.indexOf("Safari"),
          Edge: -1 < t.indexOf("Edge") || -1 < t.indexOf("Edg"),
          Chrome: -1 < t.indexOf("Chrome") || -1 < t.indexOf("CriOS"),
          IE: -1 < t.indexOf("MSIE") || -1 < t.indexOf("Trident"),
          Firefox: -1 < t.indexOf("Firefox") || -1 < t.indexOf("FxiOS"),
          "Firefox Focus": -1 < t.indexOf("Focus"),
          Chromium: -1 < t.indexOf("Chromium"),
          Opera: -1 < t.indexOf("Opera") || -1 < t.indexOf("OPR"),
          Vivaldi: -1 < t.indexOf("Vivaldi"),
          Yandex: -1 < t.indexOf("YaBrowser"),
          Kindle: -1 < t.indexOf("Kindle") || -1 < t.indexOf("Silk/"),
          360: -1 < t.indexOf("360EE") || -1 < t.indexOf("360SE"),
          UC: -1 < t.indexOf("UC") || -1 < t.indexOf(" UBrowser"),
          QQBrowser: -1 < t.indexOf("QQBrowser"),
          QQ: -1 < t.indexOf("QQ/"),
          Baidu: -1 < t.indexOf("Baidu") || -1 < t.indexOf("BIDUBrowser"),
          Maxthon: -1 < t.indexOf("Maxthon"),
          Sogou: -1 < t.indexOf("MetaSr") || -1 < t.indexOf("Sogou"),
          LBBROWSER: -1 < t.indexOf("LBBROWSER"),
          "2345Explorer": -1 < t.indexOf("2345Explorer"),
          TheWorld: -1 < t.indexOf("TheWorld"),
          XiaoMi: -1 < t.indexOf("MiuiBrowser"),
          Quark: -1 < t.indexOf("Quark"),
          Qiyu: -1 < t.indexOf("Qiyu"),
          Wechat: -1 < t.indexOf("MicroMessenger"),
          Taobao: -1 < t.indexOf("AliApp(TB"),
          Alipay: -1 < t.indexOf("AliApp(AP"),
          Weibo: -1 < t.indexOf("Weibo"),
          Douban: -1 < t.indexOf("com.douban.frodo"),
          Suning: -1 < t.indexOf("SNEBUY-APP"),
          iQiYi: -1 < t.indexOf("IqiyiApp"),
          Windows: -1 < t.indexOf("Windows"),
          Linux: -1 < t.indexOf("Linux") || -1 < t.indexOf("X11"),
          macOS: -1 < t.indexOf("Macintosh"),
          Android: -1 < t.indexOf("Android") || -1 < t.indexOf("Adr"),
          Ubuntu: -1 < t.indexOf("Ubuntu"),
          FreeBSD: -1 < t.indexOf("FreeBSD"),
          Debian: -1 < t.indexOf("Debian"),
          "Windows Phone": -1 < t.indexOf("IEMobile") || -1 < t.indexOf("Windows Phone"),
          BlackBerry: -1 < t.indexOf("BlackBerry") || -1 < t.indexOf("RIM") || -1 < t.indexOf("BB10"),
          MeeGo: -1 < t.indexOf("MeeGo"),
          Symbian: -1 < t.indexOf("Symbian"),
          iOS: -1 < t.indexOf("like Mac OS X"),
          "Chrome OS": -1 < t.indexOf("CrOS"),
          WebOS: -1 < t.indexOf("hpwOS"),
          Mobile: -1 < t.indexOf("Mobi") || -1 < t.indexOf("iPh") || -1 < t.indexOf("480"),
          Tablet: -1 < t.indexOf("Tablet") || -1 < t.indexOf("Pad") || -1 < t.indexOf("Nexus 7")
        },
        o = (r.Mobile && (r.Mobile = !(-1 < t.indexOf("iPad"))), {
          browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
          os: ["Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"]
        });
      for (e in o) if (o.hasOwnProperty(e)) for (var i = 0, a = o[e].length; i < a; i++) {
        var s = o[e][i];
        r[s] && (n[e] = s);
      }
      var l = {
          Windows: function () {
            var e = t.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
            return {
              6.4: "10",
              6.3: "8.1",
              6.2: "8",
              6.1: "7",
              "6.0": "Vista",
              5.2: "XP",
              5.1: "XP",
              "5.0": "2000"
            }[e] || e;
          },
          Android: t.replace(/^.*Android ([\d.]+);.*$/, "$1"),
          iOS: t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
          Debian: t.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
          "Windows Phone": t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
          macOS: t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
          WebOS: t.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
          BlackBerry: t.replace(/^.*BB([\d.]+);*$/, "$1")
        },
        l = (n.osVersion = "", l[n.os]),
        l = (l && (n.osVersion = "function" == typeof l ? l() : l == t ? "" : l), {
          Safari: t.replace(/^.*Version\/([\d.]+).*$/, "$1"),
          Chrome: t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
          IE: t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
          Edge: t.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
          Firefox: t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
          "Firefox Focus": t.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
          Chromium: t.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
          Opera: t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
          Vivaldi: t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
          Yandex: t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
          Kindle: t.replace(/^.*Version\/([\d.]+).*$/, "$1"),
          Maxthon: t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
          QQBrowser: t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
          QQ: t.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
          Baidu: t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
          UC: t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
          Sogou: t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
          "2345Explorer": t.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
          TheWorld: t.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
          XiaoMi: t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
          Quark: t.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
          Qiyu: t.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
          Wechat: t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
          Taobao: t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
          Alipay: t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
          Weibo: t.replace(/^.*weibo__([\d.]+).*$/, "$1"),
          Douban: t.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
          Suning: t.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
          iQiYi: t.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
        }),
        l = (n.version = "", l[n.browser]);
      return l && (n.version = "function" == typeof l ? l() : l == t ? "" : l), null == n.browser && (n.browser = "Unknow App"), n;
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0, t.default = function (e) {
      e = Object(e);
      for (var t = 1, n = arguments.length; t < n; t++) {
        var r = arguments[t];
        if (r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
      }
      return e;
    };
  }, function (e, t, n) {
    "use strict";

    t.__esModule = !0;
    var n = n(88),
      r = n && n.__esModule ? n : {
        default: n
      };
    t.default = function (e) {
      return (0, r.default)(e, {
        allowedAttributes: {
          a: ["title", "href", "name", "target", "rel"],
          img: ["alt", "src", "class", "referrerpolicy"]
        },
        allowedClasses: {},
        allowedSchemes: ["http", "https", "mailto"],
        allowedTags: ["a", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul"],
        filter: null,
        transformText: null
      });
    };
  }, function (e, t, n) {
    "use strict";

    function a(e) {
      return /^\{[\s\S]*\}$/.test(JSON.stringify(e));
    }
    function s(e) {
      return "[object Function]" === {}.toString.call(e);
    }
    function l(t) {
      if ("string" == typeof t) try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }
    function c() {
      if (!(this instanceof c)) return new c();
    }
    function u(e, t) {
      var n = arguments,
        r = null;
      if (d = d || c(), 0 === n.length) return d.get();
      if (1 === n.length) {
        if ("string" == typeof e) return d.get(e);
        if (a(e)) return d.set(e);
      }
      if (2 === n.length && "string" == typeof e) {
        if (!t) return d.remove(e);
        if (t && "string" == typeof t) return d.set(e, t);
        t && s(t) && (r = null, r = t(e, d.get(e)), u.set(e, r));
      }
      if (2 === n.length && (n = e, "[object Array]" === {}.toString.call(n)) && s(t)) for (var o = 0, i = e.length; o < i; o++) r = t(e[o], d.get(e[o])), u.set(e[o], r);
      return u;
    }
    t.__esModule = !0;
    var r,
      p = function (e) {
        var t,
          n = "_Is_Incognit";
        try {
          e.setItem(n, "yes");
        } catch (n) {
          -1 < ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].indexOf(n.name) && (t = function () {}, e.__proto__ = {
            setItem: t,
            getItem: t,
            removeItem: t,
            clear: t
          });
        } finally {
          "yes" === e.getItem(n) && e.removeItem(n);
        }
        return e;
      }(p = window.localStorage),
      d = null;
    for (r in c.prototype = {
      set: function (e, t) {
        if (e && !a(e)) p.setItem(e, void 0 === (t = t) || "function" == typeof t ? t + "" : JSON.stringify(t));else if (a(e)) for (var n in e) this.set(n, e[n]);
        return this;
      },
      get: function (e) {
        var n;
        if (!e) return n = {}, this.each(function (e, t) {
          return n[e] = t;
        }), n;
        if ("?" === e.charAt(0)) return this.has(e.substr(1));
        var t = arguments;
        if (1 < t.length) {
          for (var r = {}, o = 0, i = t.length; o < i; o++) {
            var a = l(p.getItem(t[o]));
            a && (r[t[o]] = a);
          }
          return r;
        }
        return l(p.getItem(e));
      },
      clear: function () {
        return p.clear(), this;
      },
      remove: function (e) {
        var t = this.get(e);
        return p.removeItem(e), t;
      },
      has: function (e) {
        return {}.hasOwnProperty.call(this.get(), e);
      },
      keys: function () {
        var t = [];
        return this.each(function (e) {
          t.push(e);
        }), t;
      },
      each: function (e) {
        for (var t = 0, n = p.length; t < n; t++) {
          var r = p.key(t);
          e(r, this.get(r));
        }
        return this;
      },
      search: function (e) {
        for (var t = this.keys(), n = {}, r = 0, o = t.length; r < o; r++) -1 < t[r].indexOf(e) && (n[t[r]] = this.get(t[r]));
        return n;
      }
    }) u[r] = c.prototype[r];
    t.default = u;
  }, function (e, t, n) {
    var r, o, i, a;
    function s(e, t, n) {
      return n = Object.create(s.fn), e && n.push.apply(n, e[i] ? [e] : "" + e === e ? /</.test(e) ? ((t = o.createElement(t)).innerHTML = e, t.children) : t ? (t = s(t)[0]) ? t[a](e) : n : o[a](e) : e), n;
    }
    o = document, i = "addEventListener", a = "querySelectorAll", s.fn = [], s.one = function (e, t) {
      return s(e, t)[0] || null;
    }, r = s, void 0 !== (t = function () {
      return r;
    }.apply(t, [])) && (e.exports = t);
  }, function (e, t, n) {
    function d(e) {
      return null == e;
    }
    function r(e) {
      (e = function (e) {
        var t,
          n = {};
        for (t in e) n[t] = e[t];
        return n;
      }(e || {})).whiteList = e.whiteList || o.whiteList, e.onAttr = e.onAttr || o.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || o.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || o.safeAttrValue, this.options = e;
    }
    var o = n(16),
      i = n(58);
    n(17), r.prototype.process = function (e) {
      if (!(e = (e = e || "").toString())) return "";
      var t = this.options,
        l = t.whiteList,
        c = t.onAttr,
        u = t.onIgnoreAttr,
        p = t.safeAttrValue;
      return i(e, function (e, t, n, r, o) {
        var i,
          a = l[n],
          s = !1;
        if (!0 === a ? s = a : "function" == typeof a ? s = a(r) : a instanceof RegExp && (s = a.test(r)), !0 !== s && (s = !1), r = p(n, r)) return a = {
          position: t,
          sourcePosition: e,
          source: o,
          isWhite: s
        }, s ? d(i = c(n, r, a)) ? n + ":" + r : i : d(i = u(n, r, a)) ? void 0 : i;
      });
    }, e.exports = r;
  }, function (e, t, n) {
    var u = n(17);
    e.exports = function (r, o) {
      function e() {
        var e, t, n;
        i || -1 !== (t = (e = u.trim(r.slice(a, s))).indexOf(":")) && (n = u.trim(e.slice(0, t)), t = u.trim(e.slice(t + 1)), n && (n = o(a, l.length, n, t, e)) && (l += n + "; ")), a = s + 1;
      }
      ";" !== (r = u.trimRight(r))[r.length - 1] && (r += ";");
      for (var t = r.length, i = !1, a = 0, s = 0, l = ""; s < t; s++) {
        var n = r[s];
        if ("/" === n && "*" === r[s + 1]) {
          var c = r.indexOf("*/", s + 2);
          if (-1 === c) break;
          a = (s = c + 1) + 1, i = !1;
        } else "(" === n ? i = !0 : ")" === n ? i = !1 : ";" === n ? i || e() : "\n" === n && e();
      }
      return u.trim(l);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
      o = n(1),
      i = r("%TypeError%"),
      a = n(61),
      s = r("%Reflect.apply%", !0) || o("%Function.prototype.apply%");
    e.exports = function (e, t) {
      var n = 2 < arguments.length ? arguments[2] : [];
      if (a(n)) return s(e, t, n);
      throw new i("Assertion failed: optional `argumentsList`, if provided, must be a List");
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%TypeError%"),
      o = n(19),
      i = n(8);
    e.exports = function (e, t) {
      if ("Object" !== i(e)) throw new r("Assertion failed: `O` must be an Object");
      if (o(t)) return t in e;
      throw new r("Assertion failed: `P` must be a Property Key");
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%Array%"),
      o = !r.isArray && n(1)("Object.prototype.toString");
    e.exports = r.isArray || function (e) {
      return "[object Array]" === o(e);
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = n(11);
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%TypeError%"),
      o = n(18),
      i = n(65),
      a = n(8);
    e.exports = function (e) {
      if ("Object" !== a(e)) throw new r("Assertion failed: `obj` must be an Object");
      return i(o(e, "length"));
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(70),
      o = n(66);
    e.exports = function (e) {
      e = o(e);
      return 0 === (e = 0 !== e ? r(e) : e) ? 0 : e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(79),
      o = n(64);
    e.exports = function (e) {
      e = o(e);
      return e <= 0 ? 0 : r < e ? r : e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
      o = r("%TypeError%"),
      i = r("%Number%"),
      a = r("%RegExp%"),
      s = r("%parseInt%"),
      r = n(1),
      l = n(80),
      c = n(78),
      u = r("String.prototype.slice"),
      p = l(/^0b[01]+$/i),
      d = l(/^0o[0-7]+$/i),
      f = l(/^[-+]0x[0-9a-f]+$/i),
      h = l(new a("[" + ["\x85", "\u200b", "\ufffe"].join("") + "]", "g")),
      l = ["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join(""),
      g = new RegExp("(^[" + l + "]+)|([" + l + "]+$)", "g"),
      v = r("String.prototype.replace"),
      m = n(68);
    e.exports = function e(t) {
      t = c(t) ? t : m(t, i);
      if ("symbol" == typeof t) throw new o("Cannot convert a Symbol value to a number");
      if ("bigint" == typeof t) throw new o("Conversion from 'BigInt' to 'number' is not allowed.");
      if ("string" == typeof t) {
        if (p(t)) return e(s(u(t, 2), 2));
        if (d(t)) return e(s(u(t, 2), 8));
        if (h(t) || f(t)) return NaN;
        var n = v(t, g, "");
        if (n !== t) return e(n);
      }
      return i(t);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%Object%"),
      o = n(5);
    e.exports = function (e) {
      return o(e), r(e);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(83);
    e.exports = function (e) {
      return 1 < arguments.length ? r(e, arguments[1]) : r(e);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%TypeError%");
    e.exports = function (e, t) {
      if (null == e) throw new r(t || "Cannot call method on " + e);
      return e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(74),
      o = n(75),
      i = n(71),
      a = n(77),
      s = n(76),
      l = n(81);
    e.exports = function (e) {
      e = i(e);
      return a(e) ? 0 : 0 !== e && s(e) ? l(e) * o(r(e)) : e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(72);
    e.exports = function (e) {
      e = r(e, Number);
      if ("string" != typeof e) return +e;
      e = e.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
      return /^0[ob]|^[+-]0x/.test(e) ? NaN : +e;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = n(84);
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("%Math.abs%");
    e.exports = function (e) {
      return r(e);
    };
  }, function (e, t, n) {
    "use strict";

    var r = Math.floor;
    e.exports = function (e) {
      return r(e);
    };
  }, function (e, t, n) {
    "use strict";

    var r = Number.isNaN || function (e) {
      return e != e;
    };
    e.exports = Number.isFinite || function (e) {
      return "number" == typeof e && !r(e) && e !== 1 / 0 && e !== -1 / 0;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = Number.isNaN || function (e) {
      return e != e;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      return null === e || "function" != typeof e && "object" != typeof e;
    };
  }, function (e, t, n) {
    "use strict";

    var n = n(0),
      r = n("%Math%"),
      n = n("%Number%");
    e.exports = n.MAX_SAFE_INTEGER || r.pow(2, 53) - 1;
  }, function (e, t, n) {
    "use strict";

    var r = n(0)("RegExp.prototype.test"),
      o = n(4);
    e.exports = function (e) {
      return o(r, e);
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      return 0 <= e ? 1 : -1;
    };
  }, function (e, t) {
    e.exports = function (e) {
      var r = !0,
        t = !0,
        n = !1;
      if ("function" != typeof e) return !1;
      try {
        e.call("f", function (e, t, n) {
          "object" != typeof n && (r = !1);
        }), e.call([null], function () {
          "use strict";

          t = "string" == typeof this;
        }, "x");
      } catch (e) {
        n = !0;
      }
      return !n && r && t;
    };
  }, function (e, t, n) {
    "use strict";

    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
      u = n(21),
      p = n(11),
      d = n(91),
      f = n(93);
    e.exports = function (e) {
      if (u(e)) return e;
      var t,
        n = "default";
      if (1 < arguments.length && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number")), c && (Symbol.toPrimitive ? t = function (e, t) {
        var n = e[t];
        if (null != n) {
          if (p(n)) return n;
          throw new TypeError(n + " returned for property " + t + " of object " + e + " is not a function");
        }
      }(e, Symbol.toPrimitive) : f(e) && (t = Symbol.prototype.valueOf)), void 0 === t) {
        "default" === n && (d(e) || f(e)) && (n = "string");
        var r = e,
          o = "default" === n ? "number" : n;
        if (null == r) throw new TypeError("Cannot call method on " + r);
        if ("string" != typeof o || "number" !== o && "string" !== o) throw new TypeError('hint must be "string" or "number"');
        for (var i, a, s = "string" === o ? ["toString", "valueOf"] : ["valueOf", "toString"], l = 0; l < s.length; ++l) if (i = r[s[l]], p(i) && (a = i.call(r), u(a))) return a;
        throw new TypeError("No default value");
      }
      o = t.call(e, n);
      if (u(o)) return o;
      throw new TypeError("unable to convert exotic object to primitive");
    };
  }, function (e, t, n) {
    "use strict";

    var i = Object.prototype.toString,
      a = n(21),
      s = n(11),
      r = function (e) {
        var t;
        if ((t = 1 < arguments.length ? arguments[1] : "[object Date]" === i.call(e) ? String : Number) !== String && t !== Number) throw new TypeError("invalid [[DefaultValue]] hint supplied");
        for (var n, r = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"], o = 0; o < r.length; ++o) if (s(e[r[o]]) && (n = e[r[o]](), a(n))) return n;
        throw new TypeError("No default value");
      };
    e.exports = function (e) {
      return a(e) ? e : 1 < arguments.length ? r(e, arguments[1]) : r(e);
    };
  }, function (e, t, n) {
    "use strict";

    var l = Array.prototype.slice,
      c = Object.prototype.toString;
    e.exports = function (t) {
      var n = this;
      if ("function" != typeof n || "[object Function]" !== c.call(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
      for (var r = l.call(arguments, 1), e = Math.max(0, n.length - r.length), o = [], i = 0; i < e; i++) o.push("$" + i);
      var a,
        s = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(function () {
          var e;
          return this instanceof s ? (e = n.apply(this, r.concat(l.call(arguments))), Object(e) === e ? e : this) : n.apply(t, r.concat(l.call(arguments)));
        });
      return n.prototype && ((a = function () {}).prototype = n.prototype, s.prototype = new a(), a.prototype = null), s;
    };
  }, function (e, t, n) {
    e.exports = function () {
      "use strict";

      function l(e) {
        return '<span style="color: slategray">' + e + "</span>";
      }
      var c = function (e, t) {
          return t = {
            exports: {}
          }, e(t, t.exports), t.exports;
        }(function (e) {
          var t = e.exports = function () {
            return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm");
          };
          t.line = function () {
            return /(?:^|\s)\/\/(.+?)$/gm;
          }, t.block = function () {
            return /\/\*([\S\s]*?)\*\//gm;
          };
        }),
        u = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
      return function (e, t) {
        void 0 === t && (t = {});
        var i = t.colors;
        void 0 === i && (i = u);
        var a = 0,
          s = {},
          n = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
          r = /</,
          o = new RegExp("(" + n.source + "|" + r.source + ")|(" + c().source + ")", "gmi");
        return e.replace(o, function (e, t, n) {
          if (n) return l(n);
          if ("<" === t) return "&lt;";
          var r;
          s[t] ? r = s[t] : (r = i[a], s[t] = r);
          var o = '<span style="color: #' + r + '">' + t + "</span>";
          return a = ++a % i.length, o;
        });
      };
    }();
  }, function (e, t, n) {
    "use strict";

    e.exports = {
      allowedAttributes: {
        a: ["href", "name", "target", "title", "aria-label"],
        iframe: ["allowfullscreen", "frameborder", "src"],
        img: ["src", "alt", "title", "aria-label"]
      },
      allowedClasses: {},
      allowedSchemes: ["http", "https", "mailto"],
      allowedTags: ["a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul"],
      filter: null
    };
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      var r = [],
        n = !0 === n ? t : o({}, s, t),
        t = a(r, n);
      return i(e, t), r.join("");
    }
    n(10);
    var o = n(50),
      i = n(89),
      a = n(90),
      s = n(87);
    r.defaults = s, e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var p = n(10),
      d = n(28),
      f = (n(26), n(27)),
      h = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
      g = /^<\s*\/\s*([\w:-]+)[^>]*>/,
      v = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
      m = /^</,
      y = /^<\s*\//;
    e.exports = function (r, a) {
      function e() {
        var e, t;
        "\x3c!--" === r.substr(0, 4) ? 0 <= (t = r.indexOf("--\x3e")) && (a.comment && a.comment(r.substring(4, t)), r = r.substring(t + 3), s = !1) : y.test(r) ? n(g, i) : m.test(r) && n(h, o), s && (r = 0 <= (t = r.indexOf("<")) ? (e = r.substring(0, t), r.substring(t)) : (e = r, ""), a.chars && a.chars(e));
      }
      function n(e, t) {
        var n = r.match(e);
        n && (r = r.substring(n[0].length), n[0].replace(e, t), s = !1);
      }
      function o(e, t, n, r) {
        var i = {},
          t = d(t),
          r = f.voids[t] || !!r;
        n.replace(v, function (e, t, n, r, o) {
          i[t] = void 0 === n && void 0 === r && void 0 === o ? void 0 : p.decode(n || r || o || "");
        }), r || c.push(t), a.start && a.start(t, i, r);
      }
      function i(e, t) {
        var n,
          r = 0,
          o = d(t);
        if (o) for (r = c.length - 1; 0 <= r && c[r] !== o; r--);
        if (0 <= r) {
          for (n = c.length - 1; r <= n; n--) a.end && a.end(c[n]);
          c.length = r;
        }
      }
      (l = []).lastItem = function () {
        return l[l.length - 1];
      };
      for (var s, t, l, c = l, u = r; r;) s = !(t = void 0), e(), t = r === u, u = r, t && (r = "");
      i();
    };
  }, function (e, t, n) {
    "use strict";

    var c = n(10),
      u = n(28),
      p = n(26),
      i = n(27);
    e.exports = function (t, e) {
      function s(e) {
        t.push(e);
      }
      function n(e) {
        i.voids[e] || (!1 === o.ignoring ? o = {
          ignoring: e,
          depth: 1
        } : o.ignoring === e && o.depth++);
      }
      function r() {
        o = {
          ignoring: !1,
          depth: 0
        };
      }
      var o,
        l = e || {};
      return r(), {
        start: function (e, i, t) {
          var a = u(e);
          return o.ignoring || -1 === (l.allowedTags || []).indexOf(a) || l.filter && !l.filter({
            tag: a,
            attrs: i
          }) ? void n(a) : (s("<"), s(a), Object.keys(i).forEach(function (e) {
            var t = i[e],
              n = (l.allowedClasses || {})[a] || [],
              r = (l.allowedAttributes || {})[a] || [],
              o = u(e);
            (r = "class" === o && -1 === r.indexOf(o) ? (t = t.split(" ").filter(function (e) {
              return n && -1 !== n.indexOf(e);
            }).join(" ").trim()).length : -1 !== r.indexOf(o) && (!0 !== p.uris[o] || function (t) {
              var e = t[0];
              if ("#" === e || "/" === e) return !0;
              e = t.indexOf(":");
              if (-1 === e) return !0;
              var n = t.indexOf("?");
              if (-1 !== n && n < e) return !0;
              n = t.indexOf("#");
              return -1 !== n && n < e || l.allowedSchemes.some(function (e) {
                return 0 === t.indexOf(e + ":");
              });
            }(t))) && (s(" "), s(e), "string" == typeof t && (s('="'), s(c.encode(t)), s('"')));
          }), void s(t ? "/>" : ">"));
        },
        end: function (e) {
          e = u(e), -1 !== (l.allowedTags || []).indexOf(e) && !1 === o.ignoring ? (s("</"), s(e), s(">")) : o.ignoring === e && --o.depth <= 0 && r();
        },
        chars: function (e) {
          !1 === o.ignoring && s(l.transformText ? l.transformText(e) : e);
        }
      };
    };
  }, function (e, t, n) {
    "use strict";

    var r = Date.prototype.getDay,
      o = Object.prototype.toString,
      i = n(24)();
    e.exports = function (e) {
      return "object" == typeof e && null !== e && (i ? function (e) {
        try {
          return r.call(e), !0;
        } catch (e) {
          return !1;
        }
      }(e) : "[object Date]" === o.call(e));
    };
  }, function (e, t, n) {
    "use strict";

    var r = String.prototype.valueOf,
      o = Object.prototype.toString,
      i = n(24)();
    e.exports = function (e) {
      return "string" == typeof e || "object" == typeof e && (i ? function (e) {
        try {
          return r.call(e), !0;
        } catch (e) {
          return !1;
        }
      }(e) : "[object String]" === o.call(e));
    };
  }, function (e, t, n) {
    "use strict";

    var r,
      o,
      i = Object.prototype.toString;
    n(22)() ? (r = Symbol.prototype.toString, o = /^Symbol\(.*\)$/, e.exports = function (e) {
      if ("symbol" == typeof e) return !0;
      if ("[object Symbol]" !== i.call(e)) return !1;
      try {
        return "symbol" == typeof (t = e).valueOf() && o.test(r.call(t));
      } catch (e) {
        return !1;
      }
      var t;
    }) : e.exports = function (e) {
      return !1;
    };
  }, function (e, t, n) {
    e.exports = function () {
      "use strict";

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function M(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      function F(e, t) {
        if (e) {
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
        }
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = F(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        return n = e[Symbol.iterator](), n.next.bind(n);
      }
      function L(e, t) {
        if (t) {
          if (K.test(e)) return e.replace(Z, n);
        } else if (G.test(e)) return e.replace(J, n);
        return e;
      }
      function i(e) {
        return e.replace(Y, function (e, t) {
          return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
        });
      }
      function N(n, e) {
        n = n.source || n, e = e || "";
        var r = {
          replace: function (e, t) {
            return t = t.source || t, t = t.replace(ee, "$1"), n = n.replace(e, t), r;
          },
          getRegex: function () {
            return new RegExp(n, e);
          }
        };
        return r;
      }
      function U(e, t, n) {
        if (e) {
          var r;
          try {
            r = decodeURIComponent(i(n)).replace(te, "").toLowerCase();
          } catch (e) {
            return null;
          }
          if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null;
        }
        t && !ne.test(n) && (n = a(t, n));
        try {
          n = encodeURI(n).replace(/%25/g, "%");
        } catch (e) {
          return null;
        }
        return n;
      }
      function a(e, t) {
        l[" " + e] || (re.test(e) ? l[" " + e] = e + "/" : l[" " + e] = s(e, "/", !0)), e = l[" " + e];
        var n = -1 === e.indexOf(":");
        return "//" === t.substring(0, 2) ? n ? t : e.replace(oe, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(ie, "$1") + t : e + t;
      }
      function B(e) {
        for (var t, n, r = 1; r < arguments.length; r++) {
          t = arguments[r];
          for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }
      function D(e, t) {
        var n = e.replace(/\|/g, function (e, t, n) {
            for (var r = !1, o = t; --o >= 0 && "\\" === n[o];) r = !r;
            return r ? "|" : " |";
          }),
          r = n.split(/ \|/),
          o = 0;
        if (r.length > t) r.splice(t);else for (; r.length < t;) r.push("");
        for (; o < r.length; o++) r[o] = r[o].trim().replace(/\\\|/g, "|");
        return r;
      }
      function s(e, t, n) {
        var r = e.length;
        if (0 === r) return "";
        for (var o = 0; o < r;) {
          var i = e.charAt(r - o - 1);
          if (i !== t || n) {
            if (i === t || !n) break;
            o++;
          } else o++;
        }
        return e.substr(0, r - o);
      }
      function q(e, t) {
        if (-1 === e.indexOf(t[1])) return -1;
        for (var n = e.length, r = 0, o = 0; o < n; o++) if ("\\" === e[o]) o++;else if (e[o] === t[0]) r++;else if (e[o] === t[1] && --r < 0) return o;
        return -1;
      }
      function Q(e) {
        e && e.sanitize && e.silent;
      }
      function W(e, t) {
        if (t < 1) return "";
        for (var n = ""; t > 1;) 1 & t && (n += e), t >>= 1, e += e;
        return n + e;
      }
      function u(e, t, n) {
        var r = t.href,
          o = t.title ? f(t.title) : null,
          i = e[1].replace(/\\([\[\]])/g, "$1");
        return "!" !== e[0].charAt(0) ? {
          type: "link",
          raw: n,
          href: r,
          title: o,
          text: i
        } : {
          type: "image",
          raw: n,
          href: r,
          title: o,
          text: f(i)
        };
      }
      function V(e, t) {
        var n = e.match(/^(\s+)(?:```)/);
        if (null === n) return t;
        var r = n[1];
        return t.split("\n").map(function (e) {
          var t = e.match(/^\s+/);
          return null === t ? e : t[0].length >= r.length ? e.slice(r.length) : e;
        }).join("\n");
      }
      function H(e) {
        return e.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026");
      }
      function p(e) {
        var t,
          n,
          r = "",
          o = e.length;
        for (t = 0; t < o; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), r += "&#" + n + ";";
        return r;
      }
      function g(e, n, r) {
        if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        if ("function" == typeof n && (r = n, n = null), n = C({}, g.defaults, n || {}), P(n), r) {
          var o,
            i = n.highlight;
          try {
            o = O.lex(e, n);
          } catch (e) {
            return r(e);
          }
          var a = function (t) {
            var e;
            if (!t) try {
              e = I.parse(o, n);
            } catch (e) {
              t = e;
            }
            return n.highlight = i, t ? r(t) : r(null, e);
          };
          if (!i || i.length < 3) return a();
          if (delete n.highlight, !o.length) return a();
          var s = 0;
          return g.walkTokens(o, function (n) {
            "code" === n.type && (s++, setTimeout(function () {
              i(n.text, n.lang, function (e, t) {
                if (e) return a(e);
                null != t && t !== n.text && (n.text = t, n.escaped = !0), 0 === --s && a();
              });
            }, 0));
          }), void (0 === s && a());
        }
        try {
          var t = O.lex(e, n);
          return n.walkTokens && g.walkTokens(t, n.walkTokens), I.parse(t, n);
        } catch (e) {
          if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", n.silent) return "<p>An error occurred:</p><pre>" + R(e.message + "", !0) + "</pre>";
          throw e;
        }
      }
      var e = function (e) {
          var t = {
            exports: {}
          };
          return e(t, t.exports), t.exports;
        }(function (t) {
          function e() {
            return {
              baseUrl: null,
              breaks: !1,
              gfm: !0,
              headerIds: !0,
              headerPrefix: "",
              highlight: null,
              langPrefix: "language-",
              mangle: !0,
              pedantic: !1,
              renderer: null,
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              tokenizer: null,
              walkTokens: null,
              xhtml: !1
            };
          }
          function n(e) {
            t.exports.defaults = e;
          }
          t.exports = {
            defaults: e(),
            getDefaults: e,
            changeDefaults: n
          };
        }),
        K = /[&<>"']/,
        Z = /[&<>"']/g,
        G = /[<>"']|&(?!#?\w+;)/,
        J = /[<>"']|&(?!#?\w+;)/g,
        X = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        },
        n = function (e) {
          return X[e];
        },
        Y = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
        ee = /(^|[^\[])\^/g,
        te = /[^\w:]/g,
        ne = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,
        l = {},
        re = /^[^:]+:\/*[^/]*$/,
        oe = /^([^:]+:)[\s\S]*$/,
        ie = /^([^:]+:\/*[^/]*)[\s\S]*$/,
        ae,
        t = {
          escape: L,
          unescape: i,
          edit: N,
          cleanUrl: U,
          resolveUrl: a,
          noopTest: {
            exec: function () {}
          },
          merge: B,
          splitCells: D,
          rtrim: s,
          findClosingBracket: q,
          checkSanitizeDeprecation: Q,
          repeatString: W
        },
        se = e.defaults,
        d = t.rtrim,
        c = t.splitCells,
        f = t.escape,
        le = t.findClosingBracket,
        v = function () {
          function e(e) {
            this.options = e || se;
          }
          var t = e.prototype;
          return t.space = function (e) {
            var t = this.rules.block.newline.exec(e);
            if (t) return t[0].length > 1 ? {
              type: "space",
              raw: t[0]
            } : {
              raw: "\n"
            };
          }, t.code = function (e, t) {
            var n = this.rules.block.code.exec(e);
            if (n) {
              var r = t[t.length - 1];
              if (r && "paragraph" === r.type) return {
                raw: n[0],
                text: n[0].trimRight()
              };
              var o = n[0].replace(/^ {1,4}/gm, "");
              return {
                type: "code",
                raw: n[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? o : d(o, "\n")
              };
            }
          }, t.fences = function (e) {
            var t = this.rules.block.fences.exec(e);
            if (t) {
              var n = t[0],
                r = V(n, t[3] || "");
              return {
                type: "code",
                raw: n,
                lang: t[2] ? t[2].trim() : t[2],
                text: r
              };
            }
          }, t.heading = function (e) {
            var t = this.rules.block.heading.exec(e);
            if (t) {
              var n = t[2].trim();
              if (/#$/.test(n)) {
                var r = d(n, "#");
                this.options.pedantic ? n = r.trim() : r && !/ $/.test(r) || (n = r.trim());
              }
              return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: n
              };
            }
          }, t.nptable = function (e) {
            var t = this.rules.block.nptable.exec(e);
            if (t) {
              var n = {
                type: "table",
                header: c(t[1].replace(/^ *| *\| *$/g, "")),
                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                raw: t[0]
              };
              if (n.header.length === n.align.length) {
                var r,
                  o = n.align.length;
                for (r = 0; r < o; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                for (o = n.cells.length, r = 0; r < o; r++) n.cells[r] = c(n.cells[r], n.header.length);
                return n;
              }
            }
          }, t.hr = function (e) {
            var t = this.rules.block.hr.exec(e);
            if (t) return {
              type: "hr",
              raw: t[0]
            };
          }, t.blockquote = function (e) {
            var t = this.rules.block.blockquote.exec(e);
            if (t) {
              var n = t[0].replace(/^ *> ?/gm, "");
              return {
                type: "blockquote",
                raw: t[0],
                text: n
              };
            }
          }, t.list = function (e) {
            var t = this.rules.block.list.exec(e);
            if (t) {
              var n,
                r,
                o,
                i,
                a,
                s,
                l,
                c,
                u = t[0],
                p = t[2],
                d = p.length > 1,
                f = {
                  type: "list",
                  raw: u,
                  ordered: d,
                  start: d ? +p.slice(0, -1) : "",
                  loose: !1,
                  items: []
                },
                h = t[0].match(this.rules.block.item),
                g = !1,
                v = h.length;
              o = this.rules.block.listItemStart.exec(h[0]);
              for (var m = 0; m < v; m++) {
                if (n = h[m], u = n, m !== v - 1) {
                  if (i = this.rules.block.listItemStart.exec(h[m + 1]), this.options.pedantic ? i[1].length > o[1].length : i[1].length > o[0].length || i[1].length > 3) {
                    h.splice(m, 2, h[m] + "\n" + h[m + 1]), m--, v--;
                    continue;
                  }
                  (!this.options.pedantic || this.options.smartLists ? i[2][i[2].length - 1] !== p[p.length - 1] : d === (1 === i[2].length)) && (a = h.slice(m + 1).join("\n"), f.raw = f.raw.substring(0, f.raw.length - a.length), m = v - 1), o = i;
                }
                r = n.length, n = n.replace(/^ *([*+-]|\d+[.)]) ?/, ""), ~n.indexOf("\n ") && (r -= n.length, n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + r + "}", "gm"), "")), s = g || /\n\n(?!\s*$)/.test(n), m !== v - 1 && (g = "\n" === n.charAt(n.length - 1), s || (s = g)), s && (f.loose = !0), this.options.gfm && (l = /^\[[ xX]\] /.test(n), c = void 0, l && (c = " " !== n[1], n = n.replace(/^\[[ xX]\] +/, ""))), f.items.push({
                  type: "list_item",
                  raw: u,
                  task: l,
                  checked: c,
                  loose: s,
                  text: n
                });
              }
              return f;
            }
          }, t.html = function (e) {
            var t = this.rules.block.html.exec(e);
            if (t) return {
              type: this.options.sanitize ? "paragraph" : "html",
              raw: t[0],
              pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : f(t[0]) : t[0]
            };
          }, t.def = function (e) {
            var t = this.rules.block.def.exec(e);
            if (t) {
              t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
              return {
                tag: t[1].toLowerCase().replace(/\s+/g, " "),
                raw: t[0],
                href: t[2],
                title: t[3]
              };
            }
          }, t.table = function (e) {
            var t = this.rules.block.table.exec(e);
            if (t) {
              var n = {
                type: "table",
                header: c(t[1].replace(/^ *| *\| *$/g, "")),
                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
              };
              if (n.header.length === n.align.length) {
                n.raw = t[0];
                var r,
                  o = n.align.length;
                for (r = 0; r < o; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                for (o = n.cells.length, r = 0; r < o; r++) n.cells[r] = c(n.cells[r].replace(/^ *\| *| *\| *$/g, ""), n.header.length);
                return n;
              }
            }
          }, t.lheading = function (e) {
            var t = this.rules.block.lheading.exec(e);
            if (t) return {
              type: "heading",
              raw: t[0],
              depth: "=" === t[2].charAt(0) ? 1 : 2,
              text: t[1]
            };
          }, t.paragraph = function (e) {
            var t = this.rules.block.paragraph.exec(e);
            if (t) return {
              type: "paragraph",
              raw: t[0],
              text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
            };
          }, t.text = function (e, t) {
            var n = this.rules.block.text.exec(e);
            if (n) {
              var r = t[t.length - 1];
              return r && "text" === r.type ? {
                raw: n[0],
                text: n[0]
              } : {
                type: "text",
                raw: n[0],
                text: n[0]
              };
            }
          }, t.escape = function (e) {
            var t = this.rules.inline.escape.exec(e);
            if (t) return {
              type: "escape",
              raw: t[0],
              text: f(t[1])
            };
          }, t.tag = function (e, t, n) {
            var r = this.rules.inline.tag.exec(e);
            if (r) return !t && /^<a /i.test(r[0]) ? t = !0 : t && /^<\/a>/i.test(r[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1), {
              type: this.options.sanitize ? "text" : "html",
              raw: r[0],
              inLink: t,
              inRawBlock: n,
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : f(r[0]) : r[0]
            };
          }, t.link = function (e) {
            var t = this.rules.inline.link.exec(e);
            if (t) {
              var n = t[2].trim();
              if (!this.options.pedantic && /^</.test(n)) {
                if (!/>$/.test(n)) return;
                var r = d(n.slice(0, -1), "\\");
                if ((n.length - r.length) % 2 == 0) return;
              } else {
                var o = le(t[2], "()");
                if (o > -1) {
                  var i = 0 === t[0].indexOf("!") ? 5 : 4,
                    a = i + t[1].length + o;
                  t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, a).trim(), t[3] = "";
                }
              }
              var s = t[2],
                l = "";
              if (this.options.pedantic) {
                var c = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                c && (s = c[1], l = c[3]);
              } else l = t[3] ? t[3].slice(1, -1) : "";
              return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), u(t, {
                href: s ? s.replace(this.rules.inline._escapes, "$1") : s,
                title: l ? l.replace(this.rules.inline._escapes, "$1") : l
              }, t[0]);
            }
          }, t.reflink = function (e, t) {
            var n;
            if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
              var r = (n[2] || n[1]).replace(/\s+/g, " ");
              if (!(r = t[r.toLowerCase()]) || !r.href) {
                var o = n[0].charAt(0);
                return {
                  type: "text",
                  raw: o,
                  text: o
                };
              }
              return u(n, r, n[0]);
            }
          }, t.strong = function (e, t, n) {
            void 0 === n && (n = "");
            var r = this.rules.inline.strong.start.exec(e);
            if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
              t = t.slice(-1 * e.length);
              var o = "**" === r[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
              o.lastIndex = 0;
              for (var i; null != (r = o.exec(t));) if (i = this.rules.inline.strong.middle.exec(t.slice(0, r.index + 3))) return {
                type: "strong",
                raw: e.slice(0, i[0].length),
                text: e.slice(2, i[0].length - 2)
              };
            }
          }, t.em = function (e, t, n) {
            void 0 === n && (n = "");
            var r = this.rules.inline.em.start.exec(e);
            if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
              t = t.slice(-1 * e.length);
              var o = "*" === r[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
              o.lastIndex = 0;
              for (var i; null != (r = o.exec(t));) if (i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))) return {
                type: "em",
                raw: e.slice(0, i[0].length),
                text: e.slice(1, i[0].length - 1)
              };
            }
          }, t.codespan = function (e) {
            var t = this.rules.inline.code.exec(e);
            if (t) {
              var n = t[2].replace(/\n/g, " "),
                r = /[^ ]/.test(n),
                o = /^ /.test(n) && / $/.test(n);
              return r && o && (n = n.substring(1, n.length - 1)), n = f(n, !0), {
                type: "codespan",
                raw: t[0],
                text: n
              };
            }
          }, t.br = function (e) {
            var t = this.rules.inline.br.exec(e);
            if (t) return {
              type: "br",
              raw: t[0]
            };
          }, t.del = function (e) {
            var t = this.rules.inline.del.exec(e);
            if (t) return {
              type: "del",
              raw: t[0],
              text: t[2]
            };
          }, t.autolink = function (e, t) {
            var n = this.rules.inline.autolink.exec(e);
            if (n) {
              var r, o;
              return "@" === n[2] ? (r = f(this.options.mangle ? t(n[1]) : n[1]), o = "mailto:" + r) : (r = f(n[1]), o = r), {
                type: "link",
                raw: n[0],
                text: r,
                href: o,
                tokens: [{
                  type: "text",
                  raw: r,
                  text: r
                }]
              };
            }
          }, t.url = function (e, t) {
            var n;
            if (n = this.rules.inline.url.exec(e)) {
              var r, o;
              if ("@" === n[2]) r = f(this.options.mangle ? t(n[0]) : n[0]), o = "mailto:" + r;else {
                var i;
                do {
                  i = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0];
                } while (i !== n[0]);
                r = f(n[0]), o = "www." === n[1] ? "http://" + r : r;
              }
              return {
                type: "link",
                raw: n[0],
                text: r,
                href: o,
                tokens: [{
                  type: "text",
                  raw: r,
                  text: r
                }]
              };
            }
          }, t.inlineText = function (e, t, n) {
            var r = this.rules.inline.text.exec(e);
            if (r) {
              var o;
              return o = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : f(r[0]) : r[0] : f(this.options.smartypants ? n(r[0]) : r[0]), {
                type: "text",
                raw: r[0],
                text: o
              };
            }
          }, e;
        }(),
        m = t.noopTest,
        y = t.edit,
        b = t.merge,
        w = {
          newline: /^(?: *(?:\n|$))+/,
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
          html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          nptable: m,
          table: m,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
          text: /^[^\n]+/,
          _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
          _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        },
        x = (w.def = y(w.def).replace("label", w._label).replace("title", w._title).getRegex(), w.bullet = /(?:[*+-]|\d{1,9}[.)])/, w.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, w.item = y(w.item, "gm").replace(/bull/g, w.bullet).getRegex(), w.listItemStart = y(/^( *)(bull)/).replace("bull", w.bullet).getRegex(), w.list = y(w.list).replace(/bull/g, w.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + w.def.source + ")").getRegex(), w._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", w._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, w.html = y(w.html, "i").replace("comment", w._comment).replace("tag", w._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), w.paragraph = y(w._paragraph).replace("hr", w.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", w._tag).getRegex(), w.blockquote = y(w.blockquote).replace("paragraph", w.paragraph).getRegex(), w.normal = b({}, w), w.gfm = b({}, w.normal, {
          nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
          table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        }), w.gfm.nptable = y(w.gfm.nptable).replace("hr", w.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", w._tag).getRegex(), w.gfm.table = y(w.gfm.table).replace("hr", w.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", w._tag).getRegex(), w.pedantic = b({}, w.normal, {
          html: y("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", w._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: m,
          paragraph: y(w.normal._paragraph).replace("hr", w.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", w.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
        }), {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: m,
          tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          reflinkSearch: "reflink|nolink(?!\\()",
          strong: {
            start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
            middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
            endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
            endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/
          },
          em: {
            start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
            middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
            endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
            endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/
          },
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: m,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
          punctuation: /^([\s*punctuation])/,
          _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
        }),
        k = (x.punctuation = y(x.punctuation).replace(/punctuation/g, x._punctuation).getRegex(), x._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", x._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", x._comment = y(w._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), x.em.start = y(x.em.start).replace(/punctuation/g, x._punctuation).getRegex(), x.em.middle = y(x.em.middle).replace(/punctuation/g, x._punctuation).replace(/overlapSkip/g, x._overlapSkip).getRegex(), x.em.endAst = y(x.em.endAst, "g").replace(/punctuation/g, x._punctuation).getRegex(), x.em.endUnd = y(x.em.endUnd, "g").replace(/punctuation/g, x._punctuation).getRegex(), x.strong.start = y(x.strong.start).replace(/punctuation/g, x._punctuation).getRegex(), x.strong.middle = y(x.strong.middle).replace(/punctuation/g, x._punctuation).replace(/overlapSkip/g, x._overlapSkip).getRegex(), x.strong.endAst = y(x.strong.endAst, "g").replace(/punctuation/g, x._punctuation).getRegex(), x.strong.endUnd = y(x.strong.endUnd, "g").replace(/punctuation/g, x._punctuation).getRegex(), x.blockSkip = y(x._blockSkip, "g").getRegex(), x.overlapSkip = y(x._overlapSkip, "g").getRegex(), x._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, x._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, x._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, x.autolink = y(x.autolink).replace("scheme", x._scheme).replace("email", x._email).getRegex(), x._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, x.tag = y(x.tag).replace("comment", x._comment).replace("attribute", x._attribute).getRegex(), x._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, x._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, x._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, x.link = y(x.link).replace("label", x._label).replace("href", x._href).replace("title", x._title).getRegex(), x.reflink = y(x.reflink).replace("label", x._label).getRegex(), x.reflinkSearch = y(x.reflinkSearch, "g").replace("reflink", x.reflink).replace("nolink", x.nolink).getRegex(), x.normal = b({}, x), x.pedantic = b({}, x.normal, {
          strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
          },
          em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
          },
          link: y(/^!?\[(label)\]\((.*?)\)/).replace("label", x._label).getRegex(),
          reflink: y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", x._label).getRegex()
        }), x.gfm = b({}, x.normal, {
          escape: y(x.escape).replace("])", "~|])").getRegex(),
          _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
        }), x.gfm.url = y(x.gfm.url, "i").replace("email", x.gfm._extended_email).getRegex(), x.breaks = b({}, x.gfm, {
          br: y(x.br).replace("{2,}", "*").getRegex(),
          text: y(x.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
        }), {
          block: w,
          inline: x
        }),
        ce = e.defaults,
        S = k.block,
        _ = k.inline,
        A = t.repeatString,
        O = function () {
          function n(e) {
            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || ce, this.options.tokenizer = this.options.tokenizer || new v(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
            var t = {
              block: S.normal,
              inline: _.normal
            };
            this.options.pedantic ? (t.block = S.pedantic, t.inline = _.pedantic) : this.options.gfm && (t.block = S.gfm, this.options.breaks ? t.inline = _.breaks : t.inline = _.gfm), this.tokenizer.rules = t;
          }
          n.lex = function (e, t) {
            return new n(t).lex(e);
          }, n.lexInline = function (e, t) {
            return new n(t).inlineTokens(e);
          };
          var e = n.prototype;
          return e.lex = function (e) {
            return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens;
          }, e.blockTokens = function (e, t, n) {
            void 0 === t && (t = []), void 0 === n && (n = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
            for (var r, o, i, a; e;) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.type && t.push(r);else if (r = this.tokenizer.code(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : (a = t[t.length - 1], a.raw += "\n" + r.raw, a.text += "\n" + r.text);else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r);else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r);else if (r = this.tokenizer.nptable(e)) e = e.substring(r.raw.length), t.push(r);else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r);else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), r.tokens = this.blockTokens(r.text, [], n), t.push(r);else if (r = this.tokenizer.list(e)) {
              for (e = e.substring(r.raw.length), i = r.items.length, o = 0; o < i; o++) r.items[o].tokens = this.blockTokens(r.items[o].text, [], !1);
              t.push(r);
            } else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r);else if (n && (r = this.tokenizer.def(e))) e = e.substring(r.raw.length), this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
              href: r.href,
              title: r.title
            });else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r);else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r);else if (n && (r = this.tokenizer.paragraph(e))) e = e.substring(r.raw.length), t.push(r);else if (r = this.tokenizer.text(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : (a = t[t.length - 1], a.raw += "\n" + r.raw, a.text += "\n" + r.text);else if (e) {
              var s = "Infinite loop on byte: " + e.charCodeAt(0);
              if (this.options.silent) break;
              throw new Error(s);
            }
            return t;
          }, e.inline = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s = e.length;
            for (t = 0; t < s; t++) switch (a = e[t], a.type) {
              case "paragraph":
              case "text":
              case "heading":
                a.tokens = [], this.inlineTokens(a.text, a.tokens);
                break;
              case "table":
                for (a.tokens = {
                  header: [],
                  cells: []
                }, o = a.header.length, n = 0; n < o; n++) a.tokens.header[n] = [], this.inlineTokens(a.header[n], a.tokens.header[n]);
                for (o = a.cells.length, n = 0; n < o; n++) for (i = a.cells[n], a.tokens.cells[n] = [], r = 0; r < i.length; r++) a.tokens.cells[n][r] = [], this.inlineTokens(i[r], a.tokens.cells[n][r]);
                break;
              case "blockquote":
                this.inline(a.tokens);
                break;
              case "list":
                for (o = a.items.length, n = 0; n < o; n++) this.inline(a.items[n].tokens);
            }
            return e;
          }, e.inlineTokens = function (e, t, n, r) {
            void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
            var o,
              i,
              a,
              s,
              l = e;
            if (this.tokens.links) {
              var c = Object.keys(this.tokens.links);
              if (c.length > 0) for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(l));) c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + A("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(l));) l = l.slice(0, i.index) + "[" + A("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; e;) if (a || (s = ""), a = !1, o = this.tokenizer.escape(e)) e = e.substring(o.raw.length), t.push(o);else if (o = this.tokenizer.tag(e, n, r)) e = e.substring(o.raw.length), n = o.inLink, r = o.inRawBlock, t.push(o);else if (o = this.tokenizer.link(e)) e = e.substring(o.raw.length), "link" === o.type && (o.tokens = this.inlineTokens(o.text, [], !0, r)), t.push(o);else if (o = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(o.raw.length), "link" === o.type && (o.tokens = this.inlineTokens(o.text, [], !0, r)), t.push(o);else if (o = this.tokenizer.strong(e, l, s)) e = e.substring(o.raw.length), o.tokens = this.inlineTokens(o.text, [], n, r), t.push(o);else if (o = this.tokenizer.em(e, l, s)) e = e.substring(o.raw.length), o.tokens = this.inlineTokens(o.text, [], n, r), t.push(o);else if (o = this.tokenizer.codespan(e)) e = e.substring(o.raw.length), t.push(o);else if (o = this.tokenizer.br(e)) e = e.substring(o.raw.length), t.push(o);else if (o = this.tokenizer.del(e)) e = e.substring(o.raw.length), o.tokens = this.inlineTokens(o.text, [], n, r), t.push(o);else if (o = this.tokenizer.autolink(e, p)) e = e.substring(o.raw.length), t.push(o);else if (n || !(o = this.tokenizer.url(e, p))) {
              if (o = this.tokenizer.inlineText(e, r, H)) e = e.substring(o.raw.length), s = o.raw.slice(-1), a = !0, t.push(o);else if (e) {
                var u = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) break;
                throw new Error(u);
              }
            } else e = e.substring(o.raw.length), t.push(o);
            return t;
          }, M(n, null, [{
            key: "rules",
            get: function () {
              return {
                block: S,
                inline: _
              };
            }
          }]), n;
        }(),
        ue = e.defaults,
        j = t.cleanUrl,
        $ = t.escape,
        E = function () {
          function e(e) {
            this.options = e || ue;
          }
          var t = e.prototype;
          return t.code = function (e, t, n) {
            var r = (t || "").match(/\S*/)[0];
            if (this.options.highlight) {
              var o = this.options.highlight(e, r);
              null != o && o !== e && (n = !0, e = o);
            }
            return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + $(r, !0) + '">' + (n ? e : $(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : $(e, !0)) + "</code></pre>\n";
          }, t.blockquote = function (e) {
            return "<blockquote>\n" + e + "</blockquote>\n";
          }, t.html = function (e) {
            return e;
          }, t.heading = function (e, t, n, r) {
            return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
          }, t.hr = function () {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }, t.list = function (e, t, n) {
            var r = t ? "ol" : "ul";
            return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n";
          }, t.listitem = function (e) {
            return "<li>" + e + "</li>\n";
          }, t.checkbox = function (e) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
          }, t.paragraph = function (e) {
            return "<p>" + e + "</p>\n";
          }, t.table = function (e, t) {
            return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
          }, t.tablerow = function (e) {
            return "<tr>\n" + e + "</tr>\n";
          }, t.tablecell = function (e, t) {
            var n = t.header ? "th" : "td";
            return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
          }, t.strong = function (e) {
            return "<strong>" + e + "</strong>";
          }, t.em = function (e) {
            return "<em>" + e + "</em>";
          }, t.codespan = function (e) {
            return "<code>" + e + "</code>";
          }, t.br = function () {
            return this.options.xhtml ? "<br/>" : "<br>";
          }, t.del = function (e) {
            return "<del>" + e + "</del>";
          }, t.link = function (e, t, n) {
            if (null === (e = j(this.options.sanitize, this.options.baseUrl, e))) return n;
            var r = '<a href="' + $(e) + '"';
            return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>";
          }, t.image = function (e, t, n) {
            if (null === (e = j(this.options.sanitize, this.options.baseUrl, e))) return n;
            var r = '<img src="' + e + '" alt="' + n + '"';
            return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">";
          }, t.text = function (e) {
            return e;
          }, e;
        }(),
        T = function () {
          function e() {}
          var t = e.prototype;
          return t.strong = function (e) {
            return e;
          }, t.em = function (e) {
            return e;
          }, t.codespan = function (e) {
            return e;
          }, t.del = function (e) {
            return e;
          }, t.html = function (e) {
            return e;
          }, t.text = function (e) {
            return e;
          }, t.link = function (e, t, n) {
            return "" + n;
          }, t.image = function (e, t, n) {
            return "" + n;
          }, t.br = function () {
            return "";
          }, e;
        }(),
        z = function () {
          function e() {
            this.seen = {};
          }
          var t = e.prototype;
          return t.serialize = function (e) {
            return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
          }, t.getNextSafeSlug = function (e, t) {
            var n = e,
              r = 0;
            if (this.seen.hasOwnProperty(n)) {
              r = this.seen[e];
              do {
                r++, n = e + "-" + r;
              } while (this.seen.hasOwnProperty(n));
            }
            return t || (this.seen[e] = r, this.seen[n] = 0), n;
          }, t.slug = function (e, t) {
            void 0 === t && (t = {});
            var n = this.serialize(e);
            return this.getNextSafeSlug(n, t.dryrun);
          }, e;
        }(),
        pe = e.defaults,
        de = t.unescape,
        I = function () {
          function n(e) {
            this.options = e || pe, this.options.renderer = this.options.renderer || new E(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new T(), this.slugger = new z();
          }
          n.parse = function (e, t) {
            return new n(t).parse(e);
          }, n.parseInline = function (e, t) {
            return new n(t).parseInline(e);
          };
          var e = n.prototype;
          return e.parse = function (e, t) {
            void 0 === t && (t = !0);
            var n,
              r,
              o,
              i,
              a,
              s,
              l,
              c,
              u,
              p,
              d,
              f,
              h,
              g,
              v,
              m,
              y,
              b,
              w = "",
              x = e.length;
            for (n = 0; n < x; n++) switch (p = e[n], p.type) {
              case "space":
                continue;
              case "hr":
                w += this.renderer.hr();
                continue;
              case "heading":
                w += this.renderer.heading(this.parseInline(p.tokens), p.depth, de(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
                continue;
              case "code":
                w += this.renderer.code(p.text, p.lang, p.escaped);
                continue;
              case "table":
                for (c = "", l = "", i = p.header.length, r = 0; r < i; r++) l += this.renderer.tablecell(this.parseInline(p.tokens.header[r]), {
                  header: !0,
                  align: p.align[r]
                });
                for (c += this.renderer.tablerow(l), u = "", i = p.cells.length, r = 0; r < i; r++) {
                  for (s = p.tokens.cells[r], l = "", a = s.length, o = 0; o < a; o++) l += this.renderer.tablecell(this.parseInline(s[o]), {
                    header: !1,
                    align: p.align[o]
                  });
                  u += this.renderer.tablerow(l);
                }
                w += this.renderer.table(c, u);
                continue;
              case "blockquote":
                u = this.parse(p.tokens), w += this.renderer.blockquote(u);
                continue;
              case "list":
                for (d = p.ordered, f = p.start, h = p.loose, i = p.items.length, u = "", r = 0; r < i; r++) v = p.items[r], m = v.checked, y = v.task, g = "", v.task && (b = this.renderer.checkbox(m), h ? v.tokens.length > 0 && "text" === v.tokens[0].type ? (v.tokens[0].text = b + " " + v.tokens[0].text, v.tokens[0].tokens && v.tokens[0].tokens.length > 0 && "text" === v.tokens[0].tokens[0].type && (v.tokens[0].tokens[0].text = b + " " + v.tokens[0].tokens[0].text)) : v.tokens.unshift({
                  type: "text",
                  text: b
                }) : g += b), g += this.parse(v.tokens, h), u += this.renderer.listitem(g, y, m);
                w += this.renderer.list(u, d, f);
                continue;
              case "html":
                w += this.renderer.html(p.text);
                continue;
              case "paragraph":
                w += this.renderer.paragraph(this.parseInline(p.tokens));
                continue;
              case "text":
                for (u = p.tokens ? this.parseInline(p.tokens) : p.text; n + 1 < x && "text" === e[n + 1].type;) p = e[++n], u += "\n" + (p.tokens ? this.parseInline(p.tokens) : p.text);
                w += t ? this.renderer.paragraph(u) : u;
                continue;
              default:
                var k = 'Token with "' + p.type + '" type was not found.';
                if (this.options.silent) return;
                throw new Error(k);
            }
            return w;
          }, e.parseInline = function (e, t) {
            t = t || this.renderer;
            var n,
              r,
              o = "",
              i = e.length;
            for (n = 0; n < i; n++) switch (r = e[n], r.type) {
              case "escape":
                o += t.text(r.text);
                break;
              case "html":
                o += t.html(r.text);
                break;
              case "link":
                o += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                break;
              case "image":
                o += t.image(r.href, r.title, r.text);
                break;
              case "strong":
                o += t.strong(this.parseInline(r.tokens, t));
                break;
              case "em":
                o += t.em(this.parseInline(r.tokens, t));
                break;
              case "codespan":
                o += t.codespan(r.text);
                break;
              case "br":
                o += t.br();
                break;
              case "del":
                o += t.del(this.parseInline(r.tokens, t));
                break;
              case "text":
                o += t.text(r.text);
                break;
              default:
                var a = 'Token with "' + r.type + '" type was not found.';
                if (this.options.silent) return;
                throw new Error(a);
            }
            return o;
          }, n;
        }(),
        C = t.merge,
        P = t.checkSanitizeDeprecation,
        R = t.escape,
        fe = e.getDefaults,
        he = e.changeDefaults,
        ge = e.defaults;
      return g.options = g.setOptions = function (e) {
        return C(g.defaults, e), he(g.defaults), g;
      }, g.getDefaults = fe, g.defaults = ge, g.use = function (s) {
        var t = C({}, s);
        if (s.renderer && function () {
          var a = g.defaults.renderer || new E();
          for (var e in s.renderer) !function (o) {
            var i = a[o];
            a[o] = function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              var r = s.renderer[o].apply(a, t);
              return !1 === r && (r = i.apply(a, t)), r;
            };
          }(e);
          t.renderer = a;
        }(), s.tokenizer && function () {
          var a = g.defaults.tokenizer || new v();
          for (var e in s.tokenizer) !function (o) {
            var i = a[o];
            a[o] = function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              var r = s.tokenizer[o].apply(a, t);
              return !1 === r && (r = i.apply(a, t)), r;
            };
          }(e);
          t.tokenizer = a;
        }(), s.walkTokens) {
          var n = g.defaults.walkTokens;
          t.walkTokens = function (e) {
            s.walkTokens(e), n && n(e);
          };
        }
        g.setOptions(t);
      }, g.walkTokens = function (e, t) {
        for (var n, r = h(e); !(n = r()).done;) {
          var o = n.value;
          switch (t(o), o.type) {
            case "table":
              for (var i, a = h(o.tokens.header); !(i = a()).done;) {
                var s = i.value;
                g.walkTokens(s, t);
              }
              for (var l, c = h(o.tokens.cells); !(l = c()).done;) for (var u, p = l.value, d = h(p); !(u = d()).done;) {
                var f = u.value;
                g.walkTokens(f, t);
              }
              break;
            case "list":
              g.walkTokens(o.items, t);
              break;
            default:
              o.tokens && g.walkTokens(o.tokens, t);
          }
        }
      }, g.parseInline = function (e, t) {
        if (void 0 === e || null === e) throw new Error("marked.parseInline(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        t = C({}, g.defaults, t || {}), P(t);
        try {
          var n = O.lexInline(e, t);
          return t.walkTokens && g.walkTokens(n, t.walkTokens), I.parseInline(n, t);
        } catch (e) {
          if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + R(e.message + "", !0) + "</pre>";
          throw e;
        }
      }, g.Parser = I, g.parser = I.parse, g.Renderer = E, g.TextRenderer = T, g.Lexer = O, g.lexer = O.lex, g.Tokenizer = v, g.Slugger = z, g.parse = g;
    }();
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      e = e.pluralTypeToLanguages, n = {}, u(p(e), function (e) {
        var t = e[0],
          e = e[1];
        u(e, function (e) {
          n[e] = t;
        });
      });
      var n,
        e = n;
      return e[t] || e[v.call(t, /-/, 1)[0]] || e.en;
    }
    function o(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function i(e, t, n, r, o) {
      if ("string" != typeof e) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
      if (null == t) return e;
      var i = e,
        r = r || w,
        a = "number" == typeof t ? {
          smart_count: t
        } : t;
      return null != a.smart_count && e && (t = o || y, o = v.call(e, m), e = b(t, n || "en"), n = a.smart_count, t = t.pluralTypes[e](n), i = h(o[t] || o[0])), g.call(i, r, function (e, t) {
        return f(a, t) && null != a[t] ? a[t] : e;
      });
    }
    function a(e) {
      var e = e || {},
        t = (this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", e.allowMissing ? i : null);
      this.onMissingKey = "function" == typeof e.onMissingKey ? e.onMissingKey : t, this.warn = e.warn || s, this.tokenRegex = function (e) {
        var t = e && e.prefix || "%{",
          e = e && e.suffix || "}";
        if (t === m || e === m) throw new RangeError('"' + m + '" token is reserved for pluralization');
        return new RegExp(o(t) + "(.*?)" + o(e), "g");
      }(e.interpolation), this.pluralRules = e.pluralRules || y;
    }
    function s(e) {
      d(!1, e);
    }
    function l(e) {
      var t = (e = e % 100) % 10;
      return 11 != e && 1 == t ? 0 : 2 <= t && t <= 4 && !(12 <= e && e <= 14) ? 1 : 2;
    }
    var c,
      u = n(48),
      p = n(100),
      d = n(105),
      f = n(25),
      h = n(103),
      g = String.prototype.replace,
      v = String.prototype.split,
      m = "||||",
      y = {
        pluralTypes: {
          arabic: function (e) {
            if (e < 3) return e;
            e %= 100;
            return 3 <= e && e <= 10 ? 3 : 11 <= e ? 4 : 5;
          },
          bosnian_serbian: l,
          chinese: function () {
            return 0;
          },
          croatian: l,
          french: function (e) {
            return 2 <= e ? 1 : 0;
          },
          german: function (e) {
            return 1 !== e ? 1 : 0;
          },
          russian: l,
          lithuanian: function (e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : 2 <= e % 10 && e % 10 <= 9 && (e % 100 < 11 || 19 < e % 100) ? 1 : 2;
          },
          czech: function (e) {
            return 1 === e ? 0 : 2 <= e && e <= 4 ? 1 : 2;
          },
          polish: function (e) {
            if (1 === e) return 0;
            var t = e % 10;
            return 2 <= t && t <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2;
          },
          icelandic: function (e) {
            return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
          },
          slovenian: function (e) {
            e %= 100;
            return 1 == e ? 0 : 2 == e ? 1 : 3 == e || 4 == e ? 2 : 3;
          }
        },
        pluralTypeToLanguages: {
          arabic: ["ar"],
          bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
          chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
          croatian: ["hr", "hr-HR"],
          german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
          french: ["fr", "tl", "pt-br"],
          russian: ["ru", "ru-RU"],
          lithuanian: ["lt"],
          czech: ["cs", "cs-CZ", "sk"],
          polish: ["pl"],
          icelandic: ["is"],
          slovenian: ["sl-SL"]
        }
      },
      b = (c = {}, function (e, t) {
        var n = c[t];
        return n && !e.pluralTypes[n] && (c[t] = n = null), n || (n = r(e, t)) && (c[t] = n), n;
      }),
      w = /%\{(.*?)\}/g;
    a.prototype.locale = function (e) {
      return e && (this.currentLocale = e), this.currentLocale;
    }, a.prototype.extend = function (e, n) {
      u(p(e || {}), function (e) {
        var t = e[0],
          e = e[1],
          t = n ? n + "." + t : t;
        "object" == typeof e ? this.extend(e, t) : this.phrases[t] = e;
      }, this);
    }, a.prototype.unset = function (e, n) {
      "string" == typeof e ? delete this.phrases[e] : u(p(e || {}), function (e) {
        var t = e[0],
          e = e[1],
          t = n ? n + "." + t : t;
        "object" == typeof e ? this.unset(e, t) : delete this.phrases[t];
      }, this);
    }, a.prototype.clear = function () {
      this.phrases = {};
    }, a.prototype.replace = function (e) {
      this.clear(), this.extend(e);
    }, a.prototype.t = function (e, t) {
      var n,
        r,
        t = null == t ? {} : t;
      return "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : r = this.onMissingKey ? (0, this.onMissingKey)(e, t, this.currentLocale, this.tokenRegex, this.pluralRules) : (this.warn('Missing translation for key: "' + e + '"'), e), r = "string" == typeof n ? i(n, t, this.currentLocale, this.tokenRegex, this.pluralRules) : r;
    }, a.prototype.has = function (e) {
      return f(this.phrases, e);
    }, a.transformPhrase = function (e, t, n) {
      return i(e, t, n);
    }, e.exports = a;
  }, function (e, t, n) {
    "use strict";

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var l = Object.getOwnPropertySymbols,
      c = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
      try {
        if (!Object.assign) return;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          r[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
      } catch (e) {
        return;
      }
    }() ? Object.assign : function (e, t) {
      for (var n, r = function (e) {
          if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }(e), o = 1; o < arguments.length; o++) {
        for (var i in n = Object(arguments[o])) c.call(n, i) && (r[i] = n[i]);
        if (l) for (var a = l(n), s = 0; s < a.length; s++) u.call(n, a[s]) && (r[a[s]] = n[a[s]]);
      }
      return r;
    };
  }, function (e, a, t) {
    function y(e, t, n) {
      n = "double" === (n.quoteStyle || t) ? '"' : "'";
      return n + e + n;
    }
    function b(e) {
      return !("[object Array]" !== k(e) || W && "object" == typeof e && W in e);
    }
    function w(e) {
      if (D) return e && "object" == typeof e && e instanceof Symbol;
      if ("symbol" == typeof e) return 1;
      if (e && "object" == typeof e && B) try {
        return B.call(e), 1;
      } catch (e) {}
    }
    function x(e, t) {
      return i.call(e, t);
    }
    function k(e) {
      return o.call(e);
    }
    function S(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
      return -1;
    }
    function _(e) {
      var e = e.charCodeAt(0),
        t = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[e];
      return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + e.toString(16).toUpperCase();
    }
    function A(e) {
      return "Object(" + e + ")";
    }
    function O(e) {
      return e + " { ? }";
    }
    function j(e, t, n, r) {
      return e + " (" + t + ") {" + (r ? $(n, r) : n.join(", ")) + "}";
    }
    function $(e, t) {
      if (0 === e.length) return "";
      var n = "\n" + t.prev + t.base;
      return n + e.join("," + n) + "\n" + t.prev;
    }
    function E(e, t) {
      var n = b(e),
        r = [];
      if (n) {
        r.length = e.length;
        for (var o = 0; o < e.length; o++) r[o] = x(e, o) ? t(e[o], e) : "";
      }
      var i,
        a = "function" == typeof u ? u(e) : [];
      if (D) for (var s = {}, l = 0; l < a.length; l++) s["$" + a[l]] = a[l];
      for (i in e) !x(e, i) || n && String(Number(i)) === i && i < e.length || D && s["$" + i] instanceof Symbol || (/[^\w$]/.test(i) ? r.push(t(i, e) + ": " + t(e[i], e)) : r.push(i + ": " + t(e[i], e)));
      if ("function" == typeof u) for (var c = 0; c < a.length; c++) p.call(e, a[c]) && r.push("[" + t(a[c]) + "]: " + t(e[a[c]], e));
      return r;
    }
    var n = "function" == typeof Map && Map.prototype,
      r = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
      T = n && r && "function" == typeof r.get ? r.get : null,
      z = n && Map.prototype.forEach,
      r = "function" == typeof Set && Set.prototype,
      n = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
      I = r && n && "function" == typeof n.get ? n.get : null,
      C = r && Set.prototype.forEach,
      P = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
      R = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
      M = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
      F = Boolean.prototype.valueOf,
      o = Object.prototype.toString,
      L = Function.prototype.toString,
      N = String.prototype.match,
      U = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
      u = Object.getOwnPropertySymbols,
      B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
      D = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
      p = Object.prototype.propertyIsEnumerable,
      q = ("function" == typeof Reflect ? Reflect : Object).getPrototypeOf || ([].__proto__ === Array.prototype ? function (e) {
        return e.__proto__;
      } : null),
      n = t(113).custom,
      Q = n && w(n) ? n : null,
      W = "function" == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null,
      i = (e.exports = function r(n, e, o, i) {
        function a(e, t, n) {
          return t && (i = i.slice()).push(t), n ? (t = {
            depth: s.depth
          }, x(s, "quoteStyle") && (t.quoteStyle = s.quoteStyle), r(e, t, o + 1, i)) : r(e, s, o + 1, i);
        }
        var s = e || {};
        if (x(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (x(s, "maxStringLength") && ("number" == typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        e = !x(s, "customInspect") || s.customInspect;
        if ("boolean" != typeof e && "symbol" !== e) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (x(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && 0 < s.indent)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
        if (void 0 === n) return "undefined";
        if (null === n) return "null";
        if ("boolean" == typeof n) return n ? "true" : "false";
        if ("string" == typeof n) return function e(t, n) {
          var r;
          return t.length > n.maxStringLength ? (r = "... " + (r = t.length - n.maxStringLength) + " more character" + (1 < r ? "s" : ""), e(t.slice(0, n.maxStringLength), n) + r) : y(t.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, _), "single", n);
        }(n, s);
        if ("number" == typeof n) return 0 === n ? 0 < 1 / 0 / n ? "0" : "-0" : String(n);
        if ("bigint" == typeof n) return String(n) + "n";
        var t = void 0 === s.depth ? 5 : s.depth;
        if (t <= (o = void 0 === o ? 0 : o) && 0 < t && "object" == typeof n) return b(n) ? "[Array]" : "[Object]";
        var l,
          c,
          u,
          p,
          d,
          f,
          t = function (e, t) {
            var n;
            if ("\t" === e.indent) n = "\t";else {
              if (!("number" == typeof e.indent && 0 < e.indent)) return null;
              n = Array(e.indent + 1).join(" ");
            }
            return {
              base: n,
              prev: Array(t + 1).join(n)
            };
          }(s, o);
        if (void 0 === i) i = [];else if (0 <= S(i, n)) return "[Circular]";
        if ("function" == typeof n) return "[Function" + ((l = (l = n).name || ((l = N.call(L.call(l), /^function\s*([\w$]+)/)) ? l[1] : null)) ? ": " + l : " (anonymous)") + "]" + (0 < (l = E(n, a)).length ? " { " + l.join(", ") + " }" : "");
        if (w(n)) return l = D ? String(n).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : B.call(n), "object" != typeof n || D ? l : A(l);
        if ((m = n) && "object" == typeof m && ("undefined" != typeof HTMLElement && m instanceof HTMLElement || "string" == typeof m.nodeName && "function" == typeof m.getAttribute)) {
          for (var h = "<" + String(n.nodeName).toLowerCase(), g = n.attributes || [], v = 0; v < g.length; v++) h += " " + g[v].name + "=" + y((c = g[v].value, String(c).replace(/"/g, "&quot;")), "double", s);
          return h += ">", n.childNodes && n.childNodes.length && (h += "..."), h + ("</" + String(n.nodeName).toLowerCase()) + ">";
        }
        if (b(n)) {
          if (0 === n.length) return "[]";
          var m = E(n, a);
          return t && !function (e) {
            for (var t = 0; t < e.length; t++) if (0 <= S(e[t], "\n")) return;
            return 1;
          }(m) ? "[" + $(m, t) + "]" : "[ " + m.join(", ") + " ]";
        }
        if (!("[object Error]" !== k(m = n) || W && "object" == typeof m && W in m)) return 0 === (m = E(n, a)).length ? "[" + String(n) + "]" : "{ [" + String(n) + "] " + m.join(", ") + " }";
        if ("object" == typeof n && e) {
          if (Q && "function" == typeof n[Q]) return n[Q]();
          if ("symbol" !== e && "function" == typeof n.inspect) return n.inspect();
        }
        return function (e) {
          if (T && e && "object" == typeof e) try {
            T.call(e);
            try {
              I.call(e);
            } catch (e) {
              return 1;
            }
            return e instanceof Map;
          } catch (e) {}
        }(n) ? (u = [], z.call(n, function (e, t) {
          u.push(a(t, n, !0) + " => " + a(e, n));
        }), j("Map", T.call(n), u, t)) : function (e) {
          if (I && e && "object" == typeof e) try {
            I.call(e);
            try {
              T.call(e);
            } catch (e) {
              return 1;
            }
            return e instanceof Set;
          } catch (e) {}
        }(n) ? (p = [], C.call(n, function (e) {
          p.push(a(e, n));
        }), j("Set", I.call(n), p, t)) : function (e) {
          if (P && e && "object" == typeof e) try {
            P.call(e, P);
            try {
              R.call(e, R);
            } catch (e) {
              return 1;
            }
            return e instanceof WeakMap;
          } catch (e) {}
        }(n) ? O("WeakMap") : function (e) {
          if (R && e && "object" == typeof e) try {
            R.call(e, R);
            try {
              P.call(e, P);
            } catch (e) {
              return 1;
            }
            return e instanceof WeakSet;
          } catch (e) {}
        }(n) ? O("WeakSet") : function (e) {
          if (M && e && "object" == typeof e) try {
            return M.call(e), 1;
          } catch (e) {}
        }(n) ? O("WeakRef") : "[object Number]" !== k(m = n) || W && "object" == typeof m && W in m ? function (e) {
          if (e && "object" == typeof e && U) try {
            return U.call(e), 1;
          } catch (e) {}
        }(n) ? A(a(U.call(n))) : "[object Boolean]" !== k(e = n) || W && "object" == typeof e && W in e ? "[object String]" !== k(m = n) || W && "object" == typeof m && W in m ? ("[object Date]" !== k(e = n) || W && "object" == typeof e && W in e) && ("[object RegExp]" !== k(m = n) || W && "object" == typeof m && W in m) ? (e = E(n, a), m = q ? q(n) === Object.prototype : n instanceof Object || n.constructor === Object, d = n instanceof Object ? "" : "null prototype", f = !m && W && Object(n) === n && W in n ? k(n).slice(8, -1) : d ? "Object" : "", m = (!m && "function" == typeof n.constructor && n.constructor.name ? n.constructor.name + " " : "") + (f || d ? "[" + [].concat(f || [], d || []).join(": ") + "] " : ""), 0 === e.length ? m + "{}" : t ? m + "{" + $(e, t) + "}" : m + "{ " + e.join(", ") + " }") : String(n) : A(a(String(n))) : A(F.call(n)) : A(a(Number(n)));
      }, Object.prototype.hasOwnProperty || function (e) {
        return e in this;
      });
  }, function (e, t, n) {
    "use strict";

    var d, f, h, g, v, m, y, r, b, o;
    Object.keys || (d = Object.prototype.hasOwnProperty, f = Object.prototype.toString, h = n(30), n = Object.prototype.propertyIsEnumerable, g = !n.call({
      toString: null
    }, "toString"), v = n.call(function () {}, "prototype"), m = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], y = function (e) {
      var t = e.constructor;
      return t && t.prototype === e;
    }, r = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, b = function () {
      if ("undefined" == typeof window) return !1;
      for (var e in window) try {
        if (!r["$" + e] && d.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
          y(window[e]);
        } catch (e) {
          return !0;
        }
      } catch (e) {
        return !0;
      }
      return !1;
    }(), o = function (e) {
      var t = null !== e && "object" == typeof e,
        n = "[object Function]" === f.call(e),
        r = h(e),
        o = t && "[object String]" === f.call(e),
        i = [];
      if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
      var a = v && n;
      if (o && 0 < e.length && !d.call(e, 0)) for (var s = 0; s < e.length; ++s) i.push(String(s));
      if (r && 0 < e.length) for (var l = 0; l < e.length; ++l) i.push(String(l));else for (var c in e) a && "prototype" === c || !d.call(e, c) || i.push(String(c));
      if (g) for (var u = function (e) {
          if ("undefined" == typeof window || !b) return y(e);
          try {
            return y(e);
          } catch (e) {
            return !1;
          }
        }(e), p = 0; p < m.length; ++p) u && "constructor" === m[p] || !d.call(e, m[p]) || i.push(m[p]);
      return i;
    }), e.exports = o;
  }, function (e, t, n) {
    "use strict";

    var r = Array.prototype.slice,
      o = n(30),
      i = Object.keys,
      a = i ? function (e) {
        return i(e);
      } : n(98),
      s = Object.keys;
    a.shim = function () {
      return Object.keys ? function () {
        var e = Object.keys(arguments);
        return e && e.length === arguments.length;
      }(1, 2) || (Object.keys = function (e) {
        return s(o(e) ? r.call(e) : e);
      }) : Object.keys = a, Object.keys || a;
    }, e.exports = a;
  }, function (e, t, n) {
    "use strict";

    var r = n(2),
      o = n(4),
      i = n(31),
      a = n(32),
      n = n(101),
      o = o(a(), Object);
    r(o, {
      getPolyfill: a,
      implementation: i,
      shim: n
    }), e.exports = o;
  }, function (e, t, n) {
    "use strict";

    var r = n(32),
      o = n(2);
    e.exports = function () {
      var e = r();
      return o(Object, {
        entries: e
      }, {
        entries: function () {
          return Object.entries !== e;
        }
      }), e;
    };
  }, function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(t) {
      if (c === setTimeout) return setTimeout(t, 0);
      if ((c === n || !c) && setTimeout) return (c = setTimeout)(t, 0);
      try {
        return c(t, 0);
      } catch (e) {
        try {
          return c.call(null, t, 0);
        } catch (e) {
          return c.call(this, t, 0);
        }
      }
    }
    function i() {
      f && p && (f = !1, p.length ? d = p.concat(d) : h = -1, d.length && a());
    }
    function a() {
      if (!f) {
        var e = o(i);
        f = !0;
        for (var t = d.length; t;) {
          for (p = d, d = []; ++h < t;) p && p[h].run();
          h = -1, t = d.length;
        }
        p = null, f = !1, function (t) {
          if (u === clearTimeout) return clearTimeout(t);
          if ((u === r || !u) && clearTimeout) return (u = clearTimeout)(t);
          try {
            u(t);
          } catch (e) {
            try {
              return u.call(null, t);
            } catch (e) {
              return u.call(this, t);
            }
          }
        }(e);
      }
    }
    function s(e, t) {
      this.fun = e, this.array = t;
    }
    function l() {}
    var c,
      u,
      e = e.exports = {};
    try {
      c = "function" == typeof setTimeout ? setTimeout : n;
    } catch (e) {
      c = n;
    }
    try {
      u = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (e) {
      u = r;
    }
    var p,
      d = [],
      f = !1,
      h = -1;
    e.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      d.push(new s(e, t)), 1 !== d.length || f || o(a);
    }, s.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {}, e.on = l, e.addListener = l, e.once = l, e.off = l, e.removeListener = l, e.removeAllListeners = l, e.emit = l, e.prependListener = l, e.prependOnceListener = l, e.listeners = function (e) {
      return [];
    }, e.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, e.cwd = function () {
      return "/";
    }, e.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, e.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(4),
      o = n(2),
      i = n(33),
      a = n(34),
      n = n(104),
      r = r(a());
    o(r, {
      getPolyfill: a,
      implementation: i,
      shim: n
    }), e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(2),
      o = n(34);
    e.exports = function () {
      var e = o();
      return r(String.prototype, {
        trim: e
      }, {
        trim: function () {
          return String.prototype.trim !== e;
        }
      }), e;
    };
  }, function (n, e, t) {
    "use strict";

    !function (e) {
      var t = function () {};
      "production" !== e.env.NODE_ENV && (t = function (e, t, n) {
        var r = arguments.length;
        n = new Array(2 < r ? r - 2 : 0);
        for (var o = 2; o < r; o++) n[o - 2] = arguments[o];
        if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        e || function (e, t) {
          var n = arguments.length;
          t = new Array(1 < n ? n - 1 : 0);
          for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
          var o = 0,
            i = "Warning: " + e.replace(/%s/g, function () {
              return t[o++];
            });
          try {
            throw new Error(i);
          } catch (e) {}
        }.apply(null, [t].concat(n));
      }), n.exports = t;
    }.call(e, t(102));
  }, function (e, t, n) {
    function r(e, t) {
      return new s(t).process(e);
    }
    var o,
      i = n(35),
      a = n(36),
      s = n(107);
    for (o in (t = e.exports = r).filterXSS = r, t.FilterXSS = s, i) t[o] = i[o];
    for (o in a) t[o] = a[o];
    "undefined" != typeof window && (window.filterXSS = e.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = e.exports);
  }, function (e, t, n) {
    function g(e) {
      return null == e;
    }
    function r(e) {
      (e = function (e) {
        var t,
          n = {};
        for (t in e) n[t] = e[t];
        return n;
      }(e || {})).stripIgnoreTag && (e.onIgnoreTag, e.onIgnoreTag = i.onIgnoreTagStripAll), e.whiteList = e.whiteList || i.whiteList, e.onTag = e.onTag || i.onTag, e.onTagAttr = e.onTagAttr || i.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || i.safeAttrValue, e.escapeHtml = e.escapeHtml || i.escapeHtml, !1 === (this.options = e).css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new o(e.css));
    }
    var o = n(7).FilterCSS,
      i = n(35),
      a = n(36),
      v = a.parseTag,
      m = a.parseAttr,
      y = n(12);
    r.prototype.process = function (e) {
      if (!(e = (e = e || "").toString())) return "";
      var t = this.options,
        s = t.whiteList,
        l = t.onTag,
        c = t.onIgnoreTag,
        u = t.onTagAttr,
        p = t.onIgnoreTagAttr,
        d = t.safeAttrValue,
        f = t.escapeHtml,
        h = this.cssFilter,
        n = (t.stripBlankChar && (e = i.stripBlankChar(e)), t.allowCommentTag || (e = i.stripCommentTag(e)), !1),
        t = (t.stripIgnoreTagBody && (c = (n = i.StripTagBody(t.stripIgnoreTagBody, c)).onIgnoreTag), v(e, function (e, t, o, n, r) {
          e = {
            sourcePosition: e,
            position: t,
            isClosing: r,
            isWhite: s.hasOwnProperty(o)
          }, t = l(o, n, e);
          if (!g(t)) return t;
          if (e.isWhite) {
            if (e.isClosing) return "</" + o + ">";
            r = n;
            var r = -1 === (a = y.spaceIndex(r)) ? {
                html: "",
                closing: "/" === r[r.length - 2]
              } : {
                html: r = (a = "/" === (r = y.trim(r.slice(a + 1, -1)))[r.length - 1]) ? y.trim(r.slice(0, -1)) : r,
                closing: a
              },
              i = s[o],
              a = m(r.html, function (e, t) {
                var n = -1 !== y.indexOf(i, e),
                  r = u(o, e, t, n);
                return g(r) ? n ? (t = d(o, e, t, h)) ? e + '="' + t + '"' : e : g(r = p(o, e, t, n)) ? void 0 : r : r;
              }),
              n = "<" + o;
            return a && (n += " " + a), r.closing && (n += " /"), n + ">";
          }
          return g(t = c(o, n, e)) ? f(n) : t;
        }, f));
      return t = n ? n.remove(t) : t;
    }, e.exports = r;
  }, function (e, t) {
    e.exports = {
      smile: "e3/2018new_weixioa02_org.png",
      lovely: "09/2018new_keai_org.png",
      happy: "1e/2018new_taikaixin_org.png",
      clap: "6e/2018new_guzhang_thumb.png",
      whee: "33/2018new_xixi_thumb.png",
      haha: "8f/2018new_haha_thumb.png",
      "laugh and cry": "4a/2018new_xiaoku_thumb.png",
      wink: "43/2018new_jiyan_org.png",
      greddy: "fa/2018new_chanzui_org.png",
      awkward: "a3/2018new_heixian_thumb.png",
      sweat: "28/2018new_han_org.png",
      "pick nose": "9a/2018new_wabi_thumb.png",
      hum: "7c/2018new_heng_thumb.png",
      angry: "f6/2018new_nu_thumb.png",
      grievance: "a5/2018new_weiqu_thumb.png",
      poor: "96/2018new_kelian_org.png",
      disappoint: "aa/2018new_shiwang_thumb.png",
      sad: "ee/2018new_beishang_org.png",
      tear: "6e/2018new_leimu_org.png",
      "no way": "83/2018new_kuxiao_org.png",
      shy: "c1/2018new_haixiu_org.png",
      dirt: "10/2018new_wu_thumb.png",
      "love you": "f6/2018new_aini_org.png",
      kiss: "2c/2018new_qinqin_thumb.png",
      amorousness: "9d/2018new_huaxin_org.png",
      longing: "c9/2018new_chongjing_org.png",
      desire: "3e/2018new_tianping_thumb.png",
      "bad laugh": "4d/2018new_huaixiao_org.png",
      blackness: "9e/2018new_yinxian_org.png",
      "laugh without word": "2d/2018new_xiaoerbuyu_org.png",
      titter: "71/2018new_touxiao_org.png",
      cool: "c4/2018new_ku_org.png",
      "not easy": "aa/2018new_bingbujiandan_thumb.png",
      think: "30/2018new_sikao_org.png",
      question: "b8/2018new_ningwen_org.png",
      "no idea": "2a/2018new_wenhao_thumb.png",
      dizzy: "07/2018new_yun_thumb.png",
      bomb: "a2/2018new_shuai_thumb.png",
      bone: "a1/2018new_kulou_thumb.png",
      "be quiet": "b0/2018new_xu_org.png",
      "shut up": "62/2018new_bizui_org.png",
      stupid: "dd/2018new_shayan_org.png",
      "surprise ": "49/2018new_chijing_org.png",
      vomit: "08/2018new_tu_org.png",
      cold: "40/2018new_kouzhao_thumb.png",
      sick: "3b/2018new_shengbing_thumb.png",
      bye: "fd/2018new_baibai_thumb.png",
      "look down on": "da/2018new_bishi_org.png",
      "white eye": "ef/2018new_landelini_org.png",
      "left hum": "43/2018new_zuohengheng_thumb.png",
      "right hum": "c1/2018new_youhengheng_thumb.png",
      crazy: "17/2018new_zhuakuang_org.png",
      "scold ": "87/2018new_zhouma_thumb.png",
      "hit on face": "cb/2018new_dalian_org.png",
      wow: "ae/2018new_ding_org.png",
      fan: "86/2018new_hufen02_org.png",
      money: "a2/2018new_qian_thumb.png",
      yawn: "55/2018new_dahaqian_org.png",
      sleepy: "3c/2018new_kun_thumb.png",
      sleep: "e2/2018new_shuijiao_thumb.png",
      "watermelon ": "01/2018new_chigua_thumb.png",
      doge: "a1/2018new_doge02_org.png",
      dog: "22/2018new_erha_org.png",
      cat: "7b/2018new_miaomiao_thumb.png",
      thumb: "e6/2018new_zan_org.png",
      good: "8a/2018new_good_org.png",
      ok: "45/2018new_ok_org.png",
      yeah: "29/2018new_ye_thumb.png",
      "shack hand": "e9/2018new_woshou_thumb.png",
      bow: "e7/2018new_zuoyi_org.png",
      come: "42/2018new_guolai_thumb.png",
      punch: "86/2018new_quantou_thumb.png"
    };
  }, function (e, t) {
    e.exports = {
      nick: "NickName",
      mail: "E-Mail",
      link: "Website(http://)",
      nickFail: "NickName cannot be less than 3 bytes.",
      mailFail: "Please confirm your email address.",
      sofa: "No comment yet.",
      submit: "Submit",
      reply: "Reply",
      cancelReply: "Cancel reply",
      comments: "Comments",
      cancel: "Cancel",
      confirm: "Confirm",
      continue: "Continue",
      more: "Load More...",
      preview: "Preview",
      emoji: "Emoji",
      expand: "See more....",
      seconds: "seconds ago",
      minutes: "minutes ago",
      hours: "hours ago",
      days: "days ago",
      now: "just now",
      uploading: "Uploading ...",
      uploadDone: "Upload completed!",
      busy: "Submit is busy, please wait...",
      "code-98": "Valine initialization failed, please check your version of av-min.js.",
      "code-99": "Valine initialization failed, Please check the `el` element in the init method.",
      "code-100": "Valine initialization failed, Please check your appId and appKey.",
      "code-140": "The total number of API calls today has exceeded the development version limit.",
      "code-401": "Unauthorized operation, Please check your appId and appKey.",
      "code-403": "Access denied by API domain white list, Please check your security domain."
    };
  }, function (e, t) {
    e.exports = {
      nick: "\u30cb\u30c3\u30af\u30cd\u30fc\u30e0",
      mail: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
      link: "\u30b5\u30a4\u30c8(http://)",
      nickFail: "3\u30d0\u30a4\u30c8\u4ee5\u4e0a\u306e\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3092\u3054\u5165\u529b\u304f\u3060\u3055\u3044.",
      mailFail: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
      sofa: "\u30b3\u30e1\u30f3\u30c8\u3057\u307e\u3057\u3087\u3046~",
      submit: "\u63d0\u51fa\u3059\u308b",
      reply: "\u8fd4\u4fe1\u3059\u308b",
      cancelReply: "\u30ad\u30e3\u30f3\u30bb\u30eb",
      comments: "\u30b3\u30e1\u30f3\u30c8",
      cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
      confirm: "\u78ba\u8a8d\u3059\u308b",
      continue: "\u7ee7\u7eed",
      more: "\u3055\u3089\u306b\u8aad\u307f\u8fbc\u3080...",
      preview: "\u30d7\u30ec\u30d3\u30e5\u30fc",
      emoji: "\u7d75\u6587\u5b57",
      expand: "\u3082\u3063\u3068\u898b\u308b",
      seconds: "\u79d2\u524d",
      minutes: "\u5206\u524d",
      hours: "\u6642\u9593\u524d",
      days: "\u65e5\u524d",
      now: "\u305f\u3063\u3060\u4eca",
      uploading: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d...",
      uploadDone: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f!",
      busy: "20 \u79d2\u9593\u9694\u3067\u63d0\u51fa\u3057\u3066\u304f\u3060\u3055\u3044    ...",
      "code-98": "\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3067\u3059\u3002av-min.js \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044.",
      "code-99": "\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3067\u3059\u3002init\u306b\u3042\u308b`el`\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
      "code-100": "\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3067\u3059\u3002AppId\u3068AppKey\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
      "code-140": "\u4eca\u65e5\u306eAPI\u30b3\u30fc\u30eb\u306e\u7dcf\u6570\u304c\u958b\u767a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4e0a\u9650\u3092\u8d85\u3048\u305f.",
      "code-401": "\u6a29\u9650\u304c\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\u3002AppId\u3068AppKey\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044.",
      "code-403": "\u30a2\u30af\u30bb\u30b9\u304cAPI\u306a\u3069\u306b\u5236\u9650\u3055\u308c\u307e\u3057\u305f\u3001\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a2d\u5b9a\u3092\u78ba\u8a8d\u304f\u3060\u3055\u3044"
    };
  }, function (e, t) {
    e.exports = {
      nick: "\u6635\u79f0",
      mail: "\u90ae\u7bb1",
      link: "\u7f51\u5740(http://)",
      nickFail: "\u6635\u79f0\u4e0d\u80fd\u5c11\u4e8e3\u4e2a\u5b57\u7b26",
      mailFail: "\u8bf7\u586b\u5199\u6b63\u786e\u7684\u90ae\u4ef6\u5730\u5740",
      sofa: "\u6765\u53d1\u8bc4\u8bba\u5427~",
      submit: "\u63d0\u4ea4",
      reply: "\u56de\u590d",
      cancelReply: "\u53d6\u6d88\u56de\u590d",
      comments: "\u8bc4\u8bba",
      cancel: "\u53d6\u6d88",
      confirm: "\u786e\u8ba4",
      continue: "\u7ee7\u7eed",
      more: "\u52a0\u8f7d\u66f4\u591a...",
      preview: "\u9884\u89c8",
      emoji: "\u8868\u60c5",
      expand: "\u67e5\u770b\u66f4\u591a...",
      seconds: "\u79d2\u524d",
      minutes: "\u5206\u949f\u524d",
      hours: "\u5c0f\u65f6\u524d",
      days: "\u5929\u524d",
      now: "\u521a\u521a",
      uploading: "\u6b63\u5728\u4f20\u8f93...",
      uploadDone: "\u4f20\u8f93\u5b8c\u6210!",
      busy: "\u64cd\u4f5c\u9891\u7e41\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5...",
      "code-98": "Valine \u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5 av-min.js \u7248\u672c",
      "code-99": "Valine \u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5init\u4e2d\u7684`el`\u5143\u7d20.",
      "code-100": "Valine \u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684AppId\u548cAppKey.",
      "code-140": "\u4eca\u65e5 API \u8c03\u7528\u603b\u6b21\u6570\u5df2\u8d85\u8fc7\u5f00\u53d1\u7248\u9650\u5236.",
      "code-401": "\u672a\u7ecf\u6388\u6743\u7684\u64cd\u4f5c\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684AppId\u548cAppKey.",
      "code-403": "\u8bbf\u95ee\u88abAPI\u57df\u540d\u767d\u540d\u5355\u62d2\u7edd\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684\u5b89\u5168\u57df\u540d\u8bbe\u7f6e."
    };
  }, function (e, t) {
    e.exports = {
      nick: "\u66b1\u7a31",
      mail: "\u90f5\u7bb1",
      link: "\u7db2\u5740(http://)",
      nickFail: "\u6635\u7a31\u4e0d\u80fd\u5c11\u65bc3\u500b\u5b57\u7b26",
      mailFail: "\u8acb\u586b\u5beb\u6b63\u78ba\u7684\u90f5\u4ef6\u5730\u5740",
      sofa: "\u4f86\u767c\u8a55\u8ad6\u5427~",
      submit: "\u63d0\u4ea4",
      reply: "\u56de\u8986",
      cancelReply: "\u53d6\u6d88\u56de\u8986",
      comments: "\u8a55\u8ad6",
      cancel: "\u53d6\u6d88",
      confirm: "\u78ba\u8a8d",
      continue: "\u7e7c\u7e8c",
      more: "\u52a0\u8f09\u66f4\u591a...",
      preview: "\u9810\u89bd",
      emoji: "\u8868\u60c5",
      expand: "\u67e5\u770b\u66f4\u591a...",
      seconds: "\u79d2\u524d",
      minutes: "\u5206\u9418\u524d",
      hours: "\u5c0f\u6642\u524d",
      days: "\u5929\u524d",
      now: "\u525b\u525b",
      uploading: "\u6b63\u5728\u4e0a\u50b3...",
      uploadDone: "\u4e0a\u50b3\u5b8c\u6210!",
      busy: "\u64cd\u4f5c\u983b\u7e41\uff0c\u8acb\u7a0d\u5019\u518d\u8a66...",
      "code-98": "Valine \u521d\u59cb\u5316\u5931\u6557\uff0c\u8acb\u6aa2\u67e5 av-min.js \u7248\u672c",
      "code-99": "Valine \u521d\u59cb\u5316\u5931\u6557\uff0c\u8acb\u6aa2\u67e5init\u4e2d\u7684`el`\u5143\u7d20.",
      "code-100": "Valine \u521d\u59cb\u5316\u5931\u6557\uff0c\u8acb\u6aa2\u67e5\u4f60\u7684AppId\u548cAppKey.",
      "code-140": "\u4eca\u65e5 API \u8abf\u7528\u7e3d\u6b21\u6578\u5df2\u8d85\u904e\u958b\u767c\u7248\u9650\u5236.",
      "code-401": "\u672a\u7d93\u6388\u6b0a\u7684\u64cd\u4f5c\uff0c\u8acb\u6aa2\u67e5\u4f60\u7684AppId\u548cAppKey.",
      "code-403": "\u8a2a\u554f\u88abAPI\u57df\u540d\u767d\u540d\u55ae\u62d2\u7d55\uff0c\u8acb\u6aa2\u67e5\u4f60\u7684\u5b89\u5168\u57df\u540d\u8a2d\u7f6e."
    };
  }, function (e, t) {}, function (e, t, n) {
    var r = n(115),
      o = ("string" == typeof r && (r = [[e.i, r, ""]]), {});
    o.transform = void 0, n(117)(r, o), r.locals && (e.exports = r.locals);
  }, function (e, t, n) {
    (t = n(116)(!1)).push([e.i, '.v[data-class="v"]{font-size:16px;text-align:left}.v[data-class="v"] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class="v"] .vinput,.v[data-class="v"] .veditor,.v[data-class="v"] p,.v[data-class="v"] pre code,.v[data-class="v"] .status-bar{color:#555}.v[data-class="v"] .vtime,.v[data-class="v"] .vsys{color:#b3b3b3}.v[data-class="v"] .text-right{text-align:right}.v[data-class="v"] .text-center{text-align:center}.v[data-class="v"] img{max-width:100%;border:none}.v[data-class="v"] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class="v"].hide-avatar .vimg{display:none}.v[data-class="v"] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class="v"] a:hover{color:#D7191A}.v[data-class="v"] pre,.v[data-class="v"] code{background-color:#f8f8f8;padding:0.2em 0.4em;border-radius:3px;font-size:85%;margin:0}.v[data-class="v"] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class="v"] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class="v"] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid rgba(238,238,238,0.5)}.v[data-class="v"] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em;-webkit-box-sizing:border-box;box-sizing:border-box}.v[data-class="v"] input[type=\'checkbox\'],.v[data-class="v"] input[type=\'radio\']{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class="v"] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class="v"] .vicon+.vicon{margin-left:10px}.v[data-class="v"] .vicon.actived{fill:#66b1ff}.v[data-class="v"] .vrow{font-size:0;padding:10px 0}.v[data-class="v"] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class="v"] .vrow .vcol.vcol-20{width:20%}.v[data-class="v"] .vrow .vcol.vcol-30{width:30%}.v[data-class="v"] .vrow .vcol.vcol-40{width:40%}.v[data-class="v"] .vrow .vcol.vcol-50{width:50%}.v[data-class="v"] .vrow .vcol.vcol-60{width:60%}.v[data-class="v"] .vrow .vcol.vcol-70{width:70%}.v[data-class="v"] .vrow .vcol.vcol-80{width:80%}.v[data-class="v"] .vrow .vcol.vctrl{font-size:12px}.v[data-class="v"] .vemoji,.v[data-class="v"] .emoji{width:26px;height:26px;overflow:hidden;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class="v"] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class="v"] .vwrap input{background:transparent}.v[data-class="v"] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class="v"] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class="v"] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class="v"] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class="v"] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class="v"] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px #dedede dashed}.v[data-class="v"] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class="v"] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class="v"] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width: 520px){.v[data-class="v"] .vwrap .vheader .vinput{width:100%}.v[data-class="v"] .vwrap .vheader.item2 .vinput{width:100%}}.v[data-class="v"] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class="v"] .vpower a{font-size:.75em}.v[data-class="v"] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class="v"] ul,.v[data-class="v"] ol{padding:0;margin-left:1.25em}.v[data-class="v"] .txt-center{text-align:center}.v[data-class="v"] .txt-right{text-align:right}.v[data-class="v"] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class="v"] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class="v"] .vbtn+.vbtn{margin-left:1.25em}.v[data-class="v"] .vbtn:active,.v[data-class="v"] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class="v"] .vbtn:disabled{border-color:#E1E1E1;color:#E1E1E1;background-color:#fdfafa;cursor:not-allowed}.v[data-class="v"] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class="v"] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width: 520px){.v[data-class="v"] .vsys{display:none}}.v[data-class="v"] .vcards{width:100%}.v[data-class="v"] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class="v"] .vcards .vcard:after{content:\'\';clear:both;display:block}.v[data-class="v"] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width: 720px){.v[data-class="v"] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class="v"] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class="v"] .vcards .vcard .vhead .vtag{font-size:12px;display:inline-block;line-height:20px;border-radius:2px;color:#fff;padding:0 5px;position:inherit;margin-left:-5px;} .vcards .vcard .vhead .vtag.vmaster{background:#ffa51e} .vcards .vcard .vhead .vtag.vfriend{background:#6cf} .vcards .vcard .vhead .vtag.vvisitor{background:#828282} .vcards .vcard .vhead .browser-icon, .vcards .vcard .vhead .os-icon{margin-right:3px;} .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class="v"] .vcards .vcard .vhead .vnick:hover{color:#D7191A}.v[data-class="v"] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class="v"] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class="v"] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class="v"] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class="v"] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class="v"] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class="v"] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class="v"] .vcards .vcard .vcontent.expand::before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.9)));background:linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.9));z-index:999}.v[data-class="v"] .vcards .vcard .vcontent.expand::after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:rgba(255,255,255,0.9)}.v[data-class="v"] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed rgba(238,238,238,0.5)}.v[data-class="v"] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class="v"] .vpage .vmore{margin:1em 0}.v[data-class="v"] .clear{content:\'\';display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class="v"] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}[data-theme="dark"] .v[data-class="v"] .vinput,[data-theme="dark"] .v[data-class="v"] .veditor,[data-theme="dark"] .v[data-class="v"] p,[data-theme="dark"] .v[data-class="v"] pre code,[data-theme="dark"] .v[data-class="v"] .status-bar,.dark .v[data-class="v"] .vinput,.dark .v[data-class="v"] .veditor,.dark .v[data-class="v"] p,.dark .v[data-class="v"] pre code,.dark .v[data-class="v"] .status-bar,.theme__dark .v[data-class="v"] .vinput,.theme__dark .v[data-class="v"] .veditor,.theme__dark .v[data-class="v"] p,.theme__dark .v[data-class="v"] pre code,.theme__dark .v[data-class="v"] .status-bar,.night .v[data-class="v"] .vinput,.night .v[data-class="v"] .veditor,.night .v[data-class="v"] p,.night .v[data-class="v"] pre code,.night .v[data-class="v"] .status-bar{color:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vtime,[data-theme="dark"] .v[data-class="v"] .vsys,.dark .v[data-class="v"] .vtime,.dark .v[data-class="v"] .vsys,.theme__dark .v[data-class="v"] .vtime,.theme__dark .v[data-class="v"] .vsys,.night .v[data-class="v"] .vtime,.night .v[data-class="v"] .vsys{color:#929298}[data-theme="dark"] .v[data-class="v"] pre,[data-theme="dark"] .v[data-class="v"] code,[data-theme="dark"] .v[data-class="v"] pre code,.dark .v[data-class="v"] pre,.dark .v[data-class="v"] code,.dark .v[data-class="v"] pre code,.theme__dark .v[data-class="v"] pre,.theme__dark .v[data-class="v"] code,.theme__dark .v[data-class="v"] pre code,.night .v[data-class="v"] pre,.night .v[data-class="v"] code,.night .v[data-class="v"] pre code{color:#929298;background-color:#151414}[data-theme="dark"] .v[data-class="v"] .vwrap,.dark .v[data-class="v"] .vwrap,.theme__dark .v[data-class="v"] .vwrap,.night .v[data-class="v"] .vwrap{border-color:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vicon,.dark .v[data-class="v"] .vicon,.theme__dark .v[data-class="v"] .vicon,.night .v[data-class="v"] .vicon{fill:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vicon.actived,.dark .v[data-class="v"] .vicon.actived,.theme__dark .v[data-class="v"] .vicon.actived,.night .v[data-class="v"] .vicon.actived{fill:#66b1ff}[data-theme="dark"] .v[data-class="v"] .vbtn,.dark .v[data-class="v"] .vbtn,.theme__dark .v[data-class="v"] .vbtn,.night .v[data-class="v"] .vbtn{color:#b2b2b5;border-color:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vbtn:hover,.dark .v[data-class="v"] .vbtn:hover,.theme__dark .v[data-class="v"] .vbtn:hover,.night .v[data-class="v"] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}[data-theme="dark"] .v[data-class="v"] a:hover,.dark .v[data-class="v"] a:hover,.theme__dark .v[data-class="v"] a:hover,.night .v[data-class="v"] a:hover{color:#D7191A}[data-theme="dark"] .v[data-class="v"] .vcards .vcard .vcontent.expand::before,.dark .v[data-class="v"] .vcards .vcard .vcontent.expand::before,.theme__dark .v[data-class="v"] .vcards .vcard .vcontent.expand::before,.night .v[data-class="v"] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.7)));background:linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))}[data-theme="dark"] .v[data-class="v"] .vcards .vcard .vcontent.expand::after,.dark .v[data-class="v"] .vcards .vcard .vcontent.expand::after,.theme__dark .v[data-class="v"] .vcards .vcard .vcontent.expand::after,.night .v[data-class="v"] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,0.7)}@media (prefers-color-scheme: dark){.v[data-class="v"] .vinput,.v[data-class="v"] .veditor,.v[data-class="v"] p,.v[data-class="v"] pre code,.v[data-class="v"] .status-bar{color:#b2b2b5}.v[data-class="v"] .vtime,.v[data-class="v"] .vsys{color:#929298}.v[data-class="v"] pre,.v[data-class="v"] code,.v[data-class="v"] pre code{color:#929298;background-color:#151414}.v[data-class="v"] .vwrap{border-color:#b2b2b5}.v[data-class="v"] .vicon{fill:#b2b2b5}.v[data-class="v"] .vicon.actived{fill:#66b1ff}.v[data-class="v"] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class="v"] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class="v"] a:hover{color:#D7191A}.v[data-class="v"] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.7)));background:linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))}.v[data-class="v"] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,0.7)}}\n', ""]), e.exports = t;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = e[1] || "",
        r = e[3];
      return r ? t && "function" == typeof btoa ? (e = "/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))), " */"), [n].concat(r.sources.map(function (e) {
        return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
      })).concat([e]).join("\n")) : [n].join("\n") : n;
    }
    e.exports = function (n) {
      var l = [];
      return l.toString = function () {
        return this.map(function (e) {
          var t = r(e, n);
          return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
        }).join("");
      }, l.i = function (e, t, n) {
        "string" == typeof e && (e = [[null, e, ""]]);
        var r = {};
        if (n) for (var o = 0; o < this.length; o++) {
          var i = this[o][0];
          null != i && (r[i] = !0);
        }
        for (var a = 0; a < e.length; a++) {
          var s = [].concat(e[a]);
          n && r[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), l.push(s));
        }
      }, l;
    };
  }, function (e, t, n) {
    function l(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = g[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) o.parts.push(f(r.parts[i], t));
        } else {
          for (var a = [], i = 0; i < r.parts.length; i++) a.push(f(r.parts[i], t));
          g[r.id] = {
            id: r.id,
            refs: 1,
            parts: a
          };
        }
      }
    }
    function c(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          i = {
            css: i[1],
            media: i[2],
            sourceMap: i[3]
          };
        r[a] ? r[a].parts.push(i) : n.push(r[a] = {
          id: a,
          parts: [i]
        });
      }
      return n;
    }
    function s(e, t) {
      var n = a(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = b[b.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);else {
        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(t);
      }
    }
    function u(e) {
      null !== e.parentNode && (e.parentNode.removeChild(e), 0 <= (e = b.indexOf(e)) && b.splice(e, 1));
    }
    function p(e) {
      var t = document.createElement("style");
      return e.attrs.type = "text/css", d(t, e.attrs), s(e, t), t;
    }
    function d(t, n) {
      Object.keys(n).forEach(function (e) {
        t.setAttribute(e, n[e]);
      });
    }
    function f(t, e) {
      var n, r, o, i, a;
      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }
      return o = e.singleton ? (i = y++, n = m = m || p(e), r = h.bind(null, n, i, !1), h.bind(null, n, i, !0)) : t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = e, a = document.createElement("link"), i.attrs.type = "text/css", i.attrs.rel = "stylesheet", d(a, i.attrs), s(i, a), n = a, r = function (e, t, n) {
        var r = n.css,
          n = n.sourceMap,
          o = void 0 === t.convertToAbsoluteUrls && n,
          t = ((t.convertToAbsoluteUrls || o) && (r = w(r)), n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), new Blob([r], {
            type: "text/css"
          })),
          o = e.href;
        e.href = URL.createObjectURL(t), o && URL.revokeObjectURL(o);
      }.bind(null, n, e), function () {
        u(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = p(e), r = function (e, t) {
        var n = t.css,
          t = t.media;
        if (t && e.setAttribute("media", t), e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), function () {
        u(n);
      }), r(t), function (e) {
        e ? e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap || r(t = e) : o();
      };
    }
    function h(e, t, n, r) {
      var n = n ? "" : r.css;
      e.styleSheet ? e.styleSheet.cssText = x(t, n) : (r = document.createTextNode(n), (n = e.childNodes)[t] && e.removeChild(n[t]), n.length ? e.insertBefore(r, n[t]) : e.appendChild(r));
    }
    var r,
      o,
      i,
      g = {},
      v = function () {
        return o = void 0 === o ? function () {
          return window && document && document.all && !window.atob;
        }.apply(this, arguments) : o;
      },
      a = (r = {}, function (e) {
        return void 0 === r[e] && (r[e] = function (e) {
          return document.querySelector(e);
        }.call(this, e)), r[e];
      }),
      m = null,
      y = 0,
      b = [],
      w = n(118),
      x = (e.exports = function (e, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || (a.singleton = v()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
        var s = c(e, a);
        return l(s, a), function (e) {
          for (var t = [], n = 0; n < s.length; n++) {
            var r = s[n];
            (o = g[r.id]).refs--, t.push(o);
          }
          e && l(c(e, a), a);
          for (var o, n = 0; n < t.length; n++) if (0 === (o = t[n]).refs) {
            for (var i = 0; i < o.parts.length; i++) o.parts[i]();
            delete g[o.id];
          }
        };
      }, i = [], function (e, t) {
        return i[e] = t, i.filter(Boolean).join("\n");
      });
  }, function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        t = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(t) ? e : (e = 0 === t.indexOf("//") ? t : 0 === t.indexOf("/") ? n + t : r + t.replace(/^\.\//, ""), "url(" + JSON.stringify(e) + ")");
      });
    };
  }, function (e, t, n) {
    n(114), e.exports = n(38);
  }], o = {}, r.m = n, r.c = o, r.i = function (e) {
    return e;
  }, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: n
    });
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 119);
  function r(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  }
  var n, o;
});