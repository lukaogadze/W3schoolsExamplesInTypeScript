document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    // document.getElementById("demo")!.innerHTML =
    //     Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
    document.getElementById("demo")!.innerHTML = "true<br>false";
};