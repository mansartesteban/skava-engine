var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { C as Component } from "./Vector2-BXEmxqj7.mjs";
import "./Time-D6jb6SoV.mjs";
import { T as TransformComponent } from "./TransformComponent-Wh2kRWxM.mjs";
class Observer {
  constructor(events = {}) {
    __publicField(this, "observers");
    __publicField(this, "events", {});
    this.observers = [];
    this.events = events;
  }
  $on(events, callback) {
    if (typeof events == "string") {
      events = [events];
    }
    events.forEach((event) => {
      this.isValidEvent(event);
      this.observers.push({
        event,
        callback
      });
    });
    return this;
  }
  unset(observer) {
    this.observers = this.observers.filter(function(item) {
      if (item !== observer) {
        return item;
      }
    });
    return this;
  }
  $emit(event, ...args) {
    let promises = [];
    this.observers.filter((observer) => observer.event === event).forEach((observer) => {
      promises.push(Promise.resolve(observer.callback(...args)));
    });
    return Promise.all(promises);
  }
  isValidEvent(event) {
    if (this.events) {
      if (!Object.keys(this.events).includes(event)) {
        throw new Error(`Event '${event}' is not a valid event`);
      }
    }
  }
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function v4(options, buf, offset) {
  var _a;
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? ((_a = options.rng) == null ? void 0 : _a.call(options)) ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
class Entity {
  constructor(...components) {
    __publicField(this, "uuid", v4());
    __publicField(this, "components", /* @__PURE__ */ new Map());
    __publicField(this, "transform", new TransformComponent());
    __publicField(this, "scene");
    __publicField(this, "observer", new Observer({ SETUP_FINISHED: "SETUP_FINISHED" }));
    components.forEach((component) => this.addComponent(component));
  }
  addComponent(component) {
    component.entity = this;
    component.setup();
    this.components.set(component.constructor, component);
  }
  removeComponent(component) {
    this.components.delete(component.constructor);
  }
  getComponent(component) {
    let componentClass = component instanceof Component ? component.constructor : component;
    return this.components.get(componentClass);
  }
  update(deltaTime, currentTime) {
    this.loop(deltaTime, currentTime);
    this.components.forEach((component) => {
      component.updateComponent(deltaTime, currentTime);
    });
  }
  loop(deltaTime, currentTime) {
  }
}
export {
  Entity as E,
  Observer as O
};
//# sourceMappingURL=Entity-7bmRFd6H.mjs.map
