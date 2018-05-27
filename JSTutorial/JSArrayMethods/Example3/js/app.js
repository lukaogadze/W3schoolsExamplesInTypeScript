"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1").innerHTML = fruits.toString();
    fruits.pop();
    document.getElementById("demo2").innerHTML = fruits.toString();
};
//# sourceMappingURL=app.js.map