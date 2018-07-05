window.onload = function (): void {
    const w: number = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const h: number = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    const x = document.getElementById("demo")!;
    x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
};