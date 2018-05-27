// Use the splice() method to remove "Orange" and "Apple" from fruits.
document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.splice(1,2);
    document.getElementById("demo")!.innerHTML = fruits.toString();
};