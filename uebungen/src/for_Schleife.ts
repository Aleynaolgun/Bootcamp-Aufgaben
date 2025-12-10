for (let i = 1; i < 10; i++){
    console.log(i)
}


let array = ["Ding", "Ding", "Klingel", "Hey Schrödinger", "Ich bin ein array"];
for( let a = 0;a < array.length; a ++){
    console.log(a)
}

function durchschnitt( zahlen){
    if (zahlen && zahlen.legth > 0 ){
        let summe = 0;
        for(let i = 0; i<zahlen.legth; i++){
            summe += zahlen[i];
        } return summe / zahlen.length;
    } else{
        return 0;
    }
durchschnitt([7,8, 12, 2,])