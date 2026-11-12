//4-masala. Berilgan so'zdagi eng ko'p qatnashgan harfni qaytarish.
// Matn ichida eng ko'p qatnashgan harfni topadi, bir nechta bo'lsa birinchisini qaytaradi.
function engKopUchraganHarf(s) {
    let engKopHarf = '';
    let maxTakrorSoni = 0;
    
    for (let i = 0; i < s.length; i++) {
        let joriyHarf = s[i];
        let sanashSoni = 0;
        
        for (let j = 0; j < s.length; j++) {
            if (s[j] === joriyHarf) {
                sanashSoni++;
            }
        }
        
        if (sanashSoni > maxTakrorSoni) {
            maxTakrorSoni = sanashSoni;
            engKopHarf = joriyHarf;
        }
    }
    
    return engKopHarf;
}
