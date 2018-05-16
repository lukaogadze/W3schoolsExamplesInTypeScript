document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        id: number;
        fullName: () => string;
    };

    const person: IPerson = {
        firstName: "John",
        lastName:"Doe",
        id:5566,
        fullName: function (): string {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    document.getElementById("demo")!.innerHTML = person.fullName();

};