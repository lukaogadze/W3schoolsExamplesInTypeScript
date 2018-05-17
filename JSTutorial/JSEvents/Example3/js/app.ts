document.body.onload = function (): void {
    const btn: HTMLButtonElement = document.getElementsByTagName("button")[0];
    function displayDate(): void {
        document.getElementById("demo")!.innerHTML = Date();
    }
    btn.onclick = displayDate;
};