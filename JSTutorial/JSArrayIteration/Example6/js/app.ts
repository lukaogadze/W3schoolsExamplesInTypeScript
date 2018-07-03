window.onload = function (): void {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a = fruits.indexOf("Apple");
    document.getElementById("demo")!.innerHTML = "Apple is found in position " + (a + 1);
};