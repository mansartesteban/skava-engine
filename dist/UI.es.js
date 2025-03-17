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
import { U } from "./UIAnimation-BRhJ4eRf.mjs";
import { M as MainLayout, U as UIStyle, a as UIComponent } from "./UIStyleHandler-Dopq5YvR.mjs";
import { b, c } from "./UIStyleHandler-Dopq5YvR.mjs";
import "./Time-D6jb6SoV.mjs";
import { C as Controls } from "./Controls-DExq5fSR.mjs";
import { R as RGB } from "./Vector2-BXEmxqj7.mjs";
import { OnClick } from "./UI/Events.es.js";
class UIManager {
  constructor(scene) {
    __privateAdd(this, _uiComponents, []);
    __publicField(this, "controls");
    __publicField(this, "scene");
    __publicField(this, "mainLayout");
    this.controls = new Controls();
    this.controls.registerCommand(new OnClick(__privateGet(this, _uiComponents)));
    this.scene = scene;
    this.mainLayout = new MainLayout(
      new UIStyle(
        {
          borderRadius: 0,
          margin: 0,
          padding: 0,
          fontSize: 24,
          width: "100%",
          height: "auto",
          align: "left",
          layout: "relative",
          color: RGB.White,
          textColor: RGB.Black,
          // font,
          fontWeight: 500,
          borderWidth: 1,
          borderColor: RGB.Black,
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
      this.scene.remove(child);
    });
  }
  add(uiComponent) {
    if (uiComponent instanceof UIComponent) {
      uiComponent.uiManager = this;
      __privateGet(this, _uiComponents).unshift(uiComponent);
    }
  }
}
_uiComponents = new WeakMap();
export {
  U as UIAnimation,
  UIComponent,
  UIManager,
  b as UIRenderer,
  UIStyle,
  c as UIStyleHandler
};
//# sourceMappingURL=UI.es.js.map
