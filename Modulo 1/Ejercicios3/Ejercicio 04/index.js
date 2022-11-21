const likes = ['Juan', 'Maria', 'Pedro', 'Pablo', 'Laura'];

/**
 * 
 * @param {array} array 
 */
function whoLikesThePhoto(array) {


    switch (array.length) {
    
        case 0: 
            console.log('Nadie ha dado like');
            break;
        
        case 1:
            console.log(array[0], 'ha dado like');
            break;
        
        case 2:
            console.log(array[0], 'y', array[1], 'han dado like');
            break;
        
        case 3:
            console.log(array[0] + ',', array[1], 'y', array[2], 'han dado like');
            break;
        
        default:
            console.log(array[0] + ',',array[1], 'y', (array.length - 2), 'personas más han dado like');
            break;
    }
}

whoLikesThePhoto(likes);