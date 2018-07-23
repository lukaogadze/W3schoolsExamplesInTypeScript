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

    let myObj: IPerson, x: string = "";
    myObj = {
        "name": "John",
        "age": 30,
        "cars": {
            "car1": "Ford",
            "car2": "BMW",
            "car3": "Fiat"
        }
    };

    myObj.cars.car2 = "Mercedes";

    for (let i in myObj.cars) {
        x += ((myObj as any).cars[i]) + "<br>";
    }

    document.getElementById("demo")!.innerHTML = x;
};