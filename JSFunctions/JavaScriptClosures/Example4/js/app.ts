window.onload = function (): void {
    // Initiate counter
    let counter: number = 0;

    // Function to increment counter
    function add(): void {
        // trash w3 code don't mind
        //let counter: number = 0;
        //counter += 1;
    }

    // Call add() 3 times
    add();
    add();
    add();

    // The counter should now be 3
    document.getElementById("demo")!.innerHTML = "The counter is: " + counter;
};