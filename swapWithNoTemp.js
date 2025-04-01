const swap = (a, b) => {
    a ^= b;  // a becomes a ^ b
    b ^= a;  // b becomes (a ^ b) ^ a, which simplifies to b
    a ^= b;  // a becomes (a ^ b) ^ b, which simplifies to a
    return [a, b];
}

console.log(swap(5, 3)); // Output: [3, 5]
