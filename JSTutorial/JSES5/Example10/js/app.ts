window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        city: string;
    }

    const person: IPerson = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    document.getElementById("demo")!.innerHTML = person.name + ", " + person.age;
};