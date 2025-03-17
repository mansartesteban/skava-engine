export namespace ERRORS {
    let IMPLEMENT: string;
}
export default ImplementError;
declare class ImplementError extends Error {
    constructor(method: any, context: any);
}
