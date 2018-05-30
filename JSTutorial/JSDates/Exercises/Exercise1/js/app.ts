// Create a Date object to display the current date and time
document.body.onload = function (): void {
    const date: Date = new Date();
    document.getElementById("demo")!.innerHTML = date.toString();
};