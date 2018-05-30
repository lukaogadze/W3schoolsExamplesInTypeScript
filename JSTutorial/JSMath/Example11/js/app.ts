document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = Math.max(0, 150, 30, 20, -8, -200).toString();
};