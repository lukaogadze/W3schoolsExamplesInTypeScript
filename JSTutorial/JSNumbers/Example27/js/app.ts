document.body.onload = function (): void {
    const x: number = 123;
    const y: Number = new Number(123);
    document.getElementById("demo")!.innerHTML =
    `${typeof x}<br>${typeof y}`;
};