document.body.onload = function (): void {
    // this isn't valid typescript code
    // var x; // Declare x
    // x = 5; // Assign 5 to x

    // elem = document.getElementById("demo"); // Find an element 
    // elem.innerHTML = x;                     // Display x in the element

    document.getElementById("demo")!.innerHTML = "5";
};