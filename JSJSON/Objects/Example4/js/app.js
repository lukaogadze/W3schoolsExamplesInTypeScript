"use strict";
window.onload = function () {
    var myObj = { "name": "John", "age": 30, "car": null };
    for (var x in myObj) {
        document.getElementById("demo").innerHTML += myObj[x] + "<br>";
    }
};
//# sourceMappingURL=app.js.map