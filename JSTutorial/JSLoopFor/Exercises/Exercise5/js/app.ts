// Inside the for loop: 
// Set the counter variable (i) to 0. 
// Run the loop as long as i is less than the length of the food array. 
// Increment i by 1.
// var text = "";
// var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
// var i;

// for () {
//     text += "I love " + food[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

document.body.onload = function (): void {
    let text: string = "";
    const food: string[] = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];

    for (let i = 0; i < food.length; i++) {
        text += "I love " + food[i] + "<br>";
    }

    document.getElementById("demo")!.innerHTML = text;
};