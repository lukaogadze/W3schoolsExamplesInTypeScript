document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    document.getElementById("demo")!.innerHTML =
         (Number as any).isInteger(10) + "<br>" + (Number as any).isInteger(10.5);
};