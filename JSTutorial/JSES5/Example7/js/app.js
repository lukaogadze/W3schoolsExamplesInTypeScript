"use strict";
window.onload = function () {
    function myFunction(value) {
        return value > 18;
    }
    var numbers = [4, 9, 16, 25, 29];
    var allOver18 = numbers.every(myFunction);
    document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;
};
//# sourceMappingURL=app.js.map