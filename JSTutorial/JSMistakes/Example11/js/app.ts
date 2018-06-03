document.body.onload = function (): void {
    const x: number = 0.1;
    const y: number = 0.2;
    const z: number = (x * 10 + y * 10) / 10;
    document.getElementById("demo")!.innerHTML = z.toString();
};