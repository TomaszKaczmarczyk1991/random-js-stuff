const crypto = require('crypto');

// Creating a hash object
const hash = crypto.createHash('sha256');

// Hashing some data
const data = 'Fajny ten JS!';
hash.update(data);

// Getting the hashed data in hexadecimal format
const hashedData = hash.digest('hex');

console.log('SHA-256 Hash:', hashedData);