// Use the sort() method to sort the array alphabetically
// var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// document.getElementById("demo").innerHTML = fruits;
document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.sort();
    document.getElementById("demo")!.innerHTML = fruits.toString();
    
};