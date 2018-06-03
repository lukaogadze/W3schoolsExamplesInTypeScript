document.body.onload = function (): void {
    // this isn't valid typescript code
    // var x = 5; // Initialize x
    // var y = 7; // Initialize y

    // elem = document.getElementById("demo"); // Find an element 
    // elem.innerHTML = x + " " + y;           // Display x and y           // Display x in the element

    document.getElementById("demo")!.innerHTML = "5 7";
};