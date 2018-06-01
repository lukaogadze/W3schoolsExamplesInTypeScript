document.body.onload = function (): void {
    const x: number = 5;
    // this isn't valid typescript code...
    //document.getElementById("demo")!.innerHTML = (x == "5");
    document.getElementById("demo")!.innerHTML = (x == parseInt("5")).toString();
};