document.body.onload = function (): void {
    const x: string = "10";
    const y: string = "20";
    const z: string = x + y;
    document.getElementById("demo")!.innerHTML = z;
};