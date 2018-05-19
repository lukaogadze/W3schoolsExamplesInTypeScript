"use strict";
document.body.onload = function () {
    var str = "Hello";
    var arr = str.split("");
    var text = "";
    for (var i = 0; i < arr.length; i++) {
        text += arr[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
};
//# sourceMappingURL=app.js.map