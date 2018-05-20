document.body.onload = function (): void {
    const x: number = NaN;
    const y: number = 5;
    const result: number = x + y;
    document.getElementById("demo")!.innerHTML = result.toString();
};