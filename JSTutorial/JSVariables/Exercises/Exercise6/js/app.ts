/*Use a single var keyword to create three variables with the following values:
firstName = "John"
lastName = "Doe"
age = 35*/
document.body.onload = function (): void {
    const firstName: string = "John",
    lastName: string = "Doe",
    age: number = 35,
    msg: string = `${firstName} ${lastName} is ${age}`;        
    document.getElementById("demo")!.innerHTML = msg;
};