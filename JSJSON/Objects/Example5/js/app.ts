window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        cars: {
            car1: string;
            car2: string;
            car3: string;
        }
    }
    const myObj: IPerson = {
        "name": "John",
        "age": 30,
        "cars": {
            "car1": "Ford",
            "car2": "BMW",
            "car3": "Fiat"
        }
    }
    document.getElementById("demo")!.innerHTML += myObj.cars.car2 + "<br>";
    //or:
    document.getElementById("demo")!.innerHTML += myObj.cars["car2"];
};