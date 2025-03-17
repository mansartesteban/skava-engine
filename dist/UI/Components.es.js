var l = Object.defineProperty;
var m = (t, e, s) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var o = (t, e, s) => m(t, typeof e != "symbol" ? e + "" : e, s);
import "../Time-DerQyAzN.mjs";
import "uuid";
import { R as p } from "../Vector2-DsmbReYL.mjs";
import { a as n, U as i, b as r } from "../UIStyleHandler-jb-sOgJG.mjs";
import { M as F } from "../UIStyleHandler-jb-sOgJG.mjs";
import { R as a, I as C, T as w } from "../Text-CBZArl-s.mjs";
class S extends n {
  setup() {
    super.setup(), this.addRenderer(new f());
  }
}
class D extends n {
  setup() {
    super.setup();
    let e = this.getComponent(i);
    e || (e = new i(), this.addComponent(e)), e.setStyle(
      {
        color: new p(255, 255, 255, 1),
        borderRadius: 32
      },
      !0
    );
    let s = new d(
      new i({
        height: 64,
        borderRadius: [32, 32, 0, 0],
        color: new p(220, 220, 220)
      })
    ), h = new d(
      new i({
        borderRadius: [8],
        margin: [32],
        color: new p(255, 255, 255, 1),
        align: "center"
      })
    );
    this.addChild(s), this.addChild(h), this.setDefaultSlot(h), this.setSlot("header", s), this.addRenderer(new u());
  }
}
class I extends n {
  setup() {
    super.setup(), this.addRenderer(new y());
  }
}
class d extends n {
  setup() {
    super.setup(), this.addRenderer(new u());
  }
}
class v extends n {
  constructor() {
    super(...arguments);
    o(this, "text");
  }
  setup() {
    super.setup(), this.reactToEvents = !1;
    let s = this.getComponent(i);
    s || (s = new i(), this.addComponent(s)), s.setStyle(
      {
        height: "100%"
      },
      !0
    ), this.addRenderer(new c());
  }
  setText(s) {
    this.text = s;
  }
}
class f extends r {
  constructor() {
    super(...arguments);
    o(this, "shape");
    o(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(i), this.shape = new a(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    ), this.shape = new C("/button.png");
  }
  render(s) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.color = this.style.color, this.shape.draw(s, this.uiComponent.transform);
  }
}
class T extends r {
  constructor() {
    super(...arguments);
    o(this, "shape", new a());
  }
  render(s) {
    this.shape.position.sub(s.origin), this.shape.draw(s);
  }
}
class y extends r {
  constructor() {
    super(...arguments);
    o(this, "shape");
    o(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(i), this.shape = new a(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }
  render(s) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.rotation = this.uiComponent.transform.rotation, this.shape.shadowBlur = this.style.shadowBlur, this.shape.shadowColor = this.style.shadowColor, console.log("render", this.style), this.shape.draw(s);
  }
}
class u extends r {
  constructor() {
    super(...arguments);
    o(this, "shape");
    o(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(i), this.shape = new a(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }
  render(s) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.rotation = this.uiComponent.transform.rotation, this.shape.shadowBlur = this.style.shadowBlur, this.shape.shadowColor = this.style.shadowColor, this.shape.draw(s);
  }
}
class c extends r {
  constructor() {
    super(...arguments);
    o(this, "shape");
    o(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(i), this.shape = new w(
      this.uiComponent.text,
      this.uiComponent.transform.position,
      this.style.color,
      this.style.fontSize
    ), new FontFace("BraahOne", "url(/BraahOne-Regular.ttf)").load().then((h) => {
      document.fonts.add(h);
    });
  }
  render(s) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.position.x += this.shape.size.x / 2, this.shape.position.y += this.shape.size.y / 2, this.shape.draw(s);
  }
}
export {
  S as Button,
  f as ButtonRenderer,
  D as Card,
  T as CardRenderer,
  I as DebugDiv,
  y as DebugDivRenderer,
  d as Div,
  u as DivRenderer,
  v as Label,
  c as LabelRenderer,
  F as MainLayout
};
