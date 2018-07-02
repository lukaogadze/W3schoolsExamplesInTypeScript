window.onload = function (): void {

    function displayDate(): void {
        document.getElementById("demo")!.innerHTML = Date();
    }

    document.getElementsByTagName("button")[0].onclick = function () {
        displayDate();
    };
    
};