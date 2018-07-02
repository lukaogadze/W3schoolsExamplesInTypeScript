// Use the DOM to assign an onclick event to the <button> element. Clicking the button should trigger displayDate().
window.onload = function (): void {
    const span = document.getElementsByTagName("span")[0];
    span.onmouseover = function (): void {
        this.style.color="red";
    };
};