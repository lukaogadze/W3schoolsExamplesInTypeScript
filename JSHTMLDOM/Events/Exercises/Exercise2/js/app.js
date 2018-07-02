"use strict";
// Use the DOM to assign an onclick event to the <button> element. Clicking the button should trigger displayDate().
window.onload = function () {
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
    document.getElementById("myBtn").onclick = displayDate;
};
//# sourceMappingURL=app.js.map