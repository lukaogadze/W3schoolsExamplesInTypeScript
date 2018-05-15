document.body.onload = function (): void {
    const msg: string = "Hello Dolly.";
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = msg;
};