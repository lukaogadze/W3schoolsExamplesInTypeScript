// Use the DOM to find and display the document's title.
window.onload = function (): void {
    document.getElementById("demo")!.innerHTML =
        "The title of this document is: " + document.title;
};