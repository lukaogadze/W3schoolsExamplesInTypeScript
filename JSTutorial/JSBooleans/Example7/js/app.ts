document.body.onload = function (): void {
    function myFunction(): void {
        const x: undefined = undefined;
        document.getElementById("demo")!.innerHTML = Boolean(x).toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};