document.body.onload = function (): void {
    let price1: number = 5;
    let price2: number = 6;
    let total: number = price1 + price2;
    const demo: HTMLElement = document.getElementById("demo")!;
    const msg: string = "The total is: " + total;
    demo.innerHTML = msg;
};