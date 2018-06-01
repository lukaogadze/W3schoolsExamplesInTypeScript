// Change the value of the variable firstName to make the if statement run.
// var firstName = "Greg";

// if (firstName === "John") {
//     document.getElementById("demo").innerHTML = "Hello John!";
//}

document.body.onload = function (): void {
    const firstName = "John";

    if (firstName == "John") {
        document.getElementById("demo")!.innerHTML = "Hello John!";
    }
};