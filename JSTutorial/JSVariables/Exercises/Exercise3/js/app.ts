// The code below should display "Volvo" - Fix it.
// var carName = "Volvo";
// document.getElementById("demo").innerHTML = carname;
document.body.onload = function (): void {
    const carName: string = "Volvo";
    document.getElementById("demo")!.innerHTML = carName;
};