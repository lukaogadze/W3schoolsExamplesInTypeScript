document.body.onload = function (): void {
    document.getElementsByTagName("button")[0].onclick = function () {
        document.write((5 + 6).toString());
    };
};