window.onload = function (): void {
    interface IPerson {
        name: string;
        age: () => number;
        city: string;
    }
    const obj: IPerson = { "name": "John", "age": function () { return 30; }, "city": "New York" };
    const myJSON = JSON.stringify(obj);
    document.getElementById("demo")!.innerHTML = myJSON;
};