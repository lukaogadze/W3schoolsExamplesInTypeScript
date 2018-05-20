document.body.onload = function (): void {
    const x: number = 10;
    const y: number = 20;
    const z: number = x + y;
    document.getElementById("demo")!.innerHTML = z.toString();
};