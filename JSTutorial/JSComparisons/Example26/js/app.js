"use strict";
document.body.onload = function () {
    function myFunction() {
        var age, voteable;
        age = Number(document.getElementById("age").value);
        if (isNaN(age)) {
            voteable = "Input is not a number";
        }
        else {
            voteable = (age < 18) ? "Too young" : "Old enough";
        }
        document.getElementById("demo").innerHTML = voteable;
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map