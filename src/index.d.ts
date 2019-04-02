// Type definitions for timedout-promise-error
declare function timedoutPromiseError<T>(promise: Promise<T>, ms: number, error: object): Promise<T>;
export = timedoutPromiseError;
