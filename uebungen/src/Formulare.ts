function schreibeFehler(meldung){


}

function pruefeVornamen(){
    let vorname = document.getElementById("vorname").value;
    if (vorname == " "){
        schreibeFehler("Bitte einen vornamen angeben")
    }
    else if (vorname == "klausi"){
        schreibeFehler("Klausi muss draußen bleiben")
    }
}

function pruefeNachnamen(){
    let nachname= document.getElementById("nachname").value;
    if(nachname== " "){
        schreibeFehler("Bitte einen nachnamen angeben")
    }

}

function pruefeEmail(){
    let email = document.getElementById("email").value;
    if (email == ' '){
        schreibeFehler("Bitte geben sie eine Email an")
    }
    else if (email !=="@"){
        schreibeFehler("ungültig")
    }
}

function pruefFormular(){
    verstecktefehler();
    pruefeVornamen();
    pruefeNachnamen();
    pruefeEmail();
    schickeFormular();
}
function schickeFormular(){
    //hier muss das Vormular abgeschickt werden
}