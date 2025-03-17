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
var _activeCamera, _loopHasBeenWarned;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Entity = require("./Entity-CxUl1btK.js");
require("./Time-BnYKtbMg.js");
const Utils = require("./Utils.cjs.js");
require("uuid");
const Vector2 = require("./Vector2-BBtao3PE.js");
const ImplementError = require("./ImplementError-1IS0II9w.js");
const UndefinedError = require("./UndefinedError-CWfMhOd2.js");
const Controls = require("./Controls-c5IWmUD1.js");
class Application {
  static start() {
    this.engine = new Engine();
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  static loadProject(project) {
    this.activeProject = new project();
    this.engine.setProject(this.activeProject);
  }
}
__publicField(Application, "activeProject");
__publicField(Application, "engine");
class Viewer {
  constructor() {
    __publicField(this, "options");
  }
  refresh() {
  }
  render() {
    throw new ImplementError.ImplementError("render", "Viewer");
  }
}
class Viewer2d {
  constructor(node, options) {
    __publicField(this, "options");
    __publicField(this, "node");
    __publicField(this, "renderer");
    __publicField(this, "size", new Vector2.Vector2());
    __publicField(this, "origin", new Vector2.Vector2());
    this.node = node;
    this.options = { ...this.options, ...options };
    this.renderer = new CanvasRenderer(this.options);
    this.size = this.options.size;
    this.render();
    console.log("ici??? or here");
  }
  get ctx() {
    return this.renderer.ctx;
  }
  center() {
    this.origin = this.size.clone().divide(2);
    this.ctx.translate(this.origin.x, this.origin.y);
  }
  render() {
    this.ctx.clearRect(0, 0, this.size.x, this.size.y);
    this.node.appendChild(this.renderer.domElement);
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
class CameraManager {
  constructor(scene, renderer) {
    __privateAdd(this, _activeCamera, null);
    __publicField(this, "cameras", {});
    this.renderer = renderer;
    this.scene = scene;
  }
  get activeCamera() {
    return this.cameras[__privateGet(this, _activeCamera)];
  }
  activateCamera(name) {
    __privateSet(this, _activeCamera, name);
  }
  addCamera(name, camera) {
    this.cameras[name] = camera;
  }
}
_activeCamera = new WeakMap();
const Events$1 = {
  INITIALIZED: "INITIALIZED"
};
class Project {
  constructor(options) {
    __publicField(this, "scenes", []);
    __publicField(this, "options", {
      name: "Skava - Snake",
      mountOn: "#app",
      isDev: false
    });
    __publicField(this, "loopCallback");
    __publicField(this, "observer");
    this.options = { ...this.options, ...options };
    this.observer = new Entity.Observer(Object.keys(Events$1));
    setTimeout(this.setup.bind(this), 0);
  }
  addScene(scene, options) {
    scene.createViewer(this.options.mountOn);
    Promise.resolve(scene.setup()).then(() => {
      scene.setupFinished = true;
    });
    this.scenes.push(scene);
  }
  getScene(sceneName) {
    return this.scenes.find((scene) => scene.name === sceneName);
  }
  setup() {
    throw new ImplementError.ImplementError("setup", "Project");
  }
  update(deltaTime, currentTime) {
    this.scenes.forEach((scene) => scene.update(deltaTime, currentTime));
    this.loop(deltaTime, currentTime);
  }
  loop(deltaTime, currentTime) {
  }
}
class Scene {
  constructor(name) {
    __publicField(this, "setupFinished", false);
    __publicField(this, "name", "");
    __publicField(this, "entityManager", null);
    __publicField(this, "viewer");
    __privateAdd(this, _loopHasBeenWarned, false);
    this.name = name;
    this.entityManager = new EntityManager(this);
  }
  createViewer(mountOn, options) {
    let app = document.querySelector(mountOn);
    this.viewer = new Viewer2d(app, {
      size: new Vector2.Vector2(window.innerWidth, window.innerHeight),
      ...options
    });
  }
  add(entity, executeSetup) {
    this.entityManager.add(entity, executeSetup);
  }
  remove(entityToDelete) {
    this.entityManager.delete(entityToDelete);
  }
  update(deltaTime, currentTime) {
    var _a;
    if (this.setupFinished) {
      (_a = this.viewer) == null ? void 0 : _a.refresh(deltaTime);
      this.loop(deltaTime, currentTime);
      this.entityManager.update(deltaTime, currentTime);
    }
  }
  setup() {
    console.warn(
      `"setup()" method is not implemented on the scene ${this.constructor.name}`
    );
  }
  loop(deltaTime, currentTime) {
    if (!__privateGet(this, _loopHasBeenWarned)) {
      __privateSet(this, _loopHasBeenWarned, true);
      console.warn(
        `"loop()" method is not implemented on the scene ${this.constructor.name}`
      );
    }
  }
}
_loopHasBeenWarned = new WeakMap();
const Events = {
  INITIALIZED: "INITIALIZED"
};
class Engine {
  constructor() {
    __publicField(this, "project");
    __publicField(this, "observer");
    __publicField(this, "lastUpdate", 0);
    __publicField(this, "fpsMeter");
    __publicField(this, "i", 0);
    this.observer = new Entity.Observer(Events);
    this.observer.$on(Events.INITIALIZED, this.loop.bind(this));
    this.timer = new Utils.Timer();
    this.fpsMeter = document.createElement("div");
    this.fpsMeter.classList.add("fps-meter");
    this.fpsMeter.setAttribute("last-update", "0");
    document.body.appendChild(this.fpsMeter);
  }
  setProject(project) {
    this.project = project;
    this.observer.$emit(Events.INITIALIZED);
  }
  async loop(currentTime = 0) {
    let deltaTimeFps = (currentTime - parseFloat(this.fpsMeter.getAttribute("last-update"))) / 1e3;
    let deltaTime = (currentTime - this.lastUpdate) / 1e3;
    if (deltaTimeFps > 0.5) {
      this.fpsMeter.innerText = (1 / deltaTime).toFixed();
      this.fpsMeter.setAttribute("last-update", currentTime + "");
    }
    if (this.project) {
      this.project.update(deltaTime, currentTime);
    }
    this.lastUpdate = currentTime;
    window.requestAnimationFrame(this.loop.bind(this));
  }
}
const _EntityManager = class _EntityManager {
  constructor(scene) {
    __publicField(this, "observer", new Entity.Observer(_EntityManager.EVENTS));
    __publicField(this, "entities", []);
    __publicField(this, "scene", null);
    if (!scene) {
      throw new UndefinedError.UndefinedError("scene");
    }
    this.scene = scene;
  }
  delete(entityToDelete) {
    let foundIndex = this.entities.findIndex((entity) => {
      if (typeof entityToDelete === "string") {
        return entity.uuid === entityToDelete;
      } else if (entityToDelete instanceof Entity.Entity) {
        return entity === entityToDelete;
      }
      return false;
    });
    if (foundIndex !== -1) {
      let entityFound = this.entities[foundIndex];
      this.observer.$emit(_EntityManager.EVENTS.ENTITY_DELETED, entityFound);
      for (let i = entityFound.components.length - 1; i >= 0; i--) {
        entityFound.components.splice(i, 1);
      }
      delete this.entities[foundIndex];
      this.entities.splice(foundIndex, 1);
    }
  }
  add(entity, executeSetup = true) {
    entity.scene = this.scene;
    if (entity.children) {
      entity.children.forEach((child) => this.add(child));
    }
    if (executeSetup) {
      Promise.resolve(entity.setup()).then(() => {
        entity.observer.$emit("SETUP_FINISHED");
      });
    }
    this.entities.push(entity);
    this.observer.$emit(_EntityManager.EVENTS.ENTITY_ADDED, entity);
  }
  update(deltaTime, currentTime) {
    this.entities.forEach((entity) => entity.update(deltaTime, currentTime));
  }
};
__publicField(_EntityManager, "EVENTS", Object.freeze({
  ENTITY_ADDED: "ENTITY_ADDED",
  ENTITY_DELETED: "ENTITY_DELETED"
}));
let EntityManager = _EntityManager;
class CanvasRenderer {
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "domElement");
    this.options = options;
    this.createDomElement();
    console.log("ici???");
  }
  get ctx() {
    var _a;
    return (_a = this.domElement) == null ? void 0 : _a.getContext("2d");
  }
  createDomElement() {
    this.domElement = document.createElement("canvas");
    this.domElement.width = this.options.size.x;
    this.domElement.height = this.options.size.y;
  }
}
exports.Entity = Entity.Entity;
exports.Observer = Entity.Observer;
exports.Component = Vector2.Component;
exports.RGB = Vector2.RGB;
exports.Rotation = Vector2.Rotation;
exports.Vector2 = Vector2.Vector2;
exports.Controls = Controls.Controls;
exports.Application = Application;
exports.CameraManager = CameraManager;
exports.CanvasRenderer = CanvasRenderer;
exports.Engine = Engine;
exports.EntityManager = EntityManager;
exports.Project = Project;
exports.Scene = Scene;
exports.Viewer = Viewer;
exports.Viewer2d = Viewer2d;
//# sourceMappingURL=Core.cjs.js.map
