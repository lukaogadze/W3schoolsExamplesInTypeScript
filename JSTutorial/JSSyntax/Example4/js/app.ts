document.body.onload = function (): void {
    const x: number = 5, y: number = 6, j: number = 10;
    const z: number = (x + y) * j;    
    document.getElementById("demo")!.innerHTML = z.toString();
};