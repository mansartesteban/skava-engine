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
var _startTime, _time;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Time = require("./Time-BnYKtbMg.js");
class Timer {
  constructor() {
    __privateAdd(this, _startTime);
    __privateAdd(this, _time);
    __publicField(this, "executionStack", []);
    __privateSet(this, _startTime, performance.now());
    __privateSet(this, _time, __privateGet(this, _startTime));
  }
  get delta() {
    return Time.Time.delta(__privateGet(this, _startTime), performance.now());
  }
  reset() {
    __privateSet(this, _startTime, performance.now());
    __privateSet(this, _time, __privateGet(this, _startTime));
  }
  executeAfter(callback, delay) {
    this.executionStack.push({
      delay,
      repeat: false,
      callback,
      lastCall: __privateGet(this, _time)
    });
  }
  executeEach(delay, callback) {
    this.executionStack.push({
      delay,
      repeat: true,
      callback,
      lastCall: __privateGet(this, _time)
    });
  }
  watchCallbacks() {
    let itemsToDelete = [];
    this.executionStack.forEach((item, index) => {
      if (!item.repeat) {
        if (this.delta >= item.delay) {
          item.callback();
        }
        itemsToDelete.push(index);
      } else {
        if (Time.Time.delta(__privateGet(this, _time), item.lastCall) >= item.delay) {
          item.callback();
          item.lastCall = __privateGet(this, _time);
        }
      }
    });
    itemsToDelete.forEach((_, index) => this.executionStack.splice(index, 1));
  }
  update() {
    __privateSet(this, _time, performance.now());
    this.watchCallbacks();
  }
}
_startTime = new WeakMap();
_time = new WeakMap();
exports.Time = Time.Time;
exports.Timer = Timer;
//# sourceMappingURL=Utils.cjs.js.map
