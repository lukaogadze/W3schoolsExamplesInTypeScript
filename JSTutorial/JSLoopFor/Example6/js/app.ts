document.body.onload = function (): void {
    // interface IPerson{
    //     fname: string;
    //     lname: string;
    //     age: number;
    // }
    let txt: string = "";
    const person: any = { fname: "John", lname: "Doe", age: 25 };
    var x;
    for (x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("demo")!.innerHTML = txt;
};