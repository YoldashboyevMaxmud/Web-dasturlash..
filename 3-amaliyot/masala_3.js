//3-masala. 1 dan n gacha bo'lgan sonlarning har birining kvadratidan iborat yangi massiv qaytarish.
// 1 dan n gacha bo'lgan sonlarning har birining kvadratidan iborat massiv qaytaradi.
function kvadratlar(n) {
    let natijaMassivi = [];
    
    for (let i = 1; i <= n; i++) {
        natijaMassivi.push(i * i);
    }
    
    return natijaMassivi;
}
