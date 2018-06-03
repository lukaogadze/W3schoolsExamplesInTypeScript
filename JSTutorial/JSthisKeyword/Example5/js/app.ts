document.body.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        id: number;
        myFunction: () => IPerson;
    }
    // Create an object:
    var person: IPerson = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        myFunction: function (): IPerson {
            return this;
        }
    };

    // Display data from the object:
    document.getElementById("demo")!.innerHTML = person.myFunction().toString();
};