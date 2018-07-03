window.onload = function (): void {
    const myCollection: NodeListOf<HTMLParagraphElement> = document.getElementsByTagName("p");
    document.getElementById("demo")!.innerHTML =
        "This document contains " + myCollection.length + " paragraphs.";
};