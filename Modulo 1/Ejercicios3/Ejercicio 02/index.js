/**
 * @returns void
 */
function adivina() {

    let  pass;
    let correctPass = 2563;
    let count = 0;
    
    do {
        pass = parseInt(prompt('Introduce tu PIN (de 4 digitos):'));
        let isPasswordCorrect = pass == correctPass;

        if(isPasswordCorrect) {
            alert('Eso fue correcto!');

        } else {
            alert('Lo siento eso estaba mal');
            count++;
        }

    } while(count < 3 && pass != correctPass); 
}

/**
 * 
 * @returns void
 */
function adivina2() {
    let  pass;
    let correctPass = 2563;
    
    do {
        pass = prompt('Introduce tu PIN (de 4 digitos):');
    
        
        if(pass == correctPass){
            alert('Eso fue correcto!');
           
        } else if (pass != correctPass && pass.toLowerCase() != 'salir'){
            alert('Lo siento eso estaba mal');
        }
    
    } while(pass != correctPass && pass.toLowerCase() != 'salir'); 
    

}


adivina2();



