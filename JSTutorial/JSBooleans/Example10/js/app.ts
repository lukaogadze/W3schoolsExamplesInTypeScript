document.body.onload = function (): void {
    function myFunction(): void {
        const x: number = NaN;
        document.getElementById("demo")!.innerHTML = Boolean(x).toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};