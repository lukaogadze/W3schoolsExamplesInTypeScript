document.body.onload = function (): void {
    interface IPerson{
        firstName: string;
        lastName: string;
        age: number;
        eyeColor: string;
    }
    const person: IPerson = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    document.getElementById("demo")!.innerHTML =
        person.firstName + " " + person.lastName;
};