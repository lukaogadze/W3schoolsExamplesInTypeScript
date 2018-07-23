"use strict";
window.onload = function () {
    var myJSON = '{"name":"John", "age":31, "city":"New York"}';
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;
};
//# sourceMappingURL=app.js.map