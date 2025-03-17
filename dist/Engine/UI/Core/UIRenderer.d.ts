export default UIRenderer;
declare class UIRenderer {
    uiComponent: any;
    datas: any;
    setup(): void;
    loop(): void;
    render(): void;
}
