"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var demo = document.getElementById("demo");
    demo.innerHTML = fruits.join(",");
    function myFunction() {
        fruits[fruits.length] = "Lemon";
        demo.innerHTML = fruits.join(",");
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map