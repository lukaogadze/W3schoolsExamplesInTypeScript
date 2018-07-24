window.onload = function (): void {
    let obj: {table: string; limit: number}, dbParam: string, xmlhttp: XMLHttpRequest, myObj: any, x: string, txt = "";
    obj = { "table": "customers", "limit": 10 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            for (x in myObj) {
                txt += myObj[x].name + "<br>";
            }
            document.getElementById("demo")!.innerHTML = txt;
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo_db.php?x=" + dbParam, true);
    xmlhttp.send();
};