var E = Object.defineProperty;
var j = (e) => {
  throw TypeError(e);
};
var G = (e, t, s) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var P = (e, t, s) => G(e, typeof t != "symbol" ? t + "" : t, s), T = (e, t, s) => t.has(e) || j("Cannot " + s);
var a = (e, t, s) => (T(e, t, "read from private field"), s ? s.call(e) : t.get(e)), r = (e, t, s) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), o = (e, t, s, i) => (T(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s), _ = (e, t, s) => (T(e, t, "access private method"), s);
import "./Time-DerQyAzN.mjs";
import "uuid";
import { T as V } from "./TransformComponent-CwHP_qGK.mjs";
import { R as L, V as R, a as q } from "./Vector2-DsmbReYL.mjs";
const x = {
  strokeStyle: "#000",
  lineWidth: "1",
  fillStyle: "#000"
}, W = {
  setLineDash: []
};
class D {
  static draw(t, s) {
    let i = t.ctx;
    i.beginPath();
    let h = s();
    i.closePath(), h && D.reset(i, h);
  }
  static strokeRect(t, s, i, h, l, I = L.Green) {
    let b = new R(s, i), C = 1;
    t.fillStyle = I._toString || "#ff0000", t.fillRect(b.x, b.y, h, l), t.fillStyle = "#000000", t.fillRect(
      b.x + C,
      b.y + C,
      h - C * 2,
      l - C * 2
    );
  }
  static reset(t, s = []) {
    s.length === 0 && (s = Object.keys(x).concat(
      Object.keys(W)
    )), s.forEach((i) => {
      if (Object.keys(x).indexOf(i) !== -1)
        switch (i) {
          case "fillStyle":
            t.fillStyle = x.fillStyle;
            break;
          case "lineWidth":
            t.lineWidth = x.lineWidth;
            break;
          case "strokeStyle":
            t.strokeStyle = x.strokeStyle;
            break;
        }
      else if (Object.keys(W).indexOf(i) !== -1)
        switch (i) {
          case "setLineDash":
            t.setLineDash(W.setLineDash);
            break;
        }
    });
  }
}
var m, O, A;
class F {
  constructor(t) {
    r(this, O);
    r(this, m);
    P(this, "img");
    P(this, "imgLoaded");
    o(this, m, t), this.img = new Image(), this.imgLoaded = !1, _(this, O, A).call(this);
  }
  draw(t, s = new V()) {
    let i = t.ctx, h = s.position;
    s.scale;
    let l = s.size, I = s.rotation;
    this.imgLoaded && (i.save(), i.translate(h.x, h.y), i.rotate(-I.angle), i.translate(-h.x, -h.y), i.shadowOffsetX = 3, i.shadowOffsetY = 2, i.shadowColor = new L(0, 0, 0, 0.25)._toString, i.shadowBlur = 4, i.drawImage(this.img, h.x, h.y, l.x, l.y), i.restore());
  }
}
m = new WeakMap(), O = new WeakSet(), A = function() {
  this.img.onload = () => {
    this.imgLoaded = !0;
  }, this.img.src = a(this, m);
};
var d, c, f, w, n, z, p, k, B;
class H {
  constructor(t = new R(), s = new R(), i = [0], h = new L(), l = new q()) {
    r(this, d);
    r(this, c);
    r(this, f);
    r(this, w);
    r(this, n);
    r(this, z);
    r(this, p);
    r(this, k);
    r(this, B);
    o(this, d, t), o(this, c, s), o(this, f, i), o(this, w, l), o(this, n, h);
  }
  get position() {
    return a(this, d);
  }
  get size() {
    return a(this, c);
  }
  get radius() {
    return a(this, f);
  }
  get color() {
    return a(this, n);
  }
  get rotation() {
    return a(this, w);
  }
  get shadowBlur() {
    return a(this, z);
  }
  get shadowColor() {
    return a(this, p);
  }
  get shadowSize() {
    return a(this, k);
  }
  get shadowPosition() {
    return a(this, B);
  }
  set position(t) {
    o(this, d, t);
  }
  set size(t) {
    o(this, c, t);
  }
  set radius(t) {
    o(this, f, t);
  }
  set color(t) {
    o(this, n, t);
  }
  set rotation(t) {
    o(this, w, t);
  }
  set shadowBlur(t) {
    o(this, z, t);
  }
  set shadowColor(t) {
    o(this, p, t);
  }
  set shadowSize(t) {
    o(this, k, t);
  }
  set shadowPosition(t) {
    o(this, B, t);
  }
  draw(t) {
    let s = t.ctx;
    D.draw(t, () => (s.fillStyle = a(this, n)._toString, s.save(), s.translate(
      this.position.x + this.size.x / 2,
      this.position.y + this.size.y / 2
    ), s.rotate(-this.rotation.angle), s.translate(
      -this.position.x - this.size.x / 2,
      -this.position.y - this.size.y / 2
    ), s.imageSmoothingEnabled = !1, this.shadowBlur && (s.shadowBlur = this.shadowBlur), this.shadowColor && (s.shadowColor = this.shadowColor._toString), s.roundRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y,
      this.radius
    ), s.fill(), s.restore(), this.shadowBlur && (s.shadowBlur = 0), this.shadowColor && (s.shadowColor = ""), ["fillStyle"]));
  }
}
d = new WeakMap(), c = new WeakMap(), f = new WeakMap(), w = new WeakMap(), n = new WeakMap(), z = new WeakMap(), p = new WeakMap(), k = new WeakMap(), B = new WeakMap();
var g, u, S, y;
class J {
  constructor(t = "", s = new R(), i = L.White, h = 10) {
    r(this, g);
    r(this, u);
    r(this, S);
    r(this, y);
    o(this, g, t), o(this, u, s), o(this, S, i), o(this, y, h);
  }
  get text() {
    return a(this, g);
  }
  get position() {
    return a(this, u);
  }
  get color() {
    return a(this, S);
  }
  get fontSize() {
    return a(this, y);
  }
  set text(t) {
    o(this, g, t);
  }
  set position(t) {
    o(this, u, t);
  }
  set color(t) {
    o(this, S, t);
  }
  set fontSize(t) {
    o(this, y, t);
  }
  draw(t) {
    let s = t.ctx;
    D.draw(t, () => (s.font = `${this.fontSize}pt BraahOne`, s.textAlign = "center", s.textBaseline = "center", s.fillStyle = this.color._toString, s.fillText(
      this.text.toString(),
      this.position.x,
      this.position.y + this.fontSize / 3
    ), ["fillStyle"]));
  }
}
g = new WeakMap(), u = new WeakMap(), S = new WeakMap(), y = new WeakMap();
export {
  D,
  F as I,
  H as R,
  J as T
};
