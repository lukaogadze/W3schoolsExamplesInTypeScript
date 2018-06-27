window.onload = function (): void {
    const a: number = 4;
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = (a * a).toString();
    }
    document.getElementsByTagName("button")[0].onclick = myFunction;
};