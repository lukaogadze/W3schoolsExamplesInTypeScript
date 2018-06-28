window.onload = function (): void {
    const x: HTMLCollectionOf<Element> = document.getElementsByClassName("intro");
    document.getElementById("demo")!.innerHTML =
        'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
};