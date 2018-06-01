// The switch statement does not work. Try to fix it.
// function checkFruit() {
//     var text;
//     var fruits = document.getElementById("myInput").value;
  
//     switch(fruits) {
//       case "Banana"
//         text = "Banana is good!";
//       case "Orange"
//         text = "I am not a fan of orange.";
//       case "Apple"
//         text = "How you like them apples?";
//       default
//         text = "I have never heard of that fruit.";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

document.body.onload = function (): void {
    function checkFruit() {
        let text: string;
        const fruits: string = (<HTMLInputElement>document.getElementById("myInput")).value;

        switch (fruits) {
            case "Banana":
                text = "Banana is good!";
                break;
            case "Orange":
                text = "I am not a fan of orange.";
                break;
            case "Apple":
                text = "How you like them apples?";
                break;
            default:
                text = "I have never heard of that fruit.";
        }
        document.getElementById("demo")!.innerHTML = text;
    }

    document.getElementsByTagName("button")[0].onclick = checkFruit;

};