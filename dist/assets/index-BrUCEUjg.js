(function () {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) U(L);
  new MutationObserver((L) => {
    for (const j of L)
      if (j.type === "childList")
        for (const z of j.addedNodes)
          z.tagName === "LINK" && z.rel === "modulepreload" && U(z);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(L) {
    const j = {};
    return (
      L.integrity && (j.integrity = L.integrity),
      L.referrerPolicy && (j.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (j.credentials = "include")
        : L.crossOrigin === "anonymous"
        ? (j.credentials = "omit")
        : (j.credentials = "same-origin"),
      j
    );
  }
  function U(L) {
    if (L.ep) return;
    L.ep = !0;
    const j = f(L);
    fetch(L.href, j);
  }
})();
var Cs =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function df(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default")
    ? y.default
    : y;
}
function ff(y) {
  if (y.__esModule) return y;
  var v = y.default;
  if (typeof v == "function") {
    var f = function U() {
      return this instanceof U
        ? Reflect.construct(v, arguments, this.constructor)
        : v.apply(this, arguments);
    };
    f.prototype = v.prototype;
  } else f = {};
  return (
    Object.defineProperty(f, "__esModule", { value: !0 }),
    Object.keys(y).forEach(function (U) {
      var L = Object.getOwnPropertyDescriptor(y, U);
      Object.defineProperty(
        f,
        U,
        L.get
          ? L
          : {
              enumerable: !0,
              get: function () {
                return y[U];
              },
            }
      );
    }),
    f
  );
}
var Ts = { exports: {} },
  Sr = {},
  Os = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Va;
function pf() {
  if (Va) return de;
  Va = 1;
  var y = Symbol.for("react.element"),
    v = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    j = Symbol.for("react.provider"),
    z = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    q = Symbol.for("react.memo"),
    ae = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function $(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (N && c[N]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var ne = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    fe = Object.assign,
    le = {};
  function se(c, g, G) {
    (this.props = c),
      (this.context = g),
      (this.refs = le),
      (this.updater = G || ne);
  }
  (se.prototype.isReactComponent = {}),
    (se.prototype.setState = function (c, g) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, g, "setState");
    }),
    (se.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function I() {}
  I.prototype = se.prototype;
  function D(c, g, G) {
    (this.props = c),
      (this.context = g),
      (this.refs = le),
      (this.updater = G || ne);
  }
  var T = (D.prototype = new I());
  (T.constructor = D), fe(T, se.prototype), (T.isPureReactComponent = !0);
  var P = Array.isArray,
    A = Object.prototype.hasOwnProperty,
    V = { current: null },
    re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(c, g, G) {
    var ue,
      ce = {},
      pe = null,
      we = null;
    if (g != null)
      for (ue in (g.ref !== void 0 && (we = g.ref),
      g.key !== void 0 && (pe = "" + g.key),
      g))
        A.call(g, ue) && !re.hasOwnProperty(ue) && (ce[ue] = g[ue]);
    var ve = arguments.length - 2;
    if (ve === 1) ce.children = G;
    else if (1 < ve) {
      for (var ge = Array(ve), Fe = 0; Fe < ve; Fe++)
        ge[Fe] = arguments[Fe + 2];
      ce.children = ge;
    }
    if (c && c.defaultProps)
      for (ue in ((ve = c.defaultProps), ve))
        ce[ue] === void 0 && (ce[ue] = ve[ue]);
    return {
      $$typeof: y,
      type: c,
      key: pe,
      ref: we,
      props: ce,
      _owner: V.current,
    };
  }
  function O(c, g) {
    return {
      $$typeof: y,
      type: c.type,
      key: g,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function W(c) {
    return typeof c == "object" && c !== null && c.$$typeof === y;
  }
  function J(c) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (G) {
        return g[G];
      })
    );
  }
  var b = /\/+/g;
  function ie(c, g) {
    return typeof c == "object" && c !== null && c.key != null
      ? J("" + c.key)
      : g.toString(36);
  }
  function _(c, g, G, ue, ce) {
    var pe = typeof c;
    (pe === "undefined" || pe === "boolean") && (c = null);
    var we = !1;
    if (c === null) we = !0;
    else
      switch (pe) {
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case y:
            case v:
              we = !0;
          }
      }
    if (we)
      return (
        (we = c),
        (ce = ce(we)),
        (c = ue === "" ? "." + ie(we, 0) : ue),
        P(ce)
          ? ((G = ""),
            c != null && (G = c.replace(b, "$&/") + "/"),
            _(ce, g, G, "", function (Fe) {
              return Fe;
            }))
          : ce != null &&
            (W(ce) &&
              (ce = O(
                ce,
                G +
                  (!ce.key || (we && we.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(b, "$&/") + "/") +
                  c
              )),
            g.push(ce)),
        1
      );
    if (((we = 0), (ue = ue === "" ? "." : ue + ":"), P(c)))
      for (var ve = 0; ve < c.length; ve++) {
        pe = c[ve];
        var ge = ue + ie(pe, ve);
        we += _(pe, g, G, ge, ce);
      }
    else if (((ge = $(c)), typeof ge == "function"))
      for (c = ge.call(c), ve = 0; !(pe = c.next()).done; )
        (pe = pe.value), (ge = ue + ie(pe, ve++)), (we += _(pe, g, G, ge, ce));
    else if (pe === "object")
      throw (
        ((g = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : g) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return we;
  }
  function Q(c, g, G) {
    if (c == null) return c;
    var ue = [],
      ce = 0;
    return (
      _(c, ue, "", "", function (pe) {
        return g.call(G, pe, ce++);
      }),
      ue
    );
  }
  function he(c) {
    if (c._status === -1) {
      var g = c._result;
      (g = g()),
        g.then(
          function (G) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = G));
          },
          function (G) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = G));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = g));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var me = { current: null },
    R = { transition: null },
    x = {
      ReactCurrentDispatcher: me,
      ReactCurrentBatchConfig: R,
      ReactCurrentOwner: V,
    };
  function w() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (de.Children = {
      map: Q,
      forEach: function (c, g, G) {
        Q(
          c,
          function () {
            g.apply(this, arguments);
          },
          G
        );
      },
      count: function (c) {
        var g = 0;
        return (
          Q(c, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (c) {
        return (
          Q(c, function (g) {
            return g;
          }) || []
        );
      },
      only: function (c) {
        if (!W(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (de.Component = se),
    (de.Fragment = f),
    (de.Profiler = L),
    (de.PureComponent = D),
    (de.StrictMode = U),
    (de.Suspense = S),
    (de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x),
    (de.act = w),
    (de.cloneElement = function (c, g, G) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var ue = fe({}, c.props),
        ce = c.key,
        pe = c.ref,
        we = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((pe = g.ref), (we = V.current)),
          g.key !== void 0 && (ce = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var ve = c.type.defaultProps;
        for (ge in g)
          A.call(g, ge) &&
            !re.hasOwnProperty(ge) &&
            (ue[ge] = g[ge] === void 0 && ve !== void 0 ? ve[ge] : g[ge]);
      }
      var ge = arguments.length - 2;
      if (ge === 1) ue.children = G;
      else if (1 < ge) {
        ve = Array(ge);
        for (var Fe = 0; Fe < ge; Fe++) ve[Fe] = arguments[Fe + 2];
        ue.children = ve;
      }
      return {
        $$typeof: y,
        type: c.type,
        key: ce,
        ref: pe,
        props: ue,
        _owner: we,
      };
    }),
    (de.createContext = function (c) {
      return (
        (c = {
          $$typeof: z,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: j, _context: c }),
        (c.Consumer = c)
      );
    }),
    (de.createElement = Y),
    (de.createFactory = function (c) {
      var g = Y.bind(null, c);
      return (g.type = c), g;
    }),
    (de.createRef = function () {
      return { current: null };
    }),
    (de.forwardRef = function (c) {
      return { $$typeof: F, render: c };
    }),
    (de.isValidElement = W),
    (de.lazy = function (c) {
      return { $$typeof: ae, _payload: { _status: -1, _result: c }, _init: he };
    }),
    (de.memo = function (c, g) {
      return { $$typeof: q, type: c, compare: g === void 0 ? null : g };
    }),
    (de.startTransition = function (c) {
      var g = R.transition;
      R.transition = {};
      try {
        c();
      } finally {
        R.transition = g;
      }
    }),
    (de.unstable_act = w),
    (de.useCallback = function (c, g) {
      return me.current.useCallback(c, g);
    }),
    (de.useContext = function (c) {
      return me.current.useContext(c);
    }),
    (de.useDebugValue = function () {}),
    (de.useDeferredValue = function (c) {
      return me.current.useDeferredValue(c);
    }),
    (de.useEffect = function (c, g) {
      return me.current.useEffect(c, g);
    }),
    (de.useId = function () {
      return me.current.useId();
    }),
    (de.useImperativeHandle = function (c, g, G) {
      return me.current.useImperativeHandle(c, g, G);
    }),
    (de.useInsertionEffect = function (c, g) {
      return me.current.useInsertionEffect(c, g);
    }),
    (de.useLayoutEffect = function (c, g) {
      return me.current.useLayoutEffect(c, g);
    }),
    (de.useMemo = function (c, g) {
      return me.current.useMemo(c, g);
    }),
    (de.useReducer = function (c, g, G) {
      return me.current.useReducer(c, g, G);
    }),
    (de.useRef = function (c) {
      return me.current.useRef(c);
    }),
    (de.useState = function (c) {
      return me.current.useState(c);
    }),
    (de.useSyncExternalStore = function (c, g, G) {
      return me.current.useSyncExternalStore(c, g, G);
    }),
    (de.useTransition = function () {
      return me.current.useTransition();
    }),
    (de.version = "18.3.1"),
    de
  );
}
var Wa;
function dn() {
  return Wa || ((Wa = 1), (Os.exports = pf())), Os.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qa;
function hf() {
  if (Qa) return Sr;
  Qa = 1;
  var y = dn(),
    v = Symbol.for("react.element"),
    f = Symbol.for("react.fragment"),
    U = Object.prototype.hasOwnProperty,
    L = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(F, S, q) {
    var ae,
      N = {},
      $ = null,
      ne = null;
    q !== void 0 && ($ = "" + q),
      S.key !== void 0 && ($ = "" + S.key),
      S.ref !== void 0 && (ne = S.ref);
    for (ae in S) U.call(S, ae) && !j.hasOwnProperty(ae) && (N[ae] = S[ae]);
    if (F && F.defaultProps)
      for (ae in ((S = F.defaultProps), S)) N[ae] === void 0 && (N[ae] = S[ae]);
    return {
      $$typeof: v,
      type: F,
      key: $,
      ref: ne,
      props: N,
      _owner: L.current,
    };
  }
  return (Sr.Fragment = f), (Sr.jsx = z), (Sr.jsxs = z), Sr;
}
var $a;
function mf() {
  return $a || (($a = 1), (Ts.exports = hf())), Ts.exports;
}
var s = mf(),
  cn = dn(),
  Ml = {},
  Ls = { exports: {} },
  Je = {},
  Rs = { exports: {} },
  Ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ka;
function yf() {
  return (
    Ka ||
      ((Ka = 1),
      (function (y) {
        function v(R, x) {
          var w = R.length;
          R.push(x);
          e: for (; 0 < w; ) {
            var c = (w - 1) >>> 1,
              g = R[c];
            if (0 < L(g, x)) (R[c] = x), (R[w] = g), (w = c);
            else break e;
          }
        }
        function f(R) {
          return R.length === 0 ? null : R[0];
        }
        function U(R) {
          if (R.length === 0) return null;
          var x = R[0],
            w = R.pop();
          if (w !== x) {
            R[0] = w;
            e: for (var c = 0, g = R.length, G = g >>> 1; c < G; ) {
              var ue = 2 * (c + 1) - 1,
                ce = R[ue],
                pe = ue + 1,
                we = R[pe];
              if (0 > L(ce, w))
                pe < g && 0 > L(we, ce)
                  ? ((R[c] = we), (R[pe] = w), (c = pe))
                  : ((R[c] = ce), (R[ue] = w), (c = ue));
              else if (pe < g && 0 > L(we, w))
                (R[c] = we), (R[pe] = w), (c = pe);
              else break e;
            }
          }
          return x;
        }
        function L(R, x) {
          var w = R.sortIndex - x.sortIndex;
          return w !== 0 ? w : R.id - x.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var j = performance;
          y.unstable_now = function () {
            return j.now();
          };
        } else {
          var z = Date,
            F = z.now();
          y.unstable_now = function () {
            return z.now() - F;
          };
        }
        var S = [],
          q = [],
          ae = 1,
          N = null,
          $ = 3,
          ne = !1,
          fe = !1,
          le = !1,
          se = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function T(R) {
          for (var x = f(q); x !== null; ) {
            if (x.callback === null) U(q);
            else if (x.startTime <= R)
              U(q), (x.sortIndex = x.expirationTime), v(S, x);
            else break;
            x = f(q);
          }
        }
        function P(R) {
          if (((le = !1), T(R), !fe))
            if (f(S) !== null) (fe = !0), he(A);
            else {
              var x = f(q);
              x !== null && me(P, x.startTime - R);
            }
        }
        function A(R, x) {
          (fe = !1), le && ((le = !1), I(Y), (Y = -1)), (ne = !0);
          var w = $;
          try {
            for (
              T(x), N = f(S);
              N !== null && (!(N.expirationTime > x) || (R && !J()));

            ) {
              var c = N.callback;
              if (typeof c == "function") {
                (N.callback = null), ($ = N.priorityLevel);
                var g = c(N.expirationTime <= x);
                (x = y.unstable_now()),
                  typeof g == "function"
                    ? (N.callback = g)
                    : N === f(S) && U(S),
                  T(x);
              } else U(S);
              N = f(S);
            }
            if (N !== null) var G = !0;
            else {
              var ue = f(q);
              ue !== null && me(P, ue.startTime - x), (G = !1);
            }
            return G;
          } finally {
            (N = null), ($ = w), (ne = !1);
          }
        }
        var V = !1,
          re = null,
          Y = -1,
          O = 5,
          W = -1;
        function J() {
          return !(y.unstable_now() - W < O);
        }
        function b() {
          if (re !== null) {
            var R = y.unstable_now();
            W = R;
            var x = !0;
            try {
              x = re(!0, R);
            } finally {
              x ? ie() : ((V = !1), (re = null));
            }
          } else V = !1;
        }
        var ie;
        if (typeof D == "function")
          ie = function () {
            D(b);
          };
        else if (typeof MessageChannel < "u") {
          var _ = new MessageChannel(),
            Q = _.port2;
          (_.port1.onmessage = b),
            (ie = function () {
              Q.postMessage(null);
            });
        } else
          ie = function () {
            se(b, 0);
          };
        function he(R) {
          (re = R), V || ((V = !0), ie());
        }
        function me(R, x) {
          Y = se(function () {
            R(y.unstable_now());
          }, x);
        }
        (y.unstable_IdlePriority = 5),
          (y.unstable_ImmediatePriority = 1),
          (y.unstable_LowPriority = 4),
          (y.unstable_NormalPriority = 3),
          (y.unstable_Profiling = null),
          (y.unstable_UserBlockingPriority = 2),
          (y.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (y.unstable_continueExecution = function () {
            fe || ne || ((fe = !0), he(A));
          }),
          (y.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (O = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (y.unstable_getCurrentPriorityLevel = function () {
            return $;
          }),
          (y.unstable_getFirstCallbackNode = function () {
            return f(S);
          }),
          (y.unstable_next = function (R) {
            switch ($) {
              case 1:
              case 2:
              case 3:
                var x = 3;
                break;
              default:
                x = $;
            }
            var w = $;
            $ = x;
            try {
              return R();
            } finally {
              $ = w;
            }
          }),
          (y.unstable_pauseExecution = function () {}),
          (y.unstable_requestPaint = function () {}),
          (y.unstable_runWithPriority = function (R, x) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var w = $;
            $ = R;
            try {
              return x();
            } finally {
              $ = w;
            }
          }),
          (y.unstable_scheduleCallback = function (R, x, w) {
            var c = y.unstable_now();
            switch (
              (typeof w == "object" && w !== null
                ? ((w = w.delay),
                  (w = typeof w == "number" && 0 < w ? c + w : c))
                : (w = c),
              R)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = w + g),
              (R = {
                id: ae++,
                callback: x,
                priorityLevel: R,
                startTime: w,
                expirationTime: g,
                sortIndex: -1,
              }),
              w > c
                ? ((R.sortIndex = w),
                  v(q, R),
                  f(S) === null &&
                    R === f(q) &&
                    (le ? (I(Y), (Y = -1)) : (le = !0), me(P, w - c)))
                : ((R.sortIndex = g), v(S, R), fe || ne || ((fe = !0), he(A))),
              R
            );
          }),
          (y.unstable_shouldYield = J),
          (y.unstable_wrapCallback = function (R) {
            var x = $;
            return function () {
              var w = $;
              $ = x;
              try {
                return R.apply(this, arguments);
              } finally {
                $ = w;
              }
            };
          });
      })(Ms)),
    Ms
  );
}
var Ya;
function vf() {
  return Ya || ((Ya = 1), (Rs.exports = yf())), Rs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xa;
function gf() {
  if (Xa) return Je;
  Xa = 1;
  var y = dn(),
    v = vf();
  function f(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var U = new Set(),
    L = {};
  function j(e, t) {
    z(e, t), z(e + "Capture", t);
  }
  function z(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) U.add(t[e]);
  }
  var F = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    S = Object.prototype.hasOwnProperty,
    q =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ae = {},
    N = {};
  function $(e) {
    return S.call(N, e)
      ? !0
      : S.call(ae, e)
      ? !1
      : q.test(e)
      ? (N[e] = !0)
      : ((ae[e] = !0), !1);
  }
  function ne(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function fe(e, t, n, r) {
    if (t === null || typeof t > "u" || ne(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function le(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      se[e] = new le(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      se[t] = new le(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      se[e] = new le(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      se[e] = new le(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        se[e] = new le(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      se[e] = new le(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      se[e] = new le(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      se[e] = new le(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      se[e] = new le(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function D(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, D);
      se[t] = new le(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, D);
        se[t] = new le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, D);
      se[t] = new le(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      se[e] = new le(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (se.xlinkHref = new le(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      se[e] = new le(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function T(e, t, n, r) {
    var l = se.hasOwnProperty(t) ? se[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (fe(t, n, l, r) && (n = null),
      r || l === null
        ? $(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var P = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    A = Symbol.for("react.element"),
    V = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    W = Symbol.for("react.provider"),
    J = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    me = Symbol.for("react.offscreen"),
    R = Symbol.iterator;
  function x(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (R && e[R]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var w = Object.assign,
    c;
  function g(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var G = !1;
  function ue(e, t) {
    if (!e || G) return "";
    G = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var a =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (G = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ue(e.type, !1)), e;
      case 11:
        return (e = ue(e.type.render, !1)), e;
      case 1:
        return (e = ue(e.type, !0)), e;
      default:
        return "";
    }
  }
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case V:
        return "Portal";
      case O:
        return "Profiler";
      case Y:
        return "StrictMode";
      case ie:
        return "Suspense";
      case _:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case J:
          return (e.displayName || "Context") + ".Consumer";
        case W:
          return (e._context.displayName || "Context") + ".Provider";
        case b:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Q:
          return (
            (t = e.displayName || null), t !== null ? t : pe(e.type) || "Memo"
          );
        case he:
          (t = e._payload), (e = e._init);
          try {
            return pe(e(t));
          } catch {}
      }
    return null;
  }
  function we(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pe(t);
      case 8:
        return t === Y ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ve(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ge(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Fe(e) {
    var t = ge(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), i.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function _r(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function Ys(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ge(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Il(e, t) {
    var n = t.checked;
    return w({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Xs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ve(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Zs(e, t) {
    (t = t.checked), t != null && T(e, "checked", t, !1);
  }
  function Dl(e, t) {
    Zs(e, t);
    var n = ve(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Al(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Al(e, t.type, ve(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function bs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Al(e, t, n) {
    (t !== "number" || kr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function fn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ve(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(f(91));
    return w({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Gs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(f(92));
        if (An(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ve(n) };
  }
  function qs(e, t) {
    var n = ve(t.value),
      r = ve(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Js(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function eo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? eo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Pr,
    to = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Pr = Pr || document.createElement("div"),
            Pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Pr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Un(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    mc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fn).forEach(function (e) {
    mc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
    });
  });
  function no(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ro(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = no(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var yc = w(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Hl(e, t) {
    if (t) {
      if (yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(f(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(f(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(f(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(f(62));
    }
  }
  function Bl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vl = null;
  function Wl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ql = null,
    pn = null,
    hn = null;
  function lo(e) {
    if ((e = or(e))) {
      if (typeof Ql != "function") throw Error(f(280));
      var t = e.stateNode;
      t && ((t = Xr(t)), Ql(e.stateNode, e.type, t));
    }
  }
  function io(e) {
    pn ? (hn ? hn.push(e) : (hn = [e])) : (pn = e);
  }
  function so() {
    if (pn) {
      var e = pn,
        t = hn;
      if (((hn = pn = null), lo(e), t)) for (e = 0; e < t.length; e++) lo(t[e]);
    }
  }
  function oo(e, t) {
    return e(t);
  }
  function uo() {}
  var $l = !1;
  function ao(e, t, n) {
    if ($l) return e(t, n);
    $l = !0;
    try {
      return oo(e, t, n);
    } finally {
      ($l = !1), (pn !== null || hn !== null) && (uo(), so());
    }
  }
  function Hn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Xr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(f(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (F)
    try {
      var Bn = {};
      Object.defineProperty(Bn, "passive", {
        get: function () {
          Kl = !0;
        },
      }),
        window.addEventListener("test", Bn, Bn),
        window.removeEventListener("test", Bn, Bn);
    } catch {
      Kl = !1;
    }
  function vc(e, t, n, r, l, i, o, u, a) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (E) {
      this.onError(E);
    }
  }
  var Vn = !1,
    Er = null,
    Nr = !1,
    Yl = null,
    gc = {
      onError: function (e) {
        (Vn = !0), (Er = e);
      },
    };
  function xc(e, t, n, r, l, i, o, u, a) {
    (Vn = !1), (Er = null), vc.apply(gc, arguments);
  }
  function wc(e, t, n, r, l, i, o, u, a) {
    if ((xc.apply(this, arguments), Vn)) {
      if (Vn) {
        var m = Er;
        (Vn = !1), (Er = null);
      } else throw Error(f(198));
      Nr || ((Nr = !0), (Yl = m));
    }
  }
  function bt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function co(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function fo(e) {
    if (bt(e) !== e) throw Error(f(188));
  }
  function jc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = bt(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return fo(l), e;
          if (i === r) return fo(l), t;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              (o = !0), (n = i), (r = l);
              break;
            }
            if (u === r) {
              (o = !0), (r = i), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(f(189));
        }
      }
      if (n.alternate !== r) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? e : t;
  }
  function po(e) {
    return (e = jc(e)), e !== null ? ho(e) : null;
  }
  function ho(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ho(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var mo = v.unstable_scheduleCallback,
    yo = v.unstable_cancelCallback,
    Sc = v.unstable_shouldYield,
    _c = v.unstable_requestPaint,
    Te = v.unstable_now,
    kc = v.unstable_getCurrentPriorityLevel,
    Xl = v.unstable_ImmediatePriority,
    vo = v.unstable_UserBlockingPriority,
    Cr = v.unstable_NormalPriority,
    Pc = v.unstable_LowPriority,
    go = v.unstable_IdlePriority,
    Tr = null,
    gt = null;
  function Ec(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
      try {
        gt.onCommitFiberRoot(Tr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : Tc,
    Nc = Math.log,
    Cc = Math.LN2;
  function Tc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Nc(e) / Cc) | 0)) | 0;
  }
  var Or = 64,
    Lr = 4194304;
  function Wn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Rr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Wn(u)) : ((i &= o), i !== 0 && (r = Wn(i)));
    } else (o = n & ~l), o !== 0 ? (r = Wn(o)) : i !== 0 && (r = Wn(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Oc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - dt(i),
        u = 1 << o,
        a = l[o];
      a === -1
        ? (!(u & n) || u & r) && (l[o] = Oc(u, t))
        : a <= t && (e.expiredLanes |= u),
        (i &= ~u);
    }
  }
  function Zl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function xo() {
    var e = Or;
    return (Or <<= 1), !(Or & 4194240) && (Or = 64), e;
  }
  function bl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Qn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dt(t)),
      (e[t] = n);
  }
  function Rc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - dt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function Gl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var je = 0;
  function wo(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var jo,
    ql,
    So,
    _o,
    ko,
    Jl = !1,
    Mr = [],
    Lt = null,
    Rt = null,
    Mt = null,
    $n = new Map(),
    Kn = new Map(),
    zt = [],
    Mc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Po(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Rt = null;
        break;
      case "mouseover":
      case "mouseout":
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kn.delete(t.pointerId);
    }
  }
  function Yn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = or(t)), t !== null && ql(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function zc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Lt = Yn(Lt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Rt = Yn(Rt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Mt = Yn(Mt, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return $n.set(i, Yn($n.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), Kn.set(i, Yn(Kn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Eo(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = bt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = co(n)), t !== null)) {
            (e.blockedOn = t),
              ko(e.priority, function () {
                So(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Vl = r), n.target.dispatchEvent(r), (Vl = null);
      } else return (t = or(n)), t !== null && ql(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function No(e, t, n) {
    zr(e) && n.delete(t);
  }
  function Ic() {
    (Jl = !1),
      Lt !== null && zr(Lt) && (Lt = null),
      Rt !== null && zr(Rt) && (Rt = null),
      Mt !== null && zr(Mt) && (Mt = null),
      $n.forEach(No),
      Kn.forEach(No);
  }
  function Xn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl ||
        ((Jl = !0),
        v.unstable_scheduleCallback(v.unstable_NormalPriority, Ic)));
  }
  function Zn(e) {
    function t(l) {
      return Xn(l, e);
    }
    if (0 < Mr.length) {
      Xn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
        var r = Mr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Lt !== null && Xn(Lt, e),
        Rt !== null && Xn(Rt, e),
        Mt !== null && Xn(Mt, e),
        $n.forEach(t),
        Kn.forEach(t),
        n = 0;
      n < zt.length;
      n++
    )
      (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
      Eo(n), n.blockedOn === null && zt.shift();
  }
  var mn = P.ReactCurrentBatchConfig,
    Ir = !0;
  function Dc(e, t, n, r) {
    var l = je,
      i = mn.transition;
    mn.transition = null;
    try {
      (je = 1), ei(e, t, n, r);
    } finally {
      (je = l), (mn.transition = i);
    }
  }
  function Ac(e, t, n, r) {
    var l = je,
      i = mn.transition;
    mn.transition = null;
    try {
      (je = 4), ei(e, t, n, r);
    } finally {
      (je = l), (mn.transition = i);
    }
  }
  function ei(e, t, n, r) {
    if (Ir) {
      var l = ti(e, t, n, r);
      if (l === null) gi(e, t, r, Dr, n), Po(e, r);
      else if (zc(l, e, t, n, r)) r.stopPropagation();
      else if ((Po(e, r), t & 4 && -1 < Mc.indexOf(e))) {
        for (; l !== null; ) {
          var i = or(l);
          if (
            (i !== null && jo(i),
            (i = ti(e, t, n, r)),
            i === null && gi(e, t, r, Dr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else gi(e, t, r, null, n);
    }
  }
  var Dr = null;
  function ti(e, t, n, r) {
    if (((Dr = null), (e = Wl(r)), (e = Gt(e)), e !== null))
      if (((t = bt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = co(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Dr = e), null;
  }
  function Co(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (kc()) {
          case Xl:
            return 1;
          case vo:
            return 4;
          case Cr:
          case Pc:
            return 16;
          case go:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null,
    ni = null,
    Ar = null;
  function To() {
    if (Ar) return Ar;
    var e,
      t = ni,
      n = t.length,
      r,
      l = "value" in It ? It.value : It.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Ar = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ur(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function Oo() {
    return !1;
  }
  function tt(e) {
    function t(n, r, l, i, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Fr
          : Oo),
        (this.isPropagationStopped = Oo),
        this
      );
    }
    return (
      w(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
      }),
      t
    );
  }
  var yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ri = tt(yn),
    bn = w({}, yn, { view: 0, detail: 0 }),
    Uc = tt(bn),
    li,
    ii,
    Gn,
    Hr = w({}, bn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Gn &&
              (Gn && e.type === "mousemove"
                ? ((li = e.screenX - Gn.screenX), (ii = e.screenY - Gn.screenY))
                : (ii = li = 0),
              (Gn = e)),
            li);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ii;
      },
    }),
    Lo = tt(Hr),
    Fc = w({}, Hr, { dataTransfer: 0 }),
    Hc = tt(Fc),
    Bc = w({}, bn, { relatedTarget: 0 }),
    si = tt(Bc),
    Vc = w({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wc = tt(Vc),
    Qc = w({}, yn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    $c = tt(Qc),
    Kc = w({}, yn, { data: 0 }),
    Ro = tt(Kc),
    Yc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Zc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function bc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Zc[e])
      ? !!t[e]
      : !1;
  }
  function oi() {
    return bc;
  }
  var Gc = w({}, bn, {
      key: function (e) {
        if (e.key) {
          var t = Yc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Xc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oi,
      charCode: function (e) {
        return e.type === "keypress" ? Ur(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ur(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    qc = tt(Gc),
    Jc = w({}, Hr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Mo = tt(Jc),
    ed = w({}, bn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oi,
    }),
    td = tt(ed),
    nd = w({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rd = tt(nd),
    ld = w({}, Hr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    id = tt(ld),
    sd = [9, 13, 27, 32],
    ui = F && "CompositionEvent" in window,
    qn = null;
  F && "documentMode" in document && (qn = document.documentMode);
  var od = F && "TextEvent" in window && !qn,
    zo = F && (!ui || (qn && 8 < qn && 11 >= qn)),
    Io = " ",
    Do = !1;
  function Ao(e, t) {
    switch (e) {
      case "keyup":
        return sd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Uo(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function ud(e, t) {
    switch (e) {
      case "compositionend":
        return Uo(t);
      case "keypress":
        return t.which !== 32 ? null : ((Do = !0), Io);
      case "textInput":
        return (e = t.data), e === Io && Do ? null : e;
      default:
        return null;
    }
  }
  function ad(e, t) {
    if (vn)
      return e === "compositionend" || (!ui && Ao(e, t))
        ? ((e = To()), (Ar = ni = It = null), (vn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return zo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cd[e.type] : t === "textarea";
  }
  function Ho(e, t, n, r) {
    io(r),
      (t = $r(t, "onChange")),
      0 < t.length &&
        ((n = new ri("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Jn = null,
    er = null;
  function dd(e) {
    lu(e, 0);
  }
  function Br(e) {
    var t = Sn(e);
    if (Ys(t)) return e;
  }
  function fd(e, t) {
    if (e === "change") return t;
  }
  var Bo = !1;
  if (F) {
    var ai;
    if (F) {
      var ci = "oninput" in document;
      if (!ci) {
        var Vo = document.createElement("div");
        Vo.setAttribute("oninput", "return;"),
          (ci = typeof Vo.oninput == "function");
      }
      ai = ci;
    } else ai = !1;
    Bo = ai && (!document.documentMode || 9 < document.documentMode);
  }
  function Wo() {
    Jn && (Jn.detachEvent("onpropertychange", Qo), (er = Jn = null));
  }
  function Qo(e) {
    if (e.propertyName === "value" && Br(er)) {
      var t = [];
      Ho(t, er, e, Wl(e)), ao(dd, t);
    }
  }
  function pd(e, t, n) {
    e === "focusin"
      ? (Wo(), (Jn = t), (er = n), Jn.attachEvent("onpropertychange", Qo))
      : e === "focusout" && Wo();
  }
  function hd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Br(er);
  }
  function md(e, t) {
    if (e === "click") return Br(t);
  }
  function yd(e, t) {
    if (e === "input" || e === "change") return Br(t);
  }
  function vd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : vd;
  function tr(e, t) {
    if (ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!S.call(t, l) || !ft(e[l], t[l])) return !1;
    }
    return !0;
  }
  function $o(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ko(e, t) {
    var n = $o(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = $o(n);
    }
  }
  function Yo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Yo(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Xo() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function di(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function gd(e) {
    var t = Xo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Yo(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && di(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Ko(n, i));
          var o = Ko(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var xd = F && "documentMode" in document && 11 >= document.documentMode,
    gn = null,
    fi = null,
    nr = null,
    pi = !1;
  function Zo(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pi ||
      gn == null ||
      gn !== kr(r) ||
      ((r = gn),
      "selectionStart" in r && di(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (nr && tr(nr, r)) ||
        ((nr = r),
        (r = $r(fi, "onSelect")),
        0 < r.length &&
          ((t = new ri("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = gn))));
  }
  function Vr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var xn = {
      animationend: Vr("Animation", "AnimationEnd"),
      animationiteration: Vr("Animation", "AnimationIteration"),
      animationstart: Vr("Animation", "AnimationStart"),
      transitionend: Vr("Transition", "TransitionEnd"),
    },
    hi = {},
    bo = {};
  F &&
    ((bo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xn.animationend.animation,
      delete xn.animationiteration.animation,
      delete xn.animationstart.animation),
    "TransitionEvent" in window || delete xn.transitionend.transition);
  function Wr(e) {
    if (hi[e]) return hi[e];
    if (!xn[e]) return e;
    var t = xn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in bo) return (hi[e] = t[n]);
    return e;
  }
  var Go = Wr("animationend"),
    qo = Wr("animationiteration"),
    Jo = Wr("animationstart"),
    eu = Wr("transitionend"),
    tu = new Map(),
    nu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Dt(e, t) {
    tu.set(e, t), j(t, [e]);
  }
  for (var mi = 0; mi < nu.length; mi++) {
    var yi = nu[mi],
      wd = yi.toLowerCase(),
      jd = yi[0].toUpperCase() + yi.slice(1);
    Dt(wd, "on" + jd);
  }
  Dt(Go, "onAnimationEnd"),
    Dt(qo, "onAnimationIteration"),
    Dt(Jo, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(eu, "onTransitionEnd"),
    z("onMouseEnter", ["mouseout", "mouseover"]),
    z("onMouseLeave", ["mouseout", "mouseover"]),
    z("onPointerEnter", ["pointerout", "pointerover"]),
    z("onPointerLeave", ["pointerout", "pointerover"]),
    j(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    j(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    j("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    j(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    j(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    j(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var rr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(rr)
    );
  function ru(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), wc(r, t, void 0, e), (e.currentTarget = null);
  }
  function lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              a = u.instance,
              m = u.currentTarget;
            if (((u = u.listener), a !== i && l.isPropagationStopped()))
              break e;
            ru(l, u, m), (i = a);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (a = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              a !== i && l.isPropagationStopped())
            )
              break e;
            ru(l, u, m), (i = a);
          }
      }
    }
    if (Nr) throw ((e = Yl), (Nr = !1), (Yl = null), e);
  }
  function _e(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set());
    var r = e + "__bubble";
    n.has(r) || (iu(t, e, 2, !1), n.add(r));
  }
  function vi(e, t, n) {
    var r = 0;
    t && (r |= 4), iu(n, e, r, t);
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function lr(e) {
    if (!e[Qr]) {
      (e[Qr] = !0),
        U.forEach(function (n) {
          n !== "selectionchange" && (Sd.has(n) || vi(n, !1, e), vi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qr] || ((t[Qr] = !0), vi("selectionchange", !1, t));
    }
  }
  function iu(e, t, n, r) {
    switch (Co(t)) {
      case 1:
        var l = Dc;
        break;
      case 4:
        l = Ac;
        break;
      default:
        l = ei;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Kl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function gi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var a = o.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = o.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = Gt(u)), o === null)) return;
            if (((a = o.tag), a === 5 || a === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    ao(function () {
      var m = i,
        E = Wl(n),
        C = [];
      e: {
        var k = tu.get(e);
        if (k !== void 0) {
          var H = ri,
            K = e;
          switch (e) {
            case "keypress":
              if (Ur(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = qc;
              break;
            case "focusin":
              (K = "focus"), (H = si);
              break;
            case "focusout":
              (K = "blur"), (H = si);
              break;
            case "beforeblur":
            case "afterblur":
              H = si;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Lo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Hc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = td;
              break;
            case Go:
            case qo:
            case Jo:
              H = Wc;
              break;
            case eu:
              H = rd;
              break;
            case "scroll":
              H = Uc;
              break;
            case "wheel":
              H = id;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = $c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Mo;
          }
          var X = (t & 4) !== 0,
            Oe = !X && e === "scroll",
            p = X ? (k !== null ? k + "Capture" : null) : k;
          X = [];
          for (var d = m, h; d !== null; ) {
            h = d;
            var M = h.stateNode;
            if (
              (h.tag === 5 &&
                M !== null &&
                ((h = M),
                p !== null &&
                  ((M = Hn(d, p)), M != null && X.push(ir(d, M, h)))),
              Oe)
            )
              break;
            d = d.return;
          }
          0 < X.length &&
            ((k = new H(k, K, null, n, E)), C.push({ event: k, listeners: X }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            k &&
              n !== Vl &&
              (K = n.relatedTarget || n.fromElement) &&
              (Gt(K) || K[_t]))
          )
            break e;
          if (
            (H || k) &&
            ((k =
              E.window === E
                ? E
                : (k = E.ownerDocument)
                ? k.defaultView || k.parentWindow
                : window),
            H
              ? ((K = n.relatedTarget || n.toElement),
                (H = m),
                (K = K ? Gt(K) : null),
                K !== null &&
                  ((Oe = bt(K)), K !== Oe || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((H = null), (K = m)),
            H !== K)
          ) {
            if (
              ((X = Lo),
              (M = "onMouseLeave"),
              (p = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((X = Mo),
                (M = "onPointerLeave"),
                (p = "onPointerEnter"),
                (d = "pointer")),
              (Oe = H == null ? k : Sn(H)),
              (h = K == null ? k : Sn(K)),
              (k = new X(M, d + "leave", H, n, E)),
              (k.target = Oe),
              (k.relatedTarget = h),
              (M = null),
              Gt(E) === m &&
                ((X = new X(p, d + "enter", K, n, E)),
                (X.target = h),
                (X.relatedTarget = Oe),
                (M = X)),
              (Oe = M),
              H && K)
            )
              t: {
                for (X = H, p = K, d = 0, h = X; h; h = wn(h)) d++;
                for (h = 0, M = p; M; M = wn(M)) h++;
                for (; 0 < d - h; ) (X = wn(X)), d--;
                for (; 0 < h - d; ) (p = wn(p)), h--;
                for (; d--; ) {
                  if (X === p || (p !== null && X === p.alternate)) break t;
                  (X = wn(X)), (p = wn(p));
                }
                X = null;
              }
            else X = null;
            H !== null && su(C, k, H, X, !1),
              K !== null && Oe !== null && su(C, Oe, K, X, !0);
          }
        }
        e: {
          if (
            ((k = m ? Sn(m) : window),
            (H = k.nodeName && k.nodeName.toLowerCase()),
            H === "select" || (H === "input" && k.type === "file"))
          )
            var Z = fd;
          else if (Fo(k))
            if (Bo) Z = yd;
            else {
              Z = hd;
              var ee = pd;
            }
          else
            (H = k.nodeName) &&
              H.toLowerCase() === "input" &&
              (k.type === "checkbox" || k.type === "radio") &&
              (Z = md);
          if (Z && (Z = Z(e, m))) {
            Ho(C, Z, n, E);
            break e;
          }
          ee && ee(e, k, m),
            e === "focusout" &&
              (ee = k._wrapperState) &&
              ee.controlled &&
              k.type === "number" &&
              Al(k, "number", k.value);
        }
        switch (((ee = m ? Sn(m) : window), e)) {
          case "focusin":
            (Fo(ee) || ee.contentEditable === "true") &&
              ((gn = ee), (fi = m), (nr = null));
            break;
          case "focusout":
            nr = fi = gn = null;
            break;
          case "mousedown":
            pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (pi = !1), Zo(C, n, E);
            break;
          case "selectionchange":
            if (xd) break;
          case "keydown":
          case "keyup":
            Zo(C, n, E);
        }
        var te;
        if (ui)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          vn
            ? Ao(e, n) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (zo &&
            n.locale !== "ko" &&
            (vn || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && vn && (te = To())
              : ((It = E),
                (ni = "value" in It ? It.value : It.textContent),
                (vn = !0))),
          (ee = $r(m, oe)),
          0 < ee.length &&
            ((oe = new Ro(oe, e, null, n, E)),
            C.push({ event: oe, listeners: ee }),
            te
              ? (oe.data = te)
              : ((te = Uo(n)), te !== null && (oe.data = te)))),
          (te = od ? ud(e, n) : ad(e, n)) &&
            ((m = $r(m, "onBeforeInput")),
            0 < m.length &&
              ((E = new Ro("onBeforeInput", "beforeinput", null, n, E)),
              C.push({ event: E, listeners: m }),
              (E.data = te)));
      }
      lu(C, t);
    });
  }
  function ir(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Hn(e, n)),
        i != null && r.unshift(ir(e, i, l)),
        (i = Hn(e, t)),
        i != null && r.push(ir(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function wn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function su(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        a = u.alternate,
        m = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 &&
        m !== null &&
        ((u = m),
        l
          ? ((a = Hn(n, i)), a != null && o.unshift(ir(n, a, u)))
          : l || ((a = Hn(n, i)), a != null && o.push(ir(n, a, u)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var _d = /\r\n?/g,
    kd = /\u0000|\uFFFD/g;
  function ou(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _d,
        `
`
      )
      .replace(kd, "");
  }
  function Kr(e, t, n) {
    if (((t = ou(t)), ou(e) !== t && n)) throw Error(f(425));
  }
  function Yr() {}
  var xi = null,
    wi = null;
  function ji(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Si = typeof setTimeout == "function" ? setTimeout : void 0,
    Pd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    uu = typeof Promise == "function" ? Promise : void 0,
    Ed =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof uu < "u"
        ? function (e) {
            return uu.resolve(null).then(e).catch(Nd);
          }
        : Si;
  function Nd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _i(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Zn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Zn(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function au(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var jn = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + jn,
    sr = "__reactProps$" + jn,
    _t = "__reactContainer$" + jn,
    ki = "__reactEvents$" + jn,
    Cd = "__reactListeners$" + jn,
    Td = "__reactHandles$" + jn;
  function Gt(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[_t] || n[xt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = au(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = au(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function or(e) {
    return (
      (e = e[xt] || e[_t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Xr(e) {
    return e[sr] || null;
  }
  var Pi = [],
    _n = -1;
  function Ut(e) {
    return { current: e };
  }
  function ke(e) {
    0 > _n || ((e.current = Pi[_n]), (Pi[_n] = null), _n--);
  }
  function Se(e, t) {
    _n++, (Pi[_n] = e.current), (e.current = t);
  }
  var Ft = {},
    Ve = Ut(Ft),
    Xe = Ut(!1),
    qt = Ft;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ze(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Zr() {
    ke(Xe), ke(Ve);
  }
  function cu(e, t, n) {
    if (Ve.current !== Ft) throw Error(f(168));
    Se(Ve, t), Se(Xe, n);
  }
  function du(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(f(108, we(e) || "Unknown", l));
    return w({}, n, r);
  }
  function br(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (qt = Ve.current),
      Se(Ve, e),
      Se(Xe, Xe.current),
      !0
    );
  }
  function fu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(f(169));
    n
      ? ((e = du(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ke(Xe),
        ke(Ve),
        Se(Ve, e))
      : ke(Xe),
      Se(Xe, n);
  }
  var kt = null,
    Gr = !1,
    Ei = !1;
  function pu(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function Od(e) {
    (Gr = !0), pu(e);
  }
  function Ht() {
    if (!Ei && kt !== null) {
      Ei = !0;
      var e = 0,
        t = je;
      try {
        var n = kt;
        for (je = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (kt = null), (Gr = !1);
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), mo(Xl, Ht), l);
      } finally {
        (je = t), (Ei = !1);
      }
    }
    return null;
  }
  var Pn = [],
    En = 0,
    qr = null,
    Jr = 0,
    it = [],
    st = 0,
    Jt = null,
    Pt = 1,
    Et = "";
  function en(e, t) {
    (Pn[En++] = Jr), (Pn[En++] = qr), (qr = e), (Jr = t);
  }
  function hu(e, t, n) {
    (it[st++] = Pt), (it[st++] = Et), (it[st++] = Jt), (Jt = e);
    var r = Pt;
    e = Et;
    var l = 32 - dt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - dt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      (i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Pt = (1 << (32 - dt(t) + l)) | (n << l) | r),
        (Et = i + e);
    } else (Pt = (1 << i) | (n << l) | r), (Et = e);
  }
  function Ni(e) {
    e.return !== null && (en(e, 1), hu(e, 1, 0));
  }
  function Ci(e) {
    for (; e === qr; )
      (qr = Pn[--En]), (Pn[En] = null), (Jr = Pn[--En]), (Pn[En] = null);
    for (; e === Jt; )
      (Jt = it[--st]),
        (it[st] = null),
        (Et = it[--st]),
        (it[st] = null),
        (Pt = it[--st]),
        (it[st] = null);
  }
  var nt = null,
    rt = null,
    Pe = !1,
    pt = null;
  function mu(e, t) {
    var n = ct(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function yu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = At(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: Pt, overflow: Et } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ct(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ti(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Oi(e) {
    if (Pe) {
      var t = rt;
      if (t) {
        var n = t;
        if (!yu(e, t)) {
          if (Ti(e)) throw Error(f(418));
          t = At(n.nextSibling);
          var r = nt;
          t && yu(e, t)
            ? mu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (nt = e));
        }
      } else {
        if (Ti(e)) throw Error(f(418));
        (e.flags = (e.flags & -4097) | 2), (Pe = !1), (nt = e);
      }
    }
  }
  function vu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function el(e) {
    if (e !== nt) return !1;
    if (!Pe) return vu(e), (Pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ji(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (Ti(e)) throw (gu(), Error(f(418)));
      for (; t; ) mu(e, t), (t = At(t.nextSibling));
    }
    if ((vu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = At(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gu() {
    for (var e = rt; e; ) e = At(e.nextSibling);
  }
  function Nn() {
    (rt = nt = null), (Pe = !1);
  }
  function Li(e) {
    pt === null ? (pt = [e]) : pt.push(e);
  }
  var Ld = P.ReactCurrentBatchConfig;
  function ur(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(f(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(f(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(f(284));
      if (!n._owner) throw Error(f(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        f(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function xu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function wu(e) {
    function t(p, d) {
      if (e) {
        var h = p.deletions;
        h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
      }
    }
    function n(p, d) {
      if (!e) return null;
      for (; d !== null; ) t(p, d), (d = d.sibling);
      return null;
    }
    function r(p, d) {
      for (p = new Map(); d !== null; )
        d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
      return p;
    }
    function l(p, d) {
      return (p = Xt(p, d)), (p.index = 0), (p.sibling = null), p;
    }
    function i(p, d, h) {
      return (
        (p.index = h),
        e
          ? ((h = p.alternate),
            h !== null
              ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
              : ((p.flags |= 2), d))
          : ((p.flags |= 1048576), d)
      );
    }
    function o(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function u(p, d, h, M) {
      return d === null || d.tag !== 6
        ? ((d = Ss(h, p.mode, M)), (d.return = p), d)
        : ((d = l(d, h)), (d.return = p), d);
    }
    function a(p, d, h, M) {
      var Z = h.type;
      return Z === re
        ? E(p, d, h.props.children, M, h.key)
        : d !== null &&
          (d.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === he &&
              xu(Z) === d.type))
        ? ((M = l(d, h.props)), (M.ref = ur(p, d, h)), (M.return = p), M)
        : ((M = Pl(h.type, h.key, h.props, null, p.mode, M)),
          (M.ref = ur(p, d, h)),
          (M.return = p),
          M);
    }
    function m(p, d, h, M) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== h.containerInfo ||
        d.stateNode.implementation !== h.implementation
        ? ((d = _s(h, p.mode, M)), (d.return = p), d)
        : ((d = l(d, h.children || [])), (d.return = p), d);
    }
    function E(p, d, h, M, Z) {
      return d === null || d.tag !== 7
        ? ((d = an(h, p.mode, M, Z)), (d.return = p), d)
        : ((d = l(d, h)), (d.return = p), d);
    }
    function C(p, d, h) {
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return (d = Ss("" + d, p.mode, h)), (d.return = p), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case A:
            return (
              (h = Pl(d.type, d.key, d.props, null, p.mode, h)),
              (h.ref = ur(p, null, d)),
              (h.return = p),
              h
            );
          case V:
            return (d = _s(d, p.mode, h)), (d.return = p), d;
          case he:
            var M = d._init;
            return C(p, M(d._payload), h);
        }
        if (An(d) || x(d))
          return (d = an(d, p.mode, h, null)), (d.return = p), d;
        tl(p, d);
      }
      return null;
    }
    function k(p, d, h, M) {
      var Z = d !== null ? d.key : null;
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return Z !== null ? null : u(p, d, "" + h, M);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case A:
            return h.key === Z ? a(p, d, h, M) : null;
          case V:
            return h.key === Z ? m(p, d, h, M) : null;
          case he:
            return (Z = h._init), k(p, d, Z(h._payload), M);
        }
        if (An(h) || x(h)) return Z !== null ? null : E(p, d, h, M, null);
        tl(p, h);
      }
      return null;
    }
    function H(p, d, h, M, Z) {
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return (p = p.get(h) || null), u(d, p, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case A:
            return (
              (p = p.get(M.key === null ? h : M.key) || null), a(d, p, M, Z)
            );
          case V:
            return (
              (p = p.get(M.key === null ? h : M.key) || null), m(d, p, M, Z)
            );
          case he:
            var ee = M._init;
            return H(p, d, h, ee(M._payload), Z);
        }
        if (An(M) || x(M)) return (p = p.get(h) || null), E(d, p, M, Z, null);
        tl(d, M);
      }
      return null;
    }
    function K(p, d, h, M) {
      for (
        var Z = null, ee = null, te = d, oe = (d = 0), Ue = null;
        te !== null && oe < h.length;
        oe++
      ) {
        te.index > oe ? ((Ue = te), (te = null)) : (Ue = te.sibling);
        var xe = k(p, te, h[oe], M);
        if (xe === null) {
          te === null && (te = Ue);
          break;
        }
        e && te && xe.alternate === null && t(p, te),
          (d = i(xe, d, oe)),
          ee === null ? (Z = xe) : (ee.sibling = xe),
          (ee = xe),
          (te = Ue);
      }
      if (oe === h.length) return n(p, te), Pe && en(p, oe), Z;
      if (te === null) {
        for (; oe < h.length; oe++)
          (te = C(p, h[oe], M)),
            te !== null &&
              ((d = i(te, d, oe)),
              ee === null ? (Z = te) : (ee.sibling = te),
              (ee = te));
        return Pe && en(p, oe), Z;
      }
      for (te = r(p, te); oe < h.length; oe++)
        (Ue = H(te, p, oe, h[oe], M)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              te.delete(Ue.key === null ? oe : Ue.key),
            (d = i(Ue, d, oe)),
            ee === null ? (Z = Ue) : (ee.sibling = Ue),
            (ee = Ue));
      return (
        e &&
          te.forEach(function (Zt) {
            return t(p, Zt);
          }),
        Pe && en(p, oe),
        Z
      );
    }
    function X(p, d, h, M) {
      var Z = x(h);
      if (typeof Z != "function") throw Error(f(150));
      if (((h = Z.call(h)), h == null)) throw Error(f(151));
      for (
        var ee = (Z = null), te = d, oe = (d = 0), Ue = null, xe = h.next();
        te !== null && !xe.done;
        oe++, xe = h.next()
      ) {
        te.index > oe ? ((Ue = te), (te = null)) : (Ue = te.sibling);
        var Zt = k(p, te, xe.value, M);
        if (Zt === null) {
          te === null && (te = Ue);
          break;
        }
        e && te && Zt.alternate === null && t(p, te),
          (d = i(Zt, d, oe)),
          ee === null ? (Z = Zt) : (ee.sibling = Zt),
          (ee = Zt),
          (te = Ue);
      }
      if (xe.done) return n(p, te), Pe && en(p, oe), Z;
      if (te === null) {
        for (; !xe.done; oe++, xe = h.next())
          (xe = C(p, xe.value, M)),
            xe !== null &&
              ((d = i(xe, d, oe)),
              ee === null ? (Z = xe) : (ee.sibling = xe),
              (ee = xe));
        return Pe && en(p, oe), Z;
      }
      for (te = r(p, te); !xe.done; oe++, xe = h.next())
        (xe = H(te, p, oe, xe.value, M)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              te.delete(xe.key === null ? oe : xe.key),
            (d = i(xe, d, oe)),
            ee === null ? (Z = xe) : (ee.sibling = xe),
            (ee = xe));
      return (
        e &&
          te.forEach(function (cf) {
            return t(p, cf);
          }),
        Pe && en(p, oe),
        Z
      );
    }
    function Oe(p, d, h, M) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === re &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case A:
            e: {
              for (var Z = h.key, ee = d; ee !== null; ) {
                if (ee.key === Z) {
                  if (((Z = h.type), Z === re)) {
                    if (ee.tag === 7) {
                      n(p, ee.sibling),
                        (d = l(ee, h.props.children)),
                        (d.return = p),
                        (p = d);
                      break e;
                    }
                  } else if (
                    ee.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === he &&
                      xu(Z) === ee.type)
                  ) {
                    n(p, ee.sibling),
                      (d = l(ee, h.props)),
                      (d.ref = ur(p, ee, h)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                  n(p, ee);
                  break;
                } else t(p, ee);
                ee = ee.sibling;
              }
              h.type === re
                ? ((d = an(h.props.children, p.mode, M, h.key)),
                  (d.return = p),
                  (p = d))
                : ((M = Pl(h.type, h.key, h.props, null, p.mode, M)),
                  (M.ref = ur(p, d, h)),
                  (M.return = p),
                  (p = M));
            }
            return o(p);
          case V:
            e: {
              for (ee = h.key; d !== null; ) {
                if (d.key === ee)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === h.containerInfo &&
                    d.stateNode.implementation === h.implementation
                  ) {
                    n(p, d.sibling),
                      (d = l(d, h.children || [])),
                      (d.return = p),
                      (p = d);
                    break e;
                  } else {
                    n(p, d);
                    break;
                  }
                else t(p, d);
                d = d.sibling;
              }
              (d = _s(h, p.mode, M)), (d.return = p), (p = d);
            }
            return o(p);
          case he:
            return (ee = h._init), Oe(p, d, ee(h._payload), M);
        }
        if (An(h)) return K(p, d, h, M);
        if (x(h)) return X(p, d, h, M);
        tl(p, h);
      }
      return (typeof h == "string" && h !== "") || typeof h == "number"
        ? ((h = "" + h),
          d !== null && d.tag === 6
            ? (n(p, d.sibling), (d = l(d, h)), (d.return = p), (p = d))
            : (n(p, d), (d = Ss(h, p.mode, M)), (d.return = p), (p = d)),
          o(p))
        : n(p, d);
    }
    return Oe;
  }
  var Cn = wu(!0),
    ju = wu(!1),
    nl = Ut(null),
    rl = null,
    Tn = null,
    Ri = null;
  function Mi() {
    Ri = Tn = rl = null;
  }
  function zi(e) {
    var t = nl.current;
    ke(nl), (e._currentValue = t);
  }
  function Ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function On(e, t) {
    (rl = e),
      (Ri = Tn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (be = !0), (e.firstContext = null));
  }
  function ot(e) {
    var t = e._currentValue;
    if (Ri !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
        if (rl === null) throw Error(f(308));
        (Tn = e), (rl.dependencies = { lanes: 0, firstContext: e });
      } else Tn = Tn.next = e;
    return t;
  }
  var tn = null;
  function Di(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function Su(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function Ai(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function _u(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ct(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ye & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function ll(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
    }
  }
  function ku(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function il(e, t, n, r) {
    var l = e.updateQueue;
    Bt = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        m = a.next;
      (a.next = null), o === null ? (i = m) : (o.next = m), (o = a);
      var E = e.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (u = E.lastBaseUpdate),
        u !== o &&
          (u === null ? (E.firstBaseUpdate = m) : (u.next = m),
          (E.lastBaseUpdate = a)));
    }
    if (i !== null) {
      var C = l.baseState;
      (o = 0), (E = m = a = null), (u = i);
      do {
        var k = u.lane,
          H = u.eventTime;
        if ((r & k) === k) {
          E !== null &&
            (E = E.next =
              {
                eventTime: H,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var K = e,
              X = u;
            switch (((k = t), (H = n), X.tag)) {
              case 1:
                if (((K = X.payload), typeof K == "function")) {
                  C = K.call(H, C, k);
                  break e;
                }
                C = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = X.payload),
                  (k = typeof K == "function" ? K.call(H, C, k) : K),
                  k == null)
                )
                  break e;
                C = w({}, C, k);
                break e;
              case 2:
                Bt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (k = l.effects),
            k === null ? (l.effects = [u]) : k.push(u));
        } else
          (H = {
            eventTime: H,
            lane: k,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            E === null ? ((m = E = H), (a = C)) : (E = E.next = H),
            (o |= k);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (k = u),
            (u = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (E === null && (a = C),
        (l.baseState = a),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = E),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (o |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (ln |= o), (e.lanes = o), (e.memoizedState = C);
    }
  }
  function Pu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(f(191, l));
          l.call(r);
        }
      }
  }
  var ar = {},
    wt = Ut(ar),
    cr = Ut(ar),
    dr = Ut(ar);
  function nn(e) {
    if (e === ar) throw Error(f(174));
    return e;
  }
  function Ui(e, t) {
    switch ((Se(dr, t), Se(cr, e), Se(wt, ar), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fl(t, e));
    }
    ke(wt), Se(wt, t);
  }
  function Ln() {
    ke(wt), ke(cr), ke(dr);
  }
  function Eu(e) {
    nn(dr.current);
    var t = nn(wt.current),
      n = Fl(t, e.type);
    t !== n && (Se(cr, e), Se(wt, n));
  }
  function Fi(e) {
    cr.current === e && (ke(wt), ke(cr));
  }
  var Ee = Ut(0);
  function sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Hi = [];
  function Bi() {
    for (var e = 0; e < Hi.length; e++)
      Hi[e]._workInProgressVersionPrimary = null;
    Hi.length = 0;
  }
  var ol = P.ReactCurrentDispatcher,
    Vi = P.ReactCurrentBatchConfig,
    rn = 0,
    Ne = null,
    Re = null,
    De = null,
    ul = !1,
    fr = !1,
    pr = 0,
    Rd = 0;
  function We() {
    throw Error(f(321));
  }
  function Wi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function Qi(e, t, n, r, l, i) {
    if (
      ((rn = i),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? Dd : Ad),
      (e = n(r, l)),
      fr)
    ) {
      i = 0;
      do {
        if (((fr = !1), (pr = 0), 25 <= i)) throw Error(f(301));
        (i += 1),
          (De = Re = null),
          (t.updateQueue = null),
          (ol.current = Ud),
          (e = n(r, l));
      } while (fr);
    }
    if (
      ((ol.current = dl),
      (t = Re !== null && Re.next !== null),
      (rn = 0),
      (De = Re = Ne = null),
      (ul = !1),
      t)
    )
      throw Error(f(300));
    return e;
  }
  function $i() {
    var e = pr !== 0;
    return (pr = 0), e;
  }
  function jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return De === null ? (Ne.memoizedState = De = e) : (De = De.next = e), De;
  }
  function ut() {
    if (Re === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = De === null ? Ne.memoizedState : De.next;
    if (t !== null) (De = t), (Re = e);
    else {
      if (e === null) throw Error(f(310));
      (Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        De === null ? (Ne.memoizedState = De = e) : (De = De.next = e);
    }
    return De;
  }
  function hr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ki(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = Re,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = i.next), (i.next = o);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var u = (o = null),
        a = null,
        m = i;
      do {
        var E = m.lane;
        if ((rn & E) === E)
          a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action));
        else {
          var C = {
            lane: E,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          a === null ? ((u = a = C), (o = r)) : (a = a.next = C),
            (Ne.lanes |= E),
            (ln |= E);
        }
        m = m.next;
      } while (m !== null && m !== i);
      a === null ? (o = r) : (a.next = u),
        ft(r, t.memoizedState) || (be = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = a),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (Ne.lanes |= i), (ln |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yi(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== l);
      ft(i, t.memoizedState) || (be = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Nu() {}
  function Cu(e, t) {
    var n = Ne,
      r = ut(),
      l = t(),
      i = !ft(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (be = !0)),
      (r = r.queue),
      Xi(Lu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        mr(9, Ou.bind(null, n, r, l, t), void 0, null),
        Ae === null)
      )
        throw Error(f(349));
      rn & 30 || Tu(n, t, l);
    }
    return l;
  }
  function Tu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ou(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ru(t) && Mu(e);
  }
  function Lu(e, t, n) {
    return n(function () {
      Ru(t) && Mu(e);
    });
  }
  function Ru(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function Mu(e) {
    var t = Nt(e, 1);
    t !== null && vt(t, e, 1, -1);
  }
  function zu(e) {
    var t = jt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Id.bind(null, Ne, e)),
      [t.memoizedState, e]
    );
  }
  function mr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Iu() {
    return ut().memoizedState;
  }
  function al(e, t, n, r) {
    var l = jt();
    (Ne.flags |= e),
      (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function cl(e, t, n, r) {
    var l = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Re !== null) {
      var o = Re.memoizedState;
      if (((i = o.destroy), r !== null && Wi(r, o.deps))) {
        l.memoizedState = mr(t, n, i, r);
        return;
      }
    }
    (Ne.flags |= e), (l.memoizedState = mr(1 | t, n, i, r));
  }
  function Du(e, t) {
    return al(8390656, 8, e, t);
  }
  function Xi(e, t) {
    return cl(2048, 8, e, t);
  }
  function Au(e, t) {
    return cl(4, 2, e, t);
  }
  function Uu(e, t) {
    return cl(4, 4, e, t);
  }
  function Fu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Hu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), cl(4, 4, Fu.bind(null, t, e), n)
    );
  }
  function Zi() {}
  function Bu(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Vu(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Wu(e, t, n) {
    return rn & 21
      ? (ft(n, t) ||
          ((n = xo()), (Ne.lanes |= n), (ln |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
  }
  function Md(e, t) {
    var n = je;
    (je = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Vi.transition;
    Vi.transition = {};
    try {
      e(!1), t();
    } finally {
      (je = n), (Vi.transition = r);
    }
  }
  function Qu() {
    return ut().memoizedState;
  }
  function zd(e, t, n) {
    var r = Kt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $u(e))
    )
      Ku(t, n);
    else if (((n = Su(e, t, n, r)), n !== null)) {
      var l = Ye();
      vt(n, e, r, l), Yu(n, t, r);
    }
  }
  function Id(e, t, n) {
    var r = Kt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if ($u(e)) Ku(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), ft(u, o))) {
            var a = t.interleaved;
            a === null
              ? ((l.next = l), Di(t))
              : ((l.next = a.next), (a.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Su(e, t, l, r)),
        n !== null && ((l = Ye()), vt(n, e, r, l), Yu(n, t, r));
    }
  }
  function $u(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
  }
  function Ku(e, t) {
    fr = ul = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Yu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
    }
  }
  var dl = {
      readContext: ot,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    Dd = {
      readContext: ot,
      useCallback: function (e, t) {
        return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ot,
      useEffect: Du,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          al(4194308, 4, Fu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return al(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return al(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = jt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = jt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = zd.bind(null, Ne, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: zu,
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = zu(!1),
          t = e[0];
        return (e = Md.bind(null, e[1])), (jt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ne,
          l = jt();
        if (Pe) {
          if (n === void 0) throw Error(f(407));
          n = n();
        } else {
          if (((n = t()), Ae === null)) throw Error(f(349));
          rn & 30 || Tu(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Du(Lu.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          mr(9, Ou.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = jt(),
          t = Ae.identifierPrefix;
        if (Pe) {
          var n = Et,
            r = Pt;
          (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = pr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Rd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ad = {
      readContext: ot,
      useCallback: Bu,
      useContext: ot,
      useEffect: Xi,
      useImperativeHandle: Hu,
      useInsertionEffect: Au,
      useLayoutEffect: Uu,
      useMemo: Vu,
      useReducer: Ki,
      useRef: Iu,
      useState: function () {
        return Ki(hr);
      },
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        var t = ut();
        return Wu(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = Ki(hr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: Nu,
      useSyncExternalStore: Cu,
      useId: Qu,
      unstable_isNewReconciler: !1,
    },
    Ud = {
      readContext: ot,
      useCallback: Bu,
      useContext: ot,
      useEffect: Xi,
      useImperativeHandle: Hu,
      useInsertionEffect: Au,
      useLayoutEffect: Uu,
      useMemo: Vu,
      useReducer: Yi,
      useRef: Iu,
      useState: function () {
        return Yi(hr);
      },
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        var t = ut();
        return Re === null ? (t.memoizedState = e) : Wu(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = Yi(hr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: Nu,
      useSyncExternalStore: Cu,
      useId: Qu,
      unstable_isNewReconciler: !1,
    };
  function ht(e, t) {
    if (e && e.defaultProps) {
      (t = w({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function bi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : w({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? bt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = Kt(e),
        i = Ct(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (vt(t, e, l, r), ll(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = Kt(e),
        i = Ct(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (vt(t, e, l, r), ll(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = Kt(e),
        l = Ct(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (vt(t, e, r, n), ll(t, e, r));
    },
  };
  function Xu(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !tr(n, r) || !tr(l, i)
        : !0
    );
  }
  function Zu(e, t, n) {
    var r = !1,
      l = Ft,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = ot(i))
        : ((l = Ze(t) ? qt : Ve.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? kn(e, l) : Ft)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function bu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null);
  }
  function Gi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ai(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = ot(i))
      : ((i = Ze(t) ? qt : Ve.current), (l.context = kn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (bi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && fl.enqueueReplaceState(l, l.state, null),
        il(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Rn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ce(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function qi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Fd = typeof WeakMap == "function" ? WeakMap : Map;
  function Gu(e, t, n) {
    (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        xl || ((xl = !0), (hs = r)), Ji(e, t);
      }),
      n
    );
  }
  function qu(e, t, n) {
    (n = Ct(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ji(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Ji(e, t),
            typeof r != "function" &&
              (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Ju(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Fd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Jd.bind(null, e, t, n)), t.then(e, e));
  }
  function ea(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ta(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ct(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Hd = P.ReactCurrentOwner,
    be = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? ju(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function na(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      On(t, l),
      (r = Qi(e, t, n, r, i, l)),
      (n = $i()),
      e !== null && !be
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (Pe && n && Ni(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
    );
  }
  function ra(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !js(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), la(e, t, i, r, l))
        : ((e = Pl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : tr), n(o, r) && e.ref === t.ref)
      )
        return Tt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Xt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function la(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (tr(i, r) && e.ref === t.ref)
        if (((be = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (be = !0);
        else return (t.lanes = e.lanes), Tt(e, t, l);
    }
    return es(e, t, n, r, l);
  }
  function ia(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Se(zn, lt),
          (lt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Se(zn, lt),
            (lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          Se(zn, lt),
          (lt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Se(zn, lt),
        (lt |= r);
    return Ke(e, t, l, n), t.child;
  }
  function sa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function es(e, t, n, r, l) {
    var i = Ze(n) ? qt : Ve.current;
    return (
      (i = kn(t, i)),
      On(t, l),
      (n = Qi(e, t, n, r, i, l)),
      (r = $i()),
      e !== null && !be
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (Pe && r && Ni(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
    );
  }
  function oa(e, t, n, r, l) {
    if (Ze(n)) {
      var i = !0;
      br(t);
    } else i = !1;
    if ((On(t, l), t.stateNode === null))
      hl(e, t), Zu(t, n, r), Gi(t, n, r, l), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var a = o.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = ot(m))
        : ((m = Ze(n) ? qt : Ve.current), (m = kn(t, m)));
      var E = n.getDerivedStateFromProps,
        C =
          typeof E == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      C ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || a !== m) && bu(t, o, r, m)),
        (Bt = !1);
      var k = t.memoizedState;
      (o.state = k),
        il(t, r, o, l),
        (a = t.memoizedState),
        u !== r || k !== a || Xe.current || Bt
          ? (typeof E == "function" && (bi(t, n, E, r), (a = t.memoizedState)),
            (u = Bt || Xu(t, n, u, r, k, a, m))
              ? (C ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (o.props = r),
            (o.state = a),
            (o.context = m),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        _u(e, t),
        (u = t.memoizedProps),
        (m = t.type === t.elementType ? u : ht(t.type, u)),
        (o.props = m),
        (C = t.pendingProps),
        (k = o.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = ot(a))
          : ((a = Ze(n) ? qt : Ve.current), (a = kn(t, a)));
      var H = n.getDerivedStateFromProps;
      (E =
        typeof H == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== C || k !== a) && bu(t, o, r, a)),
        (Bt = !1),
        (k = t.memoizedState),
        (o.state = k),
        il(t, r, o, l);
      var K = t.memoizedState;
      u !== C || k !== K || Xe.current || Bt
        ? (typeof H == "function" && (bi(t, n, H, r), (K = t.memoizedState)),
          (m = Bt || Xu(t, n, m, r, k, K, a) || !1)
            ? (E ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, K, a),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, K, a)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (o.props = r),
          (o.state = K),
          (o.context = a),
          (r = m))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ts(e, t, n, r, i, l);
  }
  function ts(e, t, n, r, l, i) {
    sa(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && fu(t, n, !1), Tt(e, t, i);
    (r = t.stateNode), (Hd.current = t);
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
        : Ke(e, t, u, i),
      (t.memoizedState = r.state),
      l && fu(t, n, !0),
      t.child
    );
  }
  function ua(e) {
    var t = e.stateNode;
    t.pendingContext
      ? cu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && cu(e, t.context, !1),
      Ui(e, t.containerInfo);
  }
  function aa(e, t, n, r, l) {
    return Nn(), Li(l), (t.flags |= 256), Ke(e, t, n, r), t.child;
  }
  var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function rs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ca(e, t, n) {
    var r = t.pendingProps,
      l = Ee.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Se(Ee, l & 1),
      e === null)
    )
      return (
        Oi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = El(o, r, 0, null)),
                (e = an(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = rs(n)),
                (t.memoizedState = ns),
                e)
              : ls(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Bd(e, t, o, r, u, l, n);
    if (i) {
      (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
      var a = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = Xt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Xt(u, i)) : ((i = an(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? rs(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = ns),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Xt(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ls(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pl(e, t, n, r) {
    return (
      r !== null && Li(r),
      Cn(t, e.child, null, n),
      (e = ls(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bd(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = qi(Error(f(422)))), pl(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (i = an(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Cn(t, e.child, null, o),
          (t.child.memoizedState = rs(o)),
          (t.memoizedState = ns),
          i);
    if (!(t.mode & 1)) return pl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (i = Error(f(419))), (r = qi(i, r, void 0)), pl(e, t, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), be || u)) {
      if (((r = Ae), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Nt(e, l), vt(r, e, l, -1));
      }
      return ws(), (r = qi(Error(f(421)))), pl(e, t, o, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = ef.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (rt = At(l.nextSibling)),
        (nt = t),
        (Pe = !0),
        (pt = null),
        e !== null &&
          ((it[st++] = Pt),
          (it[st++] = Et),
          (it[st++] = Jt),
          (Pt = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = ls(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function da(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ii(e.return, t, n);
  }
  function is(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function fa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ke(e, t, r.children, n), (r = Ee.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && da(e, n, t);
          else if (e.tag === 19) da(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Se(Ee, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && sl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            is(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && sl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          is(t, !0, n, null, i);
          break;
        case "together":
          is(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function hl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Tt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ln |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Xt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Vd(e, t, n) {
    switch (t.tag) {
      case 3:
        ua(t), Nn();
        break;
      case 5:
        Eu(t);
        break;
      case 1:
        Ze(t.type) && br(t);
        break;
      case 4:
        Ui(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        Se(nl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Se(Ee, Ee.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? ca(e, t, n)
            : (Se(Ee, Ee.current & 1),
              (e = Tt(e, t, n)),
              e !== null ? e.sibling : null);
        Se(Ee, Ee.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return fa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Se(Ee, Ee.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ia(e, t, n);
    }
    return Tt(e, t, n);
  }
  var pa, ss, ha, ma;
  (pa = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (ss = function () {}),
    (ha = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), nn(wt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = Il(e, l)), (r = Il(e, r)), (i = []);
            break;
          case "select":
            (l = w({}, l, { value: void 0 })),
              (r = w({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Ul(e, l)), (r = Ul(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Yr);
        }
        Hl(n, r);
        var o;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var u = l[m];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (L.hasOwnProperty(m)
                  ? i || (i = [])
                  : (i = i || []).push(m, null));
        for (m in r) {
          var a = r[m];
          if (
            ((u = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && a !== u && (a != null || u != null))
          )
            if (m === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (a && a.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in a)
                  a.hasOwnProperty(o) &&
                    u[o] !== a[o] &&
                    (n || (n = {}), (n[o] = a[o]));
              } else n || (i || (i = []), i.push(m, n)), (n = a);
            else
              m === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (i = i || []).push(m, a))
                : m === "children"
                ? (typeof a != "string" && typeof a != "number") ||
                  (i = i || []).push(m, "" + a)
                : m !== "suppressContentEditableWarning" &&
                  m !== "suppressHydrationWarning" &&
                  (L.hasOwnProperty(m)
                    ? (a != null && m === "onScroll" && _e("scroll", e),
                      i || u === a || (i = []))
                    : (i = i || []).push(m, a));
        }
        n && (i = i || []).push("style", n);
        var m = i;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (ma = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function yr(e, t) {
    if (!Pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Wd(e, t, n) {
    var r = t.pendingProps;
    switch ((Ci(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return Ze(t.type) && Zr(), Qe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Ln(),
          ke(Xe),
          ke(Ve),
          Bi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (el(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), pt !== null && (vs(pt), (pt = null)))),
          ss(e, t),
          Qe(t),
          null
        );
      case 5:
        Fi(t);
        var l = nn(dr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ha(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(f(166));
            return Qe(t), null;
          }
          if (((e = nn(wt.current)), el(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[xt] = t), (r[sr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                _e("cancel", r), _e("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < rr.length; l++) _e(rr[l], r);
                break;
              case "source":
                _e("error", r);
                break;
              case "img":
              case "image":
              case "link":
                _e("error", r), _e("load", r);
                break;
              case "details":
                _e("toggle", r);
                break;
              case "input":
                Xs(r, i), _e("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  _e("invalid", r);
                break;
              case "textarea":
                Gs(r, i), _e("invalid", r);
            }
            Hl(n, i), (l = null);
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : L.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    _e("scroll", r);
              }
            switch (n) {
              case "input":
                _r(r), bs(r, i, !0);
                break;
              case "textarea":
                _r(r), Js(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Yr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = eo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[xt] = t),
              (e[sr] = r),
              pa(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = Bl(n, r)), n)) {
                case "dialog":
                  _e("cancel", e), _e("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  _e("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < rr.length; l++) _e(rr[l], e);
                  l = r;
                  break;
                case "source":
                  _e("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  _e("error", e), _e("load", e), (l = r);
                  break;
                case "details":
                  _e("toggle", e), (l = r);
                  break;
                case "input":
                  Xs(e, r), (l = Il(e, r)), _e("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = w({}, r, { value: void 0 })),
                    _e("invalid", e);
                  break;
                case "textarea":
                  Gs(e, r), (l = Ul(e, r)), _e("invalid", e);
                  break;
                default:
                  l = r;
              }
              Hl(n, l), (u = l);
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var a = u[i];
                  i === "style"
                    ? ro(e, a)
                    : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && to(e, a))
                    : i === "children"
                    ? typeof a == "string"
                      ? (n !== "textarea" || a !== "") && Un(e, a)
                      : typeof a == "number" && Un(e, "" + a)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (L.hasOwnProperty(i)
                        ? a != null && i === "onScroll" && _e("scroll", e)
                        : a != null && T(e, i, a, o));
                }
              switch (n) {
                case "input":
                  _r(e), bs(e, r, !1);
                  break;
                case "textarea":
                  _r(e), Js(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ve(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? fn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        fn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Yr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) ma(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(f(166));
          if (((n = nn(dr.current)), nn(wt.current), el(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[xt] = t),
              (i = r.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Kr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[xt] = t),
              (t.stateNode = r);
        }
        return Qe(t), null;
      case 13:
        if (
          (ke(Ee),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Pe && rt !== null && t.mode & 1 && !(t.flags & 128))
            gu(), Nn(), (t.flags |= 98560), (i = !1);
          else if (((i = el(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(f(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(f(317));
              i[xt] = t;
            } else
              Nn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Qe(t), (i = !1);
          } else pt !== null && (vs(pt), (pt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ee.current & 1 ? Me === 0 && (Me = 3) : ws())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (
          Ln(),
          ss(e, t),
          e === null && lr(t.stateNode.containerInfo),
          Qe(t),
          null
        );
      case 10:
        return zi(t.type._context), Qe(t), null;
      case 17:
        return Ze(t.type) && Zr(), Qe(t), null;
      case 19:
        if ((ke(Ee), (i = t.memoizedState), i === null)) return Qe(t), null;
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) yr(i, !1);
          else {
            if (Me !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = sl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      yr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Se(Ee, (Ee.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Te() > In &&
              ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = sl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !Pe)
              )
                return Qe(t), null;
            } else
              2 * Te() - i.renderingStartTime > In &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Te()),
            (t.sibling = null),
            (n = Ee.current),
            Se(Ee, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          xs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? lt & 1073741824 &&
              (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Qd(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Ze(t.type) && Zr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ln(),
          ke(Xe),
          ke(Ve),
          Bi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Fi(t), null;
      case 13:
        if (
          (ke(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          Nn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ke(Ee), null;
      case 4:
        return Ln(), null;
      case 10:
        return zi(t.type._context), null;
      case 22:
      case 23:
        return xs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1,
    $e = !1,
    $d = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function os(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var ya = !1;
  function Kd(e, t) {
    if (((xi = Ir), (e = Xo()), di(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              a = -1,
              m = 0,
              E = 0,
              C = e,
              k = null;
            t: for (;;) {
              for (
                var H;
                C !== n || (l !== 0 && C.nodeType !== 3) || (u = o + l),
                  C !== i || (r !== 0 && C.nodeType !== 3) || (a = o + r),
                  C.nodeType === 3 && (o += C.nodeValue.length),
                  (H = C.firstChild) !== null;

              )
                (k = C), (C = H);
              for (;;) {
                if (C === e) break t;
                if (
                  (k === n && ++m === l && (u = o),
                  k === i && ++E === r && (a = o),
                  (H = C.nextSibling) !== null)
                )
                  break;
                (C = k), (k = C.parentNode);
              }
              C = H;
            }
            n = u === -1 || a === -1 ? null : { start: u, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      wi = { focusedElem: e, selectionRange: n }, Ir = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var K = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var X = K.memoizedProps,
                      Oe = K.memoizedState,
                      p = t.stateNode,
                      d = p.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? X : ht(t.type, X),
                        Oe
                      );
                    p.__reactInternalSnapshotBeforeUpdate = d;
                  }
                  break;
                case 3:
                  var h = t.stateNode.containerInfo;
                  h.nodeType === 1
                    ? (h.textContent = "")
                    : h.nodeType === 9 &&
                      h.documentElement &&
                      h.removeChild(h.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (M) {
            Ce(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (K = ya), (ya = !1), K;
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && os(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function yl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function us(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function va(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), va(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[xt],
          delete t[sr],
          delete t[ki],
          delete t[Cd],
          delete t[Td])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ga(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xa(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ga(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function as(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Yr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (as(e, t, n), e = e.sibling; e !== null; )
        as(e, t, n), (e = e.sibling);
  }
  function cs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (cs(e, t, n), e = e.sibling; e !== null; )
        cs(e, t, n), (e = e.sibling);
  }
  var He = null,
    mt = !1;
  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) wa(e, t, n), (n = n.sibling);
  }
  function wa(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(Tr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || Mn(n, t);
      case 6:
        var r = He,
          l = mt;
        (He = null),
          Wt(e, t, n),
          (He = r),
          (mt = l),
          He !== null &&
            (mt
              ? ((e = He),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : He.removeChild(n.stateNode));
        break;
      case 18:
        He !== null &&
          (mt
            ? ((e = He),
              (n = n.stateNode),
              e.nodeType === 8
                ? _i(e.parentNode, n)
                : e.nodeType === 1 && _i(e, n),
              Zn(e))
            : _i(He, n.stateNode));
        break;
      case 4:
        (r = He),
          (l = mt),
          (He = n.stateNode.containerInfo),
          (mt = !0),
          Wt(e, t, n),
          (He = r),
          (mt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            (i = i.tag),
              o !== void 0 && (i & 2 || i & 4) && os(n, t, o),
              (l = l.next);
          } while (l !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (Mn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            Ce(n, t, u);
          }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (r = $e) || n.memoizedState !== null), Wt(e, t, n), ($e = r))
          : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }
  function ja(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new $d()),
        t.forEach(function (r) {
          var l = tf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (He = u.stateNode), (mt = !1);
                break e;
              case 3:
                (He = u.stateNode.containerInfo), (mt = !0);
                break e;
              case 4:
                (He = u.stateNode.containerInfo), (mt = !0);
                break e;
            }
            u = u.return;
          }
          if (He === null) throw Error(f(160));
          wa(i, o, l), (He = null), (mt = !1);
          var a = l.alternate;
          a !== null && (a.return = null), (l.return = null);
        } catch (m) {
          Ce(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Sa(t, e), (t = t.sibling);
  }
  function Sa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((yt(t, e), St(e), r & 4)) {
          try {
            vr(3, e, e.return), yl(3, e);
          } catch (X) {
            Ce(e, e.return, X);
          }
          try {
            vr(5, e, e.return);
          } catch (X) {
            Ce(e, e.return, X);
          }
        }
        break;
      case 1:
        yt(t, e), St(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (
          (yt(t, e),
          St(e),
          r & 512 && n !== null && Mn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Un(l, "");
          } catch (X) {
            Ce(e, e.return, X);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              u === "input" && i.type === "radio" && i.name != null && Zs(l, i),
                Bl(u, o);
              var m = Bl(u, i);
              for (o = 0; o < a.length; o += 2) {
                var E = a[o],
                  C = a[o + 1];
                E === "style"
                  ? ro(l, C)
                  : E === "dangerouslySetInnerHTML"
                  ? to(l, C)
                  : E === "children"
                  ? Un(l, C)
                  : T(l, E, C, m);
              }
              switch (u) {
                case "input":
                  Dl(l, i);
                  break;
                case "textarea":
                  qs(l, i);
                  break;
                case "select":
                  var k = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var H = i.value;
                  H != null
                    ? fn(l, !!i.multiple, H, !1)
                    : k !== !!i.multiple &&
                      (i.defaultValue != null
                        ? fn(l, !!i.multiple, i.defaultValue, !0)
                        : fn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[sr] = i;
            } catch (X) {
              Ce(e, e.return, X);
            }
        }
        break;
      case 6:
        if ((yt(t, e), St(e), r & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (X) {
            Ce(e, e.return, X);
          }
        }
        break;
      case 3:
        if (
          (yt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Zn(t.containerInfo);
          } catch (X) {
            Ce(e, e.return, X);
          }
        break;
      case 4:
        yt(t, e), St(e);
        break;
      case 13:
        yt(t, e),
          St(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ps = Te())),
          r & 4 && ja(e);
        break;
      case 22:
        if (
          ((E = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (m = $e) || E), yt(t, e), ($e = m)) : yt(t, e),
          St(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !E && e.mode & 1)
          )
            for (B = e, E = e.child; E !== null; ) {
              for (C = B = E; B !== null; ) {
                switch (((k = B), (H = k.child), k.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, k, k.return);
                    break;
                  case 1:
                    Mn(k, k.return);
                    var K = k.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      (r = k), (n = k.return);
                      try {
                        (t = r),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (X) {
                        Ce(r, n, X);
                      }
                    }
                    break;
                  case 5:
                    Mn(k, k.return);
                    break;
                  case 22:
                    if (k.memoizedState !== null) {
                      Pa(C);
                      continue;
                    }
                }
                H !== null ? ((H.return = k), (B = H)) : Pa(C);
              }
              E = E.sibling;
            }
          e: for (E = null, C = e; ; ) {
            if (C.tag === 5) {
              if (E === null) {
                E = C;
                try {
                  (l = C.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = C.stateNode),
                        (a = C.memoizedProps.style),
                        (o =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (u.style.display = no("display", o)));
                } catch (X) {
                  Ce(e, e.return, X);
                }
              }
            } else if (C.tag === 6) {
              if (E === null)
                try {
                  C.stateNode.nodeValue = m ? "" : C.memoizedProps;
                } catch (X) {
                  Ce(e, e.return, X);
                }
            } else if (
              ((C.tag !== 22 && C.tag !== 23) ||
                C.memoizedState === null ||
                C === e) &&
              C.child !== null
            ) {
              (C.child.return = C), (C = C.child);
              continue;
            }
            if (C === e) break e;
            for (; C.sibling === null; ) {
              if (C.return === null || C.return === e) break e;
              E === C && (E = null), (C = C.return);
            }
            E === C && (E = null),
              (C.sibling.return = C.return),
              (C = C.sibling);
          }
        }
        break;
      case 19:
        yt(t, e), St(e), r & 4 && ja(e);
        break;
      case 21:
        break;
      default:
        yt(t, e), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ga(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(f(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Un(l, ""), (r.flags &= -33));
            var i = xa(e);
            cs(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = xa(e);
            as(e, u, o);
            break;
          default:
            throw Error(f(161));
        }
      } catch (a) {
        Ce(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yd(e, t, n) {
    (B = e), _a(e);
  }
  function _a(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || $e;
          u = ml;
          var m = $e;
          if (((ml = o), ($e = a) && !m))
            for (B = l; B !== null; )
              (o = B),
                (a = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Ea(l)
                  : a !== null
                  ? ((a.return = o), (B = a))
                  : Ea(l);
          for (; i !== null; ) (B = i), _a(i), (i = i.sibling);
          (B = l), (ml = u), ($e = m);
        }
        ka(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (B = i)) : ka(e);
    }
  }
  function ka(e) {
    for (; B !== null; ) {
      var t = B;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || yl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Pu(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Pu(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var m = t.alternate;
                  if (m !== null) {
                    var E = m.memoizedState;
                    if (E !== null) {
                      var C = E.dehydrated;
                      C !== null && Zn(C);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(f(163));
            }
          $e || (t.flags & 512 && us(t));
        } catch (k) {
          Ce(t, t.return, k);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Pa(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Ea(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              yl(4, t);
            } catch (a) {
              Ce(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Ce(t, l, a);
              }
            }
            var i = t.return;
            try {
              us(t);
            } catch (a) {
              Ce(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              us(t);
            } catch (a) {
              Ce(t, o, a);
            }
        }
      } catch (a) {
        Ce(t, t.return, a);
      }
      if (t === e) {
        B = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (B = u);
        break;
      }
      B = t.return;
    }
  }
  var Xd = Math.ceil,
    vl = P.ReactCurrentDispatcher,
    ds = P.ReactCurrentOwner,
    at = P.ReactCurrentBatchConfig,
    ye = 0,
    Ae = null,
    Le = null,
    Be = 0,
    lt = 0,
    zn = Ut(0),
    Me = 0,
    gr = null,
    ln = 0,
    gl = 0,
    fs = 0,
    xr = null,
    Ge = null,
    ps = 0,
    In = 1 / 0,
    Ot = null,
    xl = !1,
    hs = null,
    Qt = null,
    wl = !1,
    $t = null,
    jl = 0,
    wr = 0,
    ms = null,
    Sl = -1,
    _l = 0;
  function Ye() {
    return ye & 6 ? Te() : Sl !== -1 ? Sl : (Sl = Te());
  }
  function Kt(e) {
    return e.mode & 1
      ? ye & 2 && Be !== 0
        ? Be & -Be
        : Ld.transition !== null
        ? (_l === 0 && (_l = xo()), _l)
        : ((e = je),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Co(e.type))),
          e)
      : 1;
  }
  function vt(e, t, n, r) {
    if (50 < wr) throw ((wr = 0), (ms = null), Error(f(185)));
    Qn(e, n, r),
      (!(ye & 2) || e !== Ae) &&
        (e === Ae && (!(ye & 2) && (gl |= n), Me === 4 && Yt(e, Be)),
        qe(e, r),
        n === 1 &&
          ye === 0 &&
          !(t.mode & 1) &&
          ((In = Te() + 500), Gr && Ht()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    Lc(e, t);
    var r = Rr(e, e === Ae ? Be : 0);
    if (r === 0)
      n !== null && yo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && yo(n), t === 1))
        e.tag === 0 ? Od(Ca.bind(null, e)) : pu(Ca.bind(null, e)),
          Ed(function () {
            !(ye & 6) && Ht();
          }),
          (n = null);
      else {
        switch (wo(r)) {
          case 1:
            n = Xl;
            break;
          case 4:
            n = vo;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = go;
            break;
          default:
            n = Cr;
        }
        n = Da(n, Na.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Na(e, t) {
    if (((Sl = -1), (_l = 0), ye & 6)) throw Error(f(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Rr(e, e === Ae ? Be : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
    else {
      t = r;
      var l = ye;
      ye |= 2;
      var i = Oa();
      (Ae !== e || Be !== t) && ((Ot = null), (In = Te() + 500), on(e, t));
      do
        try {
          Gd();
          break;
        } catch (u) {
          Ta(e, u);
        }
      while (!0);
      Mi(),
        (vl.current = i),
        (ye = l),
        Le !== null ? (t = 0) : ((Ae = null), (Be = 0), (t = Me));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Zl(e)), l !== 0 && ((r = l), (t = ys(e, l)))),
        t === 1)
      )
        throw ((n = gr), on(e, 0), Yt(e, r), qe(e, Te()), n);
      if (t === 6) Yt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Zd(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Zl(e)), i !== 0 && ((r = i), (t = ys(e, i)))),
            t === 1))
        )
          throw ((n = gr), on(e, 0), Yt(e, r), qe(e, Te()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            un(e, Ge, Ot);
            break;
          case 3:
            if (
              (Yt(e, r),
              (r & 130023424) === r && ((t = ps + 500 - Te()), 10 < t))
            ) {
              if (Rr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ye(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Si(un.bind(null, e, Ge, Ot), t);
              break;
            }
            un(e, Ge, Ot);
            break;
          case 4:
            if ((Yt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - dt(r);
              (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
            }
            if (
              ((r = l),
              (r = Te() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Xd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Si(un.bind(null, e, Ge, Ot), r);
              break;
            }
            un(e, Ge, Ot);
            break;
          case 5:
            un(e, Ge, Ot);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return qe(e, Te()), e.callbackNode === n ? Na.bind(null, e) : null;
  }
  function ys(e, t) {
    var n = xr;
    return (
      e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = Ge), (Ge = n), t !== null && vs(t)),
      e
    );
  }
  function vs(e) {
    Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
  }
  function Zd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!ft(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Yt(e, t) {
    for (
      t &= ~fs,
        t &= ~gl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - dt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ca(e) {
    if (ye & 6) throw Error(f(327));
    Dn();
    var t = Rr(e, 0);
    if (!(t & 1)) return qe(e, Te()), null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Zl(e);
      r !== 0 && ((t = r), (n = ys(e, r)));
    }
    if (n === 1) throw ((n = gr), on(e, 0), Yt(e, t), qe(e, Te()), n);
    if (n === 6) throw Error(f(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Ge, Ot),
      qe(e, Te()),
      null
    );
  }
  function gs(e, t) {
    var n = ye;
    ye |= 1;
    try {
      return e(t);
    } finally {
      (ye = n), ye === 0 && ((In = Te() + 500), Gr && Ht());
    }
  }
  function sn(e) {
    $t !== null && $t.tag === 0 && !(ye & 6) && Dn();
    var t = ye;
    ye |= 1;
    var n = at.transition,
      r = je;
    try {
      if (((at.transition = null), (je = 1), e)) return e();
    } finally {
      (je = r), (at.transition = n), (ye = t), !(ye & 6) && Ht();
    }
  }
  function xs() {
    (lt = zn.current), ke(zn);
  }
  function on(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Pd(n)), Le !== null))
      for (n = Le.return; n !== null; ) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Zr();
            break;
          case 3:
            Ln(), ke(Xe), ke(Ve), Bi();
            break;
          case 5:
            Fi(r);
            break;
          case 4:
            Ln();
            break;
          case 13:
            ke(Ee);
            break;
          case 19:
            ke(Ee);
            break;
          case 10:
            zi(r.type._context);
            break;
          case 22:
          case 23:
            xs();
        }
        n = n.return;
      }
    if (
      ((Ae = e),
      (Le = e = Xt(e.current, null)),
      (Be = lt = t),
      (Me = 0),
      (gr = null),
      (fs = gl = ln = 0),
      (Ge = xr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            (i.next = l), (r.next = o);
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function Ta(e, t) {
    do {
      var n = Le;
      try {
        if ((Mi(), (ol.current = dl), ul)) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ul = !1;
        }
        if (
          ((rn = 0),
          (De = Re = Ne = null),
          (fr = !1),
          (pr = 0),
          (ds.current = null),
          n === null || n.return === null)
        ) {
          (Me = 1), (gr = t), (Le = null);
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            a = t;
          if (
            ((t = Be),
            (u.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var m = a,
              E = u,
              C = E.tag;
            if (!(E.mode & 1) && (C === 0 || C === 11 || C === 15)) {
              var k = E.alternate;
              k
                ? ((E.updateQueue = k.updateQueue),
                  (E.memoizedState = k.memoizedState),
                  (E.lanes = k.lanes))
                : ((E.updateQueue = null), (E.memoizedState = null));
            }
            var H = ea(o);
            if (H !== null) {
              (H.flags &= -257),
                ta(H, o, u, i, t),
                H.mode & 1 && Ju(i, m, t),
                (t = H),
                (a = m);
              var K = t.updateQueue;
              if (K === null) {
                var X = new Set();
                X.add(a), (t.updateQueue = X);
              } else K.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                Ju(i, m, t), ws();
                break e;
              }
              a = Error(f(426));
            }
          } else if (Pe && u.mode & 1) {
            var Oe = ea(o);
            if (Oe !== null) {
              !(Oe.flags & 65536) && (Oe.flags |= 256),
                ta(Oe, o, u, i, t),
                Li(Rn(a, u));
              break e;
            }
          }
          (i = a = Rn(a, u)),
            Me !== 4 && (Me = 2),
            xr === null ? (xr = [i]) : xr.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var p = Gu(i, a, t);
                ku(i, p);
                break e;
              case 1:
                u = a;
                var d = i.type,
                  h = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof d.getDerivedStateFromError == "function" ||
                    (h !== null &&
                      typeof h.componentDidCatch == "function" &&
                      (Qt === null || !Qt.has(h))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var M = qu(i, u, t);
                  ku(i, M);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Ra(n);
      } catch (Z) {
        (t = Z), Le === n && n !== null && (Le = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Oa() {
    var e = vl.current;
    return (vl.current = dl), e === null ? dl : e;
  }
  function ws() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      Ae === null || (!(ln & 268435455) && !(gl & 268435455)) || Yt(Ae, Be);
  }
  function kl(e, t) {
    var n = ye;
    ye |= 2;
    var r = Oa();
    (Ae !== e || Be !== t) && ((Ot = null), on(e, t));
    do
      try {
        bd();
        break;
      } catch (l) {
        Ta(e, l);
      }
    while (!0);
    if ((Mi(), (ye = n), (vl.current = r), Le !== null)) throw Error(f(261));
    return (Ae = null), (Be = 0), Me;
  }
  function bd() {
    for (; Le !== null; ) La(Le);
  }
  function Gd() {
    for (; Le !== null && !Sc(); ) La(Le);
  }
  function La(e) {
    var t = Ia(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ra(e) : (Le = t),
      (ds.current = null);
  }
  function Ra(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Qd(n, t)), n !== null)) {
          (n.flags &= 32767), (Le = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Me = 6), (Le = null);
          return;
        }
      } else if (((n = Wd(n, t, lt)), n !== null)) {
        Le = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function un(e, t, n) {
    var r = je,
      l = at.transition;
    try {
      (at.transition = null), (je = 1), qd(e, t, n, r);
    } finally {
      (at.transition = l), (je = r);
    }
    return null;
  }
  function qd(e, t, n, r) {
    do Dn();
    while ($t !== null);
    if (ye & 6) throw Error(f(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(f(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (Rc(e, i),
      e === Ae && ((Le = Ae = null), (Be = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        wl ||
        ((wl = !0),
        Da(Cr, function () {
          return Dn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = at.transition), (at.transition = null);
      var o = je;
      je = 1;
      var u = ye;
      (ye |= 4),
        (ds.current = null),
        Kd(e, n),
        Sa(n, e),
        gd(wi),
        (Ir = !!xi),
        (wi = xi = null),
        (e.current = n),
        Yd(n),
        _c(),
        (ye = u),
        (je = o),
        (at.transition = i);
    } else e.current = n;
    if (
      (wl && ((wl = !1), ($t = e), (jl = l)),
      (i = e.pendingLanes),
      i === 0 && (Qt = null),
      Ec(n.stateNode),
      qe(e, Te()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (xl) throw ((xl = !1), (e = hs), (hs = null), e);
    return (
      jl & 1 && e.tag !== 0 && Dn(),
      (i = e.pendingLanes),
      i & 1 ? (e === ms ? wr++ : ((wr = 0), (ms = e))) : (wr = 0),
      Ht(),
      null
    );
  }
  function Dn() {
    if ($t !== null) {
      var e = wo(jl),
        t = at.transition,
        n = je;
      try {
        if (((at.transition = null), (je = 16 > e ? 16 : e), $t === null))
          var r = !1;
        else {
          if (((e = $t), ($t = null), (jl = 0), ye & 6)) throw Error(f(331));
          var l = ye;
          for (ye |= 4, B = e.current; B !== null; ) {
            var i = B,
              o = i.child;
            if (B.flags & 16) {
              var u = i.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var m = u[a];
                  for (B = m; B !== null; ) {
                    var E = B;
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, E, i);
                    }
                    var C = E.child;
                    if (C !== null) (C.return = E), (B = C);
                    else
                      for (; B !== null; ) {
                        E = B;
                        var k = E.sibling,
                          H = E.return;
                        if ((va(E), E === m)) {
                          B = null;
                          break;
                        }
                        if (k !== null) {
                          (k.return = H), (B = k);
                          break;
                        }
                        B = H;
                      }
                  }
                }
                var K = i.alternate;
                if (K !== null) {
                  var X = K.child;
                  if (X !== null) {
                    K.child = null;
                    do {
                      var Oe = X.sibling;
                      (X.sibling = null), (X = Oe);
                    } while (X !== null);
                  }
                }
                B = i;
              }
            }
            if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (B = o);
            else
              e: for (; B !== null; ) {
                if (((i = B), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  (p.return = i.return), (B = p);
                  break e;
                }
                B = i.return;
              }
          }
          var d = e.current;
          for (B = d; B !== null; ) {
            o = B;
            var h = o.child;
            if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (B = h);
            else
              e: for (o = d; B !== null; ) {
                if (((u = B), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yl(9, u);
                    }
                  } catch (Z) {
                    Ce(u, u.return, Z);
                  }
                if (u === o) {
                  B = null;
                  break e;
                }
                var M = u.sibling;
                if (M !== null) {
                  (M.return = u.return), (B = M);
                  break e;
                }
                B = u.return;
              }
          }
          if (
            ((ye = l),
            Ht(),
            gt && typeof gt.onPostCommitFiberRoot == "function")
          )
            try {
              gt.onPostCommitFiberRoot(Tr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (je = n), (at.transition = t);
      }
    }
    return !1;
  }
  function Ma(e, t, n) {
    (t = Rn(n, t)),
      (t = Gu(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = Ye()),
      e !== null && (Qn(e, 1, t), qe(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Ma(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ma(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Qt === null || !Qt.has(r)))
          ) {
            (e = Rn(n, e)),
              (e = qu(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = Ye()),
              t !== null && (Qn(t, 1, e), qe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ae === e &&
        (Be & n) === n &&
        (Me === 4 || (Me === 3 && (Be & 130023424) === Be && 500 > Te() - ps)
          ? on(e, 0)
          : (fs |= n)),
      qe(e, t);
  }
  function za(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Lr), (Lr <<= 1), !(Lr & 130023424) && (Lr = 4194304))
        : (t = 1));
    var n = Ye();
    (e = Nt(e, t)), e !== null && (Qn(e, t, n), qe(e, n));
  }
  function ef(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), za(e, n);
  }
  function tf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    r !== null && r.delete(t), za(e, n);
  }
  var Ia;
  Ia = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) be = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (be = !1), Vd(e, t, n);
        be = !!(e.flags & 131072);
      }
    else (be = !1), Pe && t.flags & 1048576 && hu(t, Jr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        hl(e, t), (e = t.pendingProps);
        var l = kn(t, Ve.current);
        On(t, n), (l = Qi(null, t, r, e, l, n));
        var i = $i();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ze(r) ? ((i = !0), br(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ai(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Gi(t, r, e, n),
              (t = ts(null, t, r, !0, i, n)))
            : ((t.tag = 0), Pe && i && Ni(t), Ke(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (hl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = rf(r)),
            (e = ht(r, e)),
            l)
          ) {
            case 0:
              t = es(null, t, r, e, n);
              break e;
            case 1:
              t = oa(null, t, r, e, n);
              break e;
            case 11:
              t = na(null, t, r, e, n);
              break e;
            case 14:
              t = ra(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(f(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          es(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          oa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ua(t), e === null)) throw Error(f(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            _u(e, t),
            il(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Rn(Error(f(423)), t)), (t = aa(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Rn(Error(f(424)), t)), (t = aa(e, t, r, n, l));
              break e;
            } else
              for (
                rt = At(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  Pe = !0,
                  pt = null,
                  n = ju(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Nn(), r === l)) {
              t = Tt(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Eu(t),
          e === null && Oi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          ji(r, l) ? (o = null) : i !== null && ji(r, i) && (t.flags |= 32),
          sa(e, t),
          Ke(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && Oi(t), null;
      case 13:
        return ca(e, t, n);
      case 4:
        return (
          Ui(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Ke(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          na(e, t, r, l, n)
        );
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            Se(nl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (ft(i.value, o)) {
              if (i.children === l.children && !Xe.current) {
                t = Tt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        (a = Ct(-1, n & -n)), (a.tag = 2);
                        var m = i.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var E = m.pending;
                          E === null
                            ? (a.next = a)
                            : ((a.next = E.next), (E.next = a)),
                            (m.pending = a);
                        }
                      }
                      (i.lanes |= n),
                        (a = i.alternate),
                        a !== null && (a.lanes |= n),
                        Ii(i.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(f(341));
                  (o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Ii(o, n, t),
                    (o = i.sibling);
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          Ke(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = ot(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ke(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ht(r, t.pendingProps)),
          (l = ht(r.type, l)),
          ra(e, t, r, l, n)
        );
      case 15:
        return la(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ht(r, l)),
          hl(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), br(t)) : (e = !1),
          On(t, n),
          Zu(t, r, l),
          Gi(t, r, l, n),
          ts(null, t, r, !0, e, n)
        );
      case 19:
        return fa(e, t, n);
      case 22:
        return ia(e, t, n);
    }
    throw Error(f(156, t.tag));
  };
  function Da(e, t) {
    return mo(e, t);
  }
  function nf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(e, t, n, r) {
    return new nf(e, t, n, r);
  }
  function js(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function rf(e) {
    if (typeof e == "function") return js(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === b)) return 11;
      if (e === Q) return 14;
    }
    return 2;
  }
  function Xt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ct(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Pl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) js(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case re:
          return an(n.children, l, i, t);
        case Y:
          (o = 8), (l |= 8);
          break;
        case O:
          return (
            (e = ct(12, n, t, l | 2)), (e.elementType = O), (e.lanes = i), e
          );
        case ie:
          return (e = ct(13, n, t, l)), (e.elementType = ie), (e.lanes = i), e;
        case _:
          return (e = ct(19, n, t, l)), (e.elementType = _), (e.lanes = i), e;
        case me:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                o = 10;
                break e;
              case J:
                o = 9;
                break e;
              case b:
                o = 11;
                break e;
              case Q:
                o = 14;
                break e;
              case he:
                (o = 16), (r = null);
                break e;
            }
          throw Error(f(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ct(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function an(e, t, n, r) {
    return (e = ct(7, e, r, t)), (e.lanes = n), e;
  }
  function El(e, t, n, r) {
    return (
      (e = ct(22, e, r, t)),
      (e.elementType = me),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ss(e, t, n) {
    return (e = ct(6, e, null, t)), (e.lanes = n), e;
  }
  function _s(e, t, n) {
    return (
      (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function lf(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = bl(0)),
      (this.expirationTimes = bl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ks(e, t, n, r, l, i, o, u, a) {
    return (
      (e = new lf(e, t, n, u, a)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = ct(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ai(i),
      e
    );
  }
  function sf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Aa(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (bt(e) !== e || e.tag !== 1) throw Error(f(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ze(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(f(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ze(n)) return du(e, n, t);
    }
    return t;
  }
  function Ua(e, t, n, r, l, i, o, u, a) {
    return (
      (e = ks(n, r, !0, e, l, i, o, u, a)),
      (e.context = Aa(null)),
      (n = e.current),
      (r = Ye()),
      (l = Kt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Vt(n, i, l),
      (e.current.lanes = l),
      Qn(e, l, r),
      qe(e, r),
      e
    );
  }
  function Nl(e, t, n, r) {
    var l = t.current,
      i = Ye(),
      o = Kt(l);
    return (
      (n = Aa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, o)),
      e !== null && (vt(e, l, o, i), ll(e, l, o)),
      o
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ps(e, t) {
    Fa(e, t), (e = e.alternate) && Fa(e, t);
  }
  var Ha =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Es(e) {
    this._internalRoot = e;
  }
  (Tl.prototype.render = Es.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      Nl(e, t, null, null);
    }),
    (Tl.prototype.unmount = Es.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          sn(function () {
            Nl(null, e, null, null);
          }),
            (t[_t] = null);
        }
      });
  function Tl(e) {
    this._internalRoot = e;
  }
  Tl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _o();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
      zt.splice(n, 0, e), n === 0 && Eo(e);
    }
  };
  function Ns(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ol(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ba() {}
  function of(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var m = Cl(o);
          i.call(m);
        };
      }
      var o = Ua(t, r, e, 0, null, !1, !1, "", Ba);
      return (
        (e._reactRootContainer = o),
        (e[_t] = o.current),
        lr(e.nodeType === 8 ? e.parentNode : e),
        sn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var m = Cl(a);
        u.call(m);
      };
    }
    var a = ks(e, 0, !1, null, null, !1, !1, "", Ba);
    return (
      (e._reactRootContainer = a),
      (e[_t] = a.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      sn(function () {
        Nl(t, a, n, r);
      }),
      a
    );
  }
  function Ll(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var a = Cl(o);
          u.call(a);
        };
      }
      Nl(t, o, e, l);
    } else o = of(n, t, e, l, r);
    return Cl(o);
  }
  (jo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Wn(t.pendingLanes);
          n !== 0 &&
            (Gl(t, n | 1), qe(t, Te()), !(ye & 6) && ((In = Te() + 500), Ht()));
        }
        break;
      case 13:
        sn(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = Ye();
            vt(r, e, 1, l);
          }
        }),
          Ps(e, 1);
    }
  }),
    (ql = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          vt(t, e, 134217728, n);
        }
        Ps(e, 134217728);
      }
    }),
    (So = function (e) {
      if (e.tag === 13) {
        var t = Kt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = Ye();
          vt(n, e, t, r);
        }
        Ps(e, t);
      }
    }),
    (_o = function () {
      return je;
    }),
    (ko = function (e, t) {
      var n = je;
      try {
        return (je = e), t();
      } finally {
        je = n;
      }
    }),
    (Ql = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Xr(r);
                if (!l) throw Error(f(90));
                Ys(r), Dl(r, l);
              }
            }
          }
          break;
        case "textarea":
          qs(e, n);
          break;
        case "select":
          (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
      }
    }),
    (oo = gs),
    (uo = sn);
  var uf = { usingClientEntryPoint: !1, Events: [or, Sn, Xr, io, so, gs] },
    jr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    af = {
      bundleType: jr.bundleType,
      version: jr.version,
      rendererPackageName: jr.rendererPackageName,
      rendererConfig: jr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: P.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = po(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: jr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber)
      try {
        (Tr = Rl.inject(af)), (gt = Rl);
      } catch {}
  }
  return (
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uf),
    (Je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ns(t)) throw Error(f(200));
      return sf(e, t, null, n);
    }),
    (Je.createRoot = function (e, t) {
      if (!Ns(e)) throw Error(f(299));
      var n = !1,
        r = "",
        l = Ha;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ks(e, 1, !1, null, null, n, !1, r, l)),
        (e[_t] = t.current),
        lr(e.nodeType === 8 ? e.parentNode : e),
        new Es(t)
      );
    }),
    (Je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(f(188))
          : ((e = Object.keys(e).join(",")), Error(f(268, e)));
      return (e = po(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Je.flushSync = function (e) {
      return sn(e);
    }),
    (Je.hydrate = function (e, t, n) {
      if (!Ol(t)) throw Error(f(200));
      return Ll(null, e, t, !0, n);
    }),
    (Je.hydrateRoot = function (e, t, n) {
      if (!Ns(e)) throw Error(f(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Ha;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Ua(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[_t] = t.current),
        lr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Tl(t);
    }),
    (Je.render = function (e, t, n) {
      if (!Ol(t)) throw Error(f(200));
      return Ll(null, e, t, !1, n);
    }),
    (Je.unmountComponentAtNode = function (e) {
      if (!Ol(e)) throw Error(f(40));
      return e._reactRootContainer
        ? (sn(function () {
            Ll(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Je.unstable_batchedUpdates = gs),
    (Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ol(n)) throw Error(f(200));
      if (e == null || e._reactInternals === void 0) throw Error(f(38));
      return Ll(e, t, n, !1, r);
    }),
    (Je.version = "18.3.1-next-f1338f8080-20240426"),
    Je
  );
}
var Za;
function xf() {
  if (Za) return Ls.exports;
  Za = 1;
  function y() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (v) {
        console.error(v);
      }
  }
  return y(), (Ls.exports = gf()), Ls.exports;
}
var ba;
function wf() {
  if (ba) return Ml;
  ba = 1;
  var y = xf();
  return (Ml.createRoot = y.createRoot), (Ml.hydrateRoot = y.hydrateRoot), Ml;
}
var jf = wf();
const Sf = ({ isOpen: y, closeModal: v }) => (
    cn.useEffect(() => {
      const f = document.querySelectorAll(".lightbox-btn"),
        U = document.querySelectorAll(".lightbox-close-btn");
      if (
        (f.forEach((L) => {
          L.addEventListener("click", () => {
            const j = L.nextElementSibling;
            j && j.classList.add("light-box-open");
          });
        }),
        U.forEach((L) => {
          L.addEventListener("click", () => {
            let j = L.closest(".light-box-popup");
            j && j.classList.remove("light-box-open");
          });
        }),
        y)
      ) {
        const L = (j) => {
          j.key === "Escape" && v();
        };
        return (
          document.addEventListener("keydown", L),
          () => {
            document.removeEventListener("keydown", L);
          }
        );
      }
    }, [y, v]),
    null
  ),
  _f = "assets/baseball-open-B1ARgnB7.png",
  kf = "assets/jrep-open-U2w48dkK.png",
  Pf = "assets/kikkake-open-BqMuID9i.png",
  Ef = "assets/kikkakeShop-open-B00Ku5tE.png",
  Nf = "assets/Next-open--FihjH7x.png",
  Cf = "assets/ZeroIchi-open-B4-Ju-SL.png",
  Tf = "assets/libaty-open-CT07Zh2j.png",
  Of = "assets/eyecarelabo-open-Dhdv-bM2.png",
  Lf = "assets/vie-huit-open-DWQ-zBP7.png",
  Rf = "assets/zeroOne-open-B0Zlu5VJ.png",
  Mf = "assets/it-plus-open-u3C57RQs.png",
  zf = "assets/orange-group-open-BP6kdd8c.png",
  If = "assets/comingSoon-open-ydrWcG4n.png",
  Df = "assets/lessonOne-open-DZkr6ZXp.png",
  Af = "assets/lessonTwo-open-BVddw04l.png",
  Uf = "assets/lessonThree-open-ZDz1a7JT.png",
  Ff = "assets/lessonFour-open-C_SxQHbd.png",
  Hf = "assets/lessonFive-open-Bun9LUzp.png",
  Bf = "assets/libatyLp-open-Dgy8OERH.png",
  Vf = [
    { id: 1, open: _f },
    { id: 2, open: kf },
    { id: 3, open: Pf },
    { id: 4, open: Ef },
    { id: 5, open: Nf },
    { id: 6, open: Cf },
    { id: 7, open: Tf },
    { id: 8, open: Of },
    { id: 9, open: Lf },
    { id: 10, open: Rf },
    { id: 11, open: If },
    { id: 12, open: Mf },
    { id: 13, open: zf },
    { id: 14, open: Df },
    { id: 15, open: Af },
    { id: 16, open: Uf },
    { id: 17, open: Ff },
    { id: 18, open: Hf },
    { id: 19, open: Bf },
  ],
  Wf = ({ id: y }) => {
    const v = Vf.find((f) => f.id === y);
    return v
      ? s.jsx("img", {
          className: "light-box-popup-in-img border border-white border-3",
          src: v.open,
          alt: "作品表示",
        })
      : null;
  },
  ze = ({ id: y }) => {
    const [v, f] = cn.useState(!1),
      U = () => {
        f(!0);
      },
      L = () => {
        f(!1);
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(Sf, { isOpen: v, closeModal: L }),
        s.jsxs("div", {
          className: "modal-btn",
          children: [
            s.jsx("div", {
              className:
                "modal-btn-4 js-modal-button hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1 cursor",
              onClick: U,
              children: "詳細を見る",
            }),
            v &&
              s.jsxs("div", {
                className: "light-box-popup light-box-open",
                children: [
                  s.jsx("div", {
                    className: "light-box-popup-in",
                    children: s.jsx("div", {
                      className: "margin-center",
                      children: s.jsx(Wf, { id: y }),
                    }),
                  }),
                  s.jsx("div", { className: "bg-gray-clear", onClick: L }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Qf = "assets/baseball-close-D-yqhlxE.png",
  Ie = [
    { title: "少年野球連盟HP" },
    { title: "株式会社J-REP HP" },
    { title: "合同会社キッカケ HP" },
    { title: "キッカケ専用販売 HP" },
    { title: "パワーグレード販売 LP" },
    { title: "WEB制作ゼロイチ HP" },
    { title: "RIBREC LP" },
    { title: "eyecarelabo LP" },
    { title: "株式会社 Vie Huit LP" },
    { title: "ゼロワン LP" },
    { title: "現在作成中 HP" },
    { title: "株式会社ITプラス HP" },
    { title: "オレンジグループ HP" },
    { title: "ITカリキュラム 1" },
    { title: "ITカリキュラム 2" },
    { title: "ITカリキュラム 3" },
    { title: "ITカリキュラム 4" },
    { title: "ITカリキュラム 5" },
    { title: "RIBREC LP 2" },
  ],
  et = [
    { link: "http://kjbc1.com/" },
    { link: "https://www.j-rep.jp/" },
    { link: "https://kikkake-movie.com/" },
    { link: "https://shop-kikkake.com/" },
    { link: "https://shop-kikkake.com/power-grade/" },
    { link: "https://web-zero-ichi.com/" },
    { link: "https://liberty-bridge.co.jp/librec/" },
    { link: "https://eyecarelabo.com/eyecarelabo/" },
    { link: "https://viehuit.com/" },
    { link: "https://shop-kikkake.com/video-01/" },
    { link: "https://example.com/" },
    { link: "https://it-plus.jp/" },
    { link: "https://www.orangegroup.jp/" },
    { link: "https://liberty-bridge.co.jp/lp/ad-001/01/" },
  ],
  $f = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[0],
      f = et[0];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: Qf,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・WordPress" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "人生で初めて自分がコーディングして",
                s.jsx("br", {}),
                "公開したHPです。",
                s.jsx("br", {}),
                "デザインの要望も何もなく、",
                s.jsx("br", {}),
                "「強いていうならシンプルに」と",
                s.jsx("br", {}),
                "仰っていました。",
                s.jsx("br", {}),
                "依頼してくださった方が親戚で",
                s.jsx("br", {}),
                "「好きに作っちゃっていいよ。」",
                s.jsx("br", {}),
                "と言われたのでシンプルに作りました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 1 }),
        }),
      ],
    });
  },
  Kf = "assets/jrep-close-pRmQ9_ne.png",
  Yf = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[1],
      f = et[1];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: Kf,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "デザインは既に決まっていて、",
                s.jsx("br", {}),
                "後はコーディングのみという状態の",
                s.jsx("br", {}),
                "お仕事でした。",
                s.jsx("br", {}),
                "初めて社長さんから頂いたお仕事で",
                s.jsx("br", {}),
                "コーディング力もない中必死で",
                s.jsx("br", {}),
                "デザインの通りに",
                s.jsx("br", {}),
                "コーディングしました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 2 }),
        }),
      ],
    });
  },
  Xf = "assets/kikkake-close-CEBW0LuZ.png",
  Zf = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[2],
      f = et[2];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: Xf,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・WordPress" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "まず先に参考サイトと",
                s.jsx("br", {}),
                "載せたい画像と情報を",
                s.jsx("br", {}),
                "GoogleDocumentで 送っていただき、",
                s.jsx("br", {}),
                "その参考サイトの",
                s.jsx("br", {}),
                "デザインに情報や画像を",
                s.jsx("br", {}),
                "当てはめてコーディングをして、",
                s.jsx("br", {}),
                "その後「ここはこうしてほしい」",
                s.jsx("br", {}),
                "などの要望に沿う形で",
                s.jsx("br", {}),
                "修正を加えていき",
                s.jsx("br", {}),
                "完成した作品です。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 3 }),
        }),
      ],
    });
  },
  bf = "assets/kikkakeShop-close-BtPxJ_xI.png",
  Gf = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[3],
      f = et[3];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: bf,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "合同会社キッカケの、",
                s.jsx("br", {}),
                "商品を売るための専用のHPです。",
                s.jsx("br", {}),
                "こちらも参考にしたシンプルな",
                s.jsx("br", {}),
                "ショッピングサイトのページが",
                s.jsx("br", {}),
                "送られてきて",
                s.jsx("br", {}),
                "それの通りに一度情報や画像を",
                s.jsx("br", {}),
                "当てはめて作った後に",
                s.jsx("br", {}),
                "要望に沿って修正して作成しました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 4 }),
        }),
      ],
    });
  },
  qf = "assets/next-close-CSvf_FJR.png",
  Jf = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[4],
      f = et[4];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: qf,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "こちらは合同会社キッカケが出している",
                s.jsx("br", {}),
                "パワーグレードという商品を",
                s.jsx("br", {}),
                "売るためのLPになります。",
                s.jsx("br", {}),
                "以前は別の見た目をしていましたが",
                s.jsx("br", {}),
                "昨年2024年後半ごろに今の見た目に",
                s.jsx("br", {}),
                "変更しました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 5 }),
        }),
      ],
    });
  },
  ep = "assets/webZeroichi-close-BVY11mWF.png",
  tp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[5],
      f = et[5];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: ep,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・WordPress" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "自分が大学生の時に",
                s.jsx("br", {}),
                "WEBコーディングの仕事を",
                s.jsx("br", {}),
                "とっていくために",
                s.jsx("br", {}),
                "形式上作成したHPです。",
                s.jsx("br", {}),
                "参考にしたデザインはなく、",
                s.jsx("br", {}),
                "自由に作りました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 6 }),
        }),
      ],
    });
  },
  np = "assets/libertyBridge-close-i0F2-3pl.png",
  rp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[6],
      f = et[6];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: np,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・Gmail" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "株式会社Liberty Bridgeの、",
                s.jsx("br", {}),
                "RIBRECというサービス専用の",
                s.jsx("br", {}),
                "LPです。 元々別の方が作った",
                s.jsx("br", {}),
                "画像コーディングの",
                s.jsx("br", {}),
                "LPだったのですが",
                s.jsx("br", {}),
                "テキストコーディングにしたい",
                s.jsx("br", {}),
                "とのことで自分がコーディング",
                s.jsx("br", {}),
                "しました。",
                s.jsx("br", {}),
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 7 }),
        }),
      ],
    });
  },
  lp = "assets/eyecarelabo-close-CGGea83U.png",
  ip = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[7],
      f = et[7];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: lp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "画像コーディングの一部のみ",
                s.jsx("br", {}),
                "コーディングさせていただきまいた。",
                s.jsx("br", {}),
                "このLPを作った方が",
                s.jsx("br", {}),
                "コーディングができない方で",
                s.jsx("br", {}),
                "一部どうしてもコーディングが必要",
                s.jsx("br", {}),
                "な箇所があり、",
                s.jsx("br", {}),
                "その部分だけお手伝いしました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 8 }),
        }),
      ],
    });
  },
  sp = "assets/vieHuit-close-CpYMaNmR.png",
  op = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[8],
      f = et[8];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: sp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・WordPress" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "お知り合いの紹介で",
                s.jsx("br", {}),
                "知り合った社長さんが",
                s.jsx("br", {}),
                "新しく会社を作ることになり",
                s.jsx("br", {}),
                "コーディングさせていただいたHPです。",
                s.jsx("br", {}),
                "会社員の仕事が一番忙しい時期で",
                s.jsx("br", {}),
                "途中から別の方にコーディングを",
                s.jsx("br", {}),
                "バトンタッチすることになってしまい",
                s.jsx("br", {}),
                "申し訳ない気持ちでしたが",
                s.jsx("br", {}),
                "参考サイトも修正依頼も細かく",
                s.jsx("br", {}),
                "作成に携わらせていただけて",
                s.jsx("br", {}),
                "とても良い経験になりました。",
                s.jsx("br", {}),
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 9 }),
        }),
      ],
    });
  },
  up = "assets/ZeroOne-close-DNLjBP83.png",
  ap = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[9],
      f = et[9];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: up,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "合同会社キッカケの、",
                s.jsx("br", {}),
                "ゼロワンという商品の",
                s.jsx("br", {}),
                "販売用LPです。",
                s.jsx("br", {}),
                "こちらは参考デザインのLPがあって",
                s.jsx("br", {}),
                "そのLPのデザインに沿って",
                s.jsx("br", {}),
                "一度情報や画像を当てはめて",
                s.jsx("br", {}),
                "作った後",
                s.jsx("br", {}),
                "要望に沿って修正して作成しました。",
                s.jsx("br", {}),
                "社長さんがこのデザインを",
                s.jsx("br", {}),
                "とてもよく気に入ってくださり",
                s.jsx("br", {}),
                "元々別の見た目をしていた",
                s.jsx("br", {}),
                "パワーグレードのLPも",
                s.jsx("br", {}),
                "これと同じ見た目になりました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 10 }),
        }),
      ],
    });
  },
  cp = "assets/comingSoon-open-ydrWcG4n.png",
  dp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[10],
      f = et[10];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: cp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・Figma" }),
                  s.jsx("li", { children: "・WordPress" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsx("div", {
              style: y,
              children: "現在デザイン、コーディング中です。",
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 11 }),
        }),
      ],
    });
  },
  fp = "assets/it-plus-close-C-eZlnRJ.png",
  pp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[11],
      f = et[11];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: fp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・WordPress" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "私が学生時代にWEB制作の",
                s.jsx("br", {}),
                "アルバイトでお世話になった",
                s.jsx("br", {}),
                "会社のHPです。",
                s.jsx("br", {}),
                "このHPは元々あったのですが",
                s.jsx("br", {}),
                "以前は少し違う見た目を",
                s.jsx("br", {}),
                "していて",
                s.jsx("br", {}),
                "WEB制作の知識が全くない",
                s.jsx("br", {}),
                "社員さんや社長さんの",
                s.jsx("br", {}),
                "ここはもっとこうしてほしい",
                s.jsx("br", {}),
                "などの要望の通りに",
                s.jsx("br", {}),
                "修正をしたり、",
                s.jsx("br", {}),
                "WordPressの新規記事投稿の",
                s.jsx("br", {}),
                "作成や、一部ページの作成など",
                s.jsx("br", {}),
                "保守運用、修正、一部作成を",
                s.jsx("br", {}),
                "しました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 12 }),
        }),
      ],
    });
  },
  hp = "assets/orange-group-CTbAUBWX.png",
  mp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[12],
      f = et[12];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: hp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・FileZila" }),
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "大学時代にお世話になった",
                s.jsx("br", {}),
                "株式会社ITプラスの子会社にあたる",
                s.jsx("br", {}),
                "自動車の事業のHPです。",
                s.jsx("br", {}),
                "このHPも保守運用や修正、",
                s.jsx("br", {}),
                "一部作成をしました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 13 }),
        }),
      ],
    });
  },
  yp = "assets/lessonOne-close-CrBiiPT9.png",
  vp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[13];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: yp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "以前いた会社の",
                s.jsx("br", {}),
                "ITのカリキュラム一つ目の作品です。",
                s.jsx("br", {}),
                "実際に公開されていないので",
                s.jsx("br", {}),
                "リンクはありませんが",
                s.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                s.jsx("br", {}),
                "ご覧ください。",
                s.jsx("br", {}),
                "デザインは決められていて",
                s.jsx("br", {}),
                "その決められたデザインを",
                s.jsx("br", {}),
                "コーディングする内容だったので",
                s.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                s.jsx("br", {}),
                "周りの新卒の同期は",
                s.jsx("br", {}),
                "2025年1月現在も終わっていない",
                s.jsx("br", {}),
                "人もいる中、自分はこの",
                s.jsx("br", {}),
                "カリキュラム1〜5を",
                s.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 14 }),
        }),
      ],
    });
  },
  gp = "assets/lessonTwo-close-DrP4nUb1.png",
  xp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[14];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: gp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "以前いた会社の",
                s.jsx("br", {}),
                "ITのカリキュラム二つ目の作品です。",
                s.jsx("br", {}),
                "実際に公開されていないので",
                s.jsx("br", {}),
                "リンクはありませんが",
                s.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                s.jsx("br", {}),
                "ご覧ください。",
                s.jsx("br", {}),
                "デザインは決められていて",
                s.jsx("br", {}),
                "その決められたデザインを",
                s.jsx("br", {}),
                "コーディングする内容だったので",
                s.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                s.jsx("br", {}),
                "周りの新卒の同期は",
                s.jsx("br", {}),
                "2025年1月現在も終わっていない",
                s.jsx("br", {}),
                "人もいる中、自分はこの",
                s.jsx("br", {}),
                "カリキュラム1〜5を",
                s.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 15 }),
        }),
      ],
    });
  },
  wp = "assets/lessonThree-close-YQJVYj2y.png",
  jp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[15];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: wp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "以前いた会社の",
                s.jsx("br", {}),
                "ITのカリキュラム三つ目の作品です。",
                s.jsx("br", {}),
                "実際に公開されていないので",
                s.jsx("br", {}),
                "リンクはありませんが",
                s.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                s.jsx("br", {}),
                "ご覧ください。",
                s.jsx("br", {}),
                "デザインは決められていて",
                s.jsx("br", {}),
                "その決められたデザインを",
                s.jsx("br", {}),
                "コーディングする内容だったので",
                s.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                s.jsx("br", {}),
                "周りの新卒の同期は",
                s.jsx("br", {}),
                "2025年1月現在も終わっていない",
                s.jsx("br", {}),
                "人もいる中、自分はこの",
                s.jsx("br", {}),
                "カリキュラム1〜5を",
                s.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 16 }),
        }),
      ],
    });
  },
  Sp = "assets/lessonFour-close-BHVnvfiG.png",
  _p = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[16];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: Sp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・SCSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "以前いた会社の",
                s.jsx("br", {}),
                "ITのカリキュラム四つ目の作品です。",
                s.jsx("br", {}),
                "実際に公開されていないので",
                s.jsx("br", {}),
                "リンクはありませんが",
                s.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                s.jsx("br", {}),
                "ご覧ください。",
                s.jsx("br", {}),
                "デザインは決められていて",
                s.jsx("br", {}),
                "その決められたデザインを",
                s.jsx("br", {}),
                "コーディングする内容だったので",
                s.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                s.jsx("br", {}),
                "周りの新卒の同期は",
                s.jsx("br", {}),
                "2025年1月現在も終わっていない",
                s.jsx("br", {}),
                "人もいる中、自分はこの",
                s.jsx("br", {}),
                "カリキュラム1〜5を",
                s.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 17 }),
        }),
      ],
    });
  },
  kp = "assets/lessonFive-close-CQf_AGLY.png",
  Pp = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[17];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: kp,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・SCSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "以前いた会社の",
                s.jsx("br", {}),
                "ITのカリキュラム五つ目の作品です。",
                s.jsx("br", {}),
                "実際に公開されていないので",
                s.jsx("br", {}),
                "リンクはありませんが",
                s.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                s.jsx("br", {}),
                "ご覧ください。",
                s.jsx("br", {}),
                "デザインは決められていて",
                s.jsx("br", {}),
                "その決められたデザインを",
                s.jsx("br", {}),
                "コーディングする内容だったので",
                s.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                s.jsx("br", {}),
                "周りの新卒の同期は",
                s.jsx("br", {}),
                "2025年1月現在も終わっていない",
                s.jsx("br", {}),
                "人もいる中、自分はこの",
                s.jsx("br", {}),
                "カリキュラム1〜5を",
                s.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 18 }),
        }),
      ],
    });
  },
  Ep = "assets/libatyLp-close-DipLbW3R.png",
  Np = () => {
    const y = { fontSize: "11px", lineHeight: "14px" },
      v = Ie[18],
      f = et[13];
    return s.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        s.jsx("div", {
          children: s.jsx("img", {
            className: "w-100",
            src: Ep,
            alt: "作品紹介",
          }),
        }),
        s.jsxs("div", {
          className: "container pt-3",
          children: [
            s.jsx("h5", { className: "fw-bold", children: v.title }),
            s.jsx("div", {
              children: s.jsx("a", {
                className: "hover",
                href: f.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            s.jsx("div", {
              className: "pb-3",
              children: s.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  s.jsx("li", { children: "・HTML" }),
                  s.jsx("li", { children: "・CSS" }),
                  s.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "px-3",
          children: s.jsx("div", {
            className: "container border py-2",
            children: s.jsxs("div", {
              style: y,
              children: [
                "株式会社liberty bridgeの",
                s.jsx("br", {}),
                "既存LPの修正に携わらせて",
                s.jsx("br", {}),
                "いただきました。",
              ],
            }),
          }),
        }),
        s.jsx("div", {
          className: "text-center py-3",
          children: s.jsx(ze, { id: 19 }),
        }),
      ],
    });
  },
  Cp = [
    { card: s.jsx($f, {}) },
    { card: s.jsx(Yf, {}) },
    { card: s.jsx(Zf, {}) },
    { card: s.jsx(Gf, {}) },
    { card: s.jsx(Jf, {}) },
    { card: s.jsx(tp, {}) },
    { card: s.jsx(rp, {}) },
    { card: s.jsx(ip, {}) },
    { card: s.jsx(op, {}) },
    { card: s.jsx(ap, {}) },
    { card: s.jsx(dp, {}) },
    { card: s.jsx(pp, {}) },
    { card: s.jsx(mp, {}) },
    { card: s.jsx(vp, {}) },
    { card: s.jsx(xp, {}) },
    { card: s.jsx(jp, {}) },
    { card: s.jsx(_p, {}) },
    { card: s.jsx(Pp, {}) },
    { card: s.jsx(Np, {}) },
  ],
  Tp = () =>
    s.jsxs("section", {
      className: "py-5",
      children: [
        s.jsx("h1", { className: "fw-bold text-center", children: "制作実績" }),
        s.jsx("div", {
          className: "bg-white",
          style: { overflowX: "auto", whiteSpace: "nowrap" },
          children: s.jsx("ul", {
            id: "ul",
            className: "d-inline-flex",
            children: Cp.map((y, v) =>
              s.jsx(
                "li",
                { style: { display: "inline-block" }, children: y.card },
                v
              )
            ),
          }),
        }),
      ],
    }),
  Op = () =>
    s.jsxs("footer", {
      className: "bg-dark",
      children: [
        s.jsx("ul", { children: s.jsx("li", {}) }),
        s.jsx("div", {
          className: "text-center py-5",
          children: s.jsx("small", {
            className: "text-white fw-bold",
            children: "Kengo Masunari",
          }),
        }),
      ],
    }),
  Lp = "modulepreload",
  Rp = function (y) {
    return "/vite-react/" + y;
  },
  Ga = {},
  Mp = function (v, f, U) {
    let L = Promise.resolve();
    if (f && f.length > 0) {
      document.getElementsByTagName("link");
      const z = document.querySelector("meta[property=csp-nonce]"),
        F =
          (z == null ? void 0 : z.nonce) ||
          (z == null ? void 0 : z.getAttribute("nonce"));
      L = Promise.allSettled(
        f.map((S) => {
          if (((S = Rp(S)), S in Ga)) return;
          Ga[S] = !0;
          const q = S.endsWith(".css"),
            ae = q ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${S}"]${ae}`)) return;
          const N = document.createElement("link");
          if (
            ((N.rel = q ? "stylesheet" : Lp),
            q || (N.as = "script"),
            (N.crossOrigin = ""),
            (N.href = S),
            F && N.setAttribute("nonce", F),
            document.head.appendChild(N),
            q)
          )
            return new Promise(($, ne) => {
              N.addEventListener("load", $),
                N.addEventListener("error", () =>
                  ne(new Error(`Unable to preload CSS for ${S}`))
                );
            });
        })
      );
    }
    function j(z) {
      const F = new Event("vite:preloadError", { cancelable: !0 });
      if (((F.payload = z), window.dispatchEvent(F), !F.defaultPrevented))
        throw z;
    }
    return L.then((z) => {
      for (const F of z || []) F.status === "rejected" && j(F.reason);
      return v().catch(j);
    });
  };
var zs, qa;
function fc() {
  if (qa) return zs;
  qa = 1;
  var y = function (D) {
    return v(D) && !f(D);
  };
  function v(I) {
    return !!I && typeof I == "object";
  }
  function f(I) {
    var D = Object.prototype.toString.call(I);
    return D === "[object RegExp]" || D === "[object Date]" || j(I);
  }
  var U = typeof Symbol == "function" && Symbol.for,
    L = U ? Symbol.for("react.element") : 60103;
  function j(I) {
    return I.$$typeof === L;
  }
  function z(I) {
    return Array.isArray(I) ? [] : {};
  }
  function F(I, D) {
    return D.clone !== !1 && D.isMergeableObject(I) ? le(z(I), I, D) : I;
  }
  function S(I, D, T) {
    return I.concat(D).map(function (P) {
      return F(P, T);
    });
  }
  function q(I, D) {
    if (!D.customMerge) return le;
    var T = D.customMerge(I);
    return typeof T == "function" ? T : le;
  }
  function ae(I) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(I).filter(function (D) {
          return Object.propertyIsEnumerable.call(I, D);
        })
      : [];
  }
  function N(I) {
    return Object.keys(I).concat(ae(I));
  }
  function $(I, D) {
    try {
      return D in I;
    } catch {
      return !1;
    }
  }
  function ne(I, D) {
    return (
      $(I, D) &&
      !(
        Object.hasOwnProperty.call(I, D) &&
        Object.propertyIsEnumerable.call(I, D)
      )
    );
  }
  function fe(I, D, T) {
    var P = {};
    return (
      T.isMergeableObject(I) &&
        N(I).forEach(function (A) {
          P[A] = F(I[A], T);
        }),
      N(D).forEach(function (A) {
        ne(I, A) ||
          ($(I, A) && T.isMergeableObject(D[A])
            ? (P[A] = q(A, T)(I[A], D[A], T))
            : (P[A] = F(D[A], T)));
      }),
      P
    );
  }
  function le(I, D, T) {
    (T = T || {}),
      (T.arrayMerge = T.arrayMerge || S),
      (T.isMergeableObject = T.isMergeableObject || y),
      (T.cloneUnlessOtherwiseSpecified = F);
    var P = Array.isArray(D),
      A = Array.isArray(I),
      V = P === A;
    return V ? (P ? T.arrayMerge(I, D, T) : fe(I, D, T)) : F(D, T);
  }
  le.all = function (D, T) {
    if (!Array.isArray(D)) throw new Error("first argument should be an array");
    return D.reduce(function (P, A) {
      return le(P, A, T);
    }, {});
  };
  var se = le;
  return (zs = se), zs;
}
var Ja =
  Number.isNaN ||
  function (v) {
    return typeof v == "number" && v !== v;
  };
function zp(y, v) {
  return !!(y === v || (Ja(y) && Ja(v)));
}
function Ip(y, v) {
  if (y.length !== v.length) return !1;
  for (var f = 0; f < y.length; f++) if (!zp(y[f], v[f])) return !1;
  return !0;
}
function Dp(y, v) {
  v === void 0 && (v = Ip);
  var f,
    U = [],
    L,
    j = !1;
  function z() {
    for (var F = [], S = 0; S < arguments.length; S++) F[S] = arguments[S];
    return (
      (j && f === this && v(F, U)) ||
        ((L = y.apply(this, F)), (j = !0), (f = this), (U = F)),
      L
    );
  }
  return z;
}
const Ap = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Dp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Up = ff(Ap);
var Is, ec;
function pc() {
  if (ec) return Is;
  ec = 1;
  var y = typeof Element < "u",
    v = typeof Map == "function",
    f = typeof Set == "function",
    U = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function L(j, z) {
    if (j === z) return !0;
    if (j && z && typeof j == "object" && typeof z == "object") {
      if (j.constructor !== z.constructor) return !1;
      var F, S, q;
      if (Array.isArray(j)) {
        if (((F = j.length), F != z.length)) return !1;
        for (S = F; S-- !== 0; ) if (!L(j[S], z[S])) return !1;
        return !0;
      }
      var ae;
      if (v && j instanceof Map && z instanceof Map) {
        if (j.size !== z.size) return !1;
        for (ae = j.entries(); !(S = ae.next()).done; )
          if (!z.has(S.value[0])) return !1;
        for (ae = j.entries(); !(S = ae.next()).done; )
          if (!L(S.value[1], z.get(S.value[0]))) return !1;
        return !0;
      }
      if (f && j instanceof Set && z instanceof Set) {
        if (j.size !== z.size) return !1;
        for (ae = j.entries(); !(S = ae.next()).done; )
          if (!z.has(S.value[0])) return !1;
        return !0;
      }
      if (U && ArrayBuffer.isView(j) && ArrayBuffer.isView(z)) {
        if (((F = j.length), F != z.length)) return !1;
        for (S = F; S-- !== 0; ) if (j[S] !== z[S]) return !1;
        return !0;
      }
      if (j.constructor === RegExp)
        return j.source === z.source && j.flags === z.flags;
      if (
        j.valueOf !== Object.prototype.valueOf &&
        typeof j.valueOf == "function" &&
        typeof z.valueOf == "function"
      )
        return j.valueOf() === z.valueOf();
      if (
        j.toString !== Object.prototype.toString &&
        typeof j.toString == "function" &&
        typeof z.toString == "function"
      )
        return j.toString() === z.toString();
      if (((q = Object.keys(j)), (F = q.length), F !== Object.keys(z).length))
        return !1;
      for (S = F; S-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(z, q[S])) return !1;
      if (y && j instanceof Element) return !1;
      for (S = F; S-- !== 0; )
        if (
          !(
            (q[S] === "_owner" || q[S] === "__v" || q[S] === "__o") &&
            j.$$typeof
          ) &&
          !L(j[q[S]], z[q[S]])
        )
          return !1;
      return !0;
    }
    return j !== j && z !== z;
  }
  return (
    (Is = function (z, F) {
      try {
        return L(z, F);
      } catch (S) {
        if ((S.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw S;
      }
    }),
    Is
  );
}
var Ds = { exports: {} },
  As,
  tc;
function Fp() {
  if (tc) return As;
  tc = 1;
  var y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (As = y), As;
}
var Us, nc;
function Hp() {
  if (nc) return Us;
  nc = 1;
  var y = Fp();
  function v() {}
  function f() {}
  return (
    (f.resetWarningCache = v),
    (Us = function () {
      function U(z, F, S, q, ae, N) {
        if (N !== y) {
          var $ = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw (($.name = "Invariant Violation"), $);
        }
      }
      U.isRequired = U;
      function L() {
        return U;
      }
      var j = {
        array: U,
        bigint: U,
        bool: U,
        func: U,
        number: U,
        object: U,
        string: U,
        symbol: U,
        any: U,
        arrayOf: L,
        element: U,
        elementType: U,
        instanceOf: L,
        node: U,
        objectOf: L,
        oneOf: L,
        oneOfType: L,
        shape: L,
        exact: L,
        checkPropTypes: f,
        resetWarningCache: v,
      };
      return (j.PropTypes = j), j;
    }),
    Us
  );
}
var rc;
function Bp() {
  return rc || ((rc = 1), (Ds.exports = Hp()())), Ds.exports;
}
var Fs, lc;
function hc() {
  if (lc) return Fs;
  lc = 1;
  var y = Object.create,
    v = Object.defineProperty,
    f = Object.getOwnPropertyDescriptor,
    U = Object.getOwnPropertyNames,
    L = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty,
    z = (Y, O) => {
      for (var W in O) v(Y, W, { get: O[W], enumerable: !0 });
    },
    F = (Y, O, W, J) => {
      if ((O && typeof O == "object") || typeof O == "function")
        for (let b of U(O))
          !j.call(Y, b) &&
            b !== W &&
            v(Y, b, {
              get: () => O[b],
              enumerable: !(J = f(O, b)) || J.enumerable,
            });
      return Y;
    },
    S = (Y, O, W) => (
      (W = Y != null ? y(L(Y)) : {}),
      F(
        !Y || !Y.__esModule ? v(W, "default", { value: Y, enumerable: !0 }) : W,
        Y
      )
    ),
    q = (Y) => F(v({}, "__esModule", { value: !0 }), Y),
    ae = {};
  z(ae, { defaultProps: () => re, propTypes: () => A }), (Fs = q(ae));
  var N = S(Bp());
  const {
      string: $,
      bool: ne,
      number: fe,
      array: le,
      oneOfType: se,
      shape: I,
      object: D,
      func: T,
      node: P,
    } = N.default,
    A = {
      url: se([$, le, D]),
      playing: ne,
      loop: ne,
      controls: ne,
      volume: fe,
      muted: ne,
      playbackRate: fe,
      width: se([$, fe]),
      height: se([$, fe]),
      style: D,
      progressInterval: fe,
      playsinline: ne,
      pip: ne,
      stopOnUnmount: ne,
      light: se([ne, $, D]),
      playIcon: P,
      previewTabIndex: fe,
      previewAriaLabel: $,
      fallback: P,
      oEmbedUrl: $,
      wrapper: se([$, T, I({ render: T.isRequired })]),
      config: I({
        soundcloud: I({ options: D }),
        youtube: I({ playerVars: D, embedOptions: D, onUnstarted: T }),
        facebook: I({ appId: $, version: $, playerId: $, attributes: D }),
        dailymotion: I({ params: D }),
        vimeo: I({ playerOptions: D, title: $ }),
        mux: I({ attributes: D, version: $ }),
        file: I({
          attributes: D,
          tracks: le,
          forceVideo: ne,
          forceAudio: ne,
          forceHLS: ne,
          forceSafariHLS: ne,
          forceDisableHls: ne,
          forceDASH: ne,
          forceFLV: ne,
          hlsOptions: D,
          hlsVersion: $,
          dashVersion: $,
          flvVersion: $,
        }),
        wistia: I({ options: D, playerId: $, customControls: le }),
        mixcloud: I({ options: D }),
        twitch: I({ options: D, playerId: $ }),
        vidyard: I({ options: D }),
      }),
      onReady: T,
      onStart: T,
      onPlay: T,
      onPause: T,
      onBuffer: T,
      onBufferEnd: T,
      onEnded: T,
      onError: T,
      onDuration: T,
      onSeek: T,
      onPlaybackRateChange: T,
      onPlaybackQualityChange: T,
      onProgress: T,
      onClickPreview: T,
      onEnablePIP: T,
      onDisablePIP: T,
    },
    V = () => {},
    re = {
      playing: !1,
      loop: !1,
      controls: !1,
      volume: null,
      muted: !1,
      playbackRate: 1,
      width: "640px",
      height: "360px",
      style: {},
      progressInterval: 1e3,
      playsinline: !1,
      pip: !1,
      stopOnUnmount: !0,
      light: !1,
      fallback: null,
      wrapper: "div",
      previewTabIndex: 0,
      previewAriaLabel: "",
      oEmbedUrl: "https://noembed.com/embed?url={url}",
      config: {
        soundcloud: {
          options: {
            visual: !0,
            buying: !1,
            liking: !1,
            download: !1,
            sharing: !1,
            show_comments: !1,
            show_playcount: !1,
          },
        },
        youtube: {
          playerVars: {
            playsinline: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1,
          },
          embedOptions: {},
          onUnstarted: V,
        },
        facebook: {
          appId: "1309697205772819",
          version: "v3.3",
          playerId: null,
          attributes: {},
        },
        dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
        vimeo: {
          playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 },
          title: null,
        },
        mux: { attributes: {}, version: "2" },
        file: {
          attributes: {},
          tracks: [],
          forceVideo: !1,
          forceAudio: !1,
          forceHLS: !1,
          forceDASH: !1,
          forceFLV: !1,
          hlsOptions: {},
          hlsVersion: "1.1.4",
          dashVersion: "3.1.3",
          flvVersion: "1.5.0",
          forceDisableHls: !1,
        },
        wistia: { options: {}, playerId: null, customControls: null },
        mixcloud: { options: { hide_cover: 1 } },
        twitch: { options: {}, playerId: null },
        vidyard: { options: {} },
      },
      onReady: V,
      onStart: V,
      onPlay: V,
      onPause: V,
      onBuffer: V,
      onBufferEnd: V,
      onEnded: V,
      onError: V,
      onDuration: V,
      onSeek: V,
      onPlaybackRateChange: V,
      onPlaybackQualityChange: V,
      onProgress: V,
      onClickPreview: V,
      onEnablePIP: V,
      onDisablePIP: V,
    };
  return Fs;
}
var Hs, ic;
function Vp() {
  if (ic) return Hs;
  (ic = 1),
    (Hs = function (L, j, z) {
      var F = document.head || document.getElementsByTagName("head")[0],
        S = document.createElement("script");
      typeof j == "function" && ((z = j), (j = {})),
        (j = j || {}),
        (z = z || function () {}),
        (S.type = j.type || "text/javascript"),
        (S.charset = j.charset || "utf8"),
        (S.async = "async" in j ? !!j.async : !0),
        (S.src = L),
        j.attrs && y(S, j.attrs),
        j.text && (S.text = "" + j.text);
      var q = "onload" in S ? v : f;
      q(S, z), S.onload || v(S, z), F.appendChild(S);
    });
  function y(U, L) {
    for (var j in L) U.setAttribute(j, L[j]);
  }
  function v(U, L) {
    (U.onload = function () {
      (this.onerror = this.onload = null), L(null, U);
    }),
      (U.onerror = function () {
        (this.onerror = this.onload = null),
          L(new Error("Failed to load " + this.src), U);
      });
  }
  function f(U, L) {
    U.onreadystatechange = function () {
      (this.readyState != "complete" && this.readyState != "loaded") ||
        ((this.onreadystatechange = null), L(null, U));
    };
  }
  return Hs;
}
var Bs, sc;
function zl() {
  if (sc) return Bs;
  sc = 1;
  var y = Object.create,
    v = Object.defineProperty,
    f = Object.getOwnPropertyDescriptor,
    U = Object.getOwnPropertyNames,
    L = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty,
    z = (x, w) => {
      for (var c in w) v(x, c, { get: w[c], enumerable: !0 });
    },
    F = (x, w, c, g) => {
      if ((w && typeof w == "object") || typeof w == "function")
        for (let G of U(w))
          !j.call(x, G) &&
            G !== c &&
            v(x, G, {
              get: () => w[G],
              enumerable: !(g = f(w, G)) || g.enumerable,
            });
      return x;
    },
    S = (x, w, c) => (
      (c = x != null ? y(L(x)) : {}),
      F(
        !x || !x.__esModule ? v(c, "default", { value: x, enumerable: !0 }) : c,
        x
      )
    ),
    q = (x) => F(v({}, "__esModule", { value: !0 }), x),
    ae = {};
  z(ae, {
    callPlayer: () => _,
    getConfig: () => b,
    getSDK: () => J,
    isBlobUrl: () => he,
    isMediaStream: () => Q,
    lazy: () => fe,
    omit: () => ie,
    parseEndTime: () => V,
    parseStartTime: () => A,
    queryString: () => Y,
    randomString: () => re,
    supportsWebKitPresentationMode: () => me,
  }),
    (Bs = q(ae));
  var N = S(dn()),
    $ = S(Vp()),
    ne = S(fc());
  const fe = (x) =>
      N.default.lazy(async () => {
        const w = await x();
        return typeof w.default == "function" ? w : w.default;
      }),
    le = /[?&#](?:start|t)=([0-9hms]+)/,
    se = /[?&#]end=([0-9hms]+)/,
    I = /(\d+)(h|m|s)/g,
    D = /^\d+$/;
  function T(x, w) {
    if (x instanceof Array) return;
    const c = x.match(w);
    if (c) {
      const g = c[1];
      if (g.match(I)) return P(g);
      if (D.test(g)) return parseInt(g);
    }
  }
  function P(x) {
    let w = 0,
      c = I.exec(x);
    for (; c !== null; ) {
      const [, g, G] = c;
      G === "h" && (w += parseInt(g, 10) * 60 * 60),
        G === "m" && (w += parseInt(g, 10) * 60),
        G === "s" && (w += parseInt(g, 10)),
        (c = I.exec(x));
    }
    return w;
  }
  function A(x) {
    return T(x, le);
  }
  function V(x) {
    return T(x, se);
  }
  function re() {
    return Math.random().toString(36).substr(2, 5);
  }
  function Y(x) {
    return Object.keys(x)
      .map((w) => `${w}=${x[w]}`)
      .join("&");
  }
  function O(x) {
    return window[x]
      ? window[x]
      : window.exports && window.exports[x]
      ? window.exports[x]
      : window.module && window.module.exports && window.module.exports[x]
      ? window.module.exports[x]
      : null;
  }
  const W = {},
    J = function (w, c, g = null, G = () => !0, ue = $.default) {
      const ce = O(c);
      return ce && G(ce)
        ? Promise.resolve(ce)
        : new Promise((pe, we) => {
            if (W[w]) {
              W[w].push({ resolve: pe, reject: we });
              return;
            }
            W[w] = [{ resolve: pe, reject: we }];
            const ve = (ge) => {
              W[w].forEach((Fe) => Fe.resolve(ge));
            };
            if (g) {
              const ge = window[g];
              window[g] = function () {
                ge && ge(), ve(O(c));
              };
            }
            ue(w, (ge) => {
              ge
                ? (W[w].forEach((Fe) => Fe.reject(ge)), (W[w] = null))
                : g || ve(O(c));
            });
          });
    };
  function b(x, w) {
    return (0, ne.default)(w.config, x.config);
  }
  function ie(x, ...w) {
    const c = [].concat(...w),
      g = {},
      G = Object.keys(x);
    for (const ue of G) c.indexOf(ue) === -1 && (g[ue] = x[ue]);
    return g;
  }
  function _(x, ...w) {
    if (!this.player || !this.player[x]) {
      let c = `ReactPlayer: ${this.constructor.displayName} player could not call %c${x}%c – `;
      return (
        this.player
          ? this.player[x] || (c += "The method was not available")
          : (c += "The player was not available"),
        console.warn(c, "font-weight: bold", ""),
        null
      );
    }
    return this.player[x](...w);
  }
  function Q(x) {
    return (
      typeof window < "u" &&
      typeof window.MediaStream < "u" &&
      x instanceof window.MediaStream
    );
  }
  function he(x) {
    return /^blob:/.test(x);
  }
  function me(x = document.createElement("video")) {
    const w = /iPhone|iPod/.test(navigator.userAgent) === !1;
    return (
      x.webkitSupportsPresentationMode &&
      typeof x.webkitSetPresentationMode == "function" &&
      w
    );
  }
  function R(x) {
    return x;
  }
  return Bs;
}
var Vs, oc;
function Wp() {
  if (oc) return Vs;
  oc = 1;
  var y = Object.create,
    v = Object.defineProperty,
    f = Object.getOwnPropertyDescriptor,
    U = Object.getOwnPropertyNames,
    L = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty,
    z = (T, P, A) =>
      P in T
        ? v(T, P, { enumerable: !0, configurable: !0, writable: !0, value: A })
        : (T[P] = A),
    F = (T, P) => {
      for (var A in P) v(T, A, { get: P[A], enumerable: !0 });
    },
    S = (T, P, A, V) => {
      if ((P && typeof P == "object") || typeof P == "function")
        for (let re of U(P))
          !j.call(T, re) &&
            re !== A &&
            v(T, re, {
              get: () => P[re],
              enumerable: !(V = f(P, re)) || V.enumerable,
            });
      return T;
    },
    q = (T, P, A) => (
      (A = T != null ? y(L(T)) : {}),
      S(
        !T || !T.__esModule ? v(A, "default", { value: T, enumerable: !0 }) : A,
        T
      )
    ),
    ae = (T) => S(v({}, "__esModule", { value: !0 }), T),
    N = (T, P, A) => (z(T, typeof P != "symbol" ? P + "" : P, A), A),
    $ = {};
  F($, { default: () => D }), (Vs = ae($));
  var ne = q(dn()),
    fe = q(pc()),
    le = hc(),
    se = zl();
  const I = 5e3;
  class D extends ne.Component {
    constructor() {
      super(...arguments),
        N(this, "mounted", !1),
        N(this, "isReady", !1),
        N(this, "isPlaying", !1),
        N(this, "isLoading", !0),
        N(this, "loadOnReady", null),
        N(this, "startOnPlay", !0),
        N(this, "seekOnPlay", null),
        N(this, "onDurationCalled", !1),
        N(this, "handlePlayerMount", (P) => {
          if (this.player) {
            this.progress();
            return;
          }
          (this.player = P), this.player.load(this.props.url), this.progress();
        }),
        N(this, "getInternalPlayer", (P) =>
          this.player ? this.player[P] : null
        ),
        N(this, "progress", () => {
          if (this.props.url && this.player && this.isReady) {
            const P = this.getCurrentTime() || 0,
              A = this.getSecondsLoaded(),
              V = this.getDuration();
            if (V) {
              const re = { playedSeconds: P, played: P / V };
              A !== null && ((re.loadedSeconds = A), (re.loaded = A / V)),
                (re.playedSeconds !== this.prevPlayed ||
                  re.loadedSeconds !== this.prevLoaded) &&
                  this.props.onProgress(re),
                (this.prevPlayed = re.playedSeconds),
                (this.prevLoaded = re.loadedSeconds);
            }
          }
          this.progressTimeout = setTimeout(
            this.progress,
            this.props.progressFrequency || this.props.progressInterval
          );
        }),
        N(this, "handleReady", () => {
          if (!this.mounted) return;
          (this.isReady = !0), (this.isLoading = !1);
          const { onReady: P, playing: A, volume: V, muted: re } = this.props;
          P(),
            !re && V !== null && this.player.setVolume(V),
            this.loadOnReady
              ? (this.player.load(this.loadOnReady, !0),
                (this.loadOnReady = null))
              : A && this.player.play(),
            this.handleDurationCheck();
        }),
        N(this, "handlePlay", () => {
          (this.isPlaying = !0), (this.isLoading = !1);
          const { onStart: P, onPlay: A, playbackRate: V } = this.props;
          this.startOnPlay &&
            (this.player.setPlaybackRate &&
              V !== 1 &&
              this.player.setPlaybackRate(V),
            P(),
            (this.startOnPlay = !1)),
            A(),
            this.seekOnPlay &&
              (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
            this.handleDurationCheck();
        }),
        N(this, "handlePause", (P) => {
          (this.isPlaying = !1), this.isLoading || this.props.onPause(P);
        }),
        N(this, "handleEnded", () => {
          const { activePlayer: P, loop: A, onEnded: V } = this.props;
          P.loopOnEnded && A && this.seekTo(0),
            A || ((this.isPlaying = !1), V());
        }),
        N(this, "handleError", (...P) => {
          (this.isLoading = !1), this.props.onError(...P);
        }),
        N(this, "handleDurationCheck", () => {
          clearTimeout(this.durationCheckTimeout);
          const P = this.getDuration();
          P
            ? this.onDurationCalled ||
              (this.props.onDuration(P), (this.onDurationCalled = !0))
            : (this.durationCheckTimeout = setTimeout(
                this.handleDurationCheck,
                100
              ));
        }),
        N(this, "handleLoaded", () => {
          this.isLoading = !1;
        });
    }
    componentDidMount() {
      this.mounted = !0;
    }
    componentWillUnmount() {
      clearTimeout(this.progressTimeout),
        clearTimeout(this.durationCheckTimeout),
        this.isReady &&
          this.props.stopOnUnmount &&
          (this.player.stop(),
          this.player.disablePIP && this.player.disablePIP()),
        (this.mounted = !1);
    }
    componentDidUpdate(P) {
      if (!this.player) return;
      const {
        url: A,
        playing: V,
        volume: re,
        muted: Y,
        playbackRate: O,
        pip: W,
        loop: J,
        activePlayer: b,
        disableDeferredLoading: ie,
      } = this.props;
      if (!(0, fe.default)(P.url, A)) {
        if (
          this.isLoading &&
          !b.forceLoad &&
          !ie &&
          !(0, se.isMediaStream)(A)
        ) {
          console.warn(
            `ReactPlayer: the attempt to load ${A} is being deferred until the player has loaded`
          ),
            (this.loadOnReady = A);
          return;
        }
        (this.isLoading = !0),
          (this.startOnPlay = !0),
          (this.onDurationCalled = !1),
          this.player.load(A, this.isReady);
      }
      !P.playing && V && !this.isPlaying && this.player.play(),
        P.playing && !V && this.isPlaying && this.player.pause(),
        !P.pip && W && this.player.enablePIP && this.player.enablePIP(),
        P.pip && !W && this.player.disablePIP && this.player.disablePIP(),
        P.volume !== re && re !== null && this.player.setVolume(re),
        P.muted !== Y &&
          (Y
            ? this.player.mute()
            : (this.player.unmute(),
              re !== null && setTimeout(() => this.player.setVolume(re)))),
        P.playbackRate !== O &&
          this.player.setPlaybackRate &&
          this.player.setPlaybackRate(O),
        P.loop !== J && this.player.setLoop && this.player.setLoop(J);
    }
    getDuration() {
      return this.isReady ? this.player.getDuration() : null;
    }
    getCurrentTime() {
      return this.isReady ? this.player.getCurrentTime() : null;
    }
    getSecondsLoaded() {
      return this.isReady ? this.player.getSecondsLoaded() : null;
    }
    seekTo(P, A, V) {
      if (!this.isReady) {
        P !== 0 &&
          ((this.seekOnPlay = P),
          setTimeout(() => {
            this.seekOnPlay = null;
          }, I));
        return;
      }
      if (A ? A === "fraction" : P > 0 && P < 1) {
        const Y = this.player.getDuration();
        if (!Y) {
          console.warn(
            "ReactPlayer: could not seek using fraction – duration not yet available"
          );
          return;
        }
        this.player.seekTo(Y * P, V);
        return;
      }
      this.player.seekTo(P, V);
    }
    render() {
      const P = this.props.activePlayer;
      return P
        ? ne.default.createElement(P, {
            ...this.props,
            onMount: this.handlePlayerMount,
            onReady: this.handleReady,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onEnded: this.handleEnded,
            onLoaded: this.handleLoaded,
            onError: this.handleError,
          })
        : null;
    }
  }
  return (
    N(D, "displayName", "Player"),
    N(D, "propTypes", le.propTypes),
    N(D, "defaultProps", le.defaultProps),
    Vs
  );
}
var Ws, uc;
function Qp() {
  if (uc) return Ws;
  uc = 1;
  var y = Object.create,
    v = Object.defineProperty,
    f = Object.getOwnPropertyDescriptor,
    U = Object.getOwnPropertyNames,
    L = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty,
    z = (J, b, ie) =>
      b in J
        ? v(J, b, { enumerable: !0, configurable: !0, writable: !0, value: ie })
        : (J[b] = ie),
    F = (J, b) => {
      for (var ie in b) v(J, ie, { get: b[ie], enumerable: !0 });
    },
    S = (J, b, ie, _) => {
      if ((b && typeof b == "object") || typeof b == "function")
        for (let Q of U(b))
          !j.call(J, Q) &&
            Q !== ie &&
            v(J, Q, {
              get: () => b[Q],
              enumerable: !(_ = f(b, Q)) || _.enumerable,
            });
      return J;
    },
    q = (J, b, ie) => (
      (ie = J != null ? y(L(J)) : {}),
      S(
        !J || !J.__esModule
          ? v(ie, "default", { value: J, enumerable: !0 })
          : ie,
        J
      )
    ),
    ae = (J) => S(v({}, "__esModule", { value: !0 }), J),
    N = (J, b, ie) => (z(J, typeof b != "symbol" ? b + "" : b, ie), ie),
    $ = {};
  F($, { createReactPlayer: () => W }), (Ws = ae($));
  var ne = q(dn()),
    fe = q(fc()),
    le = q(Up),
    se = q(pc()),
    I = hc(),
    D = zl(),
    T = q(Wp());
  const P = (0, D.lazy)(() =>
      Mp(() => import("./Preview-t0tiA4We.js").then((J) => J.P), [])
    ),
    A = typeof window < "u" && window.document && typeof document < "u",
    V = typeof Cs < "u" && Cs.window && Cs.window.document,
    re = Object.keys(I.propTypes),
    Y = A || V ? ne.Suspense : () => null,
    O = [],
    W = (J, b) => {
      var ie;
      return (
        (ie = class extends ne.Component {
          constructor() {
            super(...arguments),
              N(this, "state", { showPreview: !!this.props.light }),
              N(this, "references", {
                wrapper: (_) => {
                  this.wrapper = _;
                },
                player: (_) => {
                  this.player = _;
                },
              }),
              N(this, "handleClickPreview", (_) => {
                this.setState({ showPreview: !1 }),
                  this.props.onClickPreview(_);
              }),
              N(this, "showPreview", () => {
                this.setState({ showPreview: !0 });
              }),
              N(this, "getDuration", () =>
                this.player ? this.player.getDuration() : null
              ),
              N(this, "getCurrentTime", () =>
                this.player ? this.player.getCurrentTime() : null
              ),
              N(this, "getSecondsLoaded", () =>
                this.player ? this.player.getSecondsLoaded() : null
              ),
              N(this, "getInternalPlayer", (_ = "player") =>
                this.player ? this.player.getInternalPlayer(_) : null
              ),
              N(this, "seekTo", (_, Q, he) => {
                if (!this.player) return null;
                this.player.seekTo(_, Q, he);
              }),
              N(this, "handleReady", () => {
                this.props.onReady(this);
              }),
              N(
                this,
                "getActivePlayer",
                (0, le.default)((_) => {
                  for (const Q of [...O, ...J]) if (Q.canPlay(_)) return Q;
                  return b || null;
                })
              ),
              N(
                this,
                "getConfig",
                (0, le.default)((_, Q) => {
                  const { config: he } = this.props;
                  return fe.default.all([
                    I.defaultProps.config,
                    I.defaultProps.config[Q] || {},
                    he,
                    he[Q] || {},
                  ]);
                })
              ),
              N(
                this,
                "getAttributes",
                (0, le.default)((_) => (0, D.omit)(this.props, re))
              ),
              N(this, "renderActivePlayer", (_) => {
                if (!_) return null;
                const Q = this.getActivePlayer(_);
                if (!Q) return null;
                const he = this.getConfig(_, Q.key);
                return ne.default.createElement(T.default, {
                  ...this.props,
                  key: Q.key,
                  ref: this.references.player,
                  config: he,
                  activePlayer: Q.lazyPlayer || Q,
                  onReady: this.handleReady,
                });
              });
          }
          shouldComponentUpdate(_, Q) {
            return (
              !(0, se.default)(this.props, _) || !(0, se.default)(this.state, Q)
            );
          }
          componentDidUpdate(_) {
            const { light: Q } = this.props;
            !_.light && Q && this.setState({ showPreview: !0 }),
              _.light && !Q && this.setState({ showPreview: !1 });
          }
          renderPreview(_) {
            if (!_) return null;
            const {
              light: Q,
              playIcon: he,
              previewTabIndex: me,
              oEmbedUrl: R,
              previewAriaLabel: x,
            } = this.props;
            return ne.default.createElement(P, {
              url: _,
              light: Q,
              playIcon: he,
              previewTabIndex: me,
              previewAriaLabel: x,
              oEmbedUrl: R,
              onClick: this.handleClickPreview,
            });
          }
          render() {
            const {
                url: _,
                style: Q,
                width: he,
                height: me,
                fallback: R,
                wrapper: x,
              } = this.props,
              { showPreview: w } = this.state,
              c = this.getAttributes(_),
              g = typeof x == "string" ? this.references.wrapper : void 0;
            return ne.default.createElement(
              x,
              { ref: g, style: { ...Q, width: he, height: me }, ...c },
              ne.default.createElement(
                Y,
                { fallback: R },
                w ? this.renderPreview(_) : this.renderActivePlayer(_)
              )
            );
          }
        }),
        N(ie, "displayName", "ReactPlayer"),
        N(ie, "propTypes", I.propTypes),
        N(ie, "defaultProps", I.defaultProps),
        N(ie, "addCustomPlayer", (_) => {
          O.push(_);
        }),
        N(ie, "removeCustomPlayers", () => {
          O.length = 0;
        }),
        N(ie, "canPlay", (_) => {
          for (const Q of [...O, ...J]) if (Q.canPlay(_)) return !0;
          return !1;
        }),
        N(ie, "canEnablePIP", (_) => {
          for (const Q of [...O, ...J])
            if (Q.canEnablePIP && Q.canEnablePIP(_)) return !0;
          return !1;
        }),
        ie
      );
    };
  return Ws;
}
var Qs, ac;
function $p() {
  if (ac) return Qs;
  ac = 1;
  var y = Object.defineProperty,
    v = Object.getOwnPropertyDescriptor,
    f = Object.getOwnPropertyNames,
    U = Object.prototype.hasOwnProperty,
    L = (_, Q) => {
      for (var he in Q) y(_, he, { get: Q[he], enumerable: !0 });
    },
    j = (_, Q, he, me) => {
      if (typeof Q == "object" || typeof Q == "function")
        for (let R of f(Q))
          !U.call(_, R) &&
            R !== he &&
            y(_, R, {
              get: () => Q[R],
              enumerable: !(me = v(Q, R)) || me.enumerable,
            });
      return _;
    },
    z = (_) => j(y({}, "__esModule", { value: !0 }), _),
    F = {};
  L(F, {
    AUDIO_EXTENSIONS: () => re,
    DASH_EXTENSIONS: () => W,
    FLV_EXTENSIONS: () => J,
    HLS_EXTENSIONS: () => O,
    MATCH_URL_DAILYMOTION: () => T,
    MATCH_URL_FACEBOOK: () => ne,
    MATCH_URL_FACEBOOK_WATCH: () => fe,
    MATCH_URL_KALTURA: () => V,
    MATCH_URL_MIXCLOUD: () => P,
    MATCH_URL_MUX: () => $,
    MATCH_URL_SOUNDCLOUD: () => ae,
    MATCH_URL_STREAMABLE: () => le,
    MATCH_URL_TWITCH_CHANNEL: () => D,
    MATCH_URL_TWITCH_VIDEO: () => I,
    MATCH_URL_VIDYARD: () => A,
    MATCH_URL_VIMEO: () => N,
    MATCH_URL_WISTIA: () => se,
    MATCH_URL_YOUTUBE: () => q,
    VIDEO_EXTENSIONS: () => Y,
    canPlay: () => ie,
  }),
    (Qs = z(F));
  var S = zl();
  const q =
      /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    ae = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
    N = /vimeo\.com\/(?!progressive_redirect).+/,
    $ = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    ne =
      /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
    fe = /^https?:\/\/fb\.watch\/.+$/,
    le = /streamable\.com\/([a-z0-9]+)$/,
    se =
      /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    I = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
    D = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
    T =
      /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
    P = /mixcloud\.com\/([^/]+\/[^/]+)/,
    A = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
    V =
      /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
    re =
      /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    Y = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    O = /\.(m3u8)($|\?)/i,
    W = /\.(mpd)($|\?)/i,
    J = /\.(flv)($|\?)/i,
    b = (_) => {
      if (_ instanceof Array) {
        for (const Q of _)
          if ((typeof Q == "string" && b(Q)) || b(Q.src)) return !0;
        return !1;
      }
      return (0, S.isMediaStream)(_) || (0, S.isBlobUrl)(_)
        ? !0
        : re.test(_) || Y.test(_) || O.test(_) || W.test(_) || J.test(_);
    },
    ie = {
      youtube: (_) =>
        _ instanceof Array ? _.every((Q) => q.test(Q)) : q.test(_),
      soundcloud: (_) => ae.test(_) && !re.test(_),
      vimeo: (_) => N.test(_) && !Y.test(_) && !O.test(_),
      mux: (_) => $.test(_),
      facebook: (_) => ne.test(_) || fe.test(_),
      streamable: (_) => le.test(_),
      wistia: (_) => se.test(_),
      twitch: (_) => I.test(_) || D.test(_),
      dailymotion: (_) => T.test(_),
      mixcloud: (_) => P.test(_),
      vidyard: (_) => A.test(_),
      kaltura: (_) => V.test(_),
      file: b,
    };
  return Qs;
}
var $s, cc;
function Kp() {
  if (cc) return $s;
  cc = 1;
  var y = Object.create,
    v = Object.defineProperty,
    f = Object.getOwnPropertyDescriptor,
    U = Object.getOwnPropertyNames,
    L = Object.getPrototypeOf,
    j = Object.prototype.hasOwnProperty,
    z = (Y, O, W) =>
      O in Y
        ? v(Y, O, { enumerable: !0, configurable: !0, writable: !0, value: W })
        : (Y[O] = W),
    F = (Y, O) => {
      for (var W in O) v(Y, W, { get: O[W], enumerable: !0 });
    },
    S = (Y, O, W, J) => {
      if ((O && typeof O == "object") || typeof O == "function")
        for (let b of U(O))
          !j.call(Y, b) &&
            b !== W &&
            v(Y, b, {
              get: () => O[b],
              enumerable: !(J = f(O, b)) || J.enumerable,
            });
      return Y;
    },
    q = (Y, O, W) => (
      (W = Y != null ? y(L(Y)) : {}),
      S(
        !Y || !Y.__esModule ? v(W, "default", { value: Y, enumerable: !0 }) : W,
        Y
      )
    ),
    ae = (Y) => S(v({}, "__esModule", { value: !0 }), Y),
    N = (Y, O, W) => (z(Y, typeof O != "symbol" ? O + "" : O, W), W),
    $ = {};
  F($, { default: () => re }), ($s = ae($));
  var ne = q(dn()),
    fe = zl(),
    le = $p();
  const se = "https://www.youtube.com/iframe_api",
    I = "YT",
    D = "onYouTubeIframeAPIReady",
    T = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
    P = /user\/([a-zA-Z0-9_-]+)\/?/,
    A = /youtube-nocookie\.com/,
    V = "https://www.youtube-nocookie.com";
  class re extends ne.Component {
    constructor() {
      super(...arguments),
        N(this, "callPlayer", fe.callPlayer),
        N(this, "parsePlaylist", (O) => {
          if (O instanceof Array)
            return {
              listType: "playlist",
              playlist: O.map(this.getID).join(","),
            };
          if (T.test(O)) {
            const [, W] = O.match(T);
            return { listType: "playlist", list: W.replace(/^UC/, "UU") };
          }
          if (P.test(O)) {
            const [, W] = O.match(P);
            return { listType: "user_uploads", list: W };
          }
          return {};
        }),
        N(this, "onStateChange", (O) => {
          const { data: W } = O,
            {
              onPlay: J,
              onPause: b,
              onBuffer: ie,
              onBufferEnd: _,
              onEnded: Q,
              onReady: he,
              loop: me,
              config: { playerVars: R, onUnstarted: x },
            } = this.props,
            {
              UNSTARTED: w,
              PLAYING: c,
              PAUSED: g,
              BUFFERING: G,
              ENDED: ue,
              CUED: ce,
            } = window[I].PlayerState;
          if (
            (W === w && x(),
            W === c && (J(), _()),
            W === g && b(),
            W === G && ie(),
            W === ue)
          ) {
            const pe = !!this.callPlayer("getPlaylist");
            me && !pe && (R.start ? this.seekTo(R.start) : this.play()), Q();
          }
          W === ce && he();
        }),
        N(this, "mute", () => {
          this.callPlayer("mute");
        }),
        N(this, "unmute", () => {
          this.callPlayer("unMute");
        }),
        N(this, "ref", (O) => {
          this.container = O;
        });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    getID(O) {
      return !O || O instanceof Array || T.test(O)
        ? null
        : O.match(le.MATCH_URL_YOUTUBE)[1];
    }
    load(O, W) {
      const {
          playing: J,
          muted: b,
          playsinline: ie,
          controls: _,
          loop: Q,
          config: he,
          onError: me,
        } = this.props,
        { playerVars: R, embedOptions: x } = he,
        w = this.getID(O);
      if (W) {
        if (T.test(O) || P.test(O) || O instanceof Array) {
          this.player.loadPlaylist(this.parsePlaylist(O));
          return;
        }
        this.player.cueVideoById({
          videoId: w,
          startSeconds: (0, fe.parseStartTime)(O) || R.start,
          endSeconds: (0, fe.parseEndTime)(O) || R.end,
        });
        return;
      }
      (0, fe.getSDK)(se, I, D, (c) => c.loaded).then((c) => {
        this.container &&
          (this.player = new c.Player(this.container, {
            width: "100%",
            height: "100%",
            videoId: w,
            playerVars: {
              autoplay: J ? 1 : 0,
              mute: b ? 1 : 0,
              controls: _ ? 1 : 0,
              start: (0, fe.parseStartTime)(O),
              end: (0, fe.parseEndTime)(O),
              origin: window.location.origin,
              playsinline: ie ? 1 : 0,
              ...this.parsePlaylist(O),
              ...R,
            },
            events: {
              onReady: () => {
                Q && this.player.setLoop(!0), this.props.onReady();
              },
              onPlaybackRateChange: (g) =>
                this.props.onPlaybackRateChange(g.data),
              onPlaybackQualityChange: (g) =>
                this.props.onPlaybackQualityChange(g),
              onStateChange: this.onStateChange,
              onError: (g) => me(g.data),
            },
            host: A.test(O) ? V : void 0,
            ...x,
          }));
      }, me),
        x.events &&
          console.warn(
            "Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause"
          );
    }
    play() {
      this.callPlayer("playVideo");
    }
    pause() {
      this.callPlayer("pauseVideo");
    }
    stop() {
      document.body.contains(this.callPlayer("getIframe")) &&
        this.callPlayer("stopVideo");
    }
    seekTo(O, W = !1) {
      this.callPlayer("seekTo", O), !W && !this.props.playing && this.pause();
    }
    setVolume(O) {
      this.callPlayer("setVolume", O * 100);
    }
    setPlaybackRate(O) {
      this.callPlayer("setPlaybackRate", O);
    }
    setLoop(O) {
      this.callPlayer("setLoop", O);
    }
    getDuration() {
      return this.callPlayer("getDuration");
    }
    getCurrentTime() {
      return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
      return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
    }
    render() {
      const { display: O } = this.props,
        W = { width: "100%", height: "100%", display: O };
      return ne.default.createElement(
        "div",
        { style: W },
        ne.default.createElement("div", { ref: this.ref })
      );
    }
  }
  return (
    N(re, "displayName", "YouTube"), N(re, "canPlay", le.canPlay.youtube), $s
  );
}
var Ks, dc;
function Yp() {
  if (dc) return Ks;
  dc = 1;
  var y = Qp().createReactPlayer,
    v = Kp().default;
  return (Ks = y([{ key: "youtube", canPlay: v.canPlay, lazyPlayer: v }])), Ks;
}
var Xp = Yp();
const Zp = df(Xp),
  bp = () =>
    s.jsx(Zp, {
      url: "https://www.youtube.com/watch?v=DiU4ibWzEpg&t=41s",
      playing: !0,
      controls: !0,
    }),
  Gp = () => {
    const [y, v] = cn.useState(""),
      f = cn.useRef(!1),
      U = cn.useRef(null);
    return (
      cn.useEffect(() => {
        ((j) => {
          f.current ||
            ((f.current = !0),
            v(""),
            j.split("").forEach((z, F) => {
              setTimeout(() => {
                v((S) => S + z),
                  F === j.length - 1 &&
                    setTimeout(() => {
                      f.current = !1;
                    }, 500);
              }, 80 * F);
            }));
        })("Made by React");
      }, []),
      s.jsxs("div", {
        className: "video-container bg-dark",
        id: "top",
        children: [
          s.jsx("div", {
            className: "text-white",
            style: { whiteSpace: "nowrap" },
            children: s.jsx("h2", {
              className: "copy",
              children: s.jsx("p", { ref: U, children: y }),
            }),
          }),
          s.jsx(bp, {}),
        ],
      })
    );
  },
  qp = () =>
    s.jsxs("div", {
      className: "bg-white",
      children: [s.jsx(Gp, {}), s.jsx(Tp, {}), s.jsx(Op, {})],
    }),
  Jp = () => s.jsx(qp, {});
jf.createRoot(document.getElementById("root")).render(
  s.jsx(cn.StrictMode, { children: s.jsx(Jp, {}) })
);
export { df as g, dn as r };
