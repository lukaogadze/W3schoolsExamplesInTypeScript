document.body.onload = function (): void {
    const result: string = `${parseInt("10")}<br>${parseInt("10.33")}<br>${parseInt("10 6")}<br>${parseInt("10 years")}<br>${parseInt("years 10")}`;
    document.getElementById("demo")!.innerHTML = result;
};