//funktion quersumme
function quersumme(zahl){
    if(!zahl) return NaN;
    zahl = zahl.toString();
    if (zahl && zahl.length==2){
        let ergebnis = parseInt(zahl.charAt(0) + parseInt(zahl.charAt(1)));
        return ergebnis;
    } else {
        return NaN
    }
}
console.log(quersumme(2))