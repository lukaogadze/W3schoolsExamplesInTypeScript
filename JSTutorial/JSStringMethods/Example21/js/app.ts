document.body.onload = function (): void {
    const str: string = "HELLO WORLD";
    document.getElementById("demo")!.innerHTML = str.charCodeAt(0).toString();
};