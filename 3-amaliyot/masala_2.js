//2-masala. Bir nechta so'zdan iborat matnni dasturlashda keng ishlatiladigan camelCase formatiga o'tkazish
// Matndagi bo'shliqlar bo'yicha ajratilgan so'zlarni camelCase formatiga o'tkazadi.
function camelCase(s) {
    let sozlar = s.trim().split(/\s+/);
    let natija = "";
    
    for (let i = 0; i < sozlar.length; i++) {
        let joriySoz = sozlar[i].toLowerCase();
        
        if (i === 0) {
            natija += joriySoz;
        } else {
            natija += joriySoz[0].toUpperCase() + joriySoz.slice(1);
        }
    }
    
    return natija;
}
