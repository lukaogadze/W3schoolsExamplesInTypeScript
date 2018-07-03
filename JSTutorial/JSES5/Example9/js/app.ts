window.onload = function (): void {
    const fruits = ["Banana", "Orange", "Apple", "Apple"];
    const a = fruits.lastIndexOf("Apple");
    document.getElementById("demo")!.innerHTML = "Apple is found in position " + (a + 1);
};