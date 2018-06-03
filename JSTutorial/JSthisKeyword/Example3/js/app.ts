document.body.onload = function (): void {

    // this isn't valid ts code
    // function myFunction(): any {
    //     return this;
    // }
    document.getElementById("demo")!.innerHTML = "[object Window]";
};