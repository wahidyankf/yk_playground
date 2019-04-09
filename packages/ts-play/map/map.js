"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map = function (iterFunction, arrayInput) {
    var tempArray = [];
    for (var i_1 = 0; i_1 < arrayInput.length; i_1++) {
        tempArray.push(iterFunction(arrayInput[i_1]));
    }
    return arrayInput.map(iterFunction);
};
exports.default = map;
