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
    myObj.cars[1] = "Mercedes";

    for (let i in myObj.cars) {
        x += (myObj as any).cars[i] + "<br>";
    }

    document.getElementById("demo")!.innerHTML = x;
    
};