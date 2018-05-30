// Fix the code to display the number with the highest value.
// document.getElementById("demo").innerHTML = Math(0, 150, 30, 20, -8);
document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = Math.max(0, 150, 30, 20, -8).toString();
};