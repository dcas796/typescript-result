"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result(type, value) {
        this.type = type;
        this.value = value;
    }
    Result.success = function (value) {
        return new Result(Result.Type.success, value);
    };
    Result.error = function (error) {
        return new Result(Result.Type.error, error);
    };
    return Result;
}());
exports.Result = Result;
(function (Result) {
    var Type;
    (function (Type) {
        Type[Type["success"] = 0] = "success";
        Type[Type["error"] = 1] = "error";
    })(Type = Result.Type || (Result.Type = {}));
})(Result = exports.Result || (exports.Result = {}));
exports.Result = Result;
