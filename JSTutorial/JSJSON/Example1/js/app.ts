document.body.onload = function (): void {
    const text: string = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';

    const obj: any = JSON.parse(text);
    document.getElementById("demo")!.innerHTML =
        obj.employees[1].firstName + " " + obj.employees[1].lastName;
};