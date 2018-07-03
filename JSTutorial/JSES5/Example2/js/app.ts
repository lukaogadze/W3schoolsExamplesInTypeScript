document.body.onload = function (): void {
    var x: number = 10;
    // Now x is 10
    {
        let x: number = 2;
        console.log(x);
        // Now x is 2
    }
    // Now x is 10
    document.getElementById("demo")!.innerHTML = x.toString();
};