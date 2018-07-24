window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        cars: string[];
    }
    let myObj: IPerson, x = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    }
    delete myObj.cars[1];

    for (let i in myObj.cars) {
        x += myObj.cars[i] + "<br>";
    }

    document.getElementById("demo")!.innerHTML = x;
};