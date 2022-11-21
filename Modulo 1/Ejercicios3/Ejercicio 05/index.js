const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
];

/**
 * 
 * @param {array} array 
 * @returns array of strings
 */
function whoLivesInMadrdid(array) {
    
   let newArray = array.filter(persona => persona.city === 'Madrid');

   return newArray.map(persona => persona.name);
}

console.log(whoLivesInMadrdid(users));

/**
 * 
 * @param {array} array 
 * @returns array of strings
 */
function whoHaveMoreThanTwentyFive(array) {

    let newArray = array.filter(persona => persona.age > 25);

    return newArray.map(persona => persona.name);
}

console.log(whoHaveMoreThanTwentyFive(users));

/**
 * 
 * @param {array} array 
 * @returns array of string
 */
function whoHaveMoreThanTwentyFiveAndLiveInMadrid(array){
    
    let newArray = array.filter(persona => persona.age > 25 && persona.city === 'Madrid');

    return newArray.map(persona => persona.name);
}

console.log(whoHaveMoreThanTwentyFiveAndLiveInMadrid(users));

/**
 * 
 * @param {array} array 
 * @returns object
 */
function findFirstPersonWhoLikesProgramming(array){

    return array.find((persona) => {
        return persona.hobbies.find(hobbie => hobbie === 'programar');
    });
}

console.log(findFirstPersonWhoLikesProgramming(users));

/**
 * 
 * @param {array} array 
 * @returns number
 */
function sumAllAges(array){

   let newArray = array.map(persona => persona.age);

   return newArray.reduce((suma, edad) => suma + edad);
}

console.log(sumAllAges(users));

/**
 * 
 * @param {array} array 
 * @returns array of objects
 */
function cityAndFirstHobbie(array) {

    return array.map(persona => objeto = {
        city: persona.city,
        hobby: persona.hobbies[0],
    });
}

console.log(cityAndFirstHobbie(users));