/**
 * @param {array} array 
 * @returns array
 */
function filtra(array) {
    return array.filter(elemento => elemento[0].toUpperCase() === 'A');
};

console.log(filtra(['Array', 'array', 'pepe', 'Filter']).join());