document.body.onload = function (): void {
    function myFunction3(): void {
        document.getElementById("demo")!.innerHTML = "Paragraph changed.";
    }
    const btn: HTMLButtonElement = <HTMLButtonElement>document.getElementsByTagName("button")[0];
    btn.onclick = myFunction3;
};