window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        city: string;
    }
    let myObj: IPerson;
    myObj = { "name": "John", "age": 30, "city": "New York" };
    myObj["name"] = "Gilbert";
    document.getElementById("demo")!.innerHTML = myObj.name;

};