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
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _path, _Img_instances, loadImage_fn, _position, _size, _radius, _rotation, _color, _shadowBlur, _shadowColor, _shadowSize, _shadowPosition, _text, _position2, _color2, _fontSize;
require("./Time-BnYKtbMg.js");
const TransformComponent = require("./TransformComponent-BRl5nHr1.js");
const Vector2 = require("./Vector2-CYfU2A-a.js");
const defaultsAttributes = {
  strokeStyle: "#000",
  lineWidth: "1",
  fillStyle: "#000"
};
const defaultsMethods = {
  setLineDash: []
};
class Draw {
  static draw(viewer, callback) {
    let ctx = viewer.ctx;
    ctx.beginPath();
    let toReset = callback();
    ctx.closePath();
    if (toReset) {
      Draw.reset(ctx, toReset);
    }
  }
  static strokeRect(ctx, x, y, w, h, c = Vector2.RGB.Green) {
    let p = new Vector2.Vector2(x, y);
    let thickness = 1;
    ctx.fillStyle = c._toString || "#ff0000";
    ctx.fillRect(p.x, p.y, w, h);
    ctx.fillStyle = "#000000";
    ctx.fillRect(
      p.x + thickness,
      p.y + thickness,
      w - thickness * 2,
      h - thickness * 2
    );
  }
  static reset(ctx, properties = []) {
    if (properties.length === 0) {
      properties = Object.keys(defaultsAttributes).concat(
        Object.keys(defaultsMethods)
      );
    }
    properties.forEach((property) => {
      if (Object.keys(defaultsAttributes).indexOf(property) !== -1) {
        switch (property) {
          case "fillStyle":
            ctx.fillStyle = defaultsAttributes.fillStyle;
            break;
          case "lineWidth":
            ctx.lineWidth = defaultsAttributes.lineWidth;
            break;
          case "strokeStyle":
            ctx.strokeStyle = defaultsAttributes.strokeStyle;
            break;
        }
      } else if (Object.keys(defaultsMethods).indexOf(property) !== -1) {
        switch (property) {
          case "setLineDash":
            ctx.setLineDash(defaultsMethods.setLineDash);
            break;
        }
      }
    });
  }
}
class Img {
  constructor(path) {
    __privateAdd(this, _Img_instances);
    __privateAdd(this, _path);
    __publicField(this, "img");
    __publicField(this, "imgLoaded");
    __privateSet(this, _path, path);
    this.img = new Image();
    this.imgLoaded = false;
    __privateMethod(this, _Img_instances, loadImage_fn).call(this);
  }
  draw(viewer, transform = new TransformComponent.TransformComponent()) {
    let ctx = viewer.ctx;
    let position = transform.position;
    transform.scale;
    let size = transform.size;
    let rotation = transform.rotation;
    if (this.imgLoaded) {
      ctx.save();
      ctx.translate(position.x, position.y);
      ctx.rotate(-rotation.angle);
      ctx.translate(-position.x, -position.y);
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 2;
      ctx.shadowColor = new Vector2.RGB(0, 0, 0, 0.25)._toString;
      ctx.shadowBlur = 4;
      ctx.drawImage(this.img, position.x, position.y, size.x, size.y);
      ctx.restore();
    }
  }
}
_path = new WeakMap();
_Img_instances = new WeakSet();
loadImage_fn = function() {
  this.img.onload = () => {
    this.imgLoaded = true;
  };
  this.img.src = __privateGet(this, _path);
};
class RoundSquare {
  constructor(position = new Vector2.Vector2(), size = new Vector2.Vector2(), radius = [0], color = new Vector2.RGB(), rotation = new Vector2.Rotation()) {
    __privateAdd(this, _position);
    __privateAdd(this, _size);
    __privateAdd(this, _radius);
    __privateAdd(this, _rotation);
    __privateAdd(this, _color);
    __privateAdd(this, _shadowBlur);
    __privateAdd(this, _shadowColor);
    __privateAdd(this, _shadowSize);
    __privateAdd(this, _shadowPosition);
    __privateSet(this, _position, position);
    __privateSet(this, _size, size);
    __privateSet(this, _radius, radius);
    __privateSet(this, _rotation, rotation);
    __privateSet(this, _color, color);
  }
  get position() {
    return __privateGet(this, _position);
  }
  get size() {
    return __privateGet(this, _size);
  }
  get radius() {
    return __privateGet(this, _radius);
  }
  get color() {
    return __privateGet(this, _color);
  }
  get rotation() {
    return __privateGet(this, _rotation);
  }
  get shadowBlur() {
    return __privateGet(this, _shadowBlur);
  }
  get shadowColor() {
    return __privateGet(this, _shadowColor);
  }
  get shadowSize() {
    return __privateGet(this, _shadowSize);
  }
  get shadowPosition() {
    return __privateGet(this, _shadowPosition);
  }
  set position(position) {
    __privateSet(this, _position, position);
  }
  set size(size) {
    __privateSet(this, _size, size);
  }
  set radius(radius) {
    __privateSet(this, _radius, radius);
  }
  set color(color) {
    __privateSet(this, _color, color);
  }
  set rotation(rotation) {
    __privateSet(this, _rotation, rotation);
  }
  set shadowBlur(shadowBlur) {
    __privateSet(this, _shadowBlur, shadowBlur);
  }
  set shadowColor(shadowColor) {
    __privateSet(this, _shadowColor, shadowColor);
  }
  set shadowSize(shadowSize) {
    __privateSet(this, _shadowSize, shadowSize);
  }
  set shadowPosition(shadowPosition) {
    __privateSet(this, _shadowPosition, shadowPosition);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Draw.draw(viewer, () => {
      ctx.fillStyle = __privateGet(this, _color)._toString;
      ctx.save();
      ctx.translate(
        this.position.x + this.size.x / 2,
        this.position.y + this.size.y / 2
      );
      ctx.rotate(-this.rotation.angle);
      ctx.translate(
        -this.position.x - this.size.x / 2,
        -this.position.y - this.size.y / 2
      );
      ctx.imageSmoothingEnabled = false;
      if (this.shadowBlur) {
        ctx.shadowBlur = this.shadowBlur;
      }
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor._toString;
      }
      ctx.roundRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y,
        this.radius
      );
      ctx.fill();
      ctx.restore();
      if (this.shadowBlur) {
        ctx.shadowBlur = 0;
      }
      if (this.shadowColor) {
        ctx.shadowColor = "";
      }
      return ["fillStyle"];
    });
  }
}
_position = new WeakMap();
_size = new WeakMap();
_radius = new WeakMap();
_rotation = new WeakMap();
_color = new WeakMap();
_shadowBlur = new WeakMap();
_shadowColor = new WeakMap();
_shadowSize = new WeakMap();
_shadowPosition = new WeakMap();
class Text {
  constructor(text = "", position = new Vector2.Vector2(), color = Vector2.RGB.White, fontSize = 10) {
    __privateAdd(this, _text);
    __privateAdd(this, _position2);
    __privateAdd(this, _color2);
    __privateAdd(this, _fontSize);
    __privateSet(this, _text, text);
    __privateSet(this, _position2, position);
    __privateSet(this, _color2, color);
    __privateSet(this, _fontSize, fontSize);
  }
  get text() {
    return __privateGet(this, _text);
  }
  get position() {
    return __privateGet(this, _position2);
  }
  get color() {
    return __privateGet(this, _color2);
  }
  get fontSize() {
    return __privateGet(this, _fontSize);
  }
  set text(text) {
    __privateSet(this, _text, text);
  }
  set position(position) {
    __privateSet(this, _position2, position);
  }
  set color(color) {
    __privateSet(this, _color2, color);
  }
  set fontSize(fontSize) {
    __privateSet(this, _fontSize, fontSize);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Draw.draw(viewer, () => {
      ctx.font = `${this.fontSize}pt BraahOne`;
      ctx.textAlign = "center";
      ctx.textBaseline = "center";
      ctx.fillStyle = this.color._toString;
      ctx.fillText(
        this.text.toString(),
        this.position.x,
        this.position.y + this.fontSize / 3
      );
      return ["fillStyle"];
    });
  }
}
_text = new WeakMap();
_position2 = new WeakMap();
_color2 = new WeakMap();
_fontSize = new WeakMap();
exports.Draw = Draw;
exports.Img = Img;
exports.RoundSquare = RoundSquare;
exports.Text = Text;
//# sourceMappingURL=Text-DxuZZ4pu.js.map
