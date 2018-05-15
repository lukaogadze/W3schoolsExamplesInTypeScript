document.body.onload = function (): void {
    const num: number = 10.5;
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = num.toString();
};