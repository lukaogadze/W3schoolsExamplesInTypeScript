window.onload = function (): void {
    document.getElementById("demo")!.innerHTML =
        "The page protocol is: " + window.location.protocol;
};