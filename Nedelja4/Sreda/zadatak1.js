// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90

let pokemon1 = 
{
    name: 'Rattata', 
    type: 'Normal',
    abilities:['Run Away', 'Guts'], 
    stats:{attack: 40, defense: 30, speed: 50}
}
let pokemon2 = 
{
    name: 'Psyduck', 
    type: 'Water',
    abilities:['Damp', 'Cloud Nine'], 
    stats:{attack: 35, defense: 25, speed: 35}
}
let pokemon3 = 
{
    name: 'Ekans', 
    type: 'Poison',
    abilities:['Shed Skin', 'Intimidate'], 
    stats:{attack: 50, defense: 35, speed: 40}
}
let pokemon4 = 
{
    name: 'Diglet', 
    type: 'Ground',
    abilities:['Sand Veil', 'Arena Trap'], 
    stats:{attack: 40, defense: 20, speed: 60}
}
let pokemon5 =
{
    name: 'Alakazam', 
    type: 'Psychic',
    abilities:['Inner Focus', 'Synchronize'], 
    stats:{attack: 30, defense: 30, speed: 80}
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5,]

// console.log(pokemoni);

// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// [<...>,...]

function abilities(pokemoni){
    let arr = []
    pokemoni.forEach(el => {
        arr.push(el.abilities)
    })
    return arr.flat()
}

console.log(abilities(pokemoni));

// 3. Сортирати покемоне по брзини, растуће.

let sorted = pokemoni.sort((a,b) => a.stats.speed - b.stats.speed).map(el => el.name)

console.log(sorted);


// showBtn.addEventListener('click', (e) => {
//     pokemoni.forEach( el => {
//         const pokemonDiv = document.createElement('div')
    
//         const pokemonPar = document.createElement('p')
//         pokemonPar.textContent = `
//         Name: ${el.name}||
//         Type: ${el.type}||
//         Abilities: ${el.abilities}||`
    
//         const pokemonImg = document.createElement('IMG')
//         pokemonImg.src = el.image
//         pokemonImg.height = 100
    
//         pokemonDiv.append(pokemonImg, pokemonPar)
//         wrapperDiv.append(pokemonDiv)
//     })
// })

