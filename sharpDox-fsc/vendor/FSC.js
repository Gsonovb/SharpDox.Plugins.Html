!function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.FSC = e() : t.FSC = e()
}
(this, function () {
	return function (t) {
		function e(n) {
			if (r[n])
				return r[n].exports;
			var i = r[n] = {
				exports : {},
				id : n,
				loaded : !1
			};
			return t[n].call(i.exports, i, i.exports, e),
			i.loaded = !0,
			i.exports
		}
		var r = {};
		return e.m = t,
		e.c = r,
		e.p = "",
		e(0)
	}
	([function (t, e, r) {
				"use strict";
				function n(t) {
					return t && t.__esModule ? t : {
						"default" : t
					}
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				}),
				e.HistoryStateContainer = e.StateContainer = e.StateChanger = void 0;
				var i = r(4),
				o = n(i),
				u = r(2),
				s = n(u),
				a = r(3),
				h = n(a);
				e.StateChanger = o.default, e.StateContainer = s.default, e.HistoryStateContainer = h.default
			}, function (t, e, r) {
				!function (e, r) {
					t.exports = r()
				}
				(this, function () {
					"use strict";
					function t(t, e) {
						e && (t.prototype = Object.create(e.prototype)),
						t.prototype.constructor = t
					}
					function e(t) {
						return o(t) ? t : k(t)
					}
					function r(t) {
						return u(t) ? t : x(t)
					}
					function n(t) {
						return s(t) ? t : D(t)
					}
					function i(t) {
						return o(t) && !a(t) ? t : j(t)
					}
					function o(t) {
						return !(!t || !t[ar])
					}
					function u(t) {
						return !(!t || !t[hr])
					}
					function s(t) {
						return !(!t || !t[fr])
					}
					function a(t) {
						return u(t) || s(t)
					}
					function h(t) {
						return !(!t || !t[cr])
					}
					function f(t) {
						return t.value = !1,
						t
					}
					function c(t) {
						t && (t.value = !0)
					}
					function _() {}

					function p(t, e) {
						e = e || 0;
						for (var r = Math.max(0, t.length - e), n = Array(r), i = 0; r > i; i++)
							n[i] = t[i + e];
						return n
					}
					function l(t) {
						return void 0 === t.size && (t.size = t.__iterate(y)),
						t.size
					}
					function v(t, e) {
						if ("number" != typeof e) {
							var r = e >>> 0;
							if ("" + r !== e || 4294967295 === r)
								return NaN;
							e = r
						}
						return 0 > e ? l(t) + e : e
					}
					function y() {
						return !0
					}
					function d(t, e, r) {
						return (0 === t || void 0 !== r && -r >= t) && (void 0 === e || void 0 !== r && e >= r)
					}
					function g(t, e) {
						return w(t, e, 0)
					}
					function m(t, e) {
						return w(t, e, e)
					}
					function w(t, e, r) {
						return void 0 === t ? r : 0 > t ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t)
					}
					function b(t) {
						this.next = t
					}
					function S(t, e, r, n) {
						var i = 0 === t ? e : 1 === t ? r : [e, r];
						return n ? n.value = i : n = {
							value : i,
							done : !1
						},
						n
					}
					function z() {
						return {
							value : void 0,
							done : !0
						}
					}
					function I(t) {
						return !!O(t)
					}
					function M(t) {
						return t && "function" == typeof t.next
					}
					function q(t) {
						var e = O(t);
						return e && e.call(t)
					}
					function O(t) {
						var e = t && (Sr && t[Sr] || t[zr]);
						return "function" == typeof e ? e : void 0
					}
					function E(t) {
						return t && "number" == typeof t.length
					}
					function k(t) {
						return null === t || void 0 === t ? T() : o(t) ? t.toSeq() : W(t)
					}
					function x(t) {
						return null === t || void 0 === t ? T().toKeyedSeq() : o(t) ? u(t) ? t.toSeq() : t.fromEntrySeq() : L(t)
					}
					function D(t) {
						return null === t || void 0 === t ? T() : o(t) ? u(t) ? t.entrySeq() : t.toIndexedSeq() : P(t)
					}
					function j(t) {
						return (null === t || void 0 === t ? T() : o(t) ? u(t) ? t.entrySeq() : t : P(t)).toSetSeq()
					}
					function A(t) {
						this._array = t,
						this.size = t.length
					}
					function C(t) {
						var e = Object.keys(t);
						this._object = t,
						this._keys = e,
						this.size = e.length
					}
					function R(t) {
						this._iterable = t,
						this.size = t.length || t.size
					}
					function K(t) {
						this._iterator = t,
						this._iteratorCache = []
					}
					function U(t) {
						return !(!t || !t[Mr])
					}
					function T() {
						return qr || (qr = new A([]))
					}
					function L(t) {
						var e = Array.isArray(t) ? new A(t).fromEntrySeq() : M(t) ? new K(t).fromEntrySeq() : I(t) ? new R(t).fromEntrySeq() : "object" == typeof t ? new C(t) : void 0;
						if (!e)
							throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
						return e
					}
					function P(t) {
						var e = B(t);
						if (!e)
							throw new TypeError("Expected Array or iterable object of values: " + t);
						return e
					}
					function W(t) {
						var e = B(t) || "object" == typeof t && new C(t);
						if (!e)
							throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
						return e
					}
					function B(t) {
						return E(t) ? new A(t) : M(t) ? new K(t) : I(t) ? new R(t) : void 0
					}
					function H(t, e, r, n) {
						var i = t._cache;
						if (i) {
							for (var o = i.length - 1, u = 0; o >= u; u++) {
								var s = i[r ? o - u : u];
								if (e(s[1], n ? s[0] : u, t) === !1)
									return u + 1
							}
							return u
						}
						return t.__iterateUncached(e, r)
					}
					function J(t, e, r, n) {
						var i = t._cache;
						if (i) {
							var o = i.length - 1,
							u = 0;
							return new b(function () {
								var t = i[r ? o - u : u];
								return u++ > o ? z() : S(e, n ? t[0] : u - 1, t[1])
							})
						}
						return t.__iteratorUncached(e, r)
					}
					function N(t, e) {
						return e ? V(e, t, "", {
							"" : t
						}) : F(t)
					}
					function V(t, e, r, n) {
						return Array.isArray(e) ? t.call(n, r, D(e).map(function (r, n) {
								return V(t, r, n, e)
							})) : Y(e) ? t.call(n, r, x(e).map(function (r, n) {
								return V(t, r, n, e)
							})) : e
					}
					function F(t) {
						return Array.isArray(t) ? D(t).map(F).toList() : Y(t) ? x(t).map(F).toMap() : t
					}
					function Y(t) {
						return t && (t.constructor === Object || void 0 === t.constructor)
					}
					function Q(t, e) {
						if (t === e || t !== t && e !== e)
							return !0;
						if (!t || !e)
							return !1;
						if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
							if (t = t.valueOf(), e = e.valueOf(), t === e || t !== t && e !== e)
								return !0;
							if (!t || !e)
								return !1
						}
						return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e))
					}
					function X(t, e) {
						if (t === e)
							return !0;
						if (!o(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || u(t) !== u(e) || s(t) !== s(e) || h(t) !== h(e))
							return !1;
						if (0 === t.size && 0 === e.size)
							return !0;
						var r = !a(t);
						if (h(t)) {
							var n = t.entries();
							return e.every(function (t, e) {
								var i = n.next().value;
								return i && Q(i[1], t) && (r || Q(i[0], e))
							}) && n.next().done
						}
						var i = !1;
						if (void 0 === t.size)
							if (void 0 === e.size)
								"function" == typeof t.cacheResult && t.cacheResult();
							else {
								i = !0;
								var f = t;
								t = e,
								e = f
							}
						var c = !0,
						_ = e.__iterate(function (e, n) {
								return (r ? t.has(e) : i ? Q(e, t.get(n, yr)) : Q(t.get(n, yr), e)) ? void 0 : (c = !1, !1)
							});
						return c && t.size === _
					}
					function G(t, e) {
						if (!(this instanceof G))
							return new G(t, e);
						if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
							if (Or)
								return Or;
							Or = this
						}
					}
					function Z(t, e) {
						if (!t)
							throw Error(e)
					}
					function $(t, e, r) {
						if (!(this instanceof $))
							return new $(t, e, r);
						if (Z(0 !== r, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), r = void 0 === r ? 1 : Math.abs(r), t > e && (r = -r), this._start = t, this._end = e, this._step = r, this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1), 0 === this.size) {
							if (Er)
								return Er;
							Er = this
						}
					}
					function tt() {
						throw TypeError("Abstract")
					}
					function et() {}

					function rt() {}

					function nt() {}

					function it(t) {
						return t >>> 1 & 1073741824 | 3221225471 & t
					}
					function ot(t) {
						if (t === !1 || null === t || void 0 === t)
							return 0;
						if ("function" == typeof t.valueOf && (t = t.valueOf(), t === !1 || null === t || void 0 === t))
							return 0;
						if (t === !0)
							return 1;
						var e = typeof t;
						if ("number" === e) {
							var r = 0 | t;
							for (r !== t && (r ^= 4294967295 * t); t > 4294967295; )
								t /= 4294967295, r ^= t;
							return it(r)
						}
						if ("string" === e)
							return t.length > Kr ? ut(t) : st(t);
						if ("function" == typeof t.hashCode)
							return t.hashCode();
						if ("object" === e)
							return at(t);
						if ("function" == typeof t.toString)
							return st("" + t);
						throw Error("Value type " + e + " cannot be hashed.")
					}
					function ut(t) {
						var e = Lr[t];
						return void 0 === e && (e = st(t), Tr === Ur && (Tr = 0, Lr = {}), Tr++, Lr[t] = e),
						e
					}
					function st(t) {
						for (var e = 0, r = 0; t.length > r; r++)
							e = 31 * e + t.charCodeAt(r) | 0;
						return it(e)
					}
					function at(t) {
						var e;
						if (Ar && (e = kr.get(t), void 0 !== e))
							return e;
						if (e = t[Rr], void 0 !== e)
							return e;
						if (!jr) {
							if (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Rr], void 0 !== e)
								return e;
							if (e = ht(t), void 0 !== e)
								return e
						}
						if (e = ++Cr, 1073741824 & Cr && (Cr = 0), Ar)
							kr.set(t, e);
						else {
							if (void 0 !== Dr && Dr(t) === !1)
								throw Error("Non-extensible objects are not allowed as keys.");
							if (jr)
								Object.defineProperty(t, Rr, {
									enumerable : !1,
									configurable : !1,
									writable : !1,
									value : e
								});
							else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable)
								t.propertyIsEnumerable = function () {
									return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
								},
							t.propertyIsEnumerable[Rr] = e;
							else {
								if (void 0 === t.nodeType)
									throw Error("Unable to set a non-enumerable property on object.");
								t[Rr] = e
							}
						}
						return e
					}
					function ht(t) {
						if (t && t.nodeType > 0)
							switch (t.nodeType) {
							case 1:
								return t.uniqueID;
							case 9:
								return t.documentElement && t.documentElement.uniqueID
							}
					}
					function ft(t) {
						Z(t !== 1 / 0, "Cannot perform this action with an infinite size.")
					}
					function ct(t) {
						return null === t || void 0 === t ? St() : _t(t) && !h(t) ? t : St().withMutations(function (e) {
							var n = r(t);
							ft(n.size),
							n.forEach(function (t, r) {
								return e.set(r, t)
							})
						})
					}
					function _t(t) {
						return !(!t || !t[Pr])
					}
					function pt(t, e) {
						this.ownerID = t,
						this.entries = e
					}
					function lt(t, e, r) {
						this.ownerID = t,
						this.bitmap = e,
						this.nodes = r
					}
					function vt(t, e, r) {
						this.ownerID = t,
						this.count = e,
						this.nodes = r
					}
					function yt(t, e, r) {
						this.ownerID = t,
						this.keyHash = e,
						this.entries = r
					}
					function dt(t, e, r) {
						this.ownerID = t,
						this.keyHash = e,
						this.entry = r
					}
					function gt(t, e, r) {
						this._type = e,
						this._reverse = r,
						this._stack = t._root && wt(t._root)
					}
					function mt(t, e) {
						return S(t, e[0], e[1])
					}
					function wt(t, e) {
						return {
							node : t,
							index : 0,
							__prev : e
						}
					}
					function bt(t, e, r, n) {
						var i = Object.create(Wr);
						return i.size = t,
						i._root = e,
						i.__ownerID = r,
						i.__hash = n,
						i.__altered = !1,
						i
					}
					function St() {
						return Br || (Br = bt(0))
					}
					function zt(t, e, r) {
						var n,
						i;
						if (t._root) {
							var o = f(dr),
							u = f(gr);
							if (n = It(t._root, t.__ownerID, 0, void 0, e, r, o, u), !u.value)
								return t;
							i = t.size + (o.value ? r === yr ? -1 : 1 : 0)
						} else {
							if (r === yr)
								return t;
							i = 1,
							n = new pt(t.__ownerID, [[e, r]])
						}
						return t.__ownerID ? (t.size = i, t._root = n, t.__hash = void 0, t.__altered = !0, t) : n ? bt(i, n) : St()
					}
					function It(t, e, r, n, i, o, u, s) {
						return t ? t.update(e, r, n, i, o, u, s) : o === yr ? t : (c(s), c(u), new dt(e, n, [i, o]))
					}
					function Mt(t) {
						return t.constructor === dt || t.constructor === yt
					}
					function qt(t, e, r, n, i) {
						if (t.keyHash === n)
							return new yt(e, n, [t.entry, i]);
						var o,
						u = (0 === r ? t.keyHash : t.keyHash >>> r) & vr,
						s = (0 === r ? n : n >>> r) & vr,
						a = u === s ? [qt(t, e, r + pr, n, i)] : (o = new dt(e, n, i), s > u ? [t, o] : [o, t]);
						return new lt(e, 1 << u | 1 << s, a)
					}
					function Ot(t, e, r, n) {
						t || (t = new _);
						for (var i = new dt(t, ot(r), [r, n]), o = 0; e.length > o; o++) {
							var u = e[o];
							i = i.update(t, 0, void 0, u[0], u[1])
						}
						return i
					}
					function Et(t, e, r, n) {
						for (var i = 0, o = 0, u = Array(r), s = 0, a = 1, h = e.length; h > s; s++, a <<= 1) {
							var f = e[s];
							void 0 !== f && s !== n && (i |= a, u[o++] = f)
						}
						return new lt(t, i, u)
					}
					function kt(t, e, r, n, i) {
						for (var o = 0, u = Array(lr), s = 0; 0 !== r; s++, r >>>= 1)
							u[s] = 1 & r ? e[o++] : void 0;
						return u[n] = i,
						new vt(t, o + 1, u)
					}
					function xt(t, e, n) {
						for (var i = [], u = 0; n.length > u; u++) {
							var s = n[u],
							a = r(s);
							o(s) || (a = a.map(function (t) {
										return N(t)
									})),
							i.push(a)
						}
						return At(t, e, i)
					}
					function Dt(t, e, r) {
						return t && t.mergeDeep && o(e) ? t.mergeDeep(e) : Q(t, e) ? t : e
					}
					function jt(t) {
						return function (e, r, n) {
							if (e && e.mergeDeepWith && o(r))
								return e.mergeDeepWith(t, r);
							var i = t(e, r, n);
							return Q(e, i) ? e : i
						}
					}
					function At(t, e, r) {
						return r = r.filter(function (t) {
								return 0 !== t.size
							}),
						0 === r.length ? t : 0 !== t.size || t.__ownerID || 1 !== r.length ? t.withMutations(function (t) {
							for (var n = e ? function (r, n) {
								t.update(n, yr, function (t) {
									return t === yr ? r : e(t, r, n)
								})
							}
								 : function (e, r) {
								t.set(r, e)
							}, i = 0; r.length > i; i++)
								r[i].forEach(n)
						}) : t.constructor(r[0])
					}
					function Ct(t, e, r, n) {
						var i = t === yr,
						o = e.next();
						if (o.done) {
							var u = i ? r : t,
							s = n(u);
							return s === u ? t : s
						}
						Z(i || t && t.set, "invalid keyPath");
						var a = o.value,
						h = i ? yr : t.get(a, yr),
						f = Ct(h, e, r, n);
						return f === h ? t : f === yr ? t.remove(a) : (i ? St() : t).set(a, f)
					}
					function Rt(t) {
						return t -= t >> 1 & 1431655765,
						t = (858993459 & t) + (t >> 2 & 858993459),
						t = t + (t >> 4) & 252645135,
						t += t >> 8,
						t += t >> 16,
						127 & t
					}
					function Kt(t, e, r, n) {
						var i = n ? t : p(t);
						return i[e] = r,
						i
					}
					function Ut(t, e, r, n) {
						var i = t.length + 1;
						if (n && e + 1 === i)
							return t[e] = r, t;
						for (var o = Array(i), u = 0, s = 0; i > s; s++)
							s === e ? (o[s] = r, u = -1) : o[s] = t[s + u];
						return o
					}
					function Tt(t, e, r) {
						var n = t.length - 1;
						if (r && e === n)
							return t.pop(), t;
						for (var i = Array(n), o = 0, u = 0; n > u; u++)
							u === e && (o = 1), i[u] = t[u + o];
						return i
					}
					function Lt(t) {
						var e = Jt();
						if (null === t || void 0 === t)
							return e;
						if (Pt(t))
							return t;
						var r = n(t),
						i = r.size;
						return 0 === i ? e : (ft(i), i > 0 && lr > i ? Ht(0, i, pr, null, new Wt(r.toArray())) : e.withMutations(function (t) {
								t.setSize(i),
								r.forEach(function (e, r) {
									return t.set(r, e)
								})
							}))
					}
					function Pt(t) {
						return !(!t || !t[Vr])
					}
					function Wt(t, e) {
						this.array = t,
						this.ownerID = e
					}
					function Bt(t, e) {
						function r(t, e, r) {
							return 0 === e ? n(t, r) : i(t, e, r)
						}
						function n(t, r) {
							var n = r === s ? a && a.array : t && t.array,
							i = r > o ? 0 : o - r,
							h = u - r;
							return h > lr && (h = lr),
							function () {
								if (i === h)
									return Qr;
								var t = e ? --h : i++;
								return n && n[t]
							}
						}
						function i(t, n, i) {
							var s,
							a = t && t.array,
							h = i > o ? 0 : o - i >> n,
							f = (u - i >> n) + 1;
							return f > lr && (f = lr),
							function () {
								for (; ; ) {
									if (s) {
										var t = s();
										if (t !== Qr)
											return t;
										s = null
									}
									if (h === f)
										return Qr;
									var o = e ? --f : h++;
									s = r(a && a[o], n - pr, i + (o << n))
								}
							}
						}
						var o = t._origin,
						u = t._capacity,
						s = Gt(u),
						a = t._tail;
						return r(t._root, t._level, 0)
					}
					function Ht(t, e, r, n, i, o, u) {
						var s = Object.create(Fr);
						return s.size = e - t,
						s._origin = t,
						s._capacity = e,
						s._level = r,
						s._root = n,
						s._tail = i,
						s.__ownerID = o,
						s.__hash = u,
						s.__altered = !1,
						s
					}
					function Jt() {
						return Yr || (Yr = Ht(0, 0, pr))
					}
					function Nt(t, e, r) {
						if (e = v(t, e), e !== e)
							return t;
						if (e >= t.size || 0 > e)
							return t.withMutations(function (t) {
								0 > e ? Qt(t, e).set(0, r) : Qt(t, 0, e + 1).set(e, r)
							});
						e += t._origin;
						var n = t._tail,
						i = t._root,
						o = f(gr);
						return e < Gt(t._capacity) ? i = Vt(i, t.__ownerID, t._level, e, r, o) : n = Vt(n, t.__ownerID, 0, e, r, o),
						o.value ? t.__ownerID ? (t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t) : Ht(t._origin, t._capacity, t._level, i, n) : t
					}
					function Vt(t, e, r, n, i, o) {
						var u = n >>> r & vr,
						s = t && t.array.length > u;
						if (!s && void 0 === i)
							return t;
						var a;
						if (r > 0) {
							var h = t && t.array[u],
							f = Vt(h, e, r - pr, n, i, o);
							return f === h ? t : (a = Ft(t, e), a.array[u] = f, a)
						}
						return s && t.array[u] === i ? t : (c(o), a = Ft(t, e), void 0 === i && u === a.array.length - 1 ? a.array.pop() : a.array[u] = i, a)
					}
					function Ft(t, e) {
						return e && t && e === t.ownerID ? t : new Wt(t ? t.array.slice() : [], e)
					}
					function Yt(t, e) {
						if (e >= Gt(t._capacity))
							return t._tail;
						if (1 << t._level + pr > e) {
							for (var r = t._root, n = t._level; r && n > 0; )
								r = r.array[e >>> n & vr], n -= pr;
							return r
						}
					}
					function Qt(t, e, r) {
						void 0 !== e && (e = 0 | e),
						void 0 !== r && (r = 0 | r);
						var n = t.__ownerID || new _,
						i = t._origin,
						o = t._capacity,
						u = i + e,
						s = void 0 === r ? o : 0 > r ? o + r : i + r;
						if (u === i && s === o)
							return t;
						if (u >= s)
							return t.clear();
						for (var a = t._level, h = t._root, f = 0; 0 > u + f; )
							h = new Wt(h && h.array.length ? [void 0, h] : [], n), a += pr, f += 1 << a;
						f && (u += f, i += f, s += f, o += f);
						for (var c = Gt(o), p = Gt(s); p >= 1 << a + pr; )
							h = new Wt(h && h.array.length ? [h] : [], n), a += pr;
						var l = t._tail,
						v = c > p ? Yt(t, s - 1) : p > c ? new Wt([], n) : l;
						if (l && p > c && o > u && l.array.length) {
							h = Ft(h, n);
							for (var y = h, d = a; d > pr; d -= pr) {
								var g = c >>> d & vr;
								y = y.array[g] = Ft(y.array[g], n)
							}
							y.array[c >>> pr & vr] = l
						}
						if (o > s && (v = v && v.removeAfter(n, 0, s)), p > u) {
							if (u > i || c > p) {
								for (f = 0; h; ) {
									var m = u >>> a & vr;
									if (m !== p >>> a & vr)
										break;
									m && (f += (1 << a) * m),
									a -= pr,
									h = h.array[m]
								}
								h && u > i && (h = h.removeBefore(n, a, u - f)),
								h && c > p && (h = h.removeAfter(n, a, p - f)),
								f && (u -= f, s -= f)
							}
						} else
							u -= p, s -= p, a = pr, h = null, v = v && v.removeBefore(n, 0, u);
						return t.__ownerID ? (t.size = s - u, t._origin = u, t._capacity = s, t._level = a, t._root = h, t._tail = v, t.__hash = void 0, t.__altered = !0, t) : Ht(u, s, a, h, v)
					}
					function Xt(t, e, r) {
						for (var i = [], u = 0, s = 0; r.length > s; s++) {
							var a = r[s],
							h = n(a);
							h.size > u && (u = h.size),
							o(a) || (h = h.map(function (t) {
										return N(t)
									})),
							i.push(h)
						}
						return u > t.size && (t = t.setSize(u)),
						At(t, e, i)
					}
					function Gt(t) {
						return lr > t ? 0 : t - 1 >>> pr << pr
					}
					function Zt(t) {
						return null === t || void 0 === t ? ee() : $t(t) ? t : ee().withMutations(function (e) {
							var n = r(t);
							ft(n.size),
							n.forEach(function (t, r) {
								return e.set(r, t)
							})
						})
					}
					function $t(t) {
						return _t(t) && h(t)
					}
					function te(t, e, r, n) {
						var i = Object.create(Zt.prototype);
						return i.size = t ? t.size : 0,
						i._map = t,
						i._list = e,
						i.__ownerID = r,
						i.__hash = n,
						i
					}
					function ee() {
						return Xr || (Xr = te(St(), Jt()))
					}
					function re(t, e, r) {
						var n,
						i,
						o = t._map,
						u = t._list,
						s = o.get(e),
						a = void 0 !== s;
						if (r === yr) {
							if (!a)
								return t;
							lr > u.size || 2 * o.size > u.size ? (n = o.remove(e), i = s === u.size - 1 ? u.pop() : u.set(s, void 0)) : (i = u.filter(function (t, e) {
										return void 0 !== t && s !== e
									}), n = i.toKeyedSeq().map(function (t) {
										return t[0]
									}).flip().toMap(), t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
						} else if (a) {
							if (r === u.get(s)[1])
								return t;
							n = o,
							i = u.set(s, [e, r])
						} else
							n = o.set(e, u.size), i = u.set(u.size, [e, r]);
						return t.__ownerID ? (t.size = n.size, t._map = n, t._list = i, t.__hash = void 0, t) : te(n, i)
					}
					function ne(t, e) {
						this._iter = t,
						this._useKeys = e,
						this.size = t.size
					}
					function ie(t) {
						this._iter = t,
						this.size = t.size
					}
					function oe(t) {
						this._iter = t,
						this.size = t.size
					}
					function ue(t) {
						this._iter = t,
						this.size = t.size
					}
					function se(t) {
						var e = Ee(t);
						return e._iter = t,
						e.size = t.size,
						e.flip = function () {
							return t
						},
						e.reverse = function () {
							var e = t.reverse.apply(this);
							return e.flip = function () {
								return t.reverse()
							},
							e
						},
						e.has = function (e) {
							return t.includes(e)
						},
						e.includes = function (e) {
							return t.has(e)
						},
						e.cacheResult = ke,
						e.__iterateUncached = function (e, r) {
							var n = this;
							return t.__iterate(function (t, r) {
								return e(r, t, n) !== !1
							}, r)
						},
						e.__iteratorUncached = function (e, r) {
							if (e === br) {
								var n = t.__iterator(e, r);
								return new b(function () {
									var t = n.next();
									if (!t.done) {
										var e = t.value[0];
										t.value[0] = t.value[1],
										t.value[1] = e
									}
									return t
								})
							}
							return t.__iterator(e === wr ? mr : wr, r)
						},
						e
					}
					function ae(t, e, r) {
						var n = Ee(t);
						return n.size = t.size,
						n.has = function (e) {
							return t.has(e)
						},
						n.get = function (n, i) {
							var o = t.get(n, yr);
							return o === yr ? i : e.call(r, o, n, t)
						},
						n.__iterateUncached = function (n, i) {
							var o = this;
							return t.__iterate(function (t, i, u) {
								return n(e.call(r, t, i, u), i, o) !== !1
							}, i)
						},
						n.__iteratorUncached = function (n, i) {
							var o = t.__iterator(br, i);
							return new b(function () {
								var i = o.next();
								if (i.done)
									return i;
								var u = i.value,
								s = u[0];
								return S(n, s, e.call(r, u[1], s, t), i)
							})
						},
						n
					}
					function he(t, e) {
						var r = Ee(t);
						return r._iter = t,
						r.size = t.size,
						r.reverse = function () {
							return t
						},
						t.flip && (r.flip = function () {
							var e = se(t);
							return e.reverse = function () {
								return t.flip()
							},
							e
						}),
						r.get = function (r, n) {
							return t.get(e ? r : -1 - r, n)
						},
						r.has = function (r) {
							return t.has(e ? r : -1 - r)
						},
						r.includes = function (e) {
							return t.includes(e)
						},
						r.cacheResult = ke,
						r.__iterate = function (e, r) {
							var n = this;
							return t.__iterate(function (t, r) {
								return e(t, r, n)
							}, !r)
						},
						r.__iterator = function (e, r) {
							return t.__iterator(e, !r)
						},
						r
					}
					function fe(t, e, r, n) {
						var i = Ee(t);
						return n && (i.has = function (n) {
							var i = t.get(n, yr);
							return i !== yr && !!e.call(r, i, n, t)
						}, i.get = function (n, i) {
							var o = t.get(n, yr);
							return o !== yr && e.call(r, o, n, t) ? o : i
						}),
						i.__iterateUncached = function (i, o) {
							var u = this,
							s = 0;
							return t.__iterate(function (t, o, a) {
								return e.call(r, t, o, a) ? (s++, i(t, n ? o : s - 1, u)) : void 0
							}, o),
							s
						},
						i.__iteratorUncached = function (i, o) {
							var u = t.__iterator(br, o),
							s = 0;
							return new b(function () {
								for (; ; ) {
									var o = u.next();
									if (o.done)
										return o;
									var a = o.value,
									h = a[0],
									f = a[1];
									if (e.call(r, f, h, t))
										return S(i, n ? h : s++, f, o)
								}
							})
						},
						i
					}
					function ce(t, e, r) {
						var n = ct().asMutable();
						return t.__iterate(function (i, o) {
							n.update(e.call(r, i, o, t), 0, function (t) {
								return t + 1
							})
						}),
						n.asImmutable()
					}
					function _e(t, e, r) {
						var n = u(t),
						i = (h(t) ? Zt() : ct()).asMutable();
						t.__iterate(function (o, u) {
							i.update(e.call(r, o, u, t), function (t) {
								return t = t || [],
								t.push(n ? [u, o] : o),
								t
							})
						});
						var o = Oe(t);
						return i.map(function (e) {
							return Ie(t, o(e))
						})
					}
					function pe(t, e, r, n) {
						var i = t.size;
						if (void 0 !== e && (e = 0 | e), void 0 !== r && (r = 0 | r), d(e, r, i))
							return t;
						var o = g(e, i),
						u = m(r, i);
						if (o !== o || u !== u)
							return pe(t.toSeq().cacheResult(), e, r, n);
						var s,
						a = u - o;
						a === a && (s = 0 > a ? 0 : a);
						var h = Ee(t);
						return h.size = 0 === s ? s : t.size && s || void 0,
						n || !U(t) || 0 > s || (h.get = function (e, r) {
							return e = v(this, e),
							e >= 0 && s > e ? t.get(e + o, r) : r
						}),
						h.__iterateUncached = function (e, r) {
							var i = this;
							if (0 === s)
								return 0;
							if (r)
								return this.cacheResult().__iterate(e, r);
							var u = 0,
							a = !0,
							h = 0;
							return t.__iterate(function (t, r) {
								return a && (a = u++ < o) ? void 0 : (h++, e(t, n ? r : h - 1, i) !== !1 && h !== s)
							}),
							h
						},
						h.__iteratorUncached = function (e, r) {
							if (0 !== s && r)
								return this.cacheResult().__iterator(e, r);
							var i = 0 !== s && t.__iterator(e, r),
							u = 0,
							a = 0;
							return new b(function () {
								for (; u++ < o; )
									i.next();
								if (++a > s)
									return z();
								var t = i.next();
								return n || e === wr ? t : e === mr ? S(e, a - 1, void 0, t) : S(e, a - 1, t.value[1], t)
							})
						},
						h
					}
					function le(t, e, r) {
						var n = Ee(t);
						return n.__iterateUncached = function (n, i) {
							var o = this;
							if (i)
								return this.cacheResult().__iterate(n, i);
							var u = 0;
							return t.__iterate(function (t, i, s) {
								return e.call(r, t, i, s) && ++u && n(t, i, o)
							}),
							u
						},
						n.__iteratorUncached = function (n, i) {
							var o = this;
							if (i)
								return this.cacheResult().__iterator(n, i);
							var u = t.__iterator(br, i),
							s = !0;
							return new b(function () {
								if (!s)
									return z();
								var t = u.next();
								if (t.done)
									return t;
								var i = t.value,
								a = i[0],
								h = i[1];
								return e.call(r, h, a, o) ? n === br ? t : S(n, a, h, t) : (s = !1, z())
							})
						},
						n
					}
					function ve(t, e, r, n) {
						var i = Ee(t);
						return i.__iterateUncached = function (i, o) {
							var u = this;
							if (o)
								return this.cacheResult().__iterate(i, o);
							var s = !0,
							a = 0;
							return t.__iterate(function (t, o, h) {
								return s && (s = e.call(r, t, o, h)) ? void 0 : (a++, i(t, n ? o : a - 1, u))
							}),
							a
						},
						i.__iteratorUncached = function (i, o) {
							var u = this;
							if (o)
								return this.cacheResult().__iterator(i, o);
							var s = t.__iterator(br, o),
							a = !0,
							h = 0;
							return new b(function () {
								var t,
								o,
								f;
								do {
									if (t = s.next(), t.done)
										return n || i === wr ? t : i === mr ? S(i, h++, void 0, t) : S(i, h++, t.value[1], t);
									var c = t.value;
									o = c[0],
									f = c[1],
									a && (a = e.call(r, f, o, u))
								} while (a);
								return i === br ? t : S(i, o, f, t)
							})
						},
						i
					}
					function ye(t, e) {
						var n = u(t),
						i = [t].concat(e).map(function (t) {
							return o(t) ? n && (t = r(t)) : t = n ? L(t) : P(Array.isArray(t) ? t : [t]),
							t
						}).filter(function (t) {
							return 0 !== t.size
						});
						if (0 === i.length)
							return t;
						if (1 === i.length) {
							var a = i[0];
							if (a === t || n && u(a) || s(t) && s(a))
								return a
						}
						var h = new A(i);
						return n ? h = h.toKeyedSeq() : s(t) || (h = h.toSetSeq()),
						h = h.flatten(!0),
						h.size = i.reduce(function (t, e) {
								if (void 0 !== t) {
									var r = e.size;
									if (void 0 !== r)
										return t + r
								}
							}, 0),
						h
					}
					function de(t, e, r) {
						var n = Ee(t);
						return n.__iterateUncached = function (n, i) {
							function u(t, h) {
								var f = this;
								t.__iterate(function (t, i) {
									return e && h >= e || !o(t) ? n(t, r ? i : s++, f) === !1 && (a = !0) : u(t, h + 1),
									!a
								}, i)
							}
							var s = 0,
							a = !1;
							return u(t, 0),
							s
						},
						n.__iteratorUncached = function (n, i) {
							var u = t.__iterator(n, i),
							s = [],
							a = 0;
							return new b(function () {
								for (; u; ) {
									var t = u.next();
									if (t.done === !1) {
										var h = t.value;
										if (n === br && (h = h[1]), e && s.length >= e || !o(h))
											return r ? t : S(n, a++, h, t);
										s.push(u),
										u = h.__iterator(n, i)
									} else
										u = s.pop()
								}
								return z()
							})
						},
						n
					}
					function ge(t, e, r) {
						var n = Oe(t);
						return t.toSeq().map(function (i, o) {
							return n(e.call(r, i, o, t))
						}).flatten(!0)
					}
					function me(t, e) {
						var r = Ee(t);
						return r.size = t.size && 2 * t.size - 1,
						r.__iterateUncached = function (r, n) {
							var i = this,
							o = 0;
							return t.__iterate(function (t, n) {
								return (!o || r(e, o++, i) !== !1) && r(t, o++, i) !== !1
							}, n),
							o
						},
						r.__iteratorUncached = function (r, n) {
							var i,
							o = t.__iterator(wr, n),
							u = 0;
							return new b(function () {
								return (!i || u % 2) && (i = o.next(), i.done) ? i : u % 2 ? S(r, u++, e) : S(r, u++, i.value, i)
							})
						},
						r
					}
					function we(t, e, r) {
						e || (e = xe);
						var n = u(t),
						i = 0,
						o = t.toSeq().map(function (e, n) {
								return [n, e, i++, r ? r(e, n, t) : e]
							}).toArray();
						return o.sort(function (t, r) {
							return e(t[3], r[3]) || t[2] - r[2]
						}).forEach(n ? function (t, e) {
							o[e].length = 2
						}
							 : function (t, e) {
							o[e] = t[1]
						}),
						n ? x(o) : s(t) ? D(o) : j(o)
					}
					function be(t, e, r) {
						if (e || (e = xe), r) {
							var n = t.toSeq().map(function (e, n) {
									return [e, r(e, n, t)]
								}).reduce(function (t, r) {
									return Se(e, t[1], r[1]) ? r : t
								});
							return n && n[0]
						}
						return t.reduce(function (t, r) {
							return Se(e, t, r) ? r : t
						})
					}
					function Se(t, e, r) {
						var n = t(r, e);
						return 0 === n && r !== e && (void 0 === r || null === r || r !== r) || n > 0
					}
					function ze(t, r, n) {
						var i = Ee(t);
						return i.size = new A(n).map(function (t) {
								return t.size
							}).min(),
						i.__iterate = function (t, e) {
							for (var r, n = this.__iterator(wr, e), i = 0; !(r = n.next()).done && t(r.value, i++, this) !== !1; );
							return i
						},
						i.__iteratorUncached = function (t, i) {
							var o = n.map(function (t) {
									return t = e(t),
									q(i ? t.reverse() : t)
								}),
							u = 0,
							s = !1;
							return new b(function () {
								var e;
								return s || (e = o.map(function (t) {
											return t.next()
										}), s = e.some(function (t) {
											return t.done
										})),
								s ? z() : S(t, u++, r.apply(null, e.map(function (t) {
											return t.value
										})))
							})
						},
						i
					}
					function Ie(t, e) {
						return U(t) ? e : t.constructor(e)
					}
					function Me(t) {
						if (t !== Object(t))
							throw new TypeError("Expected [K, V] tuple: " + t)
					}
					function qe(t) {
						return ft(t.size),
						l(t)
					}
					function Oe(t) {
						return u(t) ? r : s(t) ? n : i
					}
					function Ee(t) {
						return Object.create((u(t) ? x : s(t) ? D : j).prototype)
					}
					function ke() {
						return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : k.prototype.cacheResult.call(this)
					}
					function xe(t, e) {
						return t > e ? 1 : e > t ? -1 : 0
					}
					function De(t) {
						var r = q(t);
						if (!r) {
							if (!E(t))
								throw new TypeError("Expected iterable or array-like: " + t);
							r = q(e(t))
						}
						return r
					}
					function je(t, e) {
						var r,
						n = function (o) {
							if (o instanceof n)
								return o;
							if (!(this instanceof n))
								return new n(o);
							if (!r) {
								r = !0;
								var u = Object.keys(t);
								Re(i, u),
								i.size = u.length,
								i._name = e,
								i._keys = u,
								i._defaultValues = t
							}
							this._map = ct(o)
						},
						i = n.prototype = Object.create(Gr);
						return i.constructor = n,
						n
					}
					function Ae(t, e, r) {
						var n = Object.create(Object.getPrototypeOf(t));
						return n._map = e,
						n.__ownerID = r,
						n
					}
					function Ce(t) {
						return t._name || t.constructor.name || "Record"
					}
					function Re(t, e) {
						try {
							e.forEach(Ke.bind(void 0, t))
						} catch (r) {}

					}
					function Ke(t, e) {
						Object.defineProperty(t, e, {
							get : function () {
								return this.get(e)
							},
							set : function (t) {
								Z(this.__ownerID, "Cannot set on an immutable record."),
								this.set(e, t)
							}
						})
					}
					function Ue(t) {
						return null === t || void 0 === t ? We() : Te(t) && !h(t) ? t : We().withMutations(function (e) {
							var r = i(t);
							ft(r.size),
							r.forEach(function (t) {
								return e.add(t)
							})
						})
					}
					function Te(t) {
						return !(!t || !t[Zr])
					}
					function Le(t, e) {
						return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e)
					}
					function Pe(t, e) {
						var r = Object.create($r);
						return r.size = t ? t.size : 0,
						r._map = t,
						r.__ownerID = e,
						r
					}
					function We() {
						return tn || (tn = Pe(St()))
					}
					function Be(t) {
						return null === t || void 0 === t ? Ne() : He(t) ? t : Ne().withMutations(function (e) {
							var r = i(t);
							ft(r.size),
							r.forEach(function (t) {
								return e.add(t)
							})
						})
					}
					function He(t) {
						return Te(t) && h(t)
					}
					function Je(t, e) {
						var r = Object.create(en);
						return r.size = t ? t.size : 0,
						r._map = t,
						r.__ownerID = e,
						r
					}
					function Ne() {
						return rn || (rn = Je(ee()))
					}
					function Ve(t) {
						return null === t || void 0 === t ? Qe() : Fe(t) ? t : Qe().unshiftAll(t)
					}
					function Fe(t) {
						return !(!t || !t[nn])
					}
					function Ye(t, e, r, n) {
						var i = Object.create(on);
						return i.size = t,
						i._head = e,
						i.__ownerID = r,
						i.__hash = n,
						i.__altered = !1,
						i
					}
					function Qe() {
						return un || (un = Ye(0))
					}
					function Xe(t, e) {
						var r = function (r) {
							t.prototype[r] = e[r]
						};
						return Object.keys(e).forEach(r),
						Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r),
						t
					}
					function Ge(t, e) {
						return e
					}
					function Ze(t, e) {
						return [e, t]
					}
					function $e(t) {
						return function () {
							return !t.apply(this, arguments)
						}
					}
					function tr(t) {
						return function () {
							return -t.apply(this, arguments)
						}
					}
					function er(t) {
						return "string" == typeof t ? JSON.stringify(t) : t
					}
					function rr() {
						return p(arguments)
					}
					function nr(t, e) {
						return e > t ? 1 : t > e ? -1 : 0
					}
					function ir(t) {
						if (t.size === 1 / 0)
							return 0;
						var e = h(t),
						r = u(t),
						n = e ? 1 : 0,
						i = t.__iterate(r ? e ? function (t, e) {
								n = 31 * n + ur(ot(t), ot(e)) | 0
							}
								 : function (t, e) {
								n = n + ur(ot(t), ot(e)) | 0
							}
								 : e ? function (t) {
								n = 31 * n + ot(t) | 0
							}
								 : function (t) {
								n = n + ot(t) | 0
							});
						return or(i, n)
					}
					function or(t, e) {
						return e = xr(e, 3432918353),
						e = xr(e << 15 | e >>> -15, 461845907),
						e = xr(e << 13 | e >>> -13, 5),
						e = (e + 3864292196 | 0)^t,
						e = xr(e^e >>> 16, 2246822507),
						e = xr(e^e >>> 13, 3266489909),
						e = it(e^e >>> 16)
					}
					function ur(t, e) {
						return t^e + 2654435769 + (t << 6) + (t >> 2) | 0
					}
					var sr = Array.prototype.slice;
					t(r, e),
					t(n, e),
					t(i, e),
					e.isIterable = o,
					e.isKeyed = u,
					e.isIndexed = s,
					e.isAssociative = a,
					e.isOrdered = h,
					e.Keyed = r,
					e.Indexed = n,
					e.Set = i;
					var ar = "@@__IMMUTABLE_ITERABLE__@@",
					hr = "@@__IMMUTABLE_KEYED__@@",
					fr = "@@__IMMUTABLE_INDEXED__@@",
					cr = "@@__IMMUTABLE_ORDERED__@@",
					_r = "delete",
					pr = 5,
					lr = 1 << pr,
					vr = lr - 1,
					yr = {},
					dr = {
						value : !1
					},
					gr = {
						value : !1
					},
					mr = 0,
					wr = 1,
					br = 2,
					Sr = "function" == typeof Symbol && Symbol.iterator,
					zr = "@@iterator",
					Ir = Sr || zr;
					b.prototype.toString = function () {
						return "[Iterator]"
					},
					b.KEYS = mr,
					b.VALUES = wr,
					b.ENTRIES = br,
					b.prototype.inspect = b.prototype.toSource = function () {
						return "" + this
					},
					b.prototype[Ir] = function () {
						return this
					},
					t(k, e),
					k.of = function () {
						return k(arguments)
					},
					k.prototype.toSeq = function () {
						return this
					},
					k.prototype.toString = function () {
						return this.__toString("Seq {", "}")
					},
					k.prototype.cacheResult = function () {
						return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length),
						this
					},
					k.prototype.__iterate = function (t, e) {
						return H(this, t, e, !0)
					},
					k.prototype.__iterator = function (t, e) {
						return J(this, t, e, !0)
					},
					t(x, k),
					x.prototype.toKeyedSeq = function () {
						return this
					},
					t(D, k),
					D.of = function () {
						return D(arguments)
					},
					D.prototype.toIndexedSeq = function () {
						return this
					},
					D.prototype.toString = function () {
						return this.__toString("Seq [", "]")
					},
					D.prototype.__iterate = function (t, e) {
						return H(this, t, e, !1)
					},
					D.prototype.__iterator = function (t, e) {
						return J(this, t, e, !1)
					},
					t(j, k),
					j.of = function () {
						return j(arguments)
					},
					j.prototype.toSetSeq = function () {
						return this
					},
					k.isSeq = U,
					k.Keyed = x,
					k.Set = j,
					k.Indexed = D;
					var Mr = "@@__IMMUTABLE_SEQ__@@";
					k.prototype[Mr] = !0,
					t(A, D),
					A.prototype.get = function (t, e) {
						return this.has(t) ? this._array[v(this, t)] : e
					},
					A.prototype.__iterate = function (t, e) {
						for (var r = this._array, n = r.length - 1, i = 0; n >= i; i++)
							if (t(r[e ? n - i : i], i, this) === !1)
								return i + 1;
						return i
					},
					A.prototype.__iterator = function (t, e) {
						var r = this._array,
						n = r.length - 1,
						i = 0;
						return new b(function () {
							return i > n ? z() : S(t, i, r[e ? n - i++ : i++])
						})
					},
					t(C, x),
					C.prototype.get = function (t, e) {
						return void 0 === e || this.has(t) ? this._object[t] : e
					},
					C.prototype.has = function (t) {
						return this._object.hasOwnProperty(t)
					},
					C.prototype.__iterate = function (t, e) {
						for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; i >= o; o++) {
							var u = n[e ? i - o : o];
							if (t(r[u], u, this) === !1)
								return o + 1
						}
						return o
					},
					C.prototype.__iterator = function (t, e) {
						var r = this._object,
						n = this._keys,
						i = n.length - 1,
						o = 0;
						return new b(function () {
							var u = n[e ? i - o : o];
							return o++ > i ? z() : S(t, u, r[u])
						})
					},
					C.prototype[cr] = !0,
					t(R, D),
					R.prototype.__iterateUncached = function (t, e) {
						if (e)
							return this.cacheResult().__iterate(t, e);
						var r = this._iterable,
						n = q(r),
						i = 0;
						if (M(n))
							for (var o; !(o = n.next()).done && t(o.value, i++, this) !== !1; );
						return i
					},
					R.prototype.__iteratorUncached = function (t, e) {
						if (e)
							return this.cacheResult().__iterator(t, e);
						var r = this._iterable,
						n = q(r);
						if (!M(n))
							return new b(z);
						var i = 0;
						return new b(function () {
							var e = n.next();
							return e.done ? e : S(t, i++, e.value)
						})
					},
					t(K, D),
					K.prototype.__iterateUncached = function (t, e) {
						if (e)
							return this.cacheResult().__iterate(t, e);
						for (var r = this._iterator, n = this._iteratorCache, i = 0; n.length > i; )
							if (t(n[i], i++, this) === !1)
								return i;
						for (var o; !(o = r.next()).done; ) {
							var u = o.value;
							if (n[i] = u, t(u, i++, this) === !1)
								break
						}
						return i
					},
					K.prototype.__iteratorUncached = function (t, e) {
						if (e)
							return this.cacheResult().__iterator(t, e);
						var r = this._iterator,
						n = this._iteratorCache,
						i = 0;
						return new b(function () {
							if (i >= n.length) {
								var e = r.next();
								if (e.done)
									return e;
								n[i] = e.value
							}
							return S(t, i, n[i++])
						})
					};
					var qr;
					t(G, D),
					G.prototype.toString = function () {
						return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
					},
					G.prototype.get = function (t, e) {
						return this.has(t) ? this._value : e
					},
					G.prototype.includes = function (t) {
						return Q(this._value, t)
					},
					G.prototype.slice = function (t, e) {
						var r = this.size;
						return d(t, e, r) ? this : new G(this._value, m(e, r) - g(t, r))
					},
					G.prototype.reverse = function () {
						return this
					},
					G.prototype.indexOf = function (t) {
						return Q(this._value, t) ? 0 : -1
					},
					G.prototype.lastIndexOf = function (t) {
						return Q(this._value, t) ? this.size : -1
					},
					G.prototype.__iterate = function (t, e) {
						for (var r = 0; this.size > r; r++)
							if (t(this._value, r, this) === !1)
								return r + 1;
						return r
					},
					G.prototype.__iterator = function (t, e) {
						var r = this,
						n = 0;
						return new b(function () {
							return r.size > n ? S(t, n++, r._value) : z()
						})
					},
					G.prototype.equals = function (t) {
						return t instanceof G ? Q(this._value, t._value) : X(t)
					};
					var Or;
					t($, D),
					$.prototype.toString = function () {
						return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]"
					},
					$.prototype.get = function (t, e) {
						return this.has(t) ? this._start + v(this, t) * this._step : e
					},
					$.prototype.includes = function (t) {
						var e = (t - this._start) / this._step;
						return e >= 0 && this.size > e && e === Math.floor(e)
					},
					$.prototype.slice = function (t, e) {
						return d(t, e, this.size) ? this : (t = g(t, this.size), e = m(e, this.size), e > t ? new $(this.get(t, this._end), this.get(e, this._end), this._step) : new $(0, 0))
					},
					$.prototype.indexOf = function (t) {
						var e = t - this._start;
						if (e % this._step === 0) {
							var r = e / this._step;
							if (r >= 0 && this.size > r)
								return r
						}
						return -1
					},
					$.prototype.lastIndexOf = function (t) {
						return this.indexOf(t)
					},
					$.prototype.__iterate = function (t, e) {
						for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; r >= o; o++) {
							if (t(i, o, this) === !1)
								return o + 1;
							i += e ? -n : n
						}
						return o
					},
					$.prototype.__iterator = function (t, e) {
						var r = this.size - 1,
						n = this._step,
						i = e ? this._start + r * n : this._start,
						o = 0;
						return new b(function () {
							var u = i;
							return i += e ? -n : n,
							o > r ? z() : S(t, o++, u)
						})
					},
					$.prototype.equals = function (t) {
						return t instanceof $ ? this._start === t._start && this._end === t._end && this._step === t._step : X(this, t)
					};
					var Er;
					t(tt, e),
					t(et, tt),
					t(rt, tt),
					t(nt, tt),
					tt.Keyed = et,
					tt.Indexed = rt,
					tt.Set = nt;
					var kr,
					xr = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
						t = 0 | t,
						e = 0 | e;
						var r = 65535 & t,
						n = 65535 & e;
						return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0
					},
					Dr = Object.isExtensible,
					jr = function () {
						try {
							return Object.defineProperty({}, "@", {}),
							!0
						} catch (t) {
							return !1
						}
					}
					(),
					Ar = "function" == typeof WeakMap;
					Ar && (kr = new WeakMap);
					var Cr = 0,
					Rr = "__immutablehash__";
					"function" == typeof Symbol && (Rr = Symbol(Rr));
					var Kr = 16,
					Ur = 255,
					Tr = 0,
					Lr = {};
					t(ct, et),
					ct.prototype.toString = function () {
						return this.__toString("Map {", "}")
					},
					ct.prototype.get = function (t, e) {
						return this._root ? this._root.get(0, void 0, t, e) : e
					},
					ct.prototype.set = function (t, e) {
						return zt(this, t, e)
					},
					ct.prototype.setIn = function (t, e) {
						return this.updateIn(t, yr, function () {
							return e
						})
					},
					ct.prototype.remove = function (t) {
						return zt(this, t, yr)
					},
					ct.prototype.deleteIn = function (t) {
						return this.updateIn(t, function () {
							return yr
						})
					},
					ct.prototype.update = function (t, e, r) {
						return 1 === arguments.length ? t(this) : this.updateIn([t], e, r)
					},
					ct.prototype.updateIn = function (t, e, r) {
						r || (r = e, e = void 0);
						var n = Ct(this, De(t), e, r);
						return n === yr ? void 0 : n
					},
					ct.prototype.clear = function () {
						return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : St()
					},
					ct.prototype.merge = function () {
						return xt(this, void 0, arguments)
					},
					ct.prototype.mergeWith = function (t) {
						var e = sr.call(arguments, 1);
						return xt(this, t, e)
					},
					ct.prototype.mergeIn = function (t) {
						var e = sr.call(arguments, 1);
						return this.updateIn(t, St(), function (t) {
							return "function" == typeof t.merge ? t.merge.apply(t, e) : e[e.length - 1]
						})
					},
					ct.prototype.mergeDeep = function () {
						return xt(this, Dt, arguments)
					},
					ct.prototype.mergeDeepWith = function (t) {
						var e = sr.call(arguments, 1);
						return xt(this, jt(t), e)
					},
					ct.prototype.mergeDeepIn = function (t) {
						var e = sr.call(arguments, 1);
						return this.updateIn(t, St(), function (t) {
							return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, e) : e[e.length - 1]
						})
					},
					ct.prototype.sort = function (t) {
						return Zt(we(this, t))
					},
					ct.prototype.sortBy = function (t, e) {
						return Zt(we(this, e, t))
					},
					ct.prototype.withMutations = function (t) {
						var e = this.asMutable();
						return t(e),
						e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
					},
					ct.prototype.asMutable = function () {
						return this.__ownerID ? this : this.__ensureOwner(new _)
					},
					ct.prototype.asImmutable = function () {
						return this.__ensureOwner()
					},
					ct.prototype.wasAltered = function () {
						return this.__altered
					},
					ct.prototype.__iterator = function (t, e) {
						return new gt(this, t, e)
					},
					ct.prototype.__iterate = function (t, e) {
						var r = this,
						n = 0;
						return this._root && this._root.iterate(function (e) {
							return n++,
							t(e[1], e[0], r)
						}, e),
						n
					},
					ct.prototype.__ensureOwner = function (t) {
						return t === this.__ownerID ? this : t ? bt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
					},
					ct.isMap = _t;
					var Pr = "@@__IMMUTABLE_MAP__@@",
					Wr = ct.prototype;
					Wr[Pr] = !0,
					Wr[_r] = Wr.remove,
					Wr.removeIn = Wr.deleteIn,
					pt.prototype.get = function (t, e, r, n) {
						for (var i = this.entries, o = 0, u = i.length; u > o; o++)
							if (Q(r, i[o][0]))
								return i[o][1];
						return n
					},
					pt.prototype.update = function (t, e, r, n, i, o, u) {
						for (var s = i === yr, a = this.entries, h = 0, f = a.length; f > h && !Q(n, a[h][0]); h++);
						var _ = f > h;
						if (_ ? a[h][1] === i : s)
							return this;
						if (c(u), (s || !_) && c(o), !s || 1 !== a.length) {
							if (!_ && !s && a.length >= Hr)
								return Ot(t, a, n, i);
							var l = t && t === this.ownerID,
							v = l ? a : p(a);
							return _ ? s ? h === f - 1 ? v.pop() : v[h] = v.pop() : v[h] = [n, i] : v.push([n, i]),
							l ? (this.entries = v, this) : new pt(t, v)
						}
					},
					lt.prototype.get = function (t, e, r, n) {
						void 0 === e && (e = ot(r));
						var i = 1 << ((0 === t ? e : e >>> t) & vr),
						o = this.bitmap;
						return 0 === (o & i) ? n : this.nodes[Rt(o & i - 1)].get(t + pr, e, r, n)
					},
					lt.prototype.update = function (t, e, r, n, i, o, u) {
						void 0 === r && (r = ot(n));
						var s = (0 === e ? r : r >>> e) & vr,
						a = 1 << s,
						h = this.bitmap,
						f = 0 !== (h & a);
						if (!f && i === yr)
							return this;
						var c = Rt(h & a - 1),
						_ = this.nodes,
						p = f ? _[c] : void 0,
						l = It(p, t, e + pr, r, n, i, o, u);
						if (l === p)
							return this;
						if (!f && l && _.length >= Jr)
							return kt(t, _, h, s, l);
						if (f && !l && 2 === _.length && Mt(_[1^c]))
							return _[1^c];
						if (f && l && 1 === _.length && Mt(l))
							return l;
						var v = t && t === this.ownerID,
						y = f ? l ? h : h^a : h | a,
						d = f ? l ? Kt(_, c, l, v) : Tt(_, c, v) : Ut(_, c, l, v);
						return v ? (this.bitmap = y, this.nodes = d, this) : new lt(t, y, d)
					},
					vt.prototype.get = function (t, e, r, n) {
						void 0 === e && (e = ot(r));
						var i = (0 === t ? e : e >>> t) & vr,
						o = this.nodes[i];
						return o ? o.get(t + pr, e, r, n) : n
					},
					vt.prototype.update = function (t, e, r, n, i, o, u) {
						void 0 === r && (r = ot(n));
						var s = (0 === e ? r : r >>> e) & vr,
						a = i === yr,
						h = this.nodes,
						f = h[s];
						if (a && !f)
							return this;
						var c = It(f, t, e + pr, r, n, i, o, u);
						if (c === f)
							return this;
						var _ = this.count;
						if (f) {
							if (!c && (_--, Nr > _))
								return Et(t, h, _, s)
						} else
							_++;
						var p = t && t === this.ownerID,
						l = Kt(h, s, c, p);
						return p ? (this.count = _, this.nodes = l, this) : new vt(t, _, l)
					},
					yt.prototype.get = function (t, e, r, n) {
						for (var i = this.entries, o = 0, u = i.length; u > o; o++)
							if (Q(r, i[o][0]))
								return i[o][1];
						return n
					},
					yt.prototype.update = function (t, e, r, n, i, o, u) {
						void 0 === r && (r = ot(n));
						var s = i === yr;
						if (r !== this.keyHash)
							return s ? this : (c(u), c(o), qt(this, t, e, r, [n, i]));
						for (var a = this.entries, h = 0, f = a.length; f > h && !Q(n, a[h][0]); h++);
						var _ = f > h;
						if (_ ? a[h][1] === i : s)
							return this;
						if (c(u), (s || !_) && c(o), s && 2 === f)
							return new dt(t, this.keyHash, a[1^h]);
						var l = t && t === this.ownerID,
						v = l ? a : p(a);
						return _ ? s ? h === f - 1 ? v.pop() : v[h] = v.pop() : v[h] = [n, i] : v.push([n, i]),
						l ? (this.entries = v, this) : new yt(t, this.keyHash, v)
					},
					dt.prototype.get = function (t, e, r, n) {
						return Q(r, this.entry[0]) ? this.entry[1] : n
					},
					dt.prototype.update = function (t, e, r, n, i, o, u) {
						var s = i === yr,
						a = Q(n, this.entry[0]);
						return (a ? i === this.entry[1] : s) ? this : (c(u), s ? void c(o) : a ? t && t === this.ownerID ? (this.entry[1] = i, this) : new dt(t, this.keyHash, [n, i]) : (c(o), qt(this, t, e, ot(n), [n, i])))
					},
					pt.prototype.iterate = yt.prototype.iterate = function (t, e) {
						for (var r = this.entries, n = 0, i = r.length - 1; i >= n; n++)
							if (t(r[e ? i - n : n]) === !1)
								return !1
					},
					lt.prototype.iterate = vt.prototype.iterate = function (t, e) {
						for (var r = this.nodes, n = 0, i = r.length - 1; i >= n; n++) {
							var o = r[e ? i - n : n];
							if (o && o.iterate(t, e) === !1)
								return !1
						}
					},
					dt.prototype.iterate = function (t, e) {
						return t(this.entry)
					},
					t(gt, b),
					gt.prototype.next = function () {
						for (var t = this._type, e = this._stack; e; ) {
							var r,
							n = e.node,
							i = e.index++;
							if (n.entry) {
								if (0 === i)
									return mt(t, n.entry)
							} else if (n.entries) {
								if (r = n.entries.length - 1, r >= i)
									return mt(t, n.entries[this._reverse ? r - i : i])
							} else if (r = n.nodes.length - 1, r >= i) {
								var o = n.nodes[this._reverse ? r - i : i];
								if (o) {
									if (o.entry)
										return mt(t, o.entry);
									e = this._stack = wt(o, e)
								}
								continue
							}
							e = this._stack = this._stack.__prev
						}
						return z()
					};
					var Br,
					Hr = lr / 4,
					Jr = lr / 2,
					Nr = lr / 4;
					t(Lt, rt),
					Lt.of = function () {
						return this(arguments)
					},
					Lt.prototype.toString = function () {
						return this.__toString("List [", "]")
					},
					Lt.prototype.get = function (t, e) {
						if (t = v(this, t), t >= 0 && this.size > t) {
							t += this._origin;
							var r = Yt(this, t);
							return r && r.array[t & vr]
						}
						return e
					},
					Lt.prototype.set = function (t, e) {
						return Nt(this, t, e)
					},
					Lt.prototype.remove = function (t) {
						return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this
					},
					Lt.prototype.insert = function (t, e) {
						return this.splice(t, 0, e)
					},
					Lt.prototype.clear = function () {
						return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = pr, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : Jt()
					},
					Lt.prototype.push = function () {
						var t = arguments,
						e = this.size;
						return this.withMutations(function (r) {
							Qt(r, 0, e + t.length);
							for (var n = 0; t.length > n; n++)
								r.set(e + n, t[n])
						})
					},
					Lt.prototype.pop = function () {
						return Qt(this, 0, -1)
					},
					Lt.prototype.unshift = function () {
						var t = arguments;
						return this.withMutations(function (e) {
							Qt(e, -t.length);
							for (var r = 0; t.length > r; r++)
								e.set(r, t[r])
						})
					},
					Lt.prototype.shift = function () {
						return Qt(this, 1)
					},
					Lt.prototype.merge = function () {
						return Xt(this, void 0, arguments)
					},
					Lt.prototype.mergeWith = function (t) {
						var e = sr.call(arguments, 1);
						return Xt(this, t, e)
					},
					Lt.prototype.mergeDeep = function () {
						return Xt(this, Dt, arguments)
					},
					Lt.prototype.mergeDeepWith = function (t) {
						var e = sr.call(arguments, 1);
						return Xt(this, jt(t), e)
					},
					Lt.prototype.setSize = function (t) {
						return Qt(this, 0, t)
					},
					Lt.prototype.slice = function (t, e) {
						var r = this.size;
						return d(t, e, r) ? this : Qt(this, g(t, r), m(e, r))
					},
					Lt.prototype.__iterator = function (t, e) {
						var r = 0,
						n = Bt(this, e);
						return new b(function () {
							var e = n();
							return e === Qr ? z() : S(t, r++, e)
						})
					},
					Lt.prototype.__iterate = function (t, e) {
						for (var r, n = 0, i = Bt(this, e); (r = i()) !== Qr && t(r, n++, this) !== !1; );
						return n
					},
					Lt.prototype.__ensureOwner = function (t) {
						return t === this.__ownerID ? this : t ? Ht(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this)
					},
					Lt.isList = Pt;
					var Vr = "@@__IMMUTABLE_LIST__@@",
					Fr = Lt.prototype;
					Fr[Vr] = !0,
					Fr[_r] = Fr.remove,
					Fr.setIn = Wr.setIn,
					Fr.deleteIn = Fr.removeIn = Wr.removeIn,
					Fr.update = Wr.update,
					Fr.updateIn = Wr.updateIn,
					Fr.mergeIn = Wr.mergeIn,
					Fr.mergeDeepIn = Wr.mergeDeepIn,
					Fr.withMutations = Wr.withMutations,
					Fr.asMutable = Wr.asMutable,
					Fr.asImmutable = Wr.asImmutable,
					Fr.wasAltered = Wr.wasAltered,
					Wt.prototype.removeBefore = function (t, e, r) {
						if (r === e ? 1 << e : 0 === this.array.length)
							return this;
						var n = r >>> e & vr;
						if (n >= this.array.length)
							return new Wt([], t);
						var i,
						o = 0 === n;
						if (e > 0) {
							var u = this.array[n];
							if (i = u && u.removeBefore(t, e - pr, r), i === u && o)
								return this
						}
						if (o && !i)
							return this;
						var s = Ft(this, t);
						if (!o)
							for (var a = 0; n > a; a++)
								s.array[a] = void 0;
						return i && (s.array[n] = i),
						s
					},
					Wt.prototype.removeAfter = function (t, e, r) {
						if (r === (e ? 1 << e : 0) || 0 === this.array.length)
							return this;
						var n = r - 1 >>> e & vr;
						if (n >= this.array.length)
							return this;
						var i;
						if (e > 0) {
							var o = this.array[n];
							if (i = o && o.removeAfter(t, e - pr, r), i === o && n === this.array.length - 1)
								return this
						}
						var u = Ft(this, t);
						return u.array.splice(n + 1),
						i && (u.array[n] = i),
						u
					};
					var Yr,
					Qr = {};
					t(Zt, ct),
					Zt.of = function () {
						return this(arguments)
					},
					Zt.prototype.toString = function () {
						return this.__toString("OrderedMap {", "}")
					},
					Zt.prototype.get = function (t, e) {
						var r = this._map.get(t);
						return void 0 !== r ? this._list.get(r)[1] : e
					},
					Zt.prototype.clear = function () {
						return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : ee()
					},
					Zt.prototype.set = function (t, e) {
						return re(this, t, e)
					},
					Zt.prototype.remove = function (t) {
						return re(this, t, yr)
					},
					Zt.prototype.wasAltered = function () {
						return this._map.wasAltered() || this._list.wasAltered()
					},
					Zt.prototype.__iterate = function (t, e) {
						var r = this;
						return this._list.__iterate(function (e) {
							return e && t(e[1], e[0], r)
						}, e)
					},
					Zt.prototype.__iterator = function (t, e) {
						return this._list.fromEntrySeq().__iterator(t, e)
					},
					Zt.prototype.__ensureOwner = function (t) {
						if (t === this.__ownerID)
							return this;
						var e = this._map.__ensureOwner(t),
						r = this._list.__ensureOwner(t);
						return t ? te(e, r, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = r, this)
					},
					Zt.isOrderedMap = $t,
					Zt.prototype[cr] = !0,
					Zt.prototype[_r] = Zt.prototype.remove;
					var Xr;
					t(ne, x),
					ne.prototype.get = function (t, e) {
						return this._iter.get(t, e)
					},
					ne.prototype.has = function (t) {
						return this._iter.has(t)
					},
					ne.prototype.valueSeq = function () {
						return this._iter.valueSeq()
					},
					ne.prototype.reverse = function () {
						var t = this,
						e = he(this, !0);
						return this._useKeys || (e.valueSeq = function () {
							return t._iter.toSeq().reverse()
						}),
						e
					},
					ne.prototype.map = function (t, e) {
						var r = this,
						n = ae(this, t, e);
						return this._useKeys || (n.valueSeq = function () {
							return r._iter.toSeq().map(t, e)
						}),
						n
					},
					ne.prototype.__iterate = function (t, e) {
						var r,
						n = this;
						return this._iter.__iterate(this._useKeys ? function (e, r) {
							return t(e, r, n)
						}
							 : (r = e ? qe(this) : 0, function (i) {
								return t(i, e ? --r : r++, n)
							}), e)
					},
					ne.prototype.__iterator = function (t, e) {
						if (this._useKeys)
							return this._iter.__iterator(t, e);
						var r = this._iter.__iterator(wr, e),
						n = e ? qe(this) : 0;
						return new b(function () {
							var i = r.next();
							return i.done ? i : S(t, e ? --n : n++, i.value, i)
						})
					},
					ne.prototype[cr] = !0,
					t(ie, D),
					ie.prototype.includes = function (t) {
						return this._iter.includes(t)
					},
					ie.prototype.__iterate = function (t, e) {
						var r = this,
						n = 0;
						return this._iter.__iterate(function (e) {
							return t(e, n++, r)
						}, e)
					},
					ie.prototype.__iterator = function (t, e) {
						var r = this._iter.__iterator(wr, e),
						n = 0;
						return new b(function () {
							var e = r.next();
							return e.done ? e : S(t, n++, e.value, e)
						})
					},
					t(oe, j),
					oe.prototype.has = function (t) {
						return this._iter.includes(t)
					},
					oe.prototype.__iterate = function (t, e) {
						var r = this;
						return this._iter.__iterate(function (e) {
							return t(e, e, r)
						}, e)
					},
					oe.prototype.__iterator = function (t, e) {
						var r = this._iter.__iterator(wr, e);
						return new b(function () {
							var e = r.next();
							return e.done ? e : S(t, e.value, e.value, e)
						})
					},
					t(ue, x),
					ue.prototype.entrySeq = function () {
						return this._iter.toSeq()
					},
					ue.prototype.__iterate = function (t, e) {
						var r = this;
						return this._iter.__iterate(function (e) {
							if (e) {
								Me(e);
								var n = o(e);
								return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r)
							}
						}, e)
					},
					ue.prototype.__iterator = function (t, e) {
						var r = this._iter.__iterator(wr, e);
						return new b(function () {
							for (; ; ) {
								var e = r.next();
								if (e.done)
									return e;
								var n = e.value;
								if (n) {
									Me(n);
									var i = o(n);
									return S(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e)
								}
							}
						})
					},
					ie.prototype.cacheResult = ne.prototype.cacheResult = oe.prototype.cacheResult = ue.prototype.cacheResult = ke,
					t(je, et),
					je.prototype.toString = function () {
						return this.__toString(Ce(this) + " {", "}")
					},
					je.prototype.has = function (t) {
						return this._defaultValues.hasOwnProperty(t)
					},
					je.prototype.get = function (t, e) {
						if (!this.has(t))
							return e;
						var r = this._defaultValues[t];
						return this._map ? this._map.get(t, r) : r
					},
					je.prototype.clear = function () {
						if (this.__ownerID)
							return this._map && this._map.clear(), this;
						var t = this.constructor;
						return t._empty || (t._empty = Ae(this, St()))
					},
					je.prototype.set = function (t, e) {
						if (!this.has(t))
							throw Error('Cannot set unknown key "' + t + '" on ' + Ce(this));
						var r = this._map && this._map.set(t, e);
						return this.__ownerID || r === this._map ? this : Ae(this, r)
					},
					je.prototype.remove = function (t) {
						if (!this.has(t))
							return this;
						var e = this._map && this._map.remove(t);
						return this.__ownerID || e === this._map ? this : Ae(this, e)
					},
					je.prototype.wasAltered = function () {
						return this._map.wasAltered()
					},
					je.prototype.__iterator = function (t, e) {
						var n = this;
						return r(this._defaultValues).map(function (t, e) {
							return n.get(e)
						}).__iterator(t, e)
					},
					je.prototype.__iterate = function (t, e) {
						var n = this;
						return r(this._defaultValues).map(function (t, e) {
							return n.get(e)
						}).__iterate(t, e)
					},
					je.prototype.__ensureOwner = function (t) {
						if (t === this.__ownerID)
							return this;
						var e = this._map && this._map.__ensureOwner(t);
						return t ? Ae(this, e, t) : (this.__ownerID = t, this._map = e, this)
					};
					var Gr = je.prototype;
					Gr[_r] = Gr.remove,
					Gr.deleteIn = Gr.removeIn = Wr.removeIn,
					Gr.merge = Wr.merge,
					Gr.mergeWith = Wr.mergeWith,
					Gr.mergeIn = Wr.mergeIn,
					Gr.mergeDeep = Wr.mergeDeep,
					Gr.mergeDeepWith = Wr.mergeDeepWith,
					Gr.mergeDeepIn = Wr.mergeDeepIn,
					Gr.setIn = Wr.setIn,
					Gr.update = Wr.update,
					Gr.updateIn = Wr.updateIn,
					Gr.withMutations = Wr.withMutations,
					Gr.asMutable = Wr.asMutable,
					Gr.asImmutable = Wr.asImmutable,
					t(Ue, nt),
					Ue.of = function () {
						return this(arguments)
					},
					Ue.fromKeys = function (t) {
						return this(r(t).keySeq())
					},
					Ue.prototype.toString = function () {
						return this.__toString("Set {", "}")
					},
					Ue.prototype.has = function (t) {
						return this._map.has(t)
					},
					Ue.prototype.add = function (t) {
						return Le(this, this._map.set(t, !0))
					},
					Ue.prototype.remove = function (t) {
						return Le(this, this._map.remove(t))
					},
					Ue.prototype.clear = function () {
						return Le(this, this._map.clear())
					},
					Ue.prototype.union = function () {
						var t = sr.call(arguments, 0);
						return t = t.filter(function (t) {
								return 0 !== t.size
							}),
						0 === t.length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function (e) {
							for (var r = 0; t.length > r; r++)
								i(t[r]).forEach(function (t) {
									return e.add(t)
								})
						}) : this.constructor(t[0])
					},
					Ue.prototype.intersect = function () {
						var t = sr.call(arguments, 0);
						if (0 === t.length)
							return this;
						t = t.map(function (t) {
								return i(t)
							});
						var e = this;
						return this.withMutations(function (r) {
							e.forEach(function (e) {
								t.every(function (t) {
									return t.includes(e)
								}) || r.remove(e)
							})
						})
					},
					Ue.prototype.subtract = function () {
						var t = sr.call(arguments, 0);
						if (0 === t.length)
							return this;
						t = t.map(function (t) {
								return i(t)
							});
						var e = this;
						return this.withMutations(function (r) {
							e.forEach(function (e) {
								t.some(function (t) {
									return t.includes(e)
								}) && r.remove(e)
							})
						})
					},
					Ue.prototype.merge = function () {
						return this.union.apply(this, arguments)
					},
					Ue.prototype.mergeWith = function (t) {
						var e = sr.call(arguments, 1);
						return this.union.apply(this, e)
					},
					Ue.prototype.sort = function (t) {
						return Be(we(this, t))
					},
					Ue.prototype.sortBy = function (t, e) {
						return Be(we(this, e, t))
					},
					Ue.prototype.wasAltered = function () {
						return this._map.wasAltered()
					},
					Ue.prototype.__iterate = function (t, e) {
						var r = this;
						return this._map.__iterate(function (e, n) {
							return t(n, n, r)
						}, e)
					},
					Ue.prototype.__iterator = function (t, e) {
						return this._map.map(function (t, e) {
							return e
						}).__iterator(t, e)
					},
					Ue.prototype.__ensureOwner = function (t) {
						if (t === this.__ownerID)
							return this;
						var e = this._map.__ensureOwner(t);
						return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this)
					},
					Ue.isSet = Te;
					var Zr = "@@__IMMUTABLE_SET__@@",
					$r = Ue.prototype;
					$r[Zr] = !0,
					$r[_r] = $r.remove,
					$r.mergeDeep = $r.merge,
					$r.mergeDeepWith = $r.mergeWith,
					$r.withMutations = Wr.withMutations,
					$r.asMutable = Wr.asMutable,
					$r.asImmutable = Wr.asImmutable,
					$r.__empty = We,
					$r.__make = Pe;
					var tn;
					t(Be, Ue),
					Be.of = function () {
						return this(arguments)
					},
					Be.fromKeys = function (t) {
						return this(r(t).keySeq())
					},
					Be.prototype.toString = function () {
						return this.__toString("OrderedSet {", "}")
					},
					Be.isOrderedSet = He;
					var en = Be.prototype;
					en[cr] = !0,
					en.__empty = Ne,
					en.__make = Je;
					var rn;
					t(Ve, rt),
					Ve.of = function () {
						return this(arguments)
					},
					Ve.prototype.toString = function () {
						return this.__toString("Stack [", "]")
					},
					Ve.prototype.get = function (t, e) {
						var r = this._head;
						for (t = v(this, t); r && t--; )
							r = r.next;
						return r ? r.value : e
					},
					Ve.prototype.peek = function () {
						return this._head && this._head.value
					},
					Ve.prototype.push = function () {
						if (0 === arguments.length)
							return this;
						for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--)
							e = {
								value : arguments[r],
								next : e
							};
						return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : Ye(t, e)
					},
					Ve.prototype.pushAll = function (t) {
						if (t = n(t), 0 === t.size)
							return this;
						ft(t.size);
						var e = this.size,
						r = this._head;
						return t.reverse().forEach(function (t) {
							e++,
							r = {
								value : t,
								next : r
							}
						}),
						this.__ownerID ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : Ye(e, r)
					},
					Ve.prototype.pop = function () {
						return this.slice(1)
					},
					Ve.prototype.unshift = function () {
						return this.push.apply(this, arguments)
					},
					Ve.prototype.unshiftAll = function (t) {
						return this.pushAll(t)
					},
					Ve.prototype.shift = function () {
						return this.pop.apply(this, arguments)
					},
					Ve.prototype.clear = function () {
						return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : Qe()
					},
					Ve.prototype.slice = function (t, e) {
						if (d(t, e, this.size))
							return this;
						var r = g(t, this.size),
						n = m(e, this.size);
						if (n !== this.size)
							return rt.prototype.slice.call(this, t, e);
						for (var i = this.size - r, o = this._head; r--; )
							o = o.next;
						return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : Ye(i, o)
					},
					Ve.prototype.__ensureOwner = function (t) {
						return t === this.__ownerID ? this : t ? Ye(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
					},
					Ve.prototype.__iterate = function (t, e) {
						if (e)
							return this.reverse().__iterate(t);
						for (var r = 0, n = this._head; n && t(n.value, r++, this) !== !1; )
							n = n.next;
						return r
					},
					Ve.prototype.__iterator = function (t, e) {
						if (e)
							return this.reverse().__iterator(t);
						var r = 0,
						n = this._head;
						return new b(function () {
							if (n) {
								var e = n.value;
								return n = n.next,
								S(t, r++, e)
							}
							return z()
						})
					},
					Ve.isStack = Fe;
					var nn = "@@__IMMUTABLE_STACK__@@",
					on = Ve.prototype;
					on[nn] = !0,
					on.withMutations = Wr.withMutations,
					on.asMutable = Wr.asMutable,
					on.asImmutable = Wr.asImmutable,
					on.wasAltered = Wr.wasAltered;
					var un;
					e.Iterator = b,
					Xe(e, {
						toArray : function () {
							ft(this.size);
							var t = Array(this.size || 0);
							return this.valueSeq().__iterate(function (e, r) {
								t[r] = e
							}),
							t
						},
						toIndexedSeq : function () {
							return new ie(this)
						},
						toJS : function () {
							return this.toSeq().map(function (t) {
								return t && "function" == typeof t.toJS ? t.toJS() : t
							}).__toJS()
						},
						toJSON : function () {
							return this.toSeq().map(function (t) {
								return t && "function" == typeof t.toJSON ? t.toJSON() : t
							}).__toJS()
						},
						toKeyedSeq : function () {
							return new ne(this, !0)
						},
						toMap : function () {
							return ct(this.toKeyedSeq())
						},
						toObject : function () {
							ft(this.size);
							var t = {};
							return this.__iterate(function (e, r) {
								t[r] = e
							}),
							t
						},
						toOrderedMap : function () {
							return Zt(this.toKeyedSeq())
						},
						toOrderedSet : function () {
							return Be(u(this) ? this.valueSeq() : this)
						},
						toSet : function () {
							return Ue(u(this) ? this.valueSeq() : this)
						},
						toSetSeq : function () {
							return new oe(this)
						},
						toSeq : function () {
							return s(this) ? this.toIndexedSeq() : u(this) ? this.toKeyedSeq() : this.toSetSeq()
						},
						toStack : function () {
							return Ve(u(this) ? this.valueSeq() : this)
						},
						toList : function () {
							return Lt(u(this) ? this.valueSeq() : this)
						},
						toString : function () {
							return "[Iterable]"
						},
						__toString : function (t, e) {
							return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e
						},
						concat : function () {
							var t = sr.call(arguments, 0);
							return Ie(this, ye(this, t))
						},
						includes : function (t) {
							return this.some(function (e) {
								return Q(e, t)
							})
						},
						entries : function () {
							return this.__iterator(br)
						},
						every : function (t, e) {
							ft(this.size);
							var r = !0;
							return this.__iterate(function (n, i, o) {
								return t.call(e, n, i, o) ? void 0 : (r = !1, !1)
							}),
							r
						},
						filter : function (t, e) {
							return Ie(this, fe(this, t, e, !0))
						},
						find : function (t, e, r) {
							var n = this.findEntry(t, e);
							return n ? n[1] : r
						},
						findEntry : function (t, e) {
							var r;
							return this.__iterate(function (n, i, o) {
								return t.call(e, n, i, o) ? (r = [i, n], !1) : void 0
							}),
							r
						},
						findLastEntry : function (t, e) {
							return this.toSeq().reverse().findEntry(t, e)
						},
						forEach : function (t, e) {
							return ft(this.size),
							this.__iterate(e ? t.bind(e) : t)
						},
						join : function (t) {
							ft(this.size),
							t = void 0 !== t ? "" + t : ",";
							var e = "",
							r = !0;
							return this.__iterate(function (n) {
								r ? r = !1 : e += t,
								e += null !== n && void 0 !== n ? "" + n : ""
							}),
							e
						},
						keys : function () {
							return this.__iterator(mr)
						},
						map : function (t, e) {
							return Ie(this, ae(this, t, e))
						},
						reduce : function (t, e, r) {
							ft(this.size);
							var n,
							i;
							return 2 > arguments.length ? i = !0 : n = e,
							this.__iterate(function (e, o, u) {
								i ? (i = !1, n = e) : n = t.call(r, n, e, o, u)
							}),
							n
						},
						reduceRight : function (t, e, r) {
							var n = this.toKeyedSeq().reverse();
							return n.reduce.apply(n, arguments)
						},
						reverse : function () {
							return Ie(this, he(this, !0))
						},
						slice : function (t, e) {
							return Ie(this, pe(this, t, e, !0))
						},
						some : function (t, e) {
							return !this.every($e(t), e)
						},
						sort : function (t) {
							return Ie(this, we(this, t))
						},
						values : function () {
							return this.__iterator(wr)
						},
						butLast : function () {
							return this.slice(0, -1)
						},
						isEmpty : function () {
							return void 0 !== this.size ? 0 === this.size : !this.some(function () {
								return !0
							})
						},
						count : function (t, e) {
							return l(t ? this.toSeq().filter(t, e) : this)
						},
						countBy : function (t, e) {
							return ce(this, t, e)
						},
						equals : function (t) {
							return X(this, t)
						},
						entrySeq : function () {
							var t = this;
							if (t._cache)
								return new A(t._cache);
							var e = t.toSeq().map(Ze).toIndexedSeq();
							return e.fromEntrySeq = function () {
								return t.toSeq()
							},
							e
						},
						filterNot : function (t, e) {
							return this.filter($e(t), e)
						},
						findLast : function (t, e, r) {
							return this.toKeyedSeq().reverse().find(t, e, r)
						},
						first : function () {
							return this.find(y)
						},
						flatMap : function (t, e) {
							return Ie(this, ge(this, t, e))
						},
						flatten : function (t) {
							return Ie(this, de(this, t, !0))
						},
						fromEntrySeq : function () {
							return new ue(this)
						},
						get : function (t, e) {
							return this.find(function (e, r) {
								return Q(r, t)
							}, void 0, e)
						},
						getIn : function (t, e) {
							for (var r, n = this, i = De(t); !(r = i.next()).done; ) {
								var o = r.value;
								if (n = n && n.get ? n.get(o, yr) : yr, n === yr)
									return e
							}
							return n
						},
						groupBy : function (t, e) {
							return _e(this, t, e)
						},
						has : function (t) {
							return this.get(t, yr) !== yr
						},
						hasIn : function (t) {
							return this.getIn(t, yr) !== yr
						},
						isSubset : function (t) {
							return t = "function" == typeof t.includes ? t : e(t),
							this.every(function (e) {
								return t.includes(e)
							})
						},
						isSuperset : function (t) {
							return t = "function" == typeof t.isSubset ? t : e(t),
							t.isSubset(this)
						},
						keySeq : function () {
							return this.toSeq().map(Ge).toIndexedSeq()
						},
						last : function () {
							return this.toSeq().reverse().first()
						},
						max : function (t) {
							return be(this, t)
						},
						maxBy : function (t, e) {
							return be(this, e, t)
						},
						min : function (t) {
							return be(this, t ? tr(t) : nr)
						},
						minBy : function (t, e) {
							return be(this, e ? tr(e) : nr, t)
						},
						rest : function () {
							return this.slice(1)
						},
						skip : function (t) {
							return this.slice(Math.max(0, t))
						},
						skipLast : function (t) {
							return Ie(this, this.toSeq().reverse().skip(t).reverse())
						},
						skipWhile : function (t, e) {
							return Ie(this, ve(this, t, e, !0))
						},
						skipUntil : function (t, e) {
							return this.skipWhile($e(t), e)
						},
						sortBy : function (t, e) {
							return Ie(this, we(this, e, t))
						},
						take : function (t) {
							return this.slice(0, Math.max(0, t))
						},
						takeLast : function (t) {
							return Ie(this, this.toSeq().reverse().take(t).reverse())
						},
						takeWhile : function (t, e) {
							return Ie(this, le(this, t, e))
						},
						takeUntil : function (t, e) {
							return this.takeWhile($e(t), e)
						},
						valueSeq : function () {
							return this.toIndexedSeq()
						},
						hashCode : function () {
							return this.__hash || (this.__hash = ir(this))
						}
					});
					var sn = e.prototype;
					sn[ar] = !0,
					sn[Ir] = sn.values,
					sn.__toJS = sn.toArray,
					sn.__toStringMapper = er,
					sn.inspect = sn.toSource = function () {
						return "" + this
					},
					sn.chain = sn.flatMap,
					sn.contains = sn.includes,
					function () {
						try {
							Object.defineProperty(sn, "length", {
								get : function () {
									if (!e.noLengthWarning) {
										var t;
										try {
											throw Error()
										} catch (r) {
											t = r.stack
										}
										if (-1 === t.indexOf("_wrapObject"))
											return console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + t), this.size
									}
								}
							})
						} catch (t) {}

					}
					(),
					Xe(r, {
						flip : function () {
							return Ie(this, se(this))
						},
						findKey : function (t, e) {
							var r = this.findEntry(t, e);
							return r && r[0]
						},
						findLastKey : function (t, e) {
							return this.toSeq().reverse().findKey(t, e)
						},
						keyOf : function (t) {
							return this.findKey(function (e) {
								return Q(e, t)
							})
						},
						lastKeyOf : function (t) {
							return this.findLastKey(function (e) {
								return Q(e, t)
							})
						},
						mapEntries : function (t, e) {
							var r = this,
							n = 0;
							return Ie(this, this.toSeq().map(function (i, o) {
									return t.call(e, [o, i], n++, r)
								}).fromEntrySeq())
						},
						mapKeys : function (t, e) {
							var r = this;
							return Ie(this, this.toSeq().flip().map(function (n, i) {
									return t.call(e, n, i, r)
								}).flip())
						}
					});
					var an = r.prototype;
					an[hr] = !0,
					an[Ir] = sn.entries,
					an.__toJS = sn.toObject,
					an.__toStringMapper = function (t, e) {
						return JSON.stringify(e) + ": " + er(t)
					},
					Xe(n, {
						toKeyedSeq : function () {
							return new ne(this, !1)
						},
						filter : function (t, e) {
							return Ie(this, fe(this, t, e, !1))
						},
						findIndex : function (t, e) {
							var r = this.findEntry(t, e);
							return r ? r[0] : -1
						},
						indexOf : function (t) {
							var e = this.toKeyedSeq().keyOf(t);
							return void 0 === e ? -1 : e
						},
						lastIndexOf : function (t) {
							var e = this.toKeyedSeq().reverse().keyOf(t);
							return void 0 === e ? -1 : e
						},
						reverse : function () {
							return Ie(this, he(this, !1))
						},
						slice : function (t, e) {
							return Ie(this, pe(this, t, e, !1))
						},
						splice : function (t, e) {
							var r = arguments.length;
							if (e = Math.max(0 | e, 0), 0 === r || 2 === r && !e)
								return this;
							t = g(t, 0 > t ? this.count() : this.size);
							var n = this.slice(0, t);
							return Ie(this, 1 === r ? n : n.concat(p(arguments, 2), this.slice(t + e)))
						},
						findLastIndex : function (t, e) {
							var r = this.toKeyedSeq().findLastKey(t, e);
							return void 0 === r ? -1 : r
						},
						first : function () {
							return this.get(0)
						},
						flatten : function (t) {
							return Ie(this, de(this, t, !1))
						},
						get : function (t, e) {
							return t = v(this, t),
							0 > t || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, r) {
								return r === t
							}, void 0, e)
						},
						has : function (t) {
							return t = v(this, t),
							t >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || this.size > t : -1 !== this.indexOf(t))
						},
						interpose : function (t) {
							return Ie(this, me(this, t))
						},
						interleave : function () {
							var t = [this].concat(p(arguments)),
							e = ze(this.toSeq(), D.of, t),
							r = e.flatten(!0);
							return e.size && (r.size = e.size * t.length),
							Ie(this, r)
						},
						last : function () {
							return this.get(-1)
						},
						skipWhile : function (t, e) {
							return Ie(this, ve(this, t, e, !1))
						},
						zip : function () {
							var t = [this].concat(p(arguments));
							return Ie(this, ze(this, rr, t))
						},
						zipWith : function (t) {
							var e = p(arguments);
							return e[0] = this,
							Ie(this, ze(this, t, e))
						}
					}),
					n.prototype[fr] = !0,
					n.prototype[cr] = !0,
					Xe(i, {
						get : function (t, e) {
							return this.has(t) ? t : e
						},
						includes : function (t) {
							return this.has(t)
						},
						keySeq : function () {
							return this.valueSeq()
						}
					}),
					i.prototype.has = sn.includes,
					Xe(x, r.prototype),
					Xe(D, n.prototype),
					Xe(j, i.prototype),
					Xe(et, r.prototype),
					Xe(rt, n.prototype),
					Xe(nt, i.prototype);
					var hn = {
						Iterable : e,
						Seq : k,
						Collection : tt,
						Map : ct,
						OrderedMap : Zt,
						List : Lt,
						Stack : Ve,
						Set : Ue,
						OrderedSet : Be,
						Record : je,
						Range : $,
						Repeat : G,
						is : Q,
						fromJS : N
					};
					return hn
				})
			}, function (t, e, r) {
				"use strict";
				function n(t) {
					return t && t.__esModule ? t : {
						"default" : t
					}
				}
				function i(t, e) {
					if (!(t instanceof e))
						throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				});
				var o = function () {
					function t(t, e) {
						for (var r = 0; e.length > r; r++) {
							var n = e[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
						}
					}
					return function (e, r, n) {
						return r && t(e.prototype, r),
						n && t(e, n),
						e
					}
				}
				(),
				u = r(1),
				s = n(u),
				a = r(5),
				h = n(a),
				f = r(6),
				c = n(f),
				_ = function () {
					function t(e) {
						var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
						i(this, t),
						this._stateChangerManager = new h.default, this._subscriberManager = new c.default, this._debug = r, this.state = s.default.Map();
									for (var n in e)
										this.state = this.state.set(n, e[n])
					}
					return o(t, [{
								key : "registerStateChanger",
								value : function (t) {
									var e = this;
									this.state = this._stateChangerManager.registerStateChanger(t, this.state, function (r) {
											e._updateStateFromChanges(r, t.name)
										}, function () {
											return e.state
										})
								}
							}, {
								key : "unregisterStateChanger",
								value : function (t) {
									this._stateChangerManager.unregisterStateChanger(t)
								}
							}, {
								key : "registerSubscriber",
								value : function (t) {
									return this._subscriberManager.registerSubscriber(t, this.state)
								}
							}, {
								key : "unregisterSubscriber",
								value : function (t) {
									this._subscriberManager.unregisterSubscriber(t)
								}
							}, {
								key : "_updateStateFromChanges",
								value : function (t, e) {
									var r = this,
									n = this.state.withMutations(function (n) {
											for (var i in t)
												r._stateChangerManager.checkStateKey(n, i, e), n.set(e + "." + i, t[i])
										});
									this._updateState(n)
								}
							}, {
								key : "_updateState",
								value : function (t) {
									this._debug && console.dir(t.toObject()),
									this.state = t,
									this._subscriberManager.notify(this.state)
								}
							}
						]),
					t
				}
				();
				e.default = _
			}, function (t, e, r) {
				"use strict";
				function n(t) {
					return t && t.__esModule ? t : {
						"default" : t
					}
				}
				function i(t, e) {
					if (!(t instanceof e))
						throw new TypeError("Cannot call a class as a function")
				}
				function o(t, e) {
					if (!t)
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}
				function u(t, e) {
					if ("function" != typeof e && null !== e)
						throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
							constructor : {
								value : t,
								enumerable : !1,
								writable : !0,
								configurable : !0
							}
						}),
					e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				});
				var s = function () {
					function t(t, e) {
						for (var r = 0; e.length > r; r++) {
							var n = e[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
						}
					}
					return function (e, r, n) {
						return r && t(e.prototype, r),
						n && t(e, n),
						e
					}
				}
				(),
				a = r(1),
				h = n(a),
				f = r(2),
				c = n(f),
				_ = function (t) {
					function e(t, r) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
						i(this, e);
						var u = o(this, Object.getPrototypeOf(e).call(this, t, n));
						return u.maxHistory = r,
						u.history = h.default.List(), u.redoStates = h.default.List(), u
					}
					return u(e, t),
					s(e, [{
								key : "undo",
								value : function () {
									var t = this.history.last();
									this.history = this.history.pop(),
									this.redoStates = this.redoStates.push(this.state),
									this.state = t,
									this._subscriberManager.notify(t)
								}
							}, {
								key : "redo",
								value : function () {
									if (0 == this.redoStates.size)
										throw Error("No state to redo found!");
									var t = this.redoStates.last();
									this.redoStates = this.redoStates.pop(),
									this._updateState(t, !0)
								}
							}, {
								key : "_updateState",
								value : function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
									this.history.size + 1 > this.maxHistory && (this.history = this.history.shift()),
									this.history = this.history.push(this.state),
									e || (this.redoStates = h.default.List()), this.state = t, this._subscriberManager.notify(this.state)
									}
								}
							]),
						e
					}
					(c.default);
						e.default = _
					}, function (t, e) {
						"use strict";
						function r(t, e) {
							if (!(t instanceof e))
								throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(e, "__esModule", {
							value : !0
						});
						var n = function () {
							function t(t, e) {
								for (var r = 0; e.length > r; r++) {
									var n = e[r];
									n.enumerable = n.enumerable || !1,
									n.configurable = !0,
									"value" in n && (n.writable = !0),
									Object.defineProperty(t, n.key, n)
								}
							}
							return function (e, r, n) {
								return r && t(e.prototype, r),
								n && t(e, n),
								e
							}
						}
						(),
						i = function () {
							function t() {
								r(this, t)
							}
							return n(t, [{
										key : "onRequestCurrentState",
										value : function (t) {
											this.requestHandler = t
										}
									}, {
										key : "onTriggerChange",
										value : function (t) {
											this.triggerHandler = t
										}
									}, {
										key : "_triggerChange",
										value : function (t) {
											this.triggerHandler && this.triggerHandler(t)
										}
									}, {
										key : "_requestCurrentState",
										value : function () {
											return this.requestHandler ? this.requestHandler() : void 0
										}
									}
								]),
							t
						}
						();
						e.default = i
					}, function (t, e, r) {
						"use strict";
						function n(t) {
							return t && t.__esModule ? t : {
								"default" : t
							}
						}
						function i(t, e) {
							if (!(t instanceof e))
								throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(e, "__esModule", {
							value : !0
						});
						var o = function () {
							function t(t, e) {
								for (var r = 0; e.length > r; r++) {
									var n = e[r];
									n.enumerable = n.enumerable || !1,
									n.configurable = !0,
									"value" in n && (n.writable = !0),
									Object.defineProperty(t, n.key, n)
								}
							}
							return function (e, r, n) {
								return r && t(e.prototype, r),
								n && t(e, n),
								e
							}
						}
						(),
						u = r(1),
						s = n(u),
						a = function () {
							function t() {
								i(this, t),
								this._stateChangers = s.default.Map()
							}
							return o(t, [{
										key : "registerStateChanger",
										value : function (t, e, r, n) {
											if (this._stateChangers.has(t.name))
												throw Error("StateChanger with name '" + t.name + "' already registered!");
											var i = {};
											for (var o in t.initialState) {
												var u = t.name + "." + o;
												e.has(u) || (i[u] = t.initialState[o])
											}
											return t.onTriggerChange(r),
											t.onRequestCurrentState(n),
											this._stateChangers = this._stateChangers.set(t.name, t),
											e.withMutations(function (t) {
												for (var e in i)
													t.set(e, i[e])
											})
										}
									}, {
										key : "unregisterStateChanger",
										value : function (t) {
											if (!this._stateChangers.has(t.name))
												throw Error("StateChanger with name '" + t.name + "' not registered!");
											this._stateChangers = this._stateChangers.delete (t.name)
										}
									}, {
										key : "checkStateKey",
										value : function (t, e, r) {
											if (!t.has(r + "." + e))
												throw Error("No state property '" + r + "." + e + "' registered!")
										}
									}
								]),
							t
						}
						();
						e.default = a
					}, function (t, e, r) {
						"use strict";
						function n(t) {
							return t && t.__esModule ? t : {
								"default" : t
							}
						}
						function i(t, e) {
							if (!(t instanceof e))
								throw new TypeError("Cannot call a class as a function")
						}
						Object.defineProperty(e, "__esModule", {
							value : !0
						});
						var o = function () {
							function t(t, e) {
								for (var r = 0; e.length > r; r++) {
									var n = e[r];
									n.enumerable = n.enumerable || !1,
									n.configurable = !0,
									"value" in n && (n.writable = !0),
									Object.defineProperty(t, n.key, n)
								}
							}
							return function (e, r, n) {
								return r && t(e.prototype, r),
								n && t(e, n),
								e
							}
						}
						(),
						u = r(1),
						s = n(u),
						a = function () {
							function t() {
								i(this, t),
								this._nextSubscriberId = 0,
								this._subscribers = s.default.Map()
							}
							return o(t, [{
										key : "registerSubscriber",
										value : function (t, e) {
											var r = this._nextSubscriberId++;
											return this._subscribers = this._subscribers.set(r, t),
											this.notify(e),
											r
										}
									}, {
										key : "unregisterSubscriber",
										value : function (t) {
											this._subscribers = this._subscribers.delete (t)
										}
									}, {
										key : "notify",
										value : function (t) {
											var e = !0,
											r = !1,
											n = void 0;
											try {
												for (var i, o = this._subscribers.keys()[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
													var u = i.value;
													this._subscribers.get(u).notify(t)
												}
											} catch (s) {
												r = !0,
												n = s
											}
											finally {
												try {
													!e && o.return  && o.return ()
												}
												finally {
													if (r)
														throw n
												}
											}
										}
									}
								]),
							t
						}
						();
						e.default = a
					}
				])
		});
