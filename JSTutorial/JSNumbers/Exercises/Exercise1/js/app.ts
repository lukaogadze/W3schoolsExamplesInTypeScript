// Create a variable called myNumber, assign the value 50 to it, and display it.
document.body.onload = function (): void {
    const myNumber: number = 50;
    document.getElementById("demo")!.innerHTML = myNumber.toString();
};