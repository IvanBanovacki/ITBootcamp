// zadatak4.js

//     Исписати првих 1000 бројева дељивих са 5

let x = 1
let i = 0

while (i < 1000) {
    if (x % 5 === 0){
        console.log(x)
        i++
        x++
    }
    else {
        x++
    }
}