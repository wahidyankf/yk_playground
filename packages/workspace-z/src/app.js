"use strict";
var arr = [10, 12, 15, 21];
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
};
for (var i = 0; i < arr.length; i++) {
    _loop_1(i);
}
