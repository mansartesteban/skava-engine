import ImplementError from "@errors/ImplementError";

class Command {
  key;

  execute() {
    throw new ImplementError("execute", "Command");
  }
}

export default Command;
