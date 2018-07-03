window.onload = function (): void {
    const myCollection: NodeListOf<HTMLParagraphElement> = document.getElementsByTagName("p");
    document.getElementById("demo")!.innerHTML =
        "The innerHTML of the second paragraph is: " +
        myCollection[1].innerHTML;
};