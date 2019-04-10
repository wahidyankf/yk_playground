"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(fn, xs) {
    return xs.reduce(function (acc, x) {
        acc.push(fn(x));
        return acc;
    }, []);
}
exports.default = map;
