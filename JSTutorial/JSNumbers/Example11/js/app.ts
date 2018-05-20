document.body.onload = function (): void {
    const x: number = 10;
    const y: number = 20;
    const z: string = "30";
    const result: string = x + y + z;
    document.getElementById("demo")!.innerHTML = result;
};