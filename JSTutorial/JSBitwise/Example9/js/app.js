"use strict";
document.body.onload = function () {
    function bin2dec(bin) {
        return parseInt(bin, 2).toString(10);
    }
    document.getElementById("demo").innerHTML = bin2dec("101");
};
//# sourceMappingURL=app.js.map