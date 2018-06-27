"use strict";
window.onload = function () {
    function add() {
        var counter = 0;
        function plus() { counter += 1; }
        plus();
        return counter;
    }
    document.getElementById("demo").innerHTML = add().toString();
};
//# sourceMappingURL=app.js.map