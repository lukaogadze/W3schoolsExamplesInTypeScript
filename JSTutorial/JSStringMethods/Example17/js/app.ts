document.body.onload = function (): void {
    function myFunction(): void {
        const demo: HTMLElement = document.getElementById("demo")!;
        const text: string = demo.innerHTML;
        demo.innerHTML = text.toUpperCase();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};