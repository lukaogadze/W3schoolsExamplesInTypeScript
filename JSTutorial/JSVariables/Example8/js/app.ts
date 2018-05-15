document.body.onload = function (): void {
    let carName: string = "Volvo";
    // redeclaring only works in js
    // i cant compile my ts file if i uncomment this line
    // let carName;
    document.getElementById("demo")!.innerHTML = carName;
};