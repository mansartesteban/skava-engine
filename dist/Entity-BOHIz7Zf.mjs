var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { C as Component } from "./Vector2-Dy-12kp6.mjs";
import "./Time-D6jb6SoV.mjs";
import { v4 } from "uuid";
import { T as TransformComponent } from "./TransformComponent-bBQZJGxr.mjs";
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
//# sourceMappingURL=Entity-BOHIz7Zf.mjs.map
