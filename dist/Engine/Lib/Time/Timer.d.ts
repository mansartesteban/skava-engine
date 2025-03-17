export default Timer;
declare class Timer {
    executionStack: any[];
    get delta(): number;
    reset(): void;
    executeAfter(callback: any, delay: any): void;
    executeEach(delay: any, callback: any): void;
    watchCallbacks(): void;
    update(): void;
    #private;
}
