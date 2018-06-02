// Use the continue statement to not output the array's element "Saab".
// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var text = ""
// var i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

document.body.onload = function (): void {
    const cars: string[] = ["BMW", "Volvo", "Saab", "Ford"];
    let text: string = ""    
    for (let i = 0; i < cars.length; i++) {
        if (cars[i] === "Saab") {
            continue;
        }
        text += cars[i] + "<br>";
    }

    document.getElementById("demo")!.innerHTML = text;
};