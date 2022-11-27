let datos = window.localStorage;

let añadirGasto = function () {

    let count = datos.length;

    let gasto = parseInt(prompt('Añada el precio del gasto:'));

    datos.setItem(`gasto-${count}`, gasto);
}

let listarGasto = function () {

    let gastos = 0;

    for(let i = 0; i < datos.length; i++) {
        
        let key = datos.key(i);
        
       
        if(key != 'ingreso'){

            if(datos.getItem(key) != NaN){
                console.log(key, '=>', datos.getItem(key));
                gastos +=  parseInt(datos.getItem(key));
            }
        }
    }

    console.log(gastos);
    
};

let editarGasto = function () {

    listarGasto();

    let gasto = parseInt(prompt('Introduzca el nº del gasto a modificar:'));

    if(gasto > datos.length || gasto < 0) {

        console.log('El gasto no existe');
        return;
    }

    let precio = parseInt(prompt('Introduzca el nuevo valor del gasto:'));

    datos.setItem(`gasto-${gasto}`, precio);

}

let eliminarGasto = function () {

    listarGasto();

    let gasto = parseInt(prompt('Introduzca el nº del gasto a eliminar:'));

    if(gasto > datos.length || gasto < 0) {

        console.log('El gasto no existe');
        return;
    }

    datos.removeItem(`gasto-${gasto}`);

}

let introducirIngreso = function () {

    let ingreso = parseInt(prompt('Añada los ingresos totales:'));

    datos.setItem('ingreso', ingreso);
}

let balance = function () {

    let gastos = 0;

    for(let i = 0; i < datos.length; i++) {
        
        let key = datos.key(i);
       
        if(key != 'ingreso'){

            if(datos.getItem(key) != NaN){
                gastos +=  parseInt(datos.getItem(key));
            }
        }
    }

    console.log('Gastos:', gastos, 'Ingresos:', datos.getItem('ingreso'));
    console.log('balance:', datos.getItem('ingreso') - gastos)


     

}


do {

    console.log('Menu principal:\r\n-----\r\n', '1. Añadir un gasto\r\n', '2. Mostrar un listado de gastos\r\n',
    '3. Editar un gasto\r\n', '4. Eliminar un gasto\r\n', '5. Introducir ingresos\r\n', '6. Balance\r\n', '0. Salir');
   
    option = prompt('Seleccione uno de los siguientes numeros para el menu:');

    switch (option) {
        
        case '1':
            añadirGasto();
            break;
        case '2':
            listarGasto();
            break;    
        case '3':
            editarGasto();
            break;
        case '4':
            eliminarGasto();
            break;
        case '5':
            introducirIngreso();
            break;
        case '6':
            balance();
            break;    
        case '0':
            console.log('Hasta pronto.');
            break;        
        default:
            console.log('valor no valido');
            break;
        }

} while (option != 0);

