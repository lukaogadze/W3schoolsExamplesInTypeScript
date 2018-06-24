"use strict";
window.onload = function () {
    function myFunction(a, b) {
        console.log(a, b);
        return arguments.length;
    }
    document.getElementById("demo").innerHTML = myFunction(3, 4).toString();
};
//# sourceMappingURL=app.js.map