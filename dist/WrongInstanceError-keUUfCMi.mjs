const n = {
  IMPLEMENT: "The given parameter is not of type '%1'. %2 given."
};
class o extends Error {
  constructor(e, r) {
    let t = n.IMPLEMENT.replace("%1", r.name).replace("%2", e.constructor.name);
    super(t), this.name = self.toString();
  }
}
export {
  o as W
};
