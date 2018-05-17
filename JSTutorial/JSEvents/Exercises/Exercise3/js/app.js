"use strict";
// The <span> element should do something when someone moves the mouse over it. Try to fix it!
document.body.onload = function () {
    var span = document.getElementsByTagName("span")[0];
    span.onmouseover = function () {
        this.style.color = "red";
    };
};
//# sourceMappingURL=app.js.map