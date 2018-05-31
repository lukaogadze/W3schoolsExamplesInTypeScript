document.body.onload = function (): void {
    const b1: boolean = Boolean(100);
    const b2: boolean = Boolean(3.14);
    const b3: boolean = Boolean(-15);
    const b4: boolean = Boolean("Hello");
    const b5: boolean = Boolean("false");
    const b6: boolean = Boolean(1 + 7 + 3.14);
    const msg: string = `100 is ${b1}<br>3.14 is ${b2}<br>-15 is ${b3}<br>Any (not empty) string is ${b4}<br>Even the string 'false' is ${b5}<br>Any expression (except zero) is ${b6}`;
    document.getElementById("demo")!.innerHTML = msg;
};