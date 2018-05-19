document.body.onload = function (): void {
    const txt: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo")!.innerHTML = txt.length.toString();
};