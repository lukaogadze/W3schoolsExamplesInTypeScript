"use strict";
/*Use a single var keyword to create three variables with the following values:
firstName = "John"
lastName = "Doe"
age = 35
document.getElementById("demo").innerHTML =
firstName + " " + lastName + " is " + age;
*/
document.body.onload = function () {
    var firstName = "John", lastName = "Doe", age = 35, msg = firstName + " " + lastName + " is " + age;
    document.getElementById("demo").innerHTML = msg;
};
//# sourceMappingURL=app.js.map