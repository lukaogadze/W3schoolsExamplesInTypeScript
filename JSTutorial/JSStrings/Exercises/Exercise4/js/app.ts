// Concatenate the two strings to display "Hello World!".
// var str1 = "Hello ";
// var str2 = "World!"; 

document.body.onload = function (): void {
    const str1: string = "Hello ", str2: string = "World!";
    document.getElementById("demo")!.innerHTML = str1 + str2;
};