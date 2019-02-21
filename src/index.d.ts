// Type definitions for timedout-promise-error
export function timedoutPromiseError<T>(promise: Promise<T>, ms: number, error: object): Promise<T>;