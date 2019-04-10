"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(fn) {
    return function (xs) {
        return xs.reduce(function (acc, x) {
            if (fn(x)) {
                acc.push(x);
            }
            return acc;
        }, []);
    };
}
exports.default = filter;
