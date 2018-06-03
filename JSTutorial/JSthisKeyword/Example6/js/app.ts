document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        id: number;
        fullName: () => string;
    }
    // Create an object:
    var person: IPerson = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function (): string {
            return this.firstName + " " + this.lastName;
        }
    };

    // Display data from the object:
    document.getElementById("demo")!.innerHTML = person.fullName();
};