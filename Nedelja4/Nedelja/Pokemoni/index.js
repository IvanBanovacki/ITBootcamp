let pokemon1 = 
{
    name: 'Rattata', 
    type: 'Normal',
    abilities:['Run Away', 'Guts'], 
    stats:{attack: 40, defense: 30, speed: 50},
    about: 'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
    image: "images/rattata.png"
}
let pokemon2 = 
{
    name: 'Psyduck', 
    type: 'Water',
    abilities:['Damp', 'Cloud Nine'], 
    stats:{attack: 35, defense: 25, speed: 35},
    about: 'Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.',
    image: "images/psyduck.png"
}
let pokemon3 = 
{
    name: 'Ekans', 
    type: 'Poison',
    abilities:['Shed Skin', 'Intimidate'], 
    stats:{attack: 50, defense: 35, speed: 40},
    about: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
    image: "images/ekans.png"
}
let pokemon4 = 
{
    name: 'Diglet', 
    type: 'Ground',
    abilities:['Sand Veil', 'Arena Trap'], 
    stats:{attack: 40, defense: 20, speed: 60},
    about: 'If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.',
    image: "images/diglet.png"
}
let pokemon5 =
{
    name: 'Alakazam', 
    type: 'Psychic',
    abilities:['Inner Focus', 'Synchronize'], 
    stats:{attack: 30, defense: 30, speed: 80},
    about: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
    image: "images/alakazam.jpg"
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5,]

/* 4. Направити функцију која прима низ покемона, пореди покемоне 
по јачини и враћа као победника оног који има највећу јачину напада. */

function najjaciPokemon(pokemoni){
    pokemoni.sort((a,b) => b.stats.attack - a.stats.attack)
    return pokemoni[0]
}


// 5. За дати html направити скрипту која:
// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

const showBtn = document.querySelector('#prikaz')
const wrapperDiv = document.querySelector('.wrapper')
const winnerBtn = document.querySelector('#pobednik')
const winnerDiv = document.createElement('div') 
const showDiv = document.createElement('div')


showBtn.addEventListener('click', (e) => {
    pokemoni.forEach( el => {

        const pokemonPar = document.createElement('p')
        const pokemonAbout = document.createElement('p')
        pokemonPar.textContent = `Name: ${el.name}|| Type: ${el.type}|| Abilities: ${el.abilities}||`
        pokemonAbout.textContent = el.about
    
        const pokemonImg = document.createElement('IMG')
        pokemonImg.src = el.image
        pokemonImg.height = 100

        showDiv.append(pokemonImg, pokemonPar, pokemonAbout)
        wrapperDiv.append(showDiv)
    })
    winnerDiv.classList.add('hide')
    winnerDiv.innerHTML = ''
    showDiv.classList.remove('hide')
})
// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад 
// (користити већ написану функцију иѕ 4. задатка) по истом формату.

winnerBtn.addEventListener('click', (e) => {
    najjaciPokemon(pokemoni)

    const winnerPar = document.createElement('p')
    const winnerAbout = document.createElement('p')
    winnerPar.textContent = `Name: ${pokemoni[0].name}|| Type: ${pokemoni[0].type}|| Abilities: ${pokemoni[0].abilities}||`
    winnerAbout.textContent = pokemoni[0].about

    const winnerImg = document.createElement('IMG')
    winnerImg.src = pokemoni[0].image
    winnerImg.height = 100

    winnerDiv.append(winnerPar, winnerImg)
    wrapperDiv.append(winnerDiv)

    showDiv.classList.add('hide')
    showDiv.innerHTML = ''
    winnerDiv.classList.remove('hide')
})

