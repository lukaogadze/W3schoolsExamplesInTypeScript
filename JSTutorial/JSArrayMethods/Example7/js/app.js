"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var demo = document.getElementById("demo1");
    demo.innerHTML = fruits.toString();
    fruits.shift();
    document.getElementById("demo2").innerHTML = fruits.toString();
};
//# sourceMappingURL=app.js.map