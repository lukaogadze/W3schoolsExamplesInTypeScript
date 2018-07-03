document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    // var x = Number.MIN_SAFE_INTEGER;
    const x: number = (Number as any).MIN_SAFE_INTEGER;
    document.getElementById("demo")!.innerHTML = x.toString();
};