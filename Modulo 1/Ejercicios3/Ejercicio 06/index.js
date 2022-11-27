/**
 * 
 * @param {array} array 
 * @returns array
 */
function sorted(array) {

    return array.sort();
}

console.log(sorted(['ghi', 'def', 'abc']));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 
 * @param {array} array 
 * @returns array
 */
function notDuplicates(array) {
    return array.filter((element, index, arr) => arr.indexOf(element) === index);
}

console.log(notDuplicates(numbers));

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
      age: 35,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
  ];

function notDuplicatesObjects(array) {

  return array.filter((element, index, arr) => { 
   if(arr.indexOf(element.name) === index){
    
   }
  });

}
