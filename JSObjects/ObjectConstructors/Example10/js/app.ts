document.body.onload = function (): void {
    const x1: object = {};        // object
    const x2: string = "";        // string 
    const x3: number = 0;         // number
    const x4: boolean = false;     // boolean
    const x5: object = [];        // object (not array)
    const x6: object = /()/;      // object
    const x7: Function = function () { };  // function

    // Display the type of all
    document.getElementById("demo")!.innerHTML =
        "x1: " + typeof x1 + "<br>" +
        "x2: " + typeof x2 + "<br>" +
        "x3: " + typeof x3 + "<br>" +
        "x4: " + typeof x4 + "<br>" +
        "x5: " + typeof x5 + "<br>" +
        "x6: " + typeof x6 + "<br>" +
        "x7: " + typeof x7 + "<br>";
};