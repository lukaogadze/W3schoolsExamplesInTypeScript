document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1")!.innerHTML = fruits.toString();
    fruits[0] = "Kiwi";
    document.getElementById("demo2")!.innerHTML = fruits.toString();
};