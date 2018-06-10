document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        id: number;
        name?: () => string;
    }

    const person: IPerson = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
    };
    person.name = function () {
        return this.firstName + " " + this.lastName;
    };

    document.getElementById("demo")!.innerHTML =
        "My father is " + person.name();
};