window.onload = function (): void {
    const myNodelist: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p");
    document.getElementById("demo")!.innerHTML =
    "This document contains " + myNodelist.length + " paragraphs.";
};