window.onload = function (): void {
    const myElement: HTMLParagraphElement = document.getElementById("intro") as HTMLParagraphElement;
    document.getElementById("demo")!.innerHTML =
        "The text from the intro paragraph is " + myElement.innerHTML;
};