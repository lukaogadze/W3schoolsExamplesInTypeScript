document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = points.toString();
    
    const buttons: NodeListOf<HTMLButtonElement> = document.getElementsByTagName("button");

    buttons[0].onclick = function (): void {
        points.sort();
        demo.innerHTML = points.toString();
    }

    buttons[1].onclick = function (): void {
        points.sort((a: number, b: number) => a - b);
        demo.innerHTML = points.toString();
    };
};