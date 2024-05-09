const compactNumber = (val) => {
  const suffixes = ["", "k", "m", "b", "t"];
  
  const suffixNum = Math.floor((""+val).length/3);
  
  let shortVal = parseFloat((suffixNum != 0 ? (val / Math.pow(1000, suffixNum)) : val).toPrecision(2));
  
  if(shortVal % 1 != 0) {
      shortVal = shortVal.toFixed(1);
  }
  return shortVal+suffixes[suffixNum]
}

console.log(compactNumber(17999999));
// "18m"