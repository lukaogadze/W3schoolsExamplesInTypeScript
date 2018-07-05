window.onload = function (): void {
    function newDoc(): void {
        window.location.assign("https://www.w3schools.com")
    }

    document.getElementsByTagName("input")[0].onclick = newDoc;
};