var X = Object.defineProperty;
var q = (a) => {
  throw TypeError(a);
};
var Y = (a, e, t) => e in a ? X(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var g = (a, e, t) => Y(a, typeof e != "symbol" ? e + "" : e, t), G = (a, e, t) => e.has(a) || q("Cannot " + t);
var s = (a, e, t) => (G(a, e, "read from private field"), t ? t.call(a) : e.get(a)), h = (a, e, t) => e.has(a) ? q("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), o = (a, e, t, r) => (G(a, e, "write to private field"), r ? r.call(a, t) : e.set(a, t), t);
import "./Time-DerQyAzN.mjs";
import "uuid";
import { V as D, C as Z } from "./Vector2-DsmbReYL.mjs";
import { W as Q } from "./WrongInstanceError-keUUfCMi.mjs";
import { E as _, O as tt } from "./Entity-BaUXzpC6.mjs";
import { T as et } from "./TransformComponent-CwHP_qGK.mjs";
import { I as it } from "./ImplementError-CTSVZ3oY.mjs";
import { getProperties as J } from "./Utils/Object.es.js";
var p, V, j, B, k, L;
class st extends _ {
  constructor(...t) {
    super(...t);
    h(this, p);
    h(this, V);
    h(this, j, []);
    h(this, B);
    h(this, k, []);
    h(this, L, []);
    g(this, "setupDone", !1);
    g(this, "reactToEvents", !0);
    g(this, "uiManager");
    g(this, "datas", {
      origin: new D(),
      defaultSlot: null
    });
    g(this, "slots", /* @__PURE__ */ new Map());
    g(this, "eventObserver", new tt({
      click: "click"
    }));
    g(this, "transform", new et());
    t.find((i) => i instanceof u) || this.addComponent(new u());
  }
  get parent() {
    return s(this, V);
  }
  get children() {
    return s(this, j);
  }
  get root() {
    return s(this, B);
  }
  get isRoot() {
    return this.root === this;
  }
  get tree() {
    return s(this, k);
  }
  get pendingTree() {
    return s(this, L);
  }
  set parent(t) {
    o(this, V, t);
  }
  set root(t) {
    o(this, B, t);
  }
  set tree(t) {
    this.tree = t;
  }
  setup() {
    this.setupDone = !0, this.setDefaultSlot(this);
  }
  addRenderer(t) {
    if (!(t instanceof K))
      throw new Q(t, K);
    return t.uiComponent = this, t.setup(), o(this, p, t), this;
  }
  setStyle(t) {
    this.getComponent(u).setStyle(t);
  }
  setSlot(t, r) {
    this.slots.set(t, r);
  }
  setDefaultSlot(t) {
    this.setSlot("default", t);
  }
  addChild(t, r = "default") {
    t.parent = this, t.uiManager = this.uiManager, t.getComponent(u).styleHandler.indexInParent = s(this, k).length;
    let i = this.slots.get(r) || this;
    return this.setupDone ? i.tree.push(t) : i.pendingTree.push({ slot: r, component: t }), this;
  }
  addEventListener(t, r) {
    this.eventObserver.$on(t, r);
  }
  trigger(t, ...r) {
    this.eventObserver.$emit(t, ...r);
  }
  loop(t, r) {
    var i, n;
    (i = s(this, p)) == null || i.loop(), (n = s(this, p)) == null || n.render(this.scene.viewer, t, r);
  }
}
p = new WeakMap(), V = new WeakMap(), j = new WeakMap(), B = new WeakMap(), k = new WeakMap(), L = new WeakMap();
class ct extends st {
  constructor() {
    super(...arguments);
    g(this, "toProcess", []);
  }
  setup() {
    this.root = this, super.setup(), this.copyViewerTransform();
  }
  addChild(t) {
    for (t.root = this.root, t.scene = this.scene, t.getComponent(u).setDefaultStyle(this.getComponent(u)), this.scene.add(t), this.uiManager.add(t); t.pendingTree.length > 0; ) {
      let r = t.pendingTree.shift(), i = t.slots.get(r.slot) || t;
      r.component.parent = i, r.component.getComponent(u).styleHandler.indexInParent = i.tree.length, i.tree.push(r.component);
    }
    return t.tree.forEach((r) => this.addChild(r)), this;
  }
  copyViewerTransform() {
    this.transform.position.x = -this.scene.viewer.origin.x, this.transform.position.y = -this.scene.viewer.origin.y, this.transform.size.x = this.scene.viewer.size.x, this.transform.size.y = this.scene.viewer.size.y;
  }
  loop() {
    this.copyViewerTransform(), super.loop();
  }
}
class K {
  constructor() {
    g(this, "uiComponent");
    g(this, "datas");
  }
  setup() {
  }
  loop() {
  }
  render() {
    throw new it("render", "UIRenderer");
  }
}
var A, N, c, y, m, w, x, C, z, S, b, U, P, W, v, F, H, I, E, R, M;
const O = class O extends Z {
  constructor(t, r = !1) {
    super();
    h(this, A, !1);
    h(this, N, !1);
    h(this, c);
    h(this, y);
    h(this, m);
    h(this, w);
    h(this, x);
    h(this, C);
    h(this, z);
    h(this, S);
    h(this, b);
    h(this, U);
    h(this, P);
    h(this, W);
    h(this, v);
    h(this, F);
    h(this, H);
    h(this, I);
    h(this, E);
    h(this, R);
    h(this, M);
    t && (this.color = t.color || s(this, c), this.textColor = t.textColor || s(this, y), this.font = t.font || s(this, m), this.fontWeight = t.fontWeight || s(this, w), this.fontSize = t.fontSize || s(this, x), this.borderRadius = t.borderRadius || s(this, C), this.borderWidth = t.borderWidth || s(this, z), this.borderColor = t.borderColor || s(this, S), this.shadowColor = t.shadowColor || s(this, b), this.shadowBlur = t.shadowBlur || s(this, U), this.shadowPosition = t.shadowPosition || s(this, P), this.shadowSize = t.shadowSize || s(this, W), this.layout = t.layout || s(this, v), this.margin = t.margin || s(this, F), this.padding = t.padding || s(this, H), this.width = t.width || s(this, I), this.height = t.height || s(this, E), this.direction = t.direction || s(this, R), this.align = t.align || s(this, M)), o(this, A, r);
  }
  get color() {
    return s(this, c);
  }
  get textColor() {
    return s(this, y);
  }
  get font() {
    return s(this, m);
  }
  get fontWeight() {
    return s(this, w);
  }
  get fontSize() {
    return s(this, x);
  }
  get borderRadius() {
    return s(this, C);
  }
  get borderWidth() {
    return s(this, z);
  }
  get borderColor() {
    return s(this, S);
  }
  get shadowColor() {
    return s(this, b);
  }
  get shadowBlur() {
    return s(this, U);
  }
  get shadowPosition() {
    return s(this, P);
  }
  get shadowSize() {
    return s(this, W);
  }
  get layout() {
    return s(this, v);
  }
  get margin() {
    return s(this, F);
  }
  get padding() {
    return s(this, H);
  }
  get width() {
    return s(this, I);
  }
  get height() {
    return s(this, E);
  }
  get direction() {
    return s(this, R);
  }
  get align() {
    return s(this, M);
  }
  get needsUpdate() {
    return s(this, N);
  }
  get inherit() {
    return s(this, A);
  }
  set color(t) {
    o(this, c, t), this.needsUpdate = !0;
  }
  set textColor(t) {
    o(this, y, t), this.needsUpdate = !0;
  }
  set font(t) {
    o(this, m, t), this.needsUpdate = !0;
  }
  set fontWeight(t) {
    o(this, w, t), this.needsUpdate = !0;
  }
  set fontSize(t) {
    o(this, x, t), this.needsUpdate = !0;
  }
  set borderRadius(t) {
    o(this, C, t), this.needsUpdate = !0;
  }
  set borderWidth(t) {
    o(this, z, t), this.needsUpdate = !0;
  }
  set borderColor(t) {
    o(this, S, t), this.needsUpdate = !0;
  }
  set shadowColor(t) {
    o(this, b, t), this.needsUpdate = !0;
  }
  set shadowBlur(t) {
    o(this, U, t), this.needsUpdate = !0;
  }
  set shadowPosition(t) {
    o(this, P, t), this.needsUpdate = !0;
  }
  set shadowSize(t) {
    o(this, W, t), this.needsUpdate = !0;
  }
  set layout(t) {
    o(this, v, t), this.needsUpdate = !0;
  }
  set margin(t) {
    o(this, F, t), this.needsUpdate = !0;
  }
  set padding(t) {
    o(this, H, t), this.needsUpdate = !0;
  }
  set width(t) {
    o(this, I, t), this.needsUpdate = !0;
  }
  set height(t) {
    o(this, E, t), this.needsUpdate = !0;
  }
  set direction(t) {
    o(this, R, t), this.needsUpdate = !0;
  }
  set needsUpdate(t) {
    o(this, N, t);
  }
  set align(t) {
    o(this, M, t);
  }
  setup() {
    this.styleHandler = new rt(this);
  }
  loop() {
    this.styleHandler.handleStyle();
  }
  setDefaultStyle(t) {
    let r = this.entity.getComponent(O);
    Object.keys(J(t)).forEach((i) => {
      i !== "inherit" && r[i] === void 0 && (r[i] = t[i]);
    });
  }
  setStyle(t, r = !0, i = !1) {
    let n = this.entity.getComponent(O), d = t;
    t instanceof O && (d = J(t)), Object.keys(d).forEach((l) => {
      l !== "inherit" && (r ? d[l] !== void 0 && (n[l] = d[l] || n[l]) : i ? n[l] === void 0 && (n[l] = d[l]) : n[l] = n[l] || d[l]);
    });
  }
};
A = new WeakMap(), N = new WeakMap(), c = new WeakMap(), y = new WeakMap(), m = new WeakMap(), w = new WeakMap(), x = new WeakMap(), C = new WeakMap(), z = new WeakMap(), S = new WeakMap(), b = new WeakMap(), U = new WeakMap(), P = new WeakMap(), W = new WeakMap(), v = new WeakMap(), F = new WeakMap(), H = new WeakMap(), I = new WeakMap(), E = new WeakMap(), R = new WeakMap(), M = new WeakMap();
let u = O;
var f, T;
class rt {
  constructor(e) {
    h(this, f);
    h(this, T);
    g(this, "indexInParent", 0);
    g(this, "datas", {
      size: new D(),
      margin: [0, 0, 0, 0]
    });
    if (!(e instanceof u))
      throw new Q(e, u);
    this.style = e, this.component = e.entity;
  }
  get component() {
    return s(this, f);
  }
  get style() {
    return s(this, T);
  }
  get parent() {
    return s(this, f).parent || s(this, f).root;
  }
  get lastSibling() {
    return this.parent.tree[this.indexInParent - 1];
  }
  get lastSiblingStyleHandler() {
    var e, t;
    return (t = (e = this.lastSibling) == null ? void 0 : e.getComponent(u)) == null ? void 0 : t.styleHandler;
  }
  set style(e) {
    o(this, T, e);
  }
  set component(e) {
    o(this, f, e);
  }
  autoHeightParent(e, t) {
    let r = e.getComponent(u), i = t.getComponent(u);
    r.height === "auto" && (r.styleHandler.datas.size.y = i.styleHandler.getNextFreePosition(e).y, e.transform.size.y = i.styleHandler.getNextFreePosition(e).y), t = e, e = e.parent, e && e !== s(this, f).root && r.height === "auto" && this.autoHeightParent(e, t);
  }
  calculateSize(e) {
    let t = 0, r = 0;
    if (this.style.width) {
      if (typeof this.style.width == "number")
        t = this.style.width;
      else if (typeof this.style.width == "string")
        if (this.style.width.endsWith("%")) {
          let i = parseFloat(this.style.width.replace("%", ""));
          t = e.size.x * (i / 100);
        } else this.style.width.endsWith("px") ? t = parseFloat(this.style.width.replace("px", "")) : t = this.style.width;
    }
    if (this.style.height) {
      if (typeof this.style.height == "number")
        r = this.style.height;
      else if (typeof this.style.height == "string")
        if (this.style.height.endsWith("%")) {
          let i = parseFloat(this.style.height.replace("%", ""));
          r = e.size.y * (i / 100);
        } else this.style.height.endsWith("px") ? r = parseFloat(this.style.height.replace("px", "")) : r = this.style.height;
    }
    if (this.datas.size.x = t, this.datas.size.y = r, this.style.margin) {
      let i = this.style.margin;
      Array.isArray(i) ? i.length === 1 ? i = [i[0], i[0], i[0], i[0]] : i.length === 2 ? i = [i[0], i[1], i[0], i[1]] : i.length === 3 && (i = [i[0], i[1], i[1], i[2]]) : i = [i, i, i, i], i = i.map((n, d) => {
        if (typeof n == "number")
          return n;
        if (n.endsWith("%")) {
          let l = parseFloat(n.replace("%", ""));
          return ([0, 2].includes(d) ? e.size.y : e.size.x) * (l / 100);
        } else return n.endsWith("px") ? parseFloat(n.replace("px", "")) : parseFloat(n);
      }), this.style.direction === "vertical" ? t -= i[1] + i[3] : this.style.direction === "horizontal" && (r -= i[0] + i[2]), this.datas.margin = i;
    }
    return new D(Math.max(0, t), Math.max(0, r));
  }
  getNextFreePosition(e, t) {
    let r = new D();
    if (e) {
      let i = e.getComponent(u), n = e.tree;
      t !== void 0 && (n = n.slice(0, t)), n.forEach((d) => {
        let l = d.getComponent(u).styleHandler.datas;
        i.direction === "vertical" ? (r.y += l.size.y, r.y += l.margin[0] + l.margin[2]) : (r.x += d.size.x, r.x += l.margin[1] + l.margin[3]);
      });
    }
    return r;
  }
  calculatePosition(e) {
    let t = e.position.x + (this.style.direction === "horizontal" && this.getNextFreePosition(s(this, f).parent, this.indexInParent).x || 0), r = e.position.y + (this.style.direction === "vertical" && this.getNextFreePosition(s(this, f).parent, this.indexInParent).y || 0);
    if (this.style.margin) {
      let n = this.style.margin;
      Array.isArray(n) ? n.length === 1 ? n = [n[0], n[0], n[0], n[0]] : n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 && (n = [n[0], n[1], n[1], n[2]]) : n = [n, n, n, n], n = n.map((d, l) => {
        if (typeof d == "number")
          return d;
        if (d.endsWith("%")) {
          let $ = parseFloat(d.replace("%", ""));
          return ([0, 2].includes(l) ? e.size.y : e.size.x) * ($ / 100);
        } else return d.endsWith("px") ? parseFloat(d.replace("px", "")) : parseFloat(d);
      }), t += n[3], r += n[0];
    }
    let i = this.parent.getComponent(u);
    return i.align && i.align === "center" && (i.direction === "horizontal" ? r += e.size.y / 2 - this.component.transform.size.y / 2 - this.datas.margin[0] / 2 - this.datas.margin[2] / 2 : t += e.size.x / 2 - this.component.transform.size.x / 2 - this.datas.margin[1] / 2 - this.datas.margin[3] / 2), new D(t, r);
  }
  handleStyle() {
    var t;
    let e = (t = this.component.parent) == null ? void 0 : t.transform;
    (!e || this.style.layout === "absolute") && (e = this.component.root.transform), this.component.isRoot || (this.component.transform.size = this.calculateSize(e), this.component.transform.position = this.calculatePosition(e)), this.component.parent && this.component.parent !== this.component.root && this.autoHeightParent(
      this.component.parent || this.component.root,
      this.component
    );
  }
}
f = new WeakMap(), T = new WeakMap();
export {
  ct as M,
  u as U,
  st as a,
  K as b,
  rt as c
};
