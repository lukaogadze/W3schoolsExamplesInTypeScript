"use strict";
// The do/while loop should output 0 1 2 3 4. Try to fix it!
// var i = 0;
// var i = 0;
// do {
//     document.getElementById("demo").innerHTML += i + "<br>";
//     i++;
// }
// while ()  
document.body.onload = function () {
    var i = 0;
    do {
        document.getElementById("demo").innerHTML += i + "<br>";
        i++;
    } while (i < 5);
};
//# sourceMappingURL=app.js.map