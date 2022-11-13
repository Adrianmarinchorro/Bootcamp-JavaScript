
let arrayPokemons = [
    {
        nombre: "pikachu",
        tipoDePokemon: "electrico",
    },
    {
        nombre: "charmander",
        tipoDePokemon: "fuego"
    },
    {
        nombre: "squirtle",
        tipoDePokemon: "agua",
    },
];

/**
 * crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
 * @param {Array} pokemons 
 */
function muestraNombre(pokemons) {
    pokemons.forEach(function (pokemon) {
        console.log(pokemon.nombre);
    });
}

/**
 * crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
 * @param {Array} pokemons 
 */
function muestraNombreTipoFuego(pokemons) {
    pokemons.forEach(function (pokemon) {
        if(pokemon.tipoDePokemon === "fuego") {
        console.log(pokemon.nombre);
        }
    });
}

console.log('lista de pokemons:');
muestraNombre(arrayPokemons);

console.log('lista de pokemons de tipo fuego:');
muestraNombreTipoFuego(arrayPokemons);