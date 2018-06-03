document.body.onload = function (): void {
    const x: number = 0.1;
    const y: number = 0.2;
    const z: number = x + y;
    document.getElementById("demo")!.innerHTML = z.toString();
};