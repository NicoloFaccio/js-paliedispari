//Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

const wordAsked = prompt("Inserire una parola:", "osso")

function wordHtml(parola){
    let Paliparola = Array.from(parola)

    console.log(Paliparola)
    
    if (Paliparola.length === Paliparola.length){
        document.writeln(`La parola ${wordAsked} è palindroma.`)
    } else {
        document.writeln(`La parola ${wordAsked} non è palindroma.`)
    }
}

wordHtml(wordAsked)

//if (wordAsked.length === wordAsked.length){
//    document.writeln(`La parola ${wordAsked} è palindroma.`)
//} else {
//    document.writeln(`La parola ${wordAsked} non è palindroma.`)
//}


