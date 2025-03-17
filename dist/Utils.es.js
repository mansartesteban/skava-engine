var f = Object.defineProperty;
var o = (a) => {
  throw TypeError(a);
};
var k = (a, e, t) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var n = (a, e, t) => k(a, typeof e != "symbol" ? e + "" : e, t), p = (a, e, t) => e.has(a) || o("Cannot " + t);
var l = (a, e, t) => (p(a, e, "read from private field"), t ? t.call(a) : e.get(a)), r = (a, e, t) => e.has(a) ? o("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), h = (a, e, t, i) => (p(a, e, "write to private field"), i ? i.call(a, t) : e.set(a, t), t);
import { T as u } from "./Time-DerQyAzN.mjs";
var c, s;
class w {
  constructor() {
    r(this, c);
    r(this, s);
    n(this, "executionStack", []);
    h(this, c, performance.now()), h(this, s, l(this, c));
  }
  get delta() {
    return u.delta(l(this, c), performance.now());
  }
  reset() {
    h(this, c, performance.now()), h(this, s, l(this, c));
  }
  executeAfter(e, t) {
    this.executionStack.push({
      delay: t,
      repeat: !1,
      callback: e,
      lastCall: l(this, s)
    });
  }
  executeEach(e, t) {
    this.executionStack.push({
      delay: e,
      repeat: !0,
      callback: t,
      lastCall: l(this, s)
    });
  }
  watchCallbacks() {
    let e = [];
    this.executionStack.forEach((t, i) => {
      t.repeat ? u.delta(l(this, s), t.lastCall) >= t.delay && (t.callback(), t.lastCall = l(this, s)) : (this.delta >= t.delay && t.callback(), e.push(i));
    }), e.forEach((t, i) => this.executionStack.splice(i, 1));
  }
  update() {
    h(this, s, performance.now()), this.watchCallbacks();
  }
}
c = new WeakMap(), s = new WeakMap();
export {
  u as Time,
  w as Timer
};
