window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        cars: string[];
    }

    let myObj: IPerson, x: string;
    myObj = {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    };
    x = myObj.cars[0];
    document.getElementById("demo")!.innerHTML = x;
};