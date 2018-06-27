window.onload = function (): void {
    // Function to increment counter
    function add(): number {
        var counter = 0;
        counter += 1;
        return counter;
    }
    // Trying to increment the counter
    function myFunction() {
        document.getElementById("demo")!.innerHTML = add().toString();
    }

    document.getElementsByTagName("button")[0].onclick = myFunction;
};