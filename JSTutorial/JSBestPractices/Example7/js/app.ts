document.body.onload = function (): void {
    let x: any = undefined;
    //x = (0 == "");     // true
    //x = (1 == "1");    // true
    //x = (1 == true);   // true
    //x = (0 === "");    // false
    //x = (1 === "1");   // false
    //x = (1 === true);  // false
    document.getElementById("demo")!.innerHTML = x;
};