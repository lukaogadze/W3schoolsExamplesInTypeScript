window.onload = function (): void {
    this.document.getElementsByTagName("button")[0].onclick = function () {
        (document.getElementById("id1") as HTMLStyleElement).style.color = "red";
    };
};