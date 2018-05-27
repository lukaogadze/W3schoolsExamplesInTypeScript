document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];    
    document.getElementById("demo1")!.innerHTML = fruits.toString();
    const myFruit: string = fruits.pop()!;
    document.getElementById("demo2")!.innerHTML = myFruit;
    document.getElementById("demo3")!.innerHTML = fruits.toString();

};