window.onload = function (): void {
    function myFunction(xml: XMLHttpRequest): void {
        const xmlDoc = xml.responseXML!;
        let table: string = "<tr><th>Artist</th><th>Title</th></tr>";
        const x: NodeListOf<Element> = xmlDoc.getElementsByTagName("CD");
        for (let i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                "</td></tr>";
        }
        document.getElementById("demo")!.innerHTML = table;
    }

    function loadDoc(): void {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };
        xhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml", true);
        xhttp.send();
    }

    document.getElementsByTagName("button")[0].onclick = loadDoc;
};