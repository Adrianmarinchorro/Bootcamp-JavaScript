// Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
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

// Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.
arrayPokemons.forEach(function (pokemon) {

    if(pokemon.tipoDePokemon === "fuego") {
        console.log(pokemon.nombre, " = ¡Es un pokemon de fuego!");
    }
});