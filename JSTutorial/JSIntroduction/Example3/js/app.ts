document.body.onload = function init(): void {
    function turnOn(): void {
        (<HTMLImageElement>document.getElementById("myImage")).src = "img/on.bmp";
    }
    
    function turnOff(): void {
        (<HTMLImageElement>document.getElementById("myImage")).src = "img/off.bmp";
    }
    const btns: NodeListOf<HTMLButtonElement> = document.getElementsByTagName("button");
    btns[0].onclick = turnOn;
    btns[1].onclick = turnOff; 
};