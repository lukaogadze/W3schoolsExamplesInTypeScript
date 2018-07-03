window.onload = function (): void {
    function displayDate(): void {
        document.getElementById("demo")!.innerHTML = Date();
    }
    document.getElementById("myBtn")!.addEventListener("click",displayDate);
}