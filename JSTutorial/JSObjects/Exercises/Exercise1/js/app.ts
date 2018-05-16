// Display "John" by extracting information from the person object.
document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
    }

    const person: IPerson = {
        firstName:"John",
        lastName:"Doe"
    };
    document.getElementById("demo")!.innerHTML = person.firstName;
};