document.body.onload = function (): void {
    const person: any[] = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;
    document.getElementById("demo")!.innerHTML = person[0] + " " + person.length;    
};