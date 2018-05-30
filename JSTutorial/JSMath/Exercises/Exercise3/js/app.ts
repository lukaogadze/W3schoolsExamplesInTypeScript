// Round "5.3" to the nearest integer, and display it.
document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = Math.round(5.3).toString();
};