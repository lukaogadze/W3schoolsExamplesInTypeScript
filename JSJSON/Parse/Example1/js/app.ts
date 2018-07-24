window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        city: string;
    }

    const txt: string = '{"name":"John", "age":30, "city":"New York"}'
    const obj: IPerson = JSON.parse(txt);
    document.getElementById("demo")!.innerHTML = obj.name + ", " + obj.age;
};