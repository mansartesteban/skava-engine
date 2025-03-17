const r = {
  IMPLEMENT: "You must implement '%1' method in classes which extends '%2'."
};
class o extends Error {
  constructor(e, s) {
    let t = r.IMPLEMENT.replace("%1", e).replace("%2", s);
    super(t), this.name = self.toString();
  }
}
export {
  o as I
};
