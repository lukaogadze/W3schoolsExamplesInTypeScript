"use strict";
document.body.onload = function () {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.lastIndexOf("locate");
    document.getElementById("demo").innerHTML = pos.toString();
};
//# sourceMappingURL=app.js.map