document.body.onload = function (): void {
    const msg: string = `${typeof {name:"John", age:34}}<br>${typeof [1,2,3,4]}<br>${typeof null}<br>${typeof function myFunction() {}}`;
    document.getElementById("demo")!.innerHTML = msg;    
};