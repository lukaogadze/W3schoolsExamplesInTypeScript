"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1").innerHTML = fruits.toString();
    document.getElementById("demo2").innerHTML = fruits.unshift("Lemon").toString();
    document.getElementById("demo3").innerHTML = fruits.toString();
};
//# sourceMappingURL=app.js.map