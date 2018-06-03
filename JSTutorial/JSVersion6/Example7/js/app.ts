document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    // var x = Number.MAX_SAFE_INTEGER;
    document.getElementById("demo")!.innerHTML = "9007199254740991";
};