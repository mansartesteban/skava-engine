const g = (e) => {
  let p = Object.getPrototypeOf(e), r = Object.getOwnPropertyDescriptors(p);
  return Object.keys(r).filter(
    (t) => typeof r[t].get == "function"
  ).reduce((t, o) => (t[o] = e[o], t), {});
};
export {
  g as getProperties
};
