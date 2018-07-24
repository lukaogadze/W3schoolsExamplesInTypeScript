window.onload = function (): void {
    const xmlhttp: XMLHttpRequest = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myArr: string[] = JSON.parse(this.responseText);
            document.getElementById("demo")!.innerHTML = myArr[0];
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo_array.txt", true);
    xmlhttp.send();
};