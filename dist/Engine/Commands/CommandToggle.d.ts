export default CommandToggle;
declare class CommandToggle extends Command {
    executed: boolean;
    release(): void;
}
import { Command } from "@/Bundles/Core/Commands";
