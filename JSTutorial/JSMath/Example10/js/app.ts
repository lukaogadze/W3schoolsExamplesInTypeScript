document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = Math.min(0, 150, 30, 20, -8, -200).toString();
};