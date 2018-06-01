// 1. Write an if statement with the following condition: 10 is greater than 5.
// 2. If the condition is true, display "I did it!".

document.body.onload = function (): void {
    const x: number = 10, y: number = 5;
    if (x > y) {
        document.getElementById("demo")!.innerHTML = "I did it!";
    }
};