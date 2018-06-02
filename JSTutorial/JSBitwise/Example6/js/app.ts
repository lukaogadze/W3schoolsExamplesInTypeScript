document.body.onload = function (): void {
    const x: number = -5 >> 1;
    document.getElementById("demo")!.innerHTML = x.toString();
};