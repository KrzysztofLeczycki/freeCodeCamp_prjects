function telephoneCheck(str) {
    const regexArr = [/^1? ?\d{3}-\d{3}-\d{4}$/,
                      /^1? ?\(\d{3}\) ?\d{3}-\d{4}$/,
                      /^1? ?\d{3} \d{3} \d{4}$/,
                      /^\d{10}$/];
    
     return regexArr.some(regex => regex.test(str));
  }
  
  console.log(telephoneCheck("27576227382"));