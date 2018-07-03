window.onload = function (): void {
    const parent: HTMLDivElement = document.getElementById("div1") as HTMLDivElement;
    const child: HTMLParagraphElement = document.getElementById("p1") as HTMLParagraphElement;
    const para: HTMLParagraphElement = document.createElement("p");
    const node: Text = document.createTextNode("This is new.");
    para.appendChild(node);
    parent.replaceChild(para, child);
};