export declare class Result<T> {
    readonly type: Result.Type;
    readonly value: T | Error;
    private constructor();
    static success<T>(value: T): Result<T>;
    static error<T>(error: Error): Result<T>;
}
export declare namespace Result {
    enum Type {
        success = 0,
        error = 1
    }
}
declare const _default: {
    Result: typeof Result;
};
export default _default;
