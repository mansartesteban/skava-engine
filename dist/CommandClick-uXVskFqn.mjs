var r = Object.defineProperty;
var s = (m, e, a) => e in m ? r(m, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : m[e] = a;
var t = (m, e, a) => s(m, typeof e != "symbol" ? e + "" : e, a);
import { I as o } from "./ImplementError-CTSVZ3oY.mjs";
class c {
  constructor() {
    t(this, "key");
  }
  execute() {
    throw new o("execute", "Command");
  }
}
class x extends c {
  execute(...e) {
    throw new o("execute", "CommandClick");
  }
}
export {
  x as C,
  c as a
};
