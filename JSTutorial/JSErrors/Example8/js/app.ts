document.body.onload = function (): void {
    try {
        decodeURI("%%%");
    } catch (err) {
        document.getElementById("demo")!.innerHTML = err.name;
    }
};