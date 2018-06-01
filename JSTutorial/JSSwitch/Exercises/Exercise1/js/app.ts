// The switch statement is missing a case for "Apple". Add it, and set text to "How you like them apples?"
// function checkFruit() {
//     var text;
//     var fruits = document.getElementById("myInput").value;
  
//     switch(fruits) {
//       case "Banana":
//         text = "Banana is good!";
//         break;
//       case "Orange":
//         text = "I am not a fan of orange.";
//         break;
  
//       // add case here
  
//       default:
//         text = "I have never heard of that fruit.";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
document.body.onload = function (): void {
    function checkFruit(): void {
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