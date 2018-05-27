document.body.onload = function (): void {
    const arr1: string[] = ["Cecilie", "Lone"];
    const arr2: string[] = ["Emil", "Tobias", "Linus"];
    const arr3: string[] = ["Robin","Morgan"];
    const myChildren: string[] = arr1.concat(arr2, arr3);
    document.getElementById("demo")!.innerHTML = myChildren.toString();    
};