window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        cars: string[];
    }

    let myObj: IPerson, x: string = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    };

    for (let i = 0; i < myObj.cars.length; i++) {
        x += myObj.cars[i] + "<br />";
    }
    document.getElementById("demo")!.innerHTML = x;
};