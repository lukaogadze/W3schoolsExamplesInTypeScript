document.body.onload = function (): void {
    function myFunction(): void {
        document.getElementById("demo")!.innerHTML = (10 > 9).toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};