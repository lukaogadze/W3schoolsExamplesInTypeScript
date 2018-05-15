document.body.onload = function (): void {
    const x: number = 5;
    const y: number = 2;
    const z: number = x % y;
    document.getElementById("demo")!.innerHTML = z.toString();
};