document.body.onload = function (): void {
    function myFunction(): void {
        const y: string = "5";
        const x: number = +y;
        document.getElementById("demo")!.innerHTML =
        typeof y + "<br>" + typeof x;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};