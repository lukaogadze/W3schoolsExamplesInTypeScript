window.onload = function (): void {
    const x: NodeListOf<Element> = document.querySelectorAll("p.intro");
    document.getElementById("demo")!.innerHTML =
        'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
};