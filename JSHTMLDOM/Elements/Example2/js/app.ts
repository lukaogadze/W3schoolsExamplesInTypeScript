window.onload = function (): void {
    const x: NodeListOf<HTMLParagraphElement> = document.getElementsByTagName("p");    
    this.document.getElementById("demo")!.innerHTML = `The first paragraph (index 0) is: ${x[0].innerHTML}`;
};