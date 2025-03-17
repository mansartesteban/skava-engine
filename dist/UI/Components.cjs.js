"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../Time-BnYKtbMg.js");
const Vector2 = require("../Vector2-CYfU2A-a.js");
const UIStyleHandler = require("../UIStyleHandler-mtkXgKbg.js");
const Text = require("../Text-DxuZZ4pu.js");
class Button extends UIStyleHandler.UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new ButtonRenderer());
  }
}
class Card extends UIStyleHandler.UIComponent {
  setup() {
    super.setup();
    let uiStyle = this.getComponent(UIStyleHandler.UIStyle);
    if (!uiStyle) {
      uiStyle = new UIStyleHandler.UIStyle();
      this.addComponent(uiStyle);
    }
    uiStyle.setStyle(
      {
        color: new Vector2.RGB(255, 255, 255, 1),
        borderRadius: 32
      },
      true
    );
    let cardHeader = new Div(
      new UIStyleHandler.UIStyle({
        height: 64,
        borderRadius: [32, 32, 0, 0],
        color: new Vector2.RGB(220, 220, 220)
      })
    );
    let cardBody = new Div(
      new UIStyleHandler.UIStyle({
        borderRadius: [8],
        margin: [32],
        color: new Vector2.RGB(255, 255, 255, 1),
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
class DebugDiv extends UIStyleHandler.UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new DebugDivRenderer());
  }
}
class Div extends UIStyleHandler.UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new DivRenderer());
  }
}
class Label extends UIStyleHandler.UIComponent {
  constructor() {
    super(...arguments);
    __publicField(this, "text");
  }
  setup() {
    super.setup();
    this.reactToEvents = false;
    let uiStyle = this.getComponent(UIStyleHandler.UIStyle);
    if (!uiStyle) {
      uiStyle = new UIStyleHandler.UIStyle();
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
class ButtonRenderer extends UIStyleHandler.UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyleHandler.UIStyle);
    this.shape = new Text.RoundSquare(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
    this.shape = new Text.Img("/button.png");
  }
  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;
    this.shape.color = this.style.color;
    this.shape.draw(viewer, this.uiComponent.transform);
  }
}
class CardRenderer extends UIStyleHandler.UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape", new Text.RoundSquare());
  }
  render(viewer) {
    this.shape.position.sub(viewer.origin);
    this.shape.draw(viewer);
  }
}
class DebugDivRenderer extends UIStyleHandler.UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyleHandler.UIStyle);
    this.shape = new Text.RoundSquare(
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
class DivRenderer extends UIStyleHandler.UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyleHandler.UIStyle);
    this.shape = new Text.RoundSquare(
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
class LabelRenderer extends UIStyleHandler.UIRenderer {
  constructor() {
    super(...arguments);
    __publicField(this, "shape");
    __publicField(this, "style");
  }
  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyleHandler.UIStyle);
    this.shape = new Text.Text(
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
exports.MainLayout = UIStyleHandler.MainLayout;
exports.Button = Button;
exports.ButtonRenderer = ButtonRenderer;
exports.Card = Card;
exports.CardRenderer = CardRenderer;
exports.DebugDiv = DebugDiv;
exports.DebugDivRenderer = DebugDivRenderer;
exports.Div = Div;
exports.DivRenderer = DivRenderer;
exports.Label = Label;
exports.LabelRenderer = LabelRenderer;
//# sourceMappingURL=Components.cjs.js.map
