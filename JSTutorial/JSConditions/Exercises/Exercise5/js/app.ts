// Write an if/else statement with the following condition:

// If the variable age is greater than 18, output "Old enough", otherwise output "Too young".

// var age = 25;

document.body.onload = function (): void {
    const age: number = 25;
    const msg: string = age > 18 ? "Old enough" : "Too young";
    document.getElementById("demo")!.innerHTML = msg;
};