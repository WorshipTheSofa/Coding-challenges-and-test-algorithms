let lastDigit = function(str1, str2){
  return (str2 === "0") ? 1 : Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 + 4) % 10
}

lastDigit("3715290469715693021198967285016729344580685479654510946723",
"68819615221552997273737174557165657483427362207517952651")