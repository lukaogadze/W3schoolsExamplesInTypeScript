window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        city: string
    }

    const myJSON: string = '{"name":"John", "age":31, "city":"New York"}';
    const myObj: IPerson = JSON.parse(myJSON);
    document.getElementById("demo")!.innerHTML = myObj.name;
};