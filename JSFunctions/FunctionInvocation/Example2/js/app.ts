window.onload = function (): void {
    // original code
    // function myFunction(a, b) {
    //     return a * b;
    // }
    // document.getElementById("demo").innerHTML = window.myFunction(10, 2);

    // my ts version
    function myFunction(a: number, b: number): number {
        return a * b;
    }
    
    document.getElementById("demo")!.innerHTML = myFunction(10, 2).toString();
};