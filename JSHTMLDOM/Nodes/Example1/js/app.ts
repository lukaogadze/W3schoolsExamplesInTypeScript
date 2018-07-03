window.onload = function (): void {
    const para: HTMLParagraphElement = document.createElement("p");
    const node: Text = document.createTextNode("This is new");
    para.appendChild(node);
    const element: HTMLDivElement = 
        document.getElementById("div1") as HTMLDivElement;
    element.appendChild(para);    
};