window.onload = () => {
    // Cross-Origin Request Blocked... fk!!!
    function loadDoc(): void {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo")!.innerHTML = this.responseText;
            }
        };
    }

    document.getElementsByTagName("button")[0].onclick = loadDoc;
};