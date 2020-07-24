// Fizz 3
// Buzz 5
// Zazz 7 
// Broj ako nije nista

for (let i = 1; i <= 100; i++){
    let str = ''
    if (i % 3 === 0){
        str += 'Fizz';
    }
    if (i % 5 === 0){
        str += 'Buzz';
    }
    console.log(str || i) 
}

    // if (i % 7 === 0){
    // str += 'Zazz';
    // }

    // Moze se ovako dodavati bilo koji uslov