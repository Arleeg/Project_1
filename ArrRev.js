function sommaArray(array) {
    return array.reduce((acc, valore) => acc + valore, 0);
  }
  
  const numeri = [1, 2, 3, 4, 5];
  const risultato = sommaArray(numeri);
  console.log(risultato); // Stampa la somma, che in questo caso è 15
  