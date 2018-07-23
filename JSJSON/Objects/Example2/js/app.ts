window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        car: string | null
    }
    let myObj: IPerson, x: string;
    myObj = { "name": "John", "age": 30, "car": null };
    x = myObj["name"];
    document.getElementById("demo")!.innerHTML = x;
    
};