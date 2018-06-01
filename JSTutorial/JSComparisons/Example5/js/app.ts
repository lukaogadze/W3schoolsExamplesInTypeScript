document.body.onload = function (): void {
    //const x: number = 5;
    // this isn't valid ts code so i will try to pure js code....
    // document.getElementById("demo")!.innerHTML = (x === "5").toString();
    const x: any  = 5;
    document.getElementById("demo")!.innerHTML = (x === "5").toString();
};