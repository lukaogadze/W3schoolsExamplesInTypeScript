document.body.onload = function (): void {
    const btn: HTMLButtonElement = document.getElementsByTagName("button")[0];
    btn.onclick = function (): void {
        document.getElementById("demo")!.innerHTML = Date();
    };
};