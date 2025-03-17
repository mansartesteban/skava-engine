var F = Object.defineProperty;
var M = (h) => {
  throw TypeError(h);
};
var P = (h, t, i) => t in h ? F(h, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : h[t] = i;
var e = (h, t, i) => P(h, typeof t != "symbol" ? t + "" : t, i), I = (h, t, i) => t.has(h) || M("Cannot " + i);
var o = (h, t, i) => (I(h, t, "read from private field"), i ? i.call(h) : t.get(h)), y = (h, t, i) => t.has(h) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(h) : t.set(h, i), n = (h, t, i, f) => (I(h, t, "write to private field"), f ? f.call(h, i) : t.set(h, i), i);
import { clamp as g, degreesToRadians as S, radiansToDegrees as O } from "./Utils/Numeric.es.js";
import "./Time-DerQyAzN.mjs";
import "uuid";
class L {
  constructor(t) {
    e(this, "options", {});
    e(this, "active", !0);
    e(this, "entity", null);
    t && (this.options = { ...this.options, ...t });
  }
  updateComponent(t, i) {
    this.active && this.loop(t, i);
  }
  loop(t, i) {
  }
  refresh() {
  }
  setup() {
  }
}
var p, u, c, x;
const s = class s {
  /**
   * @param r The red value of this color from 0 to 255
   * @param g The green value of this color from 0 to 255
   * @param b The blue value of this color from 0 to 255
   * @param opacity The opacity value of this color from 0 to 1
   */
  constructor(t, i, f, z) {
    y(this, p, 0);
    y(this, u, 0);
    y(this, c, 0);
    y(this, x, 1);
    if (typeof t == "number" && i === void 0 && f === void 0) {
      let l = t;
      n(this, p, l >> 16 & 255), n(this, u, l >> 8 & 255), n(this, c, l & 255), n(this, x, 1);
    } else
      n(this, p, t ?? o(this, p)), n(this, u, i ?? o(this, u)), n(this, c, f ?? o(this, c)), n(this, x, z ?? o(this, x));
  }
  /**
   * Returns the red channel from 0 to 255
   */
  get r() {
    return o(this, p);
  }
  /**
   * Sets the red channel from 0 to 255
   */
  set r(t) {
    n(this, p, g(t, 0, 255));
  }
  /**
   * Returns the green channel from 0 to 255
   */
  get g() {
    return o(this, u);
  }
  /**
   * Sets the green channel from 0 to 255
   */
  set g(t) {
    n(this, u, g(t, 0, 255));
  }
  /**
   * Returns the blue channel from 0 to 255
   */
  get b() {
    return o(this, c);
  }
  /**
   * Sets the blue channel from 0 to 255
   */
  set b(t) {
    n(this, c, g(t, 0, 255));
  }
  /**
   * Returns the opacity channel from 0 to 1
   */
  get opacity() {
    return o(this, x);
  }
  /**
   * Sets the opacity channel from 0 to 1
   */
  set opacity(t) {
    n(this, x, t);
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
  add(t) {
    if (t instanceof s)
      return new s(
        this.r + t.r,
        this.g + t.g,
        this.b + t.b,
        this.opacity + t.opacity
      );
    if (typeof t == "number")
      return new s(
        this.r + t,
        this.g + t,
        this.b + t,
        this.opacity + t
      );
    throw "Unable to compute a addition on the type '" + typeof t + "'. It should be a number or a Color";
  }
  /**
   * Returns a new Color which is the multiplication of this color with an other
   * @param color The color to multiply by this color
   * @returns Color
   */
  multiply(t) {
    if (t instanceof s)
      return new s(
        Math.floor(this.r * t.r / 255),
        Math.floor(this.g * t.g / 255),
        Math.floor(this.b * t.b / 255),
        Math.floor(this.opacity * t.opacity)
      );
    if (typeof t == "number")
      return new s(
        this.r * t,
        this.g * t,
        this.b * t
        // this.opacity * color
      );
    throw "Unable to compute a multiplication on the type '" + typeof t + "'. It should be a number or a Color";
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
  lerp(t, i, f = !0) {
    return this.r = (1 - i) * this.r + i * t.r, this.g = (1 - i) * this.g + i * t.g, this.b = (1 - i) * this.b + i * t.b, f && (this.opacity = (1 - i) * this.opacity + i * t.opacity), this;
  }
  /**
   * Returns a clone of this vector
   * @returns RGB
   */
  clone() {
    return new s(this.r, this.g, this.b, this.opacity);
  }
  /**
   * Copies the coordinates of a given vector to this vector
   * @param v The vector to be copied
   * @returns this Returns this for methods chaining
   */
  copy(t) {
    return t && (this.r = t.r, this.g = t.g, this.b = t.b, this.opacity = t.opacity), this;
  }
};
p = new WeakMap(), u = new WeakMap(), c = new WeakMap(), x = new WeakMap(), e(s, "Black", new s(0)), e(s, "White", new s(16777215)), e(s, "Grey", new s(8355711)), e(s, "LightGrey", new s(12566463)), e(s, "DarkGrey", new s(4144959)), e(s, "Red", new s(16711680)), e(s, "Green", new s(65280)), e(s, "Blue", new s(255)), e(s, "Yellow", new s(16776960)), e(s, "Cyan", new s(65535)), e(s, "Fuchsia", new s(16711935));
let U = s;
var d;
const a = class a {
  /**
   * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
   * @param asRadian Indicates if the give 'angle' is in radians or in degrees
   */
  constructor(t, i) {
    y(this, d);
    n(this, d, i ? t : S(t));
  }
  /**
   * Returns the current angle in radians
   */
  get angle() {
    return o(this, d);
  }
  /**
   * Sets the current angle to 'angle' value, have to be in radians
   * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
   * @param asRadian Indicates if the give 'angle' is in radians or in degrees
   */
  setAngle(t, i) {
    n(this, d, i ? t : S(t));
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
    return O(this.angle);
  }
  /**
   * Adds a rotation to current angle
   * @param rotation The Rotation to add
   * @returns The addition of these two angles
   */
  add(t) {
    return new a(this.angle + t.angle, !0);
  }
  /**
   * Substracts a rotation to current angle
   * @param rotation The Rotation to substract
   * @returns The substraction of these two angles
   */
  sub(t) {
    return new a(this.angle - t.angle, !0);
  }
  /**
   * Inverts the angle (multiply by * -1)
   * @returns this Returns this for methods chaining
   */
  invert() {
    return n(this, d, -this.angle), this;
  }
};
d = new WeakMap(), e(a, 30, new a(Math.PI / 6)), e(a, 45, new a(Math.PI / 4)), e(a, 90, new a(Math.PI / 2)), e(a, 180, new a(Math.PI)), e(a, 360, new a(Math.PI * 2));
let w = a;
var b, m;
const r = class r {
  constructor(t = 0, i = 0) {
    y(this, b, 0);
    y(this, m, 0);
    n(this, b, t), n(this, m, i);
  }
  /* ========== Getters ========== */
  /**
   * Returns the x coordinate of this vector
   */
  get x() {
    return o(this, b);
  }
  /**
   * Returns the y coordinate of this vector
   */
  get y() {
    return o(this, m);
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
    return this.length === 0 ? r.O : this.clone().divide(this.length);
  }
  /**
   * Returns the rotation of this vector (i.e. from origin to this vector, which value is the angle (in radian) between by X axis and this vector)
   * Refer to Rotation doc for more information
   */
  get rotation() {
    return new w(Math.atan2(this.y, this.x), !0);
  }
  /* ========== Setters ========== */
  /**
   * Defines the x coordinate of this vector
   */
  set x(t) {
    n(this, b, t);
  }
  /**
   * Defines the y coordinate of this vector
   */
  set y(t) {
    n(this, m, t);
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
  add(t) {
    if (t instanceof r)
      this.x += t.x, this.y += t.y;
    else if (typeof t == "number")
      this.x += t, this.y += t;
    else
      throw "Unable to compute a addition on the type '" + typeof t + "'. It should be a number or a Vector2";
    return this;
  }
  /**
   * Computes a substraction between coordinates of this vector and a number or another vector.
   * If value is a number, substracts value to x and y coordinates
   * If value is a vector, substracts value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  sub(t) {
    if (t instanceof r)
      this.x -= t.x, this.y -= t.y;
    else if (typeof t == "number")
      this.x -= t, this.y -= t;
    else
      throw "Unable to compute a subsraction on the type '" + typeof t + "'. It should be a number or a Vector2";
    return this;
  }
  /**
   * Computes a division between coordinates of this vector and a number or another vector.
   * If value is a number, divides value to x and y coordinates
   * If value is a vector, divides value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  divide(t) {
    if (t instanceof r)
      this.x /= t.x, this.y /= t.y;
    else if (typeof t == "number")
      this.x /= t, this.y /= t;
    else
      throw "Unable to compute a division on the type '" + typeof t + "'. It should be a number or a Vector2";
    return this;
  }
  /**
   * Computes a multiplication between coordinates of this vector and a number or another vector.
   * If value is a number, multiplies value to x and y coordinates
   * If value is a vector, multiplies value.x to x coordinates and value.y to y coordinates
   * @param v Can be a vector or a number
   * @returns this Returns this for methods chaining
   */
  multiply(t) {
    if (t instanceof r)
      this.x *= t.x, this.y *= t.y;
    else if (typeof t == "number")
      this.x *= t, this.y *= t;
    else
      throw "Unable to compute a multiplication on the type '" + typeof t + "'. It should be a number or a Vector2";
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
  clampLength(t) {
    return t === 0 && this.copy(r.O), this.copy(this.normalized.multiply(Math.min(this.length, t))), this;
  }
  /**
   * Normalizes the vector. It means that the vector will have the same direction but with a magnitude/length of 1 unit
   * @returns this Returns this for methods chaining
   */
  normalize() {
    let t = this.normalized;
    return this.x = t.x, this.y = t.y, this;
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
  lerp(t, i) {
    return i = g(i, 0, 1), this.x = (1 - i) * this.x + i * t.x, this.y = (1 - i) * this.y + i * t.y, this;
  }
  /**
   * Inverts the current vector into the opposite direction
   * @returns this Returns this for methods chaining
   */
  invert() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Rotates the current vector by an angle (given as Rotation object).
   * Refer to Rotation doc for more information
   * @param angle A Rotation object to simplify angle handling
   * @returns this Returns this for methods chaining
   */
  rotate(t) {
    let i = Math.cos(t.toRadians) * this.x - Math.sin(t.toRadians) * this.y, f = Math.sin(t.toRadians) * this.x + Math.cos(t.toRadians) * this.y;
    return this.x = i, this.y = f, this;
  }
  /**
   * Returns the dot product of this vector and another
   * @param v The other vector to compute with
   * @returns number The result of the dot product between those two vectors
   */
  dot(t) {
    if (!(t instanceof r))
      throw "Unable to compute a dot product on non Vector2 object";
    return this.x * t.x + this.y * t.y;
  }
  /* ========== Miscellaneous ========== */
  /* ===== Assigning ===== */
  /**
   * Returns a clone of this vector
   * @returns Vector2
   */
  clone() {
    return new r(this.x, this.y);
  }
  /**
   * Copies the coordinates of a given vector to this vector
   * @param v The vector to be copied
   * @returns this Returns this for methods chaining
   */
  copy(t) {
    return t && (this.x = t.x, this.y = t.y), this;
  }
  /* ========== Static methods ========== */
  /**
   * Returns an object with "to" property which is a function that takes as parameters a vector and returns a vector.
   * The usefulness of these function is to return a directional vector between two vectors as so :
   * Vector2.from(origin).to(target);
   * @param origin
   */
  static from(t) {
    return {
      to: (i) => i.clone().sub(t)
    };
  }
};
b = new WeakMap(), m = new WeakMap(), e(r, "X", new r(1, 0)), e(r, "Y", new r(0, 1)), e(r, "O", new r(0, 0)), e(r, "ONE", new r(1, 1));
let C = r;
export {
  L as C,
  U as R,
  C as V,
  w as a
};
