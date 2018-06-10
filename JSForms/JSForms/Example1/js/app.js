"use strict";
document.body.onload = function () {
    var form = document.getElementsByName("myForm")[0];
    function validateForm() {
        var x = form.children[0].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
        return true;
    }
    form.onsubmit = validateForm;
};
//# sourceMappingURL=app.js.map