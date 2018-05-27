document.body.onload = function (): void {
    const points: number[] = [40, 100, 1, 5, 25, 10];
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = points.toString();
    
    const buttons: NodeListOf<HTMLButtonElement> = document.getElementsByTagName("button");

    buttons[0].onclick = function (): void {
        points.sort(function(){return 0.5 - Math.random()});
        demo.innerHTML = points.toString();
    }
};