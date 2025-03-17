import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandOnce extends Command {
  executed = false;

  execute() {
    throw new ImplementError("execute", "CommandOnce");
  }
}

export default CommandOnce;
