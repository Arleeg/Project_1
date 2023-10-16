function invertiStringa(stringa) {
  return stringa.split('').reverse().join('');
}

const input = "ciao - o ciao mamma";
const stringaInvertita = invertiStringa(input);
console.log(stringaInvertita); // Stampa "ammam o- oaic"

console.log("Ciamo mamma ");