//Moje rozwiązanie

function palindrome(str) {
    let string = str.toLowerCase().replaceAll(/\W|\s|_/g, '');
    let len = string.length;
    let result;
    for (let i = 0; i < Math.floor(len/2); i++){
      if (string[i] === string[len - i -1]){
        result = true;
      } else {
        result = false;
        break;
      }
    }
    return result;
  }
  
  console.log(palindrome("e-YYh- E"));