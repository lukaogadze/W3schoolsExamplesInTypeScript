"use strict";
document.body.onload = function () {
    var d = new Date();
    d.setDate(d.getDate() + 50);
    document.getElementById("demo").innerHTML = d.toString();
};
//# sourceMappingURL=app.js.map