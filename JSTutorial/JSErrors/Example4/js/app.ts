document.body.onload = function (): void {
    const num: number = 1;
    try {
        num.toPrecision(500);
    } catch (err) {
        document.getElementById("demo")!.innerHTML = err.name;
    }
};