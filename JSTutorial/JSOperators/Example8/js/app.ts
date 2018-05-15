document.body.onload = function (): void {
    const x: number = 5 + 5;
    const y: string = "5" + 5;
    const z: string = "Hello" + 5;
    document.getElementById("demo")!.innerHTML =
        x + "<br>" + y + "<br>" + z;
};