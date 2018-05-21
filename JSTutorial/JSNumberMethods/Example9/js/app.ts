document.body.onload = function (): void {
    const result: string = `${parseFloat("10")}<br>${parseFloat("10.33")}<br>${parseFloat("10 6")}<br>${parseFloat("10 years")}<br>${parseFloat("years 10")}`;
    document.getElementById("demo")!.innerHTML = result;
};