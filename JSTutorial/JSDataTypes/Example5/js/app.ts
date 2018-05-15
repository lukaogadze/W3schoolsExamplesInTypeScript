document.body.onload = function (): void {
    let x: any;     // Now x is undefined
    x = 5;          // Nos x is Number
    x = "John";     // Now x is a String
    document.getElementById("demo")!.innerHTML = x;
};