window.onload = function (): void {
    interface IPerson {
        name: string;
         age: number;
         city: string;
    }

    const obj: IPerson = { "name": "John", "age": 30, "city": "New York" };
    const myJSON: string = JSON.stringify(obj);
    document.getElementById("demo")!.innerHTML = myJSON;
};