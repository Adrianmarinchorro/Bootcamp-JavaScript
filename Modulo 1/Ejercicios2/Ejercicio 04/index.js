/**
 * Crea una función que reciba un número y muestre por consola si es par o impar.
 * @param {number} numero 
 * @returns void
 */
function parOImpar(numero) {
    if(numero % 2 === 0) {
        console.log('El numero', numero, 'es par');
        return;
    }

    console.log('El numero', numero, 'es impar');
    
};

parOImpar(4);
parOImpar(5);