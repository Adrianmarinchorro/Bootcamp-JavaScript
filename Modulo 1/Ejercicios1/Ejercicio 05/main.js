// Crea un array de 3 pokemons.
let miArray = ["pikachu", "charmander", "squirtle"];

// Muestra por consola el nombre de cada pokemon.
console.log(miArray[0]);
console.log(miArray[1]);
console.log(miArray[2]);

// Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
console.log(miArray[0], miArray[1], miArray[2]);
console.log(miArray.join());

// Bonus extra: ¿Cómo se pueda hacer esto con bucles?
miArray.forEach((pokemon) => console.log(pokemon));
for(let i = 0; i < miArray.length; i++){
    console.log(miArray[i]);
}