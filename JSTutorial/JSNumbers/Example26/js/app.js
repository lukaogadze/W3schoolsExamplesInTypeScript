"use strict";
document.body.onload = function () {
    var myNumber = 128;
    var myNumberHex = myNumber.toString(16);
    var myNumberOct = myNumber.toString(8);
    var myNumberBin = myNumber.toString(2);
    var msg = "128 = " + myNumber + " Decimal<br>" + myNumberHex + " Hexadecimal<br>" + myNumberOct + " Octal<br>" + myNumberBin + " Binary";
    document.getElementById("demo").innerHTML = msg;
};
//# sourceMappingURL=app.js.map