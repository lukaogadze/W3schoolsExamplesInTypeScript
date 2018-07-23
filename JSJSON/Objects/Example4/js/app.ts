window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        car: string | null
    }
    const myObj: IPerson = { "name": "John", "age": 30, "car": null };
    for (let x in myObj) {
        document.getElementById("demo")!.innerHTML += (myObj as any)[x] + "<br>";
    }
};