"use strict";
document.body.onload = function () {
    function myFunction() {
        var str = "a,b,c,d,e,f";
        var arr = str.split(",");
        document.getElementById("demo").innerHTML = arr[0];
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map