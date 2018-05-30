document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = (Math.floor(Math.random() * 100) + 1).toString();
};