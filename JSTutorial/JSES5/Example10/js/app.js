"use strict";
window.onload = function () {
    var person = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    document.getElementById("demo").innerHTML = person.name + ", " + person.age;
};
//# sourceMappingURL=app.js.map