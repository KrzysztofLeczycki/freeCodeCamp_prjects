function rot13(str) {
  const rangeAZ = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (str[i].match(/[A-Z]/)){
      let code = str[i].charCodeAt(0);
      if(code + 13 > rangeAZ[1]){
        code -= 13;
        newStr += String.fromCharCode(code);
      } else {
         code += 13;
        newStr += String.fromCharCode(code);
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));