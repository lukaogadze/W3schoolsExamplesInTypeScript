"use strict";
document.body.onload = function () {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.length.toString();
    var text = "<ul>";
    for (var i = 0; i < fruits.length; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map