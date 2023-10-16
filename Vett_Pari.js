function Vett_Pari(vett) {
    // Inizializza un nuovo array per contenere i numeri pari.
    let numeriPari = [];

    for (let i = 0; i < vett.length; i++) {
        if (vett[i] % 2 === 0) {
            numeriPari.push(vett[i]);
        }
    }

    // Restituisci l'array dei numeri pari.
    return numeriPari;
}

// Esempio di utilizzo della funzione con un array di esempio.
let mioArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeriPariArray = Vett_Pari(mioArray);
console.log(numeriPariArray);