// Use the pop() method to remove the last item from the fruits array
document.body.onload = function (): void {
    const fruits: string[] = ["Banana", "Orange", "Apple"];
    fruits.pop();
    document.getElementById("demo")!.innerHTML = fruits.toString();
};