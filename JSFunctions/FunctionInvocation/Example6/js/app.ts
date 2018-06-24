window.onload = function (): void {
    // this isn't valid ts code
    // function myFunction(arg1, arg2) {
    //     this.firstName = arg1;
    //     this.lastName  = arg2;
    // }
    class myFunction {
        public firstName: string;
        public lastName: string;

        constructor(arg1: string, arg2: string) {
            this.firstName = arg1;
            this.lastName = arg2;
        }
    }


    const x: myFunction = new myFunction("John","Doe")
    document.getElementById("demo")!.innerHTML = x.firstName; 

};