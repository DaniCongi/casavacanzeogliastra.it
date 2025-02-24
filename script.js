let prodotto = 100
let iva = prodotto/100*22
let prodottoIvato = prodotto + iva

if (prodottoIvato>50) {
    console.log("Il prezzo è veramente eccessivo!")
} else {
    console.log("Il prezzo è accettabile!")
    
}

onclick = function() {
    alert("Ciao! Sono un alert!")
}

let x = 2
let y = 5

if (x==5 || y==4) {
    console.log("primo blocco")
} else if (y>10) {
    console.log("secondo blocco")
} else {
    console.log("terzo blocco")
}

let array = [1, 3, 6, 10, 7]

console.log(array[2])

function daniela(nome) {
    console.log("Ciao, sono Daniela e vivo a: " + nome)
}

daniela("Tertenia")
daniela("Cagliari")
daniela("New York")

//questo è un commento di javascript//
