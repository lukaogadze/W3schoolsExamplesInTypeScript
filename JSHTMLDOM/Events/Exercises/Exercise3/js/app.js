"use strict";
// Use the DOM to assign an onclick event to the <button> element. Clicking the button should trigger displayDate().
window.onload = function () {
    var span = document.getElementsByTagName("span")[0];
    span.onmouseover = function () {
        this.style.color = "red";
    };
};
//# sourceMappingURL=app.js.map