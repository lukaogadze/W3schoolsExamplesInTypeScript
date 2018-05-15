document.body.onload = function () {
    document.getElementsByTagName("button")[0].onclick = function () {
        (<HTMLStyleElement>document.getElementById("demo")).style.display = "block";        
    };
};