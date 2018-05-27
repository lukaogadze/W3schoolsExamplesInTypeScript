// Use the push() method to add a new item to fruits: Kiwi.
document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple"];
    fruits.push("Kiwi");
    document.getElementById("demo")!.innerHTML = fruits.toString();
};