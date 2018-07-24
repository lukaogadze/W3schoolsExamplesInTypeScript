"use strict";
window.onload = function () {
    var obj = { "name": "John", "today": new Date(), "city": "New York" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJSON;
};
//# sourceMappingURL=app.js.map