document.body.onload = function (): void {
    const demo: HTMLElement = document.getElementById("demo")!;
    const outputValue: string = (5 * 10).toString();
    demo.innerHTML = outputValue;
};