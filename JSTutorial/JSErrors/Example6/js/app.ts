document.body.onload = function (): void {
    try {
        eval("alert('Hello)");
    } catch (err) {
        document.getElementById("demo")!.innerHTML = err.name;
    }
};