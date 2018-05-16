document.body.onload = function (): void {
    const car: {type:string,model:string,color:string} =
    {
        type:"Fiat",
        model:"500",
        color:"White"
    };

    document.getElementById("demo")!.innerHTML = car.type;
};