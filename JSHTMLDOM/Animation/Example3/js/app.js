"use strict";
window.onload = function () {
    function myMove() {
        var elem = document.getElementById("animate");
        var pos = 0;
        var id = setInterval(function () {
            frame(id);
        }, 5);
        function frame(id) {
            if (pos == 350) {
                clearInterval(id);
            }
            else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
    document.getElementsByTagName("button")[0].onclick = myMove;
};
//# sourceMappingURL=app.js.map