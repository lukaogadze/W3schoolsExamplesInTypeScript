document.body.onload = function (): void {
    let x: number, y: number, z: number;
    x = 5;
    y = 6;
    z = x + y;
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = `The value of z is ${z}`;
};