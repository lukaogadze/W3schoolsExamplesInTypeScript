"use strict";
document.body.onload = function () {
    var txt = "";
    var person = { fname: "John", lname: "Doe", age: 25 };
    var x;
    for (x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("demo").innerHTML = txt;
};
//# sourceMappingURL=app.js.map