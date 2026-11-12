import { r as __exportAll } from "../_runtime.mjs";
import * as o$2 from "fs";
import * as r$1 from "path";
// node_modules/@electric-sql/pglite/dist/chunk-ZSOCVAT7.js
var p$3 = Object.create;
var i = Object.defineProperty;
var c$2 = Object.getOwnPropertyDescriptor;
var f$3 = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf;
var s$2 = Object.prototype.hasOwnProperty;
var a$1 = (t) => {
	throw TypeError(t);
};
var _$1 = (t, e, o) => e in t ? i(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: o
}) : t[e] = o;
var d$3 = (t, e) => () => (t && (e = t(t = 0)), e);
var D$6 = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var F$4 = (t, e) => {
	for (var o in e) i(t, o, {
		get: e[o],
		enumerable: !0
	});
};
var g$5 = (t, e, o, m) => {
	if (e && typeof e == "object" || typeof e == "function") for (let r of f$3(e)) !s$2.call(t, r) && r !== o && i(t, r, {
		get: () => e[r],
		enumerable: !(m = c$2(e, r)) || m.enumerable
	});
	return t;
};
var L$3 = (t, e, o) => (o = t != null ? p$3(l(t)) : {}, g$5(e || !t || !t.__esModule ? i(o, "default", {
	value: t,
	enumerable: !0
}) : o, t));
var P$4 = (t, e, o) => _$1(t, typeof e != "symbol" ? e + "" : e, o);
var n$1 = (t, e, o) => e.has(t) || a$1("Cannot " + o);
var h$1 = (t, e, o) => (n$1(t, e, "read from private field"), o ? o.call(t) : e.get(t));
var R$2 = (t, e, o) => e.has(t) ? a$1("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o);
var x$6 = (t, e, o, m) => (n$1(t, e, "write to private field"), m ? m.call(t, o) : e.set(t, o), o);
var T$4 = (t, e, o) => (n$1(t, e, "access private method"), o);
var U$5 = (t, e, o, m) => ({
	set _(r) {
		x$6(t, e, r, o);
	},
	get _() {
		return h$1(t, e, m);
	}
});
var u$1 = d$3(() => {
	"use strict";
});
// node_modules/@electric-sql/pglite/dist/chunk-BD5WXLQO.js
u$1();
var f$2 = Object.defineProperty;
var d$2 = (t, e) => {
	for (var r in e) f$2(t, r, {
		get: e[r],
		enumerable: !0
	});
};
var p$2 = {};
d$2(p$2, {
	IN_NODE: () => s$1,
	WASM_PREFIX: () => y$4,
	getFsBundle: () => w$4,
	instantiateWasm: () => b$2,
	pgliteProc: () => h,
	rmdirRecursive: () => g$4,
	startArtifactDownload: () => c$1,
	toPostgresName: () => v$2,
	uuid: () => S$3
});
function m$5() {
	let t = process.type;
	return t === "renderer" || t === "worker" || t === "service-worker";
}
var s$1 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !m$5();
var y$4 = "/pglite";
var h = globalThis && typeof globalThis.process < "u" ? globalThis.process : { exitCode: void 0 };
var a = /* @__PURE__ */ new Map();
async function c$1(t) {
	s$1 || a.has(t.toString()) || a.set(t.toString(), fetch(t));
}
var o$3 = /* @__PURE__ */ new Map();
async function b$2(t, e) {
	if (typeof e != "function") return {
		instance: await WebAssembly.instantiate(e, t),
		module: e
	};
	let r = e();
	if (o$3.has(r.toString())) {
		let i = o$3.get(r.toString());
		return {
			instance: await WebAssembly.instantiate(i, t),
			module: i
		};
	}
	if (s$1) {
		let i = await (await import("fs/promises")).readFile(r), { module: n, instance: l } = await WebAssembly.instantiate(i, t);
		return o$3.set(r.toString(), n), {
			instance: l,
			module: n
		};
	} else {
		a.has(r.toString()) || c$1(r);
		let i = await a.get(r.toString()), { module: n, instance: l } = await WebAssembly.instantiateStreaming(i.clone(), t);
		return o$3.set(r.toString(), n), {
			instance: l,
			module: n
		};
	}
}
async function w$4(t) {
	return s$1 ? (await (await import("fs/promises")).readFile(t)).buffer : (c$1(t), (await a.get(t.toString())).clone().arrayBuffer());
}
var S$3 = () => {
	if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
	let t = /* @__PURE__ */ new Uint8Array(16);
	if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(t);
	else for (let r = 0; r < t.length; r++) t[r] = Math.floor(Math.random() * 256);
	t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
	let e = [];
	return t.forEach((r) => {
		e.push(r.toString(16).padStart(2, "0"));
	}), e.slice(0, 4).join("") + "-" + e.slice(4, 6).join("") + "-" + e.slice(6, 8).join("") + "-" + e.slice(8, 10).join("") + "-" + e.slice(10).join("");
};
function v$2(t) {
	let e;
	return t.startsWith("\"") && t.endsWith("\"") ? e = t.substring(1, t.length - 1) : e = t.toLowerCase(), e;
}
function g$4(t, e) {
	try {
		let r = t.readdir(e).filter((i) => i !== "." && i !== "..");
		for (let i of r) {
			let n = e + "/" + i;
			try {
				t.readdir(n), g$4(t, n);
			} catch {
				t.unlink(n);
			}
		}
		t.rmdir(e);
	} catch {
		try {
			t.unlink(e);
		} catch {}
	}
}
// node_modules/@electric-sql/pglite/dist/chunk-N66TTF7B.js
var j$3 = D$6((xr, b) => {
	"use strict";
	u$1();
	var le = 9007199254740991, ue = (function(e) {
		return e;
	})();
	function Be(e) {
		return e === ue;
	}
	function ce(e) {
		return typeof e == "string" || Object.prototype.toString.call(e) == "[object String]";
	}
	function je(e) {
		return Object.prototype.toString.call(e) == "[object Date]";
	}
	function W(e) {
		return e !== null && typeof e == "object";
	}
	function X(e) {
		return typeof e == "function";
	}
	function Ye(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= le;
	}
	function Ge(e) {
		return Object.prototype.toString.call(e) == "[object Array]";
	}
	function de(e) {
		return W(e) && !X(e) && Ye(e.length);
	}
	function J(e) {
		return Object.prototype.toString.call(e) == "[object ArrayBuffer]";
	}
	function We(e, r) {
		return Array.prototype.map.call(e, r);
	}
	function Xe(e, r) {
		var t = ue;
		return X(r) && Array.prototype.every.call(e, function(n, i, o) {
			var a = r(n, i, o);
			return a && (t = n), !a;
		}), t;
	}
	function Ve(e) {
		return Object.assign.apply(null, arguments);
	}
	function fe(e) {
		var r, t, n;
		if (ce(e)) {
			for (t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r) & 255;
			return n;
		}
		return J(e) ? new Uint8Array(e) : W(e) && J(e.buffer) ? new Uint8Array(e.buffer) : de(e) ? new Uint8Array(e) : W(e) && X(e.toString) ? fe(e.toString()) : /* @__PURE__ */ new Uint8Array();
	}
	b.exports.MAX_SAFE_INTEGER = le;
	b.exports.isUndefined = Be;
	b.exports.isString = ce;
	b.exports.isObject = W;
	b.exports.isDateTime = je;
	b.exports.isFunction = X;
	b.exports.isArray = Ge;
	b.exports.isArrayLike = de;
	b.exports.isArrayBuffer = J;
	b.exports.map = We;
	b.exports.find = Xe;
	b.exports.extend = Ve;
	b.exports.toUint8Array = fe;
});
var Y$2 = D$6((Br, _e) => {
	"use strict";
	u$1();
	var Q = "\0";
	_e.exports = {
		NULL_CHAR: Q,
		TMAGIC: "ustar" + Q + "00",
		OLDGNU_MAGIC: "ustar  " + Q,
		REGTYPE: 0,
		LNKTYPE: 1,
		SYMTYPE: 2,
		CHRTYPE: 3,
		BLKTYPE: 4,
		DIRTYPE: 5,
		FIFOTYPE: 6,
		CONTTYPE: 7,
		TSUID: parseInt("4000", 8),
		TSGID: parseInt("2000", 8),
		TSVTX: parseInt("1000", 8),
		TUREAD: parseInt("0400", 8),
		TUWRITE: parseInt("0200", 8),
		TUEXEC: parseInt("0100", 8),
		TGREAD: parseInt("0040", 8),
		TGWRITE: parseInt("0020", 8),
		TGEXEC: parseInt("0010", 8),
		TOREAD: parseInt("0004", 8),
		TOWRITE: parseInt("0002", 8),
		TOEXEC: parseInt("0001", 8),
		TPERMALL: parseInt("0777", 8),
		TPERMMASK: parseInt("0777", 8)
	};
});
var re$1 = D$6((Yr, T) => {
	"use strict";
	u$1();
	var me = j$3(), w = Y$2(), $e = 512, Z = w.TPERMALL, pe = 0, Se = 0, ee = [
		[
			"name",
			100,
			0,
			function(e, r) {
				return G(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return L(e.slice(r, r + t[1]));
			}
		],
		[
			"mode",
			8,
			100,
			function(e, r) {
				var t = e[r[0]] || Z;
				return t = t & w.TPERMMASK, z(t, r[1], Z);
			},
			function(e, r, t) {
				var n = R(e.slice(r, r + t[1]));
				return n &= w.TPERMMASK, n;
			}
		],
		[
			"uid",
			8,
			108,
			function(e, r) {
				return z(e[r[0]], r[1], pe);
			},
			function(e, r, t) {
				return R(e.slice(r, r + t[1]));
			}
		],
		[
			"gid",
			8,
			116,
			function(e, r) {
				return z(e[r[0]], r[1], Se);
			},
			function(e, r, t) {
				return R(e.slice(r, r + t[1]));
			}
		],
		[
			"size",
			12,
			124,
			function(e, r) {
				return z(e.data.length, r[1]);
			},
			function(e, r, t) {
				return R(e.slice(r, r + t[1]));
			}
		],
		[
			"modifyTime",
			12,
			136,
			function(e, r) {
				return V(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return $(e.slice(r, r + t[1]));
			}
		],
		[
			"checksum",
			8,
			148,
			function(e, r) {
				return "        ";
			},
			function(e, r, t) {
				return R(e.slice(r, r + t[1]));
			}
		],
		[
			"type",
			1,
			156,
			function(e, r) {
				return "" + (parseInt(e[r[0]], 10) || 0) % 8;
			},
			function(e, r, t) {
				return (parseInt(String.fromCharCode(e[r]), 10) || 0) % 8;
			}
		],
		[
			"linkName",
			100,
			157,
			function(e, r) {
				return "";
			},
			function(e, r, t) {
				return L(e.slice(r, r + t[1]));
			}
		],
		[
			"ustar",
			8,
			257,
			function(e, r) {
				return w.TMAGIC;
			},
			function(e, r, t) {
				return qe(L(e.slice(r, r + t[1]), !0));
			},
			function(e, r) {
				return e[r[0]] == w.TMAGIC || e[r[0]] == w.OLDGNU_MAGIC;
			}
		],
		[
			"owner",
			32,
			265,
			function(e, r) {
				return G(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return L(e.slice(r, r + t[1]));
			}
		],
		[
			"group",
			32,
			297,
			function(e, r) {
				return G(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return L(e.slice(r, r + t[1]));
			}
		],
		[
			"majorNumber",
			8,
			329,
			function(e, r) {
				return "";
			},
			function(e, r, t) {
				return R(e.slice(r, r + t[1]));
			}
		],
		[
			"minorNumber",
			8,
			337,
			function(e, r) {
				return "";
			},
			function(e, r, t) {
				return R(e.slice(r, r + t[1]));
			}
		],
		[
			"prefix",
			131,
			345,
			function(e, r) {
				return G(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return L(e.slice(r, r + t[1]));
			}
		],
		[
			"accessTime",
			12,
			476,
			function(e, r) {
				return V(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return $(e.slice(r, r + t[1]));
			}
		],
		[
			"createTime",
			12,
			488,
			function(e, r) {
				return V(e[r[0]], r[1]);
			},
			function(e, r, t) {
				return $(e.slice(r, r + t[1]));
			}
		]
	], ge = (function(e) {
		var r = e[e.length - 1];
		return r[2] + r[1];
	})(ee);
	function qe(e) {
		if (e.length == 8) {
			var r = e.split("");
			if (r[5] == w.NULL_CHAR) return (r[6] == " " || r[6] == w.NULL_CHAR) && (r[6] = "0"), (r[7] == " " || r[7] == w.NULL_CHAR) && (r[7] = "0"), r = r.join(""), r == w.TMAGIC ? r : e;
			if (r[7] == w.NULL_CHAR) return r[5] == w.NULL_CHAR && (r[5] = " "), r[6] == w.NULL_CHAR && (r[6] = " "), r == w.OLDGNU_MAGIC ? r : e;
		}
		return e;
	}
	function G(e, r) {
		return r -= 1, me.isUndefined(e) && (e = ""), e = ("" + e).substr(0, r), e + w.NULL_CHAR;
	}
	function z(e, r, t) {
		for (t = parseInt(t) || 0, r -= 1, e = (parseInt(e) || t).toString(8).substr(-r, r); e.length < r;) e = "0" + e;
		return e + w.NULL_CHAR;
	}
	function V(e, r) {
		if (me.isDateTime(e)) e = Math.floor(1 * e / 1e3);
		else if (e = parseInt(e, 10), isFinite(e)) {
			if (e <= 0) return "";
		} else e = Math.floor(1 * /* @__PURE__ */ new Date() / 1e3);
		return z(e, r, 0);
	}
	function L(e, r) {
		var t = String.fromCharCode.apply(null, e);
		if (r) return t;
		var n = t.indexOf(w.NULL_CHAR);
		return n >= 0 ? t.substr(0, n) : t;
	}
	function R(e) {
		var r = String.fromCharCode.apply(null, e);
		return parseInt(r.replace(/^0+$/g, ""), 8) || 0;
	}
	function $(e) {
		return e.length == 0 || e[0] == 0 ? null : /* @__PURE__ */ new Date(1e3 * R(e));
	}
	function Ke(e, r, t) {
		var n = parseInt(r, 10) || 0, i = Math.min(n + ge, e.length), o = 0, a = 0, s = 0;
		t && ee.every(function(_) {
			return _[0] == "checksum" ? (a = n + _[2], s = a + _[1], !1) : !0;
		});
		for (var l = 32, u = n; u < i; u++) {
			var c = u >= a && u < s ? l : e[u];
			o = (o + c) % 262144;
		}
		return o;
	}
	T.exports.recordSize = $e;
	T.exports.defaultFileMode = Z;
	T.exports.defaultUid = pe;
	T.exports.defaultGid = Se;
	T.exports.posixHeader = ee;
	T.exports.effectiveHeaderSize = ge;
	T.exports.calculateChecksum = Ke;
	T.exports.formatTarString = G;
	T.exports.formatTarNumber = z;
	T.exports.formatTarDateTime = V;
	T.exports.parseTarString = L;
	T.exports.parseTarNumber = R;
	T.exports.parseTarDateTime = $;
});
var ye$2 = D$6((Wr, Fe) => {
	"use strict";
	u$1();
	var Je = Y$2(), q = j$3(), H = re$1();
	function ve(e) {
		return H.recordSize;
	}
	function Ee(e) {
		return Math.ceil(e.data.length / H.recordSize) * H.recordSize;
	}
	function Qe(e) {
		var r = 0;
		return e.forEach(function(t) {
			r += ve(t) + Ee(t);
		}), r += H.recordSize * 2, new Uint8Array(r);
	}
	function Ze(e, r, t) {
		t = parseInt(t) || 0;
		var n = t;
		H.posixHeader.forEach(function(l) {
			for (var u = l[3](r, l), c = u.length, _ = 0; _ < c; _ += 1) e[n + _] = u.charCodeAt(_) & 255;
			n += l[1];
		});
		var i = q.find(H.posixHeader, function(l) {
			return l[0] == "checksum";
		});
		if (i) {
			var o = H.calculateChecksum(e, t, !0), a = H.formatTarNumber(o, i[1] - 2) + Je.NULL_CHAR + " ";
			n = t + i[2];
			for (var s = 0; s < a.length; s += 1) e[n] = a.charCodeAt(s) & 255, n++;
		}
		return t + ve(r);
	}
	function er(e, r, t) {
		return t = parseInt(t, 10) || 0, e.set(r.data, t), t + Ee(r);
	}
	function rr(e) {
		e = q.map(e, function(n) {
			return q.extend({}, n, { data: q.toUint8Array(n.data) });
		});
		var r = Qe(e), t = 0;
		return e.forEach(function(n) {
			t = Ze(r, n, t), t = er(r, n, t);
		}), r;
	}
	Fe.exports.tar = rr;
});
var we$1 = D$6((Vr, he) => {
	"use strict";
	u$1();
	var tr = Y$2(), ne = j$3(), D = re$1(), nr = {
		extractData: !0,
		checkHeader: !0,
		checkChecksum: !0,
		checkFileSize: !0
	}, ir = {
		size: !0,
		checksum: !0,
		ustar: !0
	}, te = {
		unexpectedEndOfFile: "Unexpected end of file.",
		fileCorrupted: "File is corrupted.",
		checksumCheckFailed: "Checksum check failed."
	};
	function or(e) {
		return D.recordSize;
	}
	function ar(e) {
		return Math.ceil(e / D.recordSize) * D.recordSize;
	}
	function sr(e, r) {
		for (var t = r, n = Math.min(e.length, r + D.recordSize * 2), i = t; i < n; i++) if (e[i] != 0) return !1;
		return !0;
	}
	function lr(e, r, t) {
		if (e.length - r < D.recordSize) {
			if (t.checkFileSize) throw new Error(te.unexpectedEndOfFile);
			return null;
		}
		r = parseInt(r) || 0;
		var n = {}, i = r;
		if (D.posixHeader.forEach(function(s) {
			n[s[0]] = s[4](e, i, s), i += s[1];
		}), n.type != 0 && (n.size = 0), t.checkHeader && D.posixHeader.forEach(function(s) {
			if (ne.isFunction(s[5]) && !s[5](n, s)) {
				var l = new Error(te.fileCorrupted);
				throw l.data = {
					offset: r + s[2],
					field: s[0]
				}, l;
			}
		}), t.checkChecksum) {
			var o = D.calculateChecksum(e, r, !0);
			if (o != n.checksum) {
				var a = new Error(te.checksumCheckFailed);
				throw a.data = {
					offset: r,
					header: n,
					checksum: o
				}, a;
			}
		}
		return n;
	}
	function ur(e, r, t, n) {
		return n.extractData ? t.size <= 0 ? /* @__PURE__ */ new Uint8Array() : e.slice(r, r + t.size) : null;
	}
	function cr(e, r) {
		var t = {};
		return D.posixHeader.forEach(function(n) {
			var i = n[0];
			ir[i] || (t[i] = e[i]);
		}), t.isOldGNUFormat = e.ustar == tr.OLDGNU_MAGIC, r && (t.data = r), t;
	}
	function dr(e, r) {
		r = ne.extend({}, nr, r);
		for (var t = [], n = 0, i = e.length; i - n >= D.recordSize;) {
			e = ne.toUint8Array(e);
			var o = lr(e, n, r);
			if (!o) break;
			n += or(o);
			var a = ur(e, n, o, r);
			if (t.push(cr(o, a)), n += ar(o.size), sr(e, n)) break;
		}
		return t;
	}
	he.exports.untar = dr;
});
var be$2 = D$6((qr, Ae) => {
	"use strict";
	u$1();
	var fr = j$3(), _r = Y$2(), mr = ye$2(), pr = we$1();
	fr.extend(Ae.exports, mr, pr, _r);
});
u$1();
u$1();
var O$2 = L$3(be$2(), 1);
async function ie$2(e, r, t = "pgdata", n = "auto") {
	let [o, a] = await Er(vr(e, r), n), s = t + (a ? ".tar.gz" : ".tar"), l = a ? "application/x-gzip" : "application/x-tar";
	return typeof File < "u" ? new File([o], s, { type: l }) : new Blob([o], { type: l });
}
var Sr = [
	"application/x-gtar",
	"application/x-tar+gzip",
	"application/x-gzip",
	"application/gzip"
];
async function Jr(e, r, t) {
	let n = new Uint8Array(await r.arrayBuffer()), i = typeof File < "u" && r instanceof File ? r.name : void 0;
	(Sr.includes(r.type) || i?.endsWith(".tgz") || i?.endsWith(".tar.gz")) && (n = await Te$2(n));
	let a;
	try {
		a = (0, O$2.untar)(n);
	} catch (s) {
		if (s instanceof Error && s.message.includes("File is corrupted")) n = await Te$2(n), a = (0, O$2.untar)(n);
		else throw s;
	}
	for (let s of a) {
		let l = `${t}/${s.name}`, u = l.split("/").slice(0, -1);
		for (let c = 1; c <= u.length; c++) {
			let _ = u.slice(0, c).join("/");
			_.length && !e.analyzePath(_).exists && e.mkdirTree(_);
		}
		if (s.type === O$2.REGTYPE) {
			e.writeFile(l, s.data);
			let c = Ar(s.modifyTime);
			e.utime(l, c, c);
		} else s.type === O$2.DIRTYPE && (e.analyzePath(l).exists || e.mkdir(l));
	}
}
function gr(e, r) {
	let t = [], n = (i) => {
		e.readdir(i).forEach((a) => {
			if (a === "." || a === "..") return;
			let s = i + "/" + a, l = e.stat(s), u = e.isFile(l.mode) ? e.readFile(s, { encoding: "binary" }) : /* @__PURE__ */ new Uint8Array(0);
			t.push({
				name: s.substring(r.length),
				mode: l.mode,
				size: l.size,
				type: e.isFile(l.mode) ? O$2.REGTYPE : O$2.DIRTYPE,
				modifyTime: l.mtime,
				data: u
			}), e.isDir(l.mode) && n(s);
		});
	};
	return n(r), t;
}
function vr(e, r) {
	let t = gr(e, r);
	return (0, O$2.tar)(t);
}
async function Er(e, r = "auto") {
	if (r === "none") return [e, !1];
	if (typeof CompressionStream < "u") return [await Fr(e), !0];
	if (typeof process < "u" && process.versions && process.versions.node) return [await yr(e), !0];
	if (r === "auto") return [e, !1];
	throw new Error("Compression not supported in this environment");
}
async function Fr(e) {
	let r = new CompressionStream("gzip"), t = r.writable.getWriter(), n = r.readable.getReader();
	t.write(e), t.close();
	let i = [];
	for (;;) {
		let { value: s, done: l } = await n.read();
		if (l) break;
		s && i.push(s);
	}
	let o = new Uint8Array(i.reduce((s, l) => s + l.length, 0)), a = 0;
	return i.forEach((s) => {
		o.set(s, a), a += s.length;
	}), o;
}
async function yr(e) {
	let { promisify: r } = await import("util"), { gzip: t } = await import("zlib");
	return await r(t)(e);
}
async function Te$2(e) {
	if (typeof CompressionStream < "u") return await hr(e);
	if (typeof process < "u" && process.versions && process.versions.node) return await wr(e);
	throw new Error("Unsupported environment for decompression");
}
async function hr(e) {
	let r = new DecompressionStream("gzip"), t = r.writable.getWriter(), n = r.readable.getReader();
	t.write(e), t.close();
	let i = [];
	for (;;) {
		let { value: s, done: l } = await n.read();
		if (l) break;
		s && i.push(s);
	}
	let o = new Uint8Array(i.reduce((s, l) => s + l.length, 0)), a = 0;
	return i.forEach((s) => {
		o.set(s, a), a += s.length;
	}), o;
}
async function wr(e) {
	let { promisify: r } = await import("util"), { gunzip: t } = await import("zlib");
	return await r(t)(e);
}
function Ar(e) {
	return e ? typeof e == "number" ? e * 1e3 : e.getTime() : Date.now();
}
u$1();
u$1();
u$1();
async function br(moduleArg = {}) {
	var Module = moduleArg, ENVIRONMENT_IS_WEB = !!globalThis.window, ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope, ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
	if (ENVIRONMENT_IS_NODE) {
		let { createRequire: e } = await import("node:module");
		var require = e(import.meta.url);
	}
	var programArgs = [], thisProgram = "./this.program", quit_ = (e, r) => {
		throw r;
	}, _scriptName = import.meta.url, scriptDirectory = "";
	function locateFile(e) {
		return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
	}
	var readAsync, readBinary;
	if (ENVIRONMENT_IS_NODE) {
		var fs = require("node:fs");
		_scriptName.startsWith("file:") && (scriptDirectory = require("node:path").dirname(require("node:url").fileURLToPath(_scriptName)) + "/"), readBinary = (e) => {
			e = isFileURI(e) ? new URL(e) : e;
			return fs.readFileSync(e);
		}, readAsync = async (e, r = !0) => {
			e = isFileURI(e) ? new URL(e) : e;
			return fs.readFileSync(e, r ? void 0 : "utf8");
		}, process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), programArgs = process.argv.slice(2), quit_ = (e, r) => {
			throw process.exitCode = e, r;
		};
	} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
		try {
			scriptDirectory = new URL(".", _scriptName).href;
		} catch {}
		ENVIRONMENT_IS_WORKER && (readBinary = (e) => {
			var r = new XMLHttpRequest();
			return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
		}), readAsync = async (e) => {
			var r = await fetch(e, { credentials: "same-origin" });
			if (r.ok) return r.arrayBuffer();
			throw new Error(r.status + " : " + r.url);
		};
	}
	var out = console.log.bind(console), err = console.error.bind(console), dynamicLibraries = [], wasmBinary, ABORT = !1, EXITSTATUS, isFileURI = (e) => e.startsWith("file://");
	class EmscriptenEH {}
	class EmscriptenSjLj extends EmscriptenEH {}
	var runtimeInitialized = !1, runtimeExited = !1;
	function getMemoryBuffer() {
		return wasmMemory.buffer;
	}
	function updateMemoryViews() {
		if (!HEAP8?.buffer?.resizable) {
			var e = getMemoryBuffer();
			HEAP8 = new Int8Array(e), HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), HEAPU16 = new Uint16Array(e), HEAP32 = new Int32Array(e), HEAPU32 = new Uint32Array(e), HEAPF32 = new Float32Array(e), HEAPF64 = new Float64Array(e), HEAP64 = new BigInt64Array(e), HEAPU64 = new BigUint64Array(e);
		}
	}
	var __RELOC_FUNCS__ = [];
	function preRun() {
		var e = Module.preRun;
		e && (typeof e == "function" && (e = [e]), onPreRuns.push(...e)), callRuntimeCallbacks(onPreRuns);
	}
	function initRuntime() {
		runtimeInitialized = !0, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), TTY.init(), wasmExports.__wasm_call_ctors(), callRuntimeCallbacks(onPostCtors), FS.ignorePermissions = !1;
	}
	function exitRuntime() {
		___funcs_on_exit(), FS.quit(), TTY.shutdown(), clearTimers(), runtimeExited = !0;
	}
	function postRun() {
		var e = Module.postRun;
		e && (typeof e == "function" && (e = [e]), onPostRuns.push(...e)), callRuntimeCallbacks(onPostRuns);
	}
	function abort(e) {
		throw Module.onAbort?.(e), e = `Aborted(${e})`, err(e), ABORT = !0, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e);
	}
	var wasmBinaryFile;
	function findWasmBinary() {
		return Module.locateFile ? locateFile("initdb.wasm") : new URL("initdb.wasm", import.meta.url).href;
	}
	function getBinarySync(e) {
		if (readBinary) return readBinary(e);
		throw "both async and sync fetching of the wasm failed";
	}
	async function getWasmBinary(e) {
		if (!wasmBinary) try {
			var r = await readAsync(e);
			return new Uint8Array(r);
		} catch {}
		return getBinarySync(e);
	}
	async function instantiateArrayBuffer(e, r) {
		try {
			var t = await getWasmBinary(e);
			return await WebAssembly.instantiate(t, r);
		} catch (i) {
			err(`failed to asynchronously prepare wasm: ${i}`), abort(i);
		}
	}
	async function instantiateAsync(e, r, t) {
		if (!e && !ENVIRONMENT_IS_NODE) try {
			var n = fetch(r, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(n, t);
		} catch (o) {
			err(`wasm streaming compile failed: ${o}`), err("falling back to ArrayBuffer instantiation");
		}
		return instantiateArrayBuffer(r, t);
	}
	function getWasmImports() {
		var e = new Proxy(/* @__PURE__ */ new Set([]), GOTHandler);
		return {
			env: wasmImports,
			wasi_snapshot_preview1: wasmImports,
			"GOT.mem": e,
			"GOT.func": e
		};
	}
	async function createWasm() {
		async function e(o, a) {
			wasmExports = o.exports;
			var s = wasmExports;
			mergeLibSymbols(wasmExports, "main");
			var l = getDylinkMetadata(a);
			return l.neededDynlibs && (dynamicLibraries = l.neededDynlibs.concat(dynamicLibraries)), assignWasmExports(wasmExports), updateGOT(s), updateMemoryViews(), LDSO.init(), await loadDylibs(), wasmExports;
		}
		var r = getWasmImports(), t = Module.instantiateWasm;
		if (t) return new Promise((o) => {
			t(r, (a, s) => o(e(a, s)));
		});
		wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
		return await (function(o) {
			return e(o.instance, o.module);
		})(await instantiateAsync(wasmBinary, wasmBinaryFile, r));
	}
	class ExitStatus {
		constructor(r) {
			P$4(this, "name", "ExitStatus");
			this.message = `Program terminated with exit(${r})`, this.status = r;
		}
	}
	var GOT = {}, GOTHandler = { get(e, r) {
		var t = GOT[r];
		return t || (t = GOT[r] = new WebAssembly.Global({
			value: "i32",
			mutable: !0
		}, -1)), e.has(r) || (t.required = !0), t;
	} }, HEAP16, HEAP32, HEAP64, HEAP8, HEAPF32, HEAPF64, HEAPU16, HEAPU32, HEAPU64, HEAPU8, callRuntimeCallbacks = (e) => {
		for (; e.length > 0;) e.shift()(Module);
	}, onPostRuns = [], onPreRuns = [], UTF8Decoder = globalThis.TextDecoder && new TextDecoder(), findStringEnd = (e, r, t, n) => {
		var i = r + t;
		if (n) return i;
		for (; e[r] && !(r >= i);) ++r;
		return r;
	}, UTF8ArrayToString = (e, r = 0, t, n) => {
		var i = findStringEnd(e, r, t, n);
		if (i - r > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(r, i));
		for (var o = ""; r < i;) {
			var a = e[r++];
			if (!(a & 128)) {
				o += String.fromCharCode(a);
				continue;
			}
			var s = e[r++] & 63;
			if ((a & 224) == 192) {
				o += String.fromCharCode((a & 31) << 6 | s);
				continue;
			}
			var l = e[r++] & 63;
			if ((a & 240) == 224 ? a = (a & 15) << 12 | s << 6 | l : a = (a & 7) << 18 | s << 12 | l << 6 | e[r++] & 63, a < 65536) o += String.fromCharCode(a);
			else {
				var u = a - 65536;
				o += String.fromCharCode(55296 | u >> 10, 56320 | u & 1023);
			}
		}
		return o;
	}, getDylinkMetadata = (e) => {
		var r = 0, t = 0;
		function n() {
			return e[r++];
		}
		function i() {
			for (var d = 0, g = 1;;) {
				var v = e[r++];
				if (d += (v & 127) * g, g *= 128, !(v & 128)) break;
			}
			return d;
		}
		function o() {
			var d = i();
			return r += d, UTF8ArrayToString(e, r - d, d);
		}
		function a() {
			for (var d = i(), g = []; d--;) g.push(o());
			return g;
		}
		function s(d, g) {
			if (d) throw new Error(g);
		}
		if (e instanceof WebAssembly.Module) {
			var l = WebAssembly.Module.customSections(e, "dylink.0");
			s(!l.length, "need dylink section"), e = new Uint8Array(l[0]), t = e.length;
		} else {
			s(!(new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer)[0] == 1836278016), "need to see wasm magic number"), s(e[8], "need the dylink section to be first"), r = 9;
			var _ = i();
			t = r + _;
			s(o() !== "dylink.0");
		}
		for (var f = {
			neededDynlibs: [],
			tlsExports: /* @__PURE__ */ new Set(),
			weakImports: /* @__PURE__ */ new Set(),
			runtimePaths: []
		}; r < t;) {
			var p = n(), F = i();
			if (p === 1) f.memorySize = i(), f.memoryAlign = i(), f.tableSize = i(), f.tableAlign = i();
			else if (p === 2) f.neededDynlibs = a();
			else if (p === 3) for (var S = i(); S--;) {
				var E = o(), y = i();
				y & 256 && f.tlsExports.add(E);
			}
			else if (p === 4) for (S = i(); S--;) o(), E = o(), y = i(), (y & 3) == 1 && f.weakImports.add(E);
			else if (p === 5) f.runtimePaths = a();
			else if (p === 6) {
				var A = o();
				s(A !== "wasm32", `incorrect architecture (${A} vs wasm32)`);
			} else r += F;
		}
		return f;
	}, newDSO = (e, r, t) => {
		var n = {
			refcount: 1 / 0,
			name: e,
			exports: t,
			global: !0
		};
		return LDSO.loadedLibsByName[e] = n, r != null && (LDSO.loadedLibsByHandle[r] = n), n;
	}, LDSO = {
		loadedLibsByName: {},
		loadedLibsByHandle: {},
		init() {
			newDSO("__main__", 0, wasmImports);
		}
	}, alignMemory = (e, r) => Math.ceil(e / r) * r, getMemory = (e) => {
		if (runtimeInitialized) return _calloc(e, 1);
		var r = ___heap_base, t = r + alignMemory(e, 16);
		___heap_base = t;
		var n = _emscripten_get_sbrk_ptr();
		return HEAPU32[n >> 2] = t, r;
	}, isInternalSym = (e) => [
		"memory",
		"__memory_base",
		"__table_base",
		"__stack_pointer",
		"__indirect_function_table",
		"__cpp_exception",
		"__c_longjmp",
		"__wasm_apply_data_relocs",
		"__dso_handle",
		"__tls_size",
		"__tls_align",
		"__set_stack_limits",
		"_emscripten_tls_init",
		"__wasm_init_tls",
		"__wasm_call_ctors",
		"__start_em_asm",
		"__stop_em_asm",
		"__start_em_js",
		"__stop_em_js"
	].includes(e) || e.startsWith("__em_js__"), wasmTableMirror = [], getWasmTableEntry = (e) => {
		var r = wasmTableMirror[e];
		return r || (wasmTableMirror[e] = r = wasmTable.get(e)), r;
	}, updateTableMap = (e, r) => {
		if (functionsInTableMap) for (var t = e; t < e + r; t++) {
			var n = getWasmTableEntry(t);
			n && functionsInTableMap.set(n, t);
		}
	}, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => freeTableIndexes.length ? freeTableIndexes.pop() : wasmTable.grow(1), setWasmTableEntry = (e, r) => {
		wasmTable.set(e, r), wasmTableMirror[e] = wasmTable.get(e);
	}, uleb128EncodeWithLen = (e) => {
		let r = e.length;
		return [
			r % 128 | 128,
			r >> 7,
			...e
		];
	}, wasmTypeCodes = {
		i: 127,
		p: 127,
		j: 126,
		f: 125,
		d: 124,
		e: 111
	}, generateTypePack = (e) => uleb128EncodeWithLen(Array.from(e, (r) => {
		return wasmTypeCodes[r];
	})), convertJsFunctionToWasm = (e, r) => {
		var t = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, ...uleb128EncodeWithLen([
			1,
			96,
			...generateTypePack(r.slice(1)),
			...generateTypePack(r[0] === "v" ? "" : r[0])
		]), 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), n = new WebAssembly.Module(t);
		return new WebAssembly.Instance(n, { e: { f: e } }).exports.f;
	}, addFunction = (e, r) => {
		var t = getFunctionAddress(e);
		if (t) return t;
		var n = getEmptyTableSlot();
		try {
			setWasmTableEntry(n, e);
		} catch (o) {
			if (!(o instanceof TypeError)) throw o;
			setWasmTableEntry(n, convertJsFunctionToWasm(e, r));
		}
		return functionsInTableMap.set(e, n), n;
	}, updateGOT = (e, r) => {
		for (var t in e) if (!isInternalSym(t)) {
			var n = e[t], i = GOT[t] && GOT[t].value != -1;
			if (r || !i) {
				var o;
				if (typeof n == "function") o = addFunction(n);
				else if (typeof n.value == "number") o = n;
				else continue;
				GOT[t] ?? (GOT[t] = new WebAssembly.Global({
					value: "i32",
					mutable: !0
				})), GOT[t].value = o;
			}
		}
	}, isImmutableGlobal = (e) => {
		if (e instanceof WebAssembly.Global) try {
			e.value = e.value;
		} catch {
			return !0;
		}
		return !1;
	}, relocateExports = (e, r = 0) => {
		function t(o, a) {
			return isImmutableGlobal(a) ? new WebAssembly.Global({ value: "i32" }, a.value + r) : a;
		}
		var n = {};
		for (var i in e) n[i] = t(0, e[i]);
		return n;
	}, isSymbolDefined = (e) => {
		var r = wasmImports[e];
		return !(!r || r.stub);
	}, createNamedFunction = (e, r) => Object.defineProperty(r, "name", { value: e }), dynCall = (e, r, t = []) => {
		return (function(o) {
			return o;
		})(getWasmTableEntry(r)(...t));
	}, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (r, ...t) => {
		var n = stackSave();
		try {
			return dynCall(e, r, t);
		} catch (i) {
			if (stackRestore(n), !(i instanceof EmscriptenEH)) throw i;
			if (_setThrew(1, 0), e[0] == "j") return 0n;
		}
	}, resolveGlobalSymbol = (e) => {
		var r;
		return isSymbolDefined(e) ? r = wasmImports[e] : e.startsWith("invoke_") && (r = wasmImports[e] = createNamedFunction(e, createInvokeFunction(e.split("_")[1]))), {
			sym: r,
			name: e
		};
	}, onPostCtors = [], addOnPostCtor = (e) => {
		onPostCtors.push(e);
	}, UTF8ToString = (e, r, t) => e ? UTF8ArrayToString(HEAPU8, e, r, t) : "", loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
		var metadata = getDylinkMetadata(binary);
		function loadModule() {
			var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
			handle && (HEAP8[handle + 8] = 1, HEAPU32[handle + 12 >> 2] = memoryBase, HEAP32[handle + 16 >> 2] = metadata.memorySize, HEAPU32[handle + 20 >> 2] = tableBase, HEAP32[handle + 24 >> 2] = metadata.tableSize), metadata.tableSize && wasmTable.grow(metadata.tableSize);
			var moduleExports;
			function resolveSymbol(e) {
				var r = resolveGlobalSymbol(e).sym;
				return !r && localScope && (r = localScope[e]), r || (r = moduleExports[e]), r;
			}
			var proxyHandler = { get(e, r) {
				switch (r) {
					case "__memory_base": return memoryBase;
					case "__table_base": return tableBase;
				}
				if (r in wasmImports && !wasmImports[r].stub) return wasmImports[r];
				if (!(r in e)) {
					var n;
					e[r] = (...i) => (n || (n = resolveSymbol(r)), n(...i));
				}
				return e[r];
			} }, proxy = new Proxy({}, proxyHandler), GOTProxy = new Proxy(metadata.weakImports, GOTHandler), info = {
				"GOT.mem": GOTProxy,
				"GOT.func": GOTProxy,
				env: proxy,
				wasi_snapshot_preview1: proxy
			};
			function postInstantiation(module, instance) {
				updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), updateGOT(moduleExports), flags.allowUndefined || reportUndefinedSymbols();
				function addEmAsm(addr, body) {
					for (var args = [], arity = 0;; arity++) {
						var argName = "$" + arity;
						if (!body.includes(argName)) break;
						args.push(argName);
					}
					args = args.join();
					var func = `(${args}) => { ${body} };`;
					ASM_CONSTS[start] = eval(func);
				}
				if ("__start_em_asm" in moduleExports) for (var start = moduleExports.__start_em_asm.value, stop = moduleExports.__stop_em_asm.value; start < stop;) {
					var jsString = UTF8ToString(start);
					addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
				}
				function addEmJs(name, cSig, body) {
					var jsArgs = [];
					if (cSig = cSig.slice(1, -1), cSig != "void") {
						cSig = cSig.split(",");
						for (var arg of cSig) {
							var jsArg = arg.split(" ").pop();
							jsArgs.push(jsArg.replaceAll("*", ""));
						}
					}
					var func = `(${jsArgs}) => ${body};`;
					moduleExports[name] = eval(func);
				}
				for (var name in moduleExports) if (name.startsWith("__em_js__")) {
					var start = moduleExports[name].value, jsString = UTF8ToString(start), [sig, body] = jsString.split("<::>");
					addEmJs(name.replace("__em_js__", ""), sig, body), delete moduleExports[name];
				}
				var applyRelocs = moduleExports.__wasm_apply_data_relocs;
				applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
				var init = moduleExports.__wasm_call_ctors;
				return init && (runtimeInitialized ? init() : addOnPostCtor(init)), moduleExports;
			}
			if (flags.loadAsync) return (async () => {
				var e;
				return binary instanceof WebAssembly.Module ? e = new WebAssembly.Instance(binary, info) : {module: binary, instance: e} = await WebAssembly.instantiate(binary, info), postInstantiation(binary, e);
			})();
			var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
			return postInstantiation(module, instance);
		}
		if (flags = {
			...flags,
			rpath: {
				parentLibPath: libName,
				paths: metadata.runtimePaths
			}
		}, flags.loadAsync) return metadata.neededDynlibs.reduce((e, r) => e.then(() => (r = findLibraryFS(r, flags.rpath) ?? r, loadDynamicLibrary(r, flags, localScope))), Promise.resolve()).then(loadModule);
		for (var needed of metadata.neededDynlibs) needed = findLibraryFS(needed, flags.rpath) ?? needed, loadDynamicLibrary(needed, flags, localScope);
		return loadModule();
	}, mergeLibSymbols = (e) => {
		for (var [r, t] of Object.entries(e)) {
			let n = (o) => {
				isSymbolDefined(o) || (wasmImports[o] = t);
			};
			n(r);
			let i = "__main_argc_argv";
			r == "main" && n(i), r == i && n("main");
		}
	}, asyncLoad = async (e) => {
		var r = await readAsync(e);
		return new Uint8Array(r);
	}, preloadPlugins = [], registerWasmPlugin = () => {
		preloadPlugins.push({
			canHandle: (r) => !Module.noWasmDecoding && r.endsWith(".so"),
			handle: async (r, t) => {
				try {
					var n = await loadWebAssemblyModule(r, {
						loadAsync: !0,
						nodelete: !0
					}, t, {});
				} catch (i) {
					throw new Error(`failed to instantiate wasm: ${t}: ${i}`);
				}
				return preloadedWasm[t] = n, r;
			}
		});
	}, preloadedWasm = {}, PATH = {
		isAbs: (e) => e.charAt(0) === "/",
		splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
		normalizeArray: (e, r) => {
			for (var t = 0, n = e.length - 1; n >= 0; n--) {
				var i = e[n];
				i === "." ? e.splice(n, 1) : i === ".." ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
			}
			if (r) for (; t; t--) e.unshift("..");
			return e;
		},
		normalize: (e) => {
			var r = PATH.isAbs(e), t = e.slice(-1) === "/";
			return e = PATH.normalizeArray(e.split("/").filter((n) => !!n), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
		},
		dirname: (e) => {
			var r = PATH.splitPath(e), t = r[0], n = r[1];
			return !t && !n ? "." : (n && (n = n.slice(0, -1)), t + n);
		},
		basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
		join: (...e) => PATH.normalize(e.join("/")),
		join2: (e, r) => PATH.normalize(e + "/" + r)
	}, replaceORIGIN = (e, r) => {
		if (r.startsWith("$ORIGIN")) {
			var t = PATH.dirname(e);
			return r.replace("$ORIGIN", t);
		}
		return r;
	}, withStackSave = (e) => {
		var r = stackSave(), t = e();
		return stackRestore(r), t;
	}, stackAlloc = (e) => __emscripten_stack_alloc(e), lengthBytesUTF8 = (e) => {
		for (var r = 0, t = 0; t < e.length; ++t) {
			var n = e.charCodeAt(t);
			n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3;
		}
		return r;
	}, stringToUTF8Array = (e, r, t, n) => {
		if (!(n > 0)) return 0;
		for (var i = t, o = t + n - 1, a = 0; a < e.length; ++a) {
			var s = e.codePointAt(a);
			if (s <= 127) {
				if (t >= o) break;
				r[t++] = s;
			} else if (s <= 2047) {
				if (t + 1 >= o) break;
				r[t++] = 192 | s >> 6, r[t++] = 128 | s & 63;
			} else if (s <= 65535) {
				if (t + 2 >= o) break;
				r[t++] = 224 | s >> 12, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | s & 63;
			} else {
				if (t + 3 >= o) break;
				r[t++] = 240 | s >> 18, r[t++] = 128 | s >> 12 & 63, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | s & 63, a++;
			}
		}
		return r[t] = 0, t - i;
	}, stringToUTF8 = (e, r, t) => stringToUTF8Array(e, HEAPU8, r, t), stringToUTF8OnStack = (e) => {
		var r = lengthBytesUTF8(e) + 1, t = stackAlloc(r);
		return stringToUTF8(e, t, r), t;
	}, initRandomFill = () => {
		if (ENVIRONMENT_IS_NODE) {
			var e = require("node:crypto");
			return (r) => (e.randomFillSync(r), 0);
		}
		return (r) => (crypto.getRandomValues(r), 0);
	}, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = {
		resolve: (...e) => {
			for (var r = "", t = !1, n = e.length - 1; n >= -1 && !t; n--) {
				var i = n >= 0 ? e[n] : FS.cwd();
				if (typeof i != "string") throw new TypeError("Arguments to path.resolve must be strings");
				if (!i) return "";
				r = i + "/" + r, t = PATH.isAbs(i);
			}
			return r = PATH.normalizeArray(r.split("/").filter((o) => !!o), !t).join("/"), (t ? "/" : "") + r || ".";
		},
		relative: (e, r) => {
			e = PATH_FS.resolve(e).slice(1), r = PATH_FS.resolve(r).slice(1);
			function t(u) {
				for (var c = 0; c < u.length && u[c] === ""; c++);
				for (var _ = u.length - 1; _ >= 0 && u[_] === ""; _--);
				return c > _ ? [] : u.slice(c, _ - c + 1);
			}
			for (var n = t(e.split("/")), i = t(r.split("/")), o = Math.min(n.length, i.length), a = o, s = 0; s < o; s++) if (n[s] !== i[s]) {
				a = s;
				break;
			}
			var l = [];
			for (s = a; s < n.length; s++) l.push("..");
			return l = l.concat(i.slice(a)), l.join("/");
		}
	}, FS_stdin_getChar_buffer = [], intArrayFromString = (e, r, t) => {
		var n = t > 0 ? t : lengthBytesUTF8(e) + 1, i = new Array(n), o = stringToUTF8Array(e, i, 0, i.length);
		return r && (i.length = o), i;
	}, FS_stdin_getChar = () => {
		if (!FS_stdin_getChar_buffer.length) {
			var e = null;
			if (ENVIRONMENT_IS_NODE) {
				var r = Buffer.alloc(256), t = 0;
				try {
					t = fs.readSync(process.stdin.fd, r, 0, 256);
				} catch (n) {
					if (n.toString().includes("EOF")) t = 0;
					else throw n;
				}
				t > 0 && (e = r.toString("utf-8", 0, t));
			} else globalThis.window?.prompt && (e = window.prompt("Input: "), e !== null && (e += `
`));
			if (!e) return null;
			FS_stdin_getChar_buffer = intArrayFromString(e, !0);
		}
		return FS_stdin_getChar_buffer.shift();
	}, TTY = {
		ttys: [],
		init() {},
		shutdown() {},
		register(e, r) {
			TTY.ttys[e] = {
				input: [],
				output: [],
				ops: r
			}, FS.registerDevice(e, TTY.stream_ops);
		},
		stream_ops: {
			open(e) {
				var r = TTY.ttys[e.node.rdev];
				if (!r) throw new FS.ErrnoError(43);
				e.tty = r, e.seekable = !1;
			},
			close(e) {
				e.tty.ops.fsync(e.tty);
			},
			fsync(e) {
				e.tty.ops.fsync(e.tty);
			},
			read(e, r, t, n, i) {
				if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
				for (var o = 0, a = 0; a < n; a++) {
					var s;
					try {
						s = e.tty.ops.get_char(e.tty);
					} catch {
						throw new FS.ErrnoError(29);
					}
					if (s === void 0 && !o) throw new FS.ErrnoError(6);
					if (s == null || (o++, r[t + a] = s, s === 10)) break;
				}
				return o && (e.node.atime = Date.now()), o;
			},
			write(e, r, t, n, i) {
				if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
				try {
					for (var o = 0; o < n; o++) e.tty.ops.put_char(e.tty, r[t + o]);
				} catch {
					throw new FS.ErrnoError(29);
				}
				return n && (e.node.mtime = e.node.ctime = Date.now()), o;
			}
		},
		default_tty_ops: {
			get_char(e) {
				return FS_stdin_getChar();
			},
			put_char(e, r) {
				r === null || r === 10 ? (out(UTF8ArrayToString(e.output)), e.output = []) : r != 0 && e.output.push(r);
			},
			fsync(e) {
				e.output?.length > 0 && (out(UTF8ArrayToString(e.output)), e.output = []);
			},
			ioctl_tcgets(e) {
				return {
					c_iflag: 25856,
					c_oflag: 5,
					c_cflag: 191,
					c_lflag: 35387,
					c_cc: [
						3,
						28,
						127,
						21,
						4,
						0,
						1,
						0,
						17,
						19,
						26,
						0,
						18,
						15,
						23,
						22,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]
				};
			},
			ioctl_tcsets(e, r, t) {
				return 0;
			},
			ioctl_tiocgwinsz(e) {
				return [24, 80];
			}
		},
		default_tty1_ops: {
			put_char(e, r) {
				r === null || r === 10 ? (err(UTF8ArrayToString(e.output)), e.output = []) : r != 0 && e.output.push(r);
			},
			fsync(e) {
				e.output?.length > 0 && (err(UTF8ArrayToString(e.output)), e.output = []);
			}
		}
	}, zeroMemory = (e, r) => HEAPU8.fill(0, e, e + r), mmapAlloc = (e) => {
		e = alignMemory(e, 65536);
		var r = _emscripten_builtin_memalign(65536, e);
		return r && zeroMemory(r, e), r;
	}, MEMFS = {
		ops_table: null,
		mount(e) {
			return MEMFS.createNode(null, "/", 16895, 0);
		},
		createNode(e, r, t, n) {
			if (FS.isBlkdev(t) || FS.isFIFO(t)) throw new FS.ErrnoError(63);
			MEMFS.ops_table || (MEMFS.ops_table = {
				dir: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr,
						lookup: MEMFS.node_ops.lookup,
						mknod: MEMFS.node_ops.mknod,
						rename: MEMFS.node_ops.rename,
						unlink: MEMFS.node_ops.unlink,
						rmdir: MEMFS.node_ops.rmdir,
						readdir: MEMFS.node_ops.readdir,
						symlink: MEMFS.node_ops.symlink
					},
					stream: { llseek: MEMFS.stream_ops.llseek }
				},
				file: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr
					},
					stream: {
						llseek: MEMFS.stream_ops.llseek,
						read: MEMFS.stream_ops.read,
						write: MEMFS.stream_ops.write,
						mmap: MEMFS.stream_ops.mmap,
						msync: MEMFS.stream_ops.msync
					}
				},
				link: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr,
						readlink: MEMFS.node_ops.readlink
					},
					stream: {}
				},
				chrdev: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr
					},
					stream: FS.chrdev_stream_ops
				}
			});
			var i = FS.createNode(e, r, t, n);
			return FS.isDir(i.mode) ? (i.node_ops = MEMFS.ops_table.dir.node, i.stream_ops = MEMFS.ops_table.dir.stream, i.contents = {}) : FS.isFile(i.mode) ? (i.node_ops = MEMFS.ops_table.file.node, i.stream_ops = MEMFS.ops_table.file.stream, i.usedBytes = 0, i.contents = MEMFS.emptyFileContents ?? (MEMFS.emptyFileContents = /* @__PURE__ */ new Uint8Array(0))) : FS.isLink(i.mode) ? (i.node_ops = MEMFS.ops_table.link.node, i.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(i.mode) && (i.node_ops = MEMFS.ops_table.chrdev.node, i.stream_ops = MEMFS.ops_table.chrdev.stream), i.atime = i.mtime = i.ctime = Date.now(), e && (e.contents[r] = i, e.atime = e.mtime = e.ctime = i.atime), i;
		},
		getFileDataAsTypedArray(e) {
			return e.contents.subarray(0, e.usedBytes);
		},
		expandFileStorage(e, r) {
			var t = e.contents.length;
			if (!(t >= r)) {
				r = Math.max(r, t * (t < 1048576 ? 2 : 1.125) >>> 0), t && (r = Math.max(r, 256));
				var n = MEMFS.getFileDataAsTypedArray(e);
				e.contents = new Uint8Array(r), e.contents.set(n);
			}
		},
		resizeFileStorage(e, r) {
			if (e.usedBytes != r) {
				var t = e.contents;
				e.contents = new Uint8Array(r), e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
			}
		},
		node_ops: {
			getattr(e) {
				var r = {};
				return r.dev = FS.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, FS.isDir(e.mode) ? r.size = 4096 : FS.isFile(e.mode) ? r.size = e.usedBytes : FS.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
			},
			setattr(e, r) {
				for (let t of [
					"mode",
					"atime",
					"mtime",
					"ctime"
				]) r[t] != null && (e[t] = r[t]);
				r.size !== void 0 && MEMFS.resizeFileStorage(e, r.size);
			},
			lookup(e, r) {
				throw MEMFS.doesNotExistError || (MEMFS.doesNotExistError = new FS.ErrnoError(44), MEMFS.doesNotExistError.stack = "<generic error, no stack>"), MEMFS.doesNotExistError;
			},
			mknod(e, r, t, n) {
				return MEMFS.createNode(e, r, t, n);
			},
			rename(e, r, t) {
				var n;
				try {
					n = FS.lookupNode(r, t);
				} catch {}
				if (n && FS.isDir(e.mode)) for (var i in n.contents) throw new FS.ErrnoError(55);
				delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
			},
			unlink(e, r) {
				delete e.contents[r], e.ctime = e.mtime = Date.now();
			},
			rmdir(e, r) {
				for (var n in FS.lookupNode(e, r).contents) throw new FS.ErrnoError(55);
				delete e.contents[r], e.ctime = e.mtime = Date.now();
			},
			readdir(e) {
				return [
					".",
					"..",
					...Object.keys(e.contents)
				];
			},
			symlink(e, r, t) {
				var n = MEMFS.createNode(e, r, 41471, 0);
				return n.link = t, n;
			},
			readlink(e) {
				if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
				return e.link;
			}
		},
		stream_ops: {
			read(e, r, t, n, i) {
				var o = e.node.contents;
				if (i >= e.node.usedBytes) return 0;
				var a = Math.min(e.node.usedBytes - i, n);
				return r.set(o.subarray(i, i + a), t), a;
			},
			write(e, r, t, n, i, o) {
				if (r.buffer === HEAP8.buffer && (o = !1), !n) return 0;
				var a = e.node;
				return a.mtime = a.ctime = Date.now(), o ? (a.contents = r.subarray(t, t + n), a.usedBytes = n) : !a.usedBytes && !i ? (a.contents = r.slice(t, t + n), a.usedBytes = n) : (MEMFS.expandFileStorage(a, i + n), a.contents.set(r.subarray(t, t + n), i), a.usedBytes = Math.max(a.usedBytes, i + n)), n;
			},
			llseek(e, r, t) {
				var n = r;
				if (t === 1 ? n += e.position : t === 2 && FS.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new FS.ErrnoError(28);
				return n;
			},
			mmap(e, r, t, n, i) {
				if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
				var o, a, s = e.node.contents;
				if (!(i & 2) && s.buffer === HEAP8.buffer) a = !1, o = s.byteOffset;
				else {
					if (a = !0, o = mmapAlloc(r), !o) throw new FS.ErrnoError(48);
					s && ((t > 0 || t + r < s.length) && (s.subarray ? s = s.subarray(t, t + r) : s = Array.prototype.slice.call(s, t, t + r)), HEAP8.set(s, o));
				}
				return {
					ptr: o,
					allocated: a
				};
			},
			msync(e, r, t, n, i) {
				return MEMFS.stream_ops.write(e, r, 0, n, t, !1), 0;
			}
		}
	}, FS_modeStringToFlags = (e) => {
		if (typeof e != "string") return e;
		var r = {
			r: 0,
			"r+": 2,
			w: 577,
			"w+": 578,
			a: 1089,
			"a+": 1090
		}[e];
		if (typeof r > "u") throw new Error(`Unknown file open mode: ${e}`);
		return r;
	}, FS_fileDataToTypedArray = (e) => (typeof e == "string" && (e = intArrayFromString(e, !0)), e.subarray || (e = new Uint8Array(e)), e), FS_getMode = (e, r) => {
		var t = 0;
		return e && (t |= 365), r && (t |= 146), t;
	}, ERRNO_CODES = {
		EPERM: 63,
		ENOENT: 44,
		ESRCH: 71,
		EINTR: 27,
		EIO: 29,
		ENXIO: 60,
		E2BIG: 1,
		ENOEXEC: 45,
		EBADF: 8,
		ECHILD: 12,
		EAGAIN: 6,
		EWOULDBLOCK: 6,
		ENOMEM: 48,
		EACCES: 2,
		EFAULT: 21,
		ENOTBLK: 105,
		EBUSY: 10,
		EEXIST: 20,
		EXDEV: 75,
		ENODEV: 43,
		ENOTDIR: 54,
		EISDIR: 31,
		EINVAL: 28,
		ENFILE: 41,
		EMFILE: 33,
		ENOTTY: 59,
		ETXTBSY: 74,
		EFBIG: 22,
		ENOSPC: 51,
		ESPIPE: 70,
		EROFS: 69,
		EMLINK: 34,
		EPIPE: 64,
		EDOM: 18,
		ERANGE: 68,
		ENOMSG: 49,
		EIDRM: 24,
		ECHRNG: 106,
		EL2NSYNC: 156,
		EL3HLT: 107,
		EL3RST: 108,
		ELNRNG: 109,
		EUNATCH: 110,
		ENOCSI: 111,
		EL2HLT: 112,
		EDEADLK: 16,
		ENOLCK: 46,
		EBADE: 113,
		EBADR: 114,
		EXFULL: 115,
		ENOANO: 104,
		EBADRQC: 103,
		EBADSLT: 102,
		EDEADLOCK: 16,
		EBFONT: 101,
		ENOSTR: 100,
		ENODATA: 116,
		ETIME: 117,
		ENOSR: 118,
		ENONET: 119,
		ENOPKG: 120,
		EREMOTE: 121,
		ENOLINK: 47,
		EADV: 122,
		ESRMNT: 123,
		ECOMM: 124,
		EPROTO: 65,
		EMULTIHOP: 36,
		EDOTDOT: 125,
		EBADMSG: 9,
		ENOTUNIQ: 126,
		EBADFD: 127,
		EREMCHG: 128,
		ELIBACC: 129,
		ELIBBAD: 130,
		ELIBSCN: 131,
		ELIBMAX: 132,
		ELIBEXEC: 133,
		ENOSYS: 52,
		ENOTEMPTY: 55,
		ENAMETOOLONG: 37,
		ELOOP: 32,
		EOPNOTSUPP: 138,
		EPFNOSUPPORT: 139,
		ECONNRESET: 15,
		ENOBUFS: 42,
		EAFNOSUPPORT: 5,
		EPROTOTYPE: 67,
		ENOTSOCK: 57,
		ENOPROTOOPT: 50,
		ESHUTDOWN: 140,
		ECONNREFUSED: 14,
		EADDRINUSE: 3,
		ECONNABORTED: 13,
		ENETUNREACH: 40,
		ENETDOWN: 38,
		ETIMEDOUT: 73,
		EHOSTDOWN: 142,
		EHOSTUNREACH: 23,
		EINPROGRESS: 26,
		EALREADY: 7,
		EDESTADDRREQ: 17,
		EMSGSIZE: 35,
		EPROTONOSUPPORT: 66,
		ESOCKTNOSUPPORT: 137,
		EADDRNOTAVAIL: 4,
		ENETRESET: 39,
		EISCONN: 30,
		ENOTCONN: 53,
		ETOOMANYREFS: 141,
		EUSERS: 136,
		EDQUOT: 19,
		ESTALE: 72,
		ENOTSUP: 138,
		ENOMEDIUM: 148,
		EILSEQ: 25,
		EOVERFLOW: 61,
		ECANCELED: 11,
		ENOTRECOVERABLE: 56,
		EOWNERDEAD: 62,
		ESTRPIPE: 135
	}, PROXYFS = {
		mount(e) {
			return PROXYFS.createNode(null, "/", e.opts.fs.lstat(e.opts.root).mode, 0);
		},
		createNode(e, r, t, n) {
			if (!FS.isDir(t) && !FS.isFile(t) && !FS.isLink(t)) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
			var i = FS.createNode(e, r, t);
			return i.node_ops = PROXYFS.node_ops, i.stream_ops = PROXYFS.stream_ops, i;
		},
		realPath(e) {
			for (var r = []; e.parent !== e;) r.push(e.name), e = e.parent;
			return r.push(e.mount.opts.root), r.reverse(), PATH.join(...r);
		},
		node_ops: {
			getattr(e) {
				var r = PROXYFS.realPath(e), t;
				try {
					t = e.mount.opts.fs.lstat(r);
				} catch (n) {
					throw n.code ? new FS.ErrnoError(ERRNO_CODES[n.code]) : n;
				}
				return {
					dev: t.dev,
					ino: t.ino,
					mode: t.mode,
					nlink: t.nlink,
					uid: t.uid,
					gid: t.gid,
					rdev: t.rdev,
					size: t.size,
					atime: t.atime,
					mtime: t.mtime,
					ctime: t.ctime,
					blksize: t.blksize,
					blocks: t.blocks
				};
			},
			setattr(e, r) {
				var t = PROXYFS.realPath(e);
				try {
					if (r.mode !== void 0 && (e.mount.opts.fs.chmod(t, r.mode), e.mode = r.mode), r.atime || r.mtime) {
						var n = new Date(r.atime || r.mtime), i = new Date(r.mtime || r.atime);
						e.mount.opts.fs.utime(t, n, i);
					}
					r.size !== void 0 && e.mount.opts.fs.truncate(t, r.size);
				} catch (o) {
					throw o.code ? new FS.ErrnoError(ERRNO_CODES[o.code]) : o;
				}
			},
			lookup(e, r) {
				try {
					var t = PATH.join2(PROXYFS.realPath(e), r), n = e.mount.opts.fs.lstat(t).mode;
					return PROXYFS.createNode(e, r, n);
				} catch (o) {
					throw o.code ? new FS.ErrnoError(ERRNO_CODES[o.code]) : o;
				}
			},
			mknod(e, r, t, n) {
				var i = PROXYFS.createNode(e, r, t, n), o = PROXYFS.realPath(i);
				try {
					FS.isDir(i.mode) ? i.mount.opts.fs.mkdir(o, i.mode) : i.mount.opts.fs.writeFile(o, "", { mode: i.mode });
				} catch (a) {
					throw a.code ? new FS.ErrnoError(ERRNO_CODES[a.code]) : a;
				}
				return i;
			},
			rename(e, r, t) {
				var n = PROXYFS.realPath(e), i = PATH.join2(PROXYFS.realPath(r), t);
				try {
					e.mount.opts.fs.rename(n, i), e.name = t;
				} catch (o) {
					throw o.code ? new FS.ErrnoError(ERRNO_CODES[o.code]) : o;
				}
			},
			unlink(e, r) {
				var t = PATH.join2(PROXYFS.realPath(e), r);
				try {
					e.mount.opts.fs.unlink(t);
				} catch (n) {
					throw n.code ? new FS.ErrnoError(ERRNO_CODES[n.code]) : n;
				}
			},
			rmdir(e, r) {
				var t = PATH.join2(PROXYFS.realPath(e), r);
				try {
					e.mount.opts.fs.rmdir(t);
				} catch (n) {
					throw n.code ? new FS.ErrnoError(ERRNO_CODES[n.code]) : n;
				}
			},
			readdir(e) {
				var r = PROXYFS.realPath(e);
				try {
					return e.mount.opts.fs.readdir(r);
				} catch (t) {
					throw t.code ? new FS.ErrnoError(ERRNO_CODES[t.code]) : t;
				}
			},
			symlink(e, r, t) {
				var n = PATH.join2(PROXYFS.realPath(e), r);
				try {
					e.mount.opts.fs.symlink(t, n);
				} catch (i) {
					throw i.code ? new FS.ErrnoError(ERRNO_CODES[i.code]) : i;
				}
			},
			readlink(e) {
				var r = PROXYFS.realPath(e);
				try {
					return e.mount.opts.fs.readlink(r);
				} catch (t) {
					throw t.code ? new FS.ErrnoError(ERRNO_CODES[t.code]) : t;
				}
			}
		},
		stream_ops: {
			open(e) {
				var r = PROXYFS.realPath(e.node);
				try {
					e.nfd = e.node.mount.opts.fs.open(r, e.flags);
				} catch (t) {
					throw t.code ? new FS.ErrnoError(ERRNO_CODES[t.code]) : t;
				}
			},
			close(e) {
				try {
					e.node.mount.opts.fs.close(e.nfd);
				} catch (r) {
					throw r.code ? new FS.ErrnoError(ERRNO_CODES[r.code]) : r;
				}
			},
			read(e, r, t, n, i) {
				try {
					return e.node.mount.opts.fs.read(e.nfd, r, t, n, i);
				} catch (o) {
					throw o.code ? new FS.ErrnoError(ERRNO_CODES[o.code]) : o;
				}
			},
			write(e, r, t, n, i) {
				try {
					return e.node.mount.opts.fs.write(e.nfd, r, t, n, i);
				} catch (o) {
					throw o.code ? new FS.ErrnoError(ERRNO_CODES[o.code]) : o;
				}
			},
			llseek(e, r, t) {
				var n = r;
				if (t === 1) n += e.position;
				else if (t === 2 && FS.isFile(e.node.mode)) try {
					var i = e.node.node_ops.getattr(e.node);
					n += i.size;
				} catch (o) {
					throw new FS.ErrnoError(ERRNO_CODES[o.code]);
				}
				if (n < 0) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
				return n;
			}
		}
	}, FS_createDataFile = (...e) => FS.createDataFile(...e), getUniqueRunDependency = (e) => e, dependenciesPromise = null, resolveRunDependencies = async () => dependenciesPromise, runDependencies = 0, dependenciesPromiseResolve = null, removeRunDependency = () => {
		runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies || dependenciesPromiseResolve();
	}, addRunDependency = () => {
		runDependencies || (dependenciesPromise = new Promise((e) => dependenciesPromiseResolve = e)), runDependencies++, Module.monitorRunDependencies?.(runDependencies);
	}, FS_handledByPreloadPlugin = async (e, r) => {
		typeof Browser < "u" && Browser.init();
		for (var t of preloadPlugins) if (t.canHandle(r)) return t.handle(e, r);
		return e;
	}, FS_preloadFile = async (e, r, t, n, i, o, a, s) => {
		var l = r ? PATH_FS.resolve(PATH.join2(e, r)) : e, u = getUniqueRunDependency(`cp ${l}`);
		addRunDependency(u);
		try {
			var c = t;
			typeof t == "string" && (c = await asyncLoad(t)), c = await FS_handledByPreloadPlugin(c, l), s?.(), o || FS_createDataFile(e, r, c, n, i, a);
		} finally {
			removeRunDependency(u);
		}
	}, FS_createPreloadedFile = (e, r, t, n, i, o, a, s, l, u) => {
		FS_preloadFile(e, r, t, n, i, s, l, u).then(o).catch(a);
	}, FS = {
		root: null,
		mounts: [],
		devices: {},
		streams: [],
		nextInode: 1,
		nameTable: [],
		currentPath: "/",
		initialized: !1,
		ignorePermissions: !0,
		syncFSRequests: 0,
		ErrnoError: class {
			constructor(e) {
				P$4(this, "name", "ErrnoError");
				this.errno = e;
			}
		},
		FSStream: class {
			constructor() {
				P$4(this, "shared", {});
			}
			get object() {
				return this.node;
			}
			set object(e) {
				this.node = e;
			}
			get isRead() {
				return (this.flags & 2097155) !== 1;
			}
			get isWrite() {
				return (this.flags & 2097155) !== 0;
			}
			get isAppend() {
				return this.flags & 1024;
			}
			get flags() {
				return this.shared.flags;
			}
			set flags(e) {
				this.shared.flags = e;
			}
			get position() {
				return this.shared.position;
			}
			set position(e) {
				this.shared.position = e;
			}
		},
		FSNode: class {
			constructor(e, r, t, n) {
				P$4(this, "node_ops", {});
				P$4(this, "stream_ops", {});
				P$4(this, "readMode", 365);
				P$4(this, "writeMode", 146);
				P$4(this, "mounted", null);
				e || (e = this), this.parent = e, this.mount = e.mount, this.id = FS.nextInode++, this.name = r, this.mode = t, this.rdev = n, this.atime = this.mtime = this.ctime = Date.now();
			}
			get read() {
				return (this.mode & this.readMode) === this.readMode;
			}
			set read(e) {
				e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
			}
			get write() {
				return (this.mode & this.writeMode) === this.writeMode;
			}
			set write(e) {
				e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
			}
			get isFolder() {
				return FS.isDir(this.mode);
			}
			get isDevice() {
				return FS.isChrdev(this.mode);
			}
			addListener(e, r = !1) {
				var t = {
					cb: e,
					exclusive: r
				}, n = this.listeners ?? (this.listeners = /* @__PURE__ */ new Set());
				return n.add(t), {
					listeners: n,
					entry: t
				};
			}
			notifyListeners(e) {
				if (this.listeners) {
					var r;
					for (var t of this.listeners) t.exclusive ? (r || (r = [])).push(t) : t.cb(e);
					if (r) {
						var n = (this.exclTurn || 0) % r.length;
						this.exclTurn = n + 1, r[n].cb(e);
					}
				}
			}
		},
		lookupPath(e, r = {}) {
			if (!e) throw new FS.ErrnoError(44);
			r.follow_mount ?? (r.follow_mount = !0), PATH.isAbs(e) || (e = FS.cwd() + "/" + e);
			e: for (var t = 0; t < 40; t++) {
				for (var n = e.split("/").filter((u) => !!u), i = FS.root, o = "/", a = 0; a < n.length; a++) {
					var s = a === n.length - 1;
					if (s && r.parent) break;
					if (n[a] !== ".") {
						if (n[a] === "..") {
							if (o = PATH.dirname(o), FS.isRoot(i)) {
								e = o + "/" + n.slice(a + 1).join("/"), t--;
								continue e;
							} else i = i.parent;
							continue;
						}
						o = PATH.join2(o, n[a]);
						try {
							i = FS.lookupNode(i, n[a]);
						} catch (u) {
							if (u?.errno === 44 && s && r.noent_okay) return { path: o };
							throw u;
						}
						if (FS.isMountpoint(i) && (!s || r.follow_mount) && (i = i.mounted.root), FS.isLink(i.mode) && (!s || r.follow)) {
							if (!i.node_ops.readlink) throw new FS.ErrnoError(52);
							var l = i.node_ops.readlink(i);
							PATH.isAbs(l) || (l = PATH.dirname(o) + "/" + l), e = l + "/" + n.slice(a + 1).join("/");
							continue e;
						}
					}
				}
				return {
					path: o,
					node: i
				};
			}
			throw new FS.ErrnoError(32);
		},
		getPath(e) {
			for (var r;;) {
				if (FS.isRoot(e)) {
					var t = e.mount.mountpoint;
					return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
				}
				r = r ? `${e.name}/${r}` : e.name, e = e.parent;
			}
		},
		hashName(e, r) {
			for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
			return (e + t >>> 0) % FS.nameTable.length;
		},
		hashAddNode(e) {
			var r = FS.hashName(e.parent.id, e.name);
			e.name_next = FS.nameTable[r], FS.nameTable[r] = e;
		},
		hashRemoveNode(e) {
			var r = FS.hashName(e.parent.id, e.name);
			if (FS.nameTable[r] === e) FS.nameTable[r] = e.name_next;
			else for (var t = FS.nameTable[r]; t;) {
				if (t.name_next === e) {
					t.name_next = e.name_next;
					break;
				}
				t = t.name_next;
			}
		},
		lookupNode(e, r) {
			var t = FS.mayLookup(e);
			if (t) throw new FS.ErrnoError(t);
			for (var n = FS.hashName(e.id, r), i = FS.nameTable[n]; i; i = i.name_next) {
				var o = i.name;
				if (i.parent.id === e.id && o === r) return i;
			}
			return FS.lookup(e, r);
		},
		createNode(e, r, t, n) {
			var i = new FS.FSNode(e, r, t, n);
			return FS.hashAddNode(i), i;
		},
		destroyNode(e) {
			FS.hashRemoveNode(e);
		},
		isRoot(e) {
			return e === e.parent;
		},
		isMountpoint(e) {
			return !!e.mounted;
		},
		isFile(e) {
			return (e & 61440) === 32768;
		},
		isDir(e) {
			return (e & 61440) === 16384;
		},
		isLink(e) {
			return (e & 61440) === 40960;
		},
		isChrdev(e) {
			return (e & 61440) === 8192;
		},
		isBlkdev(e) {
			return (e & 61440) === 24576;
		},
		isFIFO(e) {
			return (e & 61440) === 4096;
		},
		isSocket(e) {
			return (e & 49152) === 49152;
		},
		flagsToPermissionString(e) {
			var r = [
				"r",
				"w",
				"rw"
			][e & 3];
			return e & 512 && (r += "w"), r;
		},
		nodePermissions(e, r) {
			return FS.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
		},
		mayLookup(e) {
			if (!FS.isDir(e.mode)) return 54;
			return FS.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2);
		},
		mayCreate(e, r) {
			if (!FS.isDir(e.mode)) return 54;
			try {
				return FS.lookupNode(e, r), 20;
			} catch {}
			return FS.nodePermissions(e, "wx");
		},
		mayDelete(e, r, t) {
			var n;
			try {
				n = FS.lookupNode(e, r);
			} catch (o) {
				return o.errno;
			}
			var i = FS.nodePermissions(e, "wx");
			if (i) return i;
			if (t) {
				if (!FS.isDir(n.mode)) return 54;
				if (FS.isRoot(n) || FS.getPath(n) === FS.cwd()) return 10;
			} else if (FS.isDir(n.mode)) return 31;
			return 0;
		},
		mayOpen(e, r) {
			if (!e) return 44;
			if (FS.isLink(e.mode)) return 32;
			var t = FS.flagsToPermissionString(r);
			return FS.isDir(e.mode) && (t !== "r" || r & 576) ? 31 : FS.nodePermissions(e, t);
		},
		checkOpExists(e, r) {
			if (!e) throw new FS.ErrnoError(r);
			return e;
		},
		MAX_OPEN_FDS: 4096,
		nextfd() {
			for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
			throw new FS.ErrnoError(33);
		},
		getStreamChecked(e) {
			var r = FS.getStream(e);
			if (!r) throw new FS.ErrnoError(8);
			return r;
		},
		getStream: (e) => FS.streams[e],
		createStream(e, r = -1) {
			return e = Object.assign(new FS.FSStream(), e), r == -1 && (r = FS.nextfd()), e.fd = r, FS.streams[r] = e, e;
		},
		closeStream(e) {
			FS.streams[e] = null;
		},
		dupStream(e, r = -1) {
			var t = FS.createStream(e, r);
			return t.stream_ops?.dup?.(t), t;
		},
		doSetAttr(e, r, t) {
			var n = e?.stream_ops.setattr, i = n ? e : r;
			n ?? (n = r.node_ops.setattr), FS.checkOpExists(n, 63);
			try {
				n(i, t);
			} catch (o) {
				throw o instanceof RangeError ? new FS.ErrnoError(22) : o;
			}
		},
		chrdev_stream_ops: {
			open(e) {
				e.stream_ops = FS.getDevice(e.node.rdev).stream_ops, e.stream_ops.open?.(e);
			},
			llseek() {
				throw new FS.ErrnoError(70);
			}
		},
		major: (e) => e >> 8,
		minor: (e) => e & 255,
		makedev: (e, r) => e << 8 | r,
		registerDevice(e, r) {
			FS.devices[e] = { stream_ops: r };
		},
		getDevice: (e) => FS.devices[e],
		getMounts(e) {
			for (var r = [], t = [e]; t.length;) {
				var n = t.pop();
				r.push(n), t.push(...n.mounts);
			}
			return r;
		},
		syncfs(e, r) {
			typeof e == "function" && (r = e, e = !1), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
			var t = FS.getMounts(FS.root.mount), n = 0;
			function i(s) {
				return FS.syncFSRequests--, r(s);
			}
			function o(s) {
				if (s) return o.errored ? void 0 : (o.errored = !0, i(s));
				++n >= t.length && i(null);
			}
			for (var a of t) a.type.syncfs ? a.type.syncfs(a, e, o) : o(null);
		},
		mount(e, r, t) {
			var n = t === "/", i = !t, o;
			if (n && FS.root) throw new FS.ErrnoError(10);
			if (!n && !i) {
				var a = FS.lookupPath(t, { follow_mount: !1 });
				if (t = a.path, o = a.node, FS.isMountpoint(o)) throw new FS.ErrnoError(10);
				if (!FS.isDir(o.mode)) throw new FS.ErrnoError(54);
			}
			var s = {
				type: e,
				opts: r,
				mountpoint: t,
				mounts: []
			}, l = e.mount(s);
			return l.mount = s, s.root = l, n ? FS.root = l : o && (o.mounted = s, o.mount && o.mount.mounts.push(s)), l;
		},
		unmount(e) {
			var r = FS.lookupPath(e, { follow_mount: !1 });
			if (!FS.isMountpoint(r.node)) throw new FS.ErrnoError(28);
			var t = r.node, n = t.mounted, i = FS.getMounts(n);
			for (var [o, a] of Object.entries(FS.nameTable)) for (; a;) {
				var s = a.name_next;
				i.includes(a.mount) && FS.destroyNode(a), a = s;
			}
			t.mounted = null;
			var l = t.mount.mounts.indexOf(n);
			t.mount.mounts.splice(l, 1);
		},
		lookup(e, r) {
			return e.node_ops.lookup(e, r);
		},
		mknod(e, r, t) {
			var i = FS.lookupPath(e, { parent: !0 }).node, o = PATH.basename(e);
			if (!o) throw new FS.ErrnoError(28);
			if (o === "." || o === "..") throw new FS.ErrnoError(20);
			var a = FS.mayCreate(i, o);
			if (a) throw new FS.ErrnoError(a);
			if (!i.node_ops.mknod) throw new FS.ErrnoError(63);
			return i.node_ops.mknod(i, o, r, t);
		},
		statfs(e) {
			return FS.statfsNode(FS.lookupPath(e, { follow: !0 }).node);
		},
		statfsStream(e) {
			return FS.statfsNode(e.node);
		},
		statfsNode(e) {
			var r = {
				bsize: 4096,
				frsize: 4096,
				blocks: 1e6,
				bfree: 5e5,
				bavail: 5e5,
				files: FS.nextInode,
				ffree: FS.nextInode - 1,
				fsid: 42,
				flags: 2,
				namelen: 255
			};
			return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
		},
		create(e, r = 438) {
			return r &= 4095, r |= 32768, FS.mknod(e, r, 0);
		},
		mkdir(e, r = 511) {
			return r &= 1023, r |= 16384, FS.mknod(e, r, 0);
		},
		mkdirTree(e, r = 511) {
			var t = e.split("/"), n = "";
			for (var i of t) if (i) {
				(n || PATH.isAbs(e)) && (n += "/"), n += i;
				try {
					FS.mkdir(n, r);
				} catch (o) {
					if (o.errno != 20) throw o;
				}
			}
		},
		mkdev(e, r, t) {
			return typeof t > "u" && (t = r, r = 438), r |= 8192, FS.mknod(e, r, t);
		},
		symlink(e, r) {
			if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
			var n = FS.lookupPath(r, { parent: !0 }).node;
			if (!n) throw new FS.ErrnoError(44);
			var i = PATH.basename(r), o = FS.mayCreate(n, i);
			if (o) throw new FS.ErrnoError(o);
			if (!n.node_ops.symlink) throw new FS.ErrnoError(63);
			return n.node_ops.symlink(n, i, e);
		},
		link(e, r, t) {
			var i = FS.lookupPath(r, { parent: !0 }).node;
			if (!i) throw new FS.ErrnoError(44);
			var o = PATH.basename(r), a = FS.mayCreate(i, o);
			if (a) throw new FS.ErrnoError(a);
			if (!i.node_ops.link) throw new FS.ErrnoError(34);
			return i.node_ops.link(i, o, e, t);
		},
		rename(e, r) {
			var t = PATH.dirname(e), n = PATH.dirname(r), i = PATH.basename(e), o = PATH.basename(r), a = FS.lookupPath(e, { parent: !0 }), s = a.node, l;
			if (a = FS.lookupPath(r, { parent: !0 }), l = a.node, !s || !l) throw new FS.ErrnoError(44);
			if (s.mount !== l.mount) throw new FS.ErrnoError(75);
			var u = FS.lookupNode(s, i), c = PATH_FS.relative(e, n);
			if (c.charAt(0) !== ".") throw new FS.ErrnoError(28);
			if (c = PATH_FS.relative(r, t), c.charAt(0) !== ".") throw new FS.ErrnoError(55);
			var _;
			try {
				_ = FS.lookupNode(l, o);
			} catch {}
			if (u !== _) {
				var m = FS.isDir(u.mode), f = FS.mayDelete(s, i, m);
				if (f) throw new FS.ErrnoError(f);
				if (f = _ ? FS.mayDelete(l, o, m) : FS.mayCreate(l, o), f) throw new FS.ErrnoError(f);
				if (!s.node_ops.rename) throw new FS.ErrnoError(63);
				if (FS.isMountpoint(u) || _ && FS.isMountpoint(_)) throw new FS.ErrnoError(10);
				if (l !== s && (f = FS.nodePermissions(s, "w"), f)) throw new FS.ErrnoError(f);
				FS.hashRemoveNode(u);
				try {
					s.node_ops.rename(u, l, o), _ && FS.hashRemoveNode(_), u.parent = l;
				} catch (p) {
					throw p;
				} finally {
					FS.hashAddNode(u);
				}
			}
		},
		rmdir(e) {
			var t = FS.lookupPath(e, { parent: !0 }).node, n = PATH.basename(e), i = FS.lookupNode(t, n), o = FS.mayDelete(t, n, !0);
			if (o) throw new FS.ErrnoError(o);
			if (!t.node_ops.rmdir) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(i)) throw new FS.ErrnoError(10);
			t.node_ops.rmdir(t, n), FS.destroyNode(i);
		},
		readdir(e) {
			var t = FS.lookupPath(e, { follow: !0 }).node;
			return FS.checkOpExists(t.node_ops.readdir, 54)(t);
		},
		unlink(e) {
			var t = FS.lookupPath(e, { parent: !0 }).node;
			if (!t) throw new FS.ErrnoError(44);
			var n = PATH.basename(e), i = FS.lookupNode(t, n), o = FS.mayDelete(t, n, !1);
			if (o) throw new FS.ErrnoError(o);
			if (!t.node_ops.unlink) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(i)) throw new FS.ErrnoError(10);
			t.node_ops.unlink(t, n), FS.destroyNode(i);
		},
		readlink(e) {
			var t = FS.lookupPath(e).node;
			if (!t) throw new FS.ErrnoError(44);
			if (!t.node_ops.readlink) throw new FS.ErrnoError(28);
			return t.node_ops.readlink(t);
		},
		stat(e, r = !1) {
			var n = FS.lookupPath(e, { follow: !r }).node;
			return FS.checkOpExists(n.node_ops.getattr, 63)(n);
		},
		fstat(e) {
			var r = FS.getStreamChecked(e), t = r.node, n = r.stream_ops.getattr, i = n ? r : t;
			return n ?? (n = t.node_ops.getattr), FS.checkOpExists(n, 63), n(i);
		},
		lstat(e) {
			return FS.stat(e, !0);
		},
		doChmod(e, r, t, n = !1) {
			FS.doSetAttr(e, r, {
				mode: t & 4095 | r.mode & -4096,
				ctime: Date.now(),
				dontFollow: n
			});
		},
		chmod(e, r, t = !1) {
			var n;
			if (typeof e == "string") n = FS.lookupPath(e, { follow: !t }).node;
			else n = e;
			FS.doChmod(null, n, r, t);
		},
		lchmod(e, r) {
			FS.chmod(e, r, !0);
		},
		fchmod(e, r) {
			var t = FS.getStreamChecked(e);
			FS.doChmod(t, t.node, r, !1);
		},
		doChown(e, r, t = !1) {
			FS.doSetAttr(e, r, {
				timestamp: Date.now(),
				dontFollow: t
			});
		},
		chown(e, r, t, n = !1) {
			var i;
			if (typeof e == "string") i = FS.lookupPath(e, { follow: !n }).node;
			else i = e;
			FS.doChown(null, i, n);
		},
		lchown(e, r, t) {
			FS.chown(e, r, t, !0);
		},
		fchown(e, r, t) {
			var n = FS.getStreamChecked(e);
			FS.doChown(n, n.node, !1);
		},
		doTruncate(e, r, t) {
			if (FS.isDir(r.mode)) throw new FS.ErrnoError(31);
			if (!FS.isFile(r.mode)) throw new FS.ErrnoError(28);
			var n = FS.nodePermissions(r, "w");
			if (n) throw new FS.ErrnoError(n);
			FS.doSetAttr(e, r, {
				size: t,
				timestamp: Date.now()
			});
		},
		truncate(e, r) {
			if (r < 0) throw new FS.ErrnoError(28);
			var t;
			if (typeof e == "string") t = FS.lookupPath(e, { follow: !0 }).node;
			else t = e;
			FS.doTruncate(null, t, r);
		},
		ftruncate(e, r) {
			var t = FS.getStreamChecked(e);
			if (r < 0 || (t.flags & 2097155) === 0) throw new FS.ErrnoError(28);
			FS.doTruncate(t, t.node, r);
		},
		utime(e, r, t, n = !1) {
			var i = FS.lookupPath(e, { follow: !n });
			FS.doSetAttr(null, i.node, {
				atime: r,
				mtime: t,
				dontFollow: n
			});
		},
		open(e, r, t = 438) {
			if (e === "") throw new FS.ErrnoError(44);
			r = FS_modeStringToFlags(r), r & 64 ? t = t & 4095 | 32768 : t = 0;
			var n, i;
			if (typeof e == "object") n = e;
			else {
				i = e.endsWith("/");
				var o = FS.lookupPath(e, {
					follow: !(r & 131072),
					noent_okay: !0
				});
				n = o.node, e = o.path;
			}
			var a = !1;
			if (r & 64) if (n) {
				if (r & 128) throw new FS.ErrnoError(20);
			} else {
				if (i) throw new FS.ErrnoError(31);
				n = FS.mknod(e, t | 511, 0), a = !0;
			}
			if (!n) throw new FS.ErrnoError(44);
			if (FS.isChrdev(n.mode) && (r &= -513), r & 65536 && !FS.isDir(n.mode)) throw new FS.ErrnoError(54);
			if (!a) {
				var s = FS.mayOpen(n, r);
				if (s) throw new FS.ErrnoError(s);
			}
			r & 512 && !a && FS.truncate(n, 0), r &= -131713;
			var l = FS.createStream({
				node: n,
				path: FS.getPath(n),
				flags: r,
				seekable: !0,
				position: 0,
				stream_ops: n.stream_ops,
				ungotten: [],
				error: !1
			});
			return l.stream_ops.open && l.stream_ops.open(l), a && FS.chmod(n, t & 511), l;
		},
		close(e) {
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			e.getdents && (e.getdents = null), e.node?.notifyListeners(32);
			try {
				e.stream_ops.close && e.stream_ops.close(e);
			} catch (r) {
				throw r;
			} finally {
				FS.closeStream(e.fd);
			}
			e.fd = null;
		},
		isClosed(e) {
			return e.fd === null;
		},
		llseek(e, r, t) {
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
			if (t != 0 && t != 1 && t != 2) throw new FS.ErrnoError(28);
			return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
		},
		read(e, r, t, n, i) {
			if (n < 0 || i < 0) throw new FS.ErrnoError(28);
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
			if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
			if (!e.stream_ops.read) throw new FS.ErrnoError(28);
			var o = typeof i < "u";
			if (!o) i = e.position;
			else if (!e.seekable) throw new FS.ErrnoError(70);
			var a = e.stream_ops.read(e, r, t, n, i);
			return o || (e.position += a), a;
		},
		write(e, r, t, n, i, o) {
			if (n < 0 || i < 0) throw new FS.ErrnoError(28);
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			if ((e.flags & 2097155) === 0) throw new FS.ErrnoError(8);
			if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
			if (!e.stream_ops.write) throw new FS.ErrnoError(28);
			e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
			var a = typeof i < "u";
			if (!a) i = e.position;
			else if (!e.seekable) throw new FS.ErrnoError(70);
			var s = e.stream_ops.write(e, r, t, n, i, o);
			return a || (e.position += s), s;
		},
		mmap(e, r, t, n, i) {
			if (n & 2 && !(i & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
			if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
			if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
			if (!r) throw new FS.ErrnoError(28);
			return e.stream_ops.mmap(e, r, t, n, i);
		},
		msync(e, r, t, n, i) {
			return e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, i) : 0;
		},
		ioctl(e, r, t) {
			if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
			return e.stream_ops.ioctl(e, r, t);
		},
		readFile(e, r = {}) {
			r.flags ?? (r.flags = 0), r.encoding ?? (r.encoding = "binary"), r.encoding !== "utf8" && r.encoding !== "binary" && abort(`Invalid encoding type "${r.encoding}"`);
			var t = FS.open(e, r.flags), i = FS.stat(e).size, o = new Uint8Array(i);
			return FS.read(t, o, 0, i, 0), r.encoding === "utf8" && (o = UTF8ArrayToString(o)), FS.close(t), o;
		},
		writeFile(e, r, t = {}) {
			t.flags ?? (t.flags = 577);
			var n = FS.open(e, t.flags, t.mode);
			r = FS_fileDataToTypedArray(r), FS.write(n, r, 0, r.byteLength, void 0, t.canOwn), FS.close(n);
		},
		cwd: () => FS.currentPath,
		chdir(e) {
			var r = FS.lookupPath(e, { follow: !0 });
			if (r.node === null) throw new FS.ErrnoError(44);
			if (!FS.isDir(r.node.mode)) throw new FS.ErrnoError(54);
			var t = FS.nodePermissions(r.node, "x");
			if (t) throw new FS.ErrnoError(t);
			FS.currentPath = r.path;
		},
		createDefaultDirectories() {
			FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
		},
		createDefaultDevices() {
			FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), {
				read: () => 0,
				write: (n, i, o, a) => a,
				llseek: () => 0
			}), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
			var e = /* @__PURE__ */ new Uint8Array(1024), r = 0, t = () => (r || (randomFill(e), r = e.byteLength), e[--r]);
			FS.createDevice("/dev", "random", t), FS.createDevice("/dev", "urandom", t), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
		},
		createSpecialDirectories() {
			FS.mkdir("/proc");
			var e = FS.mkdir("/proc/self");
			FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
				var r = FS.createNode(e, "fd", 16895, 73);
				return r.stream_ops = { llseek: MEMFS.stream_ops.llseek }, r.node_ops = {
					lookup(t, n) {
						var i = +n, o = FS.getStreamChecked(i), a = {
							parent: null,
							mount: { mountpoint: "fake" },
							node_ops: { readlink: () => o.path },
							id: i + 1
						};
						return a.parent = a, a;
					},
					readdir() {
						return Array.from(FS.streams.entries()).filter(([t, n]) => n).map(([t, n]) => t.toString());
					}
				}, r;
			} }, {}, "/proc/self/fd");
		},
		createStandardStreams(e, r, t) {
			e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), r ? FS.createDevice("/dev", "stdout", null, r) : FS.symlink("/dev/tty", "/dev/stdout"), t ? FS.createDevice("/dev", "stderr", null, t) : FS.symlink("/dev/tty1", "/dev/stderr"), FS.open("/dev/stdin", 0), FS.open("/dev/stdout", 1), FS.open("/dev/stderr", 1);
		},
		staticInit() {
			FS.nameTable.length = 4096, FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories();
		},
		init(e, r, t) {
			FS.initialized = !0, e ?? (e = Module.stdin), r ?? (r = Module.stdout), t ?? (t = Module.stderr), FS.createStandardStreams(e, r, t);
		},
		quit() {
			FS.initialized = !1, _fflush(0);
			for (var e of FS.streams) e && FS.close(e);
		},
		analyzePath(e, r = !1) {
			try {
				var t = FS.lookupPath(e, { follow: !r });
				e = t.path;
			} catch {}
			var n = {
				isRoot: !1,
				exists: !1,
				error: 0,
				name: null,
				path: null,
				object: null,
				parentExists: !1,
				parentPath: null,
				parentObject: null
			};
			try {
				t = FS.lookupPath(e, { parent: !0 }), n.parentExists = !0, n.parentPath = t.path, n.parentObject = t.node, n.name = PATH.basename(e), t = FS.lookupPath(e, { follow: !r }), n.exists = !0, n.path = t.path, n.object = t.node, n.name = t.node.name, n.isRoot = t.path === "/";
			} catch (i) {
				n.error = i.errno;
			}
			return n;
		},
		createPath(e, r, t, n) {
			e = typeof e == "string" ? e : FS.getPath(e);
			for (var i = r.split("/").reverse(); i.length;) {
				var o = i.pop();
				if (o) {
					var a = PATH.join2(e, o);
					try {
						FS.mkdir(a);
					} catch (s) {
						if (s.errno != 20) throw s;
					}
					e = a;
				}
			}
			return a;
		},
		createFile(e, r, t, n, i) {
			var o = PATH.join2(typeof e == "string" ? e : FS.getPath(e), r), a = FS_getMode(n, i);
			return FS.create(o, a);
		},
		createDataFile(e, r, t, n, i, o) {
			var a = r;
			e && (e = typeof e == "string" ? e : FS.getPath(e), a = r ? PATH.join2(e, r) : e);
			var s = FS_getMode(n, i), l = FS.create(a, s);
			if (t) {
				t = FS_fileDataToTypedArray(t), FS.chmod(l, s | 146);
				var u = FS.open(l, 577);
				FS.write(u, t, 0, t.length, 0, o), FS.close(u), FS.chmod(l, s);
			}
		},
		createDevice(e, r, t, n) {
			var s;
			var i = PATH.join2(typeof e == "string" ? e : FS.getPath(e), r), o = FS_getMode(!!t, !!n);
			(s = FS.createDevice).major ?? (s.major = 64);
			var a = FS.makedev(FS.createDevice.major++, 0);
			return FS.registerDevice(a, {
				open(l) {
					l.seekable = !1;
				},
				close(l) {
					n?.buffer?.length && n(10);
				},
				read(l, u, c, _, m) {
					for (var f = 0, p = 0; p < _; p++) {
						var F;
						try {
							F = t();
						} catch {
							throw new FS.ErrnoError(29);
						}
						if (F === void 0 && !f) throw new FS.ErrnoError(6);
						if (F == null) break;
						f++, u[c + p] = F;
					}
					return f && (l.node.atime = Date.now()), f;
				},
				write(l, u, c, _, m) {
					for (var f = 0; f < _; f++) try {
						n(u[c + f]);
					} catch {
						throw new FS.ErrnoError(29);
					}
					return _ && (l.node.mtime = l.node.ctime = Date.now()), f;
				}
			}), FS.mkdev(i, o, a);
		},
		forceLoadFile(e) {
			if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
			if (globalThis.XMLHttpRequest) abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
			else try {
				e.contents = readBinary(e.url);
			} catch {
				throw new FS.ErrnoError(29);
			}
		},
		createLazyFile(e, r, t, n, i) {
			class o {
				constructor() {
					P$4(this, "lengthKnown", !1);
					P$4(this, "chunks", []);
				}
				get(m) {
					if (!(m > this.length - 1 || m < 0)) {
						var f = m % this.chunkSize, p = m / this.chunkSize | 0;
						return this.getter(p)[f];
					}
				}
				setDataGetter(m) {
					this.getter = m;
				}
				cacheLength() {
					var m = new XMLHttpRequest();
					m.open("HEAD", t, !1), m.send(null), m.status >= 200 && m.status < 300 || m.status === 304 || abort(`Couldn't load ${t}. Status: ${m.status}`);
					var f = Number(m.getResponseHeader("Content-length")), p, F = (p = m.getResponseHeader("Accept-Ranges")) && p === "bytes", S = (p = m.getResponseHeader("Content-Encoding")) && p === "gzip", E = 1048576;
					F || (E = f);
					var y = (d, g) => {
						d > g && abort(`invalid range (${d}, ${g}) or no bytes requested!`), g > f - 1 && abort(`only ${f} bytes available! programmer error!`);
						var v = new XMLHttpRequest();
						return v.open("GET", t, !1), f !== E && v.setRequestHeader("Range", `bytes=${d}-${g}`), v.responseType = "arraybuffer", v.overrideMimeType && v.overrideMimeType("text/plain; charset=x-user-defined"), v.send(null), v.status >= 200 && v.status < 300 || v.status === 304 || abort(`Couldn't load ${t}. Status: ${v.status}`), v.response !== void 0 ? new Uint8Array(v.response || []) : intArrayFromString(v.responseText ?? "", !0);
					}, A = this;
					A.setDataGetter((d) => {
						var g = d * E, v = (d + 1) * E - 1;
						return v = Math.min(v, f - 1), typeof A.chunks[d] > "u" && (A.chunks[d] = y(g, v)), typeof A.chunks[d] > "u" && abort("doXHR failed!"), A.chunks[d];
					}), (S || !f) && (E = f = 1, f = this.getter(0).length, E = f, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = f, this._chunkSize = E, this.lengthKnown = !0;
				}
				get length() {
					return this.lengthKnown || this.cacheLength(), this._length;
				}
				get chunkSize() {
					return this.lengthKnown || this.cacheLength(), this._chunkSize;
				}
			}
			if (globalThis.XMLHttpRequest) {
				ENVIRONMENT_IS_WORKER || abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
				var s = {
					isDevice: !1,
					contents: new o()
				};
			} else s = {
				isDevice: !1,
				url: t
			};
			var l = FS.createFile(e, r, s, n, i);
			s.contents ? l.contents = s.contents : s.url && (l.contents = null, l.url = s.url), Object.defineProperties(l, { usedBytes: { get: function() {
				return this.contents.length;
			} } });
			var u = {};
			for (let [_, m] of Object.entries(l.stream_ops)) u[_] = (...f) => (FS.forceLoadFile(l), m(...f));
			function c(_, m, f, p, F) {
				var S = _.node.contents;
				if (F >= S.length) return 0;
				var E = Math.min(S.length - F, p);
				if (S.slice) for (var y = 0; y < E; y++) m[f + y] = S[F + y];
				else for (y = 0; y < E; y++) m[f + y] = S.get(F + y);
				return E;
			}
			return u.read = (_, m, f, p, F) => (FS.forceLoadFile(l), c(_, m, f, p, F)), u.mmap = (_, m, f) => {
				FS.forceLoadFile(l);
				var p = mmapAlloc(m);
				if (!p) throw new FS.ErrnoError(48);
				return c(_, HEAP8, p, m, f), {
					ptr: p,
					allocated: !0
				};
			}, l.stream_ops = u, l;
		}
	}, findLibraryFS = (e, r) => {
		if (runtimeInitialized) {
			if (PATH.isAbs(e)) try {
				return FS.lookupPath(e), e;
			} catch {
				return;
			}
			var t = (r?.paths || []).map((n) => replaceORIGIN(r?.parentLibPath, n));
			return withStackSave(() => {
				var n = stackAlloc(512), i = stringToUTF8OnStack(t.join(":")), o = stringToUTF8OnStack(e), a = __emscripten_find_dylib(n, i, o, 512);
				return a ? UTF8ToString(a) : void 0;
			});
		}
	};
	function loadDynamicLibrary(e, r = {
		global: !0,
		nodelete: !0
	}, t, n) {
		var i = LDSO.loadedLibsByName[e];
		if (i) return r.global ? i.global || (i.global = !0, mergeLibSymbols(i.exports, e)) : t && Object.assign(t, i.exports), r.nodelete && i.refcount !== 1 / 0 && (i.refcount = 1 / 0), i.refcount++, n && (LDSO.loadedLibsByHandle[n] = i), r.loadAsync ? Promise.resolve(!0) : !0;
		i = newDSO(e, n, "loading"), i.refcount = r.nodelete ? 1 / 0 : 1, i.global = r.global;
		function o() {
			if (n) {
				var l = HEAPU32[n + 28 >> 2], u = HEAPU32[n + 32 >> 2];
				if (l && u) {
					var c = HEAP8.slice(l, l + u);
					return r.loadAsync ? Promise.resolve(c) : c;
				}
			}
			var _ = findLibraryFS(e, r.rpath);
			if (_) return c = FS.readFile(_, { encoding: "binary" }), r.loadAsync ? Promise.resolve(c) : c;
			var m = locateFile(e);
			if (r.loadAsync) return asyncLoad(m);
			if (!readBinary) throw new Error(`${m}: file not found, and synchronous loading of external files is not available`);
			return readBinary(m);
		}
		function a() {
			var l = preloadedWasm[e];
			return l ? r.loadAsync ? Promise.resolve(l) : l : r.loadAsync ? o().then((u) => loadWebAssemblyModule(u, r, e, t, n)) : loadWebAssemblyModule(o(), r, e, t, n);
		}
		function s(l) {
			i.global ? mergeLibSymbols(l, e) : t && Object.assign(t, l), i.exports = l;
		}
		return r.loadAsync ? a().then((l) => (s(l), !0)) : (s(a()), !0);
	}
	var reportUndefinedSymbols = () => {
		for (var [e, r] of Object.entries(GOT)) if (r.value == -1) {
			var t = resolveGlobalSymbol(e, !0).sym;
			if (!t && !r.required) {
				r.value = 0;
				continue;
			}
			if (typeof t == "function") r.value = addFunction(t, t.sig);
			else if (typeof t == "number") r.value = t;
			else if (typeof t.value == "number") r.value = t;
			else throw new Error(`bad export type for '${e}': ${typeof t} (${t})`);
		}
	}, loadDylibs = async () => {
		if (!dynamicLibraries.length) {
			reportUndefinedSymbols();
			return;
		}
		for (var e of dynamicLibraries) await loadDynamicLibrary(e, {
			loadAsync: !0,
			global: !0,
			nodelete: !0,
			allowUndefined: !0
		});
		reportUndefinedSymbols();
	}, noExitRuntime = !1, ___call_sighandler = (e, r) => getWasmTableEntry(e)(r);
	___call_sighandler.sig = "vpi";
	var SYSCALLS = {
		currentUmask: 18,
		calculateAt(e, r, t = !1) {
			if (PATH.isAbs(r)) return r;
			var n;
			if (e === -100) n = FS.cwd();
			else n = SYSCALLS.getStreamFromFD(e).path;
			if (r.length == 0) {
				if (!t) throw new FS.ErrnoError(44);
				return n;
			}
			return n + "/" + r;
		},
		writeStat(e, r) {
			HEAPU32[e >> 2] = r.dev, HEAPU32[e + 4 >> 2] = r.mode, HEAPU32[e + 8 >> 2] = r.nlink, HEAPU32[e + 12 >> 2] = r.uid, HEAPU32[e + 16 >> 2] = r.gid, HEAPU32[e + 20 >> 2] = r.rdev, HEAP64[e + 24 >> 3] = BigInt(r.size), HEAP32[e + 32 >> 2] = 4096, HEAP32[e + 36 >> 2] = r.blocks;
			var t = r.atime.getTime(), n = r.mtime.getTime(), i = r.ctime.getTime();
			return HEAP64[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), HEAPU32[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, HEAP64[e + 56 >> 3] = BigInt(Math.floor(n / 1e3)), HEAPU32[e + 64 >> 2] = n % 1e3 * 1e3 * 1e3, HEAP64[e + 72 >> 3] = BigInt(Math.floor(i / 1e3)), HEAPU32[e + 80 >> 2] = i % 1e3 * 1e3 * 1e3, HEAP64[e + 88 >> 3] = BigInt(r.ino), 0;
		},
		writeStatFs(e, r) {
			HEAPU32[e + 4 >> 2] = r.bsize, HEAPU32[e + 60 >> 2] = r.bsize, HEAP64[e + 8 >> 3] = BigInt(r.blocks), HEAP64[e + 16 >> 3] = BigInt(r.bfree), HEAP64[e + 24 >> 3] = BigInt(r.bavail), HEAP64[e + 32 >> 3] = BigInt(r.files), HEAP64[e + 40 >> 3] = BigInt(r.ffree), HEAPU32[e + 48 >> 2] = r.fsid, HEAPU32[e + 64 >> 2] = r.flags, HEAPU32[e + 56 >> 2] = r.namelen;
		},
		doMsync(e, r, t, n, i) {
			if (!FS.isFile(r.node.mode)) throw new FS.ErrnoError(43);
			if (n & 2) return 0;
			var o = HEAPU8.subarray(e, e + t);
			FS.msync(r, o, i, t, n);
		},
		getStreamFromFD(e) {
			return FS.getStreamChecked(e);
		},
		varargs: void 0,
		getStr(e) {
			return UTF8ToString(e);
		}
	};
	function ___syscall_chmod(e, r) {
		try {
			return e = SYSCALLS.getStr(e), FS.chmod(e, r), 0;
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_chmod.sig = "ipi";
	function ___syscall_dup3(e, r, t) {
		try {
			if (e === r || t & -524289) return -28;
			var n = SYSCALLS.getStreamFromFD(e);
			if (r < 0 || r >= FS.MAX_OPEN_FDS) return -8;
			var i = FS.getStream(r);
			i && FS.close(i);
			var o = FS.dupStream(n, r);
			return t & 524288 && (o.flags |= 524288), o.fd;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_dup3.sig = "iiii";
	function ___syscall_faccessat(e, r, t) {
		try {
			if (r = SYSCALLS.getStr(r), r = SYSCALLS.calculateAt(e, r), t & -8) return -28;
			var i = FS.lookupPath(r, { follow: !0 }).node;
			if (!i) return -44;
			var o = "";
			return t & 4 && (o += "r"), t & 2 && (o += "w"), t & 1 && (o += "x"), o && FS.nodePermissions(i, o) ? -2 : 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_faccessat.sig = "iipii";
	var INT53_MAX = 9007199254740992, INT53_MIN = -9007199254740992, bigintToI53Checked = (e) => e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
	function ___syscall_fadvise64(e, r, t) {
		r = bigintToI53Checked(r), t = bigintToI53Checked(t);
		try {
			return SYSCALLS.getStreamFromFD(e).seekable ? 0 : -70;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_fadvise64.sig = "iijji";
	var syscallGetVarargI = () => {
		var e = HEAP32[+SYSCALLS.varargs >> 2];
		return SYSCALLS.varargs += 4, e;
	}, syscallGetVarargP = syscallGetVarargI;
	function ___syscall_fcntl64(e, r, t) {
		SYSCALLS.varargs = t;
		try {
			var n = SYSCALLS.getStreamFromFD(e);
			switch (r) {
				case 0:
					var i = syscallGetVarargI();
					if (i < 0) return -28;
					for (; FS.streams[i];) i++;
					return FS.dupStream(n, i).fd;
				case 1:
				case 2: return 0;
				case 3: return n.flags;
				case 4: return i = syscallGetVarargI(), n.flags = n.flags & -289793 | i & 289792, 0;
				case 12: return i = syscallGetVarargP(), HEAP16[i + 0 >> 1] = 2, 0;
				case 13:
				case 14: return 0;
			}
			return -28;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_fcntl64.sig = "iiip";
	function ___syscall_fstat64(e, r) {
		try {
			return SYSCALLS.writeStat(r, FS.fstat(e));
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_fstat64.sig = "iip";
	function ___syscall_getcwd(e, r) {
		try {
			if (!r) return -28;
			var t = FS.cwd(), n = lengthBytesUTF8(t) + 1;
			return r < n ? -68 : (stringToUTF8(t, e, r), n);
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_getcwd.sig = "ipp";
	function ___syscall_getdents64(e, r, t) {
		try {
			var n = SYSCALLS.getStreamFromFD(e);
			n.getdents || (n.getdents = FS.readdir(n.path));
			for (var i = 0, o = FS.llseek(n, 0, 1), a = Math.floor(o / 280), s = Math.min(n.getdents.length, a + Math.floor(t / 280)), l = a; l < s; l++) {
				var u, c, _ = n.getdents[l];
				if (_ === ".") u = n.node.id, c = 4;
				else if (_ === "..") u = FS.lookupPath(n.path, { parent: !0 }).node.id, c = 4;
				else {
					var f;
					try {
						f = FS.lookupNode(n.node, _);
					} catch (p) {
						if (p?.errno === 28) continue;
						throw p;
					}
					u = f.id, c = FS.isChrdev(f.mode) ? 2 : FS.isDir(f.mode) ? 4 : FS.isLink(f.mode) ? 10 : 8;
				}
				HEAP64[r + i >> 3] = BigInt(u), HEAP64[r + i + 8 >> 3] = BigInt((l + 1) * 280), HEAP16[r + i + 16 >> 1] = 280, HEAP8[r + i + 18] = c, stringToUTF8(_, r + i + 19, 256), i += 280;
			}
			return FS.llseek(n, l * 280, 0), i;
		} catch (p) {
			if (typeof FS > "u" || p.name !== "ErrnoError") throw p;
			return -p.errno;
		}
	}
	___syscall_getdents64.sig = "iipp";
	function ___syscall_ioctl(e, r, t) {
		SYSCALLS.varargs = t;
		try {
			var n = SYSCALLS.getStreamFromFD(e);
			switch (r) {
				case 21509: return n.tty ? 0 : -59;
				case 21505:
					if (!n.tty) return -59;
					if (n.tty.ops.ioctl_tcgets) {
						var i = n.tty.ops.ioctl_tcgets(n), o = syscallGetVarargP();
						HEAP32[o >> 2] = i.c_iflag || 0, HEAP32[o + 4 >> 2] = i.c_oflag || 0, HEAP32[o + 8 >> 2] = i.c_cflag || 0, HEAP32[o + 12 >> 2] = i.c_lflag || 0;
						for (var a = 0; a < 32; a++) HEAP8[o + a + 17] = i.c_cc[a] || 0;
						return 0;
					}
					return 0;
				case 21510:
				case 21511:
				case 21512: return n.tty ? 0 : -59;
				case 21506:
				case 21507:
				case 21508:
					if (!n.tty) return -59;
					if (n.tty.ops.ioctl_tcsets) {
						o = syscallGetVarargP();
						var s = HEAP32[o >> 2], l = HEAP32[o + 4 >> 2], u = HEAP32[o + 8 >> 2], c = HEAP32[o + 12 >> 2], _ = [];
						for (a = 0; a < 32; a++) _.push(HEAP8[o + a + 17]);
						return n.tty.ops.ioctl_tcsets(n.tty, r, {
							c_iflag: s,
							c_oflag: l,
							c_cflag: u,
							c_lflag: c,
							c_cc: _
						});
					}
					return 0;
				case 21519: return n.tty ? (o = syscallGetVarargP(), HEAP32[o >> 2] = 0, 0) : -59;
				case 21520: return n.tty ? -28 : -59;
				case 21537:
				case 21531: return o = syscallGetVarargP(), FS.ioctl(n, r, o);
				case 21523:
					if (!n.tty) return -59;
					if (n.tty.ops.ioctl_tiocgwinsz) {
						var m = n.tty.ops.ioctl_tiocgwinsz(n.tty);
						o = syscallGetVarargP(), HEAP16[o >> 1] = m[0], HEAP16[o + 2 >> 1] = m[1];
					}
					return 0;
				case 21524: return n.tty ? 0 : -59;
				case 21515: return n.tty ? 0 : -59;
				default: return -28;
			}
		} catch (f) {
			if (typeof FS > "u" || f.name !== "ErrnoError") throw f;
			return -f.errno;
		}
	}
	___syscall_ioctl.sig = "iiip";
	function ___syscall_lstat64(e, r) {
		try {
			return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(r, FS.lstat(e));
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_lstat64.sig = "ipp";
	function ___syscall_mkdirat(e, r, t) {
		try {
			return r = SYSCALLS.getStr(r), r = SYSCALLS.calculateAt(e, r), t &= ~SYSCALLS.currentUmask, FS.mkdir(r, t), 0;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_mkdirat.sig = "iipi";
	function ___syscall_newfstatat(e, r, t, n) {
		try {
			r = SYSCALLS.getStr(r);
			var i = n & 256, o = n & 4096;
			return n &= -6401, r = SYSCALLS.calculateAt(e, r, o), SYSCALLS.writeStat(t, i ? FS.lstat(r) : FS.stat(r));
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_newfstatat.sig = "iippi";
	function ___syscall_openat(e, r, t, n) {
		SYSCALLS.varargs = n;
		try {
			r = SYSCALLS.getStr(r), r = SYSCALLS.calculateAt(e, r);
			var i = n ? syscallGetVarargI() : 0;
			return t & 64 && (i &= ~SYSCALLS.currentUmask), FS.open(r, t, i).fd;
		} catch (o) {
			if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
			return -o.errno;
		}
	}
	___syscall_openat.sig = "iipip";
	function ___syscall_readlinkat(e, r, t, n) {
		try {
			if (r = SYSCALLS.getStr(r), r = SYSCALLS.calculateAt(e, r), n <= 0) return -28;
			var i = FS.readlink(r), o = Math.min(n, lengthBytesUTF8(i)), a = HEAP8[t + o];
			return stringToUTF8(i, t, n + 1), HEAP8[t + o] = a, o;
		} catch (s) {
			if (typeof FS > "u" || s.name !== "ErrnoError") throw s;
			return -s.errno;
		}
	}
	___syscall_readlinkat.sig = "iippp";
	function ___syscall_rmdir(e) {
		try {
			return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_rmdir.sig = "ip";
	function ___syscall_stat64(e, r) {
		try {
			return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(r, FS.stat(e));
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_stat64.sig = "ipp";
	function ___syscall_symlinkat(e, r, t) {
		try {
			return e = SYSCALLS.getStr(e), t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(r, t), FS.symlink(e, t), 0;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_symlinkat.sig = "ipip";
	function ___syscall_umask(e) {
		try {
			var r = SYSCALLS.currentUmask;
			return SYSCALLS.currentUmask = e, r;
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_umask.sig = "ii";
	function ___syscall_unlinkat(e, r, t) {
		try {
			if (r = SYSCALLS.getStr(r), r = SYSCALLS.calculateAt(e, r), !t) FS.unlink(r);
			else if (t === 512) FS.rmdir(r);
			else return -28;
			return 0;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_unlinkat.sig = "iipi";
	var __abort_js = () => abort("");
	__abort_js.sig = "v";
	var runtimeKeepaliveCounter = 0, __emscripten_runtime_keepalive_clear = () => {
		noExitRuntime = !1, runtimeKeepaliveCounter = 0;
	};
	__emscripten_runtime_keepalive_clear.sig = "v";
	var __emscripten_throw_longjmp = () => {
		throw new EmscriptenSjLj();
	};
	__emscripten_throw_longjmp.sig = "v";
	var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [
		0,
		31,
		60,
		91,
		121,
		152,
		182,
		213,
		244,
		274,
		305,
		335
	], MONTH_DAYS_REGULAR_CUMULATIVE = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	], ydayFromDate = (e) => {
		return (isLeapYear(e.getFullYear()) ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE)[e.getMonth()] + e.getDate() - 1;
	};
	function __localtime_js(e, r) {
		e = bigintToI53Checked(e);
		var t = /* @__PURE__ */ new Date(e * 1e3);
		if (isNaN(t.getTime())) return 1;
		HEAP32[r >> 2] = t.getSeconds(), HEAP32[r + 4 >> 2] = t.getMinutes(), HEAP32[r + 8 >> 2] = t.getHours(), HEAP32[r + 12 >> 2] = t.getDate(), HEAP32[r + 16 >> 2] = t.getMonth(), HEAP32[r + 20 >> 2] = t.getFullYear() - 1900, HEAP32[r + 24 >> 2] = t.getDay();
		var n = ydayFromDate(t) | 0;
		HEAP32[r + 28 >> 2] = n, HEAP32[r + 36 >> 2] = -t.getTimezoneOffset() * 60;
		var i = new Date(t.getFullYear(), 0, 1), o = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), a = i.getTimezoneOffset(), s = (o != a && t.getTimezoneOffset() == Math.min(a, o)) | 0;
		return HEAP32[r + 32 >> 2] = s, 0;
	}
	__localtime_js.sig = "ijp";
	var __mktime_js = function(e) {
		var r = (() => {
			var t = new Date(HEAP32[e + 20 >> 2] + 1900, HEAP32[e + 16 >> 2], HEAP32[e + 12 >> 2], HEAP32[e + 8 >> 2], HEAP32[e + 4 >> 2], HEAP32[e >> 2], 0);
			if (isNaN(t.getTime())) return -1;
			var n = HEAP32[e + 32 >> 2], i = t.getTimezoneOffset(), o = new Date(t.getFullYear(), 0, 1), a = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), s = o.getTimezoneOffset(), l = Math.min(s, a);
			if (n < 0) n = +(a != s && l == i);
			else if (n > 0 != (l == i)) {
				var c = n > 0 ? l : Math.max(s, a);
				if (t.setTime(t.getTime() + 6e4 * (c - i)), isNaN(t.getTime())) return -1;
			}
			HEAP32[e + 32 >> 2] = n, HEAP32[e + 24 >> 2] = t.getDay();
			var _ = ydayFromDate(t) | 0;
			return HEAP32[e + 28 >> 2] = _, HEAP32[e >> 2] = t.getSeconds(), HEAP32[e + 4 >> 2] = t.getMinutes(), HEAP32[e + 8 >> 2] = t.getHours(), HEAP32[e + 12 >> 2] = t.getDate(), HEAP32[e + 16 >> 2] = t.getMonth(), HEAP32[e + 20 >> 2] = t.getYear(), t.getTime() / 1e3;
		})();
		return BigInt(r);
	};
	__mktime_js.sig = "jp";
	function __mmap_js(e, r, t, n, i, o, a) {
		i = bigintToI53Checked(i);
		try {
			var s = SYSCALLS.getStreamFromFD(n), l = FS.mmap(s, e, i, r, t), u = l.ptr;
			return HEAP32[o >> 2] = l.allocated, HEAPU32[a >> 2] = u, 0;
		} catch (c) {
			if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
			return -c.errno;
		}
	}
	__mmap_js.sig = "ipiiijpp";
	function __munmap_js(e, r, t, n, i, o) {
		o = bigintToI53Checked(o);
		try {
			var a = SYSCALLS.getStreamFromFD(i);
			t & 2 && SYSCALLS.doMsync(e, a, r, n, o);
		} catch (s) {
			if (typeof FS > "u" || s.name !== "ErrnoError") throw s;
			return -s.errno;
		}
	}
	__munmap_js.sig = "ippiiij";
	var timers = {}, clearTimers = () => {
		for (var e of Object.values(timers)) clearTimeout(e.id);
	}, handleException = (e) => {
		if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
		quit_(1, e);
	}, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
		EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit?.(e), ABORT = !0), quit_(e, new ExitStatus(e));
	};
	_proc_exit.sig = "vi";
	var exitJS = (e) => {
		EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
	}, _exit = exitJS;
	_exit.sig = "vi";
	var maybeExit = () => {
		if (!runtimeExited && !keepRuntimeAlive()) try {
			_exit(EXITSTATUS);
		} catch (e) {
			handleException(e);
		}
	}, callUserCallback = (e, ...r) => {
		if (!(runtimeExited || ABORT)) try {
			return e(...r);
		} catch (t) {
			handleException(t);
		} finally {
			maybeExit();
		}
	}, _emscripten_get_now = () => performance.now();
	_emscripten_get_now.sig = "d";
	var __setitimer_js = (e, r) => {
		if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !r) return 0;
		return timers[e] = {
			id: setTimeout(() => {
				delete timers[e], callUserCallback(__emscripten_timeout, e, _emscripten_get_now());
			}, r),
			timeout_ms: r
		}, 0;
	};
	__setitimer_js.sig = "iid";
	var __tzset_js = (e, r, t, n) => {
		var i = (/* @__PURE__ */ new Date()).getFullYear(), o = new Date(i, 0, 1), a = new Date(i, 6, 1), s = o.getTimezoneOffset(), l = a.getTimezoneOffset(), u = Math.max(s, l);
		HEAPU32[e >> 2] = u * 60, HEAP32[r >> 2] = +(s != l);
		var c = (f) => {
			var p = f >= 0 ? "-" : "+", F = Math.abs(f);
			return `UTC${p}${String(Math.floor(F / 60)).padStart(2, "0")}${String(F % 60).padStart(2, "0")}`;
		}, _ = c(s), m = c(l);
		l < s ? (stringToUTF8(_, t, 17), stringToUTF8(m, n, 17)) : (stringToUTF8(_, n, 17), stringToUTF8(m, t, 17));
	};
	__tzset_js.sig = "vpppp";
	var _emscripten_date_now = () => Date.now();
	_emscripten_date_now.sig = "d";
	var getHeapMax = () => 2147483648, growMemory = (e) => {
		var t = (e - wasmMemory.buffer.byteLength + 65535) / 65536 | 0;
		try {
			return wasmMemory.grow(t), updateMemoryViews(), 1;
		} catch {}
	}, _emscripten_resize_heap = (e) => {
		var r = HEAPU8.length;
		e >>>= 0;
		var t = getHeapMax();
		if (e > t) return !1;
		for (var n = 1; n <= 4; n *= 2) {
			var i = r * (1 + .2 / n);
			i = Math.min(i, e + 100663296);
			if (growMemory(Math.min(t, alignMemory(Math.max(e, i), 65536)))) return !0;
		}
		return !1;
	};
	_emscripten_resize_heap.sig = "ip";
	var ENV = {}, getExecutableName = () => thisProgram, getEnvStrings = () => {
		if (!getEnvStrings.strings) {
			var r = {
				USER: "web_user",
				LOGNAME: "web_user",
				PATH: "/",
				PWD: "/",
				HOME: "/home/web_user",
				LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
				_: getExecutableName()
			};
			for (var t in ENV) ENV[t] === void 0 ? delete r[t] : r[t] = ENV[t];
			var n = [];
			for (var t in r) n.push(`${t}=${r[t]}`);
			getEnvStrings.strings = n;
		}
		return getEnvStrings.strings;
	}, _environ_get = (e, r) => {
		var t = 0, n = 0;
		for (var i of getEnvStrings()) {
			var o = r + t;
			HEAPU32[e + n >> 2] = o, t += stringToUTF8(i, o, 1 / 0) + 1, n += 4;
		}
		return 0;
	};
	_environ_get.sig = "ipp";
	var _environ_sizes_get = (e, r) => {
		var t = getEnvStrings();
		HEAPU32[e >> 2] = t.length;
		var n = 0;
		for (var i of t) n += lengthBytesUTF8(i) + 1;
		return HEAPU32[r >> 2] = n, 0;
	};
	_environ_sizes_get.sig = "ipp";
	function _fd_close(e) {
		try {
			var r = SYSCALLS.getStreamFromFD(e);
			return FS.close(r), 0;
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return t.errno;
		}
	}
	_fd_close.sig = "ii";
	function _fd_fdstat_get(e, r) {
		try {
			var t = SYSCALLS.getStreamFromFD(e), n = t.tty ? 2 : FS.isDir(t.mode) ? 3 : FS.isLink(t.mode) ? 7 : 4;
			return HEAP8[r] = n, HEAP16[r + 2 >> 1] = 0, HEAP64[r + 8 >> 3] = BigInt(0), HEAP64[r + 16 >> 3] = BigInt(0), 0;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return i.errno;
		}
	}
	_fd_fdstat_get.sig = "iip";
	var doReadv = (e, r, t, n) => {
		for (var i = 0, o = 0; o < t; o++) {
			var a = HEAPU32[r >> 2], s = HEAPU32[r + 4 >> 2];
			r += 8;
			try {
				var l = FS.read(e, HEAP8, a, s, n);
			} catch (u) {
				if (i > 0 && u instanceof FS.ErrnoError && (u.errno == 6 || u.errno == 6)) break;
				throw u;
			}
			if (l < 0) return -1;
			if (i += l, l < s) break;
			typeof n < "u" && (n += l);
		}
		return i;
	};
	function _fd_read(e, r, t, n) {
		try {
			var o = doReadv(SYSCALLS.getStreamFromFD(e), r, t);
			return HEAPU32[n >> 2] = o, 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return a.errno;
		}
	}
	_fd_read.sig = "iippp";
	function _fd_seek(e, r, t, n) {
		r = bigintToI53Checked(r);
		try {
			if (isNaN(r)) return 22;
			var i = SYSCALLS.getStreamFromFD(e);
			return FS.llseek(i, r, t), HEAP64[n >> 3] = BigInt(i.position), i.getdents && !r && t === 0 && (i.getdents = null), 0;
		} catch (o) {
			if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
			return o.errno;
		}
	}
	_fd_seek.sig = "iijip";
	function _fd_sync(e) {
		try {
			var r = SYSCALLS.getStreamFromFD(e);
			return r.stream_ops?.fsync?.(r);
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return n.errno;
		}
	}
	_fd_sync.sig = "ii";
	var doWritev = (e, r, t, n) => {
		if (t == 1) return FS.write(e, HEAP8, HEAPU32[r >> 2], HEAPU32[r + 4 >> 2], n);
		for (var i = 0, o = 0, a = r; o < t; o++, a += 8) i += HEAPU32[a + 4 >> 2];
		var s = new Uint8Array(i), l = 0;
		for (o = 0; o < t; o++, r += 8) {
			var u = HEAPU32[r >> 2], c = HEAPU32[r + 4 >> 2];
			s.set(HEAPU8.subarray(u, u + c), l), l += c;
		}
		return FS.write(e, s, 0, i, n);
	};
	function _fd_write(e, r, t, n) {
		try {
			var o = doWritev(SYSCALLS.getStreamFromFD(e), r, t);
			return HEAPU32[n >> 2] = o, 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return a.errno;
		}
	}
	_fd_write.sig = "iippp";
	var inetPton4 = (e) => {
		for (var r = e.split("."), t = 0; t < 4; t++) {
			var n = Number(r[t]);
			if (isNaN(n)) return null;
			r[t] = n;
		}
		return (r[0] | r[1] << 8 | r[2] << 16 | r[3] << 24) >>> 0;
	}, inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetPton6 = (e) => {
		var r, t, n, i, o = [];
		if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(e)) return null;
		if (e === "::") return [
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		];
		for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(/* @__PURE__ */ new RegExp("[.]", "g"), ":"), r = e.split(":"), r[r.length - 4] = Number(r[r.length - 4]) + Number(r[r.length - 3]) * 256, r[r.length - 3] = Number(r[r.length - 2]) + Number(r[r.length - 1]) * 256, r = r.slice(0, r.length - 2)) : r = e.split(":"), n = 0, i = 0, t = 0; t < r.length; t++) if (typeof r[t] == "string") if (r[t] === "Z") {
			for (i = 0; i < 8 - r.length + 1; i++) o[t + i] = 0;
			n = i - 1;
		} else o[t + n] = _htons(parseInt(r[t], 16));
		else o[t + n] = r[t];
		return [
			o[1] << 16 | o[0],
			o[3] << 16 | o[2],
			o[5] << 16 | o[4],
			o[7] << 16 | o[6]
		];
	}, inetNtop6 = (e) => {
		var r = "", t = 0, n = 0, i = 0, o = 0, a = 0, s = 0, l = [
			e[0] & 65535,
			e[0] >> 16,
			e[1] & 65535,
			e[1] >> 16,
			e[2] & 65535,
			e[2] >> 16,
			e[3] & 65535,
			e[3] >> 16
		], u = !0, c = "";
		for (s = 0; s < 5; s++) if (l[s]) {
			u = !1;
			break;
		}
		if (u) {
			if (c = inetNtop4(l[6] | l[7] << 16), l[5] === -1) return r = "::ffff:", r += c, r;
			if (!l[5]) return r = "::", c === "0.0.0.0" && (c = ""), c === "0.0.0.1" && (c = "1"), r += c, r;
		}
		for (t = 0; t < 8; t++) l[t] || (t - i > 1 && (a = 0), i = t, a++), a > n && (n = a, o = t - n + 1);
		for (t = 0; t < 8; t++) {
			if (n > 1 && !l[t] && t >= o && t < o + n) {
				t === o && (r += ":", o || (r += ":"));
				continue;
			}
			r += Number(_ntohs(l[t] & 65535)).toString(16), r += t < 7 ? ":" : "";
		}
		return r;
	}, DNS = {
		address_map: {
			id: 1,
			addrs: {},
			names: {}
		},
		lookup_name(e) {
			var r = inetPton4(e);
			if (r !== null || (r = inetPton6(e), r !== null)) return e;
			var t;
			if (DNS.address_map.addrs[e]) t = DNS.address_map.addrs[e];
			else {
				var n = DNS.address_map.id++;
				t = "172.29." + (n & 255) + "." + (n & 65280), DNS.address_map.names[t] = e, DNS.address_map.addrs[e] = t;
			}
			return t;
		},
		lookup_addr(e) {
			return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
		}
	}, writeSockaddr = (e, r, t, n, i) => {
		switch (r) {
			case 2:
				t = inetPton4(DNS.lookup_name(t)), zeroMemory(e, 16), i && (HEAP32[i >> 2] = 16), HEAP16[e >> 1] = r, HEAP32[e + 4 >> 2] = t, HEAP16[e + 2 >> 1] = _htons(n);
				break;
			case 10:
				t = inetPton6(DNS.lookup_name(t)), zeroMemory(e, 28), i && (HEAP32[i >> 2] = 28), HEAP32[e >> 2] = r, HEAP32[e + 8 >> 2] = t[0], HEAP32[e + 12 >> 2] = t[1], HEAP32[e + 16 >> 2] = t[2], HEAP32[e + 20 >> 2] = t[3], HEAP16[e + 2 >> 1] = _htons(n);
				break;
			default: return 5;
		}
		return 0;
	}, _getaddrinfo = (e, r, t, n) => {
		var i = 0, o = 0, a = 0, s = 0, l = 0, u = 0, c;
		function _(m, f, p, F, S, E) {
			var y, A = m === 10 ? 28 : 16, d;
			return S = m === 10 ? inetNtop6(S) : inetNtop4(S), y = _malloc(A), writeSockaddr(y, m, S, E), d = _malloc(32), HEAP32[d + 4 >> 2] = m, HEAP32[d + 8 >> 2] = f, HEAP32[d + 12 >> 2] = p, HEAPU32[d + 24 >> 2] = F, HEAPU32[d + 20 >> 2] = y, m === 10 ? HEAP32[d + 16 >> 2] = 28 : HEAP32[d + 16 >> 2] = 16, HEAP32[d + 28 >> 2] = 0, d;
		}
		if (t && (a = HEAP32[t >> 2], s = HEAP32[t + 4 >> 2], l = HEAP32[t + 8 >> 2], u = HEAP32[t + 12 >> 2]), l && !u && (u = l === 2 ? 17 : 6), !l && u && (l = u === 17 ? 2 : 1), u || (u = 6), l || (l = 1), !e && !r) return -2;
		if (a & -1088 || t && HEAP32[t >> 2] & 2 && !e) return -1;
		if (a & 32) return -2;
		if (l && l !== 1 && l !== 2) return -7;
		if (s !== 0 && s !== 2 && s !== 10) return -6;
		if (r && (r = UTF8ToString(r), o = parseInt(r, 10), isNaN(o))) return a & 1024 ? -2 : -8;
		if (!e) return s === 0 && (s = 2), a & 1 || (s === 2 ? i = _htonl(2130706433) : i = [
			0,
			0,
			0,
			_htonl(1)
		]), c = _(s, l, u, null, i, o), HEAPU32[n >> 2] = c, 0;
		if (e = UTF8ToString(e), i = inetPton4(e), i !== null) if (s === 0 || s === 2) s = 2;
		else if (s === 10 && a & 8) i = [
			0,
			0,
			_htonl(65535),
			i
		], s = 10;
		else return -2;
		else if (i = inetPton6(e), i !== null) if (s === 0 || s === 10) s = 10;
		else return -2;
		return i != null ? (c = _(s, l, u, e, i, o), HEAPU32[n >> 2] = c, 0) : a & 4 ? -2 : (e = DNS.lookup_name(e), i = inetPton4(e), s === 0 ? s = 2 : s === 10 && (i = [
			0,
			0,
			_htonl(65535),
			i
		]), c = _(s, l, u, null, i, o), HEAPU32[n >> 2] = c, 0);
	};
	_getaddrinfo.sig = "ipppp";
	var removeFunction = (e) => {
		functionsInTableMap.delete(getWasmTableEntry(e)), setWasmTableEntry(e, null), freeTableIndexes.push(e);
	}, stringToNewUTF8 = (e) => {
		var r = lengthBytesUTF8(e) + 1, t = _malloc(r);
		return t && stringToUTF8(e, t, r), t;
	}, FS_createPath = (...e) => FS.createPath(...e), FS_unlink = (...e) => FS.unlink(...e), FS_createLazyFile = (...e) => FS.createLazyFile(...e), FS_createDevice = (...e) => FS.createDevice(...e);
	registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.preloadFile = FS_preloadFile, FS.staticInit(), Module.noExitRuntime && (noExitRuntime = Module.noExitRuntime), Module.print && (out = Module.print), Module.printErr && (err = Module.printErr), Module.dynamicLibraries && (dynamicLibraries = Module.dynamicLibraries), Module.arguments && (programArgs = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
	var preInit = Module.preInit;
	if (preInit) for (typeof preInit == "function" && (Module.preInit = preInit = [preInit]); preInit.length > 0;) preInit.shift()();
	Module.callMain = callMain, Module.stackSave = stackSave, Module.stackRestore = stackRestore, Module.ENV = ENV, Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.addFunction = addFunction, Module.removeFunction = removeFunction, Module.UTF8ToString = UTF8ToString, Module.stringToNewUTF8 = stringToNewUTF8, Module.stringToUTF8OnStack = stringToUTF8OnStack, Module.FS_preloadFile = FS_preloadFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile, Module.MEMFS = MEMFS, Module.PROXYFS = PROXYFS;
	var ASM_CONSTS = {}, _pgl_exit, ___errno_location, _fflush, _fopen, _fclose, _pgl_popen, _fputs, _main, _pgl_atexit, _pgl_geteuid, _pgl_system, _malloc, _calloc, _pgl_setsockopt, _pgl_connect, _pgl_send, _pgl_recv, _fgets, _pgl_getsockopt, _pgl_getsockname, _pgl_poll, _clear_setitimer, _pgl_longjmp, _pgl_siglongjmp, _pgl_set_system_fn, _pgl_set_popen_fn, _pgl_set_pclose_fn, _pgl_pclose, _pclose, _pgl_getuid, _pgl_getpwuid, _pgl_run_atexit_funcs, _pgl_freopen, _pgl_shmget, _pgl_shmat, _pgl_shmdt, _pgl_shmctl, _pgl_munmap, _pgl_set_rw_cbs, _pgl_fcntl, ___funcs_on_exit, ___dl_seterr, __emscripten_find_dylib, _htonl, _htons, _emscripten_builtin_memalign, _ntohs, __emscripten_timeout, _strerror, _emscripten_get_sbrk_ptr, _setThrew, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, ___stack_pointer, __indirect_function_table, ___heap_base, wasmTable, wasmMemory;
	function assignWasmExports(e) {
		Module._pgl_exit = e.pgl_exit, Module.___errno_location = e.__errno_location, _fflush = Module._fflush = e.fflush, Module._fopen = e.fopen, Module._fclose = e.fclose, Module._pgl_popen = e.pgl_popen, Module._fputs = e.fputs, Module._main = e.__main_argc_argv, Module._pgl_atexit = e.pgl_atexit, Module._pgl_geteuid = e.pgl_geteuid, Module._pgl_system = e.pgl_system, _malloc = e.malloc, _calloc = e.calloc, Module._pgl_setsockopt = e.pgl_setsockopt, Module._pgl_connect = e.pgl_connect, Module._pgl_send = e.pgl_send, Module._pgl_recv = e.pgl_recv, Module._fgets = e.fgets, Module._pgl_getsockopt = e.pgl_getsockopt, Module._pgl_getsockname = e.pgl_getsockname, Module._pgl_poll = e.pgl_poll, Module._clear_setitimer = e.clear_setitimer, Module._pgl_longjmp = e.pgl_longjmp, Module._pgl_siglongjmp = e.pgl_siglongjmp, Module._pgl_set_system_fn = e.pgl_set_system_fn, Module._pgl_set_popen_fn = e.pgl_set_popen_fn, Module._pgl_set_pclose_fn = e.pgl_set_pclose_fn, Module._pgl_pclose = e.pgl_pclose, Module._pclose = e.pclose, Module._pgl_getuid = e.pgl_getuid, Module._pgl_getpwuid = e.pgl_getpwuid, Module._pgl_run_atexit_funcs = e.pgl_run_atexit_funcs, Module._pgl_freopen = e.pgl_freopen, Module._pgl_shmget = e.pgl_shmget, Module._pgl_shmat = e.pgl_shmat, Module._pgl_shmdt = e.pgl_shmdt, Module._pgl_shmctl = e.pgl_shmctl, Module._pgl_munmap = e.pgl_munmap, Module._pgl_set_rw_cbs = e.pgl_set_rw_cbs, Module._pgl_fcntl = e.pgl_fcntl, ___funcs_on_exit = e.__funcs_on_exit, e.__dl_seterr, __emscripten_find_dylib = e._emscripten_find_dylib, _htonl = e.htonl, _htons = e.htons, _emscripten_builtin_memalign = e.emscripten_builtin_memalign, _ntohs = e.ntohs, __emscripten_timeout = e._emscripten_timeout, Module._strerror = e.strerror, _emscripten_get_sbrk_ptr = e.emscripten_get_sbrk_ptr, _setThrew = e.setThrew, __emscripten_stack_restore = e._emscripten_stack_restore, __emscripten_stack_alloc = e._emscripten_stack_alloc, _emscripten_stack_get_current = e.emscripten_stack_get_current, wasmMemory = e.memory, e.__stack_pointer, wasmTable = e.__indirect_function_table, ___heap_base = e.__heap_base.value;
	}
	var wasmImports = {
		__call_sighandler: ___call_sighandler,
		__syscall_chmod: ___syscall_chmod,
		__syscall_dup3: ___syscall_dup3,
		__syscall_faccessat: ___syscall_faccessat,
		__syscall_fadvise64: ___syscall_fadvise64,
		__syscall_fcntl64: ___syscall_fcntl64,
		__syscall_fstat64: ___syscall_fstat64,
		__syscall_getcwd: ___syscall_getcwd,
		__syscall_getdents64: ___syscall_getdents64,
		__syscall_ioctl: ___syscall_ioctl,
		__syscall_lstat64: ___syscall_lstat64,
		__syscall_mkdirat: ___syscall_mkdirat,
		__syscall_newfstatat: ___syscall_newfstatat,
		__syscall_openat: ___syscall_openat,
		__syscall_readlinkat: ___syscall_readlinkat,
		__syscall_rmdir: ___syscall_rmdir,
		__syscall_stat64: ___syscall_stat64,
		__syscall_symlinkat: ___syscall_symlinkat,
		__syscall_umask: ___syscall_umask,
		__syscall_unlinkat: ___syscall_unlinkat,
		_abort_js: __abort_js,
		_emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
		_emscripten_throw_longjmp: __emscripten_throw_longjmp,
		_localtime_js: __localtime_js,
		_mktime_js: __mktime_js,
		_mmap_js: __mmap_js,
		_munmap_js: __munmap_js,
		_setitimer_js: __setitimer_js,
		_tzset_js: __tzset_js,
		emscripten_date_now: _emscripten_date_now,
		emscripten_get_now: _emscripten_get_now,
		emscripten_resize_heap: _emscripten_resize_heap,
		environ_get: _environ_get,
		environ_sizes_get: _environ_sizes_get,
		exit: _exit,
		fd_close: _fd_close,
		fd_fdstat_get: _fd_fdstat_get,
		fd_read: _fd_read,
		fd_seek: _fd_seek,
		fd_sync: _fd_sync,
		fd_write: _fd_write,
		getaddrinfo: _getaddrinfo,
		invoke_ii,
		invoke_iiii,
		invoke_vii,
		proc_exit: _proc_exit
	};
	function invoke_iiii(e, r, t, n) {
		var i = stackSave();
		try {
			return getWasmTableEntry(e)(r, t, n);
		} catch (o) {
			if (stackRestore(i), !(o instanceof EmscriptenEH)) throw o;
			_setThrew(1, 0);
		}
	}
	function invoke_ii(e, r) {
		var t = stackSave();
		try {
			return getWasmTableEntry(e)(r);
		} catch (n) {
			if (stackRestore(t), !(n instanceof EmscriptenEH)) throw n;
			_setThrew(1, 0);
		}
	}
	function invoke_vii(e, r, t) {
		var n = stackSave();
		try {
			getWasmTableEntry(e)(r, t);
		} catch (i) {
			if (stackRestore(n), !(i instanceof EmscriptenEH)) throw i;
			_setThrew(1, 0);
		}
	}
	function callMain(e = []) {
		var r = resolveGlobalSymbol("main").sym;
		if (r) {
			e.unshift(thisProgram);
			var t = e.length, n = stackAlloc((t + 1) * 4), i = n;
			for (var o of e) HEAPU32[i >> 2] = stringToUTF8OnStack(o), i += 4;
			HEAPU32[i >> 2] = 0;
			try {
				var a = r(t, n);
				return exitJS(a, !0), a;
			} catch (s) {
				return handleException(s);
			}
		}
	}
	async function run(e = programArgs) {
		preRun(), runDependencies && await resolveRunDependencies();
		var r = Module.setStatus;
		if (r && (r("Running..."), await new Promise((n) => setTimeout(n, 1)), setTimeout(r, 1, "")), !ABORT) {
			initRuntime(), Module.onRuntimeInitialized?.();
			Module.noInitialRun, postRun();
		}
	}
	var wasmExports = await createWasm();
	return await run(), quit_ = (e, r) => {
		throw r;
	}, Module;
}
var Pe$2 = br;
var ke$2 = Pe$2;
u$1();
var Re$1 = "(?:" + [
	"\\|\\|",
	"\\&\\&",
	";;",
	"\\|\\&",
	"\\<\\(",
	"\\<\\<\\<",
	">>",
	">\\&",
	"<\\&",
	"[&;()|<>]"
].join("|") + ")";
var Me$2 = new RegExp("^" + Re$1 + "$");
var Oe$1 = "|&;()<> \\t";
var Tr = "\"((\\\\\"|[^\"])*?)\"";
var Pr = "'((\\\\'|[^'])*?)'";
var kr = /^#$/;
var De$1 = "'";
var Ne$2 = "\"";
var oe$2 = "$";
var C$3 = "";
var Mr = 4294967296;
for (let e = 0; e < 4; e++) C$3 += (Mr * Math.random()).toString(16);
var Or = new RegExp("^" + C$3);
function Dr(e, r) {
	let t = r.lastIndex, n = [], i;
	for (; i = r.exec(e);) n.push(i), r.lastIndex === i.index && (r.lastIndex += 1);
	return r.lastIndex = t, n;
}
function Nr(e, r, t) {
	let n = typeof e == "function" ? e(t) : e[t];
	return typeof n > "u" && t !== "" ? n = "" : typeof n > "u" && (n = "$"), typeof n == "object" ? r + C$3 + JSON.stringify(n) + C$3 : r + n;
}
function Rr(e, r, t) {
	t || (t = {});
	let n = t.escape || "\\", i = "(\\" + n + `['"` + Oe$1 + `]|[^\\s'"` + Oe$1 + "])+", a = Dr(e, new RegExp(["(" + Re$1 + ")", "(" + i + "|" + Tr + "|" + Pr + ")+"].join("|"), "g"));
	if (a.length === 0) return [];
	r || (r = {});
	let s = !1;
	return a.map(function(l) {
		let u = l[0];
		if (!u || s) return;
		if (Me$2.test(u)) return { op: u };
		let c = !1, _ = !1, m = "", f = !1, p;
		function F() {
			p += 1;
			let S, E, y = u.charAt(p);
			if (y === "{") {
				if (p += 1, u.charAt(p) === "}") throw new Error("Bad substitution: " + u.slice(p - 2, p + 1));
				if (S = u.indexOf("}", p), S < 0) throw new Error("Bad substitution: " + u.slice(p));
				E = u.slice(p, S), p = S;
			} else if (/[*@#?$!_-]/.test(y)) E = y, p += 1;
			else {
				let A = u.slice(p), d = A.match(/[^\w\d_]/);
				d ? (E = A.slice(0, d.index), p += d.index - 1) : (E = A, p = u.length);
			}
			return Nr(r, "", E);
		}
		for (p = 0; p < u.length; p++) {
			let S = u.charAt(p);
			if (f = f || !c && (S === "*" || S === "?"), _) m += S, _ = !1;
			else if (c) S === c ? c = !1 : c === De$1 ? m += S : S === n ? (p += 1, S = u.charAt(p), S === Ne$2 || S === n || S === oe$2 ? m += S : m += n + S) : S === oe$2 ? m += F() : m += S;
			else if (S === Ne$2 || S === De$1) c = S;
			else {
				if (Me$2.test(S)) return { op: u };
				if (kr.test(S)) {
					s = !0;
					let E = { comment: e.slice(l.index + p + 1) };
					return m.length ? [m, E] : [E];
				} else S === n ? _ = !0 : S === oe$2 ? m += F() : m += S;
			}
		}
		return f ? {
			op: "glob",
			pattern: m
		} : m;
	}).reduce(function(l, u) {
		return typeof u > "u" ? l : l.concat(u);
	}, []);
}
function ae$2(e, r, t) {
	let n = Rr(e, r, t);
	return typeof r != "function" ? n : n.reduce(function(i, o) {
		if (typeof o == "object") return i.concat(o);
		let a = o.split(RegExp("(" + C$3 + ".*?" + C$3 + ")", "g"));
		return a.length === 1 ? i.concat(a[0]) : i.concat(a.filter(Boolean).map(function(s) {
			return Or.test(s) ? JSON.parse(s.split(C$3)[1]) : s;
		}));
	}, []);
}
function Ur(e, r) {
	if (!e) throw new Error(r ?? "Assertion failed");
}
var U$4 = "/pglite";
var I$2 = U$4 + "/data";
var Hr = U$4 + "/icu";
var Lr = U$4 + "/bin/initdb";
var pt$1 = U$4 + "/bin/postgres";
var Ue$2 = U$4 + "/pgstdout";
var He$2 = U$4 + "/pgstdin";
function B$3(e, ...r) {
	e && e > 0 && console.log("initdb: ", ...r);
}
async function Cr({ pg: e, debug: r, args: t, wasmModule: n }) {
	let i, o, a, s = !1, l = [], u = 0, c = -1, _ = -1, m = "", f = "", p = (d) => {
		let g = d.shift();
		B$3(r, "initdb: firstArg", g), Ur(g === "/pglite/bin/postgres", `trying to execute ${g}`), e.Module.HEAPU8.set(F), B$3(r, "executing pg main with", d);
		let v = e.callMain(d);
		return B$3(r, v), l = [], v;
	}, F = e.Module.HEAPU8.slice(), y = await ke$2({
		arguments: t,
		noExitRuntime: !1,
		wasmMemory: new WebAssembly.Memory({
			initial: 8,
			maximum: 100
		}),
		thisProgram: Lr,
		stdin: () => null,
		print: (d) => {
			f += d, B$3(r, "initdbout", d);
		},
		printErr: (d) => {
			m += d, B$3(r, "initdberr", d);
		},
		instantiateWasm: (d, g) => (p$2.instantiateWasm(d, n ?? (() => new URL("./initdb.wasm", import.meta.url))).then(({ instance: v, module: N }) => {
			g(v, N);
		}), {}),
		locateFile: (d, g) => d.endsWith(".so") ? "/pglite/lib/" + d : g + d,
		preRun: [
			(d) => {
				d.ENV.PGDATA = I$2, d.ENV.HOME = "/home/postgres", d.ENV.USER = "postgres", d.ENV.LOGNAME = "postgres", d.ENV.ICU_DATA = Hr, d.ENV.TZ = "UTC";
			},
			(d) => {
				d.FS.mkdirTree(U$4), d.FS.mount(d.PROXYFS, {
					root: U$4,
					fs: e.Module.FS
				}, U$4);
			},
			(d) => {
				d.onRuntimeInitialized = () => {
					i = d.addFunction((g) => (l = Le$2(d.UTF8ToString(g)), p(l)), "pi"), d._pgl_set_system_fn(i), o = d.addFunction((g, v) => {
						let N = d.UTF8ToString(v);
						if (l = Le$2(d.UTF8ToString(g)), N === "r") return u = p(l), c;
						if (N === "w") return s = !0, _;
						throw `Unexpected popen mode value ${N}`;
					}, "ppi"), d._pgl_set_popen_fn(o), a = d.addFunction((g) => g === c || g === _ ? (s && (s = !1, u = p(l)), u) : d._pclose(g), "pi"), d._pgl_set_pclose_fn(a);
					{
						let g = e.Module.stringToUTF8OnStack(He$2), v = e.Module.stringToUTF8OnStack("r");
						e.Module._pgl_freopen(g, v, 0);
						let N = e.Module.stringToUTF8OnStack(Ue$2), K = e.Module.stringToUTF8OnStack("w");
						e.Module._pgl_freopen(N, K, 1);
					}
					{
						let g = d.stringToUTF8OnStack(Ue$2), v = d.stringToUTF8OnStack("r");
						c = d._fopen(g, v);
						let N = d.stringToUTF8OnStack(He$2), K = d.stringToUTF8OnStack("w");
						_ = d._fopen(N, K);
					}
				};
			}
		]
	});
	return B$3(r, "calling initdb.main with", t), {
		exitCode: y.callMain(t),
		stderr: m,
		stdout: f,
		dataFolder: I$2
	};
}
function Le$2(e) {
	let r = [], t = ae$2(e);
	for (let n = 0; n < t.length; n++) {
		let i = t[n];
		if (typeof i == "object" && "op" in i) break;
		typeof i == "string" && r.push(i);
	}
	return r;
}
async function St$1({ pg: e, debug: r, args: t, wasmModule: n }) {
	return await Cr({
		pg: e,
		debug: r,
		args: [
			"--allow-group-access",
			"--encoding",
			"UTF8",
			"--locale=C.UTF-8",
			"--locale-provider=libc",
			"--auth=trust",
			...t ?? []
		],
		wasmModule: n
	});
}
var Ce$2 = class {
	constructor(r) {
		this.dataDir = r;
	}
	async init(r, t) {
		return this.pg = r, { emscriptenOpts: t };
	}
	async syncToFs(r) {}
	async initialSyncFs() {}
	async closeFs() {}
	async dumpTar(r, t) {
		return ie$2(this.pg.Module.FS, I$2, r, t);
	}
};
var Ie$1 = class {
	constructor(r, { debug: t = !1 } = {}) {
		this.dataDir = r, this.debug = t;
	}
	async syncToFs(r) {}
	async initialSyncFs() {}
	async closeFs() {}
	async dumpTar(r, t) {
		return ie$2(this.pg.Module.FS, I$2, r, t);
	}
	async init(r, t) {
		return this.pg = r, { emscriptenOpts: {
			...t,
			preRun: [...t.preRun || [], (i) => {
				let o = Ir(i, this);
				i.FS.mkdirTree(I$2), i.FS.mount(o, {}, I$2);
			}]
		} };
	}
};
var xe$2 = {
	EBADF: 8,
	EBADFD: 127,
	EEXIST: 20,
	EINVAL: 28,
	EISDIR: 31,
	ENODEV: 43,
	ENOENT: 44,
	ENOTDIR: 54,
	ENOTEMPTY: 55
};
var Ir = (e, r) => {
	let t = e.FS, n = r.debug ? console.log : null, i = {
		tryFSOperation(o) {
			try {
				return o();
			} catch (a) {
				throw a.code ? a.code === "UNKNOWN" ? new t.ErrnoError(xe$2.EINVAL) : new t.ErrnoError(a.code) : a;
			}
		},
		mount(o) {
			return i.createNode(null, "/", 16895, 0);
		},
		syncfs(o, a, s) {},
		createNode(o, a, s, l) {
			if (!t.isDir(s) && !t.isFile(s)) throw new t.ErrnoError(28);
			let u = t.createNode(o, a, s);
			return u.node_ops = i.node_ops, u.stream_ops = i.stream_ops, u;
		},
		getMode: function(o) {
			return n?.("getMode", o), i.tryFSOperation(() => r.lstat(o).mode);
		},
		realPath: function(o) {
			let a = [];
			for (; o.parent !== o;) a.push(o.name), o = o.parent;
			return a.push(o.mount.opts.root), a.reverse(), a.join("/");
		},
		node_ops: {
			getattr(o) {
				n?.("getattr", i.realPath(o));
				let a = i.realPath(o);
				return i.tryFSOperation(() => {
					let s = r.lstat(a);
					return {
						...s,
						dev: 0,
						ino: o.id,
						nlink: 1,
						rdev: o.rdev,
						atime: new Date(s.atime),
						mtime: new Date(s.mtime),
						ctime: new Date(s.ctime)
					};
				});
			},
			setattr(o, a) {
				n?.("setattr", i.realPath(o), a);
				let s = i.realPath(o);
				i.tryFSOperation(() => {
					if (a.mode !== void 0 && r.chmod(s, a.mode), a.size !== void 0 && r.truncate(s, a.size), a.timestamp !== void 0 && r.utimes(s, a.timestamp, a.timestamp), a.atime || a.mtime) {
						let l = new Date(a.atime || a.mtime).getTime(), u = new Date(a.mtime || a.atime).getTime();
						r.utimes(s, l, u);
					}
					a.size !== void 0 && r.truncate(s, a.size);
				});
			},
			lookup(o, a) {
				n?.("lookup", i.realPath(o), a);
				let s = [i.realPath(o), a].join("/"), l = i.getMode(s);
				return i.createNode(o, a, l);
			},
			mknod(o, a, s, l) {
				n?.("mknod", i.realPath(o), a, s, l);
				let u = i.createNode(o, a, s, l), c = i.realPath(u);
				return i.tryFSOperation(() => (t.isDir(u.mode) ? r.mkdir(c, { mode: s }) : r.writeFile(c, "", { mode: s }), u));
			},
			rename(o, a, s) {
				n?.("rename", i.realPath(o), i.realPath(a), s);
				let l = i.realPath(o), u = [i.realPath(a), s].join("/");
				i.tryFSOperation(() => {
					r.rename(l, u);
				}), o.name = s;
			},
			unlink(o, a) {
				n?.("unlink", i.realPath(o), a);
				let s = [i.realPath(o), a].join("/");
				try {
					r.unlink(s);
				} catch {}
			},
			rmdir(o, a) {
				n?.("rmdir", i.realPath(o), a);
				let s = [i.realPath(o), a].join("/");
				return i.tryFSOperation(() => {
					r.rmdir(s);
				});
			},
			readdir(o) {
				n?.("readdir", i.realPath(o));
				let a = i.realPath(o);
				return i.tryFSOperation(() => r.readdir(a));
			},
			symlink(o, a, s) {
				throw n?.("symlink", i.realPath(o), a, s), new t.ErrnoError(63);
			},
			readlink(o) {
				throw n?.("readlink", i.realPath(o)), new t.ErrnoError(63);
			}
		},
		stream_ops: {
			open(o) {
				n?.("open stream", i.realPath(o.node));
				let a = i.realPath(o.node);
				return i.tryFSOperation(() => {
					t.isFile(o.node.mode) && (o.shared.refcount = 1, o.nfd = r.open(a));
				});
			},
			close(o) {
				return n?.("close stream", i.realPath(o.node)), i.tryFSOperation(() => {
					t.isFile(o.node.mode) && o.nfd && --o.shared.refcount === 0 && r.close(o.nfd);
				});
			},
			dup(o) {
				n?.("dup stream", i.realPath(o.node)), o.shared.refcount++;
			},
			read(o, a, s, l, u) {
				return n?.("read stream", i.realPath(o.node), s, l, u), l === 0 ? 0 : i.tryFSOperation(() => r.read(o.nfd, a, s, l, u));
			},
			write(o, a, s, l, u) {
				return n?.("write stream", i.realPath(o.node), s, l, u), i.tryFSOperation(() => r.write(o.nfd, a.buffer, s, l, u));
			},
			llseek(o, a, s) {
				n?.("llseek stream", i.realPath(o.node), a, s);
				let l = a;
				if (s === 1 ? l += o.position : s === 2 && t.isFile(o.node.mode) && i.tryFSOperation(() => {
					let u = r.fstat(o.nfd);
					l += u.size;
				}), l < 0) throw new t.ErrnoError(28);
				return l;
			},
			mmap(o, a, s, l, u) {
				if (n?.("mmap stream", i.realPath(o.node), a, s, l, u), !t.isFile(o.node.mode)) throw new t.ErrnoError(xe$2.ENODEV);
				let c = e.mmapAlloc(a);
				return i.stream_ops.read(o, e.HEAPU8, c, a, s), {
					ptr: c,
					allocated: !0
				};
			},
			msync(o, a, s, l, u) {
				return n?.("msync stream", i.realPath(o.node), s, l, u), i.stream_ops.write(o, a, 0, l, s), 0;
			}
		}
	};
	return i;
};
// node_modules/@electric-sql/pglite/dist/chunk-UCFNZJLR.js
u$1();
var K$1 = 1024;
var A$3;
var F$3;
var g$3;
var m$4;
var y$3;
var E$3;
var v$1;
var n;
var J$2;
var H$2;
var j$2;
var z$4;
var B$2;
var U$3;
var x$5;
var D$5;
var q$2;
var I$1;
var L$2;
var C$2;
var w$3;
var T$3;
var $$3 = class extends Ce$2 {
	constructor(e, { debug: t = !1 } = {}) {
		super();
		R$2(this, n);
		R$2(this, A$3);
		R$2(this, F$3);
		R$2(this, g$3, !0);
		R$2(this, m$4, []);
		R$2(this, y$3, /* @__PURE__ */ new Map());
		R$2(this, E$3, Promise.resolve());
		R$2(this, v$1, !1);
		this.backend = e, this.debug = t;
	}
	async init(e, t) {
		return this.pg = e, await this.backend.init(), { emscriptenOpts: {
			...t,
			preRun: [...t.preRun || [], (s) => {
				s.FS.mkdirTree(I$2), s.FS.mount(T$4(this, n, J$2).call(this, s), {}, I$2);
			}]
		} };
	}
	async initialSyncFs() {
		let e = this.pg.Module.FS;
		x$6(this, g$3, !1);
		try {
			for await (let t of this.backend.load()) {
				let r = I$2 + t.path;
				t.kind === "dir" ? e.mkdir(r, 448) : (e.writeFile(r, t.data, {
					mode: 384,
					canOwn: !0
				}), t.mtime !== void 0 && e.utime(r, t.mtime, t.mtime));
			}
		} finally {
			x$6(this, g$3, !0);
		}
	}
	async syncToFs(e = !1) {
		let t = h$1(this, E$3).then(() => T$4(this, n, q$2).call(this, e));
		x$6(this, E$3, t.catch(() => {})), await t;
	}
	async closeFs() {
		await this.syncToFs(), await this.backend.close(), this.pg.Module.FS.quit();
	}
};
A$3 = /* @__PURE__ */ new WeakMap(), F$3 = /* @__PURE__ */ new WeakMap(), g$3 = /* @__PURE__ */ new WeakMap(), m$4 = /* @__PURE__ */ new WeakMap(), y$3 = /* @__PURE__ */ new WeakMap(), E$3 = /* @__PURE__ */ new WeakMap(), v$1 = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakSet(), J$2 = function(e) {
	let t = e.MEMFS;
	return {
		mount: (r) => {
			let s = t.mount(r);
			return h$1(this, F$3) ?? x$6(this, F$3, T$4(this, n, H$2).call(this, e, t.ops_table)), T$4(this, n, j$2).call(this, e, s), x$6(this, A$3, s), s;
		},
		syncfs: (r, s, u) => {
			u(null);
		}
	};
}, H$2 = function(e, t) {
	let r = e.FS, s = t.dir.node, u = t.file.node, l = t.file.stream, M = (i, h) => {
		u.setattr(i, h), h.size !== void 0 && r.isFile(i.mode) && T$4(this, n, U$3).call(this, i);
	};
	return {
		dir: {
			node: {
				...s,
				setattr: M,
				mknod: (i, h, d, c) => {
					let f = s.mknod(i, h, d, c);
					return T$4(this, n, j$2).call(this, e, f), T$4(this, n, D$5).call(this, e, f), f;
				},
				rename: (i, h, d) => {
					let c = T$4(this, n, w$3).call(this, e, i);
					s.rename(i, h, d), T$4(this, n, x$5).call(this, c), T$4(this, n, D$5).call(this, e, i);
				},
				unlink: (i, h) => {
					s.unlink(i, h), T$4(this, n, x$5).call(this, T$4(this, n, T$3).call(this, T$4(this, n, w$3).call(this, e, i), h));
				},
				rmdir: (i, h) => {
					s.rmdir(i, h), T$4(this, n, x$5).call(this, T$4(this, n, T$3).call(this, T$4(this, n, w$3).call(this, e, i), h));
				},
				symlink: (i, h, d) => (h$1(this, g$3) && !h$1(this, v$1) && (x$6(this, v$1, !0), console.warn("MEMFS frontend: symlinks are not persisted")), s.symlink(i, h, d))
			},
			stream: t.dir.stream
		},
		file: {
			node: {
				...u,
				setattr: M
			},
			stream: {
				...l,
				write: (i, h, d, c, f, k) => {
					let _ = l.write(i, h, d, c, f, k);
					return T$4(this, n, B$2).call(this, i.node, f, f + _), _;
				},
				msync: (i, h, d, c, f) => {
					let k = l.msync(i, h, d, c, f);
					return T$4(this, n, B$2).call(this, i.node, d, d + c), k;
				},
				allocate: (i, h, d) => {
					l.allocate(i, h, d), T$4(this, n, U$3).call(this, i.node);
				}
			}
		}
	};
}, j$2 = function(e, t) {
	let r = e.FS;
	r.isDir(t.mode) ? (t.node_ops = h$1(this, F$3).dir.node, t.stream_ops = h$1(this, F$3).dir.stream) : r.isFile(t.mode) && (t.node_ops = h$1(this, F$3).file.node, t.stream_ops = h$1(this, F$3).file.stream);
}, z$4 = function(e) {
	let t = h$1(this, y$3).get(e);
	return t || (t = {
		full: !1,
		resized: !1,
		ranges: []
	}, h$1(this, y$3).set(e, t)), t;
}, B$2 = function(e, t, r) {
	if (!h$1(this, g$3) || r <= t) return;
	let s = T$4(this, n, z$4).call(this, e);
	if (s.full) return;
	let u = s.ranges, l = u[u.length - 1];
	l && t <= l[1] && r >= l[0] ? (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], r)) : (u.push([t, r]), u.length > K$1 && (s.ranges = R$1(u)));
}, U$3 = function(e) {
	h$1(this, g$3) && (T$4(this, n, z$4).call(this, e).resized = !0);
}, x$5 = function(e) {
	h$1(this, g$3) && h$1(this, m$4).push({
		op: "remove",
		path: e
	});
}, D$5 = function(e, t) {
	if (!h$1(this, g$3)) return;
	let r = e.FS;
	if (r.isDir(t.mode)) {
		h$1(this, m$4).push({
			op: "mkdir",
			node: t
		});
		for (let s of Object.values(t.contents)) T$4(this, n, D$5).call(this, e, s);
	} else if (r.isFile(t.mode)) {
		let s = T$4(this, n, z$4).call(this, t);
		s.full = !0, s.ranges = [];
	}
}, q$2 = async function(e) {
	if (h$1(this, m$4).length === 0 && h$1(this, y$3).size === 0) return;
	let t = T$4(this, n, I$1).call(this);
	try {
		await this.backend.apply(t.changes, { relaxedDurability: e });
	} catch (r) {
		throw T$4(this, n, L$2).call(this, t), r;
	}
	if (this.debug) {
		let { ops: r, files: s } = t.changes, u = s.wal.length + s.data.length + s.control.length;
		console.log(`MEMFS frontend: flushed ${r.length} ops, ${u} files`);
	}
}, I$1 = function() {
	let e = this.pg.Module, t = e.FS, r = [];
	for (let l of h$1(this, m$4)) l.op === "remove" ? r.push(l) : t.isDir(l.node.mode) && T$4(this, n, C$2).call(this, l.node) && r.push({
		op: "mkdir",
		path: T$4(this, n, w$3).call(this, e, l.node)
	});
	let s = {
		wal: [],
		data: [],
		control: []
	};
	for (let [l, M] of h$1(this, y$3)) {
		if (!t.isFile(l.mode) || !T$4(this, n, C$2).call(this, l)) continue;
		let i = l.usedBytes, h = M.full ? [[0, i]] : R$1(M.ranges), d = [];
		for (let [k, _] of h) {
			let W = Math.min(_, i);
			k >= W || d.push({
				at: k,
				data: Q$2(l.contents, k, W)
			});
		}
		let c = T$4(this, n, w$3).call(this, e, l);
		(c.startsWith("/pg_wal/") ? s.wal : c === "/global/pg_control" ? s.control : s.data).push({
			path: c,
			size: i,
			full: M.full,
			truncate: M.full || M.resized,
			chunks: d
		});
	}
	let u = {
		changes: {
			ops: r,
			files: s
		},
		journal: h$1(this, m$4),
		dirty: h$1(this, y$3)
	};
	return x$6(this, m$4, []), x$6(this, y$3, /* @__PURE__ */ new Map()), u;
}, L$2 = function(e) {
	x$6(this, m$4, [...e.journal, ...h$1(this, m$4)]);
	for (let [t, r] of e.dirty) {
		let s = h$1(this, y$3).get(t);
		s ? (s.full || (s.full = r.full), s.resized || (s.resized = r.resized), s.ranges = s.full ? [] : R$1([...r.ranges, ...s.ranges])) : h$1(this, y$3).set(t, r);
	}
}, C$2 = function(e) {
	for (; e.parent !== e;) {
		if (e.parent.contents?.[e.name] !== e) return !1;
		e = e.parent;
	}
	return e === h$1(this, A$3);
}, w$3 = function(e, t) {
	return e.FS.getPath(t).slice(I$2.length);
}, T$3 = function(e, t) {
	return `${e}/${t}`;
};
function R$1(S) {
	let N = [...S].sort((t, r) => t[0] - r[0]), e = [];
	for (let [t, r] of N) {
		let s = e[e.length - 1];
		s && t <= s[1] ? s[1] = Math.max(s[1], r) : e.push([t, r]);
	}
	return e;
}
function Q$2(S, N, e) {
	return S ? new Uint8Array(S.subarray ? S.subarray(N, e) : S.slice(N, e)) : new Uint8Array(e - N);
}
// node_modules/@electric-sql/pglite/dist/fs/memfs2opfs.js
var memfs2opfs_exports = /* @__PURE__ */ __exportAll({
	Memfs2OpfsFS: () => D$4,
	OpfsBackend: () => p$1
});
u$1();
var B$1 = 2;
var N$3 = /^\/pg_wal\/[0-9A-F]{24}$/;
var m$3;
var y$2;
var d$1;
var P$3;
var w$2;
var x$4;
var p$1 = class {
	constructor(t, { maxConcurrentWrites: r = 16 } = {}) {
		R$2(this, d$1);
		R$2(this, m$3);
		R$2(this, y$2, /* @__PURE__ */ new Map());
		this.dataDir = t, this.maxConcurrentWrites = r;
	}
	async init() {
		x$6(this, m$3, await T$4(this, d$1, x$4).call(this, this.dataDir, {
			from: await navigator.storage.getDirectory(),
			create: !0
		}));
	}
	load() {
		return E$2(h$1(this, m$3), "");
	}
	async apply(t, { relaxedDurability: r }) {
		let e = /* @__PURE__ */ new Map(), s = (a) => {
			let i = a.join("/"), c = e.get(i);
			if (!c) {
				let o = a.length ? s(a.slice(0, -1)).then((z) => z.getDirectoryHandle(a[a.length - 1], { create: !0 })) : Promise.resolve(h$1(this, m$3));
				e.set(i, o), o.catch(() => e.delete(i)), c = o;
			}
			return c;
		};
		for (let a of t.ops) {
			let i = g$2(a.path);
			if (a.op === "mkdir") {
				await s(i);
				continue;
			}
			T$4(this, d$1, w$2).call(this, a.path);
			let c = i.join("/");
			for (let o of [...e.keys()]) (o === c || o.startsWith(c + "/")) && e.delete(o);
			try {
				await (await s(i.slice(0, -1))).removeEntry(i[i.length - 1], { recursive: !0 });
			} catch (o) {
				if (o?.name !== "NotFoundError") throw o;
			}
		}
		let u = async (a) => {
			let i = g$2(a);
			return (await s(i.slice(0, -1))).getFileHandle(i[i.length - 1], { create: !0 });
		}, S = async (a) => {
			await b$1(await u(a.path), a, r);
		}, v = async (a) => {
			if (!N$3.test(a.path)) return S(a);
			let i = h$1(this, y$2).get(a.path);
			if (!i) {
				let c = await u(a.path);
				if (!("createSyncAccessHandle" in c)) return b$1(c, a, r);
				i = await c.createSyncAccessHandle();
			}
			h$1(this, y$2).delete(a.path), h$1(this, y$2).set(a.path, i);
			try {
				C$1(i, a, r);
			} catch (c) {
				throw T$4(this, d$1, w$2).call(this, a.path), c;
			}
		}, { wal: M, data: O, control: _ } = t.files;
		await k$2(M, this.maxConcurrentWrites, v), T$4(this, d$1, P$3).call(this);
		for (let a of [O, _]) await k$2(a, this.maxConcurrentWrites, S);
	}
	async close() {
		T$4(this, d$1, w$2).call(this);
	}
};
m$3 = /* @__PURE__ */ new WeakMap(), y$2 = /* @__PURE__ */ new WeakMap(), d$1 = /* @__PURE__ */ new WeakSet(), P$3 = function() {
	for (let [t, r] of h$1(this, y$2)) {
		if (h$1(this, y$2).size <= B$1) break;
		h$1(this, y$2).delete(t), W$1(r);
	}
}, w$2 = function(t) {
	for (let [r, e] of h$1(this, y$2)) t && r !== t && !r.startsWith(t + "/") || (h$1(this, y$2).delete(r), W$1(e));
}, x$4 = async function(t, r) {
	let e = r.from;
	for (let s of g$2(t)) e = await e.getDirectoryHandle(s, { create: r.create });
	return e;
};
var D$4 = class extends $$3 {
	constructor(t, r = {}) {
		super(new p$1(t, r), { debug: r.debug }), this.dataDir = t;
	}
};
async function* E$2(n, t) {
	for await (let [r, e] of n.entries()) {
		let s = `${t}/${r}`;
		if (e.kind === "directory") yield {
			kind: "dir",
			path: s
		}, yield* E$2(e, s);
		else {
			let u = await e.getFile();
			yield {
				kind: "file",
				path: s,
				data: new Uint8Array(await u.arrayBuffer()),
				mtime: u.lastModified
			};
		}
	}
}
function g$2(n) {
	return n.split("/").filter(Boolean);
}
async function b$1(n, t, r) {
	if ("createSyncAccessHandle" in n) {
		let e = await n.createSyncAccessHandle();
		try {
			C$1(e, t, r);
		} finally {
			e.close();
		}
	} else {
		let e = await n.createWritable({ keepExistingData: !t.full });
		try {
			t.truncate && !t.full && await e.truncate(t.size);
			for (let s of t.chunks) await e.write({
				type: "write",
				position: s.at,
				data: s.data
			});
			await e.close();
		} catch (s) {
			throw await e.abort().catch(() => {}), s;
		}
	}
}
function C$1(n, t, r) {
	t.truncate && n.truncate(t.size);
	for (let e of t.chunks) n.write(e.data, { at: e.at });
	r || n.flush();
}
function W$1(n) {
	try {
		n.close();
	} catch {}
}
async function k$2(n, t, r) {
	let e = 0, s = async () => {
		for (; e < n.length;) await r(n[e++]);
	};
	await Promise.all(Array.from({ length: Math.min(t, n.length) }, s));
}
// node_modules/@electric-sql/pglite/dist/fs/nodefs.js
var nodefs_exports = /* @__PURE__ */ __exportAll({ NodeFS: () => m$2 });
u$1();
var m$2 = class extends Ce$2 {
	constructor(t) {
		super(t), this.rootDir = r$1.resolve(t), o$2.existsSync(r$1.join(this.rootDir)) || o$2.mkdirSync(this.rootDir);
	}
	async init(t, e) {
		return this.pg = t, { emscriptenOpts: {
			...e,
			preRun: [...e.preRun || [], (s) => {
				let c = s.NODEFS;
				s.FS.mkdirTree(I$2), s.FS.mount(c, { root: this.rootDir }, I$2);
			}]
		} };
	}
	async closeFs() {
		this.pg.Module.FS.quit();
	}
};
// node_modules/@electric-sql/pglite/dist/fs/opfs-ahp.js
var opfs_ahp_exports = /* @__PURE__ */ __exportAll({ OpfsAhpFS: () => z$3 });
u$1();
var U$2 = "state.txt";
var $$2 = "data";
var M = {
	DIR: 16384,
	FILE: 32768
};
var I;
var k$1;
var N$2;
var H$1;
var y$1;
var f$1;
var x$3;
var F$2;
var P$2;
var S$2;
var r;
var L$1;
var D$3;
var E$1;
var w$1;
var m$1;
var A$2;
var C;
var T$2;
var z$3 = class extends Ie$1 {
	constructor(e, { initialPoolSize: t = 1e3, maintainedPoolSize: s = 100, debug: i = !1 } = {}) {
		super(e, { debug: i });
		R$2(this, r);
		R$2(this, I);
		R$2(this, k$1);
		R$2(this, N$2);
		R$2(this, H$1);
		R$2(this, y$1);
		R$2(this, f$1, /* @__PURE__ */ new Map());
		R$2(this, x$3, 0);
		R$2(this, F$2, /* @__PURE__ */ new Map());
		R$2(this, P$2, /* @__PURE__ */ new Map());
		this.lastCheckpoint = 0;
		this.checkpointInterval = 6e4;
		this.poolCounter = 0;
		R$2(this, S$2, /* @__PURE__ */ new Set());
		this.initialPoolSize = t, this.maintainedPoolSize = s;
	}
	async init(e, t) {
		return await T$4(this, r, L$1).call(this), super.init(e, t);
	}
	async syncToFs(e = !1) {
		await this.maybeCheckpointState(), await this.maintainPool(), e || this.flush();
	}
	async closeFs() {
		for (let e of h$1(this, f$1).values()) e.sh.close();
		h$1(this, y$1).flush(), h$1(this, y$1).close(), this.pg.Module.FS.quit();
	}
	async maintainPool(e) {
		e = e || this.maintainedPoolSize;
		let t = e - this.state.pool.length, s = [];
		for (let i = 0; i < t; i++) s.push(new Promise(async (a) => {
			++this.poolCounter;
			let c = `${(Date.now() - 1704063600).toString(16).padStart(8, "0")}-${this.poolCounter.toString(16).padStart(8, "0")}`, h = await h$1(this, N$2).getFileHandle(c, { create: !0 }), p = await h.createSyncAccessHandle();
			h$1(this, f$1).set(c, {
				fh: h,
				sh: p
			}), T$4(this, r, E$1).call(this, {
				opp: "createPoolFile",
				args: [c]
			}), this.state.pool.push(c), a();
		}));
		for (let i = 0; i > t; i--) s.push(new Promise(async (a) => {
			let c = this.state.pool.pop();
			T$4(this, r, E$1).call(this, {
				opp: "deletePoolFile",
				args: [c]
			});
			let h = h$1(this, f$1).get(c);
			h?.sh?.close(), await h$1(this, N$2).removeEntry(h.fh.name), h$1(this, f$1).delete(c), a();
		}));
		await Promise.all(s);
	}
	_createPoolFileState(e) {
		this.state.pool.push(e);
	}
	_deletePoolFileState(e) {
		let t = this.state.pool.indexOf(e);
		t > -1 && this.state.pool.splice(t, 1);
	}
	async maybeCheckpointState() {
		Date.now() - this.lastCheckpoint > this.checkpointInterval && await this.checkpointState();
	}
	async checkpointState() {
		let e = new TextEncoder().encode(JSON.stringify(this.state));
		h$1(this, y$1).truncate(0), h$1(this, y$1).write(e, { at: 0 }), h$1(this, y$1).flush(), this.lastCheckpoint = Date.now();
	}
	flush() {
		for (let e of h$1(this, S$2)) try {
			e.flush();
		} catch {}
		h$1(this, S$2).clear();
	}
	chmod(e, t) {
		T$4(this, r, D$3).call(this, {
			opp: "chmod",
			args: [e, t]
		}, () => {
			this._chmodState(e, t);
		});
	}
	_chmodState(e, t) {
		let s = T$4(this, r, m$1).call(this, e);
		s.mode = t;
	}
	close(e) {
		let t = T$4(this, r, A$2).call(this, e);
		h$1(this, F$2).delete(e), h$1(this, P$2).delete(t);
	}
	fstat(e) {
		let t = T$4(this, r, A$2).call(this, e);
		return this.lstat(t);
	}
	lstat(e) {
		let t = T$4(this, r, m$1).call(this, e), s = t.type === "file" ? h$1(this, f$1).get(t.backingFilename).sh.getSize() : 0, i = 4096;
		return {
			dev: 0,
			ino: 0,
			mode: t.mode,
			nlink: 1,
			uid: 0,
			gid: 0,
			rdev: 0,
			size: s,
			blksize: i,
			blocks: Math.ceil(s / i),
			atime: t.lastModified,
			mtime: t.lastModified,
			ctime: t.lastModified
		};
	}
	mkdir(e, t) {
		T$4(this, r, D$3).call(this, {
			opp: "mkdir",
			args: [e, t]
		}, () => {
			this._mkdirState(e, t);
		});
	}
	_mkdirState(e, t) {
		let s = T$4(this, r, w$1).call(this, e), i = s.pop(), a = [], c = this.state.root;
		for (let p of s) {
			if (a.push(e), !Object.prototype.hasOwnProperty.call(c.children, p)) if (t?.recursive) this.mkdir(a.join("/"));
			else throw new d("ENOENT", "No such file or directory");
			if (c.children[p].type !== "directory") throw new d("ENOTDIR", "Not a directory");
			c = c.children[p];
		}
		if (Object.prototype.hasOwnProperty.call(c.children, i)) throw new d("EEXIST", "File exists");
		let h = {
			type: "directory",
			lastModified: Date.now(),
			mode: t?.mode || M.DIR,
			children: {}
		};
		c.children[i] = h;
	}
	open(e, t, s) {
		if (T$4(this, r, m$1).call(this, e).type !== "file") throw new d("EISDIR", "Is a directory");
		let a = T$4(this, r, C).call(this);
		return h$1(this, F$2).set(a, e), h$1(this, P$2).set(e, a), a;
	}
	readdir(e) {
		let t = T$4(this, r, m$1).call(this, e);
		if (t.type !== "directory") throw new d("ENOTDIR", "Not a directory");
		return Object.keys(t.children);
	}
	read(e, t, s, i, a) {
		let c = T$4(this, r, A$2).call(this, e), h = T$4(this, r, m$1).call(this, c);
		if (h.type !== "file") throw new d("EISDIR", "Is a directory");
		return h$1(this, f$1).get(h.backingFilename).sh.read(new Uint8Array(t.buffer, s, i), { at: a });
	}
	rename(e, t) {
		T$4(this, r, D$3).call(this, {
			opp: "rename",
			args: [e, t]
		}, () => {
			this._renameState(e, t, !0);
		});
	}
	_renameState(e, t, s = !1) {
		let i = T$4(this, r, w$1).call(this, e), a = i.pop(), c = T$4(this, r, m$1).call(this, i.join("/"));
		if (!Object.prototype.hasOwnProperty.call(c.children, a)) throw new d("ENOENT", "No such file or directory");
		let h = T$4(this, r, w$1).call(this, t), p = h.pop(), l = T$4(this, r, m$1).call(this, h.join("/"));
		if (s && Object.prototype.hasOwnProperty.call(l.children, p)) {
			let u = l.children[p];
			h$1(this, f$1).get(u.backingFilename).sh.truncate(0), this.state.pool.push(u.backingFilename);
		}
		l.children[p] = c.children[a], delete c.children[a];
	}
	rmdir(e) {
		T$4(this, r, D$3).call(this, {
			opp: "rmdir",
			args: [e]
		}, () => {
			this._rmdirState(e);
		});
	}
	_rmdirState(e) {
		let t = T$4(this, r, w$1).call(this, e), s = t.pop(), i = T$4(this, r, m$1).call(this, t.join("/"));
		if (!Object.prototype.hasOwnProperty.call(i.children, s)) throw new d("ENOENT", "No such file or directory");
		let a = i.children[s];
		if (a.type !== "directory") throw new d("ENOTDIR", "Not a directory");
		if (Object.keys(a.children).length > 0) throw new d("ENOTEMPTY", "Directory not empty");
		delete i.children[s];
	}
	truncate(e, t = 0) {
		let s = T$4(this, r, m$1).call(this, e);
		if (s.type !== "file") throw new d("EISDIR", "Is a directory");
		let i = h$1(this, f$1).get(s.backingFilename)?.sh;
		if (!i) throw new d("ENOENT", "No such file or directory");
		i.truncate(t), h$1(this, S$2).add(i);
	}
	unlink(e) {
		T$4(this, r, D$3).call(this, {
			opp: "unlink",
			args: [e]
		}, () => {
			this._unlinkState(e, !0);
		});
	}
	_unlinkState(e, t = !1) {
		let s = T$4(this, r, w$1).call(this, e), i = s.pop(), a = T$4(this, r, m$1).call(this, s.join("/"));
		if (!Object.prototype.hasOwnProperty.call(a.children, i)) throw new d("ENOENT", "No such file or directory");
		let c = a.children[i];
		if (c.type !== "file") throw new d("EISDIR", "Is a directory");
		if (delete a.children[i], t) {
			let h = h$1(this, f$1).get(c.backingFilename).sh;
			h?.truncate(0), h$1(this, S$2).add(h), h$1(this, P$2).has(e) && (h$1(this, F$2).delete(h$1(this, P$2).get(e)), h$1(this, P$2).delete(e));
		}
		this.state.pool.push(c.backingFilename);
	}
	utimes(e, t, s) {
		T$4(this, r, D$3).call(this, {
			opp: "utimes",
			args: [
				e,
				t,
				s
			]
		}, () => {
			this._utimesState(e, t, s);
		});
	}
	_utimesState(e, t, s) {
		let i = T$4(this, r, m$1).call(this, e);
		i.lastModified = s;
	}
	writeFile(e, t, s) {
		let i = T$4(this, r, w$1).call(this, e), a = i.pop(), c = T$4(this, r, m$1).call(this, i.join("/"));
		if (Object.prototype.hasOwnProperty.call(c.children, a)) {
			let l = c.children[a];
			l.lastModified = Date.now(), T$4(this, r, E$1).call(this, {
				opp: "setLastModified",
				args: [e, l.lastModified]
			});
		} else {
			if (this.state.pool.length === 0) throw new Error("No more file handles available in the pool");
			let l = {
				type: "file",
				lastModified: Date.now(),
				mode: s?.mode || M.FILE,
				backingFilename: this.state.pool.pop()
			};
			c.children[a] = l, T$4(this, r, E$1).call(this, {
				opp: "createFileNode",
				args: [e, l]
			});
		}
		let h = c.children[a], p = h$1(this, f$1).get(h.backingFilename).sh;
		t.length > 0 && (p.write(typeof t == "string" ? new TextEncoder().encode(t) : new Uint8Array(t), { at: 0 }), e.startsWith("/pg_wal") && h$1(this, S$2).add(p));
	}
	_createFileNodeState(e, t) {
		let s = T$4(this, r, w$1).call(this, e), i = s.pop(), a = T$4(this, r, m$1).call(this, s.join("/"));
		a.children[i] = t;
		let c = this.state.pool.indexOf(t.backingFilename);
		return c > -1 && this.state.pool.splice(c, 1), t;
	}
	_setLastModifiedState(e, t) {
		let s = T$4(this, r, m$1).call(this, e);
		s.lastModified = t;
	}
	write(e, t, s, i, a) {
		let c = T$4(this, r, A$2).call(this, e), h = T$4(this, r, m$1).call(this, c);
		if (h.type !== "file") throw new d("EISDIR", "Is a directory");
		let p = h$1(this, f$1).get(h.backingFilename)?.sh;
		if (!p) throw new d("EBADF", "Bad file descriptor");
		let l = p.write(new Uint8Array(t, s, i), { at: a });
		return c.startsWith("/pg_wal") && h$1(this, S$2).add(p), l;
	}
};
I = /* @__PURE__ */ new WeakMap(), k$1 = /* @__PURE__ */ new WeakMap(), N$2 = /* @__PURE__ */ new WeakMap(), H$1 = /* @__PURE__ */ new WeakMap(), y$1 = /* @__PURE__ */ new WeakMap(), f$1 = /* @__PURE__ */ new WeakMap(), x$3 = /* @__PURE__ */ new WeakMap(), F$2 = /* @__PURE__ */ new WeakMap(), P$2 = /* @__PURE__ */ new WeakMap(), S$2 = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), L$1 = async function() {
	x$6(this, I, await navigator.storage.getDirectory()), x$6(this, k$1, await T$4(this, r, T$2).call(this, this.dataDir, { create: !0 })), x$6(this, N$2, await T$4(this, r, T$2).call(this, $$2, {
		from: h$1(this, k$1),
		create: !0
	})), x$6(this, H$1, await h$1(this, k$1).getFileHandle(U$2, { create: !0 })), x$6(this, y$1, await h$1(this, H$1).createSyncAccessHandle());
	let e = new ArrayBuffer(h$1(this, y$1).getSize());
	h$1(this, y$1).read(e, { at: 0 });
	let t, s = new TextDecoder().decode(e).split(`
`), i = !1;
	try {
		t = JSON.parse(s[0]);
	} catch {
		t = {
			root: {
				type: "directory",
				lastModified: Date.now(),
				mode: M.DIR,
				children: {}
			},
			pool: []
		}, h$1(this, y$1).truncate(0), h$1(this, y$1).write(new TextEncoder().encode(JSON.stringify(t)), { at: 0 }), i = !0;
	}
	this.state = t;
	let a = s.slice(1).filter(Boolean).map((l) => JSON.parse(l));
	for (let l of a) {
		let u = `_${l.opp}State`;
		if (typeof this[u] == "function") try {
			this[u].bind(this)(...l.args);
		} catch (b) {
			console.warn("Error applying OPFS AHP WAL entry", l, b);
		}
	}
	let c = [], h = async (l) => {
		if (l.type === "file") try {
			let u = await h$1(this, N$2).getFileHandle(l.backingFilename), b = await u.createSyncAccessHandle();
			h$1(this, f$1).set(l.backingFilename, {
				sh: b,
				fh: u
			});
		} catch (u) {
			console.error("Error opening file handle for node", l, u);
		}
		else for (let u of Object.values(l.children)) c.push(h(u));
	};
	await h(this.state.root);
	let p = [];
	for (let l of this.state.pool) p.push(new Promise(async (u) => {
		h$1(this, f$1).has(l) && console.warn("File handle already exists for pool file", l);
		let b = await h$1(this, N$2).getFileHandle(l), J = await b.createSyncAccessHandle();
		h$1(this, f$1).set(l, {
			fh: b,
			sh: J
		}), u();
	}));
	await Promise.all([...c, ...p]), await this.maintainPool(i ? this.initialPoolSize : this.maintainedPoolSize);
}, D$3 = function(e, t) {
	let s = T$4(this, r, E$1).call(this, e);
	try {
		t();
	} catch (i) {
		throw h$1(this, y$1).truncate(s), i;
	}
}, E$1 = function(e) {
	let t = JSON.stringify(e), s = new TextEncoder().encode(`
${t}`), i = h$1(this, y$1).getSize();
	return h$1(this, y$1).write(s, { at: i }), h$1(this, S$2).add(h$1(this, y$1)), i;
}, w$1 = function(e) {
	return e.split("/").filter(Boolean);
}, m$1 = function(e, t) {
	let s = T$4(this, r, w$1).call(this, e), i = t || this.state.root;
	for (let a of s) {
		if (i.type !== "directory") throw new d("ENOTDIR", "Not a directory");
		if (!Object.prototype.hasOwnProperty.call(i.children, a)) throw new d("ENOENT", "No such file or directory");
		i = i.children[a];
	}
	return i;
}, A$2 = function(e) {
	let t = h$1(this, F$2).get(e);
	if (!t) throw new d("EBADF", "Bad file descriptor");
	return t;
}, C = function() {
	let e = ++U$5(this, x$3)._;
	for (; h$1(this, F$2).has(e);) U$5(this, x$3)._++;
	return e;
}, T$2 = async function(e, t) {
	let s = T$4(this, r, w$1).call(this, e), i = t?.from || h$1(this, I);
	for (let a of s) i = await i.getDirectoryHandle(a, { create: t?.create });
	return i;
};
var d = class extends Error {
	constructor(v, e) {
		super(e), typeof v == "number" ? this.code = v : typeof v == "string" && (this.code = xe$2[v]);
	}
};
// node_modules/@electric-sql/pglite/dist/chunk-Y6PULSM7.js
var yn = {};
F$4(yn, {
	ABSTIME: () => Et,
	ACLITEM: () => Ot,
	BIT: () => Qt,
	BOOL: () => ye$1,
	BPCHAR: () => ve,
	BYTEA: () => he,
	CHAR: () => bt,
	CID: () => St,
	CIDR: () => Rt,
	CIRCLE: () => Nt,
	DATE: () => ze,
	FLOAT4: () => Qe$1,
	FLOAT8: () => _e$1,
	GTSVECTOR: () => nn,
	INET: () => kt,
	INT2: () => Ve$1,
	INT4: () => Fe$1,
	INT8: () => be$1,
	INTERVAL: () => Ft,
	JSON: () => we,
	JSONB: () => Ye$1,
	MACADDR: () => Lt,
	MACADDR8: () => Pt,
	MONEY: () => Ut,
	NUMERIC: () => vt,
	OID: () => Ge$1,
	PATH: () => xt,
	PG_DEPENDENCIES: () => Zt,
	PG_LSN: () => $t,
	PG_NDISTINCT: () => Xt,
	PG_NODE_TREE: () => Dt,
	POLYGON: () => Mt,
	REFCURSOR: () => Ht,
	REGCLASS: () => jt,
	REGCONFIG: () => rn,
	REGDICTIONARY: () => sn,
	REGNAMESPACE: () => an,
	REGOPER: () => qt,
	REGOPERATOR: () => Yt,
	REGPROC: () => gt,
	REGPROCEDURE: () => zt,
	REGROLE: () => on,
	REGTYPE: () => Wt,
	RELTIME: () => Ct,
	SMGR: () => It,
	TEXT: () => 25,
	TID: () => wt,
	TIME: () => Vt,
	TIMESTAMP: () => qe,
	TIMESTAMPTZ: () => Ae,
	TIMETZ: () => Gt,
	TINTERVAL: () => Tt,
	TSQUERY: () => tn,
	TSVECTOR: () => en,
	TXID_SNAPSHOT: () => Jt,
	UUID: () => Kt,
	VARBIT: () => _t$1,
	VARCHAR: () => He$1,
	XID: () => At,
	XML: () => Bt,
	arrayParser: () => mn,
	arraySerializer: () => We$1,
	parseType: () => se$1,
	parsers: () => un,
	serializers: () => cn,
	types: () => je$1
});
u$1();
var yt = globalThis.JSON.parse;
var ht = globalThis.JSON.stringify;
var ye$1 = 16;
var he = 17;
var bt = 18;
var be$1 = 20;
var Ve$1 = 21;
var Fe$1 = 23;
var gt = 24;
var ge$1 = 25;
var Ge$1 = 26;
var wt = 27;
var At = 28;
var St = 29;
var we = 114;
var Bt = 142;
var Dt = 194;
var It = 210;
var xt = 602;
var Mt = 604;
var Rt = 650;
var Qe$1 = 700;
var _e$1 = 701;
var Et = 702;
var Ct = 703;
var Tt = 704;
var Nt = 718;
var Pt = 774;
var Ut = 790;
var Lt = 829;
var kt = 869;
var Ot = 1033;
var ve = 1042;
var He$1 = 1043;
var ze = 1082;
var Vt = 1083;
var qe = 1114;
var Ae = 1184;
var Ft = 1186;
var Gt = 1266;
var Qt = 1560;
var _t$1 = 1562;
var vt = 1700;
var Ht = 1790;
var zt = 2202;
var qt = 2203;
var Yt = 2204;
var jt = 2205;
var Wt = 2206;
var Kt = 2950;
var Jt = 2970;
var $t = 3220;
var Xt = 3361;
var Zt = 3402;
var en = 3614;
var tn = 3615;
var nn = 3642;
var rn = 3734;
var sn = 3769;
var Ye$1 = 3802;
var an = 4089;
var on = 4096;
var je$1 = {
	string: {
		to: 25,
		from: [
			25,
			He$1,
			ve
		],
		serialize: (e) => e instanceof Date ? e.toISOString() : e.toString(),
		parse: (e) => e
	},
	number: {
		to: 0,
		from: [
			Ve$1,
			Fe$1,
			Ge$1,
			Qe$1,
			_e$1
		],
		serialize: (e) => e.toString(),
		parse: (e) => +e
	},
	bigint: {
		to: be$1,
		from: [be$1],
		serialize: (e) => e.toString(),
		parse: (e) => {
			let t = BigInt(e);
			return t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER ? t : Number(t);
		}
	},
	json: {
		to: we,
		from: [we, Ye$1],
		serialize: (e) => typeof e == "string" ? e : ht(e, (t, n) => typeof n == "bigint" ? n.toString() : n),
		parse: (e) => yt(e)
	},
	boolean: {
		to: ye$1,
		from: [ye$1],
		serialize: (e) => {
			if (typeof e == "boolean") return e ? "t" : "f";
			if (typeof e == "number") {
				if (e === 1) return "t";
				if (e === 0) return "f";
			} else if (typeof e == "string") {
				let t = e.trim().toLowerCase();
				if ([
					"true",
					"t",
					"yes",
					"y",
					"on",
					"1"
				].includes(t)) return "t";
				if ([
					"false",
					"f",
					"no",
					"n",
					"off",
					"0"
				].includes(t)) return "f";
			}
			throw new Error("Invalid input for boolean type");
		},
		parse: (e) => e === "t"
	},
	date: {
		to: Ae,
		from: [
			ze,
			qe,
			Ae
		],
		serialize: (e) => {
			if (typeof e == "string") return e;
			if (e === 1 / 0) return "infinity";
			if (e === -1 / 0) return "-infinity";
			if (typeof e == "number") return new Date(e).toISOString();
			if (e instanceof Date) return e.toISOString();
			throw new Error("Invalid input for date type");
		},
		parse: (e) => e === "infinity" ? 1 / 0 : e === "-infinity" ? -1 / 0 : new Date(e)
	},
	bytea: {
		to: he,
		from: [he],
		serialize: (e) => {
			if (!(e instanceof Uint8Array)) throw new Error("Invalid input for bytea type");
			return "\\x" + Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
		},
		parse: (e) => {
			let t = e.slice(2);
			return Uint8Array.from({ length: t.length / 2 }, (n, s) => parseInt(t.substring(s * 2, (s + 1) * 2), 16));
		}
	}
};
var Se = ln(je$1);
var un = Se.parsers;
var cn = Se.serializers;
function se$1(e, t, n) {
	if (e === null) return null;
	let s = n?.[t] ?? Se.parsers[t];
	return s ? s(e, t) : e;
}
function ln(e) {
	return Object.keys(e).reduce(({ parsers: t, serializers: n }, s) => {
		let { to: i, from: a, serialize: u, parse: m } = e[s];
		return n[i] = u, n[s] = u, t[s] = m, Array.isArray(a) ? a.forEach((p) => {
			t[p] = m, n[p] = u;
		}) : (t[a] = m, n[a] = u), {
			parsers: t,
			serializers: n
		};
	}, {
		parsers: {},
		serializers: {}
	});
}
var pn = /\\/g;
var dn = /"/g;
function fn(e) {
	return e.replace(pn, "\\\\").replace(dn, "\\\"");
}
function We$1(e, t, n) {
	if (Array.isArray(e) === !1) return e;
	if (!e.length) return "{}";
	let s = e[0], i = n === 1020 ? ";" : ",";
	return Array.isArray(s) ? `{${e.map((a) => We$1(a, t, n)).join(i)}}` : `{${e.map((a) => (a === void 0 && (a = null), a === null ? "null" : "\"" + fn(t ? t(a) : a.toString()) + "\"")).join(i)}}`;
}
var me = {
	i: 0,
	char: null,
	str: "",
	quoted: !1,
	last: 0,
	p: null
};
function mn(e, t, n) {
	return me.i = me.last = 0, Ke$1(me, e, t, n)[0];
}
function Ke$1(e, t, n, s) {
	let i = [], a = s === 1020 ? ";" : ",";
	for (; e.i < t.length; e.i++) {
		if (e.char = t[e.i], e.quoted) e.char === "\\" ? e.str += t[++e.i] : e.char === "\"" ? (i.push(n ? n(e.str) : e.str), e.str = "", e.quoted = t[e.i + 1] === "\"", e.last = e.i + 2) : e.str += e.char;
		else if (e.char === "\"") e.quoted = !0;
		else if (e.char === "{") e.last = ++e.i, i.push(Ke$1(e, t, n, s));
		else if (e.char === "}") {
			if (e.last < e.i) {
				let u = t.slice(e.last, e.i);
				u === "NULL" && !e.quoted ? i.push(null) : i.push(n ? n(u) : u);
			}
			e.quoted = !1, e.last = e.i + 1;
			break;
		} else if (e.char === a && e.p !== "}" && e.p !== "\"") {
			let u = t.slice(e.last, e.i);
			u === "NULL" && !e.quoted ? i.push(null) : i.push(n ? n(u) : u), e.last = e.i + 1;
		}
		e.p = e.char;
	}
	return e.last < e.i && i.push(n ? n(t.slice(e.last, e.i + 1)) : t.slice(e.last, e.i + 1)), i;
}
var gn = {};
F$4(gn, {
	parseDescribeStatementResults: () => bn,
	parseResults: () => hn
});
u$1();
function hn(e, t, n, s) {
	let i = [], a = {
		rows: [],
		fields: []
	}, u = 0, m = n?.parsers ? {
		...t,
		...n.parsers
	} : t;
	return e.forEach((p) => {
		switch (p.name) {
			case "rowDescription":
				a.fields = p.fields.map((I) => ({
					name: I.name,
					dataTypeID: I.dataTypeID
				}));
				break;
			case "dataRow": {
				if (!a) break;
				let E = p;
				n?.rowMode === "array" ? a.rows.push(E.fields.map((I, C) => se$1(I, a.fields[C].dataTypeID, m))) : a.rows.push(Object.fromEntries(E.fields.map((I, C) => [a.fields[C].name, se$1(I, a.fields[C].dataTypeID, m)])));
				break;
			}
			case "commandComplete": {
				let I = p.text.split(" "), C = I[0], de = parseInt(I[I.length - 1], 10);
				switch (C) {
					case "INSERT":
					case "UPDATE":
					case "DELETE":
					case "COPY":
					case "MERGE": u += de;
				}
				let fe = {
					...a,
					command: C,
					affectedRows: u
				};
				Number.isNaN(de) || (fe.rowCount = de), s && (fe.blob = s), i.push(fe), a = {
					rows: [],
					fields: []
				};
				break;
			}
		}
	}), i.length === 0 && i.push({
		affectedRows: 0,
		rows: [],
		fields: []
	}), i;
}
function bn(e) {
	let t = e.find((n) => n.name === "parameterDescription");
	return t ? t.dataTypeIDs : [];
}
u$1();
u$1();
u$1();
function U$1(e) {
	let t = e.length;
	for (let n = e.length - 1; n >= 0; n--) {
		let s = e.charCodeAt(n);
		s > 127 && s <= 2047 ? t++ : s > 2047 && s <= 65535 && (t += 2), s >= 56320 && s <= 57343 && n--;
	}
	return t;
}
var g$1;
var b;
var N$1;
var ae$1;
var L;
var A$1;
var ie$1;
var T$1;
var Je$1;
var P$1 = class {
	constructor(t = 256) {
		this.size = t;
		R$2(this, A$1);
		R$2(this, g$1);
		R$2(this, b, 5);
		R$2(this, N$1, !1);
		R$2(this, ae$1, new TextEncoder());
		R$2(this, L, 0);
		x$6(this, g$1, T$4(this, A$1, ie$1).call(this, t));
	}
	addInt32(t) {
		return T$4(this, A$1, T$1).call(this, 4), h$1(this, g$1).setInt32(h$1(this, b), t, h$1(this, N$1)), x$6(this, b, h$1(this, b) + 4), this;
	}
	addInt16(t) {
		return T$4(this, A$1, T$1).call(this, 2), h$1(this, g$1).setInt16(h$1(this, b), t, h$1(this, N$1)), x$6(this, b, h$1(this, b) + 2), this;
	}
	addUint16(t) {
		return T$4(this, A$1, T$1).call(this, 2), h$1(this, g$1).setUint16(h$1(this, b), t, h$1(this, N$1)), x$6(this, b, h$1(this, b) + 2), this;
	}
	addCString(t) {
		return t && this.addString(t), T$4(this, A$1, T$1).call(this, 1), h$1(this, g$1).setUint8(h$1(this, b), 0), U$5(this, b)._++, this;
	}
	addString(t = "") {
		let n = U$1(t);
		return T$4(this, A$1, T$1).call(this, n), h$1(this, ae$1).encodeInto(t, new Uint8Array(h$1(this, g$1).buffer, h$1(this, b))), x$6(this, b, h$1(this, b) + n), this;
	}
	add(t) {
		return T$4(this, A$1, T$1).call(this, t.byteLength), new Uint8Array(h$1(this, g$1).buffer).set(new Uint8Array(t), h$1(this, b)), x$6(this, b, h$1(this, b) + t.byteLength), this;
	}
	flush(t) {
		let n = T$4(this, A$1, Je$1).call(this, t);
		return x$6(this, b, 5), x$6(this, g$1, T$4(this, A$1, ie$1).call(this, this.size)), new Uint8Array(n);
	}
};
g$1 = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), N$1 = /* @__PURE__ */ new WeakMap(), ae$1 = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), A$1 = /* @__PURE__ */ new WeakSet(), ie$1 = function(t) {
	return new DataView(new ArrayBuffer(t));
}, T$1 = function(t) {
	if (h$1(this, g$1).byteLength - h$1(this, b) < t) {
		let s = h$1(this, g$1).buffer, i = s.byteLength + (s.byteLength >> 1) + t;
		x$6(this, g$1, T$4(this, A$1, ie$1).call(this, i)), new Uint8Array(h$1(this, g$1).buffer).set(new Uint8Array(s));
	}
}, Je$1 = function(t) {
	if (t) {
		h$1(this, g$1).setUint8(h$1(this, L), t);
		let n = h$1(this, b) - (h$1(this, L) + 1);
		h$1(this, g$1).setInt32(h$1(this, L) + 1, n, h$1(this, N$1));
	}
	return h$1(this, g$1).buffer.slice(t ? 0 : 5, h$1(this, b));
};
var f = new P$1();
var wn = (e) => {
	f.addInt16(3).addInt16(0);
	for (let s of Object.keys(e)) f.addCString(s).addCString(e[s]);
	f.addCString("client_encoding").addCString("UTF8");
	let t = f.addCString("").flush(), n = t.byteLength + 4;
	return new P$1().addInt32(n).add(t).flush();
};
var An = () => {
	let e = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
	return e.setInt32(0, 8, !1), e.setInt32(4, 80877103, !1), new Uint8Array(e.buffer);
};
var Sn = (e) => f.addCString(e).flush(112);
var Bn = (e, t) => (f.addCString(e).addInt32(U$1(t)).addString(t), f.flush(112));
var Dn = (e) => f.addString(e).flush(112);
var In = (e) => f.addCString(e).flush(81);
var xn = [];
var Mn = (e) => {
	let t = e.name ?? "";
	t.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", t, t.length), console.error("This can cause conflicts and silent errors executing queries"));
	let n = f.addCString(t).addCString(e.text).addInt16(e.types?.length ?? 0);
	return e.types?.forEach((s) => n.addInt32(s)), f.flush(80);
};
var k = new P$1();
var Rn = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let s = t ? t(e[n], n) : e[n];
		if (s === null) f.addInt16(0), k.addInt32(-1);
		else if (s instanceof ArrayBuffer || ArrayBuffer.isView(s)) {
			let i = ArrayBuffer.isView(s) ? s.buffer.slice(s.byteOffset, s.byteOffset + s.byteLength) : s;
			f.addInt16(1), k.addInt32(i.byteLength), k.add(i);
		} else f.addInt16(0), k.addInt32(U$1(s)), k.addString(s);
	}
};
var En = (e = {}) => {
	let t = e.portal ?? "", n = e.statement ?? "", s = e.binary ?? !1, i = e.values ?? xn, a = i.length;
	return f.addCString(t).addCString(n), f.addUint16(a), Rn(i, e.valueMapper), f.addUint16(a), f.add(k.flush()), f.addInt16(s ? 1 : 0), f.flush(66);
};
var Cn = new Uint8Array([
	69,
	0,
	0,
	0,
	9,
	0,
	0,
	0,
	0,
	0
]);
var Tn = (e) => {
	if (!e || !e.portal && !e.rows) return Cn;
	let t = e.portal ?? "", n = e.rows ?? 0, s = U$1(t), i = 4 + s + 1 + 4, a = new DataView(new ArrayBuffer(1 + i));
	return a.setUint8(0, 69), a.setInt32(1, i, !1), new TextEncoder().encodeInto(t, new Uint8Array(a.buffer, 5)), a.setUint8(s + 5, 0), a.setUint32(a.byteLength - 4, n, !1), new Uint8Array(a.buffer);
};
var Nn = (e, t) => {
	let n = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(16));
	return n.setInt32(0, 16, !1), n.setInt16(4, 1234, !1), n.setInt16(6, 5678, !1), n.setInt32(8, e, !1), n.setInt32(12, t, !1), new Uint8Array(n.buffer);
};
var Be$1 = (e, t) => {
	let n = new P$1();
	return n.addCString(t), n.flush(e);
};
var Pn = f.addCString("P").flush(68);
var Un = f.addCString("S").flush(68);
var Ln = (e) => e.name ? Be$1(68, `${e.type}${e.name ?? ""}`) : e.type === "P" ? Pn : Un;
var kn = (e) => {
	return Be$1(67, `${e.type}${e.name ?? ""}`);
};
var On = (e) => f.add(e).flush(100);
var Vn = (e) => Be$1(102, e);
var oe$1 = (e) => new Uint8Array([
	e,
	0,
	0,
	0,
	4
]);
var Fn = oe$1(72);
var Gn = oe$1(83);
var Qn = oe$1(88);
var _n = oe$1(99);
var $e$1 = {
	startup: wn,
	password: Sn,
	requestSsl: An,
	sendSASLInitialResponseMessage: Bn,
	sendSCRAMClientFinalMessage: Dn,
	query: In,
	parse: Mn,
	bind: En,
	execute: Tn,
	describe: Ln,
	close: kn,
	flush: () => Fn,
	sync: () => Gn,
	end: () => Qn,
	copyData: On,
	copyDone: () => _n,
	copyFail: Vn,
	cancel: Nn
};
var Ne$1 = {};
F$4(Ne$1, {
	AuthenticationCleartextPassword: () => G$1,
	AuthenticationMD5Password: () => Q$1,
	AuthenticationOk: () => F$1,
	AuthenticationSASL: () => _,
	AuthenticationSASLContinue: () => v,
	AuthenticationSASLFinal: () => H,
	BackendKeyDataMessage: () => J$1,
	CommandCompleteMessage: () => Z$1,
	CopyDataMessage: () => z$2,
	CopyResponse: () => q$1,
	DataRowMessage: () => ee$1,
	DatabaseError: () => O$1,
	Field: () => Y$1,
	NoticeMessage: () => te$1,
	NotificationResponseMessage: () => $$1,
	ParameterDescriptionMessage: () => W,
	ParameterStatusMessage: () => K,
	ReadyForQueryMessage: () => X,
	RowDescriptionMessage: () => j$1,
	bindComplete: () => Ie,
	closeComplete: () => xe$1,
	copyDone: () => Te$1,
	emptyQuery: () => Ce$1,
	noData: () => Me$1,
	parseComplete: () => De,
	portalSuspended: () => Re,
	replicationStart: () => Ee$1
});
u$1();
var De = {
	name: "parseComplete",
	length: 5
};
var Ie = {
	name: "bindComplete",
	length: 5
};
var xe$1 = {
	name: "closeComplete",
	length: 5
};
var Me$1 = {
	name: "noData",
	length: 5
};
var Re = {
	name: "portalSuspended",
	length: 5
};
var Ee$1 = {
	name: "replicationStart",
	length: 4
};
var Ce$1 = {
	name: "emptyQuery",
	length: 4
};
var Te$1 = {
	name: "copyDone",
	length: 4
};
var F$1 = class {
	constructor(t) {
		this.length = t;
		this.name = "authenticationOk";
	}
};
var G$1 = class {
	constructor(t) {
		this.length = t;
		this.name = "authenticationCleartextPassword";
	}
};
var Q$1 = class {
	constructor(t, n) {
		this.length = t;
		this.salt = n;
		this.name = "authenticationMD5Password";
	}
};
var _ = class {
	constructor(t, n) {
		this.length = t;
		this.mechanisms = n;
		this.name = "authenticationSASL";
	}
};
var v = class {
	constructor(t, n) {
		this.length = t;
		this.data = n;
		this.name = "authenticationSASLContinue";
	}
};
var H = class {
	constructor(t, n) {
		this.length = t;
		this.data = n;
		this.name = "authenticationSASLFinal";
	}
};
var O$1 = class extends Error {
	constructor(n, s, i) {
		super(n);
		this.length = s;
		this.name = i;
	}
};
var z$2 = class {
	constructor(t, n) {
		this.length = t;
		this.chunk = n;
		this.name = "copyData";
	}
};
var q$1 = class {
	constructor(t, n, s, i) {
		this.length = t;
		this.name = n;
		this.binary = s;
		this.columnTypes = new Array(i);
	}
};
var Y$1 = class {
	constructor(t, n, s, i, a, u, m) {
		this.name = t;
		this.tableID = n;
		this.columnID = s;
		this.dataTypeID = i;
		this.dataTypeSize = a;
		this.dataTypeModifier = u;
		this.format = m;
	}
};
var j$1 = class {
	constructor(t, n) {
		this.length = t;
		this.fieldCount = n;
		this.name = "rowDescription";
		this.fields = new Array(this.fieldCount);
	}
};
var W = class {
	constructor(t, n) {
		this.length = t;
		this.parameterCount = n;
		this.name = "parameterDescription";
		this.dataTypeIDs = new Array(this.parameterCount);
	}
};
var K = class {
	constructor(t, n, s) {
		this.length = t;
		this.parameterName = n;
		this.parameterValue = s;
		this.name = "parameterStatus";
	}
};
var J$1 = class {
	constructor(t, n, s) {
		this.length = t;
		this.processID = n;
		this.secretKey = s;
		this.name = "backendKeyData";
	}
};
var $$1 = class {
	constructor(t, n, s, i) {
		this.length = t;
		this.processId = n;
		this.channel = s;
		this.payload = i;
		this.name = "notification";
	}
};
var X = class {
	constructor(t, n) {
		this.length = t;
		this.status = n;
		this.name = "readyForQuery";
	}
};
var Z$1 = class {
	constructor(t, n) {
		this.length = t;
		this.text = n;
		this.name = "commandComplete";
	}
};
var ee$1 = class {
	constructor(t, n) {
		this.length = t;
		this.fields = n;
		this.name = "dataRow";
		this.fieldCount = n.length;
	}
};
var te$1 = class {
	constructor(t, n) {
		this.length = t;
		this.message = n;
		this.name = "notice";
	}
};
var zn = {};
F$4(zn, {
	Parser: () => pe$1,
	messages: () => Ne$1,
	serialize: () => $e$1
});
u$1();
u$1();
u$1();
var Pe$1 = {
	text: 0,
	binary: 1
};
u$1();
var vn = /* @__PURE__ */ new ArrayBuffer(0);
var x$2;
var w;
var ce$1;
var le$1;
var V$1;
var ue$1 = class {
	constructor(t = 0) {
		R$2(this, x$2, new DataView(vn));
		R$2(this, w);
		R$2(this, ce$1, "utf-8");
		R$2(this, le$1, new TextDecoder(h$1(this, ce$1)));
		R$2(this, V$1, !1);
		x$6(this, w, t);
	}
	setBuffer(t, n) {
		x$6(this, w, t), x$6(this, x$2, new DataView(n));
	}
	int16() {
		let t = h$1(this, x$2).getInt16(h$1(this, w), h$1(this, V$1));
		return x$6(this, w, h$1(this, w) + 2), t;
	}
	uint16() {
		let t = h$1(this, x$2).getUint16(h$1(this, w), h$1(this, V$1));
		return x$6(this, w, h$1(this, w) + 2), t;
	}
	byte() {
		let t = h$1(this, x$2).getUint8(h$1(this, w));
		return U$5(this, w)._++, t;
	}
	int32() {
		let t = h$1(this, x$2).getInt32(h$1(this, w), h$1(this, V$1));
		return x$6(this, w, h$1(this, w) + 4), t;
	}
	string(t) {
		return h$1(this, le$1).decode(this.bytes(t));
	}
	cstring() {
		let t = h$1(this, w), n = t;
		for (; h$1(this, x$2).getUint8(n++) !== 0;);
		let s = this.string(n - t - 1);
		return x$6(this, w, n), s;
	}
	bytes(t) {
		let n = h$1(this, x$2).buffer.slice(h$1(this, w), h$1(this, w) + t);
		return x$6(this, w, h$1(this, w) + t), new Uint8Array(n);
	}
};
x$2 = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), ce$1 = /* @__PURE__ */ new WeakMap(), le$1 = /* @__PURE__ */ new WeakMap(), V$1 = /* @__PURE__ */ new WeakMap();
var Ue$1 = 1;
var Xe$1 = Ue$1 + 4;
var Ze$1 = /* @__PURE__ */ new ArrayBuffer(0);
var S$1;
var B;
var D$2;
var o$1;
var c;
var Le$1;
var et;
var tt$1;
var nt$1;
var rt$1;
var st;
var it$1;
var at$1;
var ke$1;
var ot$1;
var ut;
var ct;
var lt$1;
var pt;
var dt;
var ft;
var mt;
var Oe;
var pe$1 = class {
	constructor() {
		R$2(this, c);
		R$2(this, S$1, new DataView(Ze$1));
		R$2(this, B, 0);
		R$2(this, D$2, 0);
		R$2(this, o$1, new ue$1());
	}
	parse(t, n) {
		T$4(this, c, et).call(this, ArrayBuffer.isView(t) ? t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength) : t);
		let s = h$1(this, D$2) + h$1(this, B), i = h$1(this, D$2);
		for (; i + Xe$1 <= s;) {
			let a = h$1(this, S$1).getUint8(i), u = h$1(this, S$1).getUint32(i + Ue$1, !1), m = Ue$1 + u;
			if (m + i <= s && u > 0) {
				let p;
				try {
					p = T$4(this, c, tt$1).call(this, i + Xe$1, a, u, h$1(this, S$1).buffer);
				} catch (E) {
					throw T$4(this, c, Le$1).call(this), E;
				}
				n(p), i += m;
			} else break;
		}
		i === s ? T$4(this, c, Le$1).call(this) : (x$6(this, B, s - i), x$6(this, D$2, i));
	}
};
S$1 = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), D$2 = /* @__PURE__ */ new WeakMap(), o$1 = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), Le$1 = function() {
	x$6(this, S$1, new DataView(Ze$1)), x$6(this, B, 0), x$6(this, D$2, 0);
}, et = function(t) {
	if (h$1(this, B) > 0) {
		let n = h$1(this, B) + t.byteLength;
		if (n + h$1(this, D$2) > h$1(this, S$1).byteLength) {
			let i;
			if (n <= h$1(this, S$1).byteLength && h$1(this, D$2) >= h$1(this, B)) i = h$1(this, S$1).buffer;
			else {
				let a = h$1(this, S$1).byteLength * 2;
				for (; n >= a;) a *= 2;
				i = new ArrayBuffer(a);
			}
			new Uint8Array(i).set(new Uint8Array(h$1(this, S$1).buffer, h$1(this, D$2), h$1(this, B))), x$6(this, S$1, new DataView(i)), x$6(this, D$2, 0);
		}
		new Uint8Array(h$1(this, S$1).buffer).set(new Uint8Array(t), h$1(this, D$2) + h$1(this, B)), x$6(this, B, n);
	} else x$6(this, S$1, new DataView(t)), x$6(this, D$2, 0), x$6(this, B, t.byteLength);
}, tt$1 = function(t, n, s, i) {
	switch (n) {
		case 50: return Ie;
		case 49: return De;
		case 51: return xe$1;
		case 110: return Me$1;
		case 115: return Re;
		case 99: return Te$1;
		case 87: return Ee$1;
		case 73: return Ce$1;
		case 68: return T$4(this, c, pt).call(this, t, s, i);
		case 67: return T$4(this, c, rt$1).call(this, t, s, i);
		case 90: return T$4(this, c, nt$1).call(this, t, s, i);
		case 65: return T$4(this, c, ot$1).call(this, t, s, i);
		case 82: return T$4(this, c, mt).call(this, t, s, i);
		case 83: return T$4(this, c, dt).call(this, t, s, i);
		case 75: return T$4(this, c, ft).call(this, t, s, i);
		case 69: return T$4(this, c, Oe).call(this, t, s, i, "error");
		case 78: return T$4(this, c, Oe).call(this, t, s, i, "notice");
		case 84: return T$4(this, c, ut).call(this, t, s, i);
		case 116: return T$4(this, c, lt$1).call(this, t, s, i);
		case 71: return T$4(this, c, it$1).call(this, t, s, i);
		case 72: return T$4(this, c, at$1).call(this, t, s, i);
		case 100: return T$4(this, c, st).call(this, t, s, i);
		default: return new O$1("received invalid response: " + n.toString(16), s, "error");
	}
}, nt$1 = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	return new X(n, h$1(this, o$1).string(1));
}, rt$1 = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	return new Z$1(n, h$1(this, o$1).cstring());
}, st = function(t, n, s) {
	let i = s.slice(t, t + (n - 4));
	return new z$2(n, new Uint8Array(i));
}, it$1 = function(t, n, s) {
	return T$4(this, c, ke$1).call(this, t, n, s, "copyInResponse");
}, at$1 = function(t, n, s) {
	return T$4(this, c, ke$1).call(this, t, n, s, "copyOutResponse");
}, ke$1 = function(t, n, s, i) {
	h$1(this, o$1).setBuffer(t, s);
	let a = h$1(this, o$1).byte() !== 0, u = h$1(this, o$1).int16(), m = new q$1(n, i, a, u);
	for (let p = 0; p < u; p++) m.columnTypes[p] = h$1(this, o$1).int16();
	return m;
}, ot$1 = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	return new $$1(n, h$1(this, o$1).int32(), h$1(this, o$1).cstring(), h$1(this, o$1).cstring());
}, ut = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	let i = h$1(this, o$1).int16(), a = new j$1(n, i);
	for (let u = 0; u < i; u++) a.fields[u] = T$4(this, c, ct).call(this);
	return a;
}, ct = function() {
	return new Y$1(h$1(this, o$1).cstring(), h$1(this, o$1).int32(), h$1(this, o$1).int16(), h$1(this, o$1).int32(), h$1(this, o$1).int16(), h$1(this, o$1).int32(), h$1(this, o$1).int16() === 0 ? Pe$1.text : Pe$1.binary);
}, lt$1 = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	let i = h$1(this, o$1).uint16(), a = new W(n, i);
	for (let u = 0; u < i; u++) a.dataTypeIDs[u] = h$1(this, o$1).int32();
	return a;
}, pt = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	let i = h$1(this, o$1).int16(), a = new Array(i);
	for (let u = 0; u < i; u++) {
		let m = h$1(this, o$1).int32();
		a[u] = m === -1 ? null : h$1(this, o$1).string(m);
	}
	return new ee$1(n, a);
}, dt = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	return new K(n, h$1(this, o$1).cstring(), h$1(this, o$1).cstring());
}, ft = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	return new J$1(n, h$1(this, o$1).int32(), h$1(this, o$1).int32());
}, mt = function(t, n, s) {
	h$1(this, o$1).setBuffer(t, s);
	let i = h$1(this, o$1).int32();
	switch (i) {
		case 0: return new F$1(n);
		case 3: return new G$1(n);
		case 5: return new Q$1(n, h$1(this, o$1).bytes(4));
		case 10: {
			let a = [];
			for (;;) {
				let u = h$1(this, o$1).cstring();
				if (u.length === 0) return new _(n, a);
				a.push(u);
			}
		}
		case 11: return new v(n, h$1(this, o$1).string(n - 8));
		case 12: return new H(n, h$1(this, o$1).string(n - 8));
		default: throw new Error("Unknown authenticationOk message type " + i);
	}
}, Oe = function(t, n, s, i) {
	h$1(this, o$1).setBuffer(t, s);
	let a = {}, u = h$1(this, o$1).string(1);
	for (; u !== "\0";) a[u] = h$1(this, o$1).cstring(), u = h$1(this, o$1).string(1);
	let m = a.M, p = i === "notice" ? new te$1(n, m) : new O$1(m, n, i);
	return p.severity = a.S, p.code = a.C, p.detail = a.D, p.hint = a.H, p.position = a.P, p.internalPosition = a.p, p.internalQuery = a.q, p.where = a.W, p.schema = a.s, p.table = a.t, p.column = a.c, p.dataType = a.d, p.constraint = a.n, p.file = a.F, p.line = a.L, p.routine = a.R, p;
};
// node_modules/@electric-sql/pglite/dist/chunk-VQDTEBLE.js
u$1();
// node_modules/@electric-sql/pglite/dist/chunk-KLBW4PNS.js
u$1();
var o = {
	part: "part",
	container: "container"
};
function s(t, r, ...e) {
	let a = t.length - 1, p = e.length - 1;
	if (p !== -1) {
		if (p === 0) {
			t[a] = t[a] + e[0] + r;
			return;
		}
		t[a] = t[a] + e[0], t.push(...e.slice(1, p)), t.push(e[p] + r);
	}
}
function y(t, ...r) {
	let e = [t[0]];
	e.raw = [t.raw[0]];
	let a = [];
	for (let p = 0; p < r.length; p++) {
		let n = r[p], i = p + 1;
		if (n?._templateType === o.part) {
			s(e, t[i], n.str), s(e.raw, t.raw[i], n.str);
			continue;
		}
		if (n?._templateType === o.container) {
			s(e, t[i], ...n.strings), s(e.raw, t.raw[i], ...n.strings.raw), a.push(...n.values);
			continue;
		}
		e.push(t[i]), e.raw.push(t.raw[i]), a.push(n);
	}
	return {
		_templateType: "container",
		strings: e,
		values: a
	};
}
function g(t, ...r) {
	let { strings: e, values: a } = y(t, ...r);
	return {
		query: [e[0], ...a.flatMap((p, n) => [`$${n + 1}`, e[n + 1]])].join(""),
		params: a
	};
}
// node_modules/@electric-sql/pglite/dist/chunk-UYHX356B.js
u$1();
var x$1 = class extends O$1 {
	constructor() {
		super("Transaction was rolled back instead of committed", 0, "error"), this.severity = "ERROR", this.code = "25P02";
	}
};
function P(h) {
	let s = h.e;
	return s.query = h.query, s.params = h.params, s.queryOptions = h.options, s;
}
u$1();
var T;
var p;
var t;
var u;
var R;
var m;
var F;
var D$1;
var z$1 = class {
	constructor() {
		R$2(this, t);
		this.serializers = { ...cn };
		this.parsers = { ...un };
		R$2(this, T, !1);
		R$2(this, p, !1);
	}
	async _initArrayTypes({ force: s = !1 } = {}) {
		if (h$1(this, T) && !s) return;
		x$6(this, T, !0);
		let e = await this.query(`
      SELECT b.oid, b.typarray
      FROM pg_catalog.pg_type a
      LEFT JOIN pg_catalog.pg_type b ON b.oid = a.typelem
      WHERE a.typcategory = 'A'
      GROUP BY b.oid, b.typarray
      ORDER BY b.oid
    `);
		for (let r of e.rows) this.serializers[r.typarray] = (c) => We$1(c, this.serializers[r.oid], r.typarray), this.parsers[r.typarray] = (c) => mn(c, this.parsers[r.oid], r.typarray);
	}
	async refreshArrayTypes() {
		await this._initArrayTypes({ force: !0 });
	}
	async query(s, e, r) {
		return await this._checkReady(), await this._runExclusiveTransaction(async () => await T$4(this, t, R).call(this, s, e, r));
	}
	async sql(s, ...e) {
		let { query: r, params: c } = g(s, ...e);
		return await this.query(r, c);
	}
	async exec(s, e) {
		return await this._checkReady(), await this._runExclusiveTransaction(async () => await T$4(this, t, m).call(this, s, e));
	}
	async describeQuery(s, e) {
		return await this._checkReady(), await this._runExclusiveTransaction(() => this._runExclusiveQuery(() => T$4(this, t, F).call(this, s, e)));
	}
	async transaction(s) {
		return await this._checkReady(), await this._runExclusiveTransaction(async () => {
			await T$4(this, t, m).call(this, "BEGIN"), x$6(this, p, !0);
			let e = !1, r = () => {
				if (e) throw new Error("Transaction is closed");
			}, c = {
				query: async (i, n, y) => (r(), await T$4(this, t, R).call(this, i, n, y)),
				sql: async (i, ...n) => {
					r();
					let { query: y, params: o } = g(i, ...n);
					return await T$4(this, t, R).call(this, y, o);
				},
				exec: async (i, n) => (r(), await T$4(this, t, m).call(this, i, n)),
				rollback: async () => {
					r(), await T$4(this, t, m).call(this, "ROLLBACK"), e = !0;
				},
				listen: async (i, n) => (r(), await this.listen(i, n, c)),
				get closed() {
					return e;
				}
			};
			try {
				let i = await s(c);
				if (!e) {
					e = !0;
					let [n] = await T$4(this, t, m).call(this, "COMMIT");
					if (n.command === "ROLLBACK") throw P({
						e: new x$1(),
						query: "COMMIT",
						params: void 0,
						options: void 0
					});
				}
				return x$6(this, p, !1), i;
			} catch (i) {
				throw e || (e = !0, await T$4(this, t, m).call(this, "ROLLBACK")), x$6(this, p, !1), i;
			}
		});
	}
	async runExclusive(s) {
		return await this._runExclusiveQuery(s);
	}
};
T = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), u = async function(s, e = {}) {
	return await this.execProtocolStream(s, {
		...e,
		syncToFs: !1
	});
}, R = async function(s, e = [], r) {
	return await this._runExclusiveQuery(async () => {
		T$4(this, t, D$1).call(this, "runQuery", s, e, r), await this._handleBlob(r?.blob);
		let c = [];
		try {
			let n = await T$4(this, t, u).call(this, $e$1.parse({
				text: s,
				types: r?.paramTypes
			}), r), y = bn(await T$4(this, t, u).call(this, $e$1.describe({ type: "S" }), r)), o = e.map((b, M) => {
				let Q = y[M];
				if (b == null) return null;
				let v = r?.serializers?.[Q] ?? this.serializers[Q];
				return v ? v(b) : b.toString();
			});
			c = [
				...n,
				...await T$4(this, t, u).call(this, $e$1.bind({ values: o }), r),
				...await T$4(this, t, u).call(this, $e$1.describe({ type: "P" }), r),
				...await T$4(this, t, u).call(this, $e$1.execute({}), r)
			];
		} catch (n) {
			throw n instanceof O$1 ? P({
				e: n,
				options: r,
				params: e,
				query: s
			}) : n;
		} finally {
			c.push(...await T$4(this, t, u).call(this, $e$1.sync(), r));
		}
		await this._cleanupBlob(), h$1(this, p) || await this.syncToFs();
		let i = await this._getWrittenBlob();
		return hn(c, this.parsers, r, i)[0];
	});
}, m = async function(s, e) {
	return await this._runExclusiveQuery(async () => {
		T$4(this, t, D$1).call(this, "runExec", s, e), await this._handleBlob(e?.blob);
		let r = [];
		try {
			r = await T$4(this, t, u).call(this, $e$1.query(s), e);
		} catch (i) {
			throw i instanceof O$1 ? P({
				e: i,
				options: e,
				params: void 0,
				query: s
			}) : i;
		} finally {
			r.push(...await T$4(this, t, u).call(this, $e$1.sync(), e));
		}
		this._cleanupBlob(), h$1(this, p) || await this.syncToFs();
		let c = await this._getWrittenBlob();
		return hn(r, this.parsers, e, c);
	});
}, F = async function(s, e) {
	let r = [];
	try {
		await T$4(this, t, u).call(this, $e$1.parse({
			text: s,
			types: e?.paramTypes
		}), e), r = await T$4(this, t, u).call(this, $e$1.describe({ type: "S" }), e);
	} catch (o) {
		throw o instanceof O$1 ? P({
			e: o,
			options: e,
			params: void 0,
			query: s
		}) : o;
	} finally {
		r.push(...await T$4(this, t, u).call(this, $e$1.sync(), e));
	}
	let c = r.find((o) => o.name === "parameterDescription"), i = r.find((o) => o.name === "rowDescription");
	return {
		queryParams: c?.dataTypeIDs.map((o) => ({
			dataTypeID: o,
			serializer: this.serializers[o]
		})) ?? [],
		resultFields: i?.fields.map((o) => ({
			name: o.name,
			dataTypeID: o.dataTypeID,
			parser: this.parsers[o.dataTypeID]
		})) ?? []
	};
}, D$1 = function(...s) {
	this.debug > 0 && console.log(...s);
};
// node_modules/@electric-sql/pglite/dist/chunk-XZUEO4BZ.js
u$1();
var lt = /* @__PURE__ */ new Error("timeout while waiting for mutex to become available");
var ot = /* @__PURE__ */ new Error("mutex already locked");
var tt = /* @__PURE__ */ new Error("request for lock canceled");
var rt = function(e, t, r, _) {
	function n(a) {
		return a instanceof r ? a : new r(function(i) {
			i(a);
		});
	}
	return new (r || (r = Promise))(function(a, i) {
		function l(c) {
			try {
				s(_.next(c));
			} catch (p) {
				i(p);
			}
		}
		function o(c) {
			try {
				s(_.throw(c));
			} catch (p) {
				i(p);
			}
		}
		function s(c) {
			c.done ? a(c.value) : n(c.value).then(l, o);
		}
		s((_ = _.apply(e, t || [])).next());
	});
};
var ke = class {
	constructor(t, r = tt) {
		this._value = t, this._cancelError = r, this._weightedQueues = [], this._weightedWaiters = [];
	}
	acquire(t = 1) {
		if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
		return new Promise((r, _) => {
			this._weightedQueues[t - 1] || (this._weightedQueues[t - 1] = []), this._weightedQueues[t - 1].push({
				resolve: r,
				reject: _
			}), this._dispatch();
		});
	}
	runExclusive(t, r = 1) {
		return rt(this, void 0, void 0, function* () {
			let [_, n] = yield this.acquire(r);
			try {
				return yield t(_);
			} finally {
				n();
			}
		});
	}
	waitForUnlock(t = 1) {
		if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
		return new Promise((r) => {
			this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []), this._weightedWaiters[t - 1].push(r), this._dispatch();
		});
	}
	isLocked() {
		return this._value <= 0;
	}
	getValue() {
		return this._value;
	}
	setValue(t) {
		this._value = t, this._dispatch();
	}
	release(t = 1) {
		if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
		this._value += t, this._dispatch();
	}
	cancel() {
		this._weightedQueues.forEach((t) => t.forEach((r) => r.reject(this._cancelError))), this._weightedQueues = [];
	}
	_dispatch() {
		var t;
		for (let r = this._value; r > 0; r--) {
			let _ = (t = this._weightedQueues[r - 1]) === null || t === void 0 ? void 0 : t.shift();
			if (!_) continue;
			let n = this._value, a = r;
			this._value -= r, r = this._value + 1, _.resolve([n, this._newReleaser(a)]);
		}
		this._drainUnlockWaiters();
	}
	_newReleaser(t) {
		let r = !1;
		return () => {
			r || (r = !0, this.release(t));
		};
	}
	_drainUnlockWaiters() {
		for (let t = this._value; t > 0; t--) this._weightedWaiters[t - 1] && (this._weightedWaiters[t - 1].forEach((r) => r()), this._weightedWaiters[t - 1] = []);
	}
};
var _t = function(e, t, r, _) {
	function n(a) {
		return a instanceof r ? a : new r(function(i) {
			i(a);
		});
	}
	return new (r || (r = Promise))(function(a, i) {
		function l(c) {
			try {
				s(_.next(c));
			} catch (p) {
				i(p);
			}
		}
		function o(c) {
			try {
				s(_.throw(c));
			} catch (p) {
				i(p);
			}
		}
		function s(c) {
			c.done ? a(c.value) : n(c.value).then(l, o);
		}
		s((_ = _.apply(e, t || [])).next());
	});
};
var V = class {
	constructor(t) {
		this._semaphore = new ke(1, t);
	}
	acquire() {
		return _t(this, void 0, void 0, function* () {
			let [, t] = yield this._semaphore.acquire();
			return t;
		});
	}
	runExclusive(t) {
		return this._semaphore.runExclusive(() => t());
	}
	isLocked() {
		return this._semaphore.isLocked();
	}
	waitForUnlock() {
		return this._semaphore.waitForUnlock();
	}
	release() {
		this._semaphore.isLocked() && this._semaphore.release();
	}
	cancel() {
		return this._semaphore.cancel();
	}
};
u$1();
var ye = class extends Ce$2 {
	async init(t, r) {
		return this.pg = t, { emscriptenOpts: {
			...r,
			preRun: [...r.preRun || [], (n) => {
				let a = n.IDBFS;
				n.FS.mkdirTree(`${U$4}/${this.dataDir}`), n.FS.mount(a, {}, `${U$4}/${this.dataDir}`), n.FS.symlink(`${U$4}/${this.dataDir}`, I$2);
			}]
		} };
	}
	initialSyncFs() {
		return new Promise((t, r) => {
			this.pg.Module.FS.syncfs(!0, (_) => {
				_ ? r(_) : t();
			});
		});
	}
	syncToFs(t) {
		return new Promise((r, _) => {
			this.pg.Module.FS.syncfs(!1, (n) => {
				n ? _(n) : r();
			});
		});
	}
	async closeFs() {
		let t = this.pg.Module.IDBFS.dbs[this.dataDir];
		t && t.close(), this.pg.Module.FS.quit();
	}
};
u$1();
var ee = class extends Ce$2 {
	async closeFs() {
		this.pg.Module.FS.quit();
	}
};
u$1();
u$1();
var Ne = L$3(be$2(), 1);
async function Fe(e) {
	if (p$2.IN_NODE) {
		let t = await import("fs"), r = await import("zlib"), { Writable: _ } = await import("stream"), { pipeline: n } = await import("stream/promises");
		if (!t.existsSync(e)) throw new Error(`Extension bundle not found: ${e}`);
		let a = r.createGunzip(), i = [];
		return await n(t.createReadStream(e), a, new _({ write(l, o, s) {
			i.push(l), s();
		} })), new Blob(i);
	} else {
		let t = await fetch(e.toString());
		if (!t.ok || !t.body) return null;
		if (t.headers.get("Content-Encoding") === "gzip") return t.blob();
		{
			let r = new DecompressionStream("gzip");
			return new Response(t.body.pipeThrough(r)).blob();
		}
	}
}
async function Le(e, t) {
	let r = new Array();
	for (let _ in e.pg_extensions) {
		let n;
		try {
			n = await e.pg_extensions[_];
		} catch (a) {
			console.error("Failed to fetch extension:", _, a);
			continue;
		}
		if (n) {
			let a = new Uint8Array(await n.arrayBuffer());
			r.push(...nt(e, _, a, t));
		} else console.error("Could not get binary data for extension:", _);
	}
	return Promise.all(r);
}
function nt(e, t, r, _) {
	let n = [];
	return Ne.default.untar(r).sort((i, l) => i.name > l.name ? 1 : i.name < l.name ? -1 : 0).forEach((i) => {
		if (i.name.endsWith("/")) {
			let l = `${e.WASM_PREFIX}/${i.name}`;
			e.FS.analyzePath(l).exists === !1 && e.FS.mkdirTree(l);
		} else if (!i.name.startsWith(".")) {
			let l = e.WASM_PREFIX + "/" + i.name;
			if (i.name.endsWith(".so")) {
				_(`pgfs:ext preloading ${l}`);
				let o = i.name.split("/").pop(), s = at(l), c = new Promise((p, d) => {
					let u = (...m) => {
						_("pgfs:ext OK", l, m), p();
					}, f = (...m) => {
						_("pgfs:ext FAIL", l, m), se(e.FS, l, i.data), p();
					};
					e.FS.createPreloadedFile(s, o, i.data, !0, !0, u, f, !1);
				});
				n.push(c);
			} else se(e.FS, l, i.data);
		}
	}), n;
}
function se(e, t, r, _) {
	try {
		let n = t.substring(0, t.lastIndexOf("/"));
		e.analyzePath(n).exists === !1 && e.mkdirTree(n), e.writeFile(t, r), _ && e.chmod(t, _);
	} catch (n) {
		throw console.error(`Error writing file ${t}`, n), n;
	}
}
function at(e) {
	let t = e.lastIndexOf("/");
	return t > 0 ? e.slice(0, t) : e;
}
u$1();
function Be(e) {
	let t;
	if (e?.startsWith("file://")) {
		if (e = e.slice(7), !e) throw new Error("Invalid dataDir, must be a valid path");
		t = "nodefs";
	} else e?.startsWith("idb://") ? (e = e.slice(6), t = "idbfs") : e?.startsWith("opfs-ahp://") ? (e = e.slice(11), t = "opfs-ahp") : e?.startsWith("memfs2opfs://") ? (e = e.slice(13), t = "memfs2opfs") : !e || e?.startsWith("memory://") ? t = "memoryfs" : t = "nodefs";
	return {
		dataDir: e,
		fsType: t
	};
}
async function Ge(e, t) {
	let r;
	if (e && t === "nodefs") {
		let { NodeFS: _ } = await Promise.resolve().then(() => nodefs_exports);
		r = new _(e);
	} else if (e && t === "idbfs") r = new ye(e);
	else if (e && t === "opfs-ahp") {
		let { OpfsAhpFS: _ } = await Promise.resolve().then(() => opfs_ahp_exports);
		r = new _(e);
	} else if (e && t === "memfs2opfs") {
		let { Memfs2OpfsFS: _ } = await Promise.resolve().then(() => memfs2opfs_exports);
		r = new _(e);
	} else r = new ee();
	return r;
}
u$1();
u$1();
async function it(moduleArg = {}) {
	var Module = moduleArg, ENVIRONMENT_IS_WEB = !!globalThis.window, ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope, ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
	if (ENVIRONMENT_IS_NODE) {
		let { createRequire: e } = await import("node:module");
		var require = e(import.meta.url);
	}
	Module.expectedDataFileDownloads || (Module.expectedDataFileDownloads = 0), Module.expectedDataFileDownloads++, (() => {
		if (!(typeof ENVIRONMENT_IS_PTHREAD < "u" && ENVIRONMENT_IS_PTHREAD || typeof ENVIRONMENT_IS_WASM_WORKER < "u" && ENVIRONMENT_IS_WASM_WORKER)) {
			var r = globalThis.process && globalThis.process.versions && globalThis.process.versions.node && globalThis.process.type != "renderer";
			(async function(_) {
				typeof window == "object" ? window.encodeURIComponent(window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/");
				var n = Module.locateFile ? Module.locateFile("pglite.data", "") : "pglite.data", a = _.remote_package_size, i, l = Module.getPreloadedPackage && Module.getPreloadedPackage(n, a);
				l || (i = (async function(s, c) {
					if (r) {
						var p = require("fs").readFileSync(s);
						return new Uint8Array(p).buffer;
					}
					Module.dataFileDownloads || (Module.dataFileDownloads = {});
					try {
						var d = await fetch(s);
					} catch (v) {
						throw new Error(`Network Error: ${s}`, { e: v });
					}
					if (!d.ok) throw new Error(`${d.status}: ${d.url}`);
					let u = [], f = d.headers, m = Number(f.get("Content-Length") || c), y = 0;
					Module.setStatus && Module.setStatus("Downloading data...");
					let b = d.body.getReader();
					for (;;) {
						var { done: k, value: P } = await b.read();
						if (k) break;
						u.push(P), y += P.length, Module.dataFileDownloads[s] = {
							loaded: y,
							total: m
						};
						let v = 0, H = 0;
						for (let Ae of Object.values(Module.dataFileDownloads)) v += Ae.loaded, H += Ae.total;
						Module.setStatus && Module.setStatus(`Downloading data... (${v}/${H})`);
					}
					let M = new Uint8Array(u.map((v) => v.length).reduce((v, H) => v + H, 0)), C = 0;
					for (let v of u) M.set(v, C), C += v.length;
					return M.buffer;
				})(n, a));
				async function o(s) {
					function c(p, d) {
						if (!p) throw new Error(d);
					}
					s.FS_createPath("/", "home", !0, !0), s.FS_createPath("/home", "postgres", !0, !0), s.FS_createPath("/", "pglite", !0, !0), s.FS_createPath("/pglite", "bin", !0, !0), s.FS_createPath("/pglite", "icu", !0, !0), s.FS_createPath("/pglite/icu", "icudt76l", !0, !0), s.FS_createPath("/pglite/icu/icudt76l", "coll", !0, !0), s.FS_createPath("/pglite", "lib", !0, !0), s.FS_createPath("/pglite/lib", "postgresql", !0, !0), s.FS_createPath("/pglite/lib/postgresql", "pgxs", !0, !0), s.FS_createPath("/pglite/lib/postgresql/pgxs", "config", !0, !0), s.FS_createPath("/pglite/lib/postgresql/pgxs", "src", !0, !0), s.FS_createPath("/pglite/lib/postgresql/pgxs/src", "makefiles", !0, !0), s.FS_createPath("/pglite/lib/postgresql/pgxs/src", "test", !0, !0), s.FS_createPath("/pglite/lib/postgresql/pgxs/src/test", "isolation", !0, !0), s.FS_createPath("/pglite/lib/postgresql/pgxs/src/test", "regress", !0, !0), s.FS_createPath("/pglite", "share", !0, !0), s.FS_createPath("/pglite/share", "postgresql", !0, !0), s.FS_createPath("/pglite/share/postgresql", "extension", !0, !0), s.FS_createPath("/pglite/share/postgresql", "timezone", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Africa", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "America", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone/America", "Argentina", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone/America", "Indiana", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone/America", "Kentucky", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone/America", "North_Dakota", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Antarctica", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Arctic", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Asia", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Atlantic", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Australia", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Brazil", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Canada", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Chile", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Etc", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Europe", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Indian", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Mexico", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "Pacific", !0, !0), s.FS_createPath("/pglite/share/postgresql/timezone", "US", !0, !0), s.FS_createPath("/pglite/share/postgresql", "timezonesets", !0, !0), s.FS_createPath("/pglite/share/postgresql", "tsearch_data", !0, !0), s.addRunDependency("datafile_pglite.data"), s.preloadResults || (s.preloadResults = {}), s.preloadResults["pglite.data"] = { fromCache: !1 }, l || (l = await i), await (async function(p) {
						c(p, "Loading data file failed."), c(p.constructor.name === ArrayBuffer.name, "bad input to processPackageData " + p.constructor.name);
						var d = new Uint8Array(p);
						for (var u of _.files) {
							var f = u.filename, m = d.subarray(u.start, u.end);
							s.FS_createDataFile(f, null, m, !0, !0, !0);
						}
						s.removeRunDependency("datafile_pglite.data");
					})(l);
				}
				Module.FS_createPath ? o(Module) : (Module.preRun || (Module.preRun = []), Module.preRun.push(o));
			})({
				files: [
					{
						filename: "/home/postgres/.pgpass",
						start: 0,
						end: 204
					},
					{
						filename: "/pglite/bin/initdb",
						start: 204,
						end: 223
					},
					{
						filename: "/pglite/bin/pg_dump",
						start: 223,
						end: 242
					},
					{
						filename: "/pglite/bin/postgres",
						start: 242,
						end: 261
					},
					{
						filename: "/pglite/icu/LICENSE",
						start: 261,
						end: 26748
					},
					{
						filename: "/pglite/icu/icudt76l/coll/root.res",
						start: 26748,
						end: 365756
					},
					{
						filename: "/pglite/icu/icudt76l/coll/ucadata.icu",
						start: 365756,
						end: 943260
					},
					{
						filename: "/pglite/lib/postgresql/cyrillic_and_mic.so",
						start: 943260,
						end: 947850
					},
					{
						filename: "/pglite/lib/postgresql/dict_snowball.so",
						start: 947850,
						end: 1530311
					},
					{
						filename: "/pglite/lib/postgresql/euc2004_sjis2004.so",
						start: 1530311,
						end: 1532439
					},
					{
						filename: "/pglite/lib/postgresql/euc_cn_and_mic.so",
						start: 1532439,
						end: 1533462
					},
					{
						filename: "/pglite/lib/postgresql/euc_jp_and_sjis.so",
						start: 1533462,
						end: 1540934
					},
					{
						filename: "/pglite/lib/postgresql/euc_kr_and_mic.so",
						start: 1540934,
						end: 1541977
					},
					{
						filename: "/pglite/lib/postgresql/euc_tw_and_big5.so",
						start: 1541977,
						end: 1546629
					},
					{
						filename: "/pglite/lib/postgresql/latin2_and_win1250.so",
						start: 1546629,
						end: 1548128
					},
					{
						filename: "/pglite/lib/postgresql/latin_and_mic.so",
						start: 1548128,
						end: 1549237
					},
					{
						filename: "/pglite/lib/postgresql/libpqwalreceiver.so",
						start: 1549237,
						end: 1687240
					},
					{
						filename: "/pglite/lib/postgresql/pgoutput.so",
						start: 1687240,
						end: 1701296
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/config/install-sh",
						start: 1701296,
						end: 1715293
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/config/missing",
						start: 1715293,
						end: 1716641
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/Makefile.global",
						start: 1716641,
						end: 1754746
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/Makefile.port",
						start: 1754746,
						end: 1755938
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/Makefile.shlib",
						start: 1755938,
						end: 1770766
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/makefiles/pgxs.mk",
						start: 1770766,
						end: 1786913
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/nls-global.mk",
						start: 1786913,
						end: 1793977
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/test/isolation/isolationtester.js",
						start: 1793977,
						end: 1892521
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/test/isolation/pg_isolation_regress.js",
						start: 1892521,
						end: 1994850
					},
					{
						filename: "/pglite/lib/postgresql/pgxs/src/test/regress/pg_regress.js",
						start: 1994850,
						end: 2096602
					},
					{
						filename: "/pglite/lib/postgresql/plpgsql.so",
						start: 2096602,
						end: 2252354
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_big5.so",
						start: 2252354,
						end: 2367178
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_cyrillic.so",
						start: 2367178,
						end: 2373223
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_euc2004.so",
						start: 2373223,
						end: 2578231
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_euc_cn.so",
						start: 2578231,
						end: 2653487
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_euc_jp.so",
						start: 2653487,
						end: 2804791
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_euc_kr.so",
						start: 2804791,
						end: 2907723
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_euc_tw.so",
						start: 2907723,
						end: 3107355
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_gb18030.so",
						start: 3107355,
						end: 3369748
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_gbk.so",
						start: 3369748,
						end: 3516356
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_iso8859.so",
						start: 3516356,
						end: 3539832
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_iso8859_1.so",
						start: 3539832,
						end: 3540899
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_johab.so",
						start: 3540899,
						end: 3702679
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_sjis.so",
						start: 3702679,
						end: 3784415
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_sjis2004.so",
						start: 3784415,
						end: 3911123
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_uhc.so",
						start: 3911123,
						end: 4078471
					},
					{
						filename: "/pglite/lib/postgresql/utf8_and_win.so",
						start: 4078471,
						end: 4104908
					},
					{
						filename: "/pglite/locale-a",
						start: 4104908,
						end: 4104933
					},
					{
						filename: "/pglite/password",
						start: 4104933,
						end: 4104941
					},
					{
						filename: "/pglite/pgstdin",
						start: 4104941,
						end: 4104960
					},
					{
						filename: "/pglite/pgstdout",
						start: 4104960,
						end: 4104979
					},
					{
						filename: "/pglite/share/postgresql/errcodes.txt",
						start: 4104979,
						end: 4138718
					},
					{
						filename: "/pglite/share/postgresql/extension/plpgsql--1.0.sql",
						start: 4138718,
						end: 4139376
					},
					{
						filename: "/pglite/share/postgresql/extension/plpgsql.control",
						start: 4139376,
						end: 4139569
					},
					{
						filename: "/pglite/share/postgresql/information_schema.sql",
						start: 4139569,
						end: 4253566
					},
					{
						filename: "/pglite/share/postgresql/pg_hba.conf.sample",
						start: 4253566,
						end: 4259201
					},
					{
						filename: "/pglite/share/postgresql/pg_ident.conf.sample",
						start: 4259201,
						end: 4261882
					},
					{
						filename: "/pglite/share/postgresql/pg_service.conf.sample",
						start: 4261882,
						end: 4262486
					},
					{
						filename: "/pglite/share/postgresql/postgres.bki",
						start: 4262486,
						end: 5236255
					},
					{
						filename: "/pglite/share/postgresql/postgresql.conf.sample",
						start: 5236255,
						end: 5268907
					},
					{
						filename: "/pglite/share/postgresql/psqlrc.sample",
						start: 5268907,
						end: 5269185
					},
					{
						filename: "/pglite/share/postgresql/snowball_create.sql",
						start: 5269185,
						end: 5314895
					},
					{
						filename: "/pglite/share/postgresql/sql_features.txt",
						start: 5314895,
						end: 5350656
					},
					{
						filename: "/pglite/share/postgresql/system_constraints.sql",
						start: 5350656,
						end: 5359551
					},
					{
						filename: "/pglite/share/postgresql/system_functions.sql",
						start: 5359551,
						end: 5384430
					},
					{
						filename: "/pglite/share/postgresql/system_views.sql",
						start: 5384430,
						end: 5437794
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Abidjan",
						start: 5437794,
						end: 5437942
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Accra",
						start: 5437942,
						end: 5438090
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Addis_Ababa",
						start: 5438090,
						end: 5438355
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Algiers",
						start: 5438355,
						end: 5439090
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Asmara",
						start: 5439090,
						end: 5439355
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Asmera",
						start: 5439355,
						end: 5439620
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Bamako",
						start: 5439620,
						end: 5439768
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Bangui",
						start: 5439768,
						end: 5440003
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Banjul",
						start: 5440003,
						end: 5440151
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Bissau",
						start: 5440151,
						end: 5440345
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Blantyre",
						start: 5440345,
						end: 5440494
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Brazzaville",
						start: 5440494,
						end: 5440729
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Bujumbura",
						start: 5440729,
						end: 5440878
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Cairo",
						start: 5440878,
						end: 5443277
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Casablanca",
						start: 5443277,
						end: 5444491
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Ceuta",
						start: 5444491,
						end: 5446543
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Conakry",
						start: 5446543,
						end: 5446691
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Dakar",
						start: 5446691,
						end: 5446839
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Dar_es_Salaam",
						start: 5446839,
						end: 5447104
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Djibouti",
						start: 5447104,
						end: 5447369
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Douala",
						start: 5447369,
						end: 5447604
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/El_Aaiun",
						start: 5447604,
						end: 5448684
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Freetown",
						start: 5448684,
						end: 5448832
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Gaborone",
						start: 5448832,
						end: 5448981
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Harare",
						start: 5448981,
						end: 5449130
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Johannesburg",
						start: 5449130,
						end: 5449376
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Juba",
						start: 5449376,
						end: 5450055
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Kampala",
						start: 5450055,
						end: 5450320
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Khartoum",
						start: 5450320,
						end: 5450999
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Kigali",
						start: 5450999,
						end: 5451148
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Kinshasa",
						start: 5451148,
						end: 5451383
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Lagos",
						start: 5451383,
						end: 5451618
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Libreville",
						start: 5451618,
						end: 5451853
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Lome",
						start: 5451853,
						end: 5452001
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Luanda",
						start: 5452001,
						end: 5452236
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Lubumbashi",
						start: 5452236,
						end: 5452385
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Lusaka",
						start: 5452385,
						end: 5452534
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Malabo",
						start: 5452534,
						end: 5452769
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Maputo",
						start: 5452769,
						end: 5452918
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Maseru",
						start: 5452918,
						end: 5453164
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Mbabane",
						start: 5453164,
						end: 5453410
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Mogadishu",
						start: 5453410,
						end: 5453675
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Monrovia",
						start: 5453675,
						end: 5453883
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Nairobi",
						start: 5453883,
						end: 5454148
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Ndjamena",
						start: 5454148,
						end: 5454347
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Niamey",
						start: 5454347,
						end: 5454582
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Nouakchott",
						start: 5454582,
						end: 5454730
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Ouagadougou",
						start: 5454730,
						end: 5454878
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Porto-Novo",
						start: 5454878,
						end: 5455113
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Sao_Tome",
						start: 5455113,
						end: 5455367
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Timbuktu",
						start: 5455367,
						end: 5455515
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Tripoli",
						start: 5455515,
						end: 5456140
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Tunis",
						start: 5456140,
						end: 5456829
					},
					{
						filename: "/pglite/share/postgresql/timezone/Africa/Windhoek",
						start: 5456829,
						end: 5457784
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Adak",
						start: 5457784,
						end: 5460140
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Anchorage",
						start: 5460140,
						end: 5462511
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Anguilla",
						start: 5462511,
						end: 5462757
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Antigua",
						start: 5462757,
						end: 5463003
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Araguaina",
						start: 5463003,
						end: 5463887
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Buenos_Aires",
						start: 5463887,
						end: 5464963
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Catamarca",
						start: 5464963,
						end: 5466039
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/ComodRivadavia",
						start: 5466039,
						end: 5467115
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Cordoba",
						start: 5467115,
						end: 5468191
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Jujuy",
						start: 5468191,
						end: 5469239
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/La_Rioja",
						start: 5469239,
						end: 5470329
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Mendoza",
						start: 5470329,
						end: 5471405
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Rio_Gallegos",
						start: 5471405,
						end: 5472481
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Salta",
						start: 5472481,
						end: 5473529
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/San_Juan",
						start: 5473529,
						end: 5474619
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/San_Luis",
						start: 5474619,
						end: 5475721
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Tucuman",
						start: 5475721,
						end: 5476825
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Argentina/Ushuaia",
						start: 5476825,
						end: 5477901
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Aruba",
						start: 5477901,
						end: 5478147
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Asuncion",
						start: 5478147,
						end: 5479805
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Atikokan",
						start: 5479805,
						end: 5479987
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Atka",
						start: 5479987,
						end: 5482343
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Bahia",
						start: 5482343,
						end: 5483367
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Bahia_Banderas",
						start: 5483367,
						end: 5484467
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Barbados",
						start: 5484467,
						end: 5484903
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Belem",
						start: 5484903,
						end: 5485479
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Belize",
						start: 5485479,
						end: 5487093
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Blanc-Sablon",
						start: 5487093,
						end: 5487339
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Boa_Vista",
						start: 5487339,
						end: 5487971
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Bogota",
						start: 5487971,
						end: 5488217
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Boise",
						start: 5488217,
						end: 5490627
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Buenos_Aires",
						start: 5490627,
						end: 5491703
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Cambridge_Bay",
						start: 5491703,
						end: 5493957
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Campo_Grande",
						start: 5493957,
						end: 5495401
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Cancun",
						start: 5495401,
						end: 5496265
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Caracas",
						start: 5496265,
						end: 5496529
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Catamarca",
						start: 5496529,
						end: 5497605
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Cayenne",
						start: 5497605,
						end: 5497803
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Cayman",
						start: 5497803,
						end: 5497985
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Chicago",
						start: 5497985,
						end: 5501577
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Chihuahua",
						start: 5501577,
						end: 5502679
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Ciudad_Juarez",
						start: 5502679,
						end: 5504217
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Coral_Harbour",
						start: 5504217,
						end: 5504399
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Cordoba",
						start: 5504399,
						end: 5505475
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Costa_Rica",
						start: 5505475,
						end: 5505791
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Coyhaique",
						start: 5505791,
						end: 5507931
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Creston",
						start: 5507931,
						end: 5508291
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Cuiaba",
						start: 5508291,
						end: 5509707
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Curacao",
						start: 5509707,
						end: 5509953
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Danmarkshavn",
						start: 5509953,
						end: 5510651
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Dawson",
						start: 5510651,
						end: 5512265
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Dawson_Creek",
						start: 5512265,
						end: 5513315
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Denver",
						start: 5513315,
						end: 5515775
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Detroit",
						start: 5515775,
						end: 5518005
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Dominica",
						start: 5518005,
						end: 5518251
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Edmonton",
						start: 5518251,
						end: 5520281
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Eirunepe",
						start: 5520281,
						end: 5520937
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/El_Salvador",
						start: 5520937,
						end: 5521161
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Ensenada",
						start: 5521161,
						end: 5524067
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Fort_Nelson",
						start: 5524067,
						end: 5526307
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Fort_Wayne",
						start: 5526307,
						end: 5527989
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Fortaleza",
						start: 5527989,
						end: 5528705
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Glace_Bay",
						start: 5528705,
						end: 5530897
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Godthab",
						start: 5530897,
						end: 5532800
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Goose_Bay",
						start: 5532800,
						end: 5536010
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Grand_Turk",
						start: 5536010,
						end: 5537844
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Grenada",
						start: 5537844,
						end: 5538090
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Guadeloupe",
						start: 5538090,
						end: 5538336
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Guatemala",
						start: 5538336,
						end: 5538616
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Guayaquil",
						start: 5538616,
						end: 5538862
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Guyana",
						start: 5538862,
						end: 5539124
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Halifax",
						start: 5539124,
						end: 5542548
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Havana",
						start: 5542548,
						end: 5544964
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Hermosillo",
						start: 5544964,
						end: 5545352
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Indianapolis",
						start: 5545352,
						end: 5547034
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Knox",
						start: 5547034,
						end: 5549478
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Marengo",
						start: 5549478,
						end: 5551216
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Petersburg",
						start: 5551216,
						end: 5553136
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Tell_City",
						start: 5553136,
						end: 5554836
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Vevay",
						start: 5554836,
						end: 5556266
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Vincennes",
						start: 5556266,
						end: 5557976
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indiana/Winamac",
						start: 5557976,
						end: 5559770
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Indianapolis",
						start: 5559770,
						end: 5561452
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Inuvik",
						start: 5561452,
						end: 5563526
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Iqaluit",
						start: 5563526,
						end: 5565728
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Jamaica",
						start: 5565728,
						end: 5566210
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Jujuy",
						start: 5566210,
						end: 5567258
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Juneau",
						start: 5567258,
						end: 5569611
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Kentucky/Louisville",
						start: 5569611,
						end: 5572399
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Kentucky/Monticello",
						start: 5572399,
						end: 5574767
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Knox_IN",
						start: 5574767,
						end: 5577211
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Kralendijk",
						start: 5577211,
						end: 5577457
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/La_Paz",
						start: 5577457,
						end: 5577689
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Lima",
						start: 5577689,
						end: 5578095
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Los_Angeles",
						start: 5578095,
						end: 5580947
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Louisville",
						start: 5580947,
						end: 5583735
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Lower_Princes",
						start: 5583735,
						end: 5583981
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Maceio",
						start: 5583981,
						end: 5584725
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Managua",
						start: 5584725,
						end: 5585155
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Manaus",
						start: 5585155,
						end: 5585759
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Marigot",
						start: 5585759,
						end: 5586005
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Martinique",
						start: 5586005,
						end: 5586237
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Matamoros",
						start: 5586237,
						end: 5587655
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Mazatlan",
						start: 5587655,
						end: 5588715
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Mendoza",
						start: 5588715,
						end: 5589791
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Menominee",
						start: 5589791,
						end: 5592065
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Merida",
						start: 5592065,
						end: 5593069
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Metlakatla",
						start: 5593069,
						end: 5594492
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Mexico_City",
						start: 5594492,
						end: 5595714
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Miquelon",
						start: 5595714,
						end: 5597380
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Moncton",
						start: 5597380,
						end: 5600534
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Monterrey",
						start: 5600534,
						end: 5601648
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Montevideo",
						start: 5601648,
						end: 5603158
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Montreal",
						start: 5603158,
						end: 5606652
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Montserrat",
						start: 5606652,
						end: 5606898
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Nassau",
						start: 5606898,
						end: 5610392
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/New_York",
						start: 5610392,
						end: 5613944
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Nipigon",
						start: 5613944,
						end: 5617438
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Nome",
						start: 5617438,
						end: 5619805
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Noronha",
						start: 5619805,
						end: 5620521
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/North_Dakota/Beulah",
						start: 5620521,
						end: 5622917
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/North_Dakota/Center",
						start: 5622917,
						end: 5625313
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/North_Dakota/New_Salem",
						start: 5625313,
						end: 5627709
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Nuuk",
						start: 5627709,
						end: 5629612
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Ojinaga",
						start: 5629612,
						end: 5631136
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Panama",
						start: 5631136,
						end: 5631318
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Pangnirtung",
						start: 5631318,
						end: 5633520
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Paramaribo",
						start: 5633520,
						end: 5633782
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Phoenix",
						start: 5633782,
						end: 5634142
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Port-au-Prince",
						start: 5634142,
						end: 5635576
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Port_of_Spain",
						start: 5635576,
						end: 5635822
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Porto_Acre",
						start: 5635822,
						end: 5636450
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Porto_Velho",
						start: 5636450,
						end: 5637026
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Puerto_Rico",
						start: 5637026,
						end: 5637272
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Punta_Arenas",
						start: 5637272,
						end: 5639188
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Rainy_River",
						start: 5639188,
						end: 5642056
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Rankin_Inlet",
						start: 5642056,
						end: 5644122
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Recife",
						start: 5644122,
						end: 5644838
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Regina",
						start: 5644838,
						end: 5645818
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Resolute",
						start: 5645818,
						end: 5647884
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Rio_Branco",
						start: 5647884,
						end: 5648512
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Rosario",
						start: 5648512,
						end: 5649588
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Santa_Isabel",
						start: 5649588,
						end: 5652494
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Santarem",
						start: 5652494,
						end: 5653096
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Santiago",
						start: 5653096,
						end: 5655625
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Santo_Domingo",
						start: 5655625,
						end: 5656083
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Sao_Paulo",
						start: 5656083,
						end: 5657527
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Scoresbysund",
						start: 5657527,
						end: 5659476
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Shiprock",
						start: 5659476,
						end: 5661936
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Sitka",
						start: 5661936,
						end: 5664265
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/St_Barthelemy",
						start: 5664265,
						end: 5664511
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/St_Johns",
						start: 5664511,
						end: 5668166
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/St_Kitts",
						start: 5668166,
						end: 5668412
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/St_Lucia",
						start: 5668412,
						end: 5668658
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/St_Thomas",
						start: 5668658,
						end: 5668904
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/St_Vincent",
						start: 5668904,
						end: 5669150
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Swift_Current",
						start: 5669150,
						end: 5669710
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Tegucigalpa",
						start: 5669710,
						end: 5669962
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Thule",
						start: 5669962,
						end: 5671464
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Thunder_Bay",
						start: 5671464,
						end: 5674958
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Tijuana",
						start: 5674958,
						end: 5677864
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Toronto",
						start: 5677864,
						end: 5681358
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Tortola",
						start: 5681358,
						end: 5681604
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Vancouver",
						start: 5681604,
						end: 5684194
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Virgin",
						start: 5684194,
						end: 5684440
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Whitehorse",
						start: 5684440,
						end: 5686054
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Winnipeg",
						start: 5686054,
						end: 5688922
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Yakutat",
						start: 5688922,
						end: 5691227
					},
					{
						filename: "/pglite/share/postgresql/timezone/America/Yellowknife",
						start: 5691227,
						end: 5693257
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Casey",
						start: 5693257,
						end: 5693694
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Davis",
						start: 5693694,
						end: 5693991
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/DumontDUrville",
						start: 5693991,
						end: 5694177
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Macquarie",
						start: 5694177,
						end: 5696437
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Mawson",
						start: 5696437,
						end: 5696636
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/McMurdo",
						start: 5696636,
						end: 5699073
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Palmer",
						start: 5699073,
						end: 5700491
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Rothera",
						start: 5700491,
						end: 5700655
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/South_Pole",
						start: 5700655,
						end: 5703092
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Syowa",
						start: 5703092,
						end: 5703257
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Troll",
						start: 5703257,
						end: 5704419
					},
					{
						filename: "/pglite/share/postgresql/timezone/Antarctica/Vostok",
						start: 5704419,
						end: 5704646
					},
					{
						filename: "/pglite/share/postgresql/timezone/Arctic/Longyearbyen",
						start: 5704646,
						end: 5706944
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Aden",
						start: 5706944,
						end: 5707109
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Almaty",
						start: 5707109,
						end: 5708106
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Amman",
						start: 5708106,
						end: 5709553
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Anadyr",
						start: 5709553,
						end: 5710741
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Aqtau",
						start: 5710741,
						end: 5711724
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Aqtobe",
						start: 5711724,
						end: 5712735
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ashgabat",
						start: 5712735,
						end: 5713354
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ashkhabad",
						start: 5713354,
						end: 5713973
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Atyrau",
						start: 5713973,
						end: 5714964
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Baghdad",
						start: 5714964,
						end: 5715947
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Bahrain",
						start: 5715947,
						end: 5716146
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Baku",
						start: 5716146,
						end: 5717373
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Bangkok",
						start: 5717373,
						end: 5717572
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Barnaul",
						start: 5717572,
						end: 5718793
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Beirut",
						start: 5718793,
						end: 5720947
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Bishkek",
						start: 5720947,
						end: 5721930
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Brunei",
						start: 5721930,
						end: 5722413
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Calcutta",
						start: 5722413,
						end: 5722698
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Chita",
						start: 5722698,
						end: 5723919
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Choibalsan",
						start: 5723919,
						end: 5724810
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Chongqing",
						start: 5724810,
						end: 5725371
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Chungking",
						start: 5725371,
						end: 5725932
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Colombo",
						start: 5725932,
						end: 5726304
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Dacca",
						start: 5726304,
						end: 5726641
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Damascus",
						start: 5726641,
						end: 5728528
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Dhaka",
						start: 5728528,
						end: 5728865
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Dili",
						start: 5728865,
						end: 5729136
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Dubai",
						start: 5729136,
						end: 5729301
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Dushanbe",
						start: 5729301,
						end: 5729892
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Famagusta",
						start: 5729892,
						end: 5731920
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Gaza",
						start: 5731920,
						end: 5735764
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Harbin",
						start: 5735764,
						end: 5736325
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Hebron",
						start: 5736325,
						end: 5740197
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ho_Chi_Minh",
						start: 5740197,
						end: 5740548
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Hong_Kong",
						start: 5740548,
						end: 5741781
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Hovd",
						start: 5741781,
						end: 5742672
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Irkutsk",
						start: 5742672,
						end: 5743915
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Istanbul",
						start: 5743915,
						end: 5745862
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Jakarta",
						start: 5745862,
						end: 5746245
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Jayapura",
						start: 5746245,
						end: 5746466
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Jerusalem",
						start: 5746466,
						end: 5748854
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kabul",
						start: 5748854,
						end: 5749062
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kamchatka",
						start: 5749062,
						end: 5750228
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Karachi",
						start: 5750228,
						end: 5750607
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kashgar",
						start: 5750607,
						end: 5750772
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kathmandu",
						start: 5750772,
						end: 5750984
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Katmandu",
						start: 5750984,
						end: 5751196
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Khandyga",
						start: 5751196,
						end: 5752467
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kolkata",
						start: 5752467,
						end: 5752752
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Krasnoyarsk",
						start: 5752752,
						end: 5753959
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kuala_Lumpur",
						start: 5753959,
						end: 5754374
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kuching",
						start: 5754374,
						end: 5754857
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Kuwait",
						start: 5754857,
						end: 5755022
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Macao",
						start: 5755022,
						end: 5756249
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Macau",
						start: 5756249,
						end: 5757476
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Magadan",
						start: 5757476,
						end: 5758698
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Makassar",
						start: 5758698,
						end: 5758952
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Manila",
						start: 5758952,
						end: 5759374
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Muscat",
						start: 5759374,
						end: 5759539
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Nicosia",
						start: 5759539,
						end: 5761541
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Novokuznetsk",
						start: 5761541,
						end: 5762706
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Novosibirsk",
						start: 5762706,
						end: 5763927
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Omsk",
						start: 5763927,
						end: 5765134
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Oral",
						start: 5765134,
						end: 5766139
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Phnom_Penh",
						start: 5766139,
						end: 5766338
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Pontianak",
						start: 5766338,
						end: 5766691
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Pyongyang",
						start: 5766691,
						end: 5766928
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Qatar",
						start: 5766928,
						end: 5767127
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Qostanay",
						start: 5767127,
						end: 5768166
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Qyzylorda",
						start: 5768166,
						end: 5769191
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Rangoon",
						start: 5769191,
						end: 5769459
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Riyadh",
						start: 5769459,
						end: 5769624
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Saigon",
						start: 5769624,
						end: 5769975
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Sakhalin",
						start: 5769975,
						end: 5771177
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Samarkand",
						start: 5771177,
						end: 5771754
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Seoul",
						start: 5771754,
						end: 5772371
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Shanghai",
						start: 5772371,
						end: 5772932
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Singapore",
						start: 5772932,
						end: 5773347
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Srednekolymsk",
						start: 5773347,
						end: 5774555
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Taipei",
						start: 5774555,
						end: 5775316
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Tashkent",
						start: 5775316,
						end: 5775907
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Tbilisi",
						start: 5775907,
						end: 5776942
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Tehran",
						start: 5776942,
						end: 5778204
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Tel_Aviv",
						start: 5778204,
						end: 5780592
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Thimbu",
						start: 5780592,
						end: 5780795
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Thimphu",
						start: 5780795,
						end: 5780998
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Tokyo",
						start: 5780998,
						end: 5781307
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Tomsk",
						start: 5781307,
						end: 5782528
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ujung_Pandang",
						start: 5782528,
						end: 5782782
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ulaanbaatar",
						start: 5782782,
						end: 5783673
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ulan_Bator",
						start: 5783673,
						end: 5784564
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Urumqi",
						start: 5784564,
						end: 5784729
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Ust-Nera",
						start: 5784729,
						end: 5785981
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Vientiane",
						start: 5785981,
						end: 5786180
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Vladivostok",
						start: 5786180,
						end: 5787388
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Yakutsk",
						start: 5787388,
						end: 5788595
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Yangon",
						start: 5788595,
						end: 5788863
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Yekaterinburg",
						start: 5788863,
						end: 5790106
					},
					{
						filename: "/pglite/share/postgresql/timezone/Asia/Yerevan",
						start: 5790106,
						end: 5791257
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Azores",
						start: 5791257,
						end: 5794713
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Bermuda",
						start: 5794713,
						end: 5797109
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Canary",
						start: 5797109,
						end: 5799006
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Cape_Verde",
						start: 5799006,
						end: 5799276
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Faeroe",
						start: 5799276,
						end: 5801091
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Faroe",
						start: 5801091,
						end: 5802906
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Jan_Mayen",
						start: 5802906,
						end: 5805204
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Madeira",
						start: 5805204,
						end: 5808581
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Reykjavik",
						start: 5808581,
						end: 5808729
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/South_Georgia",
						start: 5808729,
						end: 5808893
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/St_Helena",
						start: 5808893,
						end: 5809041
					},
					{
						filename: "/pglite/share/postgresql/timezone/Atlantic/Stanley",
						start: 5809041,
						end: 5810255
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/ACT",
						start: 5810255,
						end: 5812445
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Adelaide",
						start: 5812445,
						end: 5814653
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Brisbane",
						start: 5814653,
						end: 5815072
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Broken_Hill",
						start: 5815072,
						end: 5817301
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Canberra",
						start: 5817301,
						end: 5819491
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Currie",
						start: 5819491,
						end: 5821849
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Darwin",
						start: 5821849,
						end: 5822174
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Eucla",
						start: 5822174,
						end: 5822644
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Hobart",
						start: 5822644,
						end: 5825002
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/LHI",
						start: 5825002,
						end: 5826862
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Lindeman",
						start: 5826862,
						end: 5827337
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Lord_Howe",
						start: 5827337,
						end: 5829197
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Melbourne",
						start: 5829197,
						end: 5831387
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/NSW",
						start: 5831387,
						end: 5833577
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/North",
						start: 5833577,
						end: 5833902
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Perth",
						start: 5833902,
						end: 5834348
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Queensland",
						start: 5834348,
						end: 5834767
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/South",
						start: 5834767,
						end: 5836975
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Sydney",
						start: 5836975,
						end: 5839165
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Tasmania",
						start: 5839165,
						end: 5841523
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Victoria",
						start: 5841523,
						end: 5843713
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/West",
						start: 5843713,
						end: 5844159
					},
					{
						filename: "/pglite/share/postgresql/timezone/Australia/Yancowinna",
						start: 5844159,
						end: 5846388
					},
					{
						filename: "/pglite/share/postgresql/timezone/Brazil/Acre",
						start: 5846388,
						end: 5847016
					},
					{
						filename: "/pglite/share/postgresql/timezone/Brazil/DeNoronha",
						start: 5847016,
						end: 5847732
					},
					{
						filename: "/pglite/share/postgresql/timezone/Brazil/East",
						start: 5847732,
						end: 5849176
					},
					{
						filename: "/pglite/share/postgresql/timezone/Brazil/West",
						start: 5849176,
						end: 5849780
					},
					{
						filename: "/pglite/share/postgresql/timezone/CET",
						start: 5849780,
						end: 5852713
					},
					{
						filename: "/pglite/share/postgresql/timezone/CST6CDT",
						start: 5852713,
						end: 5856305
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Atlantic",
						start: 5856305,
						end: 5859729
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Central",
						start: 5859729,
						end: 5862597
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Eastern",
						start: 5862597,
						end: 5866091
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Mountain",
						start: 5866091,
						end: 5868121
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Newfoundland",
						start: 5868121,
						end: 5871776
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Pacific",
						start: 5871776,
						end: 5874366
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Saskatchewan",
						start: 5874366,
						end: 5875346
					},
					{
						filename: "/pglite/share/postgresql/timezone/Canada/Yukon",
						start: 5875346,
						end: 5876960
					},
					{
						filename: "/pglite/share/postgresql/timezone/Chile/Continental",
						start: 5876960,
						end: 5879489
					},
					{
						filename: "/pglite/share/postgresql/timezone/Chile/EasterIsland",
						start: 5879489,
						end: 5881722
					},
					{
						filename: "/pglite/share/postgresql/timezone/Cuba",
						start: 5881722,
						end: 5884138
					},
					{
						filename: "/pglite/share/postgresql/timezone/EET",
						start: 5884138,
						end: 5886400
					},
					{
						filename: "/pglite/share/postgresql/timezone/EST",
						start: 5886400,
						end: 5886582
					},
					{
						filename: "/pglite/share/postgresql/timezone/EST5EDT",
						start: 5886582,
						end: 5890134
					},
					{
						filename: "/pglite/share/postgresql/timezone/Egypt",
						start: 5890134,
						end: 5892533
					},
					{
						filename: "/pglite/share/postgresql/timezone/Eire",
						start: 5892533,
						end: 5896025
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT",
						start: 5896025,
						end: 5896139
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+0",
						start: 5896139,
						end: 5896253
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+1",
						start: 5896253,
						end: 5896369
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+10",
						start: 5896369,
						end: 5896486
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+11",
						start: 5896486,
						end: 5896603
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+12",
						start: 5896603,
						end: 5896720
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+2",
						start: 5896720,
						end: 5896836
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+3",
						start: 5896836,
						end: 5896952
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+4",
						start: 5896952,
						end: 5897068
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+5",
						start: 5897068,
						end: 5897184
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+6",
						start: 5897184,
						end: 5897300
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+7",
						start: 5897300,
						end: 5897416
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+8",
						start: 5897416,
						end: 5897532
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT+9",
						start: 5897532,
						end: 5897648
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-0",
						start: 5897648,
						end: 5897762
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-1",
						start: 5897762,
						end: 5897879
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-10",
						start: 5897879,
						end: 5897997
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-11",
						start: 5897997,
						end: 5898115
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-12",
						start: 5898115,
						end: 5898233
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-13",
						start: 5898233,
						end: 5898351
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-14",
						start: 5898351,
						end: 5898469
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-2",
						start: 5898469,
						end: 5898586
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-3",
						start: 5898586,
						end: 5898703
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-4",
						start: 5898703,
						end: 5898820
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-5",
						start: 5898820,
						end: 5898937
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-6",
						start: 5898937,
						end: 5899054
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-7",
						start: 5899054,
						end: 5899171
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-8",
						start: 5899171,
						end: 5899288
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT-9",
						start: 5899288,
						end: 5899405
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/GMT0",
						start: 5899405,
						end: 5899519
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/Greenwich",
						start: 5899519,
						end: 5899633
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/UCT",
						start: 5899633,
						end: 5899747
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/UTC",
						start: 5899747,
						end: 5899861
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/Universal",
						start: 5899861,
						end: 5899975
					},
					{
						filename: "/pglite/share/postgresql/timezone/Etc/Zulu",
						start: 5899975,
						end: 5900089
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Amsterdam",
						start: 5900089,
						end: 5903022
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Andorra",
						start: 5903022,
						end: 5904764
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Astrakhan",
						start: 5904764,
						end: 5905929
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Athens",
						start: 5905929,
						end: 5908191
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Belfast",
						start: 5908191,
						end: 5911855
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Belgrade",
						start: 5911855,
						end: 5913775
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Berlin",
						start: 5913775,
						end: 5916073
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Bratislava",
						start: 5916073,
						end: 5918374
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Brussels",
						start: 5918374,
						end: 5921307
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Bucharest",
						start: 5921307,
						end: 5923491
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Budapest",
						start: 5923491,
						end: 5925859
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Busingen",
						start: 5925859,
						end: 5927768
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Chisinau",
						start: 5927768,
						end: 5930192
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Copenhagen",
						start: 5930192,
						end: 5932490
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Dublin",
						start: 5932490,
						end: 5935982
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Gibraltar",
						start: 5935982,
						end: 5939050
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Guernsey",
						start: 5939050,
						end: 5942714
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Helsinki",
						start: 5942714,
						end: 5944614
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Isle_of_Man",
						start: 5944614,
						end: 5948278
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Istanbul",
						start: 5948278,
						end: 5950225
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Jersey",
						start: 5950225,
						end: 5953889
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Kaliningrad",
						start: 5953889,
						end: 5955382
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Kiev",
						start: 5955382,
						end: 5957502
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Kirov",
						start: 5957502,
						end: 5958687
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Kyiv",
						start: 5958687,
						end: 5960807
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Lisbon",
						start: 5960807,
						end: 5964334
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Ljubljana",
						start: 5964334,
						end: 5966254
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/London",
						start: 5966254,
						end: 5969918
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Luxembourg",
						start: 5969918,
						end: 5972851
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Madrid",
						start: 5972851,
						end: 5975465
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Malta",
						start: 5975465,
						end: 5978085
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Mariehamn",
						start: 5978085,
						end: 5979985
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Minsk",
						start: 5979985,
						end: 5981306
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Monaco",
						start: 5981306,
						end: 5984268
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Moscow",
						start: 5984268,
						end: 5985803
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Nicosia",
						start: 5985803,
						end: 5987805
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Oslo",
						start: 5987805,
						end: 5990103
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Paris",
						start: 5990103,
						end: 5993065
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Podgorica",
						start: 5993065,
						end: 5994985
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Prague",
						start: 5994985,
						end: 5997286
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Riga",
						start: 5997286,
						end: 5999484
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Rome",
						start: 5999484,
						end: 6002125
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Samara",
						start: 6002125,
						end: 6003340
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/San_Marino",
						start: 6003340,
						end: 6005981
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Sarajevo",
						start: 6005981,
						end: 6007901
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Saratov",
						start: 6007901,
						end: 6009084
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Simferopol",
						start: 6009084,
						end: 6010553
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Skopje",
						start: 6010553,
						end: 6012473
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Sofia",
						start: 6012473,
						end: 6014550
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Stockholm",
						start: 6014550,
						end: 6016848
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Tallinn",
						start: 6016848,
						end: 6018996
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Tirane",
						start: 6018996,
						end: 6021080
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Tiraspol",
						start: 6021080,
						end: 6023504
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Ulyanovsk",
						start: 6023504,
						end: 6024771
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Uzhgorod",
						start: 6024771,
						end: 6026891
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Vaduz",
						start: 6026891,
						end: 6028800
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Vatican",
						start: 6028800,
						end: 6031441
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Vienna",
						start: 6031441,
						end: 6033641
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Vilnius",
						start: 6033641,
						end: 6035803
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Volgograd",
						start: 6035803,
						end: 6036996
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Warsaw",
						start: 6036996,
						end: 6039650
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Zagreb",
						start: 6039650,
						end: 6041570
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Zaporozhye",
						start: 6041570,
						end: 6043690
					},
					{
						filename: "/pglite/share/postgresql/timezone/Europe/Zurich",
						start: 6043690,
						end: 6045599
					},
					{
						filename: "/pglite/share/postgresql/timezone/Factory",
						start: 6045599,
						end: 6045715
					},
					{
						filename: "/pglite/share/postgresql/timezone/GB",
						start: 6045715,
						end: 6049379
					},
					{
						filename: "/pglite/share/postgresql/timezone/GB-Eire",
						start: 6049379,
						end: 6053043
					},
					{
						filename: "/pglite/share/postgresql/timezone/GMT",
						start: 6053043,
						end: 6053157
					},
					{
						filename: "/pglite/share/postgresql/timezone/GMT+0",
						start: 6053157,
						end: 6053271
					},
					{
						filename: "/pglite/share/postgresql/timezone/GMT-0",
						start: 6053271,
						end: 6053385
					},
					{
						filename: "/pglite/share/postgresql/timezone/GMT0",
						start: 6053385,
						end: 6053499
					},
					{
						filename: "/pglite/share/postgresql/timezone/Greenwich",
						start: 6053499,
						end: 6053613
					},
					{
						filename: "/pglite/share/postgresql/timezone/HST",
						start: 6053613,
						end: 6053942
					},
					{
						filename: "/pglite/share/postgresql/timezone/Hongkong",
						start: 6053942,
						end: 6055175
					},
					{
						filename: "/pglite/share/postgresql/timezone/Iceland",
						start: 6055175,
						end: 6055323
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Antananarivo",
						start: 6055323,
						end: 6055588
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Chagos",
						start: 6055588,
						end: 6055787
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Christmas",
						start: 6055787,
						end: 6055986
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Cocos",
						start: 6055986,
						end: 6056254
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Comoro",
						start: 6056254,
						end: 6056519
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Kerguelen",
						start: 6056519,
						end: 6056718
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Mahe",
						start: 6056718,
						end: 6056883
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Maldives",
						start: 6056883,
						end: 6057082
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Mauritius",
						start: 6057082,
						end: 6057323
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Mayotte",
						start: 6057323,
						end: 6057588
					},
					{
						filename: "/pglite/share/postgresql/timezone/Indian/Reunion",
						start: 6057588,
						end: 6057753
					},
					{
						filename: "/pglite/share/postgresql/timezone/Iran",
						start: 6057753,
						end: 6059015
					},
					{
						filename: "/pglite/share/postgresql/timezone/Israel",
						start: 6059015,
						end: 6061403
					},
					{
						filename: "/pglite/share/postgresql/timezone/Jamaica",
						start: 6061403,
						end: 6061885
					},
					{
						filename: "/pglite/share/postgresql/timezone/Japan",
						start: 6061885,
						end: 6062194
					},
					{
						filename: "/pglite/share/postgresql/timezone/Kwajalein",
						start: 6062194,
						end: 6062510
					},
					{
						filename: "/pglite/share/postgresql/timezone/Libya",
						start: 6062510,
						end: 6063135
					},
					{
						filename: "/pglite/share/postgresql/timezone/MET",
						start: 6063135,
						end: 6066068
					},
					{
						filename: "/pglite/share/postgresql/timezone/MST",
						start: 6066068,
						end: 6066428
					},
					{
						filename: "/pglite/share/postgresql/timezone/MST7MDT",
						start: 6066428,
						end: 6068888
					},
					{
						filename: "/pglite/share/postgresql/timezone/Mexico/BajaNorte",
						start: 6068888,
						end: 6071794
					},
					{
						filename: "/pglite/share/postgresql/timezone/Mexico/BajaSur",
						start: 6071794,
						end: 6072854
					},
					{
						filename: "/pglite/share/postgresql/timezone/Mexico/General",
						start: 6072854,
						end: 6074076
					},
					{
						filename: "/pglite/share/postgresql/timezone/NZ",
						start: 6074076,
						end: 6076513
					},
					{
						filename: "/pglite/share/postgresql/timezone/NZ-CHAT",
						start: 6076513,
						end: 6078581
					},
					{
						filename: "/pglite/share/postgresql/timezone/Navajo",
						start: 6078581,
						end: 6081041
					},
					{
						filename: "/pglite/share/postgresql/timezone/PRC",
						start: 6081041,
						end: 6081602
					},
					{
						filename: "/pglite/share/postgresql/timezone/PST8PDT",
						start: 6081602,
						end: 6084454
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Apia",
						start: 6084454,
						end: 6085066
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Auckland",
						start: 6085066,
						end: 6087503
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Bougainville",
						start: 6087503,
						end: 6087771
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Chatham",
						start: 6087771,
						end: 6089839
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Chuuk",
						start: 6089839,
						end: 6090025
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Easter",
						start: 6090025,
						end: 6092258
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Efate",
						start: 6092258,
						end: 6092796
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Enderbury",
						start: 6092796,
						end: 6093030
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Fakaofo",
						start: 6093030,
						end: 6093230
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Fiji",
						start: 6093230,
						end: 6093808
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Funafuti",
						start: 6093808,
						end: 6093974
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Galapagos",
						start: 6093974,
						end: 6094212
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Gambier",
						start: 6094212,
						end: 6094376
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Guadalcanal",
						start: 6094376,
						end: 6094542
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Guam",
						start: 6094542,
						end: 6095036
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Honolulu",
						start: 6095036,
						end: 6095365
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Johnston",
						start: 6095365,
						end: 6095694
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Kanton",
						start: 6095694,
						end: 6095928
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Kiritimati",
						start: 6095928,
						end: 6096166
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Kosrae",
						start: 6096166,
						end: 6096517
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Kwajalein",
						start: 6096517,
						end: 6096833
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Majuro",
						start: 6096833,
						end: 6096999
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Marquesas",
						start: 6096999,
						end: 6097172
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Midway",
						start: 6097172,
						end: 6097347
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Nauru",
						start: 6097347,
						end: 6097599
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Niue",
						start: 6097599,
						end: 6097802
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Norfolk",
						start: 6097802,
						end: 6098682
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Noumea",
						start: 6098682,
						end: 6098986
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Pago_Pago",
						start: 6098986,
						end: 6099161
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Palau",
						start: 6099161,
						end: 6099341
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Pitcairn",
						start: 6099341,
						end: 6099543
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Pohnpei",
						start: 6099543,
						end: 6099709
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Ponape",
						start: 6099709,
						end: 6099875
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Port_Moresby",
						start: 6099875,
						end: 6100061
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Rarotonga",
						start: 6100061,
						end: 6100664
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Saipan",
						start: 6100664,
						end: 6101158
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Samoa",
						start: 6101158,
						end: 6101333
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Tahiti",
						start: 6101333,
						end: 6101498
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Tarawa",
						start: 6101498,
						end: 6101664
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Tongatapu",
						start: 6101664,
						end: 6102036
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Truk",
						start: 6102036,
						end: 6102222
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Wake",
						start: 6102222,
						end: 6102388
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Wallis",
						start: 6102388,
						end: 6102554
					},
					{
						filename: "/pglite/share/postgresql/timezone/Pacific/Yap",
						start: 6102554,
						end: 6102740
					},
					{
						filename: "/pglite/share/postgresql/timezone/Poland",
						start: 6102740,
						end: 6105394
					},
					{
						filename: "/pglite/share/postgresql/timezone/Portugal",
						start: 6105394,
						end: 6108921
					},
					{
						filename: "/pglite/share/postgresql/timezone/ROC",
						start: 6108921,
						end: 6109682
					},
					{
						filename: "/pglite/share/postgresql/timezone/ROK",
						start: 6109682,
						end: 6110299
					},
					{
						filename: "/pglite/share/postgresql/timezone/Singapore",
						start: 6110299,
						end: 6110714
					},
					{
						filename: "/pglite/share/postgresql/timezone/Turkey",
						start: 6110714,
						end: 6112661
					},
					{
						filename: "/pglite/share/postgresql/timezone/UCT",
						start: 6112661,
						end: 6112775
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Alaska",
						start: 6112775,
						end: 6115146
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Aleutian",
						start: 6115146,
						end: 6117502
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Arizona",
						start: 6117502,
						end: 6117862
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Central",
						start: 6117862,
						end: 6121454
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/East-Indiana",
						start: 6121454,
						end: 6123136
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Eastern",
						start: 6123136,
						end: 6126688
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Hawaii",
						start: 6126688,
						end: 6127017
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Indiana-Starke",
						start: 6127017,
						end: 6129461
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Michigan",
						start: 6129461,
						end: 6131691
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Mountain",
						start: 6131691,
						end: 6134151
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Pacific",
						start: 6134151,
						end: 6137003
					},
					{
						filename: "/pglite/share/postgresql/timezone/US/Samoa",
						start: 6137003,
						end: 6137178
					},
					{
						filename: "/pglite/share/postgresql/timezone/UTC",
						start: 6137178,
						end: 6137292
					},
					{
						filename: "/pglite/share/postgresql/timezone/Universal",
						start: 6137292,
						end: 6137406
					},
					{
						filename: "/pglite/share/postgresql/timezone/W-SU",
						start: 6137406,
						end: 6138941
					},
					{
						filename: "/pglite/share/postgresql/timezone/WET",
						start: 6138941,
						end: 6142468
					},
					{
						filename: "/pglite/share/postgresql/timezone/Zulu",
						start: 6142468,
						end: 6142582
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Africa.txt",
						start: 6142582,
						end: 6149555
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/America.txt",
						start: 6149555,
						end: 6160562
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Antarctica.txt",
						start: 6160562,
						end: 6161696
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Asia.txt",
						start: 6161696,
						end: 6170007
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Atlantic.txt",
						start: 6170007,
						end: 6173540
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Australia",
						start: 6173540,
						end: 6174675
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Australia.txt",
						start: 6174675,
						end: 6178059
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Default",
						start: 6178059,
						end: 6205273
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Etc.txt",
						start: 6205273,
						end: 6206523
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Europe.txt",
						start: 6206523,
						end: 6215269
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/India",
						start: 6215269,
						end: 6215862
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Indian.txt",
						start: 6215862,
						end: 6217123
					},
					{
						filename: "/pglite/share/postgresql/timezonesets/Pacific.txt",
						start: 6217123,
						end: 6220891
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/danish.stop",
						start: 6220891,
						end: 6221315
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/dutch.stop",
						start: 6221315,
						end: 6221768
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/english.stop",
						start: 6221768,
						end: 6222390
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/finnish.stop",
						start: 6222390,
						end: 6223969
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/french.stop",
						start: 6223969,
						end: 6224774
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/german.stop",
						start: 6224774,
						end: 6226123
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/hungarian.stop",
						start: 6226123,
						end: 6227350
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample.affix",
						start: 6227350,
						end: 6227593
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_long.affix",
						start: 6227593,
						end: 6228226
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_long.dict",
						start: 6228226,
						end: 6228324
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_num.affix",
						start: 6228324,
						end: 6228786
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_num.dict",
						start: 6228786,
						end: 6228915
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/ispell_sample.affix",
						start: 6228915,
						end: 6229380
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/ispell_sample.dict",
						start: 6229380,
						end: 6229461
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/italian.stop",
						start: 6229461,
						end: 6231115
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/nepali.stop",
						start: 6231115,
						end: 6235376
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/norwegian.stop",
						start: 6235376,
						end: 6236227
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/portuguese.stop",
						start: 6236227,
						end: 6237494
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/russian.stop",
						start: 6237494,
						end: 6238729
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/spanish.stop",
						start: 6238729,
						end: 6240907
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/swedish.stop",
						start: 6240907,
						end: 6241466
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/synonym_sample.syn",
						start: 6241466,
						end: 6241539
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/thesaurus_sample.ths",
						start: 6241539,
						end: 6242012
					},
					{
						filename: "/pglite/share/postgresql/tsearch_data/turkish.stop",
						start: 6242012,
						end: 6242272
					}
				],
				remote_package_size: 6242272
			});
		}
	})();
	var programArgs = [], thisProgram = "./this.program", quit_ = (e, t) => {
		throw t;
	}, _scriptName = import.meta.url, scriptDirectory = "";
	function locateFile(e) {
		return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
	}
	var readAsync, readBinary;
	if (ENVIRONMENT_IS_NODE) {
		var fs = require("node:fs");
		_scriptName.startsWith("file:") && (scriptDirectory = require("node:path").dirname(require("node:url").fileURLToPath(_scriptName)) + "/"), readBinary = (e) => {
			e = isFileURI(e) ? new URL(e) : e;
			return fs.readFileSync(e);
		}, readAsync = async (e, t = !0) => {
			e = isFileURI(e) ? new URL(e) : e;
			return fs.readFileSync(e, t ? void 0 : "utf8");
		}, process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), programArgs = process.argv.slice(2), quit_ = (e, t) => {
			throw process.exitCode = e, t;
		};
	} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
		try {
			scriptDirectory = new URL(".", _scriptName).href;
		} catch {}
		ENVIRONMENT_IS_WORKER && (readBinary = (e) => {
			var t = new XMLHttpRequest();
			return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
		}), readAsync = async (e) => {
			var t = await fetch(e, { credentials: "same-origin" });
			if (t.ok) return t.arrayBuffer();
			throw new Error(t.status + " : " + t.url);
		};
	}
	var out = console.log.bind(console), err = console.error.bind(console), dynamicLibraries = [], wasmBinary, ABORT = !1, EXITSTATUS, isFileURI = (e) => e.startsWith("file://");
	class EmscriptenEH {}
	class EmscriptenSjLj extends EmscriptenEH {}
	var runtimeInitialized = !1, runtimeExited = !1;
	function getMemoryBuffer() {
		return wasmMemory.buffer;
	}
	function updateMemoryViews() {
		if (!HEAP8?.buffer?.resizable) {
			var e = getMemoryBuffer();
			HEAP8 = new Int8Array(e), HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), HEAPU16 = new Uint16Array(e), HEAP32 = new Int32Array(e), HEAPU32 = new Uint32Array(e), HEAPF32 = new Float32Array(e), HEAPF64 = new Float64Array(e), HEAP64 = new BigInt64Array(e), HEAPU64 = new BigUint64Array(e);
		}
	}
	function initMemory() {
		if (Module.wasmMemory) wasmMemory = Module.wasmMemory;
		else {
			var e = Module.INITIAL_MEMORY || 134217728;
			wasmMemory = new WebAssembly.Memory({
				initial: e / 65536,
				maximum: 32768
			});
		}
		updateMemoryViews();
	}
	var __RELOC_FUNCS__ = [];
	function preRun() {
		var e = Module.preRun;
		e && (typeof e == "function" && (e = [e]), onPreRuns.push(...e)), callRuntimeCallbacks(onPreRuns);
	}
	function initRuntime() {
		runtimeInitialized = !0, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), TTY.init(), SOCKFS.root = FS.mount(SOCKFS, {}, null), PIPEFS.root = FS.mount(PIPEFS, {}, null), wasmExports.__wasm_call_ctors(), callRuntimeCallbacks(onPostCtors), FS.ignorePermissions = !1;
	}
	function exitRuntime() {
		___funcs_on_exit(), FS.quit(), TTY.shutdown(), IDBFS.quit(), clearTimers(), runtimeExited = !0;
	}
	function postRun() {
		var e = Module.postRun;
		e && (typeof e == "function" && (e = [e]), onPostRuns.push(...e)), callRuntimeCallbacks(onPostRuns);
	}
	function abort(e) {
		throw Module.onAbort?.(e), e = `Aborted(${e})`, err(e), ABORT = !0, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e);
	}
	var wasmBinaryFile;
	function findWasmBinary() {
		return Module.locateFile ? locateFile("pglite.wasm") : new URL("pglite.wasm", import.meta.url).href;
	}
	function getBinarySync(e) {
		if (readBinary) return readBinary(e);
		throw "both async and sync fetching of the wasm failed";
	}
	async function getWasmBinary(e) {
		if (!wasmBinary) try {
			var t = await readAsync(e);
			return new Uint8Array(t);
		} catch {}
		return getBinarySync(e);
	}
	async function instantiateArrayBuffer(e, t) {
		try {
			var r = await getWasmBinary(e);
			return await WebAssembly.instantiate(r, t);
		} catch (n) {
			err(`failed to asynchronously prepare wasm: ${n}`), abort(n);
		}
	}
	async function instantiateAsync(e, t, r) {
		if (!e && !ENVIRONMENT_IS_NODE) try {
			var _ = fetch(t, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(_, r);
		} catch (a) {
			err(`wasm streaming compile failed: ${a}`), err("falling back to ArrayBuffer instantiation");
		}
		return instantiateArrayBuffer(t, r);
	}
	function getWasmImports() {
		var e = new Proxy(/* @__PURE__ */ new Set([]), GOTHandler);
		return {
			env: wasmImports,
			wasi_snapshot_preview1: wasmImports,
			"GOT.mem": e,
			"GOT.func": e
		};
	}
	async function createWasm() {
		async function e(a, i) {
			wasmExports = a.exports;
			var l = wasmExports;
			mergeLibSymbols(wasmExports, "main");
			var o = getDylinkMetadata(i);
			return o.neededDynlibs && (dynamicLibraries = o.neededDynlibs.concat(dynamicLibraries)), assignWasmExports(wasmExports), updateGOT(l), LDSO.init(), await loadDylibs(), wasmExports;
		}
		var t = getWasmImports(), r = Module.instantiateWasm;
		if (r) return new Promise((a) => {
			r(t, (i, l) => a(e(i, l)));
		});
		wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
		return await (function(a) {
			return e(a.instance, a.module);
		})(await instantiateAsync(wasmBinary, wasmBinaryFile, t));
	}
	class ExitStatus {
		constructor(t) {
			P$4(this, "name", "ExitStatus");
			this.message = `Program terminated with exit(${t})`, this.status = t;
		}
	}
	var GOT = {}, GOTHandler = { get(e, t) {
		var r = GOT[t];
		return r || (r = GOT[t] = new WebAssembly.Global({
			value: "i32",
			mutable: !0
		}, -1)), e.has(t) || (r.required = !0), r;
	} }, HEAP16, HEAP32, HEAP64, HEAP8, HEAPF32, HEAPF64, HEAPU16, HEAPU32, HEAPU64, HEAPU8, callRuntimeCallbacks = (e) => {
		for (; e.length > 0;) e.shift()(Module);
	}, onPostRuns = [], onPreRuns = [], UTF8Decoder = globalThis.TextDecoder && new TextDecoder(), findStringEnd = (e, t, r, _) => {
		var n = t + r;
		if (_) return n;
		for (; e[t] && !(t >= n);) ++t;
		return t;
	}, UTF8ArrayToString = (e, t = 0, r, _) => {
		var n = findStringEnd(e, t, r, _);
		if (n - t > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(t, n));
		for (var a = ""; t < n;) {
			var i = e[t++];
			if (!(i & 128)) {
				a += String.fromCharCode(i);
				continue;
			}
			var l = e[t++] & 63;
			if ((i & 224) == 192) {
				a += String.fromCharCode((i & 31) << 6 | l);
				continue;
			}
			var o = e[t++] & 63;
			if ((i & 240) == 224 ? i = (i & 15) << 12 | l << 6 | o : i = (i & 7) << 18 | l << 12 | o << 6 | e[t++] & 63, i < 65536) a += String.fromCharCode(i);
			else {
				var s = i - 65536;
				a += String.fromCharCode(55296 | s >> 10, 56320 | s & 1023);
			}
		}
		return a;
	}, getDylinkMetadata = (e) => {
		var t = 0, r = 0;
		function _() {
			return e[t++];
		}
		function n() {
			for (var M = 0, C = 1;;) {
				var v = e[t++];
				if (M += (v & 127) * C, C *= 128, !(v & 128)) break;
			}
			return M;
		}
		function a() {
			var M = n();
			return t += M, UTF8ArrayToString(e, t - M, M);
		}
		function i() {
			for (var M = n(), C = []; M--;) C.push(a());
			return C;
		}
		function l(M, C) {
			if (M) throw new Error(C);
		}
		if (e instanceof WebAssembly.Module) {
			var o = WebAssembly.Module.customSections(e, "dylink.0");
			l(!o.length, "need dylink section"), e = new Uint8Array(o[0]), r = e.length;
		} else {
			l(!(new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer)[0] == 1836278016), "need to see wasm magic number"), l(e[8], "need the dylink section to be first"), t = 9;
			var p = n();
			r = t + p;
			l(a() !== "dylink.0");
		}
		for (var u = {
			neededDynlibs: [],
			tlsExports: /* @__PURE__ */ new Set(),
			weakImports: /* @__PURE__ */ new Set(),
			runtimePaths: []
		}; t < r;) {
			var f = _(), m = n();
			if (f === 1) u.memorySize = n(), u.memoryAlign = n(), u.tableSize = n(), u.tableAlign = n();
			else if (f === 2) u.neededDynlibs = i();
			else if (f === 3) for (var y = n(); y--;) {
				var b = a(), k = n();
				k & 256 && u.tlsExports.add(b);
			}
			else if (f === 4) for (y = n(); y--;) a(), b = a(), k = n(), (k & 3) == 1 && u.weakImports.add(b);
			else if (f === 5) u.runtimePaths = i();
			else if (f === 6) {
				var P = a();
				l(P !== "wasm32", `incorrect architecture (${P} vs wasm32)`);
			} else t += m;
		}
		return u;
	};
	function getValue(e, t = "i8") {
		switch (t.endsWith("*") && (t = "*"), t) {
			case "i1": return HEAP8[e];
			case "i8": return HEAP8[e];
			case "i16": return HEAP16[e >> 1];
			case "i32": return HEAP32[e >> 2];
			case "i64": return HEAP64[e >> 3];
			case "float": return HEAPF32[e >> 2];
			case "double": return HEAPF64[e >> 3];
			case "*": return HEAPU32[e >> 2];
			default: abort(`invalid type for getValue: ${t}`);
		}
	}
	var newDSO = (e, t, r) => {
		var _ = {
			refcount: 1 / 0,
			name: e,
			exports: r,
			global: !0
		};
		return LDSO.loadedLibsByName[e] = _, t != null && (LDSO.loadedLibsByHandle[t] = _), _;
	}, LDSO = {
		loadedLibsByName: {},
		loadedLibsByHandle: {},
		init() {
			newDSO("__main__", 0, wasmImports);
		}
	}, alignMemory = (e, t) => Math.ceil(e / t) * t, getMemory = (e) => {
		if (runtimeInitialized) return _calloc(e, 1);
		var t = ___heap_base, r = t + alignMemory(e, 16);
		___heap_base = r;
		var _ = _emscripten_get_sbrk_ptr();
		return HEAPU32[_ >> 2] = r, t;
	}, isInternalSym = (e) => [
		"memory",
		"__memory_base",
		"__table_base",
		"__stack_pointer",
		"__indirect_function_table",
		"__cpp_exception",
		"__c_longjmp",
		"__wasm_apply_data_relocs",
		"__dso_handle",
		"__tls_size",
		"__tls_align",
		"__set_stack_limits",
		"_emscripten_tls_init",
		"__wasm_init_tls",
		"__wasm_call_ctors",
		"__start_em_asm",
		"__stop_em_asm",
		"__start_em_js",
		"__stop_em_js"
	].includes(e) || e.startsWith("__em_js__"), wasmTableMirror = [], getWasmTableEntry = (e) => {
		var t = wasmTableMirror[e];
		return t || (wasmTableMirror[e] = t = wasmTable.get(e)), t;
	}, updateTableMap = (e, t) => {
		if (functionsInTableMap) for (var r = e; r < e + t; r++) {
			var _ = getWasmTableEntry(r);
			_ && functionsInTableMap.set(_, r);
		}
	}, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => freeTableIndexes.length ? freeTableIndexes.pop() : wasmTable.grow(1), setWasmTableEntry = (e, t) => {
		wasmTable.set(e, t), wasmTableMirror[e] = wasmTable.get(e);
	}, uleb128EncodeWithLen = (e) => {
		let t = e.length;
		return [
			t % 128 | 128,
			t >> 7,
			...e
		];
	}, wasmTypeCodes = {
		i: 127,
		p: 127,
		j: 126,
		f: 125,
		d: 124,
		e: 111
	}, generateTypePack = (e) => uleb128EncodeWithLen(Array.from(e, (t) => {
		return wasmTypeCodes[t];
	})), convertJsFunctionToWasm = (e, t) => {
		var r = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, ...uleb128EncodeWithLen([
			1,
			96,
			...generateTypePack(t.slice(1)),
			...generateTypePack(t[0] === "v" ? "" : t[0])
		]), 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), _ = new WebAssembly.Module(r);
		return new WebAssembly.Instance(_, { e: { f: e } }).exports.f;
	}, addFunction = (e, t) => {
		var r = getFunctionAddress(e);
		if (r) return r;
		var _ = getEmptyTableSlot();
		try {
			setWasmTableEntry(_, e);
		} catch (a) {
			if (!(a instanceof TypeError)) throw a;
			setWasmTableEntry(_, convertJsFunctionToWasm(e, t));
		}
		return functionsInTableMap.set(e, _), _;
	}, updateGOT = (e, t) => {
		for (var r in e) if (!isInternalSym(r)) {
			var _ = e[r], n = GOT[r] && GOT[r].value != -1;
			if (t || !n) {
				var a;
				if (typeof _ == "function") a = addFunction(_);
				else if (typeof _.value == "number") a = _;
				else continue;
				GOT[r] ?? (GOT[r] = new WebAssembly.Global({
					value: "i32",
					mutable: !0
				})), GOT[r].value = a;
			}
		}
	}, isImmutableGlobal = (e) => {
		if (e instanceof WebAssembly.Global) try {
			e.value = e.value;
		} catch {
			return !0;
		}
		return !1;
	}, relocateExports = (e, t = 0) => {
		function r(a, i) {
			return isImmutableGlobal(i) ? new WebAssembly.Global({ value: "i32" }, i.value + t) : i;
		}
		var _ = {};
		for (var n in e) _[n] = r(0, e[n]);
		return _;
	}, isSymbolDefined = (e) => {
		var t = wasmImports[e];
		return !(!t || t.stub);
	}, createNamedFunction = (e, t) => Object.defineProperty(t, "name", { value: e }), dynCall = (e, t, r = []) => {
		return (function(a) {
			return a;
		})(getWasmTableEntry(t)(...r));
	}, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (t, ...r) => {
		var _ = stackSave();
		try {
			return dynCall(e, t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			if (_setThrew(1, 0), e[0] == "j") return 0n;
		}
	}, resolveGlobalSymbol = (e) => {
		var t;
		return isSymbolDefined(e) ? t = wasmImports[e] : e.startsWith("invoke_") && (t = wasmImports[e] = createNamedFunction(e, createInvokeFunction(e.split("_")[1]))), {
			sym: t,
			name: e
		};
	}, onPostCtors = [], addOnPostCtor = (e) => {
		onPostCtors.push(e);
	}, UTF8ToString = (e, t, r) => e ? UTF8ArrayToString(HEAPU8, e, t, r) : "", loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
		var metadata = getDylinkMetadata(binary);
		function loadModule() {
			var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
			handle && (HEAP8[handle + 8] = 1, HEAPU32[handle + 12 >> 2] = memoryBase, HEAP32[handle + 16 >> 2] = metadata.memorySize, HEAPU32[handle + 20 >> 2] = tableBase, HEAP32[handle + 24 >> 2] = metadata.tableSize), metadata.tableSize && wasmTable.grow(metadata.tableSize);
			var moduleExports;
			function resolveSymbol(e) {
				var t = resolveGlobalSymbol(e).sym;
				return !t && localScope && (t = localScope[e]), t || (t = moduleExports[e]), t;
			}
			var proxyHandler = { get(e, t) {
				switch (t) {
					case "__memory_base": return memoryBase;
					case "__table_base": return tableBase;
				}
				if (t in wasmImports && !wasmImports[t].stub) return wasmImports[t];
				if (!(t in e)) {
					var _;
					e[t] = (...n) => (_ || (_ = resolveSymbol(t)), _(...n));
				}
				return e[t];
			} }, proxy = new Proxy({}, proxyHandler), GOTProxy = new Proxy(metadata.weakImports, GOTHandler), info = {
				"GOT.mem": GOTProxy,
				"GOT.func": GOTProxy,
				env: proxy,
				wasi_snapshot_preview1: proxy
			};
			function postInstantiation(module, instance) {
				updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), updateGOT(moduleExports), flags.allowUndefined || reportUndefinedSymbols();
				function addEmAsm(addr, body) {
					for (var args = [], arity = 0;; arity++) {
						var argName = "$" + arity;
						if (!body.includes(argName)) break;
						args.push(argName);
					}
					args = args.join();
					var func = `(${args}) => { ${body} };`;
					ASM_CONSTS[start] = eval(func);
				}
				if ("__start_em_asm" in moduleExports) for (var start = moduleExports.__start_em_asm.value, stop = moduleExports.__stop_em_asm.value; start < stop;) {
					var jsString = UTF8ToString(start);
					addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
				}
				function addEmJs(name, cSig, body) {
					var jsArgs = [];
					if (cSig = cSig.slice(1, -1), cSig != "void") {
						cSig = cSig.split(",");
						for (var arg of cSig) {
							var jsArg = arg.split(" ").pop();
							jsArgs.push(jsArg.replaceAll("*", ""));
						}
					}
					var func = `(${jsArgs}) => ${body};`;
					moduleExports[name] = eval(func);
				}
				for (var name in moduleExports) if (name.startsWith("__em_js__")) {
					var start = moduleExports[name].value, jsString = UTF8ToString(start), [sig, body] = jsString.split("<::>");
					addEmJs(name.replace("__em_js__", ""), sig, body), delete moduleExports[name];
				}
				var applyRelocs = moduleExports.__wasm_apply_data_relocs;
				applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
				var init = moduleExports.__wasm_call_ctors;
				return init && (runtimeInitialized ? init() : addOnPostCtor(init)), moduleExports;
			}
			if (flags.loadAsync) return (async () => {
				var e;
				return binary instanceof WebAssembly.Module ? e = new WebAssembly.Instance(binary, info) : {module: binary, instance: e} = await WebAssembly.instantiate(binary, info), postInstantiation(binary, e);
			})();
			var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
			return postInstantiation(module, instance);
		}
		if (flags = {
			...flags,
			rpath: {
				parentLibPath: libName,
				paths: metadata.runtimePaths
			}
		}, flags.loadAsync) return metadata.neededDynlibs.reduce((e, t) => e.then(() => (t = findLibraryFS(t, flags.rpath) ?? t, loadDynamicLibrary(t, flags, localScope))), Promise.resolve()).then(loadModule);
		for (var needed of metadata.neededDynlibs) needed = findLibraryFS(needed, flags.rpath) ?? needed, loadDynamicLibrary(needed, flags, localScope);
		return loadModule();
	}, mergeLibSymbols = (e) => {
		for (var [t, r] of Object.entries(e)) {
			let _ = (a) => {
				isSymbolDefined(a) || (wasmImports[a] = r);
			};
			_(t);
			let n = "__main_argc_argv";
			t == "main" && _(n), t == n && _("main");
		}
	}, asyncLoad = async (e) => {
		var t = await readAsync(e);
		return new Uint8Array(t);
	}, preloadPlugins = [], registerWasmPlugin = () => {
		preloadPlugins.push({
			canHandle: (t) => !Module.noWasmDecoding && t.endsWith(".so"),
			handle: async (t, r) => {
				try {
					var _ = await loadWebAssemblyModule(t, {
						loadAsync: !0,
						nodelete: !0
					}, r, {});
				} catch (n) {
					throw new Error(`failed to instantiate wasm: ${r}: ${n}`);
				}
				return preloadedWasm[r] = _, t;
			}
		});
	}, preloadedWasm = {}, PATH = {
		isAbs: (e) => e.charAt(0) === "/",
		splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
		normalizeArray: (e, t) => {
			for (var r = 0, _ = e.length - 1; _ >= 0; _--) {
				var n = e[_];
				n === "." ? e.splice(_, 1) : n === ".." ? (e.splice(_, 1), r++) : r && (e.splice(_, 1), r--);
			}
			if (t) for (; r; r--) e.unshift("..");
			return e;
		},
		normalize: (e) => {
			var t = PATH.isAbs(e), r = e.slice(-1) === "/";
			return e = PATH.normalizeArray(e.split("/").filter((_) => !!_), !t).join("/"), !e && !t && (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
		},
		dirname: (e) => {
			var t = PATH.splitPath(e), r = t[0], _ = t[1];
			return !r && !_ ? "." : (_ && (_ = _.slice(0, -1)), r + _);
		},
		basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
		join: (...e) => PATH.normalize(e.join("/")),
		join2: (e, t) => PATH.normalize(e + "/" + t)
	}, replaceORIGIN = (e, t) => {
		if (t.startsWith("$ORIGIN")) {
			var r = PATH.dirname(e);
			return t.replace("$ORIGIN", r);
		}
		return t;
	}, withStackSave = (e) => {
		var t = stackSave(), r = e();
		return stackRestore(t), r;
	}, stackAlloc = (e) => __emscripten_stack_alloc(e), lengthBytesUTF8 = (e) => {
		for (var t = 0, r = 0; r < e.length; ++r) {
			var _ = e.charCodeAt(r);
			_ <= 127 ? t++ : _ <= 2047 ? t += 2 : _ >= 55296 && _ <= 57343 ? (t += 4, ++r) : t += 3;
		}
		return t;
	}, stringToUTF8Array = (e, t, r, _) => {
		if (!(_ > 0)) return 0;
		for (var n = r, a = r + _ - 1, i = 0; i < e.length; ++i) {
			var l = e.codePointAt(i);
			if (l <= 127) {
				if (r >= a) break;
				t[r++] = l;
			} else if (l <= 2047) {
				if (r + 1 >= a) break;
				t[r++] = 192 | l >> 6, t[r++] = 128 | l & 63;
			} else if (l <= 65535) {
				if (r + 2 >= a) break;
				t[r++] = 224 | l >> 12, t[r++] = 128 | l >> 6 & 63, t[r++] = 128 | l & 63;
			} else {
				if (r + 3 >= a) break;
				t[r++] = 240 | l >> 18, t[r++] = 128 | l >> 12 & 63, t[r++] = 128 | l >> 6 & 63, t[r++] = 128 | l & 63, i++;
			}
		}
		return t[r] = 0, r - n;
	}, stringToUTF8 = (e, t, r) => stringToUTF8Array(e, HEAPU8, t, r), stringToUTF8OnStack = (e) => {
		var t = lengthBytesUTF8(e) + 1, r = stackAlloc(t);
		return stringToUTF8(e, r, t), r;
	}, initRandomFill = () => {
		if (ENVIRONMENT_IS_NODE) {
			var e = require("node:crypto");
			return (t) => (e.randomFillSync(t), 0);
		}
		return (t) => (crypto.getRandomValues(t), 0);
	}, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = {
		resolve: (...e) => {
			for (var t = "", r = !1, _ = e.length - 1; _ >= -1 && !r; _--) {
				var n = _ >= 0 ? e[_] : FS.cwd();
				if (typeof n != "string") throw new TypeError("Arguments to path.resolve must be strings");
				if (!n) return "";
				t = n + "/" + t, r = PATH.isAbs(n);
			}
			return t = PATH.normalizeArray(t.split("/").filter((a) => !!a), !r).join("/"), (r ? "/" : "") + t || ".";
		},
		relative: (e, t) => {
			e = PATH_FS.resolve(e).slice(1), t = PATH_FS.resolve(t).slice(1);
			function r(s) {
				for (var c = 0; c < s.length && s[c] === ""; c++);
				for (var p = s.length - 1; p >= 0 && s[p] === ""; p--);
				return c > p ? [] : s.slice(c, p - c + 1);
			}
			for (var _ = r(e.split("/")), n = r(t.split("/")), a = Math.min(_.length, n.length), i = a, l = 0; l < a; l++) if (_[l] !== n[l]) {
				i = l;
				break;
			}
			var o = [];
			for (l = i; l < _.length; l++) o.push("..");
			return o = o.concat(n.slice(i)), o.join("/");
		}
	}, FS_stdin_getChar_buffer = [], intArrayFromString = (e, t, r) => {
		var _ = r > 0 ? r : lengthBytesUTF8(e) + 1, n = new Array(_), a = stringToUTF8Array(e, n, 0, n.length);
		return t && (n.length = a), n;
	}, FS_stdin_getChar = () => {
		if (!FS_stdin_getChar_buffer.length) {
			var e = null;
			if (ENVIRONMENT_IS_NODE) {
				var t = Buffer.alloc(256), r = 0;
				try {
					r = fs.readSync(process.stdin.fd, t, 0, 256);
				} catch (_) {
					if (_.toString().includes("EOF")) r = 0;
					else throw _;
				}
				r > 0 && (e = t.toString("utf-8", 0, r));
			} else globalThis.window?.prompt && (e = window.prompt("Input: "), e !== null && (e += `
`));
			if (!e) return null;
			FS_stdin_getChar_buffer = intArrayFromString(e, !0);
		}
		return FS_stdin_getChar_buffer.shift();
	}, TTY = {
		ttys: [],
		init() {},
		shutdown() {},
		register(e, t) {
			TTY.ttys[e] = {
				input: [],
				output: [],
				ops: t
			}, FS.registerDevice(e, TTY.stream_ops);
		},
		stream_ops: {
			open(e) {
				var t = TTY.ttys[e.node.rdev];
				if (!t) throw new FS.ErrnoError(43);
				e.tty = t, e.seekable = !1;
			},
			close(e) {
				e.tty.ops.fsync(e.tty);
			},
			fsync(e) {
				e.tty.ops.fsync(e.tty);
			},
			read(e, t, r, _, n) {
				if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
				for (var a = 0, i = 0; i < _; i++) {
					var l;
					try {
						l = e.tty.ops.get_char(e.tty);
					} catch {
						throw new FS.ErrnoError(29);
					}
					if (l === void 0 && !a) throw new FS.ErrnoError(6);
					if (l == null || (a++, t[r + i] = l, l === 10)) break;
				}
				return a && (e.node.atime = Date.now()), a;
			},
			write(e, t, r, _, n) {
				if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
				try {
					for (var a = 0; a < _; a++) e.tty.ops.put_char(e.tty, t[r + a]);
				} catch {
					throw new FS.ErrnoError(29);
				}
				return _ && (e.node.mtime = e.node.ctime = Date.now()), a;
			}
		},
		default_tty_ops: {
			get_char(e) {
				return FS_stdin_getChar();
			},
			put_char(e, t) {
				t === null || t === 10 ? (out(UTF8ArrayToString(e.output)), e.output = []) : t != 0 && e.output.push(t);
			},
			fsync(e) {
				e.output?.length > 0 && (out(UTF8ArrayToString(e.output)), e.output = []);
			},
			ioctl_tcgets(e) {
				return {
					c_iflag: 25856,
					c_oflag: 5,
					c_cflag: 191,
					c_lflag: 35387,
					c_cc: [
						3,
						28,
						127,
						21,
						4,
						0,
						1,
						0,
						17,
						19,
						26,
						0,
						18,
						15,
						23,
						22,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]
				};
			},
			ioctl_tcsets(e, t, r) {
				return 0;
			},
			ioctl_tiocgwinsz(e) {
				return [24, 80];
			}
		},
		default_tty1_ops: {
			put_char(e, t) {
				t === null || t === 10 ? (err(UTF8ArrayToString(e.output)), e.output = []) : t != 0 && e.output.push(t);
			},
			fsync(e) {
				e.output?.length > 0 && (err(UTF8ArrayToString(e.output)), e.output = []);
			}
		}
	}, zeroMemory = (e, t) => HEAPU8.fill(0, e, e + t), mmapAlloc = (e) => {
		e = alignMemory(e, 65536);
		var t = _emscripten_builtin_memalign(65536, e);
		return t && zeroMemory(t, e), t;
	}, MEMFS = {
		ops_table: null,
		mount(e) {
			return MEMFS.createNode(null, "/", 16895, 0);
		},
		createNode(e, t, r, _) {
			if (FS.isBlkdev(r) || FS.isFIFO(r)) throw new FS.ErrnoError(63);
			MEMFS.ops_table || (MEMFS.ops_table = {
				dir: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr,
						lookup: MEMFS.node_ops.lookup,
						mknod: MEMFS.node_ops.mknod,
						rename: MEMFS.node_ops.rename,
						unlink: MEMFS.node_ops.unlink,
						rmdir: MEMFS.node_ops.rmdir,
						readdir: MEMFS.node_ops.readdir,
						symlink: MEMFS.node_ops.symlink
					},
					stream: { llseek: MEMFS.stream_ops.llseek }
				},
				file: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr
					},
					stream: {
						llseek: MEMFS.stream_ops.llseek,
						read: MEMFS.stream_ops.read,
						write: MEMFS.stream_ops.write,
						mmap: MEMFS.stream_ops.mmap,
						msync: MEMFS.stream_ops.msync
					}
				},
				link: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr,
						readlink: MEMFS.node_ops.readlink
					},
					stream: {}
				},
				chrdev: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr
					},
					stream: FS.chrdev_stream_ops
				}
			});
			var n = FS.createNode(e, t, r, _);
			return FS.isDir(n.mode) ? (n.node_ops = MEMFS.ops_table.dir.node, n.stream_ops = MEMFS.ops_table.dir.stream, n.contents = {}) : FS.isFile(n.mode) ? (n.node_ops = MEMFS.ops_table.file.node, n.stream_ops = MEMFS.ops_table.file.stream, n.usedBytes = 0, n.contents = MEMFS.emptyFileContents ?? (MEMFS.emptyFileContents = /* @__PURE__ */ new Uint8Array(0))) : FS.isLink(n.mode) ? (n.node_ops = MEMFS.ops_table.link.node, n.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(n.mode) && (n.node_ops = MEMFS.ops_table.chrdev.node, n.stream_ops = MEMFS.ops_table.chrdev.stream), n.atime = n.mtime = n.ctime = Date.now(), e && (e.contents[t] = n, e.atime = e.mtime = e.ctime = n.atime), n;
		},
		getFileDataAsTypedArray(e) {
			return e.contents.subarray(0, e.usedBytes);
		},
		expandFileStorage(e, t) {
			var r = e.contents.length;
			if (!(r >= t)) {
				t = Math.max(t, r * (r < 1048576 ? 2 : 1.125) >>> 0), r && (t = Math.max(t, 256));
				var _ = MEMFS.getFileDataAsTypedArray(e);
				e.contents = new Uint8Array(t), e.contents.set(_);
			}
		},
		resizeFileStorage(e, t) {
			if (e.usedBytes != t) {
				var r = e.contents;
				e.contents = new Uint8Array(t), e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t;
			}
		},
		node_ops: {
			getattr(e) {
				var t = {};
				return t.dev = FS.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, FS.isDir(e.mode) ? t.size = 4096 : FS.isFile(e.mode) ? t.size = e.usedBytes : FS.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.atime), t.mtime = new Date(e.mtime), t.ctime = new Date(e.ctime), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
			},
			setattr(e, t) {
				for (let r of [
					"mode",
					"atime",
					"mtime",
					"ctime"
				]) t[r] != null && (e[r] = t[r]);
				t.size !== void 0 && MEMFS.resizeFileStorage(e, t.size);
			},
			lookup(e, t) {
				throw MEMFS.doesNotExistError || (MEMFS.doesNotExistError = new FS.ErrnoError(44), MEMFS.doesNotExistError.stack = "<generic error, no stack>"), MEMFS.doesNotExistError;
			},
			mknod(e, t, r, _) {
				return MEMFS.createNode(e, t, r, _);
			},
			rename(e, t, r) {
				var _;
				try {
					_ = FS.lookupNode(t, r);
				} catch {}
				if (_ && FS.isDir(e.mode)) for (var n in _.contents) throw new FS.ErrnoError(55);
				delete e.parent.contents[e.name], t.contents[r] = e, e.name = r, t.ctime = t.mtime = e.parent.ctime = e.parent.mtime = Date.now();
			},
			unlink(e, t) {
				delete e.contents[t], e.ctime = e.mtime = Date.now();
			},
			rmdir(e, t) {
				for (var _ in FS.lookupNode(e, t).contents) throw new FS.ErrnoError(55);
				delete e.contents[t], e.ctime = e.mtime = Date.now();
			},
			readdir(e) {
				return [
					".",
					"..",
					...Object.keys(e.contents)
				];
			},
			symlink(e, t, r) {
				var _ = MEMFS.createNode(e, t, 41471, 0);
				return _.link = r, _;
			},
			readlink(e) {
				if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
				return e.link;
			}
		},
		stream_ops: {
			read(e, t, r, _, n) {
				var a = e.node.contents;
				if (n >= e.node.usedBytes) return 0;
				var i = Math.min(e.node.usedBytes - n, _);
				return t.set(a.subarray(n, n + i), r), i;
			},
			write(e, t, r, _, n, a) {
				if (t.buffer === HEAP8.buffer && (a = !1), !_) return 0;
				var i = e.node;
				return i.mtime = i.ctime = Date.now(), a ? (i.contents = t.subarray(r, r + _), i.usedBytes = _) : !i.usedBytes && !n ? (i.contents = t.slice(r, r + _), i.usedBytes = _) : (MEMFS.expandFileStorage(i, n + _), i.contents.set(t.subarray(r, r + _), n), i.usedBytes = Math.max(i.usedBytes, n + _)), _;
			},
			llseek(e, t, r) {
				var _ = t;
				if (r === 1 ? _ += e.position : r === 2 && FS.isFile(e.node.mode) && (_ += e.node.usedBytes), _ < 0) throw new FS.ErrnoError(28);
				return _;
			},
			mmap(e, t, r, _, n) {
				if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
				var a, i, l = e.node.contents;
				if (!(n & 2) && l.buffer === HEAP8.buffer) i = !1, a = l.byteOffset;
				else {
					if (i = !0, a = mmapAlloc(t), !a) throw new FS.ErrnoError(48);
					l && ((r > 0 || r + t < l.length) && (l.subarray ? l = l.subarray(r, r + t) : l = Array.prototype.slice.call(l, r, r + t)), HEAP8.set(l, a));
				}
				return {
					ptr: a,
					allocated: i
				};
			},
			msync(e, t, r, _, n) {
				return MEMFS.stream_ops.write(e, t, 0, _, r, !1), 0;
			}
		}
	}, FS_modeStringToFlags = (e) => {
		if (typeof e != "string") return e;
		var t = {
			r: 0,
			"r+": 2,
			w: 577,
			"w+": 578,
			a: 1089,
			"a+": 1090
		}[e];
		if (typeof t > "u") throw new Error(`Unknown file open mode: ${e}`);
		return t;
	}, FS_fileDataToTypedArray = (e) => (typeof e == "string" && (e = intArrayFromString(e, !0)), e.subarray || (e = new Uint8Array(e)), e), FS_getMode = (e, t) => {
		var r = 0;
		return e && (r |= 365), t && (r |= 146), r;
	}, IDBFS = {
		dbs: {},
		indexedDB: () => indexedDB,
		DB_VERSION: 21,
		DB_STORE_NAME: "FILE_DATA",
		queuePersist: (e) => {
			function t() {
				e.idbPersistState === "again" ? r() : (e.idbPersistState = 0, IDBFS.onAutoPersistStateChanged?.(!1));
			}
			function r() {
				e.idbPersistState = "idb", IDBFS.onAutoPersistStateChanged?.(!0), IDBFS.syncfs(e, !1, t);
			}
			e.idbPersistState ? e.idbPersistState === "idb" && (e.idbPersistState = "again") : e.idbPersistState = setTimeout(r, 0);
		},
		mount: (e) => {
			var t = MEMFS.mount(e);
			if (e?.opts?.autoPersist) {
				e.idbPersistState = 0;
				var r = t.node_ops;
				t.node_ops = { ...t.node_ops }, t.node_ops.mknod = (_, n, a, i) => {
					var l = r.mknod(_, n, a, i);
					return l.node_ops = t.node_ops, l.idbfs_mount = t.mount, l.memfs_stream_ops = l.stream_ops, l.stream_ops = { ...l.stream_ops }, l.stream_ops.write = (o, s, c, p, d, u) => (o.node.isModified = !0, l.memfs_stream_ops.write(o, s, c, p, d, u)), l.stream_ops.close = (o) => {
						var s = o.node;
						if (s.isModified && (IDBFS.queuePersist(s.idbfs_mount), s.isModified = !1), s.memfs_stream_ops.close) return s.memfs_stream_ops.close(o);
					}, IDBFS.queuePersist(t.mount), l;
				}, t.node_ops.rmdir = (..._) => (IDBFS.queuePersist(t.mount), r.rmdir(..._)), t.node_ops.symlink = (..._) => (IDBFS.queuePersist(t.mount), r.symlink(..._)), t.node_ops.unlink = (..._) => (IDBFS.queuePersist(t.mount), r.unlink(..._)), t.node_ops.rename = (..._) => (IDBFS.queuePersist(t.mount), r.rename(..._));
			}
			return t;
		},
		syncfs: (e, t, r) => {
			IDBFS.getLocalSet(e, (_, n) => {
				if (_) return r(_);
				IDBFS.getRemoteSet(e, (a, i) => {
					if (a) return r(a);
					var l = t ? i : n, o = t ? n : i;
					IDBFS.reconcile(l, o, r);
				});
			});
		},
		quit: () => {
			for (var e of Object.values(IDBFS.dbs)) e.close();
			IDBFS.dbs = {};
		},
		getDB: (e, t) => {
			var r = IDBFS.dbs[e];
			if (r) return t(null, r);
			var _;
			try {
				_ = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
			} catch (n) {
				return t(n);
			}
			if (!_) return t("Unable to connect to IndexedDB");
			_.onupgradeneeded = (n) => {
				var a = n.target.result, i = n.target.transaction, l;
				a.objectStoreNames.contains(IDBFS.DB_STORE_NAME) ? l = i.objectStore(IDBFS.DB_STORE_NAME) : l = a.createObjectStore(IDBFS.DB_STORE_NAME), l.indexNames.contains("timestamp") || l.createIndex("timestamp", "timestamp", { unique: !1 });
			}, _.onsuccess = () => {
				r = _.result, IDBFS.dbs[e] = r, t(null, r);
			}, _.onerror = (n) => {
				t(n.target.error), n.preventDefault();
			};
		},
		getLocalSet: (e, t) => {
			var r = {};
			function _(o) {
				return o !== "." && o !== "..";
			}
			function n(o) {
				return (s) => PATH.join2(o, s);
			}
			for (var a = FS.readdir(e.mountpoint).filter(_).map(n(e.mountpoint)); a.length;) {
				var i = a.pop(), l;
				try {
					l = FS.lstat(i);
				} catch (o) {
					return t(o);
				}
				FS.isDir(l.mode) && a.push(...FS.readdir(i).filter(_).map(n(i))), r[i] = { timestamp: l.mtime };
			}
			return t(null, {
				type: "local",
				entries: r
			});
		},
		getRemoteSet: (e, t) => {
			var r = {};
			IDBFS.getDB(e.mountpoint, (_, n) => {
				if (_) return t(_);
				try {
					var a = n.transaction([IDBFS.DB_STORE_NAME], "readonly");
					a.onerror = (o) => {
						t(o.target.error), o.preventDefault();
					};
					var l = a.objectStore(IDBFS.DB_STORE_NAME).index("timestamp");
					l.openKeyCursor().onsuccess = (o) => {
						var s = o.target.result;
						if (!s) return t(null, {
							type: "remote",
							db: n,
							entries: r
						});
						r[s.primaryKey] = { timestamp: s.key }, s.continue();
					};
				} catch (o) {
					return t(o);
				}
			});
		},
		loadLocalEntry: (e, t) => {
			var r, _;
			try {
				_ = FS.lookupPath(e).node, r = FS.lstat(e);
			} catch (a) {
				return t(a);
			}
			return FS.isDir(r.mode) ? t(null, {
				timestamp: r.mtime,
				mode: r.mode
			}) : FS.isLink(r.mode) ? t(null, {
				timestamp: r.mtime,
				mode: r.mode,
				link: _.link
			}) : FS.isFile(r.mode) ? (_.contents = MEMFS.getFileDataAsTypedArray(_), t(null, {
				timestamp: r.mtime,
				mode: r.mode,
				contents: _.contents
			})) : t(/* @__PURE__ */ new Error("node type not supported"));
		},
		storeLocalEntry: (e, t, r) => {
			try {
				if (FS.isDir(t.mode)) FS.mkdirTree(e, t.mode);
				else if (FS.isLink(t.mode)) FS.symlink(t.link, e);
				else if (FS.isFile(t.mode)) FS.writeFile(e, t.contents, { canOwn: !0 });
				else return r(/* @__PURE__ */ new Error("node type not supported"));
				FS.chmod(e, t.mode), FS.utime(e, t.timestamp, t.timestamp);
			} catch (_) {
				return r(_);
			}
			r(null);
		},
		removeLocalEntry: (e, t) => {
			try {
				var r = FS.lstat(e);
				FS.isDir(r.mode) ? FS.rmdir(e) : FS.unlink(e);
			} catch (_) {
				return t(_);
			}
			t(null);
		},
		loadRemoteEntry: (e, t, r) => {
			var _ = e.get(t);
			_.onsuccess = (n) => r(null, n.target.result), _.onerror = (n) => {
				r(n.target.error), n.preventDefault();
			};
		},
		storeRemoteEntry: (e, t, r, _) => {
			try {
				var n = e.put(r, t);
			} catch (a) {
				_(a);
				return;
			}
			n.onsuccess = () => _(), n.onerror = (a) => {
				_(a.target.error), a.preventDefault();
			};
		},
		removeRemoteEntry: (e, t, r) => {
			var _ = e.delete(t);
			_.onsuccess = () => r(), _.onerror = (n) => {
				r(n.target.error), n.preventDefault();
			};
		},
		reconcile: (e, t, r) => {
			var _ = 0, n = [];
			for (var [a, i] of Object.entries(e.entries)) {
				var l = t.entries[a];
				(!l || i.timestamp.getTime() != l.timestamp.getTime()) && (n.push(a), _++);
			}
			var o = [];
			for (var a of Object.keys(t.entries)) e.entries[a] || (o.push(a), _++);
			if (!_) return r(null);
			var s = !1, p = (e.type === "remote" ? e.db : t.db).transaction([IDBFS.DB_STORE_NAME], "readwrite"), d = p.objectStore(IDBFS.DB_STORE_NAME);
			function u(m) {
				if (m && !s) return s = !0, r(m);
			}
			p.onerror = p.onabort = (m) => {
				u(m.target.error), m.preventDefault();
			}, p.oncomplete = () => {
				s || r(null);
			};
			for (let m of n.sort()) t.type === "local" ? IDBFS.loadRemoteEntry(d, m, (y, b) => {
				if (y) return u(y);
				IDBFS.storeLocalEntry(m, b, u);
			}) : IDBFS.loadLocalEntry(m, (y, b) => {
				if (y) return u(y);
				IDBFS.storeRemoteEntry(d, m, b, u);
			});
			for (var f of o.sort().reverse()) t.type === "local" ? IDBFS.removeLocalEntry(f, u) : IDBFS.removeRemoteEntry(d, f, u);
		}
	}, ERRNO_CODES = {
		EPERM: 63,
		ENOENT: 44,
		ESRCH: 71,
		EINTR: 27,
		EIO: 29,
		ENXIO: 60,
		E2BIG: 1,
		ENOEXEC: 45,
		EBADF: 8,
		ECHILD: 12,
		EAGAIN: 6,
		EWOULDBLOCK: 6,
		ENOMEM: 48,
		EACCES: 2,
		EFAULT: 21,
		ENOTBLK: 105,
		EBUSY: 10,
		EEXIST: 20,
		EXDEV: 75,
		ENODEV: 43,
		ENOTDIR: 54,
		EISDIR: 31,
		EINVAL: 28,
		ENFILE: 41,
		EMFILE: 33,
		ENOTTY: 59,
		ETXTBSY: 74,
		EFBIG: 22,
		ENOSPC: 51,
		ESPIPE: 70,
		EROFS: 69,
		EMLINK: 34,
		EPIPE: 64,
		EDOM: 18,
		ERANGE: 68,
		ENOMSG: 49,
		EIDRM: 24,
		ECHRNG: 106,
		EL2NSYNC: 156,
		EL3HLT: 107,
		EL3RST: 108,
		ELNRNG: 109,
		EUNATCH: 110,
		ENOCSI: 111,
		EL2HLT: 112,
		EDEADLK: 16,
		ENOLCK: 46,
		EBADE: 113,
		EBADR: 114,
		EXFULL: 115,
		ENOANO: 104,
		EBADRQC: 103,
		EBADSLT: 102,
		EDEADLOCK: 16,
		EBFONT: 101,
		ENOSTR: 100,
		ENODATA: 116,
		ETIME: 117,
		ENOSR: 118,
		ENONET: 119,
		ENOPKG: 120,
		EREMOTE: 121,
		ENOLINK: 47,
		EADV: 122,
		ESRMNT: 123,
		ECOMM: 124,
		EPROTO: 65,
		EMULTIHOP: 36,
		EDOTDOT: 125,
		EBADMSG: 9,
		ENOTUNIQ: 126,
		EBADFD: 127,
		EREMCHG: 128,
		ELIBACC: 129,
		ELIBBAD: 130,
		ELIBSCN: 131,
		ELIBMAX: 132,
		ELIBEXEC: 133,
		ENOSYS: 52,
		ENOTEMPTY: 55,
		ENAMETOOLONG: 37,
		ELOOP: 32,
		EOPNOTSUPP: 138,
		EPFNOSUPPORT: 139,
		ECONNRESET: 15,
		ENOBUFS: 42,
		EAFNOSUPPORT: 5,
		EPROTOTYPE: 67,
		ENOTSOCK: 57,
		ENOPROTOOPT: 50,
		ESHUTDOWN: 140,
		ECONNREFUSED: 14,
		EADDRINUSE: 3,
		ECONNABORTED: 13,
		ENETUNREACH: 40,
		ENETDOWN: 38,
		ETIMEDOUT: 73,
		EHOSTDOWN: 142,
		EHOSTUNREACH: 23,
		EINPROGRESS: 26,
		EALREADY: 7,
		EDESTADDRREQ: 17,
		EMSGSIZE: 35,
		EPROTONOSUPPORT: 66,
		ESOCKTNOSUPPORT: 137,
		EADDRNOTAVAIL: 4,
		ENETRESET: 39,
		EISCONN: 30,
		ENOTCONN: 53,
		ETOOMANYREFS: 141,
		EUSERS: 136,
		EDQUOT: 19,
		ESTALE: 72,
		ENOTSUP: 138,
		ENOMEDIUM: 148,
		EILSEQ: 25,
		EOVERFLOW: 61,
		ECANCELED: 11,
		ENOTRECOVERABLE: 56,
		EOWNERDEAD: 62,
		ESTRPIPE: 135
	}, NODEFS = {
		isWindows: !1,
		staticInit() {
			NODEFS.isWindows = !!process.platform.match(/^win/);
			var e = { fs: require("fs").constants }.fs;
			NODEFS.flagsForNodeMap = {
				1024: e.O_APPEND,
				64: e.O_CREAT,
				128: e.O_EXCL,
				256: e.O_NOCTTY,
				0: e.O_RDONLY,
				2: e.O_RDWR,
				4096: e.O_SYNC,
				512: e.O_TRUNC,
				1: e.O_WRONLY,
				131072: e.O_NOFOLLOW
			};
		},
		convertNodeCode(e) {
			return ERRNO_CODES[e.code];
		},
		tryFSOperation(e) {
			try {
				return e();
			} catch (t) {
				throw t.code ? t.code === "UNKNOWN" ? new FS.ErrnoError(28) : new FS.ErrnoError(NODEFS.convertNodeCode(t)) : t;
			}
		},
		mount(e) {
			return NODEFS.createNode(null, "/", NODEFS.getMode(e.opts.root), 0);
		},
		createNode(e, t, r, _) {
			if (!FS.isDir(r) && !FS.isFile(r) && !FS.isLink(r)) throw new FS.ErrnoError(28);
			var n = FS.createNode(e, t, r);
			return n.node_ops = NODEFS.node_ops, n.stream_ops = NODEFS.stream_ops, n;
		},
		getMode(e) {
			return NODEFS.tryFSOperation(() => {
				var t = fs.lstatSync(e).mode;
				return NODEFS.isWindows && (t |= (t & 292) >> 2), t;
			});
		},
		realPath(e) {
			for (var t = []; e.parent !== e;) t.push(e.name), e = e.parent;
			return t.push(e.mount.opts.root), t.reverse(), PATH.join(...t);
		},
		flagsForNode(e) {
			e &= -2097153, e &= -2049, e &= -32769, e &= -524289, e &= -65537;
			var t = 0;
			for (var r in NODEFS.flagsForNodeMap) e & r && (t |= NODEFS.flagsForNodeMap[r], e ^= r);
			if (e) throw new FS.ErrnoError(28);
			return t;
		},
		doGetAttr(e, t) {
			var r = NODEFS.tryFSOperation(e);
			return NODEFS.isWindows && (r.blksize || (r.blksize = 4096), r.blocks || (r.blocks = (r.size + r.blksize - 1) / r.blksize | 0), r.mode |= (r.mode & 292) >> 2), {
				dev: r.dev,
				ino: t.id,
				mode: r.mode,
				nlink: r.nlink,
				uid: r.uid,
				gid: r.gid,
				rdev: r.rdev,
				size: r.size,
				atime: r.atime,
				mtime: r.mtime,
				ctime: r.ctime,
				blksize: r.blksize,
				blocks: r.blocks
			};
		},
		doSetAttr(e, t, r, _, n, a, i) {
			NODEFS.tryFSOperation(() => {
				if (r.mode !== void 0) {
					var l = r.mode;
					NODEFS.isWindows && (l &= 384), _(e, l), t.mode = r.mode;
				}
				if (typeof (r.atime ?? r.mtime) == "number") {
					var o = r.atime, s = r.mtime;
					if (o == null || s == null) {
						var c = i(e);
						o ?? (o = c.atimeMs), s ?? (s = c.mtimeMs);
					}
					n(e, o / 1e3, s / 1e3);
				}
				r.size !== void 0 && a(e, r.size);
			});
		},
		node_ops: {
			getattr(e) {
				var t = NODEFS.realPath(e);
				return NODEFS.doGetAttr(() => fs.lstatSync(t), e);
			},
			setattr(e, t) {
				var r = NODEFS.realPath(e);
				if (t.mode != null && t.dontFollow) throw new FS.ErrnoError(52);
				var _ = t.dontFollow ? fs.lutimesSync : fs.utimesSync;
				NODEFS.doSetAttr(r, e, t, fs.chmodSync, _, fs.truncateSync, fs.lstatSync);
			},
			lookup(e, t) {
				var r = PATH.join2(NODEFS.realPath(e), t), _ = NODEFS.getMode(r);
				return NODEFS.createNode(e, t, _);
			},
			mknod(e, t, r, _) {
				var n = NODEFS.createNode(e, t, r, _), a = NODEFS.realPath(n);
				return NODEFS.tryFSOperation(() => {
					FS.isDir(n.mode) ? fs.mkdirSync(a, n.mode) : fs.writeFileSync(a, "", { mode: n.mode });
				}), n;
			},
			rename(e, t, r) {
				var _ = NODEFS.realPath(e), n = PATH.join2(NODEFS.realPath(t), r);
				NODEFS.tryFSOperation(() => fs.renameSync(_, n)), e.name = r;
			},
			unlink(e, t) {
				var r = PATH.join2(NODEFS.realPath(e), t);
				NODEFS.tryFSOperation(() => fs.unlinkSync(r));
			},
			rmdir(e, t) {
				var r = PATH.join2(NODEFS.realPath(e), t);
				NODEFS.tryFSOperation(() => fs.rmdirSync(r));
			},
			readdir(e) {
				var t = NODEFS.realPath(e);
				return NODEFS.tryFSOperation(() => fs.readdirSync(t));
			},
			symlink(e, t, r) {
				var _ = PATH.join2(NODEFS.realPath(e), t);
				NODEFS.tryFSOperation(() => fs.symlinkSync(r, _));
			},
			readlink(e) {
				var t = NODEFS.realPath(e);
				return NODEFS.tryFSOperation(() => fs.readlinkSync(t));
			},
			statfs(e) {
				var t = NODEFS.tryFSOperation(() => fs.statfsSync(e));
				return t.frsize = t.bsize, t;
			}
		},
		stream_ops: {
			getattr(e) {
				return NODEFS.doGetAttr(() => fs.fstatSync(e.nfd), e.node);
			},
			setattr(e, t) {
				NODEFS.doSetAttr(e.nfd, e.node, t, fs.fchmodSync, fs.futimesSync, fs.ftruncateSync, fs.fstatSync);
			},
			open(e) {
				var t = NODEFS.realPath(e.node);
				NODEFS.tryFSOperation(() => {
					e.shared.refcount = 1, e.nfd = fs.openSync(t, NODEFS.flagsForNode(e.flags));
				});
			},
			close(e) {
				NODEFS.tryFSOperation(() => {
					e.nfd && !--e.shared.refcount && fs.closeSync(e.nfd);
				});
			},
			dup(e) {
				e.shared.refcount++;
			},
			read(e, t, r, _, n) {
				return NODEFS.tryFSOperation(() => fs.readSync(e.nfd, t, r, _, n));
			},
			write(e, t, r, _, n) {
				return NODEFS.tryFSOperation(() => fs.writeSync(e.nfd, t, r, _, n));
			},
			llseek(e, t, r) {
				var _ = t;
				if (r === 1 ? _ += e.position : r === 2 && FS.isFile(e.node.mode) && NODEFS.tryFSOperation(() => {
					var n = fs.fstatSync(e.nfd);
					_ += n.size;
				}), _ < 0) throw new FS.ErrnoError(28);
				return _;
			},
			mmap(e, t, r, _, n) {
				if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
				var a = mmapAlloc(t);
				return NODEFS.stream_ops.read(e, HEAP8, a, t, r), {
					ptr: a,
					allocated: !0
				};
			},
			msync(e, t, r, _, n) {
				return NODEFS.stream_ops.write(e, t, 0, _, r), 0;
			}
		}
	}, PROXYFS = {
		mount(e) {
			return PROXYFS.createNode(null, "/", e.opts.fs.lstat(e.opts.root).mode, 0);
		},
		createNode(e, t, r, _) {
			if (!FS.isDir(r) && !FS.isFile(r) && !FS.isLink(r)) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
			var n = FS.createNode(e, t, r);
			return n.node_ops = PROXYFS.node_ops, n.stream_ops = PROXYFS.stream_ops, n;
		},
		realPath(e) {
			for (var t = []; e.parent !== e;) t.push(e.name), e = e.parent;
			return t.push(e.mount.opts.root), t.reverse(), PATH.join(...t);
		},
		node_ops: {
			getattr(e) {
				var t = PROXYFS.realPath(e), r;
				try {
					r = e.mount.opts.fs.lstat(t);
				} catch (_) {
					throw _.code ? new FS.ErrnoError(ERRNO_CODES[_.code]) : _;
				}
				return {
					dev: r.dev,
					ino: r.ino,
					mode: r.mode,
					nlink: r.nlink,
					uid: r.uid,
					gid: r.gid,
					rdev: r.rdev,
					size: r.size,
					atime: r.atime,
					mtime: r.mtime,
					ctime: r.ctime,
					blksize: r.blksize,
					blocks: r.blocks
				};
			},
			setattr(e, t) {
				var r = PROXYFS.realPath(e);
				try {
					if (t.mode !== void 0 && (e.mount.opts.fs.chmod(r, t.mode), e.mode = t.mode), t.atime || t.mtime) {
						var _ = new Date(t.atime || t.mtime), n = new Date(t.mtime || t.atime);
						e.mount.opts.fs.utime(r, _, n);
					}
					t.size !== void 0 && e.mount.opts.fs.truncate(r, t.size);
				} catch (a) {
					throw a.code ? new FS.ErrnoError(ERRNO_CODES[a.code]) : a;
				}
			},
			lookup(e, t) {
				try {
					var r = PATH.join2(PROXYFS.realPath(e), t), _ = e.mount.opts.fs.lstat(r).mode;
					return PROXYFS.createNode(e, t, _);
				} catch (a) {
					throw a.code ? new FS.ErrnoError(ERRNO_CODES[a.code]) : a;
				}
			},
			mknod(e, t, r, _) {
				var n = PROXYFS.createNode(e, t, r, _), a = PROXYFS.realPath(n);
				try {
					FS.isDir(n.mode) ? n.mount.opts.fs.mkdir(a, n.mode) : n.mount.opts.fs.writeFile(a, "", { mode: n.mode });
				} catch (i) {
					throw i.code ? new FS.ErrnoError(ERRNO_CODES[i.code]) : i;
				}
				return n;
			},
			rename(e, t, r) {
				var _ = PROXYFS.realPath(e), n = PATH.join2(PROXYFS.realPath(t), r);
				try {
					e.mount.opts.fs.rename(_, n), e.name = r;
				} catch (a) {
					throw a.code ? new FS.ErrnoError(ERRNO_CODES[a.code]) : a;
				}
			},
			unlink(e, t) {
				var r = PATH.join2(PROXYFS.realPath(e), t);
				try {
					e.mount.opts.fs.unlink(r);
				} catch (_) {
					throw _.code ? new FS.ErrnoError(ERRNO_CODES[_.code]) : _;
				}
			},
			rmdir(e, t) {
				var r = PATH.join2(PROXYFS.realPath(e), t);
				try {
					e.mount.opts.fs.rmdir(r);
				} catch (_) {
					throw _.code ? new FS.ErrnoError(ERRNO_CODES[_.code]) : _;
				}
			},
			readdir(e) {
				var t = PROXYFS.realPath(e);
				try {
					return e.mount.opts.fs.readdir(t);
				} catch (r) {
					throw r.code ? new FS.ErrnoError(ERRNO_CODES[r.code]) : r;
				}
			},
			symlink(e, t, r) {
				var _ = PATH.join2(PROXYFS.realPath(e), t);
				try {
					e.mount.opts.fs.symlink(r, _);
				} catch (n) {
					throw n.code ? new FS.ErrnoError(ERRNO_CODES[n.code]) : n;
				}
			},
			readlink(e) {
				var t = PROXYFS.realPath(e);
				try {
					return e.mount.opts.fs.readlink(t);
				} catch (r) {
					throw r.code ? new FS.ErrnoError(ERRNO_CODES[r.code]) : r;
				}
			}
		},
		stream_ops: {
			open(e) {
				var t = PROXYFS.realPath(e.node);
				try {
					e.nfd = e.node.mount.opts.fs.open(t, e.flags);
				} catch (r) {
					throw r.code ? new FS.ErrnoError(ERRNO_CODES[r.code]) : r;
				}
			},
			close(e) {
				try {
					e.node.mount.opts.fs.close(e.nfd);
				} catch (t) {
					throw t.code ? new FS.ErrnoError(ERRNO_CODES[t.code]) : t;
				}
			},
			read(e, t, r, _, n) {
				try {
					return e.node.mount.opts.fs.read(e.nfd, t, r, _, n);
				} catch (a) {
					throw a.code ? new FS.ErrnoError(ERRNO_CODES[a.code]) : a;
				}
			},
			write(e, t, r, _, n) {
				try {
					return e.node.mount.opts.fs.write(e.nfd, t, r, _, n);
				} catch (a) {
					throw a.code ? new FS.ErrnoError(ERRNO_CODES[a.code]) : a;
				}
			},
			llseek(e, t, r) {
				var _ = t;
				if (r === 1) _ += e.position;
				else if (r === 2 && FS.isFile(e.node.mode)) try {
					var n = e.node.node_ops.getattr(e.node);
					_ += n.size;
				} catch (a) {
					throw new FS.ErrnoError(ERRNO_CODES[a.code]);
				}
				if (_ < 0) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
				return _;
			}
		}
	}, FS_createDataFile = (...e) => FS.createDataFile(...e), getUniqueRunDependency = (e) => e, dependenciesPromise = null, resolveRunDependencies = async () => dependenciesPromise, runDependencies = 0, dependenciesPromiseResolve = null, removeRunDependency = () => {
		runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies || dependenciesPromiseResolve();
	}, addRunDependency = () => {
		runDependencies || (dependenciesPromise = new Promise((e) => dependenciesPromiseResolve = e)), runDependencies++, Module.monitorRunDependencies?.(runDependencies);
	}, FS_handledByPreloadPlugin = async (e, t) => {
		typeof Browser < "u" && Browser.init();
		for (var r of preloadPlugins) if (r.canHandle(t)) return r.handle(e, t);
		return e;
	}, FS_preloadFile = async (e, t, r, _, n, a, i, l) => {
		var o = t ? PATH_FS.resolve(PATH.join2(e, t)) : e, s = getUniqueRunDependency(`cp ${o}`);
		addRunDependency(s);
		try {
			var c = r;
			typeof r == "string" && (c = await asyncLoad(r)), c = await FS_handledByPreloadPlugin(c, o), l?.(), a || FS_createDataFile(e, t, c, _, n, i);
		} finally {
			removeRunDependency(s);
		}
	}, FS_createPreloadedFile = (e, t, r, _, n, a, i, l, o, s) => {
		FS_preloadFile(e, t, r, _, n, l, o, s).then(a).catch(i);
	}, FS = {
		root: null,
		mounts: [],
		devices: {},
		streams: [],
		nextInode: 1,
		nameTable: [],
		currentPath: "/",
		initialized: !1,
		ignorePermissions: !0,
		syncFSRequests: 0,
		ErrnoError: class {
			constructor(e) {
				P$4(this, "name", "ErrnoError");
				this.errno = e;
			}
		},
		FSStream: class {
			constructor() {
				P$4(this, "shared", {});
			}
			get object() {
				return this.node;
			}
			set object(e) {
				this.node = e;
			}
			get isRead() {
				return (this.flags & 2097155) !== 1;
			}
			get isWrite() {
				return (this.flags & 2097155) !== 0;
			}
			get isAppend() {
				return this.flags & 1024;
			}
			get flags() {
				return this.shared.flags;
			}
			set flags(e) {
				this.shared.flags = e;
			}
			get position() {
				return this.shared.position;
			}
			set position(e) {
				this.shared.position = e;
			}
		},
		FSNode: class {
			constructor(e, t, r, _) {
				P$4(this, "node_ops", {});
				P$4(this, "stream_ops", {});
				P$4(this, "readMode", 365);
				P$4(this, "writeMode", 146);
				P$4(this, "mounted", null);
				e || (e = this), this.parent = e, this.mount = e.mount, this.id = FS.nextInode++, this.name = t, this.mode = r, this.rdev = _, this.atime = this.mtime = this.ctime = Date.now();
			}
			get read() {
				return (this.mode & this.readMode) === this.readMode;
			}
			set read(e) {
				e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
			}
			get write() {
				return (this.mode & this.writeMode) === this.writeMode;
			}
			set write(e) {
				e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
			}
			get isFolder() {
				return FS.isDir(this.mode);
			}
			get isDevice() {
				return FS.isChrdev(this.mode);
			}
			addListener(e, t = !1) {
				var r = {
					cb: e,
					exclusive: t
				}, _ = this.listeners ?? (this.listeners = /* @__PURE__ */ new Set());
				return _.add(r), {
					listeners: _,
					entry: r
				};
			}
			notifyListeners(e) {
				if (this.listeners) {
					var t;
					for (var r of this.listeners) r.exclusive ? (t || (t = [])).push(r) : r.cb(e);
					if (t) {
						var _ = (this.exclTurn || 0) % t.length;
						this.exclTurn = _ + 1, t[_].cb(e);
					}
				}
			}
		},
		lookupPath(e, t = {}) {
			if (!e) throw new FS.ErrnoError(44);
			t.follow_mount ?? (t.follow_mount = !0), PATH.isAbs(e) || (e = FS.cwd() + "/" + e);
			e: for (var r = 0; r < 40; r++) {
				for (var _ = e.split("/").filter((s) => !!s), n = FS.root, a = "/", i = 0; i < _.length; i++) {
					var l = i === _.length - 1;
					if (l && t.parent) break;
					if (_[i] !== ".") {
						if (_[i] === "..") {
							if (a = PATH.dirname(a), FS.isRoot(n)) {
								e = a + "/" + _.slice(i + 1).join("/"), r--;
								continue e;
							} else n = n.parent;
							continue;
						}
						a = PATH.join2(a, _[i]);
						try {
							n = FS.lookupNode(n, _[i]);
						} catch (s) {
							if (s?.errno === 44 && l && t.noent_okay) return { path: a };
							throw s;
						}
						if (FS.isMountpoint(n) && (!l || t.follow_mount) && (n = n.mounted.root), FS.isLink(n.mode) && (!l || t.follow)) {
							if (!n.node_ops.readlink) throw new FS.ErrnoError(52);
							var o = n.node_ops.readlink(n);
							PATH.isAbs(o) || (o = PATH.dirname(a) + "/" + o), e = o + "/" + _.slice(i + 1).join("/");
							continue e;
						}
					}
				}
				return {
					path: a,
					node: n
				};
			}
			throw new FS.ErrnoError(32);
		},
		getPath(e) {
			for (var t;;) {
				if (FS.isRoot(e)) {
					var r = e.mount.mountpoint;
					return t ? r[r.length - 1] !== "/" ? `${r}/${t}` : r + t : r;
				}
				t = t ? `${e.name}/${t}` : e.name, e = e.parent;
			}
		},
		hashName(e, t) {
			for (var r = 0, _ = 0; _ < t.length; _++) r = (r << 5) - r + t.charCodeAt(_) | 0;
			return (e + r >>> 0) % FS.nameTable.length;
		},
		hashAddNode(e) {
			var t = FS.hashName(e.parent.id, e.name);
			e.name_next = FS.nameTable[t], FS.nameTable[t] = e;
		},
		hashRemoveNode(e) {
			var t = FS.hashName(e.parent.id, e.name);
			if (FS.nameTable[t] === e) FS.nameTable[t] = e.name_next;
			else for (var r = FS.nameTable[t]; r;) {
				if (r.name_next === e) {
					r.name_next = e.name_next;
					break;
				}
				r = r.name_next;
			}
		},
		lookupNode(e, t) {
			var r = FS.mayLookup(e);
			if (r) throw new FS.ErrnoError(r);
			for (var _ = FS.hashName(e.id, t), n = FS.nameTable[_]; n; n = n.name_next) {
				var a = n.name;
				if (n.parent.id === e.id && a === t) return n;
			}
			return FS.lookup(e, t);
		},
		createNode(e, t, r, _) {
			var n = new FS.FSNode(e, t, r, _);
			return FS.hashAddNode(n), n;
		},
		destroyNode(e) {
			FS.hashRemoveNode(e);
		},
		isRoot(e) {
			return e === e.parent;
		},
		isMountpoint(e) {
			return !!e.mounted;
		},
		isFile(e) {
			return (e & 61440) === 32768;
		},
		isDir(e) {
			return (e & 61440) === 16384;
		},
		isLink(e) {
			return (e & 61440) === 40960;
		},
		isChrdev(e) {
			return (e & 61440) === 8192;
		},
		isBlkdev(e) {
			return (e & 61440) === 24576;
		},
		isFIFO(e) {
			return (e & 61440) === 4096;
		},
		isSocket(e) {
			return (e & 49152) === 49152;
		},
		flagsToPermissionString(e) {
			var t = [
				"r",
				"w",
				"rw"
			][e & 3];
			return e & 512 && (t += "w"), t;
		},
		nodePermissions(e, t) {
			return FS.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0;
		},
		mayLookup(e) {
			if (!FS.isDir(e.mode)) return 54;
			return FS.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2);
		},
		mayCreate(e, t) {
			if (!FS.isDir(e.mode)) return 54;
			try {
				return FS.lookupNode(e, t), 20;
			} catch {}
			return FS.nodePermissions(e, "wx");
		},
		mayDelete(e, t, r) {
			var _;
			try {
				_ = FS.lookupNode(e, t);
			} catch (a) {
				return a.errno;
			}
			var n = FS.nodePermissions(e, "wx");
			if (n) return n;
			if (r) {
				if (!FS.isDir(_.mode)) return 54;
				if (FS.isRoot(_) || FS.getPath(_) === FS.cwd()) return 10;
			} else if (FS.isDir(_.mode)) return 31;
			return 0;
		},
		mayOpen(e, t) {
			if (!e) return 44;
			if (FS.isLink(e.mode)) return 32;
			var r = FS.flagsToPermissionString(t);
			return FS.isDir(e.mode) && (r !== "r" || t & 576) ? 31 : FS.nodePermissions(e, r);
		},
		checkOpExists(e, t) {
			if (!e) throw new FS.ErrnoError(t);
			return e;
		},
		MAX_OPEN_FDS: 4096,
		nextfd() {
			for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
			throw new FS.ErrnoError(33);
		},
		getStreamChecked(e) {
			var t = FS.getStream(e);
			if (!t) throw new FS.ErrnoError(8);
			return t;
		},
		getStream: (e) => FS.streams[e],
		createStream(e, t = -1) {
			return e = Object.assign(new FS.FSStream(), e), t == -1 && (t = FS.nextfd()), e.fd = t, FS.streams[t] = e, e;
		},
		closeStream(e) {
			FS.streams[e] = null;
		},
		dupStream(e, t = -1) {
			var r = FS.createStream(e, t);
			return r.stream_ops?.dup?.(r), r;
		},
		doSetAttr(e, t, r) {
			var _ = e?.stream_ops.setattr, n = _ ? e : t;
			_ ?? (_ = t.node_ops.setattr), FS.checkOpExists(_, 63);
			try {
				_(n, r);
			} catch (a) {
				throw a instanceof RangeError ? new FS.ErrnoError(22) : a;
			}
		},
		chrdev_stream_ops: {
			open(e) {
				e.stream_ops = FS.getDevice(e.node.rdev).stream_ops, e.stream_ops.open?.(e);
			},
			llseek() {
				throw new FS.ErrnoError(70);
			}
		},
		major: (e) => e >> 8,
		minor: (e) => e & 255,
		makedev: (e, t) => e << 8 | t,
		registerDevice(e, t) {
			FS.devices[e] = { stream_ops: t };
		},
		getDevice: (e) => FS.devices[e],
		getMounts(e) {
			for (var t = [], r = [e]; r.length;) {
				var _ = r.pop();
				t.push(_), r.push(..._.mounts);
			}
			return t;
		},
		syncfs(e, t) {
			typeof e == "function" && (t = e, e = !1), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
			var r = FS.getMounts(FS.root.mount), _ = 0;
			function n(l) {
				return FS.syncFSRequests--, t(l);
			}
			function a(l) {
				if (l) return a.errored ? void 0 : (a.errored = !0, n(l));
				++_ >= r.length && n(null);
			}
			for (var i of r) i.type.syncfs ? i.type.syncfs(i, e, a) : a(null);
		},
		mount(e, t, r) {
			var _ = r === "/", n = !r, a;
			if (_ && FS.root) throw new FS.ErrnoError(10);
			if (!_ && !n) {
				var i = FS.lookupPath(r, { follow_mount: !1 });
				if (r = i.path, a = i.node, FS.isMountpoint(a)) throw new FS.ErrnoError(10);
				if (!FS.isDir(a.mode)) throw new FS.ErrnoError(54);
			}
			var l = {
				type: e,
				opts: t,
				mountpoint: r,
				mounts: []
			}, o = e.mount(l);
			return o.mount = l, l.root = o, _ ? FS.root = o : a && (a.mounted = l, a.mount && a.mount.mounts.push(l)), o;
		},
		unmount(e) {
			var t = FS.lookupPath(e, { follow_mount: !1 });
			if (!FS.isMountpoint(t.node)) throw new FS.ErrnoError(28);
			var r = t.node, _ = r.mounted, n = FS.getMounts(_);
			for (var [a, i] of Object.entries(FS.nameTable)) for (; i;) {
				var l = i.name_next;
				n.includes(i.mount) && FS.destroyNode(i), i = l;
			}
			r.mounted = null;
			var o = r.mount.mounts.indexOf(_);
			r.mount.mounts.splice(o, 1);
		},
		lookup(e, t) {
			return e.node_ops.lookup(e, t);
		},
		mknod(e, t, r) {
			var n = FS.lookupPath(e, { parent: !0 }).node, a = PATH.basename(e);
			if (!a) throw new FS.ErrnoError(28);
			if (a === "." || a === "..") throw new FS.ErrnoError(20);
			var i = FS.mayCreate(n, a);
			if (i) throw new FS.ErrnoError(i);
			if (!n.node_ops.mknod) throw new FS.ErrnoError(63);
			return n.node_ops.mknod(n, a, t, r);
		},
		statfs(e) {
			return FS.statfsNode(FS.lookupPath(e, { follow: !0 }).node);
		},
		statfsStream(e) {
			return FS.statfsNode(e.node);
		},
		statfsNode(e) {
			var t = {
				bsize: 4096,
				frsize: 4096,
				blocks: 1e6,
				bfree: 5e5,
				bavail: 5e5,
				files: FS.nextInode,
				ffree: FS.nextInode - 1,
				fsid: 42,
				flags: 2,
				namelen: 255
			};
			return e.node_ops.statfs && Object.assign(t, e.node_ops.statfs(e.mount.opts.root)), t;
		},
		create(e, t = 438) {
			return t &= 4095, t |= 32768, FS.mknod(e, t, 0);
		},
		mkdir(e, t = 511) {
			return t &= 1023, t |= 16384, FS.mknod(e, t, 0);
		},
		mkdirTree(e, t = 511) {
			var r = e.split("/"), _ = "";
			for (var n of r) if (n) {
				(_ || PATH.isAbs(e)) && (_ += "/"), _ += n;
				try {
					FS.mkdir(_, t);
				} catch (a) {
					if (a.errno != 20) throw a;
				}
			}
		},
		mkdev(e, t, r) {
			return typeof r > "u" && (r = t, t = 438), t |= 8192, FS.mknod(e, t, r);
		},
		symlink(e, t) {
			if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
			var _ = FS.lookupPath(t, { parent: !0 }).node;
			if (!_) throw new FS.ErrnoError(44);
			var n = PATH.basename(t), a = FS.mayCreate(_, n);
			if (a) throw new FS.ErrnoError(a);
			if (!_.node_ops.symlink) throw new FS.ErrnoError(63);
			return _.node_ops.symlink(_, n, e);
		},
		link(e, t, r) {
			var n = FS.lookupPath(t, { parent: !0 }).node;
			if (!n) throw new FS.ErrnoError(44);
			var a = PATH.basename(t), i = FS.mayCreate(n, a);
			if (i) throw new FS.ErrnoError(i);
			if (!n.node_ops.link) throw new FS.ErrnoError(34);
			return n.node_ops.link(n, a, e, r);
		},
		rename(e, t) {
			var r = PATH.dirname(e), _ = PATH.dirname(t), n = PATH.basename(e), a = PATH.basename(t), i = FS.lookupPath(e, { parent: !0 }), l = i.node, o;
			if (i = FS.lookupPath(t, { parent: !0 }), o = i.node, !l || !o) throw new FS.ErrnoError(44);
			if (l.mount !== o.mount) throw new FS.ErrnoError(75);
			var s = FS.lookupNode(l, n), c = PATH_FS.relative(e, _);
			if (c.charAt(0) !== ".") throw new FS.ErrnoError(28);
			if (c = PATH_FS.relative(t, r), c.charAt(0) !== ".") throw new FS.ErrnoError(55);
			var p;
			try {
				p = FS.lookupNode(o, a);
			} catch {}
			if (s !== p) {
				var d = FS.isDir(s.mode), u = FS.mayDelete(l, n, d);
				if (u) throw new FS.ErrnoError(u);
				if (u = p ? FS.mayDelete(o, a, d) : FS.mayCreate(o, a), u) throw new FS.ErrnoError(u);
				if (!l.node_ops.rename) throw new FS.ErrnoError(63);
				if (FS.isMountpoint(s) || p && FS.isMountpoint(p)) throw new FS.ErrnoError(10);
				if (o !== l && (u = FS.nodePermissions(l, "w"), u)) throw new FS.ErrnoError(u);
				FS.hashRemoveNode(s);
				try {
					l.node_ops.rename(s, o, a), p && FS.hashRemoveNode(p), s.parent = o;
				} catch (f) {
					throw f;
				} finally {
					FS.hashAddNode(s);
				}
			}
		},
		rmdir(e) {
			var r = FS.lookupPath(e, { parent: !0 }).node, _ = PATH.basename(e), n = FS.lookupNode(r, _), a = FS.mayDelete(r, _, !0);
			if (a) throw new FS.ErrnoError(a);
			if (!r.node_ops.rmdir) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(n)) throw new FS.ErrnoError(10);
			r.node_ops.rmdir(r, _), FS.destroyNode(n);
		},
		readdir(e) {
			var r = FS.lookupPath(e, { follow: !0 }).node;
			return FS.checkOpExists(r.node_ops.readdir, 54)(r);
		},
		unlink(e) {
			var r = FS.lookupPath(e, { parent: !0 }).node;
			if (!r) throw new FS.ErrnoError(44);
			var _ = PATH.basename(e), n = FS.lookupNode(r, _), a = FS.mayDelete(r, _, !1);
			if (a) throw new FS.ErrnoError(a);
			if (!r.node_ops.unlink) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(n)) throw new FS.ErrnoError(10);
			r.node_ops.unlink(r, _), FS.destroyNode(n);
		},
		readlink(e) {
			var r = FS.lookupPath(e).node;
			if (!r) throw new FS.ErrnoError(44);
			if (!r.node_ops.readlink) throw new FS.ErrnoError(28);
			return r.node_ops.readlink(r);
		},
		stat(e, t = !1) {
			var _ = FS.lookupPath(e, { follow: !t }).node;
			return FS.checkOpExists(_.node_ops.getattr, 63)(_);
		},
		fstat(e) {
			var t = FS.getStreamChecked(e), r = t.node, _ = t.stream_ops.getattr, n = _ ? t : r;
			return _ ?? (_ = r.node_ops.getattr), FS.checkOpExists(_, 63), _(n);
		},
		lstat(e) {
			return FS.stat(e, !0);
		},
		doChmod(e, t, r, _ = !1) {
			FS.doSetAttr(e, t, {
				mode: r & 4095 | t.mode & -4096,
				ctime: Date.now(),
				dontFollow: _
			});
		},
		chmod(e, t, r = !1) {
			var _;
			if (typeof e == "string") _ = FS.lookupPath(e, { follow: !r }).node;
			else _ = e;
			FS.doChmod(null, _, t, r);
		},
		lchmod(e, t) {
			FS.chmod(e, t, !0);
		},
		fchmod(e, t) {
			var r = FS.getStreamChecked(e);
			FS.doChmod(r, r.node, t, !1);
		},
		doChown(e, t, r = !1) {
			FS.doSetAttr(e, t, {
				timestamp: Date.now(),
				dontFollow: r
			});
		},
		chown(e, t, r, _ = !1) {
			var n;
			if (typeof e == "string") n = FS.lookupPath(e, { follow: !_ }).node;
			else n = e;
			FS.doChown(null, n, _);
		},
		lchown(e, t, r) {
			FS.chown(e, t, r, !0);
		},
		fchown(e, t, r) {
			var _ = FS.getStreamChecked(e);
			FS.doChown(_, _.node, !1);
		},
		doTruncate(e, t, r) {
			if (FS.isDir(t.mode)) throw new FS.ErrnoError(31);
			if (!FS.isFile(t.mode)) throw new FS.ErrnoError(28);
			var _ = FS.nodePermissions(t, "w");
			if (_) throw new FS.ErrnoError(_);
			FS.doSetAttr(e, t, {
				size: r,
				timestamp: Date.now()
			});
		},
		truncate(e, t) {
			if (t < 0) throw new FS.ErrnoError(28);
			var r;
			if (typeof e == "string") r = FS.lookupPath(e, { follow: !0 }).node;
			else r = e;
			FS.doTruncate(null, r, t);
		},
		ftruncate(e, t) {
			var r = FS.getStreamChecked(e);
			if (t < 0 || (r.flags & 2097155) === 0) throw new FS.ErrnoError(28);
			FS.doTruncate(r, r.node, t);
		},
		utime(e, t, r, _ = !1) {
			var n = FS.lookupPath(e, { follow: !_ });
			FS.doSetAttr(null, n.node, {
				atime: t,
				mtime: r,
				dontFollow: _
			});
		},
		open(e, t, r = 438) {
			if (e === "") throw new FS.ErrnoError(44);
			t = FS_modeStringToFlags(t), t & 64 ? r = r & 4095 | 32768 : r = 0;
			var _, n;
			if (typeof e == "object") _ = e;
			else {
				n = e.endsWith("/");
				var a = FS.lookupPath(e, {
					follow: !(t & 131072),
					noent_okay: !0
				});
				_ = a.node, e = a.path;
			}
			var i = !1;
			if (t & 64) if (_) {
				if (t & 128) throw new FS.ErrnoError(20);
			} else {
				if (n) throw new FS.ErrnoError(31);
				_ = FS.mknod(e, r | 511, 0), i = !0;
			}
			if (!_) throw new FS.ErrnoError(44);
			if (FS.isChrdev(_.mode) && (t &= -513), t & 65536 && !FS.isDir(_.mode)) throw new FS.ErrnoError(54);
			if (!i) {
				var l = FS.mayOpen(_, t);
				if (l) throw new FS.ErrnoError(l);
			}
			t & 512 && !i && FS.truncate(_, 0), t &= -131713;
			var o = FS.createStream({
				node: _,
				path: FS.getPath(_),
				flags: t,
				seekable: !0,
				position: 0,
				stream_ops: _.stream_ops,
				ungotten: [],
				error: !1
			});
			return o.stream_ops.open && o.stream_ops.open(o), i && FS.chmod(_, r & 511), o;
		},
		close(e) {
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			e.getdents && (e.getdents = null), e.node?.notifyListeners(32);
			try {
				e.stream_ops.close && e.stream_ops.close(e);
			} catch (t) {
				throw t;
			} finally {
				FS.closeStream(e.fd);
			}
			e.fd = null;
		},
		isClosed(e) {
			return e.fd === null;
		},
		llseek(e, t, r) {
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
			if (r != 0 && r != 1 && r != 2) throw new FS.ErrnoError(28);
			return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position;
		},
		read(e, t, r, _, n) {
			if (_ < 0 || n < 0) throw new FS.ErrnoError(28);
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
			if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
			if (!e.stream_ops.read) throw new FS.ErrnoError(28);
			var a = typeof n < "u";
			if (!a) n = e.position;
			else if (!e.seekable) throw new FS.ErrnoError(70);
			var i = e.stream_ops.read(e, t, r, _, n);
			return a || (e.position += i), i;
		},
		write(e, t, r, _, n, a) {
			if (_ < 0 || n < 0) throw new FS.ErrnoError(28);
			if (FS.isClosed(e)) throw new FS.ErrnoError(8);
			if ((e.flags & 2097155) === 0) throw new FS.ErrnoError(8);
			if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
			if (!e.stream_ops.write) throw new FS.ErrnoError(28);
			e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
			var i = typeof n < "u";
			if (!i) n = e.position;
			else if (!e.seekable) throw new FS.ErrnoError(70);
			var l = e.stream_ops.write(e, t, r, _, n, a);
			return i || (e.position += l), l;
		},
		mmap(e, t, r, _, n) {
			if (_ & 2 && !(n & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
			if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
			if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
			if (!t) throw new FS.ErrnoError(28);
			return e.stream_ops.mmap(e, t, r, _, n);
		},
		msync(e, t, r, _, n) {
			return e.stream_ops.msync ? e.stream_ops.msync(e, t, r, _, n) : 0;
		},
		ioctl(e, t, r) {
			if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
			return e.stream_ops.ioctl(e, t, r);
		},
		readFile(e, t = {}) {
			t.flags ?? (t.flags = 0), t.encoding ?? (t.encoding = "binary"), t.encoding !== "utf8" && t.encoding !== "binary" && abort(`Invalid encoding type "${t.encoding}"`);
			var r = FS.open(e, t.flags), n = FS.stat(e).size, a = new Uint8Array(n);
			return FS.read(r, a, 0, n, 0), t.encoding === "utf8" && (a = UTF8ArrayToString(a)), FS.close(r), a;
		},
		writeFile(e, t, r = {}) {
			r.flags ?? (r.flags = 577);
			var _ = FS.open(e, r.flags, r.mode);
			t = FS_fileDataToTypedArray(t), FS.write(_, t, 0, t.byteLength, void 0, r.canOwn), FS.close(_);
		},
		cwd: () => FS.currentPath,
		chdir(e) {
			var t = FS.lookupPath(e, { follow: !0 });
			if (t.node === null) throw new FS.ErrnoError(44);
			if (!FS.isDir(t.node.mode)) throw new FS.ErrnoError(54);
			var r = FS.nodePermissions(t.node, "x");
			if (r) throw new FS.ErrnoError(r);
			FS.currentPath = t.path;
		},
		createDefaultDirectories() {
			FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
		},
		createDefaultDevices() {
			FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), {
				read: () => 0,
				write: (_, n, a, i) => i,
				llseek: () => 0
			}), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
			var e = /* @__PURE__ */ new Uint8Array(1024), t = 0, r = () => (t || (randomFill(e), t = e.byteLength), e[--t]);
			FS.createDevice("/dev", "random", r), FS.createDevice("/dev", "urandom", r), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
		},
		createSpecialDirectories() {
			FS.mkdir("/proc");
			var e = FS.mkdir("/proc/self");
			FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
				var t = FS.createNode(e, "fd", 16895, 73);
				return t.stream_ops = { llseek: MEMFS.stream_ops.llseek }, t.node_ops = {
					lookup(r, _) {
						var n = +_, a = FS.getStreamChecked(n), i = {
							parent: null,
							mount: { mountpoint: "fake" },
							node_ops: { readlink: () => a.path },
							id: n + 1
						};
						return i.parent = i, i;
					},
					readdir() {
						return Array.from(FS.streams.entries()).filter(([r, _]) => _).map(([r, _]) => r.toString());
					}
				}, t;
			} }, {}, "/proc/self/fd");
		},
		createStandardStreams(e, t, r) {
			e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), t ? FS.createDevice("/dev", "stdout", null, t) : FS.symlink("/dev/tty", "/dev/stdout"), r ? FS.createDevice("/dev", "stderr", null, r) : FS.symlink("/dev/tty1", "/dev/stderr"), FS.open("/dev/stdin", 0), FS.open("/dev/stdout", 1), FS.open("/dev/stderr", 1);
		},
		staticInit() {
			FS.nameTable.length = 4096, FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories();
		},
		init(e, t, r) {
			FS.initialized = !0, e ?? (e = Module.stdin), t ?? (t = Module.stdout), r ?? (r = Module.stderr), FS.createStandardStreams(e, t, r);
		},
		quit() {
			FS.initialized = !1, _fflush(0);
			for (var e of FS.streams) e && FS.close(e);
		},
		analyzePath(e, t = !1) {
			try {
				var r = FS.lookupPath(e, { follow: !t });
				e = r.path;
			} catch {}
			var _ = {
				isRoot: !1,
				exists: !1,
				error: 0,
				name: null,
				path: null,
				object: null,
				parentExists: !1,
				parentPath: null,
				parentObject: null
			};
			try {
				r = FS.lookupPath(e, { parent: !0 }), _.parentExists = !0, _.parentPath = r.path, _.parentObject = r.node, _.name = PATH.basename(e), r = FS.lookupPath(e, { follow: !t }), _.exists = !0, _.path = r.path, _.object = r.node, _.name = r.node.name, _.isRoot = r.path === "/";
			} catch (n) {
				_.error = n.errno;
			}
			return _;
		},
		createPath(e, t, r, _) {
			e = typeof e == "string" ? e : FS.getPath(e);
			for (var n = t.split("/").reverse(); n.length;) {
				var a = n.pop();
				if (a) {
					var i = PATH.join2(e, a);
					try {
						FS.mkdir(i);
					} catch (l) {
						if (l.errno != 20) throw l;
					}
					e = i;
				}
			}
			return i;
		},
		createFile(e, t, r, _, n) {
			var a = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t), i = FS_getMode(_, n);
			return FS.create(a, i);
		},
		createDataFile(e, t, r, _, n, a) {
			var i = t;
			e && (e = typeof e == "string" ? e : FS.getPath(e), i = t ? PATH.join2(e, t) : e);
			var l = FS_getMode(_, n), o = FS.create(i, l);
			if (r) {
				r = FS_fileDataToTypedArray(r), FS.chmod(o, l | 146);
				var s = FS.open(o, 577);
				FS.write(s, r, 0, r.length, 0, a), FS.close(s), FS.chmod(o, l);
			}
		},
		createDevice(e, t, r, _) {
			var l;
			var n = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t), a = FS_getMode(!!r, !!_);
			(l = FS.createDevice).major ?? (l.major = 64);
			var i = FS.makedev(FS.createDevice.major++, 0);
			return FS.registerDevice(i, {
				open(o) {
					o.seekable = !1;
				},
				close(o) {
					_?.buffer?.length && _(10);
				},
				read(o, s, c, p, d) {
					for (var u = 0, f = 0; f < p; f++) {
						var m;
						try {
							m = r();
						} catch {
							throw new FS.ErrnoError(29);
						}
						if (m === void 0 && !u) throw new FS.ErrnoError(6);
						if (m == null) break;
						u++, s[c + f] = m;
					}
					return u && (o.node.atime = Date.now()), u;
				},
				write(o, s, c, p, d) {
					for (var u = 0; u < p; u++) try {
						_(s[c + u]);
					} catch {
						throw new FS.ErrnoError(29);
					}
					return p && (o.node.mtime = o.node.ctime = Date.now()), u;
				}
			}), FS.mkdev(n, a, i);
		},
		forceLoadFile(e) {
			if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
			if (globalThis.XMLHttpRequest) abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
			else try {
				e.contents = readBinary(e.url);
			} catch {
				throw new FS.ErrnoError(29);
			}
		},
		createLazyFile(e, t, r, _, n) {
			class a {
				constructor() {
					P$4(this, "lengthKnown", !1);
					P$4(this, "chunks", []);
				}
				get(d) {
					if (!(d > this.length - 1 || d < 0)) {
						var u = d % this.chunkSize, f = d / this.chunkSize | 0;
						return this.getter(f)[u];
					}
				}
				setDataGetter(d) {
					this.getter = d;
				}
				cacheLength() {
					var d = new XMLHttpRequest();
					d.open("HEAD", r, !1), d.send(null), d.status >= 200 && d.status < 300 || d.status === 304 || abort(`Couldn't load ${r}. Status: ${d.status}`);
					var u = Number(d.getResponseHeader("Content-length")), f, m = (f = d.getResponseHeader("Accept-Ranges")) && f === "bytes", y = (f = d.getResponseHeader("Content-Encoding")) && f === "gzip", b = 1048576;
					m || (b = u);
					var k = (M, C) => {
						M > C && abort(`invalid range (${M}, ${C}) or no bytes requested!`), C > u - 1 && abort(`only ${u} bytes available! programmer error!`);
						var v = new XMLHttpRequest();
						return v.open("GET", r, !1), u !== b && v.setRequestHeader("Range", `bytes=${M}-${C}`), v.responseType = "arraybuffer", v.overrideMimeType && v.overrideMimeType("text/plain; charset=x-user-defined"), v.send(null), v.status >= 200 && v.status < 300 || v.status === 304 || abort(`Couldn't load ${r}. Status: ${v.status}`), v.response !== void 0 ? new Uint8Array(v.response || []) : intArrayFromString(v.responseText ?? "", !0);
					}, P = this;
					P.setDataGetter((M) => {
						var C = M * b, v = (M + 1) * b - 1;
						return v = Math.min(v, u - 1), typeof P.chunks[M] > "u" && (P.chunks[M] = k(C, v)), typeof P.chunks[M] > "u" && abort("doXHR failed!"), P.chunks[M];
					}), (y || !u) && (b = u = 1, u = this.getter(0).length, b = u, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = u, this._chunkSize = b, this.lengthKnown = !0;
				}
				get length() {
					return this.lengthKnown || this.cacheLength(), this._length;
				}
				get chunkSize() {
					return this.lengthKnown || this.cacheLength(), this._chunkSize;
				}
			}
			if (globalThis.XMLHttpRequest) {
				ENVIRONMENT_IS_WORKER || abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
				var l = {
					isDevice: !1,
					contents: new a()
				};
			} else l = {
				isDevice: !1,
				url: r
			};
			var o = FS.createFile(e, t, l, _, n);
			l.contents ? o.contents = l.contents : l.url && (o.contents = null, o.url = l.url), Object.defineProperties(o, { usedBytes: { get: function() {
				return this.contents.length;
			} } });
			var s = {};
			for (let [p, d] of Object.entries(o.stream_ops)) s[p] = (...u) => (FS.forceLoadFile(o), d(...u));
			function c(p, d, u, f, m) {
				var y = p.node.contents;
				if (m >= y.length) return 0;
				var b = Math.min(y.length - m, f);
				if (y.slice) for (var k = 0; k < b; k++) d[u + k] = y[m + k];
				else for (k = 0; k < b; k++) d[u + k] = y.get(m + k);
				return b;
			}
			return s.read = (p, d, u, f, m) => (FS.forceLoadFile(o), c(p, d, u, f, m)), s.mmap = (p, d, u) => {
				FS.forceLoadFile(o);
				var f = mmapAlloc(d);
				if (!f) throw new FS.ErrnoError(48);
				return c(p, HEAP8, f, d, u), {
					ptr: f,
					allocated: !0
				};
			}, o.stream_ops = s, o;
		}
	}, findLibraryFS = (e, t) => {
		if (runtimeInitialized) {
			if (PATH.isAbs(e)) try {
				return FS.lookupPath(e), e;
			} catch {
				return;
			}
			var r = (t?.paths || []).map((_) => replaceORIGIN(t?.parentLibPath, _));
			return withStackSave(() => {
				var _ = stackAlloc(512), n = stringToUTF8OnStack(r.join(":")), a = stringToUTF8OnStack(e), i = __emscripten_find_dylib(_, n, a, 512);
				return i ? UTF8ToString(i) : void 0;
			});
		}
	};
	function loadDynamicLibrary(e, t = {
		global: !0,
		nodelete: !0
	}, r, _) {
		var n = LDSO.loadedLibsByName[e];
		if (n) return t.global ? n.global || (n.global = !0, mergeLibSymbols(n.exports, e)) : r && Object.assign(r, n.exports), t.nodelete && n.refcount !== 1 / 0 && (n.refcount = 1 / 0), n.refcount++, _ && (LDSO.loadedLibsByHandle[_] = n), t.loadAsync ? Promise.resolve(!0) : !0;
		n = newDSO(e, _, "loading"), n.refcount = t.nodelete ? 1 / 0 : 1, n.global = t.global;
		function a() {
			if (_) {
				var o = HEAPU32[_ + 28 >> 2], s = HEAPU32[_ + 32 >> 2];
				if (o && s) {
					var c = HEAP8.slice(o, o + s);
					return t.loadAsync ? Promise.resolve(c) : c;
				}
			}
			var p = findLibraryFS(e, t.rpath);
			if (p) return c = FS.readFile(p, { encoding: "binary" }), t.loadAsync ? Promise.resolve(c) : c;
			var d = locateFile(e);
			if (t.loadAsync) return asyncLoad(d);
			if (!readBinary) throw new Error(`${d}: file not found, and synchronous loading of external files is not available`);
			return readBinary(d);
		}
		function i() {
			var o = preloadedWasm[e];
			return o ? t.loadAsync ? Promise.resolve(o) : o : t.loadAsync ? a().then((s) => loadWebAssemblyModule(s, t, e, r, _)) : loadWebAssemblyModule(a(), t, e, r, _);
		}
		function l(o) {
			n.global ? mergeLibSymbols(o, e) : r && Object.assign(r, o), n.exports = o;
		}
		return t.loadAsync ? i().then((o) => (l(o), !0)) : (l(i()), !0);
	}
	var reportUndefinedSymbols = () => {
		for (var [e, t] of Object.entries(GOT)) if (t.value == -1) {
			var r = resolveGlobalSymbol(e, !0).sym;
			if (!r && !t.required) {
				t.value = 0;
				continue;
			}
			if (typeof r == "function") t.value = addFunction(r, r.sig);
			else if (typeof r == "number") t.value = r;
			else if (typeof r.value == "number") t.value = r;
			else throw new Error(`bad export type for '${e}': ${typeof r} (${r})`);
		}
	}, loadDylibs = async () => {
		if (!dynamicLibraries.length) {
			reportUndefinedSymbols();
			return;
		}
		for (var e of dynamicLibraries) await loadDynamicLibrary(e, {
			loadAsync: !0,
			global: !0,
			nodelete: !0,
			allowUndefined: !0
		});
		reportUndefinedSymbols();
	}, noExitRuntime = !1;
	function setValue(e, t, r = "i8") {
		switch (r.endsWith("*") && (r = "*"), r) {
			case "i1":
				HEAP8[e] = t;
				break;
			case "i8":
				HEAP8[e] = t;
				break;
			case "i16":
				HEAP16[e >> 1] = t;
				break;
			case "i32":
				HEAP32[e >> 2] = t;
				break;
			case "i64":
				HEAP64[e >> 3] = BigInt(t);
				break;
			case "float":
				HEAPF32[e >> 2] = t;
				break;
			case "double":
				HEAPF64[e >> 3] = t;
				break;
			case "*":
				HEAPU32[e >> 2] = t;
				break;
			default: abort(`invalid type for setValue: ${r}`);
		}
	}
	var wasmMemory, ___assert_fail = (e, t, r, _) => abort(`Assertion failed: ${UTF8ToString(e)}, at: ` + [
		t ? UTF8ToString(t) : "unknown filename",
		r,
		_ ? UTF8ToString(_) : "unknown function"
	]);
	___assert_fail.sig = "vppip";
	var ___call_sighandler = (e, t) => getWasmTableEntry(e)(t);
	___call_sighandler.sig = "vpi";
	var SOCKFS = {
		websocketArgs: {},
		callbacks: {},
		on(e, t) {
			SOCKFS.callbacks[e] = t;
		},
		emit(e, t) {
			SOCKFS.callbacks[e]?.(t);
			var r = e === "error" ? t[0] : t, _ = {
				message: 65,
				open: 4,
				connection: 65,
				close: 17,
				error: 8
			}[e];
			_ && FS.getStream(r)?.node.notifyListeners(_);
		},
		mount(e) {
			return SOCKFS.websocketArgs = Module.websocket || {}, (Module.websocket ?? (Module.websocket = {})).on = SOCKFS.on, FS.createNode(null, "/", 16895, 0);
		},
		createSocket(e, t, r) {
			if (e != 2) throw new FS.ErrnoError(5);
			if (t &= -526337, t != 1 && t != 2) throw new FS.ErrnoError(28);
			if (t == 1 && r && r != 6) throw new FS.ErrnoError(66);
			var n = {
				family: e,
				type: t,
				protocol: r,
				server: null,
				error: null,
				peers: {},
				pending: [],
				recv_queue: [],
				sock_ops: SOCKFS.websocket_sock_ops
			}, a = SOCKFS.nextname(), i = FS.createNode(SOCKFS.root, a, 49152, 0);
			i.sock = n;
			return n.stream = FS.createStream({
				path: a,
				node: i,
				flags: 2,
				seekable: !1,
				stream_ops: SOCKFS.stream_ops
			}), n;
		},
		getSocket(e) {
			var t = FS.getStream(e);
			return !t || !FS.isSocket(t.node.mode) ? null : t.node.sock;
		},
		stream_ops: {
			getattr(e) {
				return {
					dev: 1,
					ino: e.node.id,
					mode: 49663,
					nlink: 1,
					uid: 0,
					gid: 0,
					rdev: 0,
					size: 0,
					atime: /* @__PURE__ */ new Date(0),
					mtime: /* @__PURE__ */ new Date(0),
					ctime: /* @__PURE__ */ new Date(0),
					blksize: 4096,
					blocks: 0
				};
			},
			poll(e) {
				var t = e.node.sock;
				return t.sock_ops.poll(t);
			},
			ioctl(e, t, r) {
				var _ = e.node.sock;
				return _.sock_ops.ioctl(_, t, r);
			},
			read(e, t, r, _, n) {
				var a = e.node.sock, i = a.sock_ops.recvmsg(a, _);
				return i ? (t.set(i.buffer, r), i.buffer.length) : 0;
			},
			write(e, t, r, _, n) {
				var a = e.node.sock;
				return a.sock_ops.sendmsg(a, t, r, _);
			},
			close(e) {
				var t = e.node.sock;
				t.sock_ops.close(t);
			}
		},
		nextname() {
			return SOCKFS.nextname.current || (SOCKFS.nextname.current = 0), `socket[${SOCKFS.nextname.current++}]`;
		},
		websocket_sock_ops: {
			createPeer(e, t, r) {
				var _;
				if (typeof t == "object" && (_ = t, t = null, r = null), _) if (_._socket) t = _._socket.remoteAddress, r = _._socket.remotePort;
				else {
					var n = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_.url);
					if (!n) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
					t = n[1], r = parseInt(n[2], 10);
				}
				else try {
					var a = "ws://".replace("#", "//"), i = "binary", l = void 0;
					if (SOCKFS.websocketArgs.url && (a = SOCKFS.websocketArgs.url), SOCKFS.websocketArgs.subprotocol ? i = SOCKFS.websocketArgs.subprotocol : SOCKFS.websocketArgs.subprotocol === null && (i = "null"), a === "ws://" || a === "wss://") {
						var o = t.split("/");
						a = a + o[0] + ":" + r + "/" + o.slice(1).join("/");
					}
					i !== "null" && (i = i.replace(/^ +| +$/g, "").split(/ *, */), l = i);
					var s;
					ENVIRONMENT_IS_NODE ? s = require("ws") : s = WebSocket, _ = new s(a, l), _.binaryType = "arraybuffer";
				} catch {
					throw new FS.ErrnoError(23);
				}
				var c = {
					addr: t,
					port: r,
					socket: _,
					msg_send_queue: []
				};
				return SOCKFS.websocket_sock_ops.addPeer(e, c), SOCKFS.websocket_sock_ops.handlePeerEvents(e, c), e.type === 2 && typeof e.sport < "u" && c.msg_send_queue.push(new Uint8Array([
					255,
					255,
					255,
					255,
					112,
					111,
					114,
					116,
					(e.sport & 65280) >> 8,
					e.sport & 255
				])), c;
			},
			getPeer(e, t, r) {
				return e.peers[t + ":" + r];
			},
			addPeer(e, t) {
				e.peers[t.addr + ":" + t.port] = t;
			},
			removePeer(e, t) {
				delete e.peers[t.addr + ":" + t.port];
			},
			handlePeerEvents(e, t) {
				var r = !0;
				function _() {
					e.connecting = !1, SOCKFS.emit("open", e.stream.fd);
					try {
						for (var a = t.msg_send_queue.shift(); a;) t.socket.send(a), a = t.msg_send_queue.shift();
					} catch {
						t.socket.close();
					}
				}
				function n(a) {
					if (typeof a == "string") a = new TextEncoder().encode(a);
					else {
						if (a.byteLength == 0) return;
						a = new Uint8Array(a);
					}
					var l = r;
					if (r = !1, l && a.length === 10 && a[0] === 255 && a[1] === 255 && a[2] === 255 && a[3] === 255 && a[4] === 112 && a[5] === 111 && a[6] === 114 && a[7] === 116) {
						var o = a[8] << 8 | a[9];
						SOCKFS.websocket_sock_ops.removePeer(e, t), t.port = o, SOCKFS.websocket_sock_ops.addPeer(e, t);
						return;
					}
					e.recv_queue.push({
						addr: t.addr,
						port: t.port,
						data: a
					}), SOCKFS.emit("message", e.stream.fd);
				}
				if (ENVIRONMENT_IS_NODE) {
					t.socket.on("open", _), t.socket.on("message", (a, i) => {
						i && n(new Uint8Array(a).buffer);
					}), t.socket.on("close", () => SOCKFS.emit("close", e.stream.fd)), t.socket.on("error", () => {
						e.error = 14, SOCKFS.emit("error", [
							e.stream.fd,
							e.error,
							"ECONNREFUSED: Connection refused"
						]);
					});
					return;
				}
				t.socket.onopen = _, t.socket.onclose = () => SOCKFS.emit("close", e.stream.fd), t.socket.onmessage = (a) => n(a.data), t.socket.onerror = () => {
					e.error = 14, SOCKFS.emit("error", [
						e.stream.fd,
						e.error,
						"ECONNREFUSED: Connection refused"
					]);
				};
			},
			poll(e) {
				if (e.type === 1 && (e.server || e.listening)) return e.error ? 8 : e.server ? e.pending.length ? 65 : 0 : 16;
				var t = 0;
				e.error && (t |= 8);
				var r = e.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
				return (e.recv_queue.length || !r || r && r.socket.readyState === r.socket.CLOSING || r && r.socket.readyState === r.socket.CLOSED) && (t |= 65), (!r || r && r.socket.readyState === r.socket.OPEN) && (t |= 4), (r && r.socket.readyState === r.socket.CLOSING || r && r.socket.readyState === r.socket.CLOSED) && (e.connecting ? t |= 4 : t |= 8208), t;
			},
			ioctl(e, t, r) {
				switch (t) {
					case 21531:
						var _ = 0;
						return e.recv_queue.length && (_ = e.recv_queue[0].data.length), HEAP32[r >> 2] = _, 0;
					case 21537: return HEAP32[r >> 2] ? e.stream.flags |= 2048 : e.stream.flags &= -2049, 0;
					default: return 28;
				}
			},
			close(e) {
				if (e.listening = !1, e.server) {
					try {
						e.server.close();
					} catch {}
					e.server = null;
				}
				for (var t of Object.values(e.peers)) {
					try {
						t.socket.close();
					} catch {}
					SOCKFS.websocket_sock_ops.removePeer(e, t);
				}
				return 0;
			},
			bind(e, t, r) {
				if (typeof e.saddr < "u" || typeof e.sport < "u") throw new FS.ErrnoError(28);
				if (e.saddr = t, e.sport = r, e.type === 2) {
					e.server && (e.server.close(), e.server = null);
					try {
						e.sock_ops.listen(e, 0);
					} catch (_) {
						if (_.name !== "ErrnoError" || _.errno !== 138) throw _;
					}
				}
			},
			connect(e, t, r) {
				if (e.server) throw new FS.ErrnoError(138);
				if (typeof e.daddr < "u" && typeof e.dport < "u") {
					var _ = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
					if (_) throw _.socket.readyState === _.socket.CONNECTING ? new FS.ErrnoError(7) : new FS.ErrnoError(30);
				}
				var n = SOCKFS.websocket_sock_ops.createPeer(e, t, r);
				e.daddr = n.addr, e.dport = n.port, e.connecting = !0;
			},
			listen(e, t) {
				if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(138);
				if (e.server || e.listening) throw new FS.ErrnoError(28);
				var r = require("ws").Server, _ = e.saddr;
				e.server = new r({
					host: _,
					port: e.sport
				}), e.listening = !0, SOCKFS.emit("listen", e.stream.fd), e.server.on("connection", (n) => {
					if (e.type === 1) {
						var a = SOCKFS.createSocket(e.family, e.type, e.protocol), i = SOCKFS.websocket_sock_ops.createPeer(a, n);
						a.daddr = i.addr, a.dport = i.port, e.pending.push(a), SOCKFS.emit("connection", a.stream.fd), e.stream.node.notifyListeners(65);
					} else SOCKFS.websocket_sock_ops.createPeer(e, n), SOCKFS.emit("connection", e.stream.fd);
				}), e.server.on("close", () => {
					SOCKFS.emit("close", e.stream.fd), e.server = null;
				}), e.server.on("error", (n) => {
					if (e.error = n.code && ERRNO_CODES[n.code] || 29, SOCKFS.emit("error", [
						e.stream.fd,
						e.error,
						n.message || n.code || "Server error"
					]), e.server) {
						try {
							e.server.close();
						} catch {}
						e.server = null;
					}
				});
			},
			accept(e) {
				if (e.error) {
					var t = e.error;
					throw e.error = null, new FS.ErrnoError(t);
				}
				if (!e.server || !e.pending.length) throw new FS.ErrnoError(28);
				var r = e.pending.shift();
				return r.stream.flags = e.stream.flags, r;
			},
			getname(e, t) {
				var r, _;
				if (t) {
					if (e.daddr === void 0 || e.dport === void 0) throw new FS.ErrnoError(53);
					r = e.daddr, _ = e.dport;
				} else r = e.saddr || 0, _ = e.sport || 0;
				return {
					addr: r,
					port: _
				};
			},
			sendmsg(e, t, r, _, n, a) {
				if (e.type === 2) {
					if ((n === void 0 || a === void 0) && (n = e.daddr, a = e.dport), n === void 0 || a === void 0) throw new FS.ErrnoError(17);
				} else n = e.daddr, a = e.dport;
				var i = SOCKFS.websocket_sock_ops.getPeer(e, n, a);
				if (e.type === 1 && (!i || i.socket.readyState === i.socket.CLOSING || i.socket.readyState === i.socket.CLOSED)) throw new FS.ErrnoError(53);
				ArrayBuffer.isView(t) && (r += t.byteOffset, t = t.buffer);
				var l = t.slice(r, r + _);
				if (!i || i.socket.readyState !== i.socket.OPEN) return e.type === 2 && (!i || i.socket.readyState === i.socket.CLOSING || i.socket.readyState === i.socket.CLOSED) && (i = SOCKFS.websocket_sock_ops.createPeer(e, n, a)), i.msg_send_queue.push(l), _;
				try {
					return i.socket.send(l), _;
				} catch {
					throw new FS.ErrnoError(28);
				}
			},
			recvmsg(e, t, r) {
				if (e.type === 1 && e.server) throw new FS.ErrnoError(53);
				var _ = r & 2, n = e.recv_queue[0];
				if (!n) {
					if (e.type === 1) {
						var a = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
						if (!a) throw new FS.ErrnoError(53);
						if (a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED) return null;
						throw new FS.ErrnoError(6);
					}
					throw new FS.ErrnoError(6);
				}
				var i = n.data.byteLength || n.data.length, l = n.data.byteOffset || 0, o = n.data.buffer || n.data, s = Math.min(t, i), c = {
					buffer: new Uint8Array(o, l, s),
					addr: n.addr,
					port: n.port
				};
				if (_) return c;
				if (e.recv_queue.shift(), e.type === 1 && s < i) {
					var p = i - s;
					n.data = new Uint8Array(o, l + s, p), e.recv_queue.unshift(n);
				}
				return c;
			}
		}
	}, getSocketFromFD = (e) => {
		var t = SOCKFS.getSocket(e);
		if (!t) throw new FS.ErrnoError(8);
		return t;
	}, inetPton4 = (e) => {
		for (var t = e.split("."), r = 0; r < 4; r++) {
			var _ = Number(t[r]);
			if (isNaN(_)) return null;
			t[r] = _;
		}
		return (t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24) >>> 0;
	}, inetPton6 = (e) => {
		var t, r, _, n, a = [];
		if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(e)) return null;
		if (e === "::") return [
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		];
		for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(/* @__PURE__ */ new RegExp("[.]", "g"), ":"), t = e.split(":"), t[t.length - 4] = Number(t[t.length - 4]) + Number(t[t.length - 3]) * 256, t[t.length - 3] = Number(t[t.length - 2]) + Number(t[t.length - 1]) * 256, t = t.slice(0, t.length - 2)) : t = e.split(":"), _ = 0, n = 0, r = 0; r < t.length; r++) if (typeof t[r] == "string") if (t[r] === "Z") {
			for (n = 0; n < 8 - t.length + 1; n++) a[r + n] = 0;
			_ = n - 1;
		} else a[r + _] = _htons(parseInt(t[r], 16));
		else a[r + _] = t[r];
		return [
			a[1] << 16 | a[0],
			a[3] << 16 | a[2],
			a[5] << 16 | a[4],
			a[7] << 16 | a[6]
		];
	}, DNS = {
		address_map: {
			id: 1,
			addrs: {},
			names: {}
		},
		lookup_name(e) {
			var t = inetPton4(e);
			if (t !== null || (t = inetPton6(e), t !== null)) return e;
			var r;
			if (DNS.address_map.addrs[e]) r = DNS.address_map.addrs[e];
			else {
				var _ = DNS.address_map.id++;
				r = "172.29." + (_ & 255) + "." + (_ & 65280), DNS.address_map.names[r] = e, DNS.address_map.addrs[e] = r;
			}
			return r;
		},
		lookup_addr(e) {
			return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
		}
	}, writeSockaddr = (e, t, r, _, n) => {
		switch (t) {
			case 2:
				r = inetPton4(DNS.lookup_name(r)), zeroMemory(e, 16), n && (HEAP32[n >> 2] = 16), HEAP16[e >> 1] = t, HEAP32[e + 4 >> 2] = r, HEAP16[e + 2 >> 1] = _htons(_);
				break;
			case 10:
				r = inetPton6(DNS.lookup_name(r)), zeroMemory(e, 28), n && (HEAP32[n >> 2] = 28), HEAP32[e >> 2] = t, HEAP32[e + 8 >> 2] = r[0], HEAP32[e + 12 >> 2] = r[1], HEAP32[e + 16 >> 2] = r[2], HEAP32[e + 20 >> 2] = r[3], HEAP16[e + 2 >> 1] = _htons(_);
				break;
			default: return 5;
		}
		return 0;
	};
	function ___syscall_accept4(e, t, r) {
		try {
			var _ = getSocketFromFD(e), n = _.sock_ops.accept(_);
			return t && writeSockaddr(t, n.family, n.daddr, n.dport, r), n.stream.fd;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_accept4.sig = "iippiii";
	var inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetNtop6 = (e) => {
		var t = "", r = 0, _ = 0, n = 0, a = 0, i = 0, l = 0, o = [
			e[0] & 65535,
			e[0] >> 16,
			e[1] & 65535,
			e[1] >> 16,
			e[2] & 65535,
			e[2] >> 16,
			e[3] & 65535,
			e[3] >> 16
		], s = !0, c = "";
		for (l = 0; l < 5; l++) if (o[l]) {
			s = !1;
			break;
		}
		if (s) {
			if (c = inetNtop4(o[6] | o[7] << 16), o[5] === -1) return t = "::ffff:", t += c, t;
			if (!o[5]) return t = "::", c === "0.0.0.0" && (c = ""), c === "0.0.0.1" && (c = "1"), t += c, t;
		}
		for (r = 0; r < 8; r++) o[r] || (r - n > 1 && (i = 0), n = r, i++), i > _ && (_ = i, a = r - _ + 1);
		for (r = 0; r < 8; r++) {
			if (_ > 1 && !o[r] && r >= a && r < a + _) {
				r === a && (t += ":", a || (t += ":"));
				continue;
			}
			t += Number(_ntohs(o[r] & 65535)).toString(16), t += r < 7 ? ":" : "";
		}
		return t;
	}, readSockaddr = (e, t) => {
		var r = HEAP16[e >> 1], _ = _ntohs(HEAPU16[e + 2 >> 1]), n;
		switch (r) {
			case 2:
				if (t !== 16) return { errno: 28 };
				n = HEAP32[e + 4 >> 2], n = inetNtop4(n);
				break;
			case 10:
				if (t !== 28) return { errno: 28 };
				n = [
					HEAP32[e + 8 >> 2],
					HEAP32[e + 12 >> 2],
					HEAP32[e + 16 >> 2],
					HEAP32[e + 20 >> 2]
				], n = inetNtop6(n);
				break;
			default: return { errno: 5 };
		}
		return {
			family: r,
			addr: n,
			port: _
		};
	}, getSocketAddress = (e, t) => {
		var r = readSockaddr(e, t);
		if (r.errno) throw new FS.ErrnoError(r.errno);
		return r.addr = DNS.lookup_addr(r.addr) || r.addr, r;
	};
	function ___syscall_bind(e, t, r) {
		try {
			var _ = getSocketFromFD(e), n = getSocketAddress(t, r);
			return _.sock_ops.bind(_, n.addr, n.port), 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_bind.sig = "iipiiii";
	var SYSCALLS = {
		currentUmask: 18,
		calculateAt(e, t, r = !1) {
			if (PATH.isAbs(t)) return t;
			var _;
			if (e === -100) _ = FS.cwd();
			else _ = SYSCALLS.getStreamFromFD(e).path;
			if (t.length == 0) {
				if (!r) throw new FS.ErrnoError(44);
				return _;
			}
			return _ + "/" + t;
		},
		writeStat(e, t) {
			HEAPU32[e >> 2] = t.dev, HEAPU32[e + 4 >> 2] = t.mode, HEAPU32[e + 8 >> 2] = t.nlink, HEAPU32[e + 12 >> 2] = t.uid, HEAPU32[e + 16 >> 2] = t.gid, HEAPU32[e + 20 >> 2] = t.rdev, HEAP64[e + 24 >> 3] = BigInt(t.size), HEAP32[e + 32 >> 2] = 4096, HEAP32[e + 36 >> 2] = t.blocks;
			var r = t.atime.getTime(), _ = t.mtime.getTime(), n = t.ctime.getTime();
			return HEAP64[e + 40 >> 3] = BigInt(Math.floor(r / 1e3)), HEAPU32[e + 48 >> 2] = r % 1e3 * 1e3 * 1e3, HEAP64[e + 56 >> 3] = BigInt(Math.floor(_ / 1e3)), HEAPU32[e + 64 >> 2] = _ % 1e3 * 1e3 * 1e3, HEAP64[e + 72 >> 3] = BigInt(Math.floor(n / 1e3)), HEAPU32[e + 80 >> 2] = n % 1e3 * 1e3 * 1e3, HEAP64[e + 88 >> 3] = BigInt(t.ino), 0;
		},
		writeStatFs(e, t) {
			HEAPU32[e + 4 >> 2] = t.bsize, HEAPU32[e + 60 >> 2] = t.bsize, HEAP64[e + 8 >> 3] = BigInt(t.blocks), HEAP64[e + 16 >> 3] = BigInt(t.bfree), HEAP64[e + 24 >> 3] = BigInt(t.bavail), HEAP64[e + 32 >> 3] = BigInt(t.files), HEAP64[e + 40 >> 3] = BigInt(t.ffree), HEAPU32[e + 48 >> 2] = t.fsid, HEAPU32[e + 64 >> 2] = t.flags, HEAPU32[e + 56 >> 2] = t.namelen;
		},
		doMsync(e, t, r, _, n) {
			if (!FS.isFile(t.node.mode)) throw new FS.ErrnoError(43);
			if (_ & 2) return 0;
			var a = HEAPU8.subarray(e, e + r);
			FS.msync(t, a, n, r, _);
		},
		getStreamFromFD(e) {
			return FS.getStreamChecked(e);
		},
		varargs: void 0,
		getStr(e) {
			return UTF8ToString(e);
		}
	};
	function ___syscall_chdir(e) {
		try {
			return e = SYSCALLS.getStr(e), FS.chdir(e), 0;
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_chdir.sig = "ip";
	function ___syscall_chmod(e, t) {
		try {
			return e = SYSCALLS.getStr(e), FS.chmod(e, t), 0;
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_chmod.sig = "ipi";
	function ___syscall_connect(e, t, r) {
		try {
			var _ = getSocketFromFD(e), n = getSocketAddress(t, r);
			return _.sock_ops.connect(_, n.addr, n.port), 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_connect.sig = "iipiiii";
	function ___syscall_dup(e) {
		try {
			var t = SYSCALLS.getStreamFromFD(e);
			return FS.dupStream(t).fd;
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_dup.sig = "ii";
	function ___syscall_dup3(e, t, r) {
		try {
			if (e === t || r & -524289) return -28;
			var _ = SYSCALLS.getStreamFromFD(e);
			if (t < 0 || t >= FS.MAX_OPEN_FDS) return -8;
			var n = FS.getStream(t);
			n && FS.close(n);
			var a = FS.dupStream(_, t);
			return r & 524288 && (a.flags |= 524288), a.fd;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_dup3.sig = "iiii";
	function ___syscall_faccessat(e, t, r) {
		try {
			if (t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), r & -8) return -28;
			var n = FS.lookupPath(t, { follow: !0 }).node;
			if (!n) return -44;
			var a = "";
			return r & 4 && (a += "r"), r & 2 && (a += "w"), r & 1 && (a += "x"), a && FS.nodePermissions(n, a) ? -2 : 0;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_faccessat.sig = "iipii";
	var INT53_MAX = 9007199254740992, INT53_MIN = -9007199254740992, bigintToI53Checked = (e) => e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
	function ___syscall_fadvise64(e, t, r) {
		t = bigintToI53Checked(t), r = bigintToI53Checked(r);
		try {
			return SYSCALLS.getStreamFromFD(e).seekable ? 0 : -70;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_fadvise64.sig = "iijji";
	function ___syscall_fallocate(e, t, r, _) {
		r = bigintToI53Checked(r), _ = bigintToI53Checked(_);
		try {
			if (isNaN(r) || isNaN(_)) return -22;
			if (t != 0) return -138;
			if (r < 0 || _ < 0) return -28;
			if (!SYSCALLS.getStreamFromFD(e).seekable) return -70;
			var n = FS.fstat(e).size, a = r + _;
			return a > n && FS.ftruncate(e, a), 0;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_fallocate.sig = "iiijj";
	function ___syscall_fchmod(e, t) {
		try {
			return FS.fchmod(e, t), 0;
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_fchmod.sig = "iii";
	function ___syscall_fchmodat2(e, t, r, _) {
		try {
			var n = _ & 256;
			return t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), FS.chmod(t, r, n), 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_fchmodat2.sig = "iipii";
	function ___syscall_fchown32(e, t, r) {
		try {
			return FS.fchown(e, t, r), 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_fchown32.sig = "iiii";
	function ___syscall_fchownat(e, t, r, _, n) {
		try {
			t = SYSCALLS.getStr(t);
			var a = n & 256;
			return n &= -257, t = SYSCALLS.calculateAt(e, t), (a ? FS.lchown : FS.chown)(t, r, _), 0;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_fchownat.sig = "iipiii";
	var syscallGetVarargI = () => {
		var e = HEAP32[+SYSCALLS.varargs >> 2];
		return SYSCALLS.varargs += 4, e;
	}, syscallGetVarargP = syscallGetVarargI;
	function ___syscall_fcntl64(e, t, r) {
		SYSCALLS.varargs = r;
		try {
			var _ = SYSCALLS.getStreamFromFD(e);
			switch (t) {
				case 0:
					var n = syscallGetVarargI();
					if (n < 0) return -28;
					for (; FS.streams[n];) n++;
					return FS.dupStream(_, n).fd;
				case 1:
				case 2: return 0;
				case 3: return _.flags;
				case 4: return n = syscallGetVarargI(), _.flags = _.flags & -289793 | n & 289792, 0;
				case 12: return n = syscallGetVarargP(), HEAP16[n + 0 >> 1] = 2, 0;
				case 13:
				case 14: return 0;
			}
			return -28;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_fcntl64.sig = "iiip";
	function ___syscall_fdatasync(e) {
		try {
			return SYSCALLS.getStreamFromFD(e), 0;
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_fdatasync.sig = "ii";
	function ___syscall_fstat64(e, t) {
		try {
			return SYSCALLS.writeStat(t, FS.fstat(e));
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_fstat64.sig = "iip";
	function ___syscall_ftruncate64(e, t) {
		t = bigintToI53Checked(t);
		try {
			return isNaN(t) ? -22 : (FS.ftruncate(e, t), 0);
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_ftruncate64.sig = "iij";
	function ___syscall_getcwd(e, t) {
		try {
			if (!t) return -28;
			var r = FS.cwd(), _ = lengthBytesUTF8(r) + 1;
			return t < _ ? -68 : (stringToUTF8(r, e, t), _);
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_getcwd.sig = "ipp";
	function ___syscall_getdents64(e, t, r) {
		try {
			var _ = SYSCALLS.getStreamFromFD(e);
			_.getdents || (_.getdents = FS.readdir(_.path));
			for (var n = 0, a = FS.llseek(_, 0, 1), i = Math.floor(a / 280), l = Math.min(_.getdents.length, i + Math.floor(r / 280)), o = i; o < l; o++) {
				var s, c, p = _.getdents[o];
				if (p === ".") s = _.node.id, c = 4;
				else if (p === "..") s = FS.lookupPath(_.path, { parent: !0 }).node.id, c = 4;
				else {
					var u;
					try {
						u = FS.lookupNode(_.node, p);
					} catch (f) {
						if (f?.errno === 28) continue;
						throw f;
					}
					s = u.id, c = FS.isChrdev(u.mode) ? 2 : FS.isDir(u.mode) ? 4 : FS.isLink(u.mode) ? 10 : 8;
				}
				HEAP64[t + n >> 3] = BigInt(s), HEAP64[t + n + 8 >> 3] = BigInt((o + 1) * 280), HEAP16[t + n + 16 >> 1] = 280, HEAP8[t + n + 18] = c, stringToUTF8(p, t + n + 19, 256), n += 280;
			}
			return FS.llseek(_, o * 280, 0), n;
		} catch (f) {
			if (typeof FS > "u" || f.name !== "ErrnoError") throw f;
			return -f.errno;
		}
	}
	___syscall_getdents64.sig = "iipp";
	var ___syscall_getegid32 = () => 0;
	___syscall_getegid32.sig = "i";
	var ___syscall_geteuid32 = () => 0;
	___syscall_geteuid32.sig = "i";
	var ___syscall_getgid32 = () => 0;
	___syscall_getgid32.sig = "i";
	var ___syscall_getuid32 = () => 0;
	___syscall_getuid32.sig = "i";
	function ___syscall_ioctl(e, t, r) {
		SYSCALLS.varargs = r;
		try {
			var _ = SYSCALLS.getStreamFromFD(e);
			switch (t) {
				case 21509: return _.tty ? 0 : -59;
				case 21505:
					if (!_.tty) return -59;
					if (_.tty.ops.ioctl_tcgets) {
						var n = _.tty.ops.ioctl_tcgets(_), a = syscallGetVarargP();
						HEAP32[a >> 2] = n.c_iflag || 0, HEAP32[a + 4 >> 2] = n.c_oflag || 0, HEAP32[a + 8 >> 2] = n.c_cflag || 0, HEAP32[a + 12 >> 2] = n.c_lflag || 0;
						for (var i = 0; i < 32; i++) HEAP8[a + i + 17] = n.c_cc[i] || 0;
						return 0;
					}
					return 0;
				case 21510:
				case 21511:
				case 21512: return _.tty ? 0 : -59;
				case 21506:
				case 21507:
				case 21508:
					if (!_.tty) return -59;
					if (_.tty.ops.ioctl_tcsets) {
						a = syscallGetVarargP();
						var l = HEAP32[a >> 2], o = HEAP32[a + 4 >> 2], s = HEAP32[a + 8 >> 2], c = HEAP32[a + 12 >> 2], p = [];
						for (i = 0; i < 32; i++) p.push(HEAP8[a + i + 17]);
						return _.tty.ops.ioctl_tcsets(_.tty, t, {
							c_iflag: l,
							c_oflag: o,
							c_cflag: s,
							c_lflag: c,
							c_cc: p
						});
					}
					return 0;
				case 21519: return _.tty ? (a = syscallGetVarargP(), HEAP32[a >> 2] = 0, 0) : -59;
				case 21520: return _.tty ? -28 : -59;
				case 21537:
				case 21531: return a = syscallGetVarargP(), FS.ioctl(_, t, a);
				case 21523:
					if (!_.tty) return -59;
					if (_.tty.ops.ioctl_tiocgwinsz) {
						var d = _.tty.ops.ioctl_tiocgwinsz(_.tty);
						a = syscallGetVarargP(), HEAP16[a >> 1] = d[0], HEAP16[a + 2 >> 1] = d[1];
					}
					return 0;
				case 21524: return _.tty ? 0 : -59;
				case 21515: return _.tty ? 0 : -59;
				default: return -28;
			}
		} catch (u) {
			if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
			return -u.errno;
		}
	}
	___syscall_ioctl.sig = "iiip";
	function ___syscall_linkat(e, t, r, _, n) {
		try {
			return t = SYSCALLS.getStr(t), _ = SYSCALLS.getStr(_), t = SYSCALLS.calculateAt(e, t), _ = SYSCALLS.calculateAt(r, _), FS.link(t, _, n), 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_linkat.sig = "iipipi";
	function ___syscall_listen(e, t) {
		try {
			var r = getSocketFromFD(e);
			return r.sock_ops.listen(r, t), 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_listen.sig = "iiiiiii";
	function ___syscall_lstat64(e, t) {
		try {
			return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(t, FS.lstat(e));
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_lstat64.sig = "ipp";
	function ___syscall_mkdirat(e, t, r) {
		try {
			return t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), r &= ~SYSCALLS.currentUmask, FS.mkdir(t, r), 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_mkdirat.sig = "iipi";
	function ___syscall_newfstatat(e, t, r, _) {
		try {
			t = SYSCALLS.getStr(t);
			var n = _ & 256, a = _ & 4096;
			return _ &= -6401, t = SYSCALLS.calculateAt(e, t, a), SYSCALLS.writeStat(r, n ? FS.lstat(t) : FS.stat(t));
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return -i.errno;
		}
	}
	___syscall_newfstatat.sig = "iippi";
	function ___syscall_openat(e, t, r, _) {
		SYSCALLS.varargs = _;
		try {
			t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t);
			var n = _ ? syscallGetVarargI() : 0;
			return r & 64 && (n &= ~SYSCALLS.currentUmask), FS.open(t, r, n).fd;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return -a.errno;
		}
	}
	___syscall_openat.sig = "iipip";
	var PIPEFS = {
		BUCKET_BUFFER_SIZE: 8192,
		mount(e) {
			return FS.createNode(null, "/", 16895, 0);
		},
		createPipe() {
			var e = {
				buckets: [],
				writerCount: 1,
				writeClosed: !1,
				readerCount: 1,
				readClosed: !1,
				timestamp: /* @__PURE__ */ new Date()
			};
			e.buckets.push({
				buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
				offset: 0,
				roffset: 0
			});
			var t = PIPEFS.nextname(), r = PIPEFS.nextname(), _ = FS.createNode(PIPEFS.root, t, 4096, 0), n = FS.createNode(PIPEFS.root, r, 4096, 0);
			_.pipe = e, n.pipe = e, e.readNode = _, e.writeNode = n;
			var a = FS.createStream({
				path: t,
				node: _,
				flags: 0,
				seekable: !1,
				stream_ops: PIPEFS.stream_ops
			});
			_.stream = a;
			var i = FS.createStream({
				path: r,
				node: n,
				flags: 1,
				seekable: !1,
				stream_ops: PIPEFS.stream_ops
			});
			return n.stream = i, {
				readable_fd: a.fd,
				writable_fd: i.fd
			};
		},
		stream_ops: {
			getattr(e) {
				var t = e.node, r = t.pipe.timestamp;
				return {
					dev: 14,
					ino: t.id,
					mode: 4480,
					nlink: 1,
					uid: 0,
					gid: 0,
					rdev: 0,
					size: 0,
					atime: r,
					mtime: r,
					ctime: r,
					blksize: 4096,
					blocks: 0
				};
			},
			poll(e) {
				var t = e.node.pipe;
				if ((e.flags & 2097155) === 1) {
					var r = 260;
					return t.readClosed && (r |= 8), r;
				}
				r = 0;
				for (var _ of t.buckets) if (_.offset - _.roffset > 0) {
					r = 65;
					break;
				}
				return t.writeClosed && (r |= 17), r;
			},
			dup(e) {
				var t = e.node.pipe;
				(e.flags & 2097155) === 1 ? t.writerCount++ : t.readerCount++;
			},
			ioctl(e, t, r) {
				if (t == 21531) {
					var _ = e.node.pipe, n = 0;
					for (var a of _.buckets) n += a.offset - a.roffset;
					return HEAP32[r >> 2] = n, 0;
				}
				return 28;
			},
			fsync(e) {
				return 28;
			},
			read(e, t, r, _, n) {
				var a = e.node.pipe, i = 0;
				for (var l of a.buckets) i += l.offset - l.roffset;
				var o = t.subarray(r, r + _);
				if (_ <= 0) return 0;
				if (i == 0) throw new FS.ErrnoError(6);
				var s = Math.min(i, _), c = s, p = 0;
				for (var l of a.buckets) {
					var d = l.offset - l.roffset;
					if (s <= d) {
						var u = l.buffer.subarray(l.roffset, l.offset);
						s < d ? (u = u.subarray(0, s), l.roffset += s) : p++, o.set(u);
						break;
					} else u = l.buffer.subarray(l.roffset, l.offset), o.set(u), o = o.subarray(u.byteLength), s -= u.byteLength, p++;
				}
				return p && p == a.buckets.length && (p--, a.buckets[p].offset = 0, a.buckets[p].roffset = 0), a.buckets.splice(0, p), c;
			},
			write(e, t, r, _, n) {
				var a = e.node.pipe, i = t.subarray(r, r + _), l = i.byteLength;
				if (l <= 0) return 0;
				var o = null;
				a.buckets.length == 0 ? (o = {
					buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
					offset: 0,
					roffset: 0
				}, a.buckets.push(o)) : o = a.buckets[a.buckets.length - 1];
				var s = PIPEFS.BUCKET_BUFFER_SIZE - o.offset;
				if (s >= l) return o.buffer.set(i, o.offset), o.offset += l, a.readNode.notifyListeners(65), l;
				s > 0 && (o.buffer.set(i.subarray(0, s), o.offset), o.offset += s, i = i.subarray(s, i.byteLength));
				for (var c = i.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0, p = i.byteLength % PIPEFS.BUCKET_BUFFER_SIZE, d = 0; d < c; d++) {
					var u = {
						buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
						offset: PIPEFS.BUCKET_BUFFER_SIZE,
						roffset: 0
					};
					a.buckets.push(u), u.buffer.set(i.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE)), i = i.subarray(PIPEFS.BUCKET_BUFFER_SIZE, i.byteLength);
				}
				return p > 0 && (u = {
					buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
					offset: i.byteLength,
					roffset: 0
				}, a.buckets.push(u), u.buffer.set(i)), a.readNode.notifyListeners(65), l;
			},
			close(e) {
				var t = e.node.pipe;
				(e.flags & 2097155) === 1 ? --t.writerCount || (t.writeClosed = !0, t.readNode.notifyListeners(81)) : --t.readerCount || (t.readClosed = !0, t.writeNode.notifyListeners(268)), !t.readerCount && !t.writerCount && (t.buckets = null);
			}
		},
		nextname() {
			return PIPEFS.nextname.current || (PIPEFS.nextname.current = 0), "pipe[" + PIPEFS.nextname.current++ + "]";
		}
	};
	function ___syscall_pipe2(e, t) {
		try {
			if (e == 0) throw new FS.ErrnoError(21);
			if (t & -526337) throw new FS.ErrnoError(138);
			var r = PIPEFS.createPipe();
			return t & 2048 && (FS.getStream(r.readable_fd).flags |= 2048, FS.getStream(r.writable_fd).flags |= 2048), HEAP32[e >> 2] = r.readable_fd, HEAP32[e + 4 >> 2] = r.writable_fd, 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_pipe2.sig = "ipi";
	var pollOne = (e, t) => {
		var r = FS.getStream(e);
		if (!r) return 32;
		return (r.stream_ops?.poll?.(r) ?? 5) & (56 | t);
	}, doPollSync = (e, t) => {
		for (var r = 0, _ = 0, n = e; _ < t; _++, n += 8) {
			var a = pollOne(HEAP32[n >> 2], HEAP16[n + 4 >> 1]);
			a && r++, HEAP16[n + 6 >> 1] = a;
		}
		return r;
	};
	function ___syscall_poll(e, t) {
		try {
			return doPollSync(e, t);
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_poll.sig = "ipii";
	function ___syscall_readlinkat(e, t, r, _) {
		try {
			if (t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), _ <= 0) return -28;
			var n = FS.readlink(t), a = Math.min(_, lengthBytesUTF8(n)), i = HEAP8[r + a];
			return stringToUTF8(n, r, _ + 1), HEAP8[r + a] = i, a;
		} catch (l) {
			if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
			return -l.errno;
		}
	}
	___syscall_readlinkat.sig = "iippp";
	function ___syscall_recvfrom(e, t, r, _, n, a) {
		try {
			var i = getSocketFromFD(e), l = i.sock_ops.recvmsg(i, r, _);
			return l ? (n && writeSockaddr(n, i.family, l.addr, l.port, a), HEAPU8.set(l.buffer, t), l.buffer.byteLength) : 0;
		} catch (o) {
			if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
			return -o.errno;
		}
	}
	___syscall_recvfrom.sig = "iippipp";
	function ___syscall_renameat(e, t, r, _) {
		try {
			return t = SYSCALLS.getStr(t), _ = SYSCALLS.getStr(_), t = SYSCALLS.calculateAt(e, t), _ = SYSCALLS.calculateAt(r, _), FS.rename(t, _), 0;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_renameat.sig = "iipip";
	function ___syscall_rmdir(e) {
		try {
			return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
		} catch (t) {
			if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
			return -t.errno;
		}
	}
	___syscall_rmdir.sig = "ip";
	function ___syscall_sendto(e, t, r, _, n, a) {
		try {
			var i = getSocketFromFD(e);
			if (!n) return FS.write(i.stream, HEAP8, t, r);
			var l = getSocketAddress(n, a);
			return i.sock_ops.sendmsg(i, HEAP8, t, r, l.addr, l.port);
		} catch (o) {
			if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
			return -o.errno;
		}
	}
	___syscall_sendto.sig = "iippipi";
	function ___syscall_socket(e, t, r) {
		try {
			return SOCKFS.createSocket(e, t, r).stream.fd;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return -n.errno;
		}
	}
	___syscall_socket.sig = "iiiiiii";
	function ___syscall_stat64(e, t) {
		try {
			return e = SYSCALLS.getStr(e), SYSCALLS.writeStat(t, FS.stat(e));
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_stat64.sig = "ipp";
	function ___syscall_statfs64(e, t, r) {
		try {
			return SYSCALLS.writeStatFs(r, FS.statfs(SYSCALLS.getStr(e))), 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_statfs64.sig = "ippp";
	function ___syscall_symlinkat(e, t, r) {
		try {
			return e = SYSCALLS.getStr(e), r = SYSCALLS.getStr(r), r = SYSCALLS.calculateAt(t, r), FS.symlink(e, r), 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_symlinkat.sig = "ipip";
	function ___syscall_truncate64(e, t) {
		t = bigintToI53Checked(t);
		try {
			return isNaN(t) ? -22 : (e = SYSCALLS.getStr(e), FS.truncate(e, t), 0);
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_truncate64.sig = "ipj";
	function ___syscall_umask(e) {
		try {
			var t = SYSCALLS.currentUmask;
			return SYSCALLS.currentUmask = e, t;
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return -r.errno;
		}
	}
	___syscall_umask.sig = "ii";
	function ___syscall_unlinkat(e, t, r) {
		try {
			if (t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), !r) FS.unlink(t);
			else if (r === 512) FS.rmdir(t);
			else return -28;
			return 0;
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return -_.errno;
		}
	}
	___syscall_unlinkat.sig = "iipi";
	var readI53FromI64 = (e) => HEAPU32[e >> 2] + HEAP32[e + 4 >> 2] * 4294967296;
	function ___syscall_utimensat(e, t, r, _) {
		try {
			var n = _ & 256;
			t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t, !0);
			var a, i, l = Date.now();
			if (!r) a = l, i = l;
			else {
				let s = function(c) {
					var p = HEAP32[c + 8 >> 2];
					if (p == 1073741823) return l;
					if (p == 1073741822) return null;
					return readI53FromI64(c) * 1e3 + Math.floor(p / 1e6);
				};
				var o = s;
				a = s(r), i = s(r + 16);
			}
			return (i ?? a) !== null && FS.utime(t, a, i, n), 0;
		} catch (s) {
			if (typeof FS > "u" || s.name !== "ErrnoError") throw s;
			return -s.errno;
		}
	}
	___syscall_utimensat.sig = "iippi";
	var __abort_js = () => abort("");
	__abort_js.sig = "v";
	var dlSetError = (e) => {
		var t = stackSave(), r = stringToUTF8OnStack(e);
		___dl_seterr(r, 0), stackRestore(t);
	}, dlopenInternal = (e, t) => {
		var r = UTF8ToString(e + 36), _ = HEAP32[e + 4 >> 2];
		r = PATH.normalize(r);
		var n = !!(_ & 256), a = n ? null : {}, i = {
			global: n,
			nodelete: !!(_ & 4096),
			loadAsync: t.loadAsync
		};
		if (t.loadAsync) return loadDynamicLibrary(r, i, a, e);
		try {
			return loadDynamicLibrary(r, i, a, e);
		} catch (l) {
			return dlSetError(`could not load dynamic lib: ${r}
${l}`), 0;
		}
	}, __dlopen_js = (e) => dlopenInternal(e, { loadAsync: !1 });
	__dlopen_js.sig = "pp";
	var __dlsym_js = (e, t, r) => {
		t = UTF8ToString(t);
		var _, n, a = LDSO.loadedLibsByHandle[e];
		if (n = Object.keys(a.exports).indexOf(t), n == -1 || a.exports[t].stub) return dlSetError(`Tried to lookup unknown symbol "${t}" in dynamic lib: ${a.name}`), 0;
		if (_ = a.exports[t], typeof _ == "function") {
			var i = getFunctionAddress(_);
			i ? _ = i : (_ = addFunction(_, _.sig), HEAPU32[r >> 2] = n);
		}
		return _;
	};
	__dlsym_js.sig = "pppp";
	var runtimeKeepaliveCounter = 0, __emscripten_runtime_keepalive_clear = () => {
		noExitRuntime = !1, runtimeKeepaliveCounter = 0;
	};
	__emscripten_runtime_keepalive_clear.sig = "v";
	var __emscripten_throw_longjmp = () => {
		throw new EmscriptenSjLj();
	};
	__emscripten_throw_longjmp.sig = "v";
	function __gmtime_js(e, t) {
		e = bigintToI53Checked(e);
		var r = /* @__PURE__ */ new Date(e * 1e3);
		if (isNaN(r.getTime())) return 1;
		HEAP32[t >> 2] = r.getUTCSeconds(), HEAP32[t + 4 >> 2] = r.getUTCMinutes(), HEAP32[t + 8 >> 2] = r.getUTCHours(), HEAP32[t + 12 >> 2] = r.getUTCDate(), HEAP32[t + 16 >> 2] = r.getUTCMonth(), HEAP32[t + 20 >> 2] = r.getUTCFullYear() - 1900, HEAP32[t + 24 >> 2] = r.getUTCDay();
		var _ = Date.UTC(r.getUTCFullYear(), 0, 1, 0, 0, 0, 0), n = (r.getTime() - _) / 864e5 | 0;
		return HEAP32[t + 28 >> 2] = n, 0;
	}
	__gmtime_js.sig = "ijp";
	var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [
		0,
		31,
		60,
		91,
		121,
		152,
		182,
		213,
		244,
		274,
		305,
		335
	], MONTH_DAYS_REGULAR_CUMULATIVE = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	], ydayFromDate = (e) => {
		return (isLeapYear(e.getFullYear()) ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE)[e.getMonth()] + e.getDate() - 1;
	};
	function __localtime_js(e, t) {
		e = bigintToI53Checked(e);
		var r = /* @__PURE__ */ new Date(e * 1e3);
		if (isNaN(r.getTime())) return 1;
		HEAP32[t >> 2] = r.getSeconds(), HEAP32[t + 4 >> 2] = r.getMinutes(), HEAP32[t + 8 >> 2] = r.getHours(), HEAP32[t + 12 >> 2] = r.getDate(), HEAP32[t + 16 >> 2] = r.getMonth(), HEAP32[t + 20 >> 2] = r.getFullYear() - 1900, HEAP32[t + 24 >> 2] = r.getDay();
		var _ = ydayFromDate(r) | 0;
		HEAP32[t + 28 >> 2] = _, HEAP32[t + 36 >> 2] = -r.getTimezoneOffset() * 60;
		var n = new Date(r.getFullYear(), 0, 1), a = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), i = n.getTimezoneOffset(), l = (a != i && r.getTimezoneOffset() == Math.min(i, a)) | 0;
		return HEAP32[t + 32 >> 2] = l, 0;
	}
	__localtime_js.sig = "ijp";
	function __mmap_js(e, t, r, _, n, a, i) {
		n = bigintToI53Checked(n);
		try {
			var l = SYSCALLS.getStreamFromFD(_), o = FS.mmap(l, e, n, t, r), s = o.ptr;
			return HEAP32[a >> 2] = o.allocated, HEAPU32[i >> 2] = s, 0;
		} catch (c) {
			if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
			return -c.errno;
		}
	}
	__mmap_js.sig = "ipiiijpp";
	function __munmap_js(e, t, r, _, n, a) {
		a = bigintToI53Checked(a);
		try {
			var i = SYSCALLS.getStreamFromFD(n);
			r & 2 && SYSCALLS.doMsync(e, i, t, _, a);
		} catch (l) {
			if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
			return -l.errno;
		}
	}
	__munmap_js.sig = "ippiiij";
	var timers = {}, clearTimers = () => {
		for (var e of Object.values(timers)) clearTimeout(e.id);
	}, handleException = (e) => {
		if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
		quit_(1, e);
	}, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
		EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit?.(e), ABORT = !0), quit_(e, new ExitStatus(e));
	};
	_proc_exit.sig = "vi";
	var exitJS = (e) => {
		EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
	}, _exit = exitJS;
	_exit.sig = "vi";
	var maybeExit = () => {
		if (!runtimeExited && !keepRuntimeAlive()) try {
			_exit(EXITSTATUS);
		} catch (e) {
			handleException(e);
		}
	}, callUserCallback = (e, ...t) => {
		if (!(runtimeExited || ABORT)) try {
			return e(...t);
		} catch (r) {
			handleException(r);
		} finally {
			maybeExit();
		}
	}, _emscripten_get_now = () => performance.now();
	_emscripten_get_now.sig = "d";
	var __setitimer_js = (e, t) => {
		if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !t) return 0;
		return timers[e] = {
			id: setTimeout(() => {
				delete timers[e], callUserCallback(__emscripten_timeout, e, _emscripten_get_now());
			}, t),
			timeout_ms: t
		}, 0;
	};
	__setitimer_js.sig = "iid";
	var __tzset_js = (e, t, r, _) => {
		var n = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(n, 0, 1), i = new Date(n, 6, 1), l = a.getTimezoneOffset(), o = i.getTimezoneOffset(), s = Math.max(l, o);
		HEAPU32[e >> 2] = s * 60, HEAP32[t >> 2] = +(l != o);
		var c = (u) => {
			var f = u >= 0 ? "-" : "+", m = Math.abs(u);
			return `UTC${f}${String(Math.floor(m / 60)).padStart(2, "0")}${String(m % 60).padStart(2, "0")}`;
		}, p = c(l), d = c(o);
		o < l ? (stringToUTF8(p, r, 17), stringToUTF8(d, _, 17)) : (stringToUTF8(p, _, 17), stringToUTF8(d, r, 17));
	};
	__tzset_js.sig = "vpppp";
	var _emscripten_date_now = () => Date.now();
	_emscripten_date_now.sig = "d";
	var nowIsMonotonic = 1, checkWasiClock = (e) => e >= 0 && e <= 3;
	function _clock_time_get(e, t, r) {
		if (t = bigintToI53Checked(t), !checkWasiClock(e)) return 28;
		var _;
		if (e === 0) _ = _emscripten_date_now();
		else if (nowIsMonotonic) _ = _emscripten_get_now();
		else return 52;
		var n = Math.round(_ * 1e6);
		return HEAP64[r >> 3] = BigInt(n), 0;
	}
	_clock_time_get.sig = "iijp";
	var getHeapMax = () => 2147483648, _emscripten_get_heap_max = () => getHeapMax();
	_emscripten_get_heap_max.sig = "p";
	var growMemory = (e) => {
		var r = (e - wasmMemory.buffer.byteLength + 65535) / 65536 | 0;
		try {
			return wasmMemory.grow(r), updateMemoryViews(), 1;
		} catch {}
	}, _emscripten_resize_heap = (e) => {
		var t = HEAPU8.length;
		e >>>= 0;
		var r = getHeapMax();
		if (e > r) return !1;
		for (var _ = 1; _ <= 4; _ *= 2) {
			var n = t * (1 + .2 / _);
			n = Math.min(n, e + 100663296);
			if (growMemory(Math.min(r, alignMemory(Math.max(e, n), 65536)))) return !0;
		}
		return !1;
	};
	_emscripten_resize_heap.sig = "ip";
	var ENV = {}, getExecutableName = () => thisProgram, getEnvStrings = () => {
		if (!getEnvStrings.strings) {
			var t = {
				USER: "web_user",
				LOGNAME: "web_user",
				PATH: "/",
				PWD: "/",
				HOME: "/home/web_user",
				LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
				_: getExecutableName()
			};
			for (var r in ENV) ENV[r] === void 0 ? delete t[r] : t[r] = ENV[r];
			var _ = [];
			for (var r in t) _.push(`${r}=${t[r]}`);
			getEnvStrings.strings = _;
		}
		return getEnvStrings.strings;
	}, _environ_get = (e, t) => {
		var r = 0, _ = 0;
		for (var n of getEnvStrings()) {
			var a = t + r;
			HEAPU32[e + _ >> 2] = a, r += stringToUTF8(n, a, 1 / 0) + 1, _ += 4;
		}
		return 0;
	};
	_environ_get.sig = "ipp";
	var _environ_sizes_get = (e, t) => {
		var r = getEnvStrings();
		HEAPU32[e >> 2] = r.length;
		var _ = 0;
		for (var n of r) _ += lengthBytesUTF8(n) + 1;
		return HEAPU32[t >> 2] = _, 0;
	};
	_environ_sizes_get.sig = "ipp";
	function _fd_close(e) {
		try {
			var t = SYSCALLS.getStreamFromFD(e);
			return FS.close(t), 0;
		} catch (r) {
			if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
			return r.errno;
		}
	}
	_fd_close.sig = "ii";
	function _fd_fdstat_get(e, t) {
		try {
			var r = SYSCALLS.getStreamFromFD(e), _ = r.tty ? 2 : FS.isDir(r.mode) ? 3 : FS.isLink(r.mode) ? 7 : 4;
			return HEAP8[t] = _, HEAP16[t + 2 >> 1] = 0, HEAP64[t + 8 >> 3] = BigInt(0), HEAP64[t + 16 >> 3] = BigInt(0), 0;
		} catch (n) {
			if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
			return n.errno;
		}
	}
	_fd_fdstat_get.sig = "iip";
	var doReadv = (e, t, r, _) => {
		for (var n = 0, a = 0; a < r; a++) {
			var i = HEAPU32[t >> 2], l = HEAPU32[t + 4 >> 2];
			t += 8;
			try {
				var o = FS.read(e, HEAP8, i, l, _);
			} catch (s) {
				if (n > 0 && s instanceof FS.ErrnoError && (s.errno == 6 || s.errno == 6)) break;
				throw s;
			}
			if (o < 0) return -1;
			if (n += o, o < l) break;
			typeof _ < "u" && (_ += o);
		}
		return n;
	};
	function _fd_pread(e, t, r, _, n) {
		_ = bigintToI53Checked(_);
		try {
			if (isNaN(_)) return 22;
			var i = doReadv(SYSCALLS.getStreamFromFD(e), t, r, _);
			return HEAPU32[n >> 2] = i, 0;
		} catch (l) {
			if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
			return l.errno;
		}
	}
	_fd_pread.sig = "iippjp";
	var doWritev = (e, t, r, _) => {
		if (r == 1) return FS.write(e, HEAP8, HEAPU32[t >> 2], HEAPU32[t + 4 >> 2], _);
		for (var n = 0, a = 0, i = t; a < r; a++, i += 8) n += HEAPU32[i + 4 >> 2];
		var l = new Uint8Array(n), o = 0;
		for (a = 0; a < r; a++, t += 8) {
			var s = HEAPU32[t >> 2], c = HEAPU32[t + 4 >> 2];
			l.set(HEAPU8.subarray(s, s + c), o), o += c;
		}
		return FS.write(e, l, 0, n, _);
	};
	function _fd_pwrite(e, t, r, _, n) {
		_ = bigintToI53Checked(_);
		try {
			if (isNaN(_)) return 22;
			var i = doWritev(SYSCALLS.getStreamFromFD(e), t, r, _);
			return HEAPU32[n >> 2] = i, 0;
		} catch (l) {
			if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
			return l.errno;
		}
	}
	_fd_pwrite.sig = "iippjp";
	function _fd_read(e, t, r, _) {
		try {
			var a = doReadv(SYSCALLS.getStreamFromFD(e), t, r);
			return HEAPU32[_ >> 2] = a, 0;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return i.errno;
		}
	}
	_fd_read.sig = "iippp";
	function _fd_seek(e, t, r, _) {
		t = bigintToI53Checked(t);
		try {
			if (isNaN(t)) return 22;
			var n = SYSCALLS.getStreamFromFD(e);
			return FS.llseek(n, t, r), HEAP64[_ >> 3] = BigInt(n.position), n.getdents && !t && r === 0 && (n.getdents = null), 0;
		} catch (a) {
			if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
			return a.errno;
		}
	}
	_fd_seek.sig = "iijip";
	function _fd_sync(e) {
		try {
			var t = SYSCALLS.getStreamFromFD(e);
			return t.stream_ops?.fsync?.(t);
		} catch (_) {
			if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
			return _.errno;
		}
	}
	_fd_sync.sig = "ii";
	function _fd_write(e, t, r, _) {
		try {
			var a = doWritev(SYSCALLS.getStreamFromFD(e), t, r);
			return HEAPU32[_ >> 2] = a, 0;
		} catch (i) {
			if (typeof FS > "u" || i.name !== "ErrnoError") throw i;
			return i.errno;
		}
	}
	_fd_write.sig = "iippp";
	var _getaddrinfo = (e, t, r, _) => {
		var n = 0, a = 0, i = 0, l = 0, o = 0, s = 0, c;
		function p(d, u, f, m, y, b) {
			var k, P = d === 10 ? 28 : 16, M;
			return y = d === 10 ? inetNtop6(y) : inetNtop4(y), k = _malloc(P), writeSockaddr(k, d, y, b), M = _malloc(32), HEAP32[M + 4 >> 2] = d, HEAP32[M + 8 >> 2] = u, HEAP32[M + 12 >> 2] = f, HEAPU32[M + 24 >> 2] = m, HEAPU32[M + 20 >> 2] = k, d === 10 ? HEAP32[M + 16 >> 2] = 28 : HEAP32[M + 16 >> 2] = 16, HEAP32[M + 28 >> 2] = 0, M;
		}
		if (r && (i = HEAP32[r >> 2], l = HEAP32[r + 4 >> 2], o = HEAP32[r + 8 >> 2], s = HEAP32[r + 12 >> 2]), o && !s && (s = o === 2 ? 17 : 6), !o && s && (o = s === 17 ? 2 : 1), s || (s = 6), o || (o = 1), !e && !t) return -2;
		if (i & -1088 || r && HEAP32[r >> 2] & 2 && !e) return -1;
		if (i & 32) return -2;
		if (o && o !== 1 && o !== 2) return -7;
		if (l !== 0 && l !== 2 && l !== 10) return -6;
		if (t && (t = UTF8ToString(t), a = parseInt(t, 10), isNaN(a))) return i & 1024 ? -2 : -8;
		if (!e) return l === 0 && (l = 2), i & 1 || (l === 2 ? n = _htonl(2130706433) : n = [
			0,
			0,
			0,
			_htonl(1)
		]), c = p(l, o, s, null, n, a), HEAPU32[_ >> 2] = c, 0;
		if (e = UTF8ToString(e), n = inetPton4(e), n !== null) if (l === 0 || l === 2) l = 2;
		else if (l === 10 && i & 8) n = [
			0,
			0,
			_htonl(65535),
			n
		], l = 10;
		else return -2;
		else if (n = inetPton6(e), n !== null) if (l === 0 || l === 10) l = 10;
		else return -2;
		return n != null ? (c = p(l, o, s, e, n, a), HEAPU32[_ >> 2] = c, 0) : i & 4 ? -2 : (e = DNS.lookup_name(e), n = inetPton4(e), l === 0 ? l = 2 : l === 10 && (n = [
			0,
			0,
			_htonl(65535),
			n
		]), c = p(l, o, s, null, n, a), HEAPU32[_ >> 2] = c, 0);
	};
	_getaddrinfo.sig = "ipppp";
	var _getnameinfo = (e, t, r, _, n, a, i) => {
		var l = readSockaddr(e, t);
		if (l.errno) return -6;
		var o = l.port, s = l.addr;
		function c(p) {
			var d = !1;
			if (r && _) {
				if (p) s = p;
				else if (i & 8) return -2;
				var u = stringToUTF8(s, r, _);
				u + 1 >= _ && (d = !0);
			}
			return n && a && (o = "" + o, u = stringToUTF8(o, n, a), u + 1 >= a && (d = !0)), d ? -12 : 0;
		}
		return r && _ && !(i & 1) ? c(DNS.lookup_addr(s)) : c(null);
	};
	_getnameinfo.sig = "ipipipii";
	var _random_get = (e, t) => randomFill(HEAPU8.subarray(e, e + t));
	_random_get.sig = "ipp";
	var stringToNewUTF8 = (e) => {
		var t = lengthBytesUTF8(e) + 1, r = _malloc(t);
		return r && stringToUTF8(e, r, t), r;
	}, removeFunction = (e) => {
		functionsInTableMap.delete(getWasmTableEntry(e)), setWasmTableEntry(e, null), freeTableIndexes.push(e);
	}, FS_createPath = (...e) => FS.createPath(...e), FS_unlink = (...e) => FS.unlink(...e), FS_createLazyFile = (...e) => FS.createLazyFile(...e), FS_createDevice = (...e) => FS.createDevice(...e), setTempRet0 = (e) => __emscripten_tempret_set(e), _setTempRet0 = setTempRet0, getTempRet0 = () => __emscripten_tempret_get(), _getTempRet0 = getTempRet0, _emscripten_force_exit = (e) => {
		__emscripten_runtime_keepalive_clear(), _exit(e);
	};
	_emscripten_force_exit.sig = "vi";
	var _sched_yield = () => 0;
	_sched_yield.sig = "i";
	var findMatchingCatch = () => (setTempRet0(0), 0), ___cxa_find_matching_catch_2 = () => findMatchingCatch([]);
	___cxa_find_matching_catch_2.sig = "p";
	var ___cxa_find_matching_catch_3 = (e) => findMatchingCatch([e]);
	___cxa_find_matching_catch_3.sig = "pp";
	class ExceptionInfo {
		constructor(t) {
			this.excPtr = t, this.ptr = t - 24;
		}
		set_type(t) {
			HEAPU32[this.ptr + 4 >> 2] = t;
		}
		get_type() {
			return HEAPU32[this.ptr + 4 >> 2];
		}
		set_destructor(t) {
			HEAPU32[this.ptr + 8 >> 2] = t;
		}
		get_destructor() {
			return HEAPU32[this.ptr + 8 >> 2];
		}
		set_caught(t) {
			t = t ? 1 : 0, HEAP8[this.ptr + 12] = t;
		}
		get_caught() {
			return HEAP8[this.ptr + 12] != 0;
		}
		set_rethrown(t) {
			t = t ? 1 : 0, HEAP8[this.ptr + 13] = t;
		}
		get_rethrown() {
			return HEAP8[this.ptr + 13] != 0;
		}
		init(t, r) {
			this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
		}
		set_adjusted_ptr(t) {
			HEAPU32[this.ptr + 16 >> 2] = t;
		}
		get_adjusted_ptr() {
			return HEAPU32[this.ptr + 16 >> 2];
		}
	}
	var uncaughtExceptionCount = 0, __Unwind_RaiseException = () => {
		abort();
	}, ___cxa_throw = (e, t, r) => {
		new ExceptionInfo(e).init(t, r), uncaughtExceptionCount++, __Unwind_RaiseException(e);
	};
	___cxa_throw.sig = "vppp";
	var exceptionCaught = [], ___cxa_rethrow = () => {
		exceptionCaught.length || abort("no exception to throw");
		var e = exceptionCaught.at(-1), t = e.excPtr;
		e.set_rethrown(!0), e.set_caught(!1), uncaughtExceptionCount++, __Unwind_RaiseException(t);
	};
	___cxa_rethrow.sig = "v";
	var ___cxa_begin_catch = (e) => {
		var t = new ExceptionInfo(e);
		return t.get_caught() || (t.set_caught(!0), uncaughtExceptionCount--), t.set_rethrown(!1), exceptionCaught.push(t), ___cxa_get_exception_ptr(e);
	};
	___cxa_begin_catch.sig = "pp";
	var ___cxa_end_catch = () => {
		_setThrew(0, 0);
		var e = exceptionCaught.pop();
		___cxa_decrement_exception_refcount(e.excPtr);
	};
	___cxa_end_catch.sig = "v";
	var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
	___cxa_uncaught_exceptions.sig = "i";
	var ___cxa_current_primary_exception = () => {
		if (!exceptionCaught.length) return 0;
		var e = exceptionCaught[exceptionCaught.length - 1];
		return ___cxa_increment_exception_refcount(e.excPtr), e.excPtr;
	};
	___cxa_current_primary_exception.sig = "p";
	var ___cxa_rethrow_primary_exception = (e) => {
		if (e) {
			var t = new ExceptionInfo(e);
			t.set_rethrown(!0), t.set_caught(!1), uncaughtExceptionCount++, __Unwind_RaiseException(e);
		}
	};
	___cxa_rethrow_primary_exception.sig = "vp";
	var __Unwind_Resume = () => {
		abort();
	}, ___resumeException = (e) => {
		__Unwind_Resume(e);
	};
	___resumeException.sig = "vp", registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.preloadFile = FS_preloadFile, FS.staticInit(), ENVIRONMENT_IS_NODE && NODEFS.staticInit(), initMemory(), Module.noExitRuntime && (noExitRuntime = Module.noExitRuntime), Module.print && (out = Module.print), Module.printErr && (err = Module.printErr), Module.dynamicLibraries && (dynamicLibraries = Module.dynamicLibraries), Module.arguments && (programArgs = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
	var preInit = Module.preInit;
	if (preInit) for (typeof preInit == "function" && (Module.preInit = preInit = [preInit]); preInit.length > 0;) preInit.shift()();
	Module.callMain = callMain, Module.stackSave = stackSave, Module.stackRestore = stackRestore, Module.ENV = ENV, Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.addFunction = addFunction, Module.removeFunction = removeFunction, Module.setValue = setValue, Module.getValue = getValue, Module.UTF8ToString = UTF8ToString, Module.stringToNewUTF8 = stringToNewUTF8, Module.stringToUTF8OnStack = stringToUTF8OnStack, Module.FS_preloadFile = FS_preloadFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile, Module.MEMFS = MEMFS, Module.PROXYFS = PROXYFS, Module.NODEFS = NODEFS, Module.IDBFS = IDBFS, Module._exit = _exit, Module._setTempRet0 = _setTempRet0, Module._getTempRet0 = _getTempRet0, Module._emscripten_force_exit = _emscripten_force_exit, Module._sched_yield = _sched_yield, Module.___cxa_find_matching_catch_2 = ___cxa_find_matching_catch_2, Module.___cxa_find_matching_catch_3 = ___cxa_find_matching_catch_3, Module.___cxa_throw = ___cxa_throw, Module.___cxa_rethrow = ___cxa_rethrow, Module.___cxa_begin_catch = ___cxa_begin_catch, Module.___cxa_end_catch = ___cxa_end_catch, Module.___cxa_uncaught_exceptions = ___cxa_uncaught_exceptions, Module.___cxa_current_primary_exception = ___cxa_current_primary_exception, Module.___cxa_rethrow_primary_exception = ___cxa_rethrow_primary_exception, Module.___resumeException = ___resumeException;
	var ASM_CONSTS = {}, _palloc0, _RelationGetNumberOfBlocksInFork, _ExtendBufferedRel, _MarkBufferDirty, _XLogBeginInsert, _XLogRegisterData, _XLogRegisterBuffer, _XLogInsert, _UnlockReleaseBuffer, _palloc, _brin_build_desc, _EnterParallelMode, _CreateParallelContext, _GetTransactionSnapshot, _RegisterSnapshot, _table_parallelscan_estimate, _add_size, _tuplesort_estimate_shared, _mul_size, _strlen, _InitializeParallelDSM, _UnregisterSnapshot, _DestroyParallelContext, _ExitParallelMode, _shm_toc_allocate, _ConditionVariableInit, _table_parallelscan_initialize, _tuplesort_initialize_shared, _shm_toc_insert, _LaunchParallelWorkers, _WaitForParallelWorkersToAttach, _s_lock, _ConditionVariableSleep, _ConditionVariableCancelSleep, _tuplesort_performsort, _AllocSetContextCreateInternal, _tuplesort_end, _MemoryContextReset, _brin_deform_tuple, _pfree, _MemoryContextDelete, _errstart_cold, _errmsg_internal, _errfinish, _log_newpage_buffer, _ProcessInterrupts, _errstart, _errcode, _errmsg, _LockBuffer, _ReleaseBuffer, _IndexGetRelation, _table_open, _ReadBufferExtended, _table_close, _build_reloptions, _RelationGetIndexScan, _pgstat_assoc_relation, _palloc0_mul, _index_getprocinfo, _fmgr_info_copy, _FunctionCall4Coll, _palloc_mul, _FunctionCall1Coll, _brin_free_desc, _WaitForParallelWorkersToFinish, _PageGetFreeSpace, _BufferGetBlockNumber, _BuildIndexInfo, _Int64GetDatum, _DirectFunctionCall2Coll, _RecoveryInProgress, _GetUserIdAndSecContext, _SetUserIdAndSecContext, _NewGUCNestLevel, _RestrictSearchPath, _index_open, _object_ownercheck, _aclcheck_error, _AtEOXact_GUC, _relation_close, _errhint, _GetUserId, _ReadBuffer, _shm_toc_lookup, _pgstat_report_activity, _tuplesort_attach_shared, _index_close, _table_beginscan_parallel, _ConditionVariableSignal, _datumCopy, _lookup_type_cache, _get_fn_opclass_options, _log, _pg_detoast_datum, _index_getprocid, _errdetail_internal, _pg_popcount_optimized, _init_local_reloptions, _initStringInfo, _appendStringInfoChar, _appendStringInfo, _FunctionCall2Coll, _SearchSysCache4, _SysCacheGetAttrNotNull, _ReleaseSysCache, _get_opcode, _fmgr_info_cxt, _Float8GetDatum, _numeric_float8, _numeric_sub, _DirectFunctionCall1Coll, _pg_detoast_datum_packed, _pg_qsort, _get_typbyval, _get_typlen, _qsort_arg, _add_local_int_reloption, _getTypeOutputInfo, _fmgr_info, _OutputFunctionCall, _cstring_to_text_with_len, _accumArrayResult, _makeArrayResult, _OidOutputFunctionCall, _cstring_to_text, _PageGetExactFreeSpace, _PageIndexTupleOverwrite, _PageInit, _PageAddItemExtended, _LockRelationForExtension, _UnlockRelationForExtension, _smgropen, _smgrpin, _ItemPointerEquals, _detoast_external_attr, _CreateTemplateTupleDesc, _TupleDescInitEntry, _repalloc, _memcmp, _SearchSysCache1, _get_opfamily_name, _SearchSysCacheList, _check_amproc_signature, _check_amoptsproc_signature, _format_procedure, _format_operator, _check_amop_signature, _identify_opfamily_groups, _format_type_be, _ReleaseCatCacheList, _format_type_with_typemod, _errdetail, _strcmp, _DatumGetEOHP, _EOH_get_flat_size, _EOH_flatten_into, _toast_raw_datum_size, _getmissingattr, _hash_create, _hash_search, _nocachegetattr, _heap_getsysattr, _heap_form_tuple, _heap_modify_tuple, _heap_deform_tuple, _heap_modify_tuple_by_cols, _heap_freetuple, _hash_bytes, _index_form_tuple, _MemoryContextAllocZero, _nocache_index_getattr, _index_deform_tuple, _CopyIndexTuple, _CreateTupleDescTruncatedCopy, _enlargeStringInfo, _slot_getsomeattrs_int, _pg_lltoa, _pg_ltoa, _pq_sendbytes, _pg_printf, _relation_open, _LockRelationOid, _RelationIdGetRelation, _try_relation_open, _SearchSysCacheExists, _UnlockRelationOid, _relation_openrv, _AcceptInvalidationMessages, _RangeVarGetRelidExtended, _RelationClose, _add_reloption_kind, _register_reloptions_validator, _lappend, _pstrdup, _add_int_reloption, _add_real_reloption, _add_enum_reloption, _add_string_reloption, _strdup, _MemoryContextStrdup, _transformRelOptions, _deconstruct_array_builtin, _strncmp, _defGetString, _strchr, _defGetBoolean, _pg_sprintf, _untransformRelOptions, _text_to_cstring, _makeString, _makeDefElem, _heap_reloptions, _index_reloptions, _strcpy, _MemoryContextAlloc, _parse_bool, _parse_int, _parse_real, _pg_strcasecmp, _ScanKeyInit, _dsm_segment_handle, _dsm_create, _dsm_segment_address, _dsa_pin_mapping, _dsm_attach, _dsm_detach, _ShmemInitStruct, _LWLockAcquire, _LWLockRelease, _LWLockConditionalAcquire, _dsa_create_ext, _dsa_allocate_extended, _dsa_get_address, _LWLockInitialize, _dsa_attach, _dsa_free, _dsa_get_total_size, _MemoryContextMemAllocated, _check_stack_depth, _GetCurrentCommandId, _toast_open_indexes, _GetNewOidWithIndex, _heap_insert, _RelationGetIndexList, _list_free, _systable_beginscan, _systable_getnext, _systable_endscan, _toast_close_indexes, _systable_beginscan_ordered, _systable_getnext_ordered, _systable_endscan_ordered, _get_toast_snapshot, _convert_tuples_by_position, _execute_attr_map_tuple, _ExecStoreVirtualTuple, _bms_is_member, _bms_add_member, _free_conversion_map, _CreateTupleDescCopy, _FreeTupleDesc, _ResourceOwnerEnlarge, _ResourceOwnerRemember, _DecrTupleDescRefCount, _ResourceOwnerForget, _datumIsEqual, _equalRowTypes, _hashRowType, _namestrcpy, _TupleDescInitEntryCollation, _BuildDescFromLists, _stringToNode, _psprintf, _pg_detoast_datum_copy, _get_typlenbyvalalign, _deconstruct_array, _ginCompareAttEntries, _repalloc_huge, _GinDataLeafPageGetItems, _tbm_add_tuples, _ginPostingListDecode, _ItemPointerCompare, _gintuple_get_attrnum, _gintuple_get_key, _LockPage, _UnlockPage, _vacuum_delay_point, _RecordFreeIndexPage, _IndexFreeSpaceMapVacuum, _repalloc_mul, _initGinState, _pg_prng_double, _pgstat_progress_update_param, _log_newpage_range, _GetFreeIndexPage, _ConditionalLockBuffer, _LockBufferForCleanup, _ReadNextFullTransactionId, _PageIndexMultiDelete, _list_make1_impl, _list_delete_first, _lcons, _pow, _smgrnblocks, _list_free_deep, _BufFileCreateTemp, _BufFileWrite, _BufFileReadExact, _BufFileClose, _pairingheap_remove_first, _pairingheap_add, _float_overflow_error, _float8_cmp_internal, _float_underflow_error, _DirectFunctionCall5Coll, _pairingheap_allocate, _get_func_rettype, _OidFunctionCall1Coll, _GenerationContextCreate, _block_range_read_stream_cb, _read_stream_begin_relation, _read_stream_next_buffer, _read_stream_end, _estimate_rel_size, __hash_spareindex, __hash_getbuf, __hash_relbuf, __hash_get_indextuple_hashkey, _hashcharextended, _hashint8, _hashint8extended, _hash_bytes_extended, _hashfloat8, _hashfloat8extended, _pg_newlocale_from_collation, __hash_ovflblkno_to_bitno, __hash_get_totalbuckets, _hash_destroy, _list_append_unique_oid, _list_member_oid, _CommandCounterIncrement, _get_opclass_input_type, _list_concat_copy, _HeapTupleSatisfiesVisibility, _GetAccessStrategy, _FreeAccessStrategy, _heap_getnext, _ExecStoreBufferHeapTuple, _heap_fetch, _HeapTupleSatisfiesVacuum, _GetMultiXactIdMembers, _TransactionIdPrecedes, _GetBulkInsertState, _FreeBulkInsertState, _visibilitymap_clear_locked, _pgstat_count_heap_insert, _heap_multi_insert, _ExecFetchSlotHeapTuple, _heap_delete, _IsInParallelMode, _visibilitymap_pin, _HeapTupleSatisfiesUpdate, _TransactionIdIsCurrentTransactionId, _TransactionIdDidCommit, _UnlockTuple, _TransactionIdIsInProgress, _bms_free, _bms_add_members, _bms_next_member, _bms_overlap, _HeapTupleGetUpdateXid, _heap_lock_tuple, _MultiXactIdPrecedes, _heap_tuple_needs_eventual_freeze, _PrefetchBuffer, _RelationTruncate, _FlushRelationBuffers, _smgrexists, _table_slot_create, _ExecDropSingleTupleTableSlot, _CreateExecutorState, _MakePerTupleExprContext, _ExecPrepareQual, _GetOldestNonRemovableTransactionId, _FormIndexDatum, _FreeExecutorState, _MakeSingleTupleTableSlot, _tuplesort_getdatum, _ExecStoreHeapTuple, _XidInMVCCSnapshot, _bsearch, _XLogRecGetBlockTagExtended, _hash_seq_init, _hash_seq_search, _errcode_for_file_access, _pg_snprintf, _OpenTransientFile, _ftruncate, ___errno_location, _pwrite, _CloseTransientFile, _sscanf, _unlink, _fsync_fname, _GetCurrentTimestamp, _get_database_name, _get_namespace_name, _pg_prng_uint32, _GetRecordedFreeSpace, _visibilitymap_get_status, _vac_estimate_reltuples, _WaitLatch, _ResetLatch, _clock_gettime, _WalUsageAccumDiff, _BufferUsageAccumDiff, _appendStringInfoString, _set_errcontext_domain, _errcontext_msg, _visibilitymap_prepare_truncate, _GetIndexAmRoutine, _check_enable_rls, _pg_class_aclcheck, _pg_attribute_aclcheck, _try_index_open, _btboolcmp, _btint2cmp, _btint4cmp, _btint8cmp, _btoidcmp, _btcharcmp, __bt_form_posting, __bt_mkscankey, __bt_checkpage, __bt_compare, __bt_relbuf, __bt_search, __bt_binsrch_insert, __bt_freestack, __bt_metaversion, _get_opfamily_member, _OidFunctionCall2Coll, __bt_allequalimage, ___wasm_setjmp_test, _before_shmem_exit, ___wasm_setjmp, _cancel_before_shmem_exit, _pg_re_throw, _emscripten_longjmp, _ConditionVariableBroadcast, _datum_image_eq, _time, __bt_check_natts, _strlcpy, _strncpy, _timestamptz_to_str, _XLogRecGetBlockRefInfo, _varstr_cmp, _get_atttype, _getBaseType, _exprType, _GetActiveSnapshot, _errdetail_relkind_not_supported, _table_openrv, _table_slot_callbacks, _clamp_row_est, _pre_format_elog_string, _format_elog_string, _IsTransactionState, _estimate_expression_value, _SetConfigOption, _XLogFlush, _get_call_result_type, _HeapTupleHeaderGetDatum, _GenericXLogStart, _GenericXLogRegisterBuffer, _GenericXLogFinish, _GenericXLogAbort, _errmsg_plural, _ReadNextMultiXactId, _ReadMultiXactIdRange, _MultiXactIdPrecedesOrEquals, _init_MultiFuncCall, _TupleDescGetAttInMetadata, _per_MultiFuncCall, _BuildTupleFromCStrings, _end_MultiFuncCall, _GetCurrentSubTransactionId, _GetSessionUserId, _WaitForBackgroundWorkerShutdown, _RegisterDynamicBackgroundWorker, _appendBinaryStringInfo, _pq_getmsgbyte, _ThrowErrorData, _pq_getmsgint, _pq_getmsgint64, _die, _pqsignal_be, _BackgroundWorkerUnblockSignals, _load_external_function, _BackgroundWorkerInitializeConnectionByOid, _GetDatabaseEncoding, _StartTransactionCommand, _CommitTransactionCommand, _PushActiveSnapshot, _PopActiveSnapshot, _RmgrNotFound, _InitMaterializedSRF, _tuplestore_putvalues, _pread, _lseek, _strspn, _strtoll, _AllocateFile, _fgets, _ferror, _FreeFile, _getpid, _read, _write, _durable_rename, _BlessTupleDesc, _fstat, _superuser_arg, _wal_segment_close, _wal_segment_open, _XLogReaderAllocate, _XLogReadRecord, _XLogReaderFree, _strtoull, _access, _IsAbortedTransactionBlockState, _GetTopFullTransactionId, _GetCurrentFullTransactionId, _GetCurrentTransactionNestLevel, _ResourceOwnerCreate, _AbortCurrentTransaction, _PreventInTransactionBlock, _IsTransactionBlock, _RegisterXactCallback, _UnregisterXactCallback, _RegisterSubXactCallback, _BeginInternalSubTransaction, _ReleaseCurrentSubTransaction, _ResourceOwnerDelete, _RollbackAndReleaseCurrentSubTransaction, _pg_usleep, _close, _ReleaseExternalFD, _GetDefaultCharSignedness, _SplitIdentifierString, _guc_malloc, _find_option, _gettimeofday, _pg_strong_random, _stat, _GetFlushRecPtr, _GetXLogReplayRecPtr, _TimestampDifferenceMilliseconds, _strtoul, _readlink, _pg_fprintf, _fflush, _pgl_system, _wait_result_to_str, _replace_percent_placeholders, _makeStringInfo, _pg_toupper, _numeric_in, _DirectFunctionCall3Coll, _palloc_extended, _pg_vsnprintf, _XLogFindNextRecord, _RestoreBlockImage, _timestamptz_in, _fscanf, _symlink, _ConditionVariableTimedSleep, _ParseDateTime, _DecodeDateTime, _tm2timestamp, _XLogRecStoreStats, _hash_get_num_entries, _read_local_xlog_page_no_wait, _escape_json_with_len, _BufFileSeek, _lstat, _destroyStringInfo, _list_sort, _pgl_geteuid, _getegid, _pg_checksum_page, _CreateDestReceiver, _bbsink_forward_end_archive, _bbsink_forward_begin_manifest, _bbsink_forward_end_manifest, _bbsink_forward_end_backup, _bbsink_forward_cleanup, _MemoryContextAllocExtended, _appendStringInfoVA, _list_concat, _strrchr, _bbsink_forward_begin_backup, _bbsink_forward_archive_contents, _bbsink_forward_begin_archive, _bbsink_forward_manifest_contents, _has_privs_of_role, _BaseBackupAddTarget, _list_copy, _tuplestore_puttuple, _isatty, _makeRangeVar, _DefineIndex, _getc, _fread, _clearerr, _OidInputFunctionCall, _copyObjectImpl, _get_rolespec_oid, _lappend_oid, _get_object_address, _makeTypeNameFromNameList, _SearchSysCacheLocked1, _SearchSysCache2, _SysCacheGetAttr, _CatalogTupleUpdate, _get_attnum, _get_rel_name, _CatalogTupleDelete, _get_namespace_oid, _SearchSysCache3, _performDeletion, _CatalogTupleInsert, _recordDependencyOn, _RunObjectPostAlterHook, _aclcheck_error_col, _get_element_type, _object_aclcheck, _isTempNamespace, _pg_attribute_aclcheck_all, _IsToastNamespace, _IsCatalogNamespace, _superuser, _SearchSysCacheAttName, _LockDatabaseObject, _new_object_addresses, _UnlockDatabaseObject, _free_object_addresses, _performMultipleDeletions, _recordDependencyOnExpr, _get_typ_typrelid, _query_tree_walker_impl, _expression_tree_walker_impl, _add_exact_object_address, _get_rel_relkind, _SystemAttributeDefinition, _get_typtype, _list_delete_last, _type_is_collatable, _CatalogOpenIndexes, _CatalogCloseIndexes, _get_relname_relid, _GetSysCacheOid, _SearchSysCacheCopy, _CheckTableNotInUse, _RelationForgetRelation, _construct_array, _make_parsestate, _addRangeTableEntryForRelation, _addNSItemToQuery, _transformExpr, _coerce_to_boolean, _assign_expr_collations, _pull_var_clause, _get_attname, _equal, _coerce_to_target_type, _nodeToString, _list_delete_nth_cell, _lappend_int, _CatalogTupleInsertWithInfo, _heap_truncate_find_FKs, _list_oid_cmp, _buildint2vector, _buildoidvector, _parser_errposition, _check_functions_in_node, _exprLocation, _exprTypmod, _get_base_element_type, _make_ands_explicit, _SystemFuncName, _CreateTrigger, _plan_create_index_workers, _GetLatestSnapshot, _make_ands_implicit, _get_rel_relispartition, _get_partition_ancestors, _tuplesort_begin_datum, _tuplesort_putdatum, _list_delete_oid, _get_rel_namespace, _ExecOpenIndices, _ExecCloseIndices, _CatalogTupleUpdateWithInfo, _ConditionalLockRelationOid, _RelnameGetRelid, _get_relkind_objtype, _isAnyTempNamespace, _RelationIsVisible, _TypenameGetTypid, _FuncnameGetCandidates, _DeconstructQualifiedName, _get_func_arg_info, _NameListToString, _OpernameGetOprid, _OpclassnameGetOpcid, _OpclassIsVisible, _get_ts_config_oid, _makeRangeVarFromNameList, _quote_identifier, _atoi, _GetSearchPathMatcher, _SearchPathMatchesCurrentEnvironment, _get_collation_oid, _GetDatabaseEncodingName, _CacheRegisterSyscacheCallback, _fetch_search_path, _get_extension_oid, _get_tablespace_oid, _get_role_oid, _get_language_oid, _get_am_oid, _get_index_am_oid, _GetForeignServerByName, _typeStringToTypeName, _makeFloat, _list_make2_impl, _check_object_ownership, _GetUserNameFromId, _format_type_extended, _quote_qualified_identifier, _get_tablespace_name, _GetForeignServerExtended, _GetForeignServer, _get_extension_name, _construct_empty_array, _format_type_be_qualified, _get_namespace_name_or_temp, _list_make3_impl, _get_am_name, _construct_md_array, _pull_varattnos, _makeBoolExpr, _eval_const_expressions, _get_func_name, _construct_array_builtin, _makeObjectName, _get_primary_key_attnos, _check_functional_grouping, _bms_is_subset, _ProcessGUCArray, _LockHeldByMe, _CheckRelationOidLockedByMe, _getExtensionOfObject, _deleteDependencyRecordsFor, _find_inheritance_children, _ActiveSnapshotSet, _find_all_inheritors, _has_superclass, _strstr, _memchr, _get_opname, _build_function_result_tupdesc_t, _CheckFunctionValidatorAccess, _AcquireRewriteLocks, _pg_parse_query, _get_func_result_type, _function_parse_error_transpose, _geterrposition, _getinternalerrposition, _pg_mblen_cstr, _pg_mbstrlen_with_len, _errposition, _internalerrposition, _internalerrquery, _bms_num_members, _list_concat_unique_oid, _ATExecChangeOwner, _quote_literal_cstr, _get_array_type, _pnstrdup, _pg_mbcliplen, _smgrtruncate, _smgrreadv, _NewRelationCreateToastTable, _parse_analyze_fixedparams, _transformStmt, _free_parsestate, _makeFromExpr, _assign_query_collations, _makeTargetEntry, _exprCollation, _transformSortClause, _transformDistinctClause, _ParseFuncOrColumn, _select_common_type, _coerce_to_common_type, _select_common_collation, _contain_vars_of_level, _expandNSItemAttrs, _makeAlias, _addRangeTableEntryForSubquery, _assign_list_collations, _expandNSItemVars, _markTargetListOrigins, _addRangeTableEntryForJoin, _list_truncate, _makeVar, _analyze_requires_snapshot, _makeNullConst, _get_sort_group_operators, _refnameNamespaceItem, _getRTEPermissionInfo, _setup_parser_errposition_callback, _cancel_parser_errposition_callback, _locate_var_of_level, _makeBoolean, _makeInteger, _makeSimpleA_Expr, _makeTypeName, _SystemTypeName, _makeFuncCall, _makeA_Expr, _list_make4_impl, _addTargetToSortList, _locate_agg_of_level, _list_intersection_int, _get_sortgroupclause_tle, _flatten_join_alias_vars, _list_member_int, _list_union_int, _makeFuncExpr, _get_rte_attribute_name, _expression_tree_mutator_impl, _checkNameSpaceConflicts, _addRangeTableEntryForENR, _addRangeTableEntry, _FigureColname, _addRangeTableEntryForFunction, _coerce_to_specific_type, _typenameTypeIdAndMod, _get_typcollation, _markNullableIfNeeded, _markVarForSelectPriv, _coerce_type, _LookupFuncName, _parserOpenTable, _strip_implicit_coercions, _colNameToVar, _op_hashjoinable, _get_commutator, _get_ordering_op_properties, _can_coerce_type, _get_sortgroupref_tle, _assignSortGroupRef, _targetIsInSortList, _contain_aggs_of_level, _find_coercion_pathway, _typeidType, _typeTypeCollation, _typeLen, _typeByVal, _get_type_category_preferred, _makeConst, _lookup_rowtype_tupdesc, _type_is_enum, _verify_common_type, _type_is_range, _bms_del_member, _list_member, _raw_expression_tree_walker_impl, _type_is_rowtype, _scanNSItemForColumn, _make_op, _make_scalar_array_op, _count_nonjunk_tlist_entries, _makeWholeRowVar, _expandRTE, _contain_var_clause, _jsonb_in, _get_func_prokind, _escape_json, _geterrcode, _bit_in, _repalloc0, _bms_union, _varstr_levenshtein_less_equal, _get_atttypetypmodcoll, _raw_parser, _errsave_start, _errsave_finish, _makeColumnDef, _GetDefaultOpClass, _transformIndexStmt, _ChooseRelationName, _deparse_context_for, _deparse_expression, _expression_planner, _scanner_init, _scanner_finish, _core_yylex, _isxdigit, _scanner_isspace, _truncate_identifier, _ScanKeywordLookup, _pg_verifymbstr, _downcase_truncate_identifier, _pg_database_encoding_max_length, _getTypeInputInfo, _RenameSchema, _check_can_set_role, _namein, _BlockSampler_Init, _reservoir_init_selection_state, _reservoir_get_next_S, _sampler_random_fract, _std_typanalyze, _BlockSampler_HasMore, _BlockSampler_Next, _Async_Notify, _RangeVarCallbackMaintainsTable, _make_new_heap, _finish_heap_swap, _RenameRelationInternal, _OpenPipeStream, _pg_is_ascii, _ClosePipeStream, _PreventCommandIfReadOnly, _BeginCopyFrom, _EndCopyFrom, _ProcessCopyOptions, _pg_strtoint64, _CopyFromErrorCallback, _bms_make_singleton, _ExecInitRangeTable, _ExecInitResultRelation, _ExecInitQual, _contain_volatile_functions, _NextCopyFrom, _ExecCloseResultRelations, _ExecCloseRangeTableRelations, _ExecConstraints, _ExecInsertIndexTuples, _build_column_default, _ExecInitExpr, _fileno, _NextCopyFromRawFields, _resetStringInfo, _pq_copymsgbytes, _pg_encoding_max_length, _tolower, _pg_plan_query, _PushCopiedSnapshot, _UpdateActiveSnapshotCommandId, _CreateQueryDesc, _ExecutorStart, _ExecutorFinish, _ExecutorEnd, _FreeQueryDesc, _ExecutorRun, _pg_server_to_any, _fwrite, _CreateTableAsRelExists, _QueryRewrite, _DefineRelation, _rmdir, _atof, _int8in, _oidin, _RemoveObjects, _GetCommandTagEnum, _CreateCommandTag, _GetCommandTagName, _NewExplainState, _ExplainBeginOutput, _ExplainEndOutput, _ExplainOpenGroup, _ExplainPrintPlan, _ExplainIndentText, _ExplainPropertyInteger, _ExplainCloseGroup, _ExplainPropertyFloat, _ExplainPrintTriggers, _ExplainPropertyUInteger, _ExplainPropertyText, _GetConfigOptionByName, _ExplainPrintJITSummary, _ExplainPropertyBool, _InstrEndLoop, _appendStringInfoSpaces, _ExplainQueryText, _ExplainQueryParameters, _get_func_namespace, _escape_xml, _GetExplainExtensionId, _GetExplainExtensionState, _SetExplainExtensionState, _RegisterExtensionExplainOption, _get_extension_schema, _get_function_sibling_type, _GetSysCacheHashValue, _CreateSchemaCommand, _get_rel_type_id, _set_config_option, _pg_any_to_server, _DirectFunctionCall4Coll, _replace_text, _strpbrk, _ProcessUtility, _CleanQuerytext, _GetForeignDataWrapper, _CreateExprContext, _EnsurePortalSnapshotExists, _CheckIndexCompatible, _op_input_types, _ResolveOpClass, _get_opclass_family, _get_opfamily_member_for_cmptype, _pgstat_count_truncate, _SPI_connect, _SPI_exec, _SPI_execute, _SPI_getvalue, _generate_operator_clause, _SPI_finish, _CreateTransientRelDestReceiver, _MemoryContextSetIdentifier, _checkExprHasSubLink, _MemoryContextSetParent, _copyParamList, _SetTuplestoreDestReceiverParams, _tuplestore_rescan, _MemoryContextDeleteChildren, _GetCachedPlan, _makeParamList, _ReleaseCachedPlan, _bms_equal, _func_volatile, _register_label_provider, _DefineSequence, _AlterSequence, _RangeVarCallbackOwnsRelation, _nextval, _textToQualifiedNameList, _nextval_internal, _setval_oid, _tuplestore_gettupleslot, _list_delete, _tuplestore_end, _list_append_unique, _get_rel_relam, _contain_mutable_functions, _RemoveRelations, _ExecuteTruncateGuts, _InitResultRelInfo, _AlterTableLookupRelation, _AlterTable, _AlterTableInternal, _AlterTableGetLockLevel, _pg_get_indexdef_string, _ExecStoreAllNullTuple, _chmod, _ChangeVarNodes, _tuplestore_begin_heap, _tuplestore_puttupleslot, _ExecForceStoreHeapTuple, _ExecUpdateLockMode, _bms_copy, _strtoint, _strtod, _plain_crypt_verify, _ProcessConfigFile, _pgl_exit, _dsa_get_handle, _pg_strncasecmp, _guc_free, _ExecReScan, _ExecAsyncResponse, _ExecAsyncRequestDone, _ExecAsyncRequestPending, _ExprEvalPushStep, _lookup_rowtype_tupdesc_copy, _ExecInitExprWithParams, _ExecInitExprList, _ExecGetResultType, _ExecInitExtraTupleSlot, _MakeExpandedObjectReadOnlyInternal, _tuplesort_puttupleslot, _ArrayGetNItems, _expanded_record_fetch_tupdesc, _expanded_record_fetch_field, _json_validate, _JsonbValueToJsonb, _numeric_out, _boolout, _bool_int4, _lookup_rowtype_tupdesc_domain, _MemoryContextGetParent, _DeleteExpandedObject, _CreateStandaloneExprContext, _ExecFindJunkAttributeInTlist, _standard_ExecutorStart, _ExecInitNode, _standard_ExecutorRun, _standard_ExecutorFinish, _standard_ExecutorEnd, _ExecEndNode, _InstrAlloc, _MakeTupleTableSlot, _ExecWithCheckOptions, _get_typlenbyval, _ExecInitScanTupleSlot, _InputFunctionCall, _list_delete_ptr, _FreeExprContext, _ExecAssignExprContext, _ExecAssignProjectionInfo, _ExecOpenScanRelation, _bms_intersect, _GetAttributeByName, _GetAttributeByNum, _ExecGetReturningSlot, _ExecGetResultRelCheckAsUser, _MemoryContextRegisterResetCallback, _cached_function_compile, _CommandIsReadOnly, _InstrUpdateTupleCount, _tuplesort_begin_heap, _AggCheckCallContext, _tuplesort_gettupleslot, _bms_del_members, _AddWaitEventToSet, _GetNumRegisteredWaitEvents, _tuplestore_clear, _get_attstatsslot, _free_attstatsslot, _SharedFileSetInit, _SharedFileSetAttach, _tuplesort_reset, _pairingheap_first, _bms_nonempty_difference, _datum_image_hash, _tuplesort_rescan, _WinGetPartitionLocalMemory, _WinGetCurrentPosition, _WinGetPartitionRowCount, _WinGetFuncArgInPartition, _WinGetFuncArgCurrent, _SPI_connect_ext, _SPI_commit, _CopyErrorData, _FlushErrorState, _ReThrowError, _SPI_commit_and_chain, _SPI_rollback, _SPI_rollback_and_chain, _SPI_freetuptable, _SPI_execute_extended, _SPI_execute_plan, _SPI_execp, _SPI_execute_plan_extended, _SPI_execute_plan_with_paramlist, _SPI_execute_with_args, _SPI_prepare, _SPI_prepare_extended, _SPI_keepplan, _SPI_saveplan, _SPI_freeplan, _SPI_copytuple, _SPI_returntuple, _SPI_modifytuple, _SPI_fnumber, _SPI_fname, _SPI_getbinval, _SPI_gettype, _SPI_gettypeid, _SPI_getrelname, _SPI_palloc, _SPI_repalloc, _SPI_pfree, _SPI_datumTransfer, _datumTransfer, _SPI_cursor_open_with_args, _SPI_cursor_open_with_paramlist, _SPI_cursor_parse_open, _SPI_cursor_find, _SPI_cursor_fetch, _SPI_scroll_cursor_fetch, _SPI_scroll_cursor_move, _SPI_cursor_close, _SPI_plan_is_valid, _SPI_result_code_string, _SPI_plan_get_plan_sources, _SPI_plan_get_cached_plan, _SPI_register_relation, _create_queryEnv, _register_ENR, _SPI_register_trigger_data, _tuplestore_tuple_count, _GetUserMapping, _GetForeignTable, _GetForeignColumnOptions, _initClosestMatch, _updateClosestMatch, _getClosestMatch, _GetExistingLocalJoinPath, _pathkeys_contained_in, _bloom_create, _bloom_free, _bloom_add_element, _bloom_lacks_element, _bloom_prop_bits_set, _dshash_create, _dshash_attach, _dshash_detach, _dshash_destroy, _dshash_get_hash_table_handle, _dshash_find, _dshash_find_or_insert, _dshash_delete_key, _dshash_release_lock, _tag_hash, _dshash_seq_init, _dshash_seq_next, _dshash_seq_term, _dshash_delete_current, _ldexp, _pg_b64_enc_len, _pg_b64_encode, _strtol, _gai_strerror, _bind, _pgl_connect, _pgl_send, _pgl_recv, _sendto, _select, _recvfrom, _be_lo_unlink, _text_to_cstring_buffer, _feof, _pg_mb2wchar_with_len, _pg_regcomp, _pg_regerror, _strcat, _freeaddrinfo, _pgl_getsockname, _pgl_setsockopt, _pgl_fcntl, _listen, _accept, _utime, _pq_buffer_remaining_data, _pgl_getsockopt, _pq_sendtext, _pq_sendfloat4, _pq_sendfloat8, _pq_begintypsend, _pq_endtypsend, _pq_getmsgfloat4, _pq_getmsgfloat8, _pq_getmsgtext, _pg_strtoint32, _main, _pgl_getuid, _getenv, _bms_membership, _RegisterExtensibleNodeMethods, _list_make5_impl, _GetMemoryChunkContext, _list_insert_nth, _list_member_ptr, _list_delete_int, _list_intersection, _list_append_unique_ptr, _list_append_unique_int, _list_concat_unique_int, _make_opclause, _exprIsLengthCoercion, _fix_opfuncids, _outToken, _outNode, _appendStringInfoStringQuoted, _EnableQueryId, _nodeRead, _pg_strtok, _debackslash, _exp2, _find_base_rel, _add_path, _create_sort_path, _set_baserel_size_estimates, _get_func_support, _clauselist_selectivity, _get_tablespace_page_costs, _cost_qual_eval, _pull_varnos, _estimate_num_groups, _cost_sort, _get_sortgrouplist_exprs, _get_attavgwidth, _make_restrictinfo, _setup_eclass_member_iterator, _eclass_member_iterator_next, _remove_nulling_relids, _get_mergejoin_opfamilies, _generate_implied_equalities_for_column, _eclass_useful_for_merging, _join_clause_is_movable_to, _get_plan_rowmark, _is_pseudo_constant_for_index, _update_mergeclause_eclasses, _pull_vars_of_level, _find_join_rel, _make_canonical_pathkey, _get_sortgroupref_clause_noerr, _extract_actual_clauses, _tlist_member, _change_plan_targetlist, _make_foreignscan, _IncrementVarSublevelsUp, _op_mergejoinable, _find_nonnullable_rels, _setup_simple_rel_arrays, _standard_planner, _get_relids_in_jointree, _SS_process_sublinks, _add_new_columns_to_pathtarget, _get_agg_clause_costs, _grouping_is_sortable, _copy_pathtarget, _create_projection_path, _contain_nonstrict_functions, _get_translated_update_targetlist, _add_row_identity_var, _get_rel_all_updated_cols, _get_baserel_parampathinfo, _create_foreignscan_path, _create_foreign_join_path, _create_foreign_upper_path, _adjust_limit_rows_costs, _add_to_flat_tlist, _get_fn_expr_variadic, _get_fn_expr_argtype, _on_shmem_exit, _pgl_shmdt, _pgl_shmctl, _pgl_shmat, _mmap, _pgl_shmget, _pgl_munmap, _SignalHandlerForConfigReload, _SignalHandlerForShutdownRequest, _procsignal_sigusr1_handler, _ConditionalLockDatabaseObject, _RegisterBackgroundWorker, _WaitForBackgroundWorkerStartup, _open, _rename, _GetConfigOption, _puts, _fopen, _fclose, _fputc, _ftello, _malloc, _free, _realloc, _iswprint_l, _iswalpha_l, _iswdigit_l, _isdigit_l, _iswpunct_l, _iswspace_l, _iswlower_l, _iswupper_l, _pg_ascii_tolower, _towlower_l, _tolower_l, _towupper_l, _toupper_l, _pg_reg_getinitialstate, _pg_reg_getfinalstate, _pg_reg_getnumoutarcs, _pg_reg_getoutarcs, _pg_reg_getnumcolors, _pg_reg_colorisbegin, _pg_reg_colorisend, _pg_reg_getnumcharacters, _pg_reg_getcharacters, _dsa_pin, _OutputPluginPrepareWrite, _OutputPluginWrite, _array_contains_nulls, _CacheRegisterRelcacheCallback, _hash_seq_term, _FreeErrorData, _RelidByRelfilenumber, _SnapBuildRestoreSnapshot, _WaitLatchOrSocket, _BufFileCreateFileSet, _BufFileOpenFileSet, _BufFileTell, _ConditionVariablePrepareToSleep, _get_row_security_policies, _extract_variadic_args, _errhidestmt, _errhidecontext, _hash_estimate_size, _ShmemInitHash, _LockBufHdr, _LWLockHeldByMeInMode, _EvictUnpinnedBuffer, _EvictAllUnpinnedBuffers, _EvictRelUnpinnedBuffers, _have_free_buffer, _calloc, _BufFileExportFileSet, _BufFileRead, _copy_file, _fdatasync, _truncate, _dup, _AcquireExternalFD, _mkdir, _pgl_popen, _pgl_pclose, _closedir, _opendir, _readdir, _GetNamedDSMSegment, _pgl_atexit, _RequestAddinShmemSpace, _GetRunningTransactionData, _BackendXidGetPid, _pg_numa_init, _sysconf, _pg_numa_query_pages, _pg_get_shmem_pagesize, _LockAcquire, _LockRelease, _pgl_poll, _GetLockmodeName, _LWLockRegisterTranche, _GetNamedLWLockTranche, _LWLockNewTrancheId, _RequestNamedLWLockTranche, _LWLockHeldByMe, _ProcessStartupPacket, _htons, _htonl, _pgl_startPGlite, _pgl_pq_flush, _pgl_getMyProcPort, _pgl_sendConnData, _PostgresMainLongJmp, _PostgresMainLoopOnce, _PostgresSendReadyForQueryIfNecessary, _GetCommandLogLevel, _standard_ProcessUtility, _lookup_ts_dictionary_cache, _get_tsearch_config_filename, _str_tolower, _readstoplist, _searchstoplist, _tsearch_readline_begin, _tsearch_readline, _tsearch_readline_end, _stringToQualifiedNameList, _getTSCurrentConfig, _to_tsvector_byid, _t_isalnum_with_len, _isalnum, _t_isalnum_cstr, _pg_mblen_unbounded, _get_restriction_variable, _pg_mblen_range, _MemoryContextAllocHuge, _fseek, _WaitEventExtensionNew, _regprocedurein, _is_member_of_role, _expand_array, _exp, _arraycontsel, _arraycontjoinsel, _initArrayResult, _array_create_iterator, _array_iterate, _array_free_iterator, _ArrayGetIntegerTypmods, _boolin, ___multi3, _cash_cmp, _int64_to_numeric, _numeric_div, _numeric_round, _numeric_int8, _numeric_mul, _j2date, _EncodeDateOnly, _EncodeSpecialDate, _date_eq, _date_lt, _date_le, _date_gt, _date_ge, _date_cmp, _date_mi, _timestamp2tm, _time2tm, _EncodeTimeOnly, _time_eq, _time_lt, _time_le, _time_gt, _time_ge, _time_cmp, _time_mi_time, _timetz2tm, _timetz_cmp, _pg_tolower, _EncodeDateTime, _TransferExpandedObject, _forkname_to_number, _numeric_lt, _numeric_abs, _numeric_add, _numeric_ge, _err_generic_string, _domain_check, _enum_lt, _enum_le, _enum_ge, _enum_gt, _enum_cmp, _make_expanded_record_from_typeid, _make_expanded_record_from_tupdesc, _make_expanded_record_from_exprecord, _expanded_record_set_tuple, _expanded_record_get_tuple, _deconstruct_expanded_record, _expanded_record_lookup_field, _expanded_record_set_field_internal, _expanded_record_set_fields, _float4in_internal, _strtof, _float_to_shortest_decimal_buf, _float8in, _float8in_internal, _float8out, _float8out_internal, _float8pl, _float4_cmp_internal, _btfloat4cmp, _btfloat8cmp, _dtoi4, _dtoi2, _cbrt, _dexp, _log10, _dacos, _acos, _dasin, _asin, _datan, _atan, _datan2, _atan2, _dcos, _cos, _dcot, _tan, _dsin, _sin, _dtan, _fmod, _degrees, _dpi, _radians, _sinh, _cosh, _tanh, _asinh, _acosh, _atanh, _float8_accum, _float8_stddev_pop, _float8_stddev_samp, _asc_tolower, _pg_strfold, _numeric_power, _dtoi8, _int8out, _fseeko, _int4in, _int4_bool, _int8pl, _int84, _int82, _json_in, _EncodeSpecialTimestamp, _pushJsonbValue, _numeric_int2, _numeric_int4, _numeric_float4, _numeric_normalize, _numeric_cmp, _numeric_eq, _hash_numeric, _hash_numeric_extended, _int2_numeric, _int4_numeric, _int8_numeric, _float4_numeric, _float8_numeric, _numeric_uminus, _numeric_is_nan, _numeric_ceil, _numeric_floor, _timestamp_cmp, _macaddr_cmp, _macaddr_lt, _macaddr_le, _macaddr_eq, _macaddr_ge, _macaddr_gt, _macaddr8_cmp, _macaddr8_lt, _macaddr8_le, _macaddr8_eq, _macaddr8_ge, _macaddr8_gt, _current_query, _generate_collation_name, _get_fn_expr_arg_stable, _unpack_sql_state, _get_fn_expr_rettype, _btnamecmp, _inet_in, _network_cmp, _convert_network_to_scalar, _numeric_sign, _numeric_gt, _numeric_le, _numeric_mod, _numeric_sqrt, ___divti3, _numeric_exp, _numeric_ln, _numeric_log, _numeric_float8_no_overflow, _oidout, _btrim1, _ltrim1, _rtrim1, _tuplesort_skiptuples, _interval_mi, _setlocale, _newlocale, _strftime_l, _freelocale, _pg_utf_mblen_private, _uselocale, _strcoll_l, _strxfrm_l, _drandom, _quote_ident, _textregexeq, _text_substr, _pg_wchar2mb_with_len, _regexp_split_to_array, _regclassin, _regtypeout, _regconfigout, _pg_get_indexdef_columns_extended, _pg_get_querydef, _strcspn, _generic_restriction_selectivity, _genericcostestimate, _tidin, _tidout, _timestamp_in, _timestamp_eq, _timestamp_lt, _timestamp_gt, _timestamp_le, _timestamp_ge, _interval_eq, _interval_lt, _interval_gt, _interval_le, _interval_ge, _interval_cmp, _timestamp_mi, _interval_um, _tsquery_requires_match, _TS_execute_ternary, _has_fn_opclass_options, _uuid_in, _uuid_out, _uuid_cmp, _gen_random_uuid, _varbit_in, _biteq, _bitlt, _bitle, _bitgt, _bitge, _bitcmp, _bitlength, _bpchareq, _bpcharlt, _bpcharle, _bpchargt, _bpcharge, _bpcharcmp, _pg_detoast_datum_slice, _text_substr_no_len, _texteq, _text_lt, _text_le, _text_gt, _text_ge, _bttextcmp, _byteaeq, _bytealt, _byteale, _byteagt, _byteage, _byteacmp, _to_hex32, _text_left, _text_right, _text_reverse, _varstr_levenshtein, _wcslen, _pg_xml_init, _xml_ereport, _pg_xml_done, _pg_do_encoding_conversion, _CreateCacheMemoryContext, _cfunc_resolve_polymorphic_argtypes, _get_typsubscript, _CachedPlanAllowsSimpleValidityCheck, _CachedPlanIsSimplyValid, _GetCachedExpression, _FreeCachedExpression, _ReleaseAllPlanCacheRefsInOwner, _SearchSysCache, _lookup_rowtype_tupdesc_noerror, _abort, _in_error_recursion_trouble, _pg_vfprintf, _pgl_longjmp, _openlog, _syslog, _GetErrorContextStack, _closelog, _dlsym, _dlopen, _dlerror, _dlclose, _find_rendezvous_variable, _CallerFInfoFunctionCall1, _CallerFInfoFunctionCall2, _FunctionCall0Coll, _RelationNameGetTupleDesc, _memcpy, _hash_freeze, _chdir, _pg_bindtextdomain, _pg_mblen, _check_encoding_conversion_args, _DefineCustomBoolVariable, _DefineCustomIntVariable, _DefineCustomRealVariable, _DefineCustomStringVariable, _DefineCustomEnumVariable, _MarkGUCPrefixReserved, _sampler_random_init_state, _dsa_trim, _pchomp, _PinPortal, _UnpinPortal, ___lshrti3, _realpath, _float_to_shortest_decimal_bufn, _IsValidJsonNumber, _pg_prng_uint64, _makeStringInfoExt, _initStringInfoExt, _pgl_getpwuid, _getcwd, _pthread_mutex_lock, _localeconv, _pthread_mutex_unlock, _nanosleep, _sigaction, _strchrnul, _snprintf, _strerror_r, _clear_setitimer, _pgl_setPGliteActive, _pgl_siglongjmp, _pgl_set_system_fn, _pgl_set_popen_fn, _pgl_set_pclose_fn, _pgl_run_atexit_funcs, _pgl_freopen, _fiprintf, _pgl_set_rw_cbs, _vfprintf, _pthread_key_create, _pthread_getspecific, _pthread_key_delete, _pthread_setspecific, _toupper, _iconv_open, _iconv_close, _iconv, _pthread_mutex_init, _pthread_mutex_destroy, _pthread_cond_init, _pthread_cond_destroy, _pthread_self, _pthread_cond_wait, _pthread_cond_signal, _pthread_once, ___cxa_atexit, _fputs, _vsnprintf, ___small_fprintf, _zcalloc, _zcfree, ___dynamic_cast, ___cxa_pure_virtual, _modf, _localtime_r, _strncat, _munmap, ___ctype_get_mb_cur_max, ___ctype_tolower_loc, ___ctype_toupper_loc, _fdopen, _sqrt, _acosl, _aligned_alloc, _atan2l, ___funcs_on_exit, _atexit, ___cxa_finalize, _btowc, _clock, _scalbn, _cosl, _dladdr, ___dl_seterr, _duplocale, __emscripten_find_dylib, _memmove, _memset, _fchmod, _fchmodat, _fchown, _fcntl, _fdopendir, _fmax, _fmin, _fputwc, _frexp, _ftell, _getentropy, _geteuid, _getgid, _mbtowc, _getuid, _getwc, _gmtime, _hypot, _mbrtowc, _ioctl, _isalpha, _isgraph, _isspace, _iswblank_l, _iswcntrl_l, _iswxdigit_l, _isxdigit_l, _pthread_cond_broadcast, _pthread_atfork, _pthread_mutex_trylock, _pthread_create, _pthread_join, _pthread_cond_timedwait, _pthread_detach, _link, _llround, _localtime, _log2, _logb, _lround, _mbrlen, _mbsnrtowcs, _mbsrtowcs, _memmem, _memrchr, _emscripten_builtin_memalign, _socket, _nextafter, _nextafterf, _ntohs, _openat, _pathconf, _perror, _iprintf, ___small_printf, _pthread_mutexattr_getprotocol, _pthread_mutexattr_getpshared, _pthread_mutexattr_getrobust, _pthread_mutexattr_gettype, _pthread_mutexattr_destroy, _pthread_mutexattr_init, _pthread_mutexattr_setprotocol, _pthread_mutexattr_setpshared, _pthread_mutexattr_settype, _putchar, _qsort, _srand, _rand, _remainder, _remove, _remquo, _round, _roundf, __emscripten_timeout, _sinl, _siprintf, _sqrtl, _vsscanf, _statvfs, _strcasecmp, _strerror, _strftime, _strncasecmp, ___floatsitf, ___multf3, ___addtf3, ___extenddftf2, ___getf2, ___subtf3, ___divtf3, ___eqtf2, ___letf2, ___trunctfdf2, _strtold, _strtof_l, _strtod_l, _strtold_l, _strtok, _strtoull_l, _strtoll_l, _swprintf, _connect, _trunc, _ungetc, _ungetwc, _unlinkat, _usleep, _utimensat, _vasprintf, _wcrtomb, _wcscoll_l, _wcsnrtombs, _wcstof, _wcstod, _wcstold, _wcstoull, _wcstoll, _wcstoul, _wcstol, _wcsxfrm_l, _wctob, _wmemchr, _wmemcmp, _emscripten_get_sbrk_ptr, ___ashlti3, ___lttf2, _setThrew, __emscripten_tempret_set, __emscripten_tempret_get, ___fixtfsi, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, ___cxa_decrement_exception_refcount, ___cxa_increment_exception_refcount, ___cxa_bad_cast, ___cxa_bad_typeid, ___cxa_allocate_exception, ___cxa_free_exception, ___cxa_init_primary_exception, ___cxa_get_exception_ptr, ___stack_pointer, ___table_base, _LocalBufferBlockPointers, _BufferBlocks, _wal_level, _CurrentMemoryContext, ___memory_base, _SnapshotAnyData, _debug_query_string, _maintenance_work_mem, __indirect_function_table, _CritSectionCount, _InterruptPending, _ParallelWorkerNumber, _pg_number_of_ones, _TopMemoryContext, _IsUnderPostmaster, _MainLWLockArray, _CurrentResourceOwner, _MyBackendType, _work_mem, _pg_global_prng_state, _NBuffers, _XactIsoLevel, _bsysscan, _CheckXidAlive, _MyProc, _MyDatabaseId, _MyDatabaseTableSpace, _TTSOpsBufferHeapTuple, _RecentXmin, _TTSOpsHeapTuple, _pgWalUsage, _pgBufferUsage, _error_context_stack, _MyLatch, _SnapshotSelfData, ___THREW__, ___threwValue, _PG_exception_stack, _TTSOpsVirtual, _GUC_check_errdetail_string, _TransamVariables, _TopTransactionContext, _InterruptHoldoffCount, _MyProcPid, _RmgrTable, _process_shared_preload_libraries_in_progress, _wal_segment_size, _TopTransactionResourceOwner, _arch_module_check_errdetail_string, _stdout, _stdin, _creating_extension, _object_access_hook, _InvalidObjectAddress, _check_function_bodies, _post_parse_analyze_hook, _ScanKeywordTokens, _ScanKeywords, _standard_conforming_strings, _None_Receiver, _explain_per_plan_hook, _explain_get_index_name_hook, _explain_per_node_hook, _CacheMemoryContext, _SPI_processed, _SPI_tuptable, _TTSOpsMinimalTuple, _check_password_hook, _ConfigReloadPending, _max_parallel_maintenance_workers, _DateStyle, _ExecutorStart_hook, _ExecutorRun_hook, _ExecutorFinish_hook, _ExecutorEnd_hook, _ExecutorCheckPerms_hook, _SPI_result, _stderr, _MyProcPort, _ClientAuthentication_hook, _set_rel_pathlist_hook, _cpu_tuple_cost, _cpu_operator_cost, _seq_page_cost, _planner_hook, _get_relation_info_hook, _QueryCancelPending, _ShutdownRequestPending, _MyStartTime, _cluster_name, _ProcDiePending, _application_name, _row_security_policy_hook_restrictive, _row_security_policy_hook_permissive, _BufferDescriptors, _shmem_startup_hook, _ProcessUtility_hook, _IntervalStyle, _extra_float_digits, _ScanKeywordCategories, _pg_crc32_table, _shmem_request_hook, _z_errmsg, __length_code, __dist_code, ___heap_base, wasmTable;
	function assignWasmExports(e) {
		Module._palloc0 = e.palloc0, Module._RelationGetNumberOfBlocksInFork = e.RelationGetNumberOfBlocksInFork, Module._ExtendBufferedRel = e.ExtendBufferedRel, Module._MarkBufferDirty = e.MarkBufferDirty, Module._XLogBeginInsert = e.XLogBeginInsert, Module._XLogRegisterData = e.XLogRegisterData, Module._XLogRegisterBuffer = e.XLogRegisterBuffer, Module._XLogInsert = e.XLogInsert, Module._UnlockReleaseBuffer = e.UnlockReleaseBuffer, Module._palloc = e.palloc, Module._brin_build_desc = e.brin_build_desc, Module._EnterParallelMode = e.EnterParallelMode, Module._CreateParallelContext = e.CreateParallelContext, Module._GetTransactionSnapshot = e.GetTransactionSnapshot, Module._RegisterSnapshot = e.RegisterSnapshot, Module._table_parallelscan_estimate = e.table_parallelscan_estimate, Module._add_size = e.add_size, Module._tuplesort_estimate_shared = e.tuplesort_estimate_shared, Module._mul_size = e.mul_size, Module._strlen = e.strlen, Module._InitializeParallelDSM = e.InitializeParallelDSM, Module._UnregisterSnapshot = e.UnregisterSnapshot, Module._DestroyParallelContext = e.DestroyParallelContext, Module._ExitParallelMode = e.ExitParallelMode, Module._shm_toc_allocate = e.shm_toc_allocate, Module._ConditionVariableInit = e.ConditionVariableInit, Module._table_parallelscan_initialize = e.table_parallelscan_initialize, Module._tuplesort_initialize_shared = e.tuplesort_initialize_shared, Module._shm_toc_insert = e.shm_toc_insert, Module._LaunchParallelWorkers = e.LaunchParallelWorkers, Module._WaitForParallelWorkersToAttach = e.WaitForParallelWorkersToAttach, Module._s_lock = e.s_lock, Module._ConditionVariableSleep = e.ConditionVariableSleep, Module._ConditionVariableCancelSleep = e.ConditionVariableCancelSleep, Module._tuplesort_performsort = e.tuplesort_performsort, Module._AllocSetContextCreateInternal = e.AllocSetContextCreateInternal, Module._tuplesort_end = e.tuplesort_end, Module._MemoryContextReset = e.MemoryContextReset, Module._brin_deform_tuple = e.brin_deform_tuple, Module._pfree = e.pfree, Module._MemoryContextDelete = e.MemoryContextDelete, Module._errstart_cold = e.errstart_cold, Module._errmsg_internal = e.errmsg_internal, Module._errfinish = e.errfinish, Module._log_newpage_buffer = e.log_newpage_buffer, Module._ProcessInterrupts = e.ProcessInterrupts, Module._errstart = e.errstart, Module._errcode = e.errcode, Module._errmsg = e.errmsg, Module._LockBuffer = e.LockBuffer, Module._ReleaseBuffer = e.ReleaseBuffer, Module._IndexGetRelation = e.IndexGetRelation, Module._table_open = e.table_open, Module._ReadBufferExtended = e.ReadBufferExtended, Module._table_close = e.table_close, Module._build_reloptions = e.build_reloptions, Module._RelationGetIndexScan = e.RelationGetIndexScan, Module._pgstat_assoc_relation = e.pgstat_assoc_relation, Module._palloc0_mul = e.palloc0_mul, Module._index_getprocinfo = e.index_getprocinfo, Module._fmgr_info_copy = e.fmgr_info_copy, Module._FunctionCall4Coll = e.FunctionCall4Coll, Module._palloc_mul = e.palloc_mul, Module._FunctionCall1Coll = e.FunctionCall1Coll, Module._brin_free_desc = e.brin_free_desc, Module._WaitForParallelWorkersToFinish = e.WaitForParallelWorkersToFinish, Module._PageGetFreeSpace = e.PageGetFreeSpace, Module._BufferGetBlockNumber = e.BufferGetBlockNumber, Module._BuildIndexInfo = e.BuildIndexInfo, Module._Int64GetDatum = e.Int64GetDatum, Module._DirectFunctionCall2Coll = e.DirectFunctionCall2Coll, Module._RecoveryInProgress = e.RecoveryInProgress, Module._GetUserIdAndSecContext = e.GetUserIdAndSecContext, Module._SetUserIdAndSecContext = e.SetUserIdAndSecContext, Module._NewGUCNestLevel = e.NewGUCNestLevel, Module._RestrictSearchPath = e.RestrictSearchPath, Module._index_open = e.index_open, Module._object_ownercheck = e.object_ownercheck, Module._aclcheck_error = e.aclcheck_error, Module._AtEOXact_GUC = e.AtEOXact_GUC, Module._relation_close = e.relation_close, Module._errhint = e.errhint, Module._GetUserId = e.GetUserId, Module._ReadBuffer = e.ReadBuffer, Module._shm_toc_lookup = e.shm_toc_lookup, Module._pgstat_report_activity = e.pgstat_report_activity, Module._tuplesort_attach_shared = e.tuplesort_attach_shared, Module._index_close = e.index_close, Module._table_beginscan_parallel = e.table_beginscan_parallel, Module._ConditionVariableSignal = e.ConditionVariableSignal, Module._datumCopy = e.datumCopy, Module._lookup_type_cache = e.lookup_type_cache, Module._get_fn_opclass_options = e.get_fn_opclass_options, Module._log = e.log, Module._pg_detoast_datum = e.pg_detoast_datum, Module._index_getprocid = e.index_getprocid, Module._errdetail_internal = e.errdetail_internal, Module._pg_popcount_optimized = e.pg_popcount_optimized, Module._init_local_reloptions = e.init_local_reloptions, Module._initStringInfo = e.initStringInfo, Module._appendStringInfoChar = e.appendStringInfoChar, Module._appendStringInfo = e.appendStringInfo, Module._FunctionCall2Coll = e.FunctionCall2Coll, Module._SearchSysCache4 = e.SearchSysCache4, Module._SysCacheGetAttrNotNull = e.SysCacheGetAttrNotNull, Module._ReleaseSysCache = e.ReleaseSysCache, Module._get_opcode = e.get_opcode, Module._fmgr_info_cxt = e.fmgr_info_cxt, Module._Float8GetDatum = e.Float8GetDatum, Module._numeric_float8 = e.numeric_float8, Module._numeric_sub = e.numeric_sub, Module._DirectFunctionCall1Coll = e.DirectFunctionCall1Coll, Module._pg_detoast_datum_packed = e.pg_detoast_datum_packed, Module._pg_qsort = e.pg_qsort, Module._get_typbyval = e.get_typbyval, Module._get_typlen = e.get_typlen, Module._qsort_arg = e.qsort_arg, Module._add_local_int_reloption = e.add_local_int_reloption, Module._getTypeOutputInfo = e.getTypeOutputInfo, Module._fmgr_info = e.fmgr_info, Module._OutputFunctionCall = e.OutputFunctionCall, Module._cstring_to_text_with_len = e.cstring_to_text_with_len, Module._accumArrayResult = e.accumArrayResult, Module._makeArrayResult = e.makeArrayResult, Module._OidOutputFunctionCall = e.OidOutputFunctionCall, Module._cstring_to_text = e.cstring_to_text, Module._PageGetExactFreeSpace = e.PageGetExactFreeSpace, Module._PageIndexTupleOverwrite = e.PageIndexTupleOverwrite, Module._PageInit = e.PageInit, Module._PageAddItemExtended = e.PageAddItemExtended, Module._LockRelationForExtension = e.LockRelationForExtension, Module._UnlockRelationForExtension = e.UnlockRelationForExtension, Module._smgropen = e.smgropen, Module._smgrpin = e.smgrpin, Module._ItemPointerEquals = e.ItemPointerEquals, Module._detoast_external_attr = e.detoast_external_attr, Module._CreateTemplateTupleDesc = e.CreateTemplateTupleDesc, Module._TupleDescInitEntry = e.TupleDescInitEntry, Module._repalloc = e.repalloc, Module._memcmp = e.memcmp, Module._SearchSysCache1 = e.SearchSysCache1, Module._get_opfamily_name = e.get_opfamily_name, Module._SearchSysCacheList = e.SearchSysCacheList, Module._check_amproc_signature = e.check_amproc_signature, Module._check_amoptsproc_signature = e.check_amoptsproc_signature, Module._format_procedure = e.format_procedure, Module._format_operator = e.format_operator, Module._check_amop_signature = e.check_amop_signature, Module._identify_opfamily_groups = e.identify_opfamily_groups, Module._format_type_be = e.format_type_be, Module._ReleaseCatCacheList = e.ReleaseCatCacheList, Module._format_type_with_typemod = e.format_type_with_typemod, Module._errdetail = e.errdetail, Module._strcmp = e.strcmp, Module._DatumGetEOHP = e.DatumGetEOHP, Module._EOH_get_flat_size = e.EOH_get_flat_size, Module._EOH_flatten_into = e.EOH_flatten_into, Module._toast_raw_datum_size = e.toast_raw_datum_size, Module._getmissingattr = e.getmissingattr, Module._hash_create = e.hash_create, Module._hash_search = e.hash_search, Module._nocachegetattr = e.nocachegetattr, Module._heap_getsysattr = e.heap_getsysattr, Module._heap_form_tuple = e.heap_form_tuple, Module._heap_modify_tuple = e.heap_modify_tuple, Module._heap_deform_tuple = e.heap_deform_tuple, Module._heap_modify_tuple_by_cols = e.heap_modify_tuple_by_cols, Module._heap_freetuple = e.heap_freetuple, Module._hash_bytes = e.hash_bytes, Module._index_form_tuple = e.index_form_tuple, Module._MemoryContextAllocZero = e.MemoryContextAllocZero, Module._nocache_index_getattr = e.nocache_index_getattr, Module._index_deform_tuple = e.index_deform_tuple, Module._CopyIndexTuple = e.CopyIndexTuple, Module._CreateTupleDescTruncatedCopy = e.CreateTupleDescTruncatedCopy, Module._enlargeStringInfo = e.enlargeStringInfo, Module._slot_getsomeattrs_int = e.slot_getsomeattrs_int, Module._pg_lltoa = e.pg_lltoa, Module._pg_ltoa = e.pg_ltoa, Module._pq_sendbytes = e.pq_sendbytes, Module._pg_printf = e.pg_printf, Module._relation_open = e.relation_open, Module._LockRelationOid = e.LockRelationOid, Module._RelationIdGetRelation = e.RelationIdGetRelation, Module._try_relation_open = e.try_relation_open, Module._SearchSysCacheExists = e.SearchSysCacheExists, Module._UnlockRelationOid = e.UnlockRelationOid, Module._relation_openrv = e.relation_openrv, Module._AcceptInvalidationMessages = e.AcceptInvalidationMessages, Module._RangeVarGetRelidExtended = e.RangeVarGetRelidExtended, Module._RelationClose = e.RelationClose, Module._add_reloption_kind = e.add_reloption_kind, Module._register_reloptions_validator = e.register_reloptions_validator, Module._lappend = e.lappend, Module._pstrdup = e.pstrdup, Module._add_int_reloption = e.add_int_reloption, Module._add_real_reloption = e.add_real_reloption, Module._add_enum_reloption = e.add_enum_reloption, Module._add_string_reloption = e.add_string_reloption, Module._strdup = e.strdup, Module._MemoryContextStrdup = e.MemoryContextStrdup, Module._transformRelOptions = e.transformRelOptions, Module._deconstruct_array_builtin = e.deconstruct_array_builtin, Module._strncmp = e.strncmp, Module._defGetString = e.defGetString, Module._strchr = e.strchr, Module._defGetBoolean = e.defGetBoolean, Module._pg_sprintf = e.pg_sprintf, Module._untransformRelOptions = e.untransformRelOptions, Module._text_to_cstring = e.text_to_cstring, Module._makeString = e.makeString, Module._makeDefElem = e.makeDefElem, Module._heap_reloptions = e.heap_reloptions, Module._index_reloptions = e.index_reloptions, Module._strcpy = e.strcpy, Module._MemoryContextAlloc = e.MemoryContextAlloc, Module._parse_bool = e.parse_bool, Module._parse_int = e.parse_int, Module._parse_real = e.parse_real, Module._pg_strcasecmp = e.pg_strcasecmp, Module._ScanKeyInit = e.ScanKeyInit, Module._dsm_segment_handle = e.dsm_segment_handle, Module._dsm_create = e.dsm_create, Module._dsm_segment_address = e.dsm_segment_address, Module._dsa_pin_mapping = e.dsa_pin_mapping, Module._dsm_attach = e.dsm_attach, Module._dsm_detach = e.dsm_detach, Module._ShmemInitStruct = e.ShmemInitStruct, Module._LWLockAcquire = e.LWLockAcquire, Module._LWLockRelease = e.LWLockRelease, Module._LWLockConditionalAcquire = e.LWLockConditionalAcquire, Module._dsa_create_ext = e.dsa_create_ext, Module._dsa_allocate_extended = e.dsa_allocate_extended, Module._dsa_get_address = e.dsa_get_address, Module._LWLockInitialize = e.LWLockInitialize, Module._dsa_attach = e.dsa_attach, Module._dsa_free = e.dsa_free, Module._dsa_get_total_size = e.dsa_get_total_size, Module._MemoryContextMemAllocated = e.MemoryContextMemAllocated, Module._check_stack_depth = e.check_stack_depth, Module._GetCurrentCommandId = e.GetCurrentCommandId, Module._toast_open_indexes = e.toast_open_indexes, Module._GetNewOidWithIndex = e.GetNewOidWithIndex, Module._heap_insert = e.heap_insert, Module._RelationGetIndexList = e.RelationGetIndexList, Module._list_free = e.list_free, Module._systable_beginscan = e.systable_beginscan, Module._systable_getnext = e.systable_getnext, Module._systable_endscan = e.systable_endscan, Module._toast_close_indexes = e.toast_close_indexes, Module._systable_beginscan_ordered = e.systable_beginscan_ordered, Module._systable_getnext_ordered = e.systable_getnext_ordered, Module._systable_endscan_ordered = e.systable_endscan_ordered, Module._get_toast_snapshot = e.get_toast_snapshot, Module._convert_tuples_by_position = e.convert_tuples_by_position, Module._execute_attr_map_tuple = e.execute_attr_map_tuple, Module._ExecStoreVirtualTuple = e.ExecStoreVirtualTuple, Module._bms_is_member = e.bms_is_member, Module._bms_add_member = e.bms_add_member, Module._free_conversion_map = e.free_conversion_map, Module._CreateTupleDescCopy = e.CreateTupleDescCopy, Module._FreeTupleDesc = e.FreeTupleDesc, Module._ResourceOwnerEnlarge = e.ResourceOwnerEnlarge, Module._ResourceOwnerRemember = e.ResourceOwnerRemember, Module._DecrTupleDescRefCount = e.DecrTupleDescRefCount, Module._ResourceOwnerForget = e.ResourceOwnerForget, Module._datumIsEqual = e.datumIsEqual, Module._equalRowTypes = e.equalRowTypes, Module._hashRowType = e.hashRowType, Module._namestrcpy = e.namestrcpy, Module._TupleDescInitEntryCollation = e.TupleDescInitEntryCollation, Module._BuildDescFromLists = e.BuildDescFromLists, Module._stringToNode = e.stringToNode, Module._psprintf = e.psprintf, Module._pg_detoast_datum_copy = e.pg_detoast_datum_copy, Module._get_typlenbyvalalign = e.get_typlenbyvalalign, Module._deconstruct_array = e.deconstruct_array, Module._ginCompareAttEntries = e.ginCompareAttEntries, Module._repalloc_huge = e.repalloc_huge, Module._GinDataLeafPageGetItems = e.GinDataLeafPageGetItems, Module._tbm_add_tuples = e.tbm_add_tuples, Module._ginPostingListDecode = e.ginPostingListDecode, Module._ItemPointerCompare = e.ItemPointerCompare, Module._gintuple_get_attrnum = e.gintuple_get_attrnum, Module._gintuple_get_key = e.gintuple_get_key, Module._LockPage = e.LockPage, Module._UnlockPage = e.UnlockPage, Module._vacuum_delay_point = e.vacuum_delay_point, Module._RecordFreeIndexPage = e.RecordFreeIndexPage, Module._IndexFreeSpaceMapVacuum = e.IndexFreeSpaceMapVacuum, Module._repalloc_mul = e.repalloc_mul, Module._initGinState = e.initGinState, Module._pg_prng_double = e.pg_prng_double, Module._pgstat_progress_update_param = e.pgstat_progress_update_param, Module._log_newpage_range = e.log_newpage_range, Module._GetFreeIndexPage = e.GetFreeIndexPage, Module._ConditionalLockBuffer = e.ConditionalLockBuffer, Module._LockBufferForCleanup = e.LockBufferForCleanup, Module._ReadNextFullTransactionId = e.ReadNextFullTransactionId, Module._PageIndexMultiDelete = e.PageIndexMultiDelete, Module._list_make1_impl = e.list_make1_impl, Module._list_delete_first = e.list_delete_first, Module._lcons = e.lcons, Module._pow = e.pow, Module._smgrnblocks = e.smgrnblocks, Module._list_free_deep = e.list_free_deep, Module._BufFileCreateTemp = e.BufFileCreateTemp, Module._BufFileWrite = e.BufFileWrite, Module._BufFileReadExact = e.BufFileReadExact, Module._BufFileClose = e.BufFileClose, Module._pairingheap_remove_first = e.pairingheap_remove_first, Module._pairingheap_add = e.pairingheap_add, Module._float_overflow_error = e.float_overflow_error, Module._float8_cmp_internal = e.float8_cmp_internal, Module._float_underflow_error = e.float_underflow_error, Module._DirectFunctionCall5Coll = e.DirectFunctionCall5Coll, Module._pairingheap_allocate = e.pairingheap_allocate, Module._get_func_rettype = e.get_func_rettype, Module._OidFunctionCall1Coll = e.OidFunctionCall1Coll, Module._GenerationContextCreate = e.GenerationContextCreate, Module._block_range_read_stream_cb = e.block_range_read_stream_cb, Module._read_stream_begin_relation = e.read_stream_begin_relation, Module._read_stream_next_buffer = e.read_stream_next_buffer, Module._read_stream_end = e.read_stream_end, Module._estimate_rel_size = e.estimate_rel_size, Module.__hash_spareindex = e._hash_spareindex, Module.__hash_getbuf = e._hash_getbuf, Module.__hash_relbuf = e._hash_relbuf, Module.__hash_get_indextuple_hashkey = e._hash_get_indextuple_hashkey, Module._hashcharextended = e.hashcharextended, Module._hashint8 = e.hashint8, Module._hashint8extended = e.hashint8extended, Module._hash_bytes_extended = e.hash_bytes_extended, Module._hashfloat8 = e.hashfloat8, Module._hashfloat8extended = e.hashfloat8extended, Module._pg_newlocale_from_collation = e.pg_newlocale_from_collation, Module.__hash_ovflblkno_to_bitno = e._hash_ovflblkno_to_bitno, Module.__hash_get_totalbuckets = e._hash_get_totalbuckets, Module._hash_destroy = e.hash_destroy, Module._list_append_unique_oid = e.list_append_unique_oid, Module._list_member_oid = e.list_member_oid, Module._CommandCounterIncrement = e.CommandCounterIncrement, Module._get_opclass_input_type = e.get_opclass_input_type, Module._list_concat_copy = e.list_concat_copy, Module._HeapTupleSatisfiesVisibility = e.HeapTupleSatisfiesVisibility, Module._GetAccessStrategy = e.GetAccessStrategy, Module._FreeAccessStrategy = e.FreeAccessStrategy, Module._heap_getnext = e.heap_getnext, Module._ExecStoreBufferHeapTuple = e.ExecStoreBufferHeapTuple, Module._heap_fetch = e.heap_fetch, Module._HeapTupleSatisfiesVacuum = e.HeapTupleSatisfiesVacuum, Module._GetMultiXactIdMembers = e.GetMultiXactIdMembers, Module._TransactionIdPrecedes = e.TransactionIdPrecedes, Module._GetBulkInsertState = e.GetBulkInsertState, Module._FreeBulkInsertState = e.FreeBulkInsertState, Module._visibilitymap_clear_locked = e.visibilitymap_clear_locked, Module._pgstat_count_heap_insert = e.pgstat_count_heap_insert, Module._heap_multi_insert = e.heap_multi_insert, Module._ExecFetchSlotHeapTuple = e.ExecFetchSlotHeapTuple, Module._heap_delete = e.heap_delete, Module._IsInParallelMode = e.IsInParallelMode, Module._visibilitymap_pin = e.visibilitymap_pin, Module._HeapTupleSatisfiesUpdate = e.HeapTupleSatisfiesUpdate, Module._TransactionIdIsCurrentTransactionId = e.TransactionIdIsCurrentTransactionId, Module._TransactionIdDidCommit = e.TransactionIdDidCommit, Module._UnlockTuple = e.UnlockTuple, Module._TransactionIdIsInProgress = e.TransactionIdIsInProgress, Module._bms_free = e.bms_free, Module._bms_add_members = e.bms_add_members, Module._bms_next_member = e.bms_next_member, Module._bms_overlap = e.bms_overlap, Module._HeapTupleGetUpdateXid = e.HeapTupleGetUpdateXid, Module._heap_lock_tuple = e.heap_lock_tuple, Module._MultiXactIdPrecedes = e.MultiXactIdPrecedes, Module._heap_tuple_needs_eventual_freeze = e.heap_tuple_needs_eventual_freeze, Module._PrefetchBuffer = e.PrefetchBuffer, Module._RelationTruncate = e.RelationTruncate, Module._FlushRelationBuffers = e.FlushRelationBuffers, Module._smgrexists = e.smgrexists, Module._table_slot_create = e.table_slot_create, Module._ExecDropSingleTupleTableSlot = e.ExecDropSingleTupleTableSlot, Module._CreateExecutorState = e.CreateExecutorState, Module._MakePerTupleExprContext = e.MakePerTupleExprContext, Module._ExecPrepareQual = e.ExecPrepareQual, Module._GetOldestNonRemovableTransactionId = e.GetOldestNonRemovableTransactionId, Module._FormIndexDatum = e.FormIndexDatum, Module._FreeExecutorState = e.FreeExecutorState, Module._MakeSingleTupleTableSlot = e.MakeSingleTupleTableSlot, Module._tuplesort_getdatum = e.tuplesort_getdatum, Module._ExecStoreHeapTuple = e.ExecStoreHeapTuple, Module._XidInMVCCSnapshot = e.XidInMVCCSnapshot, Module._bsearch = e.bsearch, Module._XLogRecGetBlockTagExtended = e.XLogRecGetBlockTagExtended, Module._hash_seq_init = e.hash_seq_init, Module._hash_seq_search = e.hash_seq_search, Module._errcode_for_file_access = e.errcode_for_file_access, Module._pg_snprintf = e.pg_snprintf, Module._OpenTransientFile = e.OpenTransientFile, Module._ftruncate = e.ftruncate, Module.___errno_location = e.__errno_location, Module._pwrite = e.pwrite, Module._CloseTransientFile = e.CloseTransientFile, Module._sscanf = e.sscanf, Module._unlink = e.unlink, Module._fsync_fname = e.fsync_fname, Module._GetCurrentTimestamp = e.GetCurrentTimestamp, Module._get_database_name = e.get_database_name, Module._get_namespace_name = e.get_namespace_name, Module._pg_prng_uint32 = e.pg_prng_uint32, Module._GetRecordedFreeSpace = e.GetRecordedFreeSpace, Module._visibilitymap_get_status = e.visibilitymap_get_status, Module._vac_estimate_reltuples = e.vac_estimate_reltuples, Module._WaitLatch = e.WaitLatch, Module._ResetLatch = e.ResetLatch, Module._clock_gettime = e.clock_gettime, Module._WalUsageAccumDiff = e.WalUsageAccumDiff, Module._BufferUsageAccumDiff = e.BufferUsageAccumDiff, Module._appendStringInfoString = e.appendStringInfoString, Module._set_errcontext_domain = e.set_errcontext_domain, Module._errcontext_msg = e.errcontext_msg, Module._visibilitymap_prepare_truncate = e.visibilitymap_prepare_truncate, Module._GetIndexAmRoutine = e.GetIndexAmRoutine, Module._check_enable_rls = e.check_enable_rls, Module._pg_class_aclcheck = e.pg_class_aclcheck, Module._pg_attribute_aclcheck = e.pg_attribute_aclcheck, Module._try_index_open = e.try_index_open, Module._btboolcmp = e.btboolcmp, Module._btint2cmp = e.btint2cmp, Module._btint4cmp = e.btint4cmp, Module._btint8cmp = e.btint8cmp, Module._btoidcmp = e.btoidcmp, Module._btcharcmp = e.btcharcmp, Module.__bt_form_posting = e._bt_form_posting, Module.__bt_mkscankey = e._bt_mkscankey, Module.__bt_checkpage = e._bt_checkpage, Module.__bt_compare = e._bt_compare, Module.__bt_relbuf = e._bt_relbuf, Module.__bt_search = e._bt_search, Module.__bt_binsrch_insert = e._bt_binsrch_insert, Module.__bt_freestack = e._bt_freestack, Module.__bt_metaversion = e._bt_metaversion, Module._get_opfamily_member = e.get_opfamily_member, Module._OidFunctionCall2Coll = e.OidFunctionCall2Coll, Module.__bt_allequalimage = e._bt_allequalimage, Module.___wasm_setjmp_test = e.__wasm_setjmp_test, Module._before_shmem_exit = e.before_shmem_exit, Module.___wasm_setjmp = e.__wasm_setjmp, Module._cancel_before_shmem_exit = e.cancel_before_shmem_exit, Module._pg_re_throw = e.pg_re_throw, Module._emscripten_longjmp = e.emscripten_longjmp, Module._ConditionVariableBroadcast = e.ConditionVariableBroadcast, Module._datum_image_eq = e.datum_image_eq, Module._time = e.time, Module.__bt_check_natts = e._bt_check_natts, Module._strlcpy = e.strlcpy, Module._strncpy = e.strncpy, Module._timestamptz_to_str = e.timestamptz_to_str, Module._XLogRecGetBlockRefInfo = e.XLogRecGetBlockRefInfo, Module._varstr_cmp = e.varstr_cmp, Module._get_atttype = e.get_atttype, Module._getBaseType = e.getBaseType, Module._exprType = e.exprType, Module._GetActiveSnapshot = e.GetActiveSnapshot, Module._errdetail_relkind_not_supported = e.errdetail_relkind_not_supported, Module._table_openrv = e.table_openrv, Module._table_slot_callbacks = e.table_slot_callbacks, Module._clamp_row_est = e.clamp_row_est, Module._pre_format_elog_string = e.pre_format_elog_string, Module._format_elog_string = e.format_elog_string, Module._IsTransactionState = e.IsTransactionState, Module._estimate_expression_value = e.estimate_expression_value, Module._SetConfigOption = e.SetConfigOption, Module._XLogFlush = e.XLogFlush, Module._get_call_result_type = e.get_call_result_type, Module._HeapTupleHeaderGetDatum = e.HeapTupleHeaderGetDatum, Module._GenericXLogStart = e.GenericXLogStart, Module._GenericXLogRegisterBuffer = e.GenericXLogRegisterBuffer, Module._GenericXLogFinish = e.GenericXLogFinish, Module._GenericXLogAbort = e.GenericXLogAbort, Module._errmsg_plural = e.errmsg_plural, Module._ReadNextMultiXactId = e.ReadNextMultiXactId, Module._ReadMultiXactIdRange = e.ReadMultiXactIdRange, Module._MultiXactIdPrecedesOrEquals = e.MultiXactIdPrecedesOrEquals, Module._init_MultiFuncCall = e.init_MultiFuncCall, Module._TupleDescGetAttInMetadata = e.TupleDescGetAttInMetadata, Module._per_MultiFuncCall = e.per_MultiFuncCall, Module._BuildTupleFromCStrings = e.BuildTupleFromCStrings, Module._end_MultiFuncCall = e.end_MultiFuncCall, Module._GetCurrentSubTransactionId = e.GetCurrentSubTransactionId, Module._GetSessionUserId = e.GetSessionUserId, Module._WaitForBackgroundWorkerShutdown = e.WaitForBackgroundWorkerShutdown, Module._RegisterDynamicBackgroundWorker = e.RegisterDynamicBackgroundWorker, Module._appendBinaryStringInfo = e.appendBinaryStringInfo, Module._pq_getmsgbyte = e.pq_getmsgbyte, Module._ThrowErrorData = e.ThrowErrorData, Module._pq_getmsgint = e.pq_getmsgint, Module._pq_getmsgint64 = e.pq_getmsgint64, Module._die = e.die, Module._pqsignal_be = e.pqsignal_be, Module._BackgroundWorkerUnblockSignals = e.BackgroundWorkerUnblockSignals, Module._load_external_function = e.load_external_function, Module._BackgroundWorkerInitializeConnectionByOid = e.BackgroundWorkerInitializeConnectionByOid, Module._GetDatabaseEncoding = e.GetDatabaseEncoding, Module._StartTransactionCommand = e.StartTransactionCommand, Module._CommitTransactionCommand = e.CommitTransactionCommand, Module._PushActiveSnapshot = e.PushActiveSnapshot, Module._PopActiveSnapshot = e.PopActiveSnapshot, Module._RmgrNotFound = e.RmgrNotFound, Module._InitMaterializedSRF = e.InitMaterializedSRF, Module._tuplestore_putvalues = e.tuplestore_putvalues, Module._pread = e.pread, Module._lseek = e.lseek, Module._strspn = e.strspn, Module._strtoll = e.strtoll, Module._AllocateFile = e.AllocateFile, Module._fgets = e.fgets, Module._ferror = e.ferror, Module._FreeFile = e.FreeFile, Module._getpid = e.getpid, Module._read = e.read, Module._write = e.write, Module._durable_rename = e.durable_rename, Module._BlessTupleDesc = e.BlessTupleDesc, Module._fstat = e.fstat, Module._superuser_arg = e.superuser_arg, Module._wal_segment_close = e.wal_segment_close, Module._wal_segment_open = e.wal_segment_open, Module._XLogReaderAllocate = e.XLogReaderAllocate, Module._XLogReadRecord = e.XLogReadRecord, Module._XLogReaderFree = e.XLogReaderFree, Module._strtoull = e.strtoull, Module._access = e.access, Module._IsAbortedTransactionBlockState = e.IsAbortedTransactionBlockState, Module._GetTopFullTransactionId = e.GetTopFullTransactionId, Module._GetCurrentFullTransactionId = e.GetCurrentFullTransactionId, Module._GetCurrentTransactionNestLevel = e.GetCurrentTransactionNestLevel, Module._ResourceOwnerCreate = e.ResourceOwnerCreate, Module._AbortCurrentTransaction = e.AbortCurrentTransaction, Module._PreventInTransactionBlock = e.PreventInTransactionBlock, Module._IsTransactionBlock = e.IsTransactionBlock, Module._RegisterXactCallback = e.RegisterXactCallback, Module._UnregisterXactCallback = e.UnregisterXactCallback, Module._RegisterSubXactCallback = e.RegisterSubXactCallback, Module._BeginInternalSubTransaction = e.BeginInternalSubTransaction, Module._ReleaseCurrentSubTransaction = e.ReleaseCurrentSubTransaction, Module._ResourceOwnerDelete = e.ResourceOwnerDelete, Module._RollbackAndReleaseCurrentSubTransaction = e.RollbackAndReleaseCurrentSubTransaction, Module._pg_usleep = e.pg_usleep, Module._close = e.close, Module._ReleaseExternalFD = e.ReleaseExternalFD, Module._GetDefaultCharSignedness = e.GetDefaultCharSignedness, Module._SplitIdentifierString = e.SplitIdentifierString, Module._guc_malloc = e.guc_malloc, Module._find_option = e.find_option, Module._gettimeofday = e.gettimeofday, Module._pg_strong_random = e.pg_strong_random, Module._stat = e.stat, Module._GetFlushRecPtr = e.GetFlushRecPtr, Module._GetXLogReplayRecPtr = e.GetXLogReplayRecPtr, Module._TimestampDifferenceMilliseconds = e.TimestampDifferenceMilliseconds, Module._strtoul = e.strtoul, Module._readlink = e.readlink, Module._pg_fprintf = e.pg_fprintf, _fflush = Module._fflush = e.fflush, Module._pgl_system = e.pgl_system, Module._wait_result_to_str = e.wait_result_to_str, Module._replace_percent_placeholders = e.replace_percent_placeholders, Module._makeStringInfo = e.makeStringInfo, Module._pg_toupper = e.pg_toupper, Module._numeric_in = e.numeric_in, Module._DirectFunctionCall3Coll = e.DirectFunctionCall3Coll, Module._palloc_extended = e.palloc_extended, Module._pg_vsnprintf = e.pg_vsnprintf, Module._XLogFindNextRecord = e.XLogFindNextRecord, Module._RestoreBlockImage = e.RestoreBlockImage, Module._timestamptz_in = e.timestamptz_in, Module._fscanf = e.fscanf, Module._symlink = e.symlink, Module._ConditionVariableTimedSleep = e.ConditionVariableTimedSleep, Module._ParseDateTime = e.ParseDateTime, Module._DecodeDateTime = e.DecodeDateTime, Module._tm2timestamp = e.tm2timestamp, Module._XLogRecStoreStats = e.XLogRecStoreStats, Module._hash_get_num_entries = e.hash_get_num_entries, Module._read_local_xlog_page_no_wait = e.read_local_xlog_page_no_wait, Module._escape_json_with_len = e.escape_json_with_len, Module._BufFileSeek = e.BufFileSeek, Module._lstat = e.lstat, Module._destroyStringInfo = e.destroyStringInfo, Module._list_sort = e.list_sort, Module._pgl_geteuid = e.pgl_geteuid, Module._getegid = e.getegid, Module._pg_checksum_page = e.pg_checksum_page, Module._CreateDestReceiver = e.CreateDestReceiver, Module._bbsink_forward_end_archive = e.bbsink_forward_end_archive, Module._bbsink_forward_begin_manifest = e.bbsink_forward_begin_manifest, Module._bbsink_forward_end_manifest = e.bbsink_forward_end_manifest, Module._bbsink_forward_end_backup = e.bbsink_forward_end_backup, Module._bbsink_forward_cleanup = e.bbsink_forward_cleanup, Module._MemoryContextAllocExtended = e.MemoryContextAllocExtended, Module._appendStringInfoVA = e.appendStringInfoVA, Module._list_concat = e.list_concat, Module._strrchr = e.strrchr, Module._bbsink_forward_begin_backup = e.bbsink_forward_begin_backup, Module._bbsink_forward_archive_contents = e.bbsink_forward_archive_contents, Module._bbsink_forward_begin_archive = e.bbsink_forward_begin_archive, Module._bbsink_forward_manifest_contents = e.bbsink_forward_manifest_contents, Module._has_privs_of_role = e.has_privs_of_role, Module._BaseBackupAddTarget = e.BaseBackupAddTarget, Module._list_copy = e.list_copy, Module._tuplestore_puttuple = e.tuplestore_puttuple, Module._isatty = e.isatty, Module._makeRangeVar = e.makeRangeVar, Module._DefineIndex = e.DefineIndex, Module._getc = e.getc, Module._fread = e.fread, Module._clearerr = e.clearerr, Module._OidInputFunctionCall = e.OidInputFunctionCall, Module._copyObjectImpl = e.copyObjectImpl, Module._get_rolespec_oid = e.get_rolespec_oid, Module._lappend_oid = e.lappend_oid, Module._get_object_address = e.get_object_address, Module._makeTypeNameFromNameList = e.makeTypeNameFromNameList, Module._SearchSysCacheLocked1 = e.SearchSysCacheLocked1, Module._SearchSysCache2 = e.SearchSysCache2, Module._SysCacheGetAttr = e.SysCacheGetAttr, Module._CatalogTupleUpdate = e.CatalogTupleUpdate, Module._get_attnum = e.get_attnum, Module._get_rel_name = e.get_rel_name, Module._CatalogTupleDelete = e.CatalogTupleDelete, Module._get_namespace_oid = e.get_namespace_oid, Module._SearchSysCache3 = e.SearchSysCache3, Module._performDeletion = e.performDeletion, Module._CatalogTupleInsert = e.CatalogTupleInsert, Module._recordDependencyOn = e.recordDependencyOn, Module._RunObjectPostAlterHook = e.RunObjectPostAlterHook, Module._aclcheck_error_col = e.aclcheck_error_col, Module._get_element_type = e.get_element_type, Module._object_aclcheck = e.object_aclcheck, Module._isTempNamespace = e.isTempNamespace, Module._pg_attribute_aclcheck_all = e.pg_attribute_aclcheck_all, Module._IsToastNamespace = e.IsToastNamespace, Module._IsCatalogNamespace = e.IsCatalogNamespace, Module._superuser = e.superuser, Module._SearchSysCacheAttName = e.SearchSysCacheAttName, Module._LockDatabaseObject = e.LockDatabaseObject, Module._new_object_addresses = e.new_object_addresses, Module._UnlockDatabaseObject = e.UnlockDatabaseObject, Module._free_object_addresses = e.free_object_addresses, Module._performMultipleDeletions = e.performMultipleDeletions, Module._recordDependencyOnExpr = e.recordDependencyOnExpr, Module._get_typ_typrelid = e.get_typ_typrelid, Module._query_tree_walker_impl = e.query_tree_walker_impl, Module._expression_tree_walker_impl = e.expression_tree_walker_impl, Module._add_exact_object_address = e.add_exact_object_address, Module._get_rel_relkind = e.get_rel_relkind, Module._SystemAttributeDefinition = e.SystemAttributeDefinition, Module._get_typtype = e.get_typtype, Module._list_delete_last = e.list_delete_last, Module._type_is_collatable = e.type_is_collatable, Module._CatalogOpenIndexes = e.CatalogOpenIndexes, Module._CatalogCloseIndexes = e.CatalogCloseIndexes, Module._get_relname_relid = e.get_relname_relid, Module._GetSysCacheOid = e.GetSysCacheOid, Module._SearchSysCacheCopy = e.SearchSysCacheCopy, Module._CheckTableNotInUse = e.CheckTableNotInUse, Module._RelationForgetRelation = e.RelationForgetRelation, Module._construct_array = e.construct_array, Module._make_parsestate = e.make_parsestate, Module._addRangeTableEntryForRelation = e.addRangeTableEntryForRelation, Module._addNSItemToQuery = e.addNSItemToQuery, Module._transformExpr = e.transformExpr, Module._coerce_to_boolean = e.coerce_to_boolean, Module._assign_expr_collations = e.assign_expr_collations, Module._pull_var_clause = e.pull_var_clause, Module._get_attname = e.get_attname, Module._equal = e.equal, Module._coerce_to_target_type = e.coerce_to_target_type, Module._nodeToString = e.nodeToString, Module._list_delete_nth_cell = e.list_delete_nth_cell, Module._lappend_int = e.lappend_int, Module._CatalogTupleInsertWithInfo = e.CatalogTupleInsertWithInfo, Module._heap_truncate_find_FKs = e.heap_truncate_find_FKs, Module._list_oid_cmp = e.list_oid_cmp, Module._buildint2vector = e.buildint2vector, Module._buildoidvector = e.buildoidvector, Module._parser_errposition = e.parser_errposition, Module._check_functions_in_node = e.check_functions_in_node, Module._exprLocation = e.exprLocation, Module._exprTypmod = e.exprTypmod, Module._get_base_element_type = e.get_base_element_type, Module._make_ands_explicit = e.make_ands_explicit, Module._SystemFuncName = e.SystemFuncName, Module._CreateTrigger = e.CreateTrigger, Module._plan_create_index_workers = e.plan_create_index_workers, Module._GetLatestSnapshot = e.GetLatestSnapshot, Module._make_ands_implicit = e.make_ands_implicit, Module._get_rel_relispartition = e.get_rel_relispartition, Module._get_partition_ancestors = e.get_partition_ancestors, Module._tuplesort_begin_datum = e.tuplesort_begin_datum, Module._tuplesort_putdatum = e.tuplesort_putdatum, Module._list_delete_oid = e.list_delete_oid, Module._get_rel_namespace = e.get_rel_namespace, Module._ExecOpenIndices = e.ExecOpenIndices, Module._ExecCloseIndices = e.ExecCloseIndices, Module._CatalogTupleUpdateWithInfo = e.CatalogTupleUpdateWithInfo, Module._ConditionalLockRelationOid = e.ConditionalLockRelationOid, Module._RelnameGetRelid = e.RelnameGetRelid, Module._get_relkind_objtype = e.get_relkind_objtype, Module._isAnyTempNamespace = e.isAnyTempNamespace, Module._RelationIsVisible = e.RelationIsVisible, Module._TypenameGetTypid = e.TypenameGetTypid, Module._FuncnameGetCandidates = e.FuncnameGetCandidates, Module._DeconstructQualifiedName = e.DeconstructQualifiedName, Module._get_func_arg_info = e.get_func_arg_info, Module._NameListToString = e.NameListToString, Module._OpernameGetOprid = e.OpernameGetOprid, Module._OpclassnameGetOpcid = e.OpclassnameGetOpcid, Module._OpclassIsVisible = e.OpclassIsVisible, Module._get_ts_config_oid = e.get_ts_config_oid, Module._makeRangeVarFromNameList = e.makeRangeVarFromNameList, Module._quote_identifier = e.quote_identifier, Module._atoi = e.atoi, Module._GetSearchPathMatcher = e.GetSearchPathMatcher, Module._SearchPathMatchesCurrentEnvironment = e.SearchPathMatchesCurrentEnvironment, Module._get_collation_oid = e.get_collation_oid, Module._GetDatabaseEncodingName = e.GetDatabaseEncodingName, Module._CacheRegisterSyscacheCallback = e.CacheRegisterSyscacheCallback, Module._fetch_search_path = e.fetch_search_path, Module._get_extension_oid = e.get_extension_oid, Module._get_tablespace_oid = e.get_tablespace_oid, Module._get_role_oid = e.get_role_oid, Module._get_language_oid = e.get_language_oid, Module._get_am_oid = e.get_am_oid, Module._get_index_am_oid = e.get_index_am_oid, Module._GetForeignServerByName = e.GetForeignServerByName, Module._typeStringToTypeName = e.typeStringToTypeName, Module._makeFloat = e.makeFloat, Module._list_make2_impl = e.list_make2_impl, Module._check_object_ownership = e.check_object_ownership, Module._GetUserNameFromId = e.GetUserNameFromId, Module._format_type_extended = e.format_type_extended, Module._quote_qualified_identifier = e.quote_qualified_identifier, Module._get_tablespace_name = e.get_tablespace_name, Module._GetForeignServerExtended = e.GetForeignServerExtended, Module._GetForeignServer = e.GetForeignServer, Module._get_extension_name = e.get_extension_name, Module._construct_empty_array = e.construct_empty_array, Module._format_type_be_qualified = e.format_type_be_qualified, Module._get_namespace_name_or_temp = e.get_namespace_name_or_temp, Module._list_make3_impl = e.list_make3_impl, Module._get_am_name = e.get_am_name, Module._construct_md_array = e.construct_md_array, Module._pull_varattnos = e.pull_varattnos, Module._makeBoolExpr = e.makeBoolExpr, Module._eval_const_expressions = e.eval_const_expressions, Module._get_func_name = e.get_func_name, Module._construct_array_builtin = e.construct_array_builtin, Module._makeObjectName = e.makeObjectName, Module._get_primary_key_attnos = e.get_primary_key_attnos, Module._check_functional_grouping = e.check_functional_grouping, Module._bms_is_subset = e.bms_is_subset, Module._ProcessGUCArray = e.ProcessGUCArray, Module._LockHeldByMe = e.LockHeldByMe, Module._CheckRelationOidLockedByMe = e.CheckRelationOidLockedByMe, Module._getExtensionOfObject = e.getExtensionOfObject, Module._deleteDependencyRecordsFor = e.deleteDependencyRecordsFor, Module._find_inheritance_children = e.find_inheritance_children, Module._ActiveSnapshotSet = e.ActiveSnapshotSet, Module._find_all_inheritors = e.find_all_inheritors, Module._has_superclass = e.has_superclass, Module._strstr = e.strstr, Module._memchr = e.memchr, Module._get_opname = e.get_opname, Module._build_function_result_tupdesc_t = e.build_function_result_tupdesc_t, Module._CheckFunctionValidatorAccess = e.CheckFunctionValidatorAccess, Module._AcquireRewriteLocks = e.AcquireRewriteLocks, Module._pg_parse_query = e.pg_parse_query, Module._get_func_result_type = e.get_func_result_type, Module._function_parse_error_transpose = e.function_parse_error_transpose, Module._geterrposition = e.geterrposition, Module._getinternalerrposition = e.getinternalerrposition, Module._pg_mblen_cstr = e.pg_mblen_cstr, Module._pg_mbstrlen_with_len = e.pg_mbstrlen_with_len, Module._errposition = e.errposition, Module._internalerrposition = e.internalerrposition, Module._internalerrquery = e.internalerrquery, Module._bms_num_members = e.bms_num_members, Module._list_concat_unique_oid = e.list_concat_unique_oid, Module._ATExecChangeOwner = e.ATExecChangeOwner, Module._quote_literal_cstr = e.quote_literal_cstr, Module._get_array_type = e.get_array_type, Module._pnstrdup = e.pnstrdup, Module._pg_mbcliplen = e.pg_mbcliplen, Module._smgrtruncate = e.smgrtruncate, Module._smgrreadv = e.smgrreadv, Module._NewRelationCreateToastTable = e.NewRelationCreateToastTable, Module._parse_analyze_fixedparams = e.parse_analyze_fixedparams, Module._transformStmt = e.transformStmt, Module._free_parsestate = e.free_parsestate, Module._makeFromExpr = e.makeFromExpr, Module._assign_query_collations = e.assign_query_collations, Module._makeTargetEntry = e.makeTargetEntry, Module._exprCollation = e.exprCollation, Module._transformSortClause = e.transformSortClause, Module._transformDistinctClause = e.transformDistinctClause, Module._ParseFuncOrColumn = e.ParseFuncOrColumn, Module._select_common_type = e.select_common_type, Module._coerce_to_common_type = e.coerce_to_common_type, Module._select_common_collation = e.select_common_collation, Module._contain_vars_of_level = e.contain_vars_of_level, Module._expandNSItemAttrs = e.expandNSItemAttrs, Module._makeAlias = e.makeAlias, Module._addRangeTableEntryForSubquery = e.addRangeTableEntryForSubquery, Module._assign_list_collations = e.assign_list_collations, Module._expandNSItemVars = e.expandNSItemVars, Module._markTargetListOrigins = e.markTargetListOrigins, Module._addRangeTableEntryForJoin = e.addRangeTableEntryForJoin, Module._list_truncate = e.list_truncate, Module._makeVar = e.makeVar, Module._analyze_requires_snapshot = e.analyze_requires_snapshot, Module._makeNullConst = e.makeNullConst, Module._get_sort_group_operators = e.get_sort_group_operators, Module._refnameNamespaceItem = e.refnameNamespaceItem, Module._getRTEPermissionInfo = e.getRTEPermissionInfo, Module._setup_parser_errposition_callback = e.setup_parser_errposition_callback, Module._cancel_parser_errposition_callback = e.cancel_parser_errposition_callback, Module._locate_var_of_level = e.locate_var_of_level, Module._makeBoolean = e.makeBoolean, Module._makeInteger = e.makeInteger, Module._makeSimpleA_Expr = e.makeSimpleA_Expr, Module._makeTypeName = e.makeTypeName, Module._SystemTypeName = e.SystemTypeName, Module._makeFuncCall = e.makeFuncCall, Module._makeA_Expr = e.makeA_Expr, Module._list_make4_impl = e.list_make4_impl, Module._addTargetToSortList = e.addTargetToSortList, Module._locate_agg_of_level = e.locate_agg_of_level, Module._list_intersection_int = e.list_intersection_int, Module._get_sortgroupclause_tle = e.get_sortgroupclause_tle, Module._flatten_join_alias_vars = e.flatten_join_alias_vars, Module._list_member_int = e.list_member_int, Module._list_union_int = e.list_union_int, Module._makeFuncExpr = e.makeFuncExpr, Module._get_rte_attribute_name = e.get_rte_attribute_name, Module._expression_tree_mutator_impl = e.expression_tree_mutator_impl, Module._checkNameSpaceConflicts = e.checkNameSpaceConflicts, Module._addRangeTableEntryForENR = e.addRangeTableEntryForENR, Module._addRangeTableEntry = e.addRangeTableEntry, Module._FigureColname = e.FigureColname, Module._addRangeTableEntryForFunction = e.addRangeTableEntryForFunction, Module._coerce_to_specific_type = e.coerce_to_specific_type, Module._typenameTypeIdAndMod = e.typenameTypeIdAndMod, Module._get_typcollation = e.get_typcollation, Module._markNullableIfNeeded = e.markNullableIfNeeded, Module._markVarForSelectPriv = e.markVarForSelectPriv, Module._coerce_type = e.coerce_type, Module._LookupFuncName = e.LookupFuncName, Module._parserOpenTable = e.parserOpenTable, Module._strip_implicit_coercions = e.strip_implicit_coercions, Module._colNameToVar = e.colNameToVar, Module._op_hashjoinable = e.op_hashjoinable, Module._get_commutator = e.get_commutator, Module._get_ordering_op_properties = e.get_ordering_op_properties, Module._can_coerce_type = e.can_coerce_type, Module._get_sortgroupref_tle = e.get_sortgroupref_tle, Module._assignSortGroupRef = e.assignSortGroupRef, Module._targetIsInSortList = e.targetIsInSortList, Module._contain_aggs_of_level = e.contain_aggs_of_level, Module._find_coercion_pathway = e.find_coercion_pathway, Module._typeidType = e.typeidType, Module._typeTypeCollation = e.typeTypeCollation, Module._typeLen = e.typeLen, Module._typeByVal = e.typeByVal, Module._get_type_category_preferred = e.get_type_category_preferred, Module._makeConst = e.makeConst, Module._lookup_rowtype_tupdesc = e.lookup_rowtype_tupdesc, Module._type_is_enum = e.type_is_enum, Module._verify_common_type = e.verify_common_type, Module._type_is_range = e.type_is_range, Module._bms_del_member = e.bms_del_member, Module._list_member = e.list_member, Module._raw_expression_tree_walker_impl = e.raw_expression_tree_walker_impl, Module._type_is_rowtype = e.type_is_rowtype, Module._scanNSItemForColumn = e.scanNSItemForColumn, Module._make_op = e.make_op, Module._make_scalar_array_op = e.make_scalar_array_op, Module._count_nonjunk_tlist_entries = e.count_nonjunk_tlist_entries, Module._makeWholeRowVar = e.makeWholeRowVar, Module._expandRTE = e.expandRTE, Module._contain_var_clause = e.contain_var_clause, Module._jsonb_in = e.jsonb_in, Module._get_func_prokind = e.get_func_prokind, Module._escape_json = e.escape_json, Module._geterrcode = e.geterrcode, Module._bit_in = e.bit_in, Module._repalloc0 = e.repalloc0, Module._bms_union = e.bms_union, Module._varstr_levenshtein_less_equal = e.varstr_levenshtein_less_equal, Module._get_atttypetypmodcoll = e.get_atttypetypmodcoll, Module._raw_parser = e.raw_parser, Module._errsave_start = e.errsave_start, Module._errsave_finish = e.errsave_finish, Module._makeColumnDef = e.makeColumnDef, Module._GetDefaultOpClass = e.GetDefaultOpClass, Module._transformIndexStmt = e.transformIndexStmt, Module._ChooseRelationName = e.ChooseRelationName, Module._deparse_context_for = e.deparse_context_for, Module._deparse_expression = e.deparse_expression, Module._expression_planner = e.expression_planner, Module._scanner_init = e.scanner_init, Module._scanner_finish = e.scanner_finish, Module._core_yylex = e.core_yylex, Module._isxdigit = e.isxdigit, Module._scanner_isspace = e.scanner_isspace, Module._truncate_identifier = e.truncate_identifier, Module._ScanKeywordLookup = e.ScanKeywordLookup, Module._pg_verifymbstr = e.pg_verifymbstr, Module._downcase_truncate_identifier = e.downcase_truncate_identifier, Module._pg_database_encoding_max_length = e.pg_database_encoding_max_length, Module._getTypeInputInfo = e.getTypeInputInfo, Module._RenameSchema = e.RenameSchema, Module._check_can_set_role = e.check_can_set_role, Module._namein = e.namein, Module._BlockSampler_Init = e.BlockSampler_Init, Module._reservoir_init_selection_state = e.reservoir_init_selection_state, Module._reservoir_get_next_S = e.reservoir_get_next_S, Module._sampler_random_fract = e.sampler_random_fract, Module._std_typanalyze = e.std_typanalyze, Module._BlockSampler_HasMore = e.BlockSampler_HasMore, Module._BlockSampler_Next = e.BlockSampler_Next, Module._Async_Notify = e.Async_Notify, Module._RangeVarCallbackMaintainsTable = e.RangeVarCallbackMaintainsTable, Module._make_new_heap = e.make_new_heap, Module._finish_heap_swap = e.finish_heap_swap, Module._RenameRelationInternal = e.RenameRelationInternal, Module._OpenPipeStream = e.OpenPipeStream, Module._pg_is_ascii = e.pg_is_ascii, Module._ClosePipeStream = e.ClosePipeStream, Module._PreventCommandIfReadOnly = e.PreventCommandIfReadOnly, Module._BeginCopyFrom = e.BeginCopyFrom, Module._EndCopyFrom = e.EndCopyFrom, Module._ProcessCopyOptions = e.ProcessCopyOptions, Module._pg_strtoint64 = e.pg_strtoint64, Module._CopyFromErrorCallback = e.CopyFromErrorCallback, Module._bms_make_singleton = e.bms_make_singleton, Module._ExecInitRangeTable = e.ExecInitRangeTable, Module._ExecInitResultRelation = e.ExecInitResultRelation, Module._ExecInitQual = e.ExecInitQual, Module._contain_volatile_functions = e.contain_volatile_functions, Module._NextCopyFrom = e.NextCopyFrom, Module._ExecCloseResultRelations = e.ExecCloseResultRelations, Module._ExecCloseRangeTableRelations = e.ExecCloseRangeTableRelations, Module._ExecConstraints = e.ExecConstraints, Module._ExecInsertIndexTuples = e.ExecInsertIndexTuples, Module._build_column_default = e.build_column_default, Module._ExecInitExpr = e.ExecInitExpr, Module._fileno = e.fileno, Module._NextCopyFromRawFields = e.NextCopyFromRawFields, Module._resetStringInfo = e.resetStringInfo, Module._pq_copymsgbytes = e.pq_copymsgbytes, Module._pg_encoding_max_length = e.pg_encoding_max_length, Module._tolower = e.tolower, Module._pg_plan_query = e.pg_plan_query, Module._PushCopiedSnapshot = e.PushCopiedSnapshot, Module._UpdateActiveSnapshotCommandId = e.UpdateActiveSnapshotCommandId, Module._CreateQueryDesc = e.CreateQueryDesc, Module._ExecutorStart = e.ExecutorStart, Module._ExecutorFinish = e.ExecutorFinish, Module._ExecutorEnd = e.ExecutorEnd, Module._FreeQueryDesc = e.FreeQueryDesc, Module._ExecutorRun = e.ExecutorRun, Module._pg_server_to_any = e.pg_server_to_any, Module._fwrite = e.fwrite, Module._CreateTableAsRelExists = e.CreateTableAsRelExists, Module._QueryRewrite = e.QueryRewrite, Module._DefineRelation = e.DefineRelation, Module._rmdir = e.rmdir, Module._atof = e.atof, Module._int8in = e.int8in, Module._oidin = e.oidin, Module._RemoveObjects = e.RemoveObjects, Module._GetCommandTagEnum = e.GetCommandTagEnum, Module._CreateCommandTag = e.CreateCommandTag, Module._GetCommandTagName = e.GetCommandTagName, Module._NewExplainState = e.NewExplainState, Module._ExplainBeginOutput = e.ExplainBeginOutput, Module._ExplainEndOutput = e.ExplainEndOutput, Module._ExplainOpenGroup = e.ExplainOpenGroup, Module._ExplainPrintPlan = e.ExplainPrintPlan, Module._ExplainIndentText = e.ExplainIndentText, Module._ExplainPropertyInteger = e.ExplainPropertyInteger, Module._ExplainCloseGroup = e.ExplainCloseGroup, Module._ExplainPropertyFloat = e.ExplainPropertyFloat, Module._ExplainPrintTriggers = e.ExplainPrintTriggers, Module._ExplainPropertyUInteger = e.ExplainPropertyUInteger, Module._ExplainPropertyText = e.ExplainPropertyText, Module._GetConfigOptionByName = e.GetConfigOptionByName, Module._ExplainPrintJITSummary = e.ExplainPrintJITSummary, Module._ExplainPropertyBool = e.ExplainPropertyBool, Module._InstrEndLoop = e.InstrEndLoop, Module._appendStringInfoSpaces = e.appendStringInfoSpaces, Module._ExplainQueryText = e.ExplainQueryText, Module._ExplainQueryParameters = e.ExplainQueryParameters, Module._get_func_namespace = e.get_func_namespace, Module._escape_xml = e.escape_xml, Module._GetExplainExtensionId = e.GetExplainExtensionId, Module._GetExplainExtensionState = e.GetExplainExtensionState, Module._SetExplainExtensionState = e.SetExplainExtensionState, Module._RegisterExtensionExplainOption = e.RegisterExtensionExplainOption, Module._get_extension_schema = e.get_extension_schema, Module._get_function_sibling_type = e.get_function_sibling_type, Module._GetSysCacheHashValue = e.GetSysCacheHashValue, Module._CreateSchemaCommand = e.CreateSchemaCommand, Module._get_rel_type_id = e.get_rel_type_id, Module._set_config_option = e.set_config_option, Module._pg_any_to_server = e.pg_any_to_server, Module._DirectFunctionCall4Coll = e.DirectFunctionCall4Coll, Module._replace_text = e.replace_text, Module._strpbrk = e.strpbrk, Module._ProcessUtility = e.ProcessUtility, Module._CleanQuerytext = e.CleanQuerytext, Module._GetForeignDataWrapper = e.GetForeignDataWrapper, Module._CreateExprContext = e.CreateExprContext, Module._EnsurePortalSnapshotExists = e.EnsurePortalSnapshotExists, Module._CheckIndexCompatible = e.CheckIndexCompatible, Module._op_input_types = e.op_input_types, Module._ResolveOpClass = e.ResolveOpClass, Module._get_opclass_family = e.get_opclass_family, Module._get_opfamily_member_for_cmptype = e.get_opfamily_member_for_cmptype, Module._pgstat_count_truncate = e.pgstat_count_truncate, Module._SPI_connect = e.SPI_connect, Module._SPI_exec = e.SPI_exec, Module._SPI_execute = e.SPI_execute, Module._SPI_getvalue = e.SPI_getvalue, Module._generate_operator_clause = e.generate_operator_clause, Module._SPI_finish = e.SPI_finish, Module._CreateTransientRelDestReceiver = e.CreateTransientRelDestReceiver, Module._MemoryContextSetIdentifier = e.MemoryContextSetIdentifier, Module._checkExprHasSubLink = e.checkExprHasSubLink, Module._MemoryContextSetParent = e.MemoryContextSetParent, Module._copyParamList = e.copyParamList, Module._SetTuplestoreDestReceiverParams = e.SetTuplestoreDestReceiverParams, Module._tuplestore_rescan = e.tuplestore_rescan, Module._MemoryContextDeleteChildren = e.MemoryContextDeleteChildren, Module._GetCachedPlan = e.GetCachedPlan, Module._makeParamList = e.makeParamList, Module._ReleaseCachedPlan = e.ReleaseCachedPlan, Module._bms_equal = e.bms_equal, Module._func_volatile = e.func_volatile, Module._register_label_provider = e.register_label_provider, Module._DefineSequence = e.DefineSequence, Module._AlterSequence = e.AlterSequence, Module._RangeVarCallbackOwnsRelation = e.RangeVarCallbackOwnsRelation, Module._nextval = e.nextval, Module._textToQualifiedNameList = e.textToQualifiedNameList, Module._nextval_internal = e.nextval_internal, Module._setval_oid = e.setval_oid, Module._tuplestore_gettupleslot = e.tuplestore_gettupleslot, Module._list_delete = e.list_delete, Module._tuplestore_end = e.tuplestore_end, Module._list_append_unique = e.list_append_unique, Module._get_rel_relam = e.get_rel_relam, Module._contain_mutable_functions = e.contain_mutable_functions, Module._RemoveRelations = e.RemoveRelations, Module._ExecuteTruncateGuts = e.ExecuteTruncateGuts, Module._InitResultRelInfo = e.InitResultRelInfo, Module._AlterTableLookupRelation = e.AlterTableLookupRelation, Module._AlterTable = e.AlterTable, Module._AlterTableInternal = e.AlterTableInternal, Module._AlterTableGetLockLevel = e.AlterTableGetLockLevel, Module._pg_get_indexdef_string = e.pg_get_indexdef_string, Module._ExecStoreAllNullTuple = e.ExecStoreAllNullTuple, Module._chmod = e.chmod, Module._ChangeVarNodes = e.ChangeVarNodes, Module._tuplestore_begin_heap = e.tuplestore_begin_heap, Module._tuplestore_puttupleslot = e.tuplestore_puttupleslot, Module._ExecForceStoreHeapTuple = e.ExecForceStoreHeapTuple, Module._ExecUpdateLockMode = e.ExecUpdateLockMode, Module._bms_copy = e.bms_copy, Module._strtoint = e.strtoint, Module._strtod = e.strtod, Module._plain_crypt_verify = e.plain_crypt_verify, Module._ProcessConfigFile = e.ProcessConfigFile, Module._pgl_exit = e.pgl_exit, Module._dsa_get_handle = e.dsa_get_handle, Module._pg_strncasecmp = e.pg_strncasecmp, Module._guc_free = e.guc_free, Module._ExecReScan = e.ExecReScan, Module._ExecAsyncResponse = e.ExecAsyncResponse, Module._ExecAsyncRequestDone = e.ExecAsyncRequestDone, Module._ExecAsyncRequestPending = e.ExecAsyncRequestPending, Module._ExprEvalPushStep = e.ExprEvalPushStep, Module._lookup_rowtype_tupdesc_copy = e.lookup_rowtype_tupdesc_copy, Module._ExecInitExprWithParams = e.ExecInitExprWithParams, Module._ExecInitExprList = e.ExecInitExprList, Module._ExecGetResultType = e.ExecGetResultType, Module._ExecInitExtraTupleSlot = e.ExecInitExtraTupleSlot, Module._MakeExpandedObjectReadOnlyInternal = e.MakeExpandedObjectReadOnlyInternal, Module._tuplesort_puttupleslot = e.tuplesort_puttupleslot, Module._ArrayGetNItems = e.ArrayGetNItems, Module._expanded_record_fetch_tupdesc = e.expanded_record_fetch_tupdesc, Module._expanded_record_fetch_field = e.expanded_record_fetch_field, Module._json_validate = e.json_validate, Module._JsonbValueToJsonb = e.JsonbValueToJsonb, Module._numeric_out = e.numeric_out, Module._boolout = e.boolout, Module._bool_int4 = e.bool_int4, Module._lookup_rowtype_tupdesc_domain = e.lookup_rowtype_tupdesc_domain, Module._MemoryContextGetParent = e.MemoryContextGetParent, Module._DeleteExpandedObject = e.DeleteExpandedObject, Module._CreateStandaloneExprContext = e.CreateStandaloneExprContext, Module._ExecFindJunkAttributeInTlist = e.ExecFindJunkAttributeInTlist, Module._standard_ExecutorStart = e.standard_ExecutorStart, Module._ExecInitNode = e.ExecInitNode, Module._standard_ExecutorRun = e.standard_ExecutorRun, Module._standard_ExecutorFinish = e.standard_ExecutorFinish, Module._standard_ExecutorEnd = e.standard_ExecutorEnd, Module._ExecEndNode = e.ExecEndNode, Module._InstrAlloc = e.InstrAlloc, Module._MakeTupleTableSlot = e.MakeTupleTableSlot, Module._ExecWithCheckOptions = e.ExecWithCheckOptions, Module._get_typlenbyval = e.get_typlenbyval, Module._ExecInitScanTupleSlot = e.ExecInitScanTupleSlot, Module._InputFunctionCall = e.InputFunctionCall, Module._list_delete_ptr = e.list_delete_ptr, Module._FreeExprContext = e.FreeExprContext, Module._ExecAssignExprContext = e.ExecAssignExprContext, Module._ExecAssignProjectionInfo = e.ExecAssignProjectionInfo, Module._ExecOpenScanRelation = e.ExecOpenScanRelation, Module._bms_intersect = e.bms_intersect, Module._GetAttributeByName = e.GetAttributeByName, Module._GetAttributeByNum = e.GetAttributeByNum, Module._ExecGetReturningSlot = e.ExecGetReturningSlot, Module._ExecGetResultRelCheckAsUser = e.ExecGetResultRelCheckAsUser, Module._MemoryContextRegisterResetCallback = e.MemoryContextRegisterResetCallback, Module._cached_function_compile = e.cached_function_compile, Module._CommandIsReadOnly = e.CommandIsReadOnly, Module._InstrUpdateTupleCount = e.InstrUpdateTupleCount, Module._tuplesort_begin_heap = e.tuplesort_begin_heap, Module._AggCheckCallContext = e.AggCheckCallContext, Module._tuplesort_gettupleslot = e.tuplesort_gettupleslot, Module._bms_del_members = e.bms_del_members, Module._AddWaitEventToSet = e.AddWaitEventToSet, Module._GetNumRegisteredWaitEvents = e.GetNumRegisteredWaitEvents, Module._tuplestore_clear = e.tuplestore_clear, Module._get_attstatsslot = e.get_attstatsslot, Module._free_attstatsslot = e.free_attstatsslot, Module._SharedFileSetInit = e.SharedFileSetInit, Module._SharedFileSetAttach = e.SharedFileSetAttach, Module._tuplesort_reset = e.tuplesort_reset, Module._pairingheap_first = e.pairingheap_first, Module._bms_nonempty_difference = e.bms_nonempty_difference, Module._datum_image_hash = e.datum_image_hash, Module._tuplesort_rescan = e.tuplesort_rescan, Module._WinGetPartitionLocalMemory = e.WinGetPartitionLocalMemory, Module._WinGetCurrentPosition = e.WinGetCurrentPosition, Module._WinGetPartitionRowCount = e.WinGetPartitionRowCount, Module._WinGetFuncArgInPartition = e.WinGetFuncArgInPartition, Module._WinGetFuncArgCurrent = e.WinGetFuncArgCurrent, Module._SPI_connect_ext = e.SPI_connect_ext, Module._SPI_commit = e.SPI_commit, Module._CopyErrorData = e.CopyErrorData, Module._FlushErrorState = e.FlushErrorState, Module._ReThrowError = e.ReThrowError, Module._SPI_commit_and_chain = e.SPI_commit_and_chain, Module._SPI_rollback = e.SPI_rollback, Module._SPI_rollback_and_chain = e.SPI_rollback_and_chain, Module._SPI_freetuptable = e.SPI_freetuptable, Module._SPI_execute_extended = e.SPI_execute_extended, Module._SPI_execute_plan = e.SPI_execute_plan, Module._SPI_execp = e.SPI_execp, Module._SPI_execute_plan_extended = e.SPI_execute_plan_extended, Module._SPI_execute_plan_with_paramlist = e.SPI_execute_plan_with_paramlist, Module._SPI_execute_with_args = e.SPI_execute_with_args, Module._SPI_prepare = e.SPI_prepare, Module._SPI_prepare_extended = e.SPI_prepare_extended, Module._SPI_keepplan = e.SPI_keepplan, Module._SPI_saveplan = e.SPI_saveplan, Module._SPI_freeplan = e.SPI_freeplan, Module._SPI_copytuple = e.SPI_copytuple, Module._SPI_returntuple = e.SPI_returntuple, Module._SPI_modifytuple = e.SPI_modifytuple, Module._SPI_fnumber = e.SPI_fnumber, Module._SPI_fname = e.SPI_fname, Module._SPI_getbinval = e.SPI_getbinval, Module._SPI_gettype = e.SPI_gettype, Module._SPI_gettypeid = e.SPI_gettypeid, Module._SPI_getrelname = e.SPI_getrelname, Module._SPI_palloc = e.SPI_palloc, Module._SPI_repalloc = e.SPI_repalloc, Module._SPI_pfree = e.SPI_pfree, Module._SPI_datumTransfer = e.SPI_datumTransfer, Module._datumTransfer = e.datumTransfer, Module._SPI_cursor_open_with_args = e.SPI_cursor_open_with_args, Module._SPI_cursor_open_with_paramlist = e.SPI_cursor_open_with_paramlist, Module._SPI_cursor_parse_open = e.SPI_cursor_parse_open, Module._SPI_cursor_find = e.SPI_cursor_find, Module._SPI_cursor_fetch = e.SPI_cursor_fetch, Module._SPI_scroll_cursor_fetch = e.SPI_scroll_cursor_fetch, Module._SPI_scroll_cursor_move = e.SPI_scroll_cursor_move, Module._SPI_cursor_close = e.SPI_cursor_close, Module._SPI_plan_is_valid = e.SPI_plan_is_valid, Module._SPI_result_code_string = e.SPI_result_code_string, Module._SPI_plan_get_plan_sources = e.SPI_plan_get_plan_sources, Module._SPI_plan_get_cached_plan = e.SPI_plan_get_cached_plan, Module._SPI_register_relation = e.SPI_register_relation, Module._create_queryEnv = e.create_queryEnv, Module._register_ENR = e.register_ENR, Module._SPI_register_trigger_data = e.SPI_register_trigger_data, Module._tuplestore_tuple_count = e.tuplestore_tuple_count, Module._GetUserMapping = e.GetUserMapping, Module._GetForeignTable = e.GetForeignTable, Module._GetForeignColumnOptions = e.GetForeignColumnOptions, Module._initClosestMatch = e.initClosestMatch, Module._updateClosestMatch = e.updateClosestMatch, Module._getClosestMatch = e.getClosestMatch, Module._GetExistingLocalJoinPath = e.GetExistingLocalJoinPath, Module._pathkeys_contained_in = e.pathkeys_contained_in, Module._bloom_create = e.bloom_create, Module._bloom_free = e.bloom_free, Module._bloom_add_element = e.bloom_add_element, Module._bloom_lacks_element = e.bloom_lacks_element, Module._bloom_prop_bits_set = e.bloom_prop_bits_set, Module._dshash_create = e.dshash_create, Module._dshash_attach = e.dshash_attach, Module._dshash_detach = e.dshash_detach, Module._dshash_destroy = e.dshash_destroy, Module._dshash_get_hash_table_handle = e.dshash_get_hash_table_handle, Module._dshash_find = e.dshash_find, Module._dshash_find_or_insert = e.dshash_find_or_insert, Module._dshash_delete_key = e.dshash_delete_key, Module._dshash_release_lock = e.dshash_release_lock, Module._tag_hash = e.tag_hash, Module._dshash_seq_init = e.dshash_seq_init, Module._dshash_seq_next = e.dshash_seq_next, Module._dshash_seq_term = e.dshash_seq_term, Module._dshash_delete_current = e.dshash_delete_current, Module._ldexp = e.ldexp, Module._pg_b64_enc_len = e.pg_b64_enc_len, Module._pg_b64_encode = e.pg_b64_encode, Module._strtol = e.strtol, Module._gai_strerror = e.gai_strerror, Module._bind = e.bind, Module._pgl_connect = e.pgl_connect, Module._pgl_send = e.pgl_send, Module._pgl_recv = e.pgl_recv, Module._sendto = e.sendto, Module._select = e.select, Module._recvfrom = e.recvfrom, Module._be_lo_unlink = e.be_lo_unlink, Module._text_to_cstring_buffer = e.text_to_cstring_buffer, Module._feof = e.feof, Module._pg_mb2wchar_with_len = e.pg_mb2wchar_with_len, Module._pg_regcomp = e.pg_regcomp, Module._pg_regerror = e.pg_regerror, Module._strcat = e.strcat, Module._freeaddrinfo = e.freeaddrinfo, Module._pgl_getsockname = e.pgl_getsockname, Module._pgl_setsockopt = e.pgl_setsockopt, Module._pgl_fcntl = e.pgl_fcntl, Module._listen = e.listen, Module._accept = e.accept, Module._utime = e.utime, Module._pq_buffer_remaining_data = e.pq_buffer_remaining_data, Module._pgl_getsockopt = e.pgl_getsockopt, Module._pq_sendtext = e.pq_sendtext, Module._pq_sendfloat4 = e.pq_sendfloat4, Module._pq_sendfloat8 = e.pq_sendfloat8, Module._pq_begintypsend = e.pq_begintypsend, Module._pq_endtypsend = e.pq_endtypsend, Module._pq_getmsgfloat4 = e.pq_getmsgfloat4, Module._pq_getmsgfloat8 = e.pq_getmsgfloat8, Module._pq_getmsgtext = e.pq_getmsgtext, Module._pg_strtoint32 = e.pg_strtoint32, Module._main = e.__main_argc_argv, Module._pgl_getuid = e.pgl_getuid, Module._getenv = e.getenv, Module._bms_membership = e.bms_membership, Module._RegisterExtensibleNodeMethods = e.RegisterExtensibleNodeMethods, Module._list_make5_impl = e.list_make5_impl, Module._GetMemoryChunkContext = e.GetMemoryChunkContext, Module._list_insert_nth = e.list_insert_nth, Module._list_member_ptr = e.list_member_ptr, Module._list_delete_int = e.list_delete_int, Module._list_intersection = e.list_intersection, Module._list_append_unique_ptr = e.list_append_unique_ptr, Module._list_append_unique_int = e.list_append_unique_int, Module._list_concat_unique_int = e.list_concat_unique_int, Module._make_opclause = e.make_opclause, Module._exprIsLengthCoercion = e.exprIsLengthCoercion, Module._fix_opfuncids = e.fix_opfuncids, Module._outToken = e.outToken, Module._outNode = e.outNode, Module._appendStringInfoStringQuoted = e.appendStringInfoStringQuoted, Module._EnableQueryId = e.EnableQueryId, Module._nodeRead = e.nodeRead, Module._pg_strtok = e.pg_strtok, Module._debackslash = e.debackslash, Module._exp2 = e.exp2, Module._find_base_rel = e.find_base_rel, Module._add_path = e.add_path, Module._create_sort_path = e.create_sort_path, Module._set_baserel_size_estimates = e.set_baserel_size_estimates, Module._get_func_support = e.get_func_support, Module._clauselist_selectivity = e.clauselist_selectivity, Module._get_tablespace_page_costs = e.get_tablespace_page_costs, Module._cost_qual_eval = e.cost_qual_eval, Module._pull_varnos = e.pull_varnos, Module._estimate_num_groups = e.estimate_num_groups, Module._cost_sort = e.cost_sort, Module._get_sortgrouplist_exprs = e.get_sortgrouplist_exprs, Module._get_attavgwidth = e.get_attavgwidth, Module._make_restrictinfo = e.make_restrictinfo, Module._setup_eclass_member_iterator = e.setup_eclass_member_iterator, Module._eclass_member_iterator_next = e.eclass_member_iterator_next, Module._remove_nulling_relids = e.remove_nulling_relids, Module._get_mergejoin_opfamilies = e.get_mergejoin_opfamilies, Module._generate_implied_equalities_for_column = e.generate_implied_equalities_for_column, Module._eclass_useful_for_merging = e.eclass_useful_for_merging, Module._join_clause_is_movable_to = e.join_clause_is_movable_to, Module._get_plan_rowmark = e.get_plan_rowmark, Module._is_pseudo_constant_for_index = e.is_pseudo_constant_for_index, Module._update_mergeclause_eclasses = e.update_mergeclause_eclasses, Module._pull_vars_of_level = e.pull_vars_of_level, Module._find_join_rel = e.find_join_rel, Module._make_canonical_pathkey = e.make_canonical_pathkey, Module._get_sortgroupref_clause_noerr = e.get_sortgroupref_clause_noerr, Module._extract_actual_clauses = e.extract_actual_clauses, Module._tlist_member = e.tlist_member, Module._change_plan_targetlist = e.change_plan_targetlist, Module._make_foreignscan = e.make_foreignscan, Module._IncrementVarSublevelsUp = e.IncrementVarSublevelsUp, Module._op_mergejoinable = e.op_mergejoinable, Module._find_nonnullable_rels = e.find_nonnullable_rels, Module._setup_simple_rel_arrays = e.setup_simple_rel_arrays, Module._standard_planner = e.standard_planner, Module._get_relids_in_jointree = e.get_relids_in_jointree, Module._SS_process_sublinks = e.SS_process_sublinks, Module._add_new_columns_to_pathtarget = e.add_new_columns_to_pathtarget, Module._get_agg_clause_costs = e.get_agg_clause_costs, Module._grouping_is_sortable = e.grouping_is_sortable, Module._copy_pathtarget = e.copy_pathtarget, Module._create_projection_path = e.create_projection_path, Module._contain_nonstrict_functions = e.contain_nonstrict_functions, Module._get_translated_update_targetlist = e.get_translated_update_targetlist, Module._add_row_identity_var = e.add_row_identity_var, Module._get_rel_all_updated_cols = e.get_rel_all_updated_cols, Module._get_baserel_parampathinfo = e.get_baserel_parampathinfo, Module._create_foreignscan_path = e.create_foreignscan_path, Module._create_foreign_join_path = e.create_foreign_join_path, Module._create_foreign_upper_path = e.create_foreign_upper_path, Module._adjust_limit_rows_costs = e.adjust_limit_rows_costs, Module._add_to_flat_tlist = e.add_to_flat_tlist, Module._get_fn_expr_variadic = e.get_fn_expr_variadic, Module._get_fn_expr_argtype = e.get_fn_expr_argtype, Module._on_shmem_exit = e.on_shmem_exit, Module._pgl_shmdt = e.pgl_shmdt, Module._pgl_shmctl = e.pgl_shmctl, Module._pgl_shmat = e.pgl_shmat, Module._mmap = e.mmap, Module._pgl_shmget = e.pgl_shmget, Module._pgl_munmap = e.pgl_munmap, Module._SignalHandlerForConfigReload = e.SignalHandlerForConfigReload, Module._SignalHandlerForShutdownRequest = e.SignalHandlerForShutdownRequest, Module._procsignal_sigusr1_handler = e.procsignal_sigusr1_handler, Module._ConditionalLockDatabaseObject = e.ConditionalLockDatabaseObject, Module._RegisterBackgroundWorker = e.RegisterBackgroundWorker, Module._WaitForBackgroundWorkerStartup = e.WaitForBackgroundWorkerStartup, Module._open = e.open, Module._rename = e.rename, Module._GetConfigOption = e.GetConfigOption, Module._puts = e.puts, Module._fopen = e.fopen, Module._fclose = e.fclose, Module._fputc = e.fputc, Module._ftello = e.ftello, _malloc = Module._malloc = e.malloc, Module._free = e.free, Module._realloc = e.realloc, Module._iswprint_l = e.iswprint_l, Module._iswalpha_l = e.iswalpha_l, Module._iswdigit_l = e.iswdigit_l, Module._isdigit_l = e.isdigit_l, Module._iswpunct_l = e.iswpunct_l, Module._iswspace_l = e.iswspace_l, Module._iswlower_l = e.iswlower_l, Module._iswupper_l = e.iswupper_l, Module._pg_ascii_tolower = e.pg_ascii_tolower, Module._towlower_l = e.towlower_l, Module._tolower_l = e.tolower_l, Module._towupper_l = e.towupper_l, Module._toupper_l = e.toupper_l, Module._pg_reg_getinitialstate = e.pg_reg_getinitialstate, Module._pg_reg_getfinalstate = e.pg_reg_getfinalstate, Module._pg_reg_getnumoutarcs = e.pg_reg_getnumoutarcs, Module._pg_reg_getoutarcs = e.pg_reg_getoutarcs, Module._pg_reg_getnumcolors = e.pg_reg_getnumcolors, Module._pg_reg_colorisbegin = e.pg_reg_colorisbegin, Module._pg_reg_colorisend = e.pg_reg_colorisend, Module._pg_reg_getnumcharacters = e.pg_reg_getnumcharacters, Module._pg_reg_getcharacters = e.pg_reg_getcharacters, Module._dsa_pin = e.dsa_pin, Module._OutputPluginPrepareWrite = e.OutputPluginPrepareWrite, Module._OutputPluginWrite = e.OutputPluginWrite, Module._array_contains_nulls = e.array_contains_nulls, Module._CacheRegisterRelcacheCallback = e.CacheRegisterRelcacheCallback, Module._hash_seq_term = e.hash_seq_term, Module._FreeErrorData = e.FreeErrorData, Module._RelidByRelfilenumber = e.RelidByRelfilenumber, Module._SnapBuildRestoreSnapshot = e.SnapBuildRestoreSnapshot, Module._WaitLatchOrSocket = e.WaitLatchOrSocket, Module._BufFileCreateFileSet = e.BufFileCreateFileSet, Module._BufFileOpenFileSet = e.BufFileOpenFileSet, Module._BufFileTell = e.BufFileTell, Module._ConditionVariablePrepareToSleep = e.ConditionVariablePrepareToSleep, Module._get_row_security_policies = e.get_row_security_policies, Module._extract_variadic_args = e.extract_variadic_args, Module._errhidestmt = e.errhidestmt, Module._errhidecontext = e.errhidecontext, Module._hash_estimate_size = e.hash_estimate_size, Module._ShmemInitHash = e.ShmemInitHash, Module._LockBufHdr = e.LockBufHdr, Module._LWLockHeldByMeInMode = e.LWLockHeldByMeInMode, Module._EvictUnpinnedBuffer = e.EvictUnpinnedBuffer, Module._EvictAllUnpinnedBuffers = e.EvictAllUnpinnedBuffers, Module._EvictRelUnpinnedBuffers = e.EvictRelUnpinnedBuffers, Module._have_free_buffer = e.have_free_buffer, _calloc = Module._calloc = e.calloc, Module._BufFileExportFileSet = e.BufFileExportFileSet, Module._BufFileRead = e.BufFileRead, Module._copy_file = e.copy_file, Module._fdatasync = e.fdatasync, Module._truncate = e.truncate, Module._dup = e.dup, Module._AcquireExternalFD = e.AcquireExternalFD, Module._mkdir = e.mkdir, Module._pgl_popen = e.pgl_popen, Module._pgl_pclose = e.pgl_pclose, Module._closedir = e.closedir, Module._opendir = e.opendir, Module._readdir = e.readdir, Module._GetNamedDSMSegment = e.GetNamedDSMSegment, Module._pgl_atexit = e.pgl_atexit, Module._RequestAddinShmemSpace = e.RequestAddinShmemSpace, Module._GetRunningTransactionData = e.GetRunningTransactionData, Module._BackendXidGetPid = e.BackendXidGetPid, Module._pg_numa_init = e.pg_numa_init, Module._sysconf = e.sysconf, Module._pg_numa_query_pages = e.pg_numa_query_pages, Module._pg_get_shmem_pagesize = e.pg_get_shmem_pagesize, Module._LockAcquire = e.LockAcquire, Module._LockRelease = e.LockRelease, Module._pgl_poll = e.pgl_poll, Module._GetLockmodeName = e.GetLockmodeName, Module._LWLockRegisterTranche = e.LWLockRegisterTranche, Module._GetNamedLWLockTranche = e.GetNamedLWLockTranche, Module._LWLockNewTrancheId = e.LWLockNewTrancheId, Module._RequestNamedLWLockTranche = e.RequestNamedLWLockTranche, Module._LWLockHeldByMe = e.LWLockHeldByMe, Module._ProcessStartupPacket = e.ProcessStartupPacket, _htons = e.htons, _htonl = e.htonl, Module._pgl_startPGlite = e.pgl_startPGlite, Module._pgl_pq_flush = e.pgl_pq_flush, Module._pgl_getMyProcPort = e.pgl_getMyProcPort, Module._pgl_sendConnData = e.pgl_sendConnData, Module._PostgresMainLongJmp = e.PostgresMainLongJmp, Module._PostgresMainLoopOnce = e.PostgresMainLoopOnce, Module._PostgresSendReadyForQueryIfNecessary = e.PostgresSendReadyForQueryIfNecessary, Module._GetCommandLogLevel = e.GetCommandLogLevel, Module._standard_ProcessUtility = e.standard_ProcessUtility, Module._lookup_ts_dictionary_cache = e.lookup_ts_dictionary_cache, Module._get_tsearch_config_filename = e.get_tsearch_config_filename, Module._str_tolower = e.str_tolower, Module._readstoplist = e.readstoplist, Module._searchstoplist = e.searchstoplist, Module._tsearch_readline_begin = e.tsearch_readline_begin, Module._tsearch_readline = e.tsearch_readline, Module._tsearch_readline_end = e.tsearch_readline_end, Module._stringToQualifiedNameList = e.stringToQualifiedNameList, Module._getTSCurrentConfig = e.getTSCurrentConfig, Module._to_tsvector_byid = e.to_tsvector_byid, Module._t_isalnum_with_len = e.t_isalnum_with_len, Module._isalnum = e.isalnum, Module._t_isalnum_cstr = e.t_isalnum_cstr, Module._pg_mblen_unbounded = e.pg_mblen_unbounded, Module._get_restriction_variable = e.get_restriction_variable, Module._pg_mblen_range = e.pg_mblen_range, Module._MemoryContextAllocHuge = e.MemoryContextAllocHuge, Module._fseek = e.fseek, Module._WaitEventExtensionNew = e.WaitEventExtensionNew, Module._regprocedurein = e.regprocedurein, Module._is_member_of_role = e.is_member_of_role, Module._expand_array = e.expand_array, Module._exp = e.exp, Module._arraycontsel = e.arraycontsel, Module._arraycontjoinsel = e.arraycontjoinsel, Module._initArrayResult = e.initArrayResult, Module._array_create_iterator = e.array_create_iterator, Module._array_iterate = e.array_iterate, Module._array_free_iterator = e.array_free_iterator, Module._ArrayGetIntegerTypmods = e.ArrayGetIntegerTypmods, Module._boolin = e.boolin, Module.___multi3 = e.__multi3, Module._cash_cmp = e.cash_cmp, Module._int64_to_numeric = e.int64_to_numeric, Module._numeric_div = e.numeric_div, Module._numeric_round = e.numeric_round, Module._numeric_int8 = e.numeric_int8, Module._numeric_mul = e.numeric_mul, Module._j2date = e.j2date, Module._EncodeDateOnly = e.EncodeDateOnly, Module._EncodeSpecialDate = e.EncodeSpecialDate, Module._date_eq = e.date_eq, Module._date_lt = e.date_lt, Module._date_le = e.date_le, Module._date_gt = e.date_gt, Module._date_ge = e.date_ge, Module._date_cmp = e.date_cmp, Module._date_mi = e.date_mi, Module._timestamp2tm = e.timestamp2tm, Module._time2tm = e.time2tm, Module._EncodeTimeOnly = e.EncodeTimeOnly, Module._time_eq = e.time_eq, Module._time_lt = e.time_lt, Module._time_le = e.time_le, Module._time_gt = e.time_gt, Module._time_ge = e.time_ge, Module._time_cmp = e.time_cmp, Module._time_mi_time = e.time_mi_time, Module._timetz2tm = e.timetz2tm, Module._timetz_cmp = e.timetz_cmp, Module._pg_tolower = e.pg_tolower, Module._EncodeDateTime = e.EncodeDateTime, Module._TransferExpandedObject = e.TransferExpandedObject, Module._forkname_to_number = e.forkname_to_number, Module._numeric_lt = e.numeric_lt, Module._numeric_abs = e.numeric_abs, Module._numeric_add = e.numeric_add, Module._numeric_ge = e.numeric_ge, Module._err_generic_string = e.err_generic_string, Module._domain_check = e.domain_check, Module._enum_lt = e.enum_lt, Module._enum_le = e.enum_le, Module._enum_ge = e.enum_ge, Module._enum_gt = e.enum_gt, Module._enum_cmp = e.enum_cmp, Module._make_expanded_record_from_typeid = e.make_expanded_record_from_typeid, Module._make_expanded_record_from_tupdesc = e.make_expanded_record_from_tupdesc, Module._make_expanded_record_from_exprecord = e.make_expanded_record_from_exprecord, Module._expanded_record_set_tuple = e.expanded_record_set_tuple, Module._expanded_record_get_tuple = e.expanded_record_get_tuple, Module._deconstruct_expanded_record = e.deconstruct_expanded_record, Module._expanded_record_lookup_field = e.expanded_record_lookup_field, Module._expanded_record_set_field_internal = e.expanded_record_set_field_internal, Module._expanded_record_set_fields = e.expanded_record_set_fields, Module._float4in_internal = e.float4in_internal, Module._strtof = e.strtof, Module._float_to_shortest_decimal_buf = e.float_to_shortest_decimal_buf, Module._float8in = e.float8in, Module._float8in_internal = e.float8in_internal, Module._float8out = e.float8out, Module._float8out_internal = e.float8out_internal, Module._float8pl = e.float8pl, Module._float4_cmp_internal = e.float4_cmp_internal, Module._btfloat4cmp = e.btfloat4cmp, Module._btfloat8cmp = e.btfloat8cmp, Module._dtoi4 = e.dtoi4, Module._dtoi2 = e.dtoi2, Module._cbrt = e.cbrt, Module._dexp = e.dexp, Module._log10 = e.log10, Module._dacos = e.dacos, Module._acos = e.acos, Module._dasin = e.dasin, Module._asin = e.asin, Module._datan = e.datan, Module._atan = e.atan, Module._datan2 = e.datan2, Module._atan2 = e.atan2, Module._dcos = e.dcos, Module._cos = e.cos, Module._dcot = e.dcot, Module._tan = e.tan, Module._dsin = e.dsin, Module._sin = e.sin, Module._dtan = e.dtan, Module._fmod = e.fmod, Module._degrees = e.degrees, Module._dpi = e.dpi, Module._radians = e.radians, Module._sinh = e.sinh, Module._cosh = e.cosh, Module._tanh = e.tanh, Module._asinh = e.asinh, Module._acosh = e.acosh, Module._atanh = e.atanh, Module._float8_accum = e.float8_accum, Module._float8_stddev_pop = e.float8_stddev_pop, Module._float8_stddev_samp = e.float8_stddev_samp, Module._asc_tolower = e.asc_tolower, Module._pg_strfold = e.pg_strfold, Module._numeric_power = e.numeric_power, Module._dtoi8 = e.dtoi8, Module._int8out = e.int8out, Module._fseeko = e.fseeko, Module._int4in = e.int4in, Module._int4_bool = e.int4_bool, Module._int8pl = e.int8pl, Module._int84 = e.int84, Module._int82 = e.int82, Module._json_in = e.json_in, Module._EncodeSpecialTimestamp = e.EncodeSpecialTimestamp, Module._pushJsonbValue = e.pushJsonbValue, Module._numeric_int2 = e.numeric_int2, Module._numeric_int4 = e.numeric_int4, Module._numeric_float4 = e.numeric_float4, Module._numeric_normalize = e.numeric_normalize, Module._numeric_cmp = e.numeric_cmp, Module._numeric_eq = e.numeric_eq, Module._hash_numeric = e.hash_numeric, Module._hash_numeric_extended = e.hash_numeric_extended, Module._int2_numeric = e.int2_numeric, Module._int4_numeric = e.int4_numeric, Module._int8_numeric = e.int8_numeric, Module._float4_numeric = e.float4_numeric, Module._float8_numeric = e.float8_numeric, Module._numeric_uminus = e.numeric_uminus, Module._numeric_is_nan = e.numeric_is_nan, Module._numeric_ceil = e.numeric_ceil, Module._numeric_floor = e.numeric_floor, Module._timestamp_cmp = e.timestamp_cmp, Module._macaddr_cmp = e.macaddr_cmp, Module._macaddr_lt = e.macaddr_lt, Module._macaddr_le = e.macaddr_le, Module._macaddr_eq = e.macaddr_eq, Module._macaddr_ge = e.macaddr_ge, Module._macaddr_gt = e.macaddr_gt, Module._macaddr8_cmp = e.macaddr8_cmp, Module._macaddr8_lt = e.macaddr8_lt, Module._macaddr8_le = e.macaddr8_le, Module._macaddr8_eq = e.macaddr8_eq, Module._macaddr8_ge = e.macaddr8_ge, Module._macaddr8_gt = e.macaddr8_gt, Module._current_query = e.current_query, Module._generate_collation_name = e.generate_collation_name, Module._get_fn_expr_arg_stable = e.get_fn_expr_arg_stable, Module._unpack_sql_state = e.unpack_sql_state, Module._get_fn_expr_rettype = e.get_fn_expr_rettype, Module._btnamecmp = e.btnamecmp, Module._inet_in = e.inet_in, Module._network_cmp = e.network_cmp, Module._convert_network_to_scalar = e.convert_network_to_scalar, Module._numeric_sign = e.numeric_sign, Module._numeric_gt = e.numeric_gt, Module._numeric_le = e.numeric_le, Module._numeric_mod = e.numeric_mod, Module._numeric_sqrt = e.numeric_sqrt, Module.___divti3 = e.__divti3, Module._numeric_exp = e.numeric_exp, Module._numeric_ln = e.numeric_ln, Module._numeric_log = e.numeric_log, Module._numeric_float8_no_overflow = e.numeric_float8_no_overflow, Module._oidout = e.oidout, Module._btrim1 = e.btrim1, Module._ltrim1 = e.ltrim1, Module._rtrim1 = e.rtrim1, Module._tuplesort_skiptuples = e.tuplesort_skiptuples, Module._interval_mi = e.interval_mi, Module._setlocale = e.setlocale, Module._newlocale = e.newlocale, Module._strftime_l = e.strftime_l, Module._freelocale = e.freelocale, Module._pg_utf_mblen_private = e.pg_utf_mblen_private, Module._uselocale = e.uselocale, Module._strcoll_l = e.strcoll_l, Module._strxfrm_l = e.strxfrm_l, Module._drandom = e.drandom, Module._quote_ident = e.quote_ident, Module._textregexeq = e.textregexeq, Module._text_substr = e.text_substr, Module._pg_wchar2mb_with_len = e.pg_wchar2mb_with_len, Module._regexp_split_to_array = e.regexp_split_to_array, Module._regclassin = e.regclassin, Module._regtypeout = e.regtypeout, Module._regconfigout = e.regconfigout, Module._pg_get_indexdef_columns_extended = e.pg_get_indexdef_columns_extended, Module._pg_get_querydef = e.pg_get_querydef, Module._strcspn = e.strcspn, Module._generic_restriction_selectivity = e.generic_restriction_selectivity, Module._genericcostestimate = e.genericcostestimate, Module._tidin = e.tidin, Module._tidout = e.tidout, Module._timestamp_in = e.timestamp_in, Module._timestamp_eq = e.timestamp_eq, Module._timestamp_lt = e.timestamp_lt, Module._timestamp_gt = e.timestamp_gt, Module._timestamp_le = e.timestamp_le, Module._timestamp_ge = e.timestamp_ge, Module._interval_eq = e.interval_eq, Module._interval_lt = e.interval_lt, Module._interval_gt = e.interval_gt, Module._interval_le = e.interval_le, Module._interval_ge = e.interval_ge, Module._interval_cmp = e.interval_cmp, Module._timestamp_mi = e.timestamp_mi, Module._interval_um = e.interval_um, Module._tsquery_requires_match = e.tsquery_requires_match, Module._TS_execute_ternary = e.TS_execute_ternary, Module._has_fn_opclass_options = e.has_fn_opclass_options, Module._uuid_in = e.uuid_in, Module._uuid_out = e.uuid_out, Module._uuid_cmp = e.uuid_cmp, Module._gen_random_uuid = e.gen_random_uuid, Module._varbit_in = e.varbit_in, Module._biteq = e.biteq, Module._bitlt = e.bitlt, Module._bitle = e.bitle, Module._bitgt = e.bitgt, Module._bitge = e.bitge, Module._bitcmp = e.bitcmp, Module._bitlength = e.bitlength, Module._bpchareq = e.bpchareq, Module._bpcharlt = e.bpcharlt, Module._bpcharle = e.bpcharle, Module._bpchargt = e.bpchargt, Module._bpcharge = e.bpcharge, Module._bpcharcmp = e.bpcharcmp, Module._pg_detoast_datum_slice = e.pg_detoast_datum_slice, Module._text_substr_no_len = e.text_substr_no_len, Module._texteq = e.texteq, Module._text_lt = e.text_lt, Module._text_le = e.text_le, Module._text_gt = e.text_gt, Module._text_ge = e.text_ge, Module._bttextcmp = e.bttextcmp, Module._byteaeq = e.byteaeq, Module._bytealt = e.bytealt, Module._byteale = e.byteale, Module._byteagt = e.byteagt, Module._byteage = e.byteage, Module._byteacmp = e.byteacmp, Module._to_hex32 = e.to_hex32, Module._text_left = e.text_left, Module._text_right = e.text_right, Module._text_reverse = e.text_reverse, Module._varstr_levenshtein = e.varstr_levenshtein, Module._wcslen = e.wcslen, Module._pg_xml_init = e.pg_xml_init, Module._xml_ereport = e.xml_ereport, Module._pg_xml_done = e.pg_xml_done, Module._pg_do_encoding_conversion = e.pg_do_encoding_conversion, Module._CreateCacheMemoryContext = e.CreateCacheMemoryContext, Module._cfunc_resolve_polymorphic_argtypes = e.cfunc_resolve_polymorphic_argtypes, Module._get_typsubscript = e.get_typsubscript, Module._CachedPlanAllowsSimpleValidityCheck = e.CachedPlanAllowsSimpleValidityCheck, Module._CachedPlanIsSimplyValid = e.CachedPlanIsSimplyValid, Module._GetCachedExpression = e.GetCachedExpression, Module._FreeCachedExpression = e.FreeCachedExpression, Module._ReleaseAllPlanCacheRefsInOwner = e.ReleaseAllPlanCacheRefsInOwner, Module._SearchSysCache = e.SearchSysCache, Module._lookup_rowtype_tupdesc_noerror = e.lookup_rowtype_tupdesc_noerror, Module._abort = e.abort, Module._in_error_recursion_trouble = e.in_error_recursion_trouble, Module._pg_vfprintf = e.pg_vfprintf, Module._pgl_longjmp = e.pgl_longjmp, Module._openlog = e.openlog, Module._syslog = e.syslog, Module._GetErrorContextStack = e.GetErrorContextStack, Module._closelog = e.closelog, Module._dlsym = e.dlsym, Module._dlopen = e.dlopen, Module._dlerror = e.dlerror, Module._dlclose = e.dlclose, Module._find_rendezvous_variable = e.find_rendezvous_variable, Module._CallerFInfoFunctionCall1 = e.CallerFInfoFunctionCall1, Module._CallerFInfoFunctionCall2 = e.CallerFInfoFunctionCall2, Module._FunctionCall0Coll = e.FunctionCall0Coll, Module._RelationNameGetTupleDesc = e.RelationNameGetTupleDesc, Module._memcpy = e.memcpy, Module._hash_freeze = e.hash_freeze, Module._chdir = e.chdir, Module._pg_bindtextdomain = e.pg_bindtextdomain, Module._pg_mblen = e.pg_mblen, Module._check_encoding_conversion_args = e.check_encoding_conversion_args, Module._DefineCustomBoolVariable = e.DefineCustomBoolVariable, Module._DefineCustomIntVariable = e.DefineCustomIntVariable, Module._DefineCustomRealVariable = e.DefineCustomRealVariable, Module._DefineCustomStringVariable = e.DefineCustomStringVariable, Module._DefineCustomEnumVariable = e.DefineCustomEnumVariable, Module._MarkGUCPrefixReserved = e.MarkGUCPrefixReserved, Module._sampler_random_init_state = e.sampler_random_init_state, Module._dsa_trim = e.dsa_trim, Module._pchomp = e.pchomp, Module._PinPortal = e.PinPortal, Module._UnpinPortal = e.UnpinPortal, Module.___lshrti3 = e.__lshrti3, Module._realpath = e.realpath, Module._float_to_shortest_decimal_bufn = e.float_to_shortest_decimal_bufn, Module._IsValidJsonNumber = e.IsValidJsonNumber, Module._pg_prng_uint64 = e.pg_prng_uint64, Module._makeStringInfoExt = e.makeStringInfoExt, Module._initStringInfoExt = e.initStringInfoExt, Module._pgl_getpwuid = e.pgl_getpwuid, Module._getcwd = e.getcwd, Module._pthread_mutex_lock = e.pthread_mutex_lock, Module._localeconv = e.localeconv, Module._pthread_mutex_unlock = e.pthread_mutex_unlock, Module._nanosleep = e.nanosleep, Module._sigaction = e.sigaction, Module._strchrnul = e.strchrnul, Module._snprintf = e.snprintf, Module._strerror_r = e.strerror_r, Module._clear_setitimer = e.clear_setitimer, Module._pgl_setPGliteActive = e.pgl_setPGliteActive, Module._pgl_siglongjmp = e.pgl_siglongjmp, Module._pgl_set_system_fn = e.pgl_set_system_fn, Module._pgl_set_popen_fn = e.pgl_set_popen_fn, Module._pgl_set_pclose_fn = e.pgl_set_pclose_fn, Module._pgl_run_atexit_funcs = e.pgl_run_atexit_funcs, Module._pgl_freopen = e.pgl_freopen, Module._fiprintf = e.fiprintf, Module._pgl_set_rw_cbs = e.pgl_set_rw_cbs, Module._vfprintf = e.vfprintf, Module._pthread_key_create = e.pthread_key_create, Module._pthread_getspecific = e.pthread_getspecific, Module._pthread_key_delete = e.pthread_key_delete, Module._pthread_setspecific = e.pthread_setspecific, Module._toupper = e.toupper, Module._iconv_open = e.iconv_open, Module._iconv_close = e.iconv_close, Module._iconv = e.iconv, Module._pthread_mutex_init = e.pthread_mutex_init, Module._pthread_mutex_destroy = e.pthread_mutex_destroy, Module._pthread_cond_init = e.pthread_cond_init, Module._pthread_cond_destroy = e.pthread_cond_destroy, Module._pthread_self = e.pthread_self, Module._pthread_cond_wait = e.pthread_cond_wait, Module._pthread_cond_signal = e.pthread_cond_signal, Module._pthread_once = e.pthread_once, Module.___cxa_atexit = e.__cxa_atexit, Module._fputs = e.fputs, Module._vsnprintf = e.vsnprintf, Module.___small_fprintf = e.__small_fprintf, Module._zcalloc = e.zcalloc, Module._zcfree = e.zcfree, Module.___dynamic_cast = e.__dynamic_cast, Module.___cxa_pure_virtual = e.__cxa_pure_virtual, Module._modf = e.modf, Module._localtime_r = e.localtime_r, Module._strncat = e.strncat, Module._munmap = e.munmap, Module.___ctype_get_mb_cur_max = e.__ctype_get_mb_cur_max, Module.___ctype_tolower_loc = e.__ctype_tolower_loc, Module.___ctype_toupper_loc = e.__ctype_toupper_loc, Module._fdopen = e.fdopen, Module._sqrt = e.sqrt, Module._acosl = e.acosl, Module._aligned_alloc = e.aligned_alloc, Module._atan2l = e.atan2l, ___funcs_on_exit = e.__funcs_on_exit, Module._atexit = e.atexit, Module.___cxa_finalize = e.__cxa_finalize, Module._btowc = e.btowc, Module._clock = e.clock, Module._scalbn = e.scalbn, Module._cosl = e.cosl, Module._dladdr = e.dladdr, ___dl_seterr = e.__dl_seterr, Module._duplocale = e.duplocale, __emscripten_find_dylib = e._emscripten_find_dylib, Module._memmove = e.memmove, Module._memset = e.memset, Module._fchmod = e.fchmod, Module._fchmodat = e.fchmodat, Module._fchown = e.fchown, Module._fcntl = e.fcntl, Module._fdopendir = e.fdopendir, Module._fmax = e.fmax, Module._fmin = e.fmin, Module._fputwc = e.fputwc, Module._frexp = e.frexp, Module._ftell = e.ftell, Module._getentropy = e.getentropy, Module._geteuid = e.geteuid, Module._getgid = e.getgid, Module._mbtowc = e.mbtowc, Module._getuid = e.getuid, Module._getwc = e.getwc, Module._gmtime = e.gmtime, Module._hypot = e.hypot, Module._mbrtowc = e.mbrtowc, Module._ioctl = e.ioctl, Module._isalpha = e.isalpha, Module._isgraph = e.isgraph, Module._isspace = e.isspace, Module._iswblank_l = e.iswblank_l, Module._iswcntrl_l = e.iswcntrl_l, Module._iswxdigit_l = e.iswxdigit_l, Module._isxdigit_l = e.isxdigit_l, Module._pthread_cond_broadcast = e.pthread_cond_broadcast, Module._pthread_atfork = e.pthread_atfork, Module._pthread_mutex_trylock = e.pthread_mutex_trylock, Module._pthread_create = e.pthread_create, Module._pthread_join = e.pthread_join, Module._pthread_cond_timedwait = e.pthread_cond_timedwait, Module._pthread_detach = e.pthread_detach, Module._link = e.link, Module._llround = e.llround, Module._localtime = e.localtime, Module._log2 = e.log2, Module._logb = e.logb, Module._lround = e.lround, Module._mbrlen = e.mbrlen, Module._mbsnrtowcs = e.mbsnrtowcs, Module._mbsrtowcs = e.mbsrtowcs, Module._memmem = e.memmem, Module._memrchr = e.memrchr, _emscripten_builtin_memalign = e.emscripten_builtin_memalign, Module._socket = e.socket, Module._nextafter = e.nextafter, Module._nextafterf = e.nextafterf, _ntohs = e.ntohs, Module._openat = e.openat, Module._pathconf = e.pathconf, Module._perror = e.perror, Module._iprintf = e.iprintf, Module.___small_printf = e.__small_printf, Module._pthread_mutexattr_getprotocol = e.pthread_mutexattr_getprotocol, Module._pthread_mutexattr_getpshared = e.pthread_mutexattr_getpshared, Module._pthread_mutexattr_getrobust = e.pthread_mutexattr_getrobust, Module._pthread_mutexattr_gettype = e.pthread_mutexattr_gettype, Module._pthread_mutexattr_destroy = e.pthread_mutexattr_destroy, Module._pthread_mutexattr_init = e.pthread_mutexattr_init, Module._pthread_mutexattr_setprotocol = e.pthread_mutexattr_setprotocol, Module._pthread_mutexattr_setpshared = e.pthread_mutexattr_setpshared, Module._pthread_mutexattr_settype = e.pthread_mutexattr_settype, Module._putchar = e.putchar, Module._qsort = e.qsort, Module._srand = e.srand, Module._rand = e.rand, Module._remainder = e.remainder, Module._remove = e.remove, Module._remquo = e.remquo, Module._round = e.round, Module._roundf = e.roundf, __emscripten_timeout = e._emscripten_timeout, Module._sinl = e.sinl, Module._siprintf = e.siprintf, Module._sqrtl = e.sqrtl, Module._vsscanf = e.vsscanf, Module._statvfs = e.statvfs, Module._strcasecmp = e.strcasecmp, Module._strerror = e.strerror, Module._strftime = e.strftime, Module._strncasecmp = e.strncasecmp, Module.___floatsitf = e.__floatsitf, Module.___multf3 = e.__multf3, Module.___addtf3 = e.__addtf3, Module.___extenddftf2 = e.__extenddftf2, Module.___getf2 = e.__getf2, Module.___subtf3 = e.__subtf3, Module.___divtf3 = e.__divtf3, Module.___eqtf2 = e.__eqtf2, Module.___letf2 = e.__letf2, Module.___trunctfdf2 = e.__trunctfdf2, Module._strtold = e.strtold, Module._strtof_l = e.strtof_l, Module._strtod_l = e.strtod_l, Module._strtold_l = e.strtold_l, Module._strtok = e.strtok, Module._strtoull_l = e.strtoull_l, Module._strtoll_l = e.strtoll_l, Module._swprintf = e.swprintf, Module._connect = e.connect, Module._trunc = e.trunc, Module._ungetc = e.ungetc, Module._ungetwc = e.ungetwc, Module._unlinkat = e.unlinkat, Module._usleep = e.usleep, Module._utimensat = e.utimensat, Module._vasprintf = e.vasprintf, Module._wcrtomb = e.wcrtomb, Module._wcscoll_l = e.wcscoll_l, Module._wcsnrtombs = e.wcsnrtombs, Module._wcstof = e.wcstof, Module._wcstod = e.wcstod, Module._wcstold = e.wcstold, Module._wcstoull = e.wcstoull, Module._wcstoll = e.wcstoll, Module._wcstoul = e.wcstoul, Module._wcstol = e.wcstol, Module._wcsxfrm_l = e.wcsxfrm_l, Module._wctob = e.wctob, Module._wmemchr = e.wmemchr, Module._wmemcmp = e.wmemcmp, _emscripten_get_sbrk_ptr = e.emscripten_get_sbrk_ptr, Module.___ashlti3 = e.__ashlti3, Module.___lttf2 = e.__lttf2, _setThrew = e.setThrew, __emscripten_tempret_set = e._emscripten_tempret_set, __emscripten_tempret_get = e._emscripten_tempret_get, Module.___fixtfsi = e.__fixtfsi, __emscripten_stack_restore = e._emscripten_stack_restore, __emscripten_stack_alloc = e._emscripten_stack_alloc, _emscripten_stack_get_current = e.emscripten_stack_get_current, ___cxa_decrement_exception_refcount = Module.___cxa_decrement_exception_refcount = e.__cxa_decrement_exception_refcount, ___cxa_increment_exception_refcount = Module.___cxa_increment_exception_refcount = e.__cxa_increment_exception_refcount, Module.___cxa_bad_cast = e.__cxa_bad_cast, Module.___cxa_bad_typeid = e.__cxa_bad_typeid, Module.___cxa_allocate_exception = e.__cxa_allocate_exception, Module.___cxa_free_exception = e.__cxa_free_exception, Module.___cxa_init_primary_exception = e.__cxa_init_primary_exception, ___cxa_get_exception_ptr = Module.___cxa_get_exception_ptr = e.__cxa_get_exception_ptr, Module.___stack_pointer = e.__stack_pointer, Module.___table_base = e.__table_base.value, Module._LocalBufferBlockPointers = e.LocalBufferBlockPointers.value, Module._BufferBlocks = e.BufferBlocks.value, Module._wal_level = e.wal_level.value, Module._CurrentMemoryContext = e.CurrentMemoryContext.value, Module.___memory_base = e.__memory_base.value, Module._SnapshotAnyData = e.SnapshotAnyData.value, Module._debug_query_string = e.debug_query_string.value, Module._maintenance_work_mem = e.maintenance_work_mem.value, wasmTable = e.__indirect_function_table, Module._CritSectionCount = e.CritSectionCount.value, Module._InterruptPending = e.InterruptPending.value, Module._ParallelWorkerNumber = e.ParallelWorkerNumber.value, Module._pg_number_of_ones = e.pg_number_of_ones.value, Module._TopMemoryContext = e.TopMemoryContext.value, Module._IsUnderPostmaster = e.IsUnderPostmaster.value, Module._MainLWLockArray = e.MainLWLockArray.value, Module._CurrentResourceOwner = e.CurrentResourceOwner.value, Module._MyBackendType = e.MyBackendType.value, Module._work_mem = e.work_mem.value, Module._pg_global_prng_state = e.pg_global_prng_state.value, Module._NBuffers = e.NBuffers.value, Module._XactIsoLevel = e.XactIsoLevel.value, Module._bsysscan = e.bsysscan.value, Module._CheckXidAlive = e.CheckXidAlive.value, Module._MyProc = e.MyProc.value, Module._MyDatabaseId = e.MyDatabaseId.value, Module._MyDatabaseTableSpace = e.MyDatabaseTableSpace.value, Module._TTSOpsBufferHeapTuple = e.TTSOpsBufferHeapTuple.value, Module._RecentXmin = e.RecentXmin.value, Module._TTSOpsHeapTuple = e.TTSOpsHeapTuple.value, Module._pgWalUsage = e.pgWalUsage.value, Module._pgBufferUsage = e.pgBufferUsage.value, Module._error_context_stack = e.error_context_stack.value, Module._MyLatch = e.MyLatch.value, Module._SnapshotSelfData = e.SnapshotSelfData.value, Module.___THREW__ = e.__THREW__.value, Module.___threwValue = e.__threwValue.value, Module._PG_exception_stack = e.PG_exception_stack.value, Module._TTSOpsVirtual = e.TTSOpsVirtual.value, Module._GUC_check_errdetail_string = e.GUC_check_errdetail_string.value, Module._TransamVariables = e.TransamVariables.value, Module._TopTransactionContext = e.TopTransactionContext.value, Module._InterruptHoldoffCount = e.InterruptHoldoffCount.value, Module._MyProcPid = e.MyProcPid.value, Module._RmgrTable = e.RmgrTable.value, Module._process_shared_preload_libraries_in_progress = e.process_shared_preload_libraries_in_progress.value, Module._wal_segment_size = e.wal_segment_size.value, Module._TopTransactionResourceOwner = e.TopTransactionResourceOwner.value, Module._arch_module_check_errdetail_string = e.arch_module_check_errdetail_string.value, Module._stdout = e.stdout.value, Module._stdin = e.stdin.value, Module._creating_extension = e.creating_extension.value, Module._object_access_hook = e.object_access_hook.value, Module._InvalidObjectAddress = e.InvalidObjectAddress.value, Module._check_function_bodies = e.check_function_bodies.value, Module._post_parse_analyze_hook = e.post_parse_analyze_hook.value, Module._ScanKeywordTokens = e.ScanKeywordTokens.value, Module._ScanKeywords = e.ScanKeywords.value, Module._standard_conforming_strings = e.standard_conforming_strings.value, Module._None_Receiver = e.None_Receiver.value, Module._explain_per_plan_hook = e.explain_per_plan_hook.value, Module._explain_get_index_name_hook = e.explain_get_index_name_hook.value, Module._explain_per_node_hook = e.explain_per_node_hook.value, Module._CacheMemoryContext = e.CacheMemoryContext.value, Module._SPI_processed = e.SPI_processed.value, Module._SPI_tuptable = e.SPI_tuptable.value, Module._TTSOpsMinimalTuple = e.TTSOpsMinimalTuple.value, Module._check_password_hook = e.check_password_hook.value, Module._ConfigReloadPending = e.ConfigReloadPending.value, Module._max_parallel_maintenance_workers = e.max_parallel_maintenance_workers.value, Module._DateStyle = e.DateStyle.value, Module._ExecutorStart_hook = e.ExecutorStart_hook.value, Module._ExecutorRun_hook = e.ExecutorRun_hook.value, Module._ExecutorFinish_hook = e.ExecutorFinish_hook.value, Module._ExecutorEnd_hook = e.ExecutorEnd_hook.value, Module._ExecutorCheckPerms_hook = e.ExecutorCheckPerms_hook.value, Module._SPI_result = e.SPI_result.value, Module._stderr = e.stderr.value, Module._MyProcPort = e.MyProcPort.value, Module._ClientAuthentication_hook = e.ClientAuthentication_hook.value, Module._set_rel_pathlist_hook = e.set_rel_pathlist_hook.value, Module._cpu_tuple_cost = e.cpu_tuple_cost.value, Module._cpu_operator_cost = e.cpu_operator_cost.value, Module._seq_page_cost = e.seq_page_cost.value, Module._planner_hook = e.planner_hook.value, Module._get_relation_info_hook = e.get_relation_info_hook.value, Module._QueryCancelPending = e.QueryCancelPending.value, Module._ShutdownRequestPending = e.ShutdownRequestPending.value, Module._MyStartTime = e.MyStartTime.value, Module._cluster_name = e.cluster_name.value, Module._ProcDiePending = e.ProcDiePending.value, Module._application_name = e.application_name.value, Module._row_security_policy_hook_restrictive = e.row_security_policy_hook_restrictive.value, Module._row_security_policy_hook_permissive = e.row_security_policy_hook_permissive.value, Module._BufferDescriptors = e.BufferDescriptors.value, Module._shmem_startup_hook = e.shmem_startup_hook.value, Module._ProcessUtility_hook = e.ProcessUtility_hook.value, Module._IntervalStyle = e.IntervalStyle.value, Module._extra_float_digits = e.extra_float_digits.value, Module._ScanKeywordCategories = e.ScanKeywordCategories.value, Module._pg_crc32_table = e.pg_crc32_table.value, Module._shmem_request_hook = e.shmem_request_hook.value, Module._z_errmsg = e.z_errmsg.value, Module.__length_code = e._length_code.value, Module.__dist_code = e._dist_code.value, ___heap_base = e.__heap_base.value;
	}
	var wasmImports = {
		__assert_fail: ___assert_fail,
		__call_sighandler: ___call_sighandler,
		__cxa_begin_catch: ___cxa_begin_catch,
		__cxa_current_primary_exception: ___cxa_current_primary_exception,
		__cxa_end_catch: ___cxa_end_catch,
		__cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
		__cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
		__cxa_rethrow: ___cxa_rethrow,
		__cxa_rethrow_primary_exception: ___cxa_rethrow_primary_exception,
		__cxa_throw: ___cxa_throw,
		__cxa_uncaught_exceptions: ___cxa_uncaught_exceptions,
		__resumeException: ___resumeException,
		__syscall_accept4: ___syscall_accept4,
		__syscall_bind: ___syscall_bind,
		__syscall_chdir: ___syscall_chdir,
		__syscall_chmod: ___syscall_chmod,
		__syscall_connect: ___syscall_connect,
		__syscall_dup: ___syscall_dup,
		__syscall_dup3: ___syscall_dup3,
		__syscall_faccessat: ___syscall_faccessat,
		__syscall_fadvise64: ___syscall_fadvise64,
		__syscall_fallocate: ___syscall_fallocate,
		__syscall_fchmod: ___syscall_fchmod,
		__syscall_fchmodat2: ___syscall_fchmodat2,
		__syscall_fchown32: ___syscall_fchown32,
		__syscall_fchownat: ___syscall_fchownat,
		__syscall_fcntl64: ___syscall_fcntl64,
		__syscall_fdatasync: ___syscall_fdatasync,
		__syscall_fstat64: ___syscall_fstat64,
		__syscall_ftruncate64: ___syscall_ftruncate64,
		__syscall_getcwd: ___syscall_getcwd,
		__syscall_getdents64: ___syscall_getdents64,
		__syscall_getegid32: ___syscall_getegid32,
		__syscall_geteuid32: ___syscall_geteuid32,
		__syscall_getgid32: ___syscall_getgid32,
		__syscall_getuid32: ___syscall_getuid32,
		__syscall_ioctl: ___syscall_ioctl,
		__syscall_linkat: ___syscall_linkat,
		__syscall_listen: ___syscall_listen,
		__syscall_lstat64: ___syscall_lstat64,
		__syscall_mkdirat: ___syscall_mkdirat,
		__syscall_newfstatat: ___syscall_newfstatat,
		__syscall_openat: ___syscall_openat,
		__syscall_pipe2: ___syscall_pipe2,
		__syscall_poll: ___syscall_poll,
		__syscall_readlinkat: ___syscall_readlinkat,
		__syscall_recvfrom: ___syscall_recvfrom,
		__syscall_renameat: ___syscall_renameat,
		__syscall_rmdir: ___syscall_rmdir,
		__syscall_sendto: ___syscall_sendto,
		__syscall_socket: ___syscall_socket,
		__syscall_stat64: ___syscall_stat64,
		__syscall_statfs64: ___syscall_statfs64,
		__syscall_symlinkat: ___syscall_symlinkat,
		__syscall_truncate64: ___syscall_truncate64,
		__syscall_umask: ___syscall_umask,
		__syscall_unlinkat: ___syscall_unlinkat,
		__syscall_utimensat: ___syscall_utimensat,
		_abort_js: __abort_js,
		_dlopen_js: __dlopen_js,
		_dlsym_js: __dlsym_js,
		_emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
		_emscripten_throw_longjmp: __emscripten_throw_longjmp,
		_gmtime_js: __gmtime_js,
		_localtime_js: __localtime_js,
		_mmap_js: __mmap_js,
		_munmap_js: __munmap_js,
		_setitimer_js: __setitimer_js,
		_tzset_js: __tzset_js,
		clock_time_get: _clock_time_get,
		emscripten_date_now: _emscripten_date_now,
		emscripten_force_exit: _emscripten_force_exit,
		emscripten_get_heap_max: _emscripten_get_heap_max,
		emscripten_get_now: _emscripten_get_now,
		emscripten_resize_heap: _emscripten_resize_heap,
		environ_get: _environ_get,
		environ_sizes_get: _environ_sizes_get,
		exit: _exit,
		fd_close: _fd_close,
		fd_fdstat_get: _fd_fdstat_get,
		fd_pread: _fd_pread,
		fd_pwrite: _fd_pwrite,
		fd_read: _fd_read,
		fd_seek: _fd_seek,
		fd_sync: _fd_sync,
		fd_write: _fd_write,
		getTempRet0: _getTempRet0,
		getaddrinfo: _getaddrinfo,
		getnameinfo: _getnameinfo,
		invoke_di,
		invoke_i,
		invoke_id,
		invoke_ii,
		invoke_iii,
		invoke_iiii,
		invoke_iiiii,
		invoke_iiiiii,
		invoke_iiiiiii,
		invoke_iiiiiiii,
		invoke_iiiiiiiii,
		invoke_iiiiiiiiii,
		invoke_iiiiiiiiiii,
		invoke_iiiiiiiiiiiiii,
		invoke_iiiiiiiiiiiiiiiiii,
		invoke_iiiiiji,
		invoke_iiiij,
		invoke_iiij,
		invoke_iiji,
		invoke_iijj,
		invoke_ij,
		invoke_ijiiiii,
		invoke_ijiiiiii,
		invoke_ijji,
		invoke_j,
		invoke_ji,
		invoke_jii,
		invoke_jiiii,
		invoke_jiiiiii,
		invoke_jiiiiiiiii,
		invoke_jij,
		invoke_v,
		invoke_vi,
		invoke_vid,
		invoke_vii,
		invoke_viii,
		invoke_viiii,
		invoke_viiiii,
		invoke_viiiiii,
		invoke_viiiiiii,
		invoke_viiiiiiii,
		invoke_viiiiiiiii,
		invoke_viiiiiiiiiiii,
		invoke_viiiji,
		invoke_viij,
		invoke_viiji,
		invoke_viijii,
		invoke_viijiiii,
		invoke_vij,
		invoke_viji,
		invoke_vijiji,
		invoke_vijjii,
		invoke_vj,
		invoke_vji,
		invoke_vjii,
		invoke_vjjii,
		memory: wasmMemory,
		proc_exit: _proc_exit,
		random_get: _random_get,
		sched_yield: _sched_yield,
		setTempRet0: _setTempRet0
	};
	function invoke_ii(e, t) {
		var r = stackSave();
		try {
			return getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			_setThrew(1, 0);
		}
	}
	function invoke_vii(e, t, r) {
		var _ = stackSave();
		try {
			getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			_setThrew(1, 0);
		}
	}
	function invoke_viiiii(e, t, r, _, n, a) {
		var i = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a);
		} catch (l) {
			if (stackRestore(i), !(l instanceof EmscriptenEH)) throw l;
			_setThrew(1, 0);
		}
	}
	function invoke_vi(e, t) {
		var r = stackSave();
		try {
			getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			_setThrew(1, 0);
		}
	}
	function invoke_v(e) {
		var t = stackSave();
		try {
			getWasmTableEntry(e)();
		} catch (r) {
			if (stackRestore(t), !(r instanceof EmscriptenEH)) throw r;
			_setThrew(1, 0);
		}
	}
	function invoke_iii(e, t, r) {
		var _ = stackSave();
		try {
			return getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			_setThrew(1, 0);
		}
	}
	function invoke_viii(e, t, r, _) {
		var n = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_iiii(e, t, r, _) {
		var n = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_jii(e, t, r) {
		var _ = stackSave();
		try {
			return getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_iiiii(e, t, r, _, n) {
		var a = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n);
		} catch (i) {
			if (stackRestore(a), !(i instanceof EmscriptenEH)) throw i;
			_setThrew(1, 0);
		}
	}
	function invoke_i(e) {
		var t = stackSave();
		try {
			return getWasmTableEntry(e)();
		} catch (r) {
			if (stackRestore(t), !(r instanceof EmscriptenEH)) throw r;
			_setThrew(1, 0);
		}
	}
	function invoke_ji(e, t) {
		var r = stackSave();
		try {
			return getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_jiiiiiiiii(e, t, r, _, n, a, i, l, o, s) {
		var c = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s);
		} catch (p) {
			if (stackRestore(c), !(p instanceof EmscriptenEH)) throw p;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_jiiiiii(e, t, r, _, n, a, i) {
		var l = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i);
		} catch (o) {
			if (stackRestore(l), !(o instanceof EmscriptenEH)) throw o;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_viiii(e, t, r, _, n) {
		var a = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n);
		} catch (i) {
			if (stackRestore(a), !(i instanceof EmscriptenEH)) throw i;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiiiiiiiiii(e, t, r, _, n, a, i, l, o, s, c, p, d, u) {
		var f = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s, c, p, d, u);
		} catch (m) {
			if (stackRestore(f), !(m instanceof EmscriptenEH)) throw m;
			_setThrew(1, 0);
		}
	}
	function invoke_vji(e, t, r) {
		var _ = stackSave();
		try {
			getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			_setThrew(1, 0);
		}
	}
	function invoke_viiji(e, t, r, _, n) {
		var a = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n);
		} catch (i) {
			if (stackRestore(a), !(i instanceof EmscriptenEH)) throw i;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiij(e, t, r, _, n) {
		var a = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n);
		} catch (i) {
			if (stackRestore(a), !(i instanceof EmscriptenEH)) throw i;
			_setThrew(1, 0);
		}
	}
	function invoke_vijiji(e, t, r, _, n, a) {
		var i = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a);
		} catch (l) {
			if (stackRestore(i), !(l instanceof EmscriptenEH)) throw l;
			_setThrew(1, 0);
		}
	}
	function invoke_viji(e, t, r, _) {
		var n = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiii(e, t, r, _, n, a) {
		var i = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a);
		} catch (l) {
			if (stackRestore(i), !(l instanceof EmscriptenEH)) throw l;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiiiii(e, t, r, _, n, a, i, l, o) {
		var s = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l, o);
		} catch (c) {
			if (stackRestore(s), !(c instanceof EmscriptenEH)) throw c;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiiiiiiiiiiiiii(e, t, r, _, n, a, i, l, o, s, c, p, d, u, f, m, y, b) {
		var k = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s, c, p, d, u, f, m, y, b);
		} catch (P) {
			if (stackRestore(k), !(P instanceof EmscriptenEH)) throw P;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiii(e, t, r, _, n, a, i) {
		var l = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i);
		} catch (o) {
			if (stackRestore(l), !(o instanceof EmscriptenEH)) throw o;
			_setThrew(1, 0);
		}
	}
	function invoke_vj(e, t) {
		var r = stackSave();
		try {
			getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiiiiii(e, t, r, _, n, a, i, l, o, s) {
		var c = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s);
		} catch (p) {
			if (stackRestore(c), !(p instanceof EmscriptenEH)) throw p;
			_setThrew(1, 0);
		}
	}
	function invoke_viij(e, t, r, _) {
		var n = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_viiiiiiii(e, t, r, _, n, a, i, l, o) {
		var s = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a, i, l, o);
		} catch (c) {
			if (stackRestore(s), !(c instanceof EmscriptenEH)) throw c;
			_setThrew(1, 0);
		}
	}
	function invoke_viiiiiiiii(e, t, r, _, n, a, i, l, o, s) {
		var c = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s);
		} catch (p) {
			if (stackRestore(c), !(p instanceof EmscriptenEH)) throw p;
			_setThrew(1, 0);
		}
	}
	function invoke_vij(e, t, r) {
		var _ = stackSave();
		try {
			getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			_setThrew(1, 0);
		}
	}
	function invoke_viiiiii(e, t, r, _, n, a, i) {
		var l = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a, i);
		} catch (o) {
			if (stackRestore(l), !(o instanceof EmscriptenEH)) throw o;
			_setThrew(1, 0);
		}
	}
	function invoke_iiji(e, t, r, _) {
		var n = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_ij(e, t) {
		var r = stackSave();
		try {
			return getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			_setThrew(1, 0);
		}
	}
	function invoke_viiiiiii(e, t, r, _, n, a, i, l) {
		var o = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a, i, l);
		} catch (s) {
			if (stackRestore(o), !(s instanceof EmscriptenEH)) throw s;
			_setThrew(1, 0);
		}
	}
	function invoke_viiiji(e, t, r, _, n, a) {
		var i = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a);
		} catch (l) {
			if (stackRestore(i), !(l instanceof EmscriptenEH)) throw l;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiiii(e, t, r, _, n, a, i, l) {
		var o = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l);
		} catch (s) {
			if (stackRestore(o), !(s instanceof EmscriptenEH)) throw s;
			_setThrew(1, 0);
		}
	}
	function invoke_iiij(e, t, r, _) {
		var n = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_vid(e, t, r) {
		var _ = stackSave();
		try {
			getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			_setThrew(1, 0);
		}
	}
	function invoke_j(e) {
		var t = stackSave();
		try {
			return getWasmTableEntry(e)();
		} catch (r) {
			if (stackRestore(t), !(r instanceof EmscriptenEH)) throw r;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_vjjii(e, t, r, _, n) {
		var a = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n);
		} catch (i) {
			if (stackRestore(a), !(i instanceof EmscriptenEH)) throw i;
			_setThrew(1, 0);
		}
	}
	function invoke_ijji(e, t, r, _) {
		var n = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_iijj(e, t, r, _) {
		var n = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_jij(e, t, r) {
		var _ = stackSave();
		try {
			return getWasmTableEntry(e)(t, r);
		} catch (n) {
			if (stackRestore(_), !(n instanceof EmscriptenEH)) throw n;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_ijiiiiii(e, t, r, _, n, a, i, l) {
		var o = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l);
		} catch (s) {
			if (stackRestore(o), !(s instanceof EmscriptenEH)) throw s;
			_setThrew(1, 0);
		}
	}
	function invoke_viijii(e, t, r, _, n, a) {
		var i = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a);
		} catch (l) {
			if (stackRestore(i), !(l instanceof EmscriptenEH)) throw l;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiji(e, t, r, _, n, a, i) {
		var l = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i);
		} catch (o) {
			if (stackRestore(l), !(o instanceof EmscriptenEH)) throw o;
			_setThrew(1, 0);
		}
	}
	function invoke_viijiiii(e, t, r, _, n, a, i, l) {
		var o = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a, i, l);
		} catch (s) {
			if (stackRestore(o), !(s instanceof EmscriptenEH)) throw s;
			_setThrew(1, 0);
		}
	}
	function invoke_vijjii(e, t, r, _, n, a) {
		var i = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a);
		} catch (l) {
			if (stackRestore(i), !(l instanceof EmscriptenEH)) throw l;
			_setThrew(1, 0);
		}
	}
	function invoke_vjii(e, t, r, _) {
		var n = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _);
		} catch (a) {
			if (stackRestore(n), !(a instanceof EmscriptenEH)) throw a;
			_setThrew(1, 0);
		}
	}
	function invoke_jiiii(e, t, r, _, n) {
		var a = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n);
		} catch (i) {
			if (stackRestore(a), !(i instanceof EmscriptenEH)) throw i;
			return _setThrew(1, 0), 0n;
		}
	}
	function invoke_viiiiiiiiiiii(e, t, r, _, n, a, i, l, o, s, c, p, d) {
		var u = stackSave();
		try {
			getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s, c, p, d);
		} catch (f) {
			if (stackRestore(u), !(f instanceof EmscriptenEH)) throw f;
			_setThrew(1, 0);
		}
	}
	function invoke_di(e, t) {
		var r = stackSave();
		try {
			return getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			_setThrew(1, 0);
		}
	}
	function invoke_id(e, t) {
		var r = stackSave();
		try {
			return getWasmTableEntry(e)(t);
		} catch (_) {
			if (stackRestore(r), !(_ instanceof EmscriptenEH)) throw _;
			_setThrew(1, 0);
		}
	}
	function invoke_ijiiiii(e, t, r, _, n, a, i) {
		var l = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i);
		} catch (o) {
			if (stackRestore(l), !(o instanceof EmscriptenEH)) throw o;
			_setThrew(1, 0);
		}
	}
	function invoke_iiiiiiiiiii(e, t, r, _, n, a, i, l, o, s, c) {
		var p = stackSave();
		try {
			return getWasmTableEntry(e)(t, r, _, n, a, i, l, o, s, c);
		} catch (d) {
			if (stackRestore(p), !(d instanceof EmscriptenEH)) throw d;
			_setThrew(1, 0);
		}
	}
	function callMain(e = []) {
		var t = resolveGlobalSymbol("main").sym;
		if (t) {
			e.unshift(thisProgram);
			var r = e.length, _ = stackAlloc((r + 1) * 4), n = _;
			for (var a of e) HEAPU32[n >> 2] = stringToUTF8OnStack(a), n += 4;
			HEAPU32[n >> 2] = 0;
			try {
				var i = t(r, _);
				return exitJS(i, !0), i;
			} catch (l) {
				return handleException(l);
			}
		}
	}
	async function run(e = programArgs) {
		preRun(), runDependencies && await resolveRunDependencies();
		var t = Module.setStatus;
		if (t && (t("Running..."), await new Promise((_) => setTimeout(_, 1)), setTimeout(t, 1, "")), !ABORT) {
			initRuntime(), Module.onRuntimeInitialized?.();
			Module.noInitialRun, postRun();
		}
	}
	var wasmExports = await createWasm();
	return await run(), quit_ = (e, t) => {
		throw t;
	}, Module;
}
var Ue = it;
var He = Ue;
var Y = class {
	constructor(t = {
		results: [],
		throwOnError: !1,
		onNotice: void 0,
		databaseError: null
	}) {
		this.results = [];
		this.throwOnError = !1;
		this.databaseError = null;
		this.results = t.results || [], this.throwOnError = t.throwOnError || !1, this.onNotice = t.onNotice, this.databaseError = t.databaseError === void 0 ? null : t.databaseError;
	}
};
var G;
var $;
var Q;
var J;
var te;
var re;
var de;
var Me;
var be;
var _e;
var ne;
var ce;
var ae;
var Z;
var E;
var z;
var x;
var ie;
var A;
var le;
var j;
var U;
var D;
var O;
var ue;
var pe;
var ge;
var oe;
var S;
var Te;
var Pe;
var Ee;
var We;
var Ve;
var Xe;
var Ke;
var Ce;
var Ye;
var N;
var $e;
var Qe;
var Je;
var Ze;
var xe;
var q = class q extends z$1 {
	constructor(r = {}, _ = {}) {
		super();
		R$2(this, S);
		this.POSTGRES_MAIN_LONGJMP = 100;
		this.PGLITE_EXIT_ALIVE = 99;
		R$2(this, G);
		R$2(this, $, !1);
		R$2(this, Q, !1);
		R$2(this, J, !1);
		R$2(this, te, !1);
		R$2(this, re, new V());
		R$2(this, de, new V());
		R$2(this, Me, new V());
		R$2(this, be, new V());
		R$2(this, _e, !1);
		this.debug = 0;
		R$2(this, ne);
		R$2(this, ce, []);
		R$2(this, ae, new pe$1());
		R$2(this, Z);
		R$2(this, E);
		R$2(this, z, /* @__PURE__ */ new Map());
		R$2(this, x, /* @__PURE__ */ new Set());
		R$2(this, ie, -1);
		R$2(this, A, new Y());
		R$2(this, le, -1);
		R$2(this, j, []);
		R$2(this, U, 0);
		R$2(this, D, /* @__PURE__ */ new Uint8Array(0));
		R$2(this, O, 0);
		R$2(this, ue, -1);
		R$2(this, pe, -1);
		R$2(this, ge, -1);
		this.externalCommandStreamFd = null;
		R$2(this, oe, !1);
		typeof r == "string" ? _ = {
			dataDir: r,
			..._
		} : _ = r, this.dataDir = _.dataDir, _.parsers !== void 0 && (this.parsers = {
			...this.parsers,
			..._.parsers
		}), _.serializers !== void 0 && (this.serializers = {
			...this.serializers,
			..._.serializers
		}), _?.debug !== void 0 && (this.debug = _.debug), _?.relaxedDurability !== void 0 && x$6(this, te, _.relaxedDurability), x$6(this, ne, _.extensions ?? {}), this.waitReady = T$4(this, S, Ee).call(this, _ ?? {});
	}
	get ENV() {
		return this.mod?.ENV;
	}
	static async create(r, _) {
		let n = typeof r == "string" ? {
			dataDir: r,
			..._ ?? {}
		} : r ?? _ ?? {}, a = new q(n);
		return await a.waitReady, a;
	}
	handleExternalCmd(r, _) {
		if (r.startsWith("locale -a") && _ === "r") {
			let n = this.mod.stringToUTF8OnStack("/pglite/locale-a"), a = this.mod.stringToUTF8OnStack(_);
			return this.mod._fopen(n, a);
		}
		throw new Error("Unhandled cmd");
	}
	get Module() {
		return this.mod;
	}
	get ready() {
		return h$1(this, $) && !h$1(this, Q) && !h$1(this, J);
	}
	get closed() {
		return h$1(this, J);
	}
	async close() {
		await this._checkReady(), await h$1(this, de).runExclusive(async () => {
			await h$1(this, re).runExclusive(async () => {
				await this._checkReady(), x$6(this, Q, !0);
			});
		});
		for (let r of h$1(this, ce)) await r();
		try {
			this.mod._pgl_setPGliteActive(0), await this.execProtocol($e$1.end()), this.mod._pgl_run_atexit_funcs();
		} catch (r) {
			let _ = r;
			_.name === "ExitStatus" && _.status === 0 || T$4(this, S, N).call(this, "An error occured while closing the db", r.toString());
		} finally {
			this.mod.removeFunction(h$1(this, le)), this.mod.removeFunction(h$1(this, ie));
		}
		await this.fs.closeFs(), x$6(this, J, !0), x$6(this, Q, !1), x$6(this, $, !1), x$6(this, oe, !1);
		try {
			this.mod._emscripten_force_exit(0);
		} catch (r) {
			T$4(this, S, N).call(this, r), r.status !== 0 && T$4(this, S, N).call(this, "Error when exiting", r.toString());
		} finally {
			this.mod = void 0;
		}
	}
	async [Symbol.asyncDispose]() {
		await this.close();
	}
	async _handleBlob(r) {
		x$6(this, Z, r ? await r.arrayBuffer() : void 0);
	}
	async _cleanupBlob() {
		x$6(this, Z, void 0);
	}
	async _getWrittenBlob() {
		if (!h$1(this, E)) return;
		let r = new Blob(h$1(this, E));
		return x$6(this, E, void 0), r;
	}
	async _checkReady() {
		if (h$1(this, Q)) throw new Error("PGlite is closing");
		if (h$1(this, J)) throw new Error("PGlite is closed");
		h$1(this, $) || await this.waitReady;
	}
	execProtocolRawSync(r) {
		let _ = this.mod;
		if (x$6(this, U, 0), x$6(this, O, 0), x$6(this, j, r), h$1(this, G) || x$6(this, G, T$4(this, S, Ke)), h$1(this, D).length !== q.DEFAULT_RECV_BUF_SIZE && x$6(this, D, new Uint8Array(q.DEFAULT_RECV_BUF_SIZE)), r[0] === 88) return /* @__PURE__ */ new Uint8Array(0);
		if (r[0] === 0) return T$4(this, S, xe).call(this, r);
		try {
			for (; h$1(this, U) < r.length || _._pq_buffer_remaining_data() > 0;) {
				let n;
				try {
					n = _.stackSave(), _._PostgresMainLoopOnce();
				} catch (a) {
					_.stackRestore(n), a.status === this.POSTGRES_MAIN_LONGJMP && _._PostgresMainLongJmp();
				}
			}
		} finally {
			_._PostgresSendReadyForQueryIfNecessary(), _._pgl_pq_flush();
		}
		return x$6(this, j, []), h$1(this, O) ? new Uint8Array(h$1(this, D).subarray(0, h$1(this, O))) : /* @__PURE__ */ new Uint8Array(0);
	}
	async execProtocolRaw(r, { syncToFs: _ = !0 } = {}) {
		let n = this.execProtocolRawSync(r);
		return _ && await this.syncToFs(), n;
	}
	async execProtocolRawStream(r, { syncToFs: _ = !0, onRawData: n }) {
		x$6(this, G, (a) => (n(a), a.length));
		try {
			this.execProtocolRawSync(r);
		} finally {
			x$6(this, G, void 0);
		}
		_ && await this.syncToFs();
	}
	async execProtocol(r, { syncToFs: _ = !0, throwOnError: n = !0, onNotice: a } = {}) {
		x$6(this, A, new Y({
			throwOnError: n,
			onNotice: a
		}));
		let i = await this.execProtocolRaw(r, { syncToFs: _ }), l = h$1(this, A).databaseError, o = {
			messages: h$1(this, A).results,
			data: i
		};
		if (x$6(this, A, new Y()), x$6(this, G, void 0), n && l) throw x$6(this, ae, new pe$1()), l;
		return o;
	}
	async execProtocolStream(r, { syncToFs: _, throwOnError: n = !0, onNotice: a } = {}) {
		x$6(this, A, new Y({
			throwOnError: n,
			onNotice: a
		})), x$6(this, G, T$4(this, S, Ce)), await this.execProtocolRaw(r, { syncToFs: _ });
		let i = h$1(this, A).databaseError, l = h$1(this, A).results;
		if (x$6(this, A, new Y()), x$6(this, G, void 0), n && i) throw x$6(this, ae, new pe$1()), i;
		return l;
	}
	isInTransaction() {
		return this.mod._IsTransactionBlock() !== 0;
	}
	async syncToFs() {
		if (h$1(this, _e)) return;
		x$6(this, _e, !0);
		let r = async () => {
			await h$1(this, be).runExclusive(async () => {
				x$6(this, _e, !1), await this.fs.syncToFs(h$1(this, te));
			});
		};
		h$1(this, te) ? r() : await r();
	}
	async listen(r, _, n) {
		return this._runExclusiveListen(() => T$4(this, S, $e).call(this, r, _, n));
	}
	async unlisten(r, _, n) {
		return this._runExclusiveListen(() => T$4(this, S, Qe).call(this, r, _, n));
	}
	onNotification(r) {
		return h$1(this, x).add(r), () => {
			h$1(this, x).delete(r);
		};
	}
	offNotification(r) {
		h$1(this, x).delete(r);
	}
	async dumpDataDir(r) {
		return await h$1(this, re).runExclusive(async () => {
			await this._checkReady();
			let n = this.dataDir?.split("/").pop() ?? "pgdata";
			return this.fs.dumpTar(n, r);
		});
	}
	_runExclusiveQuery(r) {
		return h$1(this, re).runExclusive(r);
	}
	_runExclusiveTransaction(r) {
		return h$1(this, de).runExclusive(r);
	}
	async clone() {
		let r = await this.dumpDataDir("none");
		return q.create({
			loadDataDir: r,
			extensions: h$1(this, ne)
		});
	}
	_runExclusiveListen(r) {
		return h$1(this, Me).runExclusive(r);
	}
	callMain(r) {
		return this.mod.callMain(r);
	}
	copyToFS(r, _, n) {
		se(this.mod.FS, r, _, n);
	}
};
G = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakSet(), Te = function(r) {
	this.debug && console.debug(r);
}, Pe = function(r) {
	this.debug && console.error(r);
}, Ee = async function(r) {
	if (r.fs) this.fs = r.fs;
	else {
		let { dataDir: d, fsType: u } = Be(r.dataDir);
		this.fs = await Ge(d, u);
	}
	let _ = {}, n = [], a = [...this.debug ? ["-d", this.debug.toString()] : []];
	r.pgliteWasmModule || p$2.startArtifactDownload(new URL("./pglite.wasm", import.meta.url)), r.initdbWasmModule || p$2.startArtifactDownload(new URL("./initdb.wasm", import.meta.url));
	let i = r.fsBundle ? r.fsBundle.arrayBuffer() : p$2.getFsBundle(new URL("./pglite.data", import.meta.url)), l;
	i.then((d) => {
		l = d;
	});
	let o = new WebAssembly.Memory({
		initial: r.initialMemory ? r.initialMemory / 65536 : 2048,
		maximum: 32768
	}), s = {
		thisProgram: pt$1,
		PGLITE_ENV: {},
		WASM_PREFIX: p$2.WASM_PREFIX,
		arguments: a,
		noExitRuntime: !0,
		wasmMemory: o,
		stdin: () => null,
		print: (d) => {
			if (r.onStdout && r.onStdout(d)) return T$4(this, S, Te).call(this, d);
			T$4(this, S, Te).call(this, d);
		},
		printErr: (d) => {
			if (r.onStderr && r.onStderr(d)) return T$4(this, S, Pe).call(this, d);
			T$4(this, S, Pe).call(this, d);
		},
		instantiateWasm: (d, u) => (p$2.instantiateWasm(d, r.pgliteWasmModule ?? (() => new URL("./pglite.wasm", import.meta.url))).then(({ instance: f, module: m }) => {
			u(f, m);
		}), {}),
		getPreloadedPackage: (d, u) => {
			if (d === "pglite.data") {
				if (l.byteLength !== u) throw new Error(`Invalid FS bundle size: ${l.byteLength} !== ${u}`);
				return l;
			}
			throw new Error(`Unknown package: ${d}`);
		},
		preRun: [
			(d) => {
				d.onRuntimeInitialized = () => {
					T$4(this, S, Xe).call(this, d);
				};
			},
			(d) => {
				let u = d.FS.makedev(64, 0);
				d.FS.registerDevice(u, {
					open: (m) => {},
					close: (m) => {},
					read: (m, y, b, k, P) => {
						let M = h$1(this, Z);
						if (!M) throw new Error("No /dev/blob File or Blob provided to read from");
						let C = new Uint8Array(M);
						if (P >= C.length) return 0;
						let v = Math.min(C.length - P, k);
						for (let H = 0; H < v; H++) y[b + H] = C[P + H];
						return v;
					},
					write: (m, y, b, k, P) => (h$1(this, E) ?? x$6(this, E, []), h$1(this, E).push(y.slice(b, b + k)), k),
					llseek: (m, y, b) => {
						let k = h$1(this, Z);
						if (!k) throw new Error("No /dev/blob File or Blob provided to llseek");
						let P = y;
						if (b === 1 ? P += m.position : b === 2 && (P = new Uint8Array(k).length), P < 0) throw new d.FS.ErrnoError(28);
						return P;
					}
				}), d.FS.mkdev("/dev/blob", u);
			},
			(d) => {
				d.ENV.HOME = "/home/postgres", d.ENV.USER = "postgres", d.ENV.LOGNAME = "postgres", d.ENV.PGDATA = I$2, d.ENV.PGUSER = r.username ?? "postgres", d.ENV.PGDATABASE = r.database ?? "postgres", d.ENV.LANG = d.ENV.LC_COLLATE = d.ENV.LC_CTYPE = "en_US.UTF-8", d.ENV.TZ = "UTC", d.ENV.PGTZ = "UTC", d.ENV.PGCLIENTENCODING = "UTF8", d.ENV.ICU_DATA = Hr, d.PGLITE_ENV && Object.assign(d.ENV, d.PGLITE_ENV);
			},
			(d) => {
				r.pgDataProxyFs && (d.FS.mkdirTree(I$2), d.FS.mount(d.PROXYFS, {
					root: I$2,
					fs: r.pgDataProxyFs
				}, I$2));
			}
		]
	}, { emscriptenOpts: c } = await this.fs.init(this, s);
	s = c;
	let p = [];
	for (let [d, u] of Object.entries(h$1(this, ne))) if (u instanceof URL) _[d] = Fe(u);
	else {
		let f = await u.setup(this, s);
		if (f.emscriptenOpts && (s = f.emscriptenOpts), f.namespaceObj) {
			let m = this;
			m[d] = f.namespaceObj;
		}
		f.bundlePath && (_[d] = Fe(f.bundlePath)), f.init && n.push(f.init), f.close && h$1(this, ce).push(f.close), p.push(...f.sharedPreloadLibraries ?? []);
	}
	if (s.pg_extensions = _, await i, this.mod = await He(s), this.mod.FS.chmod("/home/postgres/.pgpass", 384), this.mod.FS.chmod(Lr, 365), this.mod.FS.chmod(pt$1, 365), await this.fs.initialSyncFs(), r.icuDataDir && await T$4(this, S, Ve).call(this, r.icuDataDir), !r.noInitDb) {
		if (r.loadDataDir) {
			if (this.mod.FS.analyzePath(I$2 + "/PG_VERSION").exists) throw new Error("Database already exists, cannot load from tarball");
			T$4(this, S, N).call(this, "pglite: loading data from tarball"), await Jr(this.mod.FS, r.loadDataDir, I$2);
		} else if (this.mod.FS.analyzePath(I$2 + "/PG_VERSION").exists) T$4(this, S, N).call(this, "pglite: found DB, resuming");
		else {
			T$4(this, S, N).call(this, "pglite: no db in filesystem, running initdb");
			let d = { ...r };
			d.noInitDb = !0, d.dataDir = void 0, d.extensions = void 0, d.loadDataDir = void 0, d.fs = void 0;
			let u = this.fs instanceof ee;
			u && (this.mod.FS.mkdirTree(I$2, 448), d.pgDataProxyFs = this.mod.FS);
			let f = await q.create(d);
			try {
				let m = await St$1({
					pg: f,
					debug: r.debug,
					wasmModule: r.initdbWasmModule,
					args: r.initDbStartParams
				});
				if (m.exitCode !== 0 && !m.stderr.includes("exists but is not empty")) throw new Error("INITDB failed to initialize: " + m.stderr);
				if (!u) {
					let y = await f.dumpDataDir("none");
					await Jr(this.mod.FS, y, I$2);
				}
			} finally {
				await f.close();
			}
			await this.syncToFs();
		}
		await Le(this.mod, (...d) => T$4(this, S, N).call(this, ...d)), T$4(this, S, We).call(this, p, r), this.mod._pgl_setPGliteActive(1), T$4(this, S, Ze).call(this, {
			pgDataFolder: I$2,
			startParams: [...r.startParams || q.defaultStartParams, ...this.debug ? ["-d", this.debug.toString()] : []]
		}), T$4(this, S, Je).call(this), x$6(this, $, !0), r.username && await this.exec(`SET ROLE ${r.username};`), await this._initArrayTypes();
		for (let d of n) await d();
	}
}, We = function(r, _) {
	if (r.length && !_.postgresqlconf && (_.postgresqlconf = new Array()), _.postgresqlconf) {
		let n = typeof _.postgresqlconf == "string" ? _.postgresqlconf : _.postgresqlconf.join(`
`);
		if (r.length) {
			let a = n.match(/^(shared_preload_libraries\s*=\s*)(.*)$/m);
			if (a) {
				let i = a[2].split(",").map((o) => o.trim()), l = [.../* @__PURE__ */ new Set([...i, ...r])];
				n = n.replace(a[0], `${a[1]}${l.join(",")}`);
			} else n += `
shared_preload_libraries=${r.join(",")}`;
		}
		se(this.mod.FS, `${I$2}/postgresql.conf`, new TextEncoder().encode(n));
	}
}, Ve = async function(r) {
	T$4(this, S, N).call(this, `pglite: icuDataDir specified, removing default icu data dir at ${Hr}`), p$2.rmdirRecursive(this.mod.FS, Hr), T$4(this, S, N).call(this, `pglite: loading icu data from tarball ${r}`), this.mod.FS.mkdirTree(Hr), await Jr(this.mod.FS, r, Hr);
}, Xe = function(r) {
	x$6(this, ue, r.addFunction((_) => (T$4(this, S, N).call(this, `Postgres tried to execute ${r.UTF8ToString(_)}, returning 1.`), 1), "pi")), r._pgl_set_system_fn(h$1(this, ue)), x$6(this, pe, r.addFunction((_, n) => {
		let a = r.UTF8ToString(n), i = r.UTF8ToString(_);
		return this.externalCommandStreamFd = this.handleExternalCmd(i, a), this.externalCommandStreamFd;
	}, "ppp")), r._pgl_set_popen_fn(h$1(this, pe)), x$6(this, ge, r.addFunction((_) => {
		if (_ === this.externalCommandStreamFd) this.mod._fclose(this.externalCommandStreamFd), this.externalCommandStreamFd = null;
		else throw `Unhandled pclose ${_}`;
		T$4(this, S, N).call(this, "pclose_fn", _);
	}, "pi")), r._pgl_set_pclose_fn(h$1(this, ge)), x$6(this, ie, r.addFunction((_, n) => {
		let a;
		try {
			a = this.mod.HEAPU8.subarray(_, _ + n);
		} catch (i) {
			throw console.error("error", i), i;
		}
		return h$1(this, G).call(this, a);
	}, "ipi")), x$6(this, le, r.addFunction((_, n) => {
		let a = h$1(this, j).length - h$1(this, U);
		return a > n && (a = n), this.mod.HEAPU8.set(h$1(this, j).subarray(h$1(this, U), h$1(this, U) + a), _), x$6(this, U, h$1(this, U) + a), a;
	}, "ipi")), r._pgl_set_rw_cbs(h$1(this, le), h$1(this, ie));
}, Ke = function(r) {
	let _ = r.slice(), n = h$1(this, O) + _.length;
	if (n > h$1(this, D).length) {
		let a = h$1(this, D).length + (h$1(this, D).length >> 1) + n;
		n > q.MAX_BUFFER_SIZE && (n = q.MAX_BUFFER_SIZE);
		let i = new Uint8Array(a);
		i.set(h$1(this, D).subarray(0, h$1(this, O))), x$6(this, D, i);
	}
	return h$1(this, D).set(_, h$1(this, O)), x$6(this, O, h$1(this, O) + _.length), T$4(this, S, Ce).call(this, _);
}, Ce = function(r) {
	return h$1(this, ae).parse(r, (_) => {
		let n = T$4(this, S, Ye).call(this, _);
		n && h$1(this, A).results.push(n);
	}), r.length;
}, Ye = function(r) {
	if (!h$1(this, A).databaseError) {
		if (r instanceof O$1) h$1(this, A).throwOnError && (h$1(this, A).databaseError = r);
		else if (r instanceof te$1) this.debug > 0 && console.warn(r), h$1(this, A).onNotice && h$1(this, A).onNotice(r);
		else if (r instanceof $$1) {
			let _ = h$1(this, z).get(r.channel);
			_ && _.forEach((n) => {
				queueMicrotask(() => n(r.payload));
			}), h$1(this, x).forEach((n) => {
				queueMicrotask(() => n(r.channel, r.payload));
			});
		}
		return r;
	}
	return null;
}, N = function(...r) {
	this.debug > 0 && console.log(...r);
}, $e = async function(r, _, n) {
	let a = p$2.toPostgresName(r), i = n ?? this;
	h$1(this, z).has(a) || h$1(this, z).set(a, /* @__PURE__ */ new Set()), h$1(this, z).get(a).add(_);
	try {
		await i.exec(`LISTEN ${r}`);
	} catch (l) {
		throw h$1(this, z).get(a).delete(_), h$1(this, z).get(a)?.size === 0 && h$1(this, z).delete(a), l;
	}
	return async (l) => {
		await this.unlisten(a, _, l);
	};
}, Qe = async function(r, _, n) {
	let a = p$2.toPostgresName(r), i = n ?? this, l = async () => {
		await i.exec(`UNLISTEN ${r}`), h$1(this, z).get(a)?.size === 0 && h$1(this, z).delete(a);
	};
	_ ? (h$1(this, z).get(a)?.delete(_), h$1(this, z).get(a)?.size === 0 && await l()) : await l();
}, Je = function() {
	if (h$1(this, oe)) throw new Error("PGlite single mode already running");
	this.mod._pgl_startPGlite(), x$6(this, oe, !0);
}, Ze = function(r) {
	let _ = [
		...r.startParams,
		"-D",
		r.pgDataFolder,
		this.mod.ENV.PGDATABASE
	], n = -1;
	if (n = this.mod.callMain(_), n !== this.PGLITE_EXIT_ALIVE) throw new Error("PGlite failed to initialize properly");
}, xe = function(r) {
	x$6(this, U, 0), x$6(this, O, 0), x$6(this, j, r);
	let _ = this.mod._pgl_getMyProcPort();
	if (this.mod._ProcessStartupPacket(_, !0, !0) !== 0) throw new Error(`Cannot process startup packet + ${r.toString()}`);
	return this.mod._pgl_sendConnData(), this.mod._pgl_pq_flush(), x$6(this, j, []), h$1(this, O) ? h$1(this, D).subarray(0, h$1(this, O)) : /* @__PURE__ */ new Uint8Array(0);
}, q.paths = {
	PG_ROOT: U$4,
	PGDATA: I$2,
	ICU_DATA_PATH: Hr,
	INITDB_EXE_PATH: Lr,
	POSTGRES_EXE_PATH: pt$1
}, q.DEFAULT_RECV_BUF_SIZE = 1048576, q.MAX_BUFFER_SIZE = Math.pow(2, 30), q.defaultStartParams = [
	"--single",
	"-F",
	"-O",
	"-j",
	"-c",
	"search_path=public",
	"-c",
	"exit_on_error=false",
	"-c",
	"log_checkpoints=false",
	"-c",
	"max_worker_processes=0",
	"-c",
	"max_parallel_workers=0",
	"-c",
	"max_parallel_workers_per_gather=0",
	"-c",
	"io_method=sync",
	"-c",
	"max_parallel_maintenance_workers=0"
];
var je = q;
// node_modules/@electric-sql/pglite/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({ PGlite: () => je });
u$1();
u$1();
export { dist_exports as t };
