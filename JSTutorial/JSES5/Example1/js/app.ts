window.onload = function (): void {
    function myFunction(): void {
        const str = "       Hello World!       ";
        alert(str.trim());
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};