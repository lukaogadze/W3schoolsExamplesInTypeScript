"use strict";
document.body.onload = function () {
    try {
        decodeURI("%%%");
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.name;
    }
};
//# sourceMappingURL=app.js.map