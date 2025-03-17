const ERRORS = {
  UNDEFINED: "'%1' could not be undefined."
};
class UndefinedError extends Error {
  constructor(variable) {
    let message = ERRORS.UNDEFINED.replace("%1", variable);
    super(message);
    this.name = self.toString();
  }
}
export {
  UndefinedError as U
};
//# sourceMappingURL=UndefinedError-Lw1RlA1b.mjs.map
