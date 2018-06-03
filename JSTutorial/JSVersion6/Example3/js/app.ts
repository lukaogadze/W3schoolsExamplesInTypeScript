document.body.onload = function (): void {
    var x: number = 10;
    // Now x is 10
    {
        const x = 2;
        console.log(x);
        // Now x is 2
    }
    // Now x is 10
    document.getElementById("demo")!.innerHTML = x.toString();
};