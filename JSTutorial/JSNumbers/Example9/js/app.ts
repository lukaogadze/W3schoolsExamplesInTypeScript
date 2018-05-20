document.body.onload = function (): void {
    const x: string = "10";
    const y: number = 20;
    const z: string = x + y;
    document.getElementById("demo")!.innerHTML = z;
};