window.onload = function (): void {
    const x = document.getElementById("myBtn")! as HTMLButtonElement;
    function myFunction() {
        alert("Hello World!");
    }
    if (x.addEventListener) {
        x.addEventListener("click", myFunction);
    } else if ((x as any).attachEvent) {
        (x as any).attachEvent("onclick", myFunction);
    }    
};