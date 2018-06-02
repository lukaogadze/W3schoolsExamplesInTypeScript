"use strict";
document.body.onload = function () {
    var myDate = new Date();
    function isDate(myDate) {
        return myDate.constructor === Date;
    }
    document.getElementById("demo").innerHTML = isDate(myDate).toString();
};
//# sourceMappingURL=app.js.map