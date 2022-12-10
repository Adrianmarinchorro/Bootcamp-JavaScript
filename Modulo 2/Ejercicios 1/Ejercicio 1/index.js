// Muestra en la consola el texto de cada uno de los párrafos.
console.log('1º parte:');

let nodosList = document.querySelectorAll('p');

nodosList.forEach(nodo => console.log(nodo.innerText));

// Muestra en la consola el texto de cada uno de los párrafos 
// que tengan la clase parrafo.
console.log('2º parte:');

let nodosClase = document.querySelectorAll('.parrafo');

nodosClase.forEach(nodo => console.log(nodo.innerText));

// Modifica el texto de cada uno de los párrafos que tengan la 
// clase parrafo por "Hola Mundo".
console.log('3º parte:');

nodosClase.forEach(nodo => nodo.innerText = 'Hola Mundo');

console.log(nodosClase[0].innerText);

// Cambia el color de fondo de cada uno de los párrafos
// que tengan la clase parrafo por red.
console.log('4º parte:');

nodosClase.forEach(nodo => nodo.style.backgroundColor = 'red');

console.log(nodosClase[0].style.backgroundColor);
// Añade un span con el texto "Infiltrado" al final de cada uno 
// de los párrafos que tengan la clase parrafo.
console.log('5º parte:');

nodosClase.forEach(nodo => nodo.innerHTML += ' <span>Infiltrado</span>');

console.log(nodosClase[0]);