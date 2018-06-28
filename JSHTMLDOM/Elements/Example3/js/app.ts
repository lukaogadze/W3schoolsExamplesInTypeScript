window.onload = function (): void {
    const x: HTMLDivElement = this.document.getElementById("main") as HTMLDivElement;
    const y: NodeListOf<HTMLParagraphElement> = x.getElementsByTagName("p");
    this.document.getElementById("demo")!.innerHTML =
    `The first paragraph (index 0) inside "main" is: ${y[0].innerHTML}`;
    
};