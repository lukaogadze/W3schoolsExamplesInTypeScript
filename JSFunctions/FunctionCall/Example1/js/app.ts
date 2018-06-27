window.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        fullName: () => string;
    }
    const myObject: IPerson = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    const x: string = myObject.fullName();
    document.getElementById("demo")!.innerHTML = x;
};