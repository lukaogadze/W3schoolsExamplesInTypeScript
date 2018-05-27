"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var demo = document.getElementById("demo1");
    demo.innerHTML = fruits.toString();
    function myFunction() {
        document.getElementById("demo2").innerHTML = fruits.push("Kiwi").toString();
        demo.innerHTML = fruits.toString();
    }
    ;
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map