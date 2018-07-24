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

    for (const i in myObj) {
        x += (myObj as any).cars[i] += "<br />";
    }
    document.getElementById("demo")!.innerHTML = x;
};