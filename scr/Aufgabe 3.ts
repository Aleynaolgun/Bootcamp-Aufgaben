//Tannenbaum aus Sternen
let höhe=4;                     //Höhe deklariert

for(let i=0; i <= höhe; i++){   // die Sternchen Reihen

    for (let j = höhe; j >i; j--) {
        process.stdout.write(" ")
    }

    for (let j = 0; j <i*2 +1; j++) { // die Anzahl der Sterne, in den Reihen
       process.stdout.write("*")          //Sterne nebeneinander ausgegeben
    }

   console.log() // zeilenumbruch
}
