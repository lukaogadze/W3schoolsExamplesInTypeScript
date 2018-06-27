window.onload = function (): void {
    interface IName {
        firstName: string;
        lastName: string;
    }
    interface IPerson {
        firstName?: string;
        lastName?: string;
        fullName: () => string;
    }

    const person: IPerson = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    var person1: IName = {
        firstName:"John",
        lastName: "Doe",
    }
    const x: string = person.fullName.apply(person1); 
    
    document.getElementById("demo")!.innerHTML = x;
};