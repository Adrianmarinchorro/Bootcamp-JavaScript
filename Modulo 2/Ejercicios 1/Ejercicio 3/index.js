// Crea un cuadrado de 100x100px con el color de fondo red y el color de texto white 
// con el texto Soy un cuadrado en el centro.

const div = document.createElement('div');

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';
div.innerText = 'Soy un cuadrado en el centro';
div.style.color = 'white';

document.body.appendChild(div);


// Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio de entre los siguientes:
// red, green, blue, yellow, pink, purple, orange.
// Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px, si es yellow, 
// pink o purple el tamaño del cuadrado debe ser de 200x200px y si es orange el tamaño del cuadrado debe ser de 300x300px.

if (String(window.performance.getEntriesByType("navigation")[0].type) === "reload") {

    let random = Math.floor(Math.random() * (8 - 1) + 1);
    let color;
    
    switch(random) {
        case 1:
            color = 'red';
            break;
        case 2:
            color = 'green';
            break;
        case 3:
            color = 'blue';
            break;
        case 4:
            color = 'yellow';
            div.style.width = '200px';
            div.style.height = '200px';
            break;
        case 5:
            color = 'pink';
            div.style.width = '200px';
            div.style.height = '200px';
            break;
        case 6:
            color = 'purple';
            div.style.width = '200px';
            div.style.height = '200px';
            break;
        case 7:
            color = 'orange';
            div.style.width = '300px';
            div.style.height = '300px';
            break;
    };
    
    div.style.backgroundColor = color;

    console.log(random, color);
};