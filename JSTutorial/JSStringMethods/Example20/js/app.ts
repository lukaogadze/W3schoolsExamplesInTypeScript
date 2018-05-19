document.body.onload = function (): void {
    const str: string = "HELLO WORLD";
    document.getElementById("demo")!.innerHTML = str.charAt(0);
};