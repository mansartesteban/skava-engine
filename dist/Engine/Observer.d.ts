export default Observer;
declare class Observer {
    constructor(events?: {});
    observers: any[];
    events: {};
    $on(events: any, callback: any): this;
    unset(observer: any): this;
    $emit(event: any, ...args: any[]): Promise<any[]>;
    isValidEvent(event: any): void;
}
