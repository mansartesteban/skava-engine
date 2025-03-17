export namespace ERRORS {
    let IMPLEMENT: string;
}
export default WrongInstanceError;
declare class WrongInstanceError extends Error {
    constructor(parameter: any, constructor: any);
}
