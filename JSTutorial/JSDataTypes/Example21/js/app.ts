document.body.onload = function (): void {
    // we are declaring variable x to make this valid typescript code
    let x: undefined;
    const msg: string = `${typeof "john"}<br>${typeof 3.14}<br>${typeof true}<br>${typeof false}<br>${typeof x}`;
    document.getElementById("demo")!.innerHTML = msg;
};