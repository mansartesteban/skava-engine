var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const _Time = class _Time {
  static update() {
    let now = performance.now();
    _Time.deltaTime = now - _Time.lastUpdate;
    this.lastUpdate = now;
  }
  static now() {
    return performance.now();
  }
  static delta(time, lastTime) {
    lastTime = lastTime ?? _Time.lastUpdate;
    return Math.abs(lastTime - time);
  }
};
__publicField(_Time, "OneMilisecond", 1);
__publicField(_Time, "OneSecond", _Time.OneMilisecond * 1e3);
__publicField(_Time, "OneMinute", _Time.OneSecond * 60);
__publicField(_Time, "OneHour", _Time.OneMinute * 60);
__publicField(_Time, "deltaTime", 0);
__publicField(_Time, "lastUpdate", performance.now());
let Time = _Time;
export {
  Time as T
};
//# sourceMappingURL=Time-D6jb6SoV.mjs.map
