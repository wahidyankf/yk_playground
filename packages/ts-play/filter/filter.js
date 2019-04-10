"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(fn, xs) {
    var result = [];
    for (var i_1 = 0; i_1 < xs.length; i_1++) {
        if (fn(xs[i_1]) === true) {
            result.push(xs[i_1]);
        }
    }
    return result;
}
exports.default = filter;
