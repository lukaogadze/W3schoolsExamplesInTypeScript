document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo1")!.innerHTML = `The first fruit is: ${fruits[0]}`;
    delete fruits[0];
    document.getElementById("demo2")!.innerHTML = `The first fruit is: ${fruits[0]}`;
};