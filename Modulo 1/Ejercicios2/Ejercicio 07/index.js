/**
 * Crea una función que reciba un número y devuelva el doble de ese número.
 * @param {number} numero 
 * @returns number
 */ 
let doble = (numero) => numero * 2;

console.log(doble(3));

/**
 * Crea una función que reciba un número y devuelva el cuadrado de ese número.
 * @param {number} numero 
 * @returns number
 */
let cuadrado = (numero) => numero ** 2;

console.log(cuadrado(5));

/**
 * Crea una función que calcule el área de un rectángulo y la muestre por consola.
 * @param {number} base 
 * @param {number} altura 
 * @returns number
 */
let areaRectangulo = (base, altura) => base * altura;

console.log(areaRectangulo(3, 4));

/**
 * Crea una función que reciba un número y muestre por consola si es par o impar.
 * @param {number} numero 
 * @returns void
 */
let esParOImpar = (numero) => {
    if(numero % 2 === 0) {
        console.log('El numero', numero, 'es par');
        return;
    }
    console.log('El numero', numero, 'es impar');
};

esParOImpar(5);
esParOImpar(2);

const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

/**
 * Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
 * @param {Array} personas 
 * @returns Array
 */
let getPersonasMayoresDeEdad = (personas) => personas.filter((persona) => persona.edad >= 18);

/**
 * Dime cual es la persona más joven del array.
 * @param {Array} personas 
 * @returns Object
 */
let getPersonaMasJoven = (personas) => {

    let personaJoven = {nombre: 'Npc', edad: Number.MAX_SAFE_INTEGER};
    
    for (let i = 0; i < personas.length; i++) {
        
        if (personas[i].edad < personaJoven.edad) {

            personaJoven = personas[i];
        }
    }
    
    return personaJoven;
};

/**
 * Dime cual es la persona más mayor del array.
 * @param {Array} personas 
 * @returns Object
 */
let getPersonaMasMayor = (personas) => {

    let personaMayor = {nombre: 'Npc', edad: Number.MIN_SAFE_INTEGER};
    
    for (let i = 0; i < personas.length; i++) {
        
        if (personas[i].edad > personaMayor.edad) {

            personaMayor = personas[i];
        }
    }
    
    return personaMayor;
};

console.log(getPersonasMayoresDeEdad(personas));
console.log('Persona menor', getPersonaMasJoven(personas));
console.log('Persona mayor', getPersonaMasMayor(personas));

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
let muestraNombre = (pokemons) => pokemons.forEach((pokemon) => console.log(pokemon.nombre));

/**
 * crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
 * @param {Array} pokemons 
 */
let muestraNombreTipoFuego = (pokemons) => {
    pokemons.forEach((pokemon) => {
        if(pokemon.tipoDePokemon === "fuego") {
        console.log(pokemon.nombre);
        }
    });
};

console.log('lista de pokemons:');
muestraNombre(arrayPokemons);

console.log('lista de pokemons de tipo fuego:');
muestraNombreTipoFuego(arrayPokemons);