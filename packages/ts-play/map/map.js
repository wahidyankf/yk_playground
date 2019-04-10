"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(iterFunction, arrayInput) {
    var result = [];
    for (var i_1 = 0; i_1 < arrayInput.length; i_1++) {
        result.push(iterFunction(arrayInput[i_1]));
    }
    return result;
}
exports.default = map;
