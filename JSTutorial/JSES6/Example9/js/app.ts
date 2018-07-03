document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    document.getElementById("demo")!.innerHTML =
        (Number as any).isSafeInteger(10) + "<br>" + (Number as any).isSafeInteger(12345678901234567890);
};