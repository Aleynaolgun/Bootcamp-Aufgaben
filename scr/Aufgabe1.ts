
// Aufgabe 1 Rabatt
let price=150 //man muss den Geldbetrag selbst eingeben.
let isMember: boolean = true;
let isNotMember: boolean = false;
if(isMember && price>100) {
     console.log("Es gibt 20% Rabatt", price*0.8);
 }
 if( isNotMember && price>100) {
    console.log("Es gibt 10% Rabatt", price * 0.9);

}
if(isNotMember && price<100){
     console.log("Es gibt keinen Rabatt", price);}



