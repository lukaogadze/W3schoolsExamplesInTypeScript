document.body.onload = function (): void {
    const name: string = 'John Doe';
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = name;
};