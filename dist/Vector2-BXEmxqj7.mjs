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
var _r, _g, _b, _opacity, _angle, _x, _y;
import { clamp, degreesToRadians, radiansToDegrees } from "./Utils/Numeric.es.js";
import "./Time-D6jb6SoV.mjs";
class Component {
  constructor(options) {
    __publicField(this, "options", {});
    __publicField(this, "active", true);
    __publicField(this, "entity", null);
    if (options) {
      this.options = { ...this.options, ...options };
    }
  }
  updateComponent(deltaTime, currentTime) {
    if (this.active) {
      this.loop(deltaTime, currentTime);
    }
  }
  loop(deltaTime, currentTime) {
  }
  refresh() {
  }
  setup() {
  }
}
const _RGB = class _RGB {
  /**
   * @param r The red value of this color from 0 to 255
   * @param g The green value of this color from 0 to 255
   * @param b The blue value of this color from 0 to 255
   * @param opacity The opacity value of this color from 0 to 1
   */
  constructor(r, g, b, opacity) {
    __privateAdd(this, _r, 0);
    __privateAdd(this, _g, 0);
    __privateAdd(this, _b, 0);
    __privateAdd(this, _opacity, 1);
    if (typeof r === "number" && g === void 0 && b === void 0) {
      let hex = r;
      __privateSet(this, _r, hex >> 16 & 255);
      __privateSet(this, _g, hex >> 8 & 255);
      __privateSet(this, _b, hex & 255);
      __privateSet(this, _opacity, 1);
    } else {
      __privateSet(this, _r, r ?? __privateGet(this, _r));
      __privateSet(this, _g, g ?? __privateGet(this, _g));
      __privateSet(this, _b, b ?? __privateGet(this, _b));
      __privateSet(this, _opacity, opacity ?? __privateGet(this, _opacity));
    }
  }
  /**
   * Returns the red channel from 0 to 255
   */
  get r() {
    return __privateGet(this, _r);
  }
  /**
   * Sets the red channel from 0 to 255
   */
  set r(r) {
    __privateSet(this, _r, clamp(r, 0, 255));
  }
  /**
   * Returns the green channel from 0 to 255
   */
  get g() {
    return __privateGet(this, _g);
  }
  /**
   * Sets the green channel from 0 to 255
   */
  set g(g) {
    __privateSet(this, _g, clamp(g, 0, 255));
  }
  /**
   * Returns the blue channel from 0 to 255
   */
  get b() {
    return __privateGet(this, _b);
  }
  /**
   * Sets the blue channel from 0 to 255
   */
  set b(b) {
    __privateSet(this, _b, clamp(b, 0, 255));
  }
  /**
   * Returns the opacity channel from 0 to 1
   */
  get opacity() {
    return __privateGet(this, _opacity);
  }
  /**
   * Sets the opacity channel from 0 to 1
   */
  set opacity(opacity) {
    __privateSet(this, _opacity, opacity);
  }
  /**
   * Returns an array with splitted rgba channels
   */
  get rgba() {
    return [this.r, this.g, this.b, this.opacity];
  }
  /**
   * Returns the hexadecimal representation of this color on 8 bits
   */
  get _toString() {
    return "#" + parseInt(this.r.toFixed(0)).toString(16).padStart(2, "0") + parseInt(this.g.toFixed(0)).toString(16).padStart(2, "0") + parseInt(this.b.toFixed(0)).toString(16).padStart(2, "0") + parseInt(Math.floor(this.opacity * 255).toFixed(0)).toString(16).padStart(2, "0");
  }
  /**
   * Returns a new Color which is the addition of this color with an other
   * @param color The color to add to this color
   * @returns Color
   */
  add(color) {
    if (color instanceof _RGB) {
      return new _RGB(
        this.r + color.r,
        this.g + color.g,
        this.b + color.b,
        this.opacity + color.opacity
      );
    } else if (typeof color === "number") {
      return new _RGB(
        this.r + color,
        this.g + color,
        this.b + color,
        this.opacity + color
      );
    } else {
      throw "Unable to compute a addition on the type '" + typeof color + "'. It should be a number or a Color";
    }
  }
  /**
   * Returns a new Color which is the multiplication of this color with an other
   * @param color The color to multiply by this color
   * @returns Color
   */
  multiply(color) {
    if (color instanceof _RGB) {
      return new _RGB(
        Math.floor(this.r * color.r / 255),
        Math.floor(this.g * color.g / 255),
        Math.floor(this.b * color.b / 255),
        Math.floor(this.opacity * color.opacity)
      );
    } else if (typeof color === "number") {
      return new _RGB(
        this.r * color,
        this.g * color,
        this.b * color
        // this.opacity * color
      );
    } else {
      throw "Unable to compute a multiplication on the type '" + typeof color + "'. It should be a number or a Color";
    }
  }
  /**
   * Interpolates (linearly) this color to an other color. Calculates a value between those two colors at weight position
   * @param color The other color to interpolate with
   * @param weight The weight of the second vector in the computation. For exemple :
   * 0 => returns the current color,
   * 1 => returns the target color,
   * 0.33 => returns the value of a new color at 33% between this color and the color parameter
   * @returns this Returns this for methods chaining
   */
  lerp(color, weight, withOpacity = true) {
    this.r = (1 - weight) * this.r + weight * color.r;
    this.g = (1 - weight) * this.g + weight * color.g;
    this.b = (1 - weight) * this.b + weight * color.b;
    if (withOpacity) {
      this.opacity = (1 - weight) * this.opacity + weight * color.opacity;
    }
    return this;
  }
  /**
   * Returns a clone of this vector
   * @returns RGB
   */
  clone() {
    return new _RGB(this.r, this.g, this.b, this.opacity);
  }
  /**
   * Copies the coordinates of a given vector to this vector
   * @param v The vector to be copied
   * @returns this Returns this for methods chaining
   */
  copy(v) {
    if (v) {
      this.r = v.r;
      this.g = v.g;
      this.b = v.b;
      this.opacity = v.opacity;
    }
    return this;
  }
};
_r = new WeakMap();
_g = new WeakMap();
_b = new WeakMap();
_opacity = new WeakMap();
__publicField(_RGB, "Black", new _RGB(0));
__publicField(_RGB, "White", new _RGB(16777215));
__publicField(_RGB, "Grey", new _RGB(8355711));
__publicField(_RGB, "LightGrey", new _RGB(12566463));
__publicField(_RGB, "DarkGrey", new _RGB(4144959));
__publicField(_RGB, "Red", new _RGB(16711680));
__publicField(_RGB, "Green", new _RGB(65280));
__publicField(_RGB, "Blue", new _RGB(255));
__publicField(_RGB, "Yellow", new _RGB(16776960));
__publicField(_RGB, "Cyan", new _RGB(65535));
__publicField(_RGB, "Fuchsia", new _RGB(16711935));
let RGB = _RGB;
const _Rotation = class _Rotation {
  /**
   * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
   * @param asRadian Indicates if the give 'angle' is in radians or in degrees
   */
  constructor(angle, asRadian) {
    __privateAdd(this, _angle);
    __privateSet(this, _angle, asRadian ? angle : degreesToRadians(angle));
  }
  /**
   * Returns the current angle in radians
   */
  get angle() {
    return __privateGet(this, _angle);
  }
  /**
   * Sets the current angle to 'angle' value, have to be in radians
   * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
   * @param asRadian Indicates if the give 'angle' is in radians or in degrees
   */
  setAngle(angle, asRadian) {
    __privateSet(this, _angle, asRadian ? angle : degreesToRadians(angle));
  }
  /**
   * Returns the current angle in radians
   */
  get toRadians() {
    return this.angle;
  }
  /**
   * Returns the current angle in degrees
   */
  get toDegrees() {
    return radiansToDegrees(this.angle);
  }
  /**
   * Adds a rotation to current angle
   * @param rotation The Rotation to add
   * @returns The addition of these two angles
   */
  add(rotation) {
    return new _Rotation(this.angle + rotation.angle, true);
  }
  /**
   * Substracts a rotation to current angle
   * @param rotation The Rotation to substract
   * @returns The substraction of these two angles
   */
  sub(rotation) {
    return new _Rotation(this.angle - rotation.angle, true);
  }
  /**
   * Inverts the angle (multiply by * -1)
   * @returns this Returns this for methods chaining
   */
  invert() {
    __privateSet(this, _angle, -this.angle);
    return this;
  }
};
_angle = new WeakMap();
__publicField(_Rotation, 30, new _Rotation(Math.PI / 6));
__publicField(_Rotation, 45, new _Rotation(Math.PI / 4));
__publicField(_Rotation, 90, new _Rotation(Math.PI / 2));
__publicField(_Rotation, 180, new _Rotation(Math.PI));
__publicField(_Rotation, 360, new _Rotation(Math.PI * 2));
let Rotation = _Rotation;
const _Vector2 = class _Vector2 {
  constructor(x = 0, y = 0) {
    __privateAdd(this, _x, 0);
    __privateAdd(this, _y, 0);
    __privateSet(this, _x, x);
    __privateSet(this, _y, y);
  }
  /* ========== Getters ========== */
  /**
   * Returns the x coordinate of this vector
   */
  get x() {
    return __privateGet(this, _x);
  }
  /**
   * Returns the y coordinate of this vector
   */
  get y() {
    return __privateGet(this, _y);
  }
  /**
   * Returns the length (or magnitude) of this vector
   */
  get length() {
    return Math.sqrt(this.squid);
  }
  /**
   * Returns the squared Euclidian distance of this vector
   */
  get squid() {
    return this.x ** 2 + this.y ** 2;
  }
  /**
   * Returns a normalized copy of this vector (a vector with the same direction with a magnitude/length of 1 unit)
   */
  get normalized() {
    if (this.length === 0) {
      return _Vector2.O;
    }
    return this.clone().divide(this.length);
  }
  /**
   * Returns the rotation of this vector (i.e. from origin to this vector, which value is the angle (in radian) between by X axis and this vector)
   * Refer to Rotation doc for more information
   */
  get rotation() {
    return new Rotation(Math.atan2(this.y, this.x), true);
  }
  /* ========== Setters ========== */
  /**
   * Defines the x coordinate of this vector
   */
  set x(x) {
    __privateSet(this, _x, x);
  }
  /**
   * Defines the y coordinate of this vector
   */
  set y(y) {
    __privateSet(this, _y, y);
  }
  /* ========== Modifiers ========== */
  /* ===== Basic operations ===== */
  /**
   * Computes an addition between coordinates of this vector and a number or another vector.
   * If value is a number, adds value to x and y coordinates
   * If value is a vector, adds value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  add(value) {
    if (value instanceof _Vector2) {
      this.x += value.x;
      this.y += value.y;
    } else if (typeof value === "number") {
      this.x += value;
      this.y += value;
    } else {
      throw "Unable to compute a addition on the type '" + typeof value + "'. It should be a number or a Vector2";
    }
    return this;
  }
  /**
   * Computes a substraction between coordinates of this vector and a number or another vector.
   * If value is a number, substracts value to x and y coordinates
   * If value is a vector, substracts value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  sub(value) {
    if (value instanceof _Vector2) {
      this.x -= value.x;
      this.y -= value.y;
    } else if (typeof value === "number") {
      this.x -= value;
      this.y -= value;
    } else {
      throw "Unable to compute a subsraction on the type '" + typeof value + "'. It should be a number or a Vector2";
    }
    return this;
  }
  /**
   * Computes a division between coordinates of this vector and a number or another vector.
   * If value is a number, divides value to x and y coordinates
   * If value is a vector, divides value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  divide(value) {
    if (value instanceof _Vector2) {
      this.x /= value.x;
      this.y /= value.y;
    } else if (typeof value === "number") {
      this.x /= value;
      this.y /= value;
    } else {
      throw "Unable to compute a division on the type '" + typeof value + "'. It should be a number or a Vector2";
    }
    return this;
  }
  /**
   * Computes a multiplication between coordinates of this vector and a number or another vector.
   * If value is a number, multiplies value to x and y coordinates
   * If value is a vector, multiplies value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  multiply(value) {
    if (value instanceof _Vector2) {
      this.x *= value.x;
      this.y *= value.y;
    } else if (typeof value === "number") {
      this.x *= value;
      this.y *= value;
    } else {
      throw "Unable to compute a multiplication on the type '" + typeof value + "'. It should be a number or a Vector2";
    }
    return this;
  }
  /* ===== Complex operations ===== */
  /**
   * Clamps the magnitude/length of this vector to a maximum.
   * If current length of this vector is smaller than length parameter, the vector remains the same
   * If current length of this vector is greater than length paramter, the vector is limited to this value
   * @param length A maximum magnitude/length that this vector can overtake
   * @returns this Returns this for methods chaining
   */
  clampLength(length) {
    if (length === 0) {
      this.copy(_Vector2.O);
    }
    this.copy(this.normalized.multiply(Math.min(this.length, length)));
    return this;
  }
  /**
   * Normalizes the vector. It means that the vector will have the same direction but with a magnitude/length of 1 unit
   * @returns this Returns this for methods chaining
   */
  normalize() {
    let normalized = this.normalized;
    this.x = normalized.x;
    this.y = normalized.y;
    return this;
  }
  /**
   * Interpolates (linearly) this vector to an other vector. Calculates a point between those two vectors at weight position
   * @param target The other vector to interpolate with
   * @param weight The weight of the second vector in the computation. For exemple :
   * 0 => returns the current vector,
   * 1 => returns the target vector,
   * 0.33 => returns the position of a new vector at 33% between this vector and the target
   * @returns this Returns this for methods chaining
   */
  lerp(target, weight) {
    weight = clamp(weight, 0, 1);
    this.x = (1 - weight) * this.x + weight * target.x;
    this.y = (1 - weight) * this.y + weight * target.y;
    return this;
  }
  /**
   * Inverts the current vector into the opposite direction
   * @returns this Returns this for methods chaining
   */
  invert() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  /**
   * Rotates the current vector by an angle (given as Rotation object).
   * Refer to Rotation doc for more information
   * @param angle A Rotation object to simplify angle handling
   * @returns this Returns this for methods chaining
   */
  rotate(angle) {
    let x = Math.cos(angle.toRadians) * this.x - Math.sin(angle.toRadians) * this.y;
    let y = Math.sin(angle.toRadians) * this.x + Math.cos(angle.toRadians) * this.y;
    this.x = x;
    this.y = y;
    return this;
  }
  /**
   * Returns the dot product of this vector and another
   * @param v The other vector to compute with
   * @returns number The result of the dot product between those two vectors
   */
  dot(v) {
    if (!(v instanceof _Vector2))
      throw "Unable to compute a dot product on non Vector2 object";
    return this.x * v.x + this.y * v.y;
  }
  /* ========== Miscellaneous ========== */
  /* ===== Assigning ===== */
  /**
   * Returns a clone of this vector
   * @returns Vector2
   */
  clone() {
    return new _Vector2(this.x, this.y);
  }
  /**
   * Copies the coordinates of a given vector to this vector
   * @param v The vector to be copied
   * @returns this Returns this for methods chaining
   */
  copy(v) {
    if (v) {
      this.x = v.x;
      this.y = v.y;
    }
    return this;
  }
  /* ========== Static methods ========== */
  /**
   * Returns an object with "to" property which is a function that takes as parameters a vector and returns a vector.
   * The usefulness of these function is to return a directional vector between two vectors as so :
   * Vector2.from(origin).to(target);
   * @param origin
   */
  static from(origin) {
    return {
      to: (target) => target.clone().sub(origin)
    };
  }
};
_x = new WeakMap();
_y = new WeakMap();
__publicField(_Vector2, "X", new _Vector2(1, 0));
__publicField(_Vector2, "Y", new _Vector2(0, 1));
__publicField(_Vector2, "O", new _Vector2(0, 0));
__publicField(_Vector2, "ONE", new _Vector2(1, 1));
let Vector2 = _Vector2;
export {
  Component as C,
  RGB as R,
  Vector2 as V,
  Rotation as a
};
//# sourceMappingURL=Vector2-BXEmxqj7.mjs.map
