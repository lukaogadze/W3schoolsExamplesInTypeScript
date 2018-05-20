document.body.onload = function (): void {
    const x: number = NaN;
    const y: string = "5";
    const result: string = x + y;
    document.getElementById("demo")!.innerHTML = result;
};