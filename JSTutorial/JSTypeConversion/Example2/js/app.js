"use strict";
document.body.onload = function () {
    var msg = "john".constructor + "<br>" + (3.14).constructor + "<br>" + false.constructor + "<br>" + [1, 2, 3, 4].constructor + "<br>" + { name: "john", age: 34 }.constructor + "<br>" + new Date().constructor + "<br>" + function () { }.constructor;
    document.getElementById("demo").innerHTML = msg;
};
//# sourceMappingURL=app.js.map