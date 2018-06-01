// Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".
// function checkAge() {
//     var age = document.getElementById("age").value;
//     var voteable = // add code here
//     document.getElementById("demo").innerHTML = voteable + " to vote.";
//   }
document.body.onload = function (): void {
    function checkAge(): void {
        const age: number = parseInt((<HTMLInputElement>document.getElementById("age")).value);
        const voteable: string = age < 18 ? "Too young" : "Old enough";
        document.getElementById("demo")!.innerHTML = voteable + " to vote.";
    }

    document.getElementsByTagName("button")[0].onclick = checkAge;
};