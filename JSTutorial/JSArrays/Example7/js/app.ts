document.body.onload = function (): void {
    const person: any[] = ["John","Doe",46];    
    document.getElementById("demo")!.innerHTML = person[0];
};