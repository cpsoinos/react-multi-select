var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import * as React from "react";
import React__default, { createContext, forwardRef, useEffect, useCallback, useMemo, useContext, useState, useRef, useReducer, Fragment as Fragment$1, useLayoutEffect, isValidElement, cloneElement, createElement, createRef } from "react";
import { createPortal } from "react-dom";
function k() {
  let e = [], t = [], r = { enqueue(o) {
    t.push(o);
  }, requestAnimationFrame(...o) {
    let n2 = requestAnimationFrame(...o);
    r.add(() => cancelAnimationFrame(n2));
  }, nextFrame(...o) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n2 = setTimeout(...o);
    r.add(() => clearTimeout(n2));
  }, add(o) {
    e.push(o);
  }, dispose() {
    for (let o of e.splice(0))
      o();
  }, async workQueue() {
    for (let o of t.splice(0))
      await o();
  } };
  return r;
}
function Q() {
  let [e] = useState(k);
  return useEffect(() => () => e.dispose(), [e]), e;
}
var x = typeof window != "undefined" ? useLayoutEffect : useEffect;
var yt = { serverHandoffComplete: false };
function q$1() {
  let [e, t] = useState(yt.serverHandoffComplete);
  return useEffect(() => {
    e !== true && t(true);
  }, [e]), useEffect(() => {
    yt.serverHandoffComplete === false && (yt.serverHandoffComplete = true);
  }, []), e;
}
var or = 0;
function to() {
  return ++or;
}
function A() {
  let e = q$1(), [t, r] = useState(e ? to : null);
  return x(() => {
    t === null && r(to());
  }, [t]), t != null ? "" + t : void 0;
}
function ke(e) {
  let t = useRef(e);
  return useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function ee(e, t) {
  let [r, o] = useState(e), n2 = ke(e);
  return x(() => o(n2.current), [n2, o, ...t]), r;
}
function I(...e) {
  let t = useRef(e);
  return useEffect(() => {
    t.current = e;
  }, [e]), useCallback((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : o.current = r);
  }, [t]);
}
function S(e, t, ...r) {
  if (e in t) {
    let n2 = t[e];
    return typeof n2 == "function" ? n2(...r) : n2;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n2) => `"${n2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, S), o;
}
function E({ props: e, slot: t, defaultTag: r, features: o, visible: n2 = true, name: i }) {
  if (n2)
    return _e(e, t, r, i);
  let a = o != null ? o : 0;
  if (a & 2) {
    let _a = e, { static: l = false } = _a, s = __objRest(_a, ["static"]);
    if (l)
      return _e(s, t, r, i);
  }
  if (a & 1) {
    let _b = e, { unmount: l = true } = _b, s = __objRest(_b, ["unmount"]);
    return S(l ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return _e(__spreadProps(__spreadValues({}, s), { hidden: true, style: { display: "none" } }), t, r, i);
    } });
  }
  return _e(e, t, r, i);
}
function _e(e, t = {}, r, o) {
  let _a = gt(e, ["unmount", "static"]), { as: n2 = r, children: i, refName: a = "ref" } = _a, l = __objRest(_a, ["as", "children", "refName"]), s = e.ref !== void 0 ? { [a]: e.ref } : {}, u = typeof i == "function" ? i(t) : i;
  if (l.className && typeof l.className == "function" && (l.className = l.className(t)), n2 === Fragment$1 && Object.keys(l).length > 0) {
    if (!isValidElement(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
    return cloneElement(u, Object.assign({}, fr(mr(gt(l, ["ref"])), u.props, ["onClick"]), s));
  }
  return createElement(n2, Object.assign({}, gt(l, ["ref"]), n2 !== Fragment$1 && s), u);
}
function fr(e, t, r) {
  let o = Object.assign({}, e);
  for (let n2 of r)
    e[n2] !== void 0 && t[n2] !== void 0 && Object.assign(o, { [n2](i) {
      i.defaultPrevented || e[n2](i), i.defaultPrevented || t[n2](i);
    } });
  return o;
}
function D(e) {
  var t;
  return Object.assign(forwardRef(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function mr(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function gt(e, t = []) {
  let r = Object.assign({}, e);
  for (let o of t)
    o in r && delete r[o];
  return r;
}
function br(e) {
  throw new Error("Unexpected object: " + e);
}
function ae(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n2 = o != null ? o : -1, i = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((a) => !t.resolveDisabled(a));
      case 1: {
        let a = r.slice().reverse().findIndex((l, s, u) => n2 !== -1 && u.length - s - 1 >= n2 ? false : !t.resolveDisabled(l));
        return a === -1 ? a : r.length - 1 - a;
      }
      case 2:
        return r.findIndex((a, l) => l <= n2 ? false : !t.resolveDisabled(a));
      case 3: {
        let a = r.slice().reverse().findIndex((l) => !t.resolveDisabled(l));
        return a === -1 ? a : r.length - 1 - a;
      }
      case 4:
        return r.findIndex((a) => t.resolveId(a) === e.id);
      case 5:
        return null;
      default:
        br(e);
    }
  })();
  return i === -1 ? o : i;
}
function G(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let o = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return o && Tr(r) ? false : o;
}
function Tr(e) {
  if (!e)
    return false;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return false;
    t = t.previousElementSibling;
  }
  return true;
}
function w(e, t, r) {
  let o = useRef(t);
  o.current = t, useEffect(() => {
    function n2(i) {
      o.current.call(window, i);
    }
    return window.addEventListener(e, n2, r), () => window.removeEventListener(e, n2, r);
  }, [e, r]);
}
var Pt = createContext(null);
Pt.displayName = "OpenClosedContext";
function _() {
  return useContext(Pt);
}
function W({ value: e, children: t }) {
  return React__default.createElement(Pt.Provider, { value: e }, t);
}
function ro(e) {
  var r;
  if (e.type)
    return e.type;
  let t = (r = e.as) != null ? r : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function U(e, t) {
  let [r, o] = useState(() => ro(e));
  return x(() => {
    o(ro(e));
  }, [e.type, e.as]), x(() => {
    r || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button");
  }, [r, t]), r;
}
function se({ container: e, accept: t, walk: r, enabled: o = true }) {
  let n2 = useRef(t), i = useRef(r);
  useEffect(() => {
    n2.current = t, i.current = r;
  }, [t, r]), x(() => {
    if (!e || !o)
      return;
    let a = n2.current, l = i.current, s = Object.assign((c) => a(c), { acceptNode: a }), u = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, false);
    for (; u.nextNode(); )
      l(u.currentNode);
  }, [e, o, n2, i]);
}
var Ar = { [1](e) {
  return e.disabled || e.comboboxState === 1 ? e : __spreadProps(__spreadValues({}, e), { activeOptionIndex: null, comboboxState: 1 });
}, [0](e) {
  return e.disabled || e.comboboxState === 0 ? e : __spreadProps(__spreadValues({}, e), { comboboxState: 0 });
}, [2](e, t) {
  return e.disabled === t.disabled ? e : __spreadProps(__spreadValues({}, e), { disabled: t.disabled });
}, [3](e, t) {
  if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && e.comboboxState === 1)
    return e;
  let r = ae(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.activeOptionIndex === r ? e : __spreadProps(__spreadValues({}, e), { activeOptionIndex: r });
}, [4]: (e, t) => {
  var i;
  let r = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, o = Array.from((i = e.optionsRef.current) == null ? void 0 : i.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a, l, s) => Object.assign(a, { [l.id]: s }), {}), n2 = [...e.options, { id: t.id, dataRef: t.dataRef }].sort((a, l) => o[a.id] - o[l.id]);
  return __spreadProps(__spreadValues({}, e), { options: n2, activeOptionIndex: (() => r === null ? null : n2.indexOf(r))() });
}, [5]: (e, t) => {
  let r = e.options.slice(), o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null, n2 = r.findIndex((i) => i.id === t.id);
  return n2 !== -1 && r.splice(n2, 1), __spreadProps(__spreadValues({}, e), { options: r, activeOptionIndex: (() => n2 === e.activeOptionIndex || o === null ? null : r.indexOf(o))() });
} }, vt = createContext(null);
vt.displayName = "ComboboxContext";
function pe(e) {
  let t = useContext(vt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pe), r;
  }
  return t;
}
var Rt = createContext(null);
Rt.displayName = "ComboboxActions";
function Ue() {
  let e = useContext(Rt);
  if (e === null) {
    let t = new Error("ComboboxActions is missing a parent <Combobox /> component.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ue), t;
  }
  return e;
}
function hr(e, t) {
  return S(t.type, Ar, e, t);
}
var Or = Fragment$1, Ir = D(function(t, r) {
  let _a = t, { value: o, onChange: n2, disabled: i = false } = _a, a = __objRest(_a, ["value", "onChange", "disabled"]), l = useRef({ value: o, onChange: n2 }), s = useRef({ static: false, hold: false }), u = useRef({ displayValue: void 0 }), c = useReducer(hr, { comboboxState: 1, comboboxPropsRef: l, optionsPropsRef: s, inputPropsRef: u, labelRef: createRef(), inputRef: createRef(), buttonRef: createRef(), optionsRef: createRef(), disabled: i, options: [], activeOptionIndex: null }), [{ comboboxState: m2, options: b, activeOptionIndex: T, optionsRef: y, inputRef: p2, buttonRef: f2 }, d] = c;
  x(() => {
    l.current.value = o;
  }, [o, l]), x(() => {
    l.current.onChange = n2;
  }, [n2, l]), x(() => d({ type: 2, disabled: i }), [i]), w("mousedown", (O) => {
    var N, K, V;
    let L = O.target;
    m2 === 0 && (((N = f2.current) == null ? void 0 : N.contains(L)) || ((K = p2.current) == null ? void 0 : K.contains(L)) || ((V = y.current) == null ? void 0 : V.contains(L)) || d({ type: 1 }));
  });
  let P = T === null ? null : b[T].dataRef.current.value, C = useMemo(() => ({ open: m2 === 0, disabled: i, activeIndex: T, activeOption: P }), [m2, i, b, T]), R = useCallback(() => {
    if (!p2.current || o === void 0)
      return;
    let O = u.current.displayValue;
    typeof O == "function" ? p2.current.value = O(o) : typeof o == "string" && (p2.current.value = o);
  }, [o, p2, u]), g2 = useCallback((O) => {
    let L = b.find((K) => K.id === O);
    if (!L)
      return;
    let { dataRef: N } = L;
    l.current.onChange(N.current.value), R();
  }, [b, l, p2]), v = useCallback(() => {
    if (T !== null) {
      let { dataRef: O } = b[T];
      l.current.onChange(O.current.value), R();
    }
  }, [T, b, l, p2]), h = useMemo(() => ({ selectOption: g2, selectActiveOption: v }), [g2, v]);
  return x(() => {
    m2 === 1 && R();
  }, [R, m2]), x(R, [R]), React__default.createElement(Rt.Provider, { value: h }, React__default.createElement(vt.Provider, { value: c }, React__default.createElement(W, { value: S(m2, { [0]: 0, [1]: 1 }) }, E({ props: r === null ? a : __spreadProps(__spreadValues({}, a), { ref: r }), slot: C, defaultTag: Or, name: "Combobox" }))));
}), Lr = "input", Dr = D(function(t, r) {
  var R, g2;
  let _a = t, { value: o, onChange: n2, displayValue: i } = _a, a = __objRest(_a, ["value", "onChange", "displayValue"]), [l, s] = pe("Combobox.Input"), u = Ue(), c = I(l.inputRef, r), m2 = l.inputPropsRef, b = `headlessui-combobox-input-${A()}`, T = Q(), y = ke(n2);
  x(() => {
    m2.current.displayValue = i;
  }, [i, m2]);
  let p2 = useCallback((v) => {
    switch (v.key) {
      case "Enter":
        v.preventDefault(), v.stopPropagation(), u.selectActiveOption(), s({ type: 1 });
        break;
      case "ArrowDown":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, { [0]: () => s({ type: 3, focus: 2 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l.comboboxPropsRef.current.value || s({ type: 3, focus: 0 });
          });
        } });
      case "ArrowUp":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, { [0]: () => s({ type: 3, focus: 1 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l.comboboxPropsRef.current.value || s({ type: 3, focus: 3 });
          });
        } });
      case "Home":
      case "PageUp":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 0 });
      case "End":
      case "PageDown":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 3 });
      case "Escape":
        return v.preventDefault(), l.optionsRef.current && !l.optionsPropsRef.current.static && v.stopPropagation(), s({ type: 1 });
      case "Tab":
        u.selectActiveOption(), s({ type: 1 });
        break;
    }
  }, [T, s, l, u]), f2 = useCallback((v) => {
    var h;
    s({ type: 0 }), (h = y.current) == null || h.call(y, v);
  }, [s, y]), d = ee(() => {
    if (!!l.labelRef.current)
      return [l.labelRef.current.id].join(" ");
  }, [l.labelRef.current]), P = useMemo(() => ({ open: l.comboboxState === 0, disabled: l.disabled }), [l]), C = { ref: c, id: b, role: "combobox", type: "text", "aria-controls": (R = l.optionsRef.current) == null ? void 0 : R.id, "aria-expanded": l.disabled ? void 0 : l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null || (g2 = l.options[l.activeOptionIndex]) == null ? void 0 : g2.id, "aria-labelledby": d, disabled: l.disabled, onKeyDown: p2, onChange: f2 };
  return E({ props: __spreadValues(__spreadValues({}, a), C), slot: P, defaultTag: Lr, name: "Combobox.Input" });
}), Mr = "button", Fr = D(function(t, r) {
  var p2;
  let [o, n2] = pe("Combobox.Button"), i = Ue(), a = I(o.buttonRef, r), l = `headlessui-combobox-button-${A()}`, s = Q(), u = useCallback((f2) => {
    switch (f2.key) {
      case "ArrowDown":
        return f2.preventDefault(), f2.stopPropagation(), o.comboboxState === 1 && (n2({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n2({ type: 3, focus: 0 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "ArrowUp":
        return f2.preventDefault(), f2.stopPropagation(), o.comboboxState === 1 && (n2({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n2({ type: 3, focus: 3 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "Escape":
        return f2.preventDefault(), o.optionsRef.current && !o.optionsPropsRef.current.static && f2.stopPropagation(), n2({ type: 1 }), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
    }
  }, [s, n2, o, i]), c = useCallback((f2) => {
    if (G(f2.currentTarget))
      return f2.preventDefault();
    o.comboboxState === 0 ? n2({ type: 1 }) : (f2.preventDefault(), n2({ type: 0 })), s.nextFrame(() => {
      var d;
      return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    });
  }, [n2, s, o]), m2 = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, l].join(" ");
  }, [o.labelRef.current, l]), b = useMemo(() => ({ open: o.comboboxState === 0, disabled: o.disabled }), [o]), T = t, y = { ref: a, id: l, type: U(t, o.buttonRef), tabIndex: -1, "aria-haspopup": true, "aria-controls": (p2 = o.optionsRef.current) == null ? void 0 : p2.id, "aria-expanded": o.disabled ? void 0 : o.comboboxState === 0, "aria-labelledby": m2, disabled: o.disabled, onClick: c, onKeyDown: u };
  return E({ props: __spreadValues(__spreadValues({}, T), y), slot: b, defaultTag: Mr, name: "Combobox.Button" });
}), wr = "label";
function kr(e) {
  let [t] = pe("Combobox.Label"), r = `headlessui-combobox-label-${A()}`, o = useCallback(() => {
    var a;
    return (a = t.inputRef.current) == null ? void 0 : a.focus({ preventScroll: true });
  }, [t.inputRef]), n2 = useMemo(() => ({ open: t.comboboxState === 0, disabled: t.disabled }), [t]), i = { ref: t.labelRef, id: r, onClick: o };
  return E({ props: __spreadValues(__spreadValues({}, e), i), slot: n2, defaultTag: wr, name: "Combobox.Label" });
}
var _r = "ul", Gr = 1 | 2, Hr = D(function(t, r) {
  var y;
  let _a = t, { hold: o = false } = _a, n2 = __objRest(_a, ["hold"]), [i] = pe("Combobox.Options"), { optionsPropsRef: a } = i, l = I(i.optionsRef, r), s = `headlessui-combobox-options-${A()}`, u = _(), c = (() => u !== null ? u === 0 : i.comboboxState === 0)();
  x(() => {
    var p2;
    a.current.static = (p2 = t.static) != null ? p2 : false;
  }, [a, t.static]), x(() => {
    a.current.hold = o;
  }, [o, a]), se({ container: i.optionsRef.current, enabled: i.comboboxState === 0, accept(p2) {
    return p2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p2) {
    p2.setAttribute("role", "none");
  } });
  let m2 = ee(() => {
    var p2, f2, d;
    return (d = (p2 = i.labelRef.current) == null ? void 0 : p2.id) != null ? d : (f2 = i.buttonRef.current) == null ? void 0 : f2.id;
  }, [i.labelRef.current, i.buttonRef.current]), b = useMemo(() => ({ open: i.comboboxState === 0 }), [i]), T = { "aria-activedescendant": i.activeOptionIndex === null || (y = i.options[i.activeOptionIndex]) == null ? void 0 : y.id, "aria-labelledby": m2, role: "listbox", id: s, ref: l };
  return E({ props: __spreadValues(__spreadValues({}, n2), T), slot: b, defaultTag: _r, features: Gr, visible: c, name: "Combobox.Options" });
}), Ur = "li";
function Br(e) {
  let _a = e, { disabled: t = false, value: r } = _a, o = __objRest(_a, ["disabled", "value"]), [n2, i] = pe("Combobox.Option"), a = Ue(), l = `headlessui-combobox-option-${A()}`, s = n2.activeOptionIndex !== null ? n2.options[n2.activeOptionIndex].id === l : false, u = n2.comboboxPropsRef.current.value === r, c = useRef({ disabled: t, value: r });
  x(() => {
    c.current.disabled = t;
  }, [c, t]), x(() => {
    c.current.value = r;
  }, [c, r]), x(() => {
    var P, C;
    c.current.textValue = (C = (P = document.getElementById(l)) == null ? void 0 : P.textContent) == null ? void 0 : C.toLowerCase();
  }, [c, l]);
  let m2 = useCallback(() => a.selectOption(l), [a, l]);
  x(() => (i({ type: 4, id: l, dataRef: c }), () => i({ type: 5, id: l })), [c, l]), x(() => {
    n2.comboboxState === 0 && (!u || i({ type: 3, focus: 4, id: l }));
  }, [n2.comboboxState, u, l]), x(() => {
    if (n2.comboboxState !== 0 || !s)
      return;
    let P = k();
    return P.requestAnimationFrame(() => {
      var C, R;
      (R = (C = document.getElementById(l)) == null ? void 0 : C.scrollIntoView) == null || R.call(C, { block: "nearest" });
    }), P.dispose;
  }, [l, s, n2.comboboxState, n2.activeOptionIndex]);
  let b = useCallback((P) => {
    if (t)
      return P.preventDefault();
    m2(), i({ type: 1 }), k().nextFrame(() => {
      var C;
      return (C = n2.inputRef.current) == null ? void 0 : C.focus({ preventScroll: true });
    });
  }, [i, n2.inputRef, t, m2]), T = useCallback(() => {
    if (t)
      return i({ type: 3, focus: 5 });
    i({ type: 3, focus: 4, id: l });
  }, [t, l, i]), y = useCallback(() => {
    t || s || i({ type: 3, focus: 4, id: l });
  }, [t, s, l, i]), p2 = useCallback(() => {
    t || !s || n2.optionsPropsRef.current.hold || i({ type: 3, focus: 5 });
  }, [t, s, i, n2.comboboxState, n2.comboboxPropsRef]), f2 = useMemo(() => ({ active: s, selected: u, disabled: t }), [s, u, t]);
  return E({ props: __spreadValues(__spreadValues({}, o), { id: l, role: "option", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, "aria-selected": u === true ? true : void 0, disabled: void 0, onClick: b, onFocus: T, onPointerMove: y, onMouseMove: y, onPointerLeave: p2, onMouseLeave: p2 }), slot: f2, defaultTag: Ur, name: "Combobox.Option" });
}
Object.assign(Ir, { Input: Dr, Button: Fr, Label: kr, Options: Hr, Option: Br });
var Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
function xe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Et));
}
function de(e, t = 0) {
  return e === document.body ? false : S(t, { [0]() {
    return e.matches(Et);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Et))
        return true;
      r = r.parentElement;
    }
    return false;
  } });
}
function ce(e) {
  e == null || e.focus({ preventScroll: true });
}
function M(e, t) {
  let r = Array.isArray(e) ? e.slice().sort((c, m2) => {
    let b = c.compareDocumentPosition(m2);
    return b & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : b & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : xe(e), o = document.activeElement, n2 = (() => {
    if (t & (1 | 4))
      return 1;
    if (t & (2 | 8))
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, r.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, r.indexOf(o)) + 1;
    if (t & 8)
      return r.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = t & 32 ? { preventScroll: true } : {}, l = 0, s = r.length, u;
  do {
    if (l >= s || l + s <= 0)
      return 0;
    let c = i + l;
    if (t & 16)
      c = (c + s) % s;
    else {
      if (c < 0)
        return 3;
      if (c >= s)
        return 1;
    }
    u = r[c], u == null || u.focus(a), l += n2;
  } while (u !== document.activeElement);
  return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), 2;
}
function Be() {
  let e = useRef(false);
  return useEffect(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function Ne(e, t = 30, { initialFocus: r, containers: o } = {}) {
  let n2 = useRef(typeof window != "undefined" ? document.activeElement : null), i = useRef(null), a = Be(), l = Boolean(t & 16), s = Boolean(t & 2);
  useEffect(() => {
    !l || (n2.current = document.activeElement);
  }, [l]), useEffect(() => {
    if (!!l)
      return () => {
        ce(n2.current), n2.current = null;
      };
  }, [l]), useEffect(() => {
    if (!s || !e.current)
      return;
    let u = document.activeElement;
    if (r == null ? void 0 : r.current) {
      if ((r == null ? void 0 : r.current) === u) {
        i.current = u;
        return;
      }
    } else if (e.current.contains(u)) {
      i.current = u;
      return;
    }
    (r == null ? void 0 : r.current) ? ce(r.current) : M(e.current, 1) === 0 && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = document.activeElement;
  }, [e, r, s]), w("keydown", (u) => {
    !(t & 4) || !e.current || u.key === "Tab" && (u.preventDefault(), M(e.current, (u.shiftKey ? 2 : 4) | 16) === 2 && (i.current = document.activeElement));
  }), w("focus", (u) => {
    if (!(t & 8))
      return;
    let c = new Set(o == null ? void 0 : o.current);
    if (c.add(e), !c.size)
      return;
    let m2 = i.current;
    if (!m2 || !a.current)
      return;
    let b = u.target;
    b && b instanceof HTMLElement ? Kr(c, b) ? (i.current = b, ce(b)) : (u.preventDefault(), u.stopPropagation(), ce(m2)) : ce(i.current);
  }, true);
}
function Kr(e, t) {
  var r;
  for (let o of e)
    if ((r = o.current) == null ? void 0 : r.contains(t))
      return true;
  return false;
}
var fe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map();
function po(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function co(e) {
  let t = J.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function fo(e, t = true) {
  x(() => {
    if (!t || !e.current)
      return;
    let r = e.current;
    fe.add(r);
    for (let o of J.keys())
      o.contains(r) && (co(o), J.delete(o));
    return document.querySelectorAll("body > *").forEach((o) => {
      if (o instanceof HTMLElement) {
        for (let n2 of fe)
          if (o.contains(n2))
            return;
        fe.size === 1 && (J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o));
      }
    }), () => {
      if (fe.delete(r), fe.size > 0)
        document.querySelectorAll("body > *").forEach((o) => {
          if (o instanceof HTMLElement && !J.has(o)) {
            for (let n2 of fe)
              if (o.contains(n2))
                return;
            J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o);
          }
        });
      else
        for (let o of J.keys())
          co(o), J.delete(o);
    };
  }, [t]);
}
var mo = createContext(false);
function bo() {
  return useContext(mo);
}
function At(e) {
  return React__default.createElement(mo.Provider, { value: e.force }, e.children);
}
function Xr() {
  let e = bo(), t = useContext(Po), [r, o] = useState(() => {
    if (!e && t !== null || typeof window == "undefined")
      return null;
    let n2 = document.getElementById("headlessui-portal-root");
    if (n2)
      return n2;
    let i = document.createElement("div");
    return i.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i);
  });
  return useEffect(() => {
    r !== null && (document.body.contains(r) || document.body.appendChild(r));
  }, [r]), useEffect(() => {
    e || t !== null && o(t.current);
  }, [t, o, e]), r;
}
var Jr = Fragment$1;
function We(e) {
  let t = e, r = Xr(), [o] = useState(() => typeof window == "undefined" ? null : document.createElement("div")), n2 = q$1();
  return x(() => {
    if (!!r && !!o)
      return r.appendChild(o), () => {
        var i;
        !r || !o || (r.removeChild(o), r.childNodes.length <= 0 && ((i = r.parentElement) == null || i.removeChild(r)));
      };
  }, [r, o]), n2 ? !r || !o ? null : createPortal(E({ props: t, defaultTag: Jr, name: "Portal" }), o) : null;
}
var Zr = Fragment$1, Po = createContext(null);
function en(e) {
  let _a = e, { target: t } = _a, r = __objRest(_a, ["target"]);
  return React__default.createElement(Po.Provider, { value: t }, E({ props: r, defaultTag: Zr, name: "Popover.Group" }));
}
We.Group = en;
var vo = createContext(null);
function Ro() {
  let e = useContext(vo);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ro), t;
  }
  return e;
}
function re() {
  let [e, t] = useState([]);
  return [e.length > 0 ? e.join(" ") : void 0, useMemo(() => function(o) {
    let n2 = useCallback((a) => (t((l) => [...l, a]), () => t((l) => {
      let s = l.slice(), u = s.indexOf(a);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i = useMemo(() => ({ register: n2, slot: o.slot, name: o.name, props: o.props }), [n2, o.slot, o.name, o.props]);
    return React__default.createElement(vo.Provider, { value: i }, o.children);
  }, [t])];
}
var an = "p";
function me(e) {
  let t = Ro(), r = `headlessui-description-${A()}`;
  x(() => t.register(r), [r, t.register]);
  let o = e, n2 = __spreadProps(__spreadValues({}, t.props), { id: r });
  return E({ props: __spreadValues(__spreadValues({}, o), n2), slot: t.slot || {}, defaultTag: an, name: t.name || "Description" });
}
var ht = createContext(() => {
});
ht.displayName = "StackContext";
function cn() {
  return useContext(ht);
}
function Eo({ children: e, onUpdate: t, type: r, element: o }) {
  let n2 = cn(), i = useCallback((...a) => {
    t == null || t(...a), n2(...a);
  }, [n2, t]);
  return x(() => (i(0, r, o), () => i(1, r, o)), [i, r, o]), React__default.createElement(ht.Provider, { value: i }, e);
}
var yn = { [0](e, t) {
  return e.titleId === t.id ? e : __spreadProps(__spreadValues({}, e), { titleId: t.id });
} }, Ve = createContext(null);
Ve.displayName = "DialogContext";
function It(e) {
  let t = useContext(Ve);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, It), r;
  }
  return t;
}
function gn(e, t) {
  return S(t.type, yn, e, t);
}
var Pn = "div", xn = 1 | 2, vn = D(function(t, r) {
  let _a = t, { open: o, onClose: n2, initialFocus: i } = _a, a = __objRest(_a, ["open", "onClose", "initialFocus"]), [l, s] = useState(0), u = _();
  o === void 0 && u !== null && (o = S(u, { [0]: true, [1]: false }));
  let c = useRef(/* @__PURE__ */ new Set()), m2 = useRef(null), b = I(m2, r), T = t.hasOwnProperty("open") || u !== null, y = t.hasOwnProperty("onClose");
  if (!T && !y)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof o != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
  if (typeof n2 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n2}`);
  let p2 = o ? 0 : 1, f2 = (() => u !== null ? u === 0 : p2 === 0)(), [d, P] = useReducer(gn, { titleId: null, descriptionId: null }), C = useCallback(() => n2(false), [n2]), R = useCallback((F) => P({ type: 0, id: F }), [P]), v = q$1() && p2 === 0, h = l > 1, O = useContext(Ve) !== null;
  Ne(m2, v ? S(h ? "parent" : "leaf", { parent: 16, leaf: 30 }) : 1, { initialFocus: i, containers: c }), fo(m2, h ? v : false), w("mousedown", (F) => {
    var H;
    let $ = F.target;
    p2 === 0 && (h || ((H = m2.current) == null ? void 0 : H.contains($)) || C());
  }), w("keydown", (F) => {
    F.key === "Escape" && p2 === 0 && (h || (F.preventDefault(), F.stopPropagation(), C()));
  }), useEffect(() => {
    if (p2 !== 0 || O)
      return;
    let F = document.documentElement.style.overflow, $ = document.documentElement.style.paddingRight, H = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${H}px`, () => {
      document.documentElement.style.overflow = F, document.documentElement.style.paddingRight = $;
    };
  }, [p2, O]), useEffect(() => {
    if (p2 !== 0 || !m2.current)
      return;
    let F = new IntersectionObserver(($) => {
      for (let H of $)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && C();
    });
    return F.observe(m2.current), () => F.disconnect();
  }, [p2, m2, C]);
  let [N, K] = re(), V = `headlessui-dialog-${A()}`, Fe = useMemo(() => [{ dialogState: p2, close: C, setTitleId: R }, d], [p2, d, C, R]), ge = useMemo(() => ({ open: p2 === 0 }), [p2]), we = { ref: b, id: V, role: "dialog", "aria-modal": p2 === 0 ? true : void 0, "aria-labelledby": d.titleId, "aria-describedby": N, onClick(F) {
    F.stopPropagation();
  } }, X = a;
  return React__default.createElement(Eo, { type: "Dialog", element: m2, onUpdate: useCallback((F, $, H) => {
    $ === "Dialog" && S(F, { [0]() {
      c.current.add(H), s((Pe) => Pe + 1);
    }, [1]() {
      c.current.add(H), s((Pe) => Pe - 1);
    } });
  }, []) }, React__default.createElement(At, { force: true }, React__default.createElement(We, null, React__default.createElement(Ve.Provider, { value: Fe }, React__default.createElement(We.Group, { target: m2 }, React__default.createElement(At, { force: false }, React__default.createElement(K, { slot: ge, name: "Dialog.Description" }, E({ props: __spreadValues(__spreadValues({}, X), we), slot: ge, defaultTag: Pn, features: xn, visible: f2, name: "Dialog" }))))))));
}), Rn = "div", En = D(function(t, r) {
  let [{ dialogState: o, close: n2 }] = It("Dialog.Overlay"), i = I(r), a = `headlessui-dialog-overlay-${A()}`, l = useCallback((m2) => {
    if (m2.target === m2.currentTarget) {
      if (G(m2.currentTarget))
        return m2.preventDefault();
      m2.preventDefault(), m2.stopPropagation(), n2();
    }
  }, [n2]), s = useMemo(() => ({ open: o === 0 }), [o]);
  return E({ props: __spreadValues(__spreadValues({}, t), { ref: i, id: a, "aria-hidden": true, onClick: l }), slot: s, defaultTag: Rn, name: "Dialog.Overlay" });
}), Cn = "h2";
function Sn(e) {
  let [{ dialogState: t, setTitleId: r }] = It("Dialog.Title"), o = `headlessui-dialog-title-${A()}`;
  useEffect(() => (r(o), () => r(null)), [o, r]);
  let n2 = useMemo(() => ({ open: t === 0 }), [t]);
  return E({ props: __spreadValues(__spreadValues({}, e), { id: o }), slot: n2, defaultTag: Cn, name: "Dialog.Title" });
}
var An = Object.assign(vn, { Overlay: En, Title: Sn, Description: me });
var Ln = { [0]: (e) => __spreadProps(__spreadValues({}, e), { disclosureState: S(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : __spreadProps(__spreadValues({}, e), { disclosureState: 1 }), [4](e) {
  return e.linkedPanel === true ? e : __spreadProps(__spreadValues({}, e), { linkedPanel: true });
}, [5](e) {
  return e.linkedPanel === false ? e : __spreadProps(__spreadValues({}, e), { linkedPanel: false });
}, [2](e, t) {
  return e.buttonId === t.buttonId ? e : __spreadProps(__spreadValues({}, e), { buttonId: t.buttonId });
}, [3](e, t) {
  return e.panelId === t.panelId ? e : __spreadProps(__spreadValues({}, e), { panelId: t.panelId });
} }, Mt = createContext(null);
Mt.displayName = "DisclosureContext";
function Ft(e) {
  let t = useContext(Mt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ft), r;
  }
  return t;
}
var wt = createContext(null);
wt.displayName = "DisclosureAPIContext";
function Ao(e) {
  let t = useContext(wt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ao), r;
  }
  return t;
}
var kt = createContext(null);
kt.displayName = "DisclosurePanelContext";
function Dn() {
  return useContext(kt);
}
function Mn(e, t) {
  return S(t.type, Ln, e, t);
}
var Fn = Fragment$1;
function Ye(e) {
  let _a = e, { defaultOpen: t = false } = _a, r = __objRest(_a, ["defaultOpen"]), o = `headlessui-disclosure-button-${A()}`, n2 = `headlessui-disclosure-panel-${A()}`, i = useReducer(Mn, { disclosureState: t ? 0 : 1, linkedPanel: false, buttonId: o, panelId: n2 }), [{ disclosureState: a }, l] = i;
  useEffect(() => l({ type: 2, buttonId: o }), [o, l]), useEffect(() => l({ type: 3, panelId: n2 }), [n2, l]);
  let s = useCallback((m2) => {
    l({ type: 1 });
    let b = (() => m2 ? m2 instanceof HTMLElement ? m2 : m2.current instanceof HTMLElement ? m2.current : document.getElementById(o) : document.getElementById(o))();
    b == null || b.focus();
  }, [l, o]), u = useMemo(() => ({ close: s }), [s]), c = useMemo(() => ({ open: a === 0, close: s }), [a, s]);
  return React__default.createElement(Mt.Provider, { value: i }, React__default.createElement(wt.Provider, { value: u }, React__default.createElement(W, { value: S(a, { [0]: 0, [1]: 1 }) }, E({ props: r, slot: c, defaultTag: Fn, name: "Disclosure" }))));
}
var wn = "button", kn = D(function(t, r) {
  let [o, n2] = Ft("Disclosure.Button"), i = useRef(null), a = I(i, r), l = Dn(), s = l === null ? false : l === o.panelId, u = useCallback((f2) => {
    var d;
    if (s) {
      if (o.disclosureState === 1)
        return;
      switch (f2.key) {
        case " ":
        case "Enter":
          f2.preventDefault(), f2.stopPropagation(), n2({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus();
          break;
      }
    } else
      switch (f2.key) {
        case " ":
        case "Enter":
          f2.preventDefault(), f2.stopPropagation(), n2({ type: 0 });
          break;
      }
  }, [n2, s, o.disclosureState, o.buttonId]), c = useCallback((f2) => {
    switch (f2.key) {
      case " ":
        f2.preventDefault();
        break;
    }
  }, []), m2 = useCallback((f2) => {
    var d;
    G(f2.currentTarget) || t.disabled || (s ? (n2({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus()) : n2({ type: 0 }));
  }, [n2, t.disabled, o.buttonId, s]), b = useMemo(() => ({ open: o.disclosureState === 0 }), [o]), T = U(t, i), y = t, p2 = s ? { ref: a, type: T, onKeyDown: u, onClick: m2 } : { ref: a, id: o.buttonId, type: T, "aria-expanded": t.disabled ? void 0 : o.disclosureState === 0, "aria-controls": o.linkedPanel ? o.panelId : void 0, onKeyDown: u, onKeyUp: c, onClick: m2 };
  return E({ props: __spreadValues(__spreadValues({}, y), p2), slot: b, defaultTag: wn, name: "Disclosure.Button" });
}), _n = "div", Gn = 1 | 2, Hn = D(function(t, r) {
  let [o, n2] = Ft("Disclosure.Panel"), { close: i } = Ao("Disclosure.Panel"), a = I(r, () => {
    o.linkedPanel || n2({ type: 4 });
  }), l = _(), s = (() => l !== null ? l === 0 : o.disclosureState === 0)();
  useEffect(() => () => n2({ type: 5 }), [n2]), useEffect(() => {
    var b;
    o.disclosureState === 1 && ((b = t.unmount) != null ? b : true) && n2({ type: 5 });
  }, [o.disclosureState, t.unmount, n2]);
  let u = useMemo(() => ({ open: o.disclosureState === 0, close: i }), [o, i]), c = { ref: a, id: o.panelId }, m2 = t;
  return React__default.createElement(kt.Provider, { value: o.panelId }, E({ props: __spreadValues(__spreadValues({}, m2), c), slot: u, defaultTag: _n, features: Gn, visible: s, name: "Disclosure.Panel" }));
});
Ye.Button = kn;
Ye.Panel = Hn;
var $n = { [1](e) {
  return e.disabled || e.listboxState === 1 ? e : __spreadProps(__spreadValues({}, e), { activeOptionIndex: null, listboxState: 1 });
}, [0](e) {
  return e.disabled || e.listboxState === 0 ? e : __spreadProps(__spreadValues({}, e), { listboxState: 0 });
}, [2](e, t) {
  return e.disabled === t.disabled ? e : __spreadProps(__spreadValues({}, e), { disabled: t.disabled });
}, [3](e, t) {
  return e.orientation === t.orientation ? e : __spreadProps(__spreadValues({}, e), { orientation: t.orientation });
}, [4](e, t) {
  if (e.disabled || e.listboxState === 1)
    return e;
  let r = ae(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeOptionIndex === r ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "", activeOptionIndex: r });
}, [5]: (e, t) => {
  if (e.disabled || e.listboxState === 1)
    return e;
  let o = e.searchQuery !== "" ? 0 : 1, n2 = e.searchQuery + t.value.toLowerCase(), a = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + o).concat(e.options.slice(0, e.activeOptionIndex + o)) : e.options).find((s) => {
    var u;
    return !s.dataRef.current.disabled && ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n2));
  }), l = a ? e.options.indexOf(a) : -1;
  return l === -1 || l === e.activeOptionIndex ? __spreadProps(__spreadValues({}, e), { searchQuery: n2 }) : __spreadProps(__spreadValues({}, e), { searchQuery: n2, activeOptionIndex: l });
}, [6](e) {
  return e.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "" });
}, [7]: (e, t) => {
  var n2;
  let r = Array.from((n2 = e.optionsRef.current) == null ? void 0 : n2.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i, a, l) => Object.assign(i, { [a.id]: l }), {}), o = [...e.options, { id: t.id, dataRef: t.dataRef }].sort((i, a) => r[i.id] - r[a.id]);
  return __spreadProps(__spreadValues({}, e), { options: o });
}, [8]: (e, t) => {
  let r = e.options.slice(), o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null, n2 = r.findIndex((i) => i.id === t.id);
  return n2 !== -1 && r.splice(n2, 1), __spreadProps(__spreadValues({}, e), { options: r, activeOptionIndex: (() => n2 === e.activeOptionIndex || o === null ? null : r.indexOf(o))() });
} }, Gt = createContext(null);
Gt.displayName = "ListboxContext";
function Re(e) {
  let t = useContext(Gt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Re), r;
  }
  return t;
}
function Qn(e, t) {
  return S(t.type, $n, e, t);
}
var qn = Fragment$1;
function Ee(e) {
  let _a = e, { value: t, onChange: r, disabled: o = false, horizontal: n2 = false } = _a, i = __objRest(_a, ["value", "onChange", "disabled", "horizontal"]), a = n2 ? "horizontal" : "vertical", l = useReducer(Qn, { listboxState: 1, propsRef: { current: { value: t, onChange: r } }, labelRef: createRef(), buttonRef: createRef(), optionsRef: createRef(), disabled: o, orientation: a, options: [], searchQuery: "", activeOptionIndex: null }), [{ listboxState: s, propsRef: u, optionsRef: c, buttonRef: m2 }, b] = l;
  x(() => {
    u.current.value = t;
  }, [t, u]), x(() => {
    u.current.onChange = r;
  }, [r, u]), x(() => b({ type: 2, disabled: o }), [o]), x(() => b({ type: 3, orientation: a }), [a]), w("mousedown", (y) => {
    var f2, d, P;
    let p2 = y.target;
    s === 0 && (((f2 = m2.current) == null ? void 0 : f2.contains(p2)) || ((d = c.current) == null ? void 0 : d.contains(p2)) || (b({ type: 1 }), de(p2, 1) || (y.preventDefault(), (P = m2.current) == null || P.focus())));
  });
  let T = useMemo(() => ({ open: s === 0, disabled: o }), [s, o]);
  return React__default.createElement(Gt.Provider, { value: l }, React__default.createElement(W, { value: S(s, { [0]: 0, [1]: 1 }) }, E({ props: i, slot: T, defaultTag: qn, name: "Listbox" })));
}
var zn = "button", Yn = D(function(t, r) {
  var p2;
  let [o, n2] = Re("Listbox.Button"), i = I(o.buttonRef, r), a = `headlessui-listbox-button-${A()}`, l = Q(), s = useCallback((f2) => {
    switch (f2.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        f2.preventDefault(), n2({ type: 0 }), l.nextFrame(() => {
          o.propsRef.current.value || n2({ type: 4, focus: 0 });
        });
        break;
      case "ArrowUp":
        f2.preventDefault(), n2({ type: 0 }), l.nextFrame(() => {
          o.propsRef.current.value || n2({ type: 4, focus: 3 });
        });
        break;
    }
  }, [n2, o, l]), u = useCallback((f2) => {
    switch (f2.key) {
      case " ":
        f2.preventDefault();
        break;
    }
  }, []), c = useCallback((f2) => {
    if (G(f2.currentTarget))
      return f2.preventDefault();
    o.listboxState === 0 ? (n2({ type: 1 }), l.nextFrame(() => {
      var d;
      return (d = o.buttonRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    })) : (f2.preventDefault(), n2({ type: 0 }));
  }, [n2, l, o]), m2 = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, a].join(" ");
  }, [o.labelRef.current, a]), b = useMemo(() => ({ open: o.listboxState === 0, disabled: o.disabled }), [o]), T = t, y = { ref: i, id: a, type: U(t, o.buttonRef), "aria-haspopup": true, "aria-controls": (p2 = o.optionsRef.current) == null ? void 0 : p2.id, "aria-expanded": o.disabled ? void 0 : o.listboxState === 0, "aria-labelledby": m2, disabled: o.disabled, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: __spreadValues(__spreadValues({}, T), y), slot: b, defaultTag: zn, name: "Listbox.Button" });
}), Xn = "label";
function Jn(e) {
  let [t] = Re("Listbox.Label"), r = `headlessui-listbox-label-${A()}`, o = useCallback(() => {
    var a;
    return (a = t.buttonRef.current) == null ? void 0 : a.focus({ preventScroll: true });
  }, [t.buttonRef]), n2 = useMemo(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]), i = { ref: t.labelRef, id: r, onClick: o };
  return E({ props: __spreadValues(__spreadValues({}, e), i), slot: n2, defaultTag: Xn, name: "Listbox.Label" });
}
var Zn = "ul", ei = 1 | 2, ti = D(function(t, r) {
  var f2;
  let [o, n2] = Re("Listbox.Options"), i = I(o.optionsRef, r), a = `headlessui-listbox-options-${A()}`, l = Q(), s = Q(), u = _(), c = (() => u !== null ? u === 0 : o.listboxState === 0)();
  x(() => {
    let d = o.optionsRef.current;
    !d || o.listboxState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.listboxState, o.optionsRef]);
  let m2 = useCallback((d) => {
    switch (s.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n2({ type: 5, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), o.activeOptionIndex !== null) {
          let { dataRef: P } = o.options[o.activeOptionIndex];
          o.propsRef.current.onChange(P.current.value);
        }
        k().nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
        break;
      case S(o.orientation, { vertical: "ArrowDown", horizontal: "ArrowRight" }):
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 2 });
      case S(o.orientation, { vertical: "ArrowUp", horizontal: "ArrowLeft" }):
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 3 });
      case "Escape":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), l.nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n2({ type: 5, value: d.key }), s.setTimeout(() => n2({ type: 6 }), 350));
        break;
    }
  }, [l, n2, s, o]), b = ee(() => {
    var d, P, C;
    return (C = (d = o.labelRef.current) == null ? void 0 : d.id) != null ? C : (P = o.buttonRef.current) == null ? void 0 : P.id;
  }, [o.labelRef.current, o.buttonRef.current]), T = useMemo(() => ({ open: o.listboxState === 0 }), [o]), y = { "aria-activedescendant": o.activeOptionIndex === null || (f2 = o.options[o.activeOptionIndex]) == null ? void 0 : f2.id, "aria-labelledby": b, "aria-orientation": o.orientation, id: a, onKeyDown: m2, role: "listbox", tabIndex: 0, ref: i };
  return E({ props: __spreadValues(__spreadValues({}, t), y), slot: T, defaultTag: Zn, features: ei, visible: c, name: "Listbox.Options" });
}), oi = "li";
function ri(e) {
  let _a = e, { disabled: t = false, value: r } = _a, o = __objRest(_a, ["disabled", "value"]), [n2, i] = Re("Listbox.Option"), a = `headlessui-listbox-option-${A()}`, l = n2.activeOptionIndex !== null ? n2.options[n2.activeOptionIndex].id === a : false, s = n2.propsRef.current.value === r, u = useRef({ disabled: t, value: r });
  x(() => {
    u.current.disabled = t;
  }, [u, t]), x(() => {
    u.current.value = r;
  }, [u, r]), x(() => {
    var d, P;
    u.current.textValue = (P = (d = document.getElementById(a)) == null ? void 0 : d.textContent) == null ? void 0 : P.toLowerCase();
  }, [u, a]);
  let c = useCallback(() => n2.propsRef.current.onChange(r), [n2.propsRef, r]);
  x(() => (i({ type: 7, id: a, dataRef: u }), () => i({ type: 8, id: a })), [u, a]), x(() => {
    var d, P;
    n2.listboxState === 0 && (!s || (i({ type: 4, focus: 4, id: a }), (P = (d = document.getElementById(a)) == null ? void 0 : d.focus) == null || P.call(d)));
  }, [n2.listboxState]), x(() => {
    if (n2.listboxState !== 0 || !l)
      return;
    let d = k();
    return d.requestAnimationFrame(() => {
      var P, C;
      (C = (P = document.getElementById(a)) == null ? void 0 : P.scrollIntoView) == null || C.call(P, { block: "nearest" });
    }), d.dispose;
  }, [a, l, n2.listboxState, n2.activeOptionIndex]);
  let m2 = useCallback((d) => {
    if (t)
      return d.preventDefault();
    c(), i({ type: 1 }), k().nextFrame(() => {
      var P;
      return (P = n2.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
    });
  }, [i, n2.buttonRef, t, c]), b = useCallback(() => {
    if (t)
      return i({ type: 4, focus: 5 });
    i({ type: 4, focus: 4, id: a });
  }, [t, a, i]), T = useCallback(() => {
    t || l || i({ type: 4, focus: 4, id: a });
  }, [t, l, a, i]), y = useCallback(() => {
    t || !l || i({ type: 4, focus: 5 });
  }, [t, l, i]), p2 = useMemo(() => ({ active: l, selected: s, disabled: t }), [l, s, t]);
  return E({ props: __spreadValues(__spreadValues({}, o), { id: a, role: "option", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, "aria-selected": s === true ? true : void 0, disabled: void 0, onClick: m2, onFocus: b, onPointerMove: T, onMouseMove: T, onPointerLeave: y, onMouseLeave: y }), slot: p2, defaultTag: oi, name: "Listbox.Option" });
}
Ee.Button = Yn;
Ee.Label = Jn;
Ee.Options = ti;
Ee.Option = ri;
var ui = { [1](e) {
  return e.menuState === 1 ? e : __spreadProps(__spreadValues({}, e), { activeItemIndex: null, menuState: 1 });
}, [0](e) {
  return e.menuState === 0 ? e : __spreadProps(__spreadValues({}, e), { menuState: 0 });
}, [2]: (e, t) => {
  let r = ae(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeItemIndex === r ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "", activeItemIndex: r });
}, [3]: (e, t) => {
  let o = e.searchQuery !== "" ? 0 : 1, n2 = e.searchQuery + t.value.toLowerCase(), a = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + o).concat(e.items.slice(0, e.activeItemIndex + o)) : e.items).find((s) => {
    var u;
    return ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n2)) && !s.dataRef.current.disabled;
  }), l = a ? e.items.indexOf(a) : -1;
  return l === -1 || l === e.activeItemIndex ? __spreadProps(__spreadValues({}, e), { searchQuery: n2 }) : __spreadProps(__spreadValues({}, e), { searchQuery: n2, activeItemIndex: l });
}, [4](e) {
  return e.searchQuery === "" ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "", searchActiveItemIndex: null });
}, [5]: (e, t) => {
  var n2;
  let r = Array.from((n2 = e.itemsRef.current) == null ? void 0 : n2.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i, a, l) => Object.assign(i, { [a.id]: l }), {}), o = [...e.items, { id: t.id, dataRef: t.dataRef }].sort((i, a) => r[i.id] - r[a.id]);
  return __spreadProps(__spreadValues({}, e), { items: o });
}, [6]: (e, t) => {
  let r = e.items.slice(), o = e.activeItemIndex !== null ? r[e.activeItemIndex] : null, n2 = r.findIndex((i) => i.id === t.id);
  return n2 !== -1 && r.splice(n2, 1), __spreadProps(__spreadValues({}, e), { items: r, activeItemIndex: (() => n2 === e.activeItemIndex || o === null ? null : r.indexOf(o))() });
} }, Ht = createContext(null);
Ht.displayName = "MenuContext";
function Je(e) {
  let t = useContext(Ht);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Je), r;
  }
  return t;
}
function pi(e, t) {
  return S(t.type, ui, e, t);
}
var di = Fragment$1;
function Ze(e) {
  let t = useReducer(pi, { menuState: 1, buttonRef: createRef(), itemsRef: createRef(), items: [], searchQuery: "", activeItemIndex: null }), [{ menuState: r, itemsRef: o, buttonRef: n2 }, i] = t;
  w("mousedown", (l) => {
    var u, c, m2;
    let s = l.target;
    r === 0 && (((u = n2.current) == null ? void 0 : u.contains(s)) || ((c = o.current) == null ? void 0 : c.contains(s)) || (i({ type: 1 }), de(s, 1) || (l.preventDefault(), (m2 = n2.current) == null || m2.focus())));
  });
  let a = useMemo(() => ({ open: r === 0 }), [r]);
  return React__default.createElement(Ht.Provider, { value: t }, React__default.createElement(W, { value: S(r, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: a, defaultTag: di, name: "Menu" })));
}
var ci = "button", fi = D(function(t, r) {
  var y;
  let [o, n2] = Je("Menu.Button"), i = I(o.buttonRef, r), a = `headlessui-menu-button-${A()}`, l = Q(), s = useCallback((p2) => {
    switch (p2.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 }), l.nextFrame(() => n2({ type: 2, focus: 0 }));
        break;
      case "ArrowUp":
        p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 }), l.nextFrame(() => n2({ type: 2, focus: 3 }));
        break;
    }
  }, [n2, l]), u = useCallback((p2) => {
    switch (p2.key) {
      case " ":
        p2.preventDefault();
        break;
    }
  }, []), c = useCallback((p2) => {
    if (G(p2.currentTarget))
      return p2.preventDefault();
    t.disabled || (o.menuState === 0 ? (n2({ type: 1 }), l.nextFrame(() => {
      var f2;
      return (f2 = o.buttonRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 })));
  }, [n2, l, o, t.disabled]), m2 = useMemo(() => ({ open: o.menuState === 0 }), [o]), b = t, T = { ref: i, id: a, type: U(t, o.buttonRef), "aria-haspopup": true, "aria-controls": (y = o.itemsRef.current) == null ? void 0 : y.id, "aria-expanded": t.disabled ? void 0 : o.menuState === 0, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: __spreadValues(__spreadValues({}, b), T), slot: m2, defaultTag: ci, name: "Menu.Button" });
}), mi = "div", bi = 1 | 2, Ti = D(function(t, r) {
  var p2, f2;
  let [o, n2] = Je("Menu.Items"), i = I(o.itemsRef, r), a = `headlessui-menu-items-${A()}`, l = Q(), s = _(), u = (() => s !== null ? s === 0 : o.menuState === 0)();
  useEffect(() => {
    let d = o.itemsRef.current;
    !d || o.menuState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.menuState, o.itemsRef]), se({ container: o.itemsRef.current, enabled: o.menuState === 0, accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  let c = useCallback((d) => {
    var P;
    switch (l.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n2({ type: 3, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), o.activeItemIndex !== null) {
          let { id: C } = o.items[o.activeItemIndex];
          (P = document.getElementById(C)) == null || P.click();
        }
        k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 2 });
      case "ArrowUp":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 3 });
      case "Escape":
        d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n2({ type: 3, value: d.key }), l.setTimeout(() => n2({ type: 4 }), 350));
        break;
    }
  }, [n2, l, o]), m2 = useCallback((d) => {
    switch (d.key) {
      case " ":
        d.preventDefault();
        break;
    }
  }, []), b = useMemo(() => ({ open: o.menuState === 0 }), [o]), T = { "aria-activedescendant": o.activeItemIndex === null || (p2 = o.items[o.activeItemIndex]) == null ? void 0 : p2.id, "aria-labelledby": (f2 = o.buttonRef.current) == null ? void 0 : f2.id, id: a, onKeyDown: c, onKeyUp: m2, role: "menu", tabIndex: 0, ref: i };
  return E({ props: __spreadValues(__spreadValues({}, t), T), slot: b, defaultTag: mi, features: bi, visible: u, name: "Menu.Items" });
}), yi = Fragment$1;
function gi(e) {
  let _a = e, { disabled: t = false, onClick: r } = _a, o = __objRest(_a, ["disabled", "onClick"]), [n2, i] = Je("Menu.Item"), a = `headlessui-menu-item-${A()}`, l = n2.activeItemIndex !== null ? n2.items[n2.activeItemIndex].id === a : false;
  x(() => {
    if (n2.menuState !== 0 || !l)
      return;
    let p2 = k();
    return p2.requestAnimationFrame(() => {
      var f2, d;
      (d = (f2 = document.getElementById(a)) == null ? void 0 : f2.scrollIntoView) == null || d.call(f2, { block: "nearest" });
    }), p2.dispose;
  }, [a, l, n2.menuState, n2.activeItemIndex]);
  let s = useRef({ disabled: t });
  x(() => {
    s.current.disabled = t;
  }, [s, t]), x(() => {
    var p2, f2;
    s.current.textValue = (f2 = (p2 = document.getElementById(a)) == null ? void 0 : p2.textContent) == null ? void 0 : f2.toLowerCase();
  }, [s, a]), x(() => (i({ type: 5, id: a, dataRef: s }), () => i({ type: 6, id: a })), [s, a]);
  let u = useCallback((p2) => {
    if (t)
      return p2.preventDefault();
    if (i({ type: 1 }), k().nextFrame(() => {
      var f2;
      return (f2 = n2.buttonRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
    }), r)
      return r(p2);
  }, [i, n2.buttonRef, t, r]), c = useCallback(() => {
    if (t)
      return i({ type: 2, focus: 5 });
    i({ type: 2, focus: 4, id: a });
  }, [t, a, i]), m2 = useCallback(() => {
    t || l || i({ type: 2, focus: 4, id: a });
  }, [t, l, a, i]), b = useCallback(() => {
    t || !l || i({ type: 2, focus: 5 });
  }, [t, l, i]), T = useMemo(() => ({ active: l, disabled: t }), [l, t]);
  return E({ props: __spreadValues(__spreadValues({}, o), { id: a, role: "menuitem", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, disabled: void 0, onClick: u, onFocus: c, onPointerMove: m2, onMouseMove: m2, onPointerLeave: b, onMouseLeave: b }), slot: T, defaultTag: yi, name: "Menu.Item" });
}
Ze.Button = fi;
Ze.Items = Ti;
Ze.Item = gi;
var vi = { [0]: (e) => __spreadProps(__spreadValues({}, e), { popoverState: S(e.popoverState, { [0]: 1, [1]: 0 }) }), [1](e) {
  return e.popoverState === 1 ? e : __spreadProps(__spreadValues({}, e), { popoverState: 1 });
}, [2](e, t) {
  return e.button === t.button ? e : __spreadProps(__spreadValues({}, e), { button: t.button });
}, [3](e, t) {
  return e.buttonId === t.buttonId ? e : __spreadProps(__spreadValues({}, e), { buttonId: t.buttonId });
}, [4](e, t) {
  return e.panel === t.panel ? e : __spreadProps(__spreadValues({}, e), { panel: t.panel });
}, [5](e, t) {
  return e.panelId === t.panelId ? e : __spreadProps(__spreadValues({}, e), { panelId: t.panelId });
} }, Ut = createContext(null);
Ut.displayName = "PopoverContext";
function ot(e) {
  let t = useContext(Ut);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ot), r;
  }
  return t;
}
var Bt = createContext(null);
Bt.displayName = "PopoverAPIContext";
function Mo(e) {
  let t = useContext(Bt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Mo), r;
  }
  return t;
}
var Nt = createContext(null);
Nt.displayName = "PopoverGroupContext";
function Fo() {
  return useContext(Nt);
}
var Wt = createContext(null);
Wt.displayName = "PopoverPanelContext";
function Ri() {
  return useContext(Wt);
}
function Ei(e, t) {
  return S(t.type, vi, e, t);
}
var Ci = "div";
function Te(e) {
  let t = `headlessui-popover-button-${A()}`, r = `headlessui-popover-panel-${A()}`, o = useReducer(Ei, { popoverState: 1, button: null, buttonId: t, panel: null, panelId: r }), [{ popoverState: n2, button: i, panel: a }, l] = o;
  useEffect(() => l({ type: 3, buttonId: t }), [t, l]), useEffect(() => l({ type: 5, panelId: r }), [r, l]);
  let s = useMemo(() => ({ buttonId: t, panelId: r, close: () => l({ type: 1 }) }), [t, r, l]), u = Fo(), c = u == null ? void 0 : u.registerPopover, m2 = useCallback(() => {
    var p2;
    return (p2 = u == null ? void 0 : u.isFocusWithinPopoverGroup()) != null ? p2 : (i == null ? void 0 : i.contains(document.activeElement)) || (a == null ? void 0 : a.contains(document.activeElement));
  }, [u, i, a]);
  useEffect(() => c == null ? void 0 : c(s), [c, s]), w("focus", () => {
    n2 === 0 && (m2() || !i || !a || l({ type: 1 }));
  }, true), w("mousedown", (p2) => {
    let f2 = p2.target;
    n2 === 0 && ((i == null ? void 0 : i.contains(f2)) || (a == null ? void 0 : a.contains(f2)) || (l({ type: 1 }), de(f2, 1) || (p2.preventDefault(), i == null || i.focus())));
  });
  let b = useCallback((p2) => {
    l({ type: 1 });
    let f2 = (() => p2 ? p2 instanceof HTMLElement ? p2 : p2.current instanceof HTMLElement ? p2.current : i : i)();
    f2 == null || f2.focus();
  }, [l, i]), T = useMemo(() => ({ close: b }), [b]), y = useMemo(() => ({ open: n2 === 0, close: b }), [n2, b]);
  return React__default.createElement(Ut.Provider, { value: o }, React__default.createElement(Bt.Provider, { value: T }, React__default.createElement(W, { value: S(n2, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: y, defaultTag: Ci, name: "Popover" }))));
}
var Si = "button", Ai = D(function(t, r) {
  let [o, n2] = ot("Popover.Button"), i = useRef(null), a = Fo(), l = a == null ? void 0 : a.closeOthers, s = Ri(), u = s === null ? false : s === o.panelId, c = I(i, r, u ? null : (g2) => n2({ type: 2, button: g2 })), m2 = I(i, r), b = useRef(null), T = useRef(typeof window == "undefined" ? null : document.activeElement);
  w("focus", () => {
    T.current = b.current, b.current = document.activeElement;
  }, true);
  let y = useCallback((g2) => {
    var v, h;
    if (u) {
      if (o.popoverState === 1)
        return;
      switch (g2.key) {
        case " ":
        case "Enter":
          g2.preventDefault(), g2.stopPropagation(), n2({ type: 1 }), (v = o.button) == null || v.focus();
          break;
      }
    } else
      switch (g2.key) {
        case " ":
        case "Enter":
          g2.preventDefault(), g2.stopPropagation(), o.popoverState === 1 && (l == null || l(o.buttonId)), n2({ type: 0 });
          break;
        case "Escape":
          if (o.popoverState !== 0)
            return l == null ? void 0 : l(o.buttonId);
          if (!i.current || !i.current.contains(document.activeElement))
            return;
          g2.preventDefault(), g2.stopPropagation(), n2({ type: 1 });
          break;
        case "Tab":
          if (o.popoverState !== 0 || !o.panel || !o.button)
            return;
          if (g2.shiftKey) {
            if (!T.current || ((h = o.button) == null ? void 0 : h.contains(T.current)) || o.panel.contains(T.current))
              return;
            let O = xe(), L = O.indexOf(T.current);
            if (O.indexOf(o.button) > L)
              return;
            g2.preventDefault(), g2.stopPropagation(), M(o.panel, 8);
          } else
            g2.preventDefault(), g2.stopPropagation(), M(o.panel, 1);
          break;
      }
  }, [n2, o.popoverState, o.buttonId, o.button, o.panel, i, l, u]), p2 = useCallback((g2) => {
    var v;
    if (!u && (g2.key === " " && g2.preventDefault(), o.popoverState === 0 && !!o.panel && !!o.button))
      switch (g2.key) {
        case "Tab":
          if (!T.current || ((v = o.button) == null ? void 0 : v.contains(T.current)) || o.panel.contains(T.current))
            return;
          let h = xe(), O = h.indexOf(T.current);
          if (h.indexOf(o.button) > O)
            return;
          g2.preventDefault(), g2.stopPropagation(), M(o.panel, 8);
          break;
      }
  }, [o.popoverState, o.panel, o.button, u]), f2 = useCallback((g2) => {
    var v, h;
    G(g2.currentTarget) || t.disabled || (u ? (n2({ type: 1 }), (v = o.button) == null || v.focus()) : (o.popoverState === 1 && (l == null || l(o.buttonId)), (h = o.button) == null || h.focus(), n2({ type: 0 })));
  }, [n2, o.button, o.popoverState, o.buttonId, t.disabled, l, u]), d = useMemo(() => ({ open: o.popoverState === 0 }), [o]), P = U(t, i), C = t, R = u ? { ref: m2, type: P, onKeyDown: y, onClick: f2 } : { ref: c, id: o.buttonId, type: P, "aria-expanded": t.disabled ? void 0 : o.popoverState === 0, "aria-controls": o.panel ? o.panelId : void 0, onKeyDown: y, onKeyUp: p2, onClick: f2 };
  return E({ props: __spreadValues(__spreadValues({}, C), R), slot: d, defaultTag: Si, name: "Popover.Button" });
}), hi = "div", Oi = 1 | 2, Ii = D(function(t, r) {
  let [{ popoverState: o }, n2] = ot("Popover.Overlay"), i = I(r), a = `headlessui-popover-overlay-${A()}`, l = _(), s = (() => l !== null ? l === 0 : o === 0)(), u = useCallback((T) => {
    if (G(T.currentTarget))
      return T.preventDefault();
    n2({ type: 1 });
  }, [n2]), c = useMemo(() => ({ open: o === 0 }), [o]);
  return E({ props: __spreadValues(__spreadValues({}, t), { ref: i, id: a, "aria-hidden": true, onClick: u }), slot: c, defaultTag: hi, features: Oi, visible: s, name: "Popover.Overlay" });
}), Li = "div", Di = 1 | 2, Mi = D(function(t, r) {
  let _a = t, { focus: o = false } = _a, n2 = __objRest(_a, ["focus"]), [i, a] = ot("Popover.Panel"), { close: l } = Mo("Popover.Panel"), s = useRef(null), u = I(s, r, (p2) => {
    a({ type: 4, panel: p2 });
  }), c = _(), m2 = (() => c !== null ? c === 0 : i.popoverState === 0)(), b = useCallback((p2) => {
    var f2;
    switch (p2.key) {
      case "Escape":
        if (i.popoverState !== 0 || !s.current || !s.current.contains(document.activeElement))
          return;
        p2.preventDefault(), p2.stopPropagation(), a({ type: 1 }), (f2 = i.button) == null || f2.focus();
        break;
    }
  }, [i, s, a]);
  useEffect(() => () => a({ type: 4, panel: null }), [a]), useEffect(() => {
    var p2;
    t.static || i.popoverState === 1 && ((p2 = t.unmount) != null ? p2 : true) && a({ type: 4, panel: null });
  }, [i.popoverState, t.unmount, t.static, a]), useEffect(() => {
    if (!o || i.popoverState !== 0 || !s.current)
      return;
    let p2 = document.activeElement;
    s.current.contains(p2) || M(s.current, 1);
  }, [o, s, i.popoverState]), w("keydown", (p2) => {
    var d;
    if (i.popoverState !== 0 || !s.current || p2.key !== "Tab" || !document.activeElement || !s.current || !s.current.contains(document.activeElement))
      return;
    p2.preventDefault();
    let f2 = M(s.current, p2.shiftKey ? 2 : 4);
    if (f2 === 3)
      return (d = i.button) == null ? void 0 : d.focus();
    if (f2 === 1) {
      if (!i.button)
        return;
      let P = xe(), C = P.indexOf(i.button), R = P.splice(C + 1).filter((g2) => {
        var v;
        return !((v = s.current) == null ? void 0 : v.contains(g2));
      });
      M(R, 1) === 0 && M(document.body, 1);
    }
  }), w("focus", () => {
    var p2;
    !o || i.popoverState === 0 && (!s.current || ((p2 = s.current) == null ? void 0 : p2.contains(document.activeElement)) || a({ type: 1 }));
  }, true);
  let T = useMemo(() => ({ open: i.popoverState === 0, close: l }), [i, l]), y = { ref: u, id: i.panelId, onKeyDown: b };
  return React__default.createElement(Wt.Provider, { value: i.panelId }, E({ props: __spreadValues(__spreadValues({}, n2), y), slot: T, defaultTag: Li, features: Di, visible: m2, name: "Popover.Panel" }));
}), Fi = "div";
function wi(e) {
  let t = useRef(null), [r, o] = useState([]), n2 = useCallback((b) => {
    o((T) => {
      let y = T.indexOf(b);
      if (y !== -1) {
        let p2 = T.slice();
        return p2.splice(y, 1), p2;
      }
      return T;
    });
  }, [o]), i = useCallback((b) => (o((T) => [...T, b]), () => n2(b)), [o, n2]), a = useCallback(() => {
    var T;
    let b = document.activeElement;
    return ((T = t.current) == null ? void 0 : T.contains(b)) ? true : r.some((y) => {
      var p2, f2;
      return ((p2 = document.getElementById(y.buttonId)) == null ? void 0 : p2.contains(b)) || ((f2 = document.getElementById(y.panelId)) == null ? void 0 : f2.contains(b));
    });
  }, [t, r]), l = useCallback((b) => {
    for (let T of r)
      T.buttonId !== b && T.close();
  }, [r]), s = useMemo(() => ({ registerPopover: i, unregisterPopover: n2, isFocusWithinPopoverGroup: a, closeOthers: l }), [i, n2, a, l]), u = useMemo(() => ({}), []), c = { ref: t }, m2 = e;
  return React__default.createElement(Nt.Provider, { value: s }, E({ props: __spreadValues(__spreadValues({}, m2), c), slot: u, defaultTag: Fi, name: "Popover.Group" }));
}
Te.Button = Ai;
Te.Overlay = Ii;
Te.Panel = Mi;
Te.Group = wi;
createContext(null);
var jt = createContext(null);
jt.displayName = "RadioGroupContext";
var $t = createContext(null);
$t.displayName = "GroupContext";
var zt = createContext(null);
zt.displayName = "TabsContext";
function Bo() {
  let e = useRef(true);
  return useEffect(() => {
    e.current = false;
  }, []), e.current;
}
function No(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function Yt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ut(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function El(e, t) {
  let r = k();
  if (!e)
    return r.dispose;
  let { transitionDuration: o, transitionDelay: n2 } = getComputedStyle(e), [i, a] = [o, n2].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return i !== 0 ? r.setTimeout(() => {
    t("finished");
  }, i + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Xt(e, t, r, o, n2, i) {
  let a = k(), l = i !== void 0 ? No(i) : () => {
  };
  return ut(e, ...n2), Yt(e, ...t, ...r), a.nextFrame(() => {
    ut(e, ...r), Yt(e, ...o), a.add(El(e, (s) => (ut(e, ...o, ...t), Yt(e, ...n2), l(s))));
  }), a.add(() => ut(e, ...t, ...r, ...o, ...n2)), a.add(() => l("cancelled")), a.dispose;
}
function le(e = "") {
  return useMemo(() => e.split(" ").filter((t) => t.trim().length > 1), [e]);
}
var dt = createContext(null);
dt.displayName = "TransitionContext";
function Cl() {
  let e = useContext(dt);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Sl() {
  let e = useContext(ct);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
var ct = createContext(null);
ct.displayName = "NestingContext";
function ft(e) {
  return "children" in e ? ft(e.children) : e.current.filter(({ state: t }) => t === "visible").length > 0;
}
function $o(e) {
  let t = useRef(e), r = useRef([]), o = Be();
  useEffect(() => {
    t.current = e;
  }, [e]);
  let n2 = useCallback((a, l = 1) => {
    var u;
    let s = r.current.findIndex(({ id: c }) => c === a);
    s !== -1 && (S(l, { [0]() {
      r.current.splice(s, 1);
    }, [1]() {
      r.current[s].state = "hidden";
    } }), !ft(r) && o.current && ((u = t.current) == null || u.call(t)));
  }, [t, o, r]), i = useCallback((a) => {
    let l = r.current.find(({ id: s }) => s === a);
    return l ? l.state !== "visible" && (l.state = "visible") : r.current.push({ id: a, state: "visible" }), () => n2(a, 0);
  }, [r, n2]);
  return useMemo(() => ({ children: r, register: i, unregister: n2 }), [i, n2, r]);
}
function Al() {
}
var hl = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qo(e) {
  var r;
  let t = {};
  for (let o of hl)
    t[o] = (r = e[o]) != null ? r : Al;
  return t;
}
function Ol(e) {
  let t = useRef(Qo(e));
  return useEffect(() => {
    t.current = Qo(e);
  }, [e]), t;
}
var Il = "div", qo = 1;
function zo(e) {
  let _a = e, { beforeEnter: t, afterEnter: r, beforeLeave: o, afterLeave: n2, enter: i, enterFrom: a, enterTo: l, entered: s, leave: u, leaveFrom: c, leaveTo: m2 } = _a, b = __objRest(_a, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]), T = useRef(null), [y, p2] = useState("visible"), f2 = b.unmount ? 0 : 1, { show: d, appear: P, initial: C } = Cl(), { register: R, unregister: g2 } = Sl(), v = A(), h = useRef(false), O = $o(() => {
    h.current || (p2("hidden"), g2(v), X.current.afterLeave());
  });
  x(() => {
    if (!!v)
      return R(v);
  }, [R, v]), x(() => {
    if (f2 === 1 && !!v) {
      if (d && y !== "visible") {
        p2("visible");
        return;
      }
      S(y, { hidden: () => g2(v), visible: () => R(v) });
    }
  }, [y, v, R, g2, d, f2]);
  let L = le(i), N = le(a), K = le(l), V = le(s), Fe = le(u), ge = le(c), we = le(m2), X = Ol({ beforeEnter: t, afterEnter: r, beforeLeave: o, afterLeave: n2 }), F = q$1();
  useEffect(() => {
    if (F && y === "visible" && T.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T, y, F]);
  let $ = C && !P;
  x(() => {
    let bt = T.current;
    if (!!bt && !$)
      return h.current = true, d && X.current.beforeEnter(), d || X.current.beforeLeave(), d ? Xt(bt, L, N, K, V, (Tt) => {
        h.current = false, Tt === "finished" && X.current.afterEnter();
      }) : Xt(bt, Fe, ge, we, V, (Tt) => {
        h.current = false, Tt === "finished" && (ft(O) || (p2("hidden"), g2(v), X.current.afterLeave()));
      });
  }, [X, v, h, g2, O, T, $, d, L, N, K, Fe, ge, we]);
  let H = { ref: T }, Pe = b;
  return React__default.createElement(ct.Provider, { value: O }, React__default.createElement(W, { value: S(y, { visible: 0, hidden: 1 }) }, E({ props: __spreadValues(__spreadValues({}, Pe), H), defaultTag: Il, features: qo, visible: y === "visible", name: "Transition.Child" })));
}
function mt(e) {
  let _a = e, { show: t, appear: r = false, unmount: o } = _a, n2 = __objRest(_a, ["show", "appear", "unmount"]), i = _();
  if (t === void 0 && i !== null && (t = S(i, { [0]: true, [1]: false })), ![true, false].includes(t))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a, l] = useState(t ? "visible" : "hidden"), s = $o(() => {
    l("hidden");
  }), u = Bo(), c = useMemo(() => ({ show: t, appear: r || !u, initial: u }), [t, r, u]);
  useEffect(() => {
    t ? l("visible") : ft(s) || l("hidden");
  }, [t, s]);
  let m2 = { unmount: o };
  return React__default.createElement(ct.Provider, { value: s }, React__default.createElement(dt.Provider, { value: c }, E({ props: __spreadProps(__spreadValues({}, m2), { as: Fragment$1, children: React__default.createElement(zo, __spreadValues(__spreadValues({}, m2), n2)) }), defaultTag: Fragment$1, features: qo, visible: a === "visible", name: "Transition" })));
}
mt.Child = function(t) {
  let r = useContext(dt) !== null, o = _() !== null;
  return !r && o ? React__default.createElement(mt, __spreadValues({}, t)) : React__default.createElement(zo, __spreadValues({}, t));
};
mt.Root = mt;
function ChevronDownIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to2 = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to2[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to2[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to2;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React__default, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k2) {
  var b, d = {}, e = null, l = null;
  k2 !== void 0 && (e = "" + k2);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const Pill = ({
  className,
  closeBtnColor = "indigo",
  name,
  value,
  onRemove
}) => {
  const closeBtnClasses = classNames({
    "text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white": closeBtnColor === "indigo"
  });
  return /* @__PURE__ */ jsxs("span", {
    className: classNames("inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium", {
      [String(className)]: !!className
    }),
    children: [name, /* @__PURE__ */ jsxs("button", {
      type: "button",
      className: classNames("flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none", closeBtnClasses),
      onClick: () => onRemove(value),
      children: [/* @__PURE__ */ jsxs("span", {
        className: "sr-only",
        children: ["Remove ", name]
      }), /* @__PURE__ */ jsx("svg", {
        className: "h-2 w-2",
        stroke: "currentColor",
        fill: "none",
        viewBox: "0 0 8 8",
        children: /* @__PURE__ */ jsx("path", {
          strokeLinecap: "round",
          strokeWidth: "1.5",
          d: "M1 1l6 6m0-6L1 7"
        })
      })]
    })]
  });
};
const MultiSelect = ({
  name,
  options,
  className,
  legend,
  onValuesChanged
}) => {
  const [selected, setSelected] = useState([]);
  const optionIsSelected = (option) => {
    return !!selected.find((el) => el === option);
  };
  const onRemove = (value) => {
    setSelected(selected.filter((opt) => opt.value !== value));
  };
  const onChange = (event) => {
    const value = event.target.value;
    const option = options.find((opt) => opt.value === value);
    const isSelected = optionIsSelected(option);
    if (isSelected) {
      setSelected(selected.filter((opt) => opt !== option));
    } else {
      setSelected([...selected, option]);
    }
  };
  useEffect(() => {
    if (onValuesChanged)
      onValuesChanged(selected);
  }, [onValuesChanged, selected]);
  return /* @__PURE__ */ jsx(Te, {
    as: "div",
    className: classNames("relative inline-block text-left", {
      [String(className)]: !!className
    }),
    children: ({
      open
    }) => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsxs(Te.Button, {
        className: "inline-flex items-center justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 py-2",
        children: [/* @__PURE__ */ jsx("div", {
          className: "flex flex-wrap gap-2",
          children: selected.map((option) => /* @__PURE__ */ jsx(Pill, {
            name: option.name,
            value: option.value,
            onRemove,
            className: "bg-indigo-100 text-indigo-700"
          }, option.value))
        }), /* @__PURE__ */ jsx(ChevronDownIcon, {
          className: classNames("-mr-1 ml-2 h-5 w-5 my-0.5", {
            "rotate-180": open
          }),
          "aria-hidden": "true"
        })]
      }), /* @__PURE__ */ jsx(mt, {
        as: Fragment$1,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsxs(Te.Panel, {
          as: "fieldset",
          className: "flex flex-col origin-top absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: [/* @__PURE__ */ jsx("legend", {
            className: "sr-only",
            children: legend
          }), options.map((option) => /* @__PURE__ */ jsxs("label", {
            className: "flex items-center px-2 py-1 hover:bg-blue-100 space-x-2",
            children: [/* @__PURE__ */ jsx("input", {
              type: "checkbox",
              name,
              value: option.value,
              className: "relative p-2 rounded text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
              checked: optionIsSelected(option),
              onChange
            }, option.value), /* @__PURE__ */ jsx("span", {
              children: option.name
            })]
          }))]
        })
      })]
    })
  });
};
export { MultiSelect, Pill };
