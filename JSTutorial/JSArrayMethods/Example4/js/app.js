"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1").innerHTML = fruits.toString();
    var myFruit = fruits.pop();
    document.getElementById("demo2").innerHTML = myFruit;
    document.getElementById("demo3").innerHTML = fruits.toString();
};
//# sourceMappingURL=app.js.map