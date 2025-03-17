export namespace ERRORS {
    let UNDEFINED: string;
}
export default UndefinedError;
declare class UndefinedError extends Error {
    constructor(variable: any);
}
