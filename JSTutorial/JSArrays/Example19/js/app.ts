document.body.onload = function (): void {    
    const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];    
    document.getElementById("demo")!.innerHTML = Array.isArray(fruits).toString();
};