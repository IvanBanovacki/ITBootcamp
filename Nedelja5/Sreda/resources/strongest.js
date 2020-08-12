
export function abilities(pokemoni){
    let arr = []
    pokemoni.forEach(el => {
        arr.push(el.abilities)
    })
    return arr.flat()
}

export function sortBySpeed(pokemoni){
    return pokemoni.sort((a,b) => a.stats.speed - b.stats.speed).map(el => el.name)
}

export function strongestPokemon(pokemoni){
    pokemoni.sort((a,b) => b.stats.attack - a.stats.attack)
    return pokemoni[0]
}

