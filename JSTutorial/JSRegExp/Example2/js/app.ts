document.body.onload = function (): void {
    function myFunction() {
        const str: string = document.getElementById("demo")!.innerHTML;
        const txt: string = str.replace(/microsoft/i, "W3Schools");
        document.getElementById("demo")!.innerHTML = txt;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};