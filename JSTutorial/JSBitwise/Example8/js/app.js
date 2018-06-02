"use strict";
document.body.onload = function () {
    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    document.getElementById("demo").innerHTML = dec2bin(-5);
};
//# sourceMappingURL=app.js.map