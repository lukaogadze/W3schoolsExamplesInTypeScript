document.body.onload = function (): void {
    let x: number = 5;      // Declare x, give it the value of 5
    let y: number = x + 2;  // Declare y, give it the value of x + 2 

    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = y.toString() // Write y to demo
};