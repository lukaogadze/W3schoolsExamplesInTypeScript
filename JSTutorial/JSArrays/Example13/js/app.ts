document.body.onload = function (): void {
    const fruits: string[] = ["Banana","Orange","Apple","Mango"];
    fruits[6] = "Lemon";
    let text: string = "";
    for (let i = 0; i < fruits.length; i++) {
        text += fruits[i] + "<br>";        
    }
    
    document.getElementById("demo")!.innerHTML = text;
};