"use strict";
document.body.onload = function () {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("demo").innerHTML = days[d.getDay()];
};
//# sourceMappingURL=app.js.map