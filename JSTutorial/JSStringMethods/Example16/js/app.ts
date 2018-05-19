document.body.onload = function (): void {
    function myFunction(): void {
        const demo: HTMLElement = document.getElementById("demo")!;
        const str: string = demo.innerHTML;
        const txt: string = str.replace(/Microsoft/g,"W3Schools");
        demo.innerHTML = txt;        
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};