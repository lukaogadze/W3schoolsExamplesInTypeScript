document.body.onload = function (): void {
    const a: number = 100;
    const b: number = 50;
    const x: number = a + b;
    document.getElementById("demo")!.innerHTML = x.toString();
};