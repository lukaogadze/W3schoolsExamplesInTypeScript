"use strict";
document.body.onload = function () {
    function myFunction() {
        //const carName: string = "Volvo";
    }
    myFunction();
    // this isn't valid typescript. so i replace it "typeof carName" with string and
    // commented carName because it's not used and causes ts error
    // document.getElementById("demo")!.innerHTML = `The type of carName is ${typeof carName}`;
    document.getElementById("demo").innerHTML = "The type of carName is undefined";
};
//# sourceMappingURL=app.js.map