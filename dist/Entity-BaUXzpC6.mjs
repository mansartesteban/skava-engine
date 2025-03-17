var i = Object.defineProperty;
var a = (r, t, s) => t in r ? i(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var e = (r, t, s) => a(r, typeof t != "symbol" ? t + "" : t, s);
import { C as h } from "./Vector2-DsmbReYL.mjs";
import "./Time-DerQyAzN.mjs";
import { v4 as c } from "uuid";
import { T as p } from "./TransformComponent-CwHP_qGK.mjs";
class m {
  constructor(t = {}) {
    e(this, "observers");
    e(this, "events", {});
    this.observers = [], this.events = t;
  }
  $on(t, s) {
    return typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.isValidEvent(o), this.observers.push({
        event: o,
        callback: s
      });
    }), this;
  }
  unset(t) {
    return this.observers = this.observers.filter(function(s) {
      if (s !== t)
        return s;
    }), this;
  }
  $emit(t, ...s) {
    let o = [];
    return this.observers.filter((n) => n.event === t).forEach((n) => {
      o.push(Promise.resolve(n.callback(...s)));
    }), Promise.all(o);
  }
  isValidEvent(t) {
    if (this.events && !Object.keys(this.events).includes(t))
      throw new Error(`Event '${t}' is not a valid event`);
  }
}
class d {
  constructor(...t) {
    e(this, "uuid", c());
    e(this, "components", /* @__PURE__ */ new Map());
    e(this, "transform", new p());
    e(this, "scene");
    e(this, "observer", new m({ SETUP_FINISHED: "SETUP_FINISHED" }));
    t.forEach((s) => this.addComponent(s));
  }
  addComponent(t) {
    t.entity = this, t.setup(), this.components.set(t.constructor, t);
  }
  removeComponent(t) {
    this.components.delete(t.constructor);
  }
  getComponent(t) {
    let s = t instanceof h ? t.constructor : t;
    return this.components.get(s);
  }
  update(t, s) {
    this.loop(t, s), this.components.forEach((o) => {
      o.updateComponent(t, s);
    });
  }
  loop(t, s) {
  }
}
export {
  d as E,
  m as O
};
