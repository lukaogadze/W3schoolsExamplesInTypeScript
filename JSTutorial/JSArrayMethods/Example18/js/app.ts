document.body.onload = function (): void {
    const arr1: string[] = ["Cecilie", "Lone"];        
    const myChildren: string[] = arr1.concat(["Emil", "Tobias", "Linus"]);
    document.getElementById("demo")!.innerHTML = myChildren.toString();    
};