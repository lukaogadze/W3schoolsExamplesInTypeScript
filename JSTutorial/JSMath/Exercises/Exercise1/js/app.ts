// Use the random() method to display a random number
document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = Math.random().toString();
};