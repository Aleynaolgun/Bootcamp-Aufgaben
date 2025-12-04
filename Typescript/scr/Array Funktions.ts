//Array Funktions

interface Car {
    brand: string;
    model: string;
}
const car: Car[] = [
    {brand: 'Ford', model: 'Mustang'},
    {brand: 'Ford', model: 'Fiesta'},
    {brand: 'Ford', model: 'Focus'},
    {brand: 'VW', model: 'Golf'},
    {brand: 'VW', model: 'Polo'},
    {brand: 'VW', model: 'Passat'},
    {brand: 'Audi', model: 'A6'},
    {brand: 'Audi', model: 'A4'},
    {brand: 'Audi', model: 'A3'},
    {brand: 'Audi', model: 'R8'},
    {brand: 'BMW', model: 'M5'},
    {brand: 'BMW', model: 'M3'},
    {brand: 'BMW', model: 'X6'},
    {brand: 'Mercedes', model: 'C-Class'},
    {brand: 'Mercedes', model: 'E-Class'},
    {brand: 'Mercedes', model: 'S-Class'},
];

//Aufgabe 1
const model: string[] = car.map((carItem) => {
    return carItem.model;
});
console.log(model)

//Aufgabe 2
const sortedCars = car.slice().sort((a, b) => {

    const brandA = a.brand.toUpperCase();
    const brandB = b.brand.toUpperCase();

    if (brandA < brandB) {
        // Z.B. 'AUDI' < 'BMW'. Wenn a kleiner ist als b, kommt a zuerst.
        return -1;
    }
    if (brandA > brandB) {
        // Z.B. 'BMW' > 'AUDI'. Wenn a größer ist als b, kommt b zuerst.
        return 1;
    }

    // 3. Wenn sie gleich sind, ändert sich nichts an der Reihenfolge
    return 0;
});
console.log(sortedCars)

//Aufgabe 3

const audiCars = car.filter((carItem) => {
    return carItem.brand === 'Audi'; // Gib 'true' zurück, wenn die Bedingung erfüllt ist
});
console.log(audiCars)