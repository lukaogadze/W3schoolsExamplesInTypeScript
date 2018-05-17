// The <p> element should do something when someone clicks on it. Try to fix it!
document.body.onload = function (): void {
    const demo: HTMLElement = document.getElementsByTagName("p")[0];
    demo.onclick = function (): void {
        this.innerHTML = "GOOD JOB!";
    };
};