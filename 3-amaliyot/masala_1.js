// 1-masala. bo'luvchular sonini topish.
function boluvchilarSoni(n) {
    let soni = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            soni++;
        }
    }
    
    return soni;
}

// Sinov uchun misollar:
console.log(boluvchilarSoni(12)); // // → 6
console.log(boluvchilarSoni(13)); // // → 2
