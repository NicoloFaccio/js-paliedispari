//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

const oddEven = prompt("Scegliere pari o dispari:").toLowerCase()
const userNumber = parseInt(prompt("Inserire un numero da 1 a 5:"))

console.log(oddEven, userNumber)

function numberRandom(max) {
    return Math.floor(Math.random() * max)-1;
}

let numberPc = numberRandom(5)

let somma = userNumber + numberPc

function oddOrEven (n){
    if (n % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

if (oddEven === oddOrEven(somma)){
    document.writeln("Ha vinto l'utente")
} else {
    document.writeln("Ha vinto il pc")
}



