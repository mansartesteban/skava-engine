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
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _position, _radius, _color, _angle, _direction, _options, _position2, _radius2, _color2, _angle2, _direction2, _from, _to, _color3, _thickness, _frame, _from2, _to2, _color4, _dashes, _thickness2, _options2, _points, _color5, _dashes2, _thickness3, _columns, _rows, _count, _scale, _current, _current2, _position3, _size, _color6;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../Time-BnYKtbMg.js");
const Vector2 = require("../Vector2-CYfU2A-a.js");
const Text = require("../Text-DxuZZ4pu.js");
const Utils_Numeric = require("../Utils/Numeric.cjs.js");
const TransformComponent = require("../TransformComponent-BRl5nHr1.js");
class Circle {
  constructor(position = new Vector2.Vector2(), radius = 1, color = new Vector2.RGB(), angle = null, direction = null, options = {}) {
    __privateAdd(this, _position);
    __privateAdd(this, _radius);
    __privateAdd(this, _color);
    __privateAdd(this, _angle);
    __privateAdd(this, _direction);
    __privateAdd(this, _options);
    __privateSet(this, _position, position);
    __privateSet(this, _radius, radius);
    __privateSet(this, _color, color);
    this.angle = angle;
    this.direction = direction;
    __privateSet(this, _options, options);
  }
  get position() {
    return __privateGet(this, _position);
  }
  get radius() {
    return __privateGet(this, _radius);
  }
  get color() {
    return __privateGet(this, _color);
  }
  get angle() {
    return __privateGet(this, _angle);
  }
  get direction() {
    return __privateGet(this, _direction);
  }
  get options() {
    return __privateGet(this, _options);
  }
  set position(position) {
    __privateSet(this, _position, position);
  }
  set radius(radius) {
    __privateSet(this, _radius, radius);
  }
  set color(color) {
    __privateSet(this, _color, color);
  }
  set angle(angle) {
    if (!angle) {
      angle = new Vector2.Rotation(Math.PI * 2, true);
    }
    __privateSet(this, _angle, angle);
  }
  set direction(direction) {
    if (!direction) {
      direction = new Vector2.Vector2();
    }
    __privateSet(this, _direction, direction);
  }
  set options(options) {
    __privateSet(this, _options, options);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Text.Draw.draw(viewer, () => {
      ctx.fillStyle = __privateGet(this, _color)._toString;
      if (__privateGet(this, _options).shadowBlur) {
        ctx.shadowBlur = __privateGet(this, _options).shadowBlur;
      }
      if (__privateGet(this, _options).shadowColor) {
        ctx.shadowColor = __privateGet(this, _options).shadowColor._toString;
      }
      ctx.arc(
        this.position.x,
        this.position.y,
        __privateGet(this, _radius),
        __privateGet(this, _direction).rotation.angle - __privateGet(this, _angle).angle / 2,
        __privateGet(this, _direction).rotation.angle + __privateGet(this, _angle).angle / 2
      );
      if (__privateGet(this, _angle).angle % (2 * Math.PI) !== 0) {
        ctx.lineTo(this.position.x, this.position.y);
      }
      ctx.fill();
      if (__privateGet(this, _options).shadowBlur) {
        ctx.shadowBlur = 0;
      }
      if (__privateGet(this, _options).shadowColor) {
        ctx.shadowColor = "";
      }
      return ["fillStyle"];
    });
  }
}
_position = new WeakMap();
_radius = new WeakMap();
_color = new WeakMap();
_angle = new WeakMap();
_direction = new WeakMap();
_options = new WeakMap();
class CircleScreen {
  constructor(position = new Vector2.Vector2(), radius = 1, color = new (__privateGet(this, _color2))(), angle = new Vector2.Rotation(Math.PI * 2, true), direction = new Vector2.Vector2()) {
    __privateAdd(this, _position2);
    __privateAdd(this, _radius2);
    __privateAdd(this, _color2);
    __privateAdd(this, _angle2);
    __privateAdd(this, _direction2);
    __privateSet(this, _position2, position);
    __privateSet(this, _radius2, radius);
    __privateSet(this, _color2, color);
    __privateSet(this, _angle2, angle);
    __privateSet(this, _direction2, direction);
  }
  get position() {
    return __privateGet(this, _position2);
  }
  get radius() {
    return __privateGet(this, _radius2);
  }
  get color() {
    return __privateGet(this, _color2);
  }
  get angle() {
    return __privateGet(this, _angle2);
  }
  get direction() {
    return __privateGet(this, _direction2);
  }
  set position(position) {
    __privateSet(this, _position2, position);
  }
  set radius(radius) {
    __privateSet(this, _radius2, radius);
  }
  set color(color) {
    __privateSet(this, _color2, color);
  }
  set angle(angle) {
    __privateSet(this, _angle2, angle);
  }
  set direction(direction) {
    __privateSet(this, _direction2, direction);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Text.Draw.draw(viewer, () => {
      ctx.fillStyle = __privateGet(this, _color2)._toString;
      let positionOnScreen = __privateGet(this, _position2);
      ctx.arc(
        positionOnScreen.x,
        positionOnScreen.y,
        __privateGet(this, _radius2),
        __privateGet(this, _direction2).rotation.angle - __privateGet(this, _angle2).angle / 2,
        __privateGet(this, _direction2).rotation.angle + __privateGet(this, _angle2).angle / 2
      );
      if (__privateGet(this, _angle2).angle % (2 * Math.PI) !== 0) {
        ctx.lineTo(positionOnScreen.x, positionOnScreen.y);
      }
      ctx.fill();
      return ["fillStyle"];
    });
  }
}
_position2 = new WeakMap();
_radius2 = new WeakMap();
_color2 = new WeakMap();
_angle2 = new WeakMap();
_direction2 = new WeakMap();
class DebugVector {
  constructor(from = new Vector2.Vector2(), to = new Vector2.Vector2(), color = Vector2.RGB.Fuchsia, thickness = 5) {
    __privateAdd(this, _from);
    __privateAdd(this, _to);
    __privateAdd(this, _color3);
    __privateAdd(this, _thickness);
    __privateAdd(this, _frame, 0);
    __privateSet(this, _from, from);
    __privateSet(this, _to, to);
    __privateSet(this, _color3, color);
    __privateSet(this, _thickness, thickness);
  }
  get from() {
    return __privateGet(this, _from);
  }
  get to() {
    return __privateGet(this, _to);
  }
  set from(from) {
    __privateSet(this, _from, from);
  }
  set to(to) {
    __privateSet(this, _to, to);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Text.Draw.draw(viewer, () => {
      ctx.strokeStyle = __privateGet(this, _color3)._toString;
      ctx.lineWidth = __privateGet(this, _thickness);
      ctx.fillStyle = __privateGet(this, _color3)._toString;
      let arrowSize = Utils_Numeric.clamp(__privateGet(this, _thickness) * 3, 10, 1e3);
      if (Vector2.Vector2.from(this.from).to(this.to).length <= arrowSize) {
        let color = __privateGet(this, _frame) % 4 < 2 ? "#ff0000" : "#ffffff";
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
      }
      this.to.add(
        Vector2.Vector2.from(this.from).to(this.to).normalized.multiply(-arrowSize)
      );
      let front = this.to.clone().add(
        Vector2.Vector2.from(this.from).to(this.to).normalized.multiply(arrowSize)
      );
      let frontDirection = Vector2.Vector2.from(this.to).to(this.from).normalize();
      let arrowSides = arrowSize * 2;
      let left = frontDirection.clone().rotate(new Vector2.Rotation(Math.PI * 2)).multiply(arrowSides).add(this.to);
      let right = frontDirection.clone().rotate(new Vector2.Rotation(-Math.PI * 2)).multiply(arrowSides).add(this.to);
      ctx.moveTo(this.from.x, this.from.y);
      ctx.lineTo(this.to.x, this.to.y);
      ctx.stroke();
      ctx.moveTo(front.x, front.y);
      ctx.lineTo(left.x, left.y);
      ctx.lineTo(right.x, right.y);
      ctx.lineTo(front.x, front.y);
      ctx.fill();
      return ["strokeStyle", "lineWidth", "fillStyle"];
    });
    __privateWrapper(this, _frame)._++;
  }
}
_from = new WeakMap();
_to = new WeakMap();
_color3 = new WeakMap();
_thickness = new WeakMap();
_frame = new WeakMap();
class Line {
  constructor(from = new Vector2.Vector2(), to = new Vector2.Vector2(), color = new Vector2.RGB(), thickness = 1, dashes = [], options = {}) {
    __privateAdd(this, _from2);
    __privateAdd(this, _to2);
    __privateAdd(this, _color4);
    __privateAdd(this, _dashes);
    __privateAdd(this, _thickness2);
    __privateAdd(this, _options2);
    __privateSet(this, _from2, from);
    __privateSet(this, _to2, to);
    __privateSet(this, _color4, color);
    __privateSet(this, _dashes, dashes);
    __privateSet(this, _thickness2, thickness);
    __privateSet(this, _options2, options);
  }
  get from() {
    return __privateGet(this, _from2);
  }
  get to() {
    return __privateGet(this, _to2);
  }
  get color() {
    return __privateGet(this, _color4);
  }
  get dashes() {
    return __privateGet(this, _dashes);
  }
  get thickness() {
    return __privateGet(this, _thickness2);
  }
  get options() {
    return __privateGet(this, _options2);
  }
  set from(from) {
    __privateSet(this, _from2, from);
  }
  set to(to) {
    __privateSet(this, _to2, to);
  }
  set color(color) {
    __privateSet(this, _color4, color);
  }
  set dashes(dashes) {
    __privateSet(this, _dashes, dashes);
  }
  set thickness(thickness) {
    __privateSet(this, _thickness2, thickness);
  }
  set options(options) {
    __privateSet(this, _options2, options);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Text.Draw.draw(viewer, () => {
      const dashes = __privateGet(this, _dashes).map(
        (dash) => typeof dash === "string" ? parseInt(dash) : dash
      );
      if (__privateGet(this, _options2).shadowBlur) {
        ctx.shadowBlur = __privateGet(this, _options2).shadowBlur;
      }
      if (__privateGet(this, _options2).shadowColor) {
        ctx.shadowColor = __privateGet(this, _options2).shadowColor._toString;
      }
      ctx.lineCap = "round";
      ctx.setLineDash(dashes);
      ctx.strokeStyle = this.color._toString;
      ctx.lineWidth = this.thickness;
      ctx.moveTo(this.from.x, this.from.y);
      ctx.lineTo(this.to.x, this.to.y);
      ctx.stroke();
      if (__privateGet(this, _options2).shadowBlur) {
        ctx.shadowBlur = 0;
      }
      if (__privateGet(this, _options2).shadowColor) {
        ctx.shadowColor = "";
      }
      return ["strokeStyle", "setLineDash", "lineWidth"];
    });
  }
}
_from2 = new WeakMap();
_to2 = new WeakMap();
_color4 = new WeakMap();
_dashes = new WeakMap();
_thickness2 = new WeakMap();
_options2 = new WeakMap();
class MultiLine {
  constructor(points = [], color = new Vector2.RGB(), thickness = 1, dashes = []) {
    __privateAdd(this, _points);
    __privateAdd(this, _color5);
    __privateAdd(this, _dashes2);
    __privateAdd(this, _thickness3);
    __privateSet(this, _points, points);
    __privateSet(this, _color5, color);
    __privateSet(this, _dashes2, dashes);
    __privateSet(this, _thickness3, thickness);
  }
  get points() {
    return __privateGet(this, _points);
  }
  get color() {
    return __privateGet(this, _color5);
  }
  get dashes() {
    return __privateGet(this, _dashes2);
  }
  get thickness() {
    return __privateGet(this, _thickness3);
  }
  set points(points) {
    __privateSet(this, _points, points);
  }
  set color(color) {
    __privateSet(this, _color5, color);
  }
  set dashes(dashes) {
    __privateSet(this, _dashes2, dashes);
  }
  set thickness(thickness) {
    __privateSet(this, _thickness3, thickness);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Text.Draw.draw(viewer, () => {
      const dashes = __privateGet(this, _dashes2).map(
        (dash) => typeof dash === "string" ? parseInt(dash) : dash
      );
      ctx.lineCap = "round";
      ctx.setLineDash(dashes);
      ctx.strokeStyle = this.color._toString;
      ctx.lineWidth = this.thickness;
      for (let i = 0; i < this.points.length - 1; i++) {
        ctx.moveTo(this.points[i].x, this.points[i].y);
        ctx.lineTo(this.points[i + 1].x, this.points[i + 1].y);
      }
      ctx.moveTo(
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      );
      ctx.stroke();
      return ["strokeStyle", "setLineDash", "lineWidth"];
    });
  }
}
_points = new WeakMap();
_color5 = new WeakMap();
_dashes2 = new WeakMap();
_thickness3 = new WeakMap();
class Path {
  constructor() {
    __publicField(this, "checkpoints", []);
  }
  save() {
  }
  back(count) {
  }
  draw(viewer) {
    viewer.ctx;
  }
}
class Sprite extends Text.Img {
  constructor(path, options = {}) {
    super(path);
    __privateAdd(this, _columns);
    __privateAdd(this, _rows);
    __privateAdd(this, _count);
    __privateAdd(this, _scale);
    __publicField(this, "offsetRotation");
    __privateAdd(this, _current);
    __privateSet(this, _columns, options.columns || 1);
    __privateSet(this, _rows, options.rows || 1);
    __privateSet(this, _count, __privateGet(this, _rows) * __privateGet(this, _columns) || 1);
    __privateSet(this, _scale, options.scale || 1);
    this.offsetRotation = options.offsetRotation || new Vector2.Rotation();
    __privateSet(this, _current, 0);
  }
  get current() {
    return __privateGet(this, _current);
  }
  set current(position) {
    __privateSet(this, _current, position);
  }
  next(steps = 1) {
    __privateSet(this, _current, __privateGet(this, _current) + steps);
    if (__privateGet(this, _current) > __privateGet(this, _count) - 1) {
      __privateSet(this, _current, 0);
    }
  }
  prev(steps = 1) {
    __privateSet(this, _current, __privateGet(this, _current) - steps);
    if (__privateGet(this, _current) < 0) {
      __privateSet(this, _current, __privateGet(this, _count) - 1);
    }
  }
  draw(viewer, transform = new TransformComponent.TransformComponent()) {
    let ctx = viewer.ctx;
    let position = transform.position;
    let rotation = transform.rotation;
    if (this.imgLoaded) {
      let current = new Vector2.Vector2(
        __privateGet(this, _current) % __privateGet(this, _columns),
        Math.floor(__privateGet(this, _current) / __privateGet(this, _columns))
      );
      let spriteWidth = this.img.width / __privateGet(this, _columns);
      let spriteHeight = this.img.height / __privateGet(this, _rows);
      let displayedWidth = spriteWidth * __privateGet(this, _scale);
      let displayedHeight = spriteHeight * __privateGet(this, _scale);
      ctx.save();
      ctx.translate(position.x, position.y);
      ctx.rotate(-rotation.sub(this.offsetRotation).angle);
      ctx.translate(-position.x, -position.y);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        this.img,
        current.x * spriteWidth,
        current.y * spriteHeight,
        spriteWidth,
        spriteHeight,
        position.x - displayedWidth / 2,
        position.y - displayedHeight / 2,
        displayedWidth,
        displayedHeight
      );
      ctx.restore();
    }
  }
}
_columns = new WeakMap();
_rows = new WeakMap();
_count = new WeakMap();
_scale = new WeakMap();
_current = new WeakMap();
class SpriteSequence {
  constructor(sprite, positions) {
    __publicField(this, "sprite");
    __publicField(this, "positions");
    __privateAdd(this, _current2);
    this.sprite = sprite;
    this.positions = positions;
    __privateSet(this, _current2, 0);
    this.sprite.current = this.positions[this.current];
  }
  get current() {
    return __privateGet(this, _current2);
  }
  set current(current) {
    __privateSet(this, _current2, current);
    this.sprite.current = this.positions[this.current];
  }
  next() {
    this.current++;
    if (this.current >= this.positions.length) {
      this.current = 0;
    }
  }
  prev() {
    this.current--;
    if (this.current < 0) {
      this.current = this.positions.length - 1;
    }
  }
  draw(viewer, transform) {
    this.sprite.draw(viewer, transform);
  }
}
_current2 = new WeakMap();
class Square {
  constructor(position = new Vector2.Vector2(), size = new Vector2.Vector2(), color = new Vector2.RGB()) {
    __privateAdd(this, _position3);
    __privateAdd(this, _size);
    __privateAdd(this, _color6);
    __privateSet(this, _position3, position);
    __privateSet(this, _size, size);
    __privateSet(this, _color6, color);
  }
  get position() {
    return __privateGet(this, _position3);
  }
  get size() {
    return __privateGet(this, _size);
  }
  get color() {
    return __privateGet(this, _color6);
  }
  set position(position) {
    __privateSet(this, _position3, position);
  }
  set size(size) {
    __privateSet(this, _size, size);
  }
  set color(color) {
    __privateSet(this, _color6, color);
  }
  draw(viewer) {
    let ctx = viewer.ctx;
    Text.Draw.draw(viewer, () => {
      ctx.fillStyle = __privateGet(this, _color6)._toString;
      ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
      ctx.fill();
      return ["fillStyle"];
    });
  }
}
_position3 = new WeakMap();
_size = new WeakMap();
_color6 = new WeakMap();
exports.Draw = Text.Draw;
exports.Img = Text.Img;
exports.RoundSquare = Text.RoundSquare;
exports.Text = Text.Text;
exports.Circle = Circle;
exports.CircleScreen = CircleScreen;
exports.DebugVector = DebugVector;
exports.Line = Line;
exports.MultiLine = MultiLine;
exports.Path = Path;
exports.Sprite = Sprite;
exports.SpriteSequence = SpriteSequence;
exports.Square = Square;
//# sourceMappingURL=Shapes.cjs.js.map
