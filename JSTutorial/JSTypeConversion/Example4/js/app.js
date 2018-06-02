"use strict";
document.body.onload = function () {
    var fruits = [
        "Banana",
        "Orange",
        "Apple",
        "Mango"
    ];
    function isArray(myArray) {
        return myArray.constructor === Array;
    }
    document.getElementById("demo").innerHTML = isArray(fruits).toString();
};
//# sourceMappingURL=app.js.map