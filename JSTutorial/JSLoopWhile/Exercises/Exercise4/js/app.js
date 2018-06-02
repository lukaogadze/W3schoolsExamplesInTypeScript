"use strict";
// Make the loop start counting downwards from 10 and stop at 1.
// The output should be 10 9 8 7 6 5 4 3 2 1 with line breaks.
// var i = 0;
// while (i < 10) {
//     document.getElementById("demo").innerHTML += i + "<br>";
//     i++;
// }
document.body.onload = function () {
    var i = 10;
    while (i > 0) {
        document.getElementById("demo").innerHTML += i + "<br>";
        i--;
    }
};
//# sourceMappingURL=app.js.map