//3-masala. 1 dan n gacha bo'lgan sonlarning har birining kvadratidan iborat yangi massiv qaytarish.
function kvadratlar(n) {
    let natija = [];
    
    for (let i = 1; i <= n; i++) {
        natija.push(i * i);
    }
    
    return natija;
}

console.log(kvadratlar(5)); // // → [1, 4, 9, 16, 25]
console.log(kvadratlar(1)); // // → [1][cite: 5]
