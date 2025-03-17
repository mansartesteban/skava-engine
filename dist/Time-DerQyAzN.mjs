var o = Object.defineProperty;
var d = (s, a, e) => a in s ? o(s, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[a] = e;
var n = (s, a, e) => d(s, typeof a != "symbol" ? a + "" : a, e);
const t = class t {
  static update() {
    let a = performance.now();
    t.deltaTime = a - t.lastUpdate, this.lastUpdate = a;
  }
  static now() {
    return performance.now();
  }
  static delta(a, e) {
    return e = e ?? t.lastUpdate, Math.abs(e - a);
  }
};
n(t, "OneMilisecond", 1), n(t, "OneSecond", t.OneMilisecond * 1e3), n(t, "OneMinute", t.OneSecond * 60), n(t, "OneHour", t.OneMinute * 60), n(t, "deltaTime", 0), n(t, "lastUpdate", performance.now());
let c = t;
export {
  c as T
};
