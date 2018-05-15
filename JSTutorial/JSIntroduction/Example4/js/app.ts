document.body.onload = function () {
    function changeStyle(): void {
        (<HTMLStyleElement>document.getElementById('demo')).style.fontSize='35px';
    }
    document.getElementsByTagName("button")[0].onclick = changeStyle;
};