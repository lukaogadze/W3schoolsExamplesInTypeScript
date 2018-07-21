window.onload = function (): void {
    function loadDoc(url: string, cFunction: (xhttp: XMLHttpRequest) => void): void {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cFunction(this);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();        
    }
    function myFunction(xhttp: XMLHttpRequest) {
        document.getElementById("demo")!.innerHTML =
            xhttp.responseText;
    }

    document.getElementsByTagName("button")[0].onclick = function () {
        loadDoc("https://www.w3schools.com/js/ajax_info.txt", myFunction);
    };
};