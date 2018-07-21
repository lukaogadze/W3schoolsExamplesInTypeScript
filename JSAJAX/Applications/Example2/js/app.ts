window.onload = function (): void {
    function displayCD(i: number): void {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this, i);
            }
        };
        xmlhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml", true);
        xmlhttp.send();
    }

    function myFunction(xml: XMLHttpRequest, i: number): void {
        var xmlDoc = xml.responseXML!;
        const x = xmlDoc.getElementsByTagName("CD");
        document.getElementById("showCD")!.innerHTML =
            "Artist: " +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "<br>Title: " +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "<br>Year: " +
            x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    }

    displayCD(0);
};