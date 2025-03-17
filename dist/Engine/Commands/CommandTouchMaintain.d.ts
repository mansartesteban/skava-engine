export default CommandTouchMaintain;
declare class CommandTouchMaintain extends Command {
    started: boolean;
    release(...parameters: any[]): void;
    execute(...parameters: any[]): void;
}
import Command from "./Command";
