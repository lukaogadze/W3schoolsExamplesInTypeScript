document.body.onload = function (): void {
    var x: number = 10;
    // Now x is 10
    {
        var x: number = 2;
        // Now x is 2
    }
    // Now x is 2
    document.getElementById("demo")!.innerHTML = x.toString();
};