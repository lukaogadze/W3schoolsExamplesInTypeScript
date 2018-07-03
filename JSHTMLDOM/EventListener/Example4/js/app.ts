window.onload = function (): void {
    const x: HTMLButtonElement = document.getElementById("myBtn") as HTMLButtonElement;
    function myFunction() {
        alert("Hello World!");
    }

    function someOtherFunction() {
        alert("This function was also executed!");
    }
    x.addEventListener("click", myFunction);
    x.addEventListener("click", someOtherFunction);    
};