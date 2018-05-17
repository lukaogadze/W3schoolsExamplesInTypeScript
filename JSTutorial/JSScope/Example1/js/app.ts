document.body.onload = function (): void {
    function myFunction(): void {
        //const carName: string = "Volvo";
    }
    myFunction();
    // this isn't valid typescript. so i replace it "typeof carName" with string and
    // commented carName because it's not used and causes ts error
    // document.getElementById("demo")!.innerHTML = `The type of carName is ${typeof carName}`;
    document.getElementById("demo")!.innerHTML = `The type of carName is undefined`;
};