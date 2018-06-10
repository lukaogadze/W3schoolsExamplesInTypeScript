document.body.onload = function (): void {
    let txt: string = "";    
    const person: any = { fname: "John", lname: "Doe", age: 25 };
    let x: any;   
    for (x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("demo")!.innerHTML = txt;
};