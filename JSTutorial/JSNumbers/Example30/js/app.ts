document.body.onload = function (): void {
    const x: Number = new Number(500);
    const y: Number = new Number(500);
    document.getElementById("demo")!.innerHTML = (x === y).toString();
};