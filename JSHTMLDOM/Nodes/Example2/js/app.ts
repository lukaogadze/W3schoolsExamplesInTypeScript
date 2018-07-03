window.onload = function (): void {
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    
    const element: HTMLDivElement = document.getElementById("div1") as HTMLDivElement;
    const child: HTMLParagraphElement = document.getElementById("p1") as HTMLParagraphElement;
    element.insertBefore(para,child);
};