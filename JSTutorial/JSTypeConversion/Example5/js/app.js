"use strict";
document.body.onload = function () {
    var d = new Date();
    function isDate(myDate) {
        return myDate.constructor.toString().indexOf("Date") > -1;
    }
    document.getElementById("demo").innerHTML = isDate(d).toString();
};
//# sourceMappingURL=app.js.map