window.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Apple"];
    const a: number = fruits.lastIndexOf("Apple");
    document.getElementById("demo")!.innerHTML = "Apple is found in position " + (a + 1);
};