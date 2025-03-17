var v = Object.defineProperty;
var m = (i) => {
  throw TypeError(i);
};
var M = (i, e, t) => e in i ? v(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var a = (i, e, t) => M(i, typeof e != "symbol" ? e + "" : e, t), L = (i, e, t) => e.has(i) || m("Cannot " + t);
var u = (i, e, t) => e.has(i) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t);
var c = (i, e, t) => (L(i, e, "access private method"), t);
import { C as S } from "./CommandClick-uXVskFqn.mjs";
import { CommandMouseMove as T, CommandTouchMaintain as d, CommandToggle as r, CommandOnce as l, CommandSwipe as b, CommandHold as I } from "./Core/Commands.es.js";
import "./Time-DerQyAzN.mjs";
import "uuid";
import { V as h } from "./Vector2-DsmbReYL.mjs";
var s, f, C, k, w, p, x, E, g;
class j {
  constructor(e = !1) {
    u(this, s);
    a(this, "stack", []);
    a(this, "commands", []);
    a(this, "onceCommandsExecuted", []);
    a(this, "pointerLock", null);
    a(this, "mouse", new h());
    a(this, "touchStart", new h());
    a(this, "touch", new h());
    window.addEventListener("keyup", c(this, s, w).bind(this)), window.addEventListener("keydown", c(this, s, p).bind(this)), window.addEventListener("mousemove", c(this, s, C).bind(this)), window.addEventListener("click", c(this, s, f).bind(this)), window.addEventListener("touchstart", c(this, s, x).bind(this)), window.addEventListener("touchmove", c(this, s, k).bind(this)), window.addEventListener("touchend", c(this, s, E).bind(this)), e && (document.onpointerlockchange = () => {
      this.pointerLock = document.pointerLockElement;
    }, document.body.addEventListener("click", async (t) => {
      t.stopPropagation(), t.which !== 3 && await document.body.requestPointerLock({
        unadjustedMovement: !0
      });
    }));
  }
  registerCommand(e) {
    return this.commands.some(
      (t) => t.key === e.key
    ) && console.warn(`Command conflict detected on key : ${e.key}`), this.commands.push(e), e;
  }
  unregisterCommand(e) {
    let t = this.commands.findIndex((o) => o === e);
    t > -1 && this.commands.splice(t, 1);
  }
  update(e) {
    this.commands.filter(
      (o) => o instanceof I && this.stack.includes(o.key)
    ).forEach((o) => {
      o.execute(e);
    });
  }
}
s = new WeakSet(), f = function(e) {
  e.preventDefault(), this.commands.filter(
    (o) => o instanceof S
  ).forEach((o) => {
    o.execute({ mouse: this.mouse });
  });
}, C = function(e) {
  this.mouse.x = e.clientX, this.mouse.y = e.clientY, this.pointerLock && this.commands.filter(
    (o) => o instanceof T
  ).forEach((o) => {
    o.execute(e);
  });
}, k = function(e) {
  this.touch.x = e.changedTouches[0].screenX, this.touch.y = e.changedTouches[0].screenY, this.commands.filter(
    (o) => o instanceof d
  ).forEach(
    (o) => o.execute({ touchStart: this.touchStart, touch: this.touch })
  );
}, w = function(e) {
  if (this.stack.includes(e.code)) {
    let n = this.stack.findIndex((y) => y === e.code);
    n > -1 && this.stack.splice(n, 1);
  }
  this.commands.filter(
    (n) => n instanceof r && e.code === n.key && n.executed
  ).forEach((n) => {
    n.executed = !1, n.release();
  }), this.commands.filter(
    (n) => n instanceof l && e.code === n.key && n.executed
  ).forEach((n) => {
    n.executed = !1;
  });
}, p = function(e) {
  this.stack.includes(e.code) || this.stack.push(e.code), this.commands.filter(
    (n) => n instanceof r && e.code === n.key && !n.executed
  ).forEach((n) => {
    n.executed = !0, n.execute();
  }), this.commands.filter(
    (n) => n instanceof l && e.code === n.key && !n.executed
  ).forEach((n) => {
    n.executed = !0, n.execute();
  });
}, x = function(e) {
  this.touchStart.x = e.changedTouches[0].screenX, this.touchStart.y = e.changedTouches[0].screenY, this.commands.filter(
    (o) => o instanceof d
  ).forEach((o) => o.started = !0);
}, E = function(e) {
  this.commands.filter(
    (o) => o instanceof d
  ).forEach((o) => {
    o.release(), o.started = !1;
  }), this.touchStart.x !== e.changedTouches[0].screenX && this.touchStart.y !== e.changedTouches[0].screenY && c(this, s, g).call(this);
}, g = function() {
  this.commands.filter(
    (t) => t instanceof b
  ).forEach((t) => {
    t.execute({ touch: this.touch, touchStart: this.touchStart });
  });
};
export {
  j as C
};
