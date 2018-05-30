// Use the toDateString() method to convert the date to a more readable format.
document.body.onload = function (): void {
    const date: Date = new Date();
    document.getElementById("demo")!.innerHTML = date.toDateString();
};