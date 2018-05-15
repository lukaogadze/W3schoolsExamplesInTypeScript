document.body.onload = function (): void {
    let lastname: string, lastName: string;
    lastName = "Doe";
    lastname = "Peterson";
    const demo: HTMLElement = document.getElementById("demo")!;
    demo.innerHTML = lastName;
    console.log(lastname);
};