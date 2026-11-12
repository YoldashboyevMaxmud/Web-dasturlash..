//5-masala.
// Ikki massivda ham qatnashgan umumiy elementlardan iborat takrorsiz massiv qaytaradi.
function kesishma(a, b) {
    let kesishmaMassivi = [];
    
    for (let i = 0; i < a.length; i++) {
        let element = a[i];
        
        if (b.includes(element) && !kesishmaMassivi.includes(element)) {
            kesishmaMassivi.push(element);
        }
    }
    
    return kesishmaMassivi;
}
