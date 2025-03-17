"use strict";
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
exports.UndefinedError = UndefinedError;
//# sourceMappingURL=UndefinedError-CWfMhOd2.js.map
