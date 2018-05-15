document.body.onload = function (): void {
    document.getElementById("demo")!.innerHTML =
    `${typeof ""}<br>${typeof "John"}<br>${typeof "John Doe"}`;    
};