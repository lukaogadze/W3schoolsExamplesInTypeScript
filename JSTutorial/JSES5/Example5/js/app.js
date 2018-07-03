"use strict";
window.onload = function () {
    function myFunction(value) {
        return value > 18;
    }
    var numbers = [4, 9, 16, 25];
    var over18 = numbers.filter(myFunction);
    document.getElementById("demo").innerHTML = over18.toString();
};
//# sourceMappingURL=app.js.map