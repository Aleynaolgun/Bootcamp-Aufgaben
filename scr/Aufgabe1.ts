
// Aufgabe 1 Rabatt
let price=90 //man muss den Geldbetrag selbst eingeben.
let isMember: boolean = false;  //man muss true/ false selber eingeben (ob es ein Member sein soll oder nicht)
 if(isMember && price>100) {
     console.log("Es gibt 20% Rabatt", price*0.8);
 } else( isMember&& price>100 || isMember && price<100)
     console.log("Es gibt 10% Rabatt, ab 100", price*0.9,
          "Es gibt kein Rabatt, unter 100", price);
 {



}