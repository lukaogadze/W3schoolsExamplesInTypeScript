"use strict";
document.body.onload = function () {
    var msg = typeof undefined + "<br>" + typeof null + "<br><br>" + (null === undefined) + "<br>" + (null == undefined);
    document.getElementById("demo").innerHTML = msg;
};
//# sourceMappingURL=app.js.map