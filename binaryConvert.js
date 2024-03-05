function binaryConvert(num){
  if(num === 0) return '0';
  
  let power = 1;
  let binary = 0;

  while (num) {
    const rem = num % 2;
    num = Math.floor(num / 2);
    binary = rem * power + binary;
    power *= 10;
  }

  return binary.toString();
}

binaryConvert(5);