
// zadatak1.js

// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

let cena = 200
let R = 42

let P = (R / 2) ** 2 * Math.PI

if (cena > 0 && R > 0) {
    let P = (R / 2) ** 2 * Math.PI
    console.log(`Cena pice po cm^2 je: ${cena / P}`)
}
else {
    console.log("Cena/Precnik pice mora biti pozitivan broj")
}

