window.onload = function (): void {
    function loadDoc(): void {
        let xhttp;
        if ((window as any).XMLHttpRequest) {
            // code for modern browsers
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE5, IE6
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/users", true);
        xhttp.send();
        xhttp.onreadystatechange = function (): void {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo")!.innerHTML =
                this.responseText;
            }
        };        
    }

    document.getElementsByTagName("button")[0].onclick = loadDoc;
};