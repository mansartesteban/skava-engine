var s = Object.defineProperty;
var r = (t, o, n) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var e = (t, o, n) => r(t, typeof o != "symbol" ? o + "" : o, n);
import { C as i, V as a, a as p } from "./Vector2-DsmbReYL.mjs";
import "./Time-DerQyAzN.mjs";
import "uuid";
class d extends i {
  constructor() {
    super(...arguments);
    e(this, "position", new a(0, 0));
    e(this, "rotation", new p());
    e(this, "scale", new a(1, 1));
    e(this, "size", new a(0, 0));
  }
  update() {
  }
}
export {
  d as T
};
