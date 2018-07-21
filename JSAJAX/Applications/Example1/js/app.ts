window.onload = function (): void {
    function myFunction(xml: XMLHttpRequest) {        
        const xmlDoc = xml.responseXML!;
        let table = "<tr><th>Artist</th><th>Title</th></tr>";
        const x = xmlDoc.getElementsByTagName("CD");
        for (let i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue! +
                "</td><td>" +
                x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue! +
                "</td></tr>";
        }
        document.getElementById("demo")!.innerHTML = table;
    }

    function loadXMLDoc() {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };
        xmlhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml", true);
        xmlhttp.send();
    }
    document.getElementsByTagName("button")[0].onclick = loadXMLDoc;
};