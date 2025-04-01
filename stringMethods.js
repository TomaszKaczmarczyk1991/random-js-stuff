// JS string methods

// 1) substring()
let text = "Uszanowanko!";
let result = text.substring(1);
console.log(result); // szanowanko!

result = text.substring(3, 6);
console.log(result); // ano

// 2) substr()
result = text.substr(3, 6);
console.log(result); // anowan
// (the second parameter specifies length)

// 3) chatAt()
result = text.charAt(0)
console.log(result); // U

// 4) localeCompare()

const strings = ['arbuzy', 'pomarańczki', 'melony', 'mandarynki'];

const sortedStrings = strings.sort((a, b) => a.localeCompare(b));
