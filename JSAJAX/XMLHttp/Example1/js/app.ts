window.onload = function (): void {
    function loadDoc(): void {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET","https://jsonplaceholder.typicode.com/users", true);
        xhttp.send();
        xhttp.onreadystatechange = function (): void {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo")!.innerHTML = this.responseText;
            }
        }
    }

    document.getElementsByTagName("button")[0].onclick = loadDoc;
};