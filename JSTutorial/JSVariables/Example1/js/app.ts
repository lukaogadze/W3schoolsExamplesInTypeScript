document.body.onload = function (): void {
    let x: number = 5;
    let y: number = 6;
    let z: number = x + y;
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = "The value of z is: " + z;
};