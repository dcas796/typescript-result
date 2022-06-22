export class Result<T> {
    private constructor(
        public readonly type: Result.Type, 
        public readonly value: T | Error
        ) {}

    static success<T>(value: T): Result<T> {
        return new Result(Result.Type.success, value)
    }

    static error<T>(error: Error): Result<T> {
        return new Result<T>(Result.Type.error, error)
    }
}

export namespace Result {
    export enum Type {
        success,
        error
    }
}

export default Result;
