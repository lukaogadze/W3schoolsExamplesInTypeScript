document.body.onload = function (): void {
    const myGirls: string[] = ["Cecilie", "Lone"];
    const myBoys: string[] = ["Emil", "Tobias", "Linus"];
    const myChildren: string[] = myGirls.concat(myBoys);
    document.getElementById("demo")!.innerHTML = myChildren.toString();    
};