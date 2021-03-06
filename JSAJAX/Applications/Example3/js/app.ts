window.onload = function (): void {
    let i = 0, len: number = 0;
    displayCD(i);

    function displayCD(i: number) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this, i);
            }
        };
        xmlhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml", true);
        xmlhttp.send();
    }

    function myFunction(xml: XMLHttpRequest, i: number) {
        var xmlDoc = xml.responseXML!;
        let x = xmlDoc.getElementsByTagName("CD");
        len = x.length;
        document.getElementById("showCD")!.innerHTML =
            "Artist: " +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "<br>Title: " +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "<br>Year: " +
            x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    }

    function next() {
        if (i < len - 1) {
            i++;
            displayCD(i);
        }
    }

    function previous() {
        if (i > 0) {
            i--;
            displayCD(i);
        }
    }

    const inputs = document.getElementsByName("input");
    inputs[0].onclick = previous;
    inputs[1].onclick = next;
};