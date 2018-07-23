window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        city: string
    }

    const myObj: IPerson = { "name": "John", "age": 31, "city": "New York" };
    const myJSON: string = JSON.stringify(myObj);
    window.location.href = "https://www.w3schools.com/js/demo_json.php?x=" + myJSON;
};