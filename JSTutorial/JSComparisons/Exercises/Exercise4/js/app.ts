// Choose the correct comparison operator to display "true", when:
// 10 is NOT equal to 8.
// document.getElementById("demo").innerHTML = 10 8;
document.body.onload = function (): void {
    const x: number = 10, y: number = 8;
    document.getElementById("demo")!.innerHTML = (x != y).toString();
};