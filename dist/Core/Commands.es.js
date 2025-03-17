var s = Object.defineProperty;
var r = (a, e, m) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m;
var n = (a, e, m) => r(a, typeof e != "symbol" ? e + "" : e, m);
import { a as t } from "../CommandClick-uXVskFqn.mjs";
import { C as f } from "../CommandClick-uXVskFqn.mjs";
import { I as o } from "../ImplementError-CTSVZ3oY.mjs";
class l extends t {
  execute() {
    throw new o("execute", "CommandHold");
  }
}
class u extends t {
  execute(...e) {
    throw new o("execute", "CommandMouseMove");
  }
}
class w extends t {
  constructor() {
    super(...arguments);
    n(this, "executed", !1);
  }
  execute() {
    throw new o("execute", "CommandOnce");
  }
}
class C extends t {
  execute(...e) {
    throw new o("execute", "CommandSwipe");
  }
}
class h extends t {
  constructor() {
    super(...arguments);
    n(this, "executed", !1);
  }
  execute() {
    throw new o("execute", "CommandToggle");
  }
  release() {
    throw new o("release", "CommandToggle");
  }
}
class i extends t {
  constructor() {
    super(...arguments);
    n(this, "started", !1);
  }
  release(...m) {
    throw new o("release", "CommandTouchMaintain");
  }
  execute(...m) {
    throw new o("execute", "CommandTouchMaintain");
  }
}
export {
  t as Command,
  f as CommandClick,
  l as CommandHold,
  u as CommandMouseMove,
  w as CommandOnce,
  C as CommandSwipe,
  h as CommandToggle,
  i as CommandTouchMaintain
};
