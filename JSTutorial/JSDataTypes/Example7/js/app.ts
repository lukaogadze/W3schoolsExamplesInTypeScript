document.body.onload = function (): void {
    const answer1: string = "It's alright";
    const answer2: string = "He is called 'Johnny'";
    const answer3: string = 'He is called "Johnny"';

    document.getElementById("demo")!.innerHTML =
        answer1 + "<br>" +
        answer2 + "<br>" +
        answer3;
};