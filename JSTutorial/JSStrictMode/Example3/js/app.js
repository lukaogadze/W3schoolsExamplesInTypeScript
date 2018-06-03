document.body.onload = function () {
    x = 3.14;        // This will not cause an error.
    myFunction();

    function myFunction() {
        "use strict";
        y = 3.14;    // This will cause an error (y is not defined).
    }
};
//# sourceMappingURL=app.js.map