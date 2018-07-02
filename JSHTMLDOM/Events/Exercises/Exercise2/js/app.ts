// Use the DOM to assign an onclick event to the <button> element. Clicking the button should trigger displayDate().
window.onload = function (): void {
    function displayDate(): void {
        document.getElementById("demo")!.innerHTML = Date();
    }
    document.getElementById("myBtn")!.onclick = displayDate;
};