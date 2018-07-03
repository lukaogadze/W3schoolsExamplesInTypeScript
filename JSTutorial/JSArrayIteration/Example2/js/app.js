"use strict";
window.onload = function () {
    var numbers1 = [4, 9, 16, 25];
    var numbers2 = numbers1.map(myFunction);
    document.getElementById("demo").innerHTML = numbers2.toString();
    function myFunction(value) {
        return value * 2;
    }
};
//# sourceMappingURL=app.js.map