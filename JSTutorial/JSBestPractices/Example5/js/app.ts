document.body.onload = function (): void {
    let x: any = 5;
    //x = 5 + 7;      // x.valueOf() is 12, typeof x is a number
    //x = 5 + "7";    // x.valueOf() is 57, typeof x is a string
    //x = "5" + 7;    // x.valueOf() is 57, typeof x is a string
    //x = 5 - 7;      // x.valueOf() is -2, typeof x is a number
    //x = 5 - "7";    // x.valueOf() is -2, typeof x is a number
    //x = "5" - 7;    // x.valueOf() is -2, typeof x is a number
    //x = 5 - "x";    // x.valueOf() is NaN, typeof x is a number

    document.getElementById("demo")!.innerHTML = x.valueOf() + " " + typeof x;
};