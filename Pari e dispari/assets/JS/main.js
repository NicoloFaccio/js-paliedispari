//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

const oddEven = prompt("Scegliere pari o dispari:")
const userNumber = parseInt(prompt("Inserire un numero da 1 a 5:"))

console.log(oddEven, userNumber)

function numberPc(random) {
    Math.floor(Math.random() * 5);
}

