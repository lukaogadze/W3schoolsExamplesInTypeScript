// Choose the correct comparison operator to display "true", when:
// 5 is less than 7.
// document.getElementById("demo").innerHTML = 5 7;
document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = (5 < 7).toString();
};