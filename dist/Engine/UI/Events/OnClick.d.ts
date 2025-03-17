export default OnClick;
declare class OnClick extends CommandClick {
    constructor(elements: any);
    elements: any;
    execute({ mouse }: {
        mouse: any;
    }): void;
}
import CommandClick from "@/Engine/Commands/CommandClick";
