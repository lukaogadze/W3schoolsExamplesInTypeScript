window.onload = function (): void {
    interface IPerson {
        firstName?: string;
        lastName?: string;
        fullName?: () => string;
    }
    const person: IPerson = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    const person1: IPerson = {
        firstName:"John",
        lastName: "Doe",
    }
    // const person2: IPerson = {
    //     firstName:"Mary",
    //     lastName: "Doe",
    // }

    const x = person.fullName!.call(person1); 
    document.getElementById("demo")!.innerHTML = x; 
};