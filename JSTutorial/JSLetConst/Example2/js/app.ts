window.onload = function (): void {
    var x = 10;
    // Here x is 10
    {
        let x = 2;
        // Here x is 2
        console.log(x);
        
    }
    // Here x is 10
    document.getElementById("demo")!.innerHTML = x.toString();
};