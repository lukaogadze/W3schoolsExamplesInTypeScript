window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        city: string;
    }
    let myObj: IPerson, x: string;
    myObj = { "name": "John", "age": 30, "city": "New York" };
    x = myObj["name"];
    document.getElementById("demo")!.innerHTML = x;
    
};