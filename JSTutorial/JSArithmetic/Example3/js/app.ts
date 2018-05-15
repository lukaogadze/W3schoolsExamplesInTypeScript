document.body.onload = function (): void {
    const a: number = 3;
    const x: number = (100 + 50) * a;
    document.getElementById("demo")!.innerHTML = x.toString();
};