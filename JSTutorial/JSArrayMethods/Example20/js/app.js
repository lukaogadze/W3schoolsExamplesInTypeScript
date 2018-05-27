"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(3);
    document.getElementById("demo").innerHTML = fruits.toString() + "<br><br>" + citrus.toString();
};
//# sourceMappingURL=app.js.map