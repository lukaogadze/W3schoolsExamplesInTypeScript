"use strict";
document.body.onload = function () {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("demo").innerHTML = months[d.getMonth()];
};
//# sourceMappingURL=app.js.map