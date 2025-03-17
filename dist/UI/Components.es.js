var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import "../Time-D6jb6SoV.mjs";
import { R as RGB } from "../Vector2-BXEmxqj7.mjs";
import { a as UIComponent, U as UIStyle, b as UIRenderer } from "../UIStyleHandler-Dopq5YvR.mjs";
import { M } from "../UIStyleHandler-Dopq5YvR.mjs";
import { R as RoundSquare, I as Img, T as Text } from "../Text-D3wvtlzW.mjs";
class Button extends UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new ButtonRenderer());
  }
}
class Card extends UIComponent {
  setup() {
    super.setup();
    let uiStyle = this.getComponent(UIStyle);
    if (!uiStyle) {
      uiStyle = new UIStyle();
      this.addComponent(uiStyle);
    }
    uiStyle.setStyle(
      {
        color: new RGB(255, 255, 255, 1),
        borderRadius: 32
      },
      true
    );
    let cardHeader = new Div(
      new UIStyle({
        height: 64,
        borderRadius: [32, 32, 0, 0],
        color: new RGB(220, 220, 220)
      })
    );
    let cardBody = new Div(
      new UIStyle({
        borderRadius: [8],
        margin: [32],
        color: new RGB(255, 255, 255, 1),
        align: "center"
      })
    );
    this.addChild(cardHeader);
    this.addChild(cardBody);
    this.setDefaultSlot(cardBody);
    this.setSlot("header", cardHeader);
    this.addRenderer(new DivRenderer());
  }
}
class DebugDiv extends UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new DebugDivRenderer());
  }
}
class Div extends UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new DivRenderer());
  }
}
class Label extends UIComponent {
  constructor() {
    super(...arguments);
    __publicField(this, "text");
  }
  setup() {
    super.setup();
    this.reactToEvents = false;
    let uiStyle = this.getComponent(UIStyle);
    if (!uiStyle) {
      uiStyle = new UIStyle();
      this.addComponent(uiStyle);
    }
    uiStyle.setStyle(
      {
        height: "100%"
      },
      true
    );
    this.addRenderer(new LabelRenderer());
  }
  setText(text) {
    this.text = text;
  }
}
class ButtonRenderer extends UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyle);
    this.shape = new RoundSquare(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
    this.shape = new Img("/button.png");
  }
  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;
    this.shape.color = this.style.color;
    this.shape.draw(viewer, this.uiComponent.transform);
  }
}
class CardRenderer extends UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape", new RoundSquare());
  }
  render(viewer) {
    this.shape.position.sub(viewer.origin);
    this.shape.draw(viewer);
  }
}
class DebugDivRenderer extends UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyle);
    this.shape = new RoundSquare(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }
  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;
    this.shape.rotation = this.uiComponent.transform.rotation;
    this.shape.shadowBlur = this.style.shadowBlur;
    this.shape.shadowColor = this.style.shadowColor;
    this.shape.draw(viewer);
  }
}
class DivRenderer extends UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyle);
    this.shape = new RoundSquare(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }
  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;
    this.shape.rotation = this.uiComponent.transform.rotation;
    this.shape.shadowBlur = this.style.shadowBlur;
    this.shape.shadowColor = this.style.shadowColor;
    this.shape.draw(viewer);
  }
}
class LabelRenderer extends UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyle);
    this.shape = new Text(
      this.uiComponent.text,
      this.uiComponent.transform.position,
      this.style.color,
      this.style.fontSize
    );
    let f = new FontFace("BraahOne", "url(/BraahOne-Regular.ttf)");
    f.load().then((font) => {
      document.fonts.add(font);
    });
  }
  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;
    this.shape.position.x += this.shape.size.x / 2;
    this.shape.position.y += this.shape.size.y / 2;
    this.shape.draw(viewer);
  }
}
export {
  Button,
  ButtonRenderer,
  Card,
  CardRenderer,
  DebugDiv,
  DebugDivRenderer,
  Div,
  DivRenderer,
  Label,
  LabelRenderer,
  M as MainLayout
};
//# sourceMappingURL=Components.es.js.map
