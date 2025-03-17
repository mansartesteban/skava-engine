var T = Object.defineProperty;
var f = (s) => {
  throw TypeError(s);
};
var g = (s, e, t) => e in s ? T(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => g(s, typeof e != "symbol" ? e + "" : e, t), w = (s, e, t) => e.has(s) || f("Cannot " + t);
var c = (s, e, t) => (w(s, e, "read from private field"), t ? t.call(s) : e.get(s)), d = (s, e, t) => e.has(s) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), p = (s, e, t, r) => (w(s, e, "write to private field"), r ? r.call(s, t) : e.set(s, t), t);
import { O as E, E as D } from "./Entity-BaUXzpC6.mjs";
import "./Time-DerQyAzN.mjs";
import { Timer as b } from "./Utils.es.js";
import "uuid";
import { V as m } from "./Vector2-DsmbReYL.mjs";
import { C as H, R as _, a as q } from "./Vector2-DsmbReYL.mjs";
import { I as v } from "./ImplementError-CTSVZ3oY.mjs";
import { U as x } from "./UndefinedError-Csm4JJ32.mjs";
import { C as W } from "./Controls-C8IZ0c7f.mjs";
class I {
  static start() {
    return this.engine = new z(), new Promise((e) => {
      e(!0);
    });
  }
  static loadProject(e) {
    this.activeProject = new e(), this.engine.setProject(this.activeProject);
  }
}
i(I, "activeProject"), i(I, "engine");
class O {
  constructor() {
    i(this, "options");
  }
  refresh() {
  }
  render() {
    throw new v("render", "Viewer");
  }
}
class N {
  constructor(e, t) {
    i(this, "options");
    i(this, "node");
    i(this, "renderer");
    i(this, "size", new m());
    i(this, "origin", new m());
    this.node = e, this.options = { ...this.options, ...t }, this.renderer = new C(this.options), this.size = this.options.size, this.render();
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
var o;
class U {
  constructor(e, t) {
    d(this, o, null);
    i(this, "cameras", {});
    this.renderer = t, this.scene = e;
  }
  get activeCamera() {
    return this.cameras[c(this, o)];
  }
  activateCamera(e) {
    p(this, o, e);
  }
  addCamera(e, t) {
    this.cameras[e] = t;
  }
}
o = new WeakMap();
const j = {
  INITIALIZED: "INITIALIZED"
};
class Y {
  constructor(e) {
    i(this, "scenes", []);
    i(this, "options", {
      name: "Skava - Snake",
      mountOn: "#app",
      isDev: !1
    });
    i(this, "loopCallback");
    i(this, "observer");
    this.options = { ...this.options, ...e }, this.observer = new E(Object.keys(j)), setTimeout(this.setup.bind(this), 0);
  }
  addScene(e, t) {
    e.createViewer(this.options.mountOn), Promise.resolve(e.setup()).then(() => {
      e.setupFinished = !0;
    }), this.scenes.push(e);
  }
  getScene(e) {
    return this.scenes.find((t) => t.name === e);
  }
  setup() {
    throw new v("setup", "Project");
  }
  update(e, t) {
    this.scenes.forEach((r) => r.update(e, t)), this.loop(e, t);
  }
  loop(e, t) {
  }
}
var a;
class Z {
  constructor(e) {
    i(this, "setupFinished", !1);
    i(this, "name", "");
    i(this, "entityManager", null);
    i(this, "viewer");
    d(this, a, !1);
    this.name = e, this.entityManager = new u(this);
  }
  createViewer(e, t) {
    let r = document.querySelector(e);
    this.viewer = new N(r, {
      size: new m(window.innerWidth, window.innerHeight),
      ...t
    });
  }
  add(e, t) {
    this.entityManager.add(e, t);
  }
  remove(e) {
    this.entityManager.delete(e);
  }
  update(e, t) {
    var r;
    this.setupFinished && ((r = this.viewer) == null || r.refresh(e), this.loop(e, t), this.entityManager.update(e, t));
  }
  setup() {
    console.warn(
      `"setup()" method is not implemented on the scene ${this.constructor.name}`
    );
  }
  loop(e, t) {
    c(this, a) || (p(this, a, !0), console.warn(
      `"loop()" method is not implemented on the scene ${this.constructor.name}`
    ));
  }
}
a = new WeakMap();
const l = {
  INITIALIZED: "INITIALIZED"
};
class z {
  constructor() {
    i(this, "project");
    i(this, "observer");
    i(this, "lastUpdate", 0);
    i(this, "fpsMeter");
    i(this, "i", 0);
    this.observer = new E(l), this.observer.$on(l.INITIALIZED, this.loop.bind(this)), this.timer = new b(), this.fpsMeter = document.createElement("div"), this.fpsMeter.classList.add("fps-meter"), this.fpsMeter.setAttribute("last-update", "0"), document.body.appendChild(this.fpsMeter);
  }
  setProject(e) {
    this.project = e, this.observer.$emit(l.INITIALIZED);
  }
  async loop(e = 0) {
    let t = (e - parseFloat(this.fpsMeter.getAttribute("last-update"))) / 1e3, r = (e - this.lastUpdate) / 1e3;
    t > 0.5 && (this.fpsMeter.innerText = (1 / r).toFixed(), this.fpsMeter.setAttribute("last-update", e + "")), this.project && this.project.update(r, e), this.lastUpdate = e, window.requestAnimationFrame(this.loop.bind(this));
  }
}
const n = class n {
  constructor(e) {
    i(this, "observer", new E(n.EVENTS));
    i(this, "entities", []);
    i(this, "scene", null);
    if (!e)
      throw new x("scene");
    this.scene = e;
  }
  delete(e) {
    let t = this.entities.findIndex((r) => typeof e == "string" ? r.uuid === e : e instanceof D ? r === e : !1);
    if (t !== -1) {
      let r = this.entities[t];
      this.observer.$emit(n.EVENTS.ENTITY_DELETED, r);
      for (let h = r.components.length - 1; h >= 0; h--)
        r.components.splice(h, 1);
      delete this.entities[t], this.entities.splice(t, 1);
    }
  }
  add(e, t = !0) {
    e.scene = this.scene, e.children && e.children.forEach((r) => this.add(r)), t && Promise.resolve(e.setup()).then(() => {
      e.observer.$emit("SETUP_FINISHED");
    }), this.entities.push(e), this.observer.$emit(n.EVENTS.ENTITY_ADDED, e);
  }
  update(e, t) {
    this.entities.forEach((r) => r.update(e, t));
  }
};
i(n, "EVENTS", Object.freeze({
  ENTITY_ADDED: "ENTITY_ADDED",
  ENTITY_DELETED: "ENTITY_DELETED"
}));
let u = n;
class C extends A {
  constructor(t) {
    super();
    i(this, "options");
    i(this, "domElement");
    this.options = t, this.createDomElement();
  }
  get ctx() {
    var t;
    return (t = this.domElement) == null ? void 0 : t.getContext("2d");
  }
  createDomElement() {
    this.domElement = document.createElement("canvas"), this.domElement.width = this.options.size.x, this.domElement.height = this.options.size.y;
  }
}
class A {
}
export {
  I as Application,
  U as CameraManager,
  C as CanvasRenderer,
  H as Component,
  W as Controls,
  z as Engine,
  D as Entity,
  u as EntityManager,
  E as Observer,
  Y as Project,
  _ as RGB,
  A as Renderer,
  q as Rotation,
  Z as Scene,
  m as Vector2,
  O as Viewer,
  N as Viewer2d
};
