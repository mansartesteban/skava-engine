var us = Object.defineProperty;
var Ne = (h) => {
  throw TypeError(h);
};
var ps = (h, t, e) => t in h ? us(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var r = (h, t, e) => ps(h, typeof t != "symbol" ? t + "" : t, e), Ee = (h, t, e) => t.has(h) || Ne("Cannot " + e);
var i = (h, t, e) => (Ee(h, t, "read from private field"), e ? e.call(h) : t.get(h)), a = (h, t, e) => t.has(h) ? Ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(h) : t.set(h, e), o = (h, t, e, s) => (Ee(h, t, "write to private field"), s ? s.call(h, e) : t.set(h, e), e), I = (h, t, e) => (Ee(h, t, "access private method"), e);
var je = (h, t, e, s) => ({
  set _(n) {
    o(h, t, n, e);
  },
  get _() {
    return i(h, t, s);
  }
});
import { v4 as fs } from "uuid";
class Qt {
  constructor(t = {}) {
    r(this, "observers");
    r(this, "events", {});
    this.observers = [], this.events = t;
  }
  $on(t, e) {
    return typeof t == "string" && (t = [t]), t.forEach((s) => {
      this.isValidEvent(s), this.observers.push({
        event: s,
        callback: e
      });
    }), this;
  }
  unset(t) {
    return this.observers = this.observers.filter(function(e) {
      if (e !== t)
        return e;
    }), this;
  }
  $emit(t, ...e) {
    let s = [];
    return this.observers.filter((n) => n.event === t).forEach((n) => {
      s.push(Promise.resolve(n.callback(...e)));
    }), Promise.all(s);
  }
  isValidEvent(t) {
    if (this.events && !Object.keys(this.events).includes(t))
      throw new Error(`Event '${t}' is not a valid event`);
  }
}
const C = class C {
  static update() {
    let t = performance.now();
    C.deltaTime = t - C.lastUpdate, this.lastUpdate = t;
  }
  static now() {
    return performance.now();
  }
  static delta(t, e) {
    return e = e ?? C.lastUpdate, Math.abs(e - t);
  }
};
r(C, "OneMilisecond", 1), r(C, "OneSecond", C.OneMilisecond * 1e3), r(C, "OneMinute", C.OneSecond * 60), r(C, "OneHour", C.OneMinute * 60), r(C, "deltaTime", 0), r(C, "lastUpdate", performance.now());
let ee = C;
var D, v;
class Be {
  constructor() {
    a(this, D);
    a(this, v);
    r(this, "executionStack", []);
    o(this, D, performance.now()), o(this, v, i(this, D));
  }
  get delta() {
    return ee.delta(i(this, D), performance.now());
  }
  reset() {
    o(this, D, performance.now()), o(this, v, i(this, D));
  }
  executeAfter(t, e) {
    this.executionStack.push({
      delay: e,
      repeat: !1,
      callback: t,
      lastCall: i(this, v)
    });
  }
  executeEach(t, e) {
    this.executionStack.push({
      delay: t,
      repeat: !0,
      callback: e,
      lastCall: i(this, v)
    });
  }
  watchCallbacks() {
    let t = [];
    this.executionStack.forEach((e, s) => {
      e.repeat ? ee.delta(i(this, v), e.lastCall) >= e.delay && (e.callback(), e.lastCall = i(this, v)) : (this.delta >= e.delay && e.callback(), t.push(s));
    }), t.forEach((e, s) => this.executionStack.splice(s, 1));
  }
  update() {
    o(this, v, performance.now()), this.watchCallbacks();
  }
}
D = new WeakMap(), v = new WeakMap();
const ze = {
  INITIALIZED: "INITIALIZED"
};
class He {
  constructor() {
    r(this, "project");
    r(this, "observer");
    r(this, "lastUpdate", 0);
    r(this, "fpsMeter");
    r(this, "i", 0);
    this.observer = new Qt(ze), this.observer.$on(ze.INITIALIZED, this.loop.bind(this)), this.timer = new Be(), this.fpsMeter = document.createElement("div"), this.fpsMeter.classList.add("fps-meter"), this.fpsMeter.setAttribute("last-update", "0"), document.body.appendChild(this.fpsMeter);
  }
  setProject(t) {
    this.project = t, this.observer.$emit(ze.INITIALIZED);
  }
  async loop(t = 0) {
    let e = (t - parseFloat(this.fpsMeter.getAttribute("last-update"))) / 1e3, s = (t - this.lastUpdate) / 1e3;
    e > 0.5 && (this.fpsMeter.innerText = (1 / s).toFixed(), this.fpsMeter.setAttribute("last-update", t + "")), this.project && this.project.update(s, t), this.lastUpdate = t, window.requestAnimationFrame(this.loop.bind(this));
  }
}
class ke {
  static start() {
    return this.engine = new He(), new Promise((t) => {
      t(!0);
    });
  }
  static loadProject(t) {
    this.activeProject = new t(), this.engine.setProject(this.activeProject);
  }
}
r(ke, "activeProject"), r(ke, "engine");
const ms = {
  IMPLEMENT: "You must implement '%1' method in classes which extends '%2'."
};
class x extends Error {
  constructor(t, e) {
    let s = ms.IMPLEMENT.replace("%1", t).replace("%2", e);
    super(s), this.name = self.toString();
  }
}
class gs {
  constructor() {
    r(this, "options");
  }
  refresh() {
  }
  render() {
    throw new x("render", "Viewer");
  }
}
const ws = (h = 0, t = 4) => {
  let e = Math.pow(10, t), s = t < 0 ? h : 0.01 / e + h;
  return Math.round(s * e) / e;
}, ys = (h = 0, t = 0, e = 0, s = !1) => s ? h > t && h < e : h >= t && h <= e, xs = (h = 0, t = 1) => Math.floor(Math.random() * (t - h + 1)) + h, Cs = (h = 0, t = 0, e = 0, s = 0, n = 0) => s + (n - s) / (e - t) * (h - t), Ss = (h = 0, t = 0, e = 0) => h < t ? t : h > e ? e : h, _ = (h = 0, t = 0, e = 0) => Math.min(Math.max(h, t), e), bs = () => Math.floor(Math.random() * 16777215).toString(16), Ie = (h = 0) => h * Math.PI / 180, Ae = (h = 0) => h * (180 / Math.PI), Es = (h, t, e) => (e = _(e, 0, 1), (1 - e) * h + e * t), zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clamp: _,
  degreesToRadians: Ie,
  isBetween: ys,
  lerp: Es,
  mapRange: Cs,
  minMax: Ss,
  num: ws,
  radiansToDegrees: Ae,
  random: xs,
  randomHexadecimal: bs
}, Symbol.toStringTag, { value: "Module" }));
var $;
const S = class S {
  /**
   * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
   * @param asRadian Indicates if the give 'angle' is in radians or in degrees
   */
  constructor(t, e) {
    a(this, $);
    o(this, $, e ? t : Ie(t));
  }
  /**
   * Returns the current angle in radians
   */
  get angle() {
    return i(this, $);
  }
  /**
   * Sets the current angle to 'angle' value, have to be in radians
   * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
   * @param asRadian Indicates if the give 'angle' is in radians or in degrees
   */
  setAngle(t, e) {
    o(this, $, e ? t : Ie(t));
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
    return Ae(this.angle);
  }
  /**
   * Adds a rotation to current angle
   * @param rotation The Rotation to add
   * @returns The addition of these two angles
   */
  add(t) {
    return new S(this.angle + t.angle, !0);
  }
  /**
   * Substracts a rotation to current angle
   * @param rotation The Rotation to substract
   * @returns The substraction of these two angles
   */
  sub(t) {
    return new S(this.angle - t.angle, !0);
  }
  /**
   * Inverts the angle (multiply by * -1)
   * @returns this Returns this for methods chaining
   */
  invert() {
    return o(this, $, -this.angle), this;
  }
};
$ = new WeakMap(), r(S, 30, new S(Math.PI / 6)), r(S, 45, new S(Math.PI / 4)), r(S, 90, new S(Math.PI / 2)), r(S, 180, new S(Math.PI)), r(S, 360, new S(Math.PI * 2));
let M = S;
var st, it;
const m = class m {
  constructor(t = 0, e = 0) {
    a(this, st, 0);
    a(this, it, 0);
    o(this, st, t), o(this, it, e);
  }
  /* ========== Getters ========== */
  /**
   * Returns the x coordinate of this vector
   */
  get x() {
    return i(this, st);
  }
  /**
   * Returns the y coordinate of this vector
   */
  get y() {
    return i(this, it);
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
    return this.length === 0 ? m.O : this.clone().divide(this.length);
  }
  /**
   * Returns the rotation of this vector (i.e. from origin to this vector, which value is the angle (in radian) between by X axis and this vector)
   * Refer to Rotation doc for more information
   */
  get rotation() {
    return new M(Math.atan2(this.y, this.x), !0);
  }
  /* ========== Setters ========== */
  /**
   * Defines the x coordinate of this vector
   */
  set x(t) {
    o(this, st, t);
  }
  /**
   * Defines the y coordinate of this vector
   */
  set y(t) {
    o(this, it, t);
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
    if (t instanceof m)
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
    if (t instanceof m)
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
    if (t instanceof m)
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
    if (t instanceof m)
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
    return t === 0 && this.copy(m.O), this.copy(this.normalized.multiply(Math.min(this.length, t))), this;
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
  lerp(t, e) {
    return e = _(e, 0, 1), this.x = (1 - e) * this.x + e * t.x, this.y = (1 - e) * this.y + e * t.y, this;
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
    let e = Math.cos(t.toRadians) * this.x - Math.sin(t.toRadians) * this.y, s = Math.sin(t.toRadians) * this.x + Math.cos(t.toRadians) * this.y;
    return this.x = e, this.y = s, this;
  }
  /**
   * Returns the dot product of this vector and another
   * @param v The other vector to compute with
   * @returns number The result of the dot product between those two vectors
   */
  dot(t) {
    if (!(t instanceof m))
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
    return new m(this.x, this.y);
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
      to: (e) => e.clone().sub(t)
    };
  }
};
st = new WeakMap(), it = new WeakMap(), r(m, "X", new m(1, 0)), r(m, "Y", new m(0, 1)), r(m, "O", new m(0, 0)), r(m, "ONE", new m(1, 1));
let d = m;
class $e {
}
class Ve extends $e {
  constructor(e) {
    super();
    r(this, "options");
    r(this, "domElement");
    this.options = e, this.createDomElement();
  }
  get ctx() {
    var e;
    return (e = this.domElement) == null ? void 0 : e.getContext("2d");
  }
  createDomElement() {
    this.domElement = document.createElement("canvas"), this.domElement.width = this.options.size.x, this.domElement.height = this.options.size.y;
  }
}
class Ye {
  constructor(t, e) {
    r(this, "options");
    r(this, "node");
    r(this, "renderer");
    r(this, "size", new d());
    r(this, "origin", new d());
    this.node = t, this.options = { ...this.options, ...e }, this.renderer = new Ve(this.options), this.size = this.options.size, this.render();
  }
  get ctx() {
    return this.renderer.ctx;
  }
  center() {
    this.origin = this.size.clone().divide(2), this.ctx.translate(this.origin.x, this.origin.y);
  }
  render() {
    this.ctx.clearRect(0, 0, this.size.x, this.size.y), this.node.appendChild(this.renderer.domElement);
  }
  refresh() {
    this.ctx.clearRect(
      -this.size.x / 2,
      -this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }
}
var se;
class Ms {
  constructor(t, e) {
    a(this, se, null);
    r(this, "cameras", {});
    this.renderer = e, this.scene = t;
  }
  get activeCamera() {
    return this.cameras[i(this, se)];
  }
  activateCamera(t) {
    o(this, se, t);
  }
  addCamera(t, e) {
    this.cameras[t] = e;
  }
}
se = new WeakMap();
class Gt {
  constructor(t) {
    r(this, "options", {});
    r(this, "active", !0);
    r(this, "entity", null);
    t && (this.options = { ...this.options, ...t });
  }
  updateComponent(t, e) {
    this.active && this.loop(t, e);
  }
  loop(t, e) {
  }
  refresh() {
  }
  setup() {
  }
}
const ks = {
  INITIALIZED: "INITIALIZED"
};
class Is {
  constructor(t) {
    r(this, "scenes", []);
    r(this, "options", {
      name: "Skava - Snake",
      mountOn: "#app",
      isDev: !1
    });
    r(this, "loopCallback");
    r(this, "observer");
    this.options = { ...this.options, ...t }, this.observer = new Qt(Object.keys(ks)), setTimeout(this.setup.bind(this), 0);
  }
  addScene(t, e) {
    t.createViewer(this.options.mountOn), Promise.resolve(t.setup()).then(() => {
      t.setupFinished = !0;
    }), this.scenes.push(t);
  }
  getScene(t) {
    return this.scenes.find((e) => e.name === t);
  }
  setup() {
    throw new x("setup", "Project");
  }
  update(t, e) {
    this.scenes.forEach((s) => s.update(t, e)), this.loop(t, e);
  }
  loop(t, e) {
  }
}
const vs = {
  UNDEFINED: "'%1' could not be undefined."
};
class qe extends Error {
  constructor(t) {
    let e = vs.UNDEFINED.replace("%1", t);
    super(e), this.name = self.toString();
  }
}
class ge extends Gt {
  constructor() {
    super(...arguments);
    r(this, "position", new d(0, 0));
    r(this, "rotation", new M());
    r(this, "scale", new d(1, 1));
    r(this, "size", new d(0, 0));
  }
  update() {
  }
}
class Le {
  constructor(...t) {
    r(this, "uuid", fs());
    r(this, "components", /* @__PURE__ */ new Map());
    r(this, "transform", new ge());
    r(this, "scene");
    r(this, "observer", new Qt({ SETUP_FINISHED: "SETUP_FINISHED" }));
    t.forEach((e) => this.addComponent(e));
  }
  addComponent(t) {
    t.entity = this, t.setup(), this.components.set(t.constructor, t);
  }
  removeComponent(t) {
    this.components.delete(t.constructor);
  }
  getComponent(t) {
    let e = t instanceof Gt ? t.constructor : t;
    return this.components.get(e);
  }
  update(t, e) {
    this.loop(t, e), this.components.forEach((s) => {
      s.updateComponent(t, e);
    });
  }
  loop(t, e) {
  }
}
const et = class et {
  constructor(t) {
    r(this, "observer", new Qt(et.EVENTS));
    r(this, "entities", []);
    r(this, "scene", null);
    if (!t)
      throw new qe("scene");
    this.scene = t;
  }
  delete(t) {
    let e = this.entities.findIndex((s) => typeof t == "string" ? s.uuid === t : t instanceof Le ? s === t : !1);
    if (e !== -1) {
      let s = this.entities[e];
      this.observer.$emit(et.EVENTS.ENTITY_DELETED, s);
      for (let n = s.components.length - 1; n >= 0; n--)
        s.components.splice(n, 1);
      delete this.entities[e], this.entities.splice(e, 1);
    }
  }
  add(t, e = !0) {
    t.scene = this.scene, t.children && t.children.forEach((s) => this.add(s)), e && Promise.resolve(t.setup()).then(() => {
      t.observer.$emit("SETUP_FINISHED");
    }), this.entities.push(t), this.observer.$emit(et.EVENTS.ENTITY_ADDED, t);
  }
  update(t, e) {
    this.entities.forEach((s) => s.update(t, e));
  }
};
r(et, "EVENTS", Object.freeze({
  ENTITY_ADDED: "ENTITY_ADDED",
  ENTITY_DELETED: "ENTITY_DELETED"
}));
let ye = et;
var ie;
class Ps {
  constructor(t) {
    r(this, "setupFinished", !1);
    r(this, "name", "");
    r(this, "entityManager", null);
    r(this, "viewer");
    a(this, ie, !1);
    this.name = t, this.entityManager = new ye(this);
  }
  createViewer(t, e) {
    let s = document.querySelector(t);
    this.viewer = new Ye(s, {
      size: new d(window.innerWidth, window.innerHeight),
      ...e
    });
  }
  add(t, e) {
    this.entityManager.add(t, e);
  }
  remove(t) {
    this.entityManager.delete(t);
  }
  update(t, e) {
    var s;
    this.setupFinished && ((s = this.viewer) == null || s.refresh(t), this.loop(t, e), this.entityManager.update(t, e));
  }
  setup() {
    console.warn(
      `"setup()" method is not implemented on the scene ${this.constructor.name}`
    );
  }
  loop(t, e) {
    i(this, ie) || (o(this, ie, !0), console.warn(
      `"loop()" method is not implemented on the scene ${this.constructor.name}`
    ));
  }
}
ie = new WeakMap();
class B {
  constructor() {
    r(this, "key");
  }
  execute() {
    throw new x("execute", "Command");
  }
}
class Oe extends B {
  execute(...t) {
    throw new x("execute", "CommandClick");
  }
}
class Xe extends B {
  execute() {
    throw new x("execute", "CommandHold");
  }
}
class Ze extends B {
  execute(...t) {
    throw new x("execute", "CommandMouseMove");
  }
}
class ve extends B {
  constructor() {
    super(...arguments);
    r(this, "executed", !1);
  }
  execute() {
    throw new x("execute", "CommandOnce");
  }
}
class Ke extends B {
  execute(...t) {
    throw new x("execute", "CommandSwipe");
  }
}
class Pe extends B {
  constructor() {
    super(...arguments);
    r(this, "executed", !1);
  }
  execute() {
    throw new x("execute", "CommandToggle");
  }
  release() {
    throw new x("release", "CommandToggle");
  }
}
class we extends B {
  constructor() {
    super(...arguments);
    r(this, "started", !1);
  }
  release(...e) {
    throw new x("release", "CommandTouchMaintain");
  }
  execute(...e) {
    throw new x("execute", "CommandTouchMaintain");
  }
}
var w, Qe, Ge, _e, ts, es, ss, is, ns;
class Je {
  constructor(t = !1) {
    a(this, w);
    r(this, "stack", []);
    r(this, "commands", []);
    r(this, "onceCommandsExecuted", []);
    r(this, "pointerLock", null);
    r(this, "mouse", new d());
    r(this, "touchStart", new d());
    r(this, "touch", new d());
    window.addEventListener("keyup", I(this, w, ts).bind(this)), window.addEventListener("keydown", I(this, w, es).bind(this)), window.addEventListener("mousemove", I(this, w, Ge).bind(this)), window.addEventListener("click", I(this, w, Qe).bind(this)), window.addEventListener("touchstart", I(this, w, ss).bind(this)), window.addEventListener("touchmove", I(this, w, _e).bind(this)), window.addEventListener("touchend", I(this, w, is).bind(this)), t && (document.onpointerlockchange = () => {
      this.pointerLock = document.pointerLockElement;
    }, document.body.addEventListener("click", async (e) => {
      e.stopPropagation(), e.which !== 3 && await document.body.requestPointerLock({
        unadjustedMovement: !0
      });
    }));
  }
  registerCommand(t) {
    return this.commands.some(
      (e) => e.key === t.key
    ) && console.warn(`Command conflict detected on key : ${t.key}`), this.commands.push(t), t;
  }
  unregisterCommand(t) {
    let e = this.commands.findIndex((s) => s === t);
    e > -1 && this.commands.splice(e, 1);
  }
  update(t) {
    this.commands.filter(
      (s) => s instanceof Xe && this.stack.includes(s.key)
    ).forEach((s) => {
      s.execute(t);
    });
  }
}
w = new WeakSet(), Qe = function(t) {
  t.preventDefault(), this.commands.filter(
    (s) => s instanceof Oe
  ).forEach((s) => {
    s.execute({ mouse: this.mouse });
  });
}, Ge = function(t) {
  this.mouse.x = t.clientX, this.mouse.y = t.clientY, this.pointerLock && this.commands.filter(
    (s) => s instanceof Ze
  ).forEach((s) => {
    s.execute(t);
  });
}, _e = function(t) {
  this.touch.x = t.changedTouches[0].screenX, this.touch.y = t.changedTouches[0].screenY, this.commands.filter(
    (s) => s instanceof we
  ).forEach(
    (s) => s.execute({ touchStart: this.touchStart, touch: this.touch })
  );
}, ts = function(t) {
  if (this.stack.includes(t.code)) {
    let n = this.stack.findIndex((l) => l === t.code);
    n > -1 && this.stack.splice(n, 1);
  }
  this.commands.filter(
    (n) => n instanceof Pe && t.code === n.key && n.executed
  ).forEach((n) => {
    n.executed = !1, n.release();
  }), this.commands.filter(
    (n) => n instanceof ve && t.code === n.key && n.executed
  ).forEach((n) => {
    n.executed = !1;
  });
}, es = function(t) {
  this.stack.includes(t.code) || this.stack.push(t.code), this.commands.filter(
    (n) => n instanceof Pe && t.code === n.key && !n.executed
  ).forEach((n) => {
    n.executed = !0, n.execute();
  }), this.commands.filter(
    (n) => n instanceof ve && t.code === n.key && !n.executed
  ).forEach((n) => {
    n.executed = !0, n.execute();
  });
}, ss = function(t) {
  this.touchStart.x = t.changedTouches[0].screenX, this.touchStart.y = t.changedTouches[0].screenY, this.commands.filter(
    (s) => s instanceof we
  ).forEach((s) => s.started = !0);
}, is = function(t) {
  this.commands.filter(
    (s) => s instanceof we
  ).forEach((s) => {
    s.release(), s.started = !1;
  }), this.touchStart.x !== t.changedTouches[0].screenX && this.touchStart.y !== t.changedTouches[0].screenY && I(this, w, ns).call(this);
}, ns = function() {
  this.commands.filter(
    (e) => e instanceof Ke
  ).forEach((e) => {
    e.execute({ touch: this.touch, touchStart: this.touchStart });
  });
};
var L, O, U, R;
const p = class p {
  /**
   * @param r The red value of this color from 0 to 255
   * @param g The green value of this color from 0 to 255
   * @param b The blue value of this color from 0 to 255
   * @param opacity The opacity value of this color from 0 to 1
   */
  constructor(t, e, s, n) {
    a(this, L, 0);
    a(this, O, 0);
    a(this, U, 0);
    a(this, R, 1);
    if (typeof t == "number" && e === void 0 && s === void 0) {
      let l = t;
      o(this, L, l >> 16 & 255), o(this, O, l >> 8 & 255), o(this, U, l & 255), o(this, R, 1);
    } else
      o(this, L, t ?? i(this, L)), o(this, O, e ?? i(this, O)), o(this, U, s ?? i(this, U)), o(this, R, n ?? i(this, R));
  }
  /**
   * Returns the red channel from 0 to 255
   */
  get r() {
    return i(this, L);
  }
  /**
   * Sets the red channel from 0 to 255
   */
  set r(t) {
    o(this, L, _(t, 0, 255));
  }
  /**
   * Returns the green channel from 0 to 255
   */
  get g() {
    return i(this, O);
  }
  /**
   * Sets the green channel from 0 to 255
   */
  set g(t) {
    o(this, O, _(t, 0, 255));
  }
  /**
   * Returns the blue channel from 0 to 255
   */
  get b() {
    return i(this, U);
  }
  /**
   * Sets the blue channel from 0 to 255
   */
  set b(t) {
    o(this, U, _(t, 0, 255));
  }
  /**
   * Returns the opacity channel from 0 to 1
   */
  get opacity() {
    return i(this, R);
  }
  /**
   * Sets the opacity channel from 0 to 1
   */
  set opacity(t) {
    o(this, R, t);
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
    if (t instanceof p)
      return new p(
        this.r + t.r,
        this.g + t.g,
        this.b + t.b,
        this.opacity + t.opacity
      );
    if (typeof t == "number")
      return new p(
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
    if (t instanceof p)
      return new p(
        Math.floor(this.r * t.r / 255),
        Math.floor(this.g * t.g / 255),
        Math.floor(this.b * t.b / 255),
        Math.floor(this.opacity * t.opacity)
      );
    if (typeof t == "number")
      return new p(
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
  lerp(t, e, s = !0) {
    return this.r = (1 - e) * this.r + e * t.r, this.g = (1 - e) * this.g + e * t.g, this.b = (1 - e) * this.b + e * t.b, s && (this.opacity = (1 - e) * this.opacity + e * t.opacity), this;
  }
  /**
   * Returns a clone of this vector
   * @returns RGB
   */
  clone() {
    return new p(this.r, this.g, this.b, this.opacity);
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
L = new WeakMap(), O = new WeakMap(), U = new WeakMap(), R = new WeakMap(), r(p, "Black", new p(0)), r(p, "White", new p(16777215)), r(p, "Grey", new p(8355711)), r(p, "LightGrey", new p(12566463)), r(p, "DarkGrey", new p(4144959)), r(p, "Red", new p(16711680)), r(p, "Green", new p(65280)), r(p, "Blue", new p(255)), r(p, "Yellow", new p(16776960)), r(p, "Cyan", new p(65535)), r(p, "Fuchsia", new p(16711935));
let g = p;
const Ts = {
  IMPLEMENT: "The given parameter is not of type '%1'. %2 given."
};
class Ue extends Error {
  constructor(t, e) {
    let s = Ts.IMPLEMENT.replace("%1", e.name).replace("%2", t.constructor.name);
    super(s), this.name = self.toString();
  }
}
class Ds extends Gt {
  constructor(t) {
    super(), this.options = {
      updateFrequency: 16
    }, t && (this.options = { ...this.options, ...t });
  }
  updateComponent(t, e) {
    this.render(this.entity.scene.viewer, t, e);
  }
  render(t, e, s) {
    throw new x("render", "RenderComponent");
  }
}
const _t = {
  strokeStyle: "#000",
  lineWidth: "1",
  fillStyle: "#000"
}, Me = {
  setLineDash: []
};
class k {
  static draw(t, e) {
    let s = t.ctx;
    s.beginPath();
    let n = e();
    s.closePath(), n && k.reset(s, n);
  }
  static strokeRect(t, e, s, n, l, u = g.Green) {
    let c = new d(e, s), y = 1;
    t.fillStyle = u._toString || "#ff0000", t.fillRect(c.x, c.y, n, l), t.fillStyle = "#000000", t.fillRect(
      c.x + y,
      c.y + y,
      n - y * 2,
      l - y * 2
    );
  }
  static reset(t, e = []) {
    e.length === 0 && (e = Object.keys(_t).concat(
      Object.keys(Me)
    )), e.forEach((s) => {
      if (Object.keys(_t).indexOf(s) !== -1)
        switch (s) {
          case "fillStyle":
            t.fillStyle = _t.fillStyle;
            break;
          case "lineWidth":
            t.lineWidth = _t.lineWidth;
            break;
          case "strokeStyle":
            t.strokeStyle = _t.strokeStyle;
            break;
        }
      else if (Object.keys(Me).indexOf(s) !== -1)
        switch (s) {
          case "setLineDash":
            t.setLineDash(Me.setLineDash);
            break;
        }
    });
  }
}
var nt, V, Y, F, q, E;
class Ls {
  constructor(t = new d(), e = 1, s = new g(), n = null, l = null, u = {}) {
    a(this, nt);
    a(this, V);
    a(this, Y);
    a(this, F);
    a(this, q);
    a(this, E);
    o(this, nt, t), o(this, V, e), o(this, Y, s), this.angle = n, this.direction = l, o(this, E, u);
  }
  get position() {
    return i(this, nt);
  }
  get radius() {
    return i(this, V);
  }
  get color() {
    return i(this, Y);
  }
  get angle() {
    return i(this, F);
  }
  get direction() {
    return i(this, q);
  }
  get options() {
    return i(this, E);
  }
  set position(t) {
    o(this, nt, t);
  }
  set radius(t) {
    o(this, V, t);
  }
  set color(t) {
    o(this, Y, t);
  }
  set angle(t) {
    t || (t = new M(Math.PI * 2, !0)), o(this, F, t);
  }
  set direction(t) {
    t || (t = new d()), o(this, q, t);
  }
  set options(t) {
    o(this, E, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => (e.fillStyle = i(this, Y)._toString, i(this, E).shadowBlur && (e.shadowBlur = i(this, E).shadowBlur), i(this, E).shadowColor && (e.shadowColor = i(this, E).shadowColor._toString), e.arc(
      this.position.x,
      this.position.y,
      i(this, V),
      i(this, q).rotation.angle - i(this, F).angle / 2,
      i(this, q).rotation.angle + i(this, F).angle / 2
    ), i(this, F).angle % (2 * Math.PI) !== 0 && e.lineTo(this.position.x, this.position.y), e.fill(), i(this, E).shadowBlur && (e.shadowBlur = 0), i(this, E).shadowColor && (e.shadowColor = ""), ["fillStyle"]));
  }
}
nt = new WeakMap(), V = new WeakMap(), Y = new WeakMap(), F = new WeakMap(), q = new WeakMap(), E = new WeakMap();
var X, Z, W, T, N;
class Os {
  constructor(t = new d(), e = 1, s = new (i(this, W))(), n = new M(Math.PI * 2, !0), l = new d()) {
    a(this, X);
    a(this, Z);
    a(this, W);
    a(this, T);
    a(this, N);
    o(this, X, t), o(this, Z, e), o(this, W, s), o(this, T, n), o(this, N, l);
  }
  get position() {
    return i(this, X);
  }
  get radius() {
    return i(this, Z);
  }
  get color() {
    return i(this, W);
  }
  get angle() {
    return i(this, T);
  }
  get direction() {
    return i(this, N);
  }
  set position(t) {
    o(this, X, t);
  }
  set radius(t) {
    o(this, Z, t);
  }
  set color(t) {
    o(this, W, t);
  }
  set angle(t) {
    o(this, T, t);
  }
  set direction(t) {
    o(this, N, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => {
      e.fillStyle = i(this, W)._toString;
      let s = i(this, X);
      return e.arc(
        s.x,
        s.y,
        i(this, Z),
        i(this, N).rotation.angle - i(this, T).angle / 2,
        i(this, N).rotation.angle + i(this, T).angle / 2
      ), i(this, T).angle % (2 * Math.PI) !== 0 && e.lineTo(s.x, s.y), e.fill(), ["fillStyle"];
    });
  }
}
X = new WeakMap(), Z = new WeakMap(), W = new WeakMap(), T = new WeakMap(), N = new WeakMap();
var ot, rt, ht, at, ne;
class Us {
  constructor(t = new d(), e = new d(), s = g.Fuchsia, n = 5) {
    a(this, ot);
    a(this, rt);
    a(this, ht);
    a(this, at);
    a(this, ne, 0);
    o(this, ot, t), o(this, rt, e), o(this, ht, s), o(this, at, n);
  }
  get from() {
    return i(this, ot);
  }
  get to() {
    return i(this, rt);
  }
  set from(t) {
    o(this, ot, t);
  }
  set to(t) {
    o(this, rt, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => {
      e.strokeStyle = i(this, ht)._toString, e.lineWidth = i(this, at), e.fillStyle = i(this, ht)._toString;
      let s = _(i(this, at) * 3, 10, 1e3);
      if (d.from(this.from).to(this.to).length <= s) {
        let A = i(this, ne) % 4 < 2 ? "#ff0000" : "#ffffff";
        e.strokeStyle = A, e.fillStyle = A;
      }
      this.to.add(
        d.from(this.from).to(this.to).normalized.multiply(-s)
      );
      let n = this.to.clone().add(
        d.from(this.from).to(this.to).normalized.multiply(s)
      ), l = d.from(this.to).to(this.from).normalize(), u = s * 2, c = l.clone().rotate(new M(Math.PI * 2)).multiply(u).add(this.to), y = l.clone().rotate(new M(-Math.PI * 2)).multiply(u).add(this.to);
      return e.moveTo(this.from.x, this.from.y), e.lineTo(this.to.x, this.to.y), e.stroke(), e.moveTo(n.x, n.y), e.lineTo(c.x, c.y), e.lineTo(y.x, y.y), e.lineTo(n.x, n.y), e.fill(), ["strokeStyle", "lineWidth", "fillStyle"];
    }), je(this, ne)._++;
  }
}
ot = new WeakMap(), rt = new WeakMap(), ht = new WeakMap(), at = new WeakMap(), ne = new WeakMap();
var oe, xe, os;
class Re {
  constructor(t) {
    a(this, xe);
    a(this, oe);
    r(this, "img");
    r(this, "imgLoaded");
    o(this, oe, t), this.img = new Image(), this.imgLoaded = !1, I(this, xe, os).call(this);
  }
  draw(t, e = new ge()) {
    let s = t.ctx, n = e.position;
    e.scale;
    let l = e.size, u = e.rotation;
    this.imgLoaded && (s.save(), s.translate(n.x, n.y), s.rotate(-u.angle), s.translate(-n.x, -n.y), s.shadowOffsetX = 3, s.shadowOffsetY = 2, s.shadowColor = new g(0, 0, 0, 0.25)._toString, s.shadowBlur = 4, s.drawImage(this.img, n.x, n.y, l.x, l.y), s.restore());
  }
}
oe = new WeakMap(), xe = new WeakSet(), os = function() {
  this.img.onload = () => {
    this.imgLoaded = !0;
  }, this.img.src = i(this, oe);
};
var lt, dt, ct, K, ut, z;
class Rs {
  constructor(t = new d(), e = new d(), s = new g(), n = 1, l = [], u = {}) {
    a(this, lt);
    a(this, dt);
    a(this, ct);
    a(this, K);
    a(this, ut);
    a(this, z);
    o(this, lt, t), o(this, dt, e), o(this, ct, s), o(this, K, l), o(this, ut, n), o(this, z, u);
  }
  get from() {
    return i(this, lt);
  }
  get to() {
    return i(this, dt);
  }
  get color() {
    return i(this, ct);
  }
  get dashes() {
    return i(this, K);
  }
  get thickness() {
    return i(this, ut);
  }
  get options() {
    return i(this, z);
  }
  set from(t) {
    o(this, lt, t);
  }
  set to(t) {
    o(this, dt, t);
  }
  set color(t) {
    o(this, ct, t);
  }
  set dashes(t) {
    o(this, K, t);
  }
  set thickness(t) {
    o(this, ut, t);
  }
  set options(t) {
    o(this, z, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => {
      const s = i(this, K).map(
        (n) => typeof n == "string" ? parseInt(n) : n
      );
      return i(this, z).shadowBlur && (e.shadowBlur = i(this, z).shadowBlur), i(this, z).shadowColor && (e.shadowColor = i(this, z).shadowColor._toString), e.lineCap = "round", e.setLineDash(s), e.strokeStyle = this.color._toString, e.lineWidth = this.thickness, e.moveTo(this.from.x, this.from.y), e.lineTo(this.to.x, this.to.y), e.stroke(), i(this, z).shadowBlur && (e.shadowBlur = 0), i(this, z).shadowColor && (e.shadowColor = ""), ["strokeStyle", "setLineDash", "lineWidth"];
    });
  }
}
lt = new WeakMap(), dt = new WeakMap(), ct = new WeakMap(), K = new WeakMap(), ut = new WeakMap(), z = new WeakMap();
var pt, ft, J, mt;
class Fs {
  constructor(t = [], e = new g(), s = 1, n = []) {
    a(this, pt);
    a(this, ft);
    a(this, J);
    a(this, mt);
    o(this, pt, t), o(this, ft, e), o(this, J, n), o(this, mt, s);
  }
  get points() {
    return i(this, pt);
  }
  get color() {
    return i(this, ft);
  }
  get dashes() {
    return i(this, J);
  }
  get thickness() {
    return i(this, mt);
  }
  set points(t) {
    o(this, pt, t);
  }
  set color(t) {
    o(this, ft, t);
  }
  set dashes(t) {
    o(this, J, t);
  }
  set thickness(t) {
    o(this, mt, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => {
      const s = i(this, J).map(
        (n) => typeof n == "string" ? parseInt(n) : n
      );
      e.lineCap = "round", e.setLineDash(s), e.strokeStyle = this.color._toString, e.lineWidth = this.thickness;
      for (let n = 0; n < this.points.length - 1; n++)
        e.moveTo(this.points[n].x, this.points[n].y), e.lineTo(this.points[n + 1].x, this.points[n + 1].y);
      return e.moveTo(
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      ), e.stroke(), ["strokeStyle", "setLineDash", "lineWidth"];
    });
  }
}
pt = new WeakMap(), ft = new WeakMap(), J = new WeakMap(), mt = new WeakMap();
class Ws {
  constructor() {
    r(this, "checkpoints", []);
  }
  save() {
  }
  back(t) {
  }
  draw(t) {
    t.ctx;
  }
}
var gt, wt, yt, xt, Q, re, he, ae, le;
class be {
  constructor(t = new d(), e = new d(), s = [0], n = new g(), l = new M()) {
    a(this, gt);
    a(this, wt);
    a(this, yt);
    a(this, xt);
    a(this, Q);
    a(this, re);
    a(this, he);
    a(this, ae);
    a(this, le);
    o(this, gt, t), o(this, wt, e), o(this, yt, s), o(this, xt, l), o(this, Q, n);
  }
  get position() {
    return i(this, gt);
  }
  get size() {
    return i(this, wt);
  }
  get radius() {
    return i(this, yt);
  }
  get color() {
    return i(this, Q);
  }
  get rotation() {
    return i(this, xt);
  }
  get shadowBlur() {
    return i(this, re);
  }
  get shadowColor() {
    return i(this, he);
  }
  get shadowSize() {
    return i(this, ae);
  }
  get shadowPosition() {
    return i(this, le);
  }
  set position(t) {
    o(this, gt, t);
  }
  set size(t) {
    o(this, wt, t);
  }
  set radius(t) {
    o(this, yt, t);
  }
  set color(t) {
    o(this, Q, t);
  }
  set rotation(t) {
    o(this, xt, t);
  }
  set shadowBlur(t) {
    o(this, re, t);
  }
  set shadowColor(t) {
    o(this, he, t);
  }
  set shadowSize(t) {
    o(this, ae, t);
  }
  set shadowPosition(t) {
    o(this, le, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => (e.fillStyle = i(this, Q)._toString, e.save(), e.translate(
      this.position.x + this.size.x / 2,
      this.position.y + this.size.y / 2
    ), e.rotate(-this.rotation.angle), e.translate(
      -this.position.x - this.size.x / 2,
      -this.position.y - this.size.y / 2
    ), e.imageSmoothingEnabled = !1, this.shadowBlur && (e.shadowBlur = this.shadowBlur), this.shadowColor && (e.shadowColor = this.shadowColor._toString), e.roundRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y,
      this.radius
    ), e.fill(), e.restore(), this.shadowBlur && (e.shadowBlur = 0), this.shadowColor && (e.shadowColor = ""), ["fillStyle"]));
  }
}
gt = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), xt = new WeakMap(), Q = new WeakMap(), re = new WeakMap(), he = new WeakMap(), ae = new WeakMap(), le = new WeakMap();
var j, Ct, St, bt, b;
class Ns extends Re {
  constructor(e, s = {}) {
    super(e);
    a(this, j);
    a(this, Ct);
    a(this, St);
    a(this, bt);
    r(this, "offsetRotation");
    a(this, b);
    o(this, j, s.columns || 1), o(this, Ct, s.rows || 1), o(this, St, i(this, Ct) * i(this, j) || 1), o(this, bt, s.scale || 1), this.offsetRotation = s.offsetRotation || new M(), o(this, b, 0);
  }
  get current() {
    return i(this, b);
  }
  set current(e) {
    o(this, b, e);
  }
  next(e = 1) {
    o(this, b, i(this, b) + e), i(this, b) > i(this, St) - 1 && o(this, b, 0);
  }
  prev(e = 1) {
    o(this, b, i(this, b) - e), i(this, b) < 0 && o(this, b, i(this, St) - 1);
  }
  draw(e, s = new ge()) {
    let n = e.ctx, l = s.position, u = s.rotation;
    if (this.imgLoaded) {
      let c = new d(
        i(this, b) % i(this, j),
        Math.floor(i(this, b) / i(this, j))
      ), y = this.img.width / i(this, j), A = this.img.height / i(this, Ct), Fe = y * i(this, bt), We = A * i(this, bt);
      n.save(), n.translate(l.x, l.y), n.rotate(-u.sub(this.offsetRotation).angle), n.translate(-l.x, -l.y), n.imageSmoothingEnabled = !1, n.drawImage(
        this.img,
        c.x * y,
        c.y * A,
        y,
        A,
        l.x - Fe / 2,
        l.y - We / 2,
        Fe,
        We
      ), n.restore();
    }
  }
}
j = new WeakMap(), Ct = new WeakMap(), St = new WeakMap(), bt = new WeakMap(), b = new WeakMap();
var Et;
class js {
  constructor(t, e) {
    r(this, "sprite");
    r(this, "positions");
    a(this, Et);
    this.sprite = t, this.positions = e, o(this, Et, 0), this.sprite.current = this.positions[this.current];
  }
  get current() {
    return i(this, Et);
  }
  set current(t) {
    o(this, Et, t), this.sprite.current = this.positions[this.current];
  }
  next() {
    this.current++, this.current >= this.positions.length && (this.current = 0);
  }
  prev() {
    this.current--, this.current < 0 && (this.current = this.positions.length - 1);
  }
  draw(t, e) {
    this.sprite.draw(t, e);
  }
}
Et = new WeakMap();
var zt, Mt, G;
class Bs {
  constructor(t = new d(), e = new d(), s = new g()) {
    a(this, zt);
    a(this, Mt);
    a(this, G);
    o(this, zt, t), o(this, Mt, e), o(this, G, s);
  }
  get position() {
    return i(this, zt);
  }
  get size() {
    return i(this, Mt);
  }
  get color() {
    return i(this, G);
  }
  set position(t) {
    o(this, zt, t);
  }
  set size(t) {
    o(this, Mt, t);
  }
  set color(t) {
    o(this, G, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => (e.fillStyle = i(this, G)._toString, e.fillRect(this.position.x, this.position.y, this.size.x, this.size.y), e.fill(), ["fillStyle"]));
  }
}
zt = new WeakMap(), Mt = new WeakMap(), G = new WeakMap();
var kt, It, vt, Pt;
class rs {
  constructor(t = "", e = new d(), s = g.White, n = 10) {
    a(this, kt);
    a(this, It);
    a(this, vt);
    a(this, Pt);
    o(this, kt, t), o(this, It, e), o(this, vt, s), o(this, Pt, n);
  }
  get text() {
    return i(this, kt);
  }
  get position() {
    return i(this, It);
  }
  get color() {
    return i(this, vt);
  }
  get fontSize() {
    return i(this, Pt);
  }
  set text(t) {
    o(this, kt, t);
  }
  set position(t) {
    o(this, It, t);
  }
  set color(t) {
    o(this, vt, t);
  }
  set fontSize(t) {
    o(this, Pt, t);
  }
  draw(t) {
    let e = t.ctx;
    k.draw(t, () => (e.font = `${this.fontSize}pt BraahOne`, e.textAlign = "center", e.textBaseline = "center", e.fillStyle = this.color._toString, e.fillText(
      this.text.toString(),
      this.position.x,
      this.position.y + this.fontSize / 3
    ), ["fillStyle"]));
  }
}
kt = new WeakMap(), It = new WeakMap(), vt = new WeakMap(), Pt = new WeakMap();
const Te = (h) => {
  let t = Object.getPrototypeOf(h), e = Object.getOwnPropertyDescriptors(t);
  return Object.keys(e).filter(
    (n) => typeof e[n].get == "function"
  ).reduce((n, l) => (n[l] = h[l], n), {});
}, Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getProperties: Te
}, Symbol.toStringTag, { value: "Module" }));
class hs extends Gt {
}
class tt {
  constructor() {
    r(this, "uiComponent");
    r(this, "datas");
  }
  setup() {
  }
  loop() {
  }
  render() {
    throw new x("render", "UIRenderer");
  }
}
var P, de;
class as {
  constructor(t) {
    a(this, P);
    a(this, de);
    r(this, "indexInParent", 0);
    r(this, "datas", {
      size: new d(),
      margin: [0, 0, 0, 0]
    });
    if (!(t instanceof f))
      throw new Ue(t, f);
    this.style = t, this.component = t.entity;
  }
  get component() {
    return i(this, P);
  }
  get style() {
    return i(this, de);
  }
  get parent() {
    return i(this, P).parent || i(this, P).root;
  }
  get lastSibling() {
    return this.parent.tree[this.indexInParent - 1];
  }
  get lastSiblingStyleHandler() {
    var t, e;
    return (e = (t = this.lastSibling) == null ? void 0 : t.getComponent(f)) == null ? void 0 : e.styleHandler;
  }
  set style(t) {
    o(this, de, t);
  }
  set component(t) {
    o(this, P, t);
  }
  autoHeightParent(t, e) {
    let s = t.getComponent(f), n = e.getComponent(f);
    s.height === "auto" && (s.styleHandler.datas.size.y = n.styleHandler.getNextFreePosition(t).y, t.transform.size.y = n.styleHandler.getNextFreePosition(t).y), e = t, t = t.parent, t && t !== i(this, P).root && s.height === "auto" && this.autoHeightParent(t, e);
  }
  calculateSize(t) {
    let e = 0, s = 0;
    if (this.style.width) {
      if (typeof this.style.width == "number")
        e = this.style.width;
      else if (typeof this.style.width == "string")
        if (this.style.width.endsWith("%")) {
          let n = parseFloat(this.style.width.replace("%", ""));
          e = t.size.x * (n / 100);
        } else this.style.width.endsWith("px") ? e = parseFloat(this.style.width.replace("px", "")) : e = this.style.width;
    }
    if (this.style.height) {
      if (typeof this.style.height == "number")
        s = this.style.height;
      else if (typeof this.style.height == "string")
        if (this.style.height.endsWith("%")) {
          let n = parseFloat(this.style.height.replace("%", ""));
          s = t.size.y * (n / 100);
        } else this.style.height.endsWith("px") ? s = parseFloat(this.style.height.replace("px", "")) : s = this.style.height;
    }
    if (this.datas.size.x = e, this.datas.size.y = s, this.style.margin) {
      let n = this.style.margin;
      Array.isArray(n) ? n.length === 1 ? n = [n[0], n[0], n[0], n[0]] : n.length === 2 ? n = [n[0], n[1], n[0], n[1]] : n.length === 3 && (n = [n[0], n[1], n[1], n[2]]) : n = [n, n, n, n], n = n.map((l, u) => {
        if (typeof l == "number")
          return l;
        if (l.endsWith("%")) {
          let c = parseFloat(l.replace("%", ""));
          return ([0, 2].includes(u) ? t.size.y : t.size.x) * (c / 100);
        } else return l.endsWith("px") ? parseFloat(l.replace("px", "")) : parseFloat(l);
      }), this.style.direction === "vertical" ? e -= n[1] + n[3] : this.style.direction === "horizontal" && (s -= n[0] + n[2]), this.datas.margin = n;
    }
    return new d(Math.max(0, e), Math.max(0, s));
  }
  getNextFreePosition(t, e) {
    let s = new d();
    if (t) {
      let n = t.getComponent(f), l = t.tree;
      e !== void 0 && (l = l.slice(0, e)), l.forEach((u) => {
        let c = u.getComponent(f).styleHandler.datas;
        n.direction === "vertical" ? (s.y += c.size.y, s.y += c.margin[0] + c.margin[2]) : (s.x += u.size.x, s.x += c.margin[1] + c.margin[3]);
      });
    }
    return s;
  }
  calculatePosition(t) {
    let e = t.position.x + (this.style.direction === "horizontal" && this.getNextFreePosition(i(this, P).parent, this.indexInParent).x || 0), s = t.position.y + (this.style.direction === "vertical" && this.getNextFreePosition(i(this, P).parent, this.indexInParent).y || 0);
    if (this.style.margin) {
      let l = this.style.margin;
      Array.isArray(l) ? l.length === 1 ? l = [l[0], l[0], l[0], l[0]] : l.length === 2 ? l = [l[0], l[1], l[0], l[1]] : l.length === 3 && (l = [l[0], l[1], l[1], l[2]]) : l = [l, l, l, l], l = l.map((u, c) => {
        if (typeof u == "number")
          return u;
        if (u.endsWith("%")) {
          let y = parseFloat(u.replace("%", ""));
          return ([0, 2].includes(c) ? t.size.y : t.size.x) * (y / 100);
        } else return u.endsWith("px") ? parseFloat(u.replace("px", "")) : parseFloat(u);
      }), e += l[3], s += l[0];
    }
    let n = this.parent.getComponent(f);
    return n.align && n.align === "center" && (n.direction === "horizontal" ? s += t.size.y / 2 - this.component.transform.size.y / 2 - this.datas.margin[0] / 2 - this.datas.margin[2] / 2 : e += t.size.x / 2 - this.component.transform.size.x / 2 - this.datas.margin[1] / 2 - this.datas.margin[3] / 2), new d(e, s);
  }
  handleStyle() {
    var e;
    let t = (e = this.component.parent) == null ? void 0 : e.transform;
    (!t || this.style.layout === "absolute") && (t = this.component.root.transform), this.component.isRoot || (this.component.transform.size = this.calculateSize(t), this.component.transform.position = this.calculatePosition(t)), this.component.parent && this.component.parent !== this.component.root && this.autoHeightParent(
      this.component.parent || this.component.root,
      this.component
    );
  }
}
P = new WeakMap(), de = new WeakMap();
var ce, ue, Tt, Dt, Lt, Ot, Ut, Rt, Ft, Wt, Nt, jt, Bt, Ht, At, $t, Vt, Yt, qt, Xt, Zt;
const te = class te extends Gt {
  constructor(e, s = !1) {
    super();
    a(this, ce, !1);
    a(this, ue, !1);
    a(this, Tt);
    a(this, Dt);
    a(this, Lt);
    a(this, Ot);
    a(this, Ut);
    a(this, Rt);
    a(this, Ft);
    a(this, Wt);
    a(this, Nt);
    a(this, jt);
    a(this, Bt);
    a(this, Ht);
    a(this, At);
    a(this, $t);
    a(this, Vt);
    a(this, Yt);
    a(this, qt);
    a(this, Xt);
    a(this, Zt);
    e && (this.color = e.color || i(this, Tt), this.textColor = e.textColor || i(this, Dt), this.font = e.font || i(this, Lt), this.fontWeight = e.fontWeight || i(this, Ot), this.fontSize = e.fontSize || i(this, Ut), this.borderRadius = e.borderRadius || i(this, Rt), this.borderWidth = e.borderWidth || i(this, Ft), this.borderColor = e.borderColor || i(this, Wt), this.shadowColor = e.shadowColor || i(this, Nt), this.shadowBlur = e.shadowBlur || i(this, jt), this.shadowPosition = e.shadowPosition || i(this, Bt), this.shadowSize = e.shadowSize || i(this, Ht), this.layout = e.layout || i(this, At), this.margin = e.margin || i(this, $t), this.padding = e.padding || i(this, Vt), this.width = e.width || i(this, Yt), this.height = e.height || i(this, qt), this.direction = e.direction || i(this, Xt), this.align = e.align || i(this, Zt)), o(this, ce, s);
  }
  get color() {
    return i(this, Tt);
  }
  get textColor() {
    return i(this, Dt);
  }
  get font() {
    return i(this, Lt);
  }
  get fontWeight() {
    return i(this, Ot);
  }
  get fontSize() {
    return i(this, Ut);
  }
  get borderRadius() {
    return i(this, Rt);
  }
  get borderWidth() {
    return i(this, Ft);
  }
  get borderColor() {
    return i(this, Wt);
  }
  get shadowColor() {
    return i(this, Nt);
  }
  get shadowBlur() {
    return i(this, jt);
  }
  get shadowPosition() {
    return i(this, Bt);
  }
  get shadowSize() {
    return i(this, Ht);
  }
  get layout() {
    return i(this, At);
  }
  get margin() {
    return i(this, $t);
  }
  get padding() {
    return i(this, Vt);
  }
  get width() {
    return i(this, Yt);
  }
  get height() {
    return i(this, qt);
  }
  get direction() {
    return i(this, Xt);
  }
  get align() {
    return i(this, Zt);
  }
  get needsUpdate() {
    return i(this, ue);
  }
  get inherit() {
    return i(this, ce);
  }
  set color(e) {
    o(this, Tt, e), this.needsUpdate = !0;
  }
  set textColor(e) {
    o(this, Dt, e), this.needsUpdate = !0;
  }
  set font(e) {
    o(this, Lt, e), this.needsUpdate = !0;
  }
  set fontWeight(e) {
    o(this, Ot, e), this.needsUpdate = !0;
  }
  set fontSize(e) {
    o(this, Ut, e), this.needsUpdate = !0;
  }
  set borderRadius(e) {
    o(this, Rt, e), this.needsUpdate = !0;
  }
  set borderWidth(e) {
    o(this, Ft, e), this.needsUpdate = !0;
  }
  set borderColor(e) {
    o(this, Wt, e), this.needsUpdate = !0;
  }
  set shadowColor(e) {
    o(this, Nt, e), this.needsUpdate = !0;
  }
  set shadowBlur(e) {
    o(this, jt, e), this.needsUpdate = !0;
  }
  set shadowPosition(e) {
    o(this, Bt, e), this.needsUpdate = !0;
  }
  set shadowSize(e) {
    o(this, Ht, e), this.needsUpdate = !0;
  }
  set layout(e) {
    o(this, At, e), this.needsUpdate = !0;
  }
  set margin(e) {
    o(this, $t, e), this.needsUpdate = !0;
  }
  set padding(e) {
    o(this, Vt, e), this.needsUpdate = !0;
  }
  set width(e) {
    o(this, Yt, e), this.needsUpdate = !0;
  }
  set height(e) {
    o(this, qt, e), this.needsUpdate = !0;
  }
  set direction(e) {
    o(this, Xt, e), this.needsUpdate = !0;
  }
  set needsUpdate(e) {
    o(this, ue, e);
  }
  set align(e) {
    o(this, Zt, e);
  }
  setup() {
    this.styleHandler = new as(this);
  }
  loop() {
    this.styleHandler.handleStyle();
  }
  setDefaultStyle(e) {
    let s = this.entity.getComponent(te);
    Object.keys(Te(e)).forEach((n) => {
      n !== "inherit" && s[n] === void 0 && (s[n] = e[n]);
    });
  }
  setStyle(e, s = !0, n = !1) {
    let l = this.entity.getComponent(te), u = e;
    e instanceof te && (u = Te(e)), Object.keys(u).forEach((c) => {
      c !== "inherit" && (s ? u[c] !== void 0 && (l[c] = u[c] || l[c]) : n ? l[c] === void 0 && (l[c] = u[c]) : l[c] = l[c] || u[c]);
    });
  }
};
ce = new WeakMap(), ue = new WeakMap(), Tt = new WeakMap(), Dt = new WeakMap(), Lt = new WeakMap(), Ot = new WeakMap(), Ut = new WeakMap(), Rt = new WeakMap(), Ft = new WeakMap(), Wt = new WeakMap(), Nt = new WeakMap(), jt = new WeakMap(), Bt = new WeakMap(), Ht = new WeakMap(), At = new WeakMap(), $t = new WeakMap(), Vt = new WeakMap(), Yt = new WeakMap(), qt = new WeakMap(), Xt = new WeakMap(), Zt = new WeakMap();
let f = te;
var Kt, pe, Ce, fe, me, Se;
class H extends Le {
  constructor(...e) {
    super(...e);
    a(this, Kt);
    a(this, pe);
    a(this, Ce, []);
    a(this, fe);
    a(this, me, []);
    a(this, Se, []);
    r(this, "setupDone", !1);
    r(this, "reactToEvents", !0);
    r(this, "uiManager");
    r(this, "datas", {
      origin: new d(),
      defaultSlot: null
    });
    r(this, "slots", /* @__PURE__ */ new Map());
    r(this, "eventObserver", new Qt({
      click: "click"
    }));
    r(this, "transform", new ge());
    e.find((n) => n instanceof f) || this.addComponent(new f());
  }
  get parent() {
    return i(this, pe);
  }
  get children() {
    return i(this, Ce);
  }
  get root() {
    return i(this, fe);
  }
  get isRoot() {
    return this.root === this;
  }
  get tree() {
    return i(this, me);
  }
  get pendingTree() {
    return i(this, Se);
  }
  set parent(e) {
    o(this, pe, e);
  }
  set root(e) {
    o(this, fe, e);
  }
  set tree(e) {
    this.tree = e;
  }
  setup() {
    this.setupDone = !0, this.setDefaultSlot(this);
  }
  addRenderer(e) {
    if (!(e instanceof tt))
      throw new Ue(e, tt);
    return e.uiComponent = this, e.setup(), o(this, Kt, e), this;
  }
  setStyle(e) {
    this.getComponent(f).setStyle(e);
  }
  setSlot(e, s) {
    this.slots.set(e, s);
  }
  setDefaultSlot(e) {
    this.setSlot("default", e);
  }
  addChild(e, s = "default") {
    e.parent = this, e.uiManager = this.uiManager, e.getComponent(f).styleHandler.indexInParent = i(this, me).length;
    let n = this.slots.get(s) || this;
    return this.setupDone ? n.tree.push(e) : n.pendingTree.push({ slot: s, component: e }), this;
  }
  addEventListener(e, s) {
    this.eventObserver.$on(e, s);
  }
  trigger(e, ...s) {
    this.eventObserver.$emit(e, ...s);
  }
  loop(e, s) {
    var n, l;
    (n = i(this, Kt)) == null || n.loop(), (l = i(this, Kt)) == null || l.render(this.scene.viewer, e, s);
  }
}
Kt = new WeakMap(), pe = new WeakMap(), Ce = new WeakMap(), fe = new WeakMap(), me = new WeakMap(), Se = new WeakMap();
class ls extends Oe {
  constructor(t) {
    super(), this.elements = t;
  }
  execute({ mouse: t }) {
    t = t.clone();
    let e = this.elements.find((s) => s.transform.position.x + s.scene.viewer.origin.x <= t.x && s.transform.position.x + s.scene.viewer.origin.x + s.transform.size.x >= t.x && s.transform.position.y + s.scene.viewer.origin.y <= t.y && s.transform.position.y + s.scene.viewer.origin.y + s.transform.size.y >= t.y && s.reactToEvents);
    e && e.trigger("click", { mouse: t, element: e });
  }
}
class ds extends H {
  constructor() {
    super(...arguments);
    r(this, "toProcess", []);
  }
  setup() {
    this.root = this, super.setup(), this.copyViewerTransform();
  }
  addChild(e) {
    for (e.root = this.root, e.scene = this.scene, e.getComponent(f).setDefaultStyle(this.getComponent(f)), this.scene.add(e), this.uiManager.add(e); e.pendingTree.length > 0; ) {
      let s = e.pendingTree.shift(), n = e.slots.get(s.slot) || e;
      s.component.parent = n, s.component.getComponent(f).styleHandler.indexInParent = n.tree.length, n.tree.push(s.component);
    }
    return e.tree.forEach((s) => this.addChild(s)), this;
  }
  copyViewerTransform() {
    this.transform.position.x = -this.scene.viewer.origin.x, this.transform.position.y = -this.scene.viewer.origin.y, this.transform.size.x = this.scene.viewer.size.x, this.transform.size.y = this.scene.viewer.size.y;
  }
  loop() {
    this.copyViewerTransform(), super.loop();
  }
}
var Jt;
class As {
  constructor(t) {
    a(this, Jt, []);
    r(this, "controls");
    r(this, "scene");
    r(this, "mainLayout");
    this.controls = new Je(), this.controls.registerCommand(new ls(i(this, Jt))), this.scene = t, this.mainLayout = new ds(
      new f(
        {
          borderRadius: 0,
          margin: 0,
          padding: 0,
          fontSize: 24,
          width: "100%",
          height: "auto",
          align: "left",
          layout: "relative",
          color: g.White,
          textColor: g.Black,
          // font,
          fontWeight: 500,
          borderWidth: 1,
          borderColor: g.Black,
          shadowColor: null,
          shadowBlur: null,
          shadowPosition: null,
          shadowSize: null,
          direction: "vertical"
        },
        !0
      )
    ), this.mainLayout.uiManager = this, this.mainLayout.scene = this.scene, this.scene.add(this.mainLayout);
  }
  get uiComponents() {
    return i(this, Jt);
  }
  clean() {
    this.uiComponents.forEach((t) => {
      console.log("clean", this.scene), this.scene.remove(t);
    });
  }
  add(t) {
    t instanceof H && (t.uiManager = this, i(this, Jt).unshift(t));
  }
}
Jt = new WeakMap();
class $s extends hs {
  loop(t, e) {
    this.entity.transform.rotation.setAngle(Math.sin(e / 50) / 10, !0);
  }
}
class Vs extends tt {
  constructor() {
    super(...arguments);
    r(this, "shape");
    r(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(f), this.shape = new be(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    ), this.shape = new Re("/button.png");
  }
  render(e) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.color = this.style.color, this.shape.draw(e, this.uiComponent.transform);
  }
}
class Ys extends H {
  setup() {
    super.setup(), this.addRenderer(new Vs());
  }
}
class cs extends tt {
  constructor() {
    super(...arguments);
    r(this, "shape");
    r(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(f), this.shape = new be(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }
  render(e) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.rotation = this.uiComponent.transform.rotation, this.shape.shadowBlur = this.style.shadowBlur, this.shape.shadowColor = this.style.shadowColor, this.shape.draw(e);
  }
}
class De extends H {
  setup() {
    super.setup(), this.addRenderer(new cs());
  }
}
class qs extends H {
  setup() {
    super.setup();
    let t = this.getComponent(f);
    t || (t = new f(), this.addComponent(t)), t.setStyle(
      {
        color: new g(255, 255, 255, 1),
        borderRadius: 32
      },
      !0
    );
    let e = new De(
      new f({
        height: 64,
        borderRadius: [32, 32, 0, 0],
        color: new g(220, 220, 220)
      })
    ), s = new De(
      new f({
        borderRadius: [8],
        margin: [32],
        color: new g(255, 255, 255, 1),
        align: "center"
      })
    );
    this.addChild(e), this.addChild(s), this.setDefaultSlot(s), this.setSlot("header", e), this.addRenderer(new cs());
  }
}
class Xs extends tt {
  constructor() {
    super(...arguments);
    r(this, "shape");
    r(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(f), this.shape = new be(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }
  render(e) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.rotation = this.uiComponent.transform.rotation, this.shape.shadowBlur = this.style.shadowBlur, this.shape.shadowColor = this.style.shadowColor, console.log("render", this.style), this.shape.draw(e);
  }
}
class Zs extends H {
  setup() {
    super.setup(), this.addRenderer(new Xs());
  }
}
class Ks extends tt {
  constructor() {
    super(...arguments);
    r(this, "shape");
    r(this, "style");
  }
  setup() {
    super.setup(), this.style = this.uiComponent.getComponent(f), this.shape = new rs(
      this.uiComponent.text,
      this.uiComponent.transform.position,
      this.style.color,
      this.style.fontSize
    ), new FontFace("BraahOne", "url(/BraahOne-Regular.ttf)").load().then((s) => {
      document.fonts.add(s);
    });
  }
  render(e) {
    this.shape.position = this.uiComponent.transform.position, this.shape.size = this.uiComponent.transform.size, this.shape.position.x += this.shape.size.x / 2, this.shape.position.y += this.shape.size.y / 2, this.shape.draw(e);
  }
}
class Js extends H {
  constructor() {
    super(...arguments);
    r(this, "text");
  }
  setup() {
    super.setup(), this.reactToEvents = !1;
    let e = this.getComponent(f);
    e || (e = new f(), this.addComponent(e)), e.setStyle(
      {
        height: "100%"
      },
      !0
    ), this.addRenderer(new Ks());
  }
  setText(e) {
    this.text = e;
  }
}
const _s = {
  Application: ke,
  Viewer: gs,
  Viewer2d: Ye,
  CameraManager: Ms,
  Component: Gt,
  Observer: Qt,
  Project: Is,
  Scene: Ps,
  Engine: He,
  Entity: Le,
  EntityManager: ye,
  Controls: Je,
  RGB: g,
  Rotation: M,
  Vector2: d,
  CanvasRenderer: Ve,
  Renderer: $e,
  commands: {
    Command: B,
    CommandClick: Oe,
    CommandHold: Xe,
    CommandMouseMove: Ze,
    CommandOnce: ve,
    CommandSwipe: Ke,
    CommandToggle: Pe,
    CommandTouchMaintain: we
  },
  components: {
    Render2DComponent: Ds,
    TransformComponent: ge
  },
  shapes: {
    Circle: Ls,
    CircleScreen: Os,
    DebugVector: Us,
    Draw: k,
    Img: Re,
    Line: Rs,
    MultiLine: Fs,
    Path: Ws,
    RoundSquare: be,
    Sprite: Ns,
    SpriteSequence: js,
    Square: Bs,
    Text: rs
  }
}, ti = {
  Time: ee,
  Timer: Be,
  NumericUtils: zs,
  ObjectUtils: Hs
}, ei = {
  ImplementError: x,
  UndefinedError: qe,
  WrongInstanceError: Ue
}, si = {
  core: {
    UIAnimation: hs,
    UIComponent: H,
    UIManager: As,
    UIRenderer: tt,
    UIStyle: f,
    UIStyleHandler: as
  },
  events: {
    OnClick: ls
  },
  animations: {
    ShakeAnimation: $s
  },
  components: {
    Button: Ys,
    Card: qs,
    DebugDiv: Zs,
    Div: De,
    Label: Js,
    MainLayout: ds
  }
};
export {
  _s as core,
  ei as errors,
  si as ui,
  ti as utils
};
