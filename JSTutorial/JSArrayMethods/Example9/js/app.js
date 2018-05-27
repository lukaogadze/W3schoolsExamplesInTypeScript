"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var demo = document.getElementById("demo");
    demo.innerHTML = fruits.toString();
    document.getElementsByTagName("button")[0].onclick = function () {
        fruits.unshift("Lemon");
        demo.innerHTML = fruits.toString();
    };
};
//# sourceMappingURL=app.js.map