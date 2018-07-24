window.onload = function (): void {
    interface IPerson {
        name: string;
        age: number;
        pets: {
            animal: string;
            name: string;
        }[];
    }


    const xmlhttp: XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj: IPerson = JSON.parse(this.responseText);
            document.getElementById("demo")!.innerHTML = myObj.name;
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo.txt", true);
    xmlhttp.send();
};