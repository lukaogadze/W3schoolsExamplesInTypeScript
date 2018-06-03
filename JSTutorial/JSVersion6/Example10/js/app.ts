document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    // document.getElementById("demo").innerHTML =
    //    isFinite(10 / 0) + "<br>" + isFinite(10 / 1);
    document.getElementById("demo")!.innerHTML = "false<br>true";
};