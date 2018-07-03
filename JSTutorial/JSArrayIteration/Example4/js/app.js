"use strict";
window.onload = function () {
    function myFunction(total, value) {
        return total + value;
    }
    var numbers = [4, 9, 16, 25];
    var sum = numbers.reduce(myFunction);
    document.getElementById("demo").innerHTML = "The sum is " + sum;
};
//# sourceMappingURL=app.js.map