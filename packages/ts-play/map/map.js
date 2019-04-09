"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map = function (iterFunction, arrayInput) {
    var tempArray = [];
    for (var i = 0; i < arrayInput.length; i++) {
        tempArray.push(iterFunction(arrayInput[i]));
    }
    return arrayInput.map(iterFunction);
};
exports.default = map;
