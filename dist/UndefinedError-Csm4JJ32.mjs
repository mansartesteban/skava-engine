const s = {
  UNDEFINED: "'%1' could not be undefined."
};
class t extends Error {
  constructor(e) {
    let r = s.UNDEFINED.replace("%1", e);
    super(r), this.name = self.toString();
  }
}
export {
  t as U
};
