export default Time;
declare class Time {
    static OneMilisecond: number;
    static OneSecond: number;
    static OneMinute: number;
    static OneHour: number;
    static deltaTime: number;
    static lastUpdate: number;
    static update(): void;
    static now(): number;
    static delta(time: any, lastTime: any): number;
}
