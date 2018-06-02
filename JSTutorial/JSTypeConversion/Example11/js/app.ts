document.body.onload = function (): void {
    // this isn't valid ts code...
    // give me break!
    // var x = [];
    // document.getElementById("demo")!.innerHTML =
    //     (5 + null) + "<br>" +
    //     ("5" + null) + "<br>" +
    //     ("5" + 2) + "<br>" +
    //     ("5" - 2) + "<br>" +
    //     ("5" * "2") + "<br>" +
    //     ("5" / "2") + "<br>"
    const msg: string = 
    `5<br>5null<br>52<br>3<br>10<br>2.5`;
    document.getElementById("demo")!.innerHTML = msg;    
};