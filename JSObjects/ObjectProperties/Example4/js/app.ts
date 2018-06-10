document.body.onload = function (): void {
    interface IPerson{
        firstname: string;
        lastname: string;
        age: number;
        eyecolor: string;
        nationality?: string
    }

    const person: IPerson = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
    };
    person.nationality = "English";
    document.getElementById("demo")!.innerHTML =
        person.firstname + " is " + person.nationality + ".";
};
