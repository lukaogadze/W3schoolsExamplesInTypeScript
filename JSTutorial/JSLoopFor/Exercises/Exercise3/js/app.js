"use strict";
// Make the loop start counting from 5. Count up to (including) 50, and count only every fifth number.
// var i;
// for (i = 0; i < 10; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }
document.body.onload = function () {
    for (var i = 5; i <= 50; i += 5) {
        document.getElementById("demo").innerHTML += i + "<br>";
    }
};
//# sourceMappingURL=app.js.map