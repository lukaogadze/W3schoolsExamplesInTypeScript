document.body.onload = function (): void {
    let x: number = 5;
    x--;
    const z: number = x;
    document.getElementById("demo")!.innerHTML = z.toString();
};