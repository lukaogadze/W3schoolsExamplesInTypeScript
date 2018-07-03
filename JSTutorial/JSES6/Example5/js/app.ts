document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    //var x = Number.EPSILON;
    const x: number = (Number as any).EPSILON;
    document.getElementById("demo")!.innerHTML = x.toString();
};