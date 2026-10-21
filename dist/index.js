import * as e from "lucide-react";
import { AlertCircle as t, AlertTriangle as n, ArrowDown as r, ArrowUp as i, ArrowUpDown as a, Check as o, CheckCircle2 as s, ChevronDown as c, ChevronRight as l, ChevronsLeft as u, ChevronsRight as d, Code2 as f, Columns as p, Columns2 as m, Copy as h, Eye as g, EyeOff as _, FileCode as v, FileJson as y, FileQuestion as b, FileText as x, FolderTree as S, GripVertical as C, HelpCircle as w, Inbox as T, Info as ee, Loader2 as te, Maximize2 as ne, Minus as re, Monitor as ie, Moon as ae, Plus as E, Redo2 as D, RefreshCw as oe, RotateCcw as O, Search as k, SearchX as se, Smartphone as ce, Sun as le, Tablet as A, Trash2 as j, Undo2 as ue, Wand2 as de, WifiOff as fe, X as pe } from "lucide-react";
import me, { Component as he, createContext as ge, createElement as _e, forwardRef as ve, isValidElement as ye, useContext as be, useEffect as xe, useId as Se, useMemo as Ce, useRef as we, useState as M, useSyncExternalStore as Te } from "react";
import { Fragment as Ee, jsx as N, jsxs as P } from "react/jsx-runtime";
import { createPortal as De } from "react-dom";
//#region \0rolldown/runtime.js
var Oe = Object.create, ke = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, je = Object.getOwnPropertyNames, Me = Object.getPrototypeOf, Ne = Object.prototype.hasOwnProperty, Pe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), Fe = (e, t) => {
	let n = {};
	for (var r in e) ke(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ke(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ie = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = je(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Ne.call(e, s) && s !== n && ke(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Ae(t, s)) || r.enumerable
	});
	return e;
}, Le = (e, t, n) => (n = e == null ? {} : Oe(Me(e)), Ie(t || !e || !e.__esModule || !Ne.call(e, "default") ? ke(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Re(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Re(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function ze() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Re(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Be = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Ve = (e, t) => ({
	classGroupId: e,
	validator: t
}), He = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Ue = "-", We = [], Ge = "arbitrary..", Ke = (e) => {
	let t = Ye(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Je(e);
			let n = e.split(Ue);
			return qe(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Be(i, t) : t : i || We;
			}
			return n[e] || We;
		}
	};
}, qe = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = qe(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Ue) : e.slice(t).join(Ue), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Je = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Ge + r : void 0;
})(), Ye = (e) => {
	let { theme: t, classGroups: n } = e;
	return Xe(n, t);
}, Xe = (e, t) => {
	let n = He();
	for (let r in e) {
		let i = e[r];
		Ze(i, n, r, t);
	}
	return n;
}, Ze = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Qe(i, t, n, r);
	}
}, Qe = (e, t, n, r) => {
	typeof e == "string" ? $e(e, t, n) : typeof e == "function" ? et(e, t, n, r) : tt(e, t, n, r);
}, $e = (e, t, n) => {
	let r = e === "" ? t : nt(t, e);
	r.classGroupId = n;
}, et = (e, t, n, r) => {
	rt(e) ? Ze(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(Ve(n, e)));
}, tt = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Ze(o, nt(t, a), n, r);
	}
}, nt = (e, t) => {
	let n = e, r = t.split(Ue), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = He(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, rt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, it = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, at = "!", ot = ":", st = [], ct = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), lt = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === ot) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(at) ? (c = s.slice(0, -1), l = !0) : s.startsWith(at) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ct(t, l, c, u);
	};
	if (t) {
		let e = t + ot, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ct(st, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ut = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, dt = (e) => ({
	cache: it(e.cacheSize),
	parseClassName: lt(e),
	sortModifiers: ut(e),
	postfixLookupClassGroupIds: ft(e),
	...Ke(e)
}), ft = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, pt = /\s+/, mt = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(pt), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h || (g = r(p), !g)) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + at : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, ht = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = gt(n)) && (i && (i += " "), i += r);
	return i;
}, gt = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = gt(e[r])) && (n && (n += " "), n += t);
	return n;
}, _t = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = dt(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = mt(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ht(...e));
}, vt = [], yt = (e) => {
	let t = (t) => t[e] || vt;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, bt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, xt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, St = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Ct = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, Et = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Dt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ot = (e) => St.test(e), kt = (e) => !!e && !Number.isNaN(Number(e)), At = (e) => !!e && Number.isInteger(Number(e)), jt = (e) => e.endsWith("%") && kt(e.slice(0, -1)), Mt = (e) => Ct.test(e), Nt = () => !0, Pt = (e) => wt.test(e) && !Tt.test(e), Ft = () => !1, It = (e) => Et.test(e), Lt = (e) => Dt.test(e), Rt = (e) => !F(e) && !I(e), zt = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Bt = (e) => tn(e, on, Ft), F = (e) => bt.test(e), Vt = (e) => tn(e, sn, Pt), Ht = (e) => tn(e, cn, kt), Ut = (e) => tn(e, un, Nt), Wt = (e) => tn(e, ln, Ft), Gt = (e) => tn(e, rn, Ft), Kt = (e) => tn(e, an, Lt), qt = (e) => tn(e, dn, It), I = (e) => xt.test(e), Jt = (e) => nn(e, sn), Yt = (e) => nn(e, ln), Xt = (e) => nn(e, rn), Zt = (e) => nn(e, on), Qt = (e) => nn(e, an), $t = (e) => nn(e, dn, !0), en = (e) => nn(e, un, !0), tn = (e, t, n) => {
	let r = bt.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, nn = (e, t, n = !1) => {
	let r = xt.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, rn = (e) => e === "position" || e === "percentage", an = (e) => e === "image" || e === "url", on = (e) => e === "length" || e === "size" || e === "bg-size", sn = (e) => e === "length", cn = (e) => e === "number", ln = (e) => e === "family-name", un = (e) => e === "number" || e === "weight", dn = (e) => e === "shadow", fn = /*#__PURE__*/ _t(() => {
	let e = yt("color"), t = yt("font"), n = yt("text"), r = yt("font-weight"), i = yt("tracking"), a = yt("leading"), o = yt("breakpoint"), s = yt("container"), c = yt("spacing"), l = yt("radius"), u = yt("shadow"), d = yt("inset-shadow"), f = yt("text-shadow"), p = yt("drop-shadow"), m = yt("blur"), h = yt("perspective"), g = yt("aspect"), _ = yt("ease"), v = yt("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		I,
		F
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		I,
		F,
		c
	], T = () => [
		Ot,
		"full",
		"auto",
		...w()
	], ee = () => [
		At,
		"none",
		"subgrid",
		I,
		F
	], te = () => [
		"auto",
		{ span: [
			"full",
			At,
			I,
			F
		] },
		At,
		I,
		F
	], ne = () => [
		At,
		"auto",
		I,
		F
	], re = () => [
		"auto",
		"min",
		"max",
		"fr",
		I,
		F
	], ie = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], ae = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], E = () => ["auto", ...w()], D = () => [
		Ot,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], oe = () => [
		s,
		Ot,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], O = () => [
		Ot,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], k = () => [
		e,
		I,
		F
	], se = () => [
		...b(),
		Xt,
		Gt,
		{ position: [I, F] }
	], ce = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], le = () => [
		"auto",
		"cover",
		"contain",
		Zt,
		Bt,
		{ size: [I, F] }
	], A = () => [
		jt,
		Jt,
		Vt
	], j = () => [
		"",
		"none",
		"full",
		l,
		I,
		F
	], ue = () => [
		"",
		kt,
		Jt,
		Vt
	], de = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], fe = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], pe = () => [
		kt,
		jt,
		Xt,
		Gt
	], me = () => [
		"",
		"none",
		m,
		I,
		F
	], he = () => [
		"none",
		kt,
		I,
		F
	], ge = () => [
		"none",
		kt,
		I,
		F
	], _e = () => [
		kt,
		I,
		F
	], ve = () => [
		Ot,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Mt],
			breakpoint: [Mt],
			color: [Nt],
			container: [Mt],
			"drop-shadow": [Mt],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Rt],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Mt],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Mt],
			shadow: [Mt],
			spacing: ["px", kt],
			text: [Mt],
			"text-shadow": [Mt],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Ot,
				F,
				I,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				I,
				F
			] }],
			"container-named": [zt],
			columns: [{ columns: [
				kt,
				"auto",
				F,
				I,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				At,
				"auto",
				I,
				F
			] }],
			basis: [{ basis: [
				Ot,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				kt,
				Ot,
				"auto",
				"initial",
				"none",
				F
			] }],
			grow: [{ grow: [
				"",
				kt,
				I,
				F
			] }],
			shrink: [{ shrink: [
				"",
				kt,
				I,
				F
			] }],
			order: [{ order: [
				At,
				"first",
				"last",
				"none",
				I,
				F
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: te() }],
			"col-start": [{ "col-start": ne() }],
			"col-end": [{ "col-end": ne() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: te() }],
			"row-start": [{ "row-start": ne() }],
			"row-end": [{ "row-end": ne() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": re() }],
			"auto-rows": [{ "auto-rows": re() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...ie(), "normal"] }],
			"justify-items": [{ "justify-items": [...ae(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...ae()] }],
			"align-content": [{ content: ["normal", ...ie()] }],
			"align-items": [{ items: [...ae(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...ae(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ie() }],
			"place-items": [{ "place-items": [...ae(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...ae()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: E() }],
			mx: [{ mx: E() }],
			my: [{ my: E() }],
			ms: [{ ms: E() }],
			me: [{ me: E() }],
			mbs: [{ mbs: E() }],
			mbe: [{ mbe: E() }],
			mt: [{ mt: E() }],
			mr: [{ mr: E() }],
			mb: [{ mb: E() }],
			ml: [{ ml: E() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: D() }],
			"inline-size": [{ inline: ["auto", ...oe()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...oe()] }],
			"max-inline-size": [{ "max-inline": ["none", ...oe()] }],
			"block-size": [{ block: ["auto", ...O()] }],
			"min-block-size": [{ "min-block": ["auto", ...O()] }],
			"max-block-size": [{ "max-block": ["none", ...O()] }],
			w: [{ w: [
				s,
				"screen",
				...D()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...D()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...D()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...D()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...D()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...D()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Jt,
				Vt
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				en,
				Ut
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				jt,
				F
			] }],
			"font-family": [{ font: [
				Yt,
				Wt,
				t
			] }],
			"font-features": [{ "font-features": [F] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				I,
				F
			] }],
			"line-clamp": [{ "line-clamp": [
				kt,
				"none",
				I,
				Ht
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				I,
				F
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				I,
				F
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: k() }],
			"text-color": [{ text: k() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...de(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				kt,
				"from-font",
				"auto",
				I,
				Vt
			] }],
			"text-decoration-color": [{ decoration: k() }],
			"underline-offset": [{ "underline-offset": [
				kt,
				"auto",
				I,
				F
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				At,
				I,
				F
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				I,
				F
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				I,
				F
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: se() }],
			"bg-repeat": [{ bg: ce() }],
			"bg-size": [{ bg: le() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						At,
						I,
						F
					],
					radial: [
						"",
						I,
						F
					],
					conic: [
						"",
						At,
						I,
						F
					]
				},
				Qt,
				Kt
			] }],
			"bg-color": [{ bg: k() }],
			"gradient-from-pos": [{ from: A() }],
			"gradient-via-pos": [{ via: A() }],
			"gradient-to-pos": [{ to: A() }],
			"gradient-from": [{ from: k() }],
			"gradient-via": [{ via: k() }],
			"gradient-to": [{ to: k() }],
			rounded: [{ rounded: j() }],
			"rounded-s": [{ "rounded-s": j() }],
			"rounded-e": [{ "rounded-e": j() }],
			"rounded-t": [{ "rounded-t": j() }],
			"rounded-r": [{ "rounded-r": j() }],
			"rounded-b": [{ "rounded-b": j() }],
			"rounded-l": [{ "rounded-l": j() }],
			"rounded-ss": [{ "rounded-ss": j() }],
			"rounded-se": [{ "rounded-se": j() }],
			"rounded-ee": [{ "rounded-ee": j() }],
			"rounded-es": [{ "rounded-es": j() }],
			"rounded-tl": [{ "rounded-tl": j() }],
			"rounded-tr": [{ "rounded-tr": j() }],
			"rounded-br": [{ "rounded-br": j() }],
			"rounded-bl": [{ "rounded-bl": j() }],
			"border-w": [{ border: ue() }],
			"border-w-x": [{ "border-x": ue() }],
			"border-w-y": [{ "border-y": ue() }],
			"border-w-s": [{ "border-s": ue() }],
			"border-w-e": [{ "border-e": ue() }],
			"border-w-bs": [{ "border-bs": ue() }],
			"border-w-be": [{ "border-be": ue() }],
			"border-w-t": [{ "border-t": ue() }],
			"border-w-r": [{ "border-r": ue() }],
			"border-w-b": [{ "border-b": ue() }],
			"border-w-l": [{ "border-l": ue() }],
			"divide-x": [{ "divide-x": ue() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ue() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...de(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...de(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: k() }],
			"border-color-x": [{ "border-x": k() }],
			"border-color-y": [{ "border-y": k() }],
			"border-color-s": [{ "border-s": k() }],
			"border-color-e": [{ "border-e": k() }],
			"border-color-bs": [{ "border-bs": k() }],
			"border-color-be": [{ "border-be": k() }],
			"border-color-t": [{ "border-t": k() }],
			"border-color-r": [{ "border-r": k() }],
			"border-color-b": [{ "border-b": k() }],
			"border-color-l": [{ "border-l": k() }],
			"divide-color": [{ divide: k() }],
			"outline-style": [{ outline: [
				...de(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				kt,
				I,
				F
			] }],
			"outline-w": [{ outline: [
				"",
				kt,
				Jt,
				Vt
			] }],
			"outline-color": [{ outline: k() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				$t,
				qt
			] }],
			"shadow-color": [{ shadow: k() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				$t,
				qt
			] }],
			"inset-shadow-color": [{ "inset-shadow": k() }],
			"ring-w": [{ ring: ue() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: k() }],
			"ring-offset-w": [{ "ring-offset": [kt, Vt] }],
			"ring-offset-color": [{ "ring-offset": k() }],
			"inset-ring-w": [{ "inset-ring": ue() }],
			"inset-ring-color": [{ "inset-ring": k() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				$t,
				qt
			] }],
			"text-shadow-color": [{ "text-shadow": k() }],
			opacity: [{ opacity: [
				kt,
				I,
				F
			] }],
			"mix-blend": [{ "mix-blend": [
				...fe(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": fe() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [kt] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": pe() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": pe() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": k() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": k() }],
			"mask-image-t-from-pos": [{ "mask-t-from": pe() }],
			"mask-image-t-to-pos": [{ "mask-t-to": pe() }],
			"mask-image-t-from-color": [{ "mask-t-from": k() }],
			"mask-image-t-to-color": [{ "mask-t-to": k() }],
			"mask-image-r-from-pos": [{ "mask-r-from": pe() }],
			"mask-image-r-to-pos": [{ "mask-r-to": pe() }],
			"mask-image-r-from-color": [{ "mask-r-from": k() }],
			"mask-image-r-to-color": [{ "mask-r-to": k() }],
			"mask-image-b-from-pos": [{ "mask-b-from": pe() }],
			"mask-image-b-to-pos": [{ "mask-b-to": pe() }],
			"mask-image-b-from-color": [{ "mask-b-from": k() }],
			"mask-image-b-to-color": [{ "mask-b-to": k() }],
			"mask-image-l-from-pos": [{ "mask-l-from": pe() }],
			"mask-image-l-to-pos": [{ "mask-l-to": pe() }],
			"mask-image-l-from-color": [{ "mask-l-from": k() }],
			"mask-image-l-to-color": [{ "mask-l-to": k() }],
			"mask-image-x-from-pos": [{ "mask-x-from": pe() }],
			"mask-image-x-to-pos": [{ "mask-x-to": pe() }],
			"mask-image-x-from-color": [{ "mask-x-from": k() }],
			"mask-image-x-to-color": [{ "mask-x-to": k() }],
			"mask-image-y-from-pos": [{ "mask-y-from": pe() }],
			"mask-image-y-to-pos": [{ "mask-y-to": pe() }],
			"mask-image-y-from-color": [{ "mask-y-from": k() }],
			"mask-image-y-to-color": [{ "mask-y-to": k() }],
			"mask-image-radial": [{ "mask-radial": [I, F] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": pe() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": pe() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": k() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": k() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [kt] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": pe() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": pe() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": k() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": k() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: se() }],
			"mask-repeat": [{ mask: ce() }],
			"mask-size": [{ mask: le() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				I,
				F
			] }],
			filter: [{ filter: [
				"",
				"none",
				I,
				F
			] }],
			blur: [{ blur: me() }],
			brightness: [{ brightness: [
				kt,
				I,
				F
			] }],
			contrast: [{ contrast: [
				kt,
				I,
				F
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				$t,
				qt
			] }],
			"drop-shadow-color": [{ "drop-shadow": k() }],
			grayscale: [{ grayscale: [
				"",
				kt,
				I,
				F
			] }],
			"hue-rotate": [{ "hue-rotate": [
				kt,
				I,
				F
			] }],
			invert: [{ invert: [
				"",
				kt,
				I,
				F
			] }],
			saturate: [{ saturate: [
				kt,
				I,
				F
			] }],
			sepia: [{ sepia: [
				"",
				kt,
				I,
				F
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				I,
				F
			] }],
			"backdrop-blur": [{ "backdrop-blur": me() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				kt,
				I,
				F
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				kt,
				I,
				F
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				kt,
				I,
				F
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				kt,
				I,
				F
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				kt,
				I,
				F
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				kt,
				I,
				F
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				kt,
				I,
				F
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				kt,
				I,
				F
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				I,
				F
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				kt,
				"initial",
				I,
				F
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				I,
				F
			] }],
			delay: [{ delay: [
				kt,
				I,
				F
			] }],
			animate: [{ animate: [
				"none",
				v,
				I,
				F
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				I,
				F
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: he() }],
			"rotate-x": [{ "rotate-x": he() }],
			"rotate-y": [{ "rotate-y": he() }],
			"rotate-z": [{ "rotate-z": he() }],
			scale: [{ scale: ge() }],
			"scale-x": [{ "scale-x": ge() }],
			"scale-y": [{ "scale-y": ge() }],
			"scale-z": [{ "scale-z": ge() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: _e() }],
			"skew-x": [{ "skew-x": _e() }],
			"skew-y": [{ "skew-y": _e() }],
			transform: [{ transform: [
				I,
				F,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ve() }],
			"translate-x": [{ "translate-x": ve() }],
			"translate-y": [{ "translate-y": ve() }],
			"translate-z": [{ "translate-z": ve() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				At,
				I,
				F
			] }],
			accent: [{ accent: k() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: k() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				I,
				F
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
			"scrollbar-track-color": [{ "scrollbar-track": k() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				I,
				F
			] }],
			fill: [{ fill: ["none", ...k()] }],
			"stroke-w": [{ stroke: [
				kt,
				Jt,
				Vt,
				Ht
			] }],
			stroke: [{ stroke: ["none", ...k()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/utils/ui/cn.ts
function L(...e) {
	return fn(ze(e));
}
//#endregion
//#region src/config/RakitContext.tsx
var pn = {
	prefix: "rakit",
	enableIdentifiers: !0,
	theme: "light",
	components: {}
}, mn = ge(pn);
function hn({ config: e = {}, children: t }) {
	let n = Ce(() => ({
		...pn,
		...e,
		components: {
			...pn.components,
			...e.components || {}
		}
	}), [e]);
	return /* @__PURE__ */ N(mn.Provider, {
		value: n,
		children: t
	});
}
function gn() {
	return be(mn) || pn;
}
function _n(e) {
	return e;
}
function vn(e, t, n) {
	let r = t?.prefix || "rakit";
	return t?.enableIdentifiers === !1 ? {
		className: "",
		"data-rakit": e,
		...n ? { id: n } : {}
	} : {
		className: `${r}-${e}`,
		"data-rakit": e,
		...n ? { id: n } : {}
	};
}
//#endregion
//#region src/components/ui/button/index.tsx
var yn = {
	primary: "bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white shadow-2xs focus:ring-[#268d34] border border-transparent",
	secondary: "bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-[0.99] border border-transparent focus:ring-slate-300",
	outline: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-2xs focus:ring-slate-300",
	success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs focus:ring-emerald-500 border border-transparent active:scale-[0.99]",
	danger: "bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 focus:ring-rose-400 active:scale-[0.99]",
	warning: "bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 focus:ring-amber-400 active:scale-[0.99]",
	info: "bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 focus:ring-sky-400 active:scale-[0.99]",
	purple: "bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 focus:ring-purple-400 active:scale-[0.99]",
	subtle: "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 focus:ring-slate-300",
	ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-800 border border-transparent"
}, bn = {
	xs: "h-7 min-h-[28px] px-2.5 py-1 text-xs font-semibold gap-1.5",
	sm: "h-8 min-h-[32px] px-3 py-1.5 text-xs font-semibold gap-1.5",
	md: "h-10 min-h-[40px] px-4 py-2 text-sm font-semibold gap-2",
	lg: "h-11 min-h-[44px] px-5 py-2.5 text-base font-semibold gap-2.5",
	xl: "h-12 min-h-[48px] px-6 py-3 text-lg font-semibold gap-3",
	icon: "h-10 w-10 min-h-[40px] p-2 flex items-center justify-center"
};
function xn({ variant: e, size: t, children: n, className: r = "", disabled: i, isLoading: a = !1, leftIcon: o, rightIcon: s, fullWidth: c = !1, pill: l = !1, type: u = "button", id: d, style: f, ...p }) {
	let m = gn(), h = m?.components?.button, g = e || h?.defaultVariant || "outline", _ = t || h?.defaultSize || "md", v = h?.variants?.[g] || yn[g], y = h?.sizes?.[_] || bn[_], b = l ? "rounded-full" : _ === "xs" ? "rounded-md" : _ === "lg" || _ === "xl" ? "rounded-xl" : "rounded-lg", x = c ? "w-full" : "", S = vn("btn", m, d);
	return /* @__PURE__ */ P("button", {
		type: u,
		className: L("inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed", S.className, v, y, b, x, h?.className, r),
		"data-rakit": "btn",
		"data-variant": g,
		"data-size": _,
		disabled: i || a,
		style: {
			...h?.style,
			...f
		},
		...S.id ? { id: S.id } : {},
		...p,
		children: [
			a ? /* @__PURE__ */ N(te, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : o && /* @__PURE__ */ N("span", {
				className: "shrink-0",
				children: o
			}),
			n,
			!a && s && /* @__PURE__ */ N("span", {
				className: "shrink-0",
				children: s
			})
		]
	});
}
//#endregion
//#region src/components/ui/badge/index.tsx
var Sn = {
	default: "bg-slate-100 text-slate-700 border border-slate-200/80 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
	primary: "bg-emerald-50 text-emerald-800 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/80",
	success: "bg-emerald-50 text-emerald-800 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/80",
	warning: "bg-amber-50 text-amber-800 border border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/80",
	danger: "bg-rose-50 text-rose-800 border border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/80",
	info: "bg-blue-50 text-blue-800 border border-blue-200/80 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/80",
	purple: "bg-violet-50 text-violet-800 border border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800/80",
	subtle: "bg-slate-100/90 text-slate-600 border border-slate-200/50 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700/60",
	outline: "bg-transparent text-slate-700 border border-slate-300 dark:text-slate-300 dark:border-slate-700"
}, Cn = {
	xs: "h-5 min-h-[20px] px-2 text-[10px] font-semibold gap-1",
	sm: "h-6 min-h-[24px] px-2.5 text-xs font-semibold gap-1.5",
	md: "h-7 min-h-[28px] px-3 text-xs font-semibold gap-1.5",
	lg: "h-8 min-h-[32px] px-3.5 text-sm font-semibold gap-2",
	xl: "h-9 min-h-[36px] px-4 text-sm font-bold gap-2"
};
function wn({ variant: e, size: t, pill: n = !0, leftIcon: r, rightIcon: i, children: a, className: o = "", id: s, style: c, ...l }) {
	let u = gn(), d = u?.components?.badge, f = e || d?.defaultVariant || "default", p = t || d?.defaultSize || "sm", m = d?.variants?.[f] || Sn[f], h = Cn[p], g = n ? "rounded-full" : p === "xs" ? "rounded-sm" : p === "sm" || p === "md" ? "rounded-md" : "rounded-lg", _ = vn("badge", u, s);
	return /* @__PURE__ */ P("span", {
		className: L("inline-flex items-center justify-center select-none transition-all leading-none shrink-0", _.className, h, g, m, d?.className, o),
		"data-rakit": "badge",
		"data-variant": f,
		"data-size": p,
		style: {
			...d?.style,
			...c
		},
		..._.id ? { id: _.id } : {},
		...l,
		children: [
			r && /* @__PURE__ */ N("span", {
				className: "shrink-0 flex items-center",
				children: r
			}),
			/* @__PURE__ */ N("span", { children: a }),
			i && /* @__PURE__ */ N("span", {
				className: "shrink-0 flex items-center",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/card/CardContext.tsx
var Tn = ge(null);
function En({ value: e, children: t }) {
	return /* @__PURE__ */ N(Tn.Provider, {
		value: e,
		children: t
	});
}
function Dn() {
	return be(Tn);
}
//#endregion
//#region src/components/ui/card/CardHeader.tsx
function On({ children: e, className: t = "", title: n, description: r, icon: i, iconBgColor: a, badge: o, actionSlot: s, actions: l, collapsible: u, showCollapseTrigger: d = !0, onClick: f, onKeyDown: p, ...m }) {
	let h = Dn(), g = u ?? h?.collapsible ?? !1, _ = h?.isCollapsed ?? !1, v = h?.toggleCollapse ?? (() => {}), y = (e) => {
		f && f(e), g && !e.defaultPrevented && v();
	}, b = (e) => {
		p && p(e), g && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), v());
	}, x = !!(n || r || i || o || s || l);
	return /* @__PURE__ */ N("div", {
		role: g ? "button" : void 0,
		tabIndex: g ? 0 : void 0,
		"aria-expanded": g ? !_ : void 0,
		onClick: g ? y : f,
		onKeyDown: g ? b : p,
		className: L("px-5 py-3.5 flex items-center justify-between gap-3 transition-all", g && _ ? "border-b-0" : "border-b border-slate-200/70", g && "cursor-pointer select-none group", t),
		...m,
		children: x ? /* @__PURE__ */ P(Ee, { children: [/* @__PURE__ */ P("div", {
			className: "flex items-start gap-3 min-w-0",
			children: [i && /* @__PURE__ */ N("div", {
				className: L("p-2 rounded-xl border shadow-2xs shrink-0 transition-transform group-hover:scale-105", a || "bg-slate-50 text-slate-700 border-slate-200"),
				children: i
			}), /* @__PURE__ */ P("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ P("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [typeof n == "string" ? /* @__PURE__ */ N("h3", {
						className: "text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors",
						children: n
					}) : n, o]
				}), r && /* @__PURE__ */ N("p", {
					className: "text-xs text-slate-500 mt-0.5 leading-relaxed",
					children: r
				})]
			})]
		}), /* @__PURE__ */ P("div", {
			className: "flex items-center gap-2 shrink-0",
			children: [(s || l) && /* @__PURE__ */ N("div", {
				onClick: (e) => e.stopPropagation(),
				className: "flex items-center gap-2",
				children: s || l
			}), g && d && /* @__PURE__ */ N("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), v();
				},
				className: "p-1.5 rounded-lg text-slate-400 group-hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20",
				title: _ ? "Expand" : "Collapse",
				"aria-expanded": !_,
				children: /* @__PURE__ */ N(c, { className: L("w-4 h-4 transition-transform duration-200", !_ && "rotate-180 text-blue-600") })
			})]
		})] }) : /* @__PURE__ */ N(Ee, { children: /* @__PURE__ */ P("div", {
			className: "flex items-center justify-between gap-3 w-full",
			children: [e, g && d && /* @__PURE__ */ N("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), v();
				},
				className: "p-1.5 rounded-lg text-slate-400 group-hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 shrink-0",
				title: _ ? "Expand" : "Collapse",
				"aria-expanded": !_,
				children: /* @__PURE__ */ N(c, { className: L("w-4 h-4 transition-transform duration-200", !_ && "rotate-180 text-blue-600") })
			})]
		}) })
	});
}
//#endregion
//#region src/components/ui/card/CardTitle.tsx
function kn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("h3", {
		className: L("text-sm font-semibold text-slate-800 tracking-tight", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/CardDescription.tsx
function An({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("p", {
		className: L("text-xs text-slate-500 mt-0.5 leading-relaxed", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/CardContent.tsx
var jn = {
	none: "p-0",
	xSmall: "px-4 py-2",
	small: "px-5 py-3",
	medium: "px-5 py-4",
	large: "px-6 py-5"
}, Mn = {
	none: "",
	xSmall: "gap-1.5",
	small: "gap-2.5",
	medium: "gap-3.5",
	large: "gap-5",
	xLarge: "gap-7"
};
function Nn({ children: e, className: t = "", padding: n = "medium", gap: r = "medium", ...i }) {
	let a = Dn(), o = a?.collapsible ?? !1, s = a?.isCollapsed ?? !1, c = typeof r == "boolean" ? r ? "medium" : "none" : r ?? "medium", l = Mn[c] || "", u = c !== "none";
	return o ? /* @__PURE__ */ N("div", {
		"aria-hidden": s,
		className: L("grid transition-all duration-300 ease-in-out", s ? "grid-rows-[0fr] opacity-0 pointer-events-none" : "grid-rows-[1fr] opacity-100", t),
		...i,
		children: /* @__PURE__ */ N("div", {
			className: "overflow-hidden min-h-0",
			children: /* @__PURE__ */ N("div", {
				className: L(jn[n], u && "flex flex-col", l),
				children: e
			})
		})
	}) : /* @__PURE__ */ N("div", {
		className: L(jn[n], u && "flex flex-col", l, t),
		...i,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/CardFooter.tsx
function Pn({ children: e, className: t = "", ...n }) {
	let r = Dn(), i = r?.collapsible ?? !1, a = r?.isCollapsed ?? !1;
	return i && a ? null : /* @__PURE__ */ N("div", {
		className: L("px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-600 transition-colors", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/FeatureBanner.tsx
function Fn({ icon: e, iconBgColor: t = "bg-emerald-50 text-[#1b7e2e] border-emerald-200", title: n, badge: r, description: i, actionSlot: a, actions: o, tone: s = "emerald", className: c = "", ...l }) {
	let u = o || a, d = s === "emerald" ? "bg-gradient-to-br from-white via-emerald-50/40 to-emerald-50/20 border-emerald-200/90 text-slate-900 shadow-xs" : s === "slate" ? "bg-gradient-to-br from-white via-slate-50 to-slate-100/50 border-slate-200 text-slate-900 shadow-xs" : "bg-white border-slate-200 text-slate-900 shadow-xs";
	return /* @__PURE__ */ N(Wn, {
		...l,
		padding: "large",
		className: `relative overflow-hidden ${d} ${c}`,
		children: /* @__PURE__ */ P("div", {
			className: "relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ P("div", {
				className: "flex items-start gap-3.5 min-w-0",
				children: [e && /* @__PURE__ */ N("div", {
					className: `p-2.5 rounded-xl border shadow-2xs shrink-0 ${t}`,
					children: e
				}), /* @__PURE__ */ P("div", {
					className: "space-y-1 min-w-0",
					children: [/* @__PURE__ */ P("div", {
						className: "flex items-center gap-2.5 flex-wrap",
						children: [/* @__PURE__ */ N("h2", {
							className: "text-lg md:text-xl font-bold tracking-tight text-slate-900",
							children: n
						}), r]
					}), i && /* @__PURE__ */ N("div", {
						className: "text-xs md:text-sm text-slate-600 leading-relaxed max-w-3xl",
						children: i
					})]
				})]
			}), u && /* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 md:shrink-0 flex-wrap",
				children: u
			})]
		})
	});
}
//#endregion
//#region src/components/ui/container/ActionBar.tsx
var In = {
	top: "border-b",
	bottom: "border-t mt-auto",
	"sticky-top": "sticky top-0 z-10 border-b backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.03)]",
	"sticky-bottom": "sticky bottom-0 z-10 border-t mt-auto backdrop-blur-md shadow-[0_-4px_12px_rgba(0,0,0,0.03)]",
	floating: "sticky bottom-3 z-10 mx-3 mb-3 mt-auto rounded-xl shadow-lg ring-1 ring-black/5 backdrop-blur-md"
}, Ln = {
	left: "justify-start",
	right: "justify-end",
	between: "justify-between",
	center: "justify-center"
}, Rn = {
	tight: "py-2 px-3.5 gap-2 text-xs",
	normal: "py-2.5 px-5 gap-3 text-sm",
	relaxed: "py-3.5 px-6 gap-4 text-base"
}, zn = {
	default: "bg-gradient-to-r from-slate-50/90 via-white to-slate-50/90 text-slate-700 shadow-2xs",
	floating: "border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-md ring-1 ring-slate-900/5 text-slate-700",
	subtle: "bg-slate-50/60 text-slate-600",
	glass: "bg-white/80 backdrop-blur-md text-slate-700 shadow-2xs",
	contrast: "bg-slate-100/95 text-slate-800 border-slate-200"
};
function Bn({ position: e = "bottom", align: t = "between", density: n = "normal", variant: r = "default", bordered: i = !0, className: a = "", children: o, leftContent: s, rightContent: c, ...l }) {
	let u = !!(s || c);
	return /* @__PURE__ */ N("div", {
		role: "toolbar",
		"aria-orientation": "horizontal",
		className: L("rakit-action-bar w-full flex items-center transition-all", zn[e === "floating" ? "floating" : r], i && e !== "floating" && "border-slate-200/90", In[e], !u && Ln[t], Rn[n], a),
		...l,
		children: u ? /* @__PURE__ */ P("div", {
			className: "w-full flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ N("div", {
				className: "flex items-center gap-2.5 min-w-0 flex-wrap",
				children: s
			}), /* @__PURE__ */ P("div", {
				className: "flex items-center gap-2 shrink-0 flex-wrap",
				children: [c, o]
			})]
		}) : o
	});
}
//#endregion
//#region src/components/ui/card/index.tsx
var Vn = {
	none: "p-0",
	xSmall: "p-2",
	small: "p-4",
	medium: "p-5",
	large: "p-6"
}, Hn = {
	none: "",
	xSmall: "gap-1.5",
	small: "gap-2.5",
	medium: "gap-3.5",
	large: "gap-5",
	xLarge: "gap-7"
}, Un = {
	default: "bg-white border border-slate-200/90 shadow-xs text-slate-900",
	light: "bg-white border border-slate-200/80 shadow-xs text-slate-900",
	bordered: "bg-white border border-slate-200 shadow-none text-slate-900",
	ghost: "bg-transparent border-transparent shadow-none text-slate-900",
	flat: "bg-slate-50/90 border border-slate-200/80 shadow-none text-slate-900",
	elevated: "bg-white border border-slate-200/70 shadow-md text-slate-900"
};
function Wn({ children: e, className: t = "", padding: n, gap: r = "medium", variant: i, hoverable: a = !1, collapsible: o = !1, defaultCollapsed: s = !1, isCollapsed: c, onToggleCollapse: l, title: u, description: d, icon: f, iconBgColor: p, badge: m, actionSlot: h, actions: g, headerClassName: _ = "", bodyClassName: v = "", id: y, style: b, ...x }) {
	let S = gn(), C = S?.components?.card, w = i || C?.defaultVariant || "default", T = n || C?.defaultPadding || "medium", ee = C?.variants?.[w] || Un[w], te = C?.padding?.[T] || Vn[T], ne = vn("card", S, y), [re, ie] = M(s), ae = c !== void 0, E = ae ? c : re, D = () => {
		let e = !E;
		ae || ie(e), l?.(e);
	}, oe = Ce(() => ({
		collapsible: o,
		isCollapsed: E,
		toggleCollapse: D
	}), [o, E]), O = !!(u || d || f || m || h || g), k = typeof r == "boolean" ? r ? "medium" : "none" : r ?? "none", se = !O && k !== "none" ? `flex flex-col ${Hn[k]}` : "";
	return /* @__PURE__ */ N(En, {
		value: oe,
		children: /* @__PURE__ */ N("div", {
			className: L("rounded-2xl transition-all overflow-hidden", ne.className, ee, a && "hover:shadow-md hover:border-slate-300", !O && te, se, C?.className, t),
			"data-rakit": "card",
			"data-variant": w,
			style: {
				...C?.style,
				...b
			},
			...ne.id ? { id: ne.id } : {},
			...x,
			children: O ? /* @__PURE__ */ P(Ee, { children: [/* @__PURE__ */ N(On, {
				title: u,
				description: d,
				icon: f,
				iconBgColor: p,
				badge: m,
				actionSlot: h,
				actions: g,
				className: _
			}), /* @__PURE__ */ N(Nn, {
				padding: n === "none" ? "medium" : n,
				gap: r,
				className: v,
				children: e
			})] }) : e
		})
	});
}
Wn.Header = On, Wn.Title = kn, Wn.Description = An, Wn.Content = Nn, Wn.Footer = Pn, Wn.FeatureBanner = Fn, Wn.ActionBar = Bn;
//#endregion
//#region src/components/ui/modal/ModalBody.tsx
function Gn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-modal-body p-6 overflow-y-auto max-h-[calc(85vh-120px)]", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/ModalDescription.tsx
function Kn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("p", {
		className: L("rakit-modal-description text-xs text-slate-500 mt-0.5 leading-relaxed", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/ModalFooter.tsx
function qn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-modal-footer px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-2.5 shrink-0", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/ModalHeader.tsx
function Jn({ children: e, onClose: t, className: n = "" }) {
	return /* @__PURE__ */ P("div", {
		className: L("rakit-modal-header flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0", n),
		children: [/* @__PURE__ */ N("div", {
			className: "min-w-0 flex-1",
			children: e
		}), t && /* @__PURE__ */ N("button", {
			type: "button",
			onClick: t,
			className: "text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-3",
			"aria-label": "Tutup modal",
			children: /* @__PURE__ */ N(pe, { className: "w-4 h-4" })
		})]
	});
}
//#endregion
//#region src/components/ui/modal/ModalTitle.tsx
function Yn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("h3", {
		className: L("rakit-modal-title text-sm font-semibold text-slate-800 tracking-tight flex items-center gap-2", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/index.tsx
var Xn = {
	xs: "max-w-xs sm:max-w-sm",
	sm: "max-w-sm sm:max-w-md",
	md: "max-w-md sm:max-w-lg",
	lg: "max-w-lg sm:max-w-2xl",
	xl: "max-w-2xl sm:max-w-4xl",
	"2xl": "max-w-2xl sm:max-w-4xl",
	full: "max-w-6xl w-[95vw]"
};
function Zn({ id: e, isOpen: t, onClose: n, title: r, description: i, icon: a, children: o, footer: s, size: c = "md", className: l = "", contentClassName: u = "", closeOnEsc: d = !0, closeOnOverlayClick: f = !0, showCloseButton: p = !0, backdropBlur: m = !0, trapFocus: h = !0 }) {
	let g = gn(), _ = vn("modal", g, e), v = g.components?.modal, y = we(null), b = we(null);
	if (xe(() => {
		if (!t) return;
		if (typeof document < "u" && (b.current = document.activeElement), h && y.current) {
			let e = [
				"a[href]",
				"button:not([disabled])",
				"textarea:not([disabled])",
				"input:not([disabled])",
				"select:not([disabled])",
				"[tabindex]:not([tabindex=\"-1\"])"
			].join(", "), t = y.current.querySelectorAll(e);
			t.length > 0 ? requestAnimationFrame(() => {
				t[0]?.focus();
			}) : y.current.focus();
		}
		let e = (e) => {
			if (d && e.key === "Escape") e.stopPropagation(), n();
			else if (h && e.key === "Tab" && y.current) {
				let t = [
					"a[href]",
					"button:not([disabled])",
					"textarea:not([disabled])",
					"input:not([disabled])",
					"select:not([disabled])",
					"[tabindex]:not([tabindex=\"-1\"])"
				].join(", "), n = Array.from(y.current.querySelectorAll(t));
				if (n.length === 0) {
					e.preventDefault();
					return;
				}
				let r = n[0], i = n[n.length - 1];
				e.shiftKey ? (document.activeElement === r || !y.current.contains(document.activeElement)) && (e.preventDefault(), i.focus()) : (document.activeElement === i || !y.current.contains(document.activeElement)) && (e.preventDefault(), r.focus());
			}
		};
		window.addEventListener("keydown", e);
		let r = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			window.removeEventListener("keydown", e), document.body.style.overflow = r, b.current && typeof b.current.focus == "function" && b.current.focus();
		};
	}, [
		t,
		d,
		n,
		h
	]), !t || typeof document > "u") return null;
	let x = /* @__PURE__ */ P("div", {
		id: _.id,
		"data-rakit": _["data-rakit"],
		className: L("rakit-modal fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto", _.className, v?.className, l),
		style: v?.style,
		role: "dialog",
		"aria-modal": "true",
		children: [/* @__PURE__ */ N("div", {
			className: L("rakit-modal-overlay fixed inset-0 bg-slate-900/60 transition-opacity animate-in fade-in duration-200", m && "backdrop-blur-xs"),
			onClick: () => {
				f && n();
			},
			"aria-hidden": "true"
		}), /* @__PURE__ */ P("div", {
			ref: y,
			tabIndex: -1,
			className: L("rakit-modal-content relative z-10 w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden flex flex-col focus:outline-hidden transition-all animate-in zoom-in-95 fade-in duration-200", Xn[c], u),
			onClick: (e) => e.stopPropagation(),
			children: [
				(r || p) && /* @__PURE__ */ N(Jn, {
					onClose: p ? n : void 0,
					children: /* @__PURE__ */ P("div", {
						className: "flex items-center gap-2.5",
						children: [a && /* @__PURE__ */ N("div", {
							className: "text-emerald-600 shrink-0",
							children: a
						}), /* @__PURE__ */ P("div", { children: [r && /* @__PURE__ */ N(Yn, { children: r }), i && /* @__PURE__ */ N(Kn, { children: i })] })]
					})
				}),
				r || s ? /* @__PURE__ */ N(Gn, { children: o }) : /* @__PURE__ */ N("div", {
					className: "flex-1 flex flex-col min-h-0 overflow-hidden",
					children: o
				}),
				s && /* @__PURE__ */ N(qn, { children: s })
			]
		})]
	});
	return De(x, document.body);
}
Zn.Header = Jn, Zn.Title = Yn, Zn.Description = Kn, Zn.Body = Gn, Zn.Footer = qn;
//#endregion
//#region src/components/ui/empty-state/index.tsx
var Qn = {
	404: {
		title: "Halaman Tidak Ditemukan",
		description: "Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.",
		getIcon: (e) => /* @__PURE__ */ P("div", {
			className: "relative flex items-center justify-center",
			children: [/* @__PURE__ */ N("div", {
				className: L("rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 shadow-2xs", e ? "w-8 h-8" : "w-12 h-12"),
				children: /* @__PURE__ */ N(b, { className: e ? "w-4 h-4" : "w-6 h-6" })
			}), /* @__PURE__ */ N("span", {
				className: "absolute -top-1 -right-1 text-[8px] font-bold px-1 py-0.2 rounded-full bg-rose-100 text-rose-700 border border-rose-200",
				children: "404"
			})]
		})
	},
	error: {
		title: "Terjadi Kesalahan Sistem",
		description: "Gagal memproses permintaan. Silakan muat ulang atau coba beberapa saat lagi.",
		getIcon: (e) => /* @__PURE__ */ N("div", {
			className: L("rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-2xs", e ? "w-8 h-8" : "w-12 h-12"),
			children: /* @__PURE__ */ N(t, { className: e ? "w-4 h-4" : "w-6 h-6" })
		})
	},
	"no-connection": {
		title: "Koneksi Terputus",
		description: "Tidak dapat terhubung ke server. Periksa jaringan internet atau firewall Anda.",
		getIcon: (e) => /* @__PURE__ */ N("div", {
			className: L("rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-2xs", e ? "w-8 h-8" : "w-12 h-12"),
			children: /* @__PURE__ */ N(fe, { className: e ? "w-4 h-4" : "w-6 h-6" })
		})
	},
	search: {
		title: "Hasil Pencarian Nihil",
		description: "Tidak ditemukan data yang cocok dengan kriteria kata kunci pencarian Anda.",
		getIcon: (e) => /* @__PURE__ */ N("div", {
			className: L("rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 shadow-2xs", e ? "w-8 h-8" : "w-12 h-12"),
			children: /* @__PURE__ */ N(se, { className: e ? "w-4 h-4" : "w-6 h-6" })
		})
	},
	empty: {
		title: "Belum Ada Data",
		description: "Data belum tersedia atau belum ada item yang dibuat pada segmen ini.",
		getIcon: (e) => /* @__PURE__ */ N("div", {
			className: L("rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-2xs", e ? "w-8 h-8" : "w-12 h-12"),
			children: /* @__PURE__ */ N(T, { className: e ? "w-4 h-4" : "w-6 h-6" })
		})
	}
};
function $n({ id: e, preset: t, icon: n, title: r, description: i, action: a, compact: o = !1, theme: s = "light", className: c = "" }) {
	let l = gn(), u = vn("empty-state", l, e), d = l.components?.emptyState, f = s === "dark", p = t ? Qn[t] : void 0, m = r ?? p?.title ?? "Tidak Ada Data", h = i ?? p?.description, g = n ?? (p ? p.getIcon(o) : void 0);
	return /* @__PURE__ */ P("div", {
		id: u.id,
		"data-rakit": u["data-rakit"],
		className: L("rakit-empty-state flex flex-col items-center justify-center text-center rounded-xl select-none transition-colors", f ? "bg-slate-950/60 text-slate-300" : "bg-slate-50/40 text-slate-700", o ? "p-4 sm:p-5 gap-2" : "p-8 sm:p-12 gap-3", u.className, d?.className, c),
		style: d?.style,
		children: [
			g && /* @__PURE__ */ N("div", {
				className: "shrink-0",
				children: p && !n ? g : /* @__PURE__ */ N("div", {
					className: L("rounded-xl shadow-2xs flex items-center justify-center shrink-0", f ? "bg-slate-900 border border-slate-800 text-slate-400" : "bg-white border border-slate-200/70 text-slate-400", o ? "w-8 h-8" : "w-11 h-11"),
					children: g
				})
			}),
			/* @__PURE__ */ P("div", {
				className: "max-w-xs space-y-0.5",
				children: [/* @__PURE__ */ N("h4", {
					className: L("text-xs sm:text-sm font-semibold tracking-tight leading-snug", f ? "text-slate-200" : "text-slate-700"),
					children: m
				}), h && /* @__PURE__ */ N("p", {
					className: L("text-[11px] sm:text-xs leading-relaxed", f ? "text-slate-400" : "text-slate-500"),
					children: h
				})]
			}),
			a && /* @__PURE__ */ N("div", {
				className: "mt-1",
				children: a
			})
		]
	});
}
//#endregion
//#region src/components/ui/field/checkbox/Checkbox.tsx
var er = ve(({ id: e, checked: t = !1, indeterminate: n = !1, onChange: r, label: i, description: a, error: s, disabled: c = !1, size: l = "md", variant: u = "default", className: d, wrapperClassName: f, ...p }, m) => {
	let h = gn(), g = Se(), _ = e || g, v = vn("checkbox", h, _), y = we(null);
	xe(() => {
		let e = m && "current" in m && m.current ? m.current : y.current;
		e && (e.indeterminate = n);
	}, [n, m]);
	let b = {
		xs: "w-3.5 h-3.5 rounded",
		sm: "w-4 h-4 rounded",
		md: "w-5 h-5 rounded-md",
		lg: "w-6 h-6 rounded-lg",
		xl: "w-7 h-7 rounded-lg"
	}, x = {
		xs: "w-2.5 h-2.5 stroke-[3]",
		sm: "w-3 h-3 stroke-[3]",
		md: "w-3.5 h-3.5 stroke-[2.5]",
		lg: "w-4 h-4 stroke-[2.5]",
		xl: "w-5 h-5 stroke-[2.5]"
	};
	return /* @__PURE__ */ P("label", {
		htmlFor: _,
		className: L("rakit-checkbox-wrapper relative flex items-start gap-3 select-none transition-all cursor-pointer", u === "card" && L("p-3.5 rounded-xl border bg-slate-50/60 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors", t ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 ring-1 ring-emerald-500/20" : "border-slate-200 dark:border-slate-800"), c && "opacity-60 cursor-not-allowed hover:bg-transparent", f),
		children: [/* @__PURE__ */ P("div", {
			className: "relative flex items-center pt-0.5",
			children: [/* @__PURE__ */ N("input", {
				ref: m || y,
				id: v.id,
				"data-rakit": v["data-rakit"],
				type: "checkbox",
				checked: t,
				onChange: (e) => r?.(e.target.checked),
				disabled: c,
				className: "sr-only peer",
				...p
			}), /* @__PURE__ */ N("div", {
				className: L("rakit-checkbox flex items-center justify-center border transition-all duration-150 shadow-2xs peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500/30 peer-focus-visible:ring-offset-1", v.className, b[l], t || n ? "bg-emerald-600 border-emerald-600 text-white shadow-emerald-500/20" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:border-slate-400", !!s && "border-rose-400 bg-rose-50/50", c && "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 cursor-not-allowed", d),
				children: n ? /* @__PURE__ */ N(re, { className: x[l] }) : t ? /* @__PURE__ */ N(o, { className: x[l] }) : null
			})]
		}), (i || a) && /* @__PURE__ */ P("div", {
			className: "flex flex-col",
			children: [
				i && /* @__PURE__ */ N("span", {
					className: L("font-medium text-slate-800 transition-colors leading-snug", l === "xs" || l === "sm" ? "text-xs" : l === "lg" ? "text-base" : l === "xl" ? "text-lg" : "text-sm", c && "text-slate-400"),
					children: i
				}),
				a && /* @__PURE__ */ N("span", {
					className: L("text-slate-500 text-xs mt-0.5 leading-normal", c && "text-slate-400"),
					children: a
				}),
				s && /* @__PURE__ */ N("span", {
					className: "text-xs text-rose-500 font-medium mt-1",
					children: s
				})
			]
		})]
	});
});
er.displayName = "Checkbox";
//#endregion
//#region src/components/ui/table/index.tsx
var tr = {
	sm: "py-2.5 px-3.5 text-xs",
	md: "py-3 px-4 text-xs sm:text-[13px]",
	lg: "py-3.5 px-4 text-sm"
}, nr = {
	sm: "py-2 px-3 text-xs",
	md: "py-3.5 px-3.5 text-sm",
	lg: "py-4 px-4 text-sm"
};
function rr({ id: e, data: t, columns: n, rowKey: o, emptyTitle: s = "Tidak Ada Data", emptyMessage: c = "No data available", emptyIcon: l, emptySlot: u, defaultSortKey: d, defaultSortDirection: f = "asc", className: p = "", tableClassName: m = "", stickyHeader: h = !0, size: g = "md", isLoading: _ = !1, loadingMessage: v = "Memuat data...", loadingSlot: y, skeletonRows: b = 0, rowSelection: x, selectedRowKeys: S, onSelectionChange: C, onRowClick: w, rowClassName: T, bordered: ee = !1, striped: ne = !1 }) {
	let re = gn(), ie = vn("table", re, e), ae = re.components?.table, [E, D] = M(d || null), [oe, O] = M(f), k = Ce(() => {
		if (x) return x;
		if (S !== void 0 || C !== void 0) return {
			selectedRowKeys: S,
			onChange: C
		};
	}, [
		x,
		S,
		C
	]), se = (e, t) => {
		t && (E === e ? oe === "asc" ? O("desc") : (D(null), O("asc")) : (D(e), O("asc")));
	}, ce = (e, t) => o ? o(e, t) : e?.id ?? t, le = Ce(() => {
		if (!E) return t;
		let e = n.find((e) => e.key === E);
		return e ? [...t].sort((t, n) => {
			let r = e.sortValue ? e.sortValue(t) : t[E], i = e.sortValue ? e.sortValue(n) : n[E];
			if (typeof r == "string" && (r = r.toLowerCase()), typeof i == "string" && (i = i.toLowerCase()), r === i) return 0;
			if (r == null) return 1;
			if (i == null) return -1;
			let a = r > i ? 1 : -1;
			return oe === "asc" ? a : -a;
		}) : t;
	}, [
		t,
		E,
		oe,
		n
	]), A = k?.selectedRowKeys || [], j = Ce(() => k ? le.filter((e) => !k.getCheckboxProps?.(e)?.disabled) : [], [k, le]), ue = Ce(() => !k || j.length === 0 ? !1 : j.every((e, t) => A.includes(ce(e, t))), [
		k,
		j,
		A
	]), de = Ce(() => !k || j.length === 0 ? !1 : !ue && j.some((e, t) => A.includes(ce(e, t))), [
		k,
		j,
		A,
		ue
	]), fe = (e) => {
		if (k?.onChange) {
			if (e) {
				let e = j.map((e, t) => ce(e, t)), t = Array.from(/* @__PURE__ */ new Set([...A, ...e])), n = le.filter((e, n) => t.includes(ce(e, n)));
				k.onChange(t, n);
			} else {
				let e = new Set(j.map((e, t) => ce(e, t))), t = A.filter((t) => !e.has(t)), n = le.filter((e, n) => t.includes(ce(e, n)));
				k.onChange(t, n);
			}
		}
	}, pe = (e, t, n) => {
		if (!k?.onChange) return;
		let r = ce(e, t), i = n ? [...A, r] : A.filter((e) => e !== r), a = le.filter((e, t) => i.includes(ce(e, t)));
		k.onChange(i, a);
	}, me = n.length + +!!k, he = g === "sm" ? "xs" : "sm";
	return /* @__PURE__ */ N("div", {
		id: ie.id,
		"data-rakit": ie["data-rakit"],
		className: L("rakit-table-wrapper w-full overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs", ie.className, ae?.className, p),
		style: ae?.style,
		children: /* @__PURE__ */ P("table", {
			className: L("rakit-table w-full text-left border-collapse", m),
			children: [/* @__PURE__ */ N("thead", { children: /* @__PURE__ */ P("tr", {
				className: L("border-b border-slate-200/90 dark:border-slate-800 font-semibold text-slate-700 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xs select-none", h ? "sticky top-0 z-10" : "", tr[g]),
				children: [k && /* @__PURE__ */ N("th", {
					className: L(tr[g], "w-12 text-center shrink-0 border-r border-slate-200/60 dark:border-slate-800"),
					children: /* @__PURE__ */ N("div", {
						className: "flex items-center justify-center",
						children: /* @__PURE__ */ N(er, {
							size: he,
							checked: ue,
							indeterminate: de,
							disabled: j.length === 0,
							onChange: fe,
							"aria-label": "Pilih semua baris"
						})
					})
				}), n.map((e) => {
					let t = E === e.key, n = e.sticky === "left" ? "sticky left-0 z-20 bg-slate-50 dark:bg-slate-900 shadow-[1px_0_0_0_rgb(226,232,240)] dark:shadow-[1px_0_0_0_rgb(30,41,59)]" : e.sticky === "right" ? "sticky right-0 z-20 bg-slate-50 dark:bg-slate-900 shadow-[-1px_0_0_0_rgb(226,232,240)] dark:shadow-[-1px_0_0_0_rgb(30,41,59)]" : "";
					return /* @__PURE__ */ N("th", {
						style: { width: e.width },
						className: L(tr[g], "transition-colors", n, e.sortable ? "cursor-pointer hover:bg-slate-100/90 dark:hover:bg-slate-800/90" : "", e.headerClassName),
						onClick: () => se(e.key, e.sortable),
						children: /* @__PURE__ */ P("div", {
							className: L("flex items-center gap-1.5", e.align === "center" ? "justify-center" : e.align === "right" ? "justify-end" : "justify-start"),
							children: [/* @__PURE__ */ N("span", { children: e.title }), e.sortable && /* @__PURE__ */ N("span", {
								className: "shrink-0 text-slate-400",
								children: t ? N(oe === "asc" ? i : r, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ N(a, { className: "w-3 h-3 text-slate-300 opacity-60" })
							})]
						})
					}, e.key);
				})]
			}) }), /* @__PURE__ */ N("tbody", {
				className: "divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300",
				children: _ ? y ? /* @__PURE__ */ N("tr", { children: /* @__PURE__ */ N("td", {
					colSpan: me,
					children: y
				}) }) : b > 0 ? Array.from({ length: b }).map((e, t) => /* @__PURE__ */ P("tr", {
					className: "animate-pulse",
					children: [k && /* @__PURE__ */ N("td", {
						className: L(nr[g], "w-12 text-center"),
						children: /* @__PURE__ */ N("div", { className: "w-4 h-4 mx-auto rounded bg-slate-200/70 dark:bg-slate-700/70" })
					}), n.map((e, n) => {
						let r = 60 + (t + n) * 17 % 35 + "%";
						return /* @__PURE__ */ N("td", {
							className: L(nr[g], ee && "border-r border-slate-100 dark:border-slate-800"),
							children: /* @__PURE__ */ N("div", {
								className: "h-3.5 rounded-md bg-slate-200/80 dark:bg-slate-700/80",
								style: { width: e.width ? "80%" : r }
							})
						}, `skeleton-cell-${n}`);
					})]
				}, `skeleton-${t}`)) : /* @__PURE__ */ N("tr", { children: /* @__PURE__ */ N("td", {
					colSpan: me,
					className: "py-12 px-4 text-center",
					children: /* @__PURE__ */ P("div", {
						className: "flex flex-col items-center justify-center gap-2.5 text-slate-500 dark:text-slate-400",
						children: [/* @__PURE__ */ N(te, { className: "w-6 h-6 animate-spin text-emerald-600" }), /* @__PURE__ */ N("span", {
							className: "text-xs font-medium",
							children: v
						})]
					})
				}) }) : le.length === 0 ? /* @__PURE__ */ N("tr", { children: /* @__PURE__ */ N("td", {
					colSpan: me,
					className: "py-8 px-4 text-center",
					children: u || /* @__PURE__ */ N($n, {
						compact: g === "sm",
						className: "!border-0 !bg-transparent",
						icon: l,
						title: s,
						description: c
					})
				}) }) : le.map((e, t) => {
					let r = ce(e, t), i = A.includes(r), a = !!w, o = k?.getCheckboxProps?.(e) || {}, s = typeof T == "function" ? T(e, t) : T;
					return /* @__PURE__ */ P("tr", {
						onClick: () => w?.(e, t),
						className: L("transition-colors group", i ? "bg-emerald-50/60 dark:bg-emerald-950/20" : ne && t % 2 == 1 ? "bg-slate-50/40 dark:bg-slate-800/30" : "bg-white dark:bg-slate-900", a ? "cursor-pointer hover:bg-emerald-50/40 dark:hover:bg-emerald-950/30" : !i && "hover:bg-slate-50/70 dark:hover:bg-slate-800/50", s),
						children: [k && /* @__PURE__ */ N("td", {
							className: L(nr[g], "w-12 text-center shrink-0 border-r border-slate-100 dark:border-slate-800", i && "border-emerald-200/60 dark:border-emerald-900/60"),
							onClick: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ N("div", {
								className: "flex items-center justify-center",
								children: /* @__PURE__ */ N(er, {
									size: he,
									checked: i,
									disabled: o.disabled,
									onChange: (n) => pe(e, t, n),
									"aria-label": `Pilih baris ${t + 1}`,
									...o
								})
							})
						}), n.map((n) => {
							let r = n.sticky === "left" ? "sticky left-0 z-10 bg-white dark:bg-slate-900 group-hover:bg-slate-50/90 dark:group-hover:bg-slate-800/90 shadow-[1px_0_0_0_rgb(241,245,249)] dark:shadow-[1px_0_0_0_rgb(30,41,59)]" : n.sticky === "right" ? "sticky right-0 z-10 bg-white dark:bg-slate-900 group-hover:bg-slate-50/90 dark:group-hover:bg-slate-800/90 shadow-[-1px_0_0_0_rgb(241,245,249)] dark:shadow-[-1px_0_0_0_rgb(30,41,59)]" : "", i = n.render ? n.render(e, t) : e[n.key];
							return /* @__PURE__ */ N("td", {
								className: L(nr[g], r, n.align === "center" ? "text-center" : n.align === "right" ? "text-right" : "text-left", ee ? "border-r border-slate-100 dark:border-slate-800 last:border-r-0" : "", n.className),
								children: i
							}, n.key);
						})]
					}, r);
				})
			})]
		})
	});
}
var ir = rr, ar = ve(({ label: e, error: n, helperText: r, hint: i, required: a, optional: o, disabled: s, size: c = "md", layout: l = "vertical", htmlFor: u, className: d, labelClassName: f, children: p, ...m }, h) => {
	let g = l === "horizontal", _ = {
		xs: "text-[11px] font-medium",
		sm: "text-xs font-medium",
		md: "text-sm font-medium",
		lg: "text-base font-semibold",
		xl: "text-lg font-semibold"
	};
	return /* @__PURE__ */ P("div", {
		ref: h,
		className: L("w-full rakit-field-wrapper", g ? "grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start" : "space-y-1.5", s && "opacity-60 cursor-not-allowed", d),
		"data-rakit": "field-wrapper",
		"data-size": c,
		...m,
		children: [e ? /* @__PURE__ */ N("div", {
			className: L(g && "pt-2 md:text-right"),
			children: /* @__PURE__ */ P("label", {
				htmlFor: u,
				className: L("inline-flex items-center gap-1 font-medium text-slate-700 select-none transition-colors", n ? "text-rose-600" : "", _, f),
				children: [
					/* @__PURE__ */ N("span", { children: e }),
					a && /* @__PURE__ */ N("span", {
						className: "text-rose-500 font-bold ml-0.5",
						"aria-hidden": "true",
						children: "*"
					}),
					o && /* @__PURE__ */ N("span", {
						className: "text-[11px] font-normal text-slate-400 ml-1",
						children: "(Opsional)"
					}),
					i && /* @__PURE__ */ N("span", {
						className: "text-slate-400 hover:text-slate-600 cursor-help transition-colors",
						title: typeof i == "string" ? i : void 0,
						children: /* @__PURE__ */ N(w, { className: "w-3.5 h-3.5 inline ml-0.5" })
					})
				]
			})
		}) : null, /* @__PURE__ */ P("div", {
			className: L("w-full", g && (e ? "md:col-span-2" : "md:col-span-3")),
			children: [p, n ? /* @__PURE__ */ P("p", {
				className: "mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1.5 animate-in fade-in slide-in-from-top-0.5 duration-150",
				children: [/* @__PURE__ */ N(t, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ N("span", { children: n })]
			}) : r ? /* @__PURE__ */ N("p", {
				className: "mt-1.5 text-xs text-slate-500",
				children: r
			}) : null]
		})]
	});
});
ar.displayName = "FieldWrapper";
//#endregion
//#region src/components/ui/field/text-field/TextField.tsx
var or = ve(({ type: e = "text", id: t, name: n, value: r, defaultValue: i, onChange: a, placeholder: o, disabled: s, readOnly: c, required: l, optional: u, label: d, error: f, helperText: p, hint: m, size: h, layout: v = "vertical", leftIcon: y, rightIcon: b, prefixText: x, suffixText: S, clearable: C, onClear: w, isPasswordToggle: T = !0, wrapperClassName: ee, inputWrapperClassName: te, className: ne, ...re }, ie) => {
	let ae = gn(), E = ae?.components?.field, D = h || E?.defaultSize || "md", oe = Se(), O = t || oe, k = vn("input", ae, t), [se, ce] = M(i ?? ""), le = r !== void 0, A = le ? r : se, j = A !== void 0 && String(A).length > 0, [ue, de] = M(!1), fe = e === "password", me = fe && ue ? "text" : e, he = {
		xs: "h-7 min-h-[28px]",
		sm: "h-8 min-h-[32px]",
		md: "h-10 min-h-[40px]",
		lg: "h-11 min-h-[44px]",
		xl: "h-12 min-h-[48px]"
	}, ge = {
		xs: "text-xs",
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base",
		xl: "text-lg"
	}, _e = {
		xs: "rounded-md",
		sm: "rounded-lg",
		md: "rounded-lg",
		lg: "rounded-xl",
		xl: "rounded-xl"
	}, ve = {
		xs: L(x ? "pl-2" : y ? "pl-1.5" : "pl-2.5", S ? "pr-2" : b || fe && T || C && j ? "pr-1.5" : "pr-2.5"),
		sm: L(x ? "pl-2.5" : y ? "pl-2" : "pl-3", S ? "pr-2.5" : b || fe && T || C && j ? "pr-2" : "pr-3"),
		md: L(x ? "pl-3" : y ? "pl-2.5" : "pl-3.5", S ? "pr-3" : b || fe && T || C && j ? "pr-2.5" : "pr-3.5"),
		lg: L(x ? "pl-3.5" : y ? "pl-3" : "pl-4", S ? "pr-3.5" : b || fe && T || C && j ? "pr-3" : "pr-4"),
		xl: L(x ? "pl-4" : y ? "pl-3.5" : "pl-5", S ? "pr-4" : b || fe && T || C && j ? "pr-3.5" : "pr-5")
	}, ye = {
		xs: "w-3 h-3",
		sm: "w-3.5 h-3.5",
		md: "w-4 h-4",
		lg: "w-5 h-5",
		xl: "w-5.5 h-5.5"
	}, be = (e) => {
		le || ce(e.target.value), a?.(e);
	}, xe = () => {
		le || ce(""), w?.();
	}, Ce = /* @__PURE__ */ P("div", {
		className: L("group/input-field relative flex items-center w-full transition-colors duration-150 overflow-hidden", k.className, he[D], _e[D], "bg-white border", f ? "border-rose-300 bg-rose-50/20 focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-300 hover:border-slate-400 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600", s && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", E?.className, te),
		"data-rakit": "field",
		"data-size": D,
		...k.id ? { id: k.id } : {},
		children: [
			x && /* @__PURE__ */ N("span", {
				className: L("inline-flex items-center justify-center self-stretch shrink-0 font-mono font-medium select-none transition-colors", "border-r border-slate-200 bg-slate-50 text-slate-600 group-focus-within/input-field:border-emerald-600/40 group-focus-within/input-field:bg-emerald-50/40 group-focus-within/input-field:text-emerald-800", D === "xs" ? "px-2 text-[11px]" : D === "sm" ? "px-2.5 text-xs" : D === "lg" ? "px-3.5 text-base" : D === "xl" ? "px-4 text-lg" : "px-3 text-sm"),
				children: x
			}),
			y && !x && /* @__PURE__ */ N("div", {
				className: "pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input-field:text-emerald-600 transition-colors shrink-0",
				children: /* @__PURE__ */ N("span", {
					className: ye[D],
					children: y
				})
			}),
			/* @__PURE__ */ N("input", {
				ref: ie,
				id: O,
				name: n,
				type: me,
				value: r,
				defaultValue: i,
				onChange: be,
				placeholder: o,
				disabled: s,
				readOnly: c,
				required: l,
				className: L("w-full flex-1 h-full min-w-0 bg-transparent border-0 py-0 outline-none focus:outline-none focus:ring-0 text-slate-800 placeholder:text-slate-400 font-medium", ge[D], ve[D], s && "cursor-not-allowed", ne),
				...re
			}),
			(C && j && !s && !c || fe && T && !s || b && !fe) && /* @__PURE__ */ P("div", {
				className: "flex items-center gap-1 pr-2 shrink-0",
				children: [
					C && j && !s && !c && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: xe,
						className: "p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer",
						"aria-label": "Bersihkan input",
						children: /* @__PURE__ */ N(pe, { className: ye[D] })
					}),
					fe && T && !s && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: () => de((e) => !e),
						className: "p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer",
						"aria-label": ue ? "Sembunyikan password" : "Tampilkan password",
						children: N(ue ? _ : g, { className: ye[D] })
					}),
					b && !fe && !C && /* @__PURE__ */ N("div", {
						className: "pointer-events-none text-slate-400 group-focus-within/input-field:text-emerald-600 transition-colors",
						children: /* @__PURE__ */ N("span", {
							className: ye[D],
							children: b
						})
					})
				]
			}),
			S && /* @__PURE__ */ N("span", {
				className: L("inline-flex items-center justify-center self-stretch shrink-0 font-mono font-medium select-none transition-colors", "border-l border-slate-200 bg-slate-50 text-slate-600 group-focus-within/input-field:border-emerald-600/40 group-focus-within/input-field:bg-emerald-50/40 group-focus-within/input-field:text-emerald-800", D === "xs" ? "px-2 text-[11px]" : D === "sm" ? "px-2.5 text-xs" : D === "lg" ? "px-3.5 text-base" : D === "xl" ? "px-4 text-lg" : "px-3 text-sm"),
				children: S
			})
		]
	});
	return d || f || p || m ? /* @__PURE__ */ N(ar, {
		htmlFor: O,
		label: d,
		error: f,
		helperText: p,
		hint: m,
		required: l,
		optional: u,
		disabled: s,
		size: D,
		layout: v,
		className: ee,
		children: Ce
	}) : Ce;
});
or.displayName = "TextField";
//#endregion
//#region src/components/ui/field/textarea/TextArea.tsx
var sr = ve(({ id: e, name: t, value: n, defaultValue: r, onChange: i, placeholder: a, rows: o = 4, maxLength: s, showCount: c = !1, disabled: l, readOnly: u, required: d, optional: f, label: p, error: m, helperText: h, hint: g, size: _, layout: v = "vertical", clearable: y, onClear: b, wrapperClassName: x, className: S, ...C }, w) => {
	let T = gn(), ee = T?.components?.field, te = _ || ee?.defaultSize || "md", ne = Se(), re = e || ne, ie = vn("textarea", T, e), [ae, E] = M(typeof r == "string" ? r : ""), D = n !== void 0, oe = (D ? String(n ?? "") : ae).length, O = oe > 0, k = (e) => {
		D || E(e.target.value), i?.(e);
	}, se = () => {
		D || E(""), b?.();
	}, ce = /* @__PURE__ */ P("div", {
		className: "relative w-full",
		children: [/* @__PURE__ */ N("textarea", {
			ref: w,
			id: ie.id || re,
			name: t,
			value: n,
			defaultValue: r,
			onChange: k,
			rows: o,
			maxLength: s,
			placeholder: a,
			disabled: l,
			readOnly: u,
			required: d,
			className: L("w-full transition-colors text-slate-800 placeholder-slate-400 focus:outline-none resize-y", ie.className, {
				xs: "rounded-md",
				sm: "rounded-lg",
				md: "rounded-lg",
				lg: "rounded-xl",
				xl: "rounded-xl"
			}[te], {
				xs: "p-2 text-xs min-h-[56px]",
				sm: "p-2.5 text-xs min-h-[72px]",
				md: "p-3 text-sm min-h-[96px]",
				lg: "p-3.5 text-base min-h-[120px]",
				xl: "p-4 text-lg min-h-[144px]"
			}[te], m ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", l && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", ee?.className, S),
			"data-rakit": "textarea",
			"data-size": te,
			...C
		}), /* @__PURE__ */ P("div", {
			className: "flex items-center justify-between mt-1 px-1",
			children: [y && O && !l && !u ? /* @__PURE__ */ P("button", {
				type: "button",
				onClick: se,
				className: "inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600 transition-colors cursor-pointer",
				children: [/* @__PURE__ */ N(pe, { className: "w-3 h-3" }), /* @__PURE__ */ N("span", { children: "Bersihkan" })]
			}) : /* @__PURE__ */ N("span", {}), c && /* @__PURE__ */ P("span", {
				className: "text-[11px] font-mono text-slate-400 select-none ml-auto",
				children: [oe, s ? ` / ${s}` : " karakter"]
			})]
		})]
	});
	return p || m || h || g ? /* @__PURE__ */ N(ar, {
		htmlFor: re,
		label: p,
		error: m,
		helperText: h,
		hint: g,
		required: d,
		optional: f,
		disabled: l,
		size: te,
		layout: v,
		className: x,
		children: ce
	}) : ce;
});
sr.displayName = "TextArea";
//#endregion
//#region src/components/ui/field/autocomplete/Autocomplete.tsx
var cr = ve(({ options: e, value: t, defaultValue: n, onChange: r, placeholder: i = "Ketik untuk mencari...", label: a, error: s, helperText: l, hint: u, required: d, optional: f, disabled: p, size: m, layout: h = "vertical", clearable: g = !0, loading: _ = !1, emptyText: v = "Tidak ada pilihan yang cocok", leftIcon: y, filterFn: b, renderOption: x, className: S, wrapperClassName: C }, w) => {
	let T = gn(), ee = T?.components?.field, ne = m || ee?.defaultSize || "md", re = Se(), ie = vn("autocomplete", T), ae = we(null), E = we(null), [D, oe] = M(n ?? ""), O = t !== void 0, k = O ? t ?? "" : D, [se, ce] = M(!1), [le, A] = M(""), [j, ue] = M(-1), de = Ce(() => e.map((e) => typeof e == "string" ? {
		label: e,
		value: e
	} : e), [e]), fe = Ce(() => de.find((e) => e.value === k), [de, k]);
	xe(() => {
		fe ? A(fe.label) : k || A("");
	}, [fe, k]);
	let me = Ce(() => {
		if (!le.trim()) return de;
		if (b) return de.filter((e) => b(e, le));
		let e = le.toLowerCase();
		return de.filter((t) => t.label.toLowerCase().includes(e) || t.description && t.description.toLowerCase().includes(e));
	}, [
		de,
		le,
		b
	]);
	xe(() => {
		let e = (e) => {
			ae.current && !ae.current.contains(e.target) && (ce(!1), A(fe ? fe.label : ""));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [fe]);
	let he = (e) => {
		e.disabled || (A(e.label), ce(!1), O || oe(e.value), r?.(e.value, e));
	}, ge = () => {
		A(""), ce(!1), O || oe(""), r?.("");
	}, _e = (e) => {
		if (!p) {
			if (!se && (e.key === "ArrowDown" || e.key === "Enter")) ce(!0);
			else switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), ue((e) => e < me.length - 1 ? e + 1 : 0);
					break;
				case "ArrowUp":
					e.preventDefault(), ue((e) => e > 0 ? e - 1 : me.length - 1);
					break;
				case "Enter":
					e.preventDefault(), j >= 0 && j < me.length && he(me[j]);
					break;
				case "Escape": ce(!1);
			}
		}
	}, ve = {
		xs: "h-7 min-h-[28px] text-xs",
		sm: "h-8 min-h-[32px] text-xs",
		md: "h-10 min-h-[40px] text-sm",
		lg: "h-11 min-h-[44px] text-base",
		xl: "h-12 min-h-[48px] text-lg"
	}, ye = {
		xs: "rounded-md",
		sm: "rounded-lg",
		md: "rounded-lg",
		lg: "rounded-xl",
		xl: "rounded-xl"
	}, be = {
		xs: L(y ? "pl-7" : "pl-2.5", "pr-12"),
		sm: L(y ? "pl-8" : "pl-3", "pr-14"),
		md: L(y ? "pl-9" : "pl-3.5", "pr-16"),
		lg: L(y ? "pl-10" : "pl-4", "pr-18"),
		xl: L(y ? "pl-11" : "pl-5", "pr-20")
	}, Te = {
		xs: "w-3 h-3",
		sm: "w-3.5 h-3.5",
		md: "w-4 h-4",
		lg: "w-5 h-5",
		xl: "w-5.5 h-5.5"
	}, Ee = /* @__PURE__ */ P("div", {
		ref: ae,
		className: "relative w-full",
		children: [/* @__PURE__ */ P("div", {
			className: "relative flex items-center",
			children: [
				y && /* @__PURE__ */ N("div", {
					className: "absolute left-3 flex items-center pointer-events-none text-slate-400",
					children: /* @__PURE__ */ N("span", {
						className: Te[ne],
						children: y
					})
				}),
				/* @__PURE__ */ N("input", {
					ref: w,
					id: re,
					type: "text",
					value: le,
					onChange: (e) => {
						A(e.target.value), ce(!0), ue(0);
					},
					onFocus: () => ce(!0),
					onKeyDown: _e,
					placeholder: i,
					disabled: p,
					className: L("w-full transition-colors text-slate-800 placeholder-slate-400 focus:outline-none", ie.className, ye[ne], ve[ne], be[ne], s ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", p && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", ee?.className, S),
					"data-rakit": "autocomplete",
					"data-size": ne,
					autoComplete: "off",
					role: "combobox",
					"aria-expanded": se,
					"aria-autocomplete": "list"
				}),
				/* @__PURE__ */ P("div", {
					className: "absolute right-2.5 flex items-center gap-1",
					children: [
						_ && /* @__PURE__ */ N(te, { className: L(Te[ne], "text-emerald-600 animate-spin") }),
						g && le && !p && /* @__PURE__ */ N("button", {
							type: "button",
							onClick: ge,
							className: "p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer",
							"aria-label": "Bersihkan input",
							children: /* @__PURE__ */ N(pe, { className: Te[ne] })
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => !p && ce((e) => !e),
							className: "p-1 rounded-md text-slate-400 hover:text-slate-600 transition-transform duration-200 cursor-pointer",
							tabIndex: -1,
							"aria-label": "Toggle dropdown",
							children: /* @__PURE__ */ N(c, { className: L(Te[ne], "transition-transform duration-200", se && "rotate-180") })
						})
					]
				})
			]
		}), se && /* @__PURE__ */ N("div", {
			className: "absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto",
			children: me.length === 0 ? /* @__PURE__ */ N("div", {
				className: "px-4 py-3 text-xs text-slate-500 text-center select-none",
				children: v
			}) : /* @__PURE__ */ N("ul", {
				ref: E,
				role: "listbox",
				className: "p-1",
				children: me.map((e, n) => {
					let r = e.value === t;
					return /* @__PURE__ */ P("li", {
						role: "option",
						"aria-selected": r,
						onClick: () => he(e),
						onMouseEnter: () => ue(n),
						className: L("flex items-center justify-between px-3 py-2 text-xs md:text-sm rounded-lg cursor-pointer transition-colors select-none", n === j ? "bg-slate-100 text-slate-900" : "text-slate-700", r && "bg-emerald-50 text-emerald-900 font-medium", e.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"),
						children: [x ? x(e, r) : /* @__PURE__ */ P("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ P("span", {
								className: "flex items-center gap-2",
								children: [e.icon && /* @__PURE__ */ N("span", {
									className: "shrink-0",
									children: e.icon
								}), /* @__PURE__ */ N("span", { children: e.label })]
							}), e.description && /* @__PURE__ */ N("span", {
								className: "text-[11px] text-slate-400 font-normal",
								children: e.description
							})]
						}), r && /* @__PURE__ */ N(o, { className: "w-4 h-4 text-emerald-600 shrink-0 ml-2" })]
					}, e.value);
				})
			})
		})]
	});
	return a || s || l || u ? /* @__PURE__ */ N(ar, {
		htmlFor: re,
		label: a,
		error: s,
		helperText: l,
		hint: u,
		required: d,
		optional: f,
		disabled: p,
		size: ne,
		layout: h,
		className: C,
		children: Ee
	}) : Ee;
});
cr.displayName = "Autocomplete";
//#endregion
//#region src/components/ui/field/select/Select.tsx
var lr = ve(({ options: e, value: t, defaultValue: n, onChange: r, placeholder: i = "Pilih opsi...", label: a, error: s, helperText: l, hint: u, required: d, optional: f, disabled: p, size: m, layout: h = "vertical", searchable: g = !1, searchPlaceholder: _ = "Cari opsi...", clearable: v = !1, emptyText: y = "Tidak ada opsi tersedia", className: b, wrapperClassName: x }, S) => {
	let C = gn(), w = C?.components?.field, T = m || w?.defaultSize || "md", ee = Se(), te = vn("select", C), ne = we(null), re = we(null), [ie, ae] = M(n ?? ""), E = t !== void 0, D = E ? t : ie, [oe, O] = M(!1), [se, ce] = M(""), le = Ce(() => e.map((e) => typeof e == "string" ? {
		label: e,
		value: e
	} : e), [e]), A = Ce(() => le.find((e) => e.value === D), [le, D]), j = Ce(() => {
		if (!g || !se.trim()) return le;
		let e = se.toLowerCase();
		return le.filter((t) => t.label.toLowerCase().includes(e) || t.description && t.description.toLowerCase().includes(e));
	}, [
		le,
		g,
		se
	]);
	xe(() => {
		let e = (e) => {
			ne.current && !ne.current.contains(e.target) && (O(!1), ce(""));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), xe(() => {
		oe && g && setTimeout(() => re.current?.focus(), 50);
	}, [oe, g]);
	let ue = (e) => {
		e.disabled || (E || ae(e.value), r?.(e.value), O(!1), ce(""));
	}, de = (e) => {
		e.stopPropagation(), E || ae(""), r?.("");
	}, fe = {
		xs: "h-7 min-h-[28px] px-2.5 text-xs",
		sm: "h-8 min-h-[32px] px-3 text-xs",
		md: "h-10 min-h-[40px] px-3.5 text-sm",
		lg: "h-11 min-h-[44px] px-4 text-base",
		xl: "h-12 min-h-[48px] px-5 text-lg"
	}, me = {
		xs: "rounded-md",
		sm: "rounded-lg",
		md: "rounded-lg",
		lg: "rounded-xl",
		xl: "rounded-xl"
	}, he = {
		xs: "w-3 h-3",
		sm: "w-3.5 h-3.5",
		md: "w-4 h-4",
		lg: "w-5 h-5",
		xl: "w-5.5 h-5.5"
	}, ge = /* @__PURE__ */ P("div", {
		ref: ne,
		className: "relative w-full",
		children: [/* @__PURE__ */ P("button", {
			ref: S,
			id: ee,
			type: "button",
			onClick: () => !p && O((e) => !e),
			disabled: p,
			className: L("w-full flex items-center justify-between text-left transition-colors focus:outline-none cursor-pointer", te.className, me[T], fe[T], s ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", p && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", w?.className, b),
			"data-rakit": "select",
			"data-size": T,
			"aria-haspopup": "listbox",
			"aria-expanded": oe,
			children: [/* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 truncate",
				children: A ? /* @__PURE__ */ P(Ee, { children: [A.icon && /* @__PURE__ */ N("span", {
					className: "shrink-0",
					children: A.icon
				}), /* @__PURE__ */ N("span", {
					className: "text-slate-800 font-medium truncate",
					children: A.label
				})] }) : /* @__PURE__ */ N("span", {
					className: "text-slate-400 select-none truncate",
					children: i
				})
			}), /* @__PURE__ */ P("div", {
				className: "flex items-center gap-1.5 ml-2 shrink-0",
				children: [v && A && !p && /* @__PURE__ */ N("span", {
					role: "button",
					onClick: de,
					className: "p-0.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer",
					"aria-label": "Bersihkan pilihan",
					children: /* @__PURE__ */ N(pe, { className: he[T] })
				}), /* @__PURE__ */ N(c, { className: L(he[T], "text-slate-400 transition-transform duration-200", oe && "rotate-180") })]
			})]
		}), oe && /* @__PURE__ */ P("div", {
			className: "absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-h-64 flex flex-col",
			children: [g && /* @__PURE__ */ N("div", {
				className: "p-2 border-b border-slate-100",
				children: /* @__PURE__ */ P("div", {
					className: "relative flex items-center",
					children: [/* @__PURE__ */ N(k, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }), /* @__PURE__ */ N("input", {
						ref: re,
						type: "text",
						value: se,
						onChange: (e) => ce(e.target.value),
						placeholder: _,
						className: "w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white"
					})]
				})
			}), /* @__PURE__ */ N("div", {
				className: "overflow-y-auto p-1 max-h-52",
				children: j.length === 0 ? /* @__PURE__ */ N("div", {
					className: "px-4 py-3 text-xs text-slate-500 text-center select-none",
					children: y
				}) : /* @__PURE__ */ N("ul", {
					role: "listbox",
					children: j.map((e) => {
						let n = e.value === t;
						return /* @__PURE__ */ P("li", {
							role: "option",
							"aria-selected": n,
							onClick: () => ue(e),
							className: L("flex items-center justify-between px-3 py-2 text-xs md:text-sm rounded-lg cursor-pointer transition-colors select-none", n ? "bg-emerald-50 text-emerald-900 font-medium" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900", e.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"),
							children: [/* @__PURE__ */ P("div", {
								className: "flex flex-col truncate",
								children: [/* @__PURE__ */ P("span", {
									className: "flex items-center gap-2 truncate",
									children: [e.icon && /* @__PURE__ */ N("span", {
										className: "shrink-0",
										children: e.icon
									}), /* @__PURE__ */ N("span", {
										className: "truncate",
										children: e.label
									})]
								}), e.description && /* @__PURE__ */ N("span", {
									className: "text-[11px] text-slate-400 font-normal truncate",
									children: e.description
								})]
							}), n && /* @__PURE__ */ N(o, { className: "w-4 h-4 text-emerald-600 shrink-0 ml-2" })]
						}, e.value);
					})
				})
			})]
		})]
	});
	return a || s || l || u ? /* @__PURE__ */ N(ar, {
		htmlFor: ee,
		label: a,
		error: s,
		helperText: l,
		hint: u,
		required: d,
		optional: f,
		disabled: p,
		size: T,
		layout: h,
		className: x,
		children: ge
	}) : ge;
});
lr.displayName = "Select";
//#endregion
//#region src/components/ui/field/multi-select/MultiSelect.tsx
var ur = ve(({ options: e, value: t, defaultValue: n, onChange: r, placeholder: i = "Pilih beberapa opsi...", label: a, error: s, helperText: l, hint: u, required: d, optional: f, disabled: p, size: m, layout: h = "vertical", searchable: g = !0, searchPlaceholder: _ = "Cari...", clearable: v = !0, maxDisplayTags: y = 3, emptyText: b = "Tidak ada opsi tersedia", className: x, wrapperClassName: S }, C) => {
	let w = gn(), T = w?.components?.field, ee = m || T?.defaultSize || "md", te = Se(), ne = vn("multiselect", w), re = we(null), ie = we(null), [ae, E] = M(n || []), D = t !== void 0, oe = D ? t || [] : ae, [O, se] = M(!1), [ce, le] = M(""), A = Ce(() => e.map((e) => typeof e == "string" ? {
		label: e,
		value: e
	} : e), [e]), j = Ce(() => A.filter((e) => oe.includes(e.value)), [A, oe]), ue = Ce(() => {
		if (!g || !ce.trim()) return A;
		let e = ce.toLowerCase();
		return A.filter((t) => t.label.toLowerCase().includes(e) || t.description && t.description.toLowerCase().includes(e));
	}, [
		A,
		g,
		ce
	]);
	xe(() => {
		let e = (e) => {
			re.current && !re.current.contains(e.target) && (se(!1), le(""));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), xe(() => {
		O && g && setTimeout(() => ie.current?.focus(), 50);
	}, [O, g]);
	let de = (e) => {
		let t = oe.includes(e) ? oe.filter((t) => t !== e) : [...oe, e];
		D || E(t), r?.(t);
	}, fe = (e, t) => {
		e.stopPropagation();
		let n = oe.filter((e) => e !== t);
		D || E(n), r?.(n);
	}, me = (e) => {
		e.stopPropagation(), D || E([]), r?.([]);
	}, he = /* @__PURE__ */ P("div", {
		ref: re,
		className: "relative w-full",
		children: [/* @__PURE__ */ P("button", {
			ref: C,
			id: te,
			type: "button",
			onClick: () => !p && se((e) => !e),
			disabled: p,
			className: L("w-full flex items-center justify-between text-left transition-colors focus:outline-none cursor-pointer", ne.className, {
				xs: "rounded-md",
				sm: "rounded-lg",
				md: "rounded-lg",
				lg: "rounded-xl",
				xl: "rounded-xl"
			}[ee], {
				xs: "min-h-[28px] px-2.5 py-0.5 text-xs",
				sm: "min-h-[32px] px-3 py-1 text-xs",
				md: "min-h-[40px] px-3.5 py-1.5 text-sm",
				lg: "min-h-[44px] px-4 py-2 text-base",
				xl: "min-h-[48px] px-5 py-2.5 text-lg"
			}[ee], s ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", p && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", T?.className, x),
			"data-rakit": "multiselect",
			"data-size": ee,
			"aria-haspopup": "listbox",
			"aria-expanded": O,
			children: [/* @__PURE__ */ N("div", {
				className: "flex flex-wrap items-center gap-1.5 overflow-hidden",
				children: j.length === 0 ? /* @__PURE__ */ N("span", {
					className: "text-slate-400 select-none",
					children: i
				}) : /* @__PURE__ */ P(Ee, { children: [j.slice(0, y).map((e) => /* @__PURE__ */ P("span", {
					className: "inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-md text-xs font-medium",
					children: [/* @__PURE__ */ N("span", { children: e.label }), !p && /* @__PURE__ */ N("span", {
						role: "button",
						onClick: (t) => fe(t, e.value),
						className: "p-0.5 hover:bg-emerald-100 rounded text-emerald-700 hover:text-emerald-900 transition-colors",
						children: /* @__PURE__ */ N(pe, { className: "w-3 h-3" })
					})]
				}, e.value)), j.length > y && /* @__PURE__ */ P("span", {
					className: "px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded-md text-[11px] font-semibold",
					children: [
						"+",
						j.length - y,
						" lainnya"
					]
				})] })
			}), /* @__PURE__ */ P("div", {
				className: "flex items-center gap-1.5 ml-2 shrink-0",
				children: [v && j.length > 0 && !p && /* @__PURE__ */ N("span", {
					role: "button",
					onClick: me,
					className: "p-0.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer",
					"aria-label": "Bersihkan semua",
					children: /* @__PURE__ */ N(pe, { className: "w-3.5 h-3.5" })
				}), /* @__PURE__ */ N(c, { className: L("w-4 h-4 text-slate-400 transition-transform duration-200", O && "rotate-180") })]
			})]
		}), O && /* @__PURE__ */ P("div", {
			className: "absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-h-72 flex flex-col",
			children: [
				g && /* @__PURE__ */ N("div", {
					className: "p-2 border-b border-slate-100",
					children: /* @__PURE__ */ P("div", {
						className: "relative flex items-center",
						children: [/* @__PURE__ */ N(k, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }), /* @__PURE__ */ N("input", {
							ref: ie,
							type: "text",
							value: ce,
							onChange: (e) => le(e.target.value),
							placeholder: _,
							className: "w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white"
						})]
					})
				}),
				/* @__PURE__ */ P("div", {
					className: "flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-slate-100 text-[11px]",
					children: [/* @__PURE__ */ N("button", {
						type: "button",
						onClick: () => {
							let e = A.filter((e) => !e.disabled).map((e) => e.value);
							D || E(e), r?.(e);
						},
						className: "text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer",
						children: "Pilih Semua"
					}), /* @__PURE__ */ P("button", {
						type: "button",
						onClick: me,
						className: "text-slate-500 hover:text-slate-700 cursor-pointer",
						children: [
							"Hapus Semua (",
							oe.length,
							")"
						]
					})]
				}),
				/* @__PURE__ */ N("div", {
					className: "overflow-y-auto p-1 max-h-52",
					children: ue.length === 0 ? /* @__PURE__ */ N("div", {
						className: "px-4 py-3 text-xs text-slate-500 text-center select-none",
						children: b
					}) : /* @__PURE__ */ N("ul", {
						role: "listbox",
						children: ue.map((e) => {
							let t = oe.includes(e.value);
							return /* @__PURE__ */ P("li", {
								role: "option",
								"aria-selected": t,
								onClick: () => de(e.value),
								className: L("flex items-center gap-2.5 px-3 py-2 text-xs md:text-sm rounded-lg cursor-pointer transition-colors select-none", t ? "bg-emerald-50/70 text-emerald-950 font-medium" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900", e.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"),
								children: [/* @__PURE__ */ N("div", {
									className: L("w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0", t ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white"),
									children: t && /* @__PURE__ */ N(o, { className: "w-3 h-3 stroke-[3]" })
								}), /* @__PURE__ */ P("div", {
									className: "flex flex-col truncate",
									children: [/* @__PURE__ */ N("span", {
										className: "truncate",
										children: e.label
									}), e.description && /* @__PURE__ */ N("span", {
										className: "text-[11px] text-slate-400 font-normal truncate",
										children: e.description
									})]
								})]
							}, e.value);
						})
					})
				})
			]
		})]
	});
	return a || s || l || u ? /* @__PURE__ */ N(ar, {
		htmlFor: te,
		label: a,
		error: s,
		helperText: l,
		hint: u,
		required: d,
		optional: f,
		disabled: p,
		size: m,
		layout: h,
		className: S,
		children: he
	}) : he;
});
ur.displayName = "MultiSelect";
//#endregion
//#region src/components/ui/field/checkbox/CheckboxGroup.tsx
var dr = ve(({ options: e, value: t = [], onChange: n, name: r, label: i, error: a, helperText: o, hint: s, required: c, optional: l, orientation: u = "vertical", size: d = "md", variant: f = "default", disabled: p = !1, className: m, ...h }, g) => {
	let _ = (e, r) => {
		r ? n?.([...t, e]) : n?.(t.filter((t) => t !== e));
	}, v = /* @__PURE__ */ N("div", {
		ref: g,
		role: "group",
		className: L(u === "horizontal" ? "flex flex-wrap items-center gap-4" : "flex flex-col space-y-2.5", m),
		...h,
		children: e.map((e) => /* @__PURE__ */ N(er, {
			name: r,
			checked: t.includes(e.value),
			onChange: (t) => _(e.value, t),
			label: e.label,
			description: e.description,
			disabled: p || e.disabled,
			size: d,
			variant: f
		}, e.value))
	});
	return i || a || o || s ? /* @__PURE__ */ N(ar, {
		label: i,
		error: a,
		helperText: o,
		hint: s,
		required: c,
		optional: l,
		disabled: p,
		size: d,
		children: v
	}) : v;
});
dr.displayName = "CheckboxGroup";
//#endregion
//#region src/components/ui/field/radio/Radio.tsx
var fr = ve(({ id: e, value: t, checked: n = !1, onChange: r, label: i, description: a, disabled: o = !1, size: s = "md", variant: c = "default", className: l, wrapperClassName: u, ...d }, f) => {
	let p = gn(), m = Se(), h = e || m, g = vn("radio", p, h), _ = {
		xs: "w-3.5 h-3.5",
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
		xl: "w-7 h-7"
	}, v = {
		xs: "w-1 h-1",
		sm: "w-1.5 h-1.5",
		md: "w-2 h-2",
		lg: "w-2.5 h-2.5",
		xl: "w-3 h-3"
	};
	return /* @__PURE__ */ P("label", {
		htmlFor: h,
		className: L("rakit-radio-wrapper relative flex items-start gap-3 select-none transition-all cursor-pointer", c === "card" && L("p-3.5 rounded-xl border bg-slate-50/60 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors", n ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20 ring-1 ring-emerald-500/20" : "border-slate-200 dark:border-slate-800"), o && "opacity-60 cursor-not-allowed hover:bg-transparent", u),
		children: [/* @__PURE__ */ P("div", {
			className: "relative flex items-center pt-0.5",
			children: [/* @__PURE__ */ N("input", {
				ref: f,
				id: g.id,
				"data-rakit": g["data-rakit"],
				type: "radio",
				value: t,
				checked: n,
				onChange: () => r?.(t),
				disabled: o,
				className: "sr-only peer",
				...d
			}), /* @__PURE__ */ N("div", {
				className: L("rakit-radio rounded-full border flex items-center justify-center transition-all duration-150 shadow-2xs peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500/30 peer-focus-visible:ring-offset-1", g.className, _[s], n ? "bg-emerald-600 border-emerald-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:border-slate-400", o && "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 cursor-not-allowed", l),
				children: n && /* @__PURE__ */ N("div", { className: L("rounded-full bg-white dark:bg-slate-100", v[s]) })
			})]
		}), (i || a) && /* @__PURE__ */ P("div", {
			className: "flex flex-col",
			children: [i && /* @__PURE__ */ N("span", {
				className: L("font-medium text-slate-800 transition-colors leading-snug", s === "xs" || s === "sm" ? "text-xs" : s === "lg" ? "text-base" : s === "xl" ? "text-lg" : "text-sm", o && "text-slate-400"),
				children: i
			}), a && /* @__PURE__ */ N("span", {
				className: L("text-slate-500 text-xs mt-0.5 leading-normal", o && "text-slate-400"),
				children: a
			})]
		})]
	});
});
fr.displayName = "Radio";
//#endregion
//#region src/components/ui/field/radio/RadioGroup.tsx
var pr = ve(({ options: e, value: t, defaultValue: n, onChange: r, name: i, label: a, error: o, helperText: s, hint: c, required: l, optional: u, orientation: d = "vertical", variant: f = "default", size: p = "md", disabled: m = !1, className: h, ...g }, _) => {
	let [v, y] = M(n), b = t !== void 0, x = b ? t : v, S = (e) => {
		b || y(e), r?.(e);
	}, C = /* @__PURE__ */ N("div", {
		ref: _,
		role: "radiogroup",
		className: L(d === "horizontal" ? "flex flex-wrap items-center gap-4" : "flex flex-col space-y-2.5", h),
		...g,
		children: e.map((e) => /* @__PURE__ */ N(fr, {
			name: i,
			value: e.value,
			checked: x === e.value,
			onChange: () => S(e.value),
			label: e.label,
			description: e.description,
			disabled: m || e.disabled,
			size: p,
			variant: f
		}, e.value))
	});
	return a || o || s || c ? /* @__PURE__ */ N(ar, {
		label: a,
		error: o,
		helperText: s,
		hint: c,
		required: l,
		optional: u,
		disabled: m,
		size: p,
		children: C
	}) : C;
});
pr.displayName = "RadioGroup";
//#endregion
//#region src/components/ui/field/switch/Switch.tsx
var mr = ve(({ id: e, checked: t = !1, onChange: n, label: r, description: i, disabled: a = !1, size: o = "md", checkedIcon: s, uncheckedIcon: c, className: l, wrapperClassName: u }, d) => {
	let f = gn(), p = Se(), m = vn("switch", f, e || p), h = {
		xs: "w-6 h-3.5 p-0.5",
		sm: "w-8 h-4.5 p-0.5",
		md: "w-11 h-6 p-0.5",
		lg: "w-14 h-7.5 p-1",
		xl: "w-16 h-8.5 p-1"
	}, g = {
		xs: "w-2.5 h-2.5",
		sm: "w-3.5 h-3.5",
		md: "w-5 h-5",
		lg: "w-5.5 h-5.5",
		xl: "w-6.5 h-6.5"
	}, _ = {
		xs: t ? "translate-x-2.5" : "translate-x-0",
		sm: t ? "translate-x-3.5" : "translate-x-0",
		md: t ? "translate-x-5" : "translate-x-0",
		lg: t ? "translate-x-6.5" : "translate-x-0",
		xl: t ? "translate-x-7.5" : "translate-x-0"
	};
	return /* @__PURE__ */ P("div", {
		className: L("rakit-switch-wrapper flex items-start gap-3 select-none", a && "opacity-60 cursor-not-allowed", u),
		children: [/* @__PURE__ */ N("button", {
			ref: d,
			id: m.id,
			"data-rakit": m["data-rakit"],
			type: "button",
			role: "switch",
			"aria-checked": t,
			disabled: a,
			onClick: () => !a && n?.(!t),
			className: L("rakit-switch relative inline-flex shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:ring-offset-1 cursor-pointer", m.className, h[o], t ? "bg-emerald-600" : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400/80", a && "cursor-not-allowed hover:bg-slate-300 dark:hover:bg-slate-700", l),
			children: /* @__PURE__ */ N("span", {
				className: L("pointer-events-none inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-100 shadow-sm ring-0 transition duration-200 ease-in-out", g[o], _[o]),
				children: t ? s : c
			})
		}), (r || i) && /* @__PURE__ */ P("label", {
			htmlFor: p,
			className: "flex flex-col cursor-pointer",
			children: [r && /* @__PURE__ */ N("span", {
				className: L("font-medium text-slate-800 transition-colors leading-snug", o === "xs" || o === "sm" ? "text-xs" : o === "lg" ? "text-base" : o === "xl" ? "text-lg" : "text-sm", a && "text-slate-400"),
				children: r
			}), i && /* @__PURE__ */ N("span", {
				className: L("text-slate-500 text-xs mt-0.5 leading-normal", a && "text-slate-400"),
				children: i
			})]
		})]
	});
});
mr.displayName = "Switch";
//#endregion
//#region src/components/ui/tabs/index.tsx
var hr = {
	xs: {
		button: "px-2 py-0.5 text-xs gap-1",
		icon: "w-3 h-3",
		text: "text-xs"
	},
	sm: {
		button: "px-2.5 py-1 text-xs gap-1.5",
		icon: "w-3.5 h-3.5",
		text: "text-xs"
	},
	md: {
		button: "px-3 py-1.5 text-sm gap-2",
		icon: "w-4 h-4",
		text: "text-sm"
	},
	lg: {
		button: "px-4 py-2 text-base gap-2.5",
		icon: "w-4.5 h-4.5",
		text: "text-base"
	}
}, gr = (e, t, n, r) => {
	if (n === "vertical") return e === "underline" ? L("flex flex-col gap-1 bg-transparent p-0", r === "left" ? "border-l" : "border-r", t ? "border-slate-800" : "border-slate-200") : e === "bordered" ? L("flex flex-col p-1 rounded-xl gap-1 border", t ? "border-slate-700/80 bg-slate-900" : "border-slate-200 bg-white") : L("flex flex-col p-1 rounded-xl gap-1", t ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-100/90");
	if (t) switch (e) {
		case "underline": return "border-b border-slate-800 gap-4 bg-transparent p-0";
		case "bordered": return "border border-slate-700/80 p-0.5 rounded-lg bg-slate-900 gap-1";
		default: return "bg-slate-800/80 border border-slate-700/60 p-0.5 rounded-lg gap-1";
	}
	switch (e) {
		case "pills": return "bg-slate-100/90 p-1 rounded-xl gap-1";
		case "default": return "bg-slate-200/70 p-1 rounded-xl gap-1";
		case "underline": return "border-b border-slate-200 gap-4 bg-transparent p-0";
		case "bordered": return "border border-slate-200 p-1 rounded-xl bg-white gap-1";
		default: return "bg-slate-100/90 p-1 rounded-xl gap-1";
	}
};
function _r({ items: e = [], value: t, defaultValue: n, onChange: r, variant: i = "default", size: a = "md", orientation: o = "horizontal", borderPosition: s = "right", theme: c = "light", className: l = "", tabListClassName: u = "", contentClassName: d = "", fullWidth: f = !1, extra: p, children: m }) {
	let h = c === "dark", g = o === "vertical", _ = n || e[0]?.id || "", [v, y] = M(_), b = t === void 0 ? v : t, x = (e) => {
		e.disabled || (t === void 0 && y(e.id), r?.(e.id));
	}, S = e.find((e) => e.id === b), C = (e, t) => {
		let n = hr[a], r = L("inline-flex items-center font-medium transition-all select-none", g ? "justify-start text-left w-full" : "justify-center", n.button, f && !g ? "flex-1" : "", e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer");
		if (g && i === "underline") {
			let e = s === "left" ? "border-l-2 -ml-px pl-2.5" : "border-r-2 -mr-px pr-2.5", n = s === "left" ? "border-l-2 border-transparent pl-2.5" : "border-r-2 border-transparent pr-2.5";
			return h ? L(r, "rounded-none", t ? L(e, "border-emerald-400 text-white font-semibold") : L(n, "text-slate-400 hover:text-white hover:border-slate-700")) : L(r, "rounded-none", t ? L(e, "border-emerald-600 text-emerald-800 font-semibold") : L(n, "text-slate-500 hover:text-slate-800 hover:border-slate-300"));
		}
		if (h) switch (i) {
			case "underline": return L(r, "rounded-none border-b-2 -mb-px pb-2", t ? "border-emerald-400 text-white font-semibold" : "border-transparent text-slate-400 hover:text-white hover:border-slate-700");
			default: return L(r, "rounded-md", t ? "bg-slate-700 text-white shadow-2xs font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-800/50");
		}
		switch (i) {
			case "underline": return L(r, "rounded-none border-b-2 -mb-px pb-2", t ? "border-emerald-600 text-emerald-800 font-semibold" : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300");
			default: return L(r, "rounded-lg", t ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50");
		}
	}, w = !!(S?.content || m);
	return /* @__PURE__ */ P("div", {
		className: L("w-full", g && w ? "flex flex-row gap-6 items-start" : "flex flex-col", l),
		children: [/* @__PURE__ */ P("div", {
			className: L("flex items-center gap-2.5", g ? "flex-col items-stretch w-full sm:w-auto shrink-0" : "flex-wrap justify-between"),
			children: [/* @__PURE__ */ N("div", {
				role: "tablist",
				"aria-orientation": o,
				className: L(g ? "flex flex-col" : "inline-flex flex-wrap items-center", gr(i, h, o, s), f && !g ? "w-full" : "", u),
				children: e.map((e) => {
					let t = e.id === b;
					return /* @__PURE__ */ P("button", {
						role: "tab",
						type: "button",
						"aria-selected": t,
						disabled: e.disabled,
						onClick: () => x(e),
						className: C(e, t),
						children: [
							e.icon && /* @__PURE__ */ N("span", {
								className: "shrink-0",
								children: e.icon
							}),
							/* @__PURE__ */ N("span", {
								className: "truncate",
								children: e.label
							}),
							e.badge !== void 0 && /* @__PURE__ */ N(wn, {
								variant: e.badgeVariant || (t ? "success" : "default"),
								size: "xs",
								className: "ml-auto",
								children: e.badge
							})
						]
					}, e.id);
				})
			}), p && /* @__PURE__ */ N("div", {
				className: "shrink-0",
				children: p
			})]
		}), w && /* @__PURE__ */ N("div", {
			role: "tabpanel",
			className: L(g ? "flex-1 min-w-0" : "mt-3 w-full", d),
			children: S?.content || m
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/CodeEditorToolbar.tsx
function vr({ theme: e = "dark", title: t, language: n = "json", isValidJson: r = !0, layout: i = "auto", tabs: a, activeTab: o, onChangeTab: s, tabsVariant: c, tabsPosition: l = "left", tabsActions: u, statusPosition: d = "left", statusBadge: f, actionsPosition: p = "right", viewMode: m = "code", onViewModeChange: h, showViewToggle: g = !0, isTreeSupported: _ = !1, showFormatButton: v = !0, onFormat: y, readOnly: b = !1, showCopyButton: x = !0, copied: S = !1, onCopy: C, showFullScreenButton: w = !1, onFullScreen: T, extraActions: ee, topRowLeft: te, topRowRight: ne, bottomRowLeft: re, bottomRowRight: ie, leftContent: ae, centerContent: E, rightContent: D, className: oe = "", children: O }) {
	let k = e === "dark", se = !!(a && a.length > 0), ce = !!(g && n === "json" || !b && v && n === "json" || x || w || ee);
	if (O) return /* @__PURE__ */ N("div", {
		className: L("w-full flex flex-col border-b select-none transition-colors shrink-0", k ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100/95 border-slate-200 text-slate-800", oe),
		children: O
	});
	let le = i === "stacked" || i === "auto" && se && ce, A = se ? /* @__PURE__ */ N(xr, {
		tabs: a,
		activeTab: o,
		onChangeTab: s,
		tabsVariant: c,
		theme: e
	}) : null, j = d === "hidden" ? null : /* @__PURE__ */ N(Sr, {
		title: t,
		language: n,
		isValidJson: r,
		statusBadge: f
	}), ue = /* @__PURE__ */ N(wr, {
		theme: e,
		language: n,
		isValidJson: r,
		viewMode: m,
		onViewModeChange: h,
		showViewToggle: g,
		isTreeSupported: _,
		showFormatButton: v,
		onFormat: y,
		readOnly: b,
		showCopyButton: x,
		copied: S,
		onCopy: C,
		showFullScreenButton: w,
		onFullScreen: T,
		extraActions: ee
	});
	return le ? /* @__PURE__ */ P("div", {
		className: L("w-full flex flex-col shrink-0 select-none transition-colors", oe),
		children: [/* @__PURE__ */ P("div", {
			className: L("w-full flex items-center justify-between gap-2 px-3 py-1.5 border-b transition-colors", k ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"),
			children: [te || /* @__PURE__ */ P("div", {
				className: L("flex items-center gap-2 min-w-0 overflow-x-auto no-scrollbar scroll-smooth py-0.5", l === "center" && "mx-auto justify-center", l === "right" && "ml-auto justify-end"),
				children: [l === "left" && A, l === "center" && A]
			}), ne || /* @__PURE__ */ P("div", {
				className: "flex items-center gap-2 shrink-0 ml-auto",
				children: [l === "right" && A, u]
			})]
		}), ce && /* @__PURE__ */ P("div", {
			className: L("w-full flex items-center justify-between gap-2 px-3 py-1 border-b transition-colors text-xs", k ? "bg-slate-950/80 border-slate-800/80 text-slate-300" : "bg-slate-50/90 border-slate-200/80 text-slate-700"),
			children: [re || (p === "left" ? /* @__PURE__ */ N("div", {
				className: "flex items-center gap-1.5 shrink-0",
				children: ue
			}) : /* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 min-w-0 shrink-0",
				children: d === "left" && j
			})), ie || (p === "right" ? /* @__PURE__ */ N("div", {
				className: "flex items-center gap-1.5 shrink-0 ml-auto",
				children: ue
			}) : /* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 min-w-0 shrink-0 ml-auto",
				children: d === "right" && j
			}))]
		})]
	}) : /* @__PURE__ */ P("div", {
		className: L("w-full flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 px-3 py-2 border-b select-none transition-colors shrink-0", k ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100/95 border-slate-200 text-slate-800", oe),
		children: [
			/* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 min-w-0 flex-shrink-0",
				children: ae || (se ? /* @__PURE__ */ P("div", {
					className: "flex items-center gap-2 flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar",
					children: [l === "left" && A, l === "left" && d === "left" && j]
				}) : d === "left" && j)
			}),
			E && /* @__PURE__ */ N("div", {
				className: "flex items-center justify-center flex-1 min-w-0",
				children: E
			}),
			/* @__PURE__ */ N("div", {
				className: "flex items-center gap-1.5 flex-wrap sm:flex-nowrap justify-end ml-auto shrink-0",
				children: D || /* @__PURE__ */ P(Ee, { children: [
					l === "right" && A,
					d === "right" && j,
					u,
					ce && ue
				] })
			})
		]
	});
}
function yr({ children: e, className: t = "", theme: n = "dark", density: r = "normal" }) {
	return /* @__PURE__ */ N("div", {
		className: L("w-full flex items-center justify-between gap-2 px-3 border-b transition-colors shrink-0", r === "compact" ? "py-1 text-xs" : "py-1.5", n === "dark" ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800", t),
		children: e
	});
}
function br({ children: e, className: t = "", align: n = "left" }) {
	return /* @__PURE__ */ N("div", {
		className: L("flex items-center gap-1.5 shrink-0", n === "right" && "ml-auto justify-end", n === "center" && "mx-auto justify-center", t),
		children: e
	});
}
function xr({ tabs: e, activeTab: t, onChangeTab: n, tabsVariant: r = "pills", theme: i = "dark", className: a = "" }) {
	return !e || e.length === 0 ? null : /* @__PURE__ */ N("div", {
		className: L("flex items-center overflow-x-auto no-scrollbar shrink-0", a),
		children: /* @__PURE__ */ N(_r, {
			items: e,
			value: t,
			onChange: n,
			variant: r,
			size: "sm",
			theme: i
		})
	});
}
function Sr({ title: e, language: t = "json", isValidJson: n = !0, statusBadge: r, className: i = "" }) {
	return /* @__PURE__ */ P("div", {
		className: L("flex items-center gap-2 min-w-0 shrink-0 font-mono text-xs", i),
		children: [e ? /* @__PURE__ */ N("span", {
			className: "text-xs font-semibold truncate max-w-[140px] sm:max-w-xs",
			children: e
		}) : /* @__PURE__ */ N("span", {
			className: "text-xs font-bold uppercase tracking-wider opacity-80",
			children: t
		}), r || (t === "json" && n !== void 0 ? /* @__PURE__ */ N(wn, {
			variant: n ? "success" : "danger",
			size: "xs",
			className: "font-mono text-[10px] shrink-0",
			children: n ? "Valid JSON" : "Syntax Error"
		}) : null)]
	});
}
function Cr({ viewMode: e = "code", onViewModeChange: t, isTreeSupported: n = !1, theme: r = "dark", className: i = "" }) {
	let a = r === "dark";
	return /* @__PURE__ */ P("div", {
		className: L("flex items-center p-0.5 rounded-lg text-xs font-medium border transition-colors shrink-0", a ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-200/80 border-slate-300/80", i),
		children: [/* @__PURE__ */ P("button", {
			type: "button",
			onClick: () => t?.("code"),
			className: L("flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-colors cursor-pointer text-xs", e === "code" ? a ? "bg-slate-700 text-white shadow-2xs font-semibold" : "bg-white text-slate-900 shadow-2xs font-semibold" : a ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
			title: "Raw code view",
			children: [/* @__PURE__ */ N(f, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
				className: "hidden xs:inline sm:inline",
				children: "Code"
			})]
		}), /* @__PURE__ */ P("button", {
			type: "button",
			disabled: !n,
			onClick: () => n && t?.("tree"),
			className: L("flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-colors text-xs", n ? e === "tree" ? a ? "bg-slate-700 text-white shadow-2xs font-semibold cursor-pointer" : "bg-white text-emerald-800 shadow-2xs font-semibold cursor-pointer" : a ? "text-slate-400 hover:text-white cursor-pointer" : "text-slate-600 hover:text-slate-900 cursor-pointer" : "opacity-40 cursor-not-allowed text-slate-400"),
			title: n ? "Interactive tree view" : "Tree view is only available for valid JSON",
			children: [/* @__PURE__ */ N(S, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
				className: "hidden xs:inline sm:inline",
				children: "Tree"
			})]
		})]
	});
}
function wr({ theme: e = "dark", language: t = "json", isValidJson: n = !0, viewMode: r = "code", onViewModeChange: i, showViewToggle: a = !0, isTreeSupported: s = !1, showFormatButton: c = !0, onFormat: l, readOnly: u = !1, showCopyButton: d = !0, copied: f = !1, onCopy: p, showFullScreenButton: m = !1, onFullScreen: g, extraActions: _, className: v = "" }) {
	let y = Tr(e === "dark");
	return /* @__PURE__ */ P("div", {
		className: L("flex items-center gap-1.5 shrink-0", v),
		children: [
			a && t === "json" && /* @__PURE__ */ N(Cr, {
				viewMode: r,
				onViewModeChange: i,
				isTreeSupported: s,
				theme: e
			}),
			!u && c && t === "json" && /* @__PURE__ */ N(xn, {
				type: "button",
				variant: "outline",
				size: "xs",
				disabled: !n,
				onClick: l,
				leftIcon: /* @__PURE__ */ N(de, { className: "w-3 h-3 text-emerald-500" }),
				className: L(y, "shrink-0"),
				title: "Format JSON (Prettify)",
				children: /* @__PURE__ */ N("span", {
					className: "hidden sm:inline",
					children: "Format"
				})
			}),
			d && /* @__PURE__ */ N(xn, {
				type: "button",
				variant: "outline",
				size: "xs",
				onClick: p,
				leftIcon: f ? /* @__PURE__ */ N(o, { className: "w-3 h-3 text-emerald-500" }) : /* @__PURE__ */ N(h, { className: "w-3 h-3" }),
				className: L(y, "shrink-0"),
				title: "Copy code to clipboard",
				children: /* @__PURE__ */ N("span", {
					className: "hidden sm:inline",
					children: f ? "Copied" : "Copy"
				})
			}),
			m && /* @__PURE__ */ N(xn, {
				type: "button",
				variant: "outline",
				size: "xs",
				onClick: g,
				leftIcon: /* @__PURE__ */ N(ne, { className: "w-3 h-3 text-emerald-500" }),
				className: L(y, "shrink-0"),
				title: "Fullscreen mode",
				children: /* @__PURE__ */ N("span", {
					className: "hidden sm:inline",
					children: "Fullscreen"
				})
			}),
			_
		]
	});
}
vr.Row = yr, vr.Group = br, vr.Tabs = xr, vr.Status = Sr, vr.ViewToggle = Cr, vr.Actions = wr;
function Tr(e) {
	return e ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50";
}
//#endregion
//#region src/components/ui/code-editor/CodeGutter.tsx
function Er({ gutterRef: e, lineNumbers: t, theme: n = "dark", className: r = "" }) {
	return /* @__PURE__ */ N("div", {
		ref: e,
		"aria-hidden": "true",
		className: L("w-12 py-3 border-r text-right pr-2 font-mono text-xs select-none overflow-hidden shrink-0 leading-relaxed transition-colors", n === "dark" ? "bg-slate-950 border-slate-800 text-slate-600" : "bg-slate-100 border-slate-200 text-slate-400", r),
		children: t.map((e) => /* @__PURE__ */ N("div", {
			className: "h-5",
			children: e
		}, e))
	});
}
//#endregion
//#region src/components/ui/code-editor/JsonTreeViewer.tsx
function Dr(e) {
	return e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "object" ? "object" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "string";
}
function Or(e, t) {
	switch (t) {
		case "number": {
			let t = Number(e);
			return isNaN(t) ? 0 : t;
		}
		case "boolean": return e === "true";
		case "null": return null;
		case "object": try {
			let t = JSON.parse(e);
			return typeof t == "object" && t && !Array.isArray(t) ? t : {};
		} catch {
			return {};
		}
		case "array": try {
			let t = JSON.parse(e);
			return Array.isArray(t) ? t : [];
		} catch {
			return [];
		}
		default: return e;
	}
}
function kr({ data: e, onChange: t, readOnly: n = !1, theme: r = "light", searchTerm: i = "", className: a = "", showToolbar: s = !0, showSearch: u = !0, defaultExpandLevel: d = 2 }) {
	let f = r === "dark", [p, m] = M(() => {
		let t = /* @__PURE__ */ new Set(), n = (e, r, i) => {
			e && typeof e == "object" && (i >= d && r && t.add(r), Array.isArray(e) ? e.forEach((e, t) => n(e, r ? `${r}.${t}` : String(t), i + 1)) : Object.entries(e).forEach(([e, t]) => n(t, r ? `${r}.${e}` : e, i + 1)));
		};
		return n(e, "", 0), t;
	}), [g, _] = M(""), v = i || g, [y, b] = M(null), [x, S] = M("string"), [C, w] = M(""), [T, ee] = M(null), [te, ne] = M(""), [re, ie] = M(null), [ae, D] = M(""), [O, se] = M("string"), [ce, le] = M(""), [A, ue] = M(null), de = (e) => {
		ue(e), setTimeout(() => ue(null), 1500);
	}, fe = (e, t) => {
		if (!v.trim()) return !0;
		let n = v.toLowerCase().trim();
		return !!(e.toLowerCase().includes(n) || typeof t == "string" && t.toLowerCase().includes(n) || typeof t == "number" && String(t).includes(n) || typeof t == "boolean" && String(t).includes(n));
	}, me = (e) => {
		m((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, he = () => {
		m(/* @__PURE__ */ new Set());
	}, ge = () => {
		let t = /* @__PURE__ */ new Set(), n = (e, r) => {
			e && typeof e == "object" && (r && t.add(r), Array.isArray(e) ? e.forEach((e, t) => n(e, r ? `${r}.${t}` : String(t))) : Object.entries(e).forEach(([e, t]) => n(t, r ? `${r}.${e}` : e)));
		};
		n(e, ""), m(t);
	}, _e = (t) => {
		let n = /* @__PURE__ */ new Set(), r = (e, i, a) => {
			e && typeof e == "object" && (a >= t && i && n.add(i), Array.isArray(e) ? e.forEach((e, t) => r(e, i ? `${i}.${t}` : String(t), a + 1)) : Object.entries(e).forEach(([e, t]) => r(t, i ? `${i}.${e}` : e, a + 1)));
		};
		r(e, "", 0), m(n);
	}, ve = (r, i) => {
		if (!n && t) try {
			let n = structuredClone(e);
			if (r.length === 0) return;
			let a = n;
			for (let e = 0; e < r.length - 1; e++) a = a[r[e]];
			let o = r[r.length - 1];
			i(a, o), t(n);
		} catch (e) {
			console.error("[JsonTreeViewer] Mutation failed:", e);
		}
	}, ye = (e) => {
		let t = Or(C, x);
		ve(e, (e, n) => {
			e[n] = t;
		}), b(null);
	}, be = (e, t) => {
		ve(e, (e, n) => {
			e[n] = !t;
		});
	}, xe = (e) => {
		let t = te.trim();
		t && ve(e, (e, n) => {
			if (Array.isArray(e) || n === t) return;
			let r = {};
			for (let [i, a] of Object.entries(e)) i === n ? r[t] = a : r[i] = a;
			for (let t of Object.keys(e)) delete e[t];
			Object.assign(e, r);
		}), ee(null);
	}, Se = (e) => {
		ve(e, (e, t) => {
			Array.isArray(e) && typeof t == "number" ? e.splice(t, 1) : delete e[t];
		});
	}, Ce = (e) => {
		ve(e, (e, t) => {
			if (Array.isArray(e) && typeof t == "number") {
				let n = structuredClone(e[t]);
				e.splice(t + 1, 0, n);
			} else {
				let n = structuredClone(e[t]), r = `${String(t)}_copy`, i = 1;
				for (; r in e;) r = `${String(t)}_copy_${i++}`;
				e[r] = n;
			}
		});
	}, we = (e) => {
		ve(e, (t, n) => {
			let r = e.length === 0 ? t : t[n], i = Or(ce, O);
			if (Array.isArray(r)) r.push(i);
			else if (typeof r == "object" && r) {
				let e = ae.trim() || `key_${Object.keys(r).length + 1}`;
				r[e] = i;
			}
		}), ie(null), D(""), le(""), se("string");
	}, Te = async (e, t) => {
		try {
			await navigator.clipboard.writeText(e), de(t);
		} catch {}
	}, De = (e, t, r, i) => {
		let a = r.join("."), s = Dr(t), u = s === "object", d = s === "array", g = u || d, _ = p.has(a), v = fe(String(e), t), k = y === a, A = T === a, ue = re === a, de = 0;
		return u && t !== null ? de = Object.keys(t).length : d && (de = t.length), /* @__PURE__ */ P("div", {
			className: L("font-mono text-xs transition-colors rounded-sm", !v && !g ? "opacity-30" : "", i > 0 ? f ? "ml-4 border-l border-slate-800/90 pl-2 my-0.5" : "ml-4 border-l border-slate-200/80 pl-2 my-0.5" : "my-0.5"),
			children: [
				/* @__PURE__ */ P("div", {
					className: L("flex items-center gap-1.5 py-0.5 group px-1 rounded transition-colors", f ? "hover:bg-slate-800/60" : "hover:bg-slate-50/80"),
					children: [
						g ? /* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => me(a),
							className: L("w-4 h-4 flex items-center justify-center cursor-pointer shrink-0 transition-colors", f ? "text-slate-500 hover:text-slate-200" : "text-slate-400 hover:text-slate-700"),
							children: N(_ ? l : c, { className: "w-3.5 h-3.5" })
						}) : /* @__PURE__ */ N("span", { className: "w-4 shrink-0" }),
						e !== "" && /* @__PURE__ */ N(Ee, { children: A && !n ? /* @__PURE__ */ P("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ N("input", {
									type: "text",
									value: te,
									onChange: (e) => ne(e.target.value),
									className: L("px-1.5 py-0.5 text-xs rounded font-mono focus:outline-none", f ? "bg-slate-800 border border-emerald-500 text-white" : "bg-white border border-emerald-500 text-slate-900"),
									autoFocus: !0,
									onKeyDown: (e) => {
										e.key === "Enter" && xe(r), e.key === "Escape" && ee(null);
									}
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => xe(r),
									className: "p-0.5 text-emerald-500 hover:text-emerald-400 cursor-pointer",
									children: /* @__PURE__ */ N(o, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => ee(null),
									className: "p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer",
									children: /* @__PURE__ */ N(pe, { className: "w-3.5 h-3.5" })
								})
							]
						}) : /* @__PURE__ */ P("span", {
							className: L("font-medium select-none cursor-pointer hover:underline", typeof e == "number" ? f ? "text-amber-400" : "text-amber-700" : f ? "text-sky-300" : "text-slate-900"),
							title: n ? void 0 : "Double-click to edit property name",
							onDoubleClick: (t) => {
								!n && typeof e == "string" && (t.stopPropagation(), ee(a), ne(e));
							},
							children: [typeof e == "number" ? `[${e}]` : `"${e}"`, ":"]
						}) }),
						k && !n ? /* @__PURE__ */ P("div", {
							className: "flex items-center gap-1 flex-wrap",
							children: [
								/* @__PURE__ */ P("select", {
									value: x,
									onChange: (e) => S(e.target.value),
									className: L("text-[11px] rounded px-1 py-0.5 focus:outline-none cursor-pointer", f ? "bg-slate-800 border border-slate-700 text-slate-200" : "bg-slate-100 border border-slate-300 text-slate-700"),
									children: [
										/* @__PURE__ */ N("option", {
											value: "string",
											children: "string"
										}),
										/* @__PURE__ */ N("option", {
											value: "number",
											children: "number"
										}),
										/* @__PURE__ */ N("option", {
											value: "boolean",
											children: "boolean"
										}),
										/* @__PURE__ */ N("option", {
											value: "null",
											children: "null"
										}),
										/* @__PURE__ */ N("option", {
											value: "object",
											children: "object (JSON)"
										}),
										/* @__PURE__ */ N("option", {
											value: "array",
											children: "array (JSON)"
										})
									]
								}),
								x === "boolean" ? /* @__PURE__ */ P("select", {
									value: C,
									onChange: (e) => w(e.target.value),
									className: L("text-xs rounded px-1.5 py-0.5 focus:outline-none", f ? "bg-slate-800 border border-slate-700 text-white" : "bg-white border border-slate-300 text-slate-800"),
									children: [/* @__PURE__ */ N("option", {
										value: "true",
										children: "true"
									}), /* @__PURE__ */ N("option", {
										value: "false",
										children: "false"
									})]
								}) : x === "null" ? /* @__PURE__ */ N("span", {
									className: "text-xs text-slate-400 italic",
									children: "null"
								}) : /* @__PURE__ */ N("input", {
									type: "text",
									value: C,
									onChange: (e) => w(e.target.value),
									className: L("px-1.5 py-0.5 text-xs rounded font-mono focus:outline-none min-w-[120px]", f ? "bg-slate-800 border border-emerald-500 text-white" : "bg-white border border-emerald-500 text-slate-900"),
									autoFocus: !0,
									onKeyDown: (e) => {
										e.key === "Enter" && ye(r), e.key === "Escape" && b(null);
									}
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => ye(r),
									className: "p-0.5 text-emerald-500 hover:text-emerald-400 cursor-pointer",
									children: /* @__PURE__ */ N(o, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => b(null),
									className: "p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer",
									children: /* @__PURE__ */ N(pe, { className: "w-3.5 h-3.5" })
								})
							]
						}) : /* @__PURE__ */ P("div", {
							className: "flex items-center gap-1.5 min-w-0",
							children: [
								s === "string" && /* @__PURE__ */ P("span", {
									className: L("break-all cursor-pointer px-1 rounded transition-colors", f ? "text-emerald-400 hover:bg-emerald-950/40" : "text-emerald-700 hover:bg-emerald-50/70"),
									title: n ? void 0 : "Double-click to edit text",
									onDoubleClick: () => {
										n || (b(a), S("string"), w(String(t)));
									},
									children: [
										"\"",
										String(t),
										"\""
									]
								}),
								s === "number" && /* @__PURE__ */ N("span", {
									className: L("font-semibold cursor-pointer px-1 rounded transition-colors", f ? "text-cyan-400 hover:bg-cyan-950/40" : "text-blue-700 hover:bg-blue-50/70"),
									title: n ? void 0 : "Double-click to edit number",
									onDoubleClick: () => {
										n || (b(a), S("number"), w(String(t)));
									},
									children: Number(t)
								}),
								s === "boolean" && /* @__PURE__ */ N("button", {
									type: "button",
									disabled: n,
									onClick: () => !n && be(r, !!t),
									className: L("font-bold px-1.5 py-0.2 rounded text-[11px] transition-colors", t ? f ? "bg-emerald-950 text-emerald-400 border border-emerald-800/80" : "bg-emerald-100 text-emerald-800" : f ? "bg-rose-950 text-rose-400 border border-rose-800/80" : "bg-rose-100 text-rose-800", n ? "cursor-default" : "cursor-pointer hover:opacity-80"),
									title: n ? void 0 : "Click to toggle boolean value",
									children: String(t)
								}),
								s === "null" && /* @__PURE__ */ N("span", {
									className: L("italic cursor-pointer px-1 rounded", f ? "text-slate-500 hover:bg-slate-800" : "text-slate-400 hover:bg-slate-100"),
									title: n ? void 0 : "Double-click to edit null",
									onDoubleClick: () => {
										n || (b(a), S("null"), w(""));
									},
									children: "null"
								}),
								g && /* @__PURE__ */ N("span", {
									className: L("text-[11px]", f ? "text-slate-500" : "text-slate-400"),
									children: d ? `Array(${de})` : `Object{${de}}`
								}),
								/* @__PURE__ */ N(wn, {
									variant: "default",
									size: "xs",
									className: L("opacity-0 group-hover:opacity-100 transition-opacity", f ? "bg-slate-800 text-slate-400 border-slate-700" : ""),
									children: s
								})
							]
						}),
						/* @__PURE__ */ P("div", {
							className: "ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity shrink-0",
							children: [
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => Te(JSON.stringify(t), "Value copied!"),
									className: L("p-1 rounded cursor-pointer transition-colors", f ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"),
									title: "Copy value to clipboard",
									children: /* @__PURE__ */ N(h, { className: "w-3 h-3" })
								}),
								!n && g && /* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => {
										ie(a), m((e) => {
											let t = new Set(e);
											return t.delete(a), t;
										});
									},
									className: L("p-1 rounded cursor-pointer transition-colors", f ? "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/50" : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"),
									title: "Add new property",
									children: /* @__PURE__ */ N(E, { className: "w-3 h-3" })
								}),
								!n && i > 0 && /* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => Ce(r),
									className: L("p-1 rounded cursor-pointer transition-colors", f ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"),
									title: "Duplicate this item",
									children: /* @__PURE__ */ N(oe, { className: "w-3 h-3" })
								}),
								!n && i > 0 && /* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => Se(r),
									className: L("p-1 rounded cursor-pointer transition-colors", f ? "text-rose-400 hover:text-rose-300 hover:bg-rose-950/50" : "text-rose-500 hover:text-rose-700 hover:bg-rose-50"),
									title: "Delete this property",
									children: /* @__PURE__ */ N(j, { className: "w-3 h-3" })
								})
							]
						})
					]
				}),
				ue && !n && /* @__PURE__ */ P("div", {
					className: L("ml-6 my-1 p-2 rounded-lg flex flex-wrap items-center gap-2 animate-in fade-in duration-100 border", f ? "bg-slate-900 border-slate-700" : "bg-emerald-50/70 border-emerald-200"),
					children: [
						!d && /* @__PURE__ */ N("input", {
							type: "text",
							placeholder: "Property name...",
							value: ae,
							onChange: (e) => D(e.target.value),
							className: L("px-2 py-1 text-xs rounded font-mono focus:outline-none w-32", f ? "bg-slate-800 border border-slate-700 text-white focus:border-emerald-500" : "bg-white border border-slate-300 text-slate-800 focus:border-emerald-500"),
							autoFocus: !0
						}),
						/* @__PURE__ */ P("select", {
							value: O,
							onChange: (e) => se(e.target.value),
							className: L("text-xs rounded px-2 py-1 focus:outline-none cursor-pointer", f ? "bg-slate-800 border border-slate-700 text-slate-200" : "bg-white border border-slate-300 text-slate-800"),
							children: [
								/* @__PURE__ */ N("option", {
									value: "string",
									children: "string"
								}),
								/* @__PURE__ */ N("option", {
									value: "number",
									children: "number"
								}),
								/* @__PURE__ */ N("option", {
									value: "boolean",
									children: "boolean"
								}),
								/* @__PURE__ */ N("option", {
									value: "null",
									children: "null"
								}),
								/* @__PURE__ */ N("option", {
									value: "object",
									children: "object"
								}),
								/* @__PURE__ */ N("option", {
									value: "array",
									children: "array"
								})
							]
						}),
						O === "boolean" ? /* @__PURE__ */ P("select", {
							value: ce,
							onChange: (e) => le(e.target.value),
							className: L("text-xs rounded px-2 py-1 focus:outline-none", f ? "bg-slate-800 border border-slate-700 text-white" : "bg-white border border-slate-300 text-slate-800"),
							children: [/* @__PURE__ */ N("option", {
								value: "true",
								children: "true"
							}), /* @__PURE__ */ N("option", {
								value: "false",
								children: "false"
							})]
						}) : O === "null" ? /* @__PURE__ */ N("span", {
							className: "text-xs text-slate-400 italic",
							children: "null"
						}) : /* @__PURE__ */ N("input", {
							type: "text",
							placeholder: "Value...",
							value: ce,
							onChange: (e) => le(e.target.value),
							className: L("px-2 py-1 text-xs rounded font-mono focus:outline-none flex-1 min-w-[120px]", f ? "bg-slate-800 border border-slate-700 text-white focus:border-emerald-500" : "bg-white border border-slate-300 text-slate-800 focus:border-emerald-500")
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => we(r),
							className: "px-2.5 py-1 text-xs bg-emerald-600 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer shadow-2xs",
							children: "Add"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => ie(null),
							className: L("px-2 py-1 text-xs cursor-pointer", f ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
							children: "Cancel"
						})
					]
				}),
				g && !_ && /* @__PURE__ */ P("div", { children: [d && t.map((e, t) => De(t, e, [...r, t], i + 1)), u && t !== null && Object.entries(t).map(([e, t]) => De(e, t, [...r, e], i + 1))] })
			]
		}, a || "root");
	};
	return /* @__PURE__ */ P("div", {
		className: L("flex flex-col w-full rounded-xl select-text relative transition-colors", f ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800", a),
		children: [
			A && /* @__PURE__ */ P("div", {
				className: "absolute top-2 right-2 z-20 bg-slate-900 text-white text-xs px-3 py-1 rounded-lg shadow-md animate-in fade-in duration-100 flex items-center gap-1.5 border border-slate-700",
				children: [/* @__PURE__ */ N(o, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ N("span", { children: A })]
			}),
			s && /* @__PURE__ */ P("div", {
				className: L("flex flex-wrap items-center justify-between gap-2 p-2 border-b text-xs select-none", f ? "bg-slate-900/90 border-slate-800" : "bg-slate-50/80 border-slate-200"),
				children: [/* @__PURE__ */ P("div", {
					className: "flex items-center gap-1.5 flex-wrap",
					children: [
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: he,
							className: L("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", f ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Expand All"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: ge,
							className: L("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", f ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Collapse All"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => _e(1),
							className: L("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", f ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Level 1"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => _e(2),
							className: L("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", f ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Level 2"
						})
					]
				}), u && /* @__PURE__ */ P("div", {
					className: "relative min-w-[160px]",
					children: [
						/* @__PURE__ */ N(k, { className: "w-3.5 h-3.5 absolute left-2 top-2 text-slate-400" }),
						/* @__PURE__ */ N("input", {
							type: "text",
							placeholder: "Search properties...",
							value: g,
							onChange: (e) => _(e.target.value),
							className: L("w-full pl-7 pr-6 py-1 text-xs border rounded-lg focus:outline-none font-mono transition-colors", f ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500")
						}),
						g && /* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => _(""),
							className: "absolute right-1.5 top-1.5 text-slate-400 hover:text-slate-200 cursor-pointer",
							children: /* @__PURE__ */ N(pe, { className: "w-3.5 h-3.5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ N("div", {
				className: "p-3 overflow-auto max-h-[600px]",
				children: e == null ? /* @__PURE__ */ N("div", {
					className: L("text-xs italic p-4 text-center", f ? "text-slate-500" : "text-slate-400"),
					children: "Empty data / null"
				}) : De("", e, [], 0)
			})
		]
	});
}
//#endregion
//#region node_modules/prismjs/components/prism-markup.js
var Ar = /* @__PURE__ */ Le((/* @__PURE__ */ Pe(((e, t) => {
	var n = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, i = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					n ||= {};
					var r, a;
					switch (i.util.type(t)) {
						case "Object":
							if (a = i.util.objId(t), n[a]) return n[a];
							for (var o in r = {}, n[a] = r, t) t.hasOwnProperty(o) && (r[o] = e(t[o], n));
							return r;
						case "Array": return a = i.util.objId(t), n[a] ? n[a] : (r = [], n[a] = r, t.forEach(function(t, i) {
							r[i] = e(t, n);
						}), r);
						default: return t;
					}
				},
				getLanguage: function(e) {
					for (; e;) {
						var n = t.exec(e.className);
						if (n) return n[1].toLowerCase();
						e = e.parentElement;
					}
					return "none";
				},
				setLanguage: function(e, n) {
					e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
				},
				currentScript: function() {
					if (typeof document > "u") return null;
					if (document.currentScript && document.currentScript.tagName === "SCRIPT") return document.currentScript;
					try {
						throw Error();
					} catch (r) {
						var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
						if (e) {
							var t = document.getElementsByTagName("script");
							for (var n in t) if (t[n].src == e) return t[n];
						}
						return null;
					}
				},
				isActive: function(e, t, n) {
					for (var r = "no-" + t; e;) {
						var i = e.classList;
						if (i.contains(t)) return !0;
						if (i.contains(r)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: r,
				plaintext: r,
				text: r,
				txt: r,
				extend: function(e, t) {
					var n = i.util.clone(i.languages[e]);
					for (var r in t) n[r] = t[r];
					return n;
				},
				insertBefore: function(e, t, n, r) {
					r ||= i.languages;
					var a = r[e], o = {};
					for (var s in a) if (a.hasOwnProperty(s)) {
						if (s == t) for (var c in n) n.hasOwnProperty(c) && (o[c] = n[c]);
						n.hasOwnProperty(s) || (o[s] = a[s]);
					}
					var l = r[e];
					return r[e] = o, i.languages.DFS(i.languages, function(t, n) {
						n === l && t != e && (this[t] = o);
					}), o;
				},
				DFS: function e(t, n, r, a) {
					a ||= {};
					var o = i.util.objId;
					for (var s in t) if (t.hasOwnProperty(s)) {
						n.call(t, s, t[s], r || s);
						var c = t[s], l = i.util.type(c);
						l === "Object" && !a[o(c)] ? (a[o(c)] = !0, e(c, n, null, a)) : l === "Array" && !a[o(c)] && (a[o(c)] = !0, e(c, n, s, a));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				i.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var r = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), i.hooks.run("before-all-elements-highlight", r);
				for (var a = 0, o; o = r.elements[a++];) i.highlightElement(o, t === !0, r.callback);
			},
			highlightElement: function(t, n, r) {
				var a = i.util.getLanguage(t), o = i.languages[a];
				i.util.setLanguage(t, a);
				var s = t.parentElement;
				s && s.nodeName.toLowerCase() === "pre" && i.util.setLanguage(s, a);
				var c = {
					element: t,
					language: a,
					grammar: o,
					code: t.textContent
				};
				function l(e) {
					c.highlightedCode = e, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, i.hooks.run("after-highlight", c), i.hooks.run("complete", c), r && r.call(c.element);
				}
				if (i.hooks.run("before-sanity-check", c), s = c.element.parentElement, s && s.nodeName.toLowerCase() === "pre" && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), !c.code) i.hooks.run("complete", c), r && r.call(c.element);
				else if (i.hooks.run("before-highlight", c), !c.grammar) l(i.util.encode(c.code));
				else if (n && e.Worker) {
					var u = new Worker(i.filename);
					u.onmessage = function(e) {
						l(e.data);
					}, u.postMessage(JSON.stringify({
						language: c.language,
						code: c.code,
						immediateClose: !0
					}));
				} else l(i.highlight(c.code, c.grammar, c.language));
			},
			highlight: function(e, t, n) {
				var r = {
					code: e,
					grammar: t,
					language: n
				};
				if (i.hooks.run("before-tokenize", r), !r.grammar) throw Error("The language \"" + r.language + "\" has no grammar.");
				return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), a.stringify(i.util.encode(r.tokens), r.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var i = new c();
				return l(i, i.head, e), s(e, i, t, i.head, 0), d(i);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = i.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = i.hooks.all[e];
					if (n && n.length) for (var r = 0, a; a = n[r++];) a(t);
				}
			},
			Token: a
		};
		e.Prism = i;
		function a(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0;
		}
		a.stringify = function e(t, n) {
			if (typeof t == "string") return t;
			if (Array.isArray(t)) {
				var r = "";
				return t.forEach(function(t) {
					r += e(t, n);
				}), r;
			}
			var a = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, o = t.alias;
			o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)), i.hooks.run("wrap", a);
			var s = "";
			for (var c in a.attributes) s += " " + c + "=\"" + (a.attributes[c] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + s + ">" + a.content + "</" + a.tag + ">";
		};
		function o(e, t, n, r) {
			e.lastIndex = t;
			var i = e.exec(n);
			if (i && r && i[1]) {
				var a = i[1].length;
				i.index += a, i[0] = i[0].slice(a);
			}
			return i;
		}
		function s(e, t, n, r, c, d) {
			for (var f in n) if (n.hasOwnProperty(f) && n[f]) {
				var p = n[f];
				p = Array.isArray(p) ? p : [p];
				for (var m = 0; m < p.length; ++m) {
					if (d && d.cause == f + "," + m) return;
					var h = p[m], g = h.inside, _ = !!h.lookbehind, v = !!h.greedy, y = h.alias;
					if (v && !h.pattern.global) {
						var b = h.pattern.toString().match(/[imsuy]*$/)[0];
						h.pattern = RegExp(h.pattern.source, b + "g");
					}
					for (var x = h.pattern || h, S = r.next, C = c; S !== t.tail && !(d && C >= d.reach); C += S.value.length, S = S.next) {
						var w = S.value;
						if (t.length > e.length) return;
						if (!(w instanceof a)) {
							var T = 1, ee;
							if (v) {
								if (ee = o(x, C, e, _), !ee || ee.index >= e.length) break;
								var te = ee.index, ne = ee.index + ee[0].length, re = C;
								for (re += S.value.length; te >= re;) S = S.next, re += S.value.length;
								if (re -= S.value.length, C = re, S.value instanceof a) continue;
								for (var ie = S; ie !== t.tail && (re < ne || typeof ie.value == "string"); ie = ie.next) T++, re += ie.value.length;
								T--, w = e.slice(C, re), ee.index -= C;
							} else if (ee = o(x, 0, w, _), !ee) continue;
							var te = ee.index, ae = ee[0], E = w.slice(0, te), D = w.slice(te + ae.length), oe = C + w.length;
							d && oe > d.reach && (d.reach = oe);
							var O = S.prev;
							E && (O = l(t, O, E), C += E.length), u(t, O, T);
							var k = new a(f, g ? i.tokenize(ae, g) : ae, y, ae);
							if (S = l(t, O, k), D && l(t, S, D), T > 1) {
								var se = {
									cause: f + "," + m,
									reach: oe
								};
								s(e, t, n, S.prev, C, se), d && se.reach > d.reach && (d.reach = se.reach);
							}
						}
					}
				}
			}
		}
		function c() {
			var e = {
				value: null,
				prev: null,
				next: null
			}, t = {
				value: null,
				prev: e,
				next: null
			};
			e.next = t, this.head = e, this.tail = t, this.length = 0;
		}
		function l(e, t, n) {
			var r = t.next, i = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = i, r.prev = i, e.length++, i;
		}
		function u(e, t, n) {
			for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
			t.next = r, r.prev = t, e.length -= i;
		}
		function d(e) {
			for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
			return t;
		}
		if (!e.document) return e.addEventListener && (i.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), r = n.language, a = n.code, o = n.immediateClose;
			e.postMessage(i.highlight(a, i.languages[r], r)), o && e.close();
		}, !1)), i;
		var f = i.util.currentScript();
		f && (i.filename = f.src, f.hasAttribute("data-manual") && (i.manual = !0));
		function p() {
			i.manual || i.highlightAll();
		}
		if (!i.manual) {
			var m = document.readyState;
			m === "loading" || m === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16);
		}
		return i;
	}(typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {});
	t !== void 0 && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n), n.languages.markup = {
		comment: {
			pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
			greedy: !0
		},
		prolog: {
			pattern: /<\?[\s\S]+?\?>/,
			greedy: !0
		},
		doctype: {
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: !0,
			inside: {
				"internal-subset": {
					pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
					lookbehind: !0,
					greedy: !0,
					inside: null
				},
				string: {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: !0
				},
				punctuation: /^<!|>$|[[\]]/,
				"doctype-tag": /^DOCTYPE/i,
				name: /[^\s<>'"]+/
			}
		},
		cdata: {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			greedy: !0
		},
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
			greedy: !0,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"special-attr": [],
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: { punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: !0
					}] }
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: { namespace: /^[^\s>\/:]+:/ }
				}
			}
		},
		entity: [{
			pattern: /&[\da-z]{1,8};/i,
			alias: "named-entity"
		}, /&#x?[\da-f]{1,8};/i]
	}, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(e) {
		e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(e, t) {
		var r = {};
		r["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: n.languages[t]
		}, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var i = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: r
		} };
		i["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: n.languages[t]
		};
		var a = {};
		a[e] = {
			pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)".replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: i
		}, n.languages.insertBefore("markup", "cdata", a);
	} }), Object.defineProperty(n.languages.markup.tag, "addAttribute", { value: function(e, t) {
		n.languages.markup.tag.inside["special-attr"].push({
			pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
			lookbehind: !0,
			inside: {
				"attr-name": /^[^\s=]+/,
				"attr-value": {
					pattern: /=[\s\S]+/,
					inside: {
						value: {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: !0,
							alias: [t, "language-" + t],
							inside: n.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, (function(e) {
		var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
		e.languages.css = {
			comment: /\/\*[\s\S]*?\*\//,
			atrule: {
				pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
				inside: {
					rule: /^@[\w-]+/,
					"selector-function-argument": {
						pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
						lookbehind: !0,
						alias: "selector"
					},
					keyword: {
						pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
						lookbehind: !0
					}
				}
			},
			url: {
				pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\\r\\n()\"']|\\\\[\\s\\S])*)\\)", "i"),
				greedy: !0,
				inside: {
					function: /^url/i,
					punctuation: /^\(|\)$/,
					string: {
						pattern: RegExp("^" + t.source + "$"),
						alias: "url"
					}
				}
			},
			selector: {
				pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
				lookbehind: !0
			},
			string: {
				pattern: t,
				greedy: !0
			},
			property: {
				pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
				lookbehind: !0
			},
			important: /!important\b/i,
			function: {
				pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
				lookbehind: !0
			},
			punctuation: /[(){};:,]/
		}, e.languages.css.atrule.inside.rest = e.languages.css;
		var n = e.languages.markup;
		n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
	})(n), n.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: !0,
			inside: { punctuation: /[.\\]/ }
		},
		keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
		boolean: /\b(?:false|true)\b/,
		function: /\b\w+(?=\()/,
		number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		punctuation: /[{}[\];(),.:]/
	}, n.languages.javascript = n.languages.extend("clike", {
		"class-name": [n.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		number: {
			pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
			lookbehind: !0
		},
		operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	}), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: n.languages.regex
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/
			}
		},
		"function-variable": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function"
		},
		parameter: [
			{
				pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: n.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), n.languages.insertBefore("javascript", "string", {
		hashbang: {
			pattern: /^#!.*/,
			greedy: !0,
			alias: "comment"
		},
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: n.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property"
		}
	}), n.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), n.languages.js = n.languages.javascript, (function() {
		if (n === void 0 || typeof document > "u") return;
		Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
		var e = "Loading…", t = function(e, t) {
			return "✖ Error " + e + " while fetching file: " + t;
		}, r = "✖ Error: File does not exist or is empty", i = {
			js: "javascript",
			py: "python",
			rb: "ruby",
			ps1: "powershell",
			psm1: "powershell",
			sh: "bash",
			bat: "batch",
			h: "c",
			tex: "latex"
		}, a = "data-src-status", o = "loading", s = "loaded", c = "failed", l = "pre[data-src]:not([" + a + "=\"" + s + "\"]):not([" + a + "=\"" + o + "\"])";
		function u(e, n, i) {
			var a = new XMLHttpRequest();
			a.open("GET", e, !0), a.onreadystatechange = function() {
				a.readyState == 4 && (a.status < 400 && a.responseText ? n(a.responseText) : a.status >= 400 ? i(t(a.status, a.statusText)) : i(r));
			}, a.send(null);
		}
		function d(e) {
			var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
			if (t) {
				var n = Number(t[1]), r = t[2], i = t[3];
				return r ? i ? [n, Number(i)] : [n, void 0] : [n, n];
			}
		}
		n.hooks.add("before-highlightall", function(e) {
			e.selector += ", " + l;
		}), n.hooks.add("before-sanity-check", function(t) {
			var r = t.element;
			if (r.matches(l)) {
				t.code = "", r.setAttribute(a, o);
				var f = r.appendChild(document.createElement("CODE"));
				f.textContent = e;
				var p = r.getAttribute("data-src"), m = t.language;
				if (m === "none") {
					var h = (/\.(\w+)$/.exec(p) || [, "none"])[1];
					m = i[h] || h;
				}
				n.util.setLanguage(f, m), n.util.setLanguage(r, m);
				var g = n.plugins.autoloader;
				g && g.loadLanguages(m), u(p, function(e) {
					r.setAttribute(a, s);
					var t = d(r.getAttribute("data-range"));
					if (t) {
						var i = e.split(/\r\n?|\n/g), o = t[0], c = t[1] == null ? i.length : t[1];
						o < 0 && (o += i.length), o = Math.max(0, Math.min(o - 1, i.length)), c < 0 && (c += i.length), c = Math.max(0, Math.min(c, i.length)), e = i.slice(o, c).join("\n"), r.hasAttribute("data-start") || r.setAttribute("data-start", String(o + 1));
					}
					f.textContent = e, n.highlightElement(f);
				}, function(e) {
					r.setAttribute(a, c), f.textContent = e;
				});
			}
		}), n.plugins.fileHighlight = { highlight: function(e) {
			for (var t = (e || document).querySelectorAll(l), r = 0, i; i = t[r++];) n.highlightElement(i);
		} };
		var f = !1;
		n.fileHighlight = function() {
			f ||= (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
		};
	})();
})))(), 1);
Prism.languages.markup = {
	comment: {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: !0
	},
	prolog: {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: !0
	},
	doctype: {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			"internal-subset": {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null
			},
			string: {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: !0
			},
			punctuation: /^<!|>$|[[\]]/,
			"doctype-tag": /^DOCTYPE/i,
			name: /[^\s<>'"]+/
		}
	},
	cdata: {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: !0
	},
	tag: {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					punctuation: /^<\/?/,
					namespace: /^[^\s>\/:]+:/
				}
			},
			"special-attr": [],
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: { punctuation: [{
					pattern: /^=/,
					alias: "attr-equals"
				}, {
					pattern: /^(\s*)["']|["']$/,
					lookbehind: !0
				}] }
			},
			punctuation: /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ }
			}
		}
	},
	entity: [{
		pattern: /&[\da-z]{1,8};/i,
		alias: "named-entity"
	}, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(e) {
	e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(e, t) {
	var n = {};
	n["language-" + t] = {
		pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
		lookbehind: !0,
		inside: Prism.languages[t]
	}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
	var r = { "included-cdata": {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		inside: n
	} };
	r["language-" + t] = {
		pattern: /[\s\S]+/,
		inside: Prism.languages[t]
	};
	var i = {};
	i[e] = {
		pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)".replace(/__/g, function() {
			return e;
		}), "i"),
		lookbehind: !0,
		greedy: !0,
		inside: r
	}, Prism.languages.insertBefore("markup", "cdata", i);
} }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(e, t) {
	Prism.languages.markup.tag.inside["special-attr"].push({
		pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
		lookbehind: !0,
		inside: {
			"attr-name": /^[^\s=]+/,
			"attr-value": {
				pattern: /=[\s\S]+/,
				inside: {
					value: {
						pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
						lookbehind: !0,
						alias: [t, "language-" + t],
						inside: Prism.languages[t]
					},
					punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, /"|'/]
				}
			}
		}
	});
} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, (function(e) {
	var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	e.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector"
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0
				}
			}
		},
		url: {
			pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\\r\\n()\"']|\\\\[\\s\\S])*)\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: {
					pattern: RegExp("^" + t.source + "$"),
					alias: "url"
				}
			}
		},
		selector: {
			pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
			lookbehind: !0
		},
		string: {
			pattern: t,
			greedy: !0
		},
		property: {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0
		},
		important: /!important\b/i,
		function: {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: !0
		},
		punctuation: /[(){};:,]/
	}, e.languages.css.atrule.inside.rest = e.languages.css;
	var n = e.languages.markup;
	n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(Prism), Prism.languages.javascript = Prism.languages.extend("clike", {
	"class-name": [Prism.languages.clike["class-name"], {
		pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
		lookbehind: !0
	}],
	keyword: [{
		pattern: /((?:^|\})\s*)catch\b/,
		lookbehind: !0
	}, {
		pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0
	}],
	function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number: {
		pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
		lookbehind: !0
	},
	operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			"regex-source": {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: !0,
				alias: "language-regex",
				inside: Prism.languages.regex
			},
			"regex-delimiter": /^\/|\/$/,
			"regex-flags": /^[a-z]+$/
		}
	},
	"function-variable": {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: "function"
	},
	parameter: [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: !0,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: !0,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: !0,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: !0,
			inside: Prism.languages.javascript
		}
	],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
	hashbang: {
		pattern: /^#!.*/,
		greedy: !0,
		alias: "comment"
	},
	"template-string": {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: !0,
		inside: {
			"template-punctuation": {
				pattern: /^`|`$/,
				alias: "string"
			},
			interpolation: {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: !0,
				inside: {
					"interpolation-punctuation": {
						pattern: /^\$\{|\}$/,
						alias: "punctuation"
					},
					rest: Prism.languages.javascript
				}
			},
			string: /[\s\S]+/
		}
	},
	"string-property": {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: !0,
		greedy: !0,
		alias: "property"
	}
}), Prism.languages.insertBefore("javascript", "operator", { "literal-property": {
	pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
	lookbehind: !0,
	alias: "property"
} }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript, (function(e) {
	e.languages.typescript = e.languages.extend("javascript", {
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null
		},
		builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
	}), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
	var t = e.languages.extend("typescript", {});
	delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
		decorator: {
			pattern: /@[$\w\xA0-\uFFFF]+/,
			inside: {
				at: {
					pattern: /^@/,
					alias: "operator"
				},
				function: /^[\s\S]+/
			}
		},
		"generic-function": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: !0,
			inside: {
				function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
				generic: {
					pattern: /<[\s\S]+/,
					alias: "class-name",
					inside: t
				}
			}
		}
	}), e.languages.ts = e.languages.typescript;
})(Prism), (function(e) {
	var t = e.util.clone(e.languages.javascript), n = "(?:\\s|\\/\\/.*(?!.)|\\/\\*(?:[^*]|\\*(?!\\/))\\*\\/)", r = "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})", i = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
	function a(e, t) {
		return e = e.replace(/<S>/g, function() {
			return n;
		}).replace(/<BRACES>/g, function() {
			return r;
		}).replace(/<SPREAD>/g, function() {
			return i;
		}), RegExp(e, t);
	}
	i = a(i).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = a("<\\/?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"|'(?:\\\\[\\s\\S]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\\/?)?>"), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", { spread: {
		pattern: a("<SPREAD>"),
		inside: e.languages.jsx
	} }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", { script: {
		pattern: a("=<BRACES>"),
		alias: "language-javascript",
		inside: {
			"script-punctuation": {
				pattern: /^=(?=\{)/,
				alias: "punctuation"
			},
			rest: e.languages.jsx
		}
	} }, e.languages.jsx.tag);
	var o = function(e) {
		return e ? typeof e == "string" ? e : typeof e.content == "string" ? e.content : e.content.map(o).join("") : "";
	}, s = function(t) {
		for (var n = [], r = 0; r < t.length; r++) {
			var i = t[r], a = !1;
			if (typeof i != "string" && (i.type === "tag" && i.content[0] && i.content[0].type === "tag" ? i.content[0].content[0].content === "</" ? n.length > 0 && n[n.length - 1].tagName === o(i.content[0].content[1]) && n.pop() : i.content[i.content.length - 1].content === "/>" || n.push({
				tagName: o(i.content[0].content[1]),
				openedBraces: 0
			}) : n.length > 0 && i.type === "punctuation" && i.content === "{" ? n[n.length - 1].openedBraces++ : n.length > 0 && n[n.length - 1].openedBraces > 0 && i.type === "punctuation" && i.content === "}" ? n[n.length - 1].openedBraces-- : a = !0), (a || typeof i == "string") && n.length > 0 && n[n.length - 1].openedBraces === 0) {
				var c = o(i);
				r < t.length - 1 && (typeof t[r + 1] == "string" || t[r + 1].type === "plain-text") && (c += o(t[r + 1]), t.splice(r + 1, 1)), r > 0 && (typeof t[r - 1] == "string" || t[r - 1].type === "plain-text") && (c = o(t[r - 1]) + c, t.splice(r - 1, 1), r--), t[r] = new e.Token("plain-text", c, null, c);
			}
			i.content && typeof i.content != "string" && s(i.content);
		}
	};
	e.hooks.add("after-tokenize", function(e) {
		(e.language === "jsx" || e.language === "tsx") && s(e.tokens);
	});
})(Prism), (function(e) {
	var t = e.util.clone(e.languages.typescript);
	e.languages.tsx = e.languages.extend("jsx", t), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
	var n = e.languages.tsx.tag;
	n.pattern = RegExp("(^|[^\\w$]|(?=<\\/))(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0;
})(Prism), Prism.languages.json = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: !0,
		greedy: !0
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: !0,
		greedy: !0
	},
	comment: {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0
	},
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
	null: {
		pattern: /\bnull\b/,
		alias: "keyword"
	}
}, Prism.languages.webmanifest = Prism.languages.json;
//#endregion
//#region src/components/ui/code-editor/highlight.ts
function jr(e, t) {
	if (!e) return "";
	let n = (t || "text").toLowerCase().trim(), r = Ar.default.languages[n], i = n;
	if (!r) switch (n) {
		case "ts":
		case "typescript":
			r = Ar.default.languages.typescript, i = "typescript";
			break;
		case "tsx":
			r = Ar.default.languages.tsx, i = "tsx";
			break;
		case "js":
		case "javascript":
			r = Ar.default.languages.javascript, i = "javascript";
			break;
		case "jsx":
			r = Ar.default.languages.jsx, i = "jsx";
			break;
		case "html":
		case "xml":
		case "svg":
			r = Ar.default.languages.markup, i = "markup";
			break;
		case "css":
			r = Ar.default.languages.css, i = "css";
			break;
		case "json":
			r = Ar.default.languages.json, i = "json";
			break;
		default: r = Ar.default.languages.markup, i = "markup";
	}
	try {
		return Ar.default.highlight(e, r || Ar.default.languages.markup, i);
	} catch {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
	}
}
//#endregion
//#region src/components/ui/code-editor/CodeEditor.tsx
function Mr({ value: e, onChange: n, language: r = "json", readOnly: i = !1, theme: a = "dark", viewMode: o, onViewModeChange: s, showLineNumbers: c = !0, showToolbar: l = !0, showViewToggle: u = !0, showFormatButton: d = !0, showCopyButton: f = !0, showFullScreenButton: p = !1, onFullScreen: m, onFormat: h, tabs: g, activeTab: _, onChangeTab: v, tabsVariant: y, tabsPosition: b, tabsActions: x, toolbarLayout: S = "auto", statusPosition: C, actionsPosition: w, customToolbar: T, toolbarProps: ee, height: te = "360px", maxHeight: ne, className: re = "", editorClassName: ie = "", placeholder: ae = "", title: E, extraActions: D, searchTerm: oe = "" }) {
	let O = a === "dark", [k, se] = M("code"), [ce, le] = M(!1), A = o === void 0 ? k : o, j = (e) => {
		o === void 0 && se(e), s?.(e);
	}, ue = we(null), de = we(null), fe = we(null), pe = (e) => {
		fe.current && (fe.current.scrollTop = e.currentTarget.scrollTop);
	}, me = Ce(() => jr(e || "", r), [e, r]), { isValidJson: he, parsedJson: ge, parseError: _e } = Ce(() => {
		if (r !== "json" || !e || !e.trim()) return {
			isValidJson: !0,
			parsedJson: null,
			parseError: null
		};
		try {
			return {
				isValidJson: !0,
				parsedJson: JSON.parse(e),
				parseError: null
			};
		} catch (e) {
			return {
				isValidJson: !1,
				parsedJson: null,
				parseError: e.message || "Format JSON tidak valid"
			};
		}
	}, [e, r]), ve = Ce(() => Math.max(1, (e || "").split("\n").length), [e]), ye = Ce(() => Array.from({ length: ve }, (e, t) => t + 1), [ve]), be = () => {
		if (h) h();
		else if (!i && n && r === "json") try {
			let t = JSON.parse(e);
			n(JSON.stringify(t, null, 2));
		} catch {}
	}, xe = async () => {
		try {
			await navigator.clipboard.writeText(e), le(!0), setTimeout(() => le(!1), 1500);
		} catch {}
	}, Se = (e) => {
		if (!i && n) try {
			n(JSON.stringify(e, null, 2));
		} catch {}
	}, Te = r === "json" && he && ge !== null, Ee = {
		theme: a,
		title: E,
		language: r,
		isValidJson: he,
		layout: S,
		tabs: g,
		activeTab: _,
		onChangeTab: v,
		tabsVariant: y,
		tabsPosition: b,
		tabsActions: x,
		statusPosition: C,
		actionsPosition: w,
		viewMode: A,
		onViewModeChange: j,
		showViewToggle: u,
		isTreeSupported: Te,
		showFormatButton: d,
		onFormat: be,
		readOnly: i,
		showCopyButton: f,
		copied: ce,
		onCopy: xe,
		showFullScreenButton: p,
		onFullScreen: m,
		extraActions: D,
		...ee
	};
	return /* @__PURE__ */ P("div", {
		className: L("w-full flex flex-col rounded-2xl border overflow-hidden shadow-2xs transition-colors", O ? "border-slate-800 bg-slate-950" : "border-slate-200/90 bg-white", re),
		children: [
			l && (T ? typeof T == "function" ? T(Ee) : T : /* @__PURE__ */ N(vr, { ...Ee })),
			/* @__PURE__ */ N("div", {
				style: {
					height: te === "auto" ? `${Math.min(Math.max(ve * 22 + 24, 72), 520)}px` : te,
					maxHeight: ne
				},
				className: L("relative w-full flex overflow-hidden font-mono text-xs transition-colors", O ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900", ie),
				children: A === "tree" && Te ? /* @__PURE__ */ N("div", {
					className: "w-full h-full overflow-auto p-2",
					children: /* @__PURE__ */ N(kr, {
						data: ge,
						onChange: Se,
						readOnly: i,
						theme: a,
						searchTerm: oe
					})
				}) : /* @__PURE__ */ P("div", {
					className: "w-full h-full flex overflow-hidden",
					children: [c && /* @__PURE__ */ N(Er, {
						gutterRef: fe,
						lineNumbers: ye,
						theme: a
					}), /* @__PURE__ */ N("div", {
						className: "flex-1 relative h-full overflow-hidden",
						children: i ? /* @__PURE__ */ N("div", {
							ref: de,
							onScroll: pe,
							className: L("rakit-code-pre w-full h-full p-3 font-mono text-xs leading-5 overflow-auto whitespace-pre tab-[2] select-text", O ? "rakit-code-dark text-slate-100 bg-slate-950" : "text-slate-900 bg-white"),
							children: /* @__PURE__ */ N("code", {
								className: "font-mono text-xs leading-5 block",
								dangerouslySetInnerHTML: { __html: me }
							})
						}) : /* @__PURE__ */ N("textarea", {
							ref: ue,
							value: e,
							onChange: (e) => n?.(e.target.value),
							readOnly: i,
							placeholder: ae,
							onScroll: pe,
							spellCheck: !1,
							className: L("w-full h-full p-3 font-mono text-xs leading-5 resize-none focus:outline-none focus:ring-0 border-0 overflow-auto whitespace-pre tab-[2] transition-colors", O ? "text-slate-100 bg-transparent placeholder-slate-600" : "text-slate-900 bg-transparent placeholder-slate-400", "cursor-text")
						})
					})]
				})
			}),
			r === "json" && !he && _e && /* @__PURE__ */ P("div", {
				className: L("px-3 py-1.5 border-t text-xs flex items-center gap-1.5 font-medium transition-colors", O ? "bg-rose-950/60 border-rose-900 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-700"),
				children: [/* @__PURE__ */ N(t, { className: "w-3.5 h-3.5 shrink-0 text-rose-500" }), /* @__PURE__ */ N("span", {
					className: "truncate",
					children: _e
				})]
			})
		]
	});
}
var Nr = Mr;
//#endregion
//#region src/components/ui/code-editor/CodeViewer.tsx
function Pr(e) {
	switch (e.split(".").pop()?.toLowerCase() || "") {
		case "tsx": return "tsx";
		case "ts": return "ts";
		case "jsx": return "jsx";
		case "js":
		case "mjs":
		case "cjs": return "js";
		case "html":
		case "htm": return "html";
		case "css": return "css";
		case "json": return "json";
		default: return "text";
	}
}
function Fr(e) {
	switch (e.split(".").pop()?.toLowerCase() || "") {
		case "json": return /* @__PURE__ */ N(y, { className: "w-3.5 h-3.5 text-emerald-500" });
		case "tsx":
		case "jsx": return /* @__PURE__ */ N(v, { className: "w-3.5 h-3.5 text-cyan-500" });
		case "ts":
		case "js":
		case "mjs":
		case "cjs": return /* @__PURE__ */ N(v, { className: "w-3.5 h-3.5 text-amber-500" });
		case "html":
		case "htm": return /* @__PURE__ */ N(v, { className: "w-3.5 h-3.5 text-orange-500" });
		default: return /* @__PURE__ */ N(x, { className: "w-3.5 h-3.5 text-slate-400" });
	}
}
function Ir({ value: e = "", files: t, activeFileName: n, onActiveFileChange: r, language: i = "tsx", title: a, theme: o = "light", height: s = "auto", maxHeight: c = "480px", showToolbar: l = !0, showCopyButton: u = !0, showLineNumbers: d = !0, className: f = "", tabsVariant: p = "pills", ...m }) {
	let h = !!(t && t.length > 0), [g, _] = M(() => t && t.length > 0 ? t[0].name : ""), v = n === void 0 ? g : n, y = Ce(() => !h || !t ? null : t.find((e) => e.name === v) || t[0], [
		h,
		t,
		v
	]), b = Ce(() => {
		if (h && t) return t.map((e) => ({
			id: e.name,
			label: e.name,
			icon: e.icon || Fr(e.name)
		}));
	}, [h, t]), x = (e) => {
		n === void 0 && _(e), r?.(e);
	}, S = h ? y?.content ?? "" : e, C = h ? y?.language || Pr(y?.name || "") : i;
	return /* @__PURE__ */ N(Mr, {
		value: S,
		language: C,
		title: a === void 0 ? void 0 : a,
		theme: o,
		readOnly: !0,
		height: s,
		maxHeight: c,
		showToolbar: l,
		showCopyButton: u,
		showLineNumbers: d,
		showViewToggle: C === "json",
		tabs: b,
		activeTab: y?.name,
		onChangeTab: x,
		tabsVariant: p,
		className: f,
		...m
	});
}
var Lr = Ir, R;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e._abstract = 1] = "_abstract", e[e._accessor = 2] = "_accessor", e[e._as = 3] = "_as", e[e._assert = 4] = "_assert", e[e._asserts = 5] = "_asserts", e[e._async = 6] = "_async", e[e._await = 7] = "_await", e[e._checks = 8] = "_checks", e[e._constructor = 9] = "_constructor", e[e._declare = 10] = "_declare", e[e._enum = 11] = "_enum", e[e._exports = 12] = "_exports", e[e._from = 13] = "_from", e[e._get = 14] = "_get", e[e._global = 15] = "_global", e[e._implements = 16] = "_implements", e[e._infer = 17] = "_infer", e[e._interface = 18] = "_interface", e[e._is = 19] = "_is", e[e._keyof = 20] = "_keyof", e[e._mixins = 21] = "_mixins", e[e._module = 22] = "_module", e[e._namespace = 23] = "_namespace", e[e._of = 24] = "_of", e[e._opaque = 25] = "_opaque", e[e._out = 26] = "_out", e[e._override = 27] = "_override", e[e._private = 28] = "_private", e[e._protected = 29] = "_protected", e[e._proto = 30] = "_proto", e[e._public = 31] = "_public", e[e._readonly = 32] = "_readonly", e[e._require = 33] = "_require", e[e._satisfies = 34] = "_satisfies", e[e._set = 35] = "_set", e[e._static = 36] = "_static", e[e._symbol = 37] = "_symbol", e[e._type = 38] = "_type", e[e._unique = 39] = "_unique", e[e._using = 40] = "_using";
})(R ||= {});
//#endregion
//#region node_modules/sucrase/dist/esm/parser/tokenizer/types.js
/* istanbul ignore file */
var z;
(function(e) {
	e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK", e[e.IS_KEYWORD = 16] = "IS_KEYWORD", e[e.IS_ASSIGN = 32] = "IS_ASSIGN", e[e.IS_RIGHT_ASSOCIATIVE = 64] = "IS_RIGHT_ASSOCIATIVE", e[e.IS_PREFIX = 128] = "IS_PREFIX", e[e.IS_POSTFIX = 256] = "IS_POSTFIX", e[e.IS_EXPRESSION_START = 512] = "IS_EXPRESSION_START", e[e.num = 512] = "num", e[e.bigint = 1536] = "bigint", e[e.decimal = 2560] = "decimal", e[e.regexp = 3584] = "regexp", e[e.string = 4608] = "string", e[e.name = 5632] = "name", e[e.eof = 6144] = "eof", e[e.bracketL = 7680] = "bracketL", e[e.bracketR = 8192] = "bracketR", e[e.braceL = 9728] = "braceL", e[e.braceBarL = 10752] = "braceBarL", e[e.braceR = 11264] = "braceR", e[e.braceBarR = 12288] = "braceBarR", e[e.parenL = 13824] = "parenL", e[e.parenR = 14336] = "parenR", e[e.comma = 15360] = "comma", e[e.semi = 16384] = "semi", e[e.colon = 17408] = "colon", e[e.doubleColon = 18432] = "doubleColon", e[e.dot = 19456] = "dot", e[e.question = 20480] = "question", e[e.questionDot = 21504] = "questionDot", e[e.arrow = 22528] = "arrow", e[e.template = 23552] = "template", e[e.ellipsis = 24576] = "ellipsis", e[e.backQuote = 25600] = "backQuote", e[e.dollarBraceL = 27136] = "dollarBraceL", e[e.at = 27648] = "at", e[e.hash = 29184] = "hash", e[e.eq = 29728] = "eq", e[e.assign = 30752] = "assign", e[e.preIncDec = 32640] = "preIncDec", e[e.postIncDec = 33664] = "postIncDec", e[e.bang = 34432] = "bang", e[e.tilde = 35456] = "tilde", e[e.pipeline = 35841] = "pipeline", e[e.nullishCoalescing = 36866] = "nullishCoalescing", e[e.logicalOR = 37890] = "logicalOR", e[e.logicalAND = 38915] = "logicalAND", e[e.bitwiseOR = 39940] = "bitwiseOR", e[e.bitwiseXOR = 40965] = "bitwiseXOR", e[e.bitwiseAND = 41990] = "bitwiseAND", e[e.equality = 43015] = "equality", e[e.lessThan = 44040] = "lessThan", e[e.greaterThan = 45064] = "greaterThan", e[e.relationalOrEqual = 46088] = "relationalOrEqual", e[e.bitShiftL = 47113] = "bitShiftL", e[e.bitShiftR = 48137] = "bitShiftR", e[e.plus = 49802] = "plus", e[e.minus = 50826] = "minus", e[e.modulo = 51723] = "modulo", e[e.star = 52235] = "star", e[e.slash = 53259] = "slash", e[e.exponent = 54348] = "exponent", e[e.jsxName = 55296] = "jsxName", e[e.jsxText = 56320] = "jsxText", e[e.jsxEmptyText = 57344] = "jsxEmptyText", e[e.jsxTagStart = 58880] = "jsxTagStart", e[e.jsxTagEnd = 59392] = "jsxTagEnd", e[e.typeParameterStart = 60928] = "typeParameterStart", e[e.nonNullAssertion = 61440] = "nonNullAssertion", e[e._break = 62480] = "_break", e[e._case = 63504] = "_case", e[e._catch = 64528] = "_catch", e[e._continue = 65552] = "_continue", e[e._debugger = 66576] = "_debugger", e[e._default = 67600] = "_default", e[e._do = 68624] = "_do", e[e._else = 69648] = "_else", e[e._finally = 70672] = "_finally", e[e._for = 71696] = "_for", e[e._function = 73232] = "_function", e[e._if = 73744] = "_if", e[e._return = 74768] = "_return", e[e._switch = 75792] = "_switch", e[e._throw = 77456] = "_throw", e[e._try = 77840] = "_try", e[e._var = 78864] = "_var", e[e._let = 79888] = "_let", e[e._const = 80912] = "_const", e[e._while = 81936] = "_while", e[e._with = 82960] = "_with", e[e._new = 84496] = "_new", e[e._this = 85520] = "_this", e[e._super = 86544] = "_super", e[e._class = 87568] = "_class", e[e._extends = 88080] = "_extends", e[e._export = 89104] = "_export", e[e._import = 90640] = "_import", e[e._yield = 91664] = "_yield", e[e._null = 92688] = "_null", e[e._true = 93712] = "_true", e[e._false = 94736] = "_false", e[e._in = 95256] = "_in", e[e._instanceof = 96280] = "_instanceof", e[e._typeof = 97936] = "_typeof", e[e._void = 98960] = "_void", e[e._delete = 99984] = "_delete", e[e._async = 100880] = "_async", e[e._get = 101904] = "_get", e[e._set = 102928] = "_set", e[e._declare = 103952] = "_declare", e[e._readonly = 104976] = "_readonly", e[e._abstract = 106e3] = "_abstract", e[e._static = 107024] = "_static", e[e._public = 107536] = "_public", e[e._private = 108560] = "_private", e[e._protected = 109584] = "_protected", e[e._override = 110608] = "_override", e[e._as = 112144] = "_as", e[e._enum = 113168] = "_enum", e[e._type = 114192] = "_type", e[e._implements = 115216] = "_implements";
})(z ||= {});
function Rr(e) {
	switch (e) {
		case z.num: return "num";
		case z.bigint: return "bigint";
		case z.decimal: return "decimal";
		case z.regexp: return "regexp";
		case z.string: return "string";
		case z.name: return "name";
		case z.eof: return "eof";
		case z.bracketL: return "[";
		case z.bracketR: return "]";
		case z.braceL: return "{";
		case z.braceBarL: return "{|";
		case z.braceR: return "}";
		case z.braceBarR: return "|}";
		case z.parenL: return "(";
		case z.parenR: return ")";
		case z.comma: return ",";
		case z.semi: return ";";
		case z.colon: return ":";
		case z.doubleColon: return "::";
		case z.dot: return ".";
		case z.question: return "?";
		case z.questionDot: return "?.";
		case z.arrow: return "=>";
		case z.template: return "template";
		case z.ellipsis: return "...";
		case z.backQuote: return "`";
		case z.dollarBraceL: return "${";
		case z.at: return "@";
		case z.hash: return "#";
		case z.eq: return "=";
		case z.assign: return "_=";
		case z.preIncDec: return "++/--";
		case z.postIncDec: return "++/--";
		case z.bang: return "!";
		case z.tilde: return "~";
		case z.pipeline: return "|>";
		case z.nullishCoalescing: return "??";
		case z.logicalOR: return "||";
		case z.logicalAND: return "&&";
		case z.bitwiseOR: return "|";
		case z.bitwiseXOR: return "^";
		case z.bitwiseAND: return "&";
		case z.equality: return "==/!=";
		case z.lessThan: return "<";
		case z.greaterThan: return ">";
		case z.relationalOrEqual: return "<=/>=";
		case z.bitShiftL: return "<<";
		case z.bitShiftR: return ">>/>>>";
		case z.plus: return "+";
		case z.minus: return "-";
		case z.modulo: return "%";
		case z.star: return "*";
		case z.slash: return "/";
		case z.exponent: return "**";
		case z.jsxName: return "jsxName";
		case z.jsxText: return "jsxText";
		case z.jsxEmptyText: return "jsxEmptyText";
		case z.jsxTagStart: return "jsxTagStart";
		case z.jsxTagEnd: return "jsxTagEnd";
		case z.typeParameterStart: return "typeParameterStart";
		case z.nonNullAssertion: return "nonNullAssertion";
		case z._break: return "break";
		case z._case: return "case";
		case z._catch: return "catch";
		case z._continue: return "continue";
		case z._debugger: return "debugger";
		case z._default: return "default";
		case z._do: return "do";
		case z._else: return "else";
		case z._finally: return "finally";
		case z._for: return "for";
		case z._function: return "function";
		case z._if: return "if";
		case z._return: return "return";
		case z._switch: return "switch";
		case z._throw: return "throw";
		case z._try: return "try";
		case z._var: return "var";
		case z._let: return "let";
		case z._const: return "const";
		case z._while: return "while";
		case z._with: return "with";
		case z._new: return "new";
		case z._this: return "this";
		case z._super: return "super";
		case z._class: return "class";
		case z._extends: return "extends";
		case z._export: return "export";
		case z._import: return "import";
		case z._yield: return "yield";
		case z._null: return "null";
		case z._true: return "true";
		case z._false: return "false";
		case z._in: return "in";
		case z._instanceof: return "instanceof";
		case z._typeof: return "typeof";
		case z._void: return "void";
		case z._delete: return "delete";
		case z._async: return "async";
		case z._get: return "get";
		case z._set: return "set";
		case z._declare: return "declare";
		case z._readonly: return "readonly";
		case z._abstract: return "abstract";
		case z._static: return "static";
		case z._public: return "public";
		case z._private: return "private";
		case z._protected: return "protected";
		case z._override: return "override";
		case z._as: return "as";
		case z._enum: return "enum";
		case z._type: return "type";
		case z._implements: return "implements";
		default: return "";
	}
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/tokenizer/state.js
var zr = class {
	constructor(e, t, n) {
		this.startTokenIndex = e, this.endTokenIndex = t, this.isFunctionScope = n;
	}
}, Br = class {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f) {
		this.potentialArrowAt = e, this.noAnonFunctionType = t, this.inDisallowConditionalTypesContext = n, this.tokensLength = r, this.scopesLength = i, this.pos = a, this.type = o, this.contextualKeyword = s, this.start = c, this.end = l, this.isType = u, this.scopeDepth = d, this.error = f;
	}
}, Vr = class e {
	constructor() {
		e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this), e.prototype.__init4.call(this), e.prototype.__init5.call(this), e.prototype.__init6.call(this), e.prototype.__init7.call(this), e.prototype.__init8.call(this), e.prototype.__init9.call(this), e.prototype.__init10.call(this), e.prototype.__init11.call(this), e.prototype.__init12.call(this), e.prototype.__init13.call(this);
	}
	__init() {
		this.potentialArrowAt = -1;
	}
	__init2() {
		this.noAnonFunctionType = !1;
	}
	__init3() {
		this.inDisallowConditionalTypesContext = !1;
	}
	__init4() {
		this.tokens = [];
	}
	__init5() {
		this.scopes = [];
	}
	__init6() {
		this.pos = 0;
	}
	__init7() {
		this.type = z.eof;
	}
	__init8() {
		this.contextualKeyword = R.NONE;
	}
	__init9() {
		this.start = 0;
	}
	__init10() {
		this.end = 0;
	}
	__init11() {
		this.isType = !1;
	}
	__init12() {
		this.scopeDepth = 0;
	}
	__init13() {
		this.error = null;
	}
	snapshot() {
		return new Br(this.potentialArrowAt, this.noAnonFunctionType, this.inDisallowConditionalTypesContext, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error);
	}
	restoreFromSnapshot(e) {
		this.potentialArrowAt = e.potentialArrowAt, this.noAnonFunctionType = e.noAnonFunctionType, this.inDisallowConditionalTypesContext = e.inDisallowConditionalTypesContext, this.tokens.length = e.tokensLength, this.scopes.length = e.scopesLength, this.pos = e.pos, this.type = e.type, this.contextualKeyword = e.contextualKeyword, this.start = e.start, this.end = e.end, this.isType = e.isType, this.scopeDepth = e.scopeDepth, this.error = e.error;
	}
}, B;
(function(e) {
	e[e.backSpace = 8] = "backSpace", e[e.lineFeed = 10] = "lineFeed", e[e.tab = 9] = "tab", e[e.carriageReturn = 13] = "carriageReturn", e[e.shiftOut = 14] = "shiftOut", e[e.space = 32] = "space", e[e.exclamationMark = 33] = "exclamationMark", e[e.quotationMark = 34] = "quotationMark", e[e.numberSign = 35] = "numberSign", e[e.dollarSign = 36] = "dollarSign", e[e.percentSign = 37] = "percentSign", e[e.ampersand = 38] = "ampersand", e[e.apostrophe = 39] = "apostrophe", e[e.leftParenthesis = 40] = "leftParenthesis", e[e.rightParenthesis = 41] = "rightParenthesis", e[e.asterisk = 42] = "asterisk", e[e.plusSign = 43] = "plusSign", e[e.comma = 44] = "comma", e[e.dash = 45] = "dash", e[e.dot = 46] = "dot", e[e.slash = 47] = "slash", e[e.digit0 = 48] = "digit0", e[e.digit1 = 49] = "digit1", e[e.digit2 = 50] = "digit2", e[e.digit3 = 51] = "digit3", e[e.digit4 = 52] = "digit4", e[e.digit5 = 53] = "digit5", e[e.digit6 = 54] = "digit6", e[e.digit7 = 55] = "digit7", e[e.digit8 = 56] = "digit8", e[e.digit9 = 57] = "digit9", e[e.colon = 58] = "colon", e[e.semicolon = 59] = "semicolon", e[e.lessThan = 60] = "lessThan", e[e.equalsTo = 61] = "equalsTo", e[e.greaterThan = 62] = "greaterThan", e[e.questionMark = 63] = "questionMark", e[e.atSign = 64] = "atSign", e[e.uppercaseA = 65] = "uppercaseA", e[e.uppercaseB = 66] = "uppercaseB", e[e.uppercaseC = 67] = "uppercaseC", e[e.uppercaseD = 68] = "uppercaseD", e[e.uppercaseE = 69] = "uppercaseE", e[e.uppercaseF = 70] = "uppercaseF", e[e.uppercaseG = 71] = "uppercaseG", e[e.uppercaseH = 72] = "uppercaseH", e[e.uppercaseI = 73] = "uppercaseI", e[e.uppercaseJ = 74] = "uppercaseJ", e[e.uppercaseK = 75] = "uppercaseK", e[e.uppercaseL = 76] = "uppercaseL", e[e.uppercaseM = 77] = "uppercaseM", e[e.uppercaseN = 78] = "uppercaseN", e[e.uppercaseO = 79] = "uppercaseO", e[e.uppercaseP = 80] = "uppercaseP", e[e.uppercaseQ = 81] = "uppercaseQ", e[e.uppercaseR = 82] = "uppercaseR", e[e.uppercaseS = 83] = "uppercaseS", e[e.uppercaseT = 84] = "uppercaseT", e[e.uppercaseU = 85] = "uppercaseU", e[e.uppercaseV = 86] = "uppercaseV", e[e.uppercaseW = 87] = "uppercaseW", e[e.uppercaseX = 88] = "uppercaseX", e[e.uppercaseY = 89] = "uppercaseY", e[e.uppercaseZ = 90] = "uppercaseZ", e[e.leftSquareBracket = 91] = "leftSquareBracket", e[e.backslash = 92] = "backslash", e[e.rightSquareBracket = 93] = "rightSquareBracket", e[e.caret = 94] = "caret", e[e.underscore = 95] = "underscore", e[e.graveAccent = 96] = "graveAccent", e[e.lowercaseA = 97] = "lowercaseA", e[e.lowercaseB = 98] = "lowercaseB", e[e.lowercaseC = 99] = "lowercaseC", e[e.lowercaseD = 100] = "lowercaseD", e[e.lowercaseE = 101] = "lowercaseE", e[e.lowercaseF = 102] = "lowercaseF", e[e.lowercaseG = 103] = "lowercaseG", e[e.lowercaseH = 104] = "lowercaseH", e[e.lowercaseI = 105] = "lowercaseI", e[e.lowercaseJ = 106] = "lowercaseJ", e[e.lowercaseK = 107] = "lowercaseK", e[e.lowercaseL = 108] = "lowercaseL", e[e.lowercaseM = 109] = "lowercaseM", e[e.lowercaseN = 110] = "lowercaseN", e[e.lowercaseO = 111] = "lowercaseO", e[e.lowercaseP = 112] = "lowercaseP", e[e.lowercaseQ = 113] = "lowercaseQ", e[e.lowercaseR = 114] = "lowercaseR", e[e.lowercaseS = 115] = "lowercaseS", e[e.lowercaseT = 116] = "lowercaseT", e[e.lowercaseU = 117] = "lowercaseU", e[e.lowercaseV = 118] = "lowercaseV", e[e.lowercaseW = 119] = "lowercaseW", e[e.lowercaseX = 120] = "lowercaseX", e[e.lowercaseY = 121] = "lowercaseY", e[e.lowercaseZ = 122] = "lowercaseZ", e[e.leftCurlyBrace = 123] = "leftCurlyBrace", e[e.verticalBar = 124] = "verticalBar", e[e.rightCurlyBrace = 125] = "rightCurlyBrace", e[e.tilde = 126] = "tilde", e[e.nonBreakingSpace = 160] = "nonBreakingSpace", e[e.oghamSpaceMark = 5760] = "oghamSpaceMark", e[e.lineSeparator = 8232] = "lineSeparator", e[e.paragraphSeparator = 8233] = "paragraphSeparator";
})(B ||= {});
//#endregion
//#region node_modules/sucrase/dist/esm/parser/traverser/base.js
var Hr, Ur, Wr, V, H, Gr;
function Kr() {
	return Gr++;
}
function qr(e) {
	if ("pos" in e) {
		let t = Yr(e.pos);
		e.message += ` (${t.line}:${t.column})`, e.loc = t;
	}
	return e;
}
var Jr = class {
	constructor(e, t) {
		this.line = e, this.column = t;
	}
};
function Yr(e) {
	let t = 1, n = 1;
	for (let r = 0; r < e; r++) H.charCodeAt(r) === B.lineFeed ? (t++, n = 1) : n++;
	return new Jr(t, n);
}
function Xr(e, t, n, r) {
	H = e, V = new Vr(), Gr = 1, Hr = t, Ur = n, Wr = r;
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/traverser/util.js
function U(e) {
	return V.contextualKeyword === e;
}
function Zr(e) {
	let t = Ei();
	return t.type === z.name && t.contextualKeyword === e;
}
function Qr(e) {
	return V.contextualKeyword === e && X(z.name);
}
function $r(e) {
	Qr(e) || G();
}
function ei() {
	return Z(z.eof) || Z(z.braceR) || ti();
}
function ti() {
	let e = V.tokens[V.tokens.length - 1], t = e ? e.end : 0;
	for (let e = t; e < V.start; e++) {
		let t = H.charCodeAt(e);
		if (t === B.lineFeed || t === B.carriageReturn || t === 8232 || t === 8233) return !0;
	}
	return !1;
}
function ni() {
	let e = Di();
	for (let t = V.end; t < e; t++) {
		let e = H.charCodeAt(t);
		if (e === B.lineFeed || e === B.carriageReturn || e === 8232 || e === 8233) return !0;
	}
	return !1;
}
function ri() {
	return X(z.semi) || ei();
}
function ii() {
	ri() || G("Unexpected token, expected \";\"");
}
function W(e) {
	X(e) || G(`Unexpected token, expected "${Rr(e)}"`);
}
function G(e = "Unexpected token", t = V.start) {
	if (V.error) return;
	let n = SyntaxError(e);
	n.pos = t, V.error = n, V.pos = H.length, Q(z.eof);
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/util/whitespace.js
var ai = [
	9,
	11,
	12,
	B.space,
	B.nonBreakingSpace,
	B.oghamSpaceMark,
	8192,
	8193,
	8194,
	8195,
	8196,
	8197,
	8198,
	8199,
	8200,
	8201,
	8202,
	8239,
	8287,
	12288,
	65279
], oi = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, si = /* @__PURE__ */ new Uint8Array(65536);
for (let e of ai) si[e] = 1;
//#endregion
//#region node_modules/sucrase/dist/esm/parser/util/identifier.js
function ci(e) {
	if (e < 48) return e === 36;
	if (e < 58) return !0;
	if (e < 65) return !1;
	if (e < 91) return !0;
	if (e < 97) return e === 95;
	if (e < 123) return !0;
	if (e < 128) return !1;
	throw Error("Should not be called with non-ASCII char code.");
}
var li = /* @__PURE__ */ new Uint8Array(65536);
for (let e = 0; e < 128; e++) li[e] = +!!ci(e);
for (let e = 128; e < 65536; e++) li[e] = 1;
for (let e of ai) li[e] = 0;
li[8232] = 0, li[8233] = 0;
var ui = li.slice();
for (let e = B.digit0; e <= B.digit9; e++) ui[e] = 0;
//#endregion
//#region node_modules/sucrase/dist/esm/parser/tokenizer/readWordTree.js
var di = new Int32Array([
	-1,
	27,
	783,
	918,
	1755,
	2376,
	2862,
	3483,
	-1,
	3699,
	-1,
	4617,
	4752,
	4833,
	5130,
	5508,
	5940,
	-1,
	6480,
	6939,
	7749,
	8181,
	8451,
	8613,
	-1,
	8829,
	-1,
	-1,
	-1,
	54,
	243,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	432,
	-1,
	-1,
	-1,
	675,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	81,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	108,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	135,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	162,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	189,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	216,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._abstract << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	270,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	297,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	324,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	351,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	378,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	405,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._accessor << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._as << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	459,
	-1,
	-1,
	-1,
	-1,
	-1,
	594,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	486,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	513,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	540,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._assert << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	567,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._asserts << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	621,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	648,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._async << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	702,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	729,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	756,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._await << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	810,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	837,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	864,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	891,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._break << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	945,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1107,
	-1,
	-1,
	-1,
	1242,
	-1,
	-1,
	1350,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	972,
	1026,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	999,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._case << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1053,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1080,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._catch << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1134,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1161,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1188,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1215,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._checks << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1269,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1296,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1323,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._class << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1377,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1404,
	1620,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1431,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._const << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1458,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1485,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1512,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1539,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1566,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1593,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._constructor << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1647,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1674,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1701,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1728,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._continue << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1782,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2349,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1809,
	1971,
	-1,
	-1,
	2106,
	-1,
	-1,
	-1,
	-1,
	-1,
	2241,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1836,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1863,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1890,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1917,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1944,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._debugger << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	1998,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2025,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2052,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2079,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._declare << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2133,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2160,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2187,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2214,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._default << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2268,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2295,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2322,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._delete << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._do << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2403,
	-1,
	2484,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2565,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2430,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2457,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._else << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2511,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2538,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._enum << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2592,
	-1,
	-1,
	-1,
	2727,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2619,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2646,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2673,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._export << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2700,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._exports << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2754,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2781,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2808,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2835,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._extends << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2889,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2997,
	-1,
	-1,
	-1,
	-1,
	-1,
	3159,
	-1,
	-1,
	3213,
	-1,
	-1,
	3294,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2916,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2943,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	2970,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._false << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3024,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3051,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3078,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3105,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3132,
	-1,
	(z._finally << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3186,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._for << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3240,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3267,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._from << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3321,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3348,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3375,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3402,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3429,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3456,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._function << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3510,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3564,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3537,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._get << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3591,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3618,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3645,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3672,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._global << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3726,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3753,
	4077,
	-1,
	-1,
	-1,
	-1,
	4590,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._if << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3780,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3807,
	-1,
	-1,
	3996,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3834,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3861,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3888,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3915,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3942,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	3969,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._implements << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4023,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4050,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._import << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._in << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4104,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4185,
	4401,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4131,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4158,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._infer << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4212,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4239,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4266,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4293,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4320,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4347,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4374,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._instanceof << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4428,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4455,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4482,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4509,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4536,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4563,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._interface << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._is << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4644,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4671,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4698,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4725,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._keyof << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4779,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4806,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._let << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4860,
	-1,
	-1,
	-1,
	-1,
	-1,
	4995,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4887,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4914,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4941,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	4968,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._mixins << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5022,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5049,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5076,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5103,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._module << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5157,
	-1,
	-1,
	-1,
	5373,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5427,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5184,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5211,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5238,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5265,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5292,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5319,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5346,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._namespace << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5400,
	-1,
	-1,
	-1,
	(z._new << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5454,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5481,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._null << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5535,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5562,
	-1,
	-1,
	-1,
	-1,
	5697,
	5751,
	-1,
	-1,
	-1,
	-1,
	R._of << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5589,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5616,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5643,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5670,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._opaque << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5724,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._out << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5778,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5805,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5832,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5859,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5886,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5913,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._override << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5967,
	-1,
	-1,
	6345,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	5994,
	-1,
	-1,
	-1,
	-1,
	-1,
	6129,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6021,
	-1,
	-1,
	-1,
	-1,
	-1,
	6048,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6075,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6102,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._private << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6156,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6183,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6318,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6210,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6237,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6264,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6291,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._protected << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._proto << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6372,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6399,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6426,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6453,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._public << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6507,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6534,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6696,
	-1,
	-1,
	6831,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6561,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6588,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6615,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6642,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6669,
	-1,
	R._readonly << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6723,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6750,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6777,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6804,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._require << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6858,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6885,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6912,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._return << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6966,
	-1,
	-1,
	-1,
	7182,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7236,
	7371,
	-1,
	7479,
	-1,
	7614,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	6993,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7020,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7047,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7074,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7101,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7128,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7155,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._satisfies << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7209,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._set << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7263,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7290,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7317,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7344,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._static << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7398,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7425,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7452,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._super << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7506,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7533,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7560,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7587,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._switch << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7641,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7668,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7695,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7722,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._symbol << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7776,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7938,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8046,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7803,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7857,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7830,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._this << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7884,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7911,
	-1,
	-1,
	-1,
	(z._throw << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7965,
	-1,
	-1,
	-1,
	8019,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	7992,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._true << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._try << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8073,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8100,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._type << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8127,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8154,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._typeof << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8208,
	-1,
	-1,
	-1,
	-1,
	8343,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8235,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8262,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8289,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8316,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._unique << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8370,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8397,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8424,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	R._using << 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8478,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8532,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8505,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._var << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8559,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8586,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._void << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8640,
	8748,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8667,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8694,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8721,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._while << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8775,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8802,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._with << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8856,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8883,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8910,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8937,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	(z._yield << 1) + 1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1
]);
//#endregion
//#region node_modules/sucrase/dist/esm/parser/tokenizer/readWord.js
function fi() {
	let e = 0, t = 0, n = V.pos;
	for (; n < H.length && (t = H.charCodeAt(n), !(t < B.lowercaseA || t > B.lowercaseZ));) {
		let r = di[e + (t - B.lowercaseA) + 1];
		if (r === -1) break;
		e = r, n++;
	}
	let r = di[e];
	if (r > -1 && !li[t]) V.pos = n, r & 1 ? Q(r >>> 1) : Q(z.name, r >>> 1);
	else {
		for (; n < H.length;) {
			let e = H.charCodeAt(n);
			if (li[e]) n++;
			else if (e === B.backslash) {
				if (n += 2, H.charCodeAt(n) === B.leftCurlyBrace) {
					for (; n < H.length && H.charCodeAt(n) !== B.rightCurlyBrace;) n++;
					n++;
				}
			} else if (e === B.atSign && H.charCodeAt(n + 1) === B.atSign) n += 2;
			else break;
		}
		V.pos = n, Q(z.name);
	}
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/tokenizer/index.js
var K;
(function(e) {
	e[e.Access = 0] = "Access", e[e.ExportAccess = 1] = "ExportAccess", e[e.TopLevelDeclaration = 2] = "TopLevelDeclaration", e[e.FunctionScopedDeclaration = 3] = "FunctionScopedDeclaration", e[e.BlockScopedDeclaration = 4] = "BlockScopedDeclaration", e[e.ObjectShorthandTopLevelDeclaration = 5] = "ObjectShorthandTopLevelDeclaration", e[e.ObjectShorthandFunctionScopedDeclaration = 6] = "ObjectShorthandFunctionScopedDeclaration", e[e.ObjectShorthandBlockScopedDeclaration = 7] = "ObjectShorthandBlockScopedDeclaration", e[e.ObjectShorthand = 8] = "ObjectShorthand", e[e.ImportDeclaration = 9] = "ImportDeclaration", e[e.ObjectKey = 10] = "ObjectKey", e[e.ImportAccess = 11] = "ImportAccess";
})(K ||= {});
var pi;
(function(e) {
	e[e.NoChildren = 0] = "NoChildren", e[e.OneChild = 1] = "OneChild", e[e.StaticChildren = 2] = "StaticChildren", e[e.KeyAfterPropSpread = 3] = "KeyAfterPropSpread";
})(pi ||= {});
function mi(e) {
	let t = e.identifierRole;
	return t === K.TopLevelDeclaration || t === K.FunctionScopedDeclaration || t === K.BlockScopedDeclaration || t === K.ObjectShorthandTopLevelDeclaration || t === K.ObjectShorthandFunctionScopedDeclaration || t === K.ObjectShorthandBlockScopedDeclaration;
}
function hi(e) {
	let t = e.identifierRole;
	return t === K.FunctionScopedDeclaration || t === K.BlockScopedDeclaration || t === K.ObjectShorthandFunctionScopedDeclaration || t === K.ObjectShorthandBlockScopedDeclaration;
}
function gi(e) {
	let t = e.identifierRole;
	return t === K.TopLevelDeclaration || t === K.ObjectShorthandTopLevelDeclaration || t === K.ImportDeclaration;
}
function _i(e) {
	let t = e.identifierRole;
	return t === K.TopLevelDeclaration || t === K.BlockScopedDeclaration || t === K.ObjectShorthandTopLevelDeclaration || t === K.ObjectShorthandBlockScopedDeclaration;
}
function vi(e) {
	let t = e.identifierRole;
	return t === K.FunctionScopedDeclaration || t === K.ObjectShorthandFunctionScopedDeclaration;
}
function yi(e) {
	return e.identifierRole === K.ObjectShorthandTopLevelDeclaration || e.identifierRole === K.ObjectShorthandBlockScopedDeclaration || e.identifierRole === K.ObjectShorthandFunctionScopedDeclaration;
}
var bi = class {
	constructor() {
		this.type = V.type, this.contextualKeyword = V.contextualKeyword, this.start = V.start, this.end = V.end, this.scopeDepth = V.scopeDepth, this.isType = V.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
	}
};
function q() {
	V.tokens.push(new bi()), Ai();
}
function xi() {
	V.tokens.push(new bi()), V.start = V.pos, $i();
}
function Si() {
	V.type === z.assign && --V.pos, Ji();
}
function J(e) {
	for (let t = V.tokens.length - e; t < V.tokens.length; t++) V.tokens[t].isType = !0;
	let t = V.isType;
	return V.isType = !0, t;
}
function Y(e) {
	V.isType = e;
}
function X(e) {
	return Z(e) ? (q(), !0) : !1;
}
function Ci(e) {
	let t = V.isType;
	V.isType = !0, X(e), V.isType = t;
}
function Z(e) {
	return V.type === e;
}
function wi() {
	let e = V.snapshot();
	q();
	let t = V.type;
	return V.restoreFromSnapshot(e), t;
}
var Ti = class {
	constructor(e, t) {
		this.type = e, this.contextualKeyword = t;
	}
};
function Ei() {
	let e = V.snapshot();
	q();
	let t = V.type, n = V.contextualKeyword;
	return V.restoreFromSnapshot(e), new Ti(t, n);
}
function Di() {
	return Oi(V.pos);
}
function Oi(e) {
	return oi.lastIndex = e, e + oi.exec(H)[0].length;
}
function ki() {
	return H.charCodeAt(Di());
}
function Ai() {
	if (Pi(), V.start = V.pos, V.pos >= H.length) {
		let e = V.tokens;
		e.length >= 2 && e[e.length - 1].start >= H.length && e[e.length - 2].start >= H.length && G("Unexpectedly reached the end of input."), Q(z.eof);
	} else ji(H.charCodeAt(V.pos));
}
function ji(e) {
	ui[e] || e === B.backslash || e === B.atSign && H.charCodeAt(V.pos + 1) === B.atSign ? fi() : Ki(e);
}
function Mi() {
	for (; H.charCodeAt(V.pos) !== B.asterisk || H.charCodeAt(V.pos + 1) !== B.slash;) if (V.pos++, V.pos > H.length) {
		G("Unterminated comment", V.pos - 2);
		return;
	}
	V.pos += 2;
}
function Ni(e) {
	let t = H.charCodeAt(V.pos += e);
	if (V.pos < H.length) for (; t !== B.lineFeed && t !== B.carriageReturn && t !== B.lineSeparator && t !== B.paragraphSeparator && ++V.pos < H.length;) t = H.charCodeAt(V.pos);
}
function Pi() {
	for (; V.pos < H.length;) {
		let e = H.charCodeAt(V.pos);
		switch (e) {
			case B.carriageReturn: H.charCodeAt(V.pos + 1) === B.lineFeed && ++V.pos;
			case B.lineFeed:
			case B.lineSeparator:
			case B.paragraphSeparator:
				++V.pos;
				break;
			case B.slash:
				switch (H.charCodeAt(V.pos + 1)) {
					case B.asterisk:
						V.pos += 2, Mi();
						break;
					case B.slash:
						Ni(2);
						break;
					default: return;
				}
				break;
			default: if (si[e]) ++V.pos;
			else return;
		}
	}
}
function Q(e, t = R.NONE) {
	V.end = V.pos, V.type = e, V.contextualKeyword = t;
}
function Fi() {
	let e = H.charCodeAt(V.pos + 1);
	e >= B.digit0 && e <= B.digit9 ? Zi(!0) : e === B.dot && H.charCodeAt(V.pos + 2) === B.dot ? (V.pos += 3, Q(z.ellipsis)) : (++V.pos, Q(z.dot));
}
function Ii() {
	H.charCodeAt(V.pos + 1) === B.equalsTo ? qi(z.assign, 2) : qi(z.slash, 1);
}
function Li(e) {
	let t = e === B.asterisk ? z.star : z.modulo, n = 1, r = H.charCodeAt(V.pos + 1);
	e === B.asterisk && r === B.asterisk && (n++, r = H.charCodeAt(V.pos + 2), t = z.exponent), r === B.equalsTo && H.charCodeAt(V.pos + 2) !== B.greaterThan && (n++, t = z.assign), qi(t, n);
}
function Ri(e) {
	let t = H.charCodeAt(V.pos + 1);
	if (t === e) H.charCodeAt(V.pos + 2) === B.equalsTo ? qi(z.assign, 3) : qi(e === B.verticalBar ? z.logicalOR : z.logicalAND, 2);
	else {
		if (e === B.verticalBar) {
			if (t === B.greaterThan) {
				qi(z.pipeline, 2);
				return;
			}
			if (t === B.rightCurlyBrace && Wr) {
				qi(z.braceBarR, 2);
				return;
			}
		}
		t === B.equalsTo ? qi(z.assign, 2) : qi(e === B.verticalBar ? z.bitwiseOR : z.bitwiseAND, 1);
	}
}
function zi() {
	H.charCodeAt(V.pos + 1) === B.equalsTo ? qi(z.assign, 2) : qi(z.bitwiseXOR, 1);
}
function Bi(e) {
	let t = H.charCodeAt(V.pos + 1);
	t === e ? qi(z.preIncDec, 2) : t === B.equalsTo ? qi(z.assign, 2) : e === B.plusSign ? qi(z.plus, 1) : qi(z.minus, 1);
}
function Vi() {
	let e = H.charCodeAt(V.pos + 1);
	if (e === B.lessThan) {
		if (H.charCodeAt(V.pos + 2) === B.equalsTo) {
			qi(z.assign, 3);
			return;
		}
		V.isType ? qi(z.lessThan, 1) : qi(z.bitShiftL, 2);
	} else e === B.equalsTo ? qi(z.relationalOrEqual, 2) : qi(z.lessThan, 1);
}
function Hi() {
	if (V.isType) {
		qi(z.greaterThan, 1);
		return;
	}
	let e = H.charCodeAt(V.pos + 1);
	if (e === B.greaterThan) {
		let e = H.charCodeAt(V.pos + 2) === B.greaterThan ? 3 : 2;
		if (H.charCodeAt(V.pos + e) === B.equalsTo) {
			qi(z.assign, e + 1);
			return;
		}
		qi(z.bitShiftR, e);
	} else e === B.equalsTo ? qi(z.relationalOrEqual, 2) : qi(z.greaterThan, 1);
}
function Ui() {
	V.type === z.greaterThan && (--V.pos, Hi());
}
function Wi(e) {
	let t = H.charCodeAt(V.pos + 1);
	t === B.equalsTo ? qi(z.equality, H.charCodeAt(V.pos + 2) === B.equalsTo ? 3 : 2) : e === B.equalsTo && t === B.greaterThan ? (V.pos += 2, Q(z.arrow)) : qi(e === B.equalsTo ? z.eq : z.bang, 1);
}
function Gi() {
	let e = H.charCodeAt(V.pos + 1), t = H.charCodeAt(V.pos + 2);
	e === B.questionMark && !(Wr && V.isType) ? t === B.equalsTo ? qi(z.assign, 3) : qi(z.nullishCoalescing, 2) : e === B.dot && !(t >= B.digit0 && t <= B.digit9) ? (V.pos += 2, Q(z.questionDot)) : (++V.pos, Q(z.question));
}
function Ki(e) {
	switch (e) {
		case B.numberSign:
			++V.pos, Q(z.hash);
			return;
		case B.dot:
			Fi();
			return;
		case B.leftParenthesis:
			++V.pos, Q(z.parenL);
			return;
		case B.rightParenthesis:
			++V.pos, Q(z.parenR);
			return;
		case B.semicolon:
			++V.pos, Q(z.semi);
			return;
		case B.comma:
			++V.pos, Q(z.comma);
			return;
		case B.leftSquareBracket:
			++V.pos, Q(z.bracketL);
			return;
		case B.rightSquareBracket:
			++V.pos, Q(z.bracketR);
			return;
		case B.leftCurlyBrace:
			Wr && H.charCodeAt(V.pos + 1) === B.verticalBar ? qi(z.braceBarL, 2) : (++V.pos, Q(z.braceL));
			return;
		case B.rightCurlyBrace:
			++V.pos, Q(z.braceR);
			return;
		case B.colon:
			H.charCodeAt(V.pos + 1) === B.colon ? qi(z.doubleColon, 2) : (++V.pos, Q(z.colon));
			return;
		case B.questionMark:
			Gi();
			return;
		case B.atSign:
			++V.pos, Q(z.at);
			return;
		case B.graveAccent:
			++V.pos, Q(z.backQuote);
			return;
		case B.digit0: {
			let e = H.charCodeAt(V.pos + 1);
			if (e === B.lowercaseX || e === B.uppercaseX || e === B.lowercaseO || e === B.uppercaseO || e === B.lowercaseB || e === B.uppercaseB) {
				Xi();
				return;
			}
		}
		case B.digit1:
		case B.digit2:
		case B.digit3:
		case B.digit4:
		case B.digit5:
		case B.digit6:
		case B.digit7:
		case B.digit8:
		case B.digit9:
			Zi(!1);
			return;
		case B.quotationMark:
		case B.apostrophe:
			Qi(e);
			return;
		case B.slash:
			Ii();
			return;
		case B.percentSign:
		case B.asterisk:
			Li(e);
			return;
		case B.verticalBar:
		case B.ampersand:
			Ri(e);
			return;
		case B.caret:
			zi();
			return;
		case B.plusSign:
		case B.dash:
			Bi(e);
			return;
		case B.lessThan:
			Vi();
			return;
		case B.greaterThan:
			Hi();
			return;
		case B.equalsTo:
		case B.exclamationMark:
			Wi(e);
			return;
		case B.tilde:
			qi(z.tilde, 1);
			return;
	}
	G(`Unexpected character '${String.fromCharCode(e)}'`, V.pos);
}
function qi(e, t) {
	V.pos += t, Q(e);
}
function Ji() {
	let e = V.pos, t = !1, n = !1;
	for (;;) {
		if (V.pos >= H.length) {
			G("Unterminated regular expression", e);
			return;
		}
		let r = H.charCodeAt(V.pos);
		if (t) t = !1;
		else {
			if (r === B.leftSquareBracket) n = !0;
			else if (r === B.rightSquareBracket && n) n = !1;
			else if (r === B.slash && !n) break;
			t = r === B.backslash;
		}
		++V.pos;
	}
	++V.pos, ea(), Q(z.regexp);
}
function Yi() {
	for (;;) {
		let e = H.charCodeAt(V.pos);
		if (e >= B.digit0 && e <= B.digit9 || e === B.underscore) V.pos++;
		else break;
	}
}
function Xi() {
	for (V.pos += 2;;) {
		let e = H.charCodeAt(V.pos);
		if (e >= B.digit0 && e <= B.digit9 || e >= B.lowercaseA && e <= B.lowercaseF || e >= B.uppercaseA && e <= B.uppercaseF || e === B.underscore) V.pos++;
		else break;
	}
	H.charCodeAt(V.pos) === B.lowercaseN ? (++V.pos, Q(z.bigint)) : Q(z.num);
}
function Zi(e) {
	let t = !1, n = !1;
	e || Yi();
	let r = H.charCodeAt(V.pos);
	r === B.dot && (++V.pos, Yi(), r = H.charCodeAt(V.pos)), (r === B.uppercaseE || r === B.lowercaseE) && (r = H.charCodeAt(++V.pos), (r === B.plusSign || r === B.dash) && ++V.pos, Yi(), r = H.charCodeAt(V.pos)), r === B.lowercaseN ? (++V.pos, t = !0) : r === B.lowercaseM && (++V.pos, n = !0), Q(t ? z.bigint : n ? z.decimal : z.num);
}
function Qi(e) {
	for (V.pos++;;) {
		if (V.pos >= H.length) {
			G("Unterminated string constant");
			return;
		}
		let t = H.charCodeAt(V.pos);
		if (t === B.backslash) V.pos++;
		else if (t === e) break;
		V.pos++;
	}
	V.pos++, Q(z.string);
}
function $i() {
	for (;;) {
		if (V.pos >= H.length) {
			G("Unterminated template");
			return;
		}
		let e = H.charCodeAt(V.pos);
		if (e === B.graveAccent || e === B.dollarSign && H.charCodeAt(V.pos + 1) === B.leftCurlyBrace) {
			if (V.pos === V.start && Z(z.template)) {
				if (e === B.dollarSign) {
					V.pos += 2, Q(z.dollarBraceL);
					return;
				}
				++V.pos, Q(z.backQuote);
				return;
			}
			Q(z.template);
			return;
		}
		e === B.backslash && V.pos++, V.pos++;
	}
}
function ea() {
	for (; V.pos < H.length;) {
		let e = H.charCodeAt(V.pos);
		if (li[e]) V.pos++;
		else if (e === B.backslash) {
			if (V.pos += 2, H.charCodeAt(V.pos) === B.leftCurlyBrace) {
				for (; V.pos < H.length && H.charCodeAt(V.pos) !== B.rightCurlyBrace;) V.pos++;
				V.pos++;
			}
		} else break;
	}
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js
function ta(e, t = e.currentIndex()) {
	let n = t + 1;
	if (na(e, n)) {
		let r = e.identifierNameAtIndex(t);
		return {
			isType: !1,
			leftName: r,
			rightName: r,
			endIndex: n
		};
	}
	if (n++, na(e, n)) return {
		isType: !0,
		leftName: null,
		rightName: null,
		endIndex: n
	};
	if (n++, na(e, n)) return {
		isType: !1,
		leftName: e.identifierNameAtIndex(t),
		rightName: e.identifierNameAtIndex(t + 2),
		endIndex: n
	};
	if (n++, na(e, n)) return {
		isType: !0,
		leftName: null,
		rightName: null,
		endIndex: n
	};
	throw Error(`Unexpected import/export specifier at ${t}`);
}
function na(e, t) {
	let n = e.tokens[t];
	return n.type === z.braceR || n.type === z.comma;
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/plugins/jsx/xhtml.js
var ra = /* @__PURE__ */ new Map([
	["quot", "\""],
	["amp", "&"],
	["apos", "'"],
	["lt", "<"],
	["gt", ">"],
	["nbsp", "\xA0"],
	["iexcl", "¡"],
	["cent", "¢"],
	["pound", "£"],
	["curren", "¤"],
	["yen", "¥"],
	["brvbar", "¦"],
	["sect", "§"],
	["uml", "¨"],
	["copy", "©"],
	["ordf", "ª"],
	["laquo", "«"],
	["not", "¬"],
	["shy", "­"],
	["reg", "®"],
	["macr", "¯"],
	["deg", "°"],
	["plusmn", "±"],
	["sup2", "²"],
	["sup3", "³"],
	["acute", "´"],
	["micro", "µ"],
	["para", "¶"],
	["middot", "·"],
	["cedil", "¸"],
	["sup1", "¹"],
	["ordm", "º"],
	["raquo", "»"],
	["frac14", "¼"],
	["frac12", "½"],
	["frac34", "¾"],
	["iquest", "¿"],
	["Agrave", "À"],
	["Aacute", "Á"],
	["Acirc", "Â"],
	["Atilde", "Ã"],
	["Auml", "Ä"],
	["Aring", "Å"],
	["AElig", "Æ"],
	["Ccedil", "Ç"],
	["Egrave", "È"],
	["Eacute", "É"],
	["Ecirc", "Ê"],
	["Euml", "Ë"],
	["Igrave", "Ì"],
	["Iacute", "Í"],
	["Icirc", "Î"],
	["Iuml", "Ï"],
	["ETH", "Ð"],
	["Ntilde", "Ñ"],
	["Ograve", "Ò"],
	["Oacute", "Ó"],
	["Ocirc", "Ô"],
	["Otilde", "Õ"],
	["Ouml", "Ö"],
	["times", "×"],
	["Oslash", "Ø"],
	["Ugrave", "Ù"],
	["Uacute", "Ú"],
	["Ucirc", "Û"],
	["Uuml", "Ü"],
	["Yacute", "Ý"],
	["THORN", "Þ"],
	["szlig", "ß"],
	["agrave", "à"],
	["aacute", "á"],
	["acirc", "â"],
	["atilde", "ã"],
	["auml", "ä"],
	["aring", "å"],
	["aelig", "æ"],
	["ccedil", "ç"],
	["egrave", "è"],
	["eacute", "é"],
	["ecirc", "ê"],
	["euml", "ë"],
	["igrave", "ì"],
	["iacute", "í"],
	["icirc", "î"],
	["iuml", "ï"],
	["eth", "ð"],
	["ntilde", "ñ"],
	["ograve", "ò"],
	["oacute", "ó"],
	["ocirc", "ô"],
	["otilde", "õ"],
	["ouml", "ö"],
	["divide", "÷"],
	["oslash", "ø"],
	["ugrave", "ù"],
	["uacute", "ú"],
	["ucirc", "û"],
	["uuml", "ü"],
	["yacute", "ý"],
	["thorn", "þ"],
	["yuml", "ÿ"],
	["OElig", "Œ"],
	["oelig", "œ"],
	["Scaron", "Š"],
	["scaron", "š"],
	["Yuml", "Ÿ"],
	["fnof", "ƒ"],
	["circ", "ˆ"],
	["tilde", "˜"],
	["Alpha", "Α"],
	["Beta", "Β"],
	["Gamma", "Γ"],
	["Delta", "Δ"],
	["Epsilon", "Ε"],
	["Zeta", "Ζ"],
	["Eta", "Η"],
	["Theta", "Θ"],
	["Iota", "Ι"],
	["Kappa", "Κ"],
	["Lambda", "Λ"],
	["Mu", "Μ"],
	["Nu", "Ν"],
	["Xi", "Ξ"],
	["Omicron", "Ο"],
	["Pi", "Π"],
	["Rho", "Ρ"],
	["Sigma", "Σ"],
	["Tau", "Τ"],
	["Upsilon", "Υ"],
	["Phi", "Φ"],
	["Chi", "Χ"],
	["Psi", "Ψ"],
	["Omega", "Ω"],
	["alpha", "α"],
	["beta", "β"],
	["gamma", "γ"],
	["delta", "δ"],
	["epsilon", "ε"],
	["zeta", "ζ"],
	["eta", "η"],
	["theta", "θ"],
	["iota", "ι"],
	["kappa", "κ"],
	["lambda", "λ"],
	["mu", "μ"],
	["nu", "ν"],
	["xi", "ξ"],
	["omicron", "ο"],
	["pi", "π"],
	["rho", "ρ"],
	["sigmaf", "ς"],
	["sigma", "σ"],
	["tau", "τ"],
	["upsilon", "υ"],
	["phi", "φ"],
	["chi", "χ"],
	["psi", "ψ"],
	["omega", "ω"],
	["thetasym", "ϑ"],
	["upsih", "ϒ"],
	["piv", "ϖ"],
	["ensp", " "],
	["emsp", " "],
	["thinsp", " "],
	["zwnj", "‌"],
	["zwj", "‍"],
	["lrm", "‎"],
	["rlm", "‏"],
	["ndash", "–"],
	["mdash", "—"],
	["lsquo", "‘"],
	["rsquo", "’"],
	["sbquo", "‚"],
	["ldquo", "“"],
	["rdquo", "”"],
	["bdquo", "„"],
	["dagger", "†"],
	["Dagger", "‡"],
	["bull", "•"],
	["hellip", "…"],
	["permil", "‰"],
	["prime", "′"],
	["Prime", "″"],
	["lsaquo", "‹"],
	["rsaquo", "›"],
	["oline", "‾"],
	["frasl", "⁄"],
	["euro", "€"],
	["image", "ℑ"],
	["weierp", "℘"],
	["real", "ℜ"],
	["trade", "™"],
	["alefsym", "ℵ"],
	["larr", "←"],
	["uarr", "↑"],
	["rarr", "→"],
	["darr", "↓"],
	["harr", "↔"],
	["crarr", "↵"],
	["lArr", "⇐"],
	["uArr", "⇑"],
	["rArr", "⇒"],
	["dArr", "⇓"],
	["hArr", "⇔"],
	["forall", "∀"],
	["part", "∂"],
	["exist", "∃"],
	["empty", "∅"],
	["nabla", "∇"],
	["isin", "∈"],
	["notin", "∉"],
	["ni", "∋"],
	["prod", "∏"],
	["sum", "∑"],
	["minus", "−"],
	["lowast", "∗"],
	["radic", "√"],
	["prop", "∝"],
	["infin", "∞"],
	["ang", "∠"],
	["and", "∧"],
	["or", "∨"],
	["cap", "∩"],
	["cup", "∪"],
	["int", "∫"],
	["there4", "∴"],
	["sim", "∼"],
	["cong", "≅"],
	["asymp", "≈"],
	["ne", "≠"],
	["equiv", "≡"],
	["le", "≤"],
	["ge", "≥"],
	["sub", "⊂"],
	["sup", "⊃"],
	["nsub", "⊄"],
	["sube", "⊆"],
	["supe", "⊇"],
	["oplus", "⊕"],
	["otimes", "⊗"],
	["perp", "⊥"],
	["sdot", "⋅"],
	["lceil", "⌈"],
	["rceil", "⌉"],
	["lfloor", "⌊"],
	["rfloor", "⌋"],
	["lang", "〈"],
	["rang", "〉"],
	["loz", "◊"],
	["spades", "♠"],
	["clubs", "♣"],
	["hearts", "♥"],
	["diams", "♦"]
]);
//#endregion
//#region node_modules/sucrase/dist/esm/util/getJSXPragmaInfo.js
function ia(e) {
	let [t, n] = aa(e.jsxPragma || "React.createElement"), [r, i] = aa(e.jsxFragmentPragma || "React.Fragment");
	return {
		base: t,
		suffix: n,
		fragmentBase: r,
		fragmentSuffix: i
	};
}
function aa(e) {
	let t = e.indexOf(".");
	return t === -1 && (t = e.length), [e.slice(0, t), e.slice(t)];
}
//#endregion
//#region node_modules/sucrase/dist/esm/transformers/Transformer.js
var oa = class {
	getPrefixCode() {
		return "";
	}
	getHoistedCode() {
		return "";
	}
	getSuffixCode() {
		return "";
	}
}, sa = class e extends oa {
	__init() {
		this.lastLineNumber = 1;
	}
	__init2() {
		this.lastIndex = 0;
	}
	__init3() {
		this.filenameVarName = null;
	}
	__init4() {
		this.esmAutomaticImportNameResolutions = {};
	}
	__init5() {
		this.cjsAutomaticModuleNameResolutions = {};
	}
	constructor(t, n, r, i, a) {
		super(), this.rootTransformer = t, this.tokens = n, this.importProcessor = r, this.nameManager = i, this.options = a, e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this), e.prototype.__init4.call(this), e.prototype.__init5.call(this), this.jsxPragmaInfo = ia(a), this.isAutomaticRuntime = a.jsxRuntime === "automatic", this.jsxImportSource = a.jsxImportSource || "react";
	}
	process() {
		return this.tokens.matches1(z.jsxTagStart) ? (this.processJSXTag(), !0) : !1;
	}
	getPrefixCode() {
		let e = "";
		if (this.filenameVarName && (e += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`), this.isAutomaticRuntime) {
			if (this.importProcessor) for (let [t, n] of Object.entries(this.cjsAutomaticModuleNameResolutions)) e += `var ${n} = require("${t}");`;
			else {
				let { createElement: t, ...n } = this.esmAutomaticImportNameResolutions;
				t && (e += `import {createElement as ${t}} from "${this.jsxImportSource}";`);
				let r = Object.entries(n).map(([e, t]) => `${e} as ${t}`).join(", ");
				if (r) {
					let t = this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
					e += `import {${r}} from "${t}";`;
				}
			}
		}
		return e;
	}
	processJSXTag() {
		let { jsxRole: e, start: t } = this.tokens.currentToken(), n = this.options.production ? null : this.getElementLocationCode(t);
		this.isAutomaticRuntime && e !== pi.KeyAfterPropSpread ? this.transformTagToJSXFunc(n, e) : this.transformTagToCreateElement(n);
	}
	getElementLocationCode(e) {
		return `lineNumber: ${this.getLineNumberForIndex(e)}`;
	}
	getLineNumberForIndex(e) {
		let t = this.tokens.code;
		for (; this.lastIndex < e && this.lastIndex < t.length;) t[this.lastIndex] === "\n" && this.lastLineNumber++, this.lastIndex++;
		return this.lastLineNumber;
	}
	transformTagToJSXFunc(e, t) {
		let n = t === pi.StaticChildren;
		this.tokens.replaceToken(this.getJSXFuncInvocationCode(n));
		let r = null;
		if (this.tokens.matches1(z.jsxTagEnd)) this.tokens.replaceToken(`${this.getFragmentCode()}, {`), this.processAutomaticChildrenAndEndProps(t);
		else {
			if (this.processTagIntro(), this.tokens.appendCode(", {"), r = this.processProps(!0), this.tokens.matches2(z.slash, z.jsxTagEnd)) this.tokens.appendCode("}");
			else if (this.tokens.matches1(z.jsxTagEnd)) this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(t);
			else throw Error("Expected either /> or > at the end of the tag.");
			r && this.tokens.appendCode(`, ${r}`);
		}
		for (this.options.production || (r === null && this.tokens.appendCode(", void 0"), this.tokens.appendCode(`, ${n}, ${this.getDevSource(e)}, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(z.jsxTagEnd);) this.tokens.removeToken();
		this.tokens.replaceToken(")");
	}
	transformTagToCreateElement(e) {
		if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(z.jsxTagEnd)) this.tokens.replaceToken(`${this.getFragmentCode()}, null`), this.processChildren(!0);
		else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(e), !this.tokens.matches2(z.slash, z.jsxTagEnd)) {
			if (this.tokens.matches1(z.jsxTagEnd)) this.tokens.removeToken(), this.processChildren(!0);
			else throw Error("Expected either /> or > at the end of the tag.");
		}
		for (this.tokens.removeInitialToken(); !this.tokens.matches1(z.jsxTagEnd);) this.tokens.removeToken();
		this.tokens.replaceToken(")");
	}
	getJSXFuncInvocationCode(e) {
		return this.options.production ? e ? this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
	}
	getCreateElementInvocationCode() {
		if (this.isAutomaticRuntime) return this.claimAutoImportedFuncInvocation("createElement", "");
		{
			let { jsxPragmaInfo: e } = this;
			return `${this.importProcessor && this.importProcessor.getIdentifierReplacement(e.base) || e.base}${e.suffix}(`;
		}
	}
	getFragmentCode() {
		if (this.isAutomaticRuntime) return this.claimAutoImportedName("Fragment", this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
		{
			let { jsxPragmaInfo: e } = this;
			return (this.importProcessor && this.importProcessor.getIdentifierReplacement(e.fragmentBase) || e.fragmentBase) + e.fragmentSuffix;
		}
	}
	claimAutoImportedFuncInvocation(e, t) {
		let n = this.claimAutoImportedName(e, t);
		return this.importProcessor ? `${n}.call(void 0, ` : `${n}(`;
	}
	claimAutoImportedName(e, t) {
		if (this.importProcessor) {
			let n = this.jsxImportSource + t;
			return this.cjsAutomaticModuleNameResolutions[n] || (this.cjsAutomaticModuleNameResolutions[n] = this.importProcessor.getFreeIdentifierForPath(n)), `${this.cjsAutomaticModuleNameResolutions[n]}.${e}`;
		}
		return this.esmAutomaticImportNameResolutions[e] || (this.esmAutomaticImportNameResolutions[e] = this.nameManager.claimFreeName(`_${e}`)), this.esmAutomaticImportNameResolutions[e];
	}
	processTagIntro() {
		let e = this.tokens.currentIndex() + 1;
		for (; this.tokens.tokens[e].isType || !this.tokens.matches2AtIndex(e - 1, z.jsxName, z.jsxName) && !this.tokens.matches2AtIndex(e - 1, z.greaterThan, z.jsxName) && !this.tokens.matches1AtIndex(e, z.braceL) && !this.tokens.matches1AtIndex(e, z.jsxTagEnd) && !this.tokens.matches2AtIndex(e, z.slash, z.jsxTagEnd);) e++;
		if (e === this.tokens.currentIndex() + 1) {
			let e = this.tokens.identifierName();
			ca(e) && this.tokens.replaceToken(`'${e}'`);
		}
		for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken();
	}
	processPropsObjectWithDevInfo(e) {
		let t = this.options.production ? "" : `__self: this, __source: ${this.getDevSource(e)}`;
		!this.tokens.matches1(z.jsxName) && !this.tokens.matches1(z.braceL) ? t ? this.tokens.appendCode(`, {${t}}`) : this.tokens.appendCode(", null") : (this.tokens.appendCode(", {"), this.processProps(!1), t ? this.tokens.appendCode(` ${t}}`) : this.tokens.appendCode("}"));
	}
	processProps(e) {
		let t = null;
		for (;;) {
			if (this.tokens.matches2(z.jsxName, z.eq)) {
				let n = this.tokens.identifierName();
				if (e && n === "key") {
					t !== null && this.tokens.appendCode(t.replace(/[^\n]/g, "")), this.tokens.removeToken(), this.tokens.removeToken();
					let e = this.tokens.snapshot();
					this.processPropValue(), t = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(e);
					continue;
				}
				this.processPropName(n), this.tokens.replaceToken(": "), this.processPropValue();
			} else if (this.tokens.matches1(z.jsxName)) {
				let e = this.tokens.identifierName();
				this.processPropName(e), this.tokens.appendCode(": true");
			} else if (this.tokens.matches1(z.braceL)) this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("");
			else break;
			this.tokens.appendCode(",");
		}
		return t;
	}
	processPropName(e) {
		e.includes("-") ? this.tokens.replaceToken(`'${e}'`) : this.tokens.copyToken();
	}
	processPropValue() {
		this.tokens.matches1(z.braceL) ? (this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")) : this.tokens.matches1(z.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
	}
	processStringPropValue() {
		let e = this.tokens.currentToken(), t = this.tokens.code.slice(e.start + 1, e.end - 1), n = ua(t), r = da(t);
		this.tokens.replaceToken(r + n);
	}
	processAutomaticChildrenAndEndProps(e) {
		e === pi.StaticChildren ? (this.tokens.appendCode(" children: ["), this.processChildren(!1), this.tokens.appendCode("]}")) : (e === pi.OneChild && this.tokens.appendCode(" children: "), this.processChildren(!1), this.tokens.appendCode("}"));
	}
	processChildren(e) {
		let t = e;
		for (;;) {
			if (this.tokens.matches2(z.jsxTagStart, z.slash)) return;
			let e = !1;
			if (this.tokens.matches1(z.braceL)) this.tokens.matches2(z.braceL, z.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(t ? ", " : ""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""), e = !0);
			else if (this.tokens.matches1(z.jsxTagStart)) this.tokens.appendCode(t ? ", " : ""), this.processJSXTag(), e = !0;
			else if (this.tokens.matches1(z.jsxText) || this.tokens.matches1(z.jsxEmptyText)) e = this.processChildTextElement(t);
			else throw Error("Unexpected token when processing JSX children.");
			e && (t = !0);
		}
	}
	processChildTextElement(e) {
		let t = this.tokens.currentToken(), n = this.tokens.code.slice(t.start, t.end), r = ua(n), i = la(n);
		return i === "\"\"" ? (this.tokens.replaceToken(r), !1) : (this.tokens.replaceToken(`${e ? ", " : ""}${i}${r}`), !0);
	}
	getDevSource(e) {
		return `{fileName: ${this.getFilenameVarName()}, ${e}}`;
	}
	getFilenameVarName() {
		return this.filenameVarName ||= this.nameManager.claimFreeName("_jsxFileName"), this.filenameVarName;
	}
};
function ca(e) {
	let t = e.charCodeAt(0);
	return t >= B.lowercaseA && t <= B.lowercaseZ;
}
function la(e) {
	let t = "", n = "", r = !1, i = !1;
	for (let a = 0; a < e.length; a++) {
		let o = e[a];
		if (o === " " || o === "	" || o === "\r") r || (n += o);
		else if (o === "\n") n = "", r = !0;
		else {
			if (i && r && (t += " "), t += n, n = "", o === "&") {
				let { entity: n, newI: r } = fa(e, a + 1);
				a = r - 1, t += n;
			} else t += o;
			i = !0, r = !1;
		}
	}
	return r || (t += n), JSON.stringify(t);
}
function ua(e) {
	let t = 0, n = 0;
	for (let r of e) r === "\n" ? (t++, n = 0) : r === " " && n++;
	return "\n".repeat(t) + " ".repeat(n);
}
function da(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\n") {
			if (/\s/.test(e[n + 1])) for (t += " "; n < e.length && /\s/.test(e[n + 1]);) n++;
			else t += "\n";
		} else if (r === "&") {
			let { entity: r, newI: i } = fa(e, n + 1);
			t += r, n = i - 1;
		} else t += r;
	}
	return JSON.stringify(t);
}
function fa(e, t) {
	let n = "", r = 0, i, a = t;
	if (e[a] === "#") {
		let t = 10;
		a++;
		let n;
		if (e[a] === "x") for (t = 16, a++, n = a; a < e.length && ma(e.charCodeAt(a));) a++;
		else for (n = a; a < e.length && pa(e.charCodeAt(a));) a++;
		if (e[a] === ";") {
			let r = e.slice(n, a);
			r && (a++, i = String.fromCodePoint(parseInt(r, t)));
		}
	} else for (; a < e.length && r++ < 10;) {
		let t = e[a];
		if (a++, t === ";") {
			i = ra.get(n);
			break;
		}
		n += t;
	}
	return i ? {
		entity: i,
		newI: a
	} : {
		entity: "&",
		newI: t
	};
}
function pa(e) {
	return e >= B.digit0 && e <= B.digit9;
}
function ma(e) {
	return e >= B.digit0 && e <= B.digit9 || e >= B.lowercaseA && e <= B.lowercaseF || e >= B.uppercaseA && e <= B.uppercaseF;
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/getNonTypeIdentifiers.js
function ha(e, t) {
	let n = ia(t), r = /* @__PURE__ */ new Set();
	for (let t = 0; t < e.tokens.length; t++) {
		let i = e.tokens[t];
		i.type === z.name && !i.isType && (i.identifierRole === K.Access || i.identifierRole === K.ObjectShorthand || i.identifierRole === K.ExportAccess) && !i.shadowsGlobal && r.add(e.identifierNameForToken(i)), i.type === z.jsxTagStart && r.add(n.base), i.type === z.jsxTagStart && t + 1 < e.tokens.length && e.tokens[t + 1].type === z.jsxTagEnd && (r.add(n.base), r.add(n.fragmentBase)), i.type === z.jsxName && i.identifierRole === K.Access && (!ca(e.identifierNameForToken(i)) || e.tokens[t + 1].type === z.dot) && r.add(e.identifierNameForToken(i));
	}
	return r;
}
//#endregion
//#region node_modules/sucrase/dist/esm/CJSImportProcessor.js
var ga = class e {
	__init() {
		this.nonTypeIdentifiers = /* @__PURE__ */ new Set();
	}
	__init2() {
		this.importInfoByPath = /* @__PURE__ */ new Map();
	}
	__init3() {
		this.importsToReplace = /* @__PURE__ */ new Map();
	}
	__init4() {
		this.identifierReplacements = /* @__PURE__ */ new Map();
	}
	__init5() {
		this.exportBindingsByLocalName = /* @__PURE__ */ new Map();
	}
	constructor(t, n, r, i, a, o, s) {
		this.nameManager = t, this.tokens = n, this.enableLegacyTypeScriptModuleInterop = r, this.options = i, this.isTypeScriptTransformEnabled = a, this.keepUnusedImports = o, this.helperManager = s, e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this), e.prototype.__init4.call(this), e.prototype.__init5.call(this);
	}
	preprocessTokens() {
		for (let e = 0; e < this.tokens.tokens.length; e++) this.tokens.matches1AtIndex(e, z._import) && !this.tokens.matches3AtIndex(e, z._import, z.name, z.eq) && this.preprocessImportAtIndex(e), this.tokens.matches1AtIndex(e, z._export) && !this.tokens.matches2AtIndex(e, z._export, z.eq) && this.preprocessExportAtIndex(e);
		this.generateImportReplacements();
	}
	pruneTypeOnlyImports() {
		this.nonTypeIdentifiers = ha(this.tokens, this.options);
		for (let [e, t] of this.importInfoByPath.entries()) t.hasBareImport || t.hasStarExport || t.exportStarNames.length > 0 || t.namedExports.length > 0 || [
			...t.defaultNames,
			...t.wildcardNames,
			...t.namedImports.map(({ localName: e }) => e)
		].every((e) => this.shouldAutomaticallyElideImportedName(e)) && this.importsToReplace.set(e, "");
	}
	shouldAutomaticallyElideImportedName(e) {
		return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(e);
	}
	generateImportReplacements() {
		for (let [e, t] of this.importInfoByPath.entries()) {
			let { defaultNames: n, wildcardNames: r, namedImports: i, namedExports: a, exportStarNames: o, hasStarExport: s } = t;
			if (n.length === 0 && r.length === 0 && i.length === 0 && a.length === 0 && o.length === 0 && !s) {
				this.importsToReplace.set(e, `require('${e}');`);
				continue;
			}
			let c = this.getFreeIdentifierForPath(e), l;
			l = this.enableLegacyTypeScriptModuleInterop ? c : r.length > 0 ? r[0] : this.getFreeIdentifierForPath(e);
			let u = `var ${c} = require('${e}');`;
			if (r.length > 0) for (let e of r) {
				let t = this.enableLegacyTypeScriptModuleInterop ? c : `${this.helperManager.getHelperName("interopRequireWildcard")}(${c})`;
				u += ` var ${e} = ${t};`;
			}
			else o.length > 0 && l !== c ? u += ` var ${l} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${c});` : n.length > 0 && l !== c && (u += ` var ${l} = ${this.helperManager.getHelperName("interopRequireDefault")}(${c});`);
			for (let { importedName: e, localName: t } of a) u += ` ${this.helperManager.getHelperName("createNamedExportFrom")}(${c}, '${t}', '${e}');`;
			for (let e of o) u += ` exports.${e} = ${l};`;
			s && (u += ` ${this.helperManager.getHelperName("createStarExport")}(${c});`), this.importsToReplace.set(e, u);
			for (let e of n) this.identifierReplacements.set(e, `${l}.default`);
			for (let { importedName: e, localName: t } of i) this.identifierReplacements.set(t, `${c}.${e}`);
		}
	}
	getFreeIdentifierForPath(e) {
		let t = e.split("/"), n = t[t.length - 1].replace(/\W/g, "");
		return this.nameManager.claimFreeName(`_${n}`);
	}
	preprocessImportAtIndex(e) {
		let t = [], n = [], r = [];
		if (e++, (this.tokens.matchesContextualAtIndex(e, R._type) || this.tokens.matches1AtIndex(e, z._typeof)) && !this.tokens.matches1AtIndex(e + 1, z.comma) && !this.tokens.matchesContextualAtIndex(e + 1, R._from) || this.tokens.matches1AtIndex(e, z.parenL)) return;
		if (this.tokens.matches1AtIndex(e, z.name) && (t.push(this.tokens.identifierNameAtIndex(e)), e++, this.tokens.matches1AtIndex(e, z.comma) && e++), this.tokens.matches1AtIndex(e, z.star) && (e += 2, n.push(this.tokens.identifierNameAtIndex(e)), e++), this.tokens.matches1AtIndex(e, z.braceL)) {
			let n = this.getNamedImports(e + 1);
			e = n.newIndex;
			for (let e of n.namedImports) e.importedName === "default" ? t.push(e.localName) : r.push(e);
		}
		if (this.tokens.matchesContextualAtIndex(e, R._from) && e++, !this.tokens.matches1AtIndex(e, z.string)) throw Error("Expected string token at the end of import statement.");
		let i = this.tokens.stringValueAtIndex(e), a = this.getImportInfo(i);
		a.defaultNames.push(...t), a.wildcardNames.push(...n), a.namedImports.push(...r), t.length === 0 && n.length === 0 && r.length === 0 && (a.hasBareImport = !0);
	}
	preprocessExportAtIndex(e) {
		if (this.tokens.matches2AtIndex(e, z._export, z._var) || this.tokens.matches2AtIndex(e, z._export, z._let) || this.tokens.matches2AtIndex(e, z._export, z._const)) this.preprocessVarExportAtIndex(e);
		else if (this.tokens.matches2AtIndex(e, z._export, z._function) || this.tokens.matches2AtIndex(e, z._export, z._class)) {
			let t = this.tokens.identifierNameAtIndex(e + 2);
			this.addExportBinding(t, t);
		} else if (this.tokens.matches3AtIndex(e, z._export, z.name, z._function)) {
			let t = this.tokens.identifierNameAtIndex(e + 3);
			this.addExportBinding(t, t);
		} else this.tokens.matches2AtIndex(e, z._export, z.braceL) ? this.preprocessNamedExportAtIndex(e) : this.tokens.matches2AtIndex(e, z._export, z.star) && this.preprocessExportStarAtIndex(e);
	}
	preprocessVarExportAtIndex(e) {
		let t = 0;
		for (let n = e + 2;; n++) if (this.tokens.matches1AtIndex(n, z.braceL) || this.tokens.matches1AtIndex(n, z.dollarBraceL) || this.tokens.matches1AtIndex(n, z.bracketL)) t++;
		else if (this.tokens.matches1AtIndex(n, z.braceR) || this.tokens.matches1AtIndex(n, z.bracketR)) t--;
		else if (t === 0 && !this.tokens.matches1AtIndex(n, z.name)) break;
		else if (this.tokens.matches1AtIndex(1, z.eq)) {
			let e = this.tokens.currentToken().rhsEndIndex;
			if (e == null) throw Error("Expected = token with an end index.");
			n = e - 1;
		} else {
			let e = this.tokens.tokens[n];
			if (mi(e)) {
				let e = this.tokens.identifierNameAtIndex(n);
				this.identifierReplacements.set(e, `exports.${e}`);
			}
		}
	}
	preprocessNamedExportAtIndex(e) {
		e += 2;
		let { newIndex: t, namedImports: n } = this.getNamedImports(e);
		if (e = t, this.tokens.matchesContextualAtIndex(e, R._from)) e++;
		else {
			for (let { importedName: e, localName: t } of n) this.addExportBinding(e, t);
			return;
		}
		if (!this.tokens.matches1AtIndex(e, z.string)) throw Error("Expected string token at the end of import statement.");
		let r = this.tokens.stringValueAtIndex(e);
		this.getImportInfo(r).namedExports.push(...n);
	}
	preprocessExportStarAtIndex(e) {
		let t = null;
		if (this.tokens.matches3AtIndex(e, z._export, z.star, z._as) ? (e += 3, t = this.tokens.identifierNameAtIndex(e), e += 2) : e += 3, !this.tokens.matches1AtIndex(e, z.string)) throw Error("Expected string token at the end of star export statement.");
		let n = this.tokens.stringValueAtIndex(e), r = this.getImportInfo(n);
		t === null ? r.hasStarExport = !0 : r.exportStarNames.push(t);
	}
	getNamedImports(e) {
		let t = [];
		for (;;) {
			if (this.tokens.matches1AtIndex(e, z.braceR)) {
				e++;
				break;
			}
			let n = ta(this.tokens, e);
			if (e = n.endIndex, n.isType || t.push({
				importedName: n.leftName,
				localName: n.rightName
			}), this.tokens.matches2AtIndex(e, z.comma, z.braceR)) {
				e += 2;
				break;
			}
			if (this.tokens.matches1AtIndex(e, z.braceR)) {
				e++;
				break;
			}
			if (this.tokens.matches1AtIndex(e, z.comma)) e++;
			else throw Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[e])}`);
		}
		return {
			newIndex: e,
			namedImports: t
		};
	}
	getImportInfo(e) {
		let t = this.importInfoByPath.get(e);
		if (t) return t;
		let n = {
			defaultNames: [],
			wildcardNames: [],
			namedImports: [],
			namedExports: [],
			hasBareImport: !1,
			exportStarNames: [],
			hasStarExport: !1
		};
		return this.importInfoByPath.set(e, n), n;
	}
	addExportBinding(e, t) {
		this.exportBindingsByLocalName.has(e) || this.exportBindingsByLocalName.set(e, []), this.exportBindingsByLocalName.get(e).push(t);
	}
	claimImportCode(e) {
		let t = this.importsToReplace.get(e);
		return this.importsToReplace.set(e, ""), t || "";
	}
	getIdentifierReplacement(e) {
		return this.identifierReplacements.get(e) || null;
	}
	resolveExportBinding(e) {
		let t = this.exportBindingsByLocalName.get(e);
		return !t || t.length === 0 ? null : t.map((e) => `exports.${e}`).join(" = ");
	}
	getGlobalNames() {
		return /* @__PURE__ */ new Set([...this.identifierReplacements.keys(), ...this.exportBindingsByLocalName.keys()]);
	}
}, _a = 44, va = 59, ya = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ba = /* @__PURE__ */ new Uint8Array(64), xa = /* @__PURE__ */ new Uint8Array(128);
for (let e = 0; e < ya.length; e++) {
	let t = ya.charCodeAt(e);
	ba[e] = t, xa[t] = e;
}
function Sa(e, t) {
	do {
		let n = t & 31;
		t >>>= 5, t > 0 && (n |= 32), e.write(ba[n]);
	} while (t > 0);
}
function Ca(e) {
	return e < 0 ? -e << 1 | 1 : e << 1;
}
var wa = 16384, Ta = typeof TextDecoder < "u" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer < "u" ? { decode(e) {
	return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString();
} } : { decode(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
	return t;
} }, Ea = class {
	constructor() {
		this.pos = 0, this.out = "", this.buffer = new Uint8Array(wa);
	}
	write(e) {
		let { buffer: t } = this;
		t[this.pos++] = e, this.pos === wa && (this.out += Ta.decode(t), this.pos = 0);
	}
	flush() {
		let { buffer: e, out: t, pos: n } = this;
		return n > 0 ? t + Ta.decode(e.subarray(0, n)) : t;
	}
};
function Da(e) {
	let t = new Ea(), n = 0, r = 0, i = 0, a = 0;
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		if (o > 0 && t.write(va), s.length === 0) continue;
		let c = 0;
		for (let e = 0; e < s.length; e++) {
			let o = s[e];
			e > 0 && t.write(_a), Sa(t, Ca(o[0] - c)), c = o[0], o.length !== 1 && (Sa(t, Ca(o[1] - n)), Sa(t, Ca(o[2] - r)), Sa(t, Ca(o[3] - i)), n = o[1], r = o[2], i = o[3], o.length !== 4 && (Sa(t, Ca(o[4] - a)), a = o[4]));
		}
	}
	return t.flush();
}
(/* @__PURE__ */ Pe(((e, t, n) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.resolveURI = r());
	})(n, (function() {
		let e = /^[\w+.-]+:\/\//, t = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, n = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
		function r(t) {
			return e.test(t);
		}
		function i(e) {
			return e.startsWith("//");
		}
		function a(e) {
			return e.startsWith("/");
		}
		function o(e) {
			return e.startsWith("file:");
		}
		function s(e) {
			return /^[.?#]/.test(e);
		}
		function c(e) {
			let n = t.exec(e);
			return u(n[1], n[2] || "", n[3], n[4] || "", n[5] || "/", n[6] || "", n[7] || "");
		}
		function l(e) {
			let t = n.exec(e), r = t[2];
			return u("file:", "", t[1] || "", "", a(r) ? r : "/" + r, t[3] || "", t[4] || "");
		}
		function u(e, t, n, r, i, a, o) {
			return {
				scheme: e,
				user: t,
				host: n,
				port: r,
				path: i,
				query: a,
				hash: o,
				type: 7
			};
		}
		function d(e) {
			if (i(e)) {
				let t = c("http:" + e);
				return t.scheme = "", t.type = 6, t;
			}
			if (a(e)) {
				let t = c("http://foo.com" + e);
				return t.scheme = "", t.host = "", t.type = 5, t;
			}
			if (o(e)) return l(e);
			if (r(e)) return c(e);
			let t = c("http://foo.com/" + e);
			return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? 3 : e.startsWith("#") ? 2 : 4 : 1, t;
		}
		function f(e) {
			if (e.endsWith("/..")) return e;
			let t = e.lastIndexOf("/");
			return e.slice(0, t + 1);
		}
		function p(e, t) {
			m(t, t.type), e.path = e.path === "/" ? t.path : f(t.path) + e.path;
		}
		function m(e, t) {
			let n = t <= 4, r = e.path.split("/"), i = 1, a = 0, o = !1;
			for (let e = 1; e < r.length; e++) {
				let t = r[e];
				t ? (o = !1, t !== "." && (t === ".." ? a ? (o = !0, a--, i--) : n && (r[i++] = t) : (r[i++] = t, a++))) : o = !0;
			}
			let s = "";
			for (let e = 1; e < i; e++) s += "/" + r[e];
			(!s || o && !s.endsWith("/..")) && (s += "/"), e.path = s;
		}
		function h(e, t) {
			if (!e && !t) return "";
			let n = d(e), r = n.type;
			if (t && r !== 7) {
				let e = d(t), i = e.type;
				switch (r) {
					case 1: n.hash = e.hash;
					case 2: n.query = e.query;
					case 3:
					case 4: p(n, e);
					case 5: n.user = e.user, n.host = e.host, n.port = e.port;
					case 6: n.scheme = e.scheme;
				}
				i > r && (r = i);
			}
			m(n, r);
			let i = n.query + n.hash;
			switch (r) {
				case 2:
				case 3: return i;
				case 4: {
					let r = n.path.slice(1);
					return r ? s(t || e) && !s(r) ? "./" + r + i : r + i : i || ".";
				}
				case 5: return n.path + i;
				default: return n.scheme + "//" + n.user + n.host + n.port + n.path + i;
			}
		}
		return h;
	}));
})))();
//#endregion
//#region node_modules/@jridgewell/gen-mapping/dist/gen-mapping.mjs
var Oa = class {
	constructor() {
		this._indexes = { __proto__: null }, this.array = [];
	}
};
function ka(e) {
	return e;
}
function Aa(e, t) {
	return ka(e)._indexes[t];
}
function ja(e, t) {
	let n = Aa(e, t);
	if (n !== void 0) return n;
	let { array: r, _indexes: i } = ka(e);
	return i[t] = r.push(t) - 1;
}
var Ma = 0, Na = 1, Pa = 2, Fa = 3, Ia = 4, La = -1, Ra = class {
	constructor({ file: e, sourceRoot: t } = {}) {
		this._names = new Oa(), this._sources = new Oa(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = t, this._ignoreList = new Oa();
	}
};
function za(e) {
	return e;
}
var Ba = (e, t, n, r, i, a, o, s) => Ua(!0, e, t, n, r, i, a, o, s);
function Va(e) {
	let { _mappings: t, _sources: n, _sourcesContent: r, _names: i, _ignoreList: a } = za(e);
	return qa(t), {
		version: 3,
		file: e.file || void 0,
		names: i.array,
		sourceRoot: e.sourceRoot || void 0,
		sources: n.array,
		sourcesContent: r,
		mappings: t,
		ignoreList: a.array
	};
}
function Ha(e) {
	let t = Va(e);
	return Object.assign({}, t, { mappings: Da(t.mappings) });
}
function Ua(e, t, n, r, i, a, o, s, c) {
	let { _mappings: l, _sources: u, _sourcesContent: d, _names: f } = za(t), p = Wa(l, n), m = Ga(p, r);
	if (!i) return e && Ja(p, m) ? void 0 : Ka(p, m, [r]);
	let h = ja(u, i), g = s ? ja(f, s) : La;
	if (h === d.length && (d[h] = c ?? null), !(e && Ya(p, m, h, a, o, g))) return Ka(p, m, s ? [
		r,
		h,
		a,
		o,
		g
	] : [
		r,
		h,
		a,
		o
	]);
}
function Wa(e, t) {
	for (let n = e.length; n <= t; n++) e[n] = [];
	return e[t];
}
function Ga(e, t) {
	let n = e.length;
	for (let r = n - 1; r >= 0 && !(t >= e[r][Ma]); n = r--);
	return n;
}
function Ka(e, t, n) {
	for (let n = e.length; n > t; n--) e[n] = e[n - 1];
	e[t] = n;
}
function qa(e) {
	let { length: t } = e, n = t;
	for (let t = n - 1; t >= 0 && !(e[t].length > 0); n = t, t--);
	n < t && (e.length = n);
}
function Ja(e, t) {
	return t === 0 || e[t - 1].length === 1;
}
function Ya(e, t, n, r, i, a) {
	if (t === 0) return !1;
	let o = e[t - 1];
	return o.length !== 1 && n === o[Na] && r === o[Pa] && i === o[Fa] && a === (o.length === 5 ? o[Ia] : La);
}
//#endregion
//#region node_modules/sucrase/dist/esm/computeSourceMap.js
function Xa({ code: e, mappings: t }, n, r, i, a) {
	let o = Za(i, a), s = new Ra({ file: r.compiledFilename }), c = 0, l = t[0];
	for (; l === void 0 && c < t.length - 1;) c++, l = t[c];
	let u = 0, d = 0;
	l !== d && Ba(s, u, 0, n, u, 0);
	for (let r = 0; r < e.length; r++) {
		if (r === l) {
			let e = l - d, i = o[c];
			for (Ba(s, u, e, n, u, i); (l === r || l === void 0) && c < t.length - 1;) c++, l = t[c];
		}
		e.charCodeAt(r) === B.lineFeed && (u++, d = r + 1, l !== d && Ba(s, u, 0, n, u, 0));
	}
	let { sourceRoot: f, sourcesContent: p, ...m } = Ha(s);
	return m;
}
function Za(e, t) {
	let n = Array(t.length), r = 0, i = t[r].start, a = 0;
	for (let o = 0; o < e.length; o++) o === i && (n[r] = i - a, r++, i = t[r].start), e.charCodeAt(o) === B.lineFeed && (a = o + 1);
	return n;
}
//#endregion
//#region node_modules/sucrase/dist/esm/HelperManager.js
var Qa = {
	require: "\n    import {createRequire as CREATE_REQUIRE_NAME} from \"module\";\n    const require = CREATE_REQUIRE_NAME(import.meta.url);\n  ",
	interopRequireWildcard: "\n    function interopRequireWildcard(obj) {\n      if (obj && obj.__esModule) {\n        return obj;\n      } else {\n        var newObj = {};\n        if (obj != null) {\n          for (var key in obj) {\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n              newObj[key] = obj[key];\n            }\n          }\n        }\n        newObj.default = obj;\n        return newObj;\n      }\n    }\n  ",
	interopRequireDefault: "\n    function interopRequireDefault(obj) {\n      return obj && obj.__esModule ? obj : { default: obj };\n    }\n  ",
	createNamedExportFrom: "\n    function createNamedExportFrom(obj, localName, importedName) {\n      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});\n    }\n  ",
	createStarExport: "\n    function createStarExport(obj) {\n      Object.keys(obj)\n        .filter((key) => key !== \"default\" && key !== \"__esModule\")\n        .forEach((key) => {\n          if (exports.hasOwnProperty(key)) {\n            return;\n          }\n          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});\n        });\n    }\n  ",
	nullishCoalesce: "\n    function nullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return rhsFn();\n      }\n    }\n  ",
	asyncNullishCoalesce: "\n    async function asyncNullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return await rhsFn();\n      }\n    }\n  ",
	optionalChain: "\n    function optionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",
	asyncOptionalChain: "\n    async function asyncOptionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = await fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = await fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",
	optionalChainDelete: "\n    function optionalChainDelete(ops) {\n      const result = OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  ",
	asyncOptionalChainDelete: "\n    async function asyncOptionalChainDelete(ops) {\n      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  "
}, $a = class e {
	__init() {
		this.helperNames = {};
	}
	__init2() {
		this.createRequireName = null;
	}
	constructor(t) {
		this.nameManager = t, e.prototype.__init.call(this), e.prototype.__init2.call(this);
	}
	getHelperName(e) {
		let t = this.helperNames[e];
		return t || (t = this.nameManager.claimFreeName(`_${e}`), this.helperNames[e] = t, t);
	}
	emitHelpers() {
		let e = "";
		this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
		for (let [t, n] of Object.entries(Qa)) {
			let r = this.helperNames[t], i = n;
			t === "optionalChainDelete" ? i = i.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : t === "asyncOptionalChainDelete" ? i = i.replace("ASYNC_OPTIONAL_CHAIN_NAME", this.helperNames.asyncOptionalChain) : t === "require" && (this.createRequireName === null && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), i = i.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), r && (e += " ", e += i.replace(t, r).replace(/\s+/g, " ").trim());
		}
		return e;
	}
};
//#endregion
//#region node_modules/sucrase/dist/esm/identifyShadowedGlobals.js
function eo(e, t, n) {
	to(e, n) && no(e, t, n);
}
function to(e, t) {
	for (let n of e.tokens) if (n.type === z.name && !n.isType && hi(n) && t.has(e.identifierNameForToken(n))) return !0;
	return !1;
}
function no(e, t, n) {
	let r = [], i = t.length - 1;
	for (let a = e.tokens.length - 1;; a--) {
		for (; r.length > 0 && r[r.length - 1].startTokenIndex === a + 1;) r.pop();
		for (; i >= 0 && t[i].endTokenIndex === a + 1;) r.push(t[i]), i--;
		if (a < 0) break;
		let o = e.tokens[a], s = e.identifierNameForToken(o);
		if (r.length > 1 && !o.isType && o.type === z.name && n.has(s)) {
			if (_i(o)) ro(r[r.length - 1], e, s);
			else if (vi(o)) {
				let t = r.length - 1;
				for (; t > 0 && !r[t].isFunctionScope;) t--;
				if (t < 0) throw Error("Did not find parent function scope.");
				ro(r[t], e, s);
			}
		}
	}
	if (r.length > 0) throw Error("Expected empty scope stack after processing file.");
}
function ro(e, t, n) {
	for (let r = e.startTokenIndex; r < e.endTokenIndex; r++) {
		let e = t.tokens[r];
		(e.type === z.name || e.type === z.jsxName) && t.identifierNameForToken(e) === n && (e.shadowsGlobal = !0);
	}
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/getIdentifierNames.js
function io(e, t) {
	let n = [];
	for (let r of t) r.type === z.name && n.push(e.slice(r.start, r.end));
	return n;
}
//#endregion
//#region node_modules/sucrase/dist/esm/NameManager.js
var ao = class e {
	__init() {
		this.usedNames = /* @__PURE__ */ new Set();
	}
	constructor(t, n) {
		e.prototype.__init.call(this), this.usedNames = new Set(io(t, n));
	}
	claimFreeName(e) {
		let t = this.findFreeName(e);
		return this.usedNames.add(t), t;
	}
	findFreeName(e) {
		if (!this.usedNames.has(e)) return e;
		let t = 2;
		for (; this.usedNames.has(e + String(t));) t++;
		return e + String(t);
	}
}, oo = /* @__PURE__ */ Pe(((e, t, n) => {
	var r = n && n.__extends || (function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			}, e(t, n);
		};
		return function(t, n) {
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
		};
	})();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DetailContext = e.NoopContext = e.VError = void 0;
	var i = function(e) {
		r(t, e);
		function t(n, r) {
			var i = e.call(this, r) || this;
			return i.path = n, Object.setPrototypeOf(i, t.prototype), i;
		}
		return t;
	}(Error);
	e.VError = i, e.NoopContext = function() {
		function e() {}
		return e.prototype.fail = function(e, t, n) {
			return !1;
		}, e.prototype.unionResolver = function() {
			return this;
		}, e.prototype.createContext = function() {
			return this;
		}, e.prototype.resolveUnion = function(e) {}, e;
	}();
	var a = function() {
		function e() {
			this._propNames = [""], this._messages = [null], this._score = 0;
		}
		return e.prototype.fail = function(e, t, n) {
			return this._propNames.push(e), this._messages.push(t), this._score += n, !1;
		}, e.prototype.unionResolver = function() {
			return new o();
		}, e.prototype.resolveUnion = function(e) {
			for (var t, n, r = e, i = null, a = 0, o = r.contexts; a < o.length; a++) {
				var s = o[a];
				(!i || s._score >= i._score) && (i = s);
			}
			i && i._score > 0 && ((t = this._propNames).push.apply(t, i._propNames), (n = this._messages).push.apply(n, i._messages));
		}, e.prototype.getError = function(e) {
			for (var t = [], n = this._propNames.length - 1; n >= 0; n--) {
				var r = this._propNames[n];
				e += typeof r == "number" ? "[" + r + "]" : r ? "." + r : "";
				var a = this._messages[n];
				a && t.push(e + " " + a);
			}
			return new i(e, t.join("; "));
		}, e.prototype.getErrorDetail = function(e) {
			for (var t = [], n = this._propNames.length - 1; n >= 0; n--) {
				var r = this._propNames[n];
				e += typeof r == "number" ? "[" + r + "]" : r ? "." + r : "";
				var i = this._messages[n];
				i && t.push({
					path: e,
					message: i
				});
			}
			for (var a = null, n = t.length - 1; n >= 0; n--) a && (t[n].nested = [a]), a = t[n];
			return a;
		}, e;
	}();
	e.DetailContext = a;
	var o = function() {
		function e() {
			this.contexts = [];
		}
		return e.prototype.createContext = function() {
			var e = new a();
			return this.contexts.push(e), e;
		}, e;
	}();
})), so = /* @__PURE__ */ Pe(((e, t, n) => {
	var r = n && n.__extends || (function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			}, e(t, n);
		};
		return function(t, n) {
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
		};
	})();
	Object.defineProperty(e, "__esModule", { value: !0 }), e.basicTypes = e.BasicType = e.TParamList = e.TParam = e.param = e.TFunc = e.func = e.TProp = e.TOptional = e.opt = e.TIface = e.iface = e.TEnumLiteral = e.enumlit = e.TEnumType = e.enumtype = e.TIntersection = e.intersection = e.TUnion = e.union = e.TTuple = e.tuple = e.TArray = e.array = e.TLiteral = e.lit = e.TName = e.name = e.TType = void 0;
	var i = oo(), a = function() {
		function e() {}
		return e;
	}();
	e.TType = a;
	function o(e) {
		return typeof e == "string" ? c(e) : e;
	}
	function s(e, t) {
		var n = e[t];
		if (!n) throw Error("Unknown type " + t);
		return n;
	}
	function c(e) {
		return new l(e);
	}
	e.name = c;
	var l = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.name = t, n._failMsg = "is not a " + t, n;
		}
		return t.prototype.getChecker = function(e, n, r) {
			var i = this, a = s(e, this.name), o = a.getChecker(e, n, r);
			return a instanceof k || a instanceof t ? o : function(e, t) {
				return o(e, t) ? !0 : t.fail(null, i._failMsg, 0);
			};
		}, t;
	}(a);
	e.TName = l;
	function u(e) {
		return new d(e);
	}
	e.lit = u;
	var d = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.value = t, n.name = JSON.stringify(t), n._failMsg = "is not " + n.name, n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this;
			return function(e, t) {
				return e === n.value || t.fail(null, n._failMsg, -1);
			};
		}, t;
	}(a);
	e.TLiteral = d;
	function f(e) {
		return new p(o(e));
	}
	e.array = f;
	var p = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.ttype = t, n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this.ttype.getChecker(e, t);
			return function(e, t) {
				if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
				for (var r = 0; r < e.length; r++) if (!n(e[r], t)) return t.fail(r, null, 1);
				return !0;
			};
		}, t;
	}(a);
	e.TArray = p;
	function m() {
		return new h([...arguments].map(function(e) {
			return o(e);
		}));
	}
	e.tuple = m;
	var h = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.ttypes = t, n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this.ttypes.map(function(n) {
				return n.getChecker(e, t);
			}), r = function(e, t) {
				if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
				for (var r = 0; r < n.length; r++) if (!n[r](e[r], t)) return t.fail(r, null, 1);
				return !0;
			};
			return t ? function(e, t) {
				return r(e, t) ? e.length <= n.length || t.fail(n.length, "is extraneous", 2) : !1;
			} : r;
		}, t;
	}(a);
	e.TTuple = h;
	function g() {
		return new _([...arguments].map(function(e) {
			return o(e);
		}));
	}
	e.union = g;
	var _ = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			n.ttypes = t;
			var r = t.map(function(e) {
				return e instanceof l || e instanceof d ? e.name : null;
			}).filter(function(e) {
				return e;
			}), i = t.length - r.length;
			return r.length ? (i > 0 && r.push(i + " more"), n._failMsg = "is none of " + r.join(", ")) : n._failMsg = "is none of " + i + " types", n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this, r = this.ttypes.map(function(n) {
				return n.getChecker(e, t);
			});
			return function(e, t) {
				for (var i = t.unionResolver(), a = 0; a < r.length; a++) if (r[a](e, i.createContext())) return !0;
				return t.resolveUnion(i), t.fail(null, n._failMsg, 0);
			};
		}, t;
	}(a);
	e.TUnion = _;
	function v() {
		return new y([...arguments].map(function(e) {
			return o(e);
		}));
	}
	e.intersection = v;
	var y = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.ttypes = t, n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = /* @__PURE__ */ new Set(), r = this.ttypes.map(function(r) {
				return r.getChecker(e, t, n);
			});
			return function(e, t) {
				return r.every(function(n) {
					return n(e, t);
				}) ? !0 : t.fail(null, null, 0);
			};
		}, t;
	}(a);
	e.TIntersection = y;
	function b(e) {
		return new x(e);
	}
	e.enumtype = b;
	var x = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.members = t, n.validValues = /* @__PURE__ */ new Set(), n._failMsg = "is not a valid enum value", n.validValues = new Set(Object.keys(t).map(function(e) {
				return t[e];
			})), n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this;
			return function(e, t) {
				return n.validValues.has(e) ? !0 : t.fail(null, n._failMsg, 0);
			};
		}, t;
	}(a);
	e.TEnumType = x;
	function S(e, t) {
		return new C(e, t);
	}
	e.enumlit = S;
	var C = function(e) {
		r(t, e);
		function t(t, n) {
			var r = e.call(this) || this;
			return r.enumName = t, r.prop = n, r._failMsg = "is not " + t + "." + n, r;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this, r = s(e, this.enumName);
			if (!(r instanceof x)) throw Error("Type " + this.enumName + " used in enumlit is not an enum type");
			var i = r.members[this.prop];
			if (!r.members.hasOwnProperty(this.prop)) throw Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
			return function(e, t) {
				return e === i || t.fail(null, n._failMsg, -1);
			};
		}, t;
	}(a);
	e.TEnumLiteral = C;
	function w(e) {
		return Object.keys(e).map(function(t) {
			return T(t, e[t]);
		});
	}
	function T(e, t) {
		return t instanceof re ? new ie(e, t.ttype, !0) : new ie(e, o(t), !1);
	}
	function ee(e, t) {
		return new te(e, w(t));
	}
	e.iface = ee;
	var te = function(e) {
		r(t, e);
		function t(t, n) {
			var r = e.call(this) || this;
			return r.bases = t, r.props = n, r.propSet = new Set(n.map(function(e) {
				return e.name;
			})), r;
		}
		return t.prototype.getChecker = function(e, t, n) {
			var r = this, a = this.bases.map(function(n) {
				return s(e, n).getChecker(e, t);
			}), o = this.props.map(function(n) {
				return n.ttype.getChecker(e, t);
			}), c = new i.NoopContext(), l = this.props.map(function(e, t) {
				return !e.isOpt && !o[t](void 0, c);
			}), u = function(e, t) {
				if (typeof e != "object" || !e) return t.fail(null, "is not an object", 0);
				for (var n = 0; n < a.length; n++) if (!a[n](e, t)) return !1;
				for (var n = 0; n < o.length; n++) {
					var i = r.props[n].name, s = e[i];
					if (s === void 0) {
						if (l[n]) return t.fail(i, "is missing", 1);
					} else if (!o[n](s, t)) return t.fail(i, null, 1);
				}
				return !0;
			};
			if (!t) return u;
			var d = this.propSet;
			return n && (this.propSet.forEach(function(e) {
				return n.add(e);
			}), d = n), function(e, t) {
				if (!u(e, t)) return !1;
				for (var n in e) if (!d.has(n)) return t.fail(n, "is extraneous", 2);
				return !0;
			};
		}, t;
	}(a);
	e.TIface = te;
	function ne(e) {
		return new re(o(e));
	}
	e.opt = ne;
	var re = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.ttype = t, n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this.ttype.getChecker(e, t);
			return function(e, t) {
				return e === void 0 || n(e, t);
			};
		}, t;
	}(a);
	e.TOptional = re;
	var ie = function() {
		function e(e, t, n) {
			this.name = e, this.ttype = t, this.isOpt = n;
		}
		return e;
	}();
	e.TProp = ie;
	function ae(e) {
		return new E(new O([...arguments].slice(1)), o(e));
	}
	e.func = ae;
	var E = function(e) {
		r(t, e);
		function t(t, n) {
			var r = e.call(this) || this;
			return r.paramList = t, r.result = n, r;
		}
		return t.prototype.getChecker = function(e, t) {
			return function(e, t) {
				return typeof e == "function" || t.fail(null, "is not a function", 0);
			};
		}, t;
	}(a);
	e.TFunc = E;
	function D(e, t, n) {
		return new oe(e, o(t), !!n);
	}
	e.param = D;
	var oe = function() {
		function e(e, t, n) {
			this.name = e, this.ttype = t, this.isOpt = n;
		}
		return e;
	}();
	e.TParam = oe;
	var O = function(e) {
		r(t, e);
		function t(t) {
			var n = e.call(this) || this;
			return n.params = t, n;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this, r = this.params.map(function(n) {
				return n.ttype.getChecker(e, t);
			}), a = new i.NoopContext(), o = this.params.map(function(e, t) {
				return !e.isOpt && !r[t](void 0, a);
			}), s = function(e, t) {
				if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
				for (var i = 0; i < r.length; i++) {
					var a = n.params[i];
					if (e[i] === void 0) {
						if (o[i]) return t.fail(a.name, "is missing", 1);
					} else if (!r[i](e[i], t)) return t.fail(a.name, null, 1);
				}
				return !0;
			};
			return t ? function(e, t) {
				return s(e, t) ? e.length <= r.length || t.fail(r.length, "is extraneous", 2) : !1;
			} : s;
		}, t;
	}(a);
	e.TParamList = O;
	var k = function(e) {
		r(t, e);
		function t(t, n) {
			var r = e.call(this) || this;
			return r.validator = t, r.message = n, r;
		}
		return t.prototype.getChecker = function(e, t) {
			var n = this;
			return function(e, t) {
				return n.validator(e) ? !0 : t.fail(null, n.message, 0);
			};
		}, t;
	}(a);
	e.BasicType = k, e.basicTypes = {
		any: new k(function(e) {
			return !0;
		}, "is invalid"),
		number: new k(function(e) {
			return typeof e == "number";
		}, "is not a number"),
		object: new k(function(e) {
			return typeof e == "object" && e;
		}, "is not an object"),
		boolean: new k(function(e) {
			return typeof e == "boolean";
		}, "is not a boolean"),
		string: new k(function(e) {
			return typeof e == "string";
		}, "is not a string"),
		symbol: new k(function(e) {
			return typeof e == "symbol";
		}, "is not a symbol"),
		void: new k(function(e) {
			return e == null;
		}, "is not void"),
		undefined: new k(function(e) {
			return e === void 0;
		}, "is not undefined"),
		null: new k(function(e) {
			return e === null;
		}, "is not null"),
		never: new k(function(e) {
			return !1;
		}, "is unexpected"),
		Date: new k(ce("[object Date]"), "is not a Date"),
		RegExp: new k(ce("[object RegExp]"), "is not a RegExp")
	};
	var se = Object.prototype.toString;
	function ce(e) {
		return function(t) {
			return typeof t == "object" && t && se.call(t) === e;
		};
	}
	typeof Buffer < "u" && (e.basicTypes.Buffer = new k(function(e) {
		return Buffer.isBuffer(e);
	}, "is not a Buffer"));
	for (var le = function(t) {
		e.basicTypes[t.name] = new k(function(e) {
			return e instanceof t;
		}, "is not a " + t.name);
	}, A = 0, j = [
		Int8Array,
		Uint8Array,
		Uint8ClampedArray,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array,
		ArrayBuffer
	]; A < j.length; A++) {
		var ue = j[A];
		le(ue);
	}
})), co = /* @__PURE__ */ Le((/* @__PURE__ */ Pe(((e, t, n) => {
	var r = n && n.__spreadArrays || function() {
		for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
		for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
		return r;
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Checker = e.createCheckers = void 0;
	var i = so(), a = oo(), o = so();
	Object.defineProperty(e, "TArray", {
		enumerable: !0,
		get: function() {
			return o.TArray;
		}
	}), Object.defineProperty(e, "TEnumType", {
		enumerable: !0,
		get: function() {
			return o.TEnumType;
		}
	}), Object.defineProperty(e, "TEnumLiteral", {
		enumerable: !0,
		get: function() {
			return o.TEnumLiteral;
		}
	}), Object.defineProperty(e, "TFunc", {
		enumerable: !0,
		get: function() {
			return o.TFunc;
		}
	}), Object.defineProperty(e, "TIface", {
		enumerable: !0,
		get: function() {
			return o.TIface;
		}
	}), Object.defineProperty(e, "TLiteral", {
		enumerable: !0,
		get: function() {
			return o.TLiteral;
		}
	}), Object.defineProperty(e, "TName", {
		enumerable: !0,
		get: function() {
			return o.TName;
		}
	}), Object.defineProperty(e, "TOptional", {
		enumerable: !0,
		get: function() {
			return o.TOptional;
		}
	}), Object.defineProperty(e, "TParam", {
		enumerable: !0,
		get: function() {
			return o.TParam;
		}
	}), Object.defineProperty(e, "TParamList", {
		enumerable: !0,
		get: function() {
			return o.TParamList;
		}
	}), Object.defineProperty(e, "TProp", {
		enumerable: !0,
		get: function() {
			return o.TProp;
		}
	}), Object.defineProperty(e, "TTuple", {
		enumerable: !0,
		get: function() {
			return o.TTuple;
		}
	}), Object.defineProperty(e, "TType", {
		enumerable: !0,
		get: function() {
			return o.TType;
		}
	}), Object.defineProperty(e, "TUnion", {
		enumerable: !0,
		get: function() {
			return o.TUnion;
		}
	}), Object.defineProperty(e, "TIntersection", {
		enumerable: !0,
		get: function() {
			return o.TIntersection;
		}
	}), Object.defineProperty(e, "array", {
		enumerable: !0,
		get: function() {
			return o.array;
		}
	}), Object.defineProperty(e, "enumlit", {
		enumerable: !0,
		get: function() {
			return o.enumlit;
		}
	}), Object.defineProperty(e, "enumtype", {
		enumerable: !0,
		get: function() {
			return o.enumtype;
		}
	}), Object.defineProperty(e, "func", {
		enumerable: !0,
		get: function() {
			return o.func;
		}
	}), Object.defineProperty(e, "iface", {
		enumerable: !0,
		get: function() {
			return o.iface;
		}
	}), Object.defineProperty(e, "lit", {
		enumerable: !0,
		get: function() {
			return o.lit;
		}
	}), Object.defineProperty(e, "name", {
		enumerable: !0,
		get: function() {
			return o.name;
		}
	}), Object.defineProperty(e, "opt", {
		enumerable: !0,
		get: function() {
			return o.opt;
		}
	}), Object.defineProperty(e, "param", {
		enumerable: !0,
		get: function() {
			return o.param;
		}
	}), Object.defineProperty(e, "tuple", {
		enumerable: !0,
		get: function() {
			return o.tuple;
		}
	}), Object.defineProperty(e, "union", {
		enumerable: !0,
		get: function() {
			return o.union;
		}
	}), Object.defineProperty(e, "intersection", {
		enumerable: !0,
		get: function() {
			return o.intersection;
		}
	}), Object.defineProperty(e, "BasicType", {
		enumerable: !0,
		get: function() {
			return o.BasicType;
		}
	});
	var s = oo();
	Object.defineProperty(e, "VError", {
		enumerable: !0,
		get: function() {
			return s.VError;
		}
	});
	function c() {
		for (var e = [...arguments], t = Object.assign.apply(Object, r([{}, i.basicTypes], e)), n = {}, a = 0, o = e; a < o.length; a++) for (var s = o[a], c = 0, u = Object.keys(s); c < u.length; c++) {
			var d = u[c];
			n[d] = new l(t, s[d]);
		}
		return n;
	}
	e.createCheckers = c;
	var l = function() {
		function e(e, t, n) {
			if (n === void 0 && (n = "value"), this.suite = e, this.ttype = t, this._path = n, this.props = /* @__PURE__ */ new Map(), t instanceof i.TIface) for (var r = 0, a = t.props; r < a.length; r++) {
				var o = a[r];
				this.props.set(o.name, o.ttype);
			}
			this.checkerPlain = this.ttype.getChecker(e, !1), this.checkerStrict = this.ttype.getChecker(e, !0);
		}
		return e.prototype.setReportedPath = function(e) {
			this._path = e;
		}, e.prototype.check = function(e) {
			return this._doCheck(this.checkerPlain, e);
		}, e.prototype.test = function(e) {
			return this.checkerPlain(e, new a.NoopContext());
		}, e.prototype.validate = function(e) {
			return this._doValidate(this.checkerPlain, e);
		}, e.prototype.strictCheck = function(e) {
			return this._doCheck(this.checkerStrict, e);
		}, e.prototype.strictTest = function(e) {
			return this.checkerStrict(e, new a.NoopContext());
		}, e.prototype.strictValidate = function(e) {
			return this._doValidate(this.checkerStrict, e);
		}, e.prototype.getProp = function(t) {
			var n = this.props.get(t);
			if (!n) throw Error("Type has no property " + t);
			return new e(this.suite, n, this._path + "." + t);
		}, e.prototype.methodArgs = function(t) {
			var n = this._getMethod(t);
			return new e(this.suite, n.paramList);
		}, e.prototype.methodResult = function(t) {
			var n = this._getMethod(t);
			return new e(this.suite, n.result);
		}, e.prototype.getArgs = function() {
			if (!(this.ttype instanceof i.TFunc)) throw Error("getArgs() applied to non-function");
			return new e(this.suite, this.ttype.paramList);
		}, e.prototype.getResult = function() {
			if (!(this.ttype instanceof i.TFunc)) throw Error("getResult() applied to non-function");
			return new e(this.suite, this.ttype.result);
		}, e.prototype.getType = function() {
			return this.ttype;
		}, e.prototype._doCheck = function(e, t) {
			if (!e(t, new a.NoopContext())) {
				var n = new a.DetailContext();
				throw e(t, n), n.getError(this._path);
			}
		}, e.prototype._doValidate = function(e, t) {
			if (e(t, new a.NoopContext())) return null;
			var n = new a.DetailContext();
			return e(t, n), n.getErrorDetail(this._path);
		}, e.prototype._getMethod = function(e) {
			var t = this.props.get(e);
			if (!t) throw Error("Type has no property " + e);
			if (!(t instanceof i.TFunc)) throw Error("Property " + e + " is not a method");
			return t;
		}, e;
	}();
	e.Checker = l;
})))()), lo = {
	Transform: co.union(co.lit("jsx"), co.lit("typescript"), co.lit("flow"), co.lit("imports"), co.lit("react-hot-loader"), co.lit("jest")),
	SourceMapOptions: co.iface([], { compiledFilename: "string" }),
	Options: co.iface([], {
		transforms: co.array("Transform"),
		disableESTransforms: co.opt("boolean"),
		jsxRuntime: co.opt(co.union(co.lit("classic"), co.lit("automatic"), co.lit("preserve"))),
		production: co.opt("boolean"),
		jsxImportSource: co.opt("string"),
		jsxPragma: co.opt("string"),
		jsxFragmentPragma: co.opt("string"),
		keepUnusedImports: co.opt("boolean"),
		preserveDynamicImport: co.opt("boolean"),
		injectCreateRequireForImportRequire: co.opt("boolean"),
		enableLegacyTypeScriptModuleInterop: co.opt("boolean"),
		enableLegacyBabel5ModuleInterop: co.opt("boolean"),
		sourceMapOptions: co.opt("SourceMapOptions"),
		filePath: co.opt("string")
	})
}, { Options: uo } = (0, co.createCheckers)(lo);
function fo(e) {
	uo.strictCheck(e);
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/traverser/lval.js
function po() {
	q(), jc(!1);
}
function mo(e) {
	q(), vo(e);
}
function ho(e) {
	$(), _o(e);
}
function go() {
	$(), V.tokens[V.tokens.length - 1].identifierRole = K.ImportDeclaration;
}
function _o(e) {
	let t;
	t = V.scopeDepth === 0 ? K.TopLevelDeclaration : e ? K.BlockScopedDeclaration : K.FunctionScopedDeclaration, V.tokens[V.tokens.length - 1].identifierRole = t;
}
function vo(e) {
	switch (V.type) {
		case z._this: {
			let e = J(0);
			q(), Y(e);
			return;
		}
		case z._yield:
		case z.name:
			V.type = z.name, ho(e);
			return;
		case z.bracketL:
			q(), yo(z.bracketR, e, !0);
			return;
		case z.braceL:
			sl(!0, e);
			return;
		default: G();
	}
}
function yo(e, t, n = !1, r = !1, i = 0) {
	let a = !0, o = !1, s = V.tokens.length;
	for (; !X(e) && !V.error;) if (a ? a = !1 : (W(z.comma), V.tokens[V.tokens.length - 1].contextId = i, !o && V.tokens[s].isType && (V.tokens[V.tokens.length - 1].isType = !0, o = !0)), !(n && Z(z.comma))) {
		if (X(e)) break;
		if (Z(z.ellipsis)) {
			mo(t), xo(), X(z.comma), W(e);
			break;
		}
		bo(r, t);
	}
}
function bo(e, t) {
	e && Eo([
		R._public,
		R._protected,
		R._private,
		R._readonly,
		R._override
	]), So(t), xo(), So(t, !0);
}
function xo() {
	Wr ? ku() : Ur && dc();
}
function So(e, t = !1) {
	if (t || vo(e), !X(z.eq)) return;
	let n = V.tokens.length - 1;
	jc(), V.tokens[n].rhsEndIndex = V.tokens.length;
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/plugins/typescript.js
function Co() {
	return Z(z.name);
}
function wo() {
	return Z(z.name) || !!(V.type & z.IS_KEYWORD) || Z(z.string) || Z(z.num) || Z(z.bigint) || Z(z.decimal);
}
function To() {
	let e = V.snapshot();
	return q(), (Z(z.bracketL) || Z(z.braceL) || Z(z.star) || Z(z.ellipsis) || Z(z.hash) || wo()) && !ti() ? !0 : (V.restoreFromSnapshot(e), !1);
}
function Eo(e) {
	for (; Do(e) !== null;);
}
function Do(e) {
	if (!Z(z.name)) return null;
	let t = V.contextualKeyword;
	if (e.indexOf(t) !== -1 && To()) {
		switch (t) {
			case R._readonly:
				V.tokens[V.tokens.length - 1].type = z._readonly;
				break;
			case R._abstract:
				V.tokens[V.tokens.length - 1].type = z._abstract;
				break;
			case R._static:
				V.tokens[V.tokens.length - 1].type = z._static;
				break;
			case R._public:
				V.tokens[V.tokens.length - 1].type = z._public;
				break;
			case R._private:
				V.tokens[V.tokens.length - 1].type = z._private;
				break;
			case R._protected:
				V.tokens[V.tokens.length - 1].type = z._protected;
				break;
			case R._override:
				V.tokens[V.tokens.length - 1].type = z._override;
				break;
			case R._declare: V.tokens[V.tokens.length - 1].type = z._declare;
		}
		return t;
	}
	return null;
}
function Oo() {
	for ($(); X(z.dot);) $();
}
function ko() {
	Oo(), !ti() && Z(z.lessThan) && Ws();
}
function Ao() {
	q(), vs();
}
function jo() {
	q();
}
function Mo() {
	W(z._typeof), Z(z._import) ? No() : Oo(), !ti() && Z(z.lessThan) && Ws();
}
function No() {
	W(z._import), W(z.parenL), W(z.string), W(z.parenR), X(z.dot) && Oo(), Z(z.lessThan) && Ws();
}
function Po() {
	X(z._const);
	let e = X(z._in), t = Qr(R._out);
	X(z._const), (e || t) && !Z(z.name) ? V.tokens[V.tokens.length - 1].type = z.name : $(), X(z._extends) && ys(), X(z.eq) && ys();
}
function Fo() {
	Z(z.lessThan) && Io();
}
function Io() {
	let e = J(0);
	for (Z(z.lessThan) || Z(z.typeParameterStart) ? q() : G(); !X(z.greaterThan) && !V.error;) Po(), X(z.comma);
	Y(e);
}
function Lo(e) {
	let t = e === z.arrow;
	Fo(), W(z.parenL), V.scopeDepth++, Ro(!1), V.scopeDepth--, (t || Z(e)) && ps(e);
}
function Ro(e) {
	yo(z.parenR, e);
}
function zo() {
	X(z.comma) || ii();
}
function Bo() {
	Lo(z.colon), zo();
}
function Vo() {
	let e = V.snapshot();
	q();
	let t = X(z.name) && Z(z.colon);
	return V.restoreFromSnapshot(e), t;
}
function Ho() {
	if (!(Z(z.bracketL) && Vo())) return !1;
	let e = J(0);
	return W(z.bracketL), $(), vs(), W(z.bracketR), hs(), zo(), Y(e), !0;
}
function Uo(e) {
	X(z.question), !e && (Z(z.parenL) || Z(z.lessThan)) ? (Lo(z.colon), zo()) : (hs(), zo());
}
function Wo() {
	if (Z(z.parenL) || Z(z.lessThan)) {
		Bo();
		return;
	}
	if (Z(z._new)) {
		q(), Z(z.parenL) || Z(z.lessThan) ? Bo() : Uo(!1);
		return;
	}
	let e = !!Do([R._readonly]);
	Ho() || ((U(R._get) || U(R._set)) && To(), fl(-1), Uo(e));
}
function Go() {
	Ko();
}
function Ko() {
	for (W(z.braceL); !X(z.braceR) && !V.error;) Wo();
}
function qo() {
	let e = V.snapshot(), t = Jo();
	return V.restoreFromSnapshot(e), t;
}
function Jo() {
	return q(), X(z.plus) || X(z.minus) ? U(R._readonly) : (U(R._readonly) && q(), !Z(z.bracketL) || (q(), !Co()) ? !1 : (q(), Z(z._in)));
}
function Yo() {
	$(), W(z._in), ys();
}
function Xo() {
	W(z.braceL), Z(z.plus) || Z(z.minus) ? (q(), $r(R._readonly)) : Qr(R._readonly), W(z.bracketL), Yo(), Qr(R._as) && ys(), W(z.bracketR), Z(z.plus) || Z(z.minus) ? (q(), W(z.question)) : X(z.question), gs(), ii(), W(z.braceR);
}
function Zo() {
	for (W(z.bracketL); !X(z.bracketR) && !V.error;) Qo(), X(z.comma);
}
function Qo() {
	X(z.ellipsis) ? ys() : (ys(), X(z.question)), X(z.colon) && ys();
}
function $o() {
	W(z.parenL), ys(), W(z.parenR);
}
function es() {
	for (xi(), xi(); !Z(z.backQuote) && !V.error;) W(z.dollarBraceL), ys(), xi(), xi();
	q();
}
var ts;
(function(e) {
	e[e.TSFunctionType = 0] = "TSFunctionType", e[e.TSConstructorType = 1] = "TSConstructorType", e[e.TSAbstractConstructorType = 2] = "TSAbstractConstructorType";
})(ts ||= {});
function ns(e) {
	e === ts.TSAbstractConstructorType && $r(R._abstract), (e === ts.TSConstructorType || e === ts.TSAbstractConstructorType) && W(z._new);
	let t = V.inDisallowConditionalTypesContext;
	V.inDisallowConditionalTypesContext = !1, Lo(z.arrow), V.inDisallowConditionalTypesContext = t;
}
function rs() {
	switch (V.type) {
		case z.name:
			ko();
			return;
		case z._void:
		case z._null:
			q();
			return;
		case z.string:
		case z.num:
		case z.bigint:
		case z.decimal:
		case z._true:
		case z._false:
			Qc();
			return;
		case z.minus:
			q(), Qc();
			return;
		case z._this:
			jo(), U(R._is) && !ti() && Ao();
			return;
		case z._typeof:
			Mo();
			return;
		case z._import:
			No();
			return;
		case z.braceL:
			qo() ? Xo() : Go();
			return;
		case z.bracketL:
			Zo();
			return;
		case z.parenL:
			$o();
			return;
		case z.backQuote:
			es();
			return;
		default: if (V.type & z.IS_KEYWORD) {
			q(), V.tokens[V.tokens.length - 1].type = z.name;
			return;
		}
	}
	G();
}
function is() {
	for (rs(); !ti() && X(z.bracketL);) X(z.bracketR) || (ys(), W(z.bracketR));
}
function as() {
	if ($r(R._infer), $(), Z(z._extends)) {
		let e = V.snapshot();
		W(z._extends);
		let t = V.inDisallowConditionalTypesContext;
		V.inDisallowConditionalTypesContext = !0, ys(), V.inDisallowConditionalTypesContext = t, (V.error || !V.inDisallowConditionalTypesContext && Z(z.question)) && V.restoreFromSnapshot(e);
	}
}
function os() {
	if (U(R._keyof) || U(R._unique) || U(R._readonly)) q(), os();
	else if (U(R._infer)) as();
	else {
		let e = V.inDisallowConditionalTypesContext;
		V.inDisallowConditionalTypesContext = !1, is(), V.inDisallowConditionalTypesContext = e;
	}
}
function ss() {
	if (X(z.bitwiseAND), os(), Z(z.bitwiseAND)) for (; X(z.bitwiseAND);) os();
}
function cs() {
	if (X(z.bitwiseOR), ss(), Z(z.bitwiseOR)) for (; X(z.bitwiseOR);) ss();
}
function ls() {
	return Z(z.lessThan) ? !0 : Z(z.parenL) && ds();
}
function us() {
	if (Z(z.name) || Z(z._this)) return q(), !0;
	if (Z(z.braceL) || Z(z.bracketL)) {
		let e = 1;
		for (q(); e > 0 && !V.error;) Z(z.braceL) || Z(z.bracketL) ? e++ : (Z(z.braceR) || Z(z.bracketR)) && e--, q();
		return !0;
	}
	return !1;
}
function ds() {
	let e = V.snapshot(), t = fs();
	return V.restoreFromSnapshot(e), t;
}
function fs() {
	return q(), !!(Z(z.parenR) || Z(z.ellipsis) || us() && (Z(z.colon) || Z(z.comma) || Z(z.question) || Z(z.eq) || Z(z.parenR) && (q(), Z(z.arrow))));
}
function ps(e) {
	let t = J(0);
	W(e), _s() || ys(), Y(t);
}
function ms() {
	Z(z.colon) && ps(z.colon);
}
function hs() {
	Z(z.colon) && vs();
}
function gs() {
	X(z.colon) && ys();
}
function _s() {
	let e = V.snapshot();
	return U(R._asserts) ? (q(), Qr(R._is) ? (ys(), !0) : Co() || Z(z._this) ? (q(), Qr(R._is) && ys(), !0) : (V.restoreFromSnapshot(e), !1)) : Co() || Z(z._this) ? (q(), U(R._is) && !ti() ? (q(), ys(), !0) : (V.restoreFromSnapshot(e), !1)) : !1;
}
function vs() {
	let e = J(0);
	W(z.colon), ys(), Y(e);
}
function ys() {
	if (xs(), V.inDisallowConditionalTypesContext || ti() || !X(z._extends)) return;
	let e = V.inDisallowConditionalTypesContext;
	V.inDisallowConditionalTypesContext = !0, xs(), V.inDisallowConditionalTypesContext = e, W(z.question), ys(), W(z.colon), ys();
}
function bs() {
	return U(R._abstract) && wi() === z._new;
}
function xs() {
	ls() ? ns(ts.TSFunctionType) : Z(z._new) ? ns(ts.TSConstructorType) : bs() ? ns(ts.TSAbstractConstructorType) : cs();
}
function Ss() {
	let e = J(1);
	ys(), W(z.greaterThan), Y(e), Rc();
}
function Cs() {
	if (X(z.jsxTagStart)) {
		V.tokens[V.tokens.length - 1].type = z.typeParameterStart;
		let e = J(1);
		for (; !Z(z.greaterThan) && !V.error;) ys(), X(z.comma);
		Tc(), Y(e);
	}
}
function ws() {
	for (; !Z(z.braceL) && !V.error;) Ts(), X(z.comma);
}
function Ts() {
	Oo(), Z(z.lessThan) && Ws();
}
function Es() {
	ho(!1), Fo(), X(z._extends) && ws(), Ko();
}
function Ds() {
	ho(!1), Fo(), W(z.eq), ys(), ii();
}
function Os() {
	if (Z(z.string) ? Qc() : $(), X(z.eq)) {
		let e = V.tokens.length - 1;
		jc(), V.tokens[e].rhsEndIndex = V.tokens.length;
	}
}
function ks() {
	for (ho(!1), W(z.braceL); !X(z.braceR) && !V.error;) Os(), X(z.comma);
}
function As() {
	W(z.braceL), gd(z.braceR);
}
function js() {
	ho(!1), X(z.dot) ? js() : As();
}
function Ms() {
	U(R._global) ? $() : Z(z.string) ? Yc() : G(), Z(z.braceL) ? As() : ii();
}
function Ns() {
	go(), W(z.eq), Fs(), ii();
}
function Ps() {
	return U(R._require) && wi() === z.parenL;
}
function Fs() {
	Ps() ? Is() : Oo();
}
function Is() {
	$r(R._require), W(z.parenL), Z(z.string) || G(), Qc(), W(z.parenR);
}
function Ls() {
	if (ri()) return !1;
	switch (V.type) {
		case z._function: {
			let e = J(1);
			q();
			let t = V.start;
			return xd(t, !0), Y(e), !0;
		}
		case z._class: {
			let e = J(1);
			return Cd(!0, !1), Y(e), !0;
		}
		case z._const: if (Z(z._const) && Zr(R._enum)) {
			let e = J(1);
			return W(z._const), $r(R._enum), V.tokens[V.tokens.length - 1].type = z._enum, ks(), Y(e), !0;
		}
		case z._var:
		case z._let: {
			let e = J(1);
			return ud(V.type !== z._var), Y(e), !0;
		}
		case z.name: {
			let e = J(1), t = V.contextualKeyword, n = !1;
			return t === R._global ? (Ms(), n = !0) : n = Bs(t, !0), Y(e), n;
		}
		default: return !1;
	}
}
function Rs() {
	return Bs(V.contextualKeyword, !0);
}
function zs(e) {
	switch (e) {
		case R._declare: {
			let e = V.tokens.length - 1;
			if (Ls()) return V.tokens[e].type = z._declare, !0;
			break;
		}
		case R._global:
			if (Z(z.braceL)) return As(), !0;
			break;
		default: return Bs(e, !1);
	}
	return !1;
}
function Bs(e, t) {
	switch (e) {
		case R._abstract:
			if (Vs(t) && Z(z._class)) return V.tokens[V.tokens.length - 1].type = z._abstract, Cd(!0, !1), !0;
			break;
		case R._enum:
			if (Vs(t) && Z(z.name)) return V.tokens[V.tokens.length - 1].type = z._enum, ks(), !0;
			break;
		case R._interface:
			if (Vs(t) && Z(z.name)) {
				let e = J(t ? 2 : 1);
				return Es(), Y(e), !0;
			}
			break;
		case R._module:
			if (Vs(t)) {
				if (Z(z.string)) {
					let e = J(t ? 2 : 1);
					return Ms(), Y(e), !0;
				}
				if (Z(z.name)) {
					let e = J(t ? 2 : 1);
					return js(), Y(e), !0;
				}
			}
			break;
		case R._namespace:
			if (Vs(t) && Z(z.name)) {
				let e = J(t ? 2 : 1);
				return js(), Y(e), !0;
			}
			break;
		case R._type: if (Vs(t) && Z(z.name)) {
			let e = J(t ? 2 : 1);
			return Ds(), Y(e), !0;
		}
	}
	return !1;
}
function Vs(e) {
	return e ? (q(), !0) : !ri();
}
function Hs() {
	let e = V.snapshot();
	return Io(), Sd(), ms(), W(z.arrow), V.error ? (V.restoreFromSnapshot(e), !1) : (gl(!0), !0);
}
function Us() {
	V.type === z.bitShiftL && (--V.pos, Q(z.lessThan)), Ws();
}
function Ws() {
	let e = J(0);
	for (W(z.lessThan); !Z(z.greaterThan) && !V.error;) ys(), X(z.comma);
	e ? (W(z.greaterThan), Y(e)) : (Y(e), Ui(), W(z.greaterThan), V.tokens[V.tokens.length - 1].isType = !0);
}
function Gs() {
	if (Z(z.name)) switch (V.contextualKeyword) {
		case R._abstract:
		case R._declare:
		case R._enum:
		case R._interface:
		case R._module:
		case R._namespace:
		case R._type: return !0;
	}
	return !1;
}
function Ks(e, t) {
	if (Z(z.colon) && ps(z.colon), !Z(z.braceL) && ri()) {
		let t = V.tokens.length - 1;
		for (; t >= 0 && (V.tokens[t].start >= e || V.tokens[t].type === z._default || V.tokens[t].type === z._export);) V.tokens[t].isType = !0, t--;
	} else gl(!1, t);
}
function qs(e, t, n) {
	if (!ti() && X(z.bang)) V.tokens[V.tokens.length - 1].type = z.nonNullAssertion;
	else {
		if (Z(z.lessThan) || Z(z.bitShiftL)) {
			let n = V.snapshot();
			if (!t && Wc() && Hs()) return;
			if (Us(), !t && X(z.parenL) ? (V.tokens[V.tokens.length - 1].subscriptStartIndex = e, Gc()) : Z(z.backQuote) ? ol() : (V.type === z.greaterThan || V.type !== z.parenL && V.type & z.IS_EXPRESSION_START && !ti()) && G(), V.error) V.restoreFromSnapshot(n);
			else return;
		} else !t && Z(z.questionDot) && wi() === z.lessThan && (q(), V.tokens[e].isOptionalChainStart = !0, V.tokens[V.tokens.length - 1].subscriptStartIndex = e, Ws(), W(z.parenL), Gc());
		Uc(e, t, n);
	}
}
function Js() {
	if (X(z._import)) return U(R._type) && wi() !== z.eq && $r(R._type), Ns(), !0;
	if (X(z.eq)) return Ac(), ii(), !0;
	if (Qr(R._as)) return $r(R._namespace), $(), ii(), !0;
	if (U(R._type)) {
		let e = wi();
		(e === z.braceL || e === z.star) && q();
	}
	return !1;
}
function Ys() {
	$(), Z(z.comma) || Z(z.braceR) ? V.tokens[V.tokens.length - 1].identifierRole = K.ImportDeclaration : ($(), Z(z.comma) || Z(z.braceR) ? (V.tokens[V.tokens.length - 1].identifierRole = K.ImportDeclaration, V.tokens[V.tokens.length - 2].isType = !0, V.tokens[V.tokens.length - 1].isType = !0) : ($(), Z(z.comma) || Z(z.braceR) ? (V.tokens[V.tokens.length - 3].identifierRole = K.ImportAccess, V.tokens[V.tokens.length - 1].identifierRole = K.ImportDeclaration) : ($(), V.tokens[V.tokens.length - 3].identifierRole = K.ImportAccess, V.tokens[V.tokens.length - 1].identifierRole = K.ImportDeclaration, V.tokens[V.tokens.length - 4].isType = !0, V.tokens[V.tokens.length - 3].isType = !0, V.tokens[V.tokens.length - 2].isType = !0, V.tokens[V.tokens.length - 1].isType = !0)));
}
function Xs() {
	$(), Z(z.comma) || Z(z.braceR) ? V.tokens[V.tokens.length - 1].identifierRole = K.ExportAccess : ($(), Z(z.comma) || Z(z.braceR) ? (V.tokens[V.tokens.length - 1].identifierRole = K.ExportAccess, V.tokens[V.tokens.length - 2].isType = !0, V.tokens[V.tokens.length - 1].isType = !0) : ($(), Z(z.comma) || Z(z.braceR) ? V.tokens[V.tokens.length - 3].identifierRole = K.ExportAccess : ($(), V.tokens[V.tokens.length - 3].identifierRole = K.ExportAccess, V.tokens[V.tokens.length - 4].isType = !0, V.tokens[V.tokens.length - 3].isType = !0, V.tokens[V.tokens.length - 2].isType = !0, V.tokens[V.tokens.length - 1].isType = !0)));
}
function Zs() {
	if (U(R._abstract) && wi() === z._class) return V.type = z._abstract, q(), Cd(!0, !0), !0;
	if (U(R._interface)) {
		let e = J(2);
		return Bs(R._interface, !0), Y(e), !0;
	}
	return !1;
}
function Qs() {
	if (V.type === z._const) {
		let e = Ei();
		if (e.type === z.name && e.contextualKeyword === R._enum) return W(z._const), $r(R._enum), V.tokens[V.tokens.length - 1].type = z._enum, ks(), !0;
	}
	return !1;
}
function $s(e) {
	let t = V.tokens.length;
	Eo([
		R._abstract,
		R._readonly,
		R._declare,
		R._static,
		R._override
	]);
	let n = V.tokens.length;
	if (Ho()) {
		let r = e ? t - 1 : t;
		for (let e = r; e < n; e++) V.tokens[e].isType = !0;
		return !0;
	}
	return !1;
}
function ec(e) {
	zs(e) || ii();
}
function tc() {
	let e = Qr(R._declare);
	e && (V.tokens[V.tokens.length - 1].type = z._declare);
	let t = !1;
	if (Z(z.name)) {
		if (e) {
			let e = J(2);
			t = Rs(), Y(e);
		} else t = Rs();
	}
	if (!t) {
		if (e) {
			let e = J(2);
			Wu(!0), Y(e);
		} else Wu(!0);
	}
}
function nc(e) {
	if (e && (Z(z.lessThan) || Z(z.bitShiftL)) && Us(), Qr(R._implements)) {
		V.tokens[V.tokens.length - 1].type = z._implements;
		let e = J(1);
		ws(), Y(e);
	}
}
function rc() {
	Fo();
}
function ic() {
	Fo();
}
function ac() {
	let e = J(0);
	ti() || X(z.bang), hs(), Y(e);
}
function oc() {
	Z(z.colon) && vs();
}
function sc(e, t) {
	return Hr ? cc(e, t) : lc(e, t);
}
function cc(e, t) {
	if (!Z(z.lessThan)) return Mc(e, t);
	let n = V.snapshot(), r = Mc(e, t);
	if (V.error) V.restoreFromSnapshot(n);
	else return r;
	return V.type = z.typeParameterStart, Io(), r = Mc(e, t), r || G(), r;
}
function lc(e, t) {
	if (!Z(z.lessThan)) return Mc(e, t);
	let n = V.snapshot();
	Io();
	let r = Mc(e, t);
	if (r || G(), V.error) V.restoreFromSnapshot(n);
	else return r;
	return Mc(e, t);
}
function uc() {
	if (Z(z.colon)) {
		let e = V.snapshot();
		ps(z.colon), ei() && G(), Z(z.arrow) || G(), V.error && V.restoreFromSnapshot(e);
	}
	return X(z.arrow);
}
function dc() {
	let e = J(0);
	X(z.question), hs(), Y(e);
}
function fc() {
	(Z(z.lessThan) || Z(z.bitShiftL)) && Us(), Xu();
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/plugins/jsx/index.js
function pc() {
	let e = !1, t = !1;
	for (;;) {
		if (V.pos >= H.length) {
			G("Unterminated JSX contents");
			return;
		}
		let n = H.charCodeAt(V.pos);
		if (n === B.lessThan || n === B.leftCurlyBrace) {
			if (V.pos === V.start) {
				if (n === B.lessThan) {
					V.pos++, Q(z.jsxTagStart);
					return;
				}
				Ki(n);
				return;
			}
			Q(e && !t ? z.jsxEmptyText : z.jsxText);
			return;
		}
		n === B.lineFeed ? e = !0 : n !== B.space && n !== B.carriageReturn && n !== B.tab && (t = !0), V.pos++;
	}
}
function mc(e) {
	for (V.pos++;;) {
		if (V.pos >= H.length) {
			G("Unterminated string constant");
			return;
		}
		if (H.charCodeAt(V.pos) === e) {
			V.pos++;
			break;
		}
		V.pos++;
	}
	Q(z.string);
}
function hc() {
	let e;
	do {
		if (V.pos > H.length) {
			G("Unexpectedly reached the end of input.");
			return;
		}
		e = H.charCodeAt(++V.pos);
	} while (li[e] || e === B.dash);
	Q(z.jsxName);
}
function gc() {
	Tc();
}
function _c(e) {
	gc(), X(z.colon) ? gc() : V.tokens[V.tokens.length - 1].identifierRole = e;
}
function vc() {
	let e = V.tokens.length;
	_c(K.Access);
	let t = !1;
	for (; Z(z.dot);) t = !0, Tc(), gc();
	if (!t) {
		let t = V.tokens[e], n = H.charCodeAt(t.start);
		n >= B.lowercaseA && n <= B.lowercaseZ && (t.identifierRole = null);
	}
}
function yc() {
	switch (V.type) {
		case z.braceL:
			q(), Ac(), Tc();
			return;
		case z.jsxTagStart:
			wc(), Tc();
			return;
		case z.string:
			Tc();
			return;
		default: G("JSX value should be either an expression or a quoted JSX text");
	}
}
function bc() {
	W(z.ellipsis), Ac();
}
function xc(e) {
	if (Z(z.jsxTagEnd)) return !1;
	vc(), Ur && Cs();
	let t = !1;
	for (; !Z(z.slash) && !Z(z.jsxTagEnd) && !V.error;) X(z.braceL) ? (t = !0, W(z.ellipsis), jc(), Tc()) : (t && V.end - V.start === 3 && H.charCodeAt(V.start) === B.lowercaseK && H.charCodeAt(V.start + 1) === B.lowercaseE && H.charCodeAt(V.start + 2) === B.lowercaseY && (V.tokens[e].jsxRole = pi.KeyAfterPropSpread), _c(K.ObjectKey), Z(z.eq) && (Tc(), yc()));
	let n = Z(z.slash);
	return n && Tc(), n;
}
function Sc() {
	Z(z.jsxTagEnd) || vc();
}
function Cc() {
	let e = V.tokens.length - 1;
	V.tokens[e].jsxRole = pi.NoChildren;
	let t = 0;
	if (!xc(e)) for (Ec();;) switch (V.type) {
		case z.jsxTagStart:
			if (Tc(), Z(z.slash)) {
				Tc(), Sc(), V.tokens[e].jsxRole !== pi.KeyAfterPropSpread && (t === 1 ? V.tokens[e].jsxRole = pi.OneChild : t > 1 && (V.tokens[e].jsxRole = pi.StaticChildren));
				return;
			}
			t++, Cc(), Ec();
			break;
		case z.jsxText:
			t++, Ec();
			break;
		case z.jsxEmptyText:
			Ec();
			break;
		case z.braceL:
			q(), Z(z.ellipsis) ? (bc(), Ec(), t += 2) : (Z(z.braceR) || (t++, Ac()), Ec());
			break;
		// istanbul ignore next - should never happen
		default:
			G();
			return;
	}
}
function wc() {
	Tc(), Cc();
}
function Tc() {
	V.tokens.push(new bi()), Pi(), V.start = V.pos;
	let e = H.charCodeAt(V.pos);
	if (ui[e]) hc();
	else if (e === B.quotationMark || e === B.apostrophe) mc(e);
	else switch (++V.pos, e) {
		case B.greaterThan:
			Q(z.jsxTagEnd);
			break;
		case B.lessThan:
			Q(z.jsxTagStart);
			break;
		case B.slash:
			Q(z.slash);
			break;
		case B.equalsTo:
			Q(z.eq);
			break;
		case B.leftCurlyBrace:
			Q(z.braceL);
			break;
		case B.dot:
			Q(z.dot);
			break;
		case B.colon:
			Q(z.colon);
			break;
		default: G();
	}
}
function Ec() {
	V.tokens.push(new bi()), V.start = V.pos, pc();
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/plugins/types.js
function Dc(e) {
	if (Z(z.question)) {
		let e = wi();
		if (e === z.colon || e === z.comma || e === z.parenR) return;
	}
	Fc(e);
}
function Oc() {
	Ci(z.question), Z(z.colon) && (Ur ? vs() : Wr && pu());
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/traverser/expression.js
var kc = class {
	constructor(e) {
		this.stop = e;
	}
};
function Ac(e = !1) {
	if (jc(e), Z(z.comma)) for (; X(z.comma);) jc(e);
}
function jc(e = !1, t = !1) {
	return Ur ? sc(e, t) : Wr ? Fu(e, t) : Mc(e, t);
}
function Mc(e, t) {
	if (Z(z._yield)) return bl(), !1;
	(Z(z.parenL) || Z(z.name) || Z(z._yield)) && (V.potentialArrowAt = V.start);
	let n = Nc(e);
	return t && rl(), V.type & z.IS_ASSIGN ? (q(), jc(e), !1) : n;
}
function Nc(e) {
	return Ic(e) ? !0 : (Pc(e), !1);
}
function Pc(e) {
	Ur || Wr ? Dc(e) : Fc(e);
}
function Fc(e) {
	X(z.question) && (jc(), W(z.colon), jc(e));
}
function Ic(e) {
	let t = V.tokens.length;
	return Rc() ? !0 : (Lc(t, -1, e), !1);
}
function Lc(e, t, n) {
	if (Ur && (z._in & z.PRECEDENCE_MASK) > t && !ti() && (Qr(R._as) || Qr(R._satisfies))) {
		let r = J(1);
		ys(), Y(r), Ui(), Lc(e, t, n);
		return;
	}
	let r = V.type & z.PRECEDENCE_MASK;
	if (r > 0 && (!n || !Z(z._in)) && r > t) {
		let i = V.type;
		q(), i === z.nullishCoalescing && (V.tokens[V.tokens.length - 1].nullishStartIndex = e);
		let a = V.tokens.length;
		Rc(), Lc(a, i & z.IS_RIGHT_ASSOCIATIVE ? r - 1 : r, n), i === z.nullishCoalescing && (V.tokens[e].numNullishCoalesceStarts++, V.tokens[V.tokens.length - 1].numNullishCoalesceEnds++), Lc(e, t, n);
	}
}
function Rc() {
	if (Ur && !Hr && X(z.lessThan)) return Ss(), !1;
	if (U(R._module) && ki() === B.leftCurlyBrace && !ni()) return xl(), !1;
	if (V.type & z.IS_PREFIX) return q(), Rc(), !1;
	if (zc()) return !0;
	for (; V.type & z.IS_POSTFIX && !ei();) V.type === z.preIncDec && (V.type = z.postIncDec), q();
	return !1;
}
function zc() {
	let e = V.tokens.length;
	return Yc() ? !0 : (Bc(e), V.tokens.length > e && V.tokens[e].isOptionalChainStart && (V.tokens[V.tokens.length - 1].isOptionalChainEnd = !0), !1);
}
function Bc(e, t = !1) {
	Wr ? Lu(e, t) : Vc(e, t);
}
function Vc(e, t = !1) {
	let n = new kc(!1);
	do
		Hc(e, t, n);
	while (!n.stop && !V.error);
}
function Hc(e, t, n) {
	Ur ? qs(e, t, n) : Wr ? _u(e, t, n) : Uc(e, t, n);
}
function Uc(e, t, n) {
	if (!t && X(z.doubleColon)) Jc(), n.stop = !0, Bc(e, t);
	else if (Z(z.questionDot)) {
		if (V.tokens[e].isOptionalChainStart = !0, t && wi() === z.parenL) {
			n.stop = !0;
			return;
		}
		q(), V.tokens[V.tokens.length - 1].subscriptStartIndex = e, X(z.bracketL) ? (Ac(), W(z.bracketR)) : X(z.parenL) ? Gc() : Xc();
	} else if (X(z.dot)) V.tokens[V.tokens.length - 1].subscriptStartIndex = e, Xc();
	else if (X(z.bracketL)) V.tokens[V.tokens.length - 1].subscriptStartIndex = e, Ac(), W(z.bracketR);
	else if (!t && Z(z.parenL)) {
		if (Wc()) {
			let t = V.snapshot(), r = V.tokens.length;
			q(), V.tokens[V.tokens.length - 1].subscriptStartIndex = e;
			let i = Kr();
			V.tokens[V.tokens.length - 1].contextId = i, Gc(), V.tokens[V.tokens.length - 1].contextId = i, Kc() && (V.restoreFromSnapshot(t), n.stop = !0, V.scopeDepth++, Sd(), qc(r));
		} else {
			q(), V.tokens[V.tokens.length - 1].subscriptStartIndex = e;
			let t = Kr();
			V.tokens[V.tokens.length - 1].contextId = t, Gc(), V.tokens[V.tokens.length - 1].contextId = t;
		}
	} else Z(z.backQuote) ? ol() : n.stop = !0;
}
function Wc() {
	return V.tokens[V.tokens.length - 1].contextualKeyword === R._async && !ei();
}
function Gc() {
	let e = !0;
	for (; !X(z.parenR) && !V.error;) {
		if (e) e = !1;
		else if (W(z.comma), X(z.parenR)) break;
		vl(!1);
	}
}
function Kc() {
	return Z(z.colon) || Z(z.arrow);
}
function qc(e) {
	Ur ? oc() : Wr && Pu(), W(z.arrow), ml(e);
}
function Jc() {
	let e = V.tokens.length;
	Yc(), Bc(e, !0);
}
function Yc() {
	if (X(z.modulo)) return $(), !1;
	if (Z(z.jsxText) || Z(z.jsxEmptyText)) return Qc(), !1;
	if (Z(z.lessThan) && Hr) return V.type = z.jsxTagStart, wc(), q(), !1;
	let e = V.potentialArrowAt === V.start;
	switch (V.type) {
		case z.slash:
		case z.assign: Si();
		case z._super:
		case z._this:
		case z.regexp:
		case z.num:
		case z.bigint:
		case z.decimal:
		case z.string:
		case z._null:
		case z._true:
		case z._false: return q(), !1;
		case z._import: return q(), Z(z.dot) && (V.tokens[V.tokens.length - 1].type = z.name, q(), $()), !1;
		case z.name: {
			let t = V.tokens.length, n = V.start, r = V.contextualKeyword;
			return $(), r === R._await ? (yl(), !1) : r === R._async && Z(z._function) && !ei() ? (q(), xd(n, !1), !1) : e && r === R._async && !ei() && Z(z.name) ? (V.scopeDepth++, ho(!1), W(z.arrow), ml(t), !0) : Z(z._do) && !ei() ? (q(), hd(), !1) : e && !ei() && Z(z.arrow) ? (V.scopeDepth++, _o(!1), W(z.arrow), ml(t), !0) : (V.tokens[V.tokens.length - 1].identifierRole = K.Access, !1);
		}
		case z._do: return q(), hd(), !1;
		case z.parenL: return el(e);
		case z.bracketL: return q(), _l(z.bracketR, !0), !1;
		case z.braceL: return sl(!1, !1), !1;
		case z._function: return Zc(), !1;
		case z.at: qu();
		case z._class: return Cd(!1), !1;
		case z._new: return il(), !1;
		case z.backQuote: return ol(), !1;
		case z.doubleColon: return q(), Jc(), !1;
		case z.hash: {
			let e = ki();
			return ui[e] || e === B.backslash ? Xc() : q(), !1;
		}
		default: return G(), !1;
	}
}
function Xc() {
	X(z.hash), $();
}
function Zc() {
	let e = V.start;
	$(), X(z.dot) && $(), xd(e, !1);
}
function Qc() {
	q();
}
function $c() {
	W(z.parenL), Ac(), W(z.parenR);
}
function el(e) {
	let t = V.snapshot(), n = V.tokens.length;
	W(z.parenL);
	let r = !0;
	for (; !Z(z.parenR) && !V.error;) {
		if (r) r = !1;
		else if (W(z.comma), Z(z.parenR)) break;
		if (Z(z.ellipsis)) {
			mo(!1), rl();
			break;
		}
		jc(!1, !0);
	}
	return W(z.parenR), e && tl() && nl() ? (V.restoreFromSnapshot(t), V.scopeDepth++, Sd(), nl(), ml(n), !V.error || (V.restoreFromSnapshot(t), el(!1), !1)) : !1;
}
function tl() {
	return Z(z.colon) || !ei();
}
function nl() {
	return Ur ? uc() : Wr ? Iu() : X(z.arrow);
}
function rl() {
	(Ur || Wr) && Oc();
}
function il() {
	W(z._new), X(z.dot) ? $() : (al(), Wr && vu(), X(z.parenL) && _l(z.parenR));
}
function al() {
	Jc(), X(z.questionDot);
}
function ol() {
	for (xi(), xi(); !Z(z.backQuote) && !V.error;) W(z.dollarBraceL), Ac(), xi(), xi();
	q();
}
function sl(e, t) {
	let n = Kr(), r = !0;
	for (q(), V.tokens[V.tokens.length - 1].contextId = n; !X(z.braceR) && !V.error;) {
		if (r) r = !1;
		else if (W(z.comma), X(z.braceR)) break;
		let i = !1;
		if (Z(z.ellipsis)) {
			let n = V.tokens.length;
			if (po(), e && (V.tokens.length === n + 2 && _o(t), X(z.braceR))) break;
		} else e || (i = X(z.star)), !e && U(R._async) ? (i && G(), $(), Z(z.colon) || Z(z.parenL) || Z(z.braceR) || Z(z.eq) || Z(z.comma) || (Z(z.star) && (q(), i = !0), fl(n))) : fl(n), dl(e, t, n);
	}
	V.tokens[V.tokens.length - 1].contextId = n;
}
function cl(e) {
	return !e && (Z(z.string) || Z(z.num) || Z(z.bracketL) || Z(z.name) || !!(V.type & z.IS_KEYWORD));
}
function ll(e, t) {
	let n = V.start;
	return Z(z.parenL) ? (e && G(), pl(n, !1), !0) : cl(e) ? (fl(t), pl(n, !1), !0) : !1;
}
function ul(e, t) {
	if (X(z.colon)) {
		e ? So(t) : jc(!1);
		return;
	}
	let n;
	n = e ? V.scopeDepth === 0 ? K.ObjectShorthandTopLevelDeclaration : t ? K.ObjectShorthandBlockScopedDeclaration : K.ObjectShorthandFunctionScopedDeclaration : K.ObjectShorthand, V.tokens[V.tokens.length - 1].identifierRole = n, So(t, !0);
}
function dl(e, t, n) {
	Ur ? rc() : Wr && Ou(), ll(e, n) || ul(e, t);
}
function fl(e) {
	Wr && hu(), X(z.bracketL) ? (V.tokens[V.tokens.length - 1].contextId = e, jc(), W(z.bracketR), V.tokens[V.tokens.length - 1].contextId = e) : (Z(z.num) || Z(z.string) || Z(z.bigint) || Z(z.decimal) ? Yc() : Xc(), V.tokens[V.tokens.length - 1].identifierRole = K.ObjectKey, V.tokens[V.tokens.length - 1].contextId = e);
}
function pl(e, t) {
	let n = Kr();
	V.scopeDepth++;
	let r = V.tokens.length;
	Sd(t, n), hl(e, n);
	let i = V.tokens.length;
	V.scopes.push(new zr(r, i, !0)), V.scopeDepth--;
}
function ml(e) {
	gl(!0);
	let t = V.tokens.length;
	V.scopes.push(new zr(e, t, !0)), V.scopeDepth--;
}
function hl(e, t = 0) {
	Ur ? Ks(e, t) : Wr ? gu(t) : gl(!1, t);
}
function gl(e, t = 0) {
	e && !Z(z.braceL) ? jc() : hd(!0, t);
}
function _l(e, t = !1) {
	let n = !0;
	for (; !X(e) && !V.error;) {
		if (n) n = !1;
		else if (W(z.comma), X(e)) break;
		vl(t);
	}
}
function vl(e) {
	e && Z(z.comma) || (Z(z.ellipsis) ? (po(), rl()) : Z(z.question) ? q() : jc(!1, !0));
}
function $() {
	q(), V.tokens[V.tokens.length - 1].type = z.name;
}
function yl() {
	Rc();
}
function bl() {
	q(), !Z(z.semi) && !ei() && (X(z.star), jc());
}
function xl() {
	$r(R._module), W(z.braceL), gd(z.braceR);
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/plugins/flow.js
function Sl(e) {
	return (e.type === z.name || !!(e.type & z.IS_KEYWORD)) && e.contextualKeyword !== R._from;
}
function Cl(e) {
	let t = J(0);
	W(e || z.colon), fu(), Y(t);
}
function wl() {
	W(z.modulo), $r(R._checks), X(z.parenL) && (Ac(), W(z.parenR));
}
function Tl() {
	let e = J(0);
	W(z.colon), Z(z.modulo) ? wl() : (fu(), Z(z.modulo) && wl()), Y(e);
}
function El() {
	q(), Il(!0);
}
function Dl() {
	q(), $(), Z(z.lessThan) && Ul(), W(z.parenL), au(), W(z.parenR), Tl(), ii();
}
function Ol() {
	Z(z._class) ? El() : Z(z._function) ? Dl() : Z(z._var) ? kl() : Qr(R._module) ? X(z.dot) ? Ml() : Al() : U(R._type) ? Nl() : U(R._opaque) ? Pl() : U(R._interface) ? Fl() : Z(z._export) ? jl() : G();
}
function kl() {
	q(), mu(), ii();
}
function Al() {
	for (Z(z.string) ? Yc() : $(), W(z.braceL); !Z(z.braceR) && !V.error;) Z(z._import) ? (q(), Xd()) : G();
	W(z.braceR);
}
function jl() {
	W(z._export), X(z._default) ? Z(z._function) || Z(z._class) ? Ol() : (fu(), ii()) : Z(z._var) || Z(z._function) || Z(z._class) || U(R._opaque) ? Ol() : Z(z.star) || Z(z.braceL) || U(R._interface) || U(R._type) || U(R._opaque) ? Fd() : G();
}
function Ml() {
	$r(R._exports), pu(), ii();
}
function Nl() {
	q(), Bl();
}
function Pl() {
	q(), Vl(!0);
}
function Fl() {
	q(), Il();
}
function Il(e = !1) {
	if (zl(), Z(z.lessThan) && Ul(), X(z._extends)) do
		Ll();
	while (!e && X(z.comma));
	if (U(R._mixins)) {
		q();
		do
			Ll();
		while (X(z.comma));
	}
	if (U(R._implements)) {
		q();
		do
			Ll();
		while (X(z.comma));
	}
	Zl(e, !1, e);
}
function Ll() {
	eu(!1), Z(z.lessThan) && Wl();
}
function Rl() {
	Il();
}
function zl() {
	$();
}
function Bl() {
	zl(), Z(z.lessThan) && Ul(), Cl(z.eq), ii();
}
function Vl(e) {
	$r(R._type), zl(), Z(z.lessThan) && Ul(), Z(z.colon) && Cl(z.colon), e || Cl(z.eq), ii();
}
function Hl() {
	hu(), mu(), X(z.eq) && fu();
}
function Ul() {
	let e = J(0);
	// istanbul ignore else: this condition is already checked at all call sites
	Z(z.lessThan) || Z(z.typeParameterStart) ? q() : G();
	do
		Hl(), Z(z.greaterThan) || W(z.comma);
	while (!Z(z.greaterThan) && !V.error);
	W(z.greaterThan), Y(e);
}
function Wl() {
	let e = J(0);
	for (W(z.lessThan); !Z(z.greaterThan) && !V.error;) fu(), Z(z.greaterThan) || W(z.comma);
	W(z.greaterThan), Y(e);
}
function Gl() {
	if ($r(R._interface), X(z._extends)) do
		Ll();
	while (X(z.comma));
	Zl(!1, !1, !1);
}
function Kl() {
	Z(z.num) || Z(z.string) ? Yc() : $();
}
function ql() {
	wi() === z.colon ? (Kl(), Cl()) : fu(), W(z.bracketR), Cl();
}
function Jl() {
	Kl(), W(z.bracketR), W(z.bracketR), Z(z.lessThan) || Z(z.parenL) ? Yl() : (X(z.question), Cl());
}
function Yl() {
	for (Z(z.lessThan) && Ul(), W(z.parenL); !Z(z.parenR) && !Z(z.ellipsis) && !V.error;) iu(), Z(z.parenR) || W(z.comma);
	X(z.ellipsis) && iu(), W(z.parenR), Cl();
}
function Xl() {
	Yl();
}
function Zl(e, t, n) {
	let r;
	for (t && Z(z.braceBarL) ? (W(z.braceBarL), r = z.braceBarR) : (W(z.braceL), r = z.braceR); !Z(r) && !V.error;) {
		if (n && U(R._proto)) {
			let t = wi();
			t !== z.colon && t !== z.question && (q(), e = !1);
		}
		if (e && U(R._static)) {
			let e = wi();
			e !== z.colon && e !== z.question && q();
		}
		if (hu(), X(z.bracketL)) X(z.bracketL) ? Jl() : ql();
		else if (Z(z.parenL) || Z(z.lessThan)) Xl();
		else {
			if (U(R._get) || U(R._set)) {
				let e = wi();
				(e === z.name || e === z.string || e === z.num) && q();
			}
			Ql();
		}
		$l();
	}
	W(r);
}
function Ql() {
	if (Z(z.ellipsis)) {
		if (W(z.ellipsis), X(z.comma) || X(z.semi), Z(z.braceR)) return;
		fu();
	} else Kl(), Z(z.lessThan) || Z(z.parenL) ? Yl() : (X(z.question), Cl());
}
function $l() {
	!X(z.semi) && !X(z.comma) && !Z(z.braceR) && !Z(z.braceBarR) && G();
}
function eu(e) {
	for (e || $(); X(z.dot);) $();
}
function tu() {
	eu(!0), Z(z.lessThan) && Wl();
}
function nu() {
	W(z._typeof), ou();
}
function ru() {
	for (W(z.bracketL); V.pos < H.length && !Z(z.bracketR) && (fu(), !Z(z.bracketR));) W(z.comma);
	W(z.bracketR);
}
function iu() {
	let e = wi();
	e === z.colon || e === z.question ? ($(), X(z.question), Cl()) : fu();
}
function au() {
	for (; !Z(z.parenR) && !Z(z.ellipsis) && !V.error;) iu(), Z(z.parenR) || W(z.comma);
	X(z.ellipsis) && iu();
}
function ou() {
	let e = !1, t = V.noAnonFunctionType;
	switch (V.type) {
		case z.name:
			if (U(R._interface)) {
				Gl();
				return;
			}
			$(), tu();
			return;
		case z.braceL:
			Zl(!1, !1, !1);
			return;
		case z.braceBarL:
			Zl(!1, !0, !1);
			return;
		case z.bracketL:
			ru();
			return;
		case z.lessThan:
			Ul(), W(z.parenL), au(), W(z.parenR), W(z.arrow), fu();
			return;
		case z.parenL:
			if (q(), !Z(z.parenR) && !Z(z.ellipsis)) {
				if (Z(z.name)) {
					let t = wi();
					e = t !== z.question && t !== z.colon;
				} else e = !0;
			}
			if (e) {
				if (V.noAnonFunctionType = !1, fu(), V.noAnonFunctionType = t, V.noAnonFunctionType || !(Z(z.comma) || Z(z.parenR) && wi() === z.arrow)) {
					W(z.parenR);
					return;
				}
				X(z.comma);
			}
			au(), W(z.parenR), W(z.arrow), fu();
			return;
		case z.minus:
			q(), Qc();
			return;
		case z.string:
		case z.num:
		case z._true:
		case z._false:
		case z._null:
		case z._this:
		case z._void:
		case z.star:
			q();
			return;
		default:
			if (V.type === z._typeof) {
				nu();
				return;
			}
			if (V.type & z.IS_KEYWORD) {
				q(), V.tokens[V.tokens.length - 1].type = z.name;
				return;
			}
	}
	G();
}
function su() {
	for (ou(); !ei() && (Z(z.bracketL) || Z(z.questionDot));) X(z.questionDot), W(z.bracketL), X(z.bracketR) || (fu(), W(z.bracketR));
}
function cu() {
	X(z.question) ? cu() : su();
}
function lu() {
	cu(), !V.noAnonFunctionType && X(z.arrow) && fu();
}
function uu() {
	for (X(z.bitwiseAND), lu(); X(z.bitwiseAND);) lu();
}
function du() {
	for (X(z.bitwiseOR), uu(); X(z.bitwiseOR);) uu();
}
function fu() {
	du();
}
function pu() {
	Cl();
}
function mu() {
	$(), Z(z.colon) && pu();
}
function hu() {
	(Z(z.plus) || Z(z.minus)) && (q(), V.tokens[V.tokens.length - 1].isType = !0);
}
function gu(e) {
	Z(z.colon) && Tl(), gl(!1, e);
}
function _u(e, t, n) {
	if (Z(z.questionDot) && wi() === z.lessThan) {
		if (t) {
			n.stop = !0;
			return;
		}
		q(), Wl(), W(z.parenL), Gc();
	} else {
		if (!t && Z(z.lessThan)) {
			let e = V.snapshot();
			if (Wl(), W(z.parenL), Gc(), V.error) V.restoreFromSnapshot(e);
			else return;
		}
		Uc(e, t, n);
	}
}
function vu() {
	if (Z(z.lessThan)) {
		let e = V.snapshot();
		Wl(), V.error && V.restoreFromSnapshot(e);
	}
}
function yu() {
	if (Z(z.name) && V.contextualKeyword === R._interface) {
		let e = J(0);
		return q(), Rl(), Y(e), !0;
	}
	return U(R._enum) ? (zu(), !0) : !1;
}
function bu() {
	return U(R._enum) ? (zu(), !0) : !1;
}
function xu(e) {
	if (e === R._declare) {
		if (Z(z._class) || Z(z.name) || Z(z._function) || Z(z._var) || Z(z._export)) {
			let e = J(1);
			Ol(), Y(e);
		}
	} else if (Z(z.name)) {
		if (e === R._interface) {
			let e = J(1);
			Rl(), Y(e);
		} else if (e === R._type) {
			let e = J(1);
			Bl(), Y(e);
		} else if (e === R._opaque) {
			let e = J(1);
			Vl(!1), Y(e);
		}
	}
	ii();
}
function Su() {
	return U(R._type) || U(R._interface) || U(R._opaque) || U(R._enum);
}
function Cu() {
	return Z(z.name) && (V.contextualKeyword === R._type || V.contextualKeyword === R._interface || V.contextualKeyword === R._opaque || V.contextualKeyword === R._enum);
}
function wu() {
	if (U(R._type)) {
		let e = J(1);
		q(), Z(z.braceL) ? (Kd(), Bd()) : Bl(), Y(e);
	} else if (U(R._opaque)) {
		let e = J(1);
		q(), Vl(!1), Y(e);
	} else if (U(R._interface)) {
		let e = J(1);
		q(), Rl(), Y(e);
	} else Wu(!0);
}
function Tu() {
	return Z(z.star) || U(R._type) && wi() === z.star;
}
function Eu() {
	if (Qr(R._type)) {
		let e = J(2);
		Ud(), Y(e);
	} else Ud();
}
function Du(e) {
	if (e && Z(z.lessThan) && Wl(), U(R._implements)) {
		let e = J(0);
		q(), V.tokens[V.tokens.length - 1].type = z._implements;
		do
			zl(), Z(z.lessThan) && Wl();
		while (X(z.comma));
		Y(e);
	}
}
function Ou() {
	Z(z.lessThan) && (Ul(), Z(z.parenL) || G());
}
function ku() {
	let e = J(0);
	X(z.question), Z(z.colon) && pu(), Y(e);
}
function Au() {
	if (Z(z._typeof) || U(R._type)) {
		let e = Ei();
		(Sl(e) || e.type === z.braceL || e.type === z.star) && q();
	}
}
function ju() {
	let e = V.contextualKeyword === R._type || V.type === z._typeof;
	e ? q() : $(), U(R._as) && !Zr(R._as) ? ($(), e && !Z(z.name) && !(V.type & z.IS_KEYWORD) || $()) : (e && (Z(z.name) || V.type & z.IS_KEYWORD) && $(), Qr(R._as) && $());
}
function Mu() {
	if (Z(z.lessThan)) {
		let e = J(0);
		Ul(), Y(e);
	}
}
function Nu() {
	Z(z.colon) && pu();
}
function Pu() {
	if (Z(z.colon)) {
		let e = V.noAnonFunctionType;
		V.noAnonFunctionType = !0, pu(), V.noAnonFunctionType = e;
	}
}
function Fu(e, t) {
	if (Z(z.lessThan)) {
		let n = V.snapshot(), r = Mc(e, t);
		if (V.error) V.restoreFromSnapshot(n), V.type = z.typeParameterStart;
		else return r;
		let i = J(0);
		if (Ul(), Y(i), r = Mc(e, t), r) return !0;
		G();
	}
	return Mc(e, t);
}
function Iu() {
	if (Z(z.colon)) {
		let e = J(0), t = V.snapshot(), n = V.noAnonFunctionType;
		V.noAnonFunctionType = !0, Tl(), V.noAnonFunctionType = n, ei() && G(), Z(z.arrow) || G(), V.error && V.restoreFromSnapshot(t), Y(e);
	}
	return X(z.arrow);
}
function Lu(e, t = !1) {
	if (V.tokens[V.tokens.length - 1].contextualKeyword === R._async && Z(z.lessThan)) {
		let e = V.snapshot();
		if (Ru() && !V.error) return;
		V.restoreFromSnapshot(e);
	}
	Vc(e, t);
}
function Ru() {
	V.scopeDepth++;
	let e = V.tokens.length;
	return Sd(), nl() ? (ml(e), !0) : !1;
}
function zu() {
	$r(R._enum), V.tokens[V.tokens.length - 1].type = z._enum, $(), Bu();
}
function Bu() {
	Qr(R._of) && q(), W(z.braceL), Vu(), W(z.braceR);
}
function Vu() {
	for (; !Z(z.braceR) && !V.error && !X(z.ellipsis);) Hu(), Z(z.braceR) || W(z.comma);
}
function Hu() {
	$(), X(z.eq) && q();
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/traverser/statement.js
function Uu() {
	if (gd(z.eof), V.scopes.push(new zr(0, V.tokens.length, !0)), V.scopeDepth !== 0) throw Error(`Invalid scope depth at end of file: ${V.scopeDepth}`);
	return new rf(V.tokens, V.scopes);
}
function Wu(e) {
	Wr && yu() || (Z(z.at) && qu(), Gu(e));
}
function Gu(e) {
	if (Ur && Qs()) return;
	let t = V.type;
	switch (t) {
		case z._break:
		case z._continue:
			Zu();
			return;
		case z._debugger:
			Qu();
			return;
		case z._do:
			$u();
			return;
		case z._for:
			ed();
			return;
		case z._function:
			if (wi() === z.dot) break;
			e || G(), rd();
			return;
		case z._class:
			e || G(), Cd(!0);
			return;
		case z._if:
			id();
			return;
		case z._return:
			ad();
			return;
		case z._switch:
			od();
			return;
		case z._throw:
			sd();
			return;
		case z._try:
			ld();
			return;
		case z._let:
		case z._const: e || G();
		case z._var:
			ud(t !== z._var);
			return;
		case z._while:
			dd();
			return;
		case z.braceL:
			hd();
			return;
		case z.semi:
			fd();
			return;
		case z._export:
		case z._import: {
			let e = wi();
			if (e === z.parenL || e === z.dot) break;
			q(), t === z._import ? Xd() : Fd();
			return;
		}
		case z.name: if (V.contextualKeyword === R._async) {
			let e = V.start, t = V.snapshot();
			if (q(), Z(z._function) && !ei()) {
				W(z._function), xd(e, !0);
				return;
			}
			V.restoreFromSnapshot(t);
		} else if (V.contextualKeyword === R._using && !ni() && wi() === z.name) {
			ud(!0);
			return;
		} else if (Ku()) {
			$r(R._await), ud(!0);
			return;
		}
	}
	let n = V.tokens.length;
	Ac();
	let r = null;
	if (V.tokens.length === n + 1) {
		let e = V.tokens[V.tokens.length - 1];
		e.type === z.name && (r = e.contextualKeyword);
	}
	r == null ? ii() : X(z.colon) ? pd() : md(r);
}
function Ku() {
	if (!U(R._await)) return !1;
	let e = V.snapshot();
	return q(), !U(R._using) || ti() || (q(), !Z(z.name) || ti()) ? (V.restoreFromSnapshot(e), !1) : (V.restoreFromSnapshot(e), !0);
}
function qu() {
	for (; Z(z.at);) Ju();
}
function Ju() {
	if (q(), X(z.parenL)) Ac(), W(z.parenR);
	else {
		for ($(); X(z.dot);) $();
		Yu();
	}
}
function Yu() {
	Ur ? fc() : Xu();
}
function Xu() {
	X(z.parenL) && Gc();
}
function Zu() {
	q(), ri() || ($(), ii());
}
function Qu() {
	q(), ii();
}
function $u() {
	q(), Wu(!1), W(z._while), $c(), X(z.semi);
}
function ed() {
	V.scopeDepth++;
	let e = V.tokens.length;
	nd();
	let t = V.tokens.length;
	V.scopes.push(new zr(e, t, !1)), V.scopeDepth--;
}
function td() {
	return !(!U(R._using) || Zr(R._of));
}
function nd() {
	q();
	let e = !1;
	if (U(R._await) && (e = !0, q()), W(z.parenL), Z(z.semi)) {
		e && G(), _d();
		return;
	}
	let t = Ku();
	if (t || Z(z._var) || Z(z._let) || Z(z._const) || td()) {
		if (t && $r(R._await), q(), yd(!0, V.type !== z._var), Z(z._in) || U(R._of)) {
			vd(e);
			return;
		}
		_d();
	} else Ac(!0), Z(z._in) || U(R._of) ? vd(e) : (e && G(), _d());
}
function rd() {
	let e = V.start;
	q(), xd(e, !0);
}
function id() {
	q(), $c(), Wu(!1), X(z._else) && Wu(!1);
}
function ad() {
	q(), ri() || (Ac(), ii());
}
function od() {
	q(), $c(), V.scopeDepth++;
	let e = V.tokens.length;
	for (W(z.braceL); !Z(z.braceR) && !V.error;) if (Z(z._case) || Z(z._default)) {
		let e = Z(z._case);
		q(), e && Ac(), W(z.colon);
	} else Wu(!0);
	q();
	let t = V.tokens.length;
	V.scopes.push(new zr(e, t, !1)), V.scopeDepth--;
}
function sd() {
	q(), Ac(), ii();
}
function cd() {
	vo(!0), Ur && hs();
}
function ld() {
	if (q(), hd(), Z(z._catch)) {
		q();
		let e = null;
		if (Z(z.parenL) && (V.scopeDepth++, e = V.tokens.length, W(z.parenL), cd(), W(z.parenR)), hd(), e != null) {
			let t = V.tokens.length;
			V.scopes.push(new zr(e, t, !1)), V.scopeDepth--;
		}
	}
	X(z._finally) && hd();
}
function ud(e) {
	q(), yd(!1, e), ii();
}
function dd() {
	q(), $c(), Wu(!1);
}
function fd() {
	q();
}
function pd() {
	Wu(!0);
}
function md(e) {
	Ur ? ec(e) : Wr ? xu(e) : ii();
}
function hd(e = !1, t = 0) {
	let n = V.tokens.length;
	V.scopeDepth++, W(z.braceL), t && (V.tokens[V.tokens.length - 1].contextId = t), gd(z.braceR), t && (V.tokens[V.tokens.length - 1].contextId = t);
	let r = V.tokens.length;
	V.scopes.push(new zr(n, r, e)), V.scopeDepth--;
}
function gd(e) {
	for (; !X(e) && !V.error;) Wu(!0);
}
function _d() {
	W(z.semi), Z(z.semi) || Ac(), W(z.semi), Z(z.parenR) || Ac(), W(z.parenR), Wu(!1);
}
function vd(e) {
	e ? Qr(R._of) : q(), Ac(), W(z.parenR), Wu(!1);
}
function yd(e, t) {
	for (;;) {
		if (bd(t), X(z.eq)) {
			let t = V.tokens.length - 1;
			jc(e), V.tokens[t].rhsEndIndex = V.tokens.length;
		}
		if (!X(z.comma)) break;
	}
}
function bd(e) {
	vo(e), Ur ? ac() : Wr && Nu();
}
function xd(e, t, n = !1) {
	Z(z.star) && q(), t && !n && !Z(z.name) && !Z(z._yield) && G();
	let r = null;
	Z(z.name) && (t || (r = V.tokens.length, V.scopeDepth++), ho(!1));
	let i = V.tokens.length;
	V.scopeDepth++, Sd(), hl(e);
	let a = V.tokens.length;
	V.scopes.push(new zr(i, a, !0)), V.scopeDepth--, r !== null && (V.scopes.push(new zr(r, a, !0)), V.scopeDepth--);
}
function Sd(e = !1, t = 0) {
	Ur ? ic() : Wr && Mu(), W(z.parenL), t && (V.tokens[V.tokens.length - 1].contextId = t), yo(z.parenR, !1, !1, e, t), t && (V.tokens[V.tokens.length - 1].contextId = t);
}
function Cd(e, t = !1) {
	let n = Kr();
	q(), V.tokens[V.tokens.length - 1].contextId = n, V.tokens[V.tokens.length - 1].isExpression = !e;
	let r = null;
	e || (r = V.tokens.length, V.scopeDepth++), Nd(e, t), Pd();
	let i = V.tokens.length;
	if (Ed(n), !V.error && (V.tokens[i].contextId = n, V.tokens[V.tokens.length - 1].contextId = n, r !== null)) {
		let e = V.tokens.length;
		V.scopes.push(new zr(r, e, !1)), V.scopeDepth--;
	}
}
function wd() {
	return Z(z.eq) || Z(z.semi) || Z(z.braceR) || Z(z.bang) || Z(z.colon);
}
function Td() {
	return Z(z.parenL) || Z(z.lessThan);
}
function Ed(e) {
	for (W(z.braceL); !X(z.braceR) && !V.error;) {
		if (X(z.semi)) continue;
		if (Z(z.at)) {
			Ju();
			continue;
		}
		let t = V.start;
		Dd(t, e);
	}
}
function Dd(e, t) {
	Ur && Eo([
		R._declare,
		R._public,
		R._protected,
		R._private,
		R._override
	]);
	let n = !1;
	if (Z(z.name) && V.contextualKeyword === R._static) {
		if ($(), Td()) {
			kd(e, !1);
			return;
		}
		if (wd()) {
			Md();
			return;
		}
		if (V.tokens[V.tokens.length - 1].type = z._static, n = !0, Z(z.braceL)) {
			V.tokens[V.tokens.length - 1].contextId = t, hd();
			return;
		}
	}
	Od(e, n, t);
}
function Od(e, t, n) {
	if (Ur && $s(t)) return;
	if (X(z.star)) {
		Ad(n), kd(e, !1);
		return;
	}
	Ad(n);
	let r = !1, i = V.tokens[V.tokens.length - 1];
	i.contextualKeyword === R._constructor && (r = !0), jd(), Td() ? kd(e, r) : wd() ? Md() : i.contextualKeyword === R._async && !ri() ? (V.tokens[V.tokens.length - 1].type = z._async, Z(z.star) && q(), Ad(n), jd(), kd(e, !1)) : (i.contextualKeyword === R._get || i.contextualKeyword === R._set) && !(ri() && Z(z.star)) ? (i.contextualKeyword === R._get ? V.tokens[V.tokens.length - 1].type = z._get : V.tokens[V.tokens.length - 1].type = z._set, Ad(n), kd(e, !1)) : i.contextualKeyword === R._accessor && !ri() ? (Ad(n), Md()) : ri() ? Md() : G();
}
function kd(e, t) {
	Ur ? Fo() : Wr && Z(z.lessThan) && Ul(), pl(e, t);
}
function Ad(e) {
	fl(e);
}
function jd() {
	if (Ur) {
		let e = J(0);
		X(z.question), Y(e);
	}
}
function Md() {
	if (Ur ? (Ci(z.bang), hs()) : Wr && Z(z.colon) && pu(), Z(z.eq)) {
		let e = V.tokens.length;
		q(), jc(), V.tokens[e].rhsEndIndex = V.tokens.length;
	}
	ii();
}
function Nd(e, t = !1) {
	(!Ur || e && !t || !U(R._implements)) && (Z(z.name) && ho(!0), Ur ? Fo() : Wr && Z(z.lessThan) && Ul());
}
function Pd() {
	let e = !1;
	X(z._extends) ? (zc(), e = !0) : e = !1, Ur ? nc(e) : Wr && Du(e);
}
function Fd() {
	let e = V.tokens.length - 1;
	Ur && Js() || (Vd() ? Hd() : Rd() ? ($(), Z(z.comma) && wi() === z.star ? (W(z.comma), W(z.star), $r(R._as), $()) : zd(), Bd()) : X(z._default) ? Id() : Gd() ? Ld() : (Kd(), Bd()), V.tokens[e].rhsEndIndex = V.tokens.length);
}
function Id() {
	if (Ur && Zs() || Wr && bu()) return;
	let e = V.start;
	X(z._function) ? xd(e, !0, !0) : U(R._async) && wi() === z._function ? (Qr(R._async), X(z._function), xd(e, !0, !0)) : Z(z._class) ? Cd(!0, !0) : Z(z.at) ? (qu(), Cd(!0, !0)) : (jc(), ii());
}
function Ld() {
	Ur ? tc() : Wr ? wu() : Wu(!0);
}
function Rd() {
	if (Ur && Gs() || Wr && Cu()) return !1;
	if (Z(z.name)) return V.contextualKeyword !== R._async;
	if (!Z(z._default)) return !1;
	let e = Di(), t = Ei(), n = t.type === z.name && t.contextualKeyword === R._from;
	if (t.type === z.comma) return !0;
	if (n) {
		let t = H.charCodeAt(Oi(e + 4));
		return t === B.quotationMark || t === B.apostrophe;
	}
	return !1;
}
function zd() {
	X(z.comma) && Kd();
}
function Bd() {
	Qr(R._from) && (Yc(), tf()), ii();
}
function Vd() {
	return Wr ? Tu() : Z(z.star);
}
function Hd() {
	Wr ? Eu() : Ud();
}
function Ud() {
	W(z.star), U(R._as) ? Wd() : Bd();
}
function Wd() {
	q(), V.tokens[V.tokens.length - 1].type = z._as, $(), zd(), Bd();
}
function Gd() {
	return Ur && Gs() || Wr && Su() || V.type === z._var || V.type === z._const || V.type === z._let || V.type === z._function || V.type === z._class || U(R._async) || Z(z.at);
}
function Kd() {
	let e = !0;
	for (W(z.braceL); !X(z.braceR) && !V.error;) {
		if (e) e = !1;
		else if (W(z.comma), X(z.braceR)) break;
		qd();
	}
}
function qd() {
	Ur ? Xs() : ($(), V.tokens[V.tokens.length - 1].identifierRole = K.ExportAccess, Qr(R._as) && $());
}
function Jd() {
	let e = V.snapshot();
	return $r(R._module), Qr(R._from) ? U(R._from) ? (V.restoreFromSnapshot(e), !0) : (V.restoreFromSnapshot(e), !1) : Z(z.comma) ? (V.restoreFromSnapshot(e), !1) : (V.restoreFromSnapshot(e), !0);
}
function Yd() {
	U(R._module) && Jd() && q();
}
function Xd() {
	if (Ur && Z(z.name) && wi() === z.eq) Ns();
	else {
		if (Ur && U(R._type)) {
			let e = Ei();
			if (e.type === z.name && e.contextualKeyword !== R._from) {
				if ($r(R._type), wi() === z.eq) {
					Ns();
					return;
				}
			} else (e.type === z.star || e.type === z.braceL) && $r(R._type);
		}
		Z(z.string) || (Yd(), $d(), $r(R._from)), Yc(), tf(), ii();
	}
}
function Zd() {
	return Z(z.name);
}
function Qd() {
	go();
}
function $d() {
	Wr && Au();
	let e = !0;
	if (!(Zd() && (Qd(), !X(z.comma)))) {
		if (Z(z.star)) q(), $r(R._as), Qd();
		else for (W(z.braceL); !X(z.braceR) && !V.error;) {
			if (e) e = !1;
			else if (X(z.colon) && G("ES2015 named imports do not destructure. Use another statement for destructuring after the import."), W(z.comma), X(z.braceR)) break;
			ef();
		}
	}
}
function ef() {
	Ur ? Ys() : Wr ? ju() : (go(), U(R._as) && (V.tokens[V.tokens.length - 1].identifierRole = K.ImportAccess, q(), go()));
}
function tf() {
	(Z(z._with) || U(R._assert) && !ti()) && (q(), sl(!1, !1));
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/traverser/index.js
function nf() {
	return V.pos === 0 && H.charCodeAt(0) === B.numberSign && H.charCodeAt(1) === B.exclamationMark && Ni(2), Ai(), Uu();
}
//#endregion
//#region node_modules/sucrase/dist/esm/parser/index.js
var rf = class {
	constructor(e, t) {
		this.tokens = e, this.scopes = t;
	}
};
function af(e, t, n, r) {
	if (r && n) throw Error("Cannot combine flow and typescript plugins.");
	Xr(e, t, n, r);
	let i = nf();
	if (V.error) throw qr(V.error);
	return i;
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/isAsyncOperation.js
function of(e) {
	let t = e.currentIndex(), n = 0, r = e.currentToken();
	do {
		let i = e.tokens[t];
		if (i.isOptionalChainStart && n++, i.isOptionalChainEnd && n--, n += i.numNullishCoalesceStarts, n -= i.numNullishCoalesceEnds, i.contextualKeyword === R._await && i.identifierRole == null && i.scopeDepth === r.scopeDepth) return !0;
		t += 1;
	} while (n > 0 && t < e.tokens.length);
	return !1;
}
//#endregion
//#region node_modules/sucrase/dist/esm/TokenProcessor.js
var sf = class e {
	__init() {
		this.resultCode = "";
	}
	__init2() {
		this.resultMappings = Array(this.tokens.length);
	}
	__init3() {
		this.tokenIndex = 0;
	}
	constructor(t, n, r, i, a) {
		this.code = t, this.tokens = n, this.isFlowEnabled = r, this.disableESTransforms = i, this.helperManager = a, e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this);
	}
	snapshot() {
		return {
			resultCode: this.resultCode,
			tokenIndex: this.tokenIndex
		};
	}
	restoreToSnapshot(e) {
		this.resultCode = e.resultCode, this.tokenIndex = e.tokenIndex;
	}
	dangerouslyGetAndRemoveCodeSinceSnapshot(e) {
		let t = this.resultCode.slice(e.resultCode.length);
		return this.resultCode = e.resultCode, t;
	}
	reset() {
		this.resultCode = "", this.resultMappings = Array(this.tokens.length), this.tokenIndex = 0;
	}
	matchesContextualAtIndex(e, t) {
		return this.matches1AtIndex(e, z.name) && this.tokens[e].contextualKeyword === t;
	}
	identifierNameAtIndex(e) {
		return this.identifierNameForToken(this.tokens[e]);
	}
	identifierNameAtRelativeIndex(e) {
		return this.identifierNameForToken(this.tokenAtRelativeIndex(e));
	}
	identifierName() {
		return this.identifierNameForToken(this.currentToken());
	}
	identifierNameForToken(e) {
		return this.code.slice(e.start, e.end);
	}
	rawCodeForToken(e) {
		return this.code.slice(e.start, e.end);
	}
	stringValueAtIndex(e) {
		return this.stringValueForToken(this.tokens[e]);
	}
	stringValue() {
		return this.stringValueForToken(this.currentToken());
	}
	stringValueForToken(e) {
		return this.code.slice(e.start + 1, e.end - 1);
	}
	matches1AtIndex(e, t) {
		return this.tokens[e].type === t;
	}
	matches2AtIndex(e, t, n) {
		return this.tokens[e].type === t && this.tokens[e + 1].type === n;
	}
	matches3AtIndex(e, t, n, r) {
		return this.tokens[e].type === t && this.tokens[e + 1].type === n && this.tokens[e + 2].type === r;
	}
	matches1(e) {
		return this.tokens[this.tokenIndex].type === e;
	}
	matches2(e, t) {
		return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t;
	}
	matches3(e, t, n) {
		return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t && this.tokens[this.tokenIndex + 2].type === n;
	}
	matches4(e, t, n, r) {
		return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t && this.tokens[this.tokenIndex + 2].type === n && this.tokens[this.tokenIndex + 3].type === r;
	}
	matches5(e, t, n, r, i) {
		return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t && this.tokens[this.tokenIndex + 2].type === n && this.tokens[this.tokenIndex + 3].type === r && this.tokens[this.tokenIndex + 4].type === i;
	}
	matchesContextual(e) {
		return this.matchesContextualAtIndex(this.tokenIndex, e);
	}
	matchesContextIdAndLabel(e, t) {
		return this.matches1(e) && this.currentToken().contextId === t;
	}
	previousWhitespaceAndComments() {
		let e = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
		return this.isFlowEnabled && (e = e.replace(/@flow/g, "")), e;
	}
	replaceToken(e) {
		this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += e, this.appendTokenSuffix(), this.tokenIndex++;
	}
	replaceTokenTrimmingLeftWhitespace(e) {
		this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ""), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += e, this.appendTokenSuffix(), this.tokenIndex++;
	}
	removeInitialToken() {
		this.replaceToken("");
	}
	removeToken() {
		this.replaceTokenTrimmingLeftWhitespace("");
	}
	removeBalancedCode() {
		let e = 0;
		for (; !this.isAtEnd();) {
			if (this.matches1(z.braceL)) e++;
			else if (this.matches1(z.braceR)) {
				if (e === 0) return;
				e--;
			}
			this.removeToken();
		}
	}
	copyExpectedToken(e) {
		if (this.tokens[this.tokenIndex].type !== e) throw Error(`Expected token ${e}`);
		this.copyToken();
	}
	copyToken() {
		this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
	}
	copyTokenWithPrefix(e) {
		this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += e, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
	}
	appendTokenPrefix() {
		let e = this.currentToken();
		if ((e.numNullishCoalesceStarts || e.isOptionalChainStart) && (e.isAsyncOperation = of(this)), !this.disableESTransforms) {
			if (e.numNullishCoalesceStarts) for (let t = 0; t < e.numNullishCoalesceStarts; t++) e.isAsyncOperation ? (this.resultCode += "await ", this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce")) : this.resultCode += this.helperManager.getHelperName("nullishCoalesce"), this.resultCode += "(";
			e.isOptionalChainStart && (e.isAsyncOperation && (this.resultCode += "await "), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === z._delete ? e.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete") : this.resultCode += this.helperManager.getHelperName("optionalChainDelete") : e.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChain") : this.resultCode += this.helperManager.getHelperName("optionalChain"), this.resultCode += "([");
		}
	}
	appendTokenSuffix() {
		let e = this.currentToken();
		if (e.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += "])"), e.numNullishCoalesceEnds && !this.disableESTransforms) for (let t = 0; t < e.numNullishCoalesceEnds; t++) this.resultCode += "))";
	}
	appendCode(e) {
		this.resultCode += e;
	}
	currentToken() {
		return this.tokens[this.tokenIndex];
	}
	currentTokenCode() {
		let e = this.currentToken();
		return this.code.slice(e.start, e.end);
	}
	tokenAtRelativeIndex(e) {
		return this.tokens[this.tokenIndex + e];
	}
	currentIndex() {
		return this.tokenIndex;
	}
	nextToken() {
		if (this.tokenIndex === this.tokens.length) throw Error("Unexpectedly reached end of input.");
		this.tokenIndex++;
	}
	previousToken() {
		this.tokenIndex--;
	}
	finish() {
		if (this.tokenIndex !== this.tokens.length) throw Error("Tried to finish processing tokens before reaching the end.");
		return this.resultCode += this.previousWhitespaceAndComments(), {
			code: this.resultCode,
			mappings: this.resultMappings
		};
	}
	isAtEnd() {
		return this.tokenIndex === this.tokens.length;
	}
};
//#endregion
//#region node_modules/sucrase/dist/esm/util/getClassInfo.js
function cf(e, t, n, r) {
	let i = t.snapshot(), a = uf(t), o = [], s = [], c = [], l = null, u = [], d = [], f = t.currentToken().contextId;
	if (f == null) throw Error("Expected non-null class context ID on class open-brace.");
	for (t.nextToken(); !t.matchesContextIdAndLabel(z.braceR, f);) if (t.matchesContextual(R._constructor) && !t.currentToken().isType) ({constructorInitializerStatements: o, constructorInsertPos: l} = df(t));
	else if (t.matches1(z.semi)) r || d.push({
		start: t.currentIndex(),
		end: t.currentIndex() + 1
	}), t.nextToken();
	else if (t.currentToken().isType) t.nextToken();
	else {
		let i = t.currentIndex(), a = !1, p = !1, m = !1;
		for (; ff(t.currentToken());) t.matches1(z._static) && (a = !0), t.matches1(z.hash) && (p = !0), (t.matches1(z._declare) || t.matches1(z._abstract)) && (m = !0), t.nextToken();
		if (a && t.matches1(z.braceL) || p) {
			lf(t, f);
			continue;
		}
		if (t.matchesContextual(R._constructor) && !t.currentToken().isType) {
			({constructorInitializerStatements: o, constructorInsertPos: l} = df(t));
			continue;
		}
		let h = t.currentIndex();
		if (pf(t), t.matches1(z.lessThan) || t.matches1(z.parenL)) {
			lf(t, f);
			continue;
		}
		for (; t.currentToken().isType;) t.nextToken();
		if (t.matches1(z.eq)) {
			let r = t.currentIndex(), i = t.currentToken().rhsEndIndex;
			if (i == null) throw Error("Expected rhsEndIndex on class field assignment.");
			for (t.nextToken(); t.currentIndex() < i;) e.processToken();
			let o;
			a ? (o = n.claimFreeName("__initStatic"), c.push(o)) : (o = n.claimFreeName("__init"), s.push(o)), u.push({
				initializerName: o,
				equalsIndex: r,
				start: h,
				end: t.currentIndex()
			});
		} else (!r || m) && d.push({
			start: i,
			end: t.currentIndex()
		});
	}
	return t.restoreToSnapshot(i), r ? {
		headerInfo: a,
		constructorInitializerStatements: o,
		instanceInitializerNames: [],
		staticInitializerNames: [],
		constructorInsertPos: l,
		fields: [],
		rangesToRemove: d
	} : {
		headerInfo: a,
		constructorInitializerStatements: o,
		instanceInitializerNames: s,
		staticInitializerNames: c,
		constructorInsertPos: l,
		fields: u,
		rangesToRemove: d
	};
}
function lf(e, t) {
	for (e.nextToken(); e.currentToken().contextId !== t;) e.nextToken();
	for (; ff(e.tokenAtRelativeIndex(-1));) e.previousToken();
}
function uf(e) {
	let t = e.currentToken(), n = t.contextId;
	if (n == null) throw Error("Expected context ID on class token.");
	let r = t.isExpression;
	if (r == null) throw Error("Expected isExpression on class token.");
	let i = null, a = !1;
	for (e.nextToken(), e.matches1(z.name) && (i = e.identifierName()); !e.matchesContextIdAndLabel(z.braceL, n);) e.matches1(z._extends) && !e.currentToken().isType && (a = !0), e.nextToken();
	return {
		isExpression: r,
		className: i,
		hasSuperclass: a
	};
}
function df(e) {
	let t = [];
	e.nextToken();
	let n = e.currentToken().contextId;
	if (n == null) throw Error("Expected context ID on open-paren starting constructor params.");
	for (; !e.matchesContextIdAndLabel(z.parenR, n);) if (e.currentToken().contextId === n) {
		if (e.nextToken(), ff(e.currentToken())) {
			for (e.nextToken(); ff(e.currentToken());) e.nextToken();
			let n = e.currentToken();
			if (n.type !== z.name) throw Error("Expected identifier after access modifiers in constructor arg.");
			let r = e.identifierNameForToken(n);
			t.push(`this.${r} = ${r}`);
		}
	} else e.nextToken();
	for (e.nextToken(); e.currentToken().isType;) e.nextToken();
	let r = e.currentIndex(), i = !1;
	for (; !e.matchesContextIdAndLabel(z.braceR, n);) {
		if (!i && e.matches2(z._super, z.parenL)) {
			e.nextToken();
			let t = e.currentToken().contextId;
			if (t == null) throw Error("Expected a context ID on the super call");
			for (; !e.matchesContextIdAndLabel(z.parenR, t);) e.nextToken();
			r = e.currentIndex(), i = !0;
		}
		e.nextToken();
	}
	return e.nextToken(), {
		constructorInitializerStatements: t,
		constructorInsertPos: r
	};
}
function ff(e) {
	return [
		z._async,
		z._get,
		z._set,
		z.plus,
		z.minus,
		z._readonly,
		z._static,
		z._public,
		z._private,
		z._protected,
		z._override,
		z._abstract,
		z.star,
		z._declare,
		z.hash
	].includes(e.type);
}
function pf(e) {
	if (e.matches1(z.bracketL)) {
		let t = e.currentToken().contextId;
		if (t == null) throw Error("Expected class context ID on computed name open bracket.");
		for (; !e.matchesContextIdAndLabel(z.bracketR, t);) e.nextToken();
		e.nextToken();
	} else e.nextToken();
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/elideImportEquals.js
function mf(e) {
	if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(z.parenL)) e.removeToken(), e.removeToken(), e.removeToken();
	else for (; e.matches1(z.dot);) e.removeToken(), e.removeToken();
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/getDeclarationInfo.js
var hf = {
	typeDeclarations: /* @__PURE__ */ new Set(),
	valueDeclarations: /* @__PURE__ */ new Set()
};
function gf(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r = 0; r < e.tokens.length; r++) {
		let i = e.tokens[r];
		i.type === z.name && gi(i) && (i.isType ? t.add(e.identifierNameForToken(i)) : n.add(e.identifierNameForToken(i)));
	}
	return {
		typeDeclarations: t,
		valueDeclarations: n
	};
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/isExportFrom.js
function _f(e) {
	let t = e.currentIndex();
	for (; !e.matches1AtIndex(t, z.braceR);) t++;
	return e.matchesContextualAtIndex(t + 1, R._from) && e.matches1AtIndex(t + 2, z.string);
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/removeMaybeImportAttributes.js
function vf(e) {
	(e.matches2(z._with, z.braceL) || e.matches2(z.name, z.braceL) && e.matchesContextual(R._assert)) && (e.removeToken(), e.removeToken(), e.removeBalancedCode(), e.removeToken());
}
//#endregion
//#region node_modules/sucrase/dist/esm/util/shouldElideDefaultExport.js
function yf(e, t, n, r) {
	if (!e || t) return !1;
	let i = n.currentToken();
	if (i.rhsEndIndex == null) throw Error("Expected non-null rhsEndIndex on export token.");
	let a = i.rhsEndIndex - n.currentIndex();
	if (a !== 3 && !(a === 4 && n.matches1AtIndex(i.rhsEndIndex - 1, z.semi))) return !1;
	let o = n.tokenAtRelativeIndex(2);
	if (o.type !== z.name) return !1;
	let s = n.identifierNameForToken(o);
	return r.typeDeclarations.has(s) && !r.valueDeclarations.has(s);
}
//#endregion
//#region node_modules/sucrase/dist/esm/transformers/CJSImportTransformer.js
var bf = class e extends oa {
	__init() {
		this.hadExport = !1;
	}
	__init2() {
		this.hadNamedExport = !1;
	}
	__init3() {
		this.hadDefaultExport = !1;
	}
	constructor(t, n, r, i, a, o, s, c, l, u, d, f) {
		super(), this.rootTransformer = t, this.tokens = n, this.importProcessor = r, this.nameManager = i, this.helperManager = a, this.reactHotLoaderTransformer = o, this.enableLegacyBabel5ModuleInterop = s, this.enableLegacyTypeScriptModuleInterop = c, this.isTypeScriptTransformEnabled = l, this.isFlowTransformEnabled = u, this.preserveDynamicImport = d, this.keepUnusedImports = f, e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this), this.declarationInfo = l ? gf(n) : hf;
	}
	getPrefixCode() {
		let e = "";
		return this.hadExport && (e += "Object.defineProperty(exports, \"__esModule\", {value: true});"), e;
	}
	getSuffixCode() {
		return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? "\nmodule.exports = exports.default;\n" : "";
	}
	process() {
		return this.tokens.matches3(z._import, z.name, z.eq) ? this.processImportEquals() : this.tokens.matches1(z._import) ? (this.processImport(), !0) : this.tokens.matches2(z._export, z.eq) ? (this.tokens.replaceToken("module.exports"), !0) : this.tokens.matches1(z._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : this.tokens.matches2(z.name, z.postIncDec) && this.processPostIncDec() ? !0 : this.tokens.matches1(z.name) || this.tokens.matches1(z.jsxName) ? this.processIdentifier() : this.tokens.matches1(z.eq) ? this.processAssignment() : this.tokens.matches1(z.assign) ? this.processComplexAssignment() : this.tokens.matches1(z.preIncDec) ? this.processPreIncDec() : !1;
	}
	processImportEquals() {
		let e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
		return this.importProcessor.shouldAutomaticallyElideImportedName(e) ? mf(this.tokens) : this.tokens.replaceToken("const"), !0;
	}
	processImport() {
		if (this.tokens.matches2(z._import, z.parenL)) {
			if (this.preserveDynamicImport) {
				this.tokens.copyToken();
				return;
			}
			let e = this.enableLegacyTypeScriptModuleInterop ? "" : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
			this.tokens.replaceToken(`Promise.resolve().then(() => ${e}require`);
			let t = this.tokens.currentToken().contextId;
			if (t == null) throw Error("Expected context ID on dynamic import invocation.");
			for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(z.parenR, t);) this.rootTransformer.processToken();
			this.tokens.replaceToken(e ? ")))" : "))");
		} else {
			if (this.removeImportAndDetectIfShouldElide()) this.tokens.removeToken();
			else {
				let e = this.tokens.stringValue();
				this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), this.tokens.appendCode(this.importProcessor.claimImportCode(e));
			}
			vf(this.tokens), this.tokens.matches1(z.semi) && this.tokens.removeToken();
		}
	}
	removeImportAndDetectIfShouldElide() {
		if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(R._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, z.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, R._from)) return this.removeRemainingImport(), !0;
		if (this.tokens.matches1(z.name) || this.tokens.matches1(z.star)) return this.removeRemainingImport(), !1;
		if (this.tokens.matches1(z.string)) return !1;
		let e = !1, t = !1;
		for (; !this.tokens.matches1(z.string);) (!e && this.tokens.matches1(z.braceL) || this.tokens.matches1(z.comma)) && (this.tokens.removeToken(), this.tokens.matches1(z.braceR) || (t = !0), (this.tokens.matches2(z.name, z.comma) || this.tokens.matches2(z.name, z.braceR) || this.tokens.matches4(z.name, z.name, z.name, z.comma) || this.tokens.matches4(z.name, z.name, z.name, z.braceR)) && (e = !0)), this.tokens.removeToken();
		return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !e : this.isFlowTransformEnabled ? t && !e : !1;
	}
	removeRemainingImport() {
		for (; !this.tokens.matches1(z.string);) this.tokens.removeToken();
	}
	processIdentifier() {
		let e = this.tokens.currentToken();
		if (e.shadowsGlobal) return !1;
		if (e.identifierRole === K.ObjectShorthand) return this.processObjectShorthand();
		if (e.identifierRole !== K.Access) return !1;
		let t = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(e));
		if (!t) return !1;
		let n = this.tokens.currentIndex() + 1;
		for (; n < this.tokens.tokens.length && this.tokens.tokens[n].type === z.parenR;) n++;
		return this.tokens.tokens[n].type === z.parenL ? this.tokens.tokenAtRelativeIndex(1).type === z.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== z._new ? (this.tokens.replaceToken(`${t}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.parenR)) : this.tokens.replaceToken(`(0, ${t})`) : this.tokens.replaceToken(t), !0;
	}
	processObjectShorthand() {
		let e = this.tokens.identifierName(), t = this.importProcessor.getIdentifierReplacement(e);
		return t ? (this.tokens.replaceToken(`${e}: ${t}`), !0) : !1;
	}
	processExport() {
		if (this.tokens.matches2(z._export, z._enum) || this.tokens.matches3(z._export, z._const, z._enum)) return this.hadNamedExport = !0, !1;
		if (this.tokens.matches2(z._export, z._default)) return this.tokens.matches3(z._export, z._default, z._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
		if (this.tokens.matches2(z._export, z.braceL)) return this.processExportBindings(), !0;
		if (this.tokens.matches2(z._export, z.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, R._type)) {
			if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(z.braceL)) {
				for (; !this.tokens.matches1(z.braceR);) this.tokens.removeToken();
				this.tokens.removeToken();
			} else this.tokens.removeToken(), this.tokens.matches1(z._as) && (this.tokens.removeToken(), this.tokens.removeToken());
			return this.tokens.matchesContextual(R._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, z.string) && (this.tokens.removeToken(), this.tokens.removeToken(), vf(this.tokens)), !0;
		}
		if (this.hadNamedExport = !0, this.tokens.matches2(z._export, z._var) || this.tokens.matches2(z._export, z._let) || this.tokens.matches2(z._export, z._const)) return this.processExportVar(), !0;
		if (this.tokens.matches2(z._export, z._function) || this.tokens.matches3(z._export, z.name, z._function)) return this.processExportFunction(), !0;
		if (this.tokens.matches2(z._export, z._class) || this.tokens.matches3(z._export, z._abstract, z._class) || this.tokens.matches2(z._export, z.at)) return this.processExportClass(), !0;
		if (this.tokens.matches2(z._export, z.star)) return this.processExportStar(), !0;
		throw Error("Unrecognized export syntax.");
	}
	processAssignment() {
		let e = this.tokens.currentIndex(), t = this.tokens.tokens[e - 1];
		if (t.isType || t.type !== z.name || t.shadowsGlobal || e >= 2 && this.tokens.matches1AtIndex(e - 2, z.dot) || e >= 2 && [
			z._var,
			z._let,
			z._const
		].includes(this.tokens.tokens[e - 2].type)) return !1;
		let n = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(t));
		return n ? (this.tokens.copyToken(), this.tokens.appendCode(` ${n} =`), !0) : !1;
	}
	processComplexAssignment() {
		let e = this.tokens.currentIndex(), t = this.tokens.tokens[e - 1];
		if (t.type !== z.name || t.shadowsGlobal || e >= 2 && this.tokens.matches1AtIndex(e - 2, z.dot)) return !1;
		let n = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(t));
		return n ? (this.tokens.appendCode(` = ${n}`), this.tokens.copyToken(), !0) : !1;
	}
	processPreIncDec() {
		let e = this.tokens.currentIndex(), t = this.tokens.tokens[e + 1];
		if (t.type !== z.name || t.shadowsGlobal || e + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(e + 2, z.dot) || this.tokens.matches1AtIndex(e + 2, z.bracketL) || this.tokens.matches1AtIndex(e + 2, z.parenL))) return !1;
		let n = this.tokens.identifierNameForToken(t), r = this.importProcessor.resolveExportBinding(n);
		return r ? (this.tokens.appendCode(`${r} = `), this.tokens.copyToken(), !0) : !1;
	}
	processPostIncDec() {
		let e = this.tokens.currentIndex(), t = this.tokens.tokens[e], n = this.tokens.tokens[e + 1];
		if (t.type !== z.name || t.shadowsGlobal || e >= 1 && this.tokens.matches1AtIndex(e - 1, z.dot)) return !1;
		let r = this.tokens.identifierNameForToken(t), i = this.importProcessor.resolveExportBinding(r);
		if (!i) return !1;
		let a = this.tokens.rawCodeForToken(n), o = this.importProcessor.getIdentifierReplacement(r) || r;
		if (a === "++") this.tokens.replaceToken(`(${o} = ${i} = ${o} + 1, ${o} - 1)`);
		else if (a === "--") this.tokens.replaceToken(`(${o} = ${i} = ${o} - 1, ${o} + 1)`);
		else throw Error(`Unexpected operator: ${a}`);
		return this.tokens.removeToken(), !0;
	}
	processExportDefault() {
		let e = !0;
		if (this.tokens.matches4(z._export, z._default, z._function, z.name) || this.tokens.matches5(z._export, z._default, z.name, z._function, z.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, R._async)) {
			this.tokens.removeInitialToken(), this.tokens.removeToken();
			let e = this.processNamedFunction();
			this.tokens.appendCode(` exports.default = ${e};`);
		} else if (this.tokens.matches4(z._export, z._default, z._class, z.name) || this.tokens.matches5(z._export, z._default, z._abstract, z._class, z.name) || this.tokens.matches3(z._export, z._default, z.at)) {
			this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(z._abstract) && this.tokens.removeToken();
			let e = this.rootTransformer.processNamedClass();
			this.tokens.appendCode(` exports.default = ${e};`);
		} else if (yf(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) e = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
		else if (this.reactHotLoaderTransformer) {
			let e = this.nameManager.claimFreeName("_default");
			this.tokens.replaceToken(`let ${e}; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${e} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(e);
		} else this.tokens.replaceToken("exports."), this.tokens.copyToken(), this.tokens.appendCode(" =");
		e && (this.hadDefaultExport = !0);
	}
	copyDecorators() {
		for (; this.tokens.matches1(z.at);) if (this.tokens.copyToken(), this.tokens.matches1(z.parenL)) this.tokens.copyExpectedToken(z.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.parenR);
		else {
			for (this.tokens.copyExpectedToken(z.name); this.tokens.matches1(z.dot);) this.tokens.copyExpectedToken(z.dot), this.tokens.copyExpectedToken(z.name);
			this.tokens.matches1(z.parenL) && (this.tokens.copyExpectedToken(z.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.parenR));
		}
	}
	processExportVar() {
		this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar();
	}
	isSimpleExportVar() {
		let e = this.tokens.currentIndex();
		if (e++, e++, !this.tokens.matches1AtIndex(e, z.name)) return !1;
		for (e++; e < this.tokens.tokens.length && this.tokens.tokens[e].isType;) e++;
		return !!this.tokens.matches1AtIndex(e, z.eq);
	}
	processSimpleExportVar() {
		this.tokens.removeInitialToken(), this.tokens.copyToken();
		let e = this.tokens.identifierName();
		for (; !this.tokens.matches1(z.eq);) this.rootTransformer.processToken();
		let t = this.tokens.currentToken().rhsEndIndex;
		if (t == null) throw Error("Expected = token with an end index.");
		for (; this.tokens.currentIndex() < t;) this.rootTransformer.processToken();
		this.tokens.appendCode(`; exports.${e} = ${e}`);
	}
	processComplexExportVar() {
		this.tokens.removeInitialToken(), this.tokens.removeToken();
		let e = this.tokens.matches1(z.braceL);
		e && this.tokens.appendCode("(");
		let t = 0;
		for (;;) if (this.tokens.matches1(z.braceL) || this.tokens.matches1(z.dollarBraceL) || this.tokens.matches1(z.bracketL)) t++, this.tokens.copyToken();
		else if (this.tokens.matches1(z.braceR) || this.tokens.matches1(z.bracketR)) t--, this.tokens.copyToken();
		else if (t === 0 && !this.tokens.matches1(z.name) && !this.tokens.currentToken().isType) break;
		else if (this.tokens.matches1(z.eq)) {
			let e = this.tokens.currentToken().rhsEndIndex;
			if (e == null) throw Error("Expected = token with an end index.");
			for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken();
		} else {
			let e = this.tokens.currentToken();
			if (mi(e)) {
				let t = this.tokens.identifierName(), n = this.importProcessor.getIdentifierReplacement(t);
				if (n === null) throw Error(`Expected a replacement for ${t} in \`export var\` syntax.`);
				yi(e) && (n = `${t}: ${n}`), this.tokens.replaceToken(n);
			} else this.rootTransformer.processToken();
		}
		if (e) {
			let e = this.tokens.currentToken().rhsEndIndex;
			if (e == null) throw Error("Expected = token with an end index.");
			for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken();
			this.tokens.appendCode(")");
		}
	}
	processExportFunction() {
		this.tokens.replaceToken("");
		let e = this.processNamedFunction();
		this.tokens.appendCode(` exports.${e} = ${e};`);
	}
	processNamedFunction() {
		if (this.tokens.matches1(z._function)) this.tokens.copyToken();
		else if (this.tokens.matches2(z.name, z._function)) {
			if (!this.tokens.matchesContextual(R._async)) throw Error("Expected async keyword in function export.");
			this.tokens.copyToken(), this.tokens.copyToken();
		}
		if (this.tokens.matches1(z.star) && this.tokens.copyToken(), !this.tokens.matches1(z.name)) throw Error("Expected identifier for exported function name.");
		let e = this.tokens.identifierName();
		if (this.tokens.copyToken(), this.tokens.currentToken().isType) for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
		return this.tokens.copyExpectedToken(z.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(z.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.braceR), e;
	}
	processExportClass() {
		this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(z._abstract) && this.tokens.removeToken();
		let e = this.rootTransformer.processNamedClass();
		this.tokens.appendCode(` exports.${e} = ${e};`);
	}
	processExportBindings() {
		this.tokens.removeInitialToken(), this.tokens.removeToken();
		let e = _f(this.tokens), t = [];
		for (;;) {
			if (this.tokens.matches1(z.braceR)) {
				this.tokens.removeToken();
				break;
			}
			let n = ta(this.tokens);
			for (; this.tokens.currentIndex() < n.endIndex;) this.tokens.removeToken();
			if (!(n.isType || !e && this.shouldElideExportedIdentifier(n.leftName))) {
				let e = n.rightName;
				e === "default" ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
				let r = n.leftName, i = this.importProcessor.getIdentifierReplacement(r);
				t.push(`exports.${e} = ${i || r};`);
			}
			if (this.tokens.matches1(z.braceR)) {
				this.tokens.removeToken();
				break;
			}
			if (this.tokens.matches2(z.comma, z.braceR)) {
				this.tokens.removeToken(), this.tokens.removeToken();
				break;
			}
			if (this.tokens.matches1(z.comma)) this.tokens.removeToken();
			else throw Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
		}
		if (this.tokens.matchesContextual(R._from)) {
			this.tokens.removeToken();
			let e = this.tokens.stringValue();
			this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), vf(this.tokens);
		} else this.tokens.appendCode(t.join(" "));
		this.tokens.matches1(z.semi) && this.tokens.removeToken();
	}
	processExportStar() {
		for (this.tokens.removeInitialToken(); !this.tokens.matches1(z.string);) this.tokens.removeToken();
		let e = this.tokens.stringValue();
		this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), vf(this.tokens), this.tokens.matches1(z.semi) && this.tokens.removeToken();
	}
	shouldElideExportedIdentifier(e) {
		return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(e);
	}
}, xf = class extends oa {
	constructor(e, t, n, r, i, a, o, s) {
		super(), this.tokens = e, this.nameManager = t, this.helperManager = n, this.reactHotLoaderTransformer = r, this.isTypeScriptTransformEnabled = i, this.isFlowTransformEnabled = a, this.keepUnusedImports = o, this.nonTypeIdentifiers = i && !o ? ha(e, s) : /* @__PURE__ */ new Set(), this.declarationInfo = i && !o ? gf(e) : hf, this.injectCreateRequireForImportRequire = !!s.injectCreateRequireForImportRequire;
	}
	process() {
		if (this.tokens.matches3(z._import, z.name, z.eq)) return this.processImportEquals();
		if (this.tokens.matches4(z._import, z.name, z.name, z.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, R._type)) {
			this.tokens.removeInitialToken();
			for (let e = 0; e < 7; e++) this.tokens.removeToken();
			return !0;
		}
		if (this.tokens.matches2(z._export, z.eq)) return this.tokens.replaceToken("module.exports"), !0;
		if (this.tokens.matches5(z._export, z._import, z.name, z.name, z.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, R._type)) {
			this.tokens.removeInitialToken();
			for (let e = 0; e < 8; e++) this.tokens.removeToken();
			return !0;
		}
		if (this.tokens.matches1(z._import)) return this.processImport();
		if (this.tokens.matches2(z._export, z._default)) return this.processExportDefault();
		if (this.tokens.matches2(z._export, z.braceL)) return this.processNamedExports();
		if (this.tokens.matches2(z._export, z.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, R._type)) {
			if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(z.braceL)) {
				for (; !this.tokens.matches1(z.braceR);) this.tokens.removeToken();
				this.tokens.removeToken();
			} else this.tokens.removeToken(), this.tokens.matches1(z._as) && (this.tokens.removeToken(), this.tokens.removeToken());
			return this.tokens.matchesContextual(R._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, z.string) && (this.tokens.removeToken(), this.tokens.removeToken(), vf(this.tokens)), !0;
		}
		return !1;
	}
	processImportEquals() {
		let e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
		return this.shouldAutomaticallyElideImportedName(e) ? mf(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0;
	}
	processImport() {
		if (this.tokens.matches2(z._import, z.parenL)) return !1;
		let e = this.tokens.snapshot();
		if (this.removeImportTypeBindings()) {
			for (this.tokens.restoreToSnapshot(e); !this.tokens.matches1(z.string);) this.tokens.removeToken();
			this.tokens.removeToken(), vf(this.tokens), this.tokens.matches1(z.semi) && this.tokens.removeToken();
		}
		return !0;
	}
	removeImportTypeBindings() {
		if (this.tokens.copyExpectedToken(z._import), this.tokens.matchesContextual(R._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, z.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, R._from)) return !0;
		if (this.tokens.matches1(z.string)) return this.tokens.copyToken(), !1;
		this.tokens.matchesContextual(R._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, R._from) && this.tokens.copyToken();
		let e = !1, t = !1, n = !1;
		if (this.tokens.matches1(z.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(z.comma) && this.tokens.removeToken()) : (e = !0, this.tokens.copyToken(), this.tokens.matches1(z.comma) && (n = !0, this.tokens.removeToken()))), this.tokens.matches1(z.star)) this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (n && this.tokens.appendCode(","), e = !0, this.tokens.copyExpectedToken(z.star), this.tokens.copyExpectedToken(z.name), this.tokens.copyExpectedToken(z.name));
		else if (this.tokens.matches1(z.braceL)) {
			for (n && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(z.braceR);) {
				t = !0;
				let n = ta(this.tokens);
				if (n.isType || this.shouldAutomaticallyElideImportedName(n.rightName)) {
					for (; this.tokens.currentIndex() < n.endIndex;) this.tokens.removeToken();
					this.tokens.matches1(z.comma) && this.tokens.removeToken();
				} else {
					for (e = !0; this.tokens.currentIndex() < n.endIndex;) this.tokens.copyToken();
					this.tokens.matches1(z.comma) && this.tokens.copyToken();
				}
			}
			this.tokens.copyExpectedToken(z.braceR);
		}
		return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !e : this.isFlowTransformEnabled ? t && !e : !1;
	}
	shouldAutomaticallyElideImportedName(e) {
		return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(e);
	}
	processExportDefault() {
		if (yf(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
		if (!(this.tokens.matches4(z._export, z._default, z._function, z.name) || this.tokens.matches5(z._export, z._default, z.name, z._function, z.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, R._async) || this.tokens.matches4(z._export, z._default, z._class, z.name) || this.tokens.matches5(z._export, z._default, z._abstract, z._class, z.name)) && this.reactHotLoaderTransformer) {
			let e = this.nameManager.claimFreeName("_default");
			return this.tokens.replaceToken(`let ${e}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${e} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(e), !0;
		}
		return !1;
	}
	processNamedExports() {
		if (!this.isTypeScriptTransformEnabled) return !1;
		this.tokens.copyExpectedToken(z._export), this.tokens.copyExpectedToken(z.braceL);
		let e = _f(this.tokens), t = !1;
		for (; !this.tokens.matches1(z.braceR);) {
			let n = ta(this.tokens);
			if (n.isType || !e && this.shouldElideExportedName(n.leftName)) {
				for (; this.tokens.currentIndex() < n.endIndex;) this.tokens.removeToken();
				this.tokens.matches1(z.comma) && this.tokens.removeToken();
			} else {
				for (t = !0; this.tokens.currentIndex() < n.endIndex;) this.tokens.copyToken();
				this.tokens.matches1(z.comma) && this.tokens.copyToken();
			}
		}
		return this.tokens.copyExpectedToken(z.braceR), !this.keepUnusedImports && e && !t && (this.tokens.removeToken(), this.tokens.removeToken(), vf(this.tokens)), !0;
	}
	shouldElideExportedName(e) {
		return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(e) && !this.declarationInfo.valueDeclarations.has(e);
	}
}, Sf = class extends oa {
	constructor(e, t, n) {
		super(), this.rootTransformer = e, this.tokens = t, this.isImportsTransformEnabled = n;
	}
	process() {
		return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(z._enum) ? (this.processEnum(), !0) : this.tokens.matches2(z._export, z._enum) ? (this.processNamedExportEnum(), !0) : this.tokens.matches3(z._export, z._default, z._enum) ? (this.processDefaultExportEnum(), !0) : !1;
	}
	processNamedExportEnum() {
		if (this.isImportsTransformEnabled) {
			this.tokens.removeInitialToken();
			let e = this.tokens.identifierNameAtRelativeIndex(1);
			this.processEnum(), this.tokens.appendCode(` exports.${e} = ${e};`);
		} else this.tokens.copyToken(), this.processEnum();
	}
	processDefaultExportEnum() {
		this.tokens.removeInitialToken(), this.tokens.removeToken();
		let e = this.tokens.identifierNameAtRelativeIndex(1);
		this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${e};`) : this.tokens.appendCode(` export default ${e};`);
	}
	processEnum() {
		this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(z.name);
		let e = !1;
		this.tokens.matchesContextual(R._of) && (this.tokens.removeToken(), e = this.tokens.matchesContextual(R._symbol), this.tokens.removeToken());
		let t = this.tokens.matches3(z.braceL, z.name, z.eq);
		this.tokens.appendCode(" = require(\"flow-enums-runtime\")");
		let n = !e && !t;
		for (this.tokens.replaceTokenTrimmingLeftWhitespace(n ? ".Mirrored([" : "({"); !this.tokens.matches1(z.braceR);) {
			if (this.tokens.matches1(z.ellipsis)) {
				this.tokens.removeToken();
				break;
			}
			this.processEnumElement(e, t), this.tokens.matches1(z.comma) && this.tokens.copyToken();
		}
		this.tokens.replaceToken(n ? "]);" : "});");
	}
	processEnumElement(e, t) {
		if (e) {
			let e = this.tokens.identifierName();
			this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${e}")`);
		} else t ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
	}
};
//#endregion
//#region node_modules/sucrase/dist/esm/transformers/JestHoistTransformer.js
function Cf(e) {
	let t, n = e[0], r = 1;
	for (; r < e.length;) {
		let i = e[r], a = e[r + 1];
		if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null) return;
		i === "access" || i === "optionalAccess" ? (t = n, n = a(n)) : (i === "call" || i === "optionalCall") && (n = a((...e) => n.call(t, ...e)), t = void 0);
	}
	return n;
}
var wf = "jest", Tf = [
	"mock",
	"unmock",
	"enableAutomock",
	"disableAutomock"
], Ef = class e extends oa {
	__init() {
		this.hoistedFunctionNames = [];
	}
	constructor(t, n, r, i) {
		super(), this.rootTransformer = t, this.tokens = n, this.nameManager = r, this.importProcessor = i, e.prototype.__init.call(this);
	}
	process() {
		return this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(z.name, z.dot, z.name, z.parenL) && this.tokens.identifierName() === wf ? !Cf([
			this,
			"access",
			(e) => e.importProcessor,
			"optionalAccess",
			(e) => e.getGlobalNames,
			"call",
			(e) => e(),
			"optionalAccess",
			(e) => e.has,
			"call",
			(e) => e(wf)
		]) && this.extractHoistedCalls() : !1;
	}
	getHoistedCode() {
		return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map((e) => `${e}();`).join("") : "";
	}
	extractHoistedCalls() {
		this.tokens.removeToken();
		let e = !1;
		for (; this.tokens.matches3(z.dot, z.name, z.parenL);) {
			let t = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
			if (Tf.includes(t)) {
				let t = this.nameManager.claimFreeName("__jestHoist");
				this.hoistedFunctionNames.push(t), this.tokens.replaceToken(`function ${t}(){${wf}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.parenR), this.tokens.appendCode(";}"), e = !1;
			} else e ? this.tokens.copyToken() : this.tokens.replaceToken(`${wf}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.parenR), e = !0;
		}
		return !0;
	}
}, Df = class extends oa {
	constructor(e) {
		super(), this.tokens = e;
	}
	process() {
		if (this.tokens.matches1(z.num)) {
			let e = this.tokens.currentTokenCode();
			if (e.includes("_")) return this.tokens.replaceToken(e.replace(/_/g, "")), !0;
		}
		return !1;
	}
}, Of = class extends oa {
	constructor(e, t) {
		super(), this.tokens = e, this.nameManager = t;
	}
	process() {
		return this.tokens.matches2(z._catch, z.braceL) ? (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0) : !1;
	}
}, kf = class extends oa {
	constructor(e, t) {
		super(), this.tokens = e, this.nameManager = t;
	}
	process() {
		if (this.tokens.matches1(z.nullishCoalescing)) {
			let e = this.tokens.currentToken();
			return this.tokens.tokens[e.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0;
		}
		if (this.tokens.matches1(z._delete) && this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart) return this.tokens.removeInitialToken(), !0;
		let e = this.tokens.currentToken().subscriptStartIndex;
		if (e != null && this.tokens.tokens[e].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== z._super) {
			let t = this.nameManager.claimFreeName("_"), n;
			if (n = e > 0 && this.tokens.matches1AtIndex(e - 1, z._delete) && this.isLastSubscriptInChain() ? `${t} => delete ${t}` : `${t} => ${t}`, this.tokens.tokens[e].isAsyncOperation && (n = `async ${n}`), this.tokens.matches2(z.questionDot, z.parenL) || this.tokens.matches2(z.questionDot, z.lessThan)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${n}`);
			else if (this.tokens.matches2(z.questionDot, z.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}`);
			else if (this.tokens.matches1(z.questionDot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}.`);
			else if (this.tokens.matches1(z.dot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}.`);
			else if (this.tokens.matches1(z.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}[`);
			else if (this.tokens.matches1(z.parenL)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${n}(`);
			else throw Error("Unexpected subscript operator in optional chain.");
			return !0;
		}
		return !1;
	}
	isLastSubscriptInChain() {
		let e = 0;
		for (let t = this.tokens.currentIndex() + 1;; t++) {
			if (t >= this.tokens.tokens.length) throw Error("Reached the end of the code while finding the end of the access chain.");
			if (this.tokens.tokens[t].isOptionalChainStart ? e++ : this.tokens.tokens[t].isOptionalChainEnd && e--, e < 0) return !0;
			if (e === 0 && this.tokens.tokens[t].subscriptStartIndex != null) return !1;
		}
	}
	justSkippedSuper() {
		let e = 0, t = this.tokens.currentIndex() - 1;
		for (;;) {
			if (t < 0) throw Error("Reached the start of the code while finding the start of the access chain.");
			if (this.tokens.tokens[t].isOptionalChainStart ? e-- : this.tokens.tokens[t].isOptionalChainEnd && e++, e < 0) return !1;
			if (e === 0 && this.tokens.tokens[t].subscriptStartIndex != null) return this.tokens.tokens[t - 1].type === z._super;
			t--;
		}
	}
}, Af = class extends oa {
	constructor(e, t, n, r) {
		super(), this.rootTransformer = e, this.tokens = t, this.importProcessor = n, this.options = r;
	}
	process() {
		let e = this.tokens.currentIndex();
		if (this.tokens.identifierName() === "createReactClass") {
			let t = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
			return t ? this.tokens.replaceToken(`(0, ${t})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(e), !0;
		}
		if (this.tokens.matches3(z.name, z.dot, z.name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
			let t = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
			return t ? (this.tokens.replaceToken(t), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(e), !0;
		}
		return !1;
	}
	tryProcessCreateClassCall(e) {
		let t = this.findDisplayName(e);
		t && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(z.parenL), this.tokens.copyExpectedToken(z.braceL), this.tokens.appendCode(`displayName: '${t}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(z.braceR), this.tokens.copyExpectedToken(z.parenR));
	}
	findDisplayName(e) {
		return e < 2 ? null : this.tokens.matches2AtIndex(e - 2, z.name, z.eq) || e >= 2 && this.tokens.tokens[e - 2].identifierRole === K.ObjectKey ? this.tokens.identifierNameAtIndex(e - 2) : this.tokens.matches2AtIndex(e - 2, z._export, z._default) ? this.getDisplayNameFromFilename() : null;
	}
	getDisplayNameFromFilename() {
		let e = (this.options.filePath || "unknown").split("/"), t = e[e.length - 1], n = t.lastIndexOf("."), r = n === -1 ? t : t.slice(0, n);
		return r === "index" && e[e.length - 2] ? e[e.length - 2] : r;
	}
	classNeedsDisplayName() {
		let e = this.tokens.currentIndex();
		if (!this.tokens.matches2(z.parenL, z.braceL)) return !1;
		let t = e + 1, n = this.tokens.tokens[t].contextId;
		if (n == null) throw Error("Expected non-null context ID on object open-brace.");
		for (; e < this.tokens.tokens.length; e++) {
			let t = this.tokens.tokens[e];
			if (t.type === z.braceR && t.contextId === n) {
				e++;
				break;
			}
			if (this.tokens.identifierNameAtIndex(e) === "displayName" && this.tokens.tokens[e].identifierRole === K.ObjectKey && t.contextId === n) return !1;
		}
		if (e === this.tokens.tokens.length) throw Error("Unexpected end of input when processing React class.");
		return this.tokens.matches1AtIndex(e, z.parenR) || this.tokens.matches2AtIndex(e, z.comma, z.parenR);
	}
}, jf = class e extends oa {
	__init() {
		this.extractedDefaultExportName = null;
	}
	constructor(t, n) {
		super(), this.tokens = t, this.filePath = n, e.prototype.__init.call(this);
	}
	setExtractedDefaultExportName(e) {
		this.extractedDefaultExportName = e;
	}
	getPrefixCode() {
		return "\n      (function () {\n        var enterModule = require('react-hot-loader').enterModule;\n        enterModule && enterModule(module);\n      })();".replace(/\s+/g, " ").trim();
	}
	getSuffixCode() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.tokens.tokens) !t.isType && gi(t) && t.identifierRole !== K.ImportDeclaration && e.add(this.tokens.identifierNameForToken(t));
		let t = Array.from(e).map((e) => ({
			variableName: e,
			uniqueLocalName: e
		}));
		return this.extractedDefaultExportName && t.push({
			variableName: this.extractedDefaultExportName,
			uniqueLocalName: "default"
		}), `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${t.map(({ variableName: e, uniqueLocalName: t }) => `  reactHotLoader.register(${e}, "${t}", ${JSON.stringify(this.filePath || "")});`).join("\n")}
  leaveModule(module);
})();`;
	}
	process() {
		return !1;
	}
}, Mf = /* @__PURE__ */ new Set(/* @__PURE__ */ "break.case.catch.class.const.continue.debugger.default.delete.do.else.export.extends.finally.for.function.if.import.in.instanceof.new.return.super.switch.this.throw.try.typeof.var.void.while.with.yield.enum.implements.interface.let.package.private.protected.public.static.await.false.null.true".split("."));
function Nf(e) {
	if (e.length === 0 || !ui[e.charCodeAt(0)]) return !1;
	for (let t = 1; t < e.length; t++) if (!li[e.charCodeAt(t)]) return !1;
	return !Mf.has(e);
}
//#endregion
//#region node_modules/sucrase/dist/esm/transformers/TypeScriptTransformer.js
var Pf = class extends oa {
	constructor(e, t, n) {
		super(), this.rootTransformer = e, this.tokens = t, this.isImportsTransformEnabled = n;
	}
	process() {
		return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(z._public) || this.tokens.matches1(z._protected) || this.tokens.matches1(z._private) || this.tokens.matches1(z._abstract) || this.tokens.matches1(z._readonly) || this.tokens.matches1(z._override) || this.tokens.matches1(z.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(z._enum) || this.tokens.matches2(z._const, z._enum) ? (this.processEnum(), !0) : this.tokens.matches2(z._export, z._enum) || this.tokens.matches3(z._export, z._const, z._enum) ? (this.processEnum(!0), !0) : !1;
	}
	processEnum(e = !1) {
		for (this.tokens.removeInitialToken(); this.tokens.matches1(z._const) || this.tokens.matches1(z._enum);) this.tokens.removeToken();
		let t = this.tokens.identifierName();
		this.tokens.removeToken(), e && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${t}; (function (${t})`), this.tokens.copyExpectedToken(z.braceL), this.processEnumBody(t), this.tokens.copyExpectedToken(z.braceR), e && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${t} || (exports.${t} = ${t} = {}));`) : this.tokens.appendCode(`)(${t} || (${t} = {}));`);
	}
	processEnumBody(e) {
		let t = null;
		for (; !this.tokens.matches1(z.braceR);) {
			let { nameStringCode: n, variableName: r } = this.extractEnumKeyInfo(this.tokens.currentToken());
			this.tokens.removeInitialToken(), this.tokens.matches3(z.eq, z.string, z.comma) || this.tokens.matches3(z.eq, z.string, z.braceR) ? this.processStringLiteralEnumMember(e, n, r) : this.tokens.matches1(z.eq) ? this.processExplicitValueEnumMember(e, n, r) : this.processImplicitValueEnumMember(e, n, r, t), this.tokens.matches1(z.comma) && this.tokens.removeToken(), t = r ?? `${e}[${n}]`;
		}
	}
	extractEnumKeyInfo(e) {
		if (e.type === z.name) {
			let t = this.tokens.identifierNameForToken(e);
			return {
				nameStringCode: `"${t}"`,
				variableName: Nf(t) ? t : null
			};
		}
		if (e.type === z.string) {
			let t = this.tokens.stringValueForToken(e);
			return {
				nameStringCode: this.tokens.code.slice(e.start, e.end),
				variableName: Nf(t) ? t : null
			};
		}
		throw Error("Expected name or string at beginning of enum element.");
	}
	processStringLiteralEnumMember(e, t, n) {
		n == null ? (this.tokens.appendCode(`${e}[${t}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";")) : (this.tokens.appendCode(`const ${n}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${e}[${t}] = ${n};`));
	}
	processExplicitValueEnumMember(e, t, n) {
		let r = this.tokens.currentToken().rhsEndIndex;
		if (r == null) throw Error("Expected rhsEndIndex on enum assign.");
		if (n != null) {
			for (this.tokens.appendCode(`const ${n}`), this.tokens.copyToken(); this.tokens.currentIndex() < r;) this.rootTransformer.processToken();
			this.tokens.appendCode(`; ${e}[${e}[${t}] = ${n}] = ${t};`);
		} else {
			for (this.tokens.appendCode(`${e}[${e}[${t}]`), this.tokens.copyToken(); this.tokens.currentIndex() < r;) this.rootTransformer.processToken();
			this.tokens.appendCode(`] = ${t};`);
		}
	}
	processImplicitValueEnumMember(e, t, n, r) {
		let i = r == null ? "0" : `${r} + 1`;
		n != null && (this.tokens.appendCode(`const ${n} = ${i}; `), i = n), this.tokens.appendCode(`${e}[${e}[${t}] = ${i}] = ${t};`);
	}
}, Ff = class e {
	__init() {
		this.transformers = [];
	}
	__init2() {
		this.generatedVariables = [];
	}
	constructor(t, n, r, i) {
		e.prototype.__init.call(this), e.prototype.__init2.call(this), this.nameManager = t.nameManager, this.helperManager = t.helperManager;
		let { tokenProcessor: a, importProcessor: o } = t;
		this.tokens = a, this.isImportsTransformEnabled = n.includes("imports"), this.isReactHotLoaderTransformEnabled = n.includes("react-hot-loader"), this.disableESTransforms = !!i.disableESTransforms, i.disableESTransforms || (this.transformers.push(new kf(a, this.nameManager)), this.transformers.push(new Df(a)), this.transformers.push(new Of(a, this.nameManager))), n.includes("jsx") && (i.jsxRuntime !== "preserve" && this.transformers.push(new sa(this, a, o, this.nameManager, i)), this.transformers.push(new Af(this, a, o, i)));
		let s = null;
		if (n.includes("react-hot-loader")) {
			if (!i.filePath) throw Error("filePath is required when using the react-hot-loader transform.");
			s = new jf(a, i.filePath), this.transformers.push(s);
		}
		if (n.includes("imports")) {
			if (o === null) throw Error("Expected non-null importProcessor with imports transform enabled.");
			this.transformers.push(new bf(this, a, o, this.nameManager, this.helperManager, s, r, !!i.enableLegacyTypeScriptModuleInterop, n.includes("typescript"), n.includes("flow"), !!i.preserveDynamicImport, !!i.keepUnusedImports));
		} else this.transformers.push(new xf(a, this.nameManager, this.helperManager, s, n.includes("typescript"), n.includes("flow"), !!i.keepUnusedImports, i));
		n.includes("flow") && this.transformers.push(new Sf(this, a, n.includes("imports"))), n.includes("typescript") && this.transformers.push(new Pf(this, a, n.includes("imports"))), n.includes("jest") && this.transformers.push(new Ef(this, a, this.nameManager, o));
	}
	transform() {
		this.tokens.reset(), this.processBalancedCode();
		let e = this.isImportsTransformEnabled ? "\"use strict\";" : "";
		for (let t of this.transformers) e += t.getPrefixCode();
		e += this.helperManager.emitHelpers(), e += this.generatedVariables.map((e) => ` var ${e};`).join("");
		for (let t of this.transformers) e += t.getHoistedCode();
		let t = "";
		for (let e of this.transformers) t += e.getSuffixCode();
		let n = this.tokens.finish(), { code: r } = n;
		if (r.startsWith("#!")) {
			let i = r.indexOf("\n");
			return i === -1 && (i = r.length, r += "\n"), {
				code: r.slice(0, i + 1) + e + r.slice(i + 1) + t,
				mappings: this.shiftMappings(n.mappings, e.length)
			};
		}
		return {
			code: e + r + t,
			mappings: this.shiftMappings(n.mappings, e.length)
		};
	}
	processBalancedCode() {
		let e = 0, t = 0;
		for (; !this.tokens.isAtEnd();) {
			if (this.tokens.matches1(z.braceL) || this.tokens.matches1(z.dollarBraceL)) e++;
			else if (this.tokens.matches1(z.braceR)) {
				if (e === 0) return;
				e--;
			}
			if (this.tokens.matches1(z.parenL)) t++;
			else if (this.tokens.matches1(z.parenR)) {
				if (t === 0) return;
				t--;
			}
			this.processToken();
		}
	}
	processToken() {
		if (this.tokens.matches1(z._class)) this.processClass();
		else {
			for (let e of this.transformers) if (e.process()) return;
			this.tokens.copyToken();
		}
	}
	processNamedClass() {
		if (!this.tokens.matches2(z._class, z.name)) throw Error("Expected identifier for exported class name.");
		let e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
		return this.processClass(), e;
	}
	processClass() {
		let e = cf(this, this.tokens, this.nameManager, this.disableESTransforms), t = (e.headerInfo.isExpression || !e.headerInfo.className) && e.staticInitializerNames.length + e.instanceInitializerNames.length > 0, n = e.headerInfo.className;
		t && (n = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(n), this.tokens.appendCode(` (${n} =`));
		let r = this.tokens.currentToken().contextId;
		if (r == null) throw Error("Expected class to have a context ID.");
		for (this.tokens.copyExpectedToken(z._class); !this.tokens.matchesContextIdAndLabel(z.braceL, r);) this.processToken();
		this.processClassBody(e, n);
		let i = e.staticInitializerNames.map((e) => `${n}.${e}()`);
		t ? this.tokens.appendCode(`, ${i.map((e) => `${e}, `).join("")}${n})`) : e.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${i.map((e) => `${e};`).join(" ")}`);
	}
	processClassBody(e, t) {
		let { headerInfo: n, constructorInsertPos: r, constructorInitializerStatements: i, fields: a, instanceInitializerNames: o, rangesToRemove: s } = e, c = 0, l = 0, u = this.tokens.currentToken().contextId;
		if (u == null) throw Error("Expected non-null context ID on class.");
		this.tokens.copyExpectedToken(z.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");
		let d = i.length + o.length > 0;
		if (r === null && d) {
			let e = this.makeConstructorInitCode(i, o, t);
			if (n.hasSuperclass) {
				let t = this.nameManager.claimFreeName("args");
				this.tokens.appendCode(`constructor(...${t}) { super(...${t}); ${e}; }`);
			} else this.tokens.appendCode(`constructor() { ${e}; }`);
		}
		for (; !this.tokens.matchesContextIdAndLabel(z.braceR, u);) if (c < a.length && this.tokens.currentIndex() === a[c].start) {
			let e = !1;
			for (this.tokens.matches1(z.bracketL) ? this.tokens.copyTokenWithPrefix(`${a[c].initializerName}() {this`) : this.tokens.matches1(z.string) || this.tokens.matches1(z.num) ? (this.tokens.copyTokenWithPrefix(`${a[c].initializerName}() {this[`), e = !0) : this.tokens.copyTokenWithPrefix(`${a[c].initializerName}() {this.`); this.tokens.currentIndex() < a[c].end;) e && this.tokens.currentIndex() === a[c].equalsIndex && this.tokens.appendCode("]"), this.processToken();
			this.tokens.appendCode("}"), c++;
		} else if (l < s.length && this.tokens.currentIndex() >= s[l].start) {
			for (this.tokens.currentIndex() < s[l].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < s[l].end;) this.tokens.removeToken();
			l++;
		} else this.tokens.currentIndex() === r && (this.tokens.copyToken(), d && this.tokens.appendCode(`;${this.makeConstructorInitCode(i, o, t)};`)), this.processToken();
		this.tokens.copyExpectedToken(z.braceR);
	}
	makeConstructorInitCode(e, t, n) {
		return [...e, ...t.map((e) => `${n}.prototype.${e}.call(this)`)].join(";");
	}
	processPossibleArrowParamEnd() {
		if (this.tokens.matches2(z.parenR, z.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
			let e = this.tokens.currentIndex() + 1;
			for (; this.tokens.tokens[e].isType;) e++;
			if (this.tokens.matches1AtIndex(e, z.arrow)) {
				for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < e;) this.tokens.removeToken();
				return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0;
			}
		}
		return !1;
	}
	processPossibleAsyncArrowWithTypeParams() {
		if (!this.tokens.matchesContextual(R._async) && !this.tokens.matches1(z._async)) return !1;
		let e = this.tokens.tokenAtRelativeIndex(1);
		if (e.type !== z.lessThan || !e.isType) return !1;
		let t = this.tokens.currentIndex() + 1;
		for (; this.tokens.tokens[t].isType;) t++;
		if (this.tokens.matches1AtIndex(t, z.parenL)) {
			for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < t;) this.tokens.removeToken();
			return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0;
		}
		return !1;
	}
	processPossibleTypeRange() {
		if (this.tokens.currentToken().isType) {
			for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
			return !0;
		}
		return !1;
	}
	shiftMappings(e, t) {
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			r !== void 0 && (e[n] = r + t);
		}
		return e;
	}
};
(/* @__PURE__ */ Pe(((e) => {
	e.__esModule = !0, e.LinesAndColumns = void 0;
	var t = "\n", n = "\r";
	e.LinesAndColumns = function() {
		function e(e) {
			this.string = e;
			for (var r = [0], i = 0; i < e.length;) switch (e[i]) {
				case t:
					i += t.length, r.push(i);
					break;
				case n:
					i += n.length, e[i] === t && (i += t.length), r.push(i);
					break;
				default: i++;
			}
			this.offsets = r;
		}
		return e.prototype.locationForIndex = function(e) {
			if (e < 0 || e > this.string.length) return null;
			for (var t = 0, n = this.offsets; n[t + 1] <= e;) t++;
			var r = e - n[t];
			return {
				line: t,
				column: r
			};
		}, e.prototype.indexForLocation = function(e) {
			var t = e.line, n = e.column;
			return t < 0 || t >= this.offsets.length || n < 0 || n > this.lengthOfLine(t) ? null : this.offsets[t] + n;
		}, e.prototype.lengthOfLine = function(e) {
			var t = this.offsets[e];
			return (e === this.offsets.length - 1 ? this.string.length : this.offsets[e + 1]) - t;
		}, e;
	}();
})))();
//#endregion
//#region node_modules/sucrase/dist/esm/util/getTSImportedNames.js
function If(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n = 0; n < e.tokens.length; n++) e.matches1AtIndex(n, z._import) && !e.matches3AtIndex(n, z._import, z.name, z.eq) && Lf(e, n, t);
	return t;
}
function Lf(e, t, n) {
	t++, !e.matches1AtIndex(t, z.parenL) && (e.matches1AtIndex(t, z.name) && (n.add(e.identifierNameAtIndex(t)), t++, e.matches1AtIndex(t, z.comma) && t++), e.matches1AtIndex(t, z.star) && (t += 2, n.add(e.identifierNameAtIndex(t)), t++), e.matches1AtIndex(t, z.braceL) && (t++, Rf(e, t, n)));
}
function Rf(e, t, n) {
	for (;;) {
		if (e.matches1AtIndex(t, z.braceR)) return;
		let r = ta(e, t);
		if (t = r.endIndex, r.isType || n.add(r.rightName), e.matches2AtIndex(t, z.comma, z.braceR) || e.matches1AtIndex(t, z.braceR)) return;
		if (e.matches1AtIndex(t, z.comma)) t++;
		else throw Error(`Unexpected token: ${JSON.stringify(e.tokens[t])}`);
	}
}
//#endregion
//#region node_modules/sucrase/dist/esm/index.js
function zf(e, t) {
	fo(t);
	try {
		let n = Bf(e, t), r = new Ff(n, t.transforms, !!t.enableLegacyBabel5ModuleInterop, t).transform(), i = { code: r.code };
		if (t.sourceMapOptions) {
			if (!t.filePath) throw Error("filePath must be specified when generating a source map.");
			i = {
				...i,
				sourceMap: Xa(r, t.filePath, t.sourceMapOptions, e, n.tokenProcessor.tokens)
			};
		}
		return i;
	} catch (e) {
		throw t.filePath && (e.message = `Error transforming ${t.filePath}: ${e.message}`), e;
	}
}
function Bf(e, t) {
	let n = t.transforms.includes("jsx"), r = t.transforms.includes("typescript"), i = t.transforms.includes("flow"), a = t.disableESTransforms === !0, o = af(e, n, r, i), s = o.tokens, c = o.scopes, l = new ao(e, s), u = new $a(l), d = new sf(e, s, i, a, u), f = !!t.enableLegacyTypeScriptModuleInterop, p = null;
	return t.transforms.includes("imports") ? (p = new ga(l, d, f, t, t.transforms.includes("typescript"), !!t.keepUnusedImports, u), p.preprocessTokens(), eo(d, c, p.getGlobalNames()), t.transforms.includes("typescript") && !t.keepUnusedImports && p.pruneTypeOnlyImports()) : t.transforms.includes("typescript") && !t.keepUnusedImports && eo(d, c, If(d)), {
		tokenProcessor: d,
		scopes: c,
		nameManager: l,
		importProcessor: p,
		helperManager: u
	};
}
//#endregion
//#region node_modules/react-runner/dist/index.modern.js
function Vf() {
	return Vf = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Vf.apply(this, arguments);
}
var Hf = (e) => zf(e, {
	transforms: [
		"jsx",
		"typescript",
		"imports"
	],
	production: !0
}).code.substring(13), Uf = /^(\s*)(<[^>]*>|function[(\s]|\(\)[\s=]|class\s)(.*)/, Wf = ["default", "import"], Gf = (e, t) => {
	let { import: n } = t, r = function(e, t) {
		if (e == null) return {};
		var n, r, i = {}, a = Object.keys(e);
		for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
		return i;
	}(t, Wf), i = Vf({
		React: me,
		require: qf(n)
	}, r), a = Object.keys(i), o = a.map((e) => i[e]);
	return Function(...a, e)(...o);
}, Kf = (e) => {
	let { code: t, scope: n } = e;
	if (!t.trim()) return null;
	let r = {};
	Gf(Hf(((e) => e.replace(Uf, "$1export default $2$3"))(t)), Vf({ render: (e) => {
		r.default = e;
	} }, n, { exports: r }));
	let i = r.default;
	return i ? ye(i) ? i : typeof i == "function" ? _e(i) : typeof i == "string" ? i : null : null;
}, qf = (e = {}) => (t) => {
	if (!e.hasOwnProperty(t)) throw Error(`Module not found: '${t}'`);
	return e[t];
}, Jf = class extends he {
	constructor(...e) {
		super(...e), this.state = {
			element: null,
			error: null,
			prevCode: null,
			prevScope: void 0
		};
	}
	static getDerivedStateFromProps(e, t) {
		if (t.prevCode === e.code && t.prevScope === e.scope) return null;
		try {
			return {
				element: Kf(e),
				error: null,
				prevCode: e.code,
				prevScope: e.scope
			};
		} catch (t) {
			return {
				element: null,
				error: t,
				prevCode: e.code,
				prevScope: e.scope
			};
		}
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidMount() {
		var e, t;
		(e = (t = this.props).onRendered) == null || e.call(t, this.state.error || void 0);
	}
	shouldComponentUpdate(e, t) {
		return e.code !== this.props.code || e.scope !== this.props.scope || t.error !== this.state.error;
	}
	componentDidUpdate() {
		var e, t;
		(e = (t = this.props).onRendered) == null || e.call(t, this.state.error || void 0);
	}
	render() {
		return this.state.error ? null : this.state.element;
	}
}, Yf = ({ code: e, scope: t, disableCache: n }) => {
	let r = we(!0), i = we(null), [a, o] = M(() => {
		let r = _e(Jf, {
			code: e,
			scope: t,
			onRendered: (e) => {
				e ? o({
					element: n ? null : i.current,
					error: e.toString()
				}) : i.current = r;
			}
		});
		return {
			element: r,
			error: null
		};
	});
	return xe(() => {
		if (r.current) return void (r.current = !1);
		let a = _e(Jf, {
			code: e,
			scope: t,
			onRendered: (e) => {
				e ? o({
					element: n ? null : i.current,
					error: e.toString()
				}) : i.current = a;
			}
		});
		o({
			element: a,
			error: null
		});
	}, [
		e,
		t,
		n
	]), a;
}, Xf = {
	1: "col-span-1",
	2: "col-span-2",
	3: "col-span-3",
	4: "col-span-4",
	5: "col-span-5",
	6: "col-span-6",
	7: "col-span-7",
	8: "col-span-8",
	9: "col-span-9",
	10: "col-span-10",
	11: "col-span-11",
	12: "col-span-12",
	full: "col-span-full",
	auto: "col-auto"
}, Zf = {
	1: "sm:col-span-1",
	2: "sm:col-span-2",
	3: "sm:col-span-3",
	4: "sm:col-span-4",
	5: "sm:col-span-5",
	6: "sm:col-span-6",
	7: "sm:col-span-7",
	8: "sm:col-span-8",
	9: "sm:col-span-9",
	10: "sm:col-span-10",
	11: "sm:col-span-11",
	12: "sm:col-span-12",
	full: "sm:col-span-full",
	auto: "sm:col-auto"
}, Qf = {
	1: "md:col-span-1",
	2: "md:col-span-2",
	3: "md:col-span-3",
	4: "md:col-span-4",
	5: "md:col-span-5",
	6: "md:col-span-6",
	7: "md:col-span-7",
	8: "md:col-span-8",
	9: "md:col-span-9",
	10: "md:col-span-10",
	11: "md:col-span-11",
	12: "md:col-span-12",
	full: "md:col-span-full",
	auto: "md:col-auto"
}, $f = {
	1: "lg:col-span-1",
	2: "lg:col-span-2",
	3: "lg:col-span-3",
	4: "lg:col-span-4",
	5: "lg:col-span-5",
	6: "lg:col-span-6",
	7: "lg:col-span-7",
	8: "lg:col-span-8",
	9: "lg:col-span-9",
	10: "lg:col-span-10",
	11: "lg:col-span-11",
	12: "lg:col-span-12",
	full: "lg:col-span-full",
	auto: "lg:col-auto"
}, ep = {
	1: "xl:col-span-1",
	2: "xl:col-span-2",
	3: "xl:col-span-3",
	4: "xl:col-span-4",
	5: "xl:col-span-5",
	6: "xl:col-span-6",
	7: "xl:col-span-7",
	8: "xl:col-span-8",
	9: "xl:col-span-9",
	10: "xl:col-span-10",
	11: "xl:col-span-11",
	12: "xl:col-span-12",
	full: "xl:col-span-full",
	auto: "xl:col-auto"
};
function tp(e) {
	if (e === void 0) return [];
	if (typeof e == "number" || typeof e == "string") return [Xf[String(e)] || ""];
	let t = [];
	return e.base !== void 0 && t.push(Xf[String(e.base)] || ""), e.sm !== void 0 && t.push(Zf[String(e.sm)] || ""), e.md !== void 0 && t.push(Qf[String(e.md)] || ""), e.lg !== void 0 && t.push($f[String(e.lg)] || ""), e.xl !== void 0 && t.push(ep[String(e.xl)] || ""), t.filter(Boolean);
}
function np({ children: e, className: t = "", span: n = 12, id: r, ...i }) {
	let a = gn(), o = tp(n), s = vn("grid-col", a, r);
	return /* @__PURE__ */ N("div", {
		className: L(s.className, o, t),
		"data-rakit": "grid-col",
		...s.id ? { id: s.id } : {},
		...i,
		children: e
	});
}
//#endregion
//#region src/components/ui/grid/Grid.tsx
var rp = {
	1: "grid-cols-1",
	2: "grid-cols-2",
	3: "grid-cols-3",
	4: "grid-cols-4",
	5: "grid-cols-5",
	6: "grid-cols-6",
	7: "grid-cols-7",
	8: "grid-cols-8",
	9: "grid-cols-9",
	10: "grid-cols-10",
	11: "grid-cols-11",
	12: "grid-cols-12"
}, ip = {
	1: "sm:grid-cols-1",
	2: "sm:grid-cols-2",
	3: "sm:grid-cols-3",
	4: "sm:grid-cols-4",
	5: "sm:grid-cols-5",
	6: "sm:grid-cols-6",
	7: "sm:grid-cols-7",
	8: "sm:grid-cols-8",
	9: "sm:grid-cols-9",
	10: "sm:grid-cols-10",
	11: "sm:grid-cols-11",
	12: "sm:grid-cols-12"
}, ap = {
	1: "md:grid-cols-1",
	2: "md:grid-cols-2",
	3: "md:grid-cols-3",
	4: "md:grid-cols-4",
	5: "md:grid-cols-5",
	6: "md:grid-cols-6",
	7: "md:grid-cols-7",
	8: "md:grid-cols-8",
	9: "md:grid-cols-9",
	10: "md:grid-cols-10",
	11: "md:grid-cols-11",
	12: "md:grid-cols-12"
}, op = {
	1: "lg:grid-cols-1",
	2: "lg:grid-cols-2",
	3: "lg:grid-cols-3",
	4: "lg:grid-cols-4",
	5: "lg:grid-cols-5",
	6: "lg:grid-cols-6",
	7: "lg:grid-cols-7",
	8: "lg:grid-cols-8",
	9: "lg:grid-cols-9",
	10: "lg:grid-cols-10",
	11: "lg:grid-cols-11",
	12: "lg:grid-cols-12"
}, sp = {
	1: "xl:grid-cols-1",
	2: "xl:grid-cols-2",
	3: "xl:grid-cols-3",
	4: "xl:grid-cols-4",
	5: "xl:grid-cols-5",
	6: "xl:grid-cols-6",
	7: "xl:grid-cols-7",
	8: "xl:grid-cols-8",
	9: "xl:grid-cols-9",
	10: "xl:grid-cols-10",
	11: "xl:grid-cols-11",
	12: "xl:grid-cols-12"
}, cp = {
	none: "gap-0",
	xs: "gap-2",
	sm: "gap-3",
	md: "gap-4",
	lg: "gap-6",
	xl: "gap-8"
}, lp = {
	start: "items-start",
	center: "items-center",
	end: "items-end",
	stretch: "items-stretch",
	baseline: "items-baseline"
}, up = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
	between: "justify-between",
	around: "justify-around",
	evenly: "justify-evenly"
};
function dp(e) {
	if (e === void 0) return ["grid-cols-12"];
	if (typeof e == "number") return [rp[e] || "grid-cols-12"];
	let t = [];
	return e.base !== void 0 && t.push(rp[e.base] || ""), e.sm !== void 0 && t.push(ip[e.sm] || ""), e.md !== void 0 && t.push(ap[e.md] || ""), e.lg !== void 0 && t.push(op[e.lg] || ""), e.xl !== void 0 && t.push(sp[e.xl] || ""), t.filter(Boolean);
}
function fp(e) {
	return e ? typeof e == "string" ? cp[e] || "gap-6" : cp[e.base || "lg"] || "gap-6" : "gap-6";
}
function pp({ children: e, className: t = "", cols: n, gap: r, align: i = "start", justify: a, id: o, style: s, ...c }) {
	let l = gn(), u = l?.components?.grid, d = n ?? u?.defaultCols ?? 12, f = r ?? u?.defaultGap ?? "lg", p = dp(d), m = fp(f), h = i ? lp[i] : "", g = a ? up[a] : "", _ = vn("grid", l, o);
	return /* @__PURE__ */ N("div", {
		className: L("grid w-full", _.className, p, m, h, g, u?.className, t),
		"data-rakit": "grid",
		style: {
			...u?.style,
			...s
		},
		..._.id ? { id: _.id } : {},
		...c,
		children: e
	});
}
pp.Col = np;
//#endregion
//#region src/components/ui/typography/Heading.tsx
var mp = {
	h1: "3xl",
	h2: "2xl",
	h3: "xl",
	h4: "lg",
	h5: "md",
	h6: "sm"
}, hp = {
	xs: "text-xs",
	sm: "text-sm",
	md: "text-base",
	lg: "text-lg",
	xl: "text-xl sm:text-2xl",
	"2xl": "text-2xl sm:text-3xl",
	"3xl": "text-3xl sm:text-4xl",
	"4xl": "text-4xl sm:text-5xl"
}, gp = {
	light: "font-light",
	normal: "font-normal",
	medium: "font-medium",
	semibold: "font-semibold",
	bold: "font-bold",
	extrabold: "font-extrabold"
}, _p = {
	default: "text-slate-900 dark:text-slate-100",
	secondary: "text-slate-700 dark:text-slate-300",
	muted: "text-slate-500 dark:text-slate-400",
	primary: "text-emerald-700 dark:text-emerald-400",
	success: "text-emerald-600 dark:text-emerald-400",
	warning: "text-amber-700 dark:text-amber-400",
	danger: "text-rose-700 dark:text-rose-400",
	info: "text-sky-700 dark:text-sky-400",
	inverse: "text-white dark:text-slate-900"
}, vp = {
	tighter: "tracking-tighter",
	tight: "tracking-tight",
	normal: "tracking-normal",
	wide: "tracking-wide",
	wider: "tracking-wider"
};
function yp({ as: e = "h2", size: t, weight: n, color: r = "default", tracking: i = "tight", className: a = "", id: o, children: s, ...c }) {
	let l = vn("heading", gn(), o), u = t || mp[e], d = n || (u === "4xl" || u === "3xl" || u === "2xl" ? "extrabold" : u === "xl" || u === "lg" ? "bold" : "semibold");
	return /* @__PURE__ */ N(e, {
		id: l.id,
		"data-rakit": l["data-rakit"],
		className: L("rakit-heading font-display leading-tight", l.className, hp[u], gp[d], _p[r], vp[i], a),
		...c,
		children: s
	});
}
//#endregion
//#region src/components/ui/typography/Text.tsx
var bp = {
	xs: "text-xs",
	sm: "text-sm",
	md: "text-base",
	lg: "text-lg",
	xl: "text-xl"
}, xp = {
	light: "font-light",
	normal: "font-normal",
	medium: "font-medium",
	semibold: "font-semibold",
	bold: "font-bold",
	extrabold: "font-extrabold"
}, Sp = {
	default: "text-slate-900 dark:text-slate-100",
	secondary: "text-slate-700 dark:text-slate-300",
	muted: "text-slate-500 dark:text-slate-400",
	primary: "text-emerald-600 dark:text-emerald-400",
	success: "text-emerald-600 dark:text-emerald-400",
	warning: "text-amber-600 dark:text-amber-400",
	danger: "text-rose-600 dark:text-rose-400",
	info: "text-sky-600 dark:text-sky-400",
	inverse: "text-white dark:text-slate-950"
}, Cp = {
	body: "",
	lead: "text-lg md:text-xl font-normal text-slate-600 dark:text-slate-300 leading-relaxed",
	caption: "text-xs text-slate-500 dark:text-slate-400 tracking-wide",
	label: "text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400",
	mono: "font-mono text-sm tracking-tight"
}, wp = ({ as: e = "span", size: t = "md", weight: n = "normal", color: r = "default", variant: i = "body", truncate: a = !1, italic: o = !1, underline: s = !1, delete: c = !1, mark: l = !1, id: u, className: d = "", children: f, ...p }) => {
	let m = vn("text", gn(), u), h = [
		"rakit-text",
		m.className,
		bp[t],
		xp[n],
		Sp[r],
		Cp[i],
		a ? "truncate block" : "",
		o ? "italic" : "",
		s ? "underline underline-offset-4" : "",
		c ? "line-through opacity-75" : "",
		l ? "bg-amber-100 dark:bg-amber-950/60 px-1 py-0.5 rounded text-amber-900 dark:text-amber-200" : "",
		d
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N(e, {
		id: m.id,
		"data-rakit": m["data-rakit"],
		className: h,
		...p,
		children: f
	});
}, Tp = {
	xs: "text-xs leading-5",
	sm: "text-sm leading-6",
	md: "text-base leading-7",
	lg: "text-lg leading-8",
	xl: "text-xl leading-9"
}, Ep = {
	default: "text-slate-800 dark:text-slate-200",
	secondary: "text-slate-600 dark:text-slate-400",
	muted: "text-slate-500 dark:text-slate-400",
	primary: "text-emerald-600 dark:text-emerald-400",
	success: "text-emerald-600 dark:text-emerald-400",
	warning: "text-amber-600 dark:text-amber-400",
	danger: "text-rose-600 dark:text-rose-400",
	info: "text-sky-600 dark:text-sky-400",
	inverse: "text-white dark:text-slate-950"
}, Dp = ({ size: e = "md", color: t = "default", gutterBottom: n = !0, lead: r = !1, id: i, className: a = "", children: o, ...s }) => {
	let c = vn("paragraph", gn(), i), l = [
		"rakit-paragraph",
		c.className,
		r ? "text-lg md:text-xl font-normal leading-relaxed text-slate-600 dark:text-slate-300" : Tp[e],
		r ? "" : Ep[t],
		n ? "mb-4" : "mb-0",
		a
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N("p", {
		id: c.id,
		"data-rakit": c["data-rakit"],
		className: l,
		...s,
		children: o
	});
}, Op = {
	xs: "text-[10px] px-1 py-0.5 min-w-[18px] min-h-[18px]",
	sm: "text-xs px-1.5 py-0.5 min-w-[20px] min-h-[20px]",
	md: "text-xs px-2 py-1 min-w-[24px] min-h-[24px]",
	lg: "text-sm px-2.5 py-1 min-w-[28px] min-h-[28px]"
}, kp = ({ size: e = "sm", id: t, className: n = "", children: r, ...i }) => {
	let a = vn("kbd", gn(), t), o = [
		"rakit-kbd inline-flex items-center justify-center font-mono font-medium rounded border",
		"bg-slate-100 text-slate-700 border-slate-300 border-b-2 shadow-2xs",
		"dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:border-b-slate-900",
		a.className,
		Op[e],
		n
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N("kbd", {
		id: a.id,
		"data-rakit": a["data-rakit"],
		className: o,
		...i,
		children: r
	});
}, Ap = ({ id: e, className: t = "", children: n, ...r }) => {
	let i = vn("code", gn(), e), a = [
		"rakit-code font-mono text-xs md:text-sm px-1.5 py-0.5 rounded-md",
		"bg-slate-100 text-emerald-700 border border-slate-200/80",
		"dark:bg-slate-800/80 dark:text-emerald-400 dark:border-slate-700/80",
		i.className,
		t
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N("code", {
		id: i.id,
		"data-rakit": i["data-rakit"],
		className: a,
		...r,
		children: n
	});
}, jp = ({ cite: e, author: t, color: n = "primary", id: r, className: i = "", children: a, ...o }) => {
	let s = vn("blockquote", gn(), r), c = {
		primary: "border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-800 dark:text-slate-200",
		slate: "border-slate-400 bg-slate-50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200",
		amber: "border-amber-500 bg-amber-50/40 dark:bg-amber-950/20 text-slate-800 dark:text-slate-200",
		rose: "border-rose-500 bg-rose-50/40 dark:bg-rose-950/20 text-slate-800 dark:text-slate-200"
	}, l = [
		"rakit-blockquote border-l-4 pl-4 py-2.5 my-4 italic rounded-r-lg",
		c[n] || c.primary,
		s.className,
		i
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ P("blockquote", {
		id: s.id,
		"data-rakit": s["data-rakit"],
		className: l,
		cite: e,
		...o,
		children: [/* @__PURE__ */ N("div", {
			className: "not-italic text-base md:text-lg leading-relaxed italic",
			children: a
		}), (t || e) && /* @__PURE__ */ P("footer", {
			className: "mt-2 not-italic text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",
			children: [
				/* @__PURE__ */ N("span", { children: "—" }),
				t && /* @__PURE__ */ N("span", { children: t }),
				e && /* @__PURE__ */ P("cite", {
					className: "italic font-normal",
					children: [
						"(",
						e,
						")"
					]
				})
			]
		})]
	});
}, Mp = ({ href: e, external: t = !1, underline: n = "hover", id: r, className: i = "", children: a, target: o, rel: s, ...c }) => {
	let l = vn("link", gn(), r), u = {
		always: "underline underline-offset-4",
		hover: "hover:underline underline-offset-4",
		none: "no-underline"
	}, d = t ? "_blank" : o, f = t ? s || "noopener noreferrer" : s, p = [
		"rakit-link inline-flex items-center gap-1 font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-150 cursor-pointer",
		u[n],
		l.className,
		i
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ P("a", {
		id: l.id,
		href: e,
		target: d,
		rel: f,
		className: p,
		"data-rakit": l["data-rakit"],
		...c,
		children: [a, t && /* @__PURE__ */ N("svg", {
			className: "w-3.5 h-3.5 opacity-70",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: /* @__PURE__ */ N("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 2,
				d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			})
		})]
	});
}, Np = ({ className: e = "", children: t, ...n }) => /* @__PURE__ */ N("div", {
	className: `rakit-typography ${e}`,
	"data-rakit": "typography",
	...n,
	children: t
});
Np.Heading = yp, Np.Text = wp, Np.Paragraph = Dp, Np.Kbd = kp, Np.Code = Ap, Np.Blockquote = jp, Np.Link = Mp;
//#endregion
//#region src/components/ui/segmented-control/index.tsx
var Pp = {
	xs: "p-0.5 rounded-lg gap-0.5",
	sm: "p-0.5 rounded-lg gap-1",
	md: "p-1 rounded-xl gap-1",
	lg: "p-1 rounded-xl gap-1.5"
}, Fp = {
	xs: {
		button: "px-2 py-0.5 text-xs font-medium rounded-md gap-1 h-6",
		icon: "w-3 h-3"
	},
	sm: {
		button: "px-2.5 py-1 text-xs font-medium rounded-md gap-1.5 h-7",
		icon: "w-3.5 h-3.5"
	},
	md: {
		button: "px-3.5 py-1 text-sm font-medium rounded-lg gap-2 h-8",
		icon: "w-4 h-4"
	},
	lg: {
		button: "px-4 py-1.5 text-base font-medium rounded-lg gap-2.5 h-9",
		icon: "w-4.5 h-4.5"
	}
};
function Ip({ items: e = [], value: t, defaultValue: n, onChange: r, size: i = "md", orientation: a = "horizontal", fullWidth: o = !1, disabled: s = !1, theme: c = "light", className: l = "", itemClassName: u = "" }) {
	let d = c === "dark", f = a === "vertical", p = n || e[0]?.value || "", [m, h] = M(p), g = t === void 0 ? m : t, _ = (e, n) => {
		s || n || (t === void 0 && h(e), r?.(e));
	};
	return /* @__PURE__ */ N("div", {
		role: "group",
		"aria-orientation": a,
		"data-rakit": "segmented-control",
		className: L("rakit-segmented-control inline-flex select-none transition-colors border", f ? "flex-col" : "items-center", o ? "w-full" : "", Pp[i], d ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-100/90 border-slate-200/70", s ? "opacity-50 cursor-not-allowed pointer-events-none" : "", l),
		children: e.map((e) => {
			let t = e.value === g, n = s || e.disabled;
			return /* @__PURE__ */ P("button", {
				type: "button",
				role: "radio",
				title: e.title,
				"aria-label": e.title || (typeof e.label == "string" ? e.label : void 0),
				"aria-checked": t,
				disabled: n,
				onClick: () => _(e.value, e.disabled),
				className: L("relative inline-flex items-center justify-center transition-all duration-150", o ? "flex-1" : "", Fp[i].button, n ? "opacity-40 cursor-not-allowed" : "cursor-pointer", t ? d ? "bg-slate-700 text-white shadow-2xs font-semibold" : "bg-white text-slate-900 shadow-2xs font-semibold" : d ? "text-slate-400 hover:text-white hover:bg-slate-700/40" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50", u),
				children: [e.icon && /* @__PURE__ */ N("span", {
					className: L("shrink-0", Fp[i].icon),
					children: e.icon
				}), e.label && /* @__PURE__ */ N("span", {
					className: "truncate",
					children: e.label
				})]
			}, e.value);
		})
	});
}
//#endregion
//#region src/components/ui/breadcrumb/BreadcrumbItem.tsx
var Lp = ({ active: e = !1, className: t = "", children: n, ...r }) => {
	let i = [
		"rakit-breadcrumb-item inline-flex items-center gap-1.5",
		e ? "font-medium text-slate-900 dark:text-slate-100" : "text-slate-500 dark:text-slate-400",
		t
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N("li", {
		className: i,
		"data-rakit": "breadcrumb-item",
		...r,
		children: n
	});
}, Rp = ({ href: e, onClick: t, as: n = "a", className: r = "", children: i, ...a }) => {
	let o = [
		"rakit-breadcrumb-link inline-flex items-center gap-1.5 transition-colors duration-150",
		"hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer",
		r
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N(n, {
		href: e,
		onClick: t,
		className: o,
		"data-rakit": "breadcrumb-link",
		...a,
		children: i
	});
}, zp = ({ className: e = "", children: t, ...n }) => {
	let r = ["rakit-breadcrumb-page font-semibold text-slate-900 dark:text-slate-100", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ N("span", {
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: r,
		"data-rakit": "breadcrumb-page",
		...n,
		children: t
	});
}, Bp = (e = "slash") => {
	if (me.isValidElement(e)) return e;
	switch (e) {
		case "chevron": return /* @__PURE__ */ N("svg", {
			className: "w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: /* @__PURE__ */ N("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 2,
				d: "M9 5l7 7-7 7"
			})
		});
		case "arrow": return /* @__PURE__ */ N("svg", {
			className: "w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: /* @__PURE__ */ N("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 2,
				d: "M14 5l7 7m0 0l-7 7m7-7H3"
			})
		});
		case "bullet": return /* @__PURE__ */ N("span", {
			className: "text-slate-300 dark:text-slate-600 select-none",
			children: "•"
		});
		default: return /* @__PURE__ */ N("span", {
			className: "text-slate-300 dark:text-slate-600 select-none font-mono",
			children: "/"
		});
	}
}, Vp = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ N("li", {
	role: "presentation",
	"aria-hidden": "true",
	className: `rakit-breadcrumb-separator inline-flex items-center text-slate-400 dark:text-slate-500 select-none ${t}`,
	"data-rakit": "breadcrumb-separator",
	...n,
	children: e || Bp("slash")
}), Hp = {
	xs: "text-xs gap-1",
	sm: "text-xs gap-1.5",
	md: "text-sm gap-2",
	lg: "text-base gap-2.5"
}, Up = ({ items: e, separator: t = "slash", size: n = "sm", maxItems: r, id: i, className: a = "", children: o, ...s }) => {
	let c = vn("breadcrumb", gn(), i), l = [
		"rakit-breadcrumb",
		c.className,
		a
	].filter(Boolean).join(" "), u = [
		"flex flex-wrap items-center",
		Hp[n],
		"text-slate-500 dark:text-slate-400 font-medium"
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ N("nav", {
		id: c.id,
		"data-rakit": c["data-rakit"],
		"aria-label": "Breadcrumb",
		className: l,
		...s,
		children: /* @__PURE__ */ N("ol", {
			className: u,
			children: e && e.length > 0 ? e.map((n, r) => {
				let i = r === e.length - 1, a = n.active ?? i;
				return /* @__PURE__ */ P(me.Fragment, { children: [/* @__PURE__ */ P(Lp, {
					active: a,
					children: [n.icon && /* @__PURE__ */ N("span", {
						className: "inline-flex shrink-0",
						children: n.icon
					}), a ? /* @__PURE__ */ N(zp, { children: n.label }) : /* @__PURE__ */ N(Rp, {
						href: n.href,
						onClick: n.onClick,
						children: n.label
					})]
				}), !i && /* @__PURE__ */ N(Vp, { children: Bp(t) })] }, n.id || r);
			}) : o
		})
	});
};
Up.Item = Lp, Up.Link = Rp, Up.Page = zp, Up.Separator = Vp;
//#endregion
//#region src/components/ui/code-editor/LivePreview.tsx
var Wp = {
	Button: xn,
	Badge: wn,
	Card: Wn,
	TextField: or,
	Select: lr,
	Checkbox: er,
	Switch: mr,
	Radio: fr,
	RadioGroup: pr,
	TextArea: sr,
	Autocomplete: cr,
	MultiSelect: ur,
	Tabs: _r,
	Table: rr,
	Modal: Zn,
	Grid: pp,
	Typography: Np,
	SegmentedControl: Ip,
	EmptyState: $n,
	Breadcrumb: Up
}, Gp = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
function Kp(e) {
	if (!e) return "";
	let t = e.trim();
	if (/export\s+default\s+/.test(t) || /^\s*<[a-zA-Z]/.test(t)) return t;
	let n = t.match(/(?:export\s+)?(?:function|const|class)\s+([A-Z][a-zA-Z0-9_$]*)/);
	return n && n[1] && (t += `\nexport default ${n[1]};`), t;
}
function qp({ code: n, scope: r, className: i = "", fallback: a = null, onError: o }) {
	let s = Ce(() => {
		let t = {}, n = {};
		if (r) for (let [e, i] of Object.entries(r)) e === "import" && i && typeof i == "object" ? Object.assign(n, i) : Gp.test(e) ? t[e] = i : n[e] = i;
		let i = {};
		for (let [e, t] of Object.entries(me)) Gp.test(e) && (i[e] = t);
		let a = {};
		for (let [t, n] of Object.entries(e)) Gp.test(t) && (a[t] = n);
		return {
			React: me,
			...i,
			...Wp,
			...a,
			...t,
			import: {
				react: me,
				"react/jsx-runtime": me,
				"lucide-react": e,
				"@zarr20/rakit-ui": {
					...Wp,
					...n["@zarr20/rakit-ui"] || {}
				},
				"@zarr20/rakit-ui/styles.css": {},
				"@zarr20/rakit-ui/style.css": {},
				"@zarr20/rakit-routes": n["@zarr20/rakit-routes"] || {},
				...n
			}
		};
	}, [r]), { element: c, error: l } = Yf({
		code: Ce(() => Kp(n), [n]),
		scope: s
	});
	return me.useEffect(() => {
		o?.(l || null);
	}, [l, o]), l ? /* @__PURE__ */ N("div", {
		className: "w-full h-full p-4 flex flex-col justify-center items-center",
		children: /* @__PURE__ */ P("div", {
			className: "w-full max-w-xl p-4 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-900/80 shadow-2xs text-rose-800 dark:text-rose-200",
			children: [/* @__PURE__ */ P("div", {
				className: "flex items-center gap-2 font-semibold text-xs text-rose-700 dark:text-rose-300 mb-2",
				children: [/* @__PURE__ */ N(t, { className: "w-4 h-4 text-rose-500 shrink-0" }), /* @__PURE__ */ N("span", { children: "Kompilasi / Runtime Error:" })]
			}), /* @__PURE__ */ N("pre", {
				className: "font-mono text-xs whitespace-pre-wrap leading-relaxed text-rose-900 dark:text-rose-200 overflow-x-auto max-h-48 p-2 rounded-lg bg-rose-100/60 dark:bg-rose-900/40",
				children: typeof l == "string" ? l : l?.message || String(l)
			})]
		})
	}) : /* @__PURE__ */ N("div", {
		className: `w-full h-full flex flex-col ${i}`,
		children: c || a
	});
}
//#endregion
//#region src/components/ui/code-editor/LivePlayground.tsx
function Jp({ initialCode: e = "import React, { useState } from 'react';\nimport { Button, Card, Badge } from '@zarr20/rakit-ui';\nimport { Sparkles, Heart } from 'lucide-react';\n\nexport default function App() {\n  const [likes, setLikes] = useState(0);\n\n  return (\n    <Card variant=\"bordered\" padding=\"large\" className=\"max-w-md mx-auto my-6 text-center shadow-lg\">\n      <div className=\"flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800\">\n        <span className=\"font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-1.5\">\n          <Sparkles className=\"w-4 h-4 text-emerald-500\" />\n          Rakit Live Preview\n        </span>\n        <Badge variant=\"primary\" size=\"xs\">Live TSX</Badge>\n      </div>\n\n      <p className=\"text-slate-600 dark:text-slate-300 text-sm mt-4\">\n        Edit kode TSX di sebelah kiri dan lihat hasil rendering secara langsung!\n      </p>\n\n      <div className=\"mt-6 flex justify-center items-center gap-3\">\n        <Button\n          variant=\"primary\"\n          size=\"md\"\n          leftIcon={<Heart className=\"w-4 h-4 text-rose-400 fill-rose-400\" />}\n          onClick={() => setLikes(likes + 1)}\n        >\n          Suka ({likes})\n        </Button>\n        <Button\n          variant=\"outline\"\n          size=\"md\"\n          onClick={() => setLikes(0)}\n        >\n          Reset\n        </Button>\n      </div>\n    </Card>\n  );\n}", code: t, onChange: n, scope: r, theme: i, defaultViewMode: a = "split", defaultViewport: s = "desktop", title: c = "App.tsx", height: l = "580px", readOnly: u = !1, showToolbar: d = !0, className: m = "", previewClassName: _ = "", editorClassName: v = "", extraActions: y }) {
	let [b, x] = M(e), [S, C] = M(a), [w, T] = M(s), [ee, te] = M(i || "dark"), [ne, re] = M(!1), E = t === void 0 ? b : t, D = (i === void 0 ? ee : i) === "dark", oe = (e) => {
		t === void 0 && x(e), n?.(e);
	}, k = () => {
		oe(e);
	}, se = async () => {
		try {
			await navigator.clipboard.writeText(E), re(!0), setTimeout(() => re(!1), 1500);
		} catch {}
	}, j = () => {
		te((e) => e === "dark" ? "light" : "dark");
	}, ue = Ce(() => {
		switch (w) {
			case "mobile": return "375px";
			case "tablet": return "768px";
			default: return "100%";
		}
	}, [w]);
	return /* @__PURE__ */ P("div", {
		className: L("w-full flex flex-col rounded-2xl border overflow-hidden shadow-xl transition-colors", D ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200/90", m),
		children: [d && /* @__PURE__ */ P("div", {
			className: L("w-full flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 border-b select-none transition-colors shrink-0", D ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200/80 text-slate-800"),
			children: [
				/* @__PURE__ */ P("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [/* @__PURE__ */ P("span", {
						className: "font-mono text-xs font-semibold flex items-center gap-1.5",
						children: [/* @__PURE__ */ N("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }), c]
					}), /* @__PURE__ */ N(wn, {
						variant: "subtle",
						size: "xs",
						className: "font-mono text-[10px]",
						children: "Live TSX"
					})]
				}),
				/* @__PURE__ */ P("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [/* @__PURE__ */ P("div", {
						className: L("flex items-center p-0.5 rounded-lg border text-xs", D ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-200/70 border-slate-300/80"),
						children: [
							/* @__PURE__ */ P("button", {
								type: "button",
								onClick: () => C("split"),
								className: L("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors", S === "split" ? D ? "bg-slate-700 text-white shadow-2xs font-semibold" : "bg-white text-slate-900 shadow-2xs font-semibold" : D ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
								title: "Split View (Editor & Live Preview)",
								children: [/* @__PURE__ */ N(p, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
									className: "hidden sm:inline",
									children: "Split"
								})]
							}),
							/* @__PURE__ */ P("button", {
								type: "button",
								onClick: () => C("code"),
								className: L("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors", S === "code" ? D ? "bg-slate-700 text-white shadow-2xs font-semibold" : "bg-white text-slate-900 shadow-2xs font-semibold" : D ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
								title: "Code Editor Only",
								children: [/* @__PURE__ */ N(f, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
									className: "hidden sm:inline",
									children: "Code"
								})]
							}),
							/* @__PURE__ */ P("button", {
								type: "button",
								onClick: () => C("preview"),
								className: L("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors", S === "preview" ? D ? "bg-slate-700 text-white shadow-2xs font-semibold" : "bg-white text-slate-900 shadow-2xs font-semibold" : D ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
								title: "Live Preview Only",
								children: [/* @__PURE__ */ N(g, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
									className: "hidden sm:inline",
									children: "Preview"
								})]
							})
						]
					}), S !== "code" && /* @__PURE__ */ P("div", {
						className: L("flex items-center p-0.5 rounded-lg border text-xs", D ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-200/70 border-slate-300/80"),
						children: [
							/* @__PURE__ */ N("button", {
								type: "button",
								onClick: () => T("desktop"),
								className: L("p-1.5 rounded-md cursor-pointer transition-colors", w === "desktop" ? D ? "bg-slate-700 text-white shadow-2xs" : "bg-white text-slate-900 shadow-2xs" : D ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
								title: "Desktop (100%)",
								children: /* @__PURE__ */ N(ie, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ N("button", {
								type: "button",
								onClick: () => T("tablet"),
								className: L("p-1.5 rounded-md cursor-pointer transition-colors", w === "tablet" ? D ? "bg-slate-700 text-white shadow-2xs" : "bg-white text-slate-900 shadow-2xs" : D ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
								title: "Tablet (768px)",
								children: /* @__PURE__ */ N(A, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ N("button", {
								type: "button",
								onClick: () => T("mobile"),
								className: L("p-1.5 rounded-md cursor-pointer transition-colors", w === "mobile" ? D ? "bg-slate-700 text-white shadow-2xs" : "bg-white text-slate-900 shadow-2xs" : D ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
								title: "Mobile (375px)",
								children: /* @__PURE__ */ N(ce, { className: "w-3.5 h-3.5" })
							})
						]
					})]
				}),
				/* @__PURE__ */ P("div", {
					className: "flex items-center gap-1.5 ml-auto shrink-0",
					children: [
						/* @__PURE__ */ N(xn, {
							type: "button",
							variant: "outline",
							size: "xs",
							onClick: j,
							leftIcon: D ? /* @__PURE__ */ N(le, { className: "w-3.5 h-3.5 text-amber-400" }) : /* @__PURE__ */ N(ae, { className: "w-3.5 h-3.5 text-slate-600" }),
							title: `Switch to ${D ? "light" : "dark"} mode`
						}),
						!u && /* @__PURE__ */ N(xn, {
							type: "button",
							variant: "outline",
							size: "xs",
							onClick: k,
							leftIcon: /* @__PURE__ */ N(O, { className: "w-3.5 h-3.5 text-slate-400" }),
							title: "Reset to initial code",
							children: /* @__PURE__ */ N("span", {
								className: "hidden sm:inline",
								children: "Reset"
							})
						}),
						/* @__PURE__ */ N(xn, {
							type: "button",
							variant: "outline",
							size: "xs",
							onClick: se,
							leftIcon: ne ? /* @__PURE__ */ N(o, { className: "w-3.5 h-3.5 text-emerald-500" }) : /* @__PURE__ */ N(h, { className: "w-3.5 h-3.5" }),
							title: "Copy code",
							children: /* @__PURE__ */ N("span", {
								className: "hidden sm:inline",
								children: ne ? "Copied" : "Copy"
							})
						}),
						y
					]
				})
			]
		}), /* @__PURE__ */ P("div", {
			style: { height: typeof l == "number" ? `${l}px` : l },
			className: "w-full flex flex-col lg:flex-row overflow-hidden relative",
			children: [(S === "split" || S === "code") && /* @__PURE__ */ N("div", {
				className: L("h-full overflow-hidden transition-all", S === "split" ? "w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-800/80" : "w-full", v),
				children: /* @__PURE__ */ N(Mr, {
					value: E,
					onChange: oe,
					language: "tsx",
					theme: D ? "dark" : "light",
					readOnly: u,
					showToolbar: !1,
					showLineNumbers: !0,
					height: "100%",
					className: "border-0 rounded-none h-full"
				})
			}), (S === "split" || S === "preview") && /* @__PURE__ */ N("div", {
				className: L("h-full flex flex-col items-center justify-start overflow-auto p-4 transition-all", S === "split" ? "w-full lg:w-1/2" : "w-full", D ? "bg-slate-900/50 [background-image:radial-gradient(#334155_1px,transparent_1px)]" : "bg-slate-50/70 [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)]", _),
				style: { backgroundSize: "16px 16px" },
				children: /* @__PURE__ */ P("div", {
					className: L("w-full flex-1 flex flex-col transition-all duration-300 ease-in-out", w === "desktop" ? "rounded-xl overflow-hidden" : "border-2 border-slate-700/80 rounded-2xl shadow-2xl bg-white dark:bg-slate-900 overflow-hidden my-auto"),
					style: {
						maxWidth: ue,
						minHeight: w === "desktop" ? "auto" : "540px"
					},
					children: [w !== "desktop" && /* @__PURE__ */ P("div", {
						className: "bg-slate-900 px-3 py-1 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800",
						children: [/* @__PURE__ */ P("span", { children: ["Viewport: ", w.toUpperCase()] }), /* @__PURE__ */ N("span", { children: w === "mobile" ? "375 × 667" : "768 × 1024" })]
					}), /* @__PURE__ */ N("div", {
						className: "flex-1 w-full p-4 overflow-auto",
						children: /* @__PURE__ */ N(qp, {
							code: E,
							scope: r
						})
					})]
				})
			})]
		})]
	});
}
var Yp = Jp;
//#endregion
//#region src/components/ui/code-editor/FullScreenHeader.tsx
function Xp({ title: e, subtitle: t, badge: n, language: r = "json", isValidJson: i, viewMode: a, onViewModeChange: s, theme: c, onToggleTheme: l, readOnly: u = !1, onSave: d, onClose: f }) {
	let p = c === "dark";
	return /* @__PURE__ */ P("div", {
		className: L("flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b shrink-0 select-none transition-colors", p ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-900"),
		children: [
			/* @__PURE__ */ P("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ N("div", {
					className: L("w-8 h-8 rounded-xl flex items-center justify-center border transition-colors", p ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-emerald-100 text-emerald-700 border-emerald-200"),
					children: /* @__PURE__ */ N(v, { className: "w-4 h-4" })
				}), /* @__PURE__ */ P("div", { children: [/* @__PURE__ */ P("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ N("span", {
							className: "font-semibold text-sm",
							children: e
						}),
						n,
						r === "json" && /* @__PURE__ */ N(wn, {
							variant: i ? "success" : "danger",
							size: "xs",
							className: "font-mono text-[10px]",
							children: i ? "Valid JSON" : "Syntax Error"
						})
					]
				}), t && /* @__PURE__ */ N("p", {
					className: L("text-xs", p ? "text-slate-400" : "text-slate-500"),
					children: t
				})] })]
			}),
			r === "json" && /* @__PURE__ */ P("div", {
				className: L("flex items-center p-0.5 rounded-xl border text-xs transition-colors", p ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-200/80 border-slate-300/80"),
				children: [
					/* @__PURE__ */ P("button", {
						type: "button",
						onClick: () => s("code"),
						className: L("flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer", a === "code" ? p ? "bg-slate-700 text-white font-semibold shadow-xs" : "bg-white text-slate-900 font-semibold shadow-xs" : p ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
						title: "Raw code view",
						children: [/* @__PURE__ */ N(v, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Code" })]
					}),
					/* @__PURE__ */ P("button", {
						type: "button",
						onClick: () => s("tree"),
						className: L("flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer", a === "tree" ? p ? "bg-slate-700 text-white font-semibold shadow-xs" : "bg-white text-slate-900 font-semibold shadow-xs" : p ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
						title: "Interactive tree view",
						children: [/* @__PURE__ */ N(S, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Tree" })]
					}),
					/* @__PURE__ */ P("button", {
						type: "button",
						onClick: () => s("split"),
						className: L("flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer", a === "split" ? "bg-emerald-600 text-white font-semibold shadow-xs" : p ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
						title: "Side-by-side split view (Code + Tree)",
						children: [/* @__PURE__ */ N(m, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Split View" })]
					})
				]
			}),
			/* @__PURE__ */ P("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ N("button", {
						type: "button",
						onClick: l,
						className: L("p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-center", p ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:text-amber-300" : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900"),
						title: p ? "Switch to Light Mode" : "Switch to Dark Mode",
						children: N(p ? le : ae, { className: "w-4 h-4" })
					}),
					!u && d && /* @__PURE__ */ N(xn, {
						variant: "primary",
						size: "sm",
						onClick: d,
						leftIcon: /* @__PURE__ */ N(o, { className: "w-4 h-4" }),
						className: "bg-emerald-600 hover:bg-emerald-500 text-white",
						children: "Save"
					}),
					/* @__PURE__ */ N(xn, {
						variant: "outline",
						size: "sm",
						onClick: f,
						leftIcon: /* @__PURE__ */ N(pe, { className: "w-4 h-4" }),
						className: L(p ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"),
						children: "Close"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/ui/code-editor/FullScreenStatusBar.tsx
function Zp({ theme: e, lineCount: n, charCount: r, language: i, isValidJson: a, parseError: s }) {
	return /* @__PURE__ */ P("div", {
		className: L("flex items-center justify-between px-4 py-1.5 border-t text-xs shrink-0 font-mono select-none transition-colors", e === "dark" ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"),
		children: [/* @__PURE__ */ P("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ P("span", { children: ["Lines: ", n] }),
				/* @__PURE__ */ P("span", { children: ["Chars: ", r] }),
				/* @__PURE__ */ P("span", {
					className: "capitalize",
					children: ["Language: ", i]
				})
			]
		}), /* @__PURE__ */ P("div", {
			className: "flex items-center gap-2",
			children: [!a && s && /* @__PURE__ */ P("span", {
				className: "text-rose-500 flex items-center gap-1 font-sans font-medium",
				children: [/* @__PURE__ */ N(t, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
					className: "truncate max-w-md",
					children: s
				})]
			}), a && /* @__PURE__ */ P("span", {
				className: "text-emerald-500 flex items-center gap-1 font-sans font-medium",
				children: [/* @__PURE__ */ N(o, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Ready" })]
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/FullScreenToolbar.tsx
function Qp({ theme: e, readOnly: t = !1, historyIndex: n, historyLength: r, onUndo: i, onRedo: a, language: s = "json", isValidJson: c, onFormat: l, onMinify: u, onCopy: d, copied: f, searchTerm: p, onSearchChange: m }) {
	let g = e === "dark";
	return /* @__PURE__ */ P("div", {
		className: L("flex flex-wrap items-center justify-between gap-2 px-4 py-1.5 border-b text-xs shrink-0 select-none transition-colors", g ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"),
		children: [/* @__PURE__ */ P("div", {
			className: "flex items-center gap-1.5",
			children: [
				!t && /* @__PURE__ */ P(Ee, { children: [
					/* @__PURE__ */ N("button", {
						type: "button",
						disabled: n <= 0,
						onClick: i,
						className: L("p-1.5 rounded transition-colors cursor-pointer", g ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-200", n <= 0 ? "opacity-30 cursor-not-allowed hover:bg-transparent" : ""),
						title: "Undo (Ctrl+Z)",
						children: /* @__PURE__ */ N(ue, { className: "w-3.5 h-3.5" })
					}),
					/* @__PURE__ */ N("button", {
						type: "button",
						disabled: n >= r - 1,
						onClick: a,
						className: L("p-1.5 rounded transition-colors cursor-pointer", g ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-200", n >= r - 1 ? "opacity-30 cursor-not-allowed hover:bg-transparent" : ""),
						title: "Redo (Ctrl+Y)",
						children: /* @__PURE__ */ N(D, { className: "w-3.5 h-3.5" })
					}),
					/* @__PURE__ */ N("div", { className: L("w-px h-4 mx-1", g ? "bg-slate-800" : "bg-slate-300") })
				] }),
				!t && s === "json" && /* @__PURE__ */ P(Ee, { children: [
					/* @__PURE__ */ P("button", {
						type: "button",
						disabled: !c,
						onClick: () => l(2),
						className: L("flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer", g ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900", c ? "" : "opacity-40 cursor-not-allowed"),
						title: "Format JSON with 2-space indentation",
						children: [/* @__PURE__ */ N(de, { className: "w-3 h-3 text-emerald-500" }), /* @__PURE__ */ N("span", { children: "Prettify (2sp)" })]
					}),
					/* @__PURE__ */ N("button", {
						type: "button",
						disabled: !c,
						onClick: u,
						className: L("flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer", g ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900", c ? "" : "opacity-40 cursor-not-allowed"),
						title: "Minify JSON into a single line",
						children: /* @__PURE__ */ N("span", { children: "Minify" })
					}),
					/* @__PURE__ */ N("div", { className: L("w-px h-4 mx-1", g ? "bg-slate-800" : "bg-slate-300") })
				] }),
				/* @__PURE__ */ P("button", {
					type: "button",
					onClick: d,
					className: L("flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer", g ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
					children: [f ? /* @__PURE__ */ N(o, { className: "w-3 h-3 text-emerald-500" }) : /* @__PURE__ */ N(h, { className: "w-3 h-3" }), /* @__PURE__ */ N("span", { children: f ? "Copied" : "Copy" })]
				})
			]
		}), /* @__PURE__ */ P("div", {
			className: "relative min-w-[200px]",
			children: [
				/* @__PURE__ */ N(k, { className: L("w-3.5 h-3.5 absolute left-2.5 top-2", "text-slate-400") }),
				/* @__PURE__ */ N("input", {
					type: "text",
					placeholder: "Search keyword...",
					value: p,
					onChange: (e) => m(e.target.value),
					className: L("w-full pl-8 pr-7 py-1 text-xs border rounded-lg focus:outline-none font-mono transition-colors", g ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500")
				}),
				p && /* @__PURE__ */ N("button", {
					type: "button",
					onClick: () => m(""),
					className: L("absolute right-2 top-1.5 cursor-pointer", g ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-700"),
					children: /* @__PURE__ */ N(pe, { className: "w-3.5 h-3.5" })
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/SplitterHandle.tsx
function $p({ theme: e, isDragging: t, onMouseDown: n, onTouchStart: r, onDoubleClick: i, className: a = "" }) {
	let o = e === "dark";
	return /* @__PURE__ */ P("div", {
		role: "separator",
		tabIndex: 0,
		"aria-orientation": "vertical",
		"aria-label": "Resize panels divider",
		onMouseDown: n,
		onTouchStart: r,
		onDoubleClick: i,
		title: "Drag to resize panels (Double-click to reset to 50%)",
		className: L("relative group shrink-0 w-2.5 h-full flex items-center justify-center cursor-col-resize select-none transition-colors z-10", o ? "bg-slate-950 hover:bg-slate-900" : "bg-slate-100 hover:bg-slate-200", t && (o ? "bg-slate-900" : "bg-slate-200"), a),
		children: [/* @__PURE__ */ N("div", { className: L("w-px h-full transition-colors", t ? "bg-emerald-500 ring-1 ring-emerald-500/50" : o ? "bg-slate-800 group-hover:bg-emerald-500" : "bg-slate-200 group-hover:bg-emerald-500") }), /* @__PURE__ */ N("div", {
			className: L("absolute top-1/2 -translate-y-1/2 w-4 h-8 rounded-full flex items-center justify-center border shadow-xs transition-all pointer-events-none", t ? "bg-emerald-600 border-emerald-400 text-white scale-110" : o ? "bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-slate-700 group-hover:text-emerald-400 group-hover:border-emerald-500/60" : "bg-white border-slate-300 text-slate-500 group-hover:bg-slate-50 group-hover:text-emerald-600 group-hover:border-emerald-500/60"),
			children: /* @__PURE__ */ N(C, { className: "w-3 h-3" })
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/FullScreenCodeEditor.tsx
function em({ isOpen: e, onClose: n, value: r, onSave: i, language: a = "json", theme: o = "dark", title: s = "Code Editor", subtitle: c, badge: l, readOnly: u = !1, initialViewMode: d = "split", initialSplitRatio: f = 50, className: p = "" }) {
	let [m, h] = M(r), [g, _] = M(o), [v, y] = M(d), [b, x] = M(f), [S, C] = M(!1), [w, T] = M(""), [ee, te] = M(!1), [ne, re] = M([r]), [ie, ae] = M(0), E = we(null), D = we(null), oe = we(null);
	xe(() => {
		e && (h(r), re([r]), ae(0), _(o), x(f));
	}, [
		e,
		r,
		o,
		f
	]), xe(() => {
		if (!e) return;
		let t = (e) => {
			e.key === "Escape" && n();
		};
		window.addEventListener("keydown", t);
		let r = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			window.removeEventListener("keydown", t), document.body.style.overflow = r;
		};
	}, [e, n]);
	let O = (e) => {
		h(e);
		let t = ne.slice(0, ie + 1);
		t.push(e), t.length > 50 && t.shift(), re(t), ae(t.length - 1);
	}, k = () => {
		if (ie > 0) {
			let e = ne[ie - 1];
			ae(ie - 1), h(e);
		}
	}, se = () => {
		if (ie < ne.length - 1) {
			let e = ne[ie + 1];
			ae(ie + 1), h(e);
		}
	}, ce = (e) => {
		(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s" ? (e.preventDefault(), i?.(m)) : (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" ? e.shiftKey ? (e.preventDefault(), se()) : (e.preventDefault(), k()) : (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y" && (e.preventDefault(), se());
	}, { parsedJson: le, isValidJson: A, parseError: j } = Ce(() => {
		if (a !== "json" || !m || !m.trim()) return {
			parsedJson: null,
			isValidJson: !0,
			parseError: null
		};
		try {
			return {
				parsedJson: JSON.parse(m),
				isValidJson: !0,
				parseError: null
			};
		} catch (e) {
			return {
				parsedJson: null,
				isValidJson: !1,
				parseError: e.message || "Format JSON tidak valid"
			};
		}
	}, [m, a]), ue = Ce(() => Math.max(1, (m || "").split("\n").length), [m]), de = Ce(() => Array.from({ length: ue }, (e, t) => t + 1), [ue]), fe = (e) => {
		D.current && (D.current.scrollTop = e.currentTarget.scrollTop);
	}, pe = (e = 2) => {
		if (!(u || a !== "json")) try {
			let t = JSON.parse(m);
			O(JSON.stringify(t, null, e));
		} catch {}
	}, me = () => {
		if (!(u || a !== "json")) try {
			let e = JSON.parse(m);
			O(JSON.stringify(e));
		} catch {}
	}, he = async () => {
		try {
			await navigator.clipboard.writeText(m), te(!0), setTimeout(() => te(!1), 1500);
		} catch {}
	}, ge = (e) => {
		if (!u) try {
			O(JSON.stringify(e, null, 2));
		} catch {}
	}, _e = (e) => {
		e.preventDefault(), C(!0);
	}, ve = (e) => {
		C(!0);
	};
	if (xe(() => {
		if (!S) return;
		let e = (e) => {
			if (!oe.current) return;
			let t = oe.current.getBoundingClientRect();
			if (t.width <= 0) return;
			let n = (e - t.left) / t.width * 100;
			x(Math.min(85, Math.max(15, n)));
		}, t = (t) => {
			e(t.clientX);
		}, n = (t) => {
			t.touches.length > 0 && e(t.touches[0].clientX);
		}, r = () => {
			C(!1);
		};
		window.addEventListener("mousemove", t), window.addEventListener("mouseup", r), window.addEventListener("touchmove", n, { passive: !0 }), window.addEventListener("touchend", r);
		let i = document.body.style.userSelect, a = document.body.style.cursor;
		return document.body.style.userSelect = "none", document.body.style.cursor = "col-resize", () => {
			window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", r), window.removeEventListener("touchmove", n), window.removeEventListener("touchend", r), document.body.style.userSelect = i, document.body.style.cursor = a;
		};
	}, [S]), !e || typeof document > "u") return null;
	let ye = g === "dark", be = /* @__PURE__ */ N("div", {
		className: L("fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150", p),
		children: /* @__PURE__ */ P("div", {
			className: L("w-full h-full flex flex-col overflow-hidden shadow-2xl transition-colors", ye ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800"),
			children: [
				/* @__PURE__ */ N(Xp, {
					title: s,
					subtitle: c,
					badge: l,
					language: a,
					isValidJson: A,
					viewMode: v,
					onViewModeChange: y,
					theme: g,
					onToggleTheme: () => _((e) => e === "dark" ? "light" : "dark"),
					readOnly: u,
					onSave: i ? () => i(m) : void 0,
					onClose: n
				}),
				/* @__PURE__ */ N(Qp, {
					theme: g,
					readOnly: u,
					historyIndex: ie,
					historyLength: ne.length,
					onUndo: k,
					onRedo: se,
					language: a,
					isValidJson: A,
					onFormat: pe,
					onMinify: me,
					onCopy: he,
					copied: ee,
					searchTerm: w,
					onSearchChange: T
				}),
				/* @__PURE__ */ P("div", {
					ref: oe,
					className: "flex-1 w-full flex overflow-hidden relative",
					children: [
						(v === "code" || v === "split") && /* @__PURE__ */ P("div", {
							className: L("h-full flex overflow-hidden relative transition-colors", v === "split" ? "shrink-0" : "w-full", S && "pointer-events-none select-none"),
							style: v === "split" ? { width: `calc(${b}% - 5px)` } : void 0,
							children: [/* @__PURE__ */ N(Er, {
								gutterRef: D,
								lineNumbers: de,
								theme: g
							}), /* @__PURE__ */ N("div", {
								className: "flex-1 relative h-full",
								children: /* @__PURE__ */ N("textarea", {
									ref: E,
									value: m,
									onChange: (e) => O(e.target.value),
									onKeyDown: ce,
									onScroll: fe,
									readOnly: u,
									spellCheck: !1,
									className: L("w-full h-full p-3 font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-0 border-0 overflow-auto whitespace-pre tab-[2] transition-colors", ye ? "text-slate-100 bg-transparent placeholder-slate-600" : "text-slate-900 bg-white placeholder-slate-400", u ? "cursor-default" : "cursor-text")
								})
							})]
						}),
						v === "split" && /* @__PURE__ */ N($p, {
							theme: g,
							isDragging: S,
							onMouseDown: _e,
							onTouchStart: ve,
							onDoubleClick: () => x(50)
						}),
						(v === "tree" || v === "split") && /* @__PURE__ */ N("div", {
							className: L("h-full overflow-auto p-2 transition-colors", ye ? "bg-slate-950/90" : "bg-slate-50/70", v === "split" ? "shrink-0" : "w-full", S && "pointer-events-none select-none"),
							style: v === "split" ? { width: `calc(${100 - b}% - 5px)` } : void 0,
							children: A && le !== null ? /* @__PURE__ */ N("div", {
								className: L("rounded-xl shadow-xs overflow-hidden border transition-colors", ye ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"),
								children: /* @__PURE__ */ N(kr, {
									data: le,
									onChange: ge,
									readOnly: u,
									theme: g,
									searchTerm: w
								})
							}) : /* @__PURE__ */ P("div", {
								className: L("flex flex-col items-center justify-center h-full p-8 text-center gap-2 select-none", ye ? "text-slate-400" : "text-slate-500"),
								children: [
									/* @__PURE__ */ N(t, { className: "w-8 h-8 text-amber-500" }),
									/* @__PURE__ */ N("p", {
										className: L("text-sm font-medium", ye ? "text-slate-200" : "text-slate-700"),
										children: "Tree view unavailable"
									}),
									/* @__PURE__ */ N("p", {
										className: "text-xs max-w-sm",
										children: j || "Fix JSON syntax errors in the code editor to enable the tree view."
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ N(Zp, {
					theme: g,
					lineCount: ue,
					charCount: m.length,
					language: a,
					isValidJson: A,
					parseError: j
				})
			]
		})
	});
	return De(be, document.body);
}
var tm = em, nm = {
	base: 0,
	sticky: 10,
	header: 20,
	sidebar: 30,
	backdrop: 40,
	drawer: 50,
	modal: 60,
	popover: 70,
	toast: 80,
	loading: 100
}, rm = {
	base: "z-0",
	sticky: "z-10",
	header: "z-20",
	sidebar: "z-30",
	backdrop: "z-40",
	drawer: "z-50",
	modal: "z-[60]",
	popover: "z-[70]",
	toast: "z-[80]",
	loading: "z-[100]"
};
//#endregion
//#region src/components/ui/layout/LayoutBackdrop.tsx
function im({ visible: e = !1, onClick: t, blur: n = !0, scope: r = "full", layer: i = "backdrop", className: a = "", children: o }) {
	if (xe(() => {
		if (!e || r !== "full") return;
		let t = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = t;
		};
	}, [e, r]), !e) return null;
	let s = rm[i] || "z-40";
	return /* @__PURE__ */ N("div", {
		role: "presentation",
		"aria-hidden": "true",
		onClick: t,
		className: L(r === "full" ? "fixed inset-0" : "absolute inset-0", "bg-slate-950/50 transition-all duration-200 select-none animate-in fade-in", n && "backdrop-blur-xs", s, a),
		children: o
	});
}
//#endregion
//#region src/components/ui/layout/LayoutBody.tsx
function am({ className: e = "", children: t }) {
	return /* @__PURE__ */ N("div", {
		className: L("flex-1 min-h-0 w-full flex relative overflow-hidden", e),
		children: t
	});
}
//#endregion
//#region src/components/ui/layout/LayoutContent.tsx
var om = ve(({ padded: e = !0, className: t = "", children: n, ...r }, i) => /* @__PURE__ */ N("main", {
	ref: i,
	className: L("rakit-layout-content flex-1 min-w-0 min-h-0 flex flex-col z-0", "overflow-y-auto overflow-x-hidden", e && "p-4 md:p-6", t),
	...r,
	children: n
}));
om.displayName = "LayoutContent";
//#endregion
//#region src/components/ui/layout/LayoutHeader.tsx
function sm({ height: e = "h-14", sticky: t = !0, bordered: n = !0, layer: r = "header", className: i = "", children: a }) {
	let o = rm[r] || "z-20";
	return /* @__PURE__ */ N("header", {
		className: L("w-full shrink-0 flex items-center transition-colors", e, t ? "sticky top-0" : "relative", n && "border-b border-slate-200 dark:border-slate-800", "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs", o, i),
		children: a
	});
}
//#endregion
//#region src/components/ui/layout/LayoutLoading.tsx
function cm({ visible: e = !1, message: t = "Loading...", description: n, variant: r = "spinner", progress: i, blur: a = !0, layer: o = "loading", customIcon: s, className: c = "" }) {
	if (xe(() => {
		if (!e) return;
		let t = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = t;
		};
	}, [e]), !e) return null;
	let l = rm[o] || "z-[100]";
	return /* @__PURE__ */ P("div", {
		role: "status",
		"aria-live": "polite",
		"aria-label": typeof t == "string" ? t : "Loading",
		className: L("fixed inset-0 flex items-center justify-center p-4 select-none", "bg-slate-950/60 text-white transition-all duration-300 animate-in fade-in", a && "backdrop-blur-sm", l, c),
		children: [r === "bar" && /* @__PURE__ */ N("div", {
			className: "fixed top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden",
			children: /* @__PURE__ */ N("div", {
				className: "h-full bg-emerald-500 transition-all duration-300",
				style: {
					width: i === void 0 ? "100%" : `${Math.min(100, Math.max(0, i))}%`,
					animation: i === void 0 ? "pulse 1.5s ease-in-out infinite" : void 0
				}
			})
		}), /* @__PURE__ */ P("div", {
			className: "flex flex-col items-center justify-center gap-3 p-6 max-w-sm rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl text-center",
			children: [
				/* @__PURE__ */ P("div", {
					className: "relative flex items-center justify-center",
					children: [/* @__PURE__ */ N("div", { className: "absolute inset-0 rounded-full bg-emerald-500/20 blur-md animate-pulse" }), s ? /* @__PURE__ */ N("div", {
						className: "relative z-10",
						children: s
					}) : /* @__PURE__ */ N(te, { className: "relative z-10 w-8 h-8 text-emerald-400 animate-spin" })]
				}),
				t && /* @__PURE__ */ N("h3", {
					className: "text-sm font-semibold text-slate-100 tracking-tight",
					children: t
				}),
				n && /* @__PURE__ */ N("p", {
					className: "text-xs text-slate-400 max-w-xs leading-relaxed",
					children: n
				}),
				i !== void 0 && /* @__PURE__ */ P("div", {
					className: "w-full flex flex-col gap-1.5 mt-1",
					children: [/* @__PURE__ */ N("div", {
						className: "w-full h-1.5 rounded-full bg-slate-800 overflow-hidden",
						children: /* @__PURE__ */ N("div", {
							className: "h-full bg-emerald-500 transition-all duration-300 rounded-full",
							style: { width: `${Math.min(100, Math.max(0, i))}%` }
						})
					}), /* @__PURE__ */ P("span", {
						className: "text-[10px] font-mono text-emerald-400",
						children: [Math.round(i), "%"]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarContext.tsx
var lm = ge(null);
function um() {
	return be(lm) || {
		collapsed: !1,
		isOpen: !1,
		position: "left"
	};
}
//#endregion
//#region src/components/ui/sidebar/SidebarHeader.tsx
function dm({ title: e, subtitle: t, icon: n, action: r, showCloseButton: i = !0, onClose: a, className: o = "", children: s, ...c }) {
	let l = um(), u = l.collapsed, d = a || l.onClose;
	if (s) return /* @__PURE__ */ N("div", {
		className: L("rakit-sidebar-header flex items-center shrink-0 transition-all duration-200", u ? "justify-center p-2" : "justify-between px-3.5 py-3", "border-b border-slate-100 dark:border-slate-800/80", o),
		"data-rakit": "sidebar-header",
		"data-collapsed": u,
		...c,
		children: s
	});
	let f = () => n ? ye(n) ? n : /* @__PURE__ */ N(n, { className: "w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" }) : null;
	return u && r ? /* @__PURE__ */ N("div", {
		className: L("rakit-sidebar-header flex items-center justify-center p-2 shrink-0 transition-all duration-200", "border-b border-slate-100 dark:border-slate-800/80", o),
		"data-rakit": "sidebar-header",
		"data-collapsed": !0,
		...c,
		children: r
	}) : /* @__PURE__ */ P("div", {
		className: L("rakit-sidebar-header flex items-center shrink-0 transition-all duration-200", u ? "justify-center p-2" : "justify-between px-3.5 py-3", "border-b border-slate-100 dark:border-slate-800/80", o),
		"data-rakit": "sidebar-header",
		"data-collapsed": u,
		...c,
		children: [/* @__PURE__ */ P("div", {
			className: L("flex items-center gap-2.5 min-w-0", u && "justify-center"),
			children: [f(), !u && (e || t) && /* @__PURE__ */ P("div", {
				className: "flex flex-col min-w-0 leading-tight",
				children: [e && /* @__PURE__ */ N("span", {
					className: "font-semibold text-xs tracking-tight text-slate-800 dark:text-slate-100 truncate",
					children: e
				}), t && /* @__PURE__ */ N("span", {
					className: "text-[10px] text-slate-500 dark:text-slate-400 truncate",
					children: t
				})]
			})]
		}), /* @__PURE__ */ P("div", {
			className: "flex items-center gap-1.5 shrink-0",
			children: [r && /* @__PURE__ */ N("div", {
				className: "hidden md:flex items-center",
				children: r
			}), i && d && /* @__PURE__ */ N("button", {
				type: "button",
				onClick: d,
				"aria-label": "Tutup Sidebar",
				className: "md:hidden p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer",
				children: /* @__PURE__ */ N(pe, { className: "w-4 h-4" })
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarToggle.tsx
function fm({ collapsed: e, onToggle: t, size: n = "sm", title: r, className: i = "", ...a }) {
	let o = um(), s = e === void 0 ? o.collapsed : e, c = t || o.onToggleCollapse, l = s ? "Buka Sidebar" : "Ciutkan Sidebar", f = {
		xs: "w-3 h-3",
		sm: "w-3.5 h-3.5",
		md: "w-4 h-4"
	}[n];
	return /* @__PURE__ */ N(xn, {
		variant: "ghost",
		size: n,
		onClick: c,
		title: r || l,
		"aria-label": r || l,
		className: L("rakit-sidebar-toggle text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 p-1.5", i),
		"data-rakit": "sidebar-toggle",
		"data-collapsed": s,
		...a,
		children: N(s ? d : u, { className: L(f, "shrink-0") })
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarNav.tsx
function pm({ className: e = "", children: t, ...n }) {
	let { collapsed: r } = um();
	return /* @__PURE__ */ N("nav", {
		className: L("rakit-sidebar-nav flex-1 min-h-0 overflow-y-auto space-y-4 transition-all duration-200", r ? "px-1.5 py-2" : "px-3 py-2.5", e),
		"data-rakit": "sidebar-nav",
		"data-collapsed": r,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarGroup.tsx
function mm({ title: e, className: t = "", children: n, ...r }) {
	let { collapsed: i } = um();
	return /* @__PURE__ */ P("div", {
		className: L("rakit-sidebar-group space-y-1", t),
		"data-rakit": "sidebar-group",
		"data-collapsed": i,
		...r,
		children: [e && /* @__PURE__ */ N(Ee, { children: i ? /* @__PURE__ */ N("div", { className: "my-1.5 border-t border-slate-100 dark:border-slate-800/80" }) : /* @__PURE__ */ N("div", {
			className: "px-2 mb-1 text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none truncate",
			children: e
		}) }), /* @__PURE__ */ N("div", {
			className: "space-y-0.5",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarItem.tsx
function hm({ icon: e, label: t, active: n = !1, badge: r, badgeVariant: i, indicator: a = !0, disabled: o = !1, title: s, as: c = "button", href: l, onClick: u, className: d = "", children: f, ...p }) {
	let { collapsed: m } = um(), h = l ? "a" : c, g = s || (m && typeof t == "string" ? t : void 0), _ = i || (n ? "primary" : "default"), v = () => e ? ye(e) ? e : /* @__PURE__ */ N(e, { className: L("w-4 h-4 shrink-0 transition-colors", n ? "text-emerald-700 dark:text-emerald-400" : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300") }) : null;
	return /* @__PURE__ */ P(h, {
		type: h === "button" ? "button" : void 0,
		href: l,
		onClick: o ? void 0 : u,
		disabled: o,
		title: g,
		"aria-current": n ? "page" : void 0,
		"data-rakit": "sidebar-item",
		"data-active": n,
		"data-collapsed": m,
		className: L("group relative flex items-center transition-all duration-150 font-medium select-none cursor-pointer rounded-xl", m ? "justify-center px-1.5 py-2 h-9 w-full" : "justify-between pl-3 pr-2.5 py-2 min-h-9 w-full text-xs font-sans tracking-tight", n ? "bg-emerald-50/90 text-emerald-950 font-semibold shadow-2xs border border-emerald-300/80 ring-1 ring-emerald-400/20 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-700/60" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100/90 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-100 border border-transparent", o && "opacity-50 pointer-events-none cursor-not-allowed", d),
		...p,
		children: [
			n && a && /* @__PURE__ */ N("span", {
				className: "absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-emerald-600 dark:bg-emerald-400",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ P("div", {
				className: L("flex items-center gap-2.5 min-w-0", m && "justify-center"),
				children: [v(), !m && /* @__PURE__ */ N("span", {
					className: "truncate leading-normal",
					children: t
				})]
			}),
			!m && r != null && /* @__PURE__ */ N("div", {
				className: "shrink-0 ml-1.5",
				children: typeof r == "string" || typeof r == "number" ? /* @__PURE__ */ N(wn, {
					variant: _,
					size: "xs",
					className: "text-[10px]",
					children: r
				}) : r
			}),
			f
		]
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarFooter.tsx
function gm({ bordered: e = !0, className: t = "", children: n, ...r }) {
	let { collapsed: i } = um();
	return /* @__PURE__ */ N("div", {
		className: L("rakit-sidebar-footer flex flex-col shrink-0 transition-all duration-200 mt-auto", e && "border-t border-slate-100 dark:border-slate-800/80", i ? "p-2" : "p-3", t),
		"data-rakit": "sidebar-footer",
		"data-collapsed": i,
		...r,
		children: n
	});
}
//#endregion
//#region src/components/ui/sidebar/SidebarSeparator.tsx
function _m({ className: e = "", ...t }) {
	return /* @__PURE__ */ N("hr", {
		className: L("rakit-sidebar-separator my-2 border-0 border-t border-slate-100 dark:border-slate-800/80", e),
		"data-rakit": "sidebar-separator",
		...t
	});
}
//#endregion
//#region src/components/ui/drawer/DrawerTitle.tsx
function vm({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("h3", {
		className: L("rakit-drawer-title text-base font-semibold text-slate-900 dark:text-slate-100 leading-none", e),
		"data-rakit": "drawer-title",
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/drawer/DrawerDescription.tsx
function ym({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("p", {
		className: L("rakit-drawer-desc text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal", e),
		"data-rakit": "drawer-description",
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/drawer/DrawerHeader.tsx
function bm({ title: e, description: t, icon: n, showCloseButton: r = !0, onClose: i, className: a = "", children: o, ...s }) {
	return /* @__PURE__ */ P("div", {
		className: L("rakit-drawer-header flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 shrink-0", a),
		"data-rakit": "drawer-header",
		...s,
		children: [o || /* @__PURE__ */ P("div", {
			className: "flex items-center gap-3 min-w-0",
			children: [n && /* @__PURE__ */ N("div", {
				className: "text-emerald-600 dark:text-emerald-400 shrink-0",
				children: n
			}), /* @__PURE__ */ P("div", {
				className: "min-w-0",
				children: [e && /* @__PURE__ */ N(vm, { children: e }), t && /* @__PURE__ */ N(ym, { children: t })]
			})]
		}), r && i && /* @__PURE__ */ N("button", {
			type: "button",
			onClick: i,
			"aria-label": "Tutup Drawer",
			className: "p-1.5 -mr-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer",
			children: /* @__PURE__ */ N(pe, { className: "w-4 h-4" })
		})]
	});
}
//#endregion
//#region src/components/ui/drawer/DrawerBody.tsx
function xm({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-drawer-body flex-1 overflow-y-auto min-h-0 px-5 py-4 text-slate-700 dark:text-slate-300", e),
		"data-rakit": "drawer-body",
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/drawer/DrawerFooter.tsx
function Sm({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-drawer-footer flex items-center justify-end gap-2.5 px-5 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 shrink-0", e),
		"data-rakit": "drawer-footer",
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/drawer/Drawer.tsx
var Cm = {
	sm: "w-72 max-w-[85vw]",
	md: "w-80 max-w-[85vw]",
	lg: "w-96 max-w-[90vw]",
	xl: "w-[480px] max-w-[95vw]",
	full: "w-screen"
}, wm = {
	sm: "h-64 max-h-[85vh]",
	md: "h-80 max-h-[85vh]",
	lg: "h-96 max-h-[90vh]",
	xl: "h-[480px] max-h-[95vh]",
	full: "h-screen"
}, Tm = {
	left: "inset-y-0 left-0 animate-in slide-in-from-left duration-200 border-r",
	right: "inset-y-0 right-0 animate-in slide-in-from-right duration-200 border-l",
	top: "inset-x-0 top-0 animate-in slide-in-from-top duration-200 border-b",
	bottom: "inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-200 border-t"
};
function Em({ id: e, isOpen: t, onClose: n, placement: r = "right", size: i = "md", title: a, description: o, icon: s, children: c, footer: l, className: u = "", contentClassName: d = "", closeOnEsc: f = !0, closeOnOverlayClick: p = !0, showCloseButton: m = !0, backdropBlur: h = !0, bordered: g = !0 }) {
	let _ = gn(), v = vn("drawer", _, e), y = _.components?.drawer, b = we(null);
	if (xe(() => {
		if (!t) return;
		let e = (e) => {
			f && e.key === "Escape" && n();
		};
		window.addEventListener("keydown", e);
		let r = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			window.removeEventListener("keydown", e), document.body.style.overflow = r;
		};
	}, [
		t,
		f,
		n
	]), !t || typeof document > "u") return null;
	let x = r === "top" || r === "bottom" ? wm[i] : Cm[i], S = /* @__PURE__ */ P("div", {
		id: v.id,
		"data-rakit": v["data-rakit"],
		className: L("rakit-drawer fixed inset-0 z-50 overflow-hidden", v.className, y?.className, u),
		style: y?.style,
		role: "dialog",
		"aria-modal": "true",
		children: [/* @__PURE__ */ N("div", {
			className: L("rakit-drawer-overlay fixed inset-0 bg-slate-900/60 transition-opacity animate-in fade-in duration-200", h && "backdrop-blur-xs"),
			onClick: () => {
				p && n();
			},
			"aria-hidden": "true"
		}), /* @__PURE__ */ P("div", {
			ref: b,
			onClick: (e) => e.stopPropagation(),
			className: L("rakit-drawer-content fixed bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xl flex flex-col focus:outline-hidden", g && "border-slate-200 dark:border-slate-800", Tm[r], x, d),
			children: [
				(a || m) && /* @__PURE__ */ N(bm, {
					title: a,
					description: o,
					icon: s,
					showCloseButton: m,
					onClose: m ? n : void 0
				}),
				a || l ? /* @__PURE__ */ N(xm, {
					className: "p-0 flex flex-col flex-1 min-h-0",
					children: c
				}) : /* @__PURE__ */ N("div", {
					className: "flex-1 flex flex-col min-h-0 overflow-hidden",
					children: c
				}),
				l && /* @__PURE__ */ N(Sm, { children: l })
			]
		})]
	});
	return De(S, document.body);
}
Em.Header = bm, Em.Title = vm, Em.Description = ym, Em.Body = xm, Em.Footer = Sm;
//#endregion
//#region src/components/ui/sidebar/Sidebar.tsx
function Dm({ id: e, isOpen: t = !1, onClose: n, width: r = "w-64", collapsed: i = !1, onToggleCollapse: a, collapsedWidth: o = "w-16", position: s = "left", mobileMode: c = "drawer", bordered: l = !0, layer: u = "sidebar", className: d = "", children: f }) {
	let p = gn(), m = vn("sidebar", p, e), h = p.components?.sidebar, g = rm[u] || "z-30", _ = i ? o : r, v = Ce(() => ({
		collapsed: i,
		isOpen: t,
		onClose: n,
		onToggleCollapse: a,
		position: s
	}), [
		i,
		t,
		n,
		a,
		s
	]), y = Ce(() => ({
		collapsed: !1,
		isOpen: t,
		onClose: n,
		onToggleCollapse: a,
		position: s
	}), [
		t,
		n,
		a,
		s
	]);
	return /* @__PURE__ */ P(Ee, { children: [/* @__PURE__ */ N(lm.Provider, {
		value: v,
		children: /* @__PURE__ */ N("aside", {
			id: m.id,
			"data-rakit": m["data-rakit"],
			"data-collapsed": i,
			"data-open": t,
			style: h?.style,
			className: L("rakit-sidebar", m.className, "hidden md:flex flex-col h-full min-h-0 shrink-0 transition-all duration-200 ease-out", "bg-white dark:bg-slate-900 transition-colors", l && (s === "left" ? "border-r border-slate-200 dark:border-slate-800" : "border-l border-slate-200 dark:border-slate-800"), g, _, h?.className, d),
			children: f
		})
	}), c === "drawer" && n && /* @__PURE__ */ N(Em, {
		isOpen: t,
		onClose: n,
		placement: s === "right" ? "right" : "left",
		size: "sm",
		bordered: l,
		className: "md:hidden",
		contentClassName: "p-0 overflow-hidden flex flex-col h-full",
		children: /* @__PURE__ */ N(lm.Provider, {
			value: y,
			children: /* @__PURE__ */ N("div", {
				className: "flex flex-col h-full min-h-0 bg-white dark:bg-slate-900 transition-colors",
				children: f
			})
		})
	})] });
}
Dm.Header = dm, Dm.Toggle = fm, Dm.Nav = pm, Dm.Group = mm, Dm.Item = hm, Dm.Footer = gm, Dm.Separator = _m, Dm.Context = lm;
//#endregion
//#region src/components/ui/layout/LayoutSidebar.tsx
var Om = Dm;
//#endregion
//#region src/components/ui/layout/StackLayer.tsx
function km({ layer: e = "base", zIndex: t, fixed: n = !1, absolute: r = !1, fullScreen: i = !1, className: a = "", children: o }) {
	let s = rm[e] || "z-0";
	return /* @__PURE__ */ N("div", {
		style: t === void 0 ? void 0 : { zIndex: t },
		className: L(s, i ? "fixed inset-0 pointer-events-none" : n ? "fixed" : r ? "absolute" : "relative", a),
		children: o
	});
}
//#endregion
//#region src/components/ui/layout/Layout.tsx
function Am({ theme: e = "light", fullScreen: t = !0, className: n = "", children: r }) {
	return /* @__PURE__ */ N("div", {
		"data-theme": e,
		className: L("relative flex flex-col font-sans transition-colors", t ? "h-screen w-screen overflow-hidden" : "w-full h-full", e === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900", n),
		children: r
	});
}
Am.Header = sm, Am.Body = am, Am.Sidebar = Om, Am.Content = om, Am.Backdrop = im, Am.Loading = cm, Am.Layer = km;
//#endregion
//#region src/components/ui/container/ContainerContent.tsx
var jm = {
	none: "p-0",
	small: "p-4",
	medium: "p-6",
	large: "p-8"
}, Mm = {
	none: "",
	small: "gap-3",
	medium: "gap-5",
	large: "gap-8"
};
function Nm({ className: e = "", padding: t = "none", gap: n = "none", children: r, ...i }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-container-content w-full flex-1 min-h-0", jm[t], n !== "none" && "flex flex-col", Mm[n], e),
		...i,
		children: r
	});
}
//#endregion
//#region src/components/ui/container/ContainerFooter.tsx
function Pm({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-container-footer w-full flex items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800", e),
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/container/ContainerHeader.tsx
function Fm({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("div", {
		className: L("rakit-container-header w-full flex items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800", e),
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/container/Container.tsx
var Im = {
	sm: "max-w-screen-sm",
	md: "max-w-screen-md",
	lg: "max-w-screen-lg",
	xl: "max-w-screen-xl",
	"2xl": "max-w-screen-2xl",
	full: "w-full"
}, Lm = {
	none: "p-0",
	small: "p-3 sm:p-4",
	medium: "p-4 sm:p-6",
	large: "p-6 sm:p-8"
}, Rm = {
	default: "",
	card: "bg-white border border-slate-200/90 rounded-2xl shadow-xs text-slate-900 overflow-hidden",
	elevated: "bg-white border border-slate-200/80 rounded-2xl shadow-md text-slate-900 overflow-hidden",
	bordered: "bg-white border border-slate-200 rounded-xl text-slate-900 overflow-hidden",
	flat: "bg-slate-50/90 border border-slate-200/80 rounded-xl text-slate-900 overflow-hidden",
	ghost: "bg-transparent text-slate-900"
};
function zm({ id: e, size: t = "full", padding: n = "none", variant: r = "default", centered: i = !0, className: a = "", children: o, ...s }) {
	let c = gn(), l = vn("container", c, e), u = c.components?.container;
	return /* @__PURE__ */ N("div", {
		id: l.id,
		"data-rakit": l["data-rakit"],
		className: L("rakit-container w-full flex flex-col transition-colors", Im[t], Lm[n], Rm[r], i && t !== "full" && "mx-auto", l.className, u?.className, a),
		style: u?.style,
		...s,
		children: o
	});
}
zm.ActionBar = Bn, zm.Header = Fm, zm.Content = Nm, zm.Footer = Pm;
//#endregion
//#region src/components/ui/toast/ToastItem.tsx
function Bm({ toast: e, index: t, total: n, isExpanded: r, position: i, onDismiss: a, theme: o = "colored", showProgress: s = !0, className: c = "" }) {
	let l = e.theme || o, u = l === "colored", d = l === "dark", f = e.type || "default", p = e.title || e.msg, m = !!e.description, h = e.duration ?? e.durationMs ?? 4e3, g = h !== Infinity && h > 0, _ = e.showProgress ?? s, v = i.startsWith("top") ? 1 : -1, y = r ? 1 : Math.max(.85, 1 - t * .05), b = r ? 0 : t * 10 * v, x = r ? 1 : t > 2 ? 0 : Math.max(.65, 1 - t * .15), S = 50 - t;
	if (!(r || t <= 2)) return null;
	let C = Hm(f, l);
	return /* @__PURE__ */ P("div", {
		"data-rakit": "toast",
		style: {
			zIndex: S,
			transform: `translateY(${b}px) scale(${y})`,
			opacity: x,
			transition: "all 280ms cubic-bezier(0.16, 1, 0.3, 1)"
		},
		className: L("rakit-toast relative overflow-hidden w-full max-w-md rounded-2xl border transition-all select-none pointer-events-auto", r ? "mb-2.5 hover:scale-[1.01]" : "absolute inset-x-0 top-0", C.card, c, e.className),
		children: [
			u && /* @__PURE__ */ N("div", {
				className: "absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-white to-transparent",
				style: { animation: "toast-shimmer 2.8s ease-in-out infinite" }
			}),
			/* @__PURE__ */ P("div", {
				className: L("relative z-10 px-4 py-3 sm:py-3.5 flex gap-3.5", m ? "items-start" : "items-center"),
				children: [
					/* @__PURE__ */ N("div", {
						className: L("flex items-center justify-center w-8 h-8 rounded-xl shrink-0 border shadow-2xs transition-colors", m && "mt-0.5", C.iconContainer),
						children: e.icon ? e.icon : Vm(f, l)
					}),
					/* @__PURE__ */ P("div", {
						className: "flex-1 min-w-0 pr-1",
						children: [p && /* @__PURE__ */ N("div", {
							className: L("font-semibold text-[13px] sm:text-sm leading-snug tracking-[-0.01em]", u || d ? "text-white" : "text-slate-900"),
							children: p
						}), e.description && /* @__PURE__ */ N("div", {
							className: L("text-xs mt-1 leading-relaxed line-clamp-2 font-normal", u ? "text-white/90" : d ? "text-slate-400" : "text-slate-500"),
							children: e.description
						})]
					}),
					e.action && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: (t) => {
							e.action?.onClick(t), a(e.id || "");
						},
						className: L("shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer shadow-2xs", m ? "self-start mt-0.5" : "self-center", C.actionButton),
						children: e.action.label
					}),
					e.dismissible !== !1 && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: (t) => {
							t.stopPropagation(), a(e.id || "");
						},
						className: L("w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0 cursor-pointer border border-transparent", m ? "self-start mt-0.5" : "self-center", u ? "text-white/80 hover:text-white hover:bg-white/20 active:bg-white/30" : d ? "text-slate-400 hover:text-white hover:bg-slate-800/90 hover:border-slate-700/60 active:bg-slate-700" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100 hover:border-slate-200 active:bg-slate-200/80"),
						"aria-label": "Tutup notifikasi",
						children: /* @__PURE__ */ N(pe, { className: "w-3.5 h-3.5 stroke-[2.25]" })
					})
				]
			}),
			_ && g && /* @__PURE__ */ N("div", {
				className: L("absolute bottom-0 inset-x-0 h-[2.5px] overflow-hidden pointer-events-none", u ? "bg-black/15" : d ? "bg-slate-800/60" : "bg-slate-100/90"),
				children: /* @__PURE__ */ N("div", {
					className: L("h-full w-full", C.progressBar),
					style: {
						animation: `toast-progress ${h}ms linear forwards`,
						transformOrigin: "left"
					}
				})
			})
		]
	});
}
function Vm(e, r) {
	if (r === "colored") switch (e) {
		case "success": return /* @__PURE__ */ N(s, { className: "w-4 h-4 text-white" });
		case "error": return /* @__PURE__ */ N(t, { className: "w-4 h-4 text-white" });
		case "warning": return /* @__PURE__ */ N(n, { className: "w-4 h-4 text-white" });
		case "info": return /* @__PURE__ */ N(ee, { className: "w-4 h-4 text-white" });
		case "loading": return /* @__PURE__ */ N(te, { className: "w-4 h-4 text-white animate-spin" });
		default: return /* @__PURE__ */ N(ee, { className: "w-4 h-4 text-white" });
	}
	switch (e) {
		case "success": return /* @__PURE__ */ N(s, { className: "w-4 h-4 text-emerald-500" });
		case "error": return /* @__PURE__ */ N(t, { className: "w-4 h-4 text-rose-500" });
		case "warning": return /* @__PURE__ */ N(n, { className: "w-4 h-4 text-amber-500" });
		case "info": return /* @__PURE__ */ N(ee, { className: "w-4 h-4 text-sky-500" });
		case "loading": return /* @__PURE__ */ N(te, { className: "w-4 h-4 text-violet-500 animate-spin" });
		default: return /* @__PURE__ */ N(ee, { className: "w-4 h-4 text-slate-400" });
	}
}
function Hm(e, t) {
	if (t === "colored") switch (e) {
		case "success": return {
			card: "bg-emerald-600 text-white border-emerald-500 shadow-xl shadow-emerald-950/25",
			iconContainer: "bg-white/20 border-white/30 text-white",
			actionButton: "bg-white hover:bg-emerald-50 text-emerald-950 font-bold border-white/90 active:scale-[0.98]",
			progressBar: "bg-white/80"
		};
		case "error": return {
			card: "bg-rose-600 text-white border-rose-500 shadow-xl shadow-rose-950/25",
			iconContainer: "bg-white/20 border-white/30 text-white",
			actionButton: "bg-white hover:bg-rose-50 text-rose-950 font-bold border-white/90 active:scale-[0.98]",
			progressBar: "bg-white/80"
		};
		case "warning": return {
			card: "bg-amber-600 text-white border-amber-500 shadow-xl shadow-amber-950/25",
			iconContainer: "bg-white/20 border-white/30 text-white",
			actionButton: "bg-white hover:bg-amber-50 text-amber-950 font-bold border-white/90 active:scale-[0.98]",
			progressBar: "bg-white/80"
		};
		case "info": return {
			card: "bg-sky-600 text-white border-sky-500 shadow-xl shadow-sky-950/25",
			iconContainer: "bg-white/20 border-white/30 text-white",
			actionButton: "bg-white hover:bg-sky-50 text-sky-950 font-bold border-white/90 active:scale-[0.98]",
			progressBar: "bg-white/80"
		};
		case "loading": return {
			card: "bg-indigo-600 text-white border-indigo-500 shadow-xl shadow-indigo-950/25",
			iconContainer: "bg-white/20 border-white/30 text-white",
			actionButton: "bg-white hover:bg-indigo-50 text-indigo-950 font-bold border-white/90 active:scale-[0.98]",
			progressBar: "bg-white/80"
		};
		default: return {
			card: "bg-slate-800 text-white border-slate-700 shadow-xl shadow-black/30",
			iconContainer: "bg-white/15 border-white/20 text-white",
			actionButton: "bg-white hover:bg-slate-100 text-slate-900 font-bold border-white/90 active:scale-[0.98]",
			progressBar: "bg-white/80"
		};
	}
	if (t === "dark") switch (e) {
		case "success": return {
			card: "bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl border-emerald-500/30",
			iconContainer: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
			actionButton: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-[0.98]",
			progressBar: "bg-emerald-500"
		};
		case "error": return {
			card: "bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl border-rose-500/30",
			iconContainer: "bg-rose-500/15 border-rose-500/30 text-rose-300",
			actionButton: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-[0.98]",
			progressBar: "bg-rose-500"
		};
		case "warning": return {
			card: "bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl border-amber-500/30",
			iconContainer: "bg-amber-500/15 border-amber-500/30 text-amber-300",
			actionButton: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-[0.98]",
			progressBar: "bg-amber-500"
		};
		case "info": return {
			card: "bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl border-sky-500/30",
			iconContainer: "bg-sky-500/15 border-sky-500/30 text-sky-300",
			actionButton: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-[0.98]",
			progressBar: "bg-sky-500"
		};
		case "loading": return {
			card: "bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl border-violet-500/30",
			iconContainer: "bg-violet-500/15 border-violet-500/30 text-violet-300",
			actionButton: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-[0.98]",
			progressBar: "bg-violet-500"
		};
		default: return {
			card: "bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl border-slate-800",
			iconContainer: "bg-slate-800 border-slate-700 text-slate-300",
			actionButton: "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-[0.98]",
			progressBar: "bg-slate-500"
		};
	}
	switch (e) {
		case "success": return {
			card: "bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.08),0_2px_8px_rgb(0,0,0,0.04)] backdrop-blur-md border-emerald-200",
			iconContainer: "bg-emerald-50 border-emerald-200/90 text-emerald-600",
			actionButton: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900 active:scale-[0.98]",
			progressBar: "bg-emerald-500"
		};
		case "error": return {
			card: "bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.08),0_2px_8px_rgb(0,0,0,0.04)] backdrop-blur-md border-rose-200",
			iconContainer: "bg-rose-50 border-rose-200/90 text-rose-600",
			actionButton: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900 active:scale-[0.98]",
			progressBar: "bg-rose-500"
		};
		case "warning": return {
			card: "bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.08),0_2px_8px_rgb(0,0,0,0.04)] backdrop-blur-md border-amber-200",
			iconContainer: "bg-amber-50 border-amber-200/90 text-amber-600",
			actionButton: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900 active:scale-[0.98]",
			progressBar: "bg-amber-500"
		};
		case "info": return {
			card: "bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.08),0_2px_8px_rgb(0,0,0,0.04)] backdrop-blur-md border-sky-200",
			iconContainer: "bg-sky-50 border-sky-200/90 text-sky-600",
			actionButton: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900 active:scale-[0.98]",
			progressBar: "bg-sky-500"
		};
		case "loading": return {
			card: "bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.08),0_2px_8px_rgb(0,0,0,0.04)] backdrop-blur-md border-violet-200",
			iconContainer: "bg-violet-50 border-violet-200/90 text-violet-600",
			actionButton: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900 active:scale-[0.98]",
			progressBar: "bg-violet-500"
		};
		default: return {
			card: "bg-white text-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.08),0_2px_8px_rgb(0,0,0,0.04)] backdrop-blur-md border-slate-200/90",
			iconContainer: "bg-slate-50 border-slate-200 text-slate-600",
			actionButton: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900 active:scale-[0.98]",
			progressBar: "bg-slate-400"
		};
	}
}
var Um = new class {
	toasts = [];
	listeners = /* @__PURE__ */ new Set();
	timers = /* @__PURE__ */ new Map();
	emitChange() {
		for (let e of this.listeners) e();
	}
	subscribe(e) {
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
	getSnapshot = () => this.toasts;
	add(e, t = {}) {
		let n = t.id || `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, r = t.duration ?? t.durationMs ?? (t.type === "loading" ? Infinity : 4e3), i = {
			id: n,
			title: e,
			type: t.type || "default",
			description: t.description,
			msg: typeof e == "string" ? e : void 0,
			duration: r,
			durationMs: r,
			icon: t.icon,
			action: t.action,
			cancel: t.cancel,
			dismissible: t.dismissible ?? !0,
			className: t.className,
			createdAt: Date.now()
		}, a = this.toasts.findIndex((e) => e.id === n);
		if (a > -1 ? this.toasts[a] = {
			...this.toasts[a],
			...i
		} : this.toasts = [...this.toasts.slice(-9), i], this.clearTimer(n), r !== Infinity && r > 0) {
			let e = setTimeout(() => {
				this.dismiss(n);
			}, r);
			this.timers.set(n, e);
		}
		return this.emitChange(), n;
	}
	dismiss(e) {
		if (e) this.clearTimer(e), this.toasts = this.toasts.filter((t) => t.id !== e);
		else {
			for (let e of this.timers.values()) clearTimeout(e);
			this.timers.clear(), this.toasts = [];
		}
		this.emitChange();
	}
	clearTimer(e) {
		let t = this.timers.get(e);
		t && (clearTimeout(t), this.timers.delete(e));
	}
}(), Wm = Object.assign((e, t) => Um.add(e, t), {
	success: (e, t) => Um.add(e, {
		...t,
		type: "success"
	}),
	error: (e, t) => Um.add(e, {
		...t,
		type: "error"
	}),
	warning: (e, t) => Um.add(e, {
		...t,
		type: "warning"
	}),
	info: (e, t) => Um.add(e, {
		...t,
		type: "info"
	}),
	loading: (e, t) => Um.add(e, {
		...t,
		type: "loading",
		duration: Infinity
	}),
	promise: async (e, t, n) => {
		let r = Um.add(t.loading, {
			...n,
			type: "loading",
			duration: Infinity
		});
		try {
			let i = await (typeof e == "function" ? e() : e), a = typeof t.success == "function" ? t.success(i) : t.success;
			return Um.add(a, {
				...n,
				id: r,
				type: "success",
				duration: n?.duration ?? 4e3
			}), i;
		} catch (e) {
			let i = typeof t.error == "function" ? t.error(e) : t.error;
			throw Um.add(i, {
				...n,
				id: r,
				type: "error",
				duration: n?.duration ?? 5e3
			}), e;
		}
	},
	dismiss: (e) => {
		Um.dismiss(e);
	}
});
function Gm() {
	return Te((e) => Um.subscribe(e), Um.getSnapshot, () => []);
}
function Km() {
	return {
		toasts: Gm(),
		toast: Wm,
		dismiss: Wm.dismiss
	};
}
//#endregion
//#region src/components/ui/toast/ToastContainer.tsx
function qm({ position: e = "top-center", toasts: t, toast: n, onDismiss: r, theme: i = "colored", expandOnHover: a = !0, maxVisible: o = 5, showProgress: s = !0, className: c = "", containerClassName: l = "" }) {
	let u = Gm(), [d, f] = M(!1), [p, m] = M(!1), [h, g] = M(!1);
	xe(() => {
		if (m(!0), typeof window > "u") return;
		let e = () => {
			let e = document.documentElement.classList.contains("dark"), t = window.matchMedia("(prefers-color-scheme: dark)").matches;
			g(e || t);
		};
		e();
		let t = window.matchMedia("(prefers-color-scheme: dark)");
		return t.addEventListener("change", e), () => t.removeEventListener("change", e);
	}, []);
	let _ = i === "system" ? h ? "dark" : "light" : i, v = Ce(() => t === void 0 ? n === void 0 ? u : n ? [n] : [] : t, [
		t,
		n,
		u
	]), y = (e) => {
		r ? r(e) : Wm.dismiss(e);
	};
	if (!p || v.length === 0) return null;
	let b = [...v].reverse().slice(0, o), x = Ym(e), S = a && d, C = /* @__PURE__ */ N("div", {
		"data-rakit": "toast-container",
		className: L("rakit-toast-container fixed z-[100] pointer-events-none p-4 w-full max-w-md flex flex-col", x.wrapper, l),
		role: "region",
		"aria-live": "polite",
		"aria-label": "Notifikasi sistem",
		children: /* @__PURE__ */ N("div", {
			onMouseEnter: () => f(!0),
			onMouseLeave: () => f(!1),
			className: L("relative w-full flex flex-col pointer-events-auto transition-all duration-300", x.alignment, S ? "space-y-2.5" : "h-18", c),
			children: b.map((t, n) => /* @__PURE__ */ N(Bm, {
				toast: t,
				index: n,
				total: b.length,
				isExpanded: S,
				position: e,
				onDismiss: y,
				theme: _,
				showProgress: s
			}, t.id || `toast-${n}`))
		})
	});
	return typeof document < "u" ? De(C, document.body) : null;
}
var Jm = qm;
function Ym(e) {
	switch (e) {
		case "top-left": return {
			wrapper: "top-5 left-5 items-start",
			alignment: "items-start"
		};
		case "top-center": return {
			wrapper: "top-5 left-1/2 -translate-x-1/2 items-center",
			alignment: "items-center"
		};
		case "top-right": return {
			wrapper: "top-5 right-5 items-end",
			alignment: "items-end"
		};
		case "bottom-left": return {
			wrapper: "bottom-5 left-5 items-start",
			alignment: "items-start"
		};
		case "bottom-center": return {
			wrapper: "bottom-5 left-1/2 -translate-x-1/2 items-center",
			alignment: "items-center"
		};
		case "bottom-right": return {
			wrapper: "bottom-5 right-5 items-end",
			alignment: "items-end"
		};
		default: return {
			wrapper: "top-5 left-1/2 -translate-x-1/2 items-center",
			alignment: "items-center"
		};
	}
}
//#endregion
//#region src/components/ui/index.ts
var Xm = /* @__PURE__ */ Fe({
	ActionBar: () => Bn,
	Autocomplete: () => cr,
	Badge: () => wn,
	Blockquote: () => jp,
	Breadcrumb: () => Up,
	BreadcrumbItem: () => Lp,
	BreadcrumbLink: () => Rp,
	BreadcrumbPage: () => zp,
	BreadcrumbSeparator: () => Vp,
	Button: () => xn,
	Card: () => Wn,
	CardContent: () => Nn,
	CardDescription: () => An,
	CardFooter: () => Pn,
	CardHeader: () => On,
	CardTitle: () => kn,
	Checkbox: () => er,
	CheckboxGroup: () => dr,
	CodeEditor: () => Mr,
	CodeEditorToolbar: () => vr,
	CodeEditorToolbarActions: () => wr,
	CodeEditorToolbarGroup: () => br,
	CodeEditorToolbarRow: () => yr,
	CodeEditorToolbarStatus: () => Sr,
	CodeEditorToolbarTabs: () => xr,
	CodeEditorToolbarViewToggle: () => Cr,
	CodeGutter: () => Er,
	CodePlayground: () => Yp,
	CodeText: () => Ap,
	CodeViewer: () => Ir,
	Container: () => zm,
	ContainerContent: () => Nm,
	ContainerFooter: () => Pm,
	ContainerHeader: () => Fm,
	DataTable: () => ir,
	Drawer: () => Em,
	DrawerBody: () => xm,
	DrawerDescription: () => ym,
	DrawerFooter: () => Sm,
	DrawerHeader: () => bm,
	DrawerTitle: () => vm,
	EmptyState: () => $n,
	FeatureBanner: () => Fn,
	FieldWrapper: () => ar,
	FileViewer: () => Lr,
	FullScreenCodeEditor: () => em,
	FullScreenHeader: () => Xp,
	FullScreenJsonEditor: () => tm,
	FullScreenStatusBar: () => Zp,
	FullScreenToolbar: () => Qp,
	Grid: () => pp,
	GridCol: () => np,
	Heading: () => yp,
	JsonEditor: () => Nr,
	JsonTreeEditor: () => kr,
	JsonTreeViewer: () => kr,
	Kbd: () => kp,
	Layout: () => Am,
	LayoutBackdrop: () => im,
	LayoutBody: () => am,
	LayoutContent: () => om,
	LayoutHeader: () => sm,
	LayoutLoading: () => cm,
	LayoutSidebar: () => Om,
	LinkText: () => Mp,
	LivePlayground: () => Jp,
	LivePreview: () => qp,
	Modal: () => Zn,
	ModalBody: () => Gn,
	ModalDescription: () => Kn,
	ModalFooter: () => qn,
	ModalHeader: () => Jn,
	ModalTitle: () => Yn,
	MultiSelect: () => ur,
	Paragraph: () => Dp,
	Radio: () => fr,
	RadioGroup: () => pr,
	STACK_LAYER_CLASSES: () => rm,
	STACK_LAYER_Z_INDEX: () => nm,
	SegmentedControl: () => Ip,
	Select: () => lr,
	Sidebar: () => Dm,
	SidebarContext: () => lm,
	SidebarFooter: () => gm,
	SidebarGroup: () => mm,
	SidebarHeader: () => dm,
	SidebarItem: () => hm,
	SidebarNav: () => pm,
	SidebarSeparator: () => _m,
	SidebarToggle: () => fm,
	SplitterHandle: () => $p,
	StackLayer: () => km,
	Switch: () => mr,
	Table: () => rr,
	Tabs: () => _r,
	Text: () => wp,
	TextArea: () => sr,
	TextField: () => or,
	ToastContainer: () => qm,
	ToastItem: () => Bm,
	Toaster: () => Jm,
	Typography: () => Np,
	getToolbarButtonClass: () => Tr,
	highlightCode: () => jr,
	renderSeparatorNode: () => Bp,
	toast: () => Wm,
	toastManager: () => Um,
	useCardContext: () => Dn,
	useSidebar: () => um,
	useToast: () => Km,
	useToastStore: () => Gm
});
//#endregion
//#region src/utils/ui/formatters.ts
function Zm(e) {
	return e == null ? "-" : e < 1e3 ? `${Math.round(e)}ms` : `${(e / 1e3).toFixed(2)}s`;
}
function Qm(e) {
	return e ? e >= 200 && e < 300 ? {
		code: e,
		category: "success"
	} : e >= 300 && e < 400 ? {
		code: e,
		category: "redirect"
	} : e >= 400 && e < 500 ? {
		code: e,
		category: "client_error"
	} : e >= 500 ? {
		code: e,
		category: "server_error"
	} : {
		code: e,
		category: "unknown"
	} : {
		code: "-",
		category: "unknown"
	};
}
function $m(e, t = 50) {
	return e ? e.length <= t ? e : `${e.slice(0, t)}...` : "";
}
//#endregion
export { Bn as ActionBar, cr as Autocomplete, wn as Badge, jp as Blockquote, Up as Breadcrumb, Lp as BreadcrumbItem, Rp as BreadcrumbLink, zp as BreadcrumbPage, Vp as BreadcrumbSeparator, xn as Button, Wn as Card, Nn as CardContent, An as CardDescription, Pn as CardFooter, On as CardHeader, kn as CardTitle, er as Checkbox, dr as CheckboxGroup, Mr as CodeEditor, vr as CodeEditorToolbar, wr as CodeEditorToolbarActions, br as CodeEditorToolbarGroup, yr as CodeEditorToolbarRow, Sr as CodeEditorToolbarStatus, xr as CodeEditorToolbarTabs, Cr as CodeEditorToolbarViewToggle, Er as CodeGutter, Yp as CodePlayground, Ap as CodeText, Ir as CodeViewer, zm as Container, Nm as ContainerContent, Pm as ContainerFooter, Fm as ContainerHeader, pn as DEFAULT_RAKIT_CONFIG, ir as DataTable, Em as Drawer, xm as DrawerBody, ym as DrawerDescription, Sm as DrawerFooter, bm as DrawerHeader, vm as DrawerTitle, $n as EmptyState, Fn as FeatureBanner, ar as FieldWrapper, Lr as FileViewer, em as FullScreenCodeEditor, Xp as FullScreenHeader, tm as FullScreenJsonEditor, Zp as FullScreenStatusBar, Qp as FullScreenToolbar, pp as Grid, np as GridCol, yp as Heading, Nr as JsonEditor, kr as JsonTreeEditor, kr as JsonTreeViewer, kp as Kbd, Am as Layout, im as LayoutBackdrop, am as LayoutBody, om as LayoutContent, sm as LayoutHeader, cm as LayoutLoading, Om as LayoutSidebar, Mp as LinkText, Jp as LivePlayground, qp as LivePreview, Zn as Modal, Gn as ModalBody, Kn as ModalDescription, qn as ModalFooter, Jn as ModalHeader, Yn as ModalTitle, ur as MultiSelect, Dp as Paragraph, fr as Radio, pr as RadioGroup, mn as RakitContext, hn as RakitProvider, rm as STACK_LAYER_CLASSES, nm as STACK_LAYER_Z_INDEX, Ip as SegmentedControl, lr as Select, Dm as Sidebar, lm as SidebarContext, gm as SidebarFooter, mm as SidebarGroup, dm as SidebarHeader, hm as SidebarItem, pm as SidebarNav, _m as SidebarSeparator, fm as SidebarToggle, $p as SplitterHandle, km as StackLayer, mr as Switch, rr as Table, _r as Tabs, wp as Text, sr as TextArea, or as TextField, qm as ToastContainer, Bm as ToastItem, Jm as Toaster, Np as Typography, L as cn, _n as defineRakitConfig, Zm as formatLatency, Qm as formatStatusCode, vn as getComponentIdentifier, Tr as getToolbarButtonClass, jr as highlightCode, Bp as renderSeparatorNode, Wm as toast, Um as toastManager, $m as truncateText, Xm as ui, Dn as useCardContext, gn as useRakitConfig, um as useSidebar, Km as useToast, Gm as useToastStore };

//# sourceMappingURL=index.js.map