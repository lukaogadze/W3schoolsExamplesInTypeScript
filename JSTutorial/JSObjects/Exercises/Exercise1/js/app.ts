// Display "John" by extracting information from the person object.
// var person = {firstName:"John", lastName:"Doe"};
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