// Add the following property and value to the person object: country: USA
document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        country: string;
    }

    const person: IPerson = {
        firstName:"John",
        lastName:"Doe",
        country: "USA"
    };
    document.getElementById("demo")!.innerHTML = person.country;
};