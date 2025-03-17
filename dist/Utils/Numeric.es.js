const s = (t = 0, n = 4) => {
  let r = Math.pow(10, n), a = n < 0 ? t : 0.01 / r + t;
  return Math.round(a * r) / r;
}, c = (t = 0, n = 0, r = 0, a = !1) => a ? t > n && t < r : t >= n && t <= r, h = (t = 0, n = 1) => Math.floor(Math.random() * (n - t + 1)) + t, M = (t = 0, n = 0, r = 0, a = 0, o = 0) => a + (o - a) / (r - n) * (t - n), u = (t = 0, n = 0, r = 0) => t < n ? n : t > r ? r : t, e = (t = 0, n = 0, r = 0) => Math.min(Math.max(t, n), r), d = () => Math.floor(Math.random() * 16777215).toString(16), l = (t = 0) => t * Math.PI / 180, g = (t = 0) => t * (180 / Math.PI), p = (t, n, r) => (r = e(r, 0, 1), (1 - r) * t + r * n);
export {
  e as clamp,
  l as degreesToRadians,
  c as isBetween,
  p as lerp,
  M as mapRange,
  u as minMax,
  s as num,
  g as radiansToDegrees,
  h as random,
  d as randomHexadecimal
};
