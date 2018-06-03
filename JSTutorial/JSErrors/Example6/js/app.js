"use strict";
document.body.onload = function () {
    try {
        eval("alert('Hello)");
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.name;
    }
};
//# sourceMappingURL=app.js.map