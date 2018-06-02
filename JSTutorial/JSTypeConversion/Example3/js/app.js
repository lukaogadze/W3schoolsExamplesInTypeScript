"use strict";
document.body.onload = function () {
    var fruits = [
        "Banana",
        "Orange",
        "Apple",
        "Mango"
    ];
    function isArray(myArray) {
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
    document.getElementById("demo").innerHTML = isArray(fruits).toString();
};
//# sourceMappingURL=app.js.map