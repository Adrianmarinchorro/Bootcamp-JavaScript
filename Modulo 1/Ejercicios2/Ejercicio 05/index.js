
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
function getPersonasMayoresDeEdad(personas) {
    
    return personas.filter((persona) => persona.edad >= 18);

};

/**
 * Dime cual es la persona más joven del array.
 * @param {Array} personas 
 * @returns Object
 */
function getPersonaMasJoven(personas) {

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
function getPersonaMasMayor(personas) {

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