
export const wrapperDiv = document.querySelector('.wrapper')
export const winnerDiv = document.createElement('div') 
export const showDiv = document.createElement('div')

export function showAll(pokemoni){
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
}

export function showWinner(pokemoni){

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
}

