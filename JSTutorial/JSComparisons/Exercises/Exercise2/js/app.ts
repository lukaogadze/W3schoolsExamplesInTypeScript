// Choose the correct comparison operator to display "true", when:
// 10 is greater than 7.
// document.getElementById("demo").innerHTML = 10 7;
document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = (10 > 7).toString();
};