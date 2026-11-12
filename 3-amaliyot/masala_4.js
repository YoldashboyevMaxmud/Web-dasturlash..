//4-masala. Berilgan so'zdagi eng ko'p qatnashgan harfni qaytarish.
function engKopUchraganHarf(s) {
    let maxHarf = '';
    let maxSoni = 0;
    
    for (let i = 0; i < s.length; i++) {
        let harf = s[i];
        let joriySoni = 0;
        
        for (let j = 0; j < s.length; j++) {
            if (s[j] === harf) {
                joriySoni++;
            }
        }
        
        if (joriySoni > maxSoni) {
            maxSoni = joriySoni;
            maxHarf = harf;
        }
    }
    
    return maxHarf;
}
