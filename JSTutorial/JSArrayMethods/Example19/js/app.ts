document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus: string[] = fruits.slice(1);
    document.getElementById("demo")!.innerHTML = fruits.toString() + "<br><br>" + citrus.toString();  
};