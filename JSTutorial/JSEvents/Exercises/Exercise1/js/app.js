"use strict";
// The <p> element should do something when someone clicks on it. Try to fix it!
document.body.onload = function () {
    var demo = document.getElementsByTagName("p")[0];
    demo.onclick = function () {
        this.innerHTML = "GOOD JOB!";
    };
};
//# sourceMappingURL=app.js.map