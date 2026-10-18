import { AlertCircle as e, AlertTriangle as t, ArrowDown as n, ArrowUp as r, ArrowUpDown as i, Check as a, CheckCircle2 as o, ChevronDown as s, ChevronRight as c, Code2 as l, Columns2 as u, Copy as d, Eye as f, EyeOff as p, FileCode as m, FolderTree as h, GripVertical as g, HelpCircle as _, Info as v, Loader2 as y, Maximize2 as b, Minus as x, Moon as S, Plus as C, Redo2 as w, RefreshCw as T, Search as E, Sun as D, Trash2 as O, Undo2 as k, Wand2 as A, X as j } from "lucide-react";
import { Fragment as M, jsx as N, jsxs as P } from "react/jsx-runtime";
import { createContext as F, forwardRef as I, useContext as L, useEffect as R, useId as z, useMemo as B, useRef as V, useState as H, useSyncExternalStore as U } from "react";
import { createPortal as W } from "react-dom";
//#region \0rolldown/runtime.js
var G = Object.defineProperty, ee = (e, t) => {
	let n = {};
	for (var r in e) G(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || G(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function K(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = K(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function q() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = K(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var te = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, ne = (e, t) => ({
	classGroupId: e,
	validator: t
}), re = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), ie = "-", ae = [], oe = "arbitrary..", se = (e) => {
	let t = ue(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return le(e);
			let n = e.split(ie);
			return ce(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? te(i, t) : t : i || ae;
			}
			return n[e] || ae;
		}
	};
}, ce = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = ce(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(ie) : e.slice(t).join(ie), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, le = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? oe + r : void 0;
})(), ue = (e) => {
	let { theme: t, classGroups: n } = e;
	return de(n, t);
}, de = (e, t) => {
	let n = re();
	for (let r in e) {
		let i = e[r];
		fe(i, n, r, t);
	}
	return n;
}, fe = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		pe(i, t, n, r);
	}
}, pe = (e, t, n, r) => {
	typeof e == "string" ? me(e, t, n) : typeof e == "function" ? he(e, t, n, r) : ge(e, t, n, r);
}, me = (e, t, n) => {
	let r = e === "" ? t : _e(t, e);
	r.classGroupId = n;
}, he = (e, t, n, r) => {
	ve(e) ? fe(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(ne(n, e)));
}, ge = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		fe(o, _e(t, a), n, r);
	}
}, _e = (e, t) => {
	let n = e, r = t.split(ie), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = re(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, ve = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ye = (e) => {
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
}, be = "!", xe = ":", Se = [], Ce = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), we = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === xe) {
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
		s.endsWith(be) ? (c = s.slice(0, -1), l = !0) : s.startsWith(be) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Ce(t, l, c, u);
	};
	if (t) {
		let e = t + xe, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Ce(Se, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Te = (e) => {
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
}, Ee = (e) => ({
	cache: ye(e.cacheSize),
	parseClassName: we(e),
	sortModifiers: Te(e),
	postfixLookupClassGroupIds: De(e),
	...se(e)
}), De = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Oe = /\s+/, ke = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Oe), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + be : _, y = v + g;
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
}, Ae = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = je(n)) && (i && (i += " "), i += r);
	return i;
}, je = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = je(e[r])) && (n && (n += " "), n += t);
	return n;
}, Me = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Ee(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = ke(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Ae(...e));
}, Ne = [], J = (e) => {
	let t = (t) => t[e] || Ne;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, Pe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Fe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ie = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Le = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Re = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ze = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, Be = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ve = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, He = (e) => Ie.test(e), Y = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), We = (e) => e.endsWith("%") && Y(e.slice(0, -1)), Ge = (e) => Le.test(e), Ke = () => !0, qe = (e) => Re.test(e) && !ze.test(e), Je = () => !1, Ye = (e) => Be.test(e), Xe = (e) => Ve.test(e), Ze = (e) => !X(e) && !Z(e), Qe = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), $e = (e) => mt(e, vt, Je), X = (e) => Pe.test(e), et = (e) => mt(e, yt, qe), tt = (e) => mt(e, bt, Y), nt = (e) => mt(e, St, Ke), rt = (e) => mt(e, xt, Je), it = (e) => mt(e, gt, Je), at = (e) => mt(e, _t, Xe), ot = (e) => mt(e, Ct, Ye), Z = (e) => Fe.test(e), st = (e) => ht(e, yt), ct = (e) => ht(e, xt), lt = (e) => ht(e, gt), ut = (e) => ht(e, vt), dt = (e) => ht(e, _t), ft = (e) => ht(e, Ct, !0), pt = (e) => ht(e, St, !0), mt = (e, t, n) => {
	let r = Pe.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, ht = (e, t, n = !1) => {
	let r = Fe.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, gt = (e) => e === "position" || e === "percentage", _t = (e) => e === "image" || e === "url", vt = (e) => e === "length" || e === "size" || e === "bg-size", yt = (e) => e === "length", bt = (e) => e === "number", xt = (e) => e === "family-name", St = (e) => e === "number" || e === "weight", Ct = (e) => e === "shadow", wt = /*#__PURE__*/ Me(() => {
	let e = J("color"), t = J("font"), n = J("text"), r = J("font-weight"), i = J("tracking"), a = J("leading"), o = J("breakpoint"), s = J("container"), c = J("spacing"), l = J("radius"), u = J("shadow"), d = J("inset-shadow"), f = J("text-shadow"), p = J("drop-shadow"), m = J("blur"), h = J("perspective"), g = J("aspect"), _ = J("ease"), v = J("animate"), y = () => [
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
		Z,
		X
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
		Z,
		X,
		c
	], T = () => [
		He,
		"full",
		"auto",
		...w()
	], E = () => [
		Ue,
		"none",
		"subgrid",
		Z,
		X
	], D = () => [
		"auto",
		{ span: [
			"full",
			Ue,
			Z,
			X
		] },
		Ue,
		Z,
		X
	], O = () => [
		Ue,
		"auto",
		Z,
		X
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		X
	], A = () => [
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
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		He,
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
	], P = () => [
		s,
		He,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		He,
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
	], I = () => [
		e,
		Z,
		X
	], L = () => [
		...b(),
		lt,
		it,
		{ position: [Z, X] }
	], R = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], z = () => [
		"auto",
		"cover",
		"contain",
		ut,
		$e,
		{ size: [Z, X] }
	], B = () => [
		We,
		st,
		et
	], V = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], H = () => [
		"",
		Y,
		st,
		et
	], U = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], W = () => [
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
	], G = () => [
		Y,
		We,
		lt,
		it
	], ee = () => [
		"",
		"none",
		m,
		Z,
		X
	], K = () => [
		"none",
		Y,
		Z,
		X
	], q = () => [
		"none",
		Y,
		Z,
		X
	], te = () => [
		Y,
		Z,
		X
	], ne = () => [
		He,
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
			blur: [Ge],
			breakpoint: [Ge],
			color: [Ke],
			container: [Ge],
			"drop-shadow": [Ge],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ze],
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
			"inset-shadow": [Ge],
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
			radius: [Ge],
			shadow: [Ge],
			spacing: ["px", Y],
			text: [Ge],
			"text-shadow": [Ge],
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
				He,
				X,
				Z,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Z,
				X
			] }],
			"container-named": [Qe],
			columns: [{ columns: [
				Y,
				"auto",
				X,
				Z,
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
				Ue,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				He,
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
				Y,
				He,
				"auto",
				"initial",
				"none",
				X
			] }],
			grow: [{ grow: [
				"",
				Y,
				Z,
				X
			] }],
			shrink: [{ shrink: [
				"",
				Y,
				Z,
				X
			] }],
			order: [{ order: [
				Ue,
				"first",
				"last",
				"none",
				Z,
				X
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
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
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				st,
				et
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				pt,
				nt
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
				We,
				X
			] }],
			"font-family": [{ font: [
				ct,
				rt,
				t
			] }],
			"font-features": [{ "font-features": [X] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Z,
				X
			] }],
			"line-clamp": [{ "line-clamp": [
				Y,
				"none",
				Z,
				tt
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				Z,
				X
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Z,
				X
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...U(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Y,
				"from-font",
				"auto",
				Z,
				et
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				Y,
				"auto",
				Z,
				X
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
				Ue,
				Z,
				X
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
				Z,
				X
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
				Z,
				X
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
			"bg-position": [{ bg: L() }],
			"bg-repeat": [{ bg: R() }],
			"bg-size": [{ bg: z() }],
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
						Ue,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						"",
						Ue,
						Z,
						X
					]
				},
				dt,
				at
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: B() }],
			"gradient-via-pos": [{ via: B() }],
			"gradient-to-pos": [{ to: B() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: V() }],
			"rounded-s": [{ "rounded-s": V() }],
			"rounded-e": [{ "rounded-e": V() }],
			"rounded-t": [{ "rounded-t": V() }],
			"rounded-r": [{ "rounded-r": V() }],
			"rounded-b": [{ "rounded-b": V() }],
			"rounded-l": [{ "rounded-l": V() }],
			"rounded-ss": [{ "rounded-ss": V() }],
			"rounded-se": [{ "rounded-se": V() }],
			"rounded-ee": [{ "rounded-ee": V() }],
			"rounded-es": [{ "rounded-es": V() }],
			"rounded-tl": [{ "rounded-tl": V() }],
			"rounded-tr": [{ "rounded-tr": V() }],
			"rounded-br": [{ "rounded-br": V() }],
			"rounded-bl": [{ "rounded-bl": V() }],
			"border-w": [{ border: H() }],
			"border-w-x": [{ "border-x": H() }],
			"border-w-y": [{ "border-y": H() }],
			"border-w-s": [{ "border-s": H() }],
			"border-w-e": [{ "border-e": H() }],
			"border-w-bs": [{ "border-bs": H() }],
			"border-w-be": [{ "border-be": H() }],
			"border-w-t": [{ "border-t": H() }],
			"border-w-r": [{ "border-r": H() }],
			"border-w-b": [{ "border-b": H() }],
			"border-w-l": [{ "border-l": H() }],
			"divide-x": [{ "divide-x": H() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": H() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...U(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...U(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...U(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Y,
				Z,
				X
			] }],
			"outline-w": [{ outline: [
				"",
				Y,
				st,
				et
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				ft,
				ot
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				ft,
				ot
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: H() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [Y, et] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": H() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				ft,
				ot
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				Y,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...W(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": W() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [Y] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": G() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": G() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": G() }],
			"mask-image-t-to-pos": [{ "mask-t-to": G() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": G() }],
			"mask-image-r-to-pos": [{ "mask-r-to": G() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": G() }],
			"mask-image-b-to-pos": [{ "mask-b-to": G() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": G() }],
			"mask-image-l-to-pos": [{ "mask-l-to": G() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": G() }],
			"mask-image-x-to-pos": [{ "mask-x-to": G() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": G() }],
			"mask-image-y-to-pos": [{ "mask-y-to": G() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": G() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": G() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Y] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": G() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": G() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
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
			"mask-position": [{ mask: L() }],
			"mask-repeat": [{ mask: R() }],
			"mask-size": [{ mask: z() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Z,
				X
			] }],
			filter: [{ filter: [
				"",
				"none",
				Z,
				X
			] }],
			blur: [{ blur: ee() }],
			brightness: [{ brightness: [
				Y,
				Z,
				X
			] }],
			contrast: [{ contrast: [
				Y,
				Z,
				X
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				ft,
				ot
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				Y,
				Z,
				X
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Y,
				Z,
				X
			] }],
			invert: [{ invert: [
				"",
				Y,
				Z,
				X
			] }],
			saturate: [{ saturate: [
				Y,
				Z,
				X
			] }],
			sepia: [{ sepia: [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				X
			] }],
			"backdrop-blur": [{ "backdrop-blur": ee() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Y,
				Z,
				X
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Y,
				Z,
				X
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Y,
				Z,
				X
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Y,
				Z,
				X
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Y,
				Z,
				X
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Y,
				Z,
				X
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
				Z,
				X
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Y,
				"initial",
				Z,
				X
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Z,
				X
			] }],
			delay: [{ delay: [
				Y,
				Z,
				X
			] }],
			animate: [{ animate: [
				"none",
				v,
				Z,
				X
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Z,
				X
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: K() }],
			"rotate-x": [{ "rotate-x": K() }],
			"rotate-y": [{ "rotate-y": K() }],
			"rotate-z": [{ "rotate-z": K() }],
			scale: [{ scale: q() }],
			"scale-x": [{ "scale-x": q() }],
			"scale-y": [{ "scale-y": q() }],
			"scale-z": [{ "scale-z": q() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: te() }],
			"skew-x": [{ "skew-x": te() }],
			"skew-y": [{ "skew-y": te() }],
			transform: [{ transform: [
				Z,
				X,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ne() }],
			"translate-x": [{ "translate-x": ne() }],
			"translate-y": [{ "translate-y": ne() }],
			"translate-z": [{ "translate-z": ne() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				Ue,
				Z,
				X
			] }],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
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
				Z,
				X
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": I() }],
			"scrollbar-track-color": [{ "scrollbar-track": I() }],
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
				Z,
				X
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				Y,
				st,
				et,
				tt
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
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
function Q(...e) {
	return wt(q(e));
}
//#endregion
//#region src/components/ui/button/index.tsx
var Tt = {
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
}, Et = {
	xs: "px-2 py-1 text-[11px] font-semibold gap-1",
	sm: "px-3 py-1.5 text-xs font-semibold gap-1.5",
	md: "px-4 py-2 text-xs font-semibold gap-2",
	lg: "px-5 py-2.5 text-sm font-semibold gap-2.5",
	icon: "p-1.5"
};
function Dt({ variant: e = "outline", size: t = "sm", children: n, className: r = "", disabled: i, isLoading: a = !1, leftIcon: o, rightIcon: s, fullWidth: c = !1, pill: l = !1, type: u = "button", ...d }) {
	let f = l ? "rounded-full" : t === "xs" ? "rounded-md" : t === "lg" ? "rounded-2xl" : "rounded-lg", p = c ? "w-full" : "";
	return /* @__PURE__ */ P("button", {
		type: u,
		className: Q("inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed", Tt[e], Et[t], f, p, r),
		disabled: i || a,
		...d,
		children: [
			a ? /* @__PURE__ */ N(y, { className: "w-3.5 h-3.5 animate-spin shrink-0" }) : o && /* @__PURE__ */ N("span", {
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
//#region src/components/ui/badge/MethodBadge.tsx
var Ot = {
	default: "bg-slate-100 text-slate-700 border border-slate-200/80",
	primary: "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
	success: "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
	warning: "bg-amber-50 text-amber-800 border border-amber-200/80",
	danger: "bg-rose-50 text-rose-800 border border-rose-200/80",
	info: "bg-blue-50 text-blue-800 border border-blue-200/80",
	purple: "bg-violet-50 text-violet-800 border border-violet-200/80"
};
function kt({ method: e = "GET", size: t = "xs", className: n = "" }) {
	let r = (e || "GET").toUpperCase();
	return /* @__PURE__ */ N("span", {
		className: `inline-flex items-center justify-center font-mono font-black rounded uppercase shrink-0 select-none ${t === "xs" ? "px-1 py-0.2 text-[9px]" : "px-1.5 py-0.5 text-[10px]"} ${Ot[r === "GET" ? "info" : r === "POST" ? "success" : r === "PUT" ? "warning" : r === "DELETE" ? "danger" : r === "PATCH" ? "purple" : "default"]} ${n}`,
		children: r
	});
}
//#endregion
//#region src/components/ui/badge/StatusCodeBadge.tsx
function At({ statusCode: e, className: t = "" }) {
	return /* @__PURE__ */ N(Nt, {
		variant: e >= 200 && e < 300 ? "success" : e >= 300 && e < 400 ? "info" : e >= 400 && e < 500 ? "warning" : e >= 500 ? "danger" : "default",
		size: "xs",
		className: `font-mono font-semibold ${t}`,
		children: e
	});
}
//#endregion
//#region src/components/ui/badge/index.tsx
var jt = {
	default: "bg-slate-100 text-slate-700 border border-slate-200/80",
	primary: "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
	success: "bg-emerald-50 text-emerald-800 border border-emerald-200/80",
	warning: "bg-amber-50 text-amber-800 border border-amber-200/80",
	danger: "bg-rose-50 text-rose-800 border border-rose-200/80",
	info: "bg-blue-50 text-blue-800 border border-blue-200/80",
	purple: "bg-violet-50 text-violet-800 border border-violet-200/80"
}, Mt = {
	xs: "px-1.5 py-0.2 text-[9px]",
	sm: "px-2 py-0.5 text-[10px]",
	md: "px-2.5 py-1 text-[11px]"
};
function Nt({ variant: e = "default", size: t = "sm", children: n, className: r = "", ...i }) {
	return /* @__PURE__ */ N("span", {
		className: `inline-flex items-center justify-center font-semibold rounded-full select-none transition-all ${Mt[t]} ${jt[e]} ${r}`,
		...i,
		children: n
	});
}
//#endregion
//#region src/components/ui/card/CardContext.tsx
var Pt = F(null);
function Ft({ value: e, children: t }) {
	return /* @__PURE__ */ N(Pt.Provider, {
		value: e,
		children: t
	});
}
function It() {
	return L(Pt);
}
//#endregion
//#region src/components/ui/card/CardHeader.tsx
function Lt({ children: e, className: t = "", title: n, description: r, icon: i, iconBgColor: a, badge: o, actionSlot: c, actions: l, collapsible: u, showCollapseTrigger: d = !0, onClick: f, onKeyDown: p, ...m }) {
	let h = It(), g = u ?? h?.collapsible ?? !1, _ = h?.isCollapsed ?? !1, v = h?.toggleCollapse ?? (() => {}), y = (e) => {
		f && f(e), g && !e.defaultPrevented && v();
	}, b = (e) => {
		p && p(e), g && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), v());
	}, x = !!(n || r || i || o || c || l);
	return /* @__PURE__ */ N("div", {
		role: g ? "button" : void 0,
		tabIndex: g ? 0 : void 0,
		"aria-expanded": g ? !_ : void 0,
		onClick: g ? y : f,
		onKeyDown: g ? b : p,
		className: Q("px-5 py-3.5 flex items-center justify-between gap-3 transition-all", g && _ ? "border-b-0" : "border-b border-slate-200/70", g && "cursor-pointer select-none group", t),
		...m,
		children: x ? /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ P("div", {
			className: "flex items-start gap-3 min-w-0",
			children: [i && /* @__PURE__ */ N("div", {
				className: Q("p-2 rounded-xl border shadow-2xs shrink-0 transition-transform group-hover:scale-105", a || "bg-slate-50 text-slate-700 border-slate-200"),
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
			children: [(c || l) && /* @__PURE__ */ N("div", {
				onClick: (e) => e.stopPropagation(),
				className: "flex items-center gap-2",
				children: c || l
			}), g && d && /* @__PURE__ */ N("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), v();
				},
				className: "p-1.5 rounded-lg text-slate-400 group-hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20",
				title: _ ? "Expand" : "Collapse",
				"aria-expanded": !_,
				children: /* @__PURE__ */ N(s, { className: Q("w-4 h-4 transition-transform duration-200", !_ && "rotate-180 text-blue-600") })
			})]
		})] }) : /* @__PURE__ */ N(M, { children: /* @__PURE__ */ P("div", {
			className: "flex items-center justify-between gap-3 w-full",
			children: [e, g && d && /* @__PURE__ */ N("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation(), v();
				},
				className: "p-1.5 rounded-lg text-slate-400 group-hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 shrink-0",
				title: _ ? "Expand" : "Collapse",
				"aria-expanded": !_,
				children: /* @__PURE__ */ N(s, { className: Q("w-4 h-4 transition-transform duration-200", !_ && "rotate-180 text-blue-600") })
			})]
		}) })
	});
}
//#endregion
//#region src/components/ui/card/CardTitle.tsx
function Rt({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("h3", {
		className: Q("text-sm font-semibold text-slate-800 tracking-tight", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/CardDescription.tsx
function zt({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("p", {
		className: Q("text-xs text-slate-500 mt-0.5 leading-relaxed", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/CardContent.tsx
var Bt = {
	none: "p-0",
	xSmall: "px-4 py-2",
	small: "px-5 py-3",
	medium: "px-5 py-4",
	large: "px-6 py-5"
}, Vt = {
	none: "",
	xSmall: "gap-1.5",
	small: "gap-2.5",
	medium: "gap-3.5",
	large: "gap-5",
	xLarge: "gap-7"
};
function Ht({ children: e, className: t = "", padding: n = "medium", gap: r = "medium", ...i }) {
	let a = It(), o = a?.collapsible ?? !1, s = a?.isCollapsed ?? !1, c = typeof r == "boolean" ? r ? "medium" : "none" : r ?? "medium", l = Vt[c] || "", u = c !== "none";
	return o ? /* @__PURE__ */ N("div", {
		"aria-hidden": s,
		className: Q("grid transition-all duration-300 ease-in-out", s ? "grid-rows-[0fr] opacity-0 pointer-events-none" : "grid-rows-[1fr] opacity-100", t),
		...i,
		children: /* @__PURE__ */ N("div", {
			className: "overflow-hidden min-h-0",
			children: /* @__PURE__ */ N("div", {
				className: Q(Bt[n], u && "flex flex-col", l),
				children: e
			})
		})
	}) : /* @__PURE__ */ N("div", {
		className: Q(Bt[n], u && "flex flex-col", l, t),
		...i,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/CardFooter.tsx
function Ut({ children: e, className: t = "", ...n }) {
	let r = It(), i = r?.collapsible ?? !1, a = r?.isCollapsed ?? !1;
	return i && a ? null : /* @__PURE__ */ N("div", {
		className: Q("px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-600 transition-colors", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/card/FeatureBanner.tsx
function Wt({ icon: e, iconBgColor: t = "bg-emerald-50 text-[#1b7e2e] border-emerald-200", title: n, badge: r, description: i, actionSlot: a, actions: o, tone: s = "emerald", className: c = "", ...l }) {
	let u = o || a, d = s === "emerald" ? "bg-gradient-to-br from-white via-emerald-50/40 to-emerald-50/20 border-emerald-200/90 text-slate-900 shadow-xs" : s === "slate" ? "bg-gradient-to-br from-white via-slate-50 to-slate-100/50 border-slate-200 text-slate-900 shadow-xs" : "bg-white border-slate-200 text-slate-900 shadow-xs";
	return /* @__PURE__ */ N($t, {
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
var Gt = {
	top: "border-b",
	bottom: "border-t mt-auto",
	"sticky-top": "sticky top-0 z-10 border-b backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.03)]",
	"sticky-bottom": "sticky bottom-0 z-10 border-t mt-auto backdrop-blur-md shadow-[0_-4px_12px_rgba(0,0,0,0.03)]",
	floating: "sticky bottom-3 z-10 mx-3 mb-3 mt-auto rounded-xl shadow-lg ring-1 ring-black/5 backdrop-blur-md"
}, Kt = {
	left: "justify-start",
	right: "justify-end",
	between: "justify-between",
	center: "justify-center"
}, qt = {
	tight: "py-2 px-3.5 gap-2 text-xs",
	normal: "py-2.5 px-5 gap-3 text-sm",
	relaxed: "py-3.5 px-6 gap-4 text-base"
}, Jt = {
	default: "bg-gradient-to-r from-slate-50/90 via-white to-slate-50/90 text-slate-700 shadow-2xs",
	floating: "border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-md ring-1 ring-slate-900/5 text-slate-700",
	subtle: "bg-slate-50/60 text-slate-600",
	glass: "bg-white/80 backdrop-blur-md text-slate-700 shadow-2xs",
	contrast: "bg-slate-100/95 text-slate-800 border-slate-200"
};
function Yt({ position: e = "bottom", align: t = "between", density: n = "normal", variant: r = "default", bordered: i = !0, className: a = "", children: o, leftContent: s, rightContent: c, ...l }) {
	let u = !!(s || c);
	return /* @__PURE__ */ N("div", {
		role: "toolbar",
		"aria-orientation": "horizontal",
		className: Q("w-full flex items-center transition-all", Jt[e === "floating" ? "floating" : r], i && e !== "floating" && "border-slate-200/90", Gt[e], !u && Kt[t], qt[n], a),
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
var Xt = {
	none: "p-0",
	xSmall: "p-2",
	small: "p-4",
	medium: "p-5",
	large: "p-6"
}, Zt = {
	none: "",
	xSmall: "gap-1.5",
	small: "gap-2.5",
	medium: "gap-3.5",
	large: "gap-5",
	xLarge: "gap-7"
}, Qt = {
	default: "bg-white border border-slate-200/90 shadow-xs text-slate-900",
	light: "bg-white border border-slate-200/80 shadow-xs text-slate-900",
	bordered: "bg-white border border-slate-200 shadow-none text-slate-900",
	ghost: "bg-transparent border-transparent shadow-none text-slate-900",
	flat: "bg-slate-50/90 border border-slate-200/80 shadow-none text-slate-900",
	elevated: "bg-white border border-slate-200/70 shadow-md text-slate-900"
};
function $t({ children: e, className: t = "", padding: n = "none", gap: r = "medium", variant: i = "default", hoverable: a = !1, collapsible: o = !1, defaultCollapsed: s = !1, isCollapsed: c, onToggleCollapse: l, title: u, description: d, icon: f, iconBgColor: p, badge: m, actionSlot: h, actions: g, headerClassName: _ = "", bodyClassName: v = "", ...y }) {
	let [b, x] = H(s), S = c !== void 0, C = S ? c : b, w = () => {
		let e = !C;
		S || x(e), l?.(e);
	}, T = B(() => ({
		collapsible: o,
		isCollapsed: C,
		toggleCollapse: w
	}), [o, C]), E = !!(u || d || f || m || h || g), D = typeof r == "boolean" ? r ? "medium" : "none" : r ?? "none", O = !E && D !== "none" ? `flex flex-col ${Zt[D]}` : "";
	return /* @__PURE__ */ N(Ft, {
		value: T,
		children: /* @__PURE__ */ N("div", {
			className: Q("rounded-2xl transition-all overflow-hidden", Qt[i], a && "hover:shadow-md hover:border-slate-300", !E && Xt[n], O, t),
			...y,
			children: E ? /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N(Lt, {
				title: u,
				description: d,
				icon: f,
				iconBgColor: p,
				badge: m,
				actionSlot: h,
				actions: g,
				className: _
			}), /* @__PURE__ */ N(Ht, {
				padding: n === "none" ? "medium" : n,
				gap: r,
				className: v,
				children: e
			})] }) : e
		})
	});
}
$t.Header = Lt, $t.Title = Rt, $t.Description = zt, $t.Content = Ht, $t.Footer = Ut, $t.FeatureBanner = Wt, $t.ActionBar = Yt;
//#endregion
//#region src/components/ui/modal/ModalBody.tsx
function en({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("div", {
		className: `p-6 overflow-y-auto max-h-[calc(85vh-120px)] ${t}`,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/ModalDescription.tsx
function tn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("p", {
		className: `text-xs text-slate-500 mt-0.5 leading-relaxed ${t}`,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/ModalFooter.tsx
function nn({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("div", {
		className: `px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end gap-2.5 shrink-0 ${t}`,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/ModalHeader.tsx
function rn({ children: e, onClose: t, className: n = "" }) {
	return /* @__PURE__ */ P("div", {
		className: `flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0 ${n}`,
		children: [/* @__PURE__ */ N("div", {
			className: "min-w-0 flex-1",
			children: e
		}), t && /* @__PURE__ */ N("button", {
			type: "button",
			onClick: t,
			className: "text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-3",
			"aria-label": "Tutup modal",
			children: /* @__PURE__ */ N(j, { className: "w-4 h-4" })
		})]
	});
}
//#endregion
//#region src/components/ui/modal/ModalTitle.tsx
function an({ children: e, className: t = "", ...n }) {
	return /* @__PURE__ */ N("h3", {
		className: `text-sm font-semibold text-slate-800 tracking-tight flex items-center gap-2 ${t}`,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/ui/modal/index.tsx
var on = {
	sm: "max-w-sm",
	md: "max-w-md",
	lg: "max-w-lg",
	xl: "max-w-xl",
	"2xl": "max-w-2xl",
	full: "max-w-5xl w-[95vw]"
};
function sn({ isOpen: e, onClose: t, title: n, description: r, icon: i, children: a, footer: o, size: s = "md", className: c = "", closeOnEsc: l = !0, closeOnOverlayClick: u = !0, showCloseButton: d = !0 }) {
	let f = V(null);
	if (R(() => {
		if (!e) return;
		let n = (e) => {
			l && e.key === "Escape" && t();
		};
		window.addEventListener("keydown", n);
		let r = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			window.removeEventListener("keydown", n), document.body.style.overflow = r;
		};
	}, [
		e,
		l,
		t
	]), !e || typeof document > "u") return null;
	let p = /* @__PURE__ */ N("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150",
		onClick: () => {
			u && t();
		},
		role: "dialog",
		"aria-modal": "true",
		children: /* @__PURE__ */ P("div", {
			ref: f,
			className: `w-full ${on[s]} bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150 ${c}`,
			onClick: (e) => e.stopPropagation(),
			children: [
				(n || d) && /* @__PURE__ */ N(rn, {
					onClose: d ? t : void 0,
					children: /* @__PURE__ */ P("div", {
						className: "flex items-center gap-2.5",
						children: [i && /* @__PURE__ */ N("div", {
							className: "text-emerald-600 shrink-0",
							children: i
						}), /* @__PURE__ */ P("div", { children: [n && /* @__PURE__ */ N(an, { children: n }), r && /* @__PURE__ */ N(tn, { children: r })] })]
					})
				}),
				/* @__PURE__ */ N(en, { children: a }),
				o && /* @__PURE__ */ N(nn, { children: o })
			]
		})
	});
	return W(p, document.body);
}
//#endregion
//#region src/components/ui/empty-state/index.tsx
function cn({ icon: e, title: t, description: n, action: r, compact: i = !1, theme: a = "light", className: o = "" }) {
	let s = a === "dark";
	return /* @__PURE__ */ P("div", {
		className: `flex flex-col items-center justify-center text-center rounded-xl select-none ${s ? "bg-slate-950/60 text-slate-300" : "bg-slate-50/40 text-slate-700"} ${i ? "p-4 sm:p-5 gap-2" : "p-8 sm:p-12 gap-3"} ${o}`,
		children: [
			e && /* @__PURE__ */ N("div", {
				className: `rounded-xl shadow-2xs flex items-center justify-center shrink-0 ${s ? "bg-slate-900 border border-slate-800 text-slate-400" : "bg-white border border-slate-200/70 text-slate-400"} ${i ? "w-8 h-8" : "w-11 h-11"}`,
				children: e
			}),
			/* @__PURE__ */ P("div", {
				className: "max-w-xs space-y-0.5",
				children: [/* @__PURE__ */ N("h4", {
					className: `text-xs sm:text-sm font-semibold tracking-tight leading-snug ${s ? "text-slate-200" : "text-slate-700"}`,
					children: t
				}), n && /* @__PURE__ */ N("p", {
					className: "text-[11px] sm:text-xs leading-relaxed text-slate-400",
					children: n
				})]
			}),
			r && /* @__PURE__ */ N("div", {
				className: "mt-1",
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/ui/table/index.tsx
var ln = {
	sm: "py-2 px-3 text-[10px]",
	md: "py-3 px-3.5 text-[11px]",
	lg: "py-3.5 px-4 text-xs"
}, un = {
	sm: "py-1.5 px-3 text-xs",
	md: "py-2.5 px-3.5 text-sm",
	lg: "py-3.5 px-4 text-sm"
};
function dn({ data: e, columns: t, rowKey: a, emptyTitle: o = "Tidak Ada Data", emptyMessage: s = "No data available", emptyIcon: c, defaultSortKey: l, defaultSortDirection: u = "asc", className: d = "", tableClassName: f = "", stickyHeader: p = !0, size: m = "md", isLoading: h = !1, loadingMessage: g = "Memuat data...", onRowClick: _, rowClassName: v, bordered: b = !1, striped: x = !1 }) {
	let [S, C] = H(l || null), [w, T] = H(u), E = (e, t) => {
		t && (S === e ? w === "asc" ? T("desc") : (C(null), T("asc")) : (C(e), T("asc")));
	}, D = B(() => {
		if (!S) return e;
		let n = t.find((e) => e.key === S);
		return n ? [...e].sort((e, t) => {
			let r = n.sortValue ? n.sortValue(e) : e[S], i = n.sortValue ? n.sortValue(t) : t[S];
			if (typeof r == "string" && (r = r.toLowerCase()), typeof i == "string" && (i = i.toLowerCase()), r === i) return 0;
			if (r == null) return 1;
			if (i == null) return -1;
			let a = r > i ? 1 : -1;
			return w === "asc" ? a : -a;
		}) : e;
	}, [
		e,
		S,
		w,
		t
	]);
	return /* @__PURE__ */ N("div", {
		className: Q("w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-2xs", d),
		children: /* @__PURE__ */ P("table", {
			className: Q("w-full text-left border-collapse", f),
			children: [/* @__PURE__ */ N("thead", { children: /* @__PURE__ */ N("tr", {
				className: Q("border-b border-slate-200 font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/95 backdrop-blur-xs select-none", p ? "sticky top-0 z-10" : "", ln[m]),
				children: t.map((e) => {
					let t = S === e.key, a = e.sticky === "left" ? "sticky left-0 z-20 bg-slate-50 shadow-[1px_0_0_0_rgb(226,232,240)]" : e.sticky === "right" ? "sticky right-0 z-20 bg-slate-50 shadow-[-1px_0_0_0_rgb(226,232,240)]" : "";
					return /* @__PURE__ */ N("th", {
						style: { width: e.width },
						className: Q(ln[m], "transition-colors", a, e.sortable ? "cursor-pointer hover:bg-slate-100/90" : "", e.headerClassName),
						onClick: () => E(e.key, e.sortable),
						children: /* @__PURE__ */ P("div", {
							className: Q("flex items-center gap-1.5", e.align === "center" ? "justify-center" : e.align === "right" ? "justify-end" : "justify-start"),
							children: [/* @__PURE__ */ N("span", { children: e.title }), e.sortable && /* @__PURE__ */ N("span", {
								className: "shrink-0 text-slate-400",
								children: t ? N(w === "asc" ? r : n, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ N(i, { className: "w-3 h-3 text-slate-300 opacity-60" })
							})]
						})
					}, e.key);
				})
			}) }), /* @__PURE__ */ N("tbody", {
				className: "divide-y divide-slate-100 text-slate-700",
				children: h ? /* @__PURE__ */ N("tr", { children: /* @__PURE__ */ N("td", {
					colSpan: t.length,
					className: "py-12 px-4 text-center",
					children: /* @__PURE__ */ P("div", {
						className: "flex flex-col items-center justify-center gap-2.5 text-slate-500",
						children: [/* @__PURE__ */ N(y, { className: "w-6 h-6 animate-spin text-emerald-600" }), /* @__PURE__ */ N("span", {
							className: "text-xs font-medium",
							children: g
						})]
					})
				}) }) : D.length === 0 ? /* @__PURE__ */ N("tr", { children: /* @__PURE__ */ N("td", {
					colSpan: t.length,
					className: "py-8 px-4 text-center",
					children: /* @__PURE__ */ N(cn, {
						compact: !0,
						className: "!border-0 !bg-transparent",
						icon: c,
						title: o,
						description: s
					})
				}) }) : D.map((e, n) => {
					let r = a ? a(e, n) : e?.id || n, i = !!_, o = typeof v == "function" ? v(e, n) : v;
					return /* @__PURE__ */ N("tr", {
						onClick: () => _?.(e, n),
						className: Q("transition-colors group", x && n % 2 == 1 ? "bg-slate-50/40" : "bg-white", i ? "cursor-pointer hover:bg-emerald-50/40" : "hover:bg-slate-50/70", o),
						children: t.map((t) => {
							let r = t.sticky === "left" ? "sticky left-0 z-10 bg-white group-hover:bg-slate-50/90 shadow-[1px_0_0_0_rgb(241,245,249)]" : t.sticky === "right" ? "sticky right-0 z-10 bg-white group-hover:bg-slate-50/90 shadow-[-1px_0_0_0_rgb(241,245,249)]" : "", i = t.render ? t.render(e, n) : e[t.key];
							return /* @__PURE__ */ N("td", {
								className: Q(un[m], r, t.align === "center" ? "text-center" : t.align === "right" ? "text-right" : "text-left", b ? "border-r border-slate-100 last:border-r-0" : "", t.className),
								children: i
							}, t.key);
						})
					}, r);
				})
			})]
		})
	});
}
var fn = dn, pn = I(({ label: t, error: n, helperText: r, hint: i, required: a, optional: o, disabled: s, size: c = "md", layout: l = "vertical", htmlFor: u, className: d, labelClassName: f, children: p, ...m }, h) => {
	let g = l === "horizontal", v = {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base font-semibold"
	}[c];
	return /* @__PURE__ */ P("div", {
		ref: h,
		className: Q("w-full", g ? "grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start" : "space-y-1.5", s && "opacity-60 cursor-not-allowed", d),
		...m,
		children: [t ? /* @__PURE__ */ N("div", {
			className: Q(g && "pt-2 md:text-right"),
			children: /* @__PURE__ */ P("label", {
				htmlFor: u,
				className: Q("inline-flex items-center gap-1 font-medium text-slate-700 select-none transition-colors", n ? "text-rose-600" : "", v, f),
				children: [
					/* @__PURE__ */ N("span", { children: t }),
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
						children: /* @__PURE__ */ N(_, { className: "w-3.5 h-3.5 inline ml-0.5" })
					})
				]
			})
		}) : null, /* @__PURE__ */ P("div", {
			className: Q("w-full", g && (t ? "md:col-span-2" : "md:col-span-3")),
			children: [p, n ? /* @__PURE__ */ P("p", {
				className: "mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1.5 animate-in fade-in slide-in-from-top-0.5 duration-150",
				children: [/* @__PURE__ */ N(e, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ N("span", { children: n })]
			}) : r ? /* @__PURE__ */ N("p", {
				className: "mt-1.5 text-xs text-slate-500",
				children: r
			}) : null]
		})]
	});
});
pn.displayName = "FieldWrapper";
//#endregion
//#region src/components/ui/field/text-field/TextField.tsx
var mn = I(({ type: e = "text", id: t, name: n, value: r, defaultValue: i, onChange: a, placeholder: o, disabled: s, readOnly: c, required: l, optional: u, label: d, error: m, helperText: h, hint: g, size: _ = "md", layout: v = "vertical", leftIcon: y, rightIcon: b, prefixText: x, suffixText: S, clearable: C, onClear: w, isPasswordToggle: T = !0, wrapperClassName: E, inputWrapperClassName: D, className: O, ...k }, A) => {
	let M = z(), F = t || M, [I, L] = H(!1), R = e === "password", B = R && I ? "text" : e, V = r !== void 0 && String(r).length > 0, U = {
		sm: "py-1.5 text-xs min-h-[32px]",
		md: "py-2 text-sm min-h-[38px]",
		lg: "py-2.5 text-base min-h-[44px]"
	}[_], W = {
		sm: Q(x ? "pl-2" : y ? "pl-1.5" : "pl-2.5", S ? "pr-2" : b || R && T || C && V ? "pr-1.5" : "pr-2.5"),
		md: Q(x ? "pl-2.5" : y ? "pl-2" : "pl-3", S ? "pr-2.5" : b || R && T || C && V ? "pr-2" : "pr-3"),
		lg: Q(x ? "pl-3" : y ? "pl-2.5" : "pl-3.5", S ? "pr-3" : b || R && T || C && V ? "pr-2.5" : "pr-3.5")
	}[_], G = {
		sm: "w-3.5 h-3.5",
		md: "w-4 h-4",
		lg: "w-5 h-5"
	}[_], ee = /* @__PURE__ */ P("div", {
		className: Q("group/input-field relative flex items-center w-full rounded-lg transition-colors duration-150 overflow-hidden", "bg-white border", m ? "border-rose-300 bg-rose-50/20 focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500" : "border-slate-300 hover:border-slate-400 focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600", s && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", D),
		children: [
			x && /* @__PURE__ */ N("span", {
				className: Q("inline-flex items-center justify-center self-stretch shrink-0 font-mono font-medium select-none transition-colors", "border-r border-slate-200 bg-slate-50 text-slate-600 group-focus-within/input-field:border-emerald-600/40 group-focus-within/input-field:bg-emerald-50/40 group-focus-within/input-field:text-emerald-700", _ === "sm" ? "px-2.5 text-xs" : _ === "lg" ? "px-3.5 text-sm" : "px-3 text-xs"),
				children: x
			}),
			y && !x && /* @__PURE__ */ N("div", {
				className: "pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input-field:text-emerald-600 transition-colors shrink-0",
				children: /* @__PURE__ */ N("span", {
					className: G,
					children: y
				})
			}),
			/* @__PURE__ */ N("input", {
				ref: A,
				id: F,
				name: n,
				type: B,
				value: r,
				defaultValue: i,
				onChange: a,
				placeholder: o,
				disabled: s,
				readOnly: c,
				required: l,
				className: Q("w-full flex-1 min-w-0 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 text-slate-800 placeholder:text-slate-400 font-medium", U, W, s && "cursor-not-allowed", O),
				...k
			}),
			(C && V && w && !s && !c || R && T && !s || b && !R) && /* @__PURE__ */ P("div", {
				className: "flex items-center gap-1 pr-2 shrink-0",
				children: [
					C && V && w && !s && !c && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: w,
						className: "p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer",
						"aria-label": "Bersihkan input",
						children: /* @__PURE__ */ N(j, { className: G })
					}),
					R && T && !s && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: () => L((e) => !e),
						className: "p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer",
						"aria-label": I ? "Sembunyikan password" : "Tampilkan password",
						children: N(I ? p : f, { className: G })
					}),
					b && !R && !C && /* @__PURE__ */ N("div", {
						className: "pointer-events-none text-slate-400 group-focus-within/input-field:text-emerald-600 transition-colors",
						children: /* @__PURE__ */ N("span", {
							className: G,
							children: b
						})
					})
				]
			}),
			S && /* @__PURE__ */ N("span", {
				className: Q("inline-flex items-center justify-center self-stretch shrink-0 font-mono font-medium select-none transition-colors", "border-l border-slate-200 bg-slate-50 text-slate-600 group-focus-within/input-field:border-emerald-600/40 group-focus-within/input-field:bg-emerald-50/40 group-focus-within/input-field:text-emerald-700", _ === "sm" ? "px-2.5 text-xs" : _ === "lg" ? "px-3.5 text-sm" : "px-3 text-xs"),
				children: S
			})
		]
	});
	return d || m || h || g ? /* @__PURE__ */ N(pn, {
		htmlFor: F,
		label: d,
		error: m,
		helperText: h,
		hint: g,
		required: l,
		optional: u,
		disabled: s,
		size: _,
		layout: v,
		className: E,
		children: ee
	}) : ee;
});
mn.displayName = "TextField";
//#endregion
//#region src/components/ui/field/textarea/TextArea.tsx
var hn = I(({ id: e, name: t, value: n, defaultValue: r, onChange: i, placeholder: a, rows: o = 4, maxLength: s, showCount: c = !1, disabled: l, readOnly: u, required: d, optional: f, label: p, error: m, helperText: h, hint: g, size: _ = "md", layout: v = "vertical", clearable: y, onClear: b, wrapperClassName: x, className: S, ...C }, w) => {
	let T = z(), E = e || T, D = typeof n == "string" ? n.length : typeof r == "string" ? r.length : 0, O = D > 0, k = {
		sm: "p-2 text-xs",
		md: "p-3 text-sm",
		lg: "p-4 text-base"
	}[_], A = /* @__PURE__ */ P("div", {
		className: "relative w-full",
		children: [/* @__PURE__ */ N("textarea", {
			ref: w,
			id: E,
			name: t,
			value: n,
			defaultValue: r,
			onChange: i,
			rows: o,
			maxLength: s,
			placeholder: a,
			disabled: l,
			readOnly: u,
			required: d,
			className: Q("w-full transition-colors text-slate-800 placeholder-slate-400 rounded-lg focus:outline-none resize-y", k, m ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", l && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", S),
			...C
		}), /* @__PURE__ */ P("div", {
			className: "flex items-center justify-between mt-1 px-1",
			children: [y && O && b && !l && !u ? /* @__PURE__ */ P("button", {
				type: "button",
				onClick: b,
				className: "inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600 transition-colors cursor-pointer",
				children: [/* @__PURE__ */ N(j, { className: "w-3 h-3" }), /* @__PURE__ */ N("span", { children: "Bersihkan" })]
			}) : /* @__PURE__ */ N("span", {}), c && /* @__PURE__ */ P("span", {
				className: "text-[11px] font-mono text-slate-400 select-none ml-auto",
				children: [D, s ? ` / ${s}` : " karakter"]
			})]
		})]
	});
	return p || m || h || g ? /* @__PURE__ */ N(pn, {
		htmlFor: E,
		label: p,
		error: m,
		helperText: h,
		hint: g,
		required: d,
		optional: f,
		disabled: l,
		size: _,
		layout: v,
		className: x,
		children: A
	}) : A;
});
hn.displayName = "TextArea";
//#endregion
//#region src/components/ui/field/autocomplete/Autocomplete.tsx
var gn = I(({ options: e, value: t = "", onChange: n, placeholder: r = "Ketik untuk mencari...", label: i, error: o, helperText: c, hint: l, required: u, optional: d, disabled: f, size: p = "md", layout: m = "vertical", clearable: h = !0, loading: g = !1, emptyText: _ = "Tidak ada pilihan yang cocok", leftIcon: v, filterFn: b, renderOption: x, className: S, wrapperClassName: C }, w) => {
	let T = z(), E = V(null), D = V(null), [O, k] = H(!1), [A, M] = H(""), [F, I] = H(-1), L = B(() => e.map((e) => typeof e == "string" ? {
		label: e,
		value: e
	} : e), [e]), U = B(() => L.find((e) => e.value === t), [L, t]);
	R(() => {
		U ? M(U.label) : t || M("");
	}, [U, t]);
	let W = B(() => {
		if (!A.trim()) return L;
		if (b) return L.filter((e) => b(e, A));
		let e = A.toLowerCase();
		return L.filter((t) => t.label.toLowerCase().includes(e) || t.description && t.description.toLowerCase().includes(e));
	}, [
		L,
		A,
		b
	]);
	R(() => {
		let e = (e) => {
			E.current && !E.current.contains(e.target) && (k(!1), M(U ? U.label : ""));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [U]);
	let G = (e) => {
		e.disabled || (M(e.label), k(!1), n?.(e.value, e));
	}, ee = () => {
		M(""), k(!1), n?.("");
	}, K = (e) => {
		if (!f) {
			if (!O && (e.key === "ArrowDown" || e.key === "Enter")) k(!0);
			else switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), I((e) => e < W.length - 1 ? e + 1 : 0);
					break;
				case "ArrowUp":
					e.preventDefault(), I((e) => e > 0 ? e - 1 : W.length - 1);
					break;
				case "Enter":
					e.preventDefault(), F >= 0 && F < W.length && G(W[F]);
					break;
				case "Escape": k(!1);
			}
		}
	}, q = {
		sm: "py-1.5 text-xs",
		md: "py-2.5 text-sm",
		lg: "py-3 text-base"
	}[p], te = {
		sm: Q(v ? "pl-8" : "pl-3", "pr-14"),
		md: Q(v ? "pl-9" : "pl-3.5", "pr-16"),
		lg: Q(v ? "pl-11" : "pl-4", "pr-18")
	}[p], ne = /* @__PURE__ */ P("div", {
		ref: E,
		className: "relative w-full",
		children: [/* @__PURE__ */ P("div", {
			className: "relative flex items-center",
			children: [
				v && /* @__PURE__ */ N("div", {
					className: "absolute left-3 flex items-center pointer-events-none text-slate-400",
					children: /* @__PURE__ */ N("span", {
						className: "w-4 h-4",
						children: v
					})
				}),
				/* @__PURE__ */ N("input", {
					ref: w,
					id: T,
					type: "text",
					value: A,
					onChange: (e) => {
						M(e.target.value), k(!0), I(0);
					},
					onFocus: () => k(!0),
					onKeyDown: K,
					placeholder: r,
					disabled: f,
					className: Q("w-full transition-colors text-slate-800 placeholder-slate-400 rounded-lg focus:outline-none", q, te, o ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", f && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", S),
					autoComplete: "off",
					role: "combobox",
					"aria-expanded": O,
					"aria-autocomplete": "list"
				}),
				/* @__PURE__ */ P("div", {
					className: "absolute right-2.5 flex items-center gap-1",
					children: [
						g && /* @__PURE__ */ N(y, { className: "w-4 h-4 text-emerald-600 animate-spin" }),
						h && A && !f && /* @__PURE__ */ N("button", {
							type: "button",
							onClick: ee,
							className: "p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer",
							"aria-label": "Bersihkan input",
							children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => !f && k((e) => !e),
							className: "p-1 rounded-md text-slate-400 hover:text-slate-600 transition-transform duration-200 cursor-pointer",
							tabIndex: -1,
							"aria-label": "Toggle dropdown",
							children: /* @__PURE__ */ N(s, { className: Q("w-4 h-4 transition-transform duration-200", O && "rotate-180") })
						})
					]
				})
			]
		}), O && /* @__PURE__ */ N("div", {
			className: "absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto",
			children: W.length === 0 ? /* @__PURE__ */ N("div", {
				className: "px-4 py-3 text-xs text-slate-500 text-center select-none",
				children: _
			}) : /* @__PURE__ */ N("ul", {
				ref: D,
				role: "listbox",
				className: "p-1",
				children: W.map((e, n) => {
					let r = e.value === t;
					return /* @__PURE__ */ P("li", {
						role: "option",
						"aria-selected": r,
						onClick: () => G(e),
						onMouseEnter: () => I(n),
						className: Q("flex items-center justify-between px-3 py-2 text-xs md:text-sm rounded-lg cursor-pointer transition-colors select-none", n === F ? "bg-slate-100 text-slate-900" : "text-slate-700", r && "bg-emerald-50 text-emerald-900 font-medium", e.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"),
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
						}), r && /* @__PURE__ */ N(a, { className: "w-4 h-4 text-emerald-600 shrink-0 ml-2" })]
					}, e.value);
				})
			})
		})]
	});
	return i || o || c || l ? /* @__PURE__ */ N(pn, {
		htmlFor: T,
		label: i,
		error: o,
		helperText: c,
		hint: l,
		required: u,
		optional: d,
		disabled: f,
		size: p,
		layout: m,
		className: C,
		children: ne
	}) : ne;
});
gn.displayName = "Autocomplete";
//#endregion
//#region src/components/ui/field/select/Select.tsx
var _n = I(({ options: e, value: t, onChange: n, placeholder: r = "Pilih opsi...", label: i, error: o, helperText: c, hint: l, required: u, optional: d, disabled: f, size: p = "md", layout: m = "vertical", searchable: h = !1, searchPlaceholder: g = "Cari opsi...", clearable: _ = !1, emptyText: v = "Tidak ada opsi tersedia", className: y, wrapperClassName: b }, x) => {
	let S = z(), C = V(null), w = V(null), [T, D] = H(!1), [O, k] = H(""), A = B(() => e.map((e) => typeof e == "string" ? {
		label: e,
		value: e
	} : e), [e]), F = B(() => A.find((e) => e.value === t), [A, t]), I = B(() => {
		if (!h || !O.trim()) return A;
		let e = O.toLowerCase();
		return A.filter((t) => t.label.toLowerCase().includes(e) || t.description && t.description.toLowerCase().includes(e));
	}, [
		A,
		h,
		O
	]);
	R(() => {
		let e = (e) => {
			C.current && !C.current.contains(e.target) && (D(!1), k(""));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), R(() => {
		T && h && setTimeout(() => w.current?.focus(), 50);
	}, [T, h]);
	let L = (e) => {
		e.disabled || (n?.(e.value), D(!1), k(""));
	}, U = (e) => {
		e.stopPropagation(), n?.("");
	}, W = {
		sm: "py-1.5 px-3 text-xs",
		md: "py-2.5 px-3.5 text-sm",
		lg: "py-3 px-4 text-base"
	}[p], G = /* @__PURE__ */ P("div", {
		ref: C,
		className: "relative w-full",
		children: [/* @__PURE__ */ P("button", {
			ref: x,
			id: S,
			type: "button",
			onClick: () => !f && D((e) => !e),
			disabled: f,
			className: Q("w-full flex items-center justify-between text-left transition-colors rounded-lg focus:outline-none cursor-pointer", W, o ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", f && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", y),
			"aria-haspopup": "listbox",
			"aria-expanded": T,
			children: [/* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 truncate",
				children: F ? /* @__PURE__ */ P(M, { children: [F.icon && /* @__PURE__ */ N("span", {
					className: "shrink-0",
					children: F.icon
				}), /* @__PURE__ */ N("span", {
					className: "text-slate-800 font-medium truncate",
					children: F.label
				})] }) : /* @__PURE__ */ N("span", {
					className: "text-slate-400 select-none truncate",
					children: r
				})
			}), /* @__PURE__ */ P("div", {
				className: "flex items-center gap-1.5 ml-2 shrink-0",
				children: [_ && F && !f && /* @__PURE__ */ N("span", {
					role: "button",
					onClick: U,
					className: "p-0.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer",
					"aria-label": "Bersihkan pilihan",
					children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
				}), /* @__PURE__ */ N(s, { className: Q("w-4 h-4 text-slate-400 transition-transform duration-200", T && "rotate-180") })]
			})]
		}), T && /* @__PURE__ */ P("div", {
			className: "absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-h-64 flex flex-col",
			children: [h && /* @__PURE__ */ N("div", {
				className: "p-2 border-b border-slate-100",
				children: /* @__PURE__ */ P("div", {
					className: "relative flex items-center",
					children: [/* @__PURE__ */ N(E, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }), /* @__PURE__ */ N("input", {
						ref: w,
						type: "text",
						value: O,
						onChange: (e) => k(e.target.value),
						placeholder: g,
						className: "w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white"
					})]
				})
			}), /* @__PURE__ */ N("div", {
				className: "overflow-y-auto p-1 max-h-52",
				children: I.length === 0 ? /* @__PURE__ */ N("div", {
					className: "px-4 py-3 text-xs text-slate-500 text-center select-none",
					children: v
				}) : /* @__PURE__ */ N("ul", {
					role: "listbox",
					children: I.map((e) => {
						let n = e.value === t;
						return /* @__PURE__ */ P("li", {
							role: "option",
							"aria-selected": n,
							onClick: () => L(e),
							className: Q("flex items-center justify-between px-3 py-2 text-xs md:text-sm rounded-lg cursor-pointer transition-colors select-none", n ? "bg-emerald-50 text-emerald-900 font-medium" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900", e.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"),
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
							}), n && /* @__PURE__ */ N(a, { className: "w-4 h-4 text-emerald-600 shrink-0 ml-2" })]
						}, e.value);
					})
				})
			})]
		})]
	});
	return i || o || c || l ? /* @__PURE__ */ N(pn, {
		htmlFor: S,
		label: i,
		error: o,
		helperText: c,
		hint: l,
		required: u,
		optional: d,
		disabled: f,
		size: p,
		layout: m,
		className: b,
		children: G
	}) : G;
});
_n.displayName = "Select";
//#endregion
//#region src/components/ui/field/multi-select/MultiSelect.tsx
var vn = I(({ options: e, value: t = [], onChange: n, placeholder: r = "Pilih beberapa opsi...", label: i, error: o, helperText: c, hint: l, required: u, optional: d, disabled: f, size: p = "md", layout: m = "vertical", searchable: h = !0, searchPlaceholder: g = "Cari...", clearable: _ = !0, maxDisplayTags: v = 3, emptyText: y = "Tidak ada opsi tersedia", className: b, wrapperClassName: x }, S) => {
	let C = z(), w = V(null), T = V(null), [D, O] = H(!1), [k, A] = H(""), F = B(() => e.map((e) => typeof e == "string" ? {
		label: e,
		value: e
	} : e), [e]), I = B(() => F.filter((e) => t.includes(e.value)), [F, t]), L = B(() => {
		if (!h || !k.trim()) return F;
		let e = k.toLowerCase();
		return F.filter((t) => t.label.toLowerCase().includes(e) || t.description && t.description.toLowerCase().includes(e));
	}, [
		F,
		h,
		k
	]);
	R(() => {
		let e = (e) => {
			w.current && !w.current.contains(e.target) && (O(!1), A(""));
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), R(() => {
		D && h && setTimeout(() => T.current?.focus(), 50);
	}, [D, h]);
	let U = (e) => {
		let r = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
		n?.(r);
	}, W = (e, r) => {
		e.stopPropagation(), n?.(t.filter((e) => e !== r));
	}, G = (e) => {
		e.stopPropagation(), n?.([]);
	}, ee = () => {
		let e = F.filter((e) => !e.disabled).map((e) => e.value);
		n?.(e);
	}, K = {
		sm: "py-1.5 px-3 text-xs min-h-[34px]",
		md: "py-2 px-3 text-sm min-h-[42px]",
		lg: "py-2.5 px-4 text-base min-h-[48px]"
	}[p], q = /* @__PURE__ */ P("div", {
		ref: w,
		className: "relative w-full",
		children: [/* @__PURE__ */ P("button", {
			ref: S,
			id: C,
			type: "button",
			onClick: () => !f && O((e) => !e),
			disabled: f,
			className: Q("w-full flex items-center justify-between text-left transition-colors rounded-lg focus:outline-none cursor-pointer", K, o ? "bg-rose-50/20 border border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-900" : "bg-white hover:border-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 border border-slate-300", f && "opacity-60 bg-slate-50/80 cursor-not-allowed border-slate-200", b),
			"aria-haspopup": "listbox",
			"aria-expanded": D,
			children: [/* @__PURE__ */ N("div", {
				className: "flex flex-wrap items-center gap-1.5 overflow-hidden",
				children: I.length === 0 ? /* @__PURE__ */ N("span", {
					className: "text-slate-400 select-none",
					children: r
				}) : /* @__PURE__ */ P(M, { children: [I.slice(0, v).map((e) => /* @__PURE__ */ P("span", {
					className: "inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-md text-xs font-medium",
					children: [/* @__PURE__ */ N("span", { children: e.label }), !f && /* @__PURE__ */ N("span", {
						role: "button",
						onClick: (t) => W(t, e.value),
						className: "p-0.5 hover:bg-emerald-100 rounded text-emerald-600 hover:text-emerald-900 transition-colors",
						children: /* @__PURE__ */ N(j, { className: "w-3 h-3" })
					})]
				}, e.value)), I.length > v && /* @__PURE__ */ P("span", {
					className: "px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded-md text-[11px] font-semibold",
					children: [
						"+",
						I.length - v,
						" lainnya"
					]
				})] })
			}), /* @__PURE__ */ P("div", {
				className: "flex items-center gap-1.5 ml-2 shrink-0",
				children: [_ && I.length > 0 && !f && /* @__PURE__ */ N("span", {
					role: "button",
					onClick: G,
					className: "p-0.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer",
					"aria-label": "Bersihkan semua",
					children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
				}), /* @__PURE__ */ N(s, { className: Q("w-4 h-4 text-slate-400 transition-transform duration-200", D && "rotate-180") })]
			})]
		}), D && /* @__PURE__ */ P("div", {
			className: "absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 max-h-72 flex flex-col",
			children: [
				h && /* @__PURE__ */ N("div", {
					className: "p-2 border-b border-slate-100",
					children: /* @__PURE__ */ P("div", {
						className: "relative flex items-center",
						children: [/* @__PURE__ */ N(E, { className: "w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" }), /* @__PURE__ */ N("input", {
							ref: T,
							type: "text",
							value: k,
							onChange: (e) => A(e.target.value),
							placeholder: g,
							className: "w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white"
						})]
					})
				}),
				/* @__PURE__ */ P("div", {
					className: "flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-slate-100 text-[11px]",
					children: [/* @__PURE__ */ N("button", {
						type: "button",
						onClick: ee,
						className: "text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer",
						children: "Pilih Semua"
					}), /* @__PURE__ */ P("button", {
						type: "button",
						onClick: G,
						className: "text-slate-500 hover:text-slate-700 cursor-pointer",
						children: [
							"Hapus Semua (",
							t.length,
							")"
						]
					})]
				}),
				/* @__PURE__ */ N("div", {
					className: "overflow-y-auto p-1 max-h-52",
					children: L.length === 0 ? /* @__PURE__ */ N("div", {
						className: "px-4 py-3 text-xs text-slate-500 text-center select-none",
						children: y
					}) : /* @__PURE__ */ N("ul", {
						role: "listbox",
						children: L.map((e) => {
							let n = t.includes(e.value);
							return /* @__PURE__ */ P("li", {
								role: "option",
								"aria-selected": n,
								onClick: () => U(e.value),
								className: Q("flex items-center gap-2.5 px-3 py-2 text-xs md:text-sm rounded-lg cursor-pointer transition-colors select-none", n ? "bg-emerald-50/70 text-emerald-950 font-medium" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900", e.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"),
								children: [/* @__PURE__ */ N("div", {
									className: Q("w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0", n ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white"),
									children: n && /* @__PURE__ */ N(a, { className: "w-3 h-3 stroke-[3]" })
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
	return i || o || c || l ? /* @__PURE__ */ N(pn, {
		htmlFor: C,
		label: i,
		error: o,
		helperText: c,
		hint: l,
		required: u,
		optional: d,
		disabled: f,
		size: p,
		layout: m,
		className: x,
		children: q
	}) : q;
});
vn.displayName = "MultiSelect";
//#endregion
//#region src/components/ui/field/checkbox/Checkbox.tsx
var yn = I(({ id: e, checked: t = !1, indeterminate: n = !1, onChange: r, label: i, description: o, error: s, disabled: c = !1, size: l = "md", variant: u = "default", className: d, wrapperClassName: f, ...p }, m) => {
	let h = z(), g = e || h, _ = V(null);
	R(() => {
		let e = m && "current" in m && m.current ? m.current : _.current;
		e && (e.indeterminate = n);
	}, [n, m]);
	let v = {
		sm: "w-4 h-4 rounded",
		md: "w-5 h-5 rounded-md",
		lg: "w-6 h-6 rounded-lg"
	}[l], y = {
		sm: "w-3 h-3 stroke-[3]",
		md: "w-3.5 h-3.5 stroke-[2.5]",
		lg: "w-4 h-4 stroke-[2.5]"
	}[l];
	return /* @__PURE__ */ P("label", {
		htmlFor: g,
		className: Q("relative flex items-start gap-3 select-none transition-all cursor-pointer", u === "card" && Q("p-3.5 rounded-xl border bg-slate-50/60 hover:bg-slate-50 transition-colors", t ? "border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500/20" : "border-slate-200"), c && "opacity-60 cursor-not-allowed hover:bg-transparent", f),
		children: [/* @__PURE__ */ P("div", {
			className: "relative flex items-center pt-0.5",
			children: [/* @__PURE__ */ N("input", {
				ref: m || _,
				id: g,
				type: "checkbox",
				checked: t,
				onChange: (e) => r?.(e.target.checked),
				disabled: c,
				className: "sr-only peer",
				...p
			}), /* @__PURE__ */ N("div", {
				className: Q("flex items-center justify-center border transition-all duration-150 shadow-2xs peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500/40 peer-focus-visible:ring-offset-1", v, t || n ? "bg-emerald-600 border-emerald-600 text-white shadow-emerald-500/20" : "bg-white border-slate-300 hover:border-slate-400", !!s && "border-rose-400 bg-rose-50/50", c && "bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed", d),
				children: n ? /* @__PURE__ */ N(x, { className: y }) : t ? /* @__PURE__ */ N(a, { className: y }) : null
			})]
		}), (i || o) && /* @__PURE__ */ P("div", {
			className: "flex flex-col",
			children: [
				i && /* @__PURE__ */ N("span", {
					className: Q("font-medium text-slate-800 transition-colors leading-snug", l === "sm" ? "text-xs" : l === "lg" ? "text-base" : "text-sm", c && "text-slate-400"),
					children: i
				}),
				o && /* @__PURE__ */ N("span", {
					className: Q("text-slate-500 text-xs mt-0.5 leading-normal", c && "text-slate-400"),
					children: o
				}),
				s && /* @__PURE__ */ N("span", {
					className: "text-xs text-rose-500 font-medium mt-1",
					children: s
				})
			]
		})]
	});
});
yn.displayName = "Checkbox";
//#endregion
//#region src/components/ui/field/checkbox/CheckboxGroup.tsx
var bn = I(({ options: e, value: t = [], onChange: n, name: r, label: i, error: a, helperText: o, hint: s, required: c, optional: l, orientation: u = "vertical", size: d = "md", variant: f = "default", disabled: p = !1, className: m, ...h }, g) => {
	let _ = (e, r) => {
		r ? n?.([...t, e]) : n?.(t.filter((t) => t !== e));
	}, v = /* @__PURE__ */ N("div", {
		ref: g,
		role: "group",
		className: Q(u === "horizontal" ? "flex flex-wrap items-center gap-4" : "flex flex-col space-y-2.5", m),
		...h,
		children: e.map((e) => /* @__PURE__ */ N(yn, {
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
	return i || a || o || s ? /* @__PURE__ */ N(pn, {
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
bn.displayName = "CheckboxGroup";
//#endregion
//#region src/components/ui/field/radio/Radio.tsx
var xn = I(({ id: e, value: t, checked: n = !1, onChange: r, label: i, description: a, disabled: o = !1, size: s = "md", variant: c = "default", className: l, wrapperClassName: u, ...d }, f) => {
	let p = z(), m = e || p, h = {
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6"
	}[s], g = {
		sm: "w-1.5 h-1.5",
		md: "w-2 h-2",
		lg: "w-2.5 h-2.5"
	}[s];
	return /* @__PURE__ */ P("label", {
		htmlFor: m,
		className: Q("relative flex items-start gap-3 select-none transition-all cursor-pointer", c === "card" && Q("p-3.5 rounded-xl border bg-slate-50/60 hover:bg-slate-50 transition-colors", n ? "border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500/20" : "border-slate-200"), o && "opacity-60 cursor-not-allowed hover:bg-transparent", u),
		children: [/* @__PURE__ */ P("div", {
			className: "relative flex items-center pt-0.5",
			children: [/* @__PURE__ */ N("input", {
				ref: f,
				id: m,
				type: "radio",
				value: t,
				checked: n,
				onChange: () => r?.(t),
				disabled: o,
				className: "sr-only peer",
				...d
			}), /* @__PURE__ */ N("div", {
				className: Q("rounded-full border flex items-center justify-center transition-all duration-150 shadow-2xs peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500/40 peer-focus-visible:ring-offset-1", h, n ? "bg-emerald-600 border-emerald-600" : "bg-white border-slate-300 hover:border-slate-400", o && "bg-slate-100 border-slate-300 cursor-not-allowed", l),
				children: n && /* @__PURE__ */ N("div", { className: Q("rounded-full bg-white", g) })
			})]
		}), (i || a) && /* @__PURE__ */ P("div", {
			className: "flex flex-col",
			children: [i && /* @__PURE__ */ N("span", {
				className: Q("font-medium text-slate-800 transition-colors leading-snug", s === "sm" ? "text-xs" : s === "lg" ? "text-base" : "text-sm", o && "text-slate-400"),
				children: i
			}), a && /* @__PURE__ */ N("span", {
				className: Q("text-slate-500 text-xs mt-0.5 leading-normal", o && "text-slate-400"),
				children: a
			})]
		})]
	});
});
xn.displayName = "Radio";
//#endregion
//#region src/components/ui/field/radio/RadioGroup.tsx
var Sn = I(({ options: e, value: t, onChange: n, name: r, label: i, error: a, helperText: o, hint: s, required: c, optional: l, orientation: u = "vertical", variant: d = "default", size: f = "md", disabled: p = !1, className: m, ...h }, g) => {
	let _ = /* @__PURE__ */ N("div", {
		ref: g,
		role: "radiogroup",
		className: Q(u === "horizontal" ? "flex flex-wrap items-center gap-4" : "flex flex-col space-y-2.5", m),
		...h,
		children: e.map((e) => /* @__PURE__ */ N(xn, {
			name: r,
			value: e.value,
			checked: t === e.value,
			onChange: () => n?.(e.value),
			label: e.label,
			description: e.description,
			disabled: p || e.disabled,
			size: f,
			variant: d
		}, e.value))
	});
	return i || a || o || s ? /* @__PURE__ */ N(pn, {
		label: i,
		error: a,
		helperText: o,
		hint: s,
		required: c,
		optional: l,
		disabled: p,
		size: f,
		children: _
	}) : _;
});
Sn.displayName = "RadioGroup";
//#endregion
//#region src/components/ui/field/switch/Switch.tsx
var Cn = I(({ checked: e = !1, onChange: t, label: n, description: r, disabled: i = !1, size: a = "md", checkedIcon: o, uncheckedIcon: s, className: c, wrapperClassName: l }, u) => {
	let d = z(), f = {
		sm: "w-8 h-4.5 p-0.5",
		md: "w-11 h-6 p-0.5",
		lg: "w-14 h-7.5 p-1"
	}[a], p = {
		sm: "w-3.5 h-3.5",
		md: "w-5 h-5",
		lg: "w-5.5 h-5.5"
	}[a], m = {
		sm: e ? "translate-x-3.5" : "translate-x-0",
		md: e ? "translate-x-5" : "translate-x-0",
		lg: e ? "translate-x-6.5" : "translate-x-0"
	}[a];
	return /* @__PURE__ */ P("div", {
		className: Q("flex items-start gap-3 select-none", i && "opacity-60 cursor-not-allowed", l),
		children: [/* @__PURE__ */ N("button", {
			ref: u,
			id: d,
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: i,
			onClick: () => !i && t?.(!e),
			className: Q("relative inline-flex shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-1 cursor-pointer", f, e ? "bg-emerald-600" : "bg-slate-300 hover:bg-slate-400/80", i && "cursor-not-allowed hover:bg-slate-300", c),
			children: /* @__PURE__ */ N("span", {
				className: Q("pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out", p, m),
				children: e ? o : s
			})
		}), (n || r) && /* @__PURE__ */ P("label", {
			htmlFor: d,
			className: "flex flex-col cursor-pointer",
			children: [n && /* @__PURE__ */ N("span", {
				className: Q("font-medium text-slate-800 transition-colors leading-snug", a === "sm" ? "text-xs" : a === "lg" ? "text-base" : "text-sm", i && "text-slate-400"),
				children: n
			}), r && /* @__PURE__ */ N("span", {
				className: Q("text-slate-500 text-xs mt-0.5 leading-normal", i && "text-slate-400"),
				children: r
			})]
		})]
	});
});
Cn.displayName = "Switch";
//#endregion
//#region src/components/ui/tabs/index.tsx
var wn = {
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
}, Tn = (e, t) => {
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
function En({ items: e = [], value: t, defaultValue: n, onChange: r, variant: i = "default", size: a = "md", theme: o = "light", className: s = "", tabListClassName: c = "", contentClassName: l = "", fullWidth: u = !1, extra: d, children: f }) {
	let p = o === "dark", m = n || e[0]?.id || "", [h, g] = H(m), _ = t === void 0 ? h : t, v = (e) => {
		e.disabled || (t === void 0 && g(e.id), r?.(e.id));
	}, y = e.find((e) => e.id === _), b = (e, t) => {
		let n = wn[a], r = Q("inline-flex items-center justify-center font-medium transition-all select-none", n.button, u ? "flex-1" : "", e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer");
		if (p) switch (i) {
			case "underline": return Q(r, "rounded-none border-b-2 -mb-px pb-2", t ? "border-emerald-400 text-white font-semibold" : "border-transparent text-slate-400 hover:text-white hover:border-slate-700");
			default: return Q(r, "rounded-md", t ? "bg-slate-700 text-white shadow-2xs font-semibold" : "text-slate-400 hover:text-white hover:bg-slate-800/50");
		}
		switch (i) {
			case "underline": return Q(r, "rounded-none border-b-2 -mb-px pb-2", t ? "border-emerald-600 text-emerald-800 font-semibold" : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300");
			default: return Q(r, "rounded-lg", t ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50");
		}
	};
	return /* @__PURE__ */ P("div", {
		className: Q("w-full flex flex-col", s),
		children: [/* @__PURE__ */ P("div", {
			className: "flex flex-wrap items-center justify-between gap-2.5",
			children: [/* @__PURE__ */ N("div", {
				role: "tablist",
				className: Q("inline-flex flex-wrap items-center", Tn(i, p), u ? "w-full" : "", c),
				children: e.map((e) => {
					let t = e.id === _;
					return /* @__PURE__ */ P("button", {
						role: "tab",
						type: "button",
						"aria-selected": t,
						disabled: e.disabled,
						onClick: () => v(e),
						className: b(e, t),
						children: [
							e.icon && /* @__PURE__ */ N("span", {
								className: "shrink-0",
								children: e.icon
							}),
							/* @__PURE__ */ N("span", { children: e.label }),
							e.badge !== void 0 && /* @__PURE__ */ N(Nt, {
								variant: e.badgeVariant || (t ? "success" : "default"),
								size: "xs",
								className: "ml-1",
								children: e.badge
							})
						]
					}, e.id);
				})
			}), d && /* @__PURE__ */ N("div", {
				className: "shrink-0",
				children: d
			})]
		}), (y?.content || f) && /* @__PURE__ */ N("div", {
			role: "tabpanel",
			className: Q("mt-3 w-full", l),
			children: y?.content || f
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/CodeEditorToolbar.tsx
function Dn({ theme: e = "dark", title: t, language: n = "json", isValidJson: r = !0, layout: i = "auto", tabs: a, activeTab: o, onChangeTab: s, tabsVariant: c, tabsPosition: l = "left", tabsActions: u, statusPosition: d = "left", statusBadge: f, actionsPosition: p = "right", viewMode: m = "code", onViewModeChange: h, showViewToggle: g = !0, isTreeSupported: _ = !1, showFormatButton: v = !0, onFormat: y, readOnly: b = !1, showCopyButton: x = !0, copied: S = !1, onCopy: C, showFullScreenButton: w = !1, onFullScreen: T, extraActions: E, topRowLeft: D, topRowRight: O, bottomRowLeft: k, bottomRowRight: A, leftContent: j, centerContent: F, rightContent: I, className: L = "", children: R }) {
	let z = e === "dark", B = !!(a && a.length > 0), V = !!(g && n === "json" || !b && v && n === "json" || x || w || E);
	if (R) return /* @__PURE__ */ N("div", {
		className: Q("w-full flex flex-col border-b select-none transition-colors shrink-0", z ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100/95 border-slate-200 text-slate-800", L),
		children: R
	});
	let H = i === "stacked" || i === "auto" && B && V, U = B ? /* @__PURE__ */ N(An, {
		tabs: a,
		activeTab: o,
		onChangeTab: s,
		tabsVariant: c,
		theme: e
	}) : null, W = d === "hidden" ? null : /* @__PURE__ */ N(jn, {
		title: t,
		language: n,
		isValidJson: r,
		statusBadge: f
	}), G = /* @__PURE__ */ N(Nn, {
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
		extraActions: E
	});
	return H ? /* @__PURE__ */ P("div", {
		className: Q("w-full flex flex-col shrink-0 select-none transition-colors", L),
		children: [/* @__PURE__ */ P("div", {
			className: Q("w-full flex items-center justify-between gap-2 px-3 py-1.5 border-b transition-colors", z ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800"),
			children: [D || /* @__PURE__ */ P("div", {
				className: Q("flex items-center gap-2 min-w-0 overflow-x-auto no-scrollbar scroll-smooth py-0.5", l === "center" && "mx-auto justify-center", l === "right" && "ml-auto justify-end"),
				children: [l === "left" && U, l === "center" && U]
			}), O || /* @__PURE__ */ P("div", {
				className: "flex items-center gap-2 shrink-0 ml-auto",
				children: [l === "right" && U, u]
			})]
		}), V && /* @__PURE__ */ P("div", {
			className: Q("w-full flex items-center justify-between gap-2 px-3 py-1 border-b transition-colors text-xs", z ? "bg-slate-950/80 border-slate-800/80 text-slate-300" : "bg-slate-50/90 border-slate-200/80 text-slate-700"),
			children: [k || (p === "left" ? /* @__PURE__ */ N("div", {
				className: "flex items-center gap-1.5 shrink-0",
				children: G
			}) : /* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 min-w-0 shrink-0",
				children: d === "left" && W
			})), A || (p === "right" ? /* @__PURE__ */ N("div", {
				className: "flex items-center gap-1.5 shrink-0 ml-auto",
				children: G
			}) : /* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 min-w-0 shrink-0 ml-auto",
				children: d === "right" && W
			}))]
		})]
	}) : /* @__PURE__ */ P("div", {
		className: Q("w-full flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 px-3 py-2 border-b select-none transition-colors shrink-0", z ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100/95 border-slate-200 text-slate-800", L),
		children: [
			/* @__PURE__ */ N("div", {
				className: "flex items-center gap-2 min-w-0 flex-shrink-0",
				children: j || (B ? /* @__PURE__ */ P("div", {
					className: "flex items-center gap-2 flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar",
					children: [l === "left" && U, l === "left" && d === "left" && W]
				}) : d === "left" && W)
			}),
			F && /* @__PURE__ */ N("div", {
				className: "flex items-center justify-center flex-1 min-w-0",
				children: F
			}),
			/* @__PURE__ */ N("div", {
				className: "flex items-center gap-1.5 flex-wrap sm:flex-nowrap justify-end ml-auto shrink-0",
				children: I || /* @__PURE__ */ P(M, { children: [
					l === "right" && U,
					d === "right" && W,
					u,
					V && G
				] })
			})
		]
	});
}
function On({ children: e, className: t = "", theme: n = "dark", density: r = "normal" }) {
	return /* @__PURE__ */ N("div", {
		className: Q("w-full flex items-center justify-between gap-2 px-3 border-b transition-colors shrink-0", r === "compact" ? "py-1 text-xs" : "py-1.5", n === "dark" ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-800", t),
		children: e
	});
}
function kn({ children: e, className: t = "", align: n = "left" }) {
	return /* @__PURE__ */ N("div", {
		className: Q("flex items-center gap-1.5 shrink-0", n === "right" && "ml-auto justify-end", n === "center" && "mx-auto justify-center", t),
		children: e
	});
}
function An({ tabs: e, activeTab: t, onChangeTab: n, tabsVariant: r = "pills", theme: i = "dark", className: a = "" }) {
	return !e || e.length === 0 ? null : /* @__PURE__ */ N("div", {
		className: Q("flex items-center overflow-x-auto no-scrollbar shrink-0", a),
		children: /* @__PURE__ */ N(En, {
			items: e,
			value: t,
			onChange: n,
			variant: r,
			size: "sm",
			theme: i
		})
	});
}
function jn({ title: e, language: t = "json", isValidJson: n = !0, statusBadge: r, className: i = "" }) {
	return /* @__PURE__ */ P("div", {
		className: Q("flex items-center gap-2 min-w-0 shrink-0 font-mono text-xs", i),
		children: [e ? /* @__PURE__ */ N("span", {
			className: "text-xs font-semibold truncate max-w-[140px] sm:max-w-xs",
			children: e
		}) : /* @__PURE__ */ N("span", {
			className: "text-xs font-bold uppercase tracking-wider opacity-80",
			children: t
		}), r || (t === "json" && n !== void 0 ? /* @__PURE__ */ N(Nt, {
			variant: n ? "success" : "danger",
			size: "xs",
			className: "font-mono text-[10px] shrink-0",
			children: n ? "Valid JSON" : "Syntax Error"
		}) : null)]
	});
}
function Mn({ viewMode: e = "code", onViewModeChange: t, isTreeSupported: n = !1, theme: r = "dark", className: i = "" }) {
	let a = r === "dark";
	return /* @__PURE__ */ P("div", {
		className: Q("flex items-center p-0.5 rounded-lg text-xs font-medium border transition-colors shrink-0", a ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-200/80 border-slate-300/80", i),
		children: [/* @__PURE__ */ P("button", {
			type: "button",
			onClick: () => t?.("code"),
			className: Q("flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-colors cursor-pointer text-xs", e === "code" ? a ? "bg-slate-700 text-white shadow-2xs font-semibold" : "bg-white text-slate-900 shadow-2xs font-semibold" : a ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
			title: "Raw code view",
			children: [/* @__PURE__ */ N(l, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
				className: "hidden xs:inline sm:inline",
				children: "Code"
			})]
		}), /* @__PURE__ */ P("button", {
			type: "button",
			disabled: !n,
			onClick: () => n && t?.("tree"),
			className: Q("flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-colors text-xs", n ? e === "tree" ? a ? "bg-slate-700 text-white shadow-2xs font-semibold cursor-pointer" : "bg-white text-emerald-800 shadow-2xs font-semibold cursor-pointer" : a ? "text-slate-400 hover:text-white cursor-pointer" : "text-slate-600 hover:text-slate-900 cursor-pointer" : "opacity-40 cursor-not-allowed text-slate-400"),
			title: n ? "Interactive tree view" : "Tree view is only available for valid JSON",
			children: [/* @__PURE__ */ N(h, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
				className: "hidden xs:inline sm:inline",
				children: "Tree"
			})]
		})]
	});
}
function Nn({ theme: e = "dark", language: t = "json", isValidJson: n = !0, viewMode: r = "code", onViewModeChange: i, showViewToggle: o = !0, isTreeSupported: s = !1, showFormatButton: c = !0, onFormat: l, readOnly: u = !1, showCopyButton: f = !0, copied: p = !1, onCopy: m, showFullScreenButton: h = !1, onFullScreen: g, extraActions: _, className: v = "" }) {
	let y = Pn(e === "dark");
	return /* @__PURE__ */ P("div", {
		className: Q("flex items-center gap-1.5 shrink-0", v),
		children: [
			o && t === "json" && /* @__PURE__ */ N(Mn, {
				viewMode: r,
				onViewModeChange: i,
				isTreeSupported: s,
				theme: e
			}),
			!u && c && t === "json" && /* @__PURE__ */ N(Dt, {
				type: "button",
				variant: "outline",
				size: "xs",
				disabled: !n,
				onClick: l,
				leftIcon: /* @__PURE__ */ N(A, { className: "w-3 h-3 text-emerald-500" }),
				className: Q(y, "shrink-0"),
				title: "Format JSON (Prettify)",
				children: /* @__PURE__ */ N("span", {
					className: "hidden sm:inline",
					children: "Format"
				})
			}),
			f && /* @__PURE__ */ N(Dt, {
				type: "button",
				variant: "outline",
				size: "xs",
				onClick: m,
				leftIcon: p ? /* @__PURE__ */ N(a, { className: "w-3 h-3 text-emerald-500" }) : /* @__PURE__ */ N(d, { className: "w-3 h-3" }),
				className: Q(y, "shrink-0"),
				title: "Copy code to clipboard",
				children: /* @__PURE__ */ N("span", {
					className: "hidden sm:inline",
					children: p ? "Copied" : "Copy"
				})
			}),
			h && /* @__PURE__ */ N(Dt, {
				type: "button",
				variant: "outline",
				size: "xs",
				onClick: g,
				leftIcon: /* @__PURE__ */ N(b, { className: "w-3 h-3 text-emerald-500" }),
				className: Q(y, "shrink-0"),
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
Dn.Row = On, Dn.Group = kn, Dn.Tabs = An, Dn.Status = jn, Dn.ViewToggle = Mn, Dn.Actions = Nn;
function Pn(e) {
	return e ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50";
}
//#endregion
//#region src/components/ui/code-editor/CodeGutter.tsx
function Fn({ gutterRef: e, lineNumbers: t, theme: n = "dark", className: r = "" }) {
	return /* @__PURE__ */ N("div", {
		ref: e,
		"aria-hidden": "true",
		className: Q("w-12 py-3 border-r text-right pr-2 font-mono text-xs select-none overflow-hidden shrink-0 leading-relaxed transition-colors", n === "dark" ? "bg-slate-950 border-slate-800 text-slate-600" : "bg-slate-100 border-slate-200 text-slate-400", r),
		children: t.map((e) => /* @__PURE__ */ N("div", {
			className: "h-5",
			children: e
		}, e))
	});
}
//#endregion
//#region src/components/ui/code-editor/JsonTreeViewer.tsx
function In(e) {
	return e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "object" ? "object" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "string";
}
function Ln(e, t) {
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
function Rn({ data: e, onChange: t, readOnly: n = !1, theme: r = "light", searchTerm: i = "", className: o = "", showToolbar: l = !0, showSearch: u = !0, defaultExpandLevel: f = 2 }) {
	let p = r === "dark", [m, h] = H(() => {
		let t = /* @__PURE__ */ new Set(), n = (e, r, i) => {
			e && typeof e == "object" && (i >= f && r && t.add(r), Array.isArray(e) ? e.forEach((e, t) => n(e, r ? `${r}.${t}` : String(t), i + 1)) : Object.entries(e).forEach(([e, t]) => n(t, r ? `${r}.${e}` : e, i + 1)));
		};
		return n(e, "", 0), t;
	}), [g, _] = H(""), v = i || g, [y, b] = H(null), [x, S] = H("string"), [w, D] = H(""), [k, A] = H(null), [F, I] = H(""), [L, R] = H(null), [z, B] = H(""), [V, U] = H("string"), [W, G] = H(""), [ee, K] = H(null), q = (e) => {
		K(e), setTimeout(() => K(null), 1500);
	}, te = (e, t) => {
		if (!v.trim()) return !0;
		let n = v.toLowerCase().trim();
		return !!(e.toLowerCase().includes(n) || typeof t == "string" && t.toLowerCase().includes(n) || typeof t == "number" && String(t).includes(n) || typeof t == "boolean" && String(t).includes(n));
	}, ne = (e) => {
		h((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, re = () => {
		h(/* @__PURE__ */ new Set());
	}, ie = () => {
		let t = /* @__PURE__ */ new Set(), n = (e, r) => {
			e && typeof e == "object" && (r && t.add(r), Array.isArray(e) ? e.forEach((e, t) => n(e, r ? `${r}.${t}` : String(t))) : Object.entries(e).forEach(([e, t]) => n(t, r ? `${r}.${e}` : e)));
		};
		n(e, ""), h(t);
	}, ae = (t) => {
		let n = /* @__PURE__ */ new Set(), r = (e, i, a) => {
			e && typeof e == "object" && (a >= t && i && n.add(i), Array.isArray(e) ? e.forEach((e, t) => r(e, i ? `${i}.${t}` : String(t), a + 1)) : Object.entries(e).forEach(([e, t]) => r(t, i ? `${i}.${e}` : e, a + 1)));
		};
		r(e, "", 0), h(n);
	}, oe = (r, i) => {
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
	}, se = (e) => {
		let t = Ln(w, x);
		oe(e, (e, n) => {
			e[n] = t;
		}), b(null);
	}, ce = (e, t) => {
		oe(e, (e, n) => {
			e[n] = !t;
		});
	}, le = (e) => {
		let t = F.trim();
		t && oe(e, (e, n) => {
			if (Array.isArray(e) || n === t) return;
			let r = {};
			for (let [i, a] of Object.entries(e)) i === n ? r[t] = a : r[i] = a;
			for (let t of Object.keys(e)) delete e[t];
			Object.assign(e, r);
		}), A(null);
	}, ue = (e) => {
		oe(e, (e, t) => {
			Array.isArray(e) && typeof t == "number" ? e.splice(t, 1) : delete e[t];
		});
	}, de = (e) => {
		oe(e, (e, t) => {
			if (Array.isArray(e) && typeof t == "number") {
				let n = structuredClone(e[t]);
				e.splice(t + 1, 0, n);
			} else {
				let n = structuredClone(e[t]), r = `${String(t)}_copy`, i = 1;
				for (; r in e;) r = `${String(t)}_copy_${i++}`;
				e[r] = n;
			}
		});
	}, fe = (e) => {
		oe(e, (t, n) => {
			let r = e.length === 0 ? t : t[n], i = Ln(W, V);
			if (Array.isArray(r)) r.push(i);
			else if (typeof r == "object" && r) {
				let e = z.trim() || `key_${Object.keys(r).length + 1}`;
				r[e] = i;
			}
		}), R(null), B(""), G(""), U("string");
	}, pe = async (e, t) => {
		try {
			await navigator.clipboard.writeText(e), q(t);
		} catch {}
	}, me = (e, t, r, i) => {
		let o = r.join("."), l = In(t), u = l === "object", f = l === "array", g = u || f, _ = m.has(o), v = te(String(e), t), E = y === o, H = k === o, ee = L === o, K = 0;
		return u && t !== null ? K = Object.keys(t).length : f && (K = t.length), /* @__PURE__ */ P("div", {
			className: Q("font-mono text-xs transition-colors rounded-sm", !v && !g ? "opacity-30" : "", i > 0 ? p ? "ml-4 border-l border-slate-800/90 pl-2 my-0.5" : "ml-4 border-l border-slate-200/80 pl-2 my-0.5" : "my-0.5"),
			children: [
				/* @__PURE__ */ P("div", {
					className: Q("flex items-center gap-1.5 py-0.5 group px-1 rounded transition-colors", p ? "hover:bg-slate-800/60" : "hover:bg-slate-50/80"),
					children: [
						g ? /* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => ne(o),
							className: Q("w-4 h-4 flex items-center justify-center cursor-pointer shrink-0 transition-colors", p ? "text-slate-500 hover:text-slate-200" : "text-slate-400 hover:text-slate-700"),
							children: N(_ ? c : s, { className: "w-3.5 h-3.5" })
						}) : /* @__PURE__ */ N("span", { className: "w-4 shrink-0" }),
						e !== "" && /* @__PURE__ */ N(M, { children: H && !n ? /* @__PURE__ */ P("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ N("input", {
									type: "text",
									value: F,
									onChange: (e) => I(e.target.value),
									className: Q("px-1.5 py-0.5 text-xs rounded font-mono focus:outline-none", p ? "bg-slate-800 border border-emerald-500 text-white" : "bg-white border border-emerald-500 text-slate-900"),
									autoFocus: !0,
									onKeyDown: (e) => {
										e.key === "Enter" && le(r), e.key === "Escape" && A(null);
									}
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => le(r),
									className: "p-0.5 text-emerald-500 hover:text-emerald-400 cursor-pointer",
									children: /* @__PURE__ */ N(a, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => A(null),
									className: "p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer",
									children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
								})
							]
						}) : /* @__PURE__ */ P("span", {
							className: Q("font-medium select-none cursor-pointer hover:underline", typeof e == "number" ? p ? "text-amber-400" : "text-amber-700" : p ? "text-sky-300" : "text-slate-900"),
							title: n ? void 0 : "Double-click to edit property name",
							onDoubleClick: (t) => {
								!n && typeof e == "string" && (t.stopPropagation(), A(o), I(e));
							},
							children: [typeof e == "number" ? `[${e}]` : `"${e}"`, ":"]
						}) }),
						E && !n ? /* @__PURE__ */ P("div", {
							className: "flex items-center gap-1 flex-wrap",
							children: [
								/* @__PURE__ */ P("select", {
									value: x,
									onChange: (e) => S(e.target.value),
									className: Q("text-[11px] rounded px-1 py-0.5 focus:outline-none cursor-pointer", p ? "bg-slate-800 border border-slate-700 text-slate-200" : "bg-slate-100 border border-slate-300 text-slate-700"),
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
									value: w,
									onChange: (e) => D(e.target.value),
									className: Q("text-xs rounded px-1.5 py-0.5 focus:outline-none", p ? "bg-slate-800 border border-slate-700 text-white" : "bg-white border border-slate-300 text-slate-800"),
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
									value: w,
									onChange: (e) => D(e.target.value),
									className: Q("px-1.5 py-0.5 text-xs rounded font-mono focus:outline-none min-w-[120px]", p ? "bg-slate-800 border border-emerald-500 text-white" : "bg-white border border-emerald-500 text-slate-900"),
									autoFocus: !0,
									onKeyDown: (e) => {
										e.key === "Enter" && se(r), e.key === "Escape" && b(null);
									}
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => se(r),
									className: "p-0.5 text-emerald-500 hover:text-emerald-400 cursor-pointer",
									children: /* @__PURE__ */ N(a, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => b(null),
									className: "p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer",
									children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
								})
							]
						}) : /* @__PURE__ */ P("div", {
							className: "flex items-center gap-1.5 min-w-0",
							children: [
								l === "string" && /* @__PURE__ */ P("span", {
									className: Q("break-all cursor-pointer px-1 rounded transition-colors", p ? "text-emerald-400 hover:bg-emerald-950/40" : "text-emerald-700 hover:bg-emerald-50/70"),
									title: n ? void 0 : "Double-click to edit text",
									onDoubleClick: () => {
										n || (b(o), S("string"), D(String(t)));
									},
									children: [
										"\"",
										String(t),
										"\""
									]
								}),
								l === "number" && /* @__PURE__ */ N("span", {
									className: Q("font-semibold cursor-pointer px-1 rounded transition-colors", p ? "text-cyan-400 hover:bg-cyan-950/40" : "text-blue-700 hover:bg-blue-50/70"),
									title: n ? void 0 : "Double-click to edit number",
									onDoubleClick: () => {
										n || (b(o), S("number"), D(String(t)));
									},
									children: Number(t)
								}),
								l === "boolean" && /* @__PURE__ */ N("button", {
									type: "button",
									disabled: n,
									onClick: () => !n && ce(r, !!t),
									className: Q("font-bold px-1.5 py-0.2 rounded text-[11px] transition-colors", t ? p ? "bg-emerald-950 text-emerald-400 border border-emerald-800/80" : "bg-emerald-100 text-emerald-800" : p ? "bg-rose-950 text-rose-400 border border-rose-800/80" : "bg-rose-100 text-rose-800", n ? "cursor-default" : "cursor-pointer hover:opacity-80"),
									title: n ? void 0 : "Click to toggle boolean value",
									children: String(t)
								}),
								l === "null" && /* @__PURE__ */ N("span", {
									className: Q("italic cursor-pointer px-1 rounded", p ? "text-slate-500 hover:bg-slate-800" : "text-slate-400 hover:bg-slate-100"),
									title: n ? void 0 : "Double-click to edit null",
									onDoubleClick: () => {
										n || (b(o), S("null"), D(""));
									},
									children: "null"
								}),
								g && /* @__PURE__ */ N("span", {
									className: Q("text-[11px]", p ? "text-slate-500" : "text-slate-400"),
									children: f ? `Array(${K})` : `Object{${K}}`
								}),
								/* @__PURE__ */ N(Nt, {
									variant: "default",
									size: "xs",
									className: Q("opacity-0 group-hover:opacity-100 transition-opacity", p ? "bg-slate-800 text-slate-400 border-slate-700" : ""),
									children: l
								})
							]
						}),
						/* @__PURE__ */ P("div", {
							className: "ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity shrink-0",
							children: [
								/* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => pe(JSON.stringify(t), "Value copied!"),
									className: Q("p-1 rounded cursor-pointer transition-colors", p ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"),
									title: "Copy value to clipboard",
									children: /* @__PURE__ */ N(d, { className: "w-3 h-3" })
								}),
								!n && g && /* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => {
										R(o), h((e) => {
											let t = new Set(e);
											return t.delete(o), t;
										});
									},
									className: Q("p-1 rounded cursor-pointer transition-colors", p ? "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/50" : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"),
									title: "Add new property",
									children: /* @__PURE__ */ N(C, { className: "w-3 h-3" })
								}),
								!n && i > 0 && /* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => de(r),
									className: Q("p-1 rounded cursor-pointer transition-colors", p ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"),
									title: "Duplicate this item",
									children: /* @__PURE__ */ N(T, { className: "w-3 h-3" })
								}),
								!n && i > 0 && /* @__PURE__ */ N("button", {
									type: "button",
									onClick: () => ue(r),
									className: Q("p-1 rounded cursor-pointer transition-colors", p ? "text-rose-400 hover:text-rose-300 hover:bg-rose-950/50" : "text-rose-500 hover:text-rose-700 hover:bg-rose-50"),
									title: "Delete this property",
									children: /* @__PURE__ */ N(O, { className: "w-3 h-3" })
								})
							]
						})
					]
				}),
				ee && !n && /* @__PURE__ */ P("div", {
					className: Q("ml-6 my-1 p-2 rounded-lg flex flex-wrap items-center gap-2 animate-in fade-in duration-100 border", p ? "bg-slate-900 border-slate-700" : "bg-emerald-50/70 border-emerald-200"),
					children: [
						!f && /* @__PURE__ */ N("input", {
							type: "text",
							placeholder: "Property name...",
							value: z,
							onChange: (e) => B(e.target.value),
							className: Q("px-2 py-1 text-xs rounded font-mono focus:outline-none w-32", p ? "bg-slate-800 border border-slate-700 text-white focus:border-emerald-500" : "bg-white border border-slate-300 text-slate-800 focus:border-emerald-500"),
							autoFocus: !0
						}),
						/* @__PURE__ */ P("select", {
							value: V,
							onChange: (e) => U(e.target.value),
							className: Q("text-xs rounded px-2 py-1 focus:outline-none cursor-pointer", p ? "bg-slate-800 border border-slate-700 text-slate-200" : "bg-white border border-slate-300 text-slate-800"),
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
						V === "boolean" ? /* @__PURE__ */ P("select", {
							value: W,
							onChange: (e) => G(e.target.value),
							className: Q("text-xs rounded px-2 py-1 focus:outline-none", p ? "bg-slate-800 border border-slate-700 text-white" : "bg-white border border-slate-300 text-slate-800"),
							children: [/* @__PURE__ */ N("option", {
								value: "true",
								children: "true"
							}), /* @__PURE__ */ N("option", {
								value: "false",
								children: "false"
							})]
						}) : V === "null" ? /* @__PURE__ */ N("span", {
							className: "text-xs text-slate-400 italic",
							children: "null"
						}) : /* @__PURE__ */ N("input", {
							type: "text",
							placeholder: "Value...",
							value: W,
							onChange: (e) => G(e.target.value),
							className: Q("px-2 py-1 text-xs rounded font-mono focus:outline-none flex-1 min-w-[120px]", p ? "bg-slate-800 border border-slate-700 text-white focus:border-emerald-500" : "bg-white border border-slate-300 text-slate-800 focus:border-emerald-500")
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => fe(r),
							className: "px-2.5 py-1 text-xs bg-emerald-600 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer shadow-2xs",
							children: "Add"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => R(null),
							className: Q("px-2 py-1 text-xs cursor-pointer", p ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
							children: "Cancel"
						})
					]
				}),
				g && !_ && /* @__PURE__ */ P("div", { children: [f && t.map((e, t) => me(t, e, [...r, t], i + 1)), u && t !== null && Object.entries(t).map(([e, t]) => me(e, t, [...r, e], i + 1))] })
			]
		}, o || "root");
	};
	return /* @__PURE__ */ P("div", {
		className: Q("flex flex-col w-full rounded-xl select-text relative transition-colors", p ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800", o),
		children: [
			ee && /* @__PURE__ */ P("div", {
				className: "absolute top-2 right-2 z-20 bg-slate-900 text-white text-xs px-3 py-1 rounded-lg shadow-md animate-in fade-in duration-100 flex items-center gap-1.5 border border-slate-700",
				children: [/* @__PURE__ */ N(a, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ N("span", { children: ee })]
			}),
			l && /* @__PURE__ */ P("div", {
				className: Q("flex flex-wrap items-center justify-between gap-2 p-2 border-b text-xs select-none", p ? "bg-slate-900/90 border-slate-800" : "bg-slate-50/80 border-slate-200"),
				children: [/* @__PURE__ */ P("div", {
					className: "flex items-center gap-1.5 flex-wrap",
					children: [
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: re,
							className: Q("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", p ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Expand All"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: ie,
							className: Q("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", p ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Collapse All"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => ae(1),
							className: Q("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", p ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Level 1"
						}),
						/* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => ae(2),
							className: Q("px-2 py-1 rounded border text-xs font-medium cursor-pointer shadow-2xs transition-colors", p ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"),
							children: "Level 2"
						})
					]
				}), u && /* @__PURE__ */ P("div", {
					className: "relative min-w-[160px]",
					children: [
						/* @__PURE__ */ N(E, { className: "w-3.5 h-3.5 absolute left-2 top-2 text-slate-400" }),
						/* @__PURE__ */ N("input", {
							type: "text",
							placeholder: "Search properties...",
							value: g,
							onChange: (e) => _(e.target.value),
							className: Q("w-full pl-7 pr-6 py-1 text-xs border rounded-lg focus:outline-none font-mono transition-colors", p ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500")
						}),
						g && /* @__PURE__ */ N("button", {
							type: "button",
							onClick: () => _(""),
							className: "absolute right-1.5 top-1.5 text-slate-400 hover:text-slate-200 cursor-pointer",
							children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ N("div", {
				className: "p-3 overflow-auto max-h-[600px]",
				children: e == null ? /* @__PURE__ */ N("div", {
					className: Q("text-xs italic p-4 text-center", p ? "text-slate-500" : "text-slate-400"),
					children: "Empty data / null"
				}) : me("", e, [], 0)
			})
		]
	});
}
//#endregion
//#region src/components/ui/code-editor/CodeEditor.tsx
function zn({ value: t, onChange: n, language: r = "json", readOnly: i = !1, theme: a = "dark", viewMode: o, onViewModeChange: s, showLineNumbers: c = !0, showToolbar: l = !0, showViewToggle: u = !0, showFormatButton: d = !0, showCopyButton: f = !0, showFullScreenButton: p = !1, onFullScreen: m, onFormat: h, tabs: g, activeTab: _, onChangeTab: v, tabsVariant: y, tabsPosition: b, tabsActions: x, toolbarLayout: S = "auto", statusPosition: C, actionsPosition: w, customToolbar: T, toolbarProps: E, height: D = "360px", maxHeight: O, className: k = "", editorClassName: A = "", placeholder: j = "", title: M, extraActions: F, searchTerm: I = "" }) {
	let L = a === "dark", [R, z] = H("code"), [U, W] = H(!1), G = o === void 0 ? R : o, ee = (e) => {
		o === void 0 && z(e), s?.(e);
	}, K = V(null), q = V(null), te = (e) => {
		q.current && (q.current.scrollTop = e.currentTarget.scrollTop);
	}, { isValidJson: ne, parsedJson: re, parseError: ie } = B(() => {
		if (r !== "json" || !t || !t.trim()) return {
			isValidJson: !0,
			parsedJson: null,
			parseError: null
		};
		try {
			return {
				isValidJson: !0,
				parsedJson: JSON.parse(t),
				parseError: null
			};
		} catch (e) {
			return {
				isValidJson: !1,
				parsedJson: null,
				parseError: e.message || "Format JSON tidak valid"
			};
		}
	}, [t, r]), ae = B(() => Math.max(1, (t || "").split("\n").length), [t]), oe = B(() => Array.from({ length: ae }, (e, t) => t + 1), [ae]), se = () => {
		if (h) h();
		else if (!i && n && r === "json") try {
			let e = JSON.parse(t);
			n(JSON.stringify(e, null, 2));
		} catch {}
	}, ce = async () => {
		try {
			await navigator.clipboard.writeText(t), W(!0), setTimeout(() => W(!1), 1500);
		} catch {}
	}, le = (e) => {
		if (!i && n) try {
			n(JSON.stringify(e, null, 2));
		} catch {}
	}, ue = r === "json" && ne && re !== null, de = {
		theme: a,
		title: M,
		language: r,
		isValidJson: ne,
		layout: S,
		tabs: g,
		activeTab: _,
		onChangeTab: v,
		tabsVariant: y,
		tabsPosition: b,
		tabsActions: x,
		statusPosition: C,
		actionsPosition: w,
		viewMode: G,
		onViewModeChange: ee,
		showViewToggle: u,
		isTreeSupported: ue,
		showFormatButton: d,
		onFormat: se,
		readOnly: i,
		showCopyButton: f,
		copied: U,
		onCopy: ce,
		showFullScreenButton: p,
		onFullScreen: m,
		extraActions: F,
		...E
	};
	return /* @__PURE__ */ P("div", {
		className: Q("w-full flex flex-col rounded-2xl border overflow-hidden shadow-2xs transition-colors", L ? "border-slate-800 bg-slate-950" : "border-slate-200/90 bg-white", k),
		children: [
			l && (T ? typeof T == "function" ? T(de) : T : /* @__PURE__ */ N(Dn, { ...de })),
			/* @__PURE__ */ N("div", {
				style: {
					height: D,
					maxHeight: O
				},
				className: Q("relative w-full flex overflow-hidden font-mono text-xs transition-colors", L ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900", A),
				children: G === "tree" && ue ? /* @__PURE__ */ N("div", {
					className: "w-full h-full overflow-auto p-2",
					children: /* @__PURE__ */ N(Rn, {
						data: re,
						onChange: le,
						readOnly: i,
						theme: a,
						searchTerm: I
					})
				}) : /* @__PURE__ */ P("div", {
					className: "w-full h-full flex overflow-hidden",
					children: [c && /* @__PURE__ */ N(Fn, {
						gutterRef: q,
						lineNumbers: oe,
						theme: a
					}), /* @__PURE__ */ N("div", {
						className: "flex-1 relative h-full",
						children: /* @__PURE__ */ N("textarea", {
							ref: K,
							value: t,
							onChange: (e) => n?.(e.target.value),
							readOnly: i,
							placeholder: j,
							onScroll: te,
							spellCheck: !1,
							className: Q("w-full h-full p-3 font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-0 border-0 overflow-auto whitespace-pre tab-[2] transition-colors", L ? "text-slate-100 bg-transparent placeholder-slate-600" : "text-slate-900 bg-transparent placeholder-slate-400", i ? "cursor-default" : "cursor-text")
						})
					})]
				})
			}),
			r === "json" && !ne && ie && /* @__PURE__ */ P("div", {
				className: Q("px-3 py-1.5 border-t text-xs flex items-center gap-1.5 font-medium transition-colors", L ? "bg-rose-950/60 border-rose-900 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-700"),
				children: [/* @__PURE__ */ N(e, { className: "w-3.5 h-3.5 shrink-0 text-rose-500" }), /* @__PURE__ */ N("span", {
					className: "truncate",
					children: ie
				})]
			})
		]
	});
}
var Bn = zn;
//#endregion
//#region src/components/ui/code-editor/FullScreenHeader.tsx
function Vn({ title: e, subtitle: t, badge: n, language: r = "json", isValidJson: i, viewMode: o, onViewModeChange: s, theme: c, onToggleTheme: l, readOnly: d = !1, onSave: f, onClose: p }) {
	let g = c === "dark";
	return /* @__PURE__ */ P("div", {
		className: Q("flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b shrink-0 select-none transition-colors", g ? "bg-slate-900 border-slate-800 text-white" : "bg-slate-100 border-slate-200 text-slate-900"),
		children: [
			/* @__PURE__ */ P("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ N("div", {
					className: Q("w-8 h-8 rounded-xl flex items-center justify-center border transition-colors", g ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-emerald-100 text-emerald-700 border-emerald-200"),
					children: /* @__PURE__ */ N(m, { className: "w-4 h-4" })
				}), /* @__PURE__ */ P("div", { children: [/* @__PURE__ */ P("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ N("span", {
							className: "font-semibold text-sm",
							children: e
						}),
						n,
						r === "json" && /* @__PURE__ */ N(Nt, {
							variant: i ? "success" : "danger",
							size: "xs",
							className: "font-mono text-[10px]",
							children: i ? "Valid JSON" : "Syntax Error"
						})
					]
				}), t && /* @__PURE__ */ N("p", {
					className: Q("text-xs", g ? "text-slate-400" : "text-slate-500"),
					children: t
				})] })]
			}),
			r === "json" && /* @__PURE__ */ P("div", {
				className: Q("flex items-center p-0.5 rounded-xl border text-xs transition-colors", g ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-200/80 border-slate-300/80"),
				children: [
					/* @__PURE__ */ P("button", {
						type: "button",
						onClick: () => s("code"),
						className: Q("flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer", o === "code" ? g ? "bg-slate-700 text-white font-semibold shadow-xs" : "bg-white text-slate-900 font-semibold shadow-xs" : g ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
						title: "Raw code view",
						children: [/* @__PURE__ */ N(m, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Code" })]
					}),
					/* @__PURE__ */ P("button", {
						type: "button",
						onClick: () => s("tree"),
						className: Q("flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer", o === "tree" ? g ? "bg-slate-700 text-white font-semibold shadow-xs" : "bg-white text-slate-900 font-semibold shadow-xs" : g ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
						title: "Interactive tree view",
						children: [/* @__PURE__ */ N(h, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Tree" })]
					}),
					/* @__PURE__ */ P("button", {
						type: "button",
						onClick: () => s("split"),
						className: Q("flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer", o === "split" ? "bg-emerald-600 text-white font-semibold shadow-xs" : g ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"),
						title: "Side-by-side split view (Code + Tree)",
						children: [/* @__PURE__ */ N(u, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Split View" })]
					})
				]
			}),
			/* @__PURE__ */ P("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ N("button", {
						type: "button",
						onClick: l,
						className: Q("p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-center", g ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:text-amber-300" : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900"),
						title: g ? "Switch to Light Mode" : "Switch to Dark Mode",
						children: N(g ? D : S, { className: "w-4 h-4" })
					}),
					!d && f && /* @__PURE__ */ N(Dt, {
						variant: "primary",
						size: "sm",
						onClick: f,
						leftIcon: /* @__PURE__ */ N(a, { className: "w-4 h-4" }),
						className: "bg-emerald-600 hover:bg-emerald-500 text-white",
						children: "Save"
					}),
					/* @__PURE__ */ N(Dt, {
						variant: "outline",
						size: "sm",
						onClick: p,
						leftIcon: /* @__PURE__ */ N(j, { className: "w-4 h-4" }),
						className: Q(g ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"),
						children: "Close"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/ui/code-editor/FullScreenStatusBar.tsx
function Hn({ theme: t, lineCount: n, charCount: r, language: i, isValidJson: o, parseError: s }) {
	return /* @__PURE__ */ P("div", {
		className: Q("flex items-center justify-between px-4 py-1.5 border-t text-xs shrink-0 font-mono select-none transition-colors", t === "dark" ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"),
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
			children: [!o && s && /* @__PURE__ */ P("span", {
				className: "text-rose-500 flex items-center gap-1 font-sans font-medium",
				children: [/* @__PURE__ */ N(e, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", {
					className: "truncate max-w-md",
					children: s
				})]
			}), o && /* @__PURE__ */ P("span", {
				className: "text-emerald-500 flex items-center gap-1 font-sans font-medium",
				children: [/* @__PURE__ */ N(a, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ N("span", { children: "Ready" })]
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/FullScreenToolbar.tsx
function Un({ theme: e, readOnly: t = !1, historyIndex: n, historyLength: r, onUndo: i, onRedo: o, language: s = "json", isValidJson: c, onFormat: l, onMinify: u, onCopy: f, copied: p, searchTerm: m, onSearchChange: h }) {
	let g = e === "dark";
	return /* @__PURE__ */ P("div", {
		className: Q("flex flex-wrap items-center justify-between gap-2 px-4 py-1.5 border-b text-xs shrink-0 select-none transition-colors", g ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"),
		children: [/* @__PURE__ */ P("div", {
			className: "flex items-center gap-1.5",
			children: [
				!t && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ N("button", {
						type: "button",
						disabled: n <= 0,
						onClick: i,
						className: Q("p-1.5 rounded transition-colors cursor-pointer", g ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-200", n <= 0 ? "opacity-30 cursor-not-allowed hover:bg-transparent" : ""),
						title: "Undo (Ctrl+Z)",
						children: /* @__PURE__ */ N(k, { className: "w-3.5 h-3.5" })
					}),
					/* @__PURE__ */ N("button", {
						type: "button",
						disabled: n >= r - 1,
						onClick: o,
						className: Q("p-1.5 rounded transition-colors cursor-pointer", g ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-200", n >= r - 1 ? "opacity-30 cursor-not-allowed hover:bg-transparent" : ""),
						title: "Redo (Ctrl+Y)",
						children: /* @__PURE__ */ N(w, { className: "w-3.5 h-3.5" })
					}),
					/* @__PURE__ */ N("div", { className: Q("w-px h-4 mx-1", g ? "bg-slate-800" : "bg-slate-300") })
				] }),
				!t && s === "json" && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P("button", {
						type: "button",
						disabled: !c,
						onClick: () => l(2),
						className: Q("flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer", g ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900", c ? "" : "opacity-40 cursor-not-allowed"),
						title: "Format JSON with 2-space indentation",
						children: [/* @__PURE__ */ N(A, { className: "w-3 h-3 text-emerald-500" }), /* @__PURE__ */ N("span", { children: "Prettify (2sp)" })]
					}),
					/* @__PURE__ */ N("button", {
						type: "button",
						disabled: !c,
						onClick: u,
						className: Q("flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer", g ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900", c ? "" : "opacity-40 cursor-not-allowed"),
						title: "Minify JSON into a single line",
						children: /* @__PURE__ */ N("span", { children: "Minify" })
					}),
					/* @__PURE__ */ N("div", { className: Q("w-px h-4 mx-1", g ? "bg-slate-800" : "bg-slate-300") })
				] }),
				/* @__PURE__ */ P("button", {
					type: "button",
					onClick: f,
					className: Q("flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer", g ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
					children: [p ? /* @__PURE__ */ N(a, { className: "w-3 h-3 text-emerald-500" }) : /* @__PURE__ */ N(d, { className: "w-3 h-3" }), /* @__PURE__ */ N("span", { children: p ? "Copied" : "Copy" })]
				})
			]
		}), /* @__PURE__ */ P("div", {
			className: "relative min-w-[200px]",
			children: [
				/* @__PURE__ */ N(E, { className: Q("w-3.5 h-3.5 absolute left-2.5 top-2", "text-slate-400") }),
				/* @__PURE__ */ N("input", {
					type: "text",
					placeholder: "Search keyword...",
					value: m,
					onChange: (e) => h(e.target.value),
					className: Q("w-full pl-8 pr-7 py-1 text-xs border rounded-lg focus:outline-none font-mono transition-colors", g ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500")
				}),
				m && /* @__PURE__ */ N("button", {
					type: "button",
					onClick: () => h(""),
					className: Q("absolute right-2 top-1.5 cursor-pointer", g ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-700"),
					children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5" })
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/SplitterHandle.tsx
function Wn({ theme: e, isDragging: t, onMouseDown: n, onTouchStart: r, onDoubleClick: i, className: a = "" }) {
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
		className: Q("relative group shrink-0 w-2.5 h-full flex items-center justify-center cursor-col-resize select-none transition-colors z-10", o ? "bg-slate-950 hover:bg-slate-900" : "bg-slate-100 hover:bg-slate-200", t && (o ? "bg-slate-900" : "bg-slate-200"), a),
		children: [/* @__PURE__ */ N("div", { className: Q("w-px h-full transition-colors", t ? "bg-emerald-500 ring-1 ring-emerald-500/50" : o ? "bg-slate-800 group-hover:bg-emerald-500" : "bg-slate-200 group-hover:bg-emerald-500") }), /* @__PURE__ */ N("div", {
			className: Q("absolute top-1/2 -translate-y-1/2 w-4 h-8 rounded-full flex items-center justify-center border shadow-xs transition-all pointer-events-none", t ? "bg-emerald-600 border-emerald-400 text-white scale-110" : o ? "bg-slate-800 border-slate-700 text-slate-400 group-hover:bg-slate-700 group-hover:text-emerald-400 group-hover:border-emerald-500/60" : "bg-white border-slate-300 text-slate-500 group-hover:bg-slate-50 group-hover:text-emerald-600 group-hover:border-emerald-500/60"),
			children: /* @__PURE__ */ N(g, { className: "w-3 h-3" })
		})]
	});
}
//#endregion
//#region src/components/ui/code-editor/FullScreenCodeEditor.tsx
function Gn({ isOpen: t, onClose: n, value: r, onSave: i, language: a = "json", theme: o = "dark", title: s = "Code Editor", subtitle: c, badge: l, readOnly: u = !1, initialViewMode: d = "split", initialSplitRatio: f = 50, className: p = "" }) {
	let [m, h] = H(r), [g, _] = H(o), [v, y] = H(d), [b, x] = H(f), [S, C] = H(!1), [w, T] = H(""), [E, D] = H(!1), [O, k] = H([r]), [A, j] = H(0), M = V(null), F = V(null), I = V(null);
	R(() => {
		t && (h(r), k([r]), j(0), _(o), x(f));
	}, [
		t,
		r,
		o,
		f
	]), R(() => {
		if (!t) return;
		let e = (e) => {
			e.key === "Escape" && n();
		};
		window.addEventListener("keydown", e);
		let r = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			window.removeEventListener("keydown", e), document.body.style.overflow = r;
		};
	}, [t, n]);
	let L = (e) => {
		h(e);
		let t = O.slice(0, A + 1);
		t.push(e), t.length > 50 && t.shift(), k(t), j(t.length - 1);
	}, z = () => {
		if (A > 0) {
			let e = O[A - 1];
			j(A - 1), h(e);
		}
	}, U = () => {
		if (A < O.length - 1) {
			let e = O[A + 1];
			j(A + 1), h(e);
		}
	}, G = (e) => {
		(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s" ? (e.preventDefault(), i?.(m)) : (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" ? e.shiftKey ? (e.preventDefault(), U()) : (e.preventDefault(), z()) : (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y" && (e.preventDefault(), U());
	}, { parsedJson: ee, isValidJson: K, parseError: q } = B(() => {
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
	}, [m, a]), te = B(() => Math.max(1, (m || "").split("\n").length), [m]), ne = B(() => Array.from({ length: te }, (e, t) => t + 1), [te]), re = (e) => {
		F.current && (F.current.scrollTop = e.currentTarget.scrollTop);
	}, ie = (e = 2) => {
		if (!(u || a !== "json")) try {
			let t = JSON.parse(m);
			L(JSON.stringify(t, null, e));
		} catch {}
	}, ae = () => {
		if (!(u || a !== "json")) try {
			let e = JSON.parse(m);
			L(JSON.stringify(e));
		} catch {}
	}, oe = async () => {
		try {
			await navigator.clipboard.writeText(m), D(!0), setTimeout(() => D(!1), 1500);
		} catch {}
	}, se = (e) => {
		if (!u) try {
			L(JSON.stringify(e, null, 2));
		} catch {}
	}, ce = (e) => {
		e.preventDefault(), C(!0);
	}, le = (e) => {
		C(!0);
	};
	if (R(() => {
		if (!S) return;
		let e = (e) => {
			if (!I.current) return;
			let t = I.current.getBoundingClientRect();
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
	}, [S]), !t || typeof document > "u") return null;
	let ue = g === "dark", de = /* @__PURE__ */ N("div", {
		className: Q("fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150", p),
		children: /* @__PURE__ */ P("div", {
			className: Q("w-full h-full flex flex-col overflow-hidden shadow-2xl transition-colors", ue ? "bg-slate-950 text-slate-100" : "bg-white text-slate-800"),
			children: [
				/* @__PURE__ */ N(Vn, {
					title: s,
					subtitle: c,
					badge: l,
					language: a,
					isValidJson: K,
					viewMode: v,
					onViewModeChange: y,
					theme: g,
					onToggleTheme: () => _((e) => e === "dark" ? "light" : "dark"),
					readOnly: u,
					onSave: i ? () => i(m) : void 0,
					onClose: n
				}),
				/* @__PURE__ */ N(Un, {
					theme: g,
					readOnly: u,
					historyIndex: A,
					historyLength: O.length,
					onUndo: z,
					onRedo: U,
					language: a,
					isValidJson: K,
					onFormat: ie,
					onMinify: ae,
					onCopy: oe,
					copied: E,
					searchTerm: w,
					onSearchChange: T
				}),
				/* @__PURE__ */ P("div", {
					ref: I,
					className: "flex-1 w-full flex overflow-hidden relative",
					children: [
						(v === "code" || v === "split") && /* @__PURE__ */ P("div", {
							className: Q("h-full flex overflow-hidden relative transition-colors", v === "split" ? "shrink-0" : "w-full", S && "pointer-events-none select-none"),
							style: v === "split" ? { width: `calc(${b}% - 5px)` } : void 0,
							children: [/* @__PURE__ */ N(Fn, {
								gutterRef: F,
								lineNumbers: ne,
								theme: g
							}), /* @__PURE__ */ N("div", {
								className: "flex-1 relative h-full",
								children: /* @__PURE__ */ N("textarea", {
									ref: M,
									value: m,
									onChange: (e) => L(e.target.value),
									onKeyDown: G,
									onScroll: re,
									readOnly: u,
									spellCheck: !1,
									className: Q("w-full h-full p-3 font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-0 border-0 overflow-auto whitespace-pre tab-[2] transition-colors", ue ? "text-slate-100 bg-transparent placeholder-slate-600" : "text-slate-900 bg-white placeholder-slate-400", u ? "cursor-default" : "cursor-text")
								})
							})]
						}),
						v === "split" && /* @__PURE__ */ N(Wn, {
							theme: g,
							isDragging: S,
							onMouseDown: ce,
							onTouchStart: le,
							onDoubleClick: () => x(50)
						}),
						(v === "tree" || v === "split") && /* @__PURE__ */ N("div", {
							className: Q("h-full overflow-auto p-2 transition-colors", ue ? "bg-slate-950/90" : "bg-slate-50/70", v === "split" ? "shrink-0" : "w-full", S && "pointer-events-none select-none"),
							style: v === "split" ? { width: `calc(${100 - b}% - 5px)` } : void 0,
							children: K && ee !== null ? /* @__PURE__ */ N("div", {
								className: Q("rounded-xl shadow-xs overflow-hidden border transition-colors", ue ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"),
								children: /* @__PURE__ */ N(Rn, {
									data: ee,
									onChange: se,
									readOnly: u,
									theme: g,
									searchTerm: w
								})
							}) : /* @__PURE__ */ P("div", {
								className: Q("flex flex-col items-center justify-center h-full p-8 text-center gap-2 select-none", ue ? "text-slate-400" : "text-slate-500"),
								children: [
									/* @__PURE__ */ N(e, { className: "w-8 h-8 text-amber-500" }),
									/* @__PURE__ */ N("p", {
										className: Q("text-sm font-medium", ue ? "text-slate-200" : "text-slate-700"),
										children: "Tree view unavailable"
									}),
									/* @__PURE__ */ N("p", {
										className: "text-xs max-w-sm",
										children: q || "Fix JSON syntax errors in the code editor to enable the tree view."
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ N(Hn, {
					theme: g,
					lineCount: te,
					charCount: m.length,
					language: a,
					isValidJson: K,
					parseError: q
				})
			]
		})
	});
	return W(de, document.body);
}
var Kn = Gn, qn = {
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
}, Jn = {
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
function Yn({ visible: e = !1, onClick: t, blur: n = !0, scope: r = "full", layer: i = "backdrop", className: a = "", children: o }) {
	if (R(() => {
		if (!e || r !== "full") return;
		let t = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = t;
		};
	}, [e, r]), !e) return null;
	let s = Jn[i] || "z-40";
	return /* @__PURE__ */ N("div", {
		role: "presentation",
		"aria-hidden": "true",
		onClick: t,
		className: Q(r === "full" ? "fixed inset-0" : "absolute inset-0", "bg-slate-950/50 transition-all duration-200 select-none animate-in fade-in", n && "backdrop-blur-xs", s, a),
		children: o
	});
}
//#endregion
//#region src/components/ui/layout/LayoutBody.tsx
function Xn({ className: e = "", children: t }) {
	return /* @__PURE__ */ N("div", {
		className: Q("flex-1 min-h-0 w-full flex relative overflow-hidden", e),
		children: t
	});
}
//#endregion
//#region src/components/ui/layout/LayoutContent.tsx
function Zn({ padded: e = !0, className: t = "", children: n }) {
	return /* @__PURE__ */ N("main", {
		className: Q("flex-1 min-w-0 min-h-0 flex flex-col z-0", "overflow-y-auto overflow-x-hidden", e && "p-4 md:p-6", t),
		children: n
	});
}
//#endregion
//#region src/components/ui/layout/LayoutHeader.tsx
function Qn({ height: e = "h-14", sticky: t = !0, bordered: n = !0, layer: r = "header", className: i = "", children: a }) {
	let o = Jn[r] || "z-20";
	return /* @__PURE__ */ N("header", {
		className: Q("w-full shrink-0 flex items-center transition-colors", e, t ? "sticky top-0" : "relative", n && "border-b border-slate-200 dark:border-slate-800", "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs", o, i),
		children: a
	});
}
//#endregion
//#region src/components/ui/layout/LayoutLoading.tsx
function $n({ visible: e = !1, message: t = "Loading...", description: n, variant: r = "spinner", progress: i, blur: a = !0, layer: o = "loading", customIcon: s, className: c = "" }) {
	if (R(() => {
		if (!e) return;
		let t = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = t;
		};
	}, [e]), !e) return null;
	let l = Jn[o] || "z-[100]";
	return /* @__PURE__ */ P("div", {
		role: "status",
		"aria-live": "polite",
		"aria-label": typeof t == "string" ? t : "Loading",
		className: Q("fixed inset-0 flex items-center justify-center p-4 select-none", "bg-slate-950/60 text-white transition-all duration-300 animate-in fade-in", a && "backdrop-blur-sm", l, c),
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
					}) : /* @__PURE__ */ N(y, { className: "relative z-10 w-8 h-8 text-emerald-400 animate-spin" })]
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
//#region src/components/ui/layout/LayoutSidebar.tsx
function er({ isOpen: e = !1, onClose: t, width: n = "w-64", collapsed: r = !1, collapsedWidth: i = "w-16", position: a = "left", mobileMode: o = "drawer", bordered: s = !0, layer: c = "sidebar", className: l = "", children: u }) {
	R(() => {
		if (!e || !t) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
	}, [e, t]);
	let d = Jn[c] || "z-30", f = Jn.drawer;
	return /* @__PURE__ */ N("aside", {
		className: Q("flex flex-col h-full min-h-0 shrink-0 transition-all duration-200 ease-out", "bg-white dark:bg-slate-900 transition-colors", s && (a === "left" ? "border-r border-slate-200 dark:border-slate-800" : "border-l border-slate-200 dark:border-slate-800"), "hidden md:flex", d, r ? i : n, o === "drawer" && [e ? Q("!flex fixed inset-y-0 w-[85vw] max-w-xs shadow-2xl translate-x-0", f, a === "left" ? "left-0" : "right-0") : Q("max-md:fixed max-md:inset-y-0 max-md:pointer-events-none", a === "left" ? "max-md:-translate-x-full max-md:left-0" : "max-md:translate-x-full max-md:right-0")], l),
		children: u
	});
}
//#endregion
//#region src/components/ui/layout/StackLayer.tsx
function tr({ layer: e = "base", zIndex: t, fixed: n = !1, absolute: r = !1, fullScreen: i = !1, className: a = "", children: o }) {
	let s = Jn[e] || "z-0";
	return /* @__PURE__ */ N("div", {
		style: t === void 0 ? void 0 : { zIndex: t },
		className: Q(s, i ? "fixed inset-0 pointer-events-none" : n ? "fixed" : r ? "absolute" : "relative", a),
		children: o
	});
}
//#endregion
//#region src/components/ui/layout/Layout.tsx
function nr({ theme: e = "light", fullScreen: t = !0, className: n = "", children: r }) {
	return /* @__PURE__ */ N("div", {
		"data-theme": e,
		className: Q("relative flex flex-col font-sans transition-colors", t ? "h-screen w-screen overflow-hidden" : "w-full h-full", e === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900", n),
		children: r
	});
}
nr.Header = Qn, nr.Body = Xn, nr.Sidebar = er, nr.Content = Zn, nr.Backdrop = Yn, nr.Loading = $n, nr.Layer = tr;
//#endregion
//#region src/components/ui/container/ContainerContent.tsx
var rr = {
	none: "p-0",
	small: "p-4",
	medium: "p-6",
	large: "p-8"
}, ir = {
	none: "",
	small: "gap-3",
	medium: "gap-5",
	large: "gap-8"
};
function ar({ className: e = "", padding: t = "none", gap: n = "none", children: r, ...i }) {
	return /* @__PURE__ */ N("div", {
		className: Q("w-full flex-1 min-h-0", rr[t], n !== "none" && "flex flex-col", ir[n], e),
		...i,
		children: r
	});
}
//#endregion
//#region src/components/ui/container/ContainerFooter.tsx
function or({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("div", {
		className: Q("w-full flex items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800", e),
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/container/ContainerHeader.tsx
function sr({ className: e = "", children: t, ...n }) {
	return /* @__PURE__ */ N("div", {
		className: Q("w-full flex items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800", e),
		...n,
		children: t
	});
}
//#endregion
//#region src/components/ui/container/Container.tsx
var cr = {
	sm: "max-w-screen-sm",
	md: "max-w-screen-md",
	lg: "max-w-screen-lg",
	xl: "max-w-screen-xl",
	"2xl": "max-w-screen-2xl",
	full: "w-full"
}, lr = {
	none: "p-0",
	small: "p-3 sm:p-4",
	medium: "p-4 sm:p-6",
	large: "p-6 sm:p-8"
}, ur = {
	default: "",
	card: "bg-white border border-slate-200/90 rounded-2xl shadow-xs text-slate-900 overflow-hidden",
	elevated: "bg-white border border-slate-200/80 rounded-2xl shadow-md text-slate-900 overflow-hidden",
	bordered: "bg-white border border-slate-200 rounded-xl text-slate-900 overflow-hidden",
	flat: "bg-slate-50/90 border border-slate-200/80 rounded-xl text-slate-900 overflow-hidden",
	ghost: "bg-transparent text-slate-900"
};
function dr({ size: e = "full", padding: t = "none", variant: n = "default", centered: r = !0, className: i = "", children: a, ...o }) {
	return /* @__PURE__ */ N("div", {
		className: Q("w-full flex flex-col transition-colors", cr[e], lr[t], ur[n], r && e !== "full" && "mx-auto", i),
		...o,
		children: a
	});
}
dr.ActionBar = Yt, dr.Header = sr, dr.Content = ar, dr.Footer = or;
//#endregion
//#region src/components/ui/toast/ToastItem.tsx
function fr({ toast: e, index: t, total: n, isExpanded: r, position: i, onDismiss: a, theme: o = "colored", showProgress: s = !0, className: c = "" }) {
	let l = e.theme || o, u = l === "colored", d = l === "dark", f = e.type || "default", p = e.title || e.msg, m = !!e.description, h = e.duration ?? e.durationMs ?? 4e3, g = h !== Infinity && h > 0, _ = i.startsWith("top") ? 1 : -1, v = r ? 1 : Math.max(.85, 1 - t * .05), y = r ? 0 : t * 10 * _, b = r ? 1 : t > 2 ? 0 : Math.max(.65, 1 - t * .15), x = 50 - t;
	if (!(r || t <= 2)) return null;
	let S = mr(f, l);
	return /* @__PURE__ */ P("div", {
		style: {
			zIndex: x,
			transform: `translateY(${y}px) scale(${v})`,
			opacity: b,
			transition: "all 280ms cubic-bezier(0.16, 1, 0.3, 1)"
		},
		className: Q("relative overflow-hidden w-full max-w-md rounded-2xl border transition-all select-none pointer-events-auto", r ? "mb-2.5 hover:scale-[1.01]" : "absolute inset-x-0 top-0", S.card, c, e.className),
		children: [
			u && /* @__PURE__ */ N("div", {
				className: "absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-white to-transparent",
				style: { animation: "toast-shimmer 2.8s ease-in-out infinite" }
			}),
			/* @__PURE__ */ P("div", {
				className: Q("relative z-10 px-4 py-3 sm:py-3.5 flex gap-3.5", m ? "items-start" : "items-center"),
				children: [
					/* @__PURE__ */ N("div", {
						className: Q("flex items-center justify-center w-8 h-8 rounded-xl shrink-0 border shadow-2xs transition-colors", m && "mt-0.5", S.iconContainer),
						children: e.icon ? e.icon : pr(f, l)
					}),
					/* @__PURE__ */ P("div", {
						className: "flex-1 min-w-0 pr-1",
						children: [p && /* @__PURE__ */ N("div", {
							className: Q("font-semibold text-[13px] sm:text-sm leading-snug tracking-[-0.01em]", u || d ? "text-white" : "text-slate-900"),
							children: p
						}), e.description && /* @__PURE__ */ N("div", {
							className: Q("text-xs mt-1 leading-relaxed line-clamp-2 font-normal", u ? "text-white/90" : d ? "text-slate-400" : "text-slate-500"),
							children: e.description
						})]
					}),
					e.action && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: (t) => {
							e.action?.onClick(t), a(e.id || "");
						},
						className: Q("shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer shadow-2xs", m ? "self-start mt-0.5" : "self-center", S.actionButton),
						children: e.action.label
					}),
					e.dismissible !== !1 && /* @__PURE__ */ N("button", {
						type: "button",
						onClick: (t) => {
							t.stopPropagation(), a(e.id || "");
						},
						className: Q("w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0 cursor-pointer border border-transparent", m ? "self-start mt-0.5" : "self-center", u ? "text-white/80 hover:text-white hover:bg-white/20 active:bg-white/30" : d ? "text-slate-400 hover:text-white hover:bg-slate-800/90 hover:border-slate-700/60 active:bg-slate-700" : "text-slate-400 hover:text-slate-700 hover:bg-slate-100 hover:border-slate-200 active:bg-slate-200/80"),
						"aria-label": "Tutup notifikasi",
						children: /* @__PURE__ */ N(j, { className: "w-3.5 h-3.5 stroke-[2.25]" })
					})
				]
			}),
			s && g && /* @__PURE__ */ N("div", {
				className: Q("absolute bottom-0 inset-x-0 h-[2.5px] overflow-hidden pointer-events-none", u ? "bg-black/15" : d ? "bg-slate-800/60" : "bg-slate-100/90"),
				children: /* @__PURE__ */ N("div", {
					className: Q("h-full w-full", S.progressBar),
					style: {
						animation: `toast-progress ${h}ms linear forwards`,
						transformOrigin: "left"
					}
				})
			})
		]
	});
}
function pr(n, r) {
	if (r === "colored") switch (n) {
		case "success": return /* @__PURE__ */ N(o, { className: "w-4 h-4 text-white" });
		case "error": return /* @__PURE__ */ N(e, { className: "w-4 h-4 text-white" });
		case "warning": return /* @__PURE__ */ N(t, { className: "w-4 h-4 text-white" });
		case "info": return /* @__PURE__ */ N(v, { className: "w-4 h-4 text-white" });
		case "loading": return /* @__PURE__ */ N(y, { className: "w-4 h-4 text-white animate-spin" });
		default: return /* @__PURE__ */ N(v, { className: "w-4 h-4 text-white" });
	}
	switch (n) {
		case "success": return /* @__PURE__ */ N(o, { className: "w-4 h-4 text-emerald-500" });
		case "error": return /* @__PURE__ */ N(e, { className: "w-4 h-4 text-rose-500" });
		case "warning": return /* @__PURE__ */ N(t, { className: "w-4 h-4 text-amber-500" });
		case "info": return /* @__PURE__ */ N(v, { className: "w-4 h-4 text-sky-500" });
		case "loading": return /* @__PURE__ */ N(y, { className: "w-4 h-4 text-violet-500 animate-spin" });
		default: return /* @__PURE__ */ N(v, { className: "w-4 h-4 text-slate-400" });
	}
}
function mr(e, t) {
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
var $ = new class {
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
}(), hr = Object.assign((e, t) => $.add(e, t), {
	success: (e, t) => $.add(e, {
		...t,
		type: "success"
	}),
	error: (e, t) => $.add(e, {
		...t,
		type: "error"
	}),
	warning: (e, t) => $.add(e, {
		...t,
		type: "warning"
	}),
	info: (e, t) => $.add(e, {
		...t,
		type: "info"
	}),
	loading: (e, t) => $.add(e, {
		...t,
		type: "loading",
		duration: Infinity
	}),
	promise: async (e, t, n) => {
		let r = $.add(t.loading, {
			...n,
			type: "loading",
			duration: Infinity
		});
		try {
			let i = await (typeof e == "function" ? e() : e), a = typeof t.success == "function" ? t.success(i) : t.success;
			return $.add(a, {
				...n,
				id: r,
				type: "success",
				duration: n?.duration ?? 4e3
			}), i;
		} catch (e) {
			let i = typeof t.error == "function" ? t.error(e) : t.error;
			throw $.add(i, {
				...n,
				id: r,
				type: "error",
				duration: n?.duration ?? 5e3
			}), e;
		}
	},
	dismiss: (e) => {
		$.dismiss(e);
	}
});
function gr() {
	return U((e) => $.subscribe(e), $.getSnapshot, () => []);
}
function _r() {
	return {
		toasts: gr(),
		toast: hr,
		dismiss: hr.dismiss
	};
}
//#endregion
//#region src/components/ui/toast/ToastContainer.tsx
function vr({ position: e = "top-center", toasts: t, toast: n, onDismiss: r, theme: i = "colored", expandOnHover: a = !0, maxVisible: o = 5, showProgress: s = !0, className: c = "", containerClassName: l = "" }) {
	let u = gr(), [d, f] = H(!1), [p, m] = H(!1), [h, g] = H(!1);
	R(() => {
		if (m(!0), typeof window > "u") return;
		let e = () => {
			let e = document.documentElement.classList.contains("dark"), t = window.matchMedia("(prefers-color-scheme: dark)").matches;
			g(e || t);
		};
		e();
		let t = window.matchMedia("(prefers-color-scheme: dark)");
		return t.addEventListener("change", e), () => t.removeEventListener("change", e);
	}, []);
	let _ = i === "system" ? h ? "dark" : "light" : i, v = B(() => t === void 0 ? n === void 0 ? u : n ? [n] : [] : t, [
		t,
		n,
		u
	]), y = (e) => {
		r ? r(e) : hr.dismiss(e);
	};
	if (!p || v.length === 0) return null;
	let b = [...v].reverse().slice(0, o), x = br(e), S = a && d, C = /* @__PURE__ */ N("div", {
		className: Q("fixed z-[100] pointer-events-none p-4 w-full max-w-md flex flex-col", x.wrapper, l),
		role: "region",
		"aria-live": "polite",
		"aria-label": "Notifikasi sistem",
		children: /* @__PURE__ */ N("div", {
			onMouseEnter: () => f(!0),
			onMouseLeave: () => f(!1),
			className: Q("relative w-full flex flex-col pointer-events-auto transition-all duration-300", x.alignment, S ? "space-y-2.5" : "h-18", c),
			children: b.map((t, n) => /* @__PURE__ */ N(fr, {
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
	return typeof document < "u" ? W(C, document.body) : null;
}
var yr = vr;
function br(e) {
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
var xr = /* @__PURE__ */ ee({
	ActionBar: () => Yt,
	Autocomplete: () => gn,
	Badge: () => Nt,
	Button: () => Dt,
	Card: () => $t,
	CardContent: () => Ht,
	CardDescription: () => zt,
	CardFooter: () => Ut,
	CardHeader: () => Lt,
	CardTitle: () => Rt,
	Checkbox: () => yn,
	CheckboxGroup: () => bn,
	CodeEditor: () => zn,
	CodeEditorToolbar: () => Dn,
	CodeEditorToolbarActions: () => Nn,
	CodeEditorToolbarGroup: () => kn,
	CodeEditorToolbarRow: () => On,
	CodeEditorToolbarStatus: () => jn,
	CodeEditorToolbarTabs: () => An,
	CodeEditorToolbarViewToggle: () => Mn,
	CodeGutter: () => Fn,
	Container: () => dr,
	ContainerContent: () => ar,
	ContainerFooter: () => or,
	ContainerHeader: () => sr,
	DataTable: () => fn,
	EmptyState: () => cn,
	FeatureBanner: () => Wt,
	FieldWrapper: () => pn,
	FullScreenCodeEditor: () => Gn,
	FullScreenHeader: () => Vn,
	FullScreenJsonEditor: () => Kn,
	FullScreenStatusBar: () => Hn,
	FullScreenToolbar: () => Un,
	JsonEditor: () => Bn,
	JsonTreeEditor: () => Rn,
	JsonTreeViewer: () => Rn,
	Layout: () => nr,
	LayoutBackdrop: () => Yn,
	LayoutBody: () => Xn,
	LayoutContent: () => Zn,
	LayoutHeader: () => Qn,
	LayoutLoading: () => $n,
	LayoutSidebar: () => er,
	MethodBadge: () => kt,
	Modal: () => sn,
	ModalBody: () => en,
	ModalDescription: () => tn,
	ModalFooter: () => nn,
	ModalHeader: () => rn,
	ModalTitle: () => an,
	MultiSelect: () => vn,
	Radio: () => xn,
	RadioGroup: () => Sn,
	STACK_LAYER_CLASSES: () => Jn,
	STACK_LAYER_Z_INDEX: () => qn,
	Select: () => _n,
	SplitterHandle: () => Wn,
	StackLayer: () => tr,
	StatusCodeBadge: () => At,
	Switch: () => Cn,
	Table: () => dn,
	Tabs: () => En,
	TextArea: () => hn,
	TextField: () => mn,
	ToastContainer: () => vr,
	ToastItem: () => fr,
	Toaster: () => yr,
	getToolbarButtonClass: () => Pn,
	toast: () => hr,
	toastManager: () => $,
	useCardContext: () => It,
	useToast: () => _r,
	useToastStore: () => gr
});
//#endregion
//#region src/utils/ui/formatters.ts
function Sr(e) {
	return e == null ? "-" : e < 1e3 ? `${Math.round(e)}ms` : `${(e / 1e3).toFixed(2)}s`;
}
function Cr(e) {
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
function wr(e, t = 50) {
	return e ? e.length <= t ? e : `${e.slice(0, t)}...` : "";
}
//#endregion
export { Yt as ActionBar, gn as Autocomplete, Nt as Badge, Dt as Button, $t as Card, Ht as CardContent, zt as CardDescription, Ut as CardFooter, Lt as CardHeader, Rt as CardTitle, yn as Checkbox, bn as CheckboxGroup, zn as CodeEditor, Dn as CodeEditorToolbar, Nn as CodeEditorToolbarActions, kn as CodeEditorToolbarGroup, On as CodeEditorToolbarRow, jn as CodeEditorToolbarStatus, An as CodeEditorToolbarTabs, Mn as CodeEditorToolbarViewToggle, Fn as CodeGutter, dr as Container, ar as ContainerContent, or as ContainerFooter, sr as ContainerHeader, fn as DataTable, cn as EmptyState, Wt as FeatureBanner, pn as FieldWrapper, Gn as FullScreenCodeEditor, Vn as FullScreenHeader, Kn as FullScreenJsonEditor, Hn as FullScreenStatusBar, Un as FullScreenToolbar, Bn as JsonEditor, Rn as JsonTreeEditor, Rn as JsonTreeViewer, nr as Layout, Yn as LayoutBackdrop, Xn as LayoutBody, Zn as LayoutContent, Qn as LayoutHeader, $n as LayoutLoading, er as LayoutSidebar, kt as MethodBadge, sn as Modal, en as ModalBody, tn as ModalDescription, nn as ModalFooter, rn as ModalHeader, an as ModalTitle, vn as MultiSelect, xn as Radio, Sn as RadioGroup, Jn as STACK_LAYER_CLASSES, qn as STACK_LAYER_Z_INDEX, _n as Select, Wn as SplitterHandle, tr as StackLayer, At as StatusCodeBadge, Cn as Switch, dn as Table, En as Tabs, hn as TextArea, mn as TextField, vr as ToastContainer, fr as ToastItem, yr as Toaster, Q as cn, Sr as formatLatency, Cr as formatStatusCode, Pn as getToolbarButtonClass, hr as toast, $ as toastManager, wr as truncateText, xr as ui, It as useCardContext, _r as useToast, gr as useToastStore };

//# sourceMappingURL=index.js.map