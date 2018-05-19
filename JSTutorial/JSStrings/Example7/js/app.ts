document.body.onload = function (): void {
    const x: string = "The character \\ is called backslash.";
    document.getElementById("demo")!.innerHTML = x;
};