document.body.onload = function (): void {
    function myFunction(): void {
        const y: string = "John";
        const x: number = + y;
        document.getElementById("demo")!.innerHTML =
        typeof y + "<br>" + typeof x;
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};