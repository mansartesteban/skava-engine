import { ImplementError } from "@/Bundles/Errors";

class Command {
  key;

  execute() {
    throw new ImplementError("execute", "Command");
  }
}

export default Command;
