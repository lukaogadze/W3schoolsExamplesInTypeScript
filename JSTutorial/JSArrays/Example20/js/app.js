"use strict";
document.body.onload = function () {
    function isArray(myArray) {
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = isArray(fruits).toString();
};
//# sourceMappingURL=app.js.map