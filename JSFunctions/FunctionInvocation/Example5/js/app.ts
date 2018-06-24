window.onload = function (): void {
    interface IPerson {
        firstName: string;
        lastName: string;
        fullName: () => IPerson;
    }
    
    const myObject: IPerson = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this;
        }
    }
    document.getElementById("demo")!.innerHTML = myObject.fullName().toString();
};