document.body.onload = function (): void {
    const msg: string = `${typeof 0}<br>${typeof 314}<br>${typeof 3.14}<br>${typeof (3)}<br>${typeof (3 + 4)}`;
    document.getElementById("demo")!.innerHTML = msg; 
};