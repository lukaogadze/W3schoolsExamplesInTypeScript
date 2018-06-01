// Choose the correct comparison operator to display "true", when:
// 10 is equal to 10.
// document.getElementById("demo").innerHTML = 10 10;
document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML = (10 == 10).toString();
};