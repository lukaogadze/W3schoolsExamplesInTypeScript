window.onload = function (): void {
    let xhttp: XMLHttpRequest, xmlDoc: Document, txt: string, x: NodeListOf<Element>;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML!;
            txt = "";
            x = xmlDoc.getElementsByTagName("ARTIST");
            for (let i = 0; i < x.length; i++) {
                txt = txt + x[i].childNodes[0].nodeValue! + "<br>";
            }
            document.getElementById("demo")!.innerHTML = txt;
        }
    };
    xhttp.open("GET", "https://www.w3schools.com/js/cd_catalog.xml", true);
    xhttp.send();
};