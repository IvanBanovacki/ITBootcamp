
// zadatak2.js - Продавница

// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

let cena = 200
let novac = 500

if (novac - cena < 0 && cena > 0 && novac > 0) {
    console.log('Nemate dovoljno novca.')
    console.log(`Trenutno stanje: ${novac}`)
} 
else if(cena > 0 && novac > 0){
    console.log('Uspesno ste kupili proizvod')
    console.log(`Trenutno stanje: ${novac - cena}`)
}
else {
    console.log('Unesite validnu cenu ili kolicinu novca!')
}

