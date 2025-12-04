// Kurzer exkurs zum Variablen Scope

//Beispiel ohne Block-Scope
function gerade(zahl){
    if(zahl %2 ==0){
        var ergebnis = "gerade";
    } else {
        var ergebnis = "ungerade";
    }
    return ergebnis
}
console.log(gerade(10))

// Beispiel mit Block Scope
function gerade2(zahl) {
    let ergebnis;
    if (zahl %2==0){
        ergebnis = "gerade";
    } else {
        let teilbar3 = (zahl%3==0);
        ergebnis = "ungerade";
        if (teilbar3){
            ergebnis += ", aber teilbar durch 3.";
        }
    }
    return ergebnis
}
console.log(gerade2(3))