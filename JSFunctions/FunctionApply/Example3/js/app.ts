window.onload = function (): void {
    interface IName {
        firstName: string;
        lastName: string;
    }
    interface IPerson {
        firstName?: string;
        lastName?: string;
        fullName: (city: string, country: string) => string;
    }
    const person: IPerson = {
        fullName: function(city: string, country: string) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
    }
    const person1: IName = {
        firstName:"John",
        lastName: "Doe",
    }
    // var person2 = {
    //     firstName:"Mary",
    //     lastName: "Doe",
    // }
    const x: string = person.fullName.call(person1, "Oslo", "Norway"); 
    document.getElementById("demo")!.innerHTML = x;
};