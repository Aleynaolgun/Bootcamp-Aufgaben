
// Aufgabe 1 Rabatt
let price=50 //man muss den Geldbetrag selbst eingeben.
let isMember: boolean = false;
//let isNotMember: boolean = false;
if(isMember && price>100) {
     console.log("Es gibt 20% Rabatt", price*0.8);
 }
else if( !isMember && price>100) {
 // if( isNotMember && price>100) {
    console.log("Es gibt 10% Rabatt", price * 0.9);

}
else{
//else( !isMember && price<100) {
//if(isNotMember && price<100){
     console.log("Es gibt keinen Rabatt", price);}



