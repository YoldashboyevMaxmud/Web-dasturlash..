//2-masala. Bir nechta so'zdan iborat matnni dasturlashda keng ishlatiladigan camelCase formatiga o'tkazish
function camelCase(s) {
   
    let sozlar = s.trim().split(/\s+/);
    
    let natija = "";
    
    for (let i = 0; i < sozlar.length; i++) {
        let soz = sozlar[i].toLowerCase(); 
        
        if (i === 0) {
            natija += soz;
        } else {
            natija += soz[0].toUpperCase() + soz.slice(1);
        }
    }
    
    return natija;
}

console.log(camelCase("foydalanuvchi ismi familiyasi")); // // → "foydalanuvchiIsmiFamiliyasi"[cite: 5]
console.log(camelCase("Umumiy NARX"));                   // // → "umumiyNarx"[cite: 5]
