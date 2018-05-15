"use strict";
document.body.onload = function () {
    // we are declaring variable x to make this valid typescript code
    var x;
    var msg = typeof "john" + "<br>" + typeof 3.14 + "<br>" + typeof true + "<br>" + typeof false + "<br>" + typeof x;
    document.getElementById("demo").innerHTML = msg;
};
//# sourceMappingURL=app.js.map