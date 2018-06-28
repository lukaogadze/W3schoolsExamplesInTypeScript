// Use the getElementsByTagName method to find the <p> element, and change its text to "Good Job!".
window.onload = function (): void {
    this.document.getElementsByTagName("p")[0].innerHTML = "Good Job!";
};