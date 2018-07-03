"use strict";
window.onload = function () {
    var txt = "";
    var numbers = [4, 9, 16, 25];
    numbers.forEach(myFunction);
    document.getElementById("demo").innerHTML = txt;
    function myFunction(item) {
        txt = txt + item + "<br>";
    }
};
//# sourceMappingURL=app.js.map