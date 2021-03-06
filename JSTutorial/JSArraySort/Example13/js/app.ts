document.body.onload = function (): void {
    interface ICar {
        type: string;
        year: number;
    }
    const cars: ICar[] = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 }
    ];

    function displayCars(): void {
        const demo: HTMLElement = document.getElementById("demo")!;
        demo.innerHTML = "";
        cars.forEach(car => {
            demo.innerHTML += `${car.type} ${car.year}<br>`;
        });
    }

    displayCars();
    
    document.getElementsByTagName("button")[0].onclick = function (): void {
        cars.sort(function (a: ICar, b: ICar): number {
            return a.year - b.year;
        });
        displayCars();
    };
};