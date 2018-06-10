document.body.onload = function (): void {
    const x1: Object = new Object();   // A new Object object
    const x2: String = new String();   // A new String object
    const x3: Number = new Number();   // A new Number object
    const x4: Boolean = new Boolean();  // A new Boolean object
    const x5: Array<any> = new Array();    // A new Array object
    const x6: RegExp = new RegExp("sudo");   // A new RegExp object
    const x7: Function = new Function(); // A new Function object
    const x8: Date = new Date();     // A new Date object

    // Display the type of all objects
    document.getElementById("demo")!.innerHTML =
        "x1: " + typeof x1 + "<br>" +
        "x2: " + typeof x2 + "<br>" +
        "x3: " + typeof x3 + "<br>" +
        "x4: " + typeof x4 + "<br>" +
        "x5: " + typeof x5 + "<br>" +
        "x6: " + typeof x6 + "<br>" +
        "x7: " + typeof x7 + "<br>" +
        "x8: " + typeof x8 + "<br>";
};