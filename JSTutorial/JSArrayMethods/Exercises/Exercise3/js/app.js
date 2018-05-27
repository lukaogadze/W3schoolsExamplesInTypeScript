"use strict";
// Use the splice() method to remove "Orange" and "Apple" from fruits.
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.splice(1, 2);
    document.getElementById("demo").innerHTML = fruits.toString();
};
//# sourceMappingURL=app.js.map