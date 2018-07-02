window.onload = function (): void {
    function changeText(elem: HTMLElement): void {
        elem.innerHTML = "Ooops!";
    }

    document.getElementsByTagName("h1")[0].onclick = function () {
        changeText(this);
    };

    
};