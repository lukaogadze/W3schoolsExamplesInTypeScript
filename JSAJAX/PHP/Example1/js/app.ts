window.onload = function (): void {
    function showHint(str: string): void {
        let xhttp: XMLHttpRequest;
        if (str.length == 0) {
            document.getElementById("txtHint")!.innerHTML = "";
            return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint")!.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/gethint.php?q=" + str, true);
        xhttp.send();
    }
    document.getElementsByTagName("input")[0].onkeyup = function () {
        showHint((this as HTMLInputElement).value);
    };
};