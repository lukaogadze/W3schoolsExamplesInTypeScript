// Use the concat() method to join the two strings: str1 and str2.
// var str1 = "Hello ";
// var str2 = "World!";
document.body.onload = function (): void {
    const str1: string = "Hello ";
    const str2: string = "World!";
    document.getElementById("demo")!.innerHTML = str1.concat(str2);
};