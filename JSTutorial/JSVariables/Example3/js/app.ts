document.body.onload = function (): void {
    const pi: number = 3.14;
    const person: string = "John Doe";
    const answer: string = 'Yes I am!';
    const demo: HTMLElement = document.getElementById("demo")!;
    const msg: string = pi + "<br>" + person + "<br>" + answer;
    demo.innerHTML = msg;
};