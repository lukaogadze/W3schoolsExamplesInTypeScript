window.onload = function (): void {
    document.getElementById("demo")!.innerHTML =
        "The URL port number of the current page is: " + window.location.port;
};