document.body.onload = function (): void {
    /*
    The code below will change
    the heading with id = "myH"
    and the paragraph with id = "myp"
    in my web page:
    */
    document.getElementById("myH")!.innerHTML = "My First Page";
    document.getElementById("myP")!.innerHTML = "My first paragraph.";
};