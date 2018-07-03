"use strict";
window.onload = function () {
    var txt = "";
    var numbers = [4, 9, 16, 25];
    function myFunction(item) {
        txt = txt + item + "<br>";
    }
    numbers.forEach(myFunction);
    document.getElementById("demo").innerHTML = txt;
};
//# sourceMappingURL=app.js.map