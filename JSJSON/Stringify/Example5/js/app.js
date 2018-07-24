"use strict";
window.onload = function () {
    var obj = { "name": "John", "age": function () { return 30; }, "city": "New York" };
    obj.age = obj.age.toString();
    var myJSON = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJSON;
};
//# sourceMappingURL=app.js.map