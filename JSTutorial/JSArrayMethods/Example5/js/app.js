"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var demo = document.getElementById("demo");
    demo.innerHTML = fruits.toString();
    function myFunction() {
        fruits.push("Kiwi");
        demo.innerHTML = fruits.toString();
    }
    ;
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map