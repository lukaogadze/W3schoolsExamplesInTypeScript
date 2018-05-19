// Use the slice() method to display only "Banana,Kiwi".
// var str = "Apple,Banana,Kiwi";
// document.getElementById("demo").innerHTML = str;
document.body.onload = function (): void {
    const str: string = "Apple,Banana,Kiwi";
    document.getElementById("demo")!.innerHTML = str.slice(6);
};