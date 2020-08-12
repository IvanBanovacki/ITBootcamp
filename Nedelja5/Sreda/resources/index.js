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

import { strongestPokemon, abilities, sortBySpeed } from "./strongest.js"
import { showAll, showWinner, wrapperDiv, winnerDiv, showDiv} from "./DOM.js"

// 5. За дати html направити скрипту која:
// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

const showBtn = document.querySelector('#prikaz')
const winnerBtn = document.querySelector('#pobednik')

showBtn.addEventListener('click', (e) => {
    showAll(pokemoni)
})

winnerBtn.addEventListener('click', (e) => {
    strongestPokemon(pokemoni)
    showWinner(pokemoni)
})

console.log(sortBySpeed(pokemoni));
console.log(strongestPokemon(pokemoni));
console.log(abilities(pokemoni));

