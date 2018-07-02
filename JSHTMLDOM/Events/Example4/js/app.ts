window.onload = function (): void {    
    function displayDate() {
        document.getElementById("demo")!.innerHTML = Date();
    }

    document.getElementById("myBtn")!.onclick = displayDate;    
};