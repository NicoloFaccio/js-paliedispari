//Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

const wordAsked = prompt("Inserire una parola:", "osso")

function wordHtml(parola){
    let Paliparola = ""

    for (let i = parola.length -1; i>= 0; i-- ){
        Paliparola += parola[i]
    }

    return Paliparola
}

if (wordAsked === wordHtml(wordAsked)){
    console.log("parola palindroma")
} else {
    console.log("parola non palindroma")
}

console.log(wordHtml(wordAsked))