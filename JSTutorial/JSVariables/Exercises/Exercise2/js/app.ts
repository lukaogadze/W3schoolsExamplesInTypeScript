// Create a variable called number, assign the value 50 to it, and display it.
document.body.onload = function (): void {
    const number: number = 50
    document.getElementById("demo")!.innerHTML = number.toString();
};