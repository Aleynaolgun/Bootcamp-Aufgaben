//Tannenbaum aus Sternen
let höhe=4;                     //Höhe deklariert

for(let aktuelleReihe=0; aktuelleReihe <= höhe; aktuelleReihe++){   // die Sternchen Reihen

    for (let aktuelleLeerstelle = höhe; aktuelleLeerstelle >aktuelleReihe; aktuelleLeerstelle--) {
        process.stdout.write(" ")
    }

    for (let aktuellesSternchen = 0; aktuellesSternchen <aktuelleReihe*2 +1; aktuellesSternchen++) { // die Anzahl der Sterne, in den Reihen
       process.stdout.write("*")          //Sterne nebeneinander ausgegeben
    }

   console.log() // zeilenumbruch
}
