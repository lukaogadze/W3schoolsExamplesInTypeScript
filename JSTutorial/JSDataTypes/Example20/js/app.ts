document.body.onload = function (): void {
    const msg: string = `${typeof undefined}<br>${typeof null}<br><br>${(null === undefined)}<br>${(null == undefined)}`;
    document.getElementById("demo")!.innerHTML = msg;
};