"use strict";
// Make the loop start counting from 5. Count up to (including) 50 and count only every fifth number.
// var i = 0;
// while (i < 10) {
//     document.getElementById("demo").innerHTML += i + "<br>";
//     i++;
// }
document.body.onload = function () {
    var i = 5;
    while (i <= 50) {
        document.getElementById("demo").innerHTML += i + "<br>";
        i += 5;
    }
};
//# sourceMappingURL=app.js.map