"use strict";
var Events;
(function (Events) {
    var Example5;
    (function (Example5) {
        function checkCookies() {
            var text = "";
            if (navigator.cookieEnabled == true) {
                text = "Cookies are enabled.";
            }
            else {
                text = "Cookies are not enabled.";
            }
            document.getElementById("demo").innerHTML = text;
        }
        document.body.onload = checkCookies;
    })(Example5 = Events.Example5 || (Events.Example5 = {}));
})(Events || (Events = {}));
//# sourceMappingURL=app.js.map