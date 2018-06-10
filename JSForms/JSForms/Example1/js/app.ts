document.body.onload = function (): void {
    const form: HTMLFormElement = document.getElementsByName("myForm")[0] as HTMLFormElement;

    function validateForm(): boolean {
        const x: string = (<HTMLInputElement>form.children[0]).value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
        return true;
    }

    form.onsubmit = validateForm;
}
