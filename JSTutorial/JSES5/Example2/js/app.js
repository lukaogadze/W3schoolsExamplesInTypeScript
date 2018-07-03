"use strict";
window.onload = function () {
    function myFunction() {
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        var x = document.getElementById("demo");
        x.innerHTML = Array.isArray(fruits).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map