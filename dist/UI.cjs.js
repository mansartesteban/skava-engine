"use strict";
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _uiComponents;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const UIAnimation = require("./UIAnimation-B8xma3ES.js");
const UIStyleHandler = require("./UIStyleHandler-fO7Zx0Oy.js");
require("./Time-BnYKtbMg.js");
require("uuid");
const Controls = require("./Controls-c5IWmUD1.js");
const Vector2 = require("./Vector2-BBtao3PE.js");
const UI_Events = require("./UI/Events.cjs.js");
class UIManager {
  constructor(scene) {
    __privateAdd(this, _uiComponents, []);
    __publicField(this, "controls");
    __publicField(this, "scene");
    __publicField(this, "mainLayout");
    this.controls = new Controls.Controls();
    this.controls.registerCommand(new UI_Events.OnClick(__privateGet(this, _uiComponents)));
    this.scene = scene;
    this.mainLayout = new UIStyleHandler.MainLayout(
      new UIStyleHandler.UIStyle(
        {
          borderRadius: 0,
          margin: 0,
          padding: 0,
          fontSize: 24,
          width: "100%",
          height: "auto",
          align: "left",
          layout: "relative",
          color: Vector2.RGB.White,
          textColor: Vector2.RGB.Black,
          // font,
          fontWeight: 500,
          borderWidth: 1,
          borderColor: Vector2.RGB.Black,
          shadowColor: null,
          shadowBlur: null,
          shadowPosition: null,
          shadowSize: null,
          direction: "vertical"
        },
        true
      )
    );
    this.mainLayout.uiManager = this;
    this.mainLayout.scene = this.scene;
    this.scene.add(this.mainLayout);
  }
  get uiComponents() {
    return __privateGet(this, _uiComponents);
  }
  clean() {
    this.uiComponents.forEach((child) => {
      console.log("clean", this.scene);
      this.scene.remove(child);
    });
  }
  add(uiComponent) {
    if (uiComponent instanceof UIStyleHandler.UIComponent) {
      uiComponent.uiManager = this;
      __privateGet(this, _uiComponents).unshift(uiComponent);
    }
  }
}
_uiComponents = new WeakMap();
exports.UIAnimation = UIAnimation.UIAnimation;
exports.UIComponent = UIStyleHandler.UIComponent;
exports.UIRenderer = UIStyleHandler.UIRenderer;
exports.UIStyle = UIStyleHandler.UIStyle;
exports.UIStyleHandler = UIStyleHandler.UIStyleHandler;
exports.UIManager = UIManager;
//# sourceMappingURL=UI.cjs.js.map
