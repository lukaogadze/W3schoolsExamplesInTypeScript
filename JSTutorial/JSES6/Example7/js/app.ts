document.body.onload = function (): void {
    // this works in ts if you change js version from es5 to es6
    const x = (Number as any).MAX_SAFE_INTEGER;
    document.getElementById("demo")!.innerHTML = x.toString();
};