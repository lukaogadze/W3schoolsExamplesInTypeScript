"use strict";
window.onload = function () {
    var x = document.querySelectorAll("p.intro");
    document.getElementById("demo").innerHTML =
        'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
};
//# sourceMappingURL=app.js.map