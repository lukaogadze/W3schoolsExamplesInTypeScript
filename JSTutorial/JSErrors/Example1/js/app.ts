document.body.onload = function (): void {
    const adddlert: any = undefined;
    try {
        adddlert("Welcome guest!");
    }
    catch (err) {
        document.getElementById("demo")!.innerHTML = err.message;
    }
};