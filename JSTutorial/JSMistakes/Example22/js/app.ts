document.body.onload = function (): void {
    const person: any = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    document.getElementById("demo")!.innerHTML =
        person[0] + " " + person.length;
};