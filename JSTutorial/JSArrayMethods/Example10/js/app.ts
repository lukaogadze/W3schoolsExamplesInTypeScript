document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];    
    document.getElementById("demo1")!.innerHTML = fruits.toString();
    document.getElementById("demo2")!.innerHTML = fruits.unshift("Lemon").toString();
    document.getElementById("demo3")!.innerHTML = fruits.toString();    
};