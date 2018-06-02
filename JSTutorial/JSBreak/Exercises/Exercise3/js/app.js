"use strict";
// Use the continue statement to skip the numbers 5 AND 7 in the loop.
// var text = "";
// var i;
// for (i = 1; i < 10; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }
document.body.onload = function () {
    for (var i = 1; i < 10; i++) {
        if (i === 5 || i === 7) {
            continue;
        }
        document.getElementById("demo").innerHTML += i + "<br>";
    }
};
//# sourceMappingURL=app.js.map