document.body.onload = function (): void {
    const x: string = "100";
    const y: string = "10";
    const z: string = x + y;
    document.getElementById("demo")!.innerHTML = z.toString();
};