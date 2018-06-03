document.body.onload = function (): void {
    const x: number = 0;
    document.getElementById("demo")!.innerHTML = Boolean(x == 10).toString();
};