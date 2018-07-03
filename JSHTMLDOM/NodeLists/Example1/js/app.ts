window.onload = function (): void {
    const myNodelist: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p");
    document.getElementById("demo")!.innerHTML =
        "The innerHTML of the second paragraph is: " +
        myNodelist[1].innerHTML;
};