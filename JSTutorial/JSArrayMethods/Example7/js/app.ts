document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];    
    const demo: HTMLElement = document.getElementById("demo1")!;
    demo.innerHTML = fruits.toString();
    fruits.shift();
    document.getElementById("demo2")!.innerHTML = fruits.toString();    
};