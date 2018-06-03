document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    //document.getElementById("demo").innerHTML =
    //    Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
    document.getElementById("demo")!.innerHTML = "true<br>false";
};