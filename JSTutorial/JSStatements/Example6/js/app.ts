document.getElementsByTagName("button")[0].onclick = function (): void {
    const demo1: HTMLElement = document.getElementById("demo1")!;    
    const demo2: HTMLElement = document.getElementById("demo2")!;

    demo1.innerHTML = "Hello Dolly!";
    demo2.innerHTML = "How are you?";

};