document.body.onload = function (): void {
    const fruits: string[] = ["Banana","Orange","Apple","Mango"];
    document.getElementById("demo")!.innerHTML = fruits.length.toString();
    let text: string = "<ul>";
    for (let i = 0; i < fruits.length; i++) {        
        text+=`<li>${fruits[i]}</li>`;
    }
    text+="</ul>";
    document.getElementById("demo")!.innerHTML = text;
    
};