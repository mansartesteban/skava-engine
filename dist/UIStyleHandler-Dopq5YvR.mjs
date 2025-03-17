var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _renderer, _parent, _children, _root, _tree, _pendingTree, _inherit, _needsUpdate, _color, _textColor, _font, _fontWeight, _fontSize, _borderRadius, _borderWidth, _borderColor, _shadowColor, _shadowBlur, _shadowPosition, _shadowSize, _layout, _margin, _padding, _width, _height, _direction, _align, _component, _style;
import "./Time-D6jb6SoV.mjs";
import { V as Vector2, C as Component } from "./Vector2-BXEmxqj7.mjs";
import { W as WrongInstanceError } from "./WrongInstanceError-rN98kZ5v.mjs";
import { E as Entity, O as Observer } from "./Entity-7bmRFd6H.mjs";
import { T as TransformComponent } from "./TransformComponent-Wh2kRWxM.mjs";
import { I as ImplementError } from "./ImplementError-BSFja-GU.mjs";
import { getProperties } from "./Utils/Object.es.js";
class UIComponent extends Entity {
  constructor(...components) {
    super(...components);
    __privateAdd(this, _renderer);
    __privateAdd(this, _parent);
    __privateAdd(this, _children, []);
    __privateAdd(this, _root);
    __privateAdd(this, _tree, []);
    __privateAdd(this, _pendingTree, []);
    __publicField(this, "setupDone", false);
    __publicField(this, "reactToEvents", true);
    __publicField(this, "uiManager");
    __publicField(this, "datas", {
      origin: new Vector2(),
      defaultSlot: null
    });
    __publicField(this, "slots", /* @__PURE__ */ new Map());
    __publicField(this, "eventObserver", new Observer({
      click: "click"
    }));
    __publicField(this, "transform", new TransformComponent());
    let uiStyle = components.find((component) => component instanceof UIStyle);
    if (!uiStyle) {
      this.addComponent(new UIStyle());
    }
  }
  get parent() {
    return __privateGet(this, _parent);
  }
  get children() {
    return __privateGet(this, _children);
  }
  get root() {
    return __privateGet(this, _root);
  }
  get isRoot() {
    return this.root === this;
  }
  get tree() {
    return __privateGet(this, _tree);
  }
  get pendingTree() {
    return __privateGet(this, _pendingTree);
  }
  set parent(parent) {
    __privateSet(this, _parent, parent);
  }
  set root(root) {
    __privateSet(this, _root, root);
  }
  set tree(tree) {
    this.tree = tree;
  }
  setup() {
    this.setupDone = true;
    this.setDefaultSlot(this);
  }
  addRenderer(renderer) {
    if (!(renderer instanceof UIRenderer)) {
      throw new WrongInstanceError(renderer, UIRenderer);
    }
    renderer.uiComponent = this;
    renderer.setup();
    __privateSet(this, _renderer, renderer);
    return this;
  }
  setStyle(style) {
    this.getComponent(UIStyle).setStyle(style);
  }
  setSlot(name, component) {
    this.slots.set(name, component);
  }
  setDefaultSlot(child) {
    this.setSlot("default", child);
  }
  addChild(component, slotName = "default") {
    component.parent = this;
    component.uiManager = this.uiManager;
    component.getComponent(UIStyle).styleHandler.indexInParent = __privateGet(this, _tree).length;
    let slot = this.slots.get(slotName) || this;
    if (this.setupDone) {
      slot.tree.push(component);
    } else {
      slot.pendingTree.push({ slot: slotName, component });
    }
    return this;
  }
  addEventListener(type, callback) {
    this.eventObserver.$on(type, callback);
  }
  trigger(type, ...parameters) {
    this.eventObserver.$emit(type, ...parameters);
  }
  loop(deltaTime, currentTime) {
    var _a, _b;
    (_a = __privateGet(this, _renderer)) == null ? void 0 : _a.loop();
    (_b = __privateGet(this, _renderer)) == null ? void 0 : _b.render(this.scene.viewer, deltaTime, currentTime);
  }
}
_renderer = new WeakMap();
_parent = new WeakMap();
_children = new WeakMap();
_root = new WeakMap();
_tree = new WeakMap();
_pendingTree = new WeakMap();
class MainLayout extends UIComponent {
  constructor() {
    super(...arguments);
    __publicField(this, "toProcess", []);
  }
  setup() {
    this.root = this;
    super.setup();
    this.copyViewerTransform();
  }
  addChild(component) {
    component.root = this.root;
    component.scene = this.scene;
    component.getComponent(UIStyle).setDefaultStyle(this.getComponent(UIStyle));
    this.scene.add(component);
    this.uiManager.add(component);
    while (component.pendingTree.length > 0) {
      let toHandle = component.pendingTree.shift();
      let slot = component.slots.get(toHandle.slot) || component;
      toHandle.component.parent = slot;
      toHandle.component.getComponent(UIStyle).styleHandler.indexInParent = slot.tree.length;
      slot.tree.push(toHandle.component);
    }
    component.tree.forEach((ch) => this.addChild(ch));
    return this;
  }
  copyViewerTransform() {
    this.transform.position.x = -this.scene.viewer.origin.x;
    this.transform.position.y = -this.scene.viewer.origin.y;
    this.transform.size.x = this.scene.viewer.size.x;
    this.transform.size.y = this.scene.viewer.size.y;
  }
  loop() {
    this.copyViewerTransform();
    super.loop();
  }
}
class UIRenderer {
  constructor() {
    __publicField(this, "uiComponent");
    __publicField(this, "datas");
  }
  setup() {
  }
  loop() {
  }
  render() {
    throw new ImplementError("render", "UIRenderer");
  }
}
const _UIStyle = class _UIStyle extends Component {
  constructor(style, inherit = false) {
    super();
    __privateAdd(this, _inherit, false);
    __privateAdd(this, _needsUpdate, false);
    __privateAdd(this, _color);
    __privateAdd(this, _textColor);
    __privateAdd(this, _font);
    __privateAdd(this, _fontWeight);
    __privateAdd(this, _fontSize);
    __privateAdd(this, _borderRadius);
    __privateAdd(this, _borderWidth);
    __privateAdd(this, _borderColor);
    __privateAdd(this, _shadowColor);
    __privateAdd(this, _shadowBlur);
    __privateAdd(this, _shadowPosition);
    __privateAdd(this, _shadowSize);
    __privateAdd(this, _layout);
    __privateAdd(this, _margin);
    __privateAdd(this, _padding);
    __privateAdd(this, _width);
    __privateAdd(this, _height);
    __privateAdd(this, _direction);
    __privateAdd(this, _align);
    if (style) {
      this.color = style.color || __privateGet(this, _color);
      this.textColor = style.textColor || __privateGet(this, _textColor);
      this.font = style.font || __privateGet(this, _font);
      this.fontWeight = style.fontWeight || __privateGet(this, _fontWeight);
      this.fontSize = style.fontSize || __privateGet(this, _fontSize);
      this.borderRadius = style.borderRadius || __privateGet(this, _borderRadius);
      this.borderWidth = style.borderWidth || __privateGet(this, _borderWidth);
      this.borderColor = style.borderColor || __privateGet(this, _borderColor);
      this.shadowColor = style.shadowColor || __privateGet(this, _shadowColor);
      this.shadowBlur = style.shadowBlur || __privateGet(this, _shadowBlur);
      this.shadowPosition = style.shadowPosition || __privateGet(this, _shadowPosition);
      this.shadowSize = style.shadowSize || __privateGet(this, _shadowSize);
      this.layout = style.layout || __privateGet(this, _layout);
      this.margin = style.margin || __privateGet(this, _margin);
      this.padding = style.padding || __privateGet(this, _padding);
      this.width = style.width || __privateGet(this, _width);
      this.height = style.height || __privateGet(this, _height);
      this.direction = style.direction || __privateGet(this, _direction);
      this.align = style.align || __privateGet(this, _align);
    }
    __privateSet(this, _inherit, inherit);
  }
  get color() {
    return __privateGet(this, _color);
  }
  get textColor() {
    return __privateGet(this, _textColor);
  }
  get font() {
    return __privateGet(this, _font);
  }
  get fontWeight() {
    return __privateGet(this, _fontWeight);
  }
  get fontSize() {
    return __privateGet(this, _fontSize);
  }
  get borderRadius() {
    return __privateGet(this, _borderRadius);
  }
  get borderWidth() {
    return __privateGet(this, _borderWidth);
  }
  get borderColor() {
    return __privateGet(this, _borderColor);
  }
  get shadowColor() {
    return __privateGet(this, _shadowColor);
  }
  get shadowBlur() {
    return __privateGet(this, _shadowBlur);
  }
  get shadowPosition() {
    return __privateGet(this, _shadowPosition);
  }
  get shadowSize() {
    return __privateGet(this, _shadowSize);
  }
  get layout() {
    return __privateGet(this, _layout);
  }
  get margin() {
    return __privateGet(this, _margin);
  }
  get padding() {
    return __privateGet(this, _padding);
  }
  get width() {
    return __privateGet(this, _width);
  }
  get height() {
    return __privateGet(this, _height);
  }
  get direction() {
    return __privateGet(this, _direction);
  }
  get align() {
    return __privateGet(this, _align);
  }
  get needsUpdate() {
    return __privateGet(this, _needsUpdate);
  }
  get inherit() {
    return __privateGet(this, _inherit);
  }
  set color(color) {
    __privateSet(this, _color, color);
    this.needsUpdate = true;
  }
  set textColor(textColor) {
    __privateSet(this, _textColor, textColor);
    this.needsUpdate = true;
  }
  set font(font) {
    __privateSet(this, _font, font);
    this.needsUpdate = true;
  }
  set fontWeight(fontWeight) {
    __privateSet(this, _fontWeight, fontWeight);
    this.needsUpdate = true;
  }
  set fontSize(fontSize) {
    __privateSet(this, _fontSize, fontSize);
    this.needsUpdate = true;
  }
  set borderRadius(borderRadius) {
    __privateSet(this, _borderRadius, borderRadius);
    this.needsUpdate = true;
  }
  set borderWidth(borderWidth) {
    __privateSet(this, _borderWidth, borderWidth);
    this.needsUpdate = true;
  }
  set borderColor(borderColor) {
    __privateSet(this, _borderColor, borderColor);
    this.needsUpdate = true;
  }
  set shadowColor(shadowColor) {
    __privateSet(this, _shadowColor, shadowColor);
    this.needsUpdate = true;
  }
  set shadowBlur(shadowBlur) {
    __privateSet(this, _shadowBlur, shadowBlur);
    this.needsUpdate = true;
  }
  set shadowPosition(shadowPosition) {
    __privateSet(this, _shadowPosition, shadowPosition);
    this.needsUpdate = true;
  }
  set shadowSize(shadowSize) {
    __privateSet(this, _shadowSize, shadowSize);
    this.needsUpdate = true;
  }
  set layout(layout) {
    __privateSet(this, _layout, layout);
    this.needsUpdate = true;
  }
  set margin(margin) {
    __privateSet(this, _margin, margin);
    this.needsUpdate = true;
  }
  set padding(padding) {
    __privateSet(this, _padding, padding);
    this.needsUpdate = true;
  }
  set width(width) {
    __privateSet(this, _width, width);
    this.needsUpdate = true;
  }
  set height(height) {
    __privateSet(this, _height, height);
    this.needsUpdate = true;
  }
  set direction(direction) {
    __privateSet(this, _direction, direction);
    this.needsUpdate = true;
  }
  set needsUpdate(needsUpdate) {
    __privateSet(this, _needsUpdate, needsUpdate);
  }
  set align(align) {
    __privateSet(this, _align, align);
  }
  setup() {
    this.styleHandler = new UIStyleHandler(this);
  }
  loop() {
    this.styleHandler.handleStyle();
  }
  setDefaultStyle(style) {
    let thisStyle = this.entity.getComponent(_UIStyle);
    Object.keys(getProperties(style)).forEach((prop) => {
      if (prop !== "inherit") {
        if (thisStyle[prop] === void 0) {
          thisStyle[prop] = style[prop];
        }
      }
    });
  }
  setStyle(style, overwrite = true, isDefault = false) {
    let thisStyle = this.entity.getComponent(_UIStyle);
    let styleValues = style;
    if (style instanceof _UIStyle) {
      styleValues = getProperties(style);
    }
    Object.keys(styleValues).forEach((prop) => {
      if (prop !== "inherit") {
        if (overwrite) {
          if (styleValues[prop] !== void 0) {
            thisStyle[prop] = styleValues[prop] || thisStyle[prop];
          }
        } else {
          if (isDefault) {
            if (thisStyle[prop] === void 0) {
              thisStyle[prop] = styleValues[prop];
            }
          } else {
            thisStyle[prop] = thisStyle[prop] || styleValues[prop];
          }
        }
      }
    });
  }
};
_inherit = new WeakMap();
_needsUpdate = new WeakMap();
_color = new WeakMap();
_textColor = new WeakMap();
_font = new WeakMap();
_fontWeight = new WeakMap();
_fontSize = new WeakMap();
_borderRadius = new WeakMap();
_borderWidth = new WeakMap();
_borderColor = new WeakMap();
_shadowColor = new WeakMap();
_shadowBlur = new WeakMap();
_shadowPosition = new WeakMap();
_shadowSize = new WeakMap();
_layout = new WeakMap();
_margin = new WeakMap();
_padding = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_direction = new WeakMap();
_align = new WeakMap();
let UIStyle = _UIStyle;
class UIStyleHandler {
  constructor(uiStyle) {
    __privateAdd(this, _component);
    __privateAdd(this, _style);
    __publicField(this, "indexInParent", 0);
    __publicField(this, "datas", {
      size: new Vector2(),
      margin: [0, 0, 0, 0]
    });
    if (!(uiStyle instanceof UIStyle)) {
      throw new WrongInstanceError(uiStyle, UIStyle);
    }
    this.style = uiStyle;
    this.component = uiStyle.entity;
  }
  get component() {
    return __privateGet(this, _component);
  }
  get style() {
    return __privateGet(this, _style);
  }
  get parent() {
    return __privateGet(this, _component).parent || __privateGet(this, _component).root;
  }
  get lastSibling() {
    return this.parent.tree[this.indexInParent - 1];
  }
  get lastSiblingStyleHandler() {
    var _a, _b;
    return (_b = (_a = this.lastSibling) == null ? void 0 : _a.getComponent(UIStyle)) == null ? void 0 : _b.styleHandler;
  }
  set style(style) {
    __privateSet(this, _style, style);
  }
  set component(component) {
    __privateSet(this, _component, component);
  }
  autoHeightParent(parent, current) {
    let parentStyle = parent.getComponent(UIStyle);
    let currentStyle = current.getComponent(UIStyle);
    if (parentStyle.height === "auto") {
      parentStyle.styleHandler.datas.size.y = currentStyle.styleHandler.getNextFreePosition(parent).y;
      parent.transform.size.y = currentStyle.styleHandler.getNextFreePosition(parent).y;
    }
    current = parent;
    parent = parent.parent;
    if (parent && parent !== __privateGet(this, _component).root && parentStyle.height === "auto") {
      this.autoHeightParent(parent, current);
    }
  }
  calculateSize(parentTransform) {
    let x = 0;
    let y = 0;
    if (this.style.width) {
      if (typeof this.style.width === "number") {
        x = this.style.width;
      } else if (typeof this.style.width === "string") {
        if (this.style.width.endsWith("%")) {
          let value = parseFloat(this.style.width.replace("%", ""));
          x = parentTransform.size.x * (value / 100);
        } else if (this.style.width.endsWith("px")) {
          let value = parseFloat(this.style.width.replace("px", ""));
          x = value;
        } else {
          x = this.style.width;
        }
      }
    }
    if (this.style.height) {
      if (typeof this.style.height === "number") {
        y = this.style.height;
      } else if (typeof this.style.height === "string") {
        if (this.style.height.endsWith("%")) {
          let value = parseFloat(this.style.height.replace("%", ""));
          y = parentTransform.size.y * (value / 100);
        } else if (this.style.height.endsWith("px")) {
          let value = parseFloat(this.style.height.replace("px", ""));
          y = value;
        } else {
          y = this.style.height;
        }
      }
    }
    this.datas.size.x = x;
    this.datas.size.y = y;
    if (this.style.margin) {
      let value = this.style.margin;
      if (!Array.isArray(value)) {
        value = [value, value, value, value];
      } else if (value.length === 1) {
        value = [value[0], value[0], value[0], value[0]];
      } else if (value.length === 2) {
        value = [value[0], value[1], value[0], value[1]];
      } else if (value.length === 3) {
        value = [value[0], value[1], value[1], value[2]];
      }
      value = value.map((val, index) => {
        if (typeof val === "number") {
          return val;
        } else if (val.endsWith("%")) {
          let v = parseFloat(val.replace("%", ""));
          let axe = [0, 2].includes(index) ? parentTransform.size.y : parentTransform.size.x;
          return axe * (v / 100);
        } else if (val.endsWith("px")) {
          let v = parseFloat(val.replace("px", ""));
          return v;
        } else {
          return parseFloat(val);
        }
      });
      if (this.style.direction === "vertical") {
        x -= value[1] + value[3];
      } else if (this.style.direction === "horizontal") {
        y -= value[0] + value[2];
      }
      this.datas.margin = value;
    }
    return new Vector2(Math.max(0, x), Math.max(0, y));
  }
  getNextFreePosition(component, index) {
    let nextFreePosition = new Vector2();
    if (component) {
      let componentStyle = component.getComponent(UIStyle);
      let children = component.tree;
      if (index !== void 0) {
        children = children.slice(0, index);
      }
      children.forEach((child) => {
        let childDatas = child.getComponent(UIStyle).styleHandler.datas;
        if (componentStyle.direction === "vertical") {
          nextFreePosition.y += childDatas.size.y;
          nextFreePosition.y += childDatas.margin[0] + childDatas.margin[2];
        } else {
          nextFreePosition.x += child.size.x;
          nextFreePosition.x += childDatas.margin[1] + childDatas.margin[3];
        }
      });
    }
    return nextFreePosition;
  }
  calculatePosition(parentTransform) {
    let x = parentTransform.position.x + (this.style.direction === "horizontal" ? this.getNextFreePosition(__privateGet(this, _component).parent, this.indexInParent).x || 0 : 0);
    let y = parentTransform.position.y + (this.style.direction === "vertical" ? this.getNextFreePosition(__privateGet(this, _component).parent, this.indexInParent).y || 0 : 0);
    if (this.style.margin) {
      let value = this.style.margin;
      if (!Array.isArray(value)) {
        value = [value, value, value, value];
      } else if (value.length === 1) {
        value = [value[0], value[0], value[0], value[0]];
      } else if (value.length === 2) {
        value = [value[0], value[1], value[0], value[1]];
      } else if (value.length === 3) {
        value = [value[0], value[1], value[1], value[2]];
      }
      value = value.map((val, index) => {
        if (typeof val === "number") {
          return val;
        } else if (val.endsWith("%")) {
          let v = parseFloat(val.replace("%", ""));
          let axe = [0, 2].includes(index) ? parentTransform.size.y : parentTransform.size.x;
          return axe * (v / 100);
        } else if (val.endsWith("px")) {
          let v = parseFloat(val.replace("px", ""));
          return v;
        } else {
          return parseFloat(val);
        }
      });
      x += value[3];
      y += value[0];
    }
    let parentStyle = this.parent.getComponent(UIStyle);
    if (parentStyle.align && parentStyle.align === "center") {
      if (parentStyle.direction === "horizontal") {
        y += parentTransform.size.y / 2 - this.component.transform.size.y / 2 - this.datas.margin[0] / 2 - this.datas.margin[2] / 2;
      } else {
        x += parentTransform.size.x / 2 - this.component.transform.size.x / 2 - this.datas.margin[1] / 2 - this.datas.margin[3] / 2;
      }
    }
    return new Vector2(x, y);
  }
  handleStyle() {
    var _a;
    let parentTransform = (_a = this.component.parent) == null ? void 0 : _a.transform;
    if (!parentTransform || this.style.layout === "absolute") {
      parentTransform = this.component.root.transform;
    }
    if (!this.component.isRoot) {
      this.component.transform.size = this.calculateSize(parentTransform);
      this.component.transform.position = this.calculatePosition(parentTransform);
    }
    if (this.component.parent && this.component.parent !== this.component.root) {
      this.autoHeightParent(
        this.component.parent || this.component.root,
        this.component
      );
    }
  }
}
_component = new WeakMap();
_style = new WeakMap();
export {
  MainLayout as M,
  UIStyle as U,
  UIComponent as a,
  UIRenderer as b,
  UIStyleHandler as c
};
//# sourceMappingURL=UIStyleHandler-Dopq5YvR.mjs.map
