var ot = Object.defineProperty;
var st = (n) => {
  throw TypeError(n);
};
var rt = (n, t, s) => t in n ? ot(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var U = (n, t, s) => rt(n, typeof t != "symbol" ? t + "" : t, s), it = (n, t, s) => t.has(n) || st("Cannot " + s);
var i = (n, t, s) => (it(n, t, "read from private field"), s ? s.call(n) : t.get(n)), h = (n, t, s) => t.has(n) ? st("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, s), e = (n, t, s, r) => (it(n, t, "write to private field"), r ? r.call(n, s) : t.set(n, s), s);
var et = (n, t, s, r) => ({
  set _(o) {
    e(n, t, o, s);
  },
  get _() {
    return i(n, t, r);
  }
});
import "../Time-DerQyAzN.mjs";
import "uuid";
import { V as a, R as Z, a as X } from "../Vector2-DsmbReYL.mjs";
import { D as N, I as ht } from "../Text-CBZArl-s.mjs";
import { R as zt, T as _t } from "../Text-CBZArl-s.mjs";
import { clamp as nt } from "../Utils/Numeric.es.js";
import { T as lt } from "../TransformComponent-CwHP_qGK.mjs";
var D, x, S, g, k, u;
class wt {
  constructor(t = new a(), s = 1, r = new Z(), o = null, l = null, p = {}) {
    h(this, D);
    h(this, x);
    h(this, S);
    h(this, g);
    h(this, k);
    h(this, u);
    e(this, D, t), e(this, x, s), e(this, S, r), this.angle = o, this.direction = l, e(this, u, p);
  }
  get position() {
    return i(this, D);
  }
  get radius() {
    return i(this, x);
  }
  get color() {
    return i(this, S);
  }
  get angle() {
    return i(this, g);
  }
  get direction() {
    return i(this, k);
  }
  get options() {
    return i(this, u);
  }
  set position(t) {
    e(this, D, t);
  }
  set radius(t) {
    e(this, x, t);
  }
  set color(t) {
    e(this, S, t);
  }
  set angle(t) {
    t || (t = new X(Math.PI * 2, !0)), e(this, g, t);
  }
  set direction(t) {
    t || (t = new a()), e(this, k, t);
  }
  set options(t) {
    e(this, u, t);
  }
  draw(t) {
    let s = t.ctx;
    N.draw(t, () => (s.fillStyle = i(this, S)._toString, i(this, u).shadowBlur && (s.shadowBlur = i(this, u).shadowBlur), i(this, u).shadowColor && (s.shadowColor = i(this, u).shadowColor._toString), s.arc(
      this.position.x,
      this.position.y,
      i(this, x),
      i(this, k).rotation.angle - i(this, g).angle / 2,
      i(this, k).rotation.angle + i(this, g).angle / 2
    ), i(this, g).angle % (2 * Math.PI) !== 0 && s.lineTo(this.position.x, this.position.y), s.fill(), i(this, u).shadowBlur && (s.shadowBlur = 0), i(this, u).shadowColor && (s.shadowColor = ""), ["fillStyle"]));
  }
}
D = new WeakMap(), x = new WeakMap(), S = new WeakMap(), g = new WeakMap(), k = new WeakMap(), u = new WeakMap();
var T, C, w, f, m;
class mt {
  constructor(t = new a(), s = 1, r = new (i(this, w))(), o = new X(Math.PI * 2, !0), l = new a()) {
    h(this, T);
    h(this, C);
    h(this, w);
    h(this, f);
    h(this, m);
    e(this, T, t), e(this, C, s), e(this, w, r), e(this, f, o), e(this, m, l);
  }
  get position() {
    return i(this, T);
  }
  get radius() {
    return i(this, C);
  }
  get color() {
    return i(this, w);
  }
  get angle() {
    return i(this, f);
  }
  get direction() {
    return i(this, m);
  }
  set position(t) {
    e(this, T, t);
  }
  set radius(t) {
    e(this, C, t);
  }
  set color(t) {
    e(this, w, t);
  }
  set angle(t) {
    e(this, f, t);
  }
  set direction(t) {
    e(this, m, t);
  }
  draw(t) {
    let s = t.ctx;
    N.draw(t, () => {
      s.fillStyle = i(this, w)._toString;
      let r = i(this, T);
      return s.arc(
        r.x,
        r.y,
        i(this, C),
        i(this, m).rotation.angle - i(this, f).angle / 2,
        i(this, m).rotation.angle + i(this, f).angle / 2
      ), i(this, f).angle % (2 * Math.PI) !== 0 && s.lineTo(r.x, r.y), s.fill(), ["fillStyle"];
    });
  }
}
T = new WeakMap(), C = new WeakMap(), w = new WeakMap(), f = new WeakMap(), m = new WeakMap();
var M, W, L, P, Y;
class yt {
  constructor(t = new a(), s = new a(), r = Z.Fuchsia, o = 5) {
    h(this, M);
    h(this, W);
    h(this, L);
    h(this, P);
    h(this, Y, 0);
    e(this, M, t), e(this, W, s), e(this, L, r), e(this, P, o);
  }
  get from() {
    return i(this, M);
  }
  get to() {
    return i(this, W);
  }
  set from(t) {
    e(this, M, t);
  }
  set to(t) {
    e(this, W, t);
  }
  draw(t) {
    let s = t.ctx;
    N.draw(t, () => {
      s.strokeStyle = i(this, L)._toString, s.lineWidth = i(this, P), s.fillStyle = i(this, L)._toString;
      let r = nt(i(this, P) * 3, 10, 1e3);
      if (a.from(this.from).to(this.to).length <= r) {
        let _ = i(this, Y) % 4 < 2 ? "#ff0000" : "#ffffff";
        s.strokeStyle = _, s.fillStyle = _;
      }
      this.to.add(
        a.from(this.from).to(this.to).normalized.multiply(-r)
      );
      let o = this.to.clone().add(
        a.from(this.from).to(this.to).normalized.multiply(r)
      ), l = a.from(this.to).to(this.from).normalize(), p = r * 2, Q = l.clone().rotate(new X(Math.PI * 2)).multiply(p).add(this.to), z = l.clone().rotate(new X(-Math.PI * 2)).multiply(p).add(this.to);
      return s.moveTo(this.from.x, this.from.y), s.lineTo(this.to.x, this.to.y), s.stroke(), s.moveTo(o.x, o.y), s.lineTo(Q.x, Q.y), s.lineTo(z.x, z.y), s.lineTo(o.x, o.y), s.fill(), ["strokeStyle", "lineWidth", "fillStyle"];
    }), et(this, Y)._++;
  }
}
M = new WeakMap(), W = new WeakMap(), L = new WeakMap(), P = new WeakMap(), Y = new WeakMap();
var b, q, v, B, V, d;
class xt {
  constructor(t = new a(), s = new a(), r = new Z(), o = 1, l = [], p = {}) {
    h(this, b);
    h(this, q);
    h(this, v);
    h(this, B);
    h(this, V);
    h(this, d);
    e(this, b, t), e(this, q, s), e(this, v, r), e(this, B, l), e(this, V, o), e(this, d, p);
  }
  get from() {
    return i(this, b);
  }
  get to() {
    return i(this, q);
  }
  get color() {
    return i(this, v);
  }
  get dashes() {
    return i(this, B);
  }
  get thickness() {
    return i(this, V);
  }
  get options() {
    return i(this, d);
  }
  set from(t) {
    e(this, b, t);
  }
  set to(t) {
    e(this, q, t);
  }
  set color(t) {
    e(this, v, t);
  }
  set dashes(t) {
    e(this, B, t);
  }
  set thickness(t) {
    e(this, V, t);
  }
  set options(t) {
    e(this, d, t);
  }
  draw(t) {
    let s = t.ctx;
    N.draw(t, () => {
      const r = i(this, B).map(
        (o) => typeof o == "string" ? parseInt(o) : o
      );
      return i(this, d).shadowBlur && (s.shadowBlur = i(this, d).shadowBlur), i(this, d).shadowColor && (s.shadowColor = i(this, d).shadowColor._toString), s.lineCap = "round", s.setLineDash(r), s.strokeStyle = this.color._toString, s.lineWidth = this.thickness, s.moveTo(this.from.x, this.from.y), s.lineTo(this.to.x, this.to.y), s.stroke(), i(this, d).shadowBlur && (s.shadowBlur = 0), i(this, d).shadowColor && (s.shadowColor = ""), ["strokeStyle", "setLineDash", "lineWidth"];
    });
  }
}
b = new WeakMap(), q = new WeakMap(), v = new WeakMap(), B = new WeakMap(), V = new WeakMap(), d = new WeakMap();
var H, E, I, F;
class St {
  constructor(t = [], s = new Z(), r = 1, o = []) {
    h(this, H);
    h(this, E);
    h(this, I);
    h(this, F);
    e(this, H, t), e(this, E, s), e(this, I, o), e(this, F, r);
  }
  get points() {
    return i(this, H);
  }
  get color() {
    return i(this, E);
  }
  get dashes() {
    return i(this, I);
  }
  get thickness() {
    return i(this, F);
  }
  set points(t) {
    e(this, H, t);
  }
  set color(t) {
    e(this, E, t);
  }
  set dashes(t) {
    e(this, I, t);
  }
  set thickness(t) {
    e(this, F, t);
  }
  draw(t) {
    let s = t.ctx;
    N.draw(t, () => {
      const r = i(this, I).map(
        (o) => typeof o == "string" ? parseInt(o) : o
      );
      s.lineCap = "round", s.setLineDash(r), s.strokeStyle = this.color._toString, s.lineWidth = this.thickness;
      for (let o = 0; o < this.points.length - 1; o++)
        s.moveTo(this.points[o].x, this.points[o].y), s.lineTo(this.points[o + 1].x, this.points[o + 1].y);
      return s.moveTo(
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      ), s.stroke(), ["strokeStyle", "setLineDash", "lineWidth"];
    });
  }
}
H = new WeakMap(), E = new WeakMap(), I = new WeakMap(), F = new WeakMap();
class kt {
  constructor() {
    U(this, "checkpoints", []);
  }
  save() {
  }
  back(t) {
  }
  draw(t) {
    t.ctx;
  }
}
var y, G, O, j, c;
class Tt extends ht {
  constructor(s, r = {}) {
    super(s);
    h(this, y);
    h(this, G);
    h(this, O);
    h(this, j);
    U(this, "offsetRotation");
    h(this, c);
    e(this, y, r.columns || 1), e(this, G, r.rows || 1), e(this, O, i(this, G) * i(this, y) || 1), e(this, j, r.scale || 1), this.offsetRotation = r.offsetRotation || new X(), e(this, c, 0);
  }
  get current() {
    return i(this, c);
  }
  set current(s) {
    e(this, c, s);
  }
  next(s = 1) {
    e(this, c, i(this, c) + s), i(this, c) > i(this, O) - 1 && e(this, c, 0);
  }
  prev(s = 1) {
    e(this, c, i(this, c) - s), i(this, c) < 0 && e(this, c, i(this, O) - 1);
  }
  draw(s, r = new lt()) {
    let o = s.ctx, l = r.position, p = r.rotation;
    if (this.imgLoaded) {
      let Q = new a(
        i(this, c) % i(this, y),
        Math.floor(i(this, c) / i(this, y))
      ), z = this.img.width / i(this, y), _ = this.img.height / i(this, G), $ = z * i(this, j), tt = _ * i(this, j);
      o.save(), o.translate(l.x, l.y), o.rotate(-p.sub(this.offsetRotation).angle), o.translate(-l.x, -l.y), o.imageSmoothingEnabled = !1, o.drawImage(
        this.img,
        Q.x * z,
        Q.y * _,
        z,
        _,
        l.x - $ / 2,
        l.y - tt / 2,
        $,
        tt
      ), o.restore();
    }
  }
}
y = new WeakMap(), G = new WeakMap(), O = new WeakMap(), j = new WeakMap(), c = new WeakMap();
var A;
class Ct {
  constructor(t, s) {
    U(this, "sprite");
    U(this, "positions");
    h(this, A);
    this.sprite = t, this.positions = s, e(this, A, 0), this.sprite.current = this.positions[this.current];
  }
  get current() {
    return i(this, A);
  }
  set current(t) {
    e(this, A, t), this.sprite.current = this.positions[this.current];
  }
  next() {
    this.current++, this.current >= this.positions.length && (this.current = 0);
  }
  prev() {
    this.current--, this.current < 0 && (this.current = this.positions.length - 1);
  }
  draw(t, s) {
    this.sprite.draw(t, s);
  }
}
A = new WeakMap();
var J, K, R;
class Bt {
  constructor(t = new a(), s = new a(), r = new Z()) {
    h(this, J);
    h(this, K);
    h(this, R);
    e(this, J, t), e(this, K, s), e(this, R, r);
  }
  get position() {
    return i(this, J);
  }
  get size() {
    return i(this, K);
  }
  get color() {
    return i(this, R);
  }
  set position(t) {
    e(this, J, t);
  }
  set size(t) {
    e(this, K, t);
  }
  set color(t) {
    e(this, R, t);
  }
  draw(t) {
    let s = t.ctx;
    N.draw(t, () => (s.fillStyle = i(this, R)._toString, s.fillRect(this.position.x, this.position.y, this.size.x, this.size.y), s.fill(), ["fillStyle"]));
  }
}
J = new WeakMap(), K = new WeakMap(), R = new WeakMap();
export {
  wt as Circle,
  mt as CircleScreen,
  yt as DebugVector,
  N as Draw,
  ht as Img,
  xt as Line,
  St as MultiLine,
  kt as Path,
  zt as RoundSquare,
  Tt as Sprite,
  Ct as SpriteSequence,
  Bt as Square,
  _t as Text
};
