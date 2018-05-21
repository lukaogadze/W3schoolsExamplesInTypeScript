document.body.onload = function (): void {
    // this isn't valid ts code
    // const x: Number = new Number(6);    
    // x.MAX_VALUE
    document.getElementById("demo")!.innerHTML = typeof undefined;
};