// Funktion für den Durchschnitt
function durchschnitt(zahl1, zahl2){
    let anzahl_zahlen = 2;
    let ergebnis = (zahl1 + zahl2) / anzahl_zahlen;
    if (!zahl1 ||  !zahl2){
       return NaN
    }
    return ergebnis
}
console.log(durchschnitt(9,15 ))