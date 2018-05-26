"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[6] = "Lemon";
    var text = "";
    for (var i = 0; i < fruits.length; i++) {
        text += fruits[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map