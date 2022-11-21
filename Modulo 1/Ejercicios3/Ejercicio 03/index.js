/**
 * 
 * @param {string} string 
 * @returns boolean
 */
function isPalindrome(string) {

    let j = string.length - 1;

    for(let i = 0; i < string.length; i++) {
        
        if (string[i] != string[j]){
            return false;
        }

        j--;
    }

    return true;
}

console.log(isPalindrome('apepa'));

/**
 * 
 * @param {array} array 
 * @returns array
 */
function isAPalindromeArray(array) {
    return array.filter(elemento => isPalindrome(elemento));
}

console.log(isAPalindromeArray(['pep', 'apeepa', 'apep']));