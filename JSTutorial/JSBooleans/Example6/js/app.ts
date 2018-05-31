document.body.onload = function (): void {
    function myFunction(): void {
        const x: string = "";
        document.getElementById("demo")!.innerHTML = Boolean(x).toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};