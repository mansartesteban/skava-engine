var h = Object.defineProperty;
var r = (t) => {
  throw TypeError(t);
};
var c = (t, o, e) => o in t ? h(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var n = (t, o, e) => c(t, typeof o != "symbol" ? o + "" : o, e), m = (t, o, e) => o.has(t) || r("Cannot " + e);
var s = (t, o, e) => (m(t, o, "read from private field"), e ? e.call(t) : o.get(t)), l = (t, o, e) => o.has(t) ? r("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(t) : o.set(t, e);
import { U as R } from "./UIAnimation-B_15Hu3W.mjs";
import { M as u, U as d, a as f } from "./UIStyleHandler-jb-sOgJG.mjs";
import { b as k, c as v } from "./UIStyleHandler-jb-sOgJG.mjs";
import "./Time-DerQyAzN.mjs";
import "uuid";
import { C as p } from "./Controls-C8IZ0c7f.mjs";
import { R as a } from "./Vector2-DsmbReYL.mjs";
import { OnClick as g } from "./UI/Events.es.js";
var i;
class b {
  constructor(o) {
    l(this, i, []);
    n(this, "controls");
    n(this, "scene");
    n(this, "mainLayout");
    this.controls = new p(), this.controls.registerCommand(new g(s(this, i))), this.scene = o, this.mainLayout = new u(
      new d(
        {
          borderRadius: 0,
          margin: 0,
          padding: 0,
          fontSize: 24,
          width: "100%",
          height: "auto",
          align: "left",
          layout: "relative",
          color: a.White,
          textColor: a.Black,
          // font,
          fontWeight: 500,
          borderWidth: 1,
          borderColor: a.Black,
          shadowColor: null,
          shadowBlur: null,
          shadowPosition: null,
          shadowSize: null,
          direction: "vertical"
        },
        !0
      )
    ), this.mainLayout.uiManager = this, this.mainLayout.scene = this.scene, this.scene.add(this.mainLayout);
  }
  get uiComponents() {
    return s(this, i);
  }
  clean() {
    this.uiComponents.forEach((o) => {
      console.log("clean", this.scene), this.scene.remove(o);
    });
  }
  add(o) {
    o instanceof f && (o.uiManager = this, s(this, i).unshift(o));
  }
}
i = new WeakMap();
export {
  R as UIAnimation,
  f as UIComponent,
  b as UIManager,
  k as UIRenderer,
  d as UIStyle,
  v as UIStyleHandler
};
