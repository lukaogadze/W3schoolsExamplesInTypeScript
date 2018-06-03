document.body.onload = function (): void {
    // this isn't valid typescript
    // code
    // var x;
    // try {
    //     x = y + 1;
    // }
    // catch (err) {
    //     document.getElementById("demo")!.innerHTML = err.name;
    // }
    document.getElementById("demo")!.innerHTML = "ReferenceError";
};