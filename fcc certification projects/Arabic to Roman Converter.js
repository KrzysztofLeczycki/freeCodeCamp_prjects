/*
 My solution of fcc project: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/

function convertToRoman(num) {
    const conArr = 
    [{order: 'unity', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6:'VI', 7: 'VII', 8: 'VIII', 9: 'IX'},
    {order: 'dozens', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6:'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'}, 
     {order: 'hundrets', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6:'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'},
      {order: 'thousands', 1: 'M', 2: 'MM', 3: 'MMM'}];
    
    let numStr = num.toString();
    const len = numStr.length;
    let result = '';
    if (num <= 0 || num > 3999){
      result = 'Out of range';
    } else {
      for (let i = len - 1; i >= 0; i--){
        if (numStr[i] !== '0'){
          result = conArr[len - i -1][numStr[i]] + result;
       }
     }
   }
   return result;
   }
