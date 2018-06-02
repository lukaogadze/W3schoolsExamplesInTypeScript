"use strict";
// Use the break statement to stop the loop at 5.
// var text = "";
// var i;
// for (i = 1; i < 10; i++) {
//     document.getElementById("demo").innerHTML += i + "<br>";
// }
document.body.onload = function () {
    for (var i = 1; i < 10; i++) {
        if (i === 5) {
            break;
        }
        document.getElementById("demo").innerHTML += i + "<br>";
    }
};
//# sourceMappingURL=app.js.map