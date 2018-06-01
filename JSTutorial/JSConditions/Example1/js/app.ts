document.body.onload = function (): void {
    if (new Date().getHours() < 18) {
        document.getElementById("demo")!.innerHTML = "Good day!";
    }
};