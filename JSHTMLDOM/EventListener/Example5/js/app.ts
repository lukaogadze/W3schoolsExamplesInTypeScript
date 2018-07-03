window.onload = function (): void {
    const x = document.getElementById("myBtn") as HTMLButtonElement;
    function myFunction() {
        document.getElementById("demo")!.innerHTML += "Moused over!<br>";
    }

    function mySecondFunction() {
        document.getElementById("demo")!.innerHTML += "Clicked!<br>";
    }

    function myThirdFunction() {
        document.getElementById("demo")!.innerHTML += "Moused out!<br>";
    }

    x.addEventListener("mouseover", myFunction);
    x.addEventListener("click", mySecondFunction);
    x.addEventListener("mouseout", myThirdFunction);
};