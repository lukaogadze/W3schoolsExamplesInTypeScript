document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    //var x = Number.EPSILON;
    document.getElementById("demo")!.innerHTML = "2.220446049250313e-16";
};