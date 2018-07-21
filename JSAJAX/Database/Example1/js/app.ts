window.onload = function (): void {
    function showCustomer(str: string): void {
        let xhttp;
        if (str == "") {
            document.getElementById("txtHint")!.innerHTML = "";
            return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint")!.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/getcustomer.asp?q=" + str, true);
        xhttp.send();
    }
    document.getElementsByTagName("select")[0].onchange = function () {
        showCustomer((this as HTMLOptionElement).value);
    }
};