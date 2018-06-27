window.onload = function (): void {
    function myFunction(): void {
        const a: number = 4;
        document.getElementById("demo")!.innerHTML = (a * a).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};