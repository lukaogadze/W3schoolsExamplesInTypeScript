window.onload = function (): void {
    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo")!.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/demo_get.asp?t=" + Math.random(), true);
        xhttp.send();
    }

    document.getElementsByTagName("button")[0].onclick = loadDoc;
};