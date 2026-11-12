// 1-masala. bo'luvchular sonini topish.
// Berilgan musbat butun sonning 1 dan o'zigacha bo'lgan barcha bo'luvchilari sonini aniqlaydi.
function boluvchilarSoni(n) {
    let boluvchilarSoni = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            boluvchilarSoni++;
        }
    }
    
    return boluvchilarSoni;
}
