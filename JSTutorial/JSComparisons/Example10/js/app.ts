document.body.onload = function (): void {
    const x: number = 5;
    document.getElementById("demo")!.innerHTML = (x > 8).toString();
};