"use strict";
document.body.onload = function () {
    function myFunction() {
        var age, voteable;
        age = parseInt(document.getElementById("age").value);
        voteable = (age < 18) ? "Too young" : "Old enough";
        document.getElementById("demo").innerHTML = voteable + " to vote.";
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};
//# sourceMappingURL=app.js.map